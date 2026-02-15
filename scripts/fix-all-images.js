#!/usr/bin/env node
/**
 * Fix all images across the 5star site
 * - Replace duplicates with R2 CDN images
 * - Assign variety based on page type
 * - Ensure no image is used more than 2-3 times
 */

const fs = require('fs');
const path = require('path');

const R2_CDN = "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev";

// Load the R2 image manifest
const manifestPath = path.join(__dirname, '..', 'r2-image-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Extract 1280w jpg images from each category
function getImages(category) {
  return (manifest[category] || [])
    .filter(img => img.width === 1280 && img.format === 'jpg')
    .map(img => img.url);
}

const commercialImages = getImages('commercial');
const shingleImages = getImages('shingle');
const hailImages = getImages('hail-damage');
const completedImages = getImages('completed');
const metalImages = getImages('metal');

console.log(`Loaded images: commercial=${commercialImages.length}, shingle=${shingleImages.length}, hail=${hailImages.length}, completed=${completedImages.length}, metal=${metalImages.length}`);

// Counters for rotating through images
let commercialIdx = 0;
let shingleIdx = 0;
let hailIdx = 0;
let completedIdx = 0;
let metalIdx = 0;

function getNextImage(type) {
  switch(type) {
    case 'commercial':
      return commercialImages[commercialIdx++ % commercialImages.length];
    case 'shingle':
    case 'residential':
      return shingleImages[shingleIdx++ % shingleImages.length];
    case 'hail':
    case 'storm':
    case 'wind':
    case 'emergency':
      return hailImages[hailIdx++ % hailImages.length];
    case 'metal':
      return metalImages.length > 0 ? metalImages[metalIdx++ % metalImages.length] : shingleImages[shingleIdx++ % shingleImages.length];
    default:
      return completedImages.length > 0 ? completedImages[completedIdx++ % completedImages.length] : shingleImages[shingleIdx++ % shingleImages.length];
  }
}

// Determine page type from path
function getPageType(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.includes('commercial') || lower.includes('tpo') || lower.includes('pvc') || lower.includes('flat-roof') || lower.includes('epdm') || lower.includes('industrial')) {
    return 'commercial';
  }
  if (lower.includes('hail')) return 'hail';
  if (lower.includes('storm')) return 'storm';
  if (lower.includes('wind')) return 'wind';
  if (lower.includes('emergency')) return 'emergency';
  if (lower.includes('metal')) return 'metal';
  if (lower.includes('residential') || lower.includes('shingle') || lower.includes('asphalt')) return 'residential';
  return 'general';
}

// Images to replace (old path -> will be replaced with R2 CDN)
const imagesToReplace = [
  '/images/hail-damage-3.jpg',
  '/images/storm-damage-roof-repair.jpg',
  '/images/ResidentialServices.jpeg',
  '/images/ResidentialServices.jpg',
  '/images/TPO1.jpg',
  '/images/TPO2.jpg',
  '/images/TPO3.jpg',
  '/images/asphaltshingles.jpg',
  '/images/roof-inspection-texas.jpg',
  '/images/SteelRoofing.jpg',
  '/images/CommercialRoofing.jpeg',
  '/images/EPDM2.jpg',
  '/images/commercial-roof-1024x575-panorama.png',
  '/images/insurance-claims-roofing.jpg',
  '/images/danage.jpg',
  '/images/Constructionhome.jpg',
  '/images/Alluminumroofing.jpg',
  '/images/Aerialview.jpg',
  '/images/cover-background-roofing-sunset-1024x683.jpg',
  '/images/roofing-services-amarillo.jpg',
  '/images/roof-replacement-amarillo.jpg',
  '/images/residential-home-roofing.jpg',
  '/images/hail-damage-roofs-amarillo.jpg',
  '/images/damaged-roof-replacement-amarillo.jpg',
  '/images/commercial-roofing-2.jpg',
  '/images/commercial-roof-repair-amarillo.jpg',
  '/images/amarillo-roofing-company.jpg',
  '/images/amarillo-climate-roofing.jpg',
];

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const pageType = getPageType(filePath);
  
  // Track replacements in this file
  const replacements = [];
  
  // Find all img src attributes
  const imgPattern = /src="(\/images\/[^"]+)"/g;
  let match;
  
  while ((match = imgPattern.exec(content)) !== null) {
    const oldSrc = match[1];
    // Check if this is one we should replace
    if (imagesToReplace.some(img => oldSrc.includes(img.replace('/images/', '')))) {
      const newSrc = getNextImage(pageType);
      if (newSrc) {
        replacements.push({ old: oldSrc, new: newSrc });
      }
    }
  }
  
  // Apply replacements
  for (const r of replacements) {
    content = content.replace(`src="${r.old}"`, `src="${r.new}"`);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ ${path.basename(path.dirname(filePath))}: ${replacements.length} images replaced`);
    return replacements.length;
  }
  
  return 0;
}

// Find all page.tsx files
function findPages(dir) {
  const pages = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      pages.push(...findPages(fullPath));
    } else if (item.name === 'page.tsx') {
      pages.push(fullPath);
    }
  }
  
  return pages;
}

// Main
const appDir = path.join(__dirname, '..', 'app');
const pages = findPages(appDir);

console.log(`\nProcessing ${pages.length} pages...\n`);

let totalReplaced = 0;
let pagesModified = 0;

for (const page of pages) {
  const count = processFile(page);
  if (count > 0) {
    totalReplaced += count;
    pagesModified++;
  }
}

console.log(`\n✅ Done! Modified ${pagesModified} pages, replaced ${totalReplaced} images.`);
