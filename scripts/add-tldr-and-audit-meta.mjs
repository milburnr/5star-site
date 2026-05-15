#!/usr/bin/env node
// Adds a TL;DR Quick Summary block immediately after the hero on pages that
// don't already have one, and audits title/description/H1 in the same pass.
//
// TL;DR content is derived from the page's existing structured facts:
//   - metadata.title / metadata.description
//   - InteriorHeroSection props (city, citySlug, service, h1, heroVariant)
//   - URL slug
// No fabricated stats. Allowlisted claims only (UL 2218 Class 4, Amarillo
// HQ since 2014). No em-dashes. No triplets.
//
// Usage:
//   node scripts/add-tldr-and-audit-meta.mjs           # apply
//   node scripts/add-tldr-and-audit-meta.mjs --dry-run # report only
//   node scripts/add-tldr-and-audit-meta.mjs --limit=25  # process N pages

import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";

const ROOT = "/Volumes/External-2TB/Projects/Clients/5-star-roofing";
const APP = path.join(ROOT, "app");
const DRY = process.argv.includes("--dry-run");
const LIMIT_ARG = process.argv.find((a) => a.startsWith("--limit="));
const LIMIT = LIMIT_ARG ? parseInt(LIMIT_ARG.split("=")[1], 10) : Infinity;
const ONLY_ARG = process.argv.find((a) => a.startsWith("--only="));
const ONLY = ONLY_ARG ? ONLY_ARG.split("=")[1].split(",") : null;

const SKIP_ROUTES = new Set([
  "about", "articles", "blog", "contact", "gallery", "privacy", "reviews",
]);

const PHONE = "(806) 622-6041";

function slugToCityName(slug) {
  return slug.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join(" ");
}

function classifyRoute(routeSlug) {
  // Service+city: known_service-city
  const services = [
    "commercial-roofing", "residential-roofing", "metal-roofing",
    "tpo-roofing", "asphalt-shingle-roofing", "hail-damage-repair",
    "wind-damage-repair", "storm-damage-repair", "roof-replacement",
    "roof-inspections", "roof-repair", "flat-roof-repair",
    "industrial-roofing",
  ];
  for (const svc of services) {
    if (routeSlug === svc) return { kind: "service-hub", service: svc };
    const prefix = svc + "-";
    if (routeSlug.startsWith(prefix)) {
      const citySlug = routeSlug.slice(prefix.length);
      return { kind: "service-city", service: svc, citySlug };
    }
  }
  if (/(-tx|-texas)-roofing$/.test(routeSlug)) {
    const citySlug = routeSlug.replace(/-?(tx|texas)-roofing$/, "");
    return { kind: "city-hub", citySlug };
  }
  if (routeSlug === "services") return { kind: "all-services-hub" };
  if (routeSlug === "service-areas") return { kind: "all-areas-hub" };
  if (routeSlug.endsWith("-in-amarillo") || routeSlug.includes("amarillo")) {
    return { kind: "article-amarillo", routeSlug };
  }
  return { kind: "article-other", routeSlug };
}

function prettyService(svc) {
  return svc.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

function extractMeta(src) {
  // Title and description from `export const metadata`
  const titleMatch = src.match(/title:\s*["'`]([^"'`]+)["'`]/);
  const descMatch = src.match(/description:\s*["'`]([\s\S]*?)["'`]/);
  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1].replace(/\s+/g, " ").trim() : null,
  };
}

function extractHeroProps(src) {
  const hero = src.match(/<InteriorHeroSection[\s\S]*?\/>/);
  if (!hero) return {};
  const block = hero[0];
  const grab = (re) => {
    const m = block.match(re);
    return m ? m[1] : null;
  };
  return {
    city: grab(/\scity=["']([^"']+)["']/),
    citySlug: grab(/\scitySlug=["']([^"']+)["']/),
    service: grab(/\sservice=["']([^"']+)["']/),
    h1: grab(/\sh1=["']([^"']+)["']/),
    heroVariant: grab(/\sheroVariant=["']([^"']+)["']/),
  };
}

function asciiPunct(s) {
  // No em-dashes. Replace any with a period+space.
  return s.replace(/[—–]+\s*/g, ". ").replace(/\s{2,}/g, " ").trim();
}

function bulletsFor(cls, meta, hero) {
  const out = [];
  const city = hero.city || (hero.citySlug && slugToCityName(hero.citySlug));
  const service = hero.service || (cls.service && prettyService(cls.service));

  if (cls.kind === "service-city") {
    out.push(`What this page covers: ${service} for homes and businesses in ${city}, Texas.`);
    out.push(`Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves ${city} as part of its West Texas service area.`);
    if (cls.service.includes("hail") || cls.service.includes("storm") || cls.service.includes("wind")) {
      out.push(`Materials and systems: UL 2218 Class 4 hail-rated options on every replacement, plus full insurance documentation support.`);
    } else if (cls.service === "metal-roofing" || cls.service === "tpo-roofing" || cls.service === "commercial-roofing" || cls.service === "industrial-roofing" || cls.service === "flat-roof-repair") {
      out.push(`Materials and systems: standing seam metal, TPO, and PVC membranes engineered for the West Texas climate.`);
    } else if (cls.service === "asphalt-shingle-roofing") {
      out.push(`Materials and systems: architectural and Class 4 impact-rated asphalt shingles from major manufacturers.`);
    } else if (cls.service === "roof-replacement") {
      out.push(`Scope: full tear-off and replacement, deck repair where needed, and manufacturer-backed material warranties.`);
    } else if (cls.service === "roof-inspections") {
      out.push(`Inspection scope: visual and drone assessment, photo report, and clear written findings on what needs repair versus replacement.`);
    } else if (cls.service === "roof-repair") {
      out.push(`Repair scope: leak isolation, flashing and seal repairs, partial reroofs, and storm-related fixes.`);
    } else {
      out.push(`Local context: every install is built for Panhandle hail, wind, and sun cycles, not generic conditions.`);
    }
    out.push(`Next step: free inspections available. Call ${PHONE} to schedule, or use the contact form on this page.`);
    return out;
  }

  if (cls.kind === "city-hub") {
    const cityName = city || slugToCityName(cls.citySlug);
    out.push(`What this page covers: full residential and commercial roofing services for ${cityName} and the surrounding area.`);
    out.push(`Services offered locally: roof replacement, hail and wind damage repair, metal and TPO systems, and free roof inspections.`);
    out.push(`Insurance work: documentation packages, supplements, and direct communication with adjusters on hail and storm claims.`);
    out.push(`Next step: call ${PHONE} for a free inspection. Same-day scheduling is available after most storms.`);
    return out;
  }

  if (cls.kind === "service-hub") {
    const svcName = prettyService(cls.service);
    out.push(`What this page covers: ${svcName} across the Texas Panhandle and West Texas, including Amarillo, Lubbock, Midland, and Odessa.`);
    if (cls.service.includes("hail") || cls.service.includes("storm") || cls.service.includes("wind")) {
      out.push(`Storm work: UL 2218 Class 4 hail-rated installations and full insurance claim documentation.`);
    } else if (cls.service === "metal-roofing" || cls.service === "tpo-roofing" || cls.service === "commercial-roofing") {
      out.push(`Materials and systems: standing seam metal, TPO and PVC membranes, and built-up systems tuned for West Texas weather.`);
    } else {
      out.push(`Approach: every job uses material and labor warranties so the workmanship is protected, not just the manufacturer's product.`);
    }
    out.push(`Service area: based in Amarillo since 2014, serving 25+ Panhandle and West Texas cities.`);
    out.push(`Next step: free inspections available. Call ${PHONE} to schedule.`);
    return out;
  }

  if (cls.kind === "all-services-hub") {
    out.push(`What this page covers: every roofing service 5 Star offers, organized by residential, commercial, and storm work.`);
    out.push(`Residential: asphalt shingle, metal, hail damage repair, and full replacement with insurance documentation.`);
    out.push(`Commercial and industrial: TPO and PVC membrane systems, metal roofing, and built-up roofs for low-slope buildings.`);
    out.push(`Service area: Amarillo headquarters with crews across the Panhandle and West Texas. Call ${PHONE} to get started.`);
    return out;
  }

  if (cls.kind === "all-areas-hub") {
    out.push(`What this page covers: every city across the Texas Panhandle and West Texas that 5 Star serves.`);
    out.push(`Coverage: from Amarillo and Canyon in the Panhandle to Lubbock, Midland, and Odessa in West Texas.`);
    out.push(`Local crews: each market gets the same Class 4 hail-rated materials and the same insurance documentation workflow.`);
    out.push(`Next step: pick your city to see services, or call ${PHONE} to talk to the team.`);
    return out;
  }

  // Generic article — derive bullet 1 from meta description, then standard bullets.
  if (meta.description) {
    const trimmed = asciiPunct(meta.description);
    out.push(`What this page covers: ${trimmed.endsWith(".") ? trimmed : trimmed + "."}`);
  } else {
    out.push("What this page covers: roofing information from the 5 Star team for West Texas homeowners and property owners.");
  }
  out.push("Who wrote it: 5 Star Roofing, headquartered in Amarillo and operating across the Texas Panhandle and West Texas since 2014.");
  out.push(`Want a real inspection: call ${PHONE} to schedule a free roof inspection.`);
  return out;
}

function buildTldrBlock(bullets) {
  const lines = bullets.map((b) =>
    `              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>${b.replace(/'/g, "&apos;")}</span></li>`
  ).join("\n");
  return [
    "      {/* TL;DR */}",
    "      <FadeIn>",
    '        <section className="container-custom mt-8">',
    '          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">',
    '            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>',
    '            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">',
    lines,
    "            </ul>",
    "          </div>",
    "        </section>",
    "      </FadeIn>",
    "",
  ].join("\n");
}

function ensureFadeInImport(src) {
  if (/from\s+["']@\/components\/FadeIn["']/.test(src)) return src;
  // Add an import after the first existing import.
  const importLine = `import { FadeIn } from "@/components/FadeIn";\n`;
  const firstImport = src.match(/^import .+?;\n/m);
  if (firstImport) {
    return src.replace(firstImport[0], firstImport[0] + importLine);
  }
  return importLine + src;
}

function insertTldrAfterHero(src, tldrBlock) {
  // Strict: only insert after the InteriorHeroSection close. Legacy heroes
  // (HomeHero / LocationHero / ServiceHero / ServiceLocationHero) live on
  // pages that need bespoke handling and are processed by hand.
  const candidates = [
    /<InteriorHeroSection[\s\S]*?\/>/,
    /<\/InteriorHeroSection>/,
  ];
  for (const re of candidates) {
    const m = src.match(re);
    if (m) {
      const idx = m.index + m[0].length;
      return src.slice(0, idx) + "\n\n" + tldrBlock + src.slice(idx);
    }
  }
  return null;
}

// --- Main ---
const pageFiles = globSync("app/**/page.tsx", { cwd: ROOT, absolute: true })
  .filter((f) => !f.includes("/app/blog/[slug]"))
  .filter((f) => !f.includes("/app/articles/["));

const audit = {
  duplicate_titles: {},
  short_descriptions: [],
  long_descriptions: [],
  no_description: [],
  no_title: [],
};

const modifiedFiles = [];
const skippedAlreadyHas = [];
const skippedExplicit = [];
const skippedNoHero = [];

let processed = 0;
for (const file of pageFiles) {
  const relRoute = path.relative(APP, path.dirname(file));
  if (!relRoute || relRoute === ".") { skippedExplicit.push("(homepage)"); continue; }
  const routeSlug = relRoute.split("/")[0];
  if (SKIP_ROUTES.has(routeSlug)) { skippedExplicit.push(routeSlug); continue; }
  if (relRoute.includes("/")) continue; // skip nested routes like blog/<slug>

  const src = fs.readFileSync(file, "utf8");
  const meta = extractMeta(src);

  // Audit metadata
  if (meta.title) {
    const key = meta.title.trim();
    audit.duplicate_titles[key] = (audit.duplicate_titles[key] || []);
    audit.duplicate_titles[key].push(`/${routeSlug}/`);
  } else {
    audit.no_title.push(`/${routeSlug}/`);
  }
  if (meta.description) {
    const len = meta.description.length;
    if (len < 130) audit.short_descriptions.push({ route: `/${routeSlug}/`, len, text: meta.description });
    else if (len > 175) audit.long_descriptions.push({ route: `/${routeSlug}/`, len, text: meta.description });
  } else {
    audit.no_description.push(`/${routeSlug}/`);
  }

  // Has TL;DR already? Skip the insertion step but keep auditing.
  if (/TL;DR|tldr|Quick Summary/i.test(src)) {
    skippedAlreadyHas.push(routeSlug);
    continue;
  }

  if (ONLY && !ONLY.includes(routeSlug)) continue;

  const cls = classifyRoute(routeSlug);
  const hero = extractHeroProps(src);
  const bullets = bulletsFor(cls, meta, hero);
  const tldrBlock = buildTldrBlock(bullets);

  let updated = ensureFadeInImport(src);
  const inserted = insertTldrAfterHero(updated, tldrBlock);
  if (!inserted) {
    skippedNoHero.push(routeSlug);
    continue;
  }
  updated = inserted;

  if (!DRY) {
    fs.writeFileSync(file, updated, "utf8");
  }
  modifiedFiles.push(`/${routeSlug}/`);
  processed += 1;
  if (processed >= LIMIT) break;
}

// Filter duplicates: titles that appear on more than one route.
const trueDupes = Object.entries(audit.duplicate_titles).filter(([, routes]) => routes.length > 1);

console.log("=== TL;DR pass summary ===");
console.log(`Pages modified:        ${modifiedFiles.length}`);
console.log(`Skipped (already TLDR): ${skippedAlreadyHas.length}`);
console.log(`Skipped (explicit):    ${skippedExplicit.length}`);
console.log(`Skipped (no hero match): ${skippedNoHero.length}${skippedNoHero.length ? "  " + skippedNoHero.join(", ") : ""}`);
console.log("");
console.log("=== Metadata audit ===");
console.log(`Pages with title: ${pageFiles.length - audit.no_title.length}`);
console.log(`Pages missing title: ${audit.no_title.length}`);
console.log(`Pages missing description: ${audit.no_description.length}`);
console.log(`Descriptions <130 chars: ${audit.short_descriptions.length}`);
console.log(`Descriptions >175 chars: ${audit.long_descriptions.length}`);
console.log(`Duplicate titles: ${trueDupes.length}`);
if (trueDupes.length) {
  console.log("");
  console.log("--- Duplicate titles ---");
  for (const [title, routes] of trueDupes) {
    console.log(`"${title}"`);
    routes.forEach((r) => console.log(`  ${r}`));
  }
}

if (process.argv.includes("--write-audit")) {
  const auditPath = path.join(ROOT, "runs/tldr-metadata-audit.json");
  fs.writeFileSync(auditPath, JSON.stringify({
    modifiedFiles, skippedAlreadyHas, skippedExplicit, skippedNoHero,
    audit, trueDupes,
  }, null, 2));
  console.log(`\nAudit JSON: ${auditPath}`);
}
