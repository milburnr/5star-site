#!/usr/bin/env node
'use strict';

/**
 * Apply image assignment changes from page-images.json to page source files.
 *
 * Usage:
 *   node scripts/apply-image-fixes.js --assignments page-images.json --dry-run
 *   node scripts/apply-image-fixes.js --assignments page-images.json
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');

function getArg(name, fallback) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && args[idx + 1] ? args[idx + 1] : fallback;
}

const ASSIGNMENTS_PATH = getArg('assignments', path.join(__dirname, '..', 'page-images.json'));
const APP_DIR = path.join(__dirname, '..', 'app');

const assignments = JSON.parse(fs.readFileSync(path.resolve(ASSIGNMENTS_PATH), 'utf-8'));

let totalChanges = 0;
let filesModified = 0;

for (const [urlPath, placements] of Object.entries(assignments)) {
  const pageFile = path.join(APP_DIR, urlPath === '/' ? '' : urlPath, 'page.tsx');
  if (!fs.existsSync(pageFile)) {
    console.log(`  ⚠ Page not found: ${pageFile}`);
    continue;
  }

  let source = fs.readFileSync(pageFile, 'utf-8');
  let modified = false;

  for (const placement of placements) {
    if (placement.currentImage === placement.suggestedImage) continue;

    if (source.includes(placement.currentImage)) {
      if (DRY_RUN) {
        console.log(`  ${urlPath}: ${placement.context}`);
        console.log(`    OLD: ${placement.currentImage.split('/').pop()}`);
        console.log(`    NEW: ${placement.suggestedImage.split('/').pop()}`);
        console.log(`    WHY: ${placement.reason}\n`);
      } else {
        source = source.replace(placement.currentImage, placement.suggestedImage);
        modified = true;
      }
      totalChanges++;
    }
  }

  if (modified && !DRY_RUN) {
    fs.writeFileSync(pageFile, source);
    filesModified++;
  }
}

console.log(`\n${DRY_RUN ? '🔍 DRY RUN' : '✅ Applied'}`);
console.log(`   Changes: ${totalChanges}`);
if (!DRY_RUN) console.log(`   Files modified: ${filesModified}`);
