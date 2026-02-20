#!/usr/bin/env node
/**
 * Meta Description Fix Script
 *
 * Fixes all meta description issues across page.tsx files:
 * - Capitalize lowercase starts
 * - Trim over-160-char descriptions
 * - Add CTAs where missing
 * - Rewrite "Looking for..." anti-patterns
 * - Pad very short descriptions
 * - Remove double commas
 * - Normalize quotes to double quotes
 * - Update openGraph descriptions to match
 *
 * Usage:
 *   node scripts/fix-meta-descriptions.js --dry-run   # Preview changes
 *   node scripts/fix-meta-descriptions.js --report     # Full report
 *   node scripts/fix-meta-descriptions.js              # Apply changes
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const REPORT = process.argv.includes('--report');
const APP_DIR = path.join(__dirname, '..', 'app');

const PHONE = '(806) 622-6041';
const CTA_WORDS = ['call', 'free', 'schedule', '(806)', '622-6041'];

const counts = {
  total: 0,
  capitalized: 0,
  trimmed: 0,
  ctaAdded: 0,
  lookingForRewritten: 0,
  padded: 0,
  doubleCommaFixed: 0,
  quoteNormalized: 0,
  ogUpdated: 0,
  filesChanged: 0,
  filesUnchanged: 0,
  noDescription: 0,
  alreadyCorrect: 0,
  manualReview: [],
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
 * Extract the metadata block from file content
 */
function extractMetadataBlock(content) {
  const match = content.match(/export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?\n\};/);
  return match ? match[0] : null;
}

/**
 * Extract description value from metadata block
 * Returns { value, quoteChar, fullMatch }
 */
function extractDescription(metaBlock) {
  // Try double quotes first
  let m = metaBlock.match(/(\s*description:\s*)"([^"]*)"/);
  if (m) {
    return { value: m[2], quoteChar: '"', prefix: m[1], fullMatch: m[0] };
  }
  // Try single quotes - match until the last single quote before comma/newline
  m = metaBlock.match(/(\s*description:\s*)'((?:[^'\\]|\\.)*)'/);
  if (m) {
    return { value: m[2], quoteChar: "'", prefix: m[1], fullMatch: m[0] };
  }
  return null;
}

/**
 * Check if description has a CTA
 */
function hasCTA(desc) {
  const lower = desc.toLowerCase();
  return CTA_WORDS.some(w => lower.includes(w.toLowerCase()));
}

/**
 * Get route name from file path for context
 */
function getRoute(filePath) {
  const rel = path.relative(APP_DIR, filePath);
  const route = rel.replace('/page.tsx', '').replace('page.tsx', '(home)');
  return '/' + route + '/';
}

/**
 * Trim description to fit under maxLen characters.
 * Tries to cut at sentence boundary, then at clause boundary.
 */
function trimDescription(desc, maxLen) {
  if (desc.length <= maxLen) return desc;

  // Try cutting at last sentence that fits
  const sentences = desc.split(/(?<=\.)\s+/);
  let result = '';
  for (const s of sentences) {
    const candidate = result ? result + ' ' + s : s;
    if (candidate.length <= maxLen) {
      result = candidate;
    } else {
      break;
    }
  }

  // If sentence-based result is too short (less than 70% of maxLen), try comma/clause-based cut
  if (!result || result.length < maxLen * 0.7) {
    const cut = desc.substring(0, maxLen);
    const lastComma = cut.lastIndexOf(',');
    const lastPeriod = cut.lastIndexOf('.');
    const cutPoint = Math.max(lastComma, lastPeriod);
    if (cutPoint > 80) {
      const clauseResult = desc.substring(0, cutPoint + 1).trim();
      // Only use clause cut if it's longer than sentence cut
      if (clauseResult.length > (result ? result.length : 0)) {
        result = clauseResult;
      }
    }
    // If still too short, cut at word boundary
    if (!result || result.length < 60) {
      const lastSpace = cut.lastIndexOf(' ');
      result = desc.substring(0, lastSpace).trim();
      result = result.replace(/[,]$/, '').trim();
    }
  }

  return result;
}

/**
 * Apply all fix rules to a description
 */
function fixDescription(desc, route) {
  const changes = [];
  let fixed = desc;

  // 1. Rewrite "Looking for..." descriptions
  if (fixed.startsWith('Looking for')) {
    if (route.includes('amarillos-best-roofer')) {
      fixed = "Amarillo's highest-rated roofer for hail damage, storm repair, and full replacements. Insurance claim experts. Free inspection \u2014 " + PHONE;
    } else {
      // Generic rewrite for any other "Looking for" pattern
      fixed = fixed.replace(/^Looking for[^.?]*[.?]\s*/, '');
      if (fixed[0]) fixed = fixed[0].toUpperCase() + fixed.slice(1);
    }
    changes.push('lookingFor');
  }

  // 2. Remove double commas
  if (fixed.includes(',,')) {
    fixed = fixed.replace(/,,/g, ',');
    changes.push('doubleComma');
  }

  // 3. Capitalize first letter
  if (fixed[0] && fixed[0] !== fixed[0].toUpperCase()) {
    fixed = fixed[0].toUpperCase() + fixed.slice(1);
    changes.push('capitalize');
  }

  // 4. Trim over-160-char descriptions
  if (fixed.length > 160) {
    // If it has a CTA, try to preserve it
    const hadCTA = hasCTA(fixed);
    fixed = trimDescription(fixed, 160);
    // If trimming removed the CTA, add a short one
    if (hadCTA && !hasCTA(fixed)) {
      const ctaSuffix = '. Call ' + PHONE;
      if (fixed.length + ctaSuffix.length <= 160) {
        fixed = fixed.replace(/[.,;:\s]+$/, '') + ctaSuffix;
      } else {
        // Trim more aggressively to fit CTA
        fixed = trimDescription(fixed, 160 - ctaSuffix.length);
        fixed = fixed.replace(/[.,;:\s]+$/, '') + ctaSuffix;
      }
    }
    changes.push('trim');
  }

  // 5. Pad very short descriptions (under 80 chars)
  if (fixed.length < 80) {
    // Special handling for known pages
    if (route.includes('reviews')) {
      fixed = "Read reviews from satisfied 5 Star Roofing customers across West Texas. Hail damage, storm repair, full replacements. Free quote \u2014 " + PHONE;
    } else {
      // Generic padding: add CTA if missing
      if (!hasCTA(fixed)) {
        fixed = fixed.replace(/[.,;:\s]+$/, '') + '. Free estimate \u2014 call ' + PHONE;
      }
    }
    changes.push('pad');
  }

  // 6. Add CTA to descriptions missing one
  if (!hasCTA(fixed)) {
    const ctaOptions = [
      '. Call ' + PHONE,                    // 22 chars
      '. Free estimate \u2014 ' + PHONE,       // 30 chars
      ' \u2014 call ' + PHONE,                 // 22 chars
      '. ' + PHONE,                         // 17 chars
    ];
    let added = false;
    // Try appending directly (prefer the longest CTA that fits)
    for (const cta of ctaOptions) {
      const candidate = fixed.replace(/[.,;:\s]+$/, '') + cta;
      if (candidate.length <= 160) {
        fixed = candidate;
        added = true;
        break;
      }
    }
    // If none fit, trim description to make room for shortest CTA
    if (!added) {
      const shortCta = '. Call ' + PHONE;
      fixed = trimDescription(fixed, 160 - shortCta.length);
      fixed = fixed.replace(/[.,;:\s]+$/, '') + shortCta;
    }
    changes.push('addCTA');
  }

  // Final safety: ensure under 160 after all changes
  if (fixed.length > 160) {
    fixed = trimDescription(fixed, 160);
    // Ensure CTA survived
    if (!hasCTA(fixed)) {
      const ctaSuffix = '. Call ' + PHONE;
      fixed = trimDescription(fixed, 160 - ctaSuffix.length);
      fixed = fixed.replace(/[.,;:\s]+$/, '') + ctaSuffix;
    }
  }

  // Remove trailing period if it makes desc exactly 161
  if (fixed.length > 160 && fixed.endsWith('.')) {
    fixed = fixed.slice(0, -1);
  }

  return { fixed, changes };
}

/**
 * Apply fixes to a page.tsx file content
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const metaBlock = extractMetadataBlock(content);
  if (!metaBlock) return { content, changed: false, changes: [] };

  const descInfo = extractDescription(metaBlock);
  if (!descInfo) return { content, changed: false, changes: [] };

  const route = getRoute(filePath);
  const { fixed, changes } = fixDescription(descInfo.value, route);

  if (fixed === descInfo.value && descInfo.quoteChar === '"') {
    return { content, changed: false, changes: [] };
  }

  let newContent = content;
  const allChanges = [...changes];

  // Replace description in metadata block (always use double quotes)
  const escapedFixed = fixed.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const newDescLine = descInfo.prefix + '"' + fixed + '"';

  // Replace the old description match
  newContent = newContent.replace(descInfo.fullMatch, newDescLine);

  // Track quote normalization
  if (descInfo.quoteChar === "'" && !changes.includes('quoteNormalize')) {
    allChanges.push('quoteNormalize');
  }

  // Update openGraph.description if present
  if (metaBlock.includes('openGraph')) {
    // Match openGraph description
    const ogDescPattern = /(openGraph:\s*\{[\s\S]*?description:\s*)"([^"]*)"/;
    const ogMatch = newContent.match(ogDescPattern);
    if (ogMatch) {
      // Use the new description for OG too (or trim if needed)
      let ogDesc = fixed;
      newContent = newContent.replace(ogDescPattern, '$1"' + ogDesc + '"');
      allChanges.push('ogUpdate');
    }
    // Also try single-quoted OG descriptions
    const ogDescPatternSingle = /(openGraph:\s*\{[\s\S]*?description:\s*)'([^']*)'/;
    const ogMatchSingle = newContent.match(ogDescPatternSingle);
    if (ogMatchSingle) {
      let ogDesc = fixed;
      newContent = newContent.replace(ogDescPatternSingle, '$1"' + ogDesc + '"');
      allChanges.push('ogUpdate');
    }
  }

  const changed = newContent !== content;
  return { content: newContent, changed, changes: allChanges, before: descInfo.value, after: fixed };
}

// ================= REPORT MODE =================
if (REPORT) {
  console.log('\nMeta Description Report');
  console.log('='.repeat(80));

  const files = findPageFiles(APP_DIR);
  let issues = 0;
  const allDescs = [];

  console.log(`\nTotal page.tsx files: ${files.length}\n`);
  console.log('Route'.padEnd(50) + 'Len'.padStart(4) + '  Issues');
  console.log('-'.repeat(80));

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const metaBlock = extractMetadataBlock(content);
    const route = getRoute(filePath);

    if (!metaBlock) {
      console.log(route.padEnd(50) + '   -  NO METADATA');
      continue;
    }

    const descInfo = extractDescription(metaBlock);
    if (!descInfo) {
      console.log(route.padEnd(50) + '   -  NO DESCRIPTION');
      continue;
    }

    const desc = descInfo.value;
    const flags = [];

    if (desc.length > 160) flags.push('OVER-160');
    if (desc.length < 80) flags.push('UNDER-80');
    if (desc[0] && desc[0] !== desc[0].toUpperCase()) flags.push('LOWERCASE');
    if (!hasCTA(desc)) flags.push('NO-CTA');
    if (desc.startsWith('Looking for')) flags.push('LOOKING-FOR');
    if (desc.includes(',,')) flags.push('DOUBLE-COMMA');

    if (flags.length > 0) issues++;
    allDescs.push(desc);

    const flagStr = flags.length > 0 ? flags.join(', ') : 'OK';
    console.log(route.substring(0, 49).padEnd(50) + String(desc.length).padStart(4) + '  ' + flagStr);
  }

  // Check for duplicates
  const descCounts = {};
  for (const d of allDescs) {
    descCounts[d] = (descCounts[d] || 0) + 1;
  }
  const dupes = Object.entries(descCounts).filter(([_, c]) => c > 1);

  console.log('\n' + '='.repeat(80));
  console.log('Summary:');
  console.log(`  Total pages: ${files.length}`);
  console.log(`  Pages with issues: ${issues}`);
  console.log(`  Duplicate descriptions: ${dupes.length}`);
  if (dupes.length > 0) {
    for (const [desc, count] of dupes) {
      console.log(`    [${count}x] "${desc.substring(0, 60)}..."`);
    }
  }
  console.log('');
  process.exit(0);
}

// ================= FIX MODE (dry-run or apply) =================
console.log(`\nMeta Description Fix Script${DRY_RUN ? ' (DRY RUN)' : ''}`);
console.log('='.repeat(60));

const files = findPageFiles(APP_DIR);
counts.total = files.length;
console.log(`Found ${files.length} page.tsx files\n`);

for (const filePath of files) {
  const { content, changed, changes, before, after } = processFile(filePath);
  const route = getRoute(filePath);

  if (!changed) {
    counts.filesUnchanged++;
    counts.alreadyCorrect++;
    continue;
  }

  counts.filesChanged++;

  // Track specific change types
  for (const c of changes) {
    if (c === 'capitalize') counts.capitalized++;
    if (c === 'trim') counts.trimmed++;
    if (c === 'addCTA') counts.ctaAdded++;
    if (c === 'lookingFor') counts.lookingForRewritten++;
    if (c === 'pad') counts.padded++;
    if (c === 'doubleComma') counts.doubleCommaFixed++;
    if (c === 'quoteNormalize') counts.quoteNormalized++;
    if (c === 'ogUpdate') counts.ogUpdated++;
  }

  console.log(`  CHANGED: ${route}`);
  if (before && after) {
    console.log(`    BEFORE (${before.length}): "${before.substring(0, 80)}${before.length > 80 ? '...' : ''}"`);
    console.log(`    AFTER  (${after.length}): "${after.substring(0, 80)}${after.length > 80 ? '...' : ''}"`);
    console.log(`    Changes: [${changes.join(', ')}]`);
  }

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

console.log('\n' + '='.repeat(60));
console.log('Summary:');
console.log(`  Files processed:         ${counts.total}`);
console.log(`  Files changed:           ${counts.filesChanged}`);
console.log(`  Files already correct:   ${counts.alreadyCorrect}`);
console.log(`  Capitalized:             ${counts.capitalized}`);
console.log(`  Trimmed (>160):          ${counts.trimmed}`);
console.log(`  CTA added:               ${counts.ctaAdded}`);
console.log(`  "Looking for" rewritten: ${counts.lookingForRewritten}`);
console.log(`  Padded (<80):            ${counts.padded}`);
console.log(`  Double commas fixed:     ${counts.doubleCommaFixed}`);
console.log(`  Quotes normalized:       ${counts.quoteNormalized}`);
console.log(`  OG descriptions updated: ${counts.ogUpdated}`);

if (counts.manualReview.length > 0) {
  console.log(`\n  MANUAL REVIEW NEEDED (${counts.manualReview.length}):`);
  for (const item of counts.manualReview) {
    console.log(`    - ${item}`);
  }
}

if (DRY_RUN) {
  console.log('\n  [DRY RUN - no files were modified]');
}
console.log('');
