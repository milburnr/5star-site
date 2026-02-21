# Phase 6: Service Hub Pages - Research

**Researched:** 2026-02-20
**Domain:** Next.js static page creation, hub-and-spoke SEO architecture, FAQ schema
**Confidence:** HIGH

## Summary

Phase 6 creates 9 service hub pages that currently do not exist on the site. These hubs complete the hub-and-spoke SEO topology by acting as authority-collecting parent pages for the existing city-specific spoke pages. Each hub must have 800+ words of unique content, link to all city variants (spokes), include FAQ sections with FAQPage schema, and avoid cannibalizing spoke page keywords.

The implementation is straightforward: create 9 new `page.tsx` files in the Next.js App Router under `app/{service-slug}/page.tsx`. The site already has excellent reference patterns in `/commercial-roofing/` and `/residential-roofing/` (existing hub pages for those services). Spoke pages already reference hub URLs in their breadcrumbs (e.g., hail-damage-repair-amarillo's breadcrumb points to `/hail-damage-repair/`), meaning these hub pages will immediately fix broken breadcrumb links.

**Primary recommendation:** Create each hub page following the established `/commercial-roofing/page.tsx` pattern (469 lines) -- hero image, substantive content sections with FadeIn animations, city variant link grid, FAQ accordion with FAQPage schema, and CTA section. Use content-voice.md patterns for answer-first H2s and outcome-focused language.

## Standard Stack

### Core

No new libraries needed. All hub pages use existing components and patterns.

| Component | Location | Purpose | Already in use? |
|-----------|----------|---------|-----------------|
| `FadeIn` | `@/components/FadeIn` | Section animations | YES - all existing pages |
| `Breadcrumb` | `@/components/Breadcrumb` | Navigation breadcrumbs + BreadcrumbList schema | YES - all pages |
| `Accordion` | `@/components/ui/accordion` | FAQ sections | YES - spoke pages |
| `InternalLinks` | `@/components/InternalLinks` | Cross-linking (spokes use this) | YES - spoke pages |
| `HighLevelForm` | `@/components/HighLevelForm` | Lead capture form | YES - spoke pages |
| `StickyContactBar` | `@/components/StickyContactBar` | Persistent call CTA | YES - spoke pages |
| `FloatingCTA` | `@/components/FloatingCTA` | Scroll-triggered CTA button | YES - some pages |

### Supporting

| Resource | Location | Purpose |
|----------|----------|---------|
| `schema-templates.ts` | `@/lib/schema-templates.ts` | Schema generators (LocalBusiness, FAQ, ServiceArea) |
| `constants.ts` | `@/lib/constants.ts` | Business info (phone, address, hours) |
| `globals.css` | `@/app/globals.css` | Component classes (btn-primary, card, section, etc.) |
| `tailwind.config.ts` | Root | Brand colors (brand-gold, brand-brown, etc.) |

### No New Dependencies

Zero `npm install` needed. Everything required already exists.

## Architecture Patterns

### Hub Page File Structure

Each hub page is a single file:
```
app/
├── hail-damage-repair/
│   └── page.tsx          # NEW - Hub page
├── hail-damage-repair-amarillo/
│   └── page.tsx          # Existing spoke
├── hail-damage-repair-midland/
│   └── page.tsx          # Existing spoke
├── roof-repair/
│   └── page.tsx          # NEW - Hub page
...
```

### Pattern: Hub Page Structure (from commercial-roofing/page.tsx reference)

**What:** Each hub page follows a consistent content architecture.
**Based on:** Existing `/commercial-roofing/page.tsx` (469 lines) and `/residential-roofing/page.tsx` (472 lines).

```typescript
// app/{service-slug}/page.tsx
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/{service-slug}/' },
  title: '{Service Name} West Texas | 5 Star Roofing',  // <60 chars
  description: "{Outcome-focused description}",          // <160 chars
};

export default function Page() {
  // Service schema (NOT LocalBusiness - that's for city pages)
  const serviceSchema = { /* ... */ };

  // FAQPage schema
  const faqSchema = { /* ... */ };

  return (
    <div className="container-custom py-12">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "{Service Name}", url: "/{service-slug}/" }
      ]} />

      {/* Schema scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1>...</h1>

      {/* Hero image from R2 */}
      {/* Substantive content sections (800+ words) */}
      {/* City variant link grid (all spokes) */}
      {/* FAQ Accordion section */}
      {/* CTA section */}
    </div>
  );
}
```

### Pattern: City Variant Link Grid (Hub -> Spokes)

**What:** Each hub page must link to ALL city variants of its service.
**Requirement:** HUB-10 -- each hub links down to all city variants.

```tsx
<section className="mb-16">
  <h2 className="text-2xl font-bold mb-6">
    {Service Name} Across West Texas
  </h2>
  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
    {cities.map(city => (
      <a
        key={city.slug}
        href={`/${serviceSlug}-${city.slug}/`}
        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
      >
        <span className="font-semibold text-brand-brown">
          {serviceName} in {city.name}
        </span>
      </a>
    ))}
  </div>
</section>
```

### Pattern: FAQ Section with FAQPage Schema

**What:** Each hub page includes 6-7 service-type FAQ questions with corresponding FAQPage schema.
**Based on:** Spoke pages like hail-damage-repair-amarillo (which already has FAQPage schema + Accordion).

Hub FAQs must be:
- Service-type questions (NOT city-specific -- that's for spokes)
- Answer-first format per content-voice.md
- Unique across all hub pages (no duplicate questions)

```tsx
// FAQPage schema (separate JSON-LD block)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does {service} cost in West Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    },
    // 5-6 more questions
  ]
};

// Accordion UI (matching spoke page pattern)
<section>
  <h2 className="text-2xl font-bold mt-12 mb-4">
    Frequently Asked Questions About {Service Name}
  </h2>
  <Accordion type="single" collapsible>
    <AccordionItem value="faq-1">
      <AccordionTrigger>Question here?</AccordionTrigger>
      <AccordionContent>Answer here.</AccordionContent>
    </AccordionItem>
  </Accordion>
</section>
```

### Pattern: Service Schema (for Hub Pages)

**What:** Hub pages use `Service` type schema (NOT `LocalBusiness` -- that's for city-specific spokes).
**Based on:** Existing `/commercial-roofing/page.tsx` schema pattern.

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{Service Type Name}",
  "provider": {
    "@type": ["LocalBusiness", "RoofingContractor"],
    "name": "5 Star Roofing",  // MUST be exactly this
    "telephone": "(806) 622-6041",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving West Texas",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
  },
  "areaServed": [
    // All served cities
    { "@type": "City", "name": "Amarillo", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
    { "@type": "City", "name": "Midland", "address": { "@type": "PostalAddress", "addressRegion": "TX" } },
    // ...etc for all cities
  ],
  "description": "...",
  "hasOfferCatalog": { /* sub-services */ }
};
```

### Anti-Patterns to Avoid

- **Thin link directories:** Hub pages with just a grid of city links and no substantive content. Requirement HUB-11 demands 800+ words of UNIQUE content.
- **Keyword cannibalization:** Hub page title/H1 must NOT match spoke page keywords. Hub targets broad "hail damage repair" while spokes target "hail damage repair amarillo". The keyword-map.md must be updated.
- **Duplicated FAQ content:** Each hub's FAQ questions must be unique -- not copy-pasted from any spoke page's FAQs.
- **Entity name variants:** MUST use "5 Star Roofing" exactly in all schema and text. NOT "5 Star Commercial Roofing" or "Five Star Roofing".
- **GitHub-hosted images:** All images must come from R2 (`pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev`).
- **CSS/layout changes:** The roadmap hard rule says "No visual design changes (CSS, layout, animations frozen)". Use ONLY existing CSS classes.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| FAQ schema | Custom schema builder | Inline JSON-LD per existing pattern | Spoke pages already do this; consistency matters |
| Breadcrumbs | Custom breadcrumb logic | `<Breadcrumb>` component | Already generates BreadcrumbList JSON-LD |
| City link grids | Custom component | Inline JSX with existing CSS classes | Simple enough; no component extraction needed |
| Service schemas | New schema generator | Inline JSON-LD per commercial-roofing pattern | Existing pattern works; schema-templates.ts is for spokes |
| Form embeds | Custom forms | `<HighLevelForm>` component | Already centralized |

**Key insight:** Everything needed already exists. No new components, no new CSS classes, no new libraries. This phase is pure content creation using established patterns.

## Common Pitfalls

### Pitfall 1: Keyword Cannibalization Between Hub and Spokes
**What goes wrong:** Hub page targets "hail damage repair amarillo" which already belongs to the spoke page.
**Why it happens:** Natural tendency to include the primary city in hub page titles.
**How to avoid:** Hub pages target the BROAD keyword without any city name. Example: Hub = "Hail Damage Roof Repair West Texas" vs. Spoke = "Hail Damage Roof Repair Amarillo TX". Update keyword-map.md with every new hub page keyword.
**Warning signs:** Hub title/H1 contains a specific city name that matches a spoke page keyword.

### Pitfall 2: Breadcrumb Inconsistency Across Spokes
**What goes wrong:** Some spoke pages point breadcrumbs to hub URLs, others point to the Amarillo spoke page instead.
**Why it happens:** Pre-existing inconsistency in the codebase (confirmed: hail-damage-repair-midland breadcrumb points to `/hail-damage-repair-amarillo/` instead of `/hail-damage-repair/`).
**How to avoid:** After creating hub pages, verify (and note for Phase 7) that all spokes should be updated to point breadcrumbs to the correct hub URL. However, Phase 6 focuses on creating hubs; Phase 7 handles internal linking fixes.
**Warning signs:** `grep` for breadcrumb URLs across spoke pages shows mixed patterns.

### Pitfall 3: Hail-Damage-Repair Has 16 Cities, Others Have 14
**What goes wrong:** Hub page city grid is incomplete because the city list was hard-coded from one service's spokes.
**Why it happens:** hail-damage-repair has 16 spoke pages (includes hereford and plainview), while all other services have 14 spokes.
**How to avoid:** Dynamically determine each service's city list from the actual app/ directory contents. Each hub links to exactly the spoke pages that exist for that service.
**City lists:**
  - hail-damage-repair: 16 cities (amarillo, andrews, big-spring, borger, canyon, dumas, hereford, levelland, lubbock, midland, monahans, odessa, pampa, perryton, plainview, snyder)
  - All other 8 services: 14 cities (same minus hereford and plainview)

### Pitfall 4: Build Failures from Missing Imports or Typos
**What goes wrong:** New page.tsx fails `npm run build` due to import errors.
**Why it happens:** Copy-paste errors from reference pages, forgotten imports, or wrong component names.
**How to avoid:** Each plan task must include `npm run build` verification. Start from the commercial-roofing/page.tsx as a working template and modify.
**Warning signs:** TypeScript compilation errors during build.

### Pitfall 5: FAQ Content Duplication Across Hub Pages
**What goes wrong:** Multiple hub pages have the same FAQ questions (e.g., "How long does a roof last?" appearing on both roof-repair and roof-replacement hubs).
**Why it happens:** Generic roofing FAQ questions feel natural on multiple service types.
**How to avoid:** Plan FAQ questions PER hub page in advance. Each hub's FAQs should be service-specific:
  - hail-damage-repair: hail frequency, insurance claims, Class 4 shingles
  - roof-repair: repair vs replace, leak detection, emergency repairs
  - roof-replacement: cost, timeline, material options
  - etc.

### Pitfall 6: Schema Entity Name Mismatch
**What goes wrong:** Schema says "5 Star Commercial Roofing" instead of "5 Star Roofing".
**Why it happens:** `constants.ts` BUSINESS_INFO.name is "5 Star Commercial Roofing" (legal name), but entity-guidelines.md specifies "5 Star Roofing" for all public-facing schema.
**How to avoid:** Hard-code "5 Star Roofing" in schema, NOT using BUSINESS_INFO.name. The entity-guidelines.md overrides constants.ts for schema/display name.
**Warning signs:** `grep "5 Star Commercial" out/{hub-page}/index.html` returns matches.

## Code Examples

### Complete Hub Page Reference (based on commercial-roofing/page.tsx)

The existing `/commercial-roofing/page.tsx` (469 lines) is the best reference for hub page structure. Key sections:

1. **Metadata export** (lines 6-10): canonical URL, title <60 chars, description <160 chars
2. **Service schema** (lines 13-95): Service type + provider + areaServed + offerCatalog
3. **Breadcrumb** (lines 98-107): Home > Service Name (2-level, NOT 3-level like spokes)
4. **Hero image** (lines 119-123): R2-hosted image with descriptive alt text
5. **Content sections** (lines 125-256): FadeIn-wrapped cards with images, descriptions, bullet lists
6. **FAQ section** (lines 417-449): styled div cards (NOTE: commercial-roofing uses div-based FAQs, not Accordion -- spoke pages use Accordion)
7. **CTA section** (lines 452-466): bg-brand-gold banner with phone link + contact link

### Breadcrumb Pattern for Hub Pages

Hub pages have a 2-level breadcrumb (NOT 3-level like spokes):

```tsx
<Breadcrumb items={[
  { name: "Home", url: "/" },
  { name: "Hail Damage Repair", url: "/hail-damage-repair/" }
]} />
```

Spoke pages have 3-level:
```tsx
<Breadcrumb items={[
  { name: "Home", url: "/" },
  { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
  { name: "Amarillo", url: "/hail-damage-repair-amarillo/" }
]} />
```

### R2 Image Base URL

All images must use this base:
```
https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/
```

Image subdirectories observed in existing pages:
- `commercial/` - commercial roofing photos
- `completed/` - completed project photos
- `hail-damage/` - hail damage photos
- `shingle/` - shingle roofing photos

Some pages also use `/images/` local paths (e.g., `/images/TPO1-1280w.jpg`).

## Inventory of 9 Hub Pages to Create

| # | Req | Hub URL | Service Name | Spoke Count | Spoke Cities |
|---|-----|---------|-------------|-------------|--------------|
| 1 | HUB-01 | `/hail-damage-repair/` | Hail Damage Repair | 16 | amarillo, andrews, big-spring, borger, canyon, dumas, hereford, levelland, lubbock, midland, monahans, odessa, pampa, perryton, plainview, snyder |
| 2 | HUB-02 | `/roof-repair/` | Roof Repair | 14 | amarillo, andrews, big-spring, borger, canyon, dumas, levelland, lubbock, midland, monahans, odessa, pampa, perryton, snyder |
| 3 | HUB-03 | `/roof-replacement/` | Roof Replacement | 14 | (same 14) |
| 4 | HUB-04 | `/storm-damage-repair/` | Storm Damage Repair | 14 | (same 14) |
| 5 | HUB-05 | `/metal-roofing/` | Metal Roofing | 14 | (same 14) |
| 6 | HUB-06 | `/wind-damage-repair/` | Wind Damage Repair | 14 | (same 14) |
| 7 | HUB-07 | `/tpo-roofing/` | TPO Roofing | 14 | (same 14) |
| 8 | HUB-08 | `/roof-inspections/` | Roof Inspections | 14 | (same 14) |
| 9 | HUB-09 | `/asphalt-shingle-roofing/` | Asphalt Shingle Roofing | 14 | (same 14) |

The 14 standard cities: amarillo, andrews, big-spring, borger, canyon, dumas, levelland, lubbock, midland, monahans, odessa, pampa, perryton, snyder.
hail-damage-repair additionally has: hereford, plainview (16 total).

## Hub Page Keyword Strategy (Cannibalization Prevention)

Hub pages must target BROAD service keywords without city names. Proposed primary keywords for keyword-map.md:

| Hub URL | Proposed Primary Keyword | Proposed Title | Chars |
|---------|--------------------------|----------------|-------|
| `/hail-damage-repair/` | hail damage roof repair west texas | Hail Damage Roof Repair West Texas \| 5 Star Roofing | 52 |
| `/roof-repair/` | roof repair west texas | Roof Repair Services West Texas \| 5 Star Roofing | 49 |
| `/roof-replacement/` | roof replacement west texas | Roof Replacement West Texas \| 5 Star Roofing | 47 |
| `/storm-damage-repair/` | storm damage roof repair texas | Storm Damage Roof Repair Texas \| 5 Star Roofing | 49 |
| `/metal-roofing/` | metal roofing west texas | Metal Roofing West Texas \| 5 Star Roofing | 43 |
| `/wind-damage-repair/` | wind damage roof repair texas | Wind Damage Roof Repair Texas \| 5 Star Roofing | 47 |
| `/tpo-roofing/` | tpo roofing west texas | TPO Roofing West Texas \| 5 Star Roofing | 41 |
| `/roof-inspections/` | roof inspections west texas | Roof Inspections West Texas \| 5 Star Roofing | 45 |
| `/asphalt-shingle-roofing/` | asphalt shingle roofing texas | Asphalt Shingle Roofing Texas \| 5 Star Roofing | 49 |

All titles are under 60 characters. No hub keyword overlaps with any existing spoke keyword in keyword-map.md.

## Existing Breadcrumb References (Spoke -> Hub)

Spoke pages ALREADY reference hub URLs in their breadcrumbs. This is confirmed for all 9 services' Amarillo spokes:
- `hail-damage-repair-amarillo` -> breadcrumb points to `/hail-damage-repair/`
- `roof-repair-amarillo` -> breadcrumb points to `/roof-repair/`
- `roof-replacement-amarillo` -> breadcrumb points to `/roof-replacement/`
- `metal-roofing-amarillo` -> breadcrumb points to `/metal-roofing/`
- `tpo-roofing-amarillo` -> breadcrumb points to `/tpo-roofing/`
- `roof-inspections-amarillo` -> breadcrumb points to `/roof-inspections/`
- `asphalt-shingle-roofing-amarillo` -> breadcrumb points to `/asphalt-shingle-roofing/`

**Exception found:** `hail-damage-repair-midland` breadcrumb points to `/hail-damage-repair-amarillo/` instead of `/hail-damage-repair/`. This inconsistency should be noted for Phase 7 (Internal Linking) or corrected as a bonus in Phase 6 Plan 04.

Creating hub pages will immediately fix the broken breadcrumb links for all spokes that already reference them.

## Plan Structure Recommendation

Based on the roadmap's plan outline:

| Plan | Scope | Pages | Est. Effort |
|------|-------|-------|-------------|
| 06-01 | Create hail-damage-repair and roof-repair hub pages | 2 | Medium (highest priority, most detail) |
| 06-02 | Create roof-replacement, storm-damage-repair, metal-roofing hub pages | 3 | Medium |
| 06-03 | Create wind-damage-repair, tpo-roofing, roof-inspections, asphalt-shingle-roofing hub pages | 4 | Medium |
| 06-04 | Verification: FAQ schema in HTML output, keyword-map update, build check, all 9 URLs return 200 | 0 (validation) | Light |

**Alternative structure consideration:** Plans 01-03 each include spoke links + FAQ + schema inline (not deferred to 04). This means each plan is self-contained and can be verified independently. Plan 04 then becomes a cross-cutting verification/cleanup pass rather than a content creation pass.

**Recommendation:** Each plan should create COMPLETE hub pages (content + spoke links + FAQ + schema) so they can be individually verified. Plan 04 should be verification + keyword-map update + any breadcrumb fixes.

## Open Questions

1. **FAQ format: Accordion vs div-based?**
   - What we know: Spoke pages use `<Accordion>` from Radix UI. Existing hub pages (`/commercial-roofing/`) use plain `<div>` cards for FAQs.
   - What's unclear: Should new hub pages use Accordion (matching spokes) or div cards (matching existing hubs)?
   - Recommendation: Use `<Accordion>` component to match spoke page pattern and roadmap plan 06-04 which says "Add...FAQ sections." Spoke pages demonstrate the production-ready pattern.

2. **Should plan 06-04 fix spoke breadcrumb inconsistencies?**
   - What we know: Some spoke pages (like hail-damage-repair-midland) point breadcrumbs to the Amarillo spoke instead of the hub URL.
   - What's unclear: Is fixing breadcrumbs in scope for Phase 6 or deferred to Phase 7 (Internal Linking)?
   - Recommendation: Note the inconsistency for Phase 7. Phase 6 scope is hub page CREATION, not spoke page modification. However, Plan 06-04 could include an audit that flags the inconsistencies.

3. **Images for hub pages -- which R2 images to use?**
   - What we know: R2 has subdirectories (commercial/, completed/, hail-damage/, shingle/) with many images. Some local `/images/` paths also exist.
   - What's unclear: No inventory of available R2 images per service type.
   - Recommendation: Reuse images already referenced in spoke pages or existing hub pages. Each hub should have at least 1 hero image. Exact image selection is a content decision for each plan.

## Sources

### Primary (HIGH confidence)
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/app/commercial-roofing/page.tsx` -- Reference hub page pattern (469 lines)
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/app/services/page.tsx` -- Reference master hub page (632 lines)
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/app/hail-damage-repair-amarillo/page.tsx` -- Reference spoke page with FAQ schema (452 lines)
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/components/InternalLinks.tsx` -- Service and city data for all 14 cities and 12 services
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/.planning/brand/keyword-map.md` -- All existing keyword assignments
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/.planning/brand/content-voice.md` -- Content quality patterns
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/.planning/brand/entity-guidelines.md` -- Canonical entity name rules
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/.planning/ROADMAP.md` -- Phase 6 requirements and success criteria
- `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/.planning/REQUIREMENTS.md` -- HUB-01 through HUB-12 requirement definitions

### Verified by Codebase Inspection (HIGH confidence)
- All 9 hub page directories confirmed NOT to exist yet (ls check)
- All spoke page directories confirmed to exist with city counts
- Breadcrumb patterns confirmed across all service types' Amarillo spokes
- Breadcrumb inconsistency in hail-damage-repair-midland confirmed

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- No new libraries; all components already exist and are in production use
- Architecture: HIGH -- Existing hub pages (commercial-roofing, residential-roofing) provide exact template to follow
- Pitfalls: HIGH -- Identified from direct codebase inspection (breadcrumb inconsistency, city count mismatch, entity name trap)
- Keyword strategy: HIGH -- Verified against complete keyword-map.md; no overlaps with proposed hub keywords

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable codebase, no fast-moving dependencies)
