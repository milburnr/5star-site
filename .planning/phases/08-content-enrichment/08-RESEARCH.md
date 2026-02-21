# Phase 8: Content Enrichment - Research

**Researched:** 2026-02-20
**Domain:** SEO content enrichment for a 211-page Next.js static roofing site
**Confidence:** HIGH

## Summary

Phase 8 enriches the content across all service and city pages to meet differentiation, depth, and anti-cannibalization requirements. The site has 211 pages built as React `page.tsx` files in the Next.js App Router with static export. This phase is pure content editing -- no new libraries, no layout changes, no CSS modifications.

The codebase audit reveals four distinct content tiers that need different treatment:

1. **Truly thin city pages** (5 pages, ~259 lines each): Andrews, Big Spring, Levelland, Monahans, and Snyder city hub pages follow a minimal template with ~800 raw words (including JSX code), no FAQ section rendered on-page, and only schema-level FAQs. These lack city-specific content elements and need the most work.

2. **Secondary city hub pages** (5 target cities: Canyon, Borger, Pampa, Dumas, Hereford): These are already relatively rich (376-538 lines, 1400-2050 raw words). Borger, Canyon, Pampa, and Dumas already have strong city-specific elements (neighborhoods, local employers, weather data). Hereford is the thinnest at 376 lines. These may already meet the 800-word requirement; the main gap is standardizing FAQ counts to 6-7 and ensuring all 3+ city-specific elements are present.

3. **Service spoke pages without FAQs** (43 pages): These pages lack any FAQ section. They need 6-7 FAQ items added with corresponding FAQPage schema.

4. **Service pages with non-question H2s** (most service spokes): Current H2s use statement-style headings ("Common Roof Repairs in Amarillo", "Seasonal Roofing Considerations") instead of answer-first question-style H2s ("How Long Does Roof Repair Take in Amarillo?", "What Causes Roof Damage in Amarillo's Climate?").

The hail damage content cluster is the site's strongest -- 17 pages (1 hub + 16 spokes) with differentiated content per city. The hub page at `/hail-damage-repair/` targets "hail damage roof repair west texas" while spokes target city-specific terms. No cannibalization detected in the keyword map. The cluster needs strengthening with insurance claim process details, storm type coverage, and damage assessment guidance per CONT-08.

**Primary recommendation:** Work in four plan batches matching the four sub-plans: (1) enrich thin secondary city pages, (2) standardize FAQ sections across all pages missing them, (3) restructure H2s to answer-first format, (4) strengthen hail damage cluster and verify no cannibalization.

## Standard Stack

### Core

No new libraries needed. This phase is entirely content editing of existing `page.tsx` files.

| Component | Location | Purpose | Status |
|-----------|----------|---------|--------|
| `Accordion` | `@/components/ui/accordion` | FAQ sections | Already in use on 168 pages |
| `AccordionItem/Trigger/Content` | `@/components/ui/accordion` | FAQ question/answer pairs | Already in use |
| `FadeIn` | `@/components/FadeIn` | Section animations | Already on all pages |
| `Breadcrumb` | `@/components/Breadcrumb` | Navigation + schema | Already on all pages |
| `StickyContactBar` | `@/components/StickyContactBar` | Persistent CTA | Already on all pages |
| `HighLevelForm` | `@/components/HighLevelForm` | Lead capture | On most pages |
| `InternalLinks` | `@/components/InternalLinks` | Cross-page linking | Phase 7 handles rendering |

### Supporting

| Resource | Location | Purpose |
|----------|----------|---------|
| `content-voice.md` | `.planning/brand/content-voice.md` | FAQ templates, tone guide, anti-patterns |
| `keyword-map.md` | `.planning/brand/keyword-map.md` | Primary keyword per page, cannibalization check |
| `entity-guidelines.md` | `.planning/brand/entity-guidelines.md` | Canonical name "5 Star Roofing" |

### No New Dependencies

Zero `npm install` needed. Everything required already exists.

## Architecture Patterns

### Current Page Structure

All pages follow a consistent React component pattern:
```
app/{service}-{city}/page.tsx
```

Each file contains:
1. Imports (FadeIn, Breadcrumb, Accordion, Metadata, etc.)
2. `export const metadata: Metadata = { ... }` -- title, description, canonical
3. Schema JSON-LD (LocalBusiness, Service, FAQ, Breadcrumb)
4. JSX component with: hero, content sections, FAQ section, CTA section

### Pattern 1: FAQ Section (Accordion-based)

**What:** Standard FAQ section using the Accordion component from `@/components/ui/accordion`
**When to use:** Every service and city page (CONT-04 requires 6-7 items per page)
**Example (from hail-damage-repair-hereford/page.tsx):**
```tsx
<section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-lg">
  <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
    Hereford Hail Damage FAQs
  </h2>
  <Accordion type="single" collapsible className="max-w-4xl mx-auto">
    <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
      <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
        How does Hereford's cattle industry affect roof damage claims?
      </AccordionTrigger>
      <AccordionContent className="text-gray-700 leading-relaxed">
        Answer text here...
      </AccordionContent>
    </AccordionItem>
    {/* 5-6 more AccordionItems */}
  </Accordion>
</section>
```

**Paired FAQPage schema (in same page):**
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here."
      }
    }
    // ... more questions
  ]
}) }} />
```

### Pattern 2: Answer-First H2 Structure (CONT-05)

**What:** H2 headings framed as questions homeowners would search for
**When to use:** All service pages (hub and spoke)
**Current anti-pattern:**
```tsx
<h2>Common Roof Repairs in Amarillo</h2>
<h2>Why Amarillo Roofs Need Specialized Care</h2>
<h2>Seasonal Roofing Considerations in Amarillo</h2>
```
**Target pattern:**
```tsx
<h2>What Are the Most Common Roof Repairs in Amarillo?</h2>
<h2>Why Does Amarillo's Climate Damage Roofs Faster?</h2>
<h2>When Is the Best Season for Roof Work in Amarillo?</h2>
```

### Pattern 3: City-Specific Content Elements

**What:** Content that demonstrates genuine local knowledge (not just city-name swapping)
**When to use:** Every city hub page (CONT-03 requires 3+ per page)
**Valid elements (from content-voice.md):**
- Local weather data (hail frequency, wind speeds, temperature extremes)
- Neighborhood or area names within the city
- City-specific building codes, HOA requirements, or permit info
- Local landmarks or geographic references
- City-specific FAQ questions
- Local employer references (Borger: Phillips 66; Hereford: cattle feedlots)
- County name and geographic positioning

### Pattern 4: Rich Content Elements (CONT-07)

**What:** Comparison tables, material specifications, process step boxes
**When to use:** Service pages where material or method comparisons add value
**Example structures already in codebase:**
- Numbered process steps (Borger city page: 4-step roofing process)
- Grid cards with specifications (Hereford: agricultural roofing challenges)
- Bulleted specification lists (Borger: chemical-resistant membrane specs)
**New elements to add:**
- Material comparison tables (asphalt vs metal vs TPO)
- Cost range grids per service
- Damage severity assessment guides

### Anti-Patterns to Avoid

- **City-name swapping:** Never create content by replacing one city name with another. Each page must read as written by someone who knows the city.
- **Duplicate FAQ questions:** No two pages should have identical FAQ questions. Even similar questions must be localized ("How does Canyon's wind affect roofs?" vs "How does Borger's industrial emissions affect roofs?").
- **Generic claims:** No "quality service, affordable prices" -- use specific material names, weather data, and localized details.
- **Identical H2s across pages:** Each page's H2 set must be unique when compared to sibling pages targeting the same service in different cities.
- **Adding visual/CSS changes:** This phase is content-only. No layout changes, no new CSS classes, no animation changes.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| FAQ sections | Custom div/h3 structures | Accordion component from `@/components/ui/accordion` | Already standardized across 168 pages; provides accessible expand/collapse |
| FAQ schema | Inline JSON construction | Match existing pattern (`FAQPage` schema as `<script type="application/ld+json">`) | Schema must match visible FAQ content exactly |
| Content word count validation | Manual counting | `wc -w` on built HTML after stripping tags | Raw TSX word counts include JSX/className noise |
| Cannibalization detection | Manual H1/title comparison | Compare keyword-map.md entries; verify no two pages share primary keyword | keyword-map.md already has 211 entries with zero conflicts |

**Key insight:** This phase has zero engineering complexity. The difficulty is editorial: writing genuinely differentiated content for 40+ pages without falling into templated patterns. Every FAQ question, every H2, and every city-specific paragraph must be contextually unique.

## Common Pitfalls

### Pitfall 1: Template Content Disguised as City-Specific

**What goes wrong:** Writer replaces "Amarillo" with "Canyon" in otherwise identical paragraphs. Google detects thin/duplicate content and devalues both pages.
**Why it happens:** Time pressure and 200+ pages creates temptation to template.
**How to avoid:** Each city page must reference at least 3 unique elements: (1) specific weather data for that city (e.g., Borger's industrial emissions, Hereford's agricultural exposure), (2) named neighborhoods or local landmarks, (3) city-specific economic/demographic facts. Use the content-voice.md checklist.
**Warning signs:** Multiple pages with identical sentence structures where only the city name differs.

### Pitfall 2: FAQ Questions That Duplicate Across Pages

**What goes wrong:** Same FAQ questions ("How much does roof repair cost?") on 14 city variants of the same service. Google may treat these as thin/duplicate content.
**Why it happens:** content-voice.md FAQ templates are starting points, not copy-paste targets.
**How to avoid:** Localize every FAQ: "How much does roof repair cost in Borger, TX?" with Borger-specific pricing factors (industrial proximity, travel distance from Amarillo). Never have two pages with >50% FAQ overlap.
**Warning signs:** FAQ sections that are word-for-word identical across city variants.

### Pitfall 3: H2 Changes That Break Keyword Targeting

**What goes wrong:** Restructuring H2s from statements to questions accidentally removes keywords that Google was indexing.
**Why it happens:** The answer-first format changes the wording, potentially losing key terms.
**How to avoid:** Ensure each new question-format H2 still contains the page's primary keyword from keyword-map.md. "Roof Repair Costs in Amarillo" becomes "How Much Does Roof Repair Cost in Amarillo?" -- the keyword is preserved.
**Warning signs:** New H2s that don't contain the page's primary keyword terms.

### Pitfall 4: Accordion Import Missing on Pages Without FAQs

**What goes wrong:** Adding Accordion-based FAQ sections to pages that don't currently import the Accordion component causes build errors.
**Why it happens:** 43 pages currently lack FAQ sections and may not import Accordion.
**How to avoid:** When adding FAQ sections, always verify the page imports `{ Accordion, AccordionContent, AccordionItem, AccordionTrigger }` from `"@/components/ui/accordion"`. Add the import if missing.
**Warning signs:** Build failures after adding FAQ sections.

### Pitfall 5: Hail Damage Content Cluster Overlap

**What goes wrong:** Enriching hail damage content on one page duplicates content already on another page in the cluster (hub vs spoke, spoke vs spoke).
**Why it happens:** The cluster has 17 pages all about hail damage -- easy to accidentally cover the same ground.
**How to avoid:** Hub page covers broad "what is hail damage, how to spot it, insurance process overview." Spokes cover city-specific hail frequency, local insurance adjusters, city-specific damage patterns. Check keyword-map.md before writing.
**Warning signs:** Two pages in the cluster answering the same question at the same specificity level.

### Pitfall 6: Broken Internal Links in Enriched Content

**What goes wrong:** New content paragraphs link to pages that don't exist (e.g., Hereford page links to `/storm-damage-repair-hereford/` which doesn't exist).
**Why it happens:** Hereford has only 2 pages (city hub + hail damage spoke); other cities have 11+ service spokes. Writers assume all cities have all services.
**How to avoid:** Before linking to a page, verify the directory exists in `app/`. The known gaps: Hereford has only `hereford-texas-roofing` and `hail-damage-repair-hereford`. Note: the existing Hereford hail damage page already has broken links to `/storm-damage-repair-hereford/`, `/roof-replacement-hereford/`, `/roof-inspections-hereford/` which don't exist.
**Warning signs:** Internal links to `/service-city/` patterns where the directory doesn't exist in `app/`.

## Current State Audit

### City Hub Pages - Content Depth Assessment

| City | Lines | ~Words | FAQ Count | City-Specific Elements | Needs Work? |
|------|-------|--------|-----------|----------------------|-------------|
| Canyon | 522 | 1790 | 6 (on-page) | Canyon weather, WT A&M University, Palo Duro Canyon | Minor - verify FAQ count |
| Borger | 522 | 1851 | 6 (on-page) | Phillips 66, petrochemical industry, Hutchinson County, oil boom history | Minor - already strong |
| Pampa | 525 | 1863 | 6 (on-page) | Gray County, Cabot Corp, wind patterns | Minor - verify elements |
| Dumas | 538 | 2055 | 6 (on-page) | Moore County, gas processing, XTO Energy | Minor - already strong |
| Hereford | 376 | 1398 | 4 (on-page) | Deaf Smith County, cattle industry, Beef Capital, feedlots | Needs 2+ more FAQs |
| Andrews | 259 | 842 | 5 (schema-only, not rendered on page) | Permian Basin, oil economy | Needs on-page FAQ section, more city content |
| Big Spring | 259 | 828 | 5 (schema-only) | Similar template to Andrews | Needs on-page FAQ, more city content |
| Levelland | 259 | 801 | 5 (schema-only) | Similar template | Needs on-page FAQ, more city content |
| Monahans | 259 | 865 | 5 (schema-only) | Similar template | Needs on-page FAQ, more city content |
| Snyder | 259 | 823 | 5 (schema-only) | Similar template | Needs on-page FAQ, more city content |

### Pages Without On-Page FAQ Sections (43 total)

Key categories of pages missing FAQs:
- **Non-target city hubs:** andrews-tx-roofing, big-spring-tx-roofing, levelland-tx-roofing, monahans-tx-roofing, snyder-tx-roofing, bushland-tx-roofing, claude-tx-roofing, lubbock-tx-roofing, odessa-tx-roofing, perryton-texas-roofing, plainview-texas-roofing, vega-tx-roofing, wildorado-tx-roofing
- **Service spokes (Andrews/Big Spring/Levelland/Monahans/Snyder):** asphalt-shingle-roofing-andrews, metal-roofing-andrews, etc. (various)
- **Amarillo specialty pages:** amarillo-homes-roofing-services, asphalt-flat-roof-repair-in-amarillo, pvc-roof-repair-in-amarillo, pvc-roof-replacement-in-amarillo, etc.
- **Static pages:** about, articles, blog, contact, gallery, reviews, services, service-areas, roofing-methods

Note: Some of these (contact, gallery, reviews, about) may not need FAQs. The requirement specifies "every service and city page" -- static utility pages are excluded.

### Hail Damage Content Cluster (17 pages)

| Page | Lines | Key Differentiator |
|------|-------|--------------------|
| /hail-damage-repair/ (hub) | ~350 | Broad West Texas overview, signs of damage, material types, insurance process overview |
| /hail-damage-repair-amarillo/ | ~900 | Amarillo hail belt position, Texas insurance claims expertise, detailed process |
| /hail-damage-repair-hereford/ | 507 | Cattle industry, agricultural facilities, Beef Capital, Llano Estacado storms |
| /hail-damage-repair-borger/ | 448 | Petrochemical facilities, Hutchinson County, industrial roofing |
| /hail-damage-repair-dumas/ | 796 | Moore County, gas processing industry |
| /hail-damage-repair-canyon/ | ~450 | WT A&M, Palo Duro Canyon, university housing |
| Other spokes | 400-500 | City-specific hail frequency, local weather patterns |

**Cluster strengthening needs (CONT-08):**
- Insurance claim process: Detailed step-by-step in hub, city-specific adjuster info in spokes
- Storm types: Differentiate hail vs wind vs rain damage assessment
- Damage assessment: Visual guide to damage severity levels (cosmetic vs functional vs critical)

### H2 Restructuring Scope

Current H2 patterns on service pages (statement-style):
- "Why Amarillo Roofs Need Specialized Care"
- "Common Roof Repairs in Amarillo"
- "Seasonal Roofing Considerations in Amarillo"
- "Comprehensive Roofing Services in Borger"
- "Borger Weather Challenges & Your Roof"

Target H2 patterns (answer-first question-style):
- "Why Does Amarillo's Climate Damage Roofs Faster?"
- "What Are the Most Common Roof Problems in Amarillo?"
- "When Is the Best Time for Roof Work in Amarillo?"
- "What Roofing Services Does 5 Star Offer in Borger?"
- "How Does Borger's Weather Affect Your Roof?"

**Scope estimate:** ~168 pages have H2s that could be restructured. Focus on service spoke pages first (highest SEO impact), then city hubs. Exclude CTA sections, "Visit Our Location" sections, and FAQ section headers from restructuring.

### Roofing Types Coverage (CONT-06)

Current coverage across pages:
- **Asphalt shingles:** Dedicated hub (`/asphalt-shingle-roofing/`) + 14 city spokes. Well covered.
- **Metal roofing:** Dedicated hub (`/metal-roofing/`) + 14 city spokes. Well covered.
- **TPO:** Dedicated hub (`/tpo-roofing/`) + 14 city spokes. Well covered.
- **PVC:** 3 Amarillo-only pages. No hub. No city spokes. Limited coverage.
- **EPDM:** Mentioned in content but no dedicated pages. Coverage through TPO and commercial pages.
- **Flat membrane:** 2 pages (asphalt-flat-roof-repair-in-amarillo, flat-roof-repair-midland-texas). Limited.

**Gap:** Ensure service pages that discuss "all roofing types" actually mention the full range (asphalt shingles, metal, TPO/EPDM/PVC membrane, built-up). The hub pages for roof-repair, roof-replacement, and commercial-roofing should reference all material types.

## Code Examples

### Adding FAQ Section to a Page Missing One

For a page like `andrews-tx-roofing/page.tsx` (currently has schema-only FAQs):

**Step 1: Add import (if not present):**
```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
```

**Step 2: Add on-page FAQ section before the CTA:**
```tsx
<FadeIn>
  <section className="section">
    <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
      Frequently Asked Questions - Andrews Roofing
    </h2>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="faq-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
          <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
            Does Andrews get severe hail damage?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed">
            Yes, Andrews County sits in a severe weather corridor...
          </AccordionContent>
        </AccordionItem>
        {/* 5-6 more items */}
      </Accordion>
    </div>
  </section>
</FadeIn>
```

**Step 3: Ensure FAQPage schema matches the visible FAQ content exactly.**

### Restructuring H2 from Statement to Answer-First

**Before:**
```tsx
<h2 className="text-3xl font-bold mb-6 text-brand-brown">
  Common Roof Repairs in Amarillo
</h2>
```

**After:**
```tsx
<h2 className="text-3xl font-bold mb-6 text-brand-brown">
  What Are the Most Common Roof Repairs in Amarillo?
</h2>
```

Note: Only the text content changes. className, styling, and surrounding JSX remain identical. This is a hard rule -- no visual changes.

### Adding City-Specific Content Elements

**Example: Adding neighborhood section to a thin city page:**
```tsx
<FadeIn>
  <section className="content-block mb-12">
    <h2 className="text-2xl font-bold mb-6">
      Neighborhoods & Areas We Serve in Andrews
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-2">Downtown Andrews</h3>
        <p className="text-gray-600">
          The original townsite along Main Street, featuring mid-century
          commercial buildings and established residential neighborhoods...
        </p>
      </div>
      {/* more neighborhoods */}
    </div>
  </section>
</FadeIn>
```

## Scope & Scale Estimates

### Plan 08-01: Enrich Thin Secondary City Pages

**Target pages (from requirements):** Canyon, Borger, Pampa, Dumas, Hereford city hubs.

**Current assessment:**
- Canyon, Borger, Pampa, Dumas are already 1400-2050 words with 3+ city-specific elements and 6 FAQs each. These may need only minor adjustments (verify FAQ count is 6-7, verify 3+ city-specific elements).
- Hereford needs the most work: only 4 on-page FAQs, thinnest at 376 lines / 1398 words.
- The 5 non-target thin cities (Andrews, Big Spring, Levelland, Monahans, Snyder at ~259 lines) are not explicitly listed in the requirements but are the thinnest pages on the site. Consider whether they should be enriched too.

**Estimate:** 5-10 pages to touch, primarily Hereford + 4 audits.

### Plan 08-02: FAQ Standardization

**Target:** 43 pages currently missing on-page FAQ sections. After filtering out non-service/city pages (about, contact, gallery, blog, reviews, articles, services index, service-areas), estimate ~30-35 service/city pages needing FAQ additions.

**Each page needs:**
1. Accordion import added (if missing)
2. 6-7 unique FAQ AccordionItems
3. Matching FAQPage schema (or update existing schema-only FAQs)
4. Questions localized to the specific service + city combination

**Estimate:** ~30-35 pages, ~15-20 minutes each for unique FAQ writing.

### Plan 08-03: H2 Restructuring

**Target:** Service spoke pages and service hub pages. Estimate ~100-120 pages need H2 restructuring (some already have question-style H2s or are city hub pages that use a different pattern).

**Each page needs:**
- 3-8 H2s rewritten from statement to question format
- Primary keyword preserved in new H2
- No CSS or layout changes
- Rich content elements (comparison tables, material specs) added where appropriate (CONT-07)

**Estimate:** ~100-120 pages, ~5-10 minutes each for H2 rewording + selective rich element additions.

### Plan 08-04: Hail Damage Cluster + Cannibalization Audit

**Target:** 17 hail damage pages (strengthen content) + full-site cannibalization check.

**Hail damage strengthening:**
- Hub page: Add insurance claim process steps, damage assessment severity guide
- Spokes: Add city-specific storm history, local insurance adjuster tips
- Ensure each spoke has unique angle beyond city-name swapping

**Cannibalization audit:**
- Compare all 211 keyword-map.md entries for overlap
- Verify no two pages target identical search intent
- Check H1s and H2s for unintentional overlap
- Document any conflicts found and resolution approach

**Estimate:** 17 pages enrichment + keyword audit across 211 pages.

## Open Questions

1. **Should the 5 non-target thin cities (Andrews, Big Spring, etc.) be enriched in 08-01?**
   - What we know: Requirements say "Canyon, Borger, Pampa, Dumas, Hereford" explicitly. Andrews/Big Spring/etc. are only 259 lines and thin.
   - What's unclear: Whether the requirement scope includes only the named 5 or all thin cities.
   - Recommendation: Focus on the named 5 first per requirements. If time permits, enrich the other thin cities as bonus work. The FAQ standardization in 08-02 will cover them regardless.

2. **How many service spoke pages need H2 restructuring vs already having question-style H2s?**
   - What we know: Sample checks show most spokes use statement-style H2s.
   - What's unclear: Exact count without auditing all 168 service pages.
   - Recommendation: Plan 08-03 should start with a quick grep audit to identify which pages already have question-format H2s and skip them.

3. **What about broken links in existing content (e.g., Hereford's links to non-existent pages)?**
   - What we know: `/hail-damage-repair-hereford/page.tsx` links to `/storm-damage-repair-hereford/`, `/roof-replacement-hereford/`, and `/roof-inspections-hereford/` which don't exist.
   - What's unclear: Whether fixing broken links is in scope for Phase 8 or Phase 10 (Technical Validation).
   - Recommendation: Fix broken links encountered during content enrichment. Don't create new pages to satisfy broken links -- update the links to point to existing pages or the relevant hub.

4. **Which static pages (blog, articles, about, gallery, reviews) need FAQs?**
   - What we know: CONT-04 says "every service and city page." Static utility pages like contact, gallery, reviews are not service or city pages.
   - Recommendation: Exclude contact, gallery, reviews, blog index, articles index from FAQ requirements. Include about page only if it functions as a service page.

## Sources

### Primary (HIGH confidence)
- Direct codebase audit of all 211 `page.tsx` files in `/Volumes/External-2TB/Projects/service-site-builder/sites/5-star-roofing/app/`
- `.planning/brand/content-voice.md` -- FAQ templates, tone guide, city-specific requirements
- `.planning/brand/keyword-map.md` -- 211 keyword assignments, zero cannibalization warnings
- `.planning/REQUIREMENTS.md` -- CONT-02 through CONT-09 specifications
- `.planning/ROADMAP.md` -- Phase 8 success criteria and quality gate

### Secondary (MEDIUM confidence)
- `.planning/phases/06-service-hub-pages/06-RESEARCH.md` -- Hub page creation patterns
- `.planning/phases/07-internal-linking/07-RESEARCH.md` -- InternalLinks component state, page topology

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- No new libraries, pure content editing of existing patterns
- Architecture: HIGH -- Direct codebase audit confirms all patterns, components, and file structures
- Pitfalls: HIGH -- Based on direct observation of actual page content and known gaps
- Content scope: HIGH -- Line counts, word counts, FAQ counts all verified by grep/wc

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable -- content patterns don't change without code commits)
