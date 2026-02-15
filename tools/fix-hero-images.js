#!/usr/bin/env node
/**
 * Fix hero images on pages still using old generic hail-damage-3-1280w.jpg
 * Replace with city-specific heroes where available, or Amarillo as fallback
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing';
const R2_BASE = 'https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes';

// Map of cities with uploaded hero images
const CITY_HEROES = {
  'amarillo': 'amarillo-hero-1.webp',
  'borger': 'borger-hero-1.webp',
  'canyon': 'canyon-hero-1.webp',
  'dumas': 'dumas-hero-1.webp',
  'levelland': 'levelland-hero-1.webp',
  'lubbock': 'lubbock-hero-1.webp',
  'midland': 'midland-hero-1.webp',
  'odessa': 'odessa-hero-1.webp',
  'pampa': 'pampa-hero-1.webp',
  'perryton': 'perryton-hero-1.webp',
  'plainview': 'plainview-hero-1.webp',
  'hereford': 'hereford-hero-1.webp',
  'dalhart': 'dalhart-hero-1.webp',
};

// Fallback for cities without specific heroes
const FALLBACK_HERO = 'amarillo-hero-1.webp';

// Extract city from page path
function extractCity(pagePath) {
  const folder = path.basename(path.dirname(pagePath));
  
  // Try to extract city name from folder
  const patterns = [
    /^([a-z-]+)-tx-roofing$/,           // bushland-tx-roofing
    /^([a-z-]+)-texas-roofing$/,        // X-texas-roofing
    /^roofing-([a-z-]+)-tx$/,           // roofing-amarillo-tx
    /^roofing-services-([a-z-]+)-tx$/,  // roofing-services-lubbock-tx
    /^hail-damage-repair-([a-z-]+)$/,   // hail-damage-repair-midland
    /^hail-damage-repair-([a-z-]+)-tx$/,// hail-damage-repair-midland-tx
    /^emergency-roof-repair-([a-z-]+)$/,// emergency-roof-repair-andrews
    /^roof-repair-([a-z-]+)$/,          // roof-repair-andrews
    /^storm-damage-repair-([a-z-]+)$/,  // storm-damage-repair-andrews
    /^wind-damage-repair-([a-z-]+)$/,   // wind-damage-repair-andrews
    /^commercial-roofing-([a-z-]+)-tx$/,// commercial-roofing-amarillo-tx
    /^([a-z-]+)-roofs?-in-amarillo$/,   // hail-damage-roofs-in-amarillo
    /^[a-z-]+-in-amarillo$/,            // X-in-amarillo (Amarillo pages)
    /^[a-z-]+-amarillo$/,               // X-amarillo
  ];
  
  for (const pattern of patterns) {
    const match = folder.match(pattern);
    if (match && match[1]) {
      // Normalize city name
      return match[1].replace(/-tx$/, '').replace(/-texas$/, '');
    }
  }
  
  // Check if it's an amarillo page by name
  if (folder.includes('amarillo')) return 'amarillo';
  
  return null;
}

function getHeroUrl(city) {
  if (city && CITY_HEROES[city]) {
    return `${R2_BASE}/${CITY_HEROES[city]}`;
  }
  return `${R2_BASE}/${FALLBACK_HERO}`;
}

function fixPage(pagePath) {
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Check if has old generic hero
  if (!content.includes('hail-damage-3-1280w.jpg')) {
    return { skipped: true, reason: 'No old hero found' };
  }
  
  const city = extractCity(pagePath);
  const newHeroUrl = getHeroUrl(city);
  
  // Replace hero background image
  let newContent = content.replace(
    /backgroundImage:\s*['"]url\(https:\/\/pub-797574ea9b1b4ccda73d4f6afb5d90d5\.r2\.dev\/images\/hail-damage-3-1280w\.jpg\)['"]/g,
    `backgroundImage: 'url(${newHeroUrl})'`
  );
  
  // Also fix schema.org image references (use the site URL format)
  newContent = newContent.replace(
    /"image":\s*"https:\/\/5starroofingpros\.com\/images\/hail-damage-3\.jpg"/g,
    `"image": "${newHeroUrl}"`
  );
  
  // Fix any <img> src references to hail-damage-3
  newContent = newContent.replace(
    /src="https:\/\/pub-797574ea9b1b4ccda73d4f6afb5d90d5\.r2\.dev\/images\/hail-damage-3-1280w\.jpg"/g,
    `src="${newHeroUrl}"`
  );
  
  if (newContent !== content) {
    fs.writeFileSync(pagePath, newContent);
    return { updated: true, city, hero: newHeroUrl };
  }
  
  return { skipped: true, reason: 'No changes made' };
}

// Main
const appDir = path.join(SITE_DIR, 'app');
const results = { updated: [], skipped: [], errors: [] };

// Find all page.tsx files
function findPages(dir) {
  const pages = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      pages.push(...findPages(fullPath));
    } else if (item.name === 'page.tsx') {
      pages.push(fullPath);
    }
  }
  return pages;
}

const pages = findPages(appDir);
console.log(`Found ${pages.length} pages to check\n`);

for (const pagePath of pages) {
  try {
    const result = fixPage(pagePath);
    const folder = path.basename(path.dirname(pagePath));
    
    if (result.updated) {
      results.updated.push({ folder, city: result.city, hero: result.hero });
      console.log(`✅ ${folder} → ${result.city || 'fallback'}`);
    } else if (result.skipped) {
      results.skipped.push({ folder, reason: result.reason });
    }
  } catch (err) {
    results.errors.push({ page: pagePath, error: err.message });
    console.log(`❌ ${pagePath}: ${err.message}`);
  }
}

console.log(`\n=== Summary ===`);
console.log(`Updated: ${results.updated.length}`);
console.log(`Skipped: ${results.skipped.length}`);
console.log(`Errors: ${results.errors.length}`);

if (results.updated.length > 0) {
  console.log(`\nUpdated pages:`);
  results.updated.forEach(r => console.log(`  - ${r.folder} → ${r.hero}`));
}
