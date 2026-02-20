# Requirements: 5 Star Roofing SEO Overhaul

**Defined:** 2026-02-20
**Core Value:** Get the site ranking top 10 and generating 100+ organic clicks/month with real phone calls and leads

## v1 Requirements

Requirements for this optimization sprint. Each maps to roadmap phases.

### Compliance

- [ ] **COMP-01**: Remove fabricated AggregateRating schema from all 212 pages that lack visible on-page reviews
- [ ] **COMP-02**: Standardize business entity name to "5 Star Roofing" across all schema, meta tags, OG tags, footer, header
- [ ] **COMP-03**: Standardize NAP email to single canonical email across all page schemas (resolve admin@ vs info@ inconsistency)
- [ ] **COMP-04**: Standardize business phone, address, and hours in all schema to match constants.ts
- [ ] **COMP-05**: Update copyright year to 2026 across all pages

### URL Canonicalization

- [ ] **URL-01**: Add 301 redirects for all `-texas`/`-tx` URL variants to their canonical counterparts in netlify.toml
- [ ] **URL-02**: Consolidate 7 Amarillo hail damage page variants into 1 canonical page via 301 redirects
- [ ] **URL-03**: Consolidate commercial roofing URL variants (e.g., `-midland/` vs `-midland-texas/`) via 301 redirects
- [ ] **URL-04**: Consolidate residential roofing URL variants via 301 redirects
- [ ] **URL-05**: Remove or redirect all duplicate page.tsx files after redirects are verified live
- [ ] **URL-06**: Verify no self-canonicalizing competing pages remain after consolidation

### Meta & Titles

- [ ] **META-01**: Fix all truncated/incomplete meta descriptions across 268 pages
- [ ] **META-02**: Unify brand name in all meta titles to "5 Star Roofing"
- [ ] **META-03**: Ensure every page has unique, keyword-optimized meta title under 60 characters
- [ ] **META-04**: Ensure every page has unique, compelling meta description under 160 characters with CTA
- [ ] **META-05**: Fix double-comma issues in meta descriptions (113 pages identified in prior audit)
- [ ] **META-06**: Homepage meta title rewritten to be Amarillo-first with residential focus

### Homepage

- [ ] **HOME-01**: Rewrite H1 from "West Texas Hail Damage Roofing Experts" to Amarillo-first headline
- [ ] **HOME-02**: Remove "Amarillo • Midland • Odessa" multi-city hero text; focus on Amarillo/Canyon/Panhandle
- [ ] **HOME-03**: Add "Also Serving" section for secondary markets (Midland, Odessa, Lubbock) below the fold
- [ ] **HOME-04**: Add explicit links to service hub pages and Amarillo city hub from homepage
- [ ] **HOME-05**: First paragraph explicitly mentions Amarillo as primary service area

### Schema

- [ ] **SCHM-01**: Change @type from "LocalBusiness" to ["LocalBusiness", "RoofingContractor"] on all pages
- [ ] **SCHM-02**: Add WebSite entity schema on homepage with sameAs links (GBP, social profiles)
- [ ] **SCHM-03**: Add Person schema for business owner on About page (E-E-A-T signal)
- [ ] **SCHM-04**: Ensure FAQ schema is present on every page that has FAQ content
- [ ] **SCHM-05**: Ensure Breadcrumb schema is present on every page with breadcrumb navigation
- [ ] **SCHM-06**: Ensure Service schema is present on all service pages with correct service types
- [ ] **SCHM-07**: Install schema-dts as dev dependency for compile-time schema validation
- [ ] **SCHM-08**: Validate schema across all 268 pages with structured data validator post-build

### Hub Pages

- [ ] **HUB-01**: Create /hail-damage-repair/ service hub page (highest priority — signature service)
- [ ] **HUB-02**: Create /roof-repair/ service hub page
- [ ] **HUB-03**: Create /roof-replacement/ service hub page
- [ ] **HUB-04**: Create /storm-damage-repair/ service hub page
- [ ] **HUB-05**: Create /metal-roofing/ service hub page
- [ ] **HUB-06**: Create /wind-damage-repair/ service hub page
- [ ] **HUB-07**: Create /tpo-roofing/ service hub page
- [ ] **HUB-08**: Create /roof-inspections/ service hub page
- [ ] **HUB-09**: Create /asphalt-shingle-roofing/ service hub page
- [ ] **HUB-10**: Each hub page links down to all city variants of that service
- [ ] **HUB-11**: Each hub page has unique, substantial content (not just a link list)
- [ ] **HUB-12**: Each hub page has FAQ section with FAQ schema

### Internal Linking

- [ ] **LINK-01**: Update InternalLinks component to add hub uplinks (spoke → service hub, spoke → city hub)
- [ ] **LINK-02**: All spoke pages link up to both their service hub and city hub
- [ ] **LINK-03**: Hub pages link down to all their spoke pages
- [ ] **LINK-04**: Cross-city linking for same services (e.g., roof-repair-amarillo links to roof-repair-midland)
- [ ] **LINK-05**: Cross-service linking for same cities (e.g., roof-repair-amarillo links to commercial-roofing-amarillo)
- [ ] **LINK-06**: No orphan pages (every page reachable within 3 clicks from homepage)
- [ ] **LINK-07**: No dead-end pages (every page has at least 3 outbound internal links)
- [ ] **LINK-08**: Breadcrumb navigation resolves to real pages (no 404 breadcrumb parents)

### Content Quality

- [ ] **CONT-01**: Homepage content rewritten for residential-first positioning
- [ ] **CONT-02**: Thin secondary city pages (Canyon, Borger, Pampa, Dumas, Hereford) enriched to 800-1200 words with genuinely city-specific content
- [ ] **CONT-03**: Each city page has minimum 3 city-specific elements: local weather data, neighborhood names, city-specific FAQs
- [ ] **CONT-04**: Consistent FAQ sections (6-7 items) on every service and city page
- [ ] **CONT-05**: Answer-first H2 structure on service pages (H2s framed as homeowner questions)
- [ ] **CONT-06**: Content covers all roofing types: asphalt shingles, metal roofs, flat membrane/TPO/EPDM
- [ ] **CONT-07**: Rich content elements: comparison tables, material specs, process steps where contextually appropriate
- [ ] **CONT-08**: Hail damage content cluster strengthened (insurance claim process, storm types, damage assessment)
- [ ] **CONT-09**: No keyword cannibalization between pages targeting same intent

### Images

- [ ] **IMG-01**: All images served from Cloudflare R2 — no images uploaded to GitHub
- [ ] **IMG-02**: No broken image URLs across any page (validated post-build)
- [ ] **IMG-03**: No duplicate images on same page
- [ ] **IMG-04**: Hero images use AI-generated images where available
- [ ] **IMG-05**: Completed job photos used in relevant service/city pages with city context
- [ ] **IMG-06**: All images have descriptive, keyword-rich alt text relevant to immediate context
- [ ] **IMG-07**: Inline images of hail-damaged shingles, roofing materials when referenced in content
- [ ] **IMG-08**: Images contextually relevant to surrounding content (not generic stock)

### Technical

- [ ] **TECH-01**: Site builds successfully with all pages (no build errors)
- [ ] **TECH-02**: PageSpeed performance stays 95+ desktop after all changes
- [ ] **TECH-03**: Sitemap regenerated with correct priorities and changefreq values
- [ ] **TECH-04**: Resubmit all pages to Google Indexing API after changes
- [ ] **TECH-05**: No visual or functional regressions (look/feel preserved)
- [ ] **TECH-06**: Broken link check passes across all 268+ pages post-build
- [ ] **TECH-07**: R2 image URL integrity verified before and after each phase deployment

## v2 Requirements

Deferred to after rankings improve. Tracked but not in current roadmap.

### Enhanced Schema

- **SCHM-V2-01**: ImageObject schema on project gallery pages
- **SCHM-V2-02**: VideoObject schema for video testimonials/walkthroughs

### Additional Content

- **CONT-V2-01**: Cost/pricing transparency pages for high-intent queries
- **CONT-V2-02**: Video content (job walkthroughs, customer testimonials)
- **CONT-V2-03**: Storm-season content refresh automation
- **CONT-V2-04**: Interactive service area map

### Monitoring

- **TECH-V2-01**: GSC API integration for automated weekly position tracking
- **TECH-V2-02**: Lighthouse CI in deployment pipeline for performance regression alerts

## Out of Scope

| Feature | Reason |
|---------|--------|
| Visual redesign | Client requirement — look/feel must stay as-is |
| New city/service area additions | Optimize existing pages first; expansion after rankings improve |
| Google Business Profile changes | Off-site; requires GBP account access |
| Server-side rendering | Site must remain static export for Netlify |
| Content management system | Not relevant to SEO ranking goals |
| Mobile app | Not relevant |
| Real-time chat / interactive features | Not relevant to SEO |
| Backlink acquisition | Off-site strategy; this project is on-site SEO only |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| COMP-01 | Phase 1 | Pending |
| COMP-02 | Phase 1 | Pending |
| COMP-03 | Phase 1 | Pending |
| COMP-04 | Phase 1 | Pending |
| COMP-05 | Phase 1 | Pending |
| URL-01 | Phase 2 | Pending |
| URL-02 | Phase 2 | Pending |
| URL-03 | Phase 2 | Pending |
| URL-04 | Phase 2 | Pending |
| URL-05 | Phase 2 | Pending |
| URL-06 | Phase 2 | Pending |
| META-01 | Phase 3 | Pending |
| META-02 | Phase 3 | Pending |
| META-03 | Phase 3 | Pending |
| META-04 | Phase 3 | Pending |
| META-05 | Phase 3 | Pending |
| META-06 | Phase 3 | Pending |
| HOME-01 | Phase 4 | Pending |
| HOME-02 | Phase 4 | Pending |
| HOME-03 | Phase 4 | Pending |
| HOME-04 | Phase 4 | Pending |
| HOME-05 | Phase 4 | Pending |
| SCHM-01 | Phase 5 | Pending |
| SCHM-02 | Phase 5 | Pending |
| SCHM-03 | Phase 5 | Pending |
| SCHM-04 | Phase 5 | Pending |
| SCHM-05 | Phase 5 | Pending |
| SCHM-06 | Phase 5 | Pending |
| SCHM-07 | Phase 5 | Pending |
| SCHM-08 | Phase 5 | Pending |
| HUB-01 | Phase 6 | Pending |
| HUB-02 | Phase 6 | Pending |
| HUB-03 | Phase 6 | Pending |
| HUB-04 | Phase 6 | Pending |
| HUB-05 | Phase 6 | Pending |
| HUB-06 | Phase 6 | Pending |
| HUB-07 | Phase 6 | Pending |
| HUB-08 | Phase 6 | Pending |
| HUB-09 | Phase 6 | Pending |
| HUB-10 | Phase 6 | Pending |
| HUB-11 | Phase 6 | Pending |
| HUB-12 | Phase 6 | Pending |
| LINK-01 | Phase 7 | Pending |
| LINK-02 | Phase 7 | Pending |
| LINK-03 | Phase 7 | Pending |
| LINK-04 | Phase 7 | Pending |
| LINK-05 | Phase 7 | Pending |
| LINK-06 | Phase 7 | Pending |
| LINK-07 | Phase 7 | Pending |
| LINK-08 | Phase 7 | Pending |
| CONT-01 | Phase 4 | Pending |
| CONT-02 | Phase 8 | Pending |
| CONT-03 | Phase 8 | Pending |
| CONT-04 | Phase 8 | Pending |
| CONT-05 | Phase 8 | Pending |
| CONT-06 | Phase 8 | Pending |
| CONT-07 | Phase 8 | Pending |
| CONT-08 | Phase 8 | Pending |
| CONT-09 | Phase 8 | Pending |
| IMG-01 | Phase 9 | Pending |
| IMG-02 | Phase 9 | Pending |
| IMG-03 | Phase 9 | Pending |
| IMG-04 | Phase 9 | Pending |
| IMG-05 | Phase 9 | Pending |
| IMG-06 | Phase 9 | Pending |
| IMG-07 | Phase 9 | Pending |
| IMG-08 | Phase 9 | Pending |
| TECH-01 | Phase 10 | Pending |
| TECH-02 | Phase 10 | Pending |
| TECH-03 | Phase 10 | Pending |
| TECH-04 | Phase 10 | Pending |
| TECH-05 | Phase 10 | Pending |
| TECH-06 | Phase 10 | Pending |
| TECH-07 | Phase 10 | Pending |

**Coverage:**
- v1 requirements: 74 total
- Mapped to phases: 74
- Unmapped: 0

---
*Requirements defined: 2026-02-20*
*Last updated: 2026-02-20 after roadmap creation*
