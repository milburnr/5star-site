#!/usr/bin/env node
/**
 * Build a comprehensive image manifest from job categories
 * Organizes images by: roof type, building type, condition (before/after), city
 */

const fs = require('fs');
const path = require('path');

const PHOTOS_DIR = '/Users/bo/Photos/5-star';
const JOB_CATEGORIES = path.join(__dirname, '..', 'job-categories.json');
const OUTPUT_FILE = path.join(__dirname, '..', 'image-manifest-full.json');

function main() {
  const categories = JSON.parse(fs.readFileSync(JOB_CATEGORIES, 'utf8'));
  
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalImages: 0,
    
    // By roof type
    byRoofType: {
      shingle: { before: [], after: [] },
      metal: { before: [], after: [] },
      flat: { before: [], after: [] },
      tpo: { before: [], after: [] },
      tile: { before: [], after: [] },
      unknown: { before: [], after: [] }
    },
    
    // By building type
    byBuildingType: {
      residential: { before: [], after: [] },
      commercial: { before: [], after: [] },
      unknown: { before: [], after: [] }
    },
    
    // By city (for city-specific pages)
    byCity: {},
    
    // Combined categories (for specific page types)
    combined: {
      // For hail damage pages - use "before" images
      hailDamage: [],
      // For completed work galleries - use "after" images  
      completed: [],
      // For shingle-specific pages
      shingleWork: [],
      // For metal roofing pages
      metalWork: [],
      // For flat/TPO/commercial pages
      commercialFlat: []
    }
  };
  
  // Process each job
  for (const [jobKey, job] of Object.entries(categories.jobs)) {
    const roofType = job.analysis?.roofType || 'unknown';
    const buildingType = job.analysis?.buildingType || 'unknown';
    const city = job.city.replace('-tx', '');
    
    // Initialize city if needed
    if (!manifest.byCity[city]) {
      manifest.byCity[city] = { before: [], after: [], all: [] };
    }
    
    // Get all images from this job
    const jobPath = path.join(PHOTOS_DIR, job.city, job.street);
    const images = fs.readdirSync(jobPath).filter(f => 
      f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png')
    );
    
    for (const img of images) {
      const imgPath = path.join(jobPath, img);
      const isBefore = img.includes('-before-');
      const isAfter = img.includes('-after-');
      const condition = isBefore ? 'before' : (isAfter ? 'after' : 'unknown');
      
      const imgData = {
        path: imgPath,
        filename: img,
        city,
        street: job.street,
        roofType,
        buildingType,
        condition,
        roofColor: job.analysis?.roofColor,
        features: job.analysis?.features || []
      };
      
      manifest.totalImages++;
      
      // Add to roof type category
      if (manifest.byRoofType[roofType]) {
        if (isBefore) manifest.byRoofType[roofType].before.push(imgData);
        if (isAfter) manifest.byRoofType[roofType].after.push(imgData);
      }
      
      // Add to building type category
      if (manifest.byBuildingType[buildingType]) {
        if (isBefore) manifest.byBuildingType[buildingType].before.push(imgData);
        if (isAfter) manifest.byBuildingType[buildingType].after.push(imgData);
      }
      
      // Add to city
      manifest.byCity[city].all.push(imgData);
      if (isBefore) manifest.byCity[city].before.push(imgData);
      if (isAfter) manifest.byCity[city].after.push(imgData);
      
      // Add to combined categories
      if (isBefore) {
        manifest.combined.hailDamage.push(imgData);
      }
      if (isAfter) {
        manifest.combined.completed.push(imgData);
      }
      if (roofType === 'shingle') {
        manifest.combined.shingleWork.push(imgData);
      }
      if (roofType === 'metal') {
        manifest.combined.metalWork.push(imgData);
      }
      if (roofType === 'flat' || roofType === 'tpo' || buildingType === 'commercial') {
        manifest.combined.commercialFlat.push(imgData);
      }
    }
  }
  
  // Create summary
  const summary = {
    totalImages: manifest.totalImages,
    byRoofType: {},
    byBuildingType: {},
    byCity: {},
    combined: {}
  };
  
  for (const [type, data] of Object.entries(manifest.byRoofType)) {
    summary.byRoofType[type] = { before: data.before.length, after: data.after.length };
  }
  for (const [type, data] of Object.entries(manifest.byBuildingType)) {
    summary.byBuildingType[type] = { before: data.before.length, after: data.after.length };
  }
  for (const [city, data] of Object.entries(manifest.byCity)) {
    summary.byCity[city] = { before: data.before.length, after: data.after.length, total: data.all.length };
  }
  for (const [cat, images] of Object.entries(manifest.combined)) {
    summary.combined[cat] = images.length;
  }
  
  manifest.summary = summary;
  
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
  
  console.log('Image manifest generated!');
  console.log('\nSummary:');
  console.log(`  Total images: ${manifest.totalImages}`);
  console.log('\n  By roof type:');
  for (const [type, counts] of Object.entries(summary.byRoofType)) {
    if (counts.before + counts.after > 0) {
      console.log(`    ${type}: ${counts.before} before, ${counts.after} after`);
    }
  }
  console.log('\n  By building type:');
  for (const [type, counts] of Object.entries(summary.byBuildingType)) {
    if (counts.before + counts.after > 0) {
      console.log(`    ${type}: ${counts.before} before, ${counts.after} after`);
    }
  }
  console.log('\n  Combined categories:');
  for (const [cat, count] of Object.entries(summary.combined)) {
    console.log(`    ${cat}: ${count} images`);
  }
  console.log('\n  Cities:', Object.keys(manifest.byCity).length);
}

main();
