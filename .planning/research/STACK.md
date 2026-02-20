# Stack Research

**Domain:** Local service business SEO optimization — Next.js 15 static site
**Researched:** 2026-02-20
**Confidence:** MEDIUM-HIGH (schema types HIGH via Google docs; tooling MEDIUM via npm + WebSearch)

---

## Context: What Already Exists

This is an optimization task on an existing production stack, not a greenfield build. The core framework (Next.js 15, TypeScript, Tailwind, Framer Motion) is locked in. This research focuses on:

1. Schema/structured data libraries to replace or augment the custom `lib/schema-templates.ts`
2. Audit and validation tools to find and fix SEO issues at scale (268 pages)
3. Internal linking analysis tooling
4. Monitoring and tracking tools

The current custom schema-templates.ts uses plain TypeScript objects — no type-safety against Schema.org spec, no validation, no enforcement that required properties are present.

---

## Recommended Stack

### Schema & Structured Data

| Technology | Version | Purpose | Why Recommended | Confidence |
|------------|---------|---------|-----------------|------------|
| `schema-dts` | 1.1.5 | TypeScript types for Schema.org JSON-LD | Google-authored; zero runtime cost; catches schema errors at compile time; covers RoofingContractor, LocalBusiness, FAQPage, BreadcrumbList | HIGH — verified via `npm show` |
| `@adobe/structured-data-validator` | 1.6.0 | Runtime validation of extracted schema | Validates against Schema.org AND Google Rich Results rules; works in Node.js; useful for CI audit script across 268 pages | MEDIUM — verified version via npm |
| Native Next.js `generateMetadata()` | Built into Next.js 15 | Page-level meta generation | Already in use; no library needed here; continue pattern | HIGH |

**schema-dts usage pattern:**
```typescript
import { LocalBusiness, RoofingContractor, WithContext } from 'schema-dts';

const schema: WithContext<RoofingContractor> = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  // TypeScript will error if required properties missing
  // or if property names don't match Schema.org spec
  name: "5 Star Commercial Roofing",
  address: { "@type": "PostalAddress", ... },
  telephone: "(806) 622-6041",
};
```

**Why RoofingContractor over LocalBusiness:** Google recommends the most specific subtype available. `RoofingContractor` is a valid Schema.org type (subtype of `HomeAndConstructionBusiness → LocalBusiness`). Using it on the homepage and service pages is more semantically precise. Location-specific pages can use `LocalBusiness` with `additionalType: "RoofingContractor"`. Source: Google Search Central docs (December 2025 update), schema.org/RoofingContractor.

### Sitemap Generation

| Technology | Version | Purpose | Why Recommended | Confidence |
|------------|---------|---------|-----------------|------------|
| `next-sitemap` | 4.2.3 | Post-build sitemap.xml + robots.txt generation | Works as a post-build script (`postbuild` hook); handles static exports correctly; supports per-URL priorities and changefreq; splits large sitemaps (>7000 URLs) automatically | HIGH — verified version; confirmed works with `output: "export"` |

**Why not Next.js built-in sitemap.xml:** The built-in `app/sitemap.ts` approach generates dynamically in Next.js 15 — it does NOT work cleanly with `output: "export"` for large static sites. `next-sitemap` runs post-build as a Node.js script and directly reads the `out/` directory. The site already has a custom `generate-sitemap.js`; `next-sitemap` replaces it with a maintained, configurable solution.

**Configuration pattern:**
```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://5starroofingpros.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    // Hub pages get higher priority
    if (path === '/') return { ...config, priority: 1.0 };
    if (path.startsWith('/services/') || path.startsWith('/commercial-roofing/')) {
      return { ...config, priority: 0.9 };
    }
    return { loc: path, changefreq: 'monthly', priority: 0.7 };
  },
};
```

### Link Auditing

| Technology | Version | Purpose | Why Recommended | Confidence |
|------------|---------|---------|-----------------|------------|
| `linkinator` | 7.5.3 | Broken link detection across all 268 pages | Crawls local `out/` directory; serves it as static server internally; fast; CLI + Node.js API; finds `<a>`, `<img>`, and other link types | HIGH — actively maintained (updated ~1 month ago), verified version |

**Why linkinator over alternatives:**
- `broken-link-checker` (npm): Older, less maintained
- `hyperlink` (Rust CLI): Faster but requires Rust, no Node.js API, can't integrate into custom scripts
- `linkinator` has a Node.js API so a custom audit script can filter results by path pattern, report only internal links, and output a fixable CSV

**Usage for this project:**
```bash
# After build, check all internal links in the static export
npx linkinator ./out --recurse --skip "tel:|mailto:"
```

### Performance & SEO Scoring

| Technology | Version | Purpose | Why Recommended | Confidence |
|------------|---------|---------|-----------------|------------|
| `@lhci/cli` | 0.15.1 | Lighthouse CI — automated SEO + performance scoring | Already installed; run against `out/` via `lhci collect --staticDistDir=./out`; catches title tag issues, meta description length, missing alt text, schema parsing errors | HIGH — already in project |
| Google PageSpeed Insights API | (REST, no npm pkg) | Real-world mobile performance score | Free API; run via `curl` or `axios` in scripts; measures actual CrUX data, not just lab data; critical since mobile-first indexing is dominant | MEDIUM — well-documented, no npm wrapper needed |

### Structured Data Validation (External Tools)

These are not installed — they are web tools used manually or via API:

| Tool | Purpose | When to Use | Confidence |
|------|---------|-------------|------------|
| Google Rich Results Test (search.google.com/test/rich-results) | Validates schema against Google's rich result eligibility rules | After schema changes; for key pages (homepage, service hubs) | HIGH — official Google tool |
| Schema Markup Validator (validator.schema.org) | Validates schema against Schema.org spec | Catches spec-level errors the Google tool won't catch | HIGH — official schema.org tool |
| Google Search Console (manual) | Enhancements report; shows schema errors detected at crawl time | Weekly monitoring during optimization sprint | HIGH |

**There is no official Google Rich Results Test API.** Third-party wrappers (Apify, etc.) exist but are unreliable and paid. For CI validation, use `@adobe/structured-data-validator` on the built HTML files. For production validation, use the web tools manually on key pages.

### Monitoring & Tracking

| Technology | Purpose | Notes | Confidence |
|------------|---------|-------|------------|
| `googleapis` (already installed, v170.1.0) | Google Search Console API + Indexing API | Already in project for indexing submissions; extend to pull search analytics (impressions, clicks, position by page) for baseline and trend monitoring | HIGH |
| GA4 (already configured) | Click tracking, user behavior | Already implemented via GTM + PhoneClickTracker | HIGH |
| Google Search Console web UI | Weekly manual review of Performance report | Filter by page; identify zero-impression pages needing content depth or re-indexing | HIGH |

**DataForSEO API** (pay-as-you-go, ~$50 minimum): Worth considering for programmatic keyword rank tracking if you want automated weekly position reports without manual GSC exports. Not required for Phase 1; defer until baseline is established.

### Content Analysis (Internal Linking Audit)

No npm package does hub-spoke internal link analysis out of the box. The approach is a custom Node.js script using existing dependencies:

```
cheerio (already in site-builder) — parse built HTML files in out/
→ Extract all <a href> links from each page
→ Build adjacency graph: which pages link to which
→ Find orphan pages (no inbound internal links)
→ Find over-linked pages (too many outbound links diluting PageRank)
→ Output: CSV report of pages sorted by inbound link count
```

This is 50-100 lines of Node.js using `cheerio` (already installed in site-builder). No new dependency needed.

---

## Installation

```bash
# Schema type safety (dev-only, zero runtime cost)
npm install -D schema-dts

# Runtime schema validation (for CI audit script)
npm install @adobe/structured-data-validator

# Sitemap generation (replaces generate-sitemap.js)
npm install -D next-sitemap

# Broken link checking (already may be available; confirm)
npm install -D linkinator
```

Add to `package.json` scripts:
```json
{
  "scripts": {
    "postbuild": "next-sitemap",
    "audit:links": "linkinator ./out --recurse --skip 'tel:|mailto:' --format csv > link-audit.csv",
    "audit:schema": "node scripts/validate-schema.js"
  }
}
```

---

## Alternatives Considered

| Recommended | Alternative | Why Not |
|-------------|-------------|---------|
| `schema-dts` | Custom TypeScript interfaces | `schema-dts` is maintained by Google engineers, tracks schema.org releases, covers hundreds of types with proper union types; maintaining custom interfaces is a maintenance burden |
| `next-sitemap` | Existing `generate-sitemap.js` | Custom script has no priority/changefreq control, no robots.txt generation, no index sitemap splitting — replace it |
| `linkinator` | Screaming Frog | SF requires GUI + license (£200/yr); not scriptable in CI; linkinator is free, CLI/API, runs on the `out/` directory post-build |
| `@adobe/structured-data-validator` | Google Rich Results Test web UI | Web UI is not automatable; Adobe library runs in Node.js; can batch-validate all 268 pages in a script |
| Custom cheerio script | InLinks, Ahrefs internal links | External SaaS tools don't have access to your `out/` directory; custom script runs locally, costs nothing, integrates with build |

---

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Microdata or RDFa for schema | JSON-LD is Google's recommended format; JSON-LD is simpler to maintain in React components (script tags in page head, not interleaved with HTML) | JSON-LD via script tags in page `<head>` |
| `next-seo` package | Designed for Pages Router pattern; App Router has native `generateMetadata()` which covers all the same needs; `next-seo` adds dependency for no gain | Next.js built-in `generateMetadata()` |
| `react-helmet` | Pages Router / CRA pattern; App Router handles metadata natively | `generateMetadata()` in Next.js App Router |
| Schema.org Microdata | Interleaved with HTML; harder to maintain; Google supports it but JSON-LD is simpler for dynamic pages | JSON-LD `<script type="application/ld+json">` |
| Screaming Frog for CI | GUI tool, not scriptable, paid license | `linkinator` + custom cheerio script |
| `react-schemaorg` package | Thin wrapper that adds runtime overhead; `schema-dts` types are dev-only with zero runtime cost | `schema-dts` (dev) + plain object literals at runtime |

---

## Stack Patterns by Scenario

**If fixing schema on a single page:**
- Edit `lib/schema-templates.ts` directly
- Use `schema-dts` types for type-checking during edit
- Validate result at search.google.com/test/rich-results

**If auditing all 268 pages for schema errors:**
- Write a Node.js script using `@adobe/structured-data-validator`
- Parse each `out/**/*.html` file
- Extract JSON-LD script tags with `cheerio`
- Validate each extracted object
- Output errors by page URL to a CSV

**If checking internal link distribution:**
- Custom cheerio script (see above)
- No new dependencies
- Run against `out/` after build

**If tracking SEO progress over time:**
- Use existing `googleapis` package to pull GSC data weekly
- Compare impressions/clicks/position by page
- Export to CSV for trend analysis

---

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| `schema-dts@1.1.5` | TypeScript 5.7.x | Zero runtime dependencies; types-only; no compatibility concerns |
| `next-sitemap@4.2.3` | Next.js 15.x, Node 18+ | Run as `postbuild` script; does NOT use Next.js APIs directly; reads `out/` directory |
| `linkinator@7.5.3` | Node.js 18+ | CLI and Node.js API available; no Next.js coupling |
| `@adobe/structured-data-validator@1.6.0` | Node.js 18+ | Uses `@marbec/web-auto-extractor` peer dependency; test install before committing |

---

## Key Schema Types for This Site

Based on Google Search Central documentation (verified December 2025) and roofing SEO best practices research:

| Page Type | Primary Schema Type | Secondary Types |
|-----------|---------------------|-----------------|
| Homepage | `RoofingContractor` + `WebSite` | `AggregateRating`, `sameAs` links |
| Service hub pages | `Service` | `FAQPage`, `BreadcrumbList` |
| Location-service pages | `LocalBusiness` with `additionalType: "RoofingContractor"` | `Service`, `FAQPage`, `BreadcrumbList`, `GeoCoordinates` |
| About/Contact | `Organization` | `LocalBusiness` |

**Current gap:** The existing `schema-templates.ts` uses `"@type": "LocalBusiness"` everywhere, including the homepage. The homepage should use `RoofingContractor` (more specific subtype) for stronger entity signal.

**Current gap:** `WebSite` schema with `SearchAction` is missing from the homepage. This establishes the site as a known entity in Google's Knowledge Graph.

**Current gap:** `sameAs` linking the business entity to its Google Business Profile URL, Yelp, BBB, and other authoritative directories is absent. This strengthens entity consistency, which is critical for AI Overviews and local pack visibility.

---

## Sources

- `npm show schema-dts version` — version 1.1.5, published 2025-03-01 (HIGH confidence)
- `npm show linkinator version` — version 7.5.3 (HIGH confidence)
- `npm show next-sitemap version` — version 4.2.3 (HIGH confidence)
- `npm show @adobe/structured-data-validator version` — version 1.6.0 (HIGH confidence)
- [Google Search Central: LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — required/recommended properties, December 2025 update (HIGH confidence)
- [schema.org/RoofingContractor](https://schema.org/RoofingContractor) — type hierarchy confirmation (HIGH confidence)
- [Frontend Horizon: 2025 SEO Playbook for Roofers](https://www.frontendhorizon.com/blog/2025-seo-for-roofers) — hub-spoke internal linking, schema types for roofing (MEDIUM confidence)
- [Search Engine Land: Local SEO Sprints 2026](https://searchengineland.com/local-seo-sprints-a-90-day-plan-for-service-businesses-in-2026-469059) — GA4, GSC, BrightLocal as monitoring tools (MEDIUM confidence)
- [Search Engine Journal: Schema for Local SEO](https://www.searchenginejournal.com/how-to-use-schema-for-local-seo-a-complete-guide/294973/) — SearchAction, sameAs, contentLocation properties (MEDIUM confidence)
- [GitHub: google/schema-dts](https://github.com/google/schema-dts) — zero-dependency policy, TypeScript discriminated union types (HIGH confidence)
- [GitHub: JustinBeckwith/linkinator](https://github.com/JustinBeckwith/linkinator) — static dir serving, CSV output (HIGH confidence)
- WebSearch: "Google AI Overviews structured data requirements 2025" — no special schema required beyond standard SEO best practices (MEDIUM confidence, multiple sources agree)

---

*Stack research for: Local service business SEO optimization, Next.js 15 static site*
*Researched: 2026-02-20*
