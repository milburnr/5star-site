#!/usr/bin/env node
/**
 * migrate-to-interior-hero.mjs
 *
 * Rolls out InteriorHeroSection across the 5-star-roofing app/ tree.
 *
 * For each page in app/<slug>/page.tsx:
 *   1. Parse the slug to derive heroVariant + city + service.
 *   2. Find the legacy hero <section className="relative bg-cover bg-center
 *      text-white py-32 ..."> and its matching </section>.
 *   3. Extract backgroundImage URL → image prop.
 *   4. Replace the entire section with <InteriorHeroSection ... />.
 *   5. Ensure the import is present.
 *
 * Usage:
 *   node scripts/migrate-to-interior-hero.mjs --mode dry  --batch location
 *   node scripts/migrate-to-interior-hero.mjs --mode write --batch location
 *   node scripts/migrate-to-interior-hero.mjs --file app/foo/page.tsx --mode write
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ─── Slug → title mapping ───────────────────────────────────────────────
const SERVICES = {
  "asphalt-shingle-roofing": "Asphalt Shingle Roofing",
  "commercial-roofing": "Commercial Roofing",
  "hail-damage-repair": "Hail Damage Repair",
  "metal-roofing": "Metal Roofing",
  "residential-roofing": "Residential Roofing",
  "roof-inspections": "Roof Inspections",
  "roof-repair": "Roof Repair",
  "roof-replacement": "Roof Replacement",
  "storm-damage-repair": "Storm Damage Repair",
  "tpo-roofing": "TPO Roofing",
  "wind-damage-repair": "Wind Damage Repair",
};

const CITIES = {
  amarillo: "Amarillo",
  andrews: "Andrews",
  "big-spring": "Big Spring",
  borger: "Borger",
  canyon: "Canyon",
  dumas: "Dumas",
  hereford: "Hereford",
  levelland: "Levelland",
  lubbock: "Lubbock",
  midland: "Midland",
  monahans: "Monahans",
  odessa: "Odessa",
  pampa: "Pampa",
  perryton: "Perryton",
  plainview: "Plainview",
  snyder: "Snyder",
};

const LOCATION_SLUGS = {
  "amarillo-texas-roofing": "Amarillo",
  "lubbock-tx-roofing": "Lubbock",
  "midland-tx-roofing": "Midland",
};

// ─── Slug classification ───────────────────────────────────────────────
function classifySlug(slug) {
  // Location-only?
  if (LOCATION_SLUGS[slug]) {
    return { variant: "location", city: LOCATION_SLUGS[slug], service: null };
  }
  // Service + location? Match by greedy-longest service prefix.
  const services = Object.keys(SERVICES).sort((a, b) => b.length - a.length);
  for (const svcKey of services) {
    if (slug.startsWith(svcKey + "-")) {
      const cityKey = slug.slice(svcKey.length + 1);
      if (CITIES[cityKey]) {
        return {
          variant: "service-location",
          city: CITIES[cityKey],
          service: SERVICES[svcKey],
        };
      }
    }
    // Pure service page (no city)?
    if (slug === svcKey) {
      return { variant: "service", city: null, service: SERVICES[svcKey] };
    }
  }
  return { variant: null, city: null, service: null };
}

// ─── Hero section extractor ────────────────────────────────────────────
// Returns { startIdx, endIdx, imageUrl } or null if no hero found.
function findHeroSection(source) {
  // Match the opening <section className="relative bg-cover bg-center
  // text-white py-32 ..." — there's variation in min-h ([500px] / [600px] /
  // [700px]) and tailwind extras. The two anchor tokens are
  // `relative bg-cover bg-center text-white py-32`.
  const openRegex = /<section\s+className="relative bg-cover bg-center text-white py-32[^"]*"/;
  const openMatch = source.match(openRegex);
  if (!openMatch) return null;

  const startIdx = openMatch.index;

  // Find the closing </section> at the same depth. Count <section> openings
  // after startIdx; first </section> when count goes to 0 is ours.
  let depth = 0;
  let i = startIdx;
  while (i < source.length) {
    if (source.startsWith("<section", i)) {
      depth++;
      i += "<section".length;
      continue;
    }
    if (source.startsWith("</section>", i)) {
      depth--;
      if (depth === 0) {
        const endIdx = i + "</section>".length;
        // Extract image URL between startIdx and endIdx
        const urlMatch = source
          .slice(startIdx, endIdx)
          .match(/backgroundImage:\s*\n?\s*"url\(([^)]+)\)"/);
        const imageUrl = urlMatch ? urlMatch[1] : null;
        return { startIdx, endIdx, imageUrl };
      }
      i += "</section>".length;
      continue;
    }
    i++;
  }
  return null;
}

// ─── JSX generators ────────────────────────────────────────────────────
function generateInteriorHero({ variant, city, service, h1, image }) {
  const lines = ["      <InteriorHeroSection"];
  lines.push(`        heroVariant="${variant}"`);
  if (city) lines.push(`        city="${city}"`);
  if (variant === "location") lines.push(`        state="TEXAS"`);
  if (service) lines.push(`        service="${service}"`);
  lines.push(`        h1="${h1}"`);
  lines.push(`        image="${image}"`);
  lines.push("      />");
  return lines.join("\n");
}

function deriveH1({ variant, city, service }) {
  if (variant === "location") return `Roofing Company in ${city}, TX`;
  if (variant === "service") return `${service} in West Texas`;
  if (variant === "service-location") return `${service} in ${city}, TX`;
  return null;
}

// ─── Ensure import ─────────────────────────────────────────────────────
function ensureImport(source) {
  // Already imported? Match the import statement specifically — checking
  // for just the bare string would falsely match the JSX <InteriorHeroSection>
  // we just inserted.
  if (/import\s*\{[^}]*\bInteriorHeroSection\b/.test(source)) return source;
  // Insert after the last import statement.
  const importRegex = /^import .+;$/gm;
  let lastImportEnd = 0;
  let m;
  while ((m = importRegex.exec(source))) {
    lastImportEnd = m.index + m[0].length;
  }
  if (lastImportEnd === 0) return source;
  const newImport = `\nimport { InteriorHeroSection } from "@/components/InteriorHeroSection";`;
  return source.slice(0, lastImportEnd) + newImport + source.slice(lastImportEnd);
}

// ─── Per-page conversion ───────────────────────────────────────────────
function convertPage(filePath, { write }) {
  if (!existsSync(filePath)) {
    return { status: "missing", filePath };
  }
  const slug = filePath.replace(/^app\//, "").replace(/\/page\.tsx$/, "");
  const cls = classifySlug(slug);
  if (!cls.variant) {
    return { status: "skipped", reason: `unknown slug pattern: ${slug}`, filePath };
  }

  const source = readFileSync(filePath, "utf8");

  // Service pages (no city) — article-style layout. Inject hero before the
  // Breadcrumb, demote the existing inline <h1> to <h2>, drop the inline
  // hero <img> (now redundant with the editorial hero photo).
  if (cls.variant === "service") {
    return convertServicePage(filePath, source, cls, { write });
  }

  const hero = findHeroSection(source);
  if (!hero) {
    return { status: "no-hero-found", filePath, classification: cls };
  }
  if (!hero.imageUrl) {
    return { status: "no-image-url", filePath, classification: cls };
  }

  const h1 = deriveH1(cls);
  const replacement = generateInteriorHero({
    variant: cls.variant,
    city: cls.city,
    service: cls.service,
    h1,
    image: hero.imageUrl,
  });

  const newSource =
    ensureImport(
      source.slice(0, hero.startIdx) + replacement + source.slice(hero.endIdx),
    );

  if (write) {
    writeFileSync(filePath, newSource);
  }

  return {
    status: "converted",
    filePath,
    classification: cls,
    h1,
    image: hero.imageUrl,
    bytesDelta: newSource.length - source.length,
  };
}

// ─── Service-page conversion ───────────────────────────────────────────
function convertServicePage(filePath, source, cls, { write }) {
  // Skip if already migrated.
  if (source.includes("InteriorHeroSection")) {
    return { status: "already-migrated", filePath, classification: cls };
  }

  // 1. Extract hero image URL — first remote <img src="https://..."> that
  //    looks like a hero image (in /images/heroes/, /images/metal/,
  //    /images/hail-damage/, /images/commercial/, /images/completed/).
  const imgMatch = source.match(
    /<img\s+src="(https:\/\/pub-[^"]+\/images\/(?:heroes|metal|hail-damage|commercial|completed|services)\/[^"]+\.(?:webp|jpg|png))"[\s\S]*?\/>/,
  );
  if (!imgMatch) {
    return { status: "no-image", filePath, classification: cls };
  }
  const imageUrl = imgMatch[1];

  // 2. Find the <Breadcrumb usage and insert hero before its opening line.
  //    Match `      <Breadcrumb` (the leading whitespace is significant —
  //    used to align the inserted hero).
  const breadcrumbMatch = source.match(/^(\s*)<Breadcrumb\b/m);
  if (!breadcrumbMatch) {
    return { status: "no-breadcrumb", filePath, classification: cls };
  }
  const indent = breadcrumbMatch[1];
  const breadcrumbIdx = breadcrumbMatch.index;

  const h1 = deriveH1(cls);
  const hero = generateInteriorHero({
    variant: cls.variant,
    city: null,
    service: cls.service,
    h1,
    image: imageUrl,
  });

  let out =
    source.slice(0, breadcrumbIdx) +
    hero +
    "\n\n" +
    indent +
    source.slice(breadcrumbIdx).slice(indent.length);

  // 3. Demote the inline <h1 className="text-2xl sm:text-3xl ...">...</h1>
  //    to <h2 ...>.
  out = out.replace(
    /<h1(\s+className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6")>/,
    "<h2$1>",
  );
  out = out.replace(/<\/h1>(\s*)(\{\s*\/\*|<img|<FadeIn|<\/FadeIn>|<p|<div|<section)/, "</h2>$1$2");
  // Fallback: if only one `</h1>` remains after the open-tag swap, close it.
  if (out.includes("<h2 className=\"text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6\">") &&
      out.match(/<\/h1>/)) {
    out = out.replace(/<\/h1>/, "</h2>");
  }

  // 4. Drop the inline hero <img>, since the editorial hero now provides one.
  //    Match the whole tag (single self-closing, possibly multi-line).
  out = out.replace(imgMatch[0], "");
  // Clean up an orphan {/* Hero Image */} comment if present right above.
  out = out.replace(/\s*\{\/\*\s*Hero Image\s*\*\/\}\s*\n/, "\n");

  // 5. Ensure import.
  out = ensureImport(out);

  if (write) writeFileSync(filePath, out);

  return {
    status: "converted",
    filePath,
    classification: cls,
    h1,
    image: imageUrl,
    bytesDelta: out.length - source.length,
  };
}

// ─── CLI ──────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const out = { mode: "dry", batch: null, file: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--mode") out.mode = argv[++i];
    else if (a === "--batch") out.batch = argv[++i];
    else if (a === "--file") out.file = argv[++i];
  }
  return out;
}

function listBatchFiles(batch) {
  const slugs = [];
  if (batch === "location") {
    for (const s of Object.keys(LOCATION_SLUGS)) slugs.push(s);
  } else if (batch === "service") {
    for (const s of Object.keys(SERVICES)) slugs.push(s);
  } else if (batch === "service-location") {
    for (const svc of Object.keys(SERVICES)) {
      for (const c of Object.keys(CITIES)) {
        slugs.push(`${svc}-${c}`);
      }
    }
  } else {
    throw new Error(`Unknown batch: ${batch}`);
  }
  return slugs.map((s) => `app/${s}/page.tsx`).filter((p) => existsSync(join(ROOT, p)));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  process.chdir(ROOT);

  const files = args.file ? [args.file] : listBatchFiles(args.batch);
  const write = args.mode === "write";

  console.log(`Mode: ${args.mode}  Batch: ${args.batch ?? "(file)"}`);
  console.log(`Pages: ${files.length}`);
  console.log("");

  const results = files.map((f) => convertPage(f, { write }));
  const counts = {};
  for (const r of results) counts[r.status] = (counts[r.status] || 0) + 1;

  for (const r of results) {
    const tag =
      r.status === "converted" ? "OK " : r.status === "skipped" ? "SK " : "?? ";
    const detail =
      r.status === "converted"
        ? `${r.classification.variant} ${r.classification.city ?? ""} ${r.classification.service ?? ""}`.trim()
        : r.reason || r.status;
    console.log(`${tag} ${r.filePath}  ${detail}`);
  }
  console.log("");
  console.log("Summary:", counts);
}

main();
