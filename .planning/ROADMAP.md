# Roadmap: 5 Star Roofing SEO Overhaul

## Overview

This roadmap transforms a 268-page roofing site from position ~39 average and 2-3 clicks/month into a top-10 ranking lead generation machine. The work follows a strict dependency chain: compliance fixes first (removing active penalty risks), then URL consolidation (eliminating self-competition), then metadata and homepage fixes (improving CTR), then schema upgrades (enriching search presence), then architecture expansion (hub pages and internal linking), then content and image quality (differentiating from competitors), and finally a full technical validation pass before resubmission to Google. Each phase deploys independently so GSC can confirm the impact before the next phase begins.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Compliance & Entity Fixes** - Remove AggregateRating spam risk, standardize business name/NAP across all pages
- [ ] **Phase 2: URL Canonicalization** - Consolidate 25+ duplicate URL variants via 301 redirects, remove competing pages
- [ ] **Phase 3: Meta & Titles** - Fix all meta descriptions and titles across 268 pages for CTR improvement
- [ ] **Phase 4: Homepage Overhaul** - Rewrite homepage for Amarillo-first residential positioning
- [ ] **Phase 5: Schema Architecture** - Upgrade schema types, add WebSite/Person entities, install validation tooling
- [ ] **Phase 6: Service Hub Pages** - Create 9 missing service hub pages completing the hub-and-spoke topology
- [ ] **Phase 7: Internal Linking** - Rebuild link architecture with hub uplinks, cross-links, and orphan elimination
- [ ] **Phase 8: Content Enrichment** - Strengthen thin city pages, add rich content elements, eliminate cannibalization
- [ ] **Phase 9: Image Optimization** - Audit and fix all images: alt text, contextual relevance, broken URLs, R2 compliance
- [ ] **Phase 10: Technical Validation & Relaunch** - Full-site QA, sitemap regeneration, performance verification, Google resubmission

## Quality Standards

Every phase must pass the **6-Check Verification Loop** before completion (see `.planning/DESIGN-QUALITY-STANDARDS.md`):

1. **Build Verification** — `npm run build` completes with zero errors
2. **Schema Validation** — Entity name "5 Star Roofing" renders correctly in built HTML; no name variants
3. **Meta Quality Spot Check** — Sample 10 pages: titles <60 chars, descriptions <160 chars, no duplicates
4. **Image URL Audit** — Zero GitHub-hosted images; all from R2
5. **Internal Link Check** — All `href="/..."` resolve to real pages in `out/`
6. **PageSpeed Regression** — Score stays 95+ desktop

**Brand References** (use in planning and execution):
- `.planning/brand/entity-guidelines.md` — Canonical name, NAP, voice
- `.planning/brand/content-voice.md` — Tone, good/bad patterns, FAQ templates
- `.planning/brand/keyword-map.md` — Primary keyword per page (populated Phase 3+)

**Hard Rules:**
- No visual design changes (CSS, layout, animations frozen)
- Build must succeed every phase
- Entity name "5 Star Roofing" — no variations
- Images from R2 only
- No phase ships without all 6 checks passing

## Phase Details

### Phase 1: Compliance & Entity Fixes
**Goal**: Eliminate active ranking suppression from schema spam signals and entity inconsistency so Google treats the site as a trustworthy business entity
**Depends on**: Nothing (first phase)
**Requirements**: COMP-01, COMP-02, COMP-03, COMP-04, COMP-05
**Success Criteria** (what must be TRUE):
  1. No page on the site contains AggregateRating schema (verified by searching built HTML output for "AggregateRating")
  2. Every page's schema, footer, header, and OG tags display "5 Star Roofing" as the business name — no variations
  3. Every page's schema uses the same canonical email address matching constants.ts
  4. Every page's schema phone, address, and hours match constants.ts exactly
  5. Copyright shows 2026 on every page
**Quality Gate**: Build succeeds, entity name grep shows zero variants in `out/`, schema NAP matches constants.ts
**Brand Refs**: `.planning/brand/entity-guidelines.md`
**Plans:** 2 plans

Plans:
- [ ] 01-01-PLAN.md -- Remove AggregateRating schema from all 246 page files and schema templates
- [ ] 01-02-PLAN.md -- Standardize entity name, email, phone, hours, and copyright across all pages

### Phase 2: URL Canonicalization
**Goal**: Eliminate self-competition by consolidating all duplicate URL variants into canonical pages via 301 redirects
**Depends on**: Phase 1
**Requirements**: URL-01, URL-02, URL-03, URL-04, URL-05, URL-06
**Success Criteria** (what must be TRUE):
  1. Visiting any `-texas` or `-tx` URL variant returns a 301 redirect to the canonical URL (not a 200)
  2. Only one Amarillo hail damage page exists — all 6 variants redirect to it
  3. All commercial and residential roofing URL variants redirect to their canonical counterparts
  4. No duplicate page.tsx files remain in the app/ directory for redirected URLs
  5. No two pages on the site target the same primary keyword (verified by title/H1 audit)
**Quality Gate**: Build succeeds, no redirect chains, sitemap contains only canonical URLs, internal link spot-check passes
**Plans:** 3 plans

Plans:
- [x] 02-01-PLAN.md — Rewrite netlify.toml redirects with correct canonical targets + update internal links in page.tsx files
- [x] 02-02-PLAN.md — Delete duplicate page.tsx directories, rebuild, regenerate sitemap, audit for keyword self-competition
- [ ] 02-03-PLAN.md — Gap closure: redirect 8 remaining redundant pages, designate 10 unique niche pages as canonical

### Phase 3: Meta & Titles
**Goal**: Every page has a unique, correctly formatted meta title and description that drives clicks from search results
**Depends on**: Phase 2 (URLs must be canonical before optimizing metadata)
**Requirements**: META-01, META-02, META-03, META-04, META-05, META-06
**Success Criteria** (what must be TRUE):
  1. Every page has a meta title under 60 characters containing "5 Star Roofing" brand name
  2. Every page has a unique meta description under 160 characters with a call-to-action
  3. No meta descriptions contain double commas or truncated text
  4. No two pages share the same meta title
  5. Homepage meta title leads with "Amarillo" and residential roofing focus
**Quality Gate**: Build succeeds, entity name consistent in all meta titles, no duplicate titles across site, meta spot-check (10 pages) passes length limits, keyword map updated
**Brand Refs**: `.planning/brand/entity-guidelines.md`, `.planning/brand/content-voice.md`, `.planning/brand/keyword-map.md` (populate during this phase)
**Anti-Generic**: No meta descriptions starting with "Looking for..." — use outcome-focused descriptions per content-voice.md
**Plans:** 3 plans

Plans:
- [ ] 03-01-PLAN.md — Standardize all meta titles to use "5 Star Roofing" brand, fix formatting issues, rewrite homepage title (META-06)
- [ ] 03-02-PLAN.md — Fix all meta descriptions: capitalize, trim length, add CTAs, eliminate anti-patterns
- [ ] 03-03-PLAN.md — Comprehensive verification audit, build spot-check, populate keyword-map.md

### Phase 4: Homepage Overhaul
**Goal**: Homepage positions 5 Star Roofing as Amarillo's residential roofing expert, not a generic West Texas commercial roofer
**Depends on**: Phase 3 (meta title for homepage set in Phase 3; content must align)
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, CONT-01
**Success Criteria** (what must be TRUE):
  1. Homepage H1 mentions Amarillo explicitly — no "West Texas" in H1
  2. Hero section focuses on Amarillo/Canyon/Panhandle — Midland and Odessa do not appear above the fold
  3. An "Also Serving" section exists below the fold linking to Midland, Odessa, and Lubbock city hubs
  4. Homepage has explicit links to /services/ hub and /amarillo-texas-roofing/ city hub
  5. First paragraph of homepage content names Amarillo as primary service area with residential-first positioning
**Quality Gate**: Build succeeds, entity name consistent, PageSpeed 95+ on homepage, no visual regressions (layout/animations frozen)
**Brand Refs**: `.planning/brand/entity-guidelines.md`, `.planning/brand/content-voice.md`
**Anti-Generic**: No empty claims ("quality service, affordable prices") — use specific, localized content per content-voice.md
**Plans:** 2 plans

Plans:
- [ ] 04-01-PLAN.md -- Rewrite homepage hero, H1, metadata, and entity name for Amarillo-first residential positioning
- [ ] 04-02-PLAN.md -- Add Also Serving section and hub page links below the fold

### Phase 5: Schema Architecture
**Goal**: Schema markup across all pages is technically correct, type-specific, and enriched with entity signals that improve search presence
**Depends on**: Phase 1 (entity name must be clean before schema upgrades)
**Requirements**: SCHM-01, SCHM-02, SCHM-03, SCHM-04, SCHM-05, SCHM-06, SCHM-07, SCHM-08
**Success Criteria** (what must be TRUE):
  1. Every page's LocalBusiness schema uses @type ["LocalBusiness", "RoofingContractor"]
  2. Homepage contains WebSite entity schema with sameAs links to GBP, social profiles
  3. About page contains Person schema for the business owner
  4. Every page with FAQ content has corresponding FAQ schema in the HTML output
  5. Schema validation script passes against all 268 built pages with zero errors
**Quality Gate**: Build succeeds, `grep -r "LocalBusiness" out/ | wc -l` matches page count, entity name "5 Star Roofing" in all schema, zero "5 FIVE Star" variants
**Brand Refs**: `.planning/brand/entity-guidelines.md`
**Component Reuse**: Standard schema template pattern — LocalBusiness+RoofingContractor on every page, FAQ schema wherever FAQ content exists, Breadcrumb schema matching nav hierarchy
**Plans**: TBD

Plans:
- [ ] 05-01: Upgrade schema-templates.ts with RoofingContractor type and install schema-dts
- [ ] 05-02: Add WebSite entity schema to homepage and Person schema to About page
- [ ] 05-03: Audit and fix FAQ, Breadcrumb, and Service schema across all pages
- [ ] 05-04: Build schema validation script and run against all 268 pages

### Phase 6: Service Hub Pages
**Goal**: Every service type has a dedicated hub page that collects authority from spoke pages and passes it back down, completing the hub-and-spoke topology
**Depends on**: Phase 2 (URL topology must be clean before adding new pages)
**Requirements**: HUB-01, HUB-02, HUB-03, HUB-04, HUB-05, HUB-06, HUB-07, HUB-08, HUB-09, HUB-10, HUB-11, HUB-12
**Success Criteria** (what must be TRUE):
  1. All 9 service hub pages exist and return 200: /hail-damage-repair/, /roof-repair/, /roof-replacement/, /storm-damage-repair/, /metal-roofing/, /wind-damage-repair/, /tpo-roofing/, /roof-inspections/, /asphalt-shingle-roofing/
  2. Each hub page links to every city variant of that service (e.g., /hail-damage-repair/ links to /hail-damage-repair-amarillo/, /hail-damage-repair-midland/, etc.)
  3. Each hub page has substantial unique content (not just a link directory) — minimum 800 words
  4. Each hub page has a FAQ section with corresponding FAQ schema in the HTML output
  5. No new hub page cannibalizes an existing spoke page's primary keyword (verified by title/H1 differentiation)
**Quality Gate**: Build succeeds, all 9 hub URLs return 200 in out/, FAQ schema renders in built HTML, entity name consistent, keyword map updated with hub keywords, PageSpeed 95+
**Brand Refs**: `.planning/brand/content-voice.md` (hub page content quality), `.planning/brand/keyword-map.md` (hub vs spoke differentiation)
**Component Reuse**: Standard FAQ template (6-7 service-type questions per hub), standard schema (LocalBusiness+RoofingContractor+FAQ), standard internal linking (hub links down to all spokes)
**Anti-Generic**: Hub pages must have 800+ words of substantive content — not just link directories. Use content-voice.md patterns.
**Plans**: TBD

Plans:
- [ ] 06-01: Create hail-damage-repair and roof-repair hub pages (highest priority services)
- [ ] 06-02: Create roof-replacement, storm-damage-repair, and metal-roofing hub pages
- [ ] 06-03: Create wind-damage-repair, tpo-roofing, roof-inspections, and asphalt-shingle-roofing hub pages
- [ ] 06-04: Add spoke links, FAQ sections, and schema to all hub pages

### Phase 7: Internal Linking
**Goal**: Every page is reachable within 3 clicks from the homepage and links bidirectionally to its parent hubs and sibling pages
**Depends on**: Phase 6 (hub pages must exist before spokes can link to them)
**Requirements**: LINK-01, LINK-02, LINK-03, LINK-04, LINK-05, LINK-06, LINK-07, LINK-08
**Success Criteria** (what must be TRUE):
  1. InternalLinks component includes hub uplink section — every spoke page links to both its service hub and city hub
  2. Every hub page links down to all its spoke pages
  3. Cross-city links exist for same services (e.g., roof-repair-amarillo links to roof-repair-midland)
  4. Every page has at least 3 outbound internal links (no dead-end pages)
  5. Breadcrumb navigation on every page resolves to real pages (no 404 breadcrumb parents)
**Quality Gate**: Build succeeds, zero orphan pages, zero dead-end pages (every page has 3+ outbound links), all breadcrumb hrefs resolve to real pages in out/, internal link spot-check passes
**Component Reuse**: Standard internal linking pattern — hub uplinks (spoke->service hub + city hub), cross-city links (same service), cross-service links (same city)
**Plans**: TBD

Plans:
- [ ] 07-01: Update InternalLinks component with hub uplink logic
- [ ] 07-02: Audit and fix cross-city and cross-service linking across all spoke pages
- [ ] 07-03: Verify no orphan pages, no dead-ends, and all breadcrumbs resolve

### Phase 8: Content Enrichment
**Goal**: Every page has differentiated, substantive content that demonstrates local expertise and covers the full range of roofing services
**Depends on**: Phase 6 (hub pages provide content framework), Phase 7 (links must work before enriching content)
**Requirements**: CONT-02, CONT-03, CONT-04, CONT-05, CONT-06, CONT-07, CONT-08, CONT-09
**Success Criteria** (what must be TRUE):
  1. Every secondary city page (Canyon, Borger, Pampa, Dumas, Hereford) has 800+ words with at least 3 genuinely city-specific elements
  2. Every service and city page has 6-7 FAQ items
  3. Service pages use answer-first H2 structure (H2s framed as homeowner questions)
  4. Content covers all roofing types: asphalt shingles, metal roofs, flat membrane/TPO/EPDM across relevant pages
  5. No two pages target the same search intent (cannibalization check passes)
**Quality Gate**: Build succeeds, entity name consistent, FAQ schema on every page with FAQ content, no duplicate FAQ questions across pages, keyword map confirms no cannibalization, PageSpeed 95+
**Brand Refs**: `.planning/brand/content-voice.md` (FAQ templates, answer-first H2s, city-specific content rules), `.planning/brand/keyword-map.md` (cannibalization check)
**Component Reuse**: Standard FAQ templates (service-type and city-type per content-voice.md), answer-first H2 structure on service pages
**Anti-Generic**: Every city page must have 3+ genuinely city-specific elements (local weather, neighborhood names, building codes). No city-name-swapped templates.
**Plans**: TBD

Plans:
- [ ] 08-01: Enrich thin secondary city pages with city-specific content
- [ ] 08-02: Add/standardize FAQ sections across all service and city pages
- [ ] 08-03: Restructure service page H2s to answer-first format and add rich content elements
- [ ] 08-04: Strengthen hail damage content cluster and verify no cannibalization

### Phase 9: Image Optimization
**Goal**: Every image on the site is contextually relevant, properly attributed with keyword-rich alt text, and served reliably from Cloudflare R2
**Depends on**: Phase 8 (content must be finalized before matching images to content)
**Requirements**: IMG-01, IMG-02, IMG-03, IMG-04, IMG-05, IMG-06, IMG-07, IMG-08
**Success Criteria** (what must be TRUE):
  1. No images are hosted in the GitHub repository — all served from Cloudflare R2 URLs
  2. Zero broken image URLs across all 268+ pages (validated by automated check against built output)
  3. No duplicate images appear on the same page
  4. Every image has a descriptive, keyword-rich alt attribute relevant to its surrounding content
  5. Inline images of roofing materials, hail damage, and completed work appear where content references them
**Quality Gate**: Build succeeds, `grep -r "public/images" out/ | wc -l` returns ZERO (no GitHub images), `grep -r "r2.dev" out/ | wc -l` returns >0, zero broken image URLs validated against built output, PageSpeed 95+
**Plans**: TBD

Plans:
- [ ] 09-01: Audit all image URLs for R2 compliance, broken links, and duplicates
- [ ] 09-02: Audit and rewrite all image alt text for keyword relevance
- [ ] 09-03: Add contextual inline images where content references materials or damage types

### Phase 10: Technical Validation & Relaunch
**Goal**: The entire site passes a comprehensive technical QA proving all changes work correctly, then gets resubmitted to Google for re-crawling
**Depends on**: Phase 9 (all content and image changes must be complete)
**Requirements**: TECH-01, TECH-02, TECH-03, TECH-04, TECH-05, TECH-06, TECH-07
**Success Criteria** (what must be TRUE):
  1. Site builds successfully with all pages — zero build errors
  2. PageSpeed score is 95+ desktop on homepage and 3 representative spoke pages
  3. Sitemap.xml is regenerated with correct URLs, priorities, and changefreq values
  4. All 268+ pages resubmitted to Google Indexing API without errors
  5. Broken link check passes across all pages (zero internal 404s)
**Quality Gate**: ALL 6 verification checks must pass as final gate — this phase IS the comprehensive quality validation. Build, schema, meta, images, links, PageSpeed all verified.
**Plans**: TBD

Plans:
- [ ] 10-01: Full build verification and PageSpeed regression testing
- [ ] 10-02: Regenerate sitemap and verify R2 image URL integrity
- [ ] 10-03: Run broken link check, fix any issues, and resubmit to Google Indexing API

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Compliance & Entity Fixes | 0/2 | Not started | - |
| 2. URL Canonicalization | 0/2 | Not started | - |
| 3. Meta & Titles | 0/3 | Not started | - |
| 4. Homepage Overhaul | 0/2 | Not started | - |
| 5. Schema Architecture | 0/4 | Not started | - |
| 6. Service Hub Pages | 0/4 | Not started | - |
| 7. Internal Linking | 0/3 | Not started | - |
| 8. Content Enrichment | 0/4 | Not started | - |
| 9. Image Optimization | 0/3 | Not started | - |
| 10. Technical Validation & Relaunch | 0/3 | Not started | - |
