#!/usr/bin/env node
/**
 * Post-build schema validation script
 * Validates JSON-LD structured data across all built HTML pages.
 *
 * Rules:
 *   1. LocalBusiness @type must be array (not plain string)
 *   2. Entity name must be "5 Star Roofing" (not "5 Star Commercial Roofing")
 *   3. Homepage must have WebSite schema with sameAs
 *   4. About page must have Person schema with worksFor
 *   5. FAQ content must have FAQPage schema (and vice-versa)
 *   5b. Service-city pages must have Service schema
 *   6. Every schema block must have @context: "https://schema.org"
 *   7. Every non-homepage page should have BreadcrumbList schema
 *
 * Usage:
 *   node scripts/validate-schema.js [--verbose]
 *
 * Exit code: 0 if zero errors (warnings OK), 1 if any errors.
 */

const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "..", "out");
const VERBOSE = process.argv.includes("--verbose");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function findHtmlFiles(dir) {
  const results = [];
  let items;
  try {
    items = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...findHtmlFiles(full));
    } else if (item.name.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function extractSchemas(html) {
  const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  const schemas = [];
  const parseErrors = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    try {
      schemas.push(JSON.parse(m[1]));
    } catch (e) {
      parseErrors.push(e.message);
    }
  }
  return { schemas, parseErrors };
}

function relPath(filePath) {
  return path.relative(path.resolve(__dirname, ".."), filePath);
}

function getType(schema) {
  return schema["@type"];
}

function isTypeMatch(schema, typeName) {
  const t = getType(schema);
  if (Array.isArray(t)) return t.includes(typeName);
  return t === typeName;
}

/**
 * Detect if a path looks like a service-city page (e.g. roof-repair-amarillo).
 *
 * Uses positive matching: known service prefixes + city names.
 * This avoids false positives on city hub pages (amarillo-texas-roofing),
 * blog/article pages, and other content pages.
 */
function isServiceCityPath(rel, schemas) {
  // Must be a top-level directory: out/{slug}/index.html  (3 parts)
  const parts = rel.split(path.sep);
  if (parts.length !== 3 || parts[0] !== "out" || parts[2] !== "index.html") return false;

  const slug = parts[1];

  // If the page has an Article schema, it's a blog/content page, not service-city
  if (schemas.some((s) => isTypeMatch(s, "Article"))) return false;

  // Known service prefixes used in service-city URL patterns
  const servicePrefixes = [
    "roof-repair",
    "roof-replacement",
    "roof-inspection",
    "roof-coating",
    "roof-maintenance",
    "commercial-roofing",
    "residential-roofing",
    "metal-roofing",
    "flat-roof",
    "flat-roof-repair",
    "hail-damage-repair",
    "storm-damage-repair",
    "emergency-roof-repair",
    "tpo-roofing",
    "epdm-roofing",
    "asphalt-shingle-roofing",
    "tile-roofing",
    "new-roof-installation",
    "roofing-contractor",
    "roof-leak-repair",
  ];

  // Check if slug starts with a known service prefix followed by a hyphen and city
  for (const prefix of servicePrefixes) {
    if (slug.startsWith(prefix + "-") && slug.length > prefix.length + 1) {
      return true;
    }
  }

  return false;
}

/** Detect FAQ accordion content in built HTML */
function hasFaqContent(html) {
  // Radix accordion renders with data-state attributes
  // Check for the accordion pattern AND question-like content
  // The built HTML contains data-state="closed" on accordion items
  // and AccordionTrigger text from source shows as button text
  return (
    html.includes("data-state") &&
    (html.includes("AccordionTrigger") ||
      html.includes('data-orientation="vertical"'))
  );
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const errors = [];
const warnings = [];
let totalBlocks = 0;

function error(file, msg) {
  errors.push(`${relPath(file)}: ${msg}`);
}
function warn(file, msg) {
  warnings.push(`${relPath(file)}: ${msg}`);
}

// Find all HTML files
const htmlFiles = findHtmlFiles(OUT_DIR);
if (htmlFiles.length === 0) {
  console.error("ERROR: No HTML files found in out/. Run 'npm run build' first.");
  process.exit(1);
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = relPath(file);
  const { schemas, parseErrors } = extractSchemas(html);

  totalBlocks += schemas.length;

  // Report parse errors
  for (const pe of parseErrors) {
    error(file, `JSON-LD parse error: ${pe}`);
  }

  // Rule 6: Valid @context on every block
  for (const schema of schemas) {
    if (schema["@context"] !== "https://schema.org") {
      error(file, `Missing or invalid @context (got: ${JSON.stringify(schema["@context"])})`);
    }
  }

  // Rule 1: LocalBusiness @type must be array
  for (const schema of schemas) {
    if (schema["@type"] === "LocalBusiness") {
      error(
        file,
        'LocalBusiness @type is string, expected array ["LocalBusiness", "RoofingContractor"]'
      );
    }
  }

  // Rule 2: Entity name consistency
  for (const schema of schemas) {
    const t = getType(schema);
    const isBusinessEntity =
      isTypeMatch(schema, "LocalBusiness") ||
      isTypeMatch(schema, "RoofingContractor") ||
      isTypeMatch(schema, "Service") ||
      isTypeMatch(schema, "Organization");

    // Skip non-business entity types (CollectionPage, Blog, etc.)
    if (!isBusinessEntity) continue;

    if (schema.name === "5 Star Commercial Roofing") {
      error(
        file,
        `Entity name is "5 Star Commercial Roofing", expected "5 Star Roofing" (on @type: ${JSON.stringify(t)})`
      );
    }
  }

  // Rule 3: WebSite schema on homepage
  if (rel === path.join("out", "index.html")) {
    const hasWebSite = schemas.some((s) => isTypeMatch(s, "WebSite"));
    if (!hasWebSite) {
      error(file, "Homepage missing WebSite schema");
    } else {
      const ws = schemas.find((s) => isTypeMatch(s, "WebSite"));
      if (!ws.sameAs || !Array.isArray(ws.sameAs) || ws.sameAs.length === 0) {
        error(file, "WebSite schema missing sameAs array with at least 1 URL");
      }
    }
  }

  // Rule 4: Person schema on about page
  if (rel === path.join("out", "about", "index.html")) {
    const hasPerson = schemas.some((s) => isTypeMatch(s, "Person"));
    if (!hasPerson) {
      error(file, "About page missing Person schema");
    } else {
      const person = schemas.find((s) => isTypeMatch(s, "Person"));
      if (!person.worksFor) {
        error(file, "Person schema missing worksFor property");
      }
    }
  }

  // Rule 5: FAQ content <-> FAQPage schema consistency
  const faqContent = hasFaqContent(html);
  const hasFAQSchema = schemas.some((s) => isTypeMatch(s, "FAQPage"));

  if (faqContent && !hasFAQSchema) {
    error(file, "FAQ accordion content found but no FAQPage schema");
  }
  if (hasFAQSchema && !faqContent) {
    warn(file, "FAQPage schema present but no accordion content detected (possible false schema)");
  }

  // Rule 5b: Service schema on service-city pages
  if (isServiceCityPath(rel, schemas)) {
    const hasService = schemas.some((s) => isTypeMatch(s, "Service"));
    if (!hasService) {
      error(file, "Service-city page missing Service schema");
    }
  }

  // Rule 7: BreadcrumbList on non-homepage pages
  if (
    rel !== path.join("out", "index.html") &&
    rel !== path.join("out", "404.html") &&
    rel !== path.join("out", "404", "index.html")
  ) {
    const hasBreadcrumb = schemas.some((s) => isTypeMatch(s, "BreadcrumbList"));
    if (!hasBreadcrumb) {
      warn(file, "Missing BreadcrumbList schema");
    }
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log("Schema Validation Report");
console.log("========================");
console.log(`Pages scanned: ${htmlFiles.length}`);
console.log(`Schema blocks parsed: ${totalBlocks}`);
console.log();

if (errors.length > 0) {
  console.log(`ERRORS: ${errors.length}`);
  for (const e of errors) {
    console.log(`  - ${e}`);
  }
  console.log();
}

if (warnings.length > 0) {
  console.log(`WARNINGS: ${warnings.length}`);
  for (const w of warnings) {
    console.log(`  - ${w}`);
  }
  console.log();
}

if (errors.length === 0 && warnings.length === 0) {
  console.log("No errors or warnings found.");
  console.log();
}

console.log(errors.length === 0 ? "PASS" : "FAIL");

if (VERBOSE) {
  console.log("\n--- Verbose Details ---");
  console.log(`HTML files: ${htmlFiles.length}`);
  console.log(`Total schema blocks: ${totalBlocks}`);
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);
}

process.exit(errors.length === 0 ? 0 : 1);
