# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-20)

**Core value:** Get the site ranking top 10 and generating 100+ organic clicks/month with real phone calls and leads
**Current focus:** Phase 11 - Ahrefs Crawl Fixes

## Current Position

Phase: 11 (Ahrefs Crawl Fixes)
Plan: 3 of 3 complete
Status: Phase 11 Complete
Last activity: 2026-02-25 — Completed 11-03 (Final verification, audit, sitemap regeneration)

Progress: [▓▓▓▓▓▓▓▓▓▓] 100%

## Performance Metrics

**Velocity:**
- Total plans completed: 33
- Average duration: 5.0min
- Total execution time: 2.96 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 01-compliance-entity-fixes | 2 | 15min | 7.5min |
| 02-url-canonicalization | 3 | 10min | 3.3min |
| 03-meta-titles | 3 | 17min | 5.7min |
| 04-homepage-overhaul | 2 | 5min | 2.5min |
| 05-schema-architecture | 4 | 17min | 4.3min |
| 06-service-hub-pages | 4 | 22min | 5.5min |
| 07-internal-linking | 3 | 13min | 4.3min |
| 08-content-enrichment | 5 | 64min | 12.8min |

**Recent Trend:**
- Last 5 plans: 10min, 10min, 18min, 15min, 6min
- Trend: gap closure plans faster than initial content plans

*Updated after each plan completion*
| Phase 08 P05 | 6min | 2 tasks | 11 files |
| Phase 09 P01 | 5min | 2 tasks | 190 files |
| Phase 09 P02 | 8min | 2 tasks | 14 files |
| Phase 09 P03 | 3min | 1 task | 9 files |
| Phase 10 P01 | 6min | 2 tasks | 4 files |
| Phase 10 P02 | 2min | 2 tasks | 2 files |
| Phase 10 P03 | 7min | 2 tasks | 24 files |
| Phase 11 P02 | 5min | 2 tasks | 8 files |
| Phase 11 P01 | 8min | 3 tasks | 217 files |
| Phase 11 P03 | 4min | 3 tasks | 2 files |

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- [Roadmap]: Compliance fixes (AggregateRating removal, entity standardization) are phase 1 — non-negotiable ordering per research
- [Roadmap]: URL canonicalization before any content work — improving redirected pages is wasted effort
- [Roadmap]: TECH requirements assigned to Phase 10 as final validation gate, though build verification happens informally every phase
- [01-01]: Removed AggregateRating from reviews page too -- 500 claimed reviews vs ~12 visible testimonials is still fabricated
- [01-01]: Cleaned fix-seo-gaps.js generator to prevent AggregateRating recontamination on future page creation
- [01-02]: Blog/Gallery schema name fields kept as-is (describe page entities, not business entity)
- [01-02]: Script targets only schema property contexts to avoid modifying meta titles or text content
- [02-01]: All redirect targets use suffix-free /{service}-{city}/ pattern matching InternalLinks component
- [02-01]: Variant page.tsx files updated in place (not deleted yet -- deletion is plan 02-02)
- [02-02]: All 36 variant directories deleted after redirects confirmed working
- [02-02]: Sitemap regenerated from out/ post-build to guarantee only built pages appear
- [02-03]: Internal links updated to canonical targets before directory deletion to prevent PageRank loss through 301 chains
- [02-03]: Duplicate title audit confirmed false positives only (layout default + openGraph within same page)
- [Quality]: DESIGN-QUALITY-STANDARDS.md integrated into ROADMAP.md — 6-check verification loop, brand refs, anti-generic patterns, component reuse added to all phases
- [Quality]: Brand assets created: .planning/brand/entity-guidelines.md, content-voice.md, keyword-map.md
- [03-01]: Multi-pipe titles consolidated to first segment + brand suffix (middle segments like "Free Inspection" removed)
- [03-01]: Schema JSON-LD "name" fields intentionally left as "5 Star Commercial Roofing" (uses constants.ts, separate concern)
- [03-01]: Title format standardized to "{Service} {City} TX | 5 Star Roofing" across all service-city pages
- [03-02]: Smart CTA fitting tries multiple CTA variants before trimming description to make room
- [03-02]: Sentence/clause-aware trimming with 70% threshold fallback to comma-based cuts
- [03-02]: Duplicate descriptions for Amarillo repair variants left as-is (legitimately similar services)
- [03-03]: Keyword map derives primary keywords from title: strip brand suffix + TX suffix + lowercase
- [03-03]: Generic duplicate descriptions replaced with service-specific copy per page's actual topic
- [03-03]: audit-meta.js serves as ongoing Phase 3 quality gate for future phases
- [04-01]: West Texas kept in factual contexts (hail stats, weather, FAQ answers) but removed from all identity/positioning headings
- [04-01]: Hero paragraph includes inline link to /amarillo-texas-roofing/ for internal linking
- [04-01]: Service areas intro reframed: Amarillo primary, Midland/Odessa as "additional coverage"
- [04-02]: Also Serving section uses existing CSS classes with FadeIn wrapper, placed between service areas and FAQ
- [04-02]: Services hub link added inline in intro paragraph, not as standalone CTA button
- [05-01]: Homepage standalone RoofingContractor converted to array form for consistency with all other pages
- [05-01]: About page Organization @type left untouched — only LocalBusiness and standalone RoofingContractor targeted
- [05-03]: 16 pages importing AccordionTrigger without JSX usage correctly skipped (no FAQ content)
- [05-03]: 4 LocalBusiness pages with non-array @type noted for 05-04 scope
- [05-03]: Most FAQ/Service gaps were already fixed by 05-01 -- this plan verified and closed remaining gaps
- [05-02]: Reused existing sameAs URLs (Facebook, Google Maps CID) from LocalBusiness for WebSite schema
- [05-02]: Person name set to "Owner" placeholder -- about page content has no specific owner name
- [05-04]: Service-city page detection uses positive matching (known service prefixes) to avoid false positives on city hub and blog pages
- [05-04]: 404 page excluded from BreadcrumbList warning -- no meaningful breadcrumb path for error pages
- [06-01]: Used Accordion component for hub FAQs (matching spoke pattern) instead of div-based FAQs in commercial-roofing reference
- [06-01]: Hub page keywords are broad (no city names) to avoid spoke keyword cannibalization
- [06-01]: R2 images reused from existing spoke pages for hero sections
- [06-02]: Each hub's FAQ questions strictly non-overlapping: replacement=cost/materials/warranties, storm=emergency/insurance/prevention, metal=durability/noise/styles
- [06-02]: Added Storm Season regional section to storm-damage-repair for geographic specificity (Panhandle, Permian Basin, South Plains)
- [06-03]: Hub pages use inline city array + map for link grid instead of importing from constants
- [06-03]: TPO and asphalt-shingle hubs include hasOfferCatalog in Service schema for sub-service visibility
- [06-03]: TPO page includes comparison table (TPO vs EPDM vs PVC vs BUR) for featured snippet targeting
- [06-04]: Hub keywords use "west texas" or "texas" region qualifiers to avoid cannibalization with city-specific spoke keywords
- [06-04]: Meta descriptions trimmed to 160 chars max by removing redundant phrases while preserving CTA phone number
- [07-01]: 5 cities without hub pages (levelland, big-spring, snyder, monahans, andrews) get no hubUrl -- deferred to plan 07-02
- [07-01]: City hub link conditionally rendered via hubUrl existence check
- [Phase 07-02]: City hub pages use inline services array + map for spoke grid (consistent with Phase 6 hub pattern)
- [Phase 07-02]: New city hubs use -tx-roofing suffix (matching Midland, Odessa, Lubbock Permian Basin city pattern)
- [Phase 07-02]: Childress and Dalhart still link to /contact/ on service-areas (no hub pages or spoke pages exist)
- [Phase 07-03]: Two pages (residential-roofing-lubbock/midland) had non-standard CTA gradients -- fixed manually
- [Phase 07-03]: Hereford/Plainview hail-damage spokes accepted without InternalLinks (no cityData entry)
- [Phase 07-03]: 8 blog/niche orphan pages and 7 broken breadcrumbs documented as pre-existing, not Phase 7 scope
- [Phase 08-03]: Three-pass batch H2 conversion (Node.js single-line, Node.js multiline, Python comprehensive) for 826+ H2s
- [Phase 08-03]: FAQ/CTA/utility H2s excluded from answer-first conversion (structural, not SEO content)
- [Phase 08-03]: PVC membrane mentions added to roof-repair and roof-replacement hubs for CONT-06 full roofing types coverage
- [Phase 08-03]: Rich content elements use existing CSS classes only (grid, shadow, brand-gold) per content-only constraint
- [Phase 08-01]: Used faqItems array + .map() pattern for 5 thin cities to guarantee schema-content match (single source of truth)
- [Phase 08-01]: Hereford uses static AccordionItems (matching Phase 6 hub patterns), 5 thin cities use mapped faqItems array
- [Phase 08-01]: Removed "Since 2010" from Snyder subtitle -- unverifiable founding claim
- [Phase 08-02]: 6 FAQ items per page (consistent count), city-specific content referencing local geography/economy/weather
- [Phase 08-02]: Node.js batch scripts for efficient 14-page processing; CRLF line ending handling required for 4 asphalt-shingle pages
- [Phase 08-04]: FAQ duplicates (21 question-answer pairs across city variants) documented as content quality issue, not cannibalization -- each page targets unique primary keyword
- [Phase 08-04]: Hub covers broad process (insurance steps, severity guide, storm types); spokes cover city-specific angles only
- [Phase 08-04]: 21 identical FAQ answers flagged for future Phase 9/10 city-localization improvement
- [Phase 08-05]: Spoke pages use faqItems.map() for both Accordion rendering and FAQPage schema (single source of truth)
- [Phase 08-05]: City hubs keep existing div/h3 FAQ format; only FAQPage schema added to match
- [Phase 09-01]: Logo kept local (/logo.png) since R2 5star-logo.png returns 404 -- small static asset allowlisted in audit
- [Phase 09-01]: Schema image default uses completed-amarillo-4-1280w.jpg for all pages (per-city images don't exist on R2)
- [Phase 09-01]: 3 pre-existing broken R2 URLs fixed (commercial-amarillo-14/15, commercial-pampa-8 all 404)
- [Phase 09-02]: Gallery captions enriched since they serve as alt text via alt={img.caption}
- [Phase 09-02]: City hub alt text rewritten to describe actual image content, not just service-for-city template
- [Phase 09-02]: Audit script uses critical/warning severity -- missing/generic/duplicate are FAIL, short/long are WARN
- [Phase 09-03]: 3 plan image assignments substituted to avoid hero duplication (hail-damage, metal) and 404 (commercial-amarillo-14)
- [Phase 09-03]: Inline image pattern: my-8 rounded-lg overflow-hidden shadow-lg wrapper, h-64 object-cover, lazy loading
- [Phase 10-01]: LHCI performance set to warn (not error) -- hub pages with 100+ links score 86-92 locally, spoke pages and homepage hit 95+
- [Phase 10-01]: Meta CTA fix: added phone number CTA to metal-roofing and storm-damage-repair hub descriptions
- [Phase 10-02]: Homepage was missing from sitemap -- root page.tsx not detected by directory walker, fixed
- [Phase 10-02]: Service hub detection uses explicit Set; city hub uses regex; spoke uses prefix array with startsWith
- [Phase 10-03]: Broken article attraction URLs redirected to /amarillo-texas-roofing/ (city hub) instead of removed
- [Phase 10-03]: Niche Amarillo breadcrumb intermediate URLs pointed to /services/ as logical parent category
- [Phase 10-03]: Google Indexing API quota exhaustion documented as non-blocking per phase constraints
- [Phase 11]: Links added as inline contextual anchors within existing paragraphs, not as link dumps
- [Phase 11]: Each orphan gets exactly 2 incoming links from contextually relevant hub pages
- [Phase 11]: Next.js page-level openGraph fully overrides layout defaults (no deep merge) -- all 7 pre-existing OG pages needed images/url/siteName added manually
- [11-03]: Audit script treats meta description length and missing LocalBusiness on about/blog as warnings -- pre-existing conditions outside Phase 11 scope
- [11-03]: Orphan page regex handles multi-segment paths (/blog/slug/) not just single-segment (/slug/)

### Pending Todos

- (none currently)

### Blockers/Concerns

- GBP authoritative business name needs confirmation before Phase 1 entity standardization
- No live GSC data available — baseline export should happen before Phase 1 deploys
- R2 image baseline audit should run before any changes to catch pre-existing broken URLs

## Session Continuity

Last session: 2026-02-25
Stopped at: Completed 11-03-PLAN.md (Phase 11 complete - all Ahrefs crawl fixes verified)
Resume file: None
