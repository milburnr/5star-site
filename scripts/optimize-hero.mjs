#!/usr/bin/env node
/**
 * optimize-hero.mjs
 *
 * One-shot optimizer that takes the source `public/images/heroes/5star-new-hero.png`
 * (~2.5 MB at 1672x941) and emits responsive WebP + AVIF derivatives:
 *
 *   600w   — mobile / phone
 *   900w   — small tablet
 *   1200w  — primary desktop
 *   1920w  — HD desktop / retina
 *
 * Used by HomeHero's <HeroImageSet>. Re-run if the source image is replaced.
 *
 *   node scripts/optimize-hero.mjs
 */

import sharp from "sharp";
import { stat } from "node:fs/promises";

const src = "public/images/heroes/5star-new-hero.png";
const sizes = [600, 900, 1200, 1920];

const meta = await sharp(src).metadata();
console.log(`Source: ${src}`);
console.log(
  `  ${meta.width}x${meta.height}  ${meta.format}  ${((await stat(src)).size / 1024).toFixed(1)} KB`,
);

for (const w of sizes) {
  for (const fmt of ["webp", "avif"]) {
    const out = `public/images/heroes/5star-new-hero-${w}w.${fmt}`;
    let pipeline = sharp(src).resize({ width: w, withoutEnlargement: false });
    if (fmt === "webp") pipeline = pipeline.webp({ quality: 82, effort: 5 });
    if (fmt === "avif") pipeline = pipeline.avif({ quality: 60, effort: 4 });
    await pipeline.toFile(out);
    const sz = (await stat(out)).size;
    console.log(`  → ${out}  ${(sz / 1024).toFixed(1)} KB`);
  }
}

console.log("Done.");
