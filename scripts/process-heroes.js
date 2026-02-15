#!/usr/bin/env node
/**
 * Process and upload hero images to R2
 * - Resize to 1280w (good for heroes)
 * - Generate jpg, webp, avif
 * - Upload to R2 /images/heroes/
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

const HEROES = JSON.parse(fs.readFileSync('/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/best-heroes.json', 'utf8'));
const OUTPUT_DIR = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/processed-heroes';
const R2_BUCKET = '5star-images';

async function processAndUpload() {
  // Ensure output dir exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const uploaded = [];

  for (const [city, hero] of Object.entries(HEROES)) {
    console.log(`\nProcessing ${city}...`);
    
    const baseName = city.replace('-tx', '');
    const heroName = `${baseName}-hero-1`;

    try {
      // Resize to 1280px width
      const resized = await sharp(hero.path)
        .resize(1280, null, { fit: 'inside' })
        .toBuffer();

      // Generate formats
      const formats = ['jpg', 'webp', 'avif'];
      
      for (const fmt of formats) {
        const outPath = path.join(OUTPUT_DIR, `${heroName}.${fmt}`);
        
        if (fmt === 'jpg') {
          await sharp(resized).jpeg({ quality: 85 }).toFile(outPath);
        } else if (fmt === 'webp') {
          await sharp(resized).webp({ quality: 85 }).toFile(outPath);
        } else if (fmt === 'avif') {
          await sharp(resized).avif({ quality: 70 }).toFile(outPath);
        }

        // Upload to R2
        const r2Path = `images/heroes/${heroName}.${fmt}`;
        console.log(`  Uploading ${r2Path}...`);
        
        try {
          execSync(`wrangler r2 object put "${R2_BUCKET}/${r2Path}" --file="${outPath}" --remote`, { 
            stdio: 'pipe',
            timeout: 30000
          });
        } catch (e) {
          console.error(`  ERROR uploading ${r2Path}: ${e.message}`);
        }
      }

      uploaded.push({
        city,
        baseName,
        heroName,
        original: hero.path,
        r2Path: `images/heroes/${heroName}`,
        urls: {
          jpg: `https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/${heroName}.jpg`,
          webp: `https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/${heroName}.webp`,
          avif: `https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/${heroName}.avif`
        }
      });

      console.log(`  ✓ ${heroName} uploaded`);

    } catch (err) {
      console.error(`  ERROR processing ${city}: ${err.message}`);
    }
  }

  // Save manifest
  const manifestPath = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/hero-manifest.json';
  fs.writeFileSync(manifestPath, JSON.stringify(uploaded, null, 2));
  console.log(`\n=== COMPLETE ===`);
  console.log(`Uploaded ${uploaded.length} heroes`);
  console.log(`Manifest: ${manifestPath}`);

  // Verify all URLs
  console.log('\nVerifying URLs...');
  for (const h of uploaded) {
    const url = h.urls.webp;
    try {
      const result = execSync(`curl -sI "${url}" | head -1`, { encoding: 'utf8' });
      if (result.includes('200')) {
        console.log(`  ✓ ${h.heroName}`);
      } else {
        console.log(`  ✗ ${h.heroName} - ${result.trim()}`);
      }
    } catch (e) {
      console.log(`  ✗ ${h.heroName} - verification failed`);
    }
  }
}

processAndUpload();
