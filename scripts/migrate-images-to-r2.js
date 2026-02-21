#!/usr/bin/env node
/**
 * Batch migrate all local image references to R2 CDN URLs.
 * Handles: inline <img> src, background-image url(), schema JSON-LD "image" properties.
 */

const fs = require('fs');
const path = require('path');

const R2_CDN = "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev";
const APP_DIR = path.join(__dirname, '..', 'app');

// === INLINE IMG SRC REPLACEMENTS ===
const inlineSrcMap = {
  '/images/SteelRoofing-1280w.jpg': `${R2_CDN}/images/metal/metal-amarillo-40-1280w.webp`,
  '/images/TPO1-1280w.jpg': `${R2_CDN}/images/TPO1-1280w.webp`,
  '/images/EPDM1-1280w.jpg': `${R2_CDN}/images/commercial/commercial-amarillo-5-1280w.jpg`,
  '/images/EPDM2-1280w.jpg': `${R2_CDN}/images/commercial/commercial-pampa-7-1280w.jpg`,
  '/images/TPO2-1280w.jpg': `${R2_CDN}/images/commercial/commercial-pampa-1-1280w.jpg`,
  '/images/TPO3.jpg': `${R2_CDN}/images/commercial/commercial-pampa-2-1280w.jpg`,
  '/images/Concretetile-1280w.jpg': `${R2_CDN}/images/completed/completed-amarillo-13-1280w.jpg`,
  '/images/EPDM3-1280w.jpg': `${R2_CDN}/images/commercial/commercial-amarillo-17-1280w.jpg`,
  '/images/PVC1-1280w.jpg': `${R2_CDN}/images/commercial/commercial-pampa-3-1280w.jpg`,
};

// === BACKGROUND IMAGE REPLACEMENTS ===
const bgMap = {
  '/images/cover-background-roofing-sunset-1024x683.jpg': `${R2_CDN}/images/heroes/hero-residential-1920w.webp`,
};

// === SCHEMA IMAGE REPLACEMENTS (5starroofingpros.com domain) ===
const schemaMap = {
  'https://5starroofingpros.com/images/5star-logo.png': `${R2_CDN}/images/completed/completed-amarillo-4-1280w.jpg`,
  'https://5starroofingpros.com/logo.png': `${R2_CDN}/images/completed/completed-amarillo-4-1280w.jpg`,
  'https://5starroofingpros.com/images/residential-roofing-5.jpeg': `${R2_CDN}/images/shingle/shingle-amarillo-12-1280w.jpg`,
  'https://5starroofingpros.com/images/CommercialRoofing.jpeg': `${R2_CDN}/images/commercial/commercial-pampa-4-1280w.jpg`,
  'https://5starroofingpros.com/images/ResidentialServices.jpeg': `${R2_CDN}/images/completed/completed-amarillo-7-1280w.jpg`,
  'https://5starroofingpros.com/images/hail-damage-3.jpg': `${R2_CDN}/images/hail-damage/hail-damage-amarillo-16-1280w.webp`,
  'https://5starroofingpros.com/images/TPO1.jpg': `${R2_CDN}/images/TPO1-1280w.webp`,
  'https://5starroofingpros.com/images/SteelRoofing.jpg': `${R2_CDN}/images/metal/metal-amarillo-40-1280w.webp`,
  'https://5starroofingpros.com/images/roof-repair-3.jpg': `${R2_CDN}/images/completed/completed-amarillo-18-1280w.jpg`,
  'https://5starroofingpros.com/images/roof-inspection-2.jpg': `${R2_CDN}/images/completed/completed-amarillo-3-1280w.jpg`,
  'https://5starroofingpros.com/images/asphalt-shingles-2.jpg': `${R2_CDN}/images/shingle/shingle-borger-8-1280w.jpg`,
  'https://5starroofingpros.com/images/5-star-with-letters-1.png': `${R2_CDN}/images/completed/completed-amarillo-4-1280w.jpg`,
  '/images/amarillo-roofing-company.jpg': `${R2_CDN}/images/completed/completed-amarillo-13-1280w.jpg`,
};

function getAllTsxFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllTsxFiles(fullPath));
    } else if (entry.name.endsWith('.tsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

let totalFiles = 0;
let modifiedFiles = 0;
let totalReplacements = 0;

const files = getAllTsxFiles(APP_DIR);
console.log(`Found ${files.length} .tsx files in app/`);

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  let fileReplacements = 0;

  // Replace inline img src
  for (const [local, r2] of Object.entries(inlineSrcMap)) {
    const escaped = local.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`src="${escaped}"`, 'g');
    const matches = content.match(re);
    if (matches) {
      content = content.replace(re, `src="${r2}"`);
      fileReplacements += matches.length;
    }
    // Also handle src={...} JSX patterns
    const reJsx = new RegExp(`src=\\{?"${escaped}"\\}?`, 'g');
    const matchesJsx = content.match(reJsx);
    if (matchesJsx && !matches) {
      content = content.replace(reJsx, `src="${r2}"`);
      fileReplacements += matchesJsx.length;
    }
  }

  // Replace background images in url()
  for (const [local, r2] of Object.entries(bgMap)) {
    const escaped = local.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`url\\(${escaped}\\)`, 'g');
    const matches = content.match(re);
    if (matches) {
      content = content.replace(re, `url(${r2})`);
      fileReplacements += matches.length;
    }
  }

  // Replace schema image URLs
  for (const [prod, r2] of Object.entries(schemaMap)) {
    if (content.includes(prod)) {
      const escaped = prod.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(escaped, 'g');
      const matches = content.match(re);
      if (matches) {
        content = content.replace(re, r2);
        fileReplacements += matches.length;
      }
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    const rel = path.relative(path.join(__dirname, '..'), filePath);
    console.log(`  Modified: ${rel} (${fileReplacements} replacements)`);
    modifiedFiles++;
    totalReplacements += fileReplacements;
  }
  totalFiles++;
}

console.log(`\nDone: ${modifiedFiles} files modified, ${totalReplacements} total replacements across ${totalFiles} files scanned.`);
