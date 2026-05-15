#!/usr/bin/env node
// Pads short meta descriptions to 150-160 chars with natural service phrases
// and trims long ones (>175) without losing meaning. Fixes the 24 issues
// surfaced by add-tldr-and-audit-meta.mjs.

import fs from "node:fs";
import path from "node:path";

const ROOT = "/Volumes/External-2TB/Projects/Clients/5-star-roofing";

// Map: route → { mode, new_description }
const FIXES = {
  "amarillos-best-roofer": {
    mode: "replace",
    text: "5 Star Roofing is Amarillo's local roofing company since 2014. Class 4 hail-rated installs, real Google reviews, free inspections. Call (806) 622-6041.",
  },
  "wildorado-tx-roofing": {
    mode: "append",
    add: " Free inspections, insurance documentation support.",
  },
  "tpo-roofing-odessa": { mode: "append", add: " Class 4 hail-rated systems available." },
  "tpo-roofing-midland": { mode: "append", add: " Class 4 hail-rated systems available." },
  "tpo-roofing-lubbock": { mode: "append", add: " Class 4 hail-rated systems available." },
  "storm-damage-repair-odessa": { mode: "append", add: " Same-day scheduling after most storms." },
  "storm-damage-repair-midland": { mode: "append", add: " Same-day scheduling after most storms." },
  "storm-damage-repair-lubbock": { mode: "append", add: " Same-day scheduling after most storms." },
  "services": { mode: "append", add: " Headquartered in Amarillo since 2014. Free inspections available." },
  "roof-replacement-odessa": { mode: "append", add: " Free inspections, fast scheduling." },
  "roof-replacement-midland": { mode: "append", add: " Free inspections, fast scheduling." },
  "roof-replacement-lubbock": { mode: "append", add: " Free inspections, fast scheduling." },
  "roof-repair-odessa": { mode: "append", add: " Free inspections, insurance support." },
  "roof-repair-midland": { mode: "append", add: " Free inspections, fast scheduling. Call (806) 622-6041." },
  "roof-repair-lubbock": { mode: "append", add: " Free inspections, fast scheduling. Call (806) 622-6041." },
  "roof-inspections-snyder": { mode: "append", add: " Insurance documentation support." },
  "roof-inspections-monahans": { mode: "append", add: " Free inspections. Call (806) 622-6041." },
  "roof-inspections-levelland": { mode: "append", add: " Free inspections. Call (806) 622-6041." },
  "residential-roofing": { mode: "append", add: " Class 4 hail-rated options. Free inspections available." },
  "metal-roofing-snyder": { mode: "append", add: " Class 4 hail-rated options available." },
  "industrial-roofing": { mode: "append", add: " Free site assessments for property managers." },
  "hail-damage-repair-amarillo": { mode: "append", add: " Class 4 hail-rated installs available." },
  // Long ones
  "service-areas": {
    mode: "replace",
    text: "5 Star Roofing serves Amarillo, Lubbock, Midland, Odessa, and 16+ West Texas cities. Residential and commercial roof replacement and hail damage repair.",
  },
  "amarillo-tx-roofing": {
    mode: "replace",
    text: "Roofing in Amarillo TX. Hail Alley specialists for Potter & Randall Counties. Residential and commercial work. Free inspections. Call (806) 622-6041.",
  },
};

let changed = 0;
for (const [route, fix] of Object.entries(FIXES)) {
  const file = path.join(ROOT, "app", route, "page.tsx");
  if (!fs.existsSync(file)) {
    console.warn(`MISSING: ${file}`);
    continue;
  }
  const src = fs.readFileSync(file, "utf8");
  // Find the FIRST description: (in the `export const metadata` block)
  const metaBlockMatch = src.match(/export const metadata[\s\S]*?^};/m) || src.match(/export const metadata[\s\S]*?\n\};/);
  if (!metaBlockMatch) {
    console.warn(`NO METADATA: ${file}`);
    continue;
  }
  const metaBlock = metaBlockMatch[0];
  const descRe = /description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/;
  const m = metaBlock.match(descRe);
  if (!m) {
    console.warn(`NO DESC: ${file}`);
    continue;
  }
  const old = m[1];
  let next;
  if (fix.mode === "replace") next = fix.text;
  else next = old + fix.add;
  // Update only inside the metaBlock first occurrence (which is the page-level description).
  const newMetaBlock = metaBlock.replace(descRe, `description: "${next}"`);
  const updated = src.replace(metaBlock, newMetaBlock);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`${route.padEnd(36)} ${old.length} -> ${next.length}`);
  changed += 1;
}
console.log(`\nUpdated ${changed} files.`);
