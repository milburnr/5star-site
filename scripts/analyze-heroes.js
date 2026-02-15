#!/usr/bin/env node
/**
 * AI analysis of hero candidates only (500 images)
 */

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const INPUT = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/hero-candidates.json';
const OUTPUT = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/hero-analysis.json';

const client = new OpenAI();

const PROMPT = `Analyze this roofing photo for use as a website hero image. Return ONLY valid JSON:

{
  "isHeroQuality": true/false (clean exterior shot, good lighting, no clutter, would look professional as page header),
  "contentType": "hail-damage" | "storm-damage" | "work-in-progress" | "completed-roof" | "before-condition" | "exterior-wide" | "other",
  "roofType": "shingle" | "tpo" | "flat" | "metal" | "tile" | "mixed" | "unknown",
  "quality": 1-10 (10=professional),
  "heroFor": array of page types this suits: ["hail-damage", "roof-repair", "roof-replacement", "commercial", "residential", "storm-damage", "general"] or [],
  "description": "one sentence"
}`;

async function analyze(imagePath) {
  const data = fs.readFileSync(imagePath);
  const ext = path.extname(imagePath).toLowerCase();
  const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';

  try {
    const resp = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: PROMPT },
          { type: 'image_url', image_url: { url: `data:${mime};base64,${data.toString('base64')}` } }
        ]
      }]
    });
    const text = resp.choices[0].message.content;
    const match = text.match(/\{[\s\S]*\}/);
    return match ? JSON.parse(match[0]) : null;
  } catch (e) {
    console.error(`\nError: ${e.message}`);
    return null;
  }
}

async function main() {
  const candidates = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  console.log(`Analyzing ${candidates.length} hero candidates...`);

  const results = [];
  let count = 0;
  const start = Date.now();

  for (const img of candidates) {
    count++;
    const elapsed = ((Date.now() - start) / 1000 / 60).toFixed(1);
    const remaining = ((candidates.length - count) * (Date.now() - start) / count / 1000 / 60).toFixed(1);
    process.stdout.write(`\r[${count}/${candidates.length}] ${elapsed}m elapsed, ~${remaining}m left - ${img.city}`);

    const analysis = await analyze(img.path);
    if (analysis) {
      results.push({ ...img, analysis });
    }

    await new Promise(r => setTimeout(r, 100));
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(results, null, 2));

  const heroes = results.filter(r => r.analysis?.isHeroQuality);
  console.log(`\n\nDone! ${heroes.length} hero-quality images found out of ${results.length}`);

  // Breakdown
  const byType = {};
  heroes.forEach(h => {
    const t = h.analysis.contentType;
    byType[t] = (byType[t] || 0) + 1;
  });
  console.log('\nHero images by type:');
  Object.entries(byType).sort((a,b) => b[1]-a[1]).forEach(([t,c]) => console.log(`  ${t}: ${c}`));

  console.log(`\nSaved to ${OUTPUT}`);
}

main();
