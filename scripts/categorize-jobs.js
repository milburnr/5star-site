#!/usr/bin/env node
/**
 * Categorize 5-star roofing jobs by analyzing one sample image per job
 * Categories: roof type (shingle/metal/flat/tpo), building type (residential/commercial)
 */

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const PHOTOS_DIR = '/Users/bo/Photos/5-star';
const OUTPUT_FILE = path.join(__dirname, '..', 'job-categories.json');
const PROGRESS_FILE = path.join(__dirname, '..', 'categorize-progress.json');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getJobFolders() {
  const cities = fs.readdirSync(PHOTOS_DIR).filter(f => {
    const fullPath = path.join(PHOTOS_DIR, f);
    return fs.statSync(fullPath).isDirectory() && 
           f.endsWith('-tx') && 
           !f.includes('venv');
  });
  
  const jobs = [];
  for (const city of cities) {
    const cityPath = path.join(PHOTOS_DIR, city);
    const streets = fs.readdirSync(cityPath).filter(f => {
      const fullPath = path.join(cityPath, f);
      return fs.statSync(fullPath).isDirectory();
    });
    
    for (const street of streets) {
      const streetPath = path.join(cityPath, street);
      const images = fs.readdirSync(streetPath).filter(f => 
        f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png')
      );
      
      if (images.length > 0) {
        // Prefer "after" images for cleaner roof visibility, fall back to any
        const afterImages = images.filter(f => f.includes('-after-'));
        const sampleImage = afterImages.length > 0 ? afterImages[0] : images[0];
        
        jobs.push({
          city,
          street,
          sampleImage: path.join(streetPath, sampleImage),
          imageCount: images.length,
          hasBeforeAfter: {
            before: images.filter(f => f.includes('-before-')).length,
            after: images.filter(f => f.includes('-after-')).length
          }
        });
      }
    }
  }
  
  return jobs;
}

async function analyzeImage(imagePath) {
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString('base64');
  const mimeType = imagePath.endsWith('.webp') ? 'image/webp' : 
                   imagePath.endsWith('.png') ? 'image/png' : 'image/jpeg';
  
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Analyze this roofing job photo. Respond in JSON format only:
{
  "roofType": "shingle" | "metal" | "flat" | "tpo" | "tile" | "unknown",
  "buildingType": "residential" | "commercial" | "unknown",
  "roofColor": "string describing primary color",
  "condition": "new" | "damaged" | "repair-in-progress" | "completed",
  "features": ["array of visible features like gutters, skylights, chimney, etc"],
  "confidence": 0-100
}

Be concise. Just the JSON.`
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:${mimeType};base64,${base64Image}`,
              detail: 'low'  // Use low detail to save tokens
            }
          }
        ]
      }
    ],
    max_tokens: 200
  });
  
  try {
    const content = response.choices[0].message.content.trim();
    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.error('Failed to parse response:', response.choices[0].message.content);
  }
  
  return { roofType: 'unknown', buildingType: 'unknown', error: 'parse_failed' };
}

async function main() {
  console.log('Finding job folders...');
  const jobs = await getJobFolders();
  console.log(`Found ${jobs.length} jobs to categorize`);
  
  // Load progress if exists
  let progress = { completed: [], results: {} };
  if (fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    console.log(`Resuming from ${progress.completed.length} completed jobs`);
  }
  
  const results = progress.results;
  let analyzed = 0;
  
  for (const job of jobs) {
    const jobKey = `${job.city}/${job.street}`;
    
    if (progress.completed.includes(jobKey)) {
      continue;  // Already done
    }
    
    console.log(`[${analyzed + 1}/${jobs.length - progress.completed.length}] Analyzing ${jobKey}...`);
    
    try {
      const analysis = await analyzeImage(job.sampleImage);
      
      results[jobKey] = {
        ...job,
        analysis,
        analyzedAt: new Date().toISOString()
      };
      
      progress.completed.push(jobKey);
      analyzed++;
      
      // Save progress every 5 images
      if (analyzed % 5 === 0) {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
        console.log(`  Progress saved (${progress.completed.length} complete)`);
      }
      
      // Small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 200));
      
    } catch (error) {
      console.error(`  Error analyzing ${jobKey}:`, error.message);
      results[jobKey] = {
        ...job,
        analysis: { error: error.message },
        analyzedAt: new Date().toISOString()
      };
      progress.completed.push(jobKey);
    }
  }
  
  // Save final results
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
  
  // Build summary
  const summary = {
    totalJobs: jobs.length,
    totalImages: jobs.reduce((sum, j) => sum + j.imageCount, 0),
    byRoofType: {},
    byBuildingType: {},
    analyzedAt: new Date().toISOString(),
    jobs: results
  };
  
  // Count by type
  for (const [key, job] of Object.entries(results)) {
    const roofType = job.analysis?.roofType || 'unknown';
    const buildingType = job.analysis?.buildingType || 'unknown';
    
    summary.byRoofType[roofType] = (summary.byRoofType[roofType] || 0) + 1;
    summary.byBuildingType[buildingType] = (summary.byBuildingType[buildingType] || 0) + 1;
  }
  
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(summary, null, 2));
  console.log(`\nDone! Results saved to ${OUTPUT_FILE}`);
  console.log('\nSummary:');
  console.log('  By roof type:', summary.byRoofType);
  console.log('  By building type:', summary.byBuildingType);
}

main().catch(console.error);
