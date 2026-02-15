#!/usr/bin/env node
/**
 * Select BEST hero image per city - largest landscape image
 * No AI needed since images were manually cleaned
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PHOTOS_DIR = '/Users/bo/Photos/5-star';
const OUTPUT = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/best-heroes.json';

async function main() {
  const cities = fs.readdirSync(PHOTOS_DIR).filter(f => 
    fs.statSync(path.join(PHOTOS_DIR, f)).isDirectory() && f !== 'venv'
  );

  console.log(`Processing ${cities.length} cities...`);
  const heroes = {};

  for (const city of cities) {
    const cityPath = path.join(PHOTOS_DIR, city);
    const candidates = [];

    // Get all images in city
    const walkDir = (dir) => {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          walkDir(fullPath);
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry)) {
          candidates.push(fullPath);
        }
      }
    };
    walkDir(cityPath);

    // Filter landscapes and find best
    let bestImg = null;
    let bestSize = 0;

    for (const imgPath of candidates) {
      try {
        const meta = await sharp(imgPath).metadata();
        if (meta.width > meta.height && meta.width >= 1000) {
          const size = fs.statSync(imgPath).size;
          // Prefer "after" images for completed look
          const bonus = imgPath.toLowerCase().includes('after') ? size * 0.2 : 0;
          if (size + bonus > bestSize) {
            bestSize = size + bonus;
            bestImg = {
              path: imgPath,
              city: city,
              width: meta.width,
              height: meta.height,
              size: size,
              filename: path.basename(imgPath)
            };
          }
        }
      } catch (e) {}
    }

    if (bestImg) {
      heroes[city] = bestImg;
      console.log(`${city}: ${bestImg.filename} (${bestImg.width}x${bestImg.height})`);
    } else {
      console.log(`${city}: NO LANDSCAPE IMAGE FOUND`);
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(heroes, null, 2));
  console.log(`\nSaved ${Object.keys(heroes).length} heroes to ${OUTPUT}`);
}

main();
