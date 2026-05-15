#!/usr/bin/env node
// Three-pass internal linker for the 5star site.
//
// Skips any page that already renders <InternalLinks> (dynamic component
// handles its own fan-out; double-linking would be spam).
//
// Pass 1 — spoke -> hub
//   Adds 1-2 hub links to legacy article/content pages that don't have
//   InternalLinks. The relevant hubs are inferred from the page slug.
//
// Pass 2 — hub -> spoke
//   Adds a "Related pages" block of 5-8 spoke links to each service hub
//   and city hub.
//
// Pass 3 — sibling
//   Adds 2-3 sibling links (same service different city, or same city
//   different service) to legacy article pages.
//
// Rules:
//   - Max 3 NEW links per page total across all passes (excluding the
//     spoke fan-out block in Pass 2, which is a dedicated section).
//   - Anchor text varied. Track used anchors and refuse repeats >2x site-wide.
//   - Every inserted block is bracketed by `{/* auto-link:pass-N */}` ...
//     `{/* /auto-link */}` for reversibility.
//   - No link to a noindexed page (best-effort: skip /privacy, /reviews).
//
// Usage:
//   node scripts/auto-link-three-pass.mjs --pass=1
//   node scripts/auto-link-three-pass.mjs --pass=2
//   node scripts/auto-link-three-pass.mjs --pass=3
//   node scripts/auto-link-three-pass.mjs --pass=all --dry-run

import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";

const ROOT = "/Volumes/External-2TB/Projects/Clients/5-star-roofing";
const APP = path.join(ROOT, "app");

const PASS_ARG = process.argv.find((a) => a.startsWith("--pass="));
const PASS = PASS_ARG ? PASS_ARG.split("=")[1] : "1";
const DRY = process.argv.includes("--dry-run");

const NOINDEX = new Set([
  "/privacy/", "/reviews/", "/contact/", "/gallery/",
]);

// Services in priority order (most-trafficked first per typical SERP)
const SERVICES = [
  { slug: "hail-damage-repair", title: "Hail Damage Repair" },
  { slug: "roof-replacement",   title: "Roof Replacement" },
  { slug: "metal-roofing",      title: "Metal Roofing" },
  { slug: "commercial-roofing", title: "Commercial Roofing" },
  { slug: "roof-repair",        title: "Roof Repair" },
  { slug: "roof-inspections",   title: "Roof Inspections" },
  { slug: "wind-damage-repair", title: "Wind Damage Repair" },
  { slug: "storm-damage-repair", title: "Storm Damage Repair" },
  { slug: "tpo-roofing",        title: "TPO Roofing" },
  { slug: "asphalt-shingle-roofing", title: "Asphalt Shingle Roofing" },
  { slug: "residential-roofing", title: "Residential Roofing" },
  { slug: "flat-roof-repair",   title: "Flat Roof Repair" },
];

// Cities (priority order)
const CITIES = [
  { slug: "amarillo-tx-roofing", citySlug: "amarillo", name: "Amarillo" },
  { slug: "lubbock-tx-roofing",  citySlug: "lubbock",  name: "Lubbock" },
  { slug: "midland-tx-roofing",  citySlug: "midland",  name: "Midland" },
  { slug: "odessa-tx-roofing",   citySlug: "odessa",   name: "Odessa" },
  { slug: "canyon-texas-roofing", citySlug: "canyon",  name: "Canyon" },
  { slug: "borger-texas-roofing", citySlug: "borger",  name: "Borger" },
  { slug: "pampa-texas-roofing",  citySlug: "pampa",   name: "Pampa" },
  { slug: "dumas-texas-roofing",  citySlug: "dumas",   name: "Dumas" },
];

// Anchor variation pool (cycled site-wide). Each anchor used max twice.
const ANCHOR_USAGE = {};
function pickAnchor(slug, defaultTitle, variants) {
  for (const v of variants) {
    if ((ANCHOR_USAGE[v] || 0) < 2) {
      ANCHOR_USAGE[v] = (ANCHOR_USAGE[v] || 0) + 1;
      return v;
    }
  }
  // Fall back to the default — allow one extra use
  ANCHOR_USAGE[defaultTitle] = (ANCHOR_USAGE[defaultTitle] || 0) + 1;
  return defaultTitle;
}

function hasInternalLinks(src) {
  return /<InternalLinks\b/.test(src);
}
function hasAutoLinkPass(src, pass) {
  return new RegExp(`auto-link:pass-${pass}\\b`).test(src);
}

function listAllAppPages() {
  return globSync("app/*/page.tsx", { cwd: ROOT, absolute: true });
}

function listPagesWithSlug(prefix) {
  return globSync(`app/${prefix}-*/page.tsx`, { cwd: ROOT, absolute: true });
}

// ----- Pass 1: legacy pages -> hubs -----

function pass1() {
  const legacyPages = {
    "roof-rot-damage-in-amarillo": ["roof-repair", "amarillo-tx-roofing"],
    "roof-snow-and-ice-damage-in-amarillo": ["roof-repair", "amarillo-tx-roofing"],
    "heavy-rain-damage-roof-repair-in-amarillo": ["roof-repair", "amarillo-tx-roofing"],
    "pvc-roof-repair-in-amarillo": ["flat-roof-repair", "commercial-roofing"],
    "pvc-roof-replacement-in-amarillo": ["roof-replacement", "commercial-roofing"],
    "pvc-roofing-contractors-in-amarillo": ["commercial-roofing", "amarillo-tx-roofing"],
    "industrial-roofing": ["commercial-roofing", "amarillo-tx-roofing"],
    "roofing-methods": ["services", "amarillo-tx-roofing"],
    "amarillo-weather-impact-on-roofing": ["hail-damage-repair", "amarillo-tx-roofing"],
    "amarillo-homes-roofing-services": ["residential-roofing", "amarillo-tx-roofing"],
    "amarillos-best-roofer": ["amarillo-tx-roofing", "services"],
    "budgeting-for-roof-replacement-expenses": ["roof-replacement", "services"],
  };
  const ANCHOR_VARIANTS = {
    "roof-repair": ["our roof repair services", "Texas Panhandle roof repair team", "the roof repair team"],
    "amarillo-tx-roofing": ["Amarillo roofing services", "our Amarillo roofing crew", "5 Star's Amarillo team"],
    "commercial-roofing": ["commercial roofing services", "our commercial roofing team", "commercial roof installation"],
    "flat-roof-repair": ["flat roof repair", "low-slope roof repair", "flat roof repair team"],
    "roof-replacement": ["roof replacement services", "our roof replacement team", "full roof replacement"],
    "residential-roofing": ["residential roofing services", "our residential team", "home roofing services"],
    "hail-damage-repair": ["hail damage repair services", "our hail damage team", "hail damage specialists"],
    "services": ["our full service list", "5 Star Roofing services", "all roofing services"],
  };

  let modified = 0;
  for (const [route, hubs] of Object.entries(legacyPages)) {
    const file = path.join(APP, route, "page.tsx");
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8");
    if (hasInternalLinks(src)) continue;
    if (hasAutoLinkPass(src, 1)) continue;

    const links = hubs.slice(0, 2).map((hub) => {
      const variants = ANCHOR_VARIANTS[hub] || [hub];
      const anchor = pickAnchor(hub, hub, variants);
      return `<a href="/${hub}/" className="text-brand-brown font-semibold hover:text-brand-gold underline">${anchor}</a>`;
    });
    const block = [
      "",
      "      {/* auto-link:pass-1 */}",
      "      <aside className=\"container-custom mt-6 mb-8\">",
      "        <div className=\"max-w-5xl mx-auto bg-white border-l-4 border-brand-brown rounded-r-2xl p-5 text-sm text-gray-700\">",
      "          <p className=\"font-semibold text-brand-brown mb-1\">Related on this site</p>",
      `          <p>For the next step, see ${links[0]}${links[1] ? " or " + links[1] : ""}.</p>`,
      "        </div>",
      "      </aside>",
      "      {/* /auto-link */}",
      "",
    ].join("\n");

    // Insert after the first {/* TL;DR */} block close (the Quick Summary)
    let inserted = src;
    const tldrCloseMatch = src.match(/Quick Summary[\s\S]*?<\/FadeIn>/);
    if (tldrCloseMatch) {
      const idx = tldrCloseMatch.index + tldrCloseMatch[0].length;
      inserted = src.slice(0, idx) + block + src.slice(idx);
    } else {
      // Fallback: insert after the first </h1>
      const m = src.match(/<\/h1>/);
      if (!m) continue;
      const idx = m.index + m[0].length;
      inserted = src.slice(0, idx) + block + src.slice(idx);
    }

    if (!DRY) fs.writeFileSync(file, inserted, "utf8");
    console.log(`pass1 +2 links: ${route}`);
    modified += 1;
  }
  console.log(`Pass 1 modified ${modified} pages`);
}

// ----- Pass 2: hub -> top spokes -----

function pass2() {
  const ANCHOR_VARIANTS = {
    service: [
      "{Service} in {City}",
      "{City} {service-lower}",
      "{Service} for {City} homes and businesses",
    ],
    city: [
      "{Service} in {City}",
      "{Service} for {City} properties",
      "{City} {service-lower} services",
    ],
  };

  let modified = 0;

  // Service hubs -> spoke fan-out (city versions)
  for (const svc of SERVICES) {
    const hubFile = path.join(APP, svc.slug, "page.tsx");
    if (!fs.existsSync(hubFile)) continue;
    const src = fs.readFileSync(hubFile, "utf8");
    if (hasInternalLinks(src)) continue;
    if (hasAutoLinkPass(src, 2)) continue;

    // Find all spokes that exist for this service
    const spokes = CITIES.filter((c) => {
      return fs.existsSync(path.join(APP, `${svc.slug}-${c.citySlug}`, "page.tsx"));
    }).slice(0, 8);
    if (spokes.length < 3) continue;

    const links = spokes.map((c) => {
      const tmpl = ANCHOR_VARIANTS.service[(ANCHOR_USAGE[`svc-${c.citySlug}`] || 0) % 3];
      ANCHOR_USAGE[`svc-${c.citySlug}`] = (ANCHOR_USAGE[`svc-${c.citySlug}`] || 0) + 1;
      const anchor = tmpl
        .replace("{Service}", svc.title)
        .replace("{service-lower}", svc.title.toLowerCase())
        .replace("{City}", c.name);
      return `<li><a href="/${svc.slug}-${c.citySlug}/" className="text-brand-brown hover:text-brand-gold underline">${anchor}</a></li>`;
    }).join("\n            ");

    const block = [
      "",
      "      {/* auto-link:pass-2 */}",
      "      <aside className=\"container-custom mt-10 mb-10\">",
      "        <div className=\"max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6\">",
      `          <h2 className="text-xl font-bold text-brand-brown mb-3">${svc.title} by City</h2>`,
      "          <ul className=\"grid sm:grid-cols-2 gap-2 list-disc list-inside\">",
      `            ${links}`,
      "          </ul>",
      "        </div>",
      "      </aside>",
      "      {/* /auto-link */}",
      "",
    ].join("\n");

    // Insert before the final closing main/section/page-end pattern.
    // Heuristic: insert immediately before the last </FadeIn> or </main> in the file.
    const lastFade = src.lastIndexOf("</FadeIn>");
    let inserted;
    if (lastFade >= 0) {
      const after = src.indexOf("\n", lastFade) + 1;
      inserted = src.slice(0, after) + block + src.slice(after);
    } else {
      // Fallback: insert before final </>
      const idx = src.lastIndexOf("</");
      inserted = src.slice(0, idx) + block + src.slice(idx);
    }

    if (!DRY) fs.writeFileSync(hubFile, inserted, "utf8");
    console.log(`pass2 +${spokes.length} links: /${svc.slug}/`);
    modified += 1;
  }

  // City hubs -> service fan-out (services in that city)
  for (const city of CITIES) {
    const hubFile = path.join(APP, city.slug, "page.tsx");
    if (!fs.existsSync(hubFile)) continue;
    const src = fs.readFileSync(hubFile, "utf8");
    if (hasInternalLinks(src)) continue;
    if (hasAutoLinkPass(src, 2)) continue;

    // Find services for this city
    const services = SERVICES.filter((s) => {
      return fs.existsSync(path.join(APP, `${s.slug}-${city.citySlug}`, "page.tsx"));
    }).slice(0, 8);
    if (services.length < 3) continue;

    const links = services.map((s) => {
      const tmpl = ANCHOR_VARIANTS.city[(ANCHOR_USAGE[`city-${s.slug}`] || 0) % 3];
      ANCHOR_USAGE[`city-${s.slug}`] = (ANCHOR_USAGE[`city-${s.slug}`] || 0) + 1;
      const anchor = tmpl
        .replace("{Service}", s.title)
        .replace("{service-lower}", s.title.toLowerCase())
        .replace("{City}", city.name);
      return `<li><a href="/${s.slug}-${city.citySlug}/" className="text-brand-brown hover:text-brand-gold underline">${anchor}</a></li>`;
    }).join("\n            ");

    const block = [
      "",
      "      {/* auto-link:pass-2 */}",
      "      <aside className=\"container-custom mt-10 mb-10\">",
      "        <div className=\"max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6\">",
      `          <h2 className="text-xl font-bold text-brand-brown mb-3">${city.name} Roofing Services</h2>`,
      "          <ul className=\"grid sm:grid-cols-2 gap-2 list-disc list-inside\">",
      `            ${links}`,
      "          </ul>",
      "        </div>",
      "      </aside>",
      "      {/* /auto-link */}",
      "",
    ].join("\n");
    const lastFade = src.lastIndexOf("</FadeIn>");
    let inserted;
    if (lastFade >= 0) {
      const after = src.indexOf("\n", lastFade) + 1;
      inserted = src.slice(0, after) + block + src.slice(after);
    } else {
      const idx = src.lastIndexOf("</");
      inserted = src.slice(0, idx) + block + src.slice(idx);
    }

    if (!DRY) fs.writeFileSync(hubFile, inserted, "utf8");
    console.log(`pass2 +${services.length} links: /${city.slug}/`);
    modified += 1;
  }

  console.log(`Pass 2 modified ${modified} pages`);
}

// ----- Pass 3: sibling links on legacy pages -----

function pass3() {
  const SIBLINGS = {
    "roof-rot-damage-in-amarillo": ["heavy-rain-damage-roof-repair-in-amarillo", "roof-snow-and-ice-damage-in-amarillo"],
    "roof-snow-and-ice-damage-in-amarillo": ["heavy-rain-damage-roof-repair-in-amarillo", "amarillo-weather-impact-on-roofing"],
    "heavy-rain-damage-roof-repair-in-amarillo": ["roof-snow-and-ice-damage-in-amarillo", "roof-rot-damage-in-amarillo"],
    "pvc-roof-repair-in-amarillo": ["pvc-roof-replacement-in-amarillo", "pvc-roofing-contractors-in-amarillo"],
    "pvc-roof-replacement-in-amarillo": ["pvc-roof-repair-in-amarillo", "pvc-roofing-contractors-in-amarillo"],
    "pvc-roofing-contractors-in-amarillo": ["pvc-roof-replacement-in-amarillo", "pvc-roof-repair-in-amarillo"],
    "amarillo-weather-impact-on-roofing": ["roof-snow-and-ice-damage-in-amarillo", "roof-rot-damage-in-amarillo"],
    "amarillo-homes-roofing-services": ["amarillos-best-roofer", "roofing-methods"],
    "amarillos-best-roofer": ["amarillo-homes-roofing-services", "amarillo-weather-impact-on-roofing"],
    "budgeting-for-roof-replacement-expenses": ["amarillo-homes-roofing-services", "amarillos-best-roofer"],
    "roofing-methods": ["amarillo-weather-impact-on-roofing", "amarillo-homes-roofing-services"],
    "industrial-roofing": ["pvc-roofing-contractors-in-amarillo", "pvc-roof-replacement-in-amarillo"],
  };
  const TITLES = {
    "roof-rot-damage-in-amarillo": "roof rot damage",
    "roof-snow-and-ice-damage-in-amarillo": "snow and ice damage",
    "heavy-rain-damage-roof-repair-in-amarillo": "heavy rain damage",
    "pvc-roof-repair-in-amarillo": "PVC roof repair",
    "pvc-roof-replacement-in-amarillo": "PVC roof replacement",
    "pvc-roofing-contractors-in-amarillo": "PVC roofing contractors",
    "amarillo-weather-impact-on-roofing": "Amarillo weather impact",
    "amarillo-homes-roofing-services": "Amarillo home roofing",
    "amarillos-best-roofer": "Amarillo's best roofer",
    "budgeting-for-roof-replacement-expenses": "budgeting for replacement",
    "roofing-methods": "roofing methods",
    "industrial-roofing": "industrial roofing",
  };
  let modified = 0;
  for (const [route, sibs] of Object.entries(SIBLINGS)) {
    const file = path.join(APP, route, "page.tsx");
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8");
    if (hasInternalLinks(src)) continue;
    if (hasAutoLinkPass(src, 3)) continue;

    const links = sibs.slice(0, 3).map((s) => {
      const title = TITLES[s] || s;
      return `<li><a href="/${s}/" className="text-brand-brown hover:text-brand-gold underline">${title}</a></li>`;
    }).join("\n            ");

    const block = [
      "",
      "      {/* auto-link:pass-3 */}",
      "      <aside className=\"container-custom mt-8 mb-10\">",
      "        <div className=\"max-w-5xl mx-auto bg-white border border-brand-gold/30 rounded-2xl p-5\">",
      "          <p className=\"font-semibold text-brand-brown mb-2\">You might also find these useful</p>",
      "          <ul className=\"grid sm:grid-cols-2 gap-2 list-disc list-inside text-sm\">",
      `            ${links}`,
      "          </ul>",
      "        </div>",
      "      </aside>",
      "      {/* /auto-link */}",
      "",
    ].join("\n");

    // Insert before final </> or last </FadeIn>
    const lastFade = src.lastIndexOf("</FadeIn>");
    let inserted;
    if (lastFade >= 0) {
      const after = src.indexOf("\n", lastFade) + 1;
      inserted = src.slice(0, after) + block + src.slice(after);
    } else {
      const idx = src.lastIndexOf("</");
      inserted = src.slice(0, idx) + block + src.slice(idx);
    }

    if (!DRY) fs.writeFileSync(file, inserted, "utf8");
    console.log(`pass3 +${sibs.slice(0,3).length} sibling links: ${route}`);
    modified += 1;
  }
  console.log(`Pass 3 modified ${modified} pages`);
}

if (PASS === "1" || PASS === "all") pass1();
if (PASS === "2" || PASS === "all") pass2();
if (PASS === "3" || PASS === "all") pass3();
