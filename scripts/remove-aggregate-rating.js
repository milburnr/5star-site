#!/usr/bin/env node
/**
 * Remove all AggregateRating schema from page.tsx files.
 *
 * Handles two formats:
 *   1. Single-line inline JSON:  "aggregateRating": { ... },
 *   2. Multi-line formatted JSON with indentation
 *
 * Usage:
 *   node scripts/remove-aggregate-rating.js --dry-run   # Preview
 *   node scripts/remove-aggregate-rating.js              # Execute
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.join(__dirname, '..', 'app');

function findPageFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      results.push(fullPath);
    }
  }
  return results;
}

function removeAggregateRating(content) {
  let result = content;

  // Pattern 1: Single-line — "aggregateRating": { ... } followed by comma
  // Uses non-greedy match within braces, handles nested quotes
  result = result.replace(/"aggregateRating"\s*:\s*\{[^}]*\}\s*,\s*/g, '');

  // Pattern 2: Single-line — comma then "aggregateRating": { ... } (last property)
  result = result.replace(/,\s*"aggregateRating"\s*:\s*\{[^}]*\}/g, '');

  // Pattern 3: Multi-line — "aggregateRating": {\n ... \n},
  // Matches across newlines with indented closing brace
  result = result.replace(/"aggregateRating"\s*:\s*\{[\s\S]*?\n\s*\}\s*,?\s*\n/g, '');

  // Pattern 4: Catch-all for any remaining single occurrence
  result = result.replace(/"aggregateRating"\s*:\s*\{[^}]*\}\s*/g, '');

  return result;
}

const files = findPageFiles(APP_DIR);
let modified = 0;
let unchanged = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf-8');
  const cleaned = removeAggregateRating(original);

  if (cleaned !== original) {
    modified++;
    const rel = path.relative(path.join(__dirname, '..'), file);
    if (DRY_RUN) {
      console.log(`[DRY RUN] Would modify: ${rel}`);
    } else {
      fs.writeFileSync(file, cleaned, 'utf-8');
      console.log(`Modified: ${rel}`);
    }
  } else {
    unchanged++;
  }
}

console.log(`\n--- Summary ---`);
console.log(`Total files scanned: ${files.length}`);
console.log(`Files modified: ${modified}`);
console.log(`Files unchanged: ${unchanged}`);
if (DRY_RUN) {
  console.log(`\nThis was a dry run. Re-run without --dry-run to apply changes.`);
}
