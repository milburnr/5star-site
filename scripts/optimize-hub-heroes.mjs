#!/usr/bin/env node
/**
 * optimize-hub-heroes.mjs
 *
 * Optimizes the hero photos used by service-hub pages (/metal-roofing,
 * /tpo-roofing, /commercial-roofing). Source files live in
 * /tmp/hub-hero-sources/ (downloaded from R2). Emits AVIF + WebP variants
 * at 4 widths (600, 900, 1200, 1920) into public/images/heroes/services/.
 *
 * Target: <= 80KB at the 900w breakpoint. Quality is stepped down from
 * default until target is met or floor is reached.
 *
 * Repeatable. Re-runs are idempotent (overwrites existing files).
 *
 * Usage: node scripts/optimize-hub-heroes.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

const SOURCE_DIR = "/tmp/hub-hero-sources";
const OUTPUT_DIR = path.join(REPO_ROOT, "public/images/heroes/services");

// Map of basename → source filename. Each basename is the prefix we'll
// emit as `<basename>-<width>.<ext>`. Pages reference these directly.
const HUB_HEROES = [
  { basename: "metal-hub", source: "metal-plainview-35-1280w.webp" },
  { basename: "tpo-hub", source: "commercial-pampa-1-1280w.jpg" },
  { basename: "commercial-hub", source: "hero-commercial.jpg" },
  { basename: "hail-hub", source: "hero-hail-damage.jpg" },
];

const WIDTHS = [600, 900, 1200, 1920];
const TARGET_BYTES_AT_900 = 80 * 1024;

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
  while (buf.length > targetBytes && q > qualityFloor) {
    q = Math.max(qualityFloor, q - 6);
    buf = await encode(pipeline, q);
  }
  return { buf, quality: q };
}

async function processHero({ basename, source }) {
  const sourcePath = path.join(SOURCE_DIR, source);
  const inputBuf = await fs.readFile(sourcePath);
  const log = [];
  for (const width of WIDTHS) {
    const pipeline = sharp(inputBuf).resize({ width, withoutEnlargement: true });
    const isTarget = width === 900;
    const avif = await writeAtTarget(pipeline, encodeAVIF, AVIF_QUALITY_DEFAULT, AVIF_QUALITY_FLOOR, TARGET_BYTES_AT_900, isTarget);
    const webp = await writeAtTarget(pipeline, encodeWebP, WEBP_QUALITY_DEFAULT, WEBP_QUALITY_FLOOR, TARGET_BYTES_AT_900, isTarget);
    await fs.writeFile(path.join(OUTPUT_DIR, `${basename}-${width}.avif`), avif.buf);
    await fs.writeFile(path.join(OUTPUT_DIR, `${basename}-${width}.webp`), webp.buf);
    log.push({ width, avif: { bytes: avif.buf.length, quality: avif.quality }, webp: { bytes: webp.buf.length, quality: webp.quality } });
  }
  return log;
}

function kb(b) { return (b / 1024).toFixed(1); }

async function main() {
  await ensureDir(OUTPUT_DIR);
  const missing = [];
  for (const h of HUB_HEROES) {
    try { await fs.access(path.join(SOURCE_DIR, h.source)); }
    catch { missing.push(h.source); }
  }
  if (missing.length) {
    console.error("Missing source files in", SOURCE_DIR);
    for (const m of missing) console.error("  ", m);
    process.exit(1);
  }
  console.log(`Optimizing ${HUB_HEROES.length} hub heroes → ${OUTPUT_DIR}`);
  for (const h of HUB_HEROES) {
    process.stdout.write(`  ${h.basename}…`);
    const log = await processHero(h);
    const w900 = log.find((l) => l.width === 900);
    console.log(` done (900w avif=${kb(w900.avif.bytes)}KB webp=${kb(w900.webp.bytes)}KB)`);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
