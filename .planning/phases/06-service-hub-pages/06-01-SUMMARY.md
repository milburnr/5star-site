---
phase: 06-service-hub-pages
plan: 01
subsystem: ui
tags: [next.js, hub-and-spoke, faq-schema, service-schema, seo]

# Dependency graph
requires:
  - phase: 05-schema-architecture
    provides: Schema patterns (Service, FAQPage) and BreadcrumbList consistency
provides:
  - Hail damage repair hub page (/hail-damage-repair/) with 16 city spoke links
  - Roof repair hub page (/roof-repair/) with 14 city spoke links
  - FAQPage schema on both hub pages
  - Service schema with areaServed and offerCatalog on both hubs
affects: [06-02, 06-03, 06-04, 07-internal-linking]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Hub page pattern with city variant link grid, FAQ Accordion, and dual JSON-LD schemas
    - Answer-first FAQ format per content-voice.md

key-files:
  created:
    - app/hail-damage-repair/page.tsx
    - app/roof-repair/page.tsx
  modified: []

key-decisions:
  - "Used Accordion component for hub FAQs (matching spoke pattern) instead of div-based FAQs in commercial-roofing reference"
  - "Hub page keywords are broad (no city names) to avoid spoke keyword cannibalization"
  - "R2 images reused from existing spoke pages for hero sections"

patterns-established:
  - "Hub page structure: metadata > schema JSON-LD > breadcrumb > hero > content sections with FadeIn > city link grid > FAQ Accordion > CTA"
  - "City link grid: md:grid-cols-3 lg:grid-cols-4 with hover shadow and brand-gold border"

# Metrics
duration: 7min
completed: 2026-02-21
---

# Phase 6 Plan 1: Hail Damage Repair and Roof Repair Hub Pages Summary

**Two highest-priority service hub pages with 800+ words each, FAQPage + Service schema, and city variant link grids (16 and 14 spokes)**

## Performance

- **Duration:** 7 min
- **Started:** 2026-02-21T00:18:47Z
- **Completed:** 2026-02-21T00:25:23Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments
- Created /hail-damage-repair/ hub page (498 lines) linking to all 16 city spoke pages
- Created /roof-repair/ hub page (507 lines) linking to all 14 city spoke pages
- Both pages include FAQPage schema (7 questions each, zero overlap between hubs)
- Both pages include Service schema with provider, areaServed, and hasOfferCatalog
- Entity name "5 Star Roofing" used correctly throughout (zero "5 Star Commercial" occurrences)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create hail-damage-repair hub page** - `e55378b6` (feat)
2. **Task 2: Create roof-repair hub page** - `8c579a5d` (feat)

## Files Created/Modified
- `app/hail-damage-repair/page.tsx` - Hail damage repair service hub page (498 lines)
- `app/roof-repair/page.tsx` - Roof repair service hub page (507 lines)

## Decisions Made
- Used Accordion component for FAQ sections to match spoke page pattern, diverging from the commercial-roofing reference which uses plain div cards
- Reused R2 images from existing spoke pages (hail-damage-amarillo-16, completed-amarillo-13) rather than introducing new image URLs
- Hub page keywords target broad service terms ("hail damage roof repair west texas", "roof repair services west texas") with no city names to prevent spoke keyword cannibalization

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Initial build failed with ENOENT error for _ssgManifest.js due to stale .next cache. Resolved by deleting .next directory and rebuilding cleanly.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Hub page pattern established and proven; plans 06-02 and 06-03 can follow the same structure
- Both hub pages build successfully and appear in static output
- Spoke pages already reference these hub URLs in breadcrumbs, so broken breadcrumb links are now resolved for these two services

## Self-Check: PASSED

- FOUND: app/hail-damage-repair/page.tsx
- FOUND: app/roof-repair/page.tsx
- FOUND: commit e55378b6
- FOUND: commit 8c579a5d

---
*Phase: 06-service-hub-pages*
*Completed: 2026-02-21*
