#!/usr/bin/env node
/**
 * Select top hero candidates from landscape images - prioritize by file size
 */

const fs = require('fs');
const path = require('path');

const INPUT = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/landscape-candidates.json';
const OUTPUT = '/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/hero-candidates.json';

const landscapes = JSON.parse(fs.readFileSync(INPUT, 'utf8'));

// Add file size
const withSize = landscapes.map(img => ({
  ...img,
  size: fs.statSync(img.path).size
}));

// Sort by size (larger = likely better quality)
withSize.sort((a, b) => b.size - a.size);

// Get top N per city (to ensure variety)
const byCity = {};
const heroCandidates = [];
const MAX_PER_CITY = 30;
const MAX_TOTAL = 500;

for (const img of withSize) {
  byCity[img.city] = byCity[img.city] || 0;
  if (byCity[img.city] < MAX_PER_CITY && heroCandidates.length < MAX_TOTAL) {
    heroCandidates.push(img);
    byCity[img.city]++;
  }
}

console.log(`Selected ${heroCandidates.length} hero candidates`);
console.log('\nBy city:');
Object.entries(byCity).sort((a,b) => b[1] - a[1]).forEach(([city, count]) => {
  console.log(`  ${city}: ${count}`);
});

fs.writeFileSync(OUTPUT, JSON.stringify(heroCandidates, null, 2));
console.log(`\nSaved to ${OUTPUT}`);
