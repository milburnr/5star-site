#!/usr/bin/env node
/**
 * Alt Text Quality Audit Script
 *
 * Scans built HTML in out/ and validates every <img> tag's alt attribute.
 * Flags: missing alt, empty alt on content images, too short, too long,
 * generic labels, and same-page duplicates.
 *
 * Exit code: 0 = PASS, 1 = FAIL
 *
 * Usage: node scripts/audit-alt-text.js
 */

const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "out");

// Known generic alt text patterns that should never appear
const GENERIC_PATTERNS = [
  "Metal Roofing",
  "Commercial Roofing",
  "EPDM Rubber Roofing",
  "TPO Commercial Roofing",
  "Asphalt Shingle Roofing",
  "Free Roof Inspections",
  "Insurance Claims Help",
  "Hail Damage Roof Repair",
  "Roof Inspections",
  "Storm Damage Restoration",
  "Residential Roofing",
  "EPDM Commercial Roofing",
  "Metal Commercial Roofing",
  "Standing Seam Metal Roofing",
  "TPO Commercial Roofing Installation",
  "Class 4 Impact Resistant Shingles",
];

// R2 CDN prefix -- images from R2 are content images, not decorative
const R2_PREFIX = "pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev";

function findHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractImgTags(html) {
  const imgRegex = /<img\b[^>]*>/gi;
  const results = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const tag = match[0];

    // Extract src
    const srcMatch = tag.match(/src="([^"]*)"/);
    const src = srcMatch ? srcMatch[1] : "";

    // Extract alt -- check if alt attribute exists at all
    const altMatch = tag.match(/alt="([^"]*)"/);
    const hasAlt = /\balt\s*=/.test(tag);
    const alt = altMatch ? altMatch[1] : null;

    results.push({ tag, src, alt, hasAlt });
  }
  return results;
}

function isContentImage(src) {
  // R2 images are always content images
  if (src.includes(R2_PREFIX)) return true;
  // Local images in public/ that are meaningful (logo, etc.)
  if (src.startsWith("/") && !src.includes("favicon")) return true;
  return false;
}

function isGeneric(alt) {
  return GENERIC_PATTERNS.some(
    (pattern) => alt.trim().toLowerCase() === pattern.toLowerCase()
  );
}

function audit() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error("ERROR: out/ directory not found. Run `npm run build` first.");
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(OUT_DIR);
  console.log(`Scanning ${htmlFiles.length} HTML files in out/...\n`);

  const issues = {
    missing: [],
    emptyOnContent: [],
    tooShort: [],
    tooLong: [],
    generic: [],
    duplicate: [],
  };

  let totalImages = 0;
  let totalContentImages = 0;

  for (const file of htmlFiles) {
    const relPath = path.relative(OUT_DIR, file);
    const html = fs.readFileSync(file, "utf8");
    const imgs = extractImgTags(html);

    const pageAlts = new Map(); // alt -> count for duplicate detection

    for (const img of imgs) {
      totalImages++;

      const content = isContentImage(img.src);
      if (content) totalContentImages++;

      // Missing alt attribute entirely
      if (!img.hasAlt) {
        issues.missing.push({ file: relPath, src: img.src });
        continue;
      }

      // Empty alt on content images
      if (img.alt === "" && content) {
        issues.emptyOnContent.push({ file: relPath, src: img.src });
        continue;
      }

      // Skip decorative images with empty alt (correct usage)
      if (img.alt === "") continue;

      // Too short (under 20 chars)
      if (img.alt.length < 20) {
        issues.tooShort.push({
          file: relPath,
          alt: img.alt,
          length: img.alt.length,
        });
      }

      // Too long (over 150 chars)
      if (img.alt.length > 150) {
        issues.tooLong.push({
          file: relPath,
          alt: img.alt,
          length: img.alt.length,
        });
      }

      // Generic pattern match
      if (isGeneric(img.alt)) {
        issues.generic.push({ file: relPath, alt: img.alt });
      }

      // Track for same-page duplicates
      const count = pageAlts.get(img.alt) || 0;
      pageAlts.set(img.alt, count + 1);
    }

    // Check for duplicates on this page
    for (const [alt, count] of pageAlts) {
      if (count > 1) {
        issues.duplicate.push({ file: relPath, alt, count });
      }
    }
  }

  // Report
  console.log("=== ALT TEXT AUDIT REPORT ===\n");
  console.log(`Total images scanned: ${totalImages}`);
  console.log(`Content images (R2/local): ${totalContentImages}`);
  console.log("");

  const categories = [
    { key: "missing", label: "Missing alt attribute", critical: true },
    {
      key: "emptyOnContent",
      label: "Empty alt on content images",
      critical: false,
    },
    { key: "tooShort", label: "Alt text too short (<20 chars)", critical: false },
    {
      key: "tooLong",
      label: "Alt text too long (>150 chars)",
      critical: false,
    },
    { key: "generic", label: "Generic alt text", critical: true },
    { key: "duplicate", label: "Same-page duplicate alt text", critical: true },
  ];

  let hasCritical = false;
  let totalIssues = 0;

  for (const cat of categories) {
    const items = issues[cat.key];
    const icon = items.length === 0 ? "PASS" : cat.critical ? "FAIL" : "WARN";
    console.log(`[${icon}] ${cat.label}: ${items.length}`);

    if (items.length > 0) {
      totalIssues += items.length;
      if (cat.critical && items.length > 0) hasCritical = true;

      for (const item of items.slice(0, 10)) {
        if (item.alt) {
          console.log(
            `  - ${item.file}: "${item.alt}"${item.length ? ` (${item.length} chars)` : ""}${item.count ? ` (x${item.count})` : ""}`
          );
        } else {
          console.log(`  - ${item.file}: src=${item.src}`);
        }
      }
      if (items.length > 10) {
        console.log(`  ... and ${items.length - 10} more`);
      }
    }
    console.log("");
  }

  const result = hasCritical ? "FAIL" : "PASS";
  console.log(`=== RESULT: ${result} ===`);
  console.log(
    `Total issues: ${totalIssues} (${issues.missing.length} missing, ${issues.generic.length} generic, ${issues.duplicate.length} duplicate)`
  );

  process.exit(hasCritical ? 1 : 0);
}

audit();
