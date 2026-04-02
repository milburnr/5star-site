#!/usr/bin/env node
/**
 * Audit broken images on the live site.
 * Extracts all unique image src URLs from built HTML,
 * then HEAD-checks each one for 200 status.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const OUT_DIR = path.resolve(__dirname, '../out');
const CONCURRENCY = 20;

function walkHtml(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkHtml(full));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function extractImageUrls(html) {
  const urls = new Set();
  // Match src="..." in img tags
  const imgRe = /<img[^>]+src="([^"]+)"/gi;
  let m;
  while ((m = imgRe.exec(html)) !== null) {
    const url = m[1];
    if (url.startsWith('http')) urls.add(url);
    else if (url.startsWith('/')) urls.add('https://5starroofingpros.com' + url);
  }
  // Also match srcset
  const srcsetRe = /srcset="([^"]+)"/gi;
  while ((m = srcsetRe.exec(html)) !== null) {
    m[1].split(',').forEach(part => {
      const u = part.trim().split(/\s+/)[0];
      if (u.startsWith('http')) urls.add(u);
      else if (u.startsWith('/')) urls.add('https://5starroofingpros.com' + u);
    });
  }
  return urls;
}

function headRequest(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    try {
      const req = lib.request(url, { method: 'HEAD' }, (res) => {
        res.resume();
        resolve({ url, status: res.statusCode });
      });
      req.on('error', (err) => resolve({ url, status: 0, error: err.message }));
      req.setTimeout(10000, () => { req.destroy(); resolve({ url, status: 0, error: 'timeout' }); });
      req.end();
    } catch (err) {
      resolve({ url, status: 0, error: err.message });
    }
  });
}

async function main() {
  console.log('🔍 Scanning built HTML files...');
  const htmlFiles = walkHtml(OUT_DIR);
  console.log(`   Found ${htmlFiles.length} HTML files`);

  const allUrls = new Set();
  for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf-8');
    extractImageUrls(html).forEach(u => allUrls.add(u));
  }

  const urls = [...allUrls];
  console.log(`   Found ${urls.length} unique image URLs\n`);

  const broken = [];
  let done = 0;

  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(headRequest));
    results.forEach(r => {
      done++;
      if (r.status !== 200 && r.status !== 301 && r.status !== 302) {
        broken.push(r);
      }
    });
    process.stdout.write(`\r  Checked ${done}/${urls.length}  |  ${broken.length} broken   `);
  }

  console.log('\n');

  if (broken.length === 0) {
    console.log('✅ No broken images found!');
  } else {
    console.log(`❌ ${broken.length} broken image(s):\n`);
    broken.forEach(r => console.log(`  [${r.status}] ${r.url}${r.error ? '  (' + r.error + ')' : ''}`));

    const outFile = path.resolve(__dirname, '../scripts/broken-images.json');
    fs.writeFileSync(outFile, JSON.stringify(broken, null, 2));
    console.log(`\nSaved to scripts/broken-images.json`);
  }
}

main().catch(console.error);
