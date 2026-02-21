#!/usr/bin/env node
/**
 * Image Audit Script
 * Scans built HTML in out/ for all image URLs, validates they resolve,
 * checks for same-page duplicates, and reports R2 compliance.
 *
 * Usage: node scripts/audit-images.js
 * Exit code 0 = PASS, 1 = FAIL
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const OUT_DIR = path.join(__dirname, '..', 'out');
const CONCURRENCY = 10;

// Local files that are intentionally NOT on R2 (small static assets)
const LOCAL_ALLOWLIST = new Set(['/logo.png']);

// Collect all HTML files recursively
function getHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

// Extract image URLs from HTML content
function extractImageUrls(html) {
  const urls = new Set();

  // src="..." attributes (img tags)
  const srcRegex = /src="([^"]*?\.(jpg|jpeg|png|webp|avif|svg|gif)(\?[^"]*)?)"/gi;
  let match;
  while ((match = srcRegex.exec(html)) !== null) {
    urls.add(match[1]);
  }

  // url(...) in style attributes (background images)
  const urlRegex = /url\(([^)]*?\.(jpg|jpeg|png|webp|avif|svg|gif)(\?[^)]*)?)\)/gi;
  while ((match = urlRegex.exec(html)) !== null) {
    let url = match[1].replace(/['"]/g, '');
    urls.add(url);
  }

  // "image": "..." in JSON-LD script tags
  const jsonLdRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  while ((match = jsonLdRegex.exec(html)) !== null) {
    const jsonContent = match[1];
    const imageRegex = /"image"\s*:\s*"([^"]+)"/g;
    let imgMatch;
    while ((imgMatch = imageRegex.exec(jsonContent)) !== null) {
      urls.add(imgMatch[1]);
    }
  }

  return urls;
}

// Check same-page duplicates (visual elements only: src + background-image, not schema)
function findDuplicates(html) {
  const allUrls = [];
  const duplicates = [];

  // Strip script tags to avoid counting schema "image" as visual duplicates
  const htmlNoScripts = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  // Collect ALL visual image URLs (not deduplicated)
  const srcRegex = /src="([^"]*?\.(jpg|jpeg|png|webp|avif|svg|gif)(\?[^"]*)?)"/gi;
  let match;
  while ((match = srcRegex.exec(htmlNoScripts)) !== null) {
    allUrls.push(match[1]);
  }

  const urlRegex = /url\(([^)]*?\.(jpg|jpeg|png|webp|avif|svg|gif)(\?[^)]*)?)\)/gi;
  while ((match = urlRegex.exec(htmlNoScripts)) !== null) {
    allUrls.push(match[1].replace(/['"]/g, ''));
  }

  // Count occurrences
  const counts = {};
  for (const url of allUrls) {
    counts[url] = (counts[url] || 0) + 1;
  }

  for (const [url, count] of Object.entries(counts)) {
    if (count > 1) {
      duplicates.push({ url, count });
    }
  }

  return duplicates;
}

// HEAD request with redirect following
function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.request(url, { method: 'HEAD', timeout: 10000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        checkUrl(res.headers.location).then(resolve);
      } else {
        resolve(res.statusCode);
      }
    });
    req.on('error', () => resolve('ERROR'));
    req.on('timeout', () => { req.destroy(); resolve('TIMEOUT'); });
    req.end();
  });
}

// Process URLs with concurrency limit
async function checkUrlsBatched(urls, limit) {
  const results = new Map();
  const pending = [...urls];

  async function processNext() {
    if (pending.length === 0) return;
    const url = pending.shift();
    const code = await checkUrl(url);
    results.set(url, code);
    await processNext();
  }

  const workers = [];
  for (let i = 0; i < Math.min(limit, pending.length); i++) {
    workers.push(processNext());
  }
  await Promise.all(workers);
  return results;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('ERROR: out/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const htmlFiles = getHtmlFiles(OUT_DIR);
  console.log(`Scanning ${htmlFiles.length} HTML files in out/\n`);

  const allUrls = new Set();
  const urlPages = new Map(); // url -> [pages]
  const allDuplicates = []; // { page, url, count }
  let totalImageRefs = 0;

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf-8');
    const relPath = path.relative(OUT_DIR, file);

    const urls = extractImageUrls(html);
    totalImageRefs += urls.size;

    for (const url of urls) {
      allUrls.add(url);
      if (!urlPages.has(url)) urlPages.set(url, []);
      urlPages.get(url).push(relPath);
    }

    const dupes = findDuplicates(html);
    for (const dupe of dupes) {
      allDuplicates.push({ page: relPath, ...dupe });
    }
  }

  console.log(`Total image references: ${totalImageRefs}`);
  console.log(`Unique image URLs: ${allUrls.size}\n`);

  // Classify URLs
  const httpUrls = [];
  const localUrls = [];
  const dataUrls = [];
  let r2Count = 0;
  let nonR2Count = 0;

  for (const url of allUrls) {
    if (url.startsWith('data:')) {
      dataUrls.push(url);
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
      httpUrls.push(url);
      if (url.includes('r2.dev')) {
        r2Count++;
      } else {
        nonR2Count++;
      }
    } else {
      localUrls.push(url);
      if (!LOCAL_ALLOWLIST.has(url)) {
        nonR2Count++;
      }
    }
  }

  // Check HTTP URLs
  console.log(`Checking ${httpUrls.length} HTTP image URLs (concurrency: ${CONCURRENCY})...`);
  const httpResults = await checkUrlsBatched(httpUrls, CONCURRENCY);

  // Check local URLs
  console.log(`Checking ${localUrls.length} local image URLs...\n`);
  const localResults = new Map();
  for (const url of localUrls) {
    // Resolve relative to out/
    let filePath;
    if (url.startsWith('/')) {
      filePath = path.join(OUT_DIR, url);
    } else {
      filePath = path.join(OUT_DIR, url);
    }
    localResults.set(url, fs.existsSync(filePath) ? 200 : 404);
  }

  // Report broken URLs
  const brokenUrls = [];
  for (const [url, code] of httpResults) {
    if (code !== 200) {
      brokenUrls.push({ url, code, pages: urlPages.get(url) || [] });
    }
  }
  for (const [url, code] of localResults) {
    if (code !== 200) {
      brokenUrls.push({ url, code, pages: urlPages.get(url) || [] });
    }
  }

  // Output report
  console.log('=== IMAGE AUDIT REPORT ===\n');

  if (brokenUrls.length > 0) {
    console.log(`BROKEN URLs: ${brokenUrls.length}`);
    for (const { url, code, pages } of brokenUrls) {
      console.log(`  [${code}] ${url}`);
      for (const page of pages.slice(0, 3)) {
        console.log(`    -> ${page}`);
      }
      if (pages.length > 3) {
        console.log(`    -> ...and ${pages.length - 3} more pages`);
      }
    }
    console.log();
  } else {
    console.log('BROKEN URLs: 0 (all images resolve)\n');
  }

  if (allDuplicates.length > 0) {
    console.log(`SAME-PAGE DUPLICATES: ${allDuplicates.length}`);
    for (const { page, url, count } of allDuplicates) {
      console.log(`  [${count}x] ${url}`);
      console.log(`    -> ${page}`);
    }
    console.log();
  } else {
    console.log('SAME-PAGE DUPLICATES: 0\n');
  }

  console.log(`R2 COMPLIANCE:`);
  console.log(`  R2 URLs: ${r2Count}`);
  console.log(`  Non-R2 URLs: ${nonR2Count}`);
  console.log(`  Data URIs: ${dataUrls.length}`);
  const allowlistedCount = localUrls.filter(u => LOCAL_ALLOWLIST.has(u)).length;
  const compliancePct = allUrls.size > 0
    ? ((r2Count + dataUrls.length + allowlistedCount) / allUrls.size * 100).toFixed(1)
    : '100.0';
  console.log(`  Compliance: ${compliancePct}%\n`);

  if (nonR2Count > 0) {
    console.log('NON-R2 IMAGE URLs:');
    for (const url of [...localUrls, ...httpUrls.filter(u => !u.includes('r2.dev'))]) {
      if (!url.startsWith('data:')) {
        console.log(`  ${url}`);
        const pages = urlPages.get(url) || [];
        for (const page of pages.slice(0, 2)) {
          console.log(`    -> ${page}`);
        }
      }
    }
    console.log();
  }

  // Final verdict
  const pass = brokenUrls.length === 0 && nonR2Count === 0;
  console.log(`RESULT: ${pass ? 'PASS' : 'FAIL'}`);

  if (!pass) {
    if (brokenUrls.length > 0) console.log(`  - ${brokenUrls.length} broken URL(s)`);
    if (nonR2Count > 0) console.log(`  - ${nonR2Count} non-R2 image URL(s)`);
  }

  process.exit(pass ? 0 : 1);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
