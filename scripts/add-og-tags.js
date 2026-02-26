#!/usr/bin/env node
/**
 * Add page-specific Open Graph tags to all page.tsx files that have metadata but no openGraph.
 *
 * Usage:
 *   node scripts/add-og-tags.js --dry-run   # Preview changes
 *   node scripts/add-og-tags.js              # Execute changes
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://5starroofingpros.com';
const SITE_NAME = '5 Star Roofing';
const OG_IMAGE_URL = 'https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg';
const OG_IMAGE_ALT = '5 Star Roofing - Professional Roofing Services in Amarillo, TX';

const dryRun = process.argv.includes('--dry-run');

const appDir = path.resolve(__dirname, '..', 'app');

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

function getSlug(filePath) {
  const rel = path.relative(appDir, path.dirname(filePath));
  // Root page.tsx has empty rel
  if (!rel || rel === '.') return '';
  return rel;
}

function extractMetadataValue(content, key) {
  // Match: key: "value" or key: 'value'
  const regex = new RegExp(`${key}:\\s*["'\`]([^"'\`]+)["'\`]`);
  const match = content.match(regex);
  return match ? match[1] : null;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Must have metadata export
  if (!content.includes('export const metadata')) {
    return { status: 'no-metadata', file: filePath };
  }

  // Skip if already has openGraph
  if (content.includes('openGraph')) {
    return { status: 'already-has-og', file: filePath };
  }

  const title = extractMetadataValue(content, 'title');
  const description = extractMetadataValue(content, 'description');

  if (!title || !description) {
    return { status: 'no-title-or-desc', file: filePath };
  }

  const slug = getSlug(filePath);
  const pageUrl = slug ? `${SITE_URL}/${slug}/` : `${SITE_URL}/`;

  // Escape any double quotes in title/description for safe insertion
  const safeTitle = title.replace(/"/g, '\\"');
  const safeDesc = description.replace(/"/g, '\\"');

  // Build the openGraph block
  const ogBlock = `  openGraph: {
    title: "${safeTitle}",
    description: "${safeDesc}",
    url: "${pageUrl}",
    siteName: "${SITE_NAME}",
    images: [
      {
        url: "${OG_IMAGE_URL}",
        width: 1280,
        height: 720,
        alt: "${OG_IMAGE_ALT}",
      },
    ],
    locale: "en_US",
    type: "website",
  },`;

  // Find the description line and insert after it
  // Handle two cases:
  // 1. Normal: description on its own line ending with comma
  // 2. Compact: description line also has closing }; e.g. description: "...",};
  const compactRegex = /^(\s*description:\s*["'`][^"'`]+["'`]),?\s*\}\s*;/m;
  const compactMatch = content.match(compactRegex);

  if (compactMatch) {
    // Case 2: description + closing brace on same line
    // Replace the whole compact metadata closing with description + OG block + closing
    const fullMatch = compactMatch[0];
    const descPart = compactMatch[1]; // just the description: "..." part
    const newContent = content.replace(fullMatch, descPart + ',\n' + ogBlock + '\n};');

    if (!dryRun) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
    }
    return { status: 'modified', file: filePath, slug, title };
  }

  const descLineRegex = /^(\s*description:\s*["'`].*["'`],?\s*)$/m;
  const match = content.match(descLineRegex);

  if (!match) {
    return { status: 'no-desc-line-match', file: filePath };
  }

  const descLine = match[0];
  // Ensure the description line ends with a comma
  const descLineWithComma = descLine.trimEnd().endsWith(',')
    ? descLine
    : descLine.replace(/(\s*)$/, ',$1');

  const newContent = content.replace(descLine, descLineWithComma + '\n' + ogBlock);

  if (!dryRun) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return { status: 'modified', file: filePath, slug, title };
}

// Main
const pageFiles = findPageFiles(appDir);
const results = { modified: [], skipped: [], errors: [] };

for (const file of pageFiles) {
  const result = processFile(file);
  if (result.status === 'modified') {
    results.modified.push(result);
  } else if (result.status === 'already-has-og') {
    results.skipped.push(result);
  } else {
    results.errors.push(result);
  }
}

console.log(`\n${dryRun ? '[DRY RUN] ' : ''}Open Graph Tag Addition Results:`);
console.log(`  Modified: ${results.modified.length} pages`);
console.log(`  Skipped (already have OG): ${results.skipped.length} pages`);
if (results.errors.length > 0) {
  console.log(`  Errors: ${results.errors.length} pages`);
  for (const err of results.errors) {
    console.log(`    - ${err.status}: ${path.relative(appDir, err.file)}`);
  }
}
console.log(`  Total scanned: ${pageFiles.length} pages\n`);

if (dryRun && results.modified.length > 0) {
  console.log('Pages that would be modified:');
  for (const r of results.modified.slice(0, 10)) {
    console.log(`  /${r.slug || '(homepage)'}/ - "${r.title}"`);
  }
  if (results.modified.length > 10) {
    console.log(`  ... and ${results.modified.length - 10} more`);
  }
}
