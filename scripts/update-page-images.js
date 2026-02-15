#!/usr/bin/env node
/**
 * Update pages to use categorized R2 images
 * Matches page type to appropriate image category
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..');
const APP_DIR = path.join(SITE_DIR, 'app');
const MANIFEST = require(path.join(SITE_DIR, 'r2-image-manifest.json'));

const R2_BASE = 'https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev';

// Build image pools by category (webp 1280w preferred)
function buildImagePools() {
  const pools = {};
  
  for (const [category, images] of Object.entries(MANIFEST)) {
    // Filter for 1280w webp images
    pools[category] = images
      .filter(img => img.format === 'webp' && img.width === 1280)
      .map(img => ({
        url: img.url,
        city: img.city,
        roofType: img.roofType
      }));
  }
  
  return pools;
}

// Determine which image category a page should use
function getPageCategory(pageName) {
  const name = pageName.toLowerCase();
  
  if (name.includes('hail-damage') || name.includes('storm-damage') || name.includes('wind-damage')) {
    return 'hail-damage';
  }
  if (name.includes('metal-roof')) {
    return 'metal';
  }
  if (name.includes('tpo-roof') || name.includes('flat-roof') || name.includes('commercial-roof')) {
    return 'commercial';
  }
  if (name.includes('shingle') || name.includes('asphalt')) {
    return 'shingle';
  }
  if (name.includes('gallery') || name.includes('completed') || name.includes('-after')) {
    return 'completed';
  }
  // Default based on page type
  if (name.includes('residential')) {
    return 'shingle';
  }
  if (name.includes('repair') || name.includes('replacement') || name.includes('inspection')) {
    return 'completed';
  }
  
  return 'completed'; // default
}

// Extract city from page name
function getCityFromPage(pageName) {
  const cities = [
    'amarillo', 'lubbock', 'midland', 'odessa', 'borger', 'canyon', 'pampa',
    'perryton', 'dumas', 'hereford', 'plainview', 'levelland', 'snyder',
    'big-spring', 'monahans', 'andrews', 'san-angelo', 'wichita-falls',
    'dalhart', 'stinnett', 'memphis', 'wolfforth', 'morton', 'channing'
  ];
  
  const name = pageName.toLowerCase();
  for (const city of cities) {
    if (name.includes(city)) {
      return city;
    }
  }
  return null;
}

// Get best image for a page
function getImageForPage(pageName, pools) {
  const category = getPageCategory(pageName);
  const city = getCityFromPage(pageName);
  const pool = pools[category] || pools['completed'];
  
  if (!pool || pool.length === 0) return null;
  
  // Try to find city-specific image first
  if (city) {
    const cityImages = pool.filter(img => img.city === city);
    if (cityImages.length > 0) {
      return cityImages[Math.floor(Math.random() * cityImages.length)];
    }
  }
  
  // Fall back to random from category
  return pool[Math.floor(Math.random() * pool.length)];
}

// Update a page file
function updatePage(pagePath, pools) {
  const pageName = path.basename(path.dirname(pagePath));
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Skip if no backgroundImage or already using R2 category images
  if (!content.includes('backgroundImage')) {
    return { updated: false, reason: 'no-hero' };
  }
  
  const image = getImageForPage(pageName, pools);
  if (!image) {
    return { updated: false, reason: 'no-image' };
  }
  
  // Replace backgroundImage URLs
  let newContent = content;
  
  // Match backgroundImage: 'url(...)' or backgroundImage: "url(...)"
  const bgPattern = /backgroundImage:\s*['"]url\([^)]+\)['"]/g;
  
  if (bgPattern.test(content)) {
    newContent = content.replace(bgPattern, `backgroundImage: 'url(${image.url})'`);
  }
  
  if (newContent !== content) {
    fs.writeFileSync(pagePath, newContent);
    return { updated: true, image: image.url, category: getPageCategory(pageName) };
  }
  
  return { updated: false, reason: 'no-change' };
}

function main() {
  console.log('Building image pools...');
  const pools = buildImagePools();
  
  for (const [cat, imgs] of Object.entries(pools)) {
    console.log(`  ${cat}: ${imgs.length} images`);
  }
  
  console.log('\nUpdating pages...');
  
  const pages = fs.readdirSync(APP_DIR)
    .filter(f => {
      const stat = fs.statSync(path.join(APP_DIR, f));
      return stat.isDirectory() && !f.startsWith('_') && !f.startsWith('.');
    });
  
  let updated = 0;
  let skipped = 0;
  const byCategory = {};
  
  for (const page of pages) {
    const pagePath = path.join(APP_DIR, page, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    
    const result = updatePage(pagePath, pools);
    
    if (result.updated) {
      updated++;
      byCategory[result.category] = (byCategory[result.category] || 0) + 1;
      console.log(`  ✓ ${page} → ${result.category}`);
    } else {
      skipped++;
    }
  }
  
  console.log(`\nDone!`);
  console.log(`  Updated: ${updated} pages`);
  console.log(`  Skipped: ${skipped} pages`);
  console.log('\n  By category:');
  for (const [cat, count] of Object.entries(byCategory)) {
    console.log(`    ${cat}: ${count}`);
  }
}

main();
