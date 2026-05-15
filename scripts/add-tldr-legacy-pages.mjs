#!/usr/bin/env node
// Adds TL;DR / Quick Summary to the 12 legacy pages that use <Breadcrumb>
// instead of <InteriorHeroSection>. Inserts immediately after the first
// </h1> close (consistent across these pages: industrial-roofing,
// roofing-methods, amarillo-weather-impact-on-roofing, roof-rot-damage-in-
// amarillo, roof-snow-and-ice-damage-in-amarillo, pvc-roof-repair-in-
// amarillo, pvc-roof-replacement-in-amarillo, pvc-roofing-contractors-in-
// amarillo, heavy-rain-damage-roof-repair-in-amarillo, budgeting-for-roof-
// replacement-expenses, amarillos-best-roofer, amarillo-homes-roofing-
// services).

import fs from "node:fs";
import path from "node:path";

const ROOT = "/Volumes/External-2TB/Projects/Clients/5-star-roofing";
const PHONE = "(806) 622-6041";

const TARGETS = {
  "roofing-methods": [
    "What this page covers: a plain-English guide to the modern roofing methods used across the Texas Panhandle, including TPO, standing seam metal, and Class 4 asphalt systems.",
    "Why it matters here: every method on this page is rated for the Hail Alley conditions that hit Amarillo and West Texas every spring.",
    "Who built it: 5 Star Roofing, headquartered in Amarillo since 2014.",
    `Want one of these on your roof: call ${PHONE} for a free inspection.`,
  ],
  "roof-snow-and-ice-damage-in-amarillo": [
    "What this page covers: how snow load, ice dams, and freeze-thaw cycles damage Amarillo roofs and what to do about it.",
    "Local context: Amarillo averages 18 inches of snow and 80+ freeze-thaw cycles every winter, more than enough to expose weak flashing and worn underlayment.",
    "Repair scope: leak isolation, flashing rework, partial reroofs, and full replacement where the deck is compromised.",
    `Next step: free inspections available. Call ${PHONE} to schedule.`,
  ],
  "roof-rot-damage-in-amarillo": [
    "What this page covers: how roof rot starts on Texas Panhandle homes and the inspection and repair steps that stop it.",
    "Local context: Amarillo's humidity swings and freeze-thaw cycles let small leaks turn into structural rot within a single season if undetected.",
    "Repair scope: rotted decking replacement, ventilation rework, and full reroofs where the damage runs deep.",
    `Next step: call ${PHONE} for a free inspection. Same-day scheduling is available after most storms.`,
  ],
  "pvc-roofing-contractors-in-amarillo": [
    "What this page covers: PVC membrane roofing for commercial buildings in Amarillo and the West Texas region.",
    "Why PVC here: PVC stands up to Panhandle UV, hail, and ponding water better than most single-ply systems.",
    "Scope of work: full installs, partial reroofs, and warranty-backed repairs for flat and low-slope buildings.",
    `Next step: free site assessments available. Call ${PHONE} to schedule.`,
  ],
  "pvc-roof-replacement-in-amarillo": [
    "What this page covers: PVC membrane roof replacement for Amarillo commercial properties.",
    "Why PVC for replacement: heat-welded seams, hail and chemical resistance, and 20+ year manufacturer warranties.",
    "Scope of work: tear-off, deck repair where needed, insulation, and full PVC membrane installation.",
    `Next step: call ${PHONE} for a free roof assessment.`,
  ],
  "pvc-roof-repair-in-amarillo": [
    "What this page covers: PVC membrane roof repair for commercial buildings in Amarillo.",
    "Repair scope: heat-welded seam repairs, puncture patching, flashing rework, and ponding-water correction.",
    "Local context: PVC is the most common single-ply membrane on Amarillo commercial roofs and the system 5 Star repairs most often.",
    `Next step: free repair assessment. Call ${PHONE} to schedule.`,
  ],
  "industrial-roofing": [
    "What this page covers: industrial roofing systems for warehouses, manufacturing facilities, and distribution centers across the Texas Panhandle.",
    "Systems offered: TPO and PVC membranes, standing seam metal, and built-up roofs for large low-slope buildings.",
    "Service area: Amarillo headquarters with crews working across the Panhandle and West Texas including Lubbock, Midland, and Odessa.",
    `Next step: free site assessments for property managers. Call ${PHONE}.`,
  ],
  "heavy-rain-damage-roof-repair-in-amarillo": [
    "What this page covers: how to spot and fix heavy-rain damage on Amarillo roofs before it turns into structural problems.",
    "Local context: Amarillo's flash storms drop more than an inch of rain per hour several times every spring, exposing weak flashing and worn shingles.",
    "Repair scope: leak isolation, flashing repair, partial reroofs, and full replacement where the deck is compromised.",
    `Next step: call ${PHONE} for a free roof inspection.`,
  ],
  "budgeting-for-roof-replacement-expenses": [
    "What this page covers: a practical walkthrough of what goes into a roof replacement budget for a Texas Panhandle home.",
    "What it includes: typical line items like tear-off, decking, underlayment, materials, labor, permits, and disposal.",
    "Local context: insurance often covers a large share of replacement costs after a hail or wind event in Amarillo and West Texas.",
    `Want a real quote: call ${PHONE} for a free inspection and itemized estimate.`,
  ],
  "amarillos-best-roofer": [
    "What this page covers: why 5 Star Roofing is the local choice for Amarillo homeowners and property owners.",
    "Credentials: headquartered in Amarillo since 2014, Class 4 hail-rated installs, real Google reviews, and direct insurance documentation.",
    "Service area: every Amarillo neighborhood plus the broader Panhandle and West Texas region.",
    `Next step: free roof inspections available. Call ${PHONE} to schedule.`,
  ],
  "amarillo-weather-impact-on-roofing": [
    "What this page covers: how Amarillo weather, hail, wind, UV, and freeze-thaw, affects roof life and what to do about it.",
    "Local context: Amarillo sits in Hail Alley, averaging 7 to 10 significant hail events per year on top of regular wind and UV exposure.",
    "What to do: schedule a roof inspection after every major storm and after every five years on a working roof.",
    `Next step: call ${PHONE} for a free inspection from a local Amarillo crew.`,
  ],
  "amarillo-homes-roofing-services": [
    "What this page covers: residential roofing services for Amarillo homes including replacement, repair, and storm damage work.",
    "Materials and systems: Class 4 hail-rated asphalt shingles, standing seam metal, and architectural shingles from major manufacturers.",
    "Local context: 5 Star Roofing is headquartered in Amarillo and has been serving Potter and Randall County homes since 2014.",
    `Next step: free inspections, same-day scheduling after most storms. Call ${PHONE}.`,
  ],
};

function ensureFadeInImport(src) {
  if (/from\s+["']@\/components\/FadeIn["']/.test(src)) return src;
  const importLine = `import { FadeIn } from "@/components/FadeIn";\n`;
  const firstImport = src.match(/^import .+?;\n/m);
  if (firstImport) return src.replace(firstImport[0], firstImport[0] + importLine);
  return importLine + src;
}

function buildBlock(bullets) {
  const lis = bullets.map((b) =>
    `              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>${b.replace(/'/g, "&apos;")}</span></li>`
  ).join("\n");
  return [
    "",
    "      {/* TL;DR */}",
    "      <FadeIn>",
    '        <section className="container-custom mt-4 mb-8">',
    '          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">',
    '            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>',
    '            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">',
    lis,
    "            </ul>",
    "          </div>",
    "        </section>",
    "      </FadeIn>",
    "",
  ].join("\n");
}

for (const [route, bullets] of Object.entries(TARGETS)) {
  const file = path.join(ROOT, "app", route, "page.tsx");
  if (!fs.existsSync(file)) {
    console.log(`MISSING: ${file}`);
    continue;
  }
  const src = fs.readFileSync(file, "utf8");
  // Anchor: first </h1> close.
  const m = src.match(/<\/h1>/);
  if (!m) {
    console.log(`NO </h1>: ${route}`);
    continue;
  }
  const idx = m.index + m[0].length;
  const block = buildBlock(bullets);
  const updated = ensureFadeInImport(src.slice(0, idx) + block + src.slice(idx));
  fs.writeFileSync(file, updated, "utf8");
  console.log(`updated: ${route}`);
}
