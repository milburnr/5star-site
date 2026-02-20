#!/usr/bin/env node
/**
 * Meta Title Standardization Script
 *
 * Standardizes all meta titles across page.tsx files to use canonical
 * "5 Star Roofing" brand name, fix formatting issues, and ensure
 * all titles are under 60 characters.
 *
 * Fixes:
 * - "TXService" typos -> "TX | Service" or rewrite
 * - Missing space before pipe: "TX|" -> "TX |"
 * - Truncated titles ending with "..." or "& West"
 * - "5 Star Commercial Roofing" -> "5 Star Roofing"
 * - Bare "5 Star" (without "Roofing") -> "5 Star Roofing"
 * - Pages missing brand: append "| 5 Star Roofing"
 * - Multi-pipe segment consolidation
 * - Homepage META-06 override
 * - Titles over 60 chars: abbreviate service name
 * - openGraph.title sync on pages that have it
 *
 * Usage:
 *   node scripts/fix-meta-titles.js --dry-run   # Preview changes
 *   node scripts/fix-meta-titles.js --report     # Full title report
 *   node scripts/fix-meta-titles.js              # Execute changes
 *
 * Pattern: Follows scripts/standardize-nap.js
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const REPORT = process.argv.includes('--report');
const APP_DIR = path.join(__dirname, '..', 'app');

const BRAND = '5 Star Roofing';
const HOMEPAGE_TITLE = 'Amarillo Residential Roofing & Hail Repair | 5 Star Roofing';

// Counters
const counts = {
  files_total: 0,
  files_changed: 0,
  files_unchanged: 0,
  txservice_fixed: 0,
  missing_space_pipe: 0,
  truncated_fixed: 0,
  commercial_fixed: 0,
  bare_5star_fixed: 0,
  brand_added: 0,
  multi_pipe_fixed: 0,
  over_60_fixed: 0,
  homepage_fixed: 0,
  og_synced: 0,
  manual_review: [],
};

// All titles for duplicate detection
const titleMap = new Map(); // title -> [routes]

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
 * Get route from file path (e.g., app/roof-repair-amarillo/page.tsx -> /roof-repair-amarillo/)
 */
function getRoute(filePath) {
  const rel = path.relative(APP_DIR, filePath);
  const dir = path.dirname(rel);
  if (dir === '.') return '/';
  return '/' + dir + '/';
}

/**
 * Determine if this is the homepage
 */
function isHomepage(filePath) {
  return path.dirname(filePath) === APP_DIR;
}

/**
 * Extract the metadata block from file content.
 * Returns { block, startIdx, endIdx } or null.
 */
function extractMetadataBlock(content) {
  const match = content.match(/export const metadata:\s*Metadata\s*=\s*\{/);
  if (!match) return null;

  const startIdx = match.index;
  let braceCount = 0;
  let endIdx = -1;

  for (let i = startIdx + match[0].length - 1; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    else if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        // Find the semicolon after closing brace
        endIdx = content.indexOf(';', i) + 1;
        if (endIdx === 0) endIdx = i + 1;
        break;
      }
    }
  }

  if (endIdx === -1) return null;
  return {
    block: content.substring(startIdx, endIdx),
    startIdx,
    endIdx,
  };
}

/**
 * Extract title from metadata block
 */
function extractTitle(metaBlock) {
  // Match title: 'value' or title: "value" at the top level of the metadata object
  // Avoid matching inside openGraph or twitter sub-objects

  // First, try to match title before any openGraph/twitter block
  const lines = metaBlock.split('\n');
  let depth = 0;
  let inSubObject = false;

  for (const line of lines) {
    // Track brace depth to know if we're inside a sub-object
    for (const ch of line) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
    }

    // We want title at depth 1 (inside the main metadata object, not sub-objects)
    // The metadata opening { puts us at depth 1
    // openGraph: { puts us at depth 2
    if (depth === 1) {
      const titleMatch = line.match(/title:\s*(['"])([^'"]*)\1/);
      if (titleMatch) {
        return { value: titleMatch[2], quote: titleMatch[1] };
      }
    }
  }

  return null;
}

/**
 * Extract openGraph title from metadata block
 */
function extractOGTitle(metaBlock) {
  const ogMatch = metaBlock.match(/openGraph:\s*\{[\s\S]*?\}/);
  if (!ogMatch) return null;
  const ogBlock = ogMatch[0];
  const titleMatch = ogBlock.match(/title:\s*(['"])([^'"]*)\1/);
  if (titleMatch) {
    return { value: titleMatch[2], quote: titleMatch[1] };
  }
  return null;
}

/**
 * Apply title fix rules in order. Returns the fixed title.
 */
function fixTitle(title, route) {
  let fixed = title;
  let changes = [];

  // Rule 0: Homepage special case
  if (route === '/') {
    if (fixed !== HOMEPAGE_TITLE) {
      changes.push('homepage-meta06');
      counts.homepage_fixed++;
      return { title: HOMEPAGE_TITLE, changes };
    }
    return { title: fixed, changes };
  }

  // Rule 1: Fix "TXService" typos
  if (fixed.includes('TXService')) {
    // "Storm Damage Repair Borger TXService | Free Inspection"
    // -> extract the service and city, reconstruct
    fixed = fixed.replace(/TXService/g, 'TX');
    changes.push('txservice');
    counts.txservice_fixed++;
  }

  // Rule 2: Fix missing space before pipe: "TX|" -> "TX |"
  // But not "TX | " which is already correct
  if (/TX\|/.test(fixed) && !/TX \|/.test(fixed)) {
    fixed = fixed.replace(/TX\|/g, 'TX |');
    changes.push('missing-space-pipe');
    counts.missing_space_pipe++;
  }

  // Rule 3: Fix truncated titles
  if (fixed.endsWith('...')) {
    // Remove the ... and trim
    fixed = fixed.replace(/\.\.\.$/, '').trim();
    changes.push('truncated-ellipsis');
    counts.truncated_fixed++;
  }
  if (fixed.includes('& West')) {
    // "Service Areas | Amarillo, Midland, Odessa Roofing | & West" -> fix
    fixed = fixed.replace(/\s*\|\s*& West\s*$/, '');
    changes.push('truncated-west');
    counts.truncated_fixed++;
  }

  // Rule 4: Replace "5 Star Commercial Roofing" with "5 Star Roofing"
  if (fixed.includes('5 Star Commercial Roofing')) {
    fixed = fixed.replace(/5 Star Commercial Roofing/g, '5 Star Roofing');
    changes.push('commercial-removed');
    counts.commercial_fixed++;
  }

  // Rule 5: Expand bare "5 Star" (without "Roofing" after it) to "5 Star Roofing"
  // Match "5 Star" that's NOT followed by " Roofing" or " Commercial"
  if (/5 Star(?!\s+Roofing)(?!\s+Commercial)/.test(fixed)) {
    fixed = fixed.replace(/5 Star(?!\s+Roofing)(?!\s+Commercial)/g, '5 Star Roofing');
    changes.push('bare-5star-expanded');
    counts.bare_5star_fixed++;
  }

  // Rule 6: For pages missing brand entirely, consolidate
  if (!fixed.includes('5 Star Roofing')) {
    const pipes = fixed.split('|').map(s => s.trim());

    if (pipes.length >= 3) {
      // Multi-pipe: keep first segment, replace rest with brand
      // e.g., "Amarillo's Best Roofer | Free Inspection Today | Top-Rated Company"
      // -> "Amarillo's Best Roofer | 5 Star Roofing"
      fixed = pipes[0] + ' | 5 Star Roofing';
      changes.push('multi-pipe-consolidated');
      counts.multi_pipe_fixed++;
    } else if (pipes.length === 2) {
      // Two segments, no brand: replace second with brand
      // e.g., "Metal Roofing Amarillo TX | Expert Service" -> keep first + brand
      // But some second segments are useful, like "Local Hail Experts"
      // Decision: replace second segment with brand
      fixed = pipes[0] + ' | 5 Star Roofing';
      changes.push('brand-replaced');
      counts.brand_added++;
    } else {
      // Single segment, append brand
      fixed = fixed + ' | 5 Star Roofing';
      changes.push('brand-appended');
      counts.brand_added++;
    }
  }

  // Rule 7: Ensure under 60 chars
  if (fixed.length > 60) {
    const shortened = shortenTitle(fixed, route);
    if (shortened && shortened.length <= 60) {
      changes.push(`over60-shortened(${fixed.length}->${shortened.length})`);
      counts.over_60_fixed++;
      fixed = shortened;
    } else {
      counts.manual_review.push({ route, title: fixed, length: fixed.length });
    }
  }

  return { title: fixed, changes };
}

/**
 * Shorten a title to fit under 60 chars while keeping brand
 */
function shortenTitle(title, route) {
  const parts = title.split(' | ');
  if (parts.length < 2) return null;

  const brand = parts[parts.length - 1]; // "5 Star Roofing"
  let service = parts.slice(0, -1).join(' | ');

  // Strategy 1: Remove "in " from service name
  service = service.replace(/ in /g, ' ');
  let candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 2: Remove comma-space after city in "City, TX"
  service = service.replace(/, TX/g, ' TX');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 3: Remove extra descriptors
  service = service.replace(/ & Resources/g, '');
  service = service.replace(/ & Guide/g, '');
  service = service.replace(/ Services/g, '');
  service = service.replace(/ Specialists/g, '');
  service = service.replace(/ Experts/g, '');
  service = service.replace(/ Expert/g, '');
  service = service.replace(/ Guide/g, '');
  service = service.replace(/ Complete Pricing/g, '');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 4: Abbreviate "Roofing" -> "Roof" in service part
  service = service.replace(/Roofing/g, 'Roof');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 5: Remove year from service
  service = service.replace(/ 2025/g, '');
  service = service.replace(/ 2026/g, '');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 6: Remove "for Texas Homeowners" or similar
  service = service.replace(/ for Texas Homeowners/g, ' Texas');
  service = service.replace(/ for Texas Climate/g, ' Texas');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 7: Remove "Amarillo, Midland, Odessa" -> "West Texas"
  service = service.replace(/Amarillo, Midland, Odessa/g, 'West Texas');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 8: Remove "in " prefix
  service = service.replace(/^(.+?) in (.+)$/, '$1 $2');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 9: Remove multi-pipe middle segments
  const serviceParts = service.split(' | ');
  if (serviceParts.length > 1) {
    service = serviceParts[0];
    candidate = service + ' | ' + brand;
    if (candidate.length <= 60) return candidate;
  }

  // Strategy 10: Aggressive shortening - remove "Damage" where redundant
  service = service.replace(/Snow & Ice Damage /g, 'Snow & Ice ');
  service = service.replace(/Rain Damage /g, 'Rain ');
  service = service.replace(/Understanding Climate and /g, '');
  service = service.replace(/Emergency /g, '');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  // Strategy 11: Remove "Longevity" and similar
  service = service.replace(/ Longevity/g, '');
  candidate = service + ' | ' + brand;
  if (candidate.length <= 60) return candidate;

  return null;
}

/**
 * Replace the title value in the metadata block
 */
function replaceTitle(metaBlock, oldTitle, newTitle) {
  // Replace in the top-level title field only
  // Handle both quote types
  const escaped = oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(title:\\s*)(['"])${escaped}\\2`, 'g');

  // Track depth to only replace at top level
  const lines = metaBlock.split('\n');
  let depth = 0;
  const result = [];
  let replaced = false;

  for (const line of lines) {
    let newLine = line;

    // Count braces up to this point
    let lineDepth = depth;
    for (const ch of line) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
    }

    // Only replace at depth 1 (top level of metadata object)
    if (lineDepth === 1 && !replaced) {
      const titleMatch = line.match(/title:\s*(['"])([^'"]*)\1/);
      if (titleMatch && titleMatch[2] === oldTitle) {
        // Use double quotes for the new title to handle apostrophes
        const quote = newTitle.includes("'") ? '"' : titleMatch[1];
        newLine = line.replace(
          /title:\s*(['"])([^'"]*)\1/,
          `title: ${quote}${newTitle}${quote}`
        );
        replaced = true;
      }
    }

    result.push(newLine);
  }

  return result.join('\n');
}

/**
 * Replace openGraph title in metadata block
 */
function replaceOGTitle(metaBlock, newTitle) {
  // Find the openGraph section and replace its title
  let inOG = false;
  let ogDepth = 0;
  const lines = metaBlock.split('\n');
  const result = [];

  for (const line of lines) {
    let newLine = line;

    if (line.match(/openGraph:\s*\{/)) {
      inOG = true;
      ogDepth = 0;
    }

    if (inOG) {
      for (const ch of line) {
        if (ch === '{') ogDepth++;
        if (ch === '}') {
          ogDepth--;
          if (ogDepth === 0) inOG = false;
        }
      }

      const titleMatch = line.match(/title:\s*(['"])([^'"]*)\1/);
      if (titleMatch) {
        const quote = newTitle.includes("'") ? '"' : titleMatch[1];
        newLine = line.replace(
          /title:\s*(['"])([^'"]*)\1/,
          `title: ${quote}${newTitle}${quote}`
        );
      }
    }

    result.push(newLine);
  }

  return result.join('\n');
}

/**
 * Replace twitter title in metadata block
 */
function replaceTwitterTitle(metaBlock, newTitle) {
  let inTwitter = false;
  let twitterDepth = 0;
  const lines = metaBlock.split('\n');
  const result = [];

  for (const line of lines) {
    let newLine = line;

    if (line.match(/twitter:\s*\{/)) {
      inTwitter = true;
      twitterDepth = 0;
    }

    if (inTwitter) {
      for (const ch of line) {
        if (ch === '{') twitterDepth++;
        if (ch === '}') {
          twitterDepth--;
          if (twitterDepth === 0) inTwitter = false;
        }
      }

      const titleMatch = line.match(/title:\s*(['"])([^'"]*)\1/);
      if (titleMatch) {
        const quote = newTitle.includes("'") ? '"' : titleMatch[1];
        newLine = line.replace(
          /title:\s*(['"])([^'"]*)\1/,
          `title: ${quote}${newTitle}${quote}`
        );
      }
    }

    result.push(newLine);
  }

  return result.join('\n');
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const route = getRoute(filePath);

  const meta = extractMetadataBlock(content);
  if (!meta) {
    return { content, changed: false, route, title: null, newTitle: null, changes: [] };
  }

  const titleInfo = extractTitle(meta.block);
  if (!titleInfo) {
    return { content, changed: false, route, title: null, newTitle: null, changes: [] };
  }

  const originalTitle = titleInfo.value;
  const { title: fixedTitle, changes } = fixTitle(originalTitle, route);

  if (fixedTitle === originalTitle && changes.length === 0) {
    return { content, changed: false, route, title: originalTitle, newTitle: originalTitle, changes: [] };
  }

  // Apply the fix to the metadata block
  let newMetaBlock = replaceTitle(meta.block, originalTitle, fixedTitle);

  // Check for openGraph.title and sync it
  const ogTitle = extractOGTitle(meta.block);
  if (ogTitle) {
    newMetaBlock = replaceOGTitle(newMetaBlock, fixedTitle);
    changes.push('og-synced');
    counts.og_synced++;
  }

  // Check for twitter.title and sync it
  if (meta.block.includes('twitter:')) {
    const twitterMatch = meta.block.match(/twitter:\s*\{[\s\S]*?\}/);
    if (twitterMatch && twitterMatch[0].includes('title:')) {
      newMetaBlock = replaceTwitterTitle(newMetaBlock, fixedTitle);
      changes.push('twitter-synced');
    }
  }

  const newContent = content.substring(0, meta.startIdx) + newMetaBlock + content.substring(meta.endIdx);

  return { content: newContent, changed: true, route, title: originalTitle, newTitle: fixedTitle, changes };
}

// ============================================================
// MAIN
// ============================================================

if (REPORT) {
  console.log('\nMeta Title Report');
  console.log('='.repeat(80));
}

const files = findPageFiles(APP_DIR);
counts.files_total = files.length;

if (!REPORT) {
  console.log(`\nMeta Title Fix Script${DRY_RUN ? ' (DRY RUN)' : ''}`);
  console.log('='.repeat(60));
  console.log(`Found ${files.length} page.tsx files\n`);
}

const allTitles = []; // For report mode

for (const filePath of files) {
  const result = processFile(filePath);

  if (REPORT) {
    const meta = extractMetadataBlock(fs.readFileSync(filePath, 'utf-8'));
    const titleInfo = meta ? extractTitle(meta.block) : null;
    const currentTitle = titleInfo ? titleInfo.value : '(no title)';
    allTitles.push({
      route: result.route,
      title: currentTitle,
      length: currentTitle.length,
    });
    continue;
  }

  // Track for duplicate detection
  const finalTitle = result.newTitle || result.title;
  if (finalTitle) {
    if (!titleMap.has(finalTitle)) titleMap.set(finalTitle, []);
    titleMap.get(finalTitle).push(result.route);
  }

  if (result.changed) {
    counts.files_changed++;
    console.log(`  CHANGED: ${result.route}`);
    console.log(`    BEFORE: "${result.title}" (${result.title.length} chars)`);
    console.log(`    AFTER:  "${result.newTitle}" (${result.newTitle.length} chars)`);
    console.log(`    FIXES:  [${result.changes.join(', ')}]`);

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, result.content, 'utf-8');
    }
  } else {
    counts.files_unchanged++;
  }
}

if (REPORT) {
  // Sort by route
  allTitles.sort((a, b) => a.route.localeCompare(b.route));

  // Check issues
  let issueCount = 0;
  const issues = {
    missing_brand: [],
    over_60: [],
    txservice: [],
    missing_space_pipe: [],
    duplicates: [],
  };

  const reportTitleMap = new Map();

  for (const entry of allTitles) {
    console.log(`${entry.route.padEnd(55)} | ${String(entry.length).padStart(2)} | ${entry.title}`);

    if (!entry.title.includes('5 Star Roofing')) {
      issues.missing_brand.push(entry);
    }
    if (entry.length > 60) {
      issues.over_60.push(entry);
    }
    if (entry.title.includes('TXService')) {
      issues.txservice.push(entry);
    }
    if (/TX\|/.test(entry.title) && !/TX \|/.test(entry.title)) {
      issues.missing_space_pipe.push(entry);
    }

    if (!reportTitleMap.has(entry.title)) reportTitleMap.set(entry.title, []);
    reportTitleMap.get(entry.title).push(entry.route);
  }

  // Check for duplicates
  for (const [title, routes] of reportTitleMap) {
    if (routes.length > 1) {
      issues.duplicates.push({ title, routes });
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('ISSUE SUMMARY:');
  console.log(`  Total pages:               ${allTitles.length}`);
  console.log(`  Missing "5 Star Roofing":   ${issues.missing_brand.length}`);
  console.log(`  Over 60 characters:         ${issues.over_60.length}`);
  console.log(`  TXService typos:            ${issues.txservice.length}`);
  console.log(`  Missing space before pipe:  ${issues.missing_space_pipe.length}`);
  console.log(`  Duplicate titles:           ${issues.duplicates.length}`);

  if (issues.missing_brand.length > 0) {
    console.log('\n  Pages missing "5 Star Roofing":');
    for (const e of issues.missing_brand) {
      console.log(`    ${e.route}: "${e.title}"`);
    }
  }
  if (issues.over_60.length > 0) {
    console.log('\n  Pages over 60 chars:');
    for (const e of issues.over_60) {
      console.log(`    ${e.route}: "${e.title}" (${e.length} chars)`);
    }
  }
  if (issues.duplicates.length > 0) {
    console.log('\n  Duplicate titles:');
    for (const d of issues.duplicates) {
      console.log(`    "${d.title}" -> ${d.routes.join(', ')}`);
    }
  }

  const totalIssues = issues.missing_brand.length + issues.over_60.length +
                      issues.txservice.length + issues.missing_space_pipe.length +
                      issues.duplicates.length;
  console.log(`\n  TOTAL ISSUES: ${totalIssues}`);

} else {
  // Check for duplicates
  const duplicates = [];
  for (const [title, routes] of titleMap) {
    if (routes.length > 1) {
      duplicates.push({ title, routes });
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Summary:');
  console.log(`  Files processed:        ${counts.files_total}`);
  console.log(`  Files changed:          ${counts.files_changed}`);
  console.log(`  Files unchanged:        ${counts.files_unchanged}`);
  console.log(`  TXService fixes:        ${counts.txservice_fixed}`);
  console.log(`  Missing space fixes:    ${counts.missing_space_pipe}`);
  console.log(`  Truncated fixes:        ${counts.truncated_fixed}`);
  console.log(`  Commercial->Roofing:    ${counts.commercial_fixed}`);
  console.log(`  Bare 5Star expanded:    ${counts.bare_5star_fixed}`);
  console.log(`  Brand added:            ${counts.brand_added}`);
  console.log(`  Multi-pipe consolidated:${counts.multi_pipe_fixed}`);
  console.log(`  Over-60 shortened:      ${counts.over_60_fixed}`);
  console.log(`  Homepage META-06:       ${counts.homepage_fixed}`);
  console.log(`  OG titles synced:       ${counts.og_synced}`);

  if (duplicates.length > 0) {
    console.log(`\n  WARNING: ${duplicates.length} duplicate title(s):`);
    for (const d of duplicates) {
      console.log(`    "${d.title}" -> ${d.routes.join(', ')}`);
    }
  }

  if (counts.manual_review.length > 0) {
    console.log(`\n  MANUAL REVIEW NEEDED (${counts.manual_review.length}):`);
    for (const m of counts.manual_review) {
      console.log(`    ${m.route}: "${m.title}" (${m.length} chars)`);
    }
  }

  if (DRY_RUN) {
    console.log('\n  [DRY RUN - no files were modified]');
  }
}

console.log('');
