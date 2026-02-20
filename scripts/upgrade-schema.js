#!/usr/bin/env node
/**
 * Upgrade schema @type and entity name across all page.tsx files.
 *
 * Usage:
 *   node scripts/upgrade-schema.js --dry-run   # Preview changes
 *   node scripts/upgrade-schema.js              # Apply changes
 */

const fs = require('fs');
const path = require('path');

const dryRun = process.argv.includes('--dry-run');
const appDir = path.join(__dirname, '..', 'app');

// Find all page.tsx files recursively
function findPageFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findPageFiles(full));
    } else if (entry.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}
const files = findPageFiles(appDir);

let totalFiles = 0;
let typeReplacements = 0;
let nameReplacements = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // 1. Replace standalone "@type": "LocalBusiness" with array form
  const localBizRegex = /"@type":\s*"LocalBusiness"/g;
  const localBizMatches = content.match(localBizRegex);
  if (localBizMatches) {
    content = content.replace(localBizRegex, '"@type": ["LocalBusiness", "RoofingContractor"]');
    typeReplacements += localBizMatches.length;
    modified = true;
  }

  // 2. Replace standalone "@type": "RoofingContractor" (not already in array) with array form
  //    This targets the homepage which already uses RoofingContractor but as a standalone string
  const roofingRegex = /"@type":\s*"RoofingContractor"/g;
  const roofingMatches = content.match(roofingRegex);
  if (roofingMatches) {
    content = content.replace(roofingRegex, '"@type": ["LocalBusiness", "RoofingContractor"]');
    typeReplacements += roofingMatches.length;
    modified = true;
  }

  // 3. Replace "name": "5 Star Commercial Roofing" with "name": "5 Star Roofing"
  //    Do NOT touch "Organization" @type pages (about page) - but actually the plan says
  //    to replace ALL "name": "5 Star Commercial Roofing" strings since blog/gallery were
  //    already handled in Phase 01-02
  const nameRegex = /"name":\s*"5 Star Commercial Roofing"/g;
  const nameMatches = content.match(nameRegex);
  if (nameMatches) {
    content = content.replace(nameRegex, '"name": "5 Star Roofing"');
    nameReplacements += nameMatches.length;
    modified = true;
  }

  if (modified) {
    totalFiles++;
    const relPath = path.relative(path.join(__dirname, '..'), file);
    if (!dryRun) {
      fs.writeFileSync(file, content, 'utf8');
    }
    if (dryRun) {
      console.log(`  Would modify: ${relPath}`);
    }
  }
}

console.log(`\n${dryRun ? '[DRY RUN] ' : ''}Results:`);
console.log(`  Files modified: ${totalFiles}`);
console.log(`  @type replacements: ${typeReplacements}`);
console.log(`  Entity name replacements: ${nameReplacements}`);
