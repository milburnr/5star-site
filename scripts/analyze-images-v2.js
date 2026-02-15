#!/usr/bin/env node
/**
 * Image Analysis V2 - Using OpenAI GPT-4o-mini (cheap & fast)
 */

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const PHOTOS_DIR = '/Users/bo/Photos/5-star';
const OUTPUT_FILE = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/5star-image-analysis-v2.json';
const PROGRESS_FILE = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/5star-analysis-v2-progress.json';

const client = new OpenAI();

const ANALYSIS_PROMPT = `Analyze this roofing photo. Return ONLY valid JSON:

{
  "orientation": "landscape" or "portrait",
  "isHeroQuality": true/false (clean wide exterior shot, good lighting, no obstructions - suitable as page hero),
  "contentType": one of: "hail-damage", "storm-damage", "work-in-progress", "completed-roof", "damage-closeup", "before-condition", "materials", "crew", "exterior-wide", "interior", "other",
  "roofType": "shingle", "tpo", "flat", "metal", "tile", or "unknown",
  "features": ["fascia", "gutter", "vent", "ridge", "flashing", "skylight", "chimney", "hvac"] (only what's visible),
  "quality": 1-10 (10=professional, 1=unusable),
  "heroFor": ["hail-damage", "roof-repair", "residential", etc] or [] if not hero quality,
  "description": "one sentence description"
}`;

async function analyzeImage(imagePath) {
  const imageData = fs.readFileSync(imagePath);
  const base64 = imageData.toString('base64');
  const ext = path.extname(imagePath).toLowerCase();
  const mimeType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';

  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 500,
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: ANALYSIS_PROMPT },
          { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64}` } }
        ]
      }]
    });

    const text = response.choices[0].message.content;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('No JSON in response');
  } catch (err) {
    console.error(`\nError analyzing ${path.basename(imagePath)}: ${err.message}`);
    return null;
  }
}

async function getAllImages() {
  const images = [];
  const cities = fs.readdirSync(PHOTOS_DIR).filter(f => 
    fs.statSync(path.join(PHOTOS_DIR, f)).isDirectory() && f !== 'venv'
  );

  for (const city of cities) {
    const cityPath = path.join(PHOTOS_DIR, city);
    const entries = fs.readdirSync(cityPath);

    for (const entry of entries) {
      const entryPath = path.join(cityPath, entry);
      if (fs.statSync(entryPath).isDirectory()) {
        // It's a street folder
        const files = fs.readdirSync(entryPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
        for (const file of files) {
          images.push({ path: path.join(entryPath, file), city, street: entry, filename: file });
        }
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry)) {
        // Direct image in city folder
        images.push({ path: entryPath, city, street: '', filename: entry });
      }
    }
  }
  return images;
}

async function main() {
  console.log('Loading images...');
  const allImages = await getAllImages();
  console.log(`Found ${allImages.length} images`);

  // Load progress
  let results = [];
  let analyzed = new Set();
  if (fs.existsSync(PROGRESS_FILE)) {
    const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    results = progress.results || [];
    analyzed = new Set(results.map(r => r.path));
    console.log(`Resuming from ${results.length} analyzed`);
  }

  const remaining = allImages.filter(img => !analyzed.has(img.path));
  console.log(`${remaining.length} remaining\n`);

  let count = 0;
  let errors = 0;
  const startTime = Date.now();

  for (const img of remaining) {
    count++;
    const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    const rate = count / (elapsed || 1) * 60;
    const eta = ((remaining.length - count) / rate).toFixed(0);
    
    process.stdout.write(`\r[${count}/${remaining.length}] ${img.filename.slice(0,40).padEnd(40)} | ${elapsed}m elapsed, ~${eta}m remaining`);
    
    const analysis = await analyzeImage(img.path);
    if (analysis) {
      results.push({ ...img, analysis, analyzedAt: new Date().toISOString() });
    } else {
      errors++;
    }

    // Save every 100 images
    if (count % 100 === 0) {
      fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ results }, null, 2));
      console.log(`\n  Saved (${results.length} done, ${errors} errors)`);
    }

    // Small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 100));
  }

  // Final save
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ results }, null, 2));
  
  console.log(`\n\n=== COMPLETE ===`);
  console.log(`Total: ${results.length} analyzed, ${errors} errors`);

  // Summary stats
  const heroes = results.filter(r => r.analysis?.isHeroQuality);
  console.log(`Hero quality: ${heroes.length}`);
  
  const byType = {};
  results.forEach(r => {
    const t = r.analysis?.contentType || 'unknown';
    byType[t] = (byType[t] || 0) + 1;
  });
  console.log('\nBy content type:');
  Object.entries(byType).sort((a,b) => b[1]-a[1]).forEach(([t,c]) => console.log(`  ${t}: ${c}`));
}

main().catch(console.error);
