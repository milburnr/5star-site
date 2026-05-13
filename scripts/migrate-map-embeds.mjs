#!/usr/bin/env node
/**
 * migrate-map-embeds.mjs
 *
 * One-shot migration: replace inline <iframe ...google.com/maps/embed...>
 * tags on 149 service-location pages with the <MapEmbed/> component.
 *
 * Decision rules:
 *   - If the page's outer JSX text contains HQ-explicit language ("Amarillo
 *     location", "Amarillo office", "Amarillo headquarters", "Amarillo HQ",
 *     "our Amarillo", "from our Amarillo"), the map stays on the HQ —
 *     emitted as <MapEmbed unwrapped /> with no city prop. The default
 *     fallback inside the component is the HQ embed.
 *   - The dedicated /contact page also stays HQ.
 *   - Otherwise we derive a city slug from the page directory name and
 *     emit <MapEmbed unwrapped city="<City>, TX" />.
 *
 * The script preserves any wrapping <div> the inline iframe sat inside —
 * MapEmbed is rendered in `unwrapped` mode, so it emits *only* the iframe.
 * This keeps the existing layout / sizing classes intact.
 *
 * Usage:
 *   node scripts/migrate-map-embeds.mjs           # apply
 *   node scripts/migrate-map-embeds.mjs --dry     # report only
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO = path.resolve(__dirname, "..");

const DRY = process.argv.includes("--dry");

// ---------- city derivation ----------

// Words that are part of the service name, not the city.
const SERVICE_PREFIXES = [
  "asphalt-shingle-roofing",
  "commercial-roofing",
  "hail-damage-repair",
  "metal-roofing",
  "roof-repair",
  "roof-replacement",
  "residential-roofing",
  "storm-damage-repair",
  "tpo-roofing",
  "wind-damage-repair",
  "flat-roof-repair",
];

// Mapping for slugs that don't title-case cleanly.
const CITY_NAME_OVERRIDES = {
  "big-spring": "Big Spring",
};

function deriveCity(filePath) {
  // app/<slug>/page.tsx → <slug>
  const rel = path.relative(REPO, filePath);
  const slug = rel.split(path.sep)[1];

  if (slug === "contact") return null; // HQ-only

  // Pattern: "<city>-tx-roofing" or "<city>-texas-roofing"
  let m = slug.match(/^([a-z-]+?)-(?:tx|texas)-roofing$/);
  if (m) return prettyCity(m[1]);

  // Pattern: "<service>-<city>" — strip a known service prefix
  for (const sp of SERVICE_PREFIXES) {
    if (slug.startsWith(sp + "-")) {
      let citySlug = slug.slice(sp.length + 1);
      // strip trailing -texas / -tx suffix if any
      citySlug = citySlug.replace(/-(?:texas|tx)$/, "");
      return prettyCity(citySlug);
    }
  }

  // Fallback: take everything after the last dash
  const parts = slug.split("-");
  const last = parts[parts.length - 1];
  return prettyCity(last);
}

function prettyCity(slug) {
  if (CITY_NAME_OVERRIDES[slug]) return CITY_NAME_OVERRIDES[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ---------- HQ heuristic ----------

const HQ_PHRASES = [
  "amarillo location",
  "amarillo office",
  "amarillo headquarters",
  "amarillo hq",
  "our amarillo",
  "from our amarillo",
];

function shouldKeepHQ(source, filePath) {
  if (path.basename(path.dirname(filePath)) === "contact") return true;
  const lower = source.toLowerCase();
  return HQ_PHRASES.some((p) => lower.includes(p));
}

// ---------- iframe replacement ----------

// Match a <iframe> block whose src contains google.com/maps/embed.
// Tolerates both self-closing (/>) and explicit-close (></iframe>) forms.
const IFRAME_RE =
  /<iframe\b[^>]*?src=["'][^"']*google\.com\/maps\/embed[^"']*["'][\s\S]*?(?:<\/iframe>|\/>)/g;

function replaceIframes(source, city) {
  return source.replace(IFRAME_RE, () => {
    if (city) {
      // City-specific. Use ", TX" suffix for query precision.
      return `<MapEmbed unwrapped widthAttr="100%" heightAttr="100%" city="${city}, TX" />`;
    }
    return `<MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />`;
  });
}

// ---------- import injection ----------

const IMPORT_LINE = `import MapEmbed from "@/components/MapEmbed";`;

function ensureImport(source) {
  if (source.includes("@/components/MapEmbed") || /from\s+["'][^"']*MapEmbed["']/.test(source))
    return source;

  // Insert after the last top-level import statement.
  const importMatches = [...source.matchAll(/^import [^;]+;\s*$/gm)];
  if (importMatches.length === 0) {
    // No imports? Prepend.
    return IMPORT_LINE + "\n" + source;
  }
  const last = importMatches[importMatches.length - 1];
  const insertAt = last.index + last[0].length;
  return source.slice(0, insertAt) + "\n" + IMPORT_LINE + source.slice(insertAt);
}

// ---------- main ----------

function main() {
  const listPath = "/tmp/map-consumers.txt";
  const files = fs
    .readFileSync(listPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((p) => path.resolve(REPO, p));

  const report = {
    total: files.length,
    cityMigrated: 0,
    keptHQ: 0,
    importAdded: 0,
    noIframeFound: 0,
    keptHQExamples: [],
    cityMigratedExamples: [],
    bySvc: {},
  };

  for (const f of files) {
    const original = fs.readFileSync(f, "utf8");
    if (!IFRAME_RE.test(original)) {
      // Regex stateful — reset and re-test
      IFRAME_RE.lastIndex = 0;
      if (!/<iframe\b[^>]*google\.com\/maps\/embed/.test(original)) {
        report.noIframeFound++;
        continue;
      }
    }
    IFRAME_RE.lastIndex = 0;

    const keepHQ = shouldKeepHQ(original, f);
    const city = keepHQ ? null : deriveCity(f);

    let next = replaceIframes(original, city);
    const hadImport = next.includes("@/components/MapEmbed");
    next = ensureImport(next);
    if (!hadImport && next.includes("@/components/MapEmbed")) report.importAdded++;

    if (next === original) {
      report.noIframeFound++;
      continue;
    }

    if (keepHQ) {
      report.keptHQ++;
      if (report.keptHQExamples.length < 8)
        report.keptHQExamples.push(path.relative(REPO, f));
    } else {
      report.cityMigrated++;
      if (report.cityMigratedExamples.length < 8)
        report.cityMigratedExamples.push(`${path.relative(REPO, f)} → ${city}`);
    }

    if (!DRY) fs.writeFileSync(f, next);
  }

  console.log(JSON.stringify(report, null, 2));
}

main();
