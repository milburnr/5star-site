#!/usr/bin/env node
/**
 * Update all pages to use city-specific hero images
 */

const fs = require('fs');
const path = require('path');

const MANIFEST = JSON.parse(fs.readFileSync('/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/hero-manifest.json', 'utf8'));
const APP_DIR = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/app';

// Create city name -> hero URL mapping
const cityToHero = {};
for (const hero of MANIFEST) {
  const cityName = hero.baseName.toLowerCase();
  cityToHero[cityName] = hero.urls.jpg;  // Use jpg for compatibility
}

// Default fallback
const FALLBACK_HERO = 'https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/Roof-Replacement-in-AmarilloTX-1280w.jpg';

// City names to look for in page URLs
const CITY_NAMES = Object.keys(cityToHero);

// Additional city name mappings (aliases)
const CITY_ALIASES = {
  'texas-panhandle': 'amarillo',
  'west-texas': 'amarillo',
  'south-plains': 'lubbock',
  'permian-basin': 'odessa',
  'big-spring': 'midland',
  'andrews': 'midland',
  'monahans': 'odessa',
  'snyder': 'lubbock',
  'seminole': 'midland',
  'lamesa': 'lubbock',
  'post': 'lubbock',
  'slaton': 'lubbock',
  'bushland': 'amarillo',
  'friona': 'hereford',
  'muleshoe': 'earth',
  'littlefield': 'levelland',
  'sundown': 'levelland',
  'sudan': 'earth',
};

function getCityFromPageName(pageName) {
  const lower = pageName.toLowerCase();
  
  // Check direct city matches first
  for (const city of CITY_NAMES) {
    if (lower.includes(city)) {
      return city;
    }
  }
  
  // Check aliases
  for (const [alias, city] of Object.entries(CITY_ALIASES)) {
    if (lower.includes(alias)) {
      return city;
    }
  }
  
  // Default to amarillo
  return 'amarillo';
}

function updatePage(pagePath, pageDir) {
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Find city for this page
  const city = getCityFromPageName(pageDir);
  const heroUrl = cityToHero[city] || cityToHero['amarillo'];
  
  // Check if page has a hero background image
  const heroPattern = /backgroundImage:\s*['"]url\([^)]+\)['"]/g;
  
  if (!heroPattern.test(content)) {
    return { updated: false, reason: 'no hero pattern' };
  }
  
  // Replace the hero image URL
  const newContent = content.replace(
    /backgroundImage:\s*['"]url\(https:\/\/pub-797574ea9b1b4ccda73d4f6afb5d90d5\.r2\.dev\/images\/[^)]+\)['"]/g,
    `backgroundImage: 'url(${heroUrl})'`
  );
  
  if (newContent === content) {
    return { updated: false, reason: 'already correct or pattern mismatch' };
  }
  
  fs.writeFileSync(pagePath, newContent);
  return { updated: true, city, heroUrl };
}

function main() {
  console.log('Updating page hero images...\n');
  
  const dirs = fs.readdirSync(APP_DIR).filter(d => {
    const fullPath = path.join(APP_DIR, d);
    return fs.statSync(fullPath).isDirectory() && d !== 'api';
  });
  
  let updated = 0;
  let skipped = 0;
  const byCity = {};
  
  for (const dir of dirs) {
    const pagePath = path.join(APP_DIR, dir, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      continue;
    }
    
    const result = updatePage(pagePath, dir);
    
    if (result.updated) {
      updated++;
      byCity[result.city] = (byCity[result.city] || 0) + 1;
      console.log(`✓ ${dir} -> ${result.city}`);
    } else {
      skipped++;
    }
  }
  
  console.log(`\n=== COMPLETE ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log('\nBy city:');
  Object.entries(byCity).sort((a,b) => b[1] - a[1]).forEach(([city, count]) => {
    console.log(`  ${city}: ${count}`);
  });
}

main();
