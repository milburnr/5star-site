#!/usr/bin/env node
/**
 * Fast landscape image filter - identifies hero candidates
 */

const fs = require('fs');
const path = require('path');

// Use sharp for fast dimension reading
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('Installing sharp...');
  require('child_process').execSync('npm install sharp', { stdio: 'inherit' });
  sharp = require('sharp');
}

const PHOTOS_DIR = '/Users/bo/Photos/5-star';
const OUTPUT_FILE = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/landscape-candidates.json';

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
        const files = fs.readdirSync(entryPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
        for (const file of files) {
          images.push({ path: path.join(entryPath, file), city, street: entry, filename: file });
        }
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry)) {
        images.push({ path: entryPath, city, street: '', filename: entry });
      }
    }
  }
  return images;
}

async function main() {
  console.log('Finding all images...');
  const allImages = await getAllImages();
  console.log(`Found ${allImages.length} images`);

  const landscapes = [];
  let count = 0;

  for (const img of allImages) {
    count++;
    if (count % 500 === 0) {
      console.log(`Checked ${count}/${allImages.length}...`);
    }

    try {
      const metadata = await sharp(img.path).metadata();
      const { width, height } = metadata;
      
      // Landscape = width > height, and decent size (at least 800px wide)
      if (width > height && width >= 800) {
        landscapes.push({
          ...img,
          width,
          height,
          aspectRatio: (width / height).toFixed(2)
        });
      }
    } catch (err) {
      // Skip unreadable images
    }
  }

  console.log(`\nFound ${landscapes.length} landscape images (${(landscapes.length/allImages.length*100).toFixed(1)}%)`);

  // Group by city
  const byCity = {};
  landscapes.forEach(img => {
    byCity[img.city] = byCity[img.city] || [];
    byCity[img.city].push(img);
  });

  console.log('\nBy city:');
  Object.entries(byCity).sort((a,b) => b[1].length - a[1].length).forEach(([city, imgs]) => {
    console.log(`  ${city}: ${imgs.length}`);
  });

  // Save results
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(landscapes, null, 2));
  console.log(`\nSaved to ${OUTPUT_FILE}`);
}

main().catch(console.error);
