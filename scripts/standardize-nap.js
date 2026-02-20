#!/usr/bin/env node
/**
 * NAP Standardization Script
 *
 * Standardizes Name, Address, Phone (NAP) data across all page.tsx files
 * to match canonical values in lib/constants.ts.
 *
 * Fixes:
 * - Email: info@ -> admin@ in schema
 * - Phone: +18066226041, +1-806-622-6041, 8066226041 -> (806) 622-6041 in schema
 * - Hours: 00:00/23:59 (24/7) -> 09:00/17:00 in schema
 * - Entity name: "5 Star Commercial Roofing - City" -> "5 Star Commercial Roofing" in schema name field
 *
 * Usage:
 *   node scripts/standardize-nap.js --dry-run   # Preview changes
 *   node scripts/standardize-nap.js              # Execute changes
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.join(__dirname, '..', 'app');

// Counters
const counts = {
  email: 0,
  phone: 0,
  hours_opens: 0,
  hours_closes: 0,
  entity_name: 0,
  files_changed: 0,
  files_unchanged: 0,
  files_total: 0,
};

/**
 * Recursively find all page.tsx files under app/
 */
function findPageFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Apply NAP standardization replacements to file content
 */
function standardize(content) {
  let changed = false;
  let localCounts = { email: 0, phone: 0, hours_opens: 0, hours_closes: 0, entity_name: 0 };

  // 1. Email: info@ -> admin@
  const emailPattern = /"email"\s*:\s*"info@5starroofingpros\.com"/g;
  const emailMatches = content.match(emailPattern);
  if (emailMatches) {
    localCounts.email = emailMatches.length;
    content = content.replace(emailPattern, '"email": "admin@5starroofingpros.com"');
    changed = true;
  }

  // 2. Phone format standardization
  const phonePatterns = [
    [/"telephone"\s*:\s*"\+18066226041"/g, '"telephone": "(806) 622-6041"'],
    [/"telephone"\s*:\s*"\+1-806-622-6041"/g, '"telephone": "(806) 622-6041"'],
    [/"telephone"\s*:\s*"8066226041"/g, '"telephone": "(806) 622-6041"'],
  ];
  for (const [pattern, replacement] of phonePatterns) {
    const matches = content.match(pattern);
    if (matches) {
      localCounts.phone += matches.length;
      content = content.replace(pattern, replacement);
      changed = true;
    }
  }

  // 3. Hours: 24/7 -> business hours
  const opensPattern = /"opens"\s*:\s*"00:00"/g;
  const opensMatches = content.match(opensPattern);
  if (opensMatches) {
    localCounts.hours_opens = opensMatches.length;
    content = content.replace(opensPattern, '"opens": "09:00"');
    changed = true;
  }

  const closesPattern = /"closes"\s*:\s*"23:59"/g;
  const closesMatches = content.match(closesPattern);
  if (closesMatches) {
    localCounts.hours_closes = closesMatches.length;
    content = content.replace(closesPattern, '"closes": "17:00"');
    changed = true;
  }

  // 4. Entity name: remove city/service suffixes from schema "name" field
  // Match "name": "5 Star Commercial Roofing - anything"
  const namePattern = /"name"\s*:\s*"5 Star Commercial Roofing\s*-\s*[^"]+"/g;
  const nameMatches = content.match(namePattern);
  if (nameMatches) {
    localCounts.entity_name = nameMatches.length;
    content = content.replace(namePattern, '"name": "5 Star Commercial Roofing"');
    changed = true;
  }

  return { content, changed, localCounts };
}

// Main
console.log(`\nNAP Standardization Script${DRY_RUN ? ' (DRY RUN)' : ''}`);
console.log('='.repeat(50));

const files = findPageFiles(APP_DIR);
counts.files_total = files.length;

console.log(`Found ${files.length} page.tsx files\n`);

for (const filePath of files) {
  const original = fs.readFileSync(filePath, 'utf-8');
  const { content, changed, localCounts } = standardize(original);
  const relPath = path.relative(path.join(__dirname, '..'), filePath);

  if (changed) {
    counts.files_changed++;
    counts.email += localCounts.email;
    counts.phone += localCounts.phone;
    counts.hours_opens += localCounts.hours_opens;
    counts.hours_closes += localCounts.hours_closes;
    counts.entity_name += localCounts.entity_name;

    const changes = [];
    if (localCounts.email > 0) changes.push(`email:${localCounts.email}`);
    if (localCounts.phone > 0) changes.push(`phone:${localCounts.phone}`);
    if (localCounts.hours_opens > 0) changes.push(`opens:${localCounts.hours_opens}`);
    if (localCounts.hours_closes > 0) changes.push(`closes:${localCounts.hours_closes}`);
    if (localCounts.entity_name > 0) changes.push(`name:${localCounts.entity_name}`);

    console.log(`  CHANGED: ${relPath} [${changes.join(', ')}]`);

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  } else {
    counts.files_unchanged++;
  }
}

console.log('\n' + '='.repeat(50));
console.log('Summary:');
console.log(`  Files processed:  ${counts.files_total}`);
console.log(`  Files changed:    ${counts.files_changed}`);
console.log(`  Files unchanged:  ${counts.files_unchanged}`);
console.log(`  Email fixes:      ${counts.email} (info@ -> admin@)`);
console.log(`  Phone fixes:      ${counts.phone} (+1/raw -> (806) format)`);
console.log(`  Hours opens:      ${counts.hours_opens} (00:00 -> 09:00)`);
console.log(`  Hours closes:     ${counts.hours_closes} (23:59 -> 17:00)`);
console.log(`  Entity name:      ${counts.entity_name} (removed city/service suffixes)`);

if (DRY_RUN) {
  console.log('\n  [DRY RUN - no files were modified]');
}
console.log('');
