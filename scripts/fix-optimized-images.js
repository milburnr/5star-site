#!/usr/bin/env node
/**
 * Replace OptimizedImage components with regular img tags using R2 CDN
 */

const fs = require('fs');
const path = require('path');

const R2_CDN = "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev";

// Load the R2 image manifest
const manifestPath = path.join(__dirname, '..', 'r2-image-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Get images from each category
function getImages(category) {
  return (manifest[category] || [])
    .filter(img => img.width === 1280 && img.format === 'jpg')
    .map(img => img.url);
}

const allImages = {
  commercial: getImages('commercial'),
  shingle: getImages('shingle'),
  hail: getImages('hail-damage'),
  completed: getImages('completed'),
  metal: getImages('metal'),
};

// Mapping of old image names to appropriate categories
const imageMapping = {
  'hail-damage-3': 'hail',
  'hail-damage': 'hail',
  'storm-damage': 'hail',
  'danage': 'hail',
  'ResidentialServices': 'shingle',
  'Roof-Replacement': 'shingle',
  'Roofing-Methods': 'shingle',
  'asphaltshingles': 'shingle',
  'SteelRoofing': 'metal',
  'TPO1': 'commercial',
  'TPO2': 'commercial',
  'TPO3': 'commercial',
  'EPDM2': 'commercial',
  'CommercialRoofing': 'commercial',
  'commercial-roof': 'commercial',
  'Constructionhome': 'shingle',
  'Aerialview': 'completed',
  'Alluminumroofing': 'metal',
  'cover-background': 'completed',
};

// Counters
const counters = { commercial: 0, shingle: 0, hail: 0, completed: 0, metal: 0 };

function getNextImage(category) {
  const images = allImages[category] || allImages.shingle;
  const idx = counters[category] || 0;
  counters[category] = (idx + 1) % images.length;
  return images[idx % images.length];
}

function getCategoryFromSrc(src) {
  for (const [key, cat] of Object.entries(imageMapping)) {
    if (src.includes(key)) return cat;
  }
  return 'shingle'; // default
}

// Process homepage
function processHomepage() {
  const filePath = path.join(__dirname, '..', 'app', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all OptimizedImage components and replace with img tags
  const optImgPattern = /<OptimizedImage\s+src="([^"]+)"\s+alt="([^"]+)"\s+className="([^"]+)"[^>]*\/>/g;
  
  let match;
  const replacements = [];
  
  while ((match = optImgPattern.exec(content)) !== null) {
    const oldSrc = match[1];
    const alt = match[2];
    const className = match[3];
    const category = getCategoryFromSrc(oldSrc);
    const newSrc = getNextImage(category);
    
    replacements.push({
      old: match[0],
      new: `<img src="${newSrc}" alt="${alt}" className="${className}" loading="lazy" />`
    });
  }
  
  for (const r of replacements) {
    content = content.replace(r.old, r.new);
  }
  
  // Remove OptimizedImage import if no longer used
  if (replacements.length > 0 && !content.includes('<OptimizedImage')) {
    content = content.replace(/import { OptimizedImage } from "@\/components\/OptimizedImage";\n?/, '');
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Homepage: ${replacements.length} OptimizedImage components replaced`);
  return replacements.length;
}

// Process services page
function processServicesPage() {
  const filePath = path.join(__dirname, '..', 'app', 'services', 'page.tsx');
  if (!fs.existsSync(filePath)) return 0;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  
  // Replace OptimizedImage with img
  const optImgPattern = /<OptimizedImage\s+src="([^"]+)"[^>]*alt="([^"]+)"[^>]*className="([^"]+)"[^>]*\/>/g;
  
  let match;
  while ((match = optImgPattern.exec(content)) !== null) {
    const category = getCategoryFromSrc(match[1]);
    const newSrc = getNextImage(category);
    content = content.replace(match[0], `<img src="${newSrc}" alt="${match[2]}" className="${match[3]}" loading="lazy" />`);
    count++;
  }
  
  // Also fix any remaining /images/ src patterns
  const coverPattern = /src="\/images\/cover-background-roofing-sunset[^"]*"/g;
  content = content.replace(coverPattern, () => {
    return `src="${getNextImage('completed')}"`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Services: ${count} images replaced`);
  return count;
}

// Process all pages with OptimizedImage or cover-background
function processAllPages() {
  const appDir = path.join(__dirname, '..', 'app');
  let totalCount = 0;
  
  function processDir(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
        processDir(fullPath);
      } else if (item.name === 'page.tsx') {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        // Replace cover-background references
        if (content.includes('cover-background-roofing-sunset')) {
          content = content.replace(/src="\/images\/cover-background-roofing-sunset[^"]*"/g, () => {
            return `src="${getNextImage('completed')}"`;
          });
          modified = true;
        }
        
        // Replace OptimizedImage with img
        const optImgPattern = /<OptimizedImage\s+([^>]+)\/>/g;
        let match;
        while ((match = optImgPattern.exec(content)) !== null) {
          const attrs = match[1];
          const srcMatch = attrs.match(/src="([^"]+)"/);
          const altMatch = attrs.match(/alt="([^"]+)"/);
          const classMatch = attrs.match(/className="([^"]+)"/);
          
          if (srcMatch) {
            const category = getCategoryFromSrc(srcMatch[1]);
            const newSrc = getNextImage(category);
            const alt = altMatch ? altMatch[1] : '';
            const className = classMatch ? classMatch[1] : '';
            
            content = content.replace(match[0], `<img src="${newSrc}" alt="${alt}" className="${className}" loading="lazy" />`);
            modified = true;
            totalCount++;
          }
        }
        
        if (modified) {
          // Remove OptimizedImage import if no longer used
          if (!content.includes('<OptimizedImage')) {
            content = content.replace(/import { OptimizedImage } from "[^"]+";?\n?/g, '');
          }
          fs.writeFileSync(fullPath, content);
          const pageName = path.basename(path.dirname(fullPath));
          console.log(`✅ ${pageName}: Updated`);
        }
      }
    }
  }
  
  processDir(appDir);
  return totalCount;
}

// Main
console.log('Fixing OptimizedImage components and cover-background references...\n');
processAllPages();
console.log('\n✅ Done!');
