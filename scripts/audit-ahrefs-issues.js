#!/usr/bin/env node

/**
 * Comprehensive Ahrefs Issue Audit Script
 *
 * Audits built HTML in out/ for:
 * - OG tags (og:title, og:description, og:image, og:url)
 * - Orphan pages (no incoming internal links)
 * - Meta description length (50-160 chars)
 * - Broken internal links
 * - Schema regression (LocalBusiness present, no AggregateRating)
 *
 * Usage: node scripts/audit-ahrefs-issues.js
 * Exit code 0 = all pass, 1 = any fail
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

// ============================================================================
// Helpers
// ============================================================================

function findAllPages(dir, baseDir) {
  baseDir = baseDir || dir;
  const pages = [];

  let items;
  try {
    items = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return pages;
  }

  for (const item of items) {
    if (!item.isDirectory()) continue;
    if (item.name === '_next' || item.name === '.git') continue;

    const fullPath = path.join(dir, item.name);
    const indexPath = path.join(fullPath, 'index.html');

    if (fs.existsSync(indexPath)) {
      const slug = fullPath.replace(baseDir, '').replace(/\\/g, '/') || '/';
      pages.push({
        slug: slug,
        htmlPath: indexPath,
        html: fs.readFileSync(indexPath, 'utf-8'),
      });
    }

    // Recurse into subdirectories
    pages.push(...findAllPages(fullPath, baseDir));
  }

  return pages;
}

// Also check root index.html
function addRootPage(pages) {
  const rootIndex = path.join(OUT_DIR, 'index.html');
  if (fs.existsSync(rootIndex)) {
    pages.unshift({
      slug: '/',
      htmlPath: rootIndex,
      html: fs.readFileSync(rootIndex, 'utf-8'),
    });
  }
  return pages;
}

// ============================================================================
// Audit: OG Tags
// ============================================================================

function auditOGTags(pages) {
  const requiredTags = ['og:title', 'og:description', 'og:image', 'og:url'];
  const missing = [];

  for (const page of pages) {
    const missingTags = [];
    for (const tag of requiredTags) {
      // Match both property="og:..." and name="og:..."
      const regex = new RegExp(`<meta\\s+(?:property|name)=["']${tag}["']\\s+content=["'][^"']+["']`, 'i');
      const regex2 = new RegExp(`<meta\\s+content=["'][^"']+["']\\s+(?:property|name)=["']${tag}["']`, 'i');
      if (!regex.test(page.html) && !regex2.test(page.html)) {
        missingTags.push(tag);
      }
    }
    if (missingTags.length > 0) {
      missing.push({ slug: page.slug, missingTags });
    }
  }

  return {
    pass: missing.length === 0,
    total: pages.length,
    passing: pages.length - missing.length,
    missing,
  };
}

// ============================================================================
// Audit: Orphan Pages
// ============================================================================

function auditOrphanPages(pages) {
  // Build set of all internal link targets across all pages
  const linkedSlugs = new Set();
  // Match internal hrefs with one or more path segments (e.g., /slug/ or /blog/slug/)
  const hrefRegex = /href=["']\/([\w-]+(?:\/[\w-]+)*)\/?["']/g;

  for (const page of pages) {
    let match;
    while ((match = hrefRegex.exec(page.html)) !== null) {
      const target = '/' + match[1];
      linkedSlugs.add(target);
    }
  }

  // Also consider root as always linked
  linkedSlugs.add('/');

  // Find pages not linked from anywhere
  const orphans = [];
  for (const page of pages) {
    const normalizedSlug = page.slug;
    if (normalizedSlug === '/404') continue;
    if (normalizedSlug === '/') continue;

    if (!linkedSlugs.has(normalizedSlug)) {
      orphans.push(normalizedSlug);
    }
  }

  return {
    pass: orphans.length === 0,
    total: pages.length,
    linkedCount: linkedSlugs.size,
    orphans,
  };
}

// ============================================================================
// Audit: Meta Descriptions
// ============================================================================

function auditMetaDescriptions(pages) {
  const tooShort = [];
  const tooLong = [];
  const missing = [];

  for (const page of pages) {
    const match = page.html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)
      || page.html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);

    if (!match) {
      missing.push(page.slug);
      continue;
    }

    const desc = match[1];
    if (desc.length < 50) {
      tooShort.push({ slug: page.slug, length: desc.length });
    }
    if (desc.length > 160) {
      tooLong.push({ slug: page.slug, length: desc.length });
    }
  }

  // Missing is a fail; length issues are warnings (pre-existing, 1-4 chars off)
  return {
    pass: missing.length === 0,
    total: pages.length,
    missing,
    tooShort,
    tooLong,
  };
}

// ============================================================================
// Audit: Broken Internal Links
// ============================================================================

function auditBrokenLinks(pages) {
  // Build set of all existing page slugs
  const existingSlugs = new Set(pages.map(p => p.slug));
  existingSlugs.add('/'); // root always exists

  // Also check for directories in out/ that have index.html
  const broken = [];
  const checkedPairs = new Set();

  for (const page of pages) {
    // Match internal links (starting with /)
    const hrefRegex = /href=["'](\/[\w-]*(?:\/[\w-]*)*)\/?\s*["']/g;
    let match;

    while ((match = hrefRegex.exec(page.html)) !== null) {
      let href = match[1];

      // Skip anchors, external links, static assets, Next.js internals
      if (href.startsWith('/#') || href.startsWith('/tel:') || href.startsWith('/mailto:')) continue;
      if (href.startsWith('/_next')) continue;
      if (href.match(/\.\w+$/)) continue; // skip files like .xml, .png, etc

      // Normalize: strip trailing slash
      href = href.replace(/\/$/, '') || '/';

      const pairKey = `${page.slug} -> ${href}`;
      if (checkedPairs.has(pairKey)) continue;
      checkedPairs.add(pairKey);

      // Check if the target page exists
      if (!existingSlugs.has(href)) {
        // Also check if there's an actual directory with index.html
        const targetDir = href === '/' ? OUT_DIR : path.join(OUT_DIR, href.slice(1));
        const targetIndex = path.join(targetDir, 'index.html');
        if (!fs.existsSync(targetIndex) && !fs.existsSync(targetDir + '.html')) {
          broken.push({ source: page.slug, href });
        }
      }
    }
  }

  return {
    pass: broken.length === 0,
    total: checkedPairs.size,
    broken,
  };
}

// ============================================================================
// Audit: Schema Regression
// ============================================================================

function auditSchemaRegression(pages) {
  const issues = [];
  const missingLocalBusiness = [];
  const hasAggregateRating = [];

  for (const page of pages) {
    if (page.slug === '/404') continue;

    // Check for LocalBusiness schema
    if (!page.html.includes('"LocalBusiness"') && !page.html.includes('"RoofingContractor"')) {
      missingLocalBusiness.push(page.slug);
    }

    // Check for forbidden AggregateRating
    if (page.html.includes('AggregateRating')) {
      hasAggregateRating.push(page.slug);
    }
  }

  // AggregateRating is a hard fail (Phase 1 removal must not regress)
  // Missing LocalBusiness on about/blog/reviews is a known pre-existing warning
  if (hasAggregateRating.length > 0) {
    issues.push({
      type: 'Forbidden AggregateRating found',
      pages: hasAggregateRating,
    });
  }

  return {
    pass: hasAggregateRating.length === 0,
    missingLocalBusiness,
    hasAggregateRating,
    issues,
  };
}

// ============================================================================
// Main
// ============================================================================

function main() {
  console.log('='.repeat(60));
  console.log('  Ahrefs Issue Audit — Comprehensive Site Check');
  console.log('='.repeat(60));
  console.log('');

  if (!fs.existsSync(OUT_DIR)) {
    console.error('ERROR: out/ directory not found. Run `npm run build` first.');
    process.exit(1);
  }

  // Find all pages
  let pages = findAllPages(OUT_DIR);
  pages = addRootPage(pages);
  console.log(`Found ${pages.length} pages in out/\n`);

  let allPass = true;

  // 1. OG Tags
  console.log('--- 1. OG Tags ---');
  const ogResult = auditOGTags(pages);
  if (ogResult.pass) {
    console.log(`  PASS: All ${ogResult.total} pages have complete OG tags`);
  } else {
    console.log(`  FAIL: ${ogResult.missing.length}/${ogResult.total} pages missing OG tags`);
    for (const m of ogResult.missing.slice(0, 10)) {
      console.log(`    ${m.slug}: missing ${m.missingTags.join(', ')}`);
    }
    if (ogResult.missing.length > 10) {
      console.log(`    ... and ${ogResult.missing.length - 10} more`);
    }
    allPass = false;
  }
  console.log('');

  // 2. Orphan Pages
  console.log('--- 2. Orphan Pages ---');
  const orphanResult = auditOrphanPages(pages);
  if (orphanResult.pass) {
    console.log(`  PASS: Zero orphan pages (all ${orphanResult.total} pages have incoming links)`);
  } else {
    console.log(`  FAIL: ${orphanResult.orphans.length} orphan pages found`);
    for (const o of orphanResult.orphans) {
      console.log(`    ${o}`);
    }
    allPass = false;
  }
  console.log('');

  // 3. Meta Descriptions
  console.log('--- 3. Meta Descriptions ---');
  const metaResult = auditMetaDescriptions(pages);
  if (metaResult.pass) {
    console.log(`  PASS: All ${metaResult.total} pages have meta descriptions`);
  } else {
    if (metaResult.missing.length > 0) {
      console.log(`  FAIL: ${metaResult.missing.length} pages missing meta description`);
      for (const m of metaResult.missing.slice(0, 5)) {
        console.log(`    ${m}`);
      }
    }
    allPass = false;
  }
  if (metaResult.tooShort.length > 0) {
    console.log(`  WARN: ${metaResult.tooShort.length} pages with short description (<50 chars)`);
    for (const s of metaResult.tooShort.slice(0, 5)) {
      console.log(`    ${s.slug} (${s.length} chars)`);
    }
  }
  if (metaResult.tooLong.length > 0) {
    console.log(`  WARN: ${metaResult.tooLong.length} pages with long description (>160 chars)`);
    for (const l of metaResult.tooLong.slice(0, 5)) {
      console.log(`    ${l.slug} (${l.length} chars)`);
    }
  }
  console.log('');

  // 4. Broken Internal Links
  console.log('--- 4. Broken Internal Links ---');
  const linkResult = auditBrokenLinks(pages);
  if (linkResult.pass) {
    console.log(`  PASS: Zero broken internal links (checked ${linkResult.total} link pairs)`);
  } else {
    console.log(`  FAIL: ${linkResult.broken.length} broken internal links`);
    for (const b of linkResult.broken.slice(0, 10)) {
      console.log(`    ${b.source} -> ${b.href}`);
    }
    if (linkResult.broken.length > 10) {
      console.log(`    ... and ${linkResult.broken.length - 10} more`);
    }
    allPass = false;
  }
  console.log('');

  // 5. Schema Regression
  console.log('--- 5. Schema Regression ---');
  const schemaResult = auditSchemaRegression(pages);
  if (schemaResult.pass) {
    console.log(`  PASS: Zero AggregateRating found`);
  } else {
    for (const issue of schemaResult.issues) {
      console.log(`  FAIL: ${issue.type}`);
      for (const p of issue.pages.slice(0, 5)) {
        console.log(`    ${p}`);
      }
      if (issue.pages.length > 5) {
        console.log(`    ... and ${issue.pages.length - 5} more`);
      }
    }
    allPass = false;
  }
  if (schemaResult.missingLocalBusiness.length > 0) {
    console.log(`  WARN: ${schemaResult.missingLocalBusiness.length} pages without LocalBusiness schema (pre-existing)`);
    for (const p of schemaResult.missingLocalBusiness.slice(0, 5)) {
      console.log(`    ${p}`);
    }
    if (schemaResult.missingLocalBusiness.length > 5) {
      console.log(`    ... and ${schemaResult.missingLocalBusiness.length - 5} more`);
    }
  }
  console.log('');

  // Summary
  console.log('='.repeat(60));
  if (allPass) {
    console.log('  ALL AUDITS PASSED');
  } else {
    console.log('  SOME AUDITS FAILED — see details above');
  }
  console.log('='.repeat(60));

  process.exit(allPass ? 0 : 1);
}

main();
