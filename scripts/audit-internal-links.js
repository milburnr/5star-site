#!/usr/bin/env node
/**
 * Internal link integrity checker.
 * Scans built HTML in out/ for all internal href="/..." links
 * and verifies each resolves to a real page.
 *
 * Exit code: 0 = PASS, 1 = FAIL
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findHtmlFiles(full));
    else if (entry.name.endsWith('.html')) results.push(full);
  }
  return results;
}

function resolveTarget(href) {
  // Root path
  if (href === '/') return path.join(OUT_DIR, 'index.html');
  // Ends with slash — directory with index.html
  if (href.endsWith('/')) return path.join(OUT_DIR, href, 'index.html');
  // No trailing slash — check direct file first, then directory/index.html
  const directPath = path.join(OUT_DIR, href);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) return directPath;
  return path.join(OUT_DIR, href, 'index.html');
}

const htmlFiles = findHtmlFiles(OUT_DIR);
const broken = [];
let totalLinks = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const hrefRegex = /href="(\/[^"]*?)"/g;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    let href = match[1];
    // Strip query string and hash fragment
    href = href.split('?')[0].split('#')[0];
    // Skip non-path hrefs (already filtered by leading / in regex)
    // Skip tel:, mailto:, javascript: (these won't match /... pattern)
    if (href === '') continue;
    totalLinks++;
    const targetPath = resolveTarget(href);
    if (!fs.existsSync(targetPath)) {
      const rel = path.relative(OUT_DIR, file);
      broken.push({ source: rel, href: match[1].split('?')[0].split('#')[0] });
    }
  }
}

console.log(`\n=== INTERNAL LINK AUDIT ===\n`);
console.log(`Pages scanned: ${htmlFiles.length}`);
console.log(`Internal links checked: ${totalLinks}`);

if (broken.length === 0) {
  console.log(`\nRESULT: PASS — All internal links resolve\n`);
  process.exit(0);
} else {
  // Group by target href
  const byHref = {};
  for (const b of broken) {
    if (!byHref[b.href]) byHref[b.href] = [];
    byHref[b.href].push(b.source);
  }
  const uniqueTargets = Object.keys(byHref).sort();

  console.log(`\nRESULT: FAIL — ${broken.length} broken internal links (${uniqueTargets.length} unique targets)\n`);
  for (const href of uniqueTargets) {
    const sources = byHref[href];
    console.log(`  ${href} (referenced by ${sources.length} page${sources.length > 1 ? 's' : ''})`);
    // Show up to 5 source pages
    for (const s of sources.slice(0, 5)) {
      console.log(`    - ${s}`);
    }
    if (sources.length > 5) {
      console.log(`    ... and ${sources.length - 5} more`);
    }
  }
  console.log('');
  process.exit(1);
}
