#!/usr/bin/env node
/**
 * optimize-city-heroes.mjs
 *
 * Reads AI-generated city hero PNGs from /Volumes/desktop/images/ai/ and emits
 * AVIF + WebP variants at 4 widths (600, 900, 1200, 1920) into
 * public/images/heroes/cities/.
 *
 * Naming: <city-slug>-hero-<width>.<ext>
 *   e.g. lubbock-hero-900.avif, lubbock-hero-1200.webp
 *
 * Target: <= 80KB at the 900w breakpoint. If the AVIF/WebP at default quality
 * exceeds 80KB, quality is stepped down (down to a floor) and the realized
 * size is logged. Never drives quality below the floor — visible quality > tiny bytes.
 *
 * Also writes/refreshes public/images/heroes/city-hero-map.json with
 * { "<city-slug>": "<basename>" } entries for every city processed.
 *
 * Repeatable. Re-runs are idempotent (overwrites existing files).
 *
 * Usage: node scripts/optimize-city-heroes.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

const SOURCE_DIR = "/Volumes/desktop/images/ai";
const OUTPUT_DIR = path.join(REPO_ROOT, "public/images/heroes/cities");
const MAP_PATH = path.join(REPO_ROOT, "public/images/heroes/city-hero-map.json");

// Explicit allowlist of city slugs that have AI hero variants. Keeps generic
// non-city assets (home-hero, services-hero, etc.) out of the city map.
const CITY_SLUGS = [
  "amarillo",
  "borger",
  "canyon",
  "channing",
  "clarendon",
  "dalhart",
  "dumas",
  "earth",
  "hereford",
  "levelland",
  "lubbock",
  "memphis",
  "midland",
  "morton",
  "odessa",
  "pampa",
  "perryton",
  "plainview",
  "quitaque",
  "san-angelo",
  "sanderson",
  "stinnett",
  "wichita-falls",
];

const WIDTHS = [600, 900, 1200, 1920];
const TARGET_BYTES_AT_900 = 80 * 1024; // 80KB

// Quality envelopes. Defaults aim for visual quality first; if 900w blows past
// 80KB we step down toward the floor before giving up.
const AVIF_QUALITY_DEFAULT = 55;
const AVIF_QUALITY_FLOOR = 38;
const WEBP_QUALITY_DEFAULT = 72;
const WEBP_QUALITY_FLOOR = 52;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function encodeWebP(pipeline, quality) {
  return pipeline.clone().webp({ quality, effort: 6 }).toBuffer();
}

async function encodeAVIF(pipeline, quality) {
  return pipeline.clone().avif({ quality, effort: 6, chromaSubsampling: "4:2:0" }).toBuffer();
}

async function writeAtTarget(pipeline, encode, qualityDefault, qualityFloor, targetBytes, isTargetWidth) {
  let q = qualityDefault;
  let buf = await encode(pipeline, q);
  if (!isTargetWidth) return { buf, quality: q };

  // Step down quality until at-or-below target or floor reached.
  while (buf.length > targetBytes && q > qualityFloor) {
    q = Math.max(qualityFloor, q - 6);
    buf = await encode(pipeline, q);
  }
  return { buf, quality: q };
}

async function processCity(slug, sourcePath) {
  const baseName = `${slug}-hero`;
  const inputBuf = await fs.readFile(sourcePath);
  const log = [];

  for (const width of WIDTHS) {
    const pipeline = sharp(inputBuf).resize({ width, withoutEnlargement: true });

    const isTarget = width === 900;

    const avif = await writeAtTarget(
      pipeline,
      encodeAVIF,
      AVIF_QUALITY_DEFAULT,
      AVIF_QUALITY_FLOOR,
      TARGET_BYTES_AT_900,
      isTarget
    );
    const webp = await writeAtTarget(
      pipeline,
      encodeWebP,
      WEBP_QUALITY_DEFAULT,
      WEBP_QUALITY_FLOOR,
      TARGET_BYTES_AT_900,
      isTarget
    );

    const avifPath = path.join(OUTPUT_DIR, `${baseName}-${width}.avif`);
    const webpPath = path.join(OUTPUT_DIR, `${baseName}-${width}.webp`);
    await fs.writeFile(avifPath, avif.buf);
    await fs.writeFile(webpPath, webp.buf);

    log.push({
      width,
      avif: { bytes: avif.buf.length, quality: avif.quality },
      webp: { bytes: webp.buf.length, quality: webp.quality },
    });
  }

  // Warn if 900w couldn't reach target even at floor quality.
  const w900 = log.find((l) => l.width === 900);
  if (w900) {
    const overAvif = w900.avif.bytes > TARGET_BYTES_AT_900;
    const overWebp = w900.webp.bytes > TARGET_BYTES_AT_900;
    if (overAvif || overWebp) {
      console.warn(
        `  ! ${slug} 900w over budget — avif=${kb(w900.avif.bytes)}KB@q${w900.avif.quality} webp=${kb(w900.webp.bytes)}KB@q${w900.webp.quality}`
      );
    }
  }

  return log;
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1);
}

async function main() {
  await ensureDir(OUTPUT_DIR);

  // Verify all source files exist before doing any work.
  const missing = [];
  for (const slug of CITY_SLUGS) {
    const src = path.join(SOURCE_DIR, `${slug}-hero.png`);
    try {
      await fs.access(src);
    } catch {
      missing.push(src);
    }
  }
  if (missing.length) {
    console.error("Missing source files:");
    for (const m of missing) console.error(`  ${m}`);
    process.exit(1);
  }

  console.log(`Optimizing ${CITY_SLUGS.length} city heroes → ${OUTPUT_DIR}`);

  const map = {};
  const summary = [];
  for (const slug of CITY_SLUGS) {
    const src = path.join(SOURCE_DIR, `${slug}-hero.png`);
    process.stdout.write(`  ${slug}…`);
    const log = await processCity(slug, src);
    const w900 = log.find((l) => l.width === 900);
    console.log(
      ` done (900w avif=${kb(w900.avif.bytes)}KB webp=${kb(w900.webp.bytes)}KB)`
    );
    map[slug] = `${slug}-hero`;
    summary.push({ slug, ...w900 });
  }

  // Sort map alphabetically for stable diffs.
  const sortedMap = {};
  for (const k of Object.keys(map).sort()) sortedMap[k] = map[k];
  await fs.writeFile(MAP_PATH, JSON.stringify(sortedMap, null, 2) + "\n");
  console.log(`\nWrote map → ${MAP_PATH}`);

  // Summary table.
  console.log("\n900w summary:");
  console.log("  slug                avif         webp");
  for (const s of summary) {
    console.log(
      `  ${s.slug.padEnd(18)}  ${kb(s.avif.bytes).padStart(5)}KB@q${s.avif.quality}  ${kb(s.webp.bytes).padStart(5)}KB@q${s.webp.quality}`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
