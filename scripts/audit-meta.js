#!/usr/bin/env node
/**
 * audit-meta.js - Phase 3 quality gate: comprehensive meta title & description audit
 *
 * Usage:
 *   node scripts/audit-meta.js                    # Run all checks
 *   node scripts/audit-meta.js --generate-keyword-map  # Also write keyword-map.md
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const KEYWORD_MAP_PATH = path.join(__dirname, '..', '.planning', 'brand', 'keyword-map.md');

const generateKeywordMap = process.argv.includes('--generate-keyword-map');

// ── Collect all page.tsx files ──────────────────────────────────────────

function findPages(dir, pages = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findPages(full, pages);
    } else if (entry.name === 'page.tsx') {
      pages.push(full);
    }
  }
  return pages;
}

// ── Extract metadata from source ────────────────────────────────────────

function extractMetadata(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const rel = '/' + path.relative(APP_DIR, path.dirname(filePath)).replace(/\\/g, '/');
  const url = rel === '/.' ? '/' : rel + '/';

  // Extract title
  let title = null;
  // Try double-quoted title first, then single-quoted
  const titleDQ = src.match(/title:\s*"([^"]*)"/);
  const titleSQ = src.match(/title:\s*'([^']*)'/);
  if (titleDQ) title = titleDQ[1];
  else if (titleSQ) title = titleSQ[1];

  // Extract description (first occurrence that's not inside openGraph/twitter)
  let description = null;
  // Match description in the metadata block (not nested in openGraph/twitter)
  const descDQ = src.match(/export const metadata[\s\S]*?(?:^|\n)\s*description:\s*"([^"]*)"/m);
  const descSQ = src.match(/export const metadata[\s\S]*?(?:^|\n)\s*description:\s*'([^']*)'/m);
  if (descDQ) description = descDQ[1];
  else if (descSQ) description = descSQ[1];

  return { url, title, description, filePath };
}

// ── Run all checks ──────────────────────────────────────────────────────

const pages = findPages(APP_DIR).map(extractMetadata);
pages.sort((a, b) => a.url.localeCompare(b.url));

console.log(`\n=== Meta Audit: ${pages.length} pages scanned ===\n`);

let allPass = true;
const issues = {};

function fail(category, url, msg) {
  allPass = false;
  if (!issues[category]) issues[category] = [];
  issues[category].push({ url, msg });
}

// ── 1. Title checks ────────────────────────────────────────────────────

// 1a. Every page has title containing "5 Star Roofing"
for (const p of pages) {
  if (!p.title) {
    fail('title-missing', p.url, 'No title found');
  } else if (!p.title.includes('5 Star Roofing')) {
    fail('title-brand', p.url, `Title missing "5 Star Roofing": "${p.title}"`);
  }
}

// 1b. Every title under 60 chars
for (const p of pages) {
  if (p.title && p.title.length > 60) {
    fail('title-length', p.url, `Title ${p.title.length} chars: "${p.title}"`);
  }
}

// 1c. No duplicate titles
const titleMap = new Map();
for (const p of pages) {
  if (!p.title) continue;
  if (titleMap.has(p.title)) {
    fail('title-duplicate', p.url, `Duplicate title with ${titleMap.get(p.title)}: "${p.title}"`);
  } else {
    titleMap.set(p.title, p.url);
  }
}

// 1d. No "TXService" typos
for (const p of pages) {
  if (p.title && p.title.includes('TXService')) {
    fail('title-typo', p.url, `TXService typo: "${p.title}"`);
  }
}

// 1e. No missing space before pipe
for (const p of pages) {
  if (p.title && /[^ ]\|/.test(p.title)) {
    fail('title-pipe-space', p.url, `Missing space before pipe: "${p.title}"`);
  }
}

// 1f. Homepage contains "Amarillo" and "Residential" (META-06)
const homepage = pages.find(p => p.url === '/');
if (homepage && homepage.title) {
  if (!homepage.title.includes('Amarillo')) {
    fail('title-homepage', '/', `Homepage title missing "Amarillo": "${homepage.title}"`);
  }
  if (!homepage.title.toLowerCase().includes('residential')) {
    fail('title-homepage', '/', `Homepage title missing "Residential": "${homepage.title}"`);
  }
}

// ── 2. Description checks ──────────────────────────────────────────────

// 2a. Under 160 chars
for (const p of pages) {
  if (p.description && p.description.length > 160) {
    fail('desc-length', p.url, `Description ${p.description.length} chars: "${p.description.slice(0, 80)}..."`);
  }
}

// 2b. Starts with uppercase
for (const p of pages) {
  if (p.description && /^[a-z]/.test(p.description)) {
    fail('desc-lowercase', p.url, `Description starts lowercase: "${p.description.slice(0, 60)}..."`);
  }
}

// 2c. Contains CTA
const ctaPatterns = /call|free|schedule|\(806\)|622-6041/i;
for (const p of pages) {
  if (p.description && !ctaPatterns.test(p.description)) {
    fail('desc-cta', p.url, `Description missing CTA: "${p.description.slice(0, 80)}..."`);
  }
}

// 2d. No "Looking for..." descriptions
for (const p of pages) {
  if (p.description && /^Looking for/i.test(p.description)) {
    fail('desc-looking', p.url, `Description starts with "Looking for": "${p.description.slice(0, 60)}..."`);
  }
}

// 2e. No double commas
for (const p of pages) {
  if (p.description && p.description.includes(',,')) {
    fail('desc-double-comma', p.url, `Double comma in description`);
  }
}

// 2f. No duplicate descriptions
const descMap = new Map();
for (const p of pages) {
  if (!p.description) continue;
  if (descMap.has(p.description)) {
    fail('desc-duplicate', p.url, `Duplicate description with ${descMap.get(p.description)}`);
  } else {
    descMap.set(p.description, p.url);
  }
}

// ── 3. Summary output ──────────────────────────────────────────────────

const checks = [
  'title-missing', 'title-brand', 'title-length', 'title-duplicate',
  'title-typo', 'title-pipe-space', 'title-homepage',
  'desc-length', 'desc-lowercase', 'desc-cta', 'desc-looking',
  'desc-double-comma', 'desc-duplicate'
];

console.log('CHECK RESULTS:');
console.log('─'.repeat(60));
for (const check of checks) {
  const count = (issues[check] || []).length;
  const status = count === 0 ? 'PASS' : 'FAIL';
  console.log(`  ${status}  ${check} ${count > 0 ? `(${count} issues)` : ''}`);
  if (count > 0) {
    for (const { url, msg } of issues[check]) {
      console.log(`        ${url}: ${msg}`);
    }
  }
}

console.log('─'.repeat(60));
console.log(`\nOVERALL: ${allPass ? 'PASS' : 'FAIL'}\n`);

// ── 4. Keyword map generation ──────────────────────────────────────────

if (generateKeywordMap) {
  console.log('Generating keyword map...');

  const rows = [];
  const keywordToUrls = new Map();

  for (const p of pages) {
    if (!p.title) continue;

    // Derive primary keyword: strip "| 5 Star Roofing" suffix, strip trailing TX, lowercase
    let keyword = p.title
      .replace(/\s*\|\s*5 Star Roofing\s*$/, '')
      .replace(/\s+TX\s*$/, '')
      .trim()
      .toLowerCase();

    rows.push({
      url: p.url,
      keyword,
      title: p.title,
      titleLen: p.title.length,
      descLen: p.description ? p.description.length : 0,
    });

    if (!keywordToUrls.has(keyword)) keywordToUrls.set(keyword, []);
    keywordToUrls.get(keyword).push(p.url);
  }

  // Detect cannibalization
  let cannibalWarnings = 0;
  for (const [kw, urls] of keywordToUrls) {
    if (urls.length > 1) {
      cannibalWarnings++;
      console.log(`  WARNING: Keyword "${kw}" shared by: ${urls.join(', ')}`);
    }
  }
  if (cannibalWarnings === 0) {
    console.log('  No keyword cannibalization detected.');
  } else {
    console.log(`  ${cannibalWarnings} potential cannibalization(s) detected.`);
  }

  // Build markdown
  const table = rows.map(r =>
    `| ${r.url} | ${r.keyword} | ${r.title} | ${r.titleLen} | ${r.descLen} |`
  ).join('\n');

  const md = `# Keyword Map

Primary keyword assignments per page to prevent cannibalization. Reference this in Phases 3, 6, 8.

**Rule:** No two pages may target the same primary keyword. If overlap is detected, one page must redirect to the other or differentiate its focus.

## Status

Populated during Phase 3 Plan 3 from meta title audit.

## Keyword Assignments

| URL | Primary Keyword | Title | Title Length | Description Length |
|-----|----------------|-------|-------------|-------------------|
${table}

**Total pages:** ${rows.length}
**Cannibalization warnings:** ${cannibalWarnings}

## Cannibalization Prevention Rules

1. Every page's meta title must contain a unique primary keyword phrase
2. No two pages should have H1s targeting the same search intent
3. Hub pages target broad service terms (e.g., "hail damage repair")
4. Spoke pages target city-specific terms (e.g., "hail damage repair amarillo")
5. When in doubt, check if Google would show both pages for the same query -- if yes, consolidate

## Known Resolved Conflicts (Phase 2)

- \`expert-roofing-services-in-amarillo\` + \`roofing-services-in-amarillo-tx\` -- both deleted (redirected to amarillo-texas-roofing)
- \`roof-heavy-rain-damage-in-amarillo\` + \`heavy-rain-damage-roof-repair-in-amarillo\` -- first deleted (redirected to second)
- 36 additional variant pages consolidated in Phase 2 plans 01-02
- 8 more redundant pages consolidated in Phase 2 gap closure plan 03

## Populated During

- **Phase 3:** Full keyword map created from title/H1 audit
- **Phase 6:** Hub page keywords added (must not overlap spoke keywords)
- **Phase 8:** Content enrichment may shift secondary keywords

---
*Created: 2026-02-20*
*Populated: Phase 3 Plan 3 (2026-02-20)*
`;

  fs.writeFileSync(KEYWORD_MAP_PATH, md, 'utf8');
  console.log(`Keyword map written to ${KEYWORD_MAP_PATH} (${rows.length} entries)`);
}

process.exit(allPass ? 0 : 1);
