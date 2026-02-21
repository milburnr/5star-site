---
phase: 10-technical-validation
plan: 03
subsystem: seo
tags: [internal-links, google-indexing-api, link-audit, broken-links, breadcrumbs]

# Dependency graph
requires:
  - phase: 10-technical-validation
    plan: 01
    provides: "Internal link checker script (audit-internal-links.js) and baseline of 54 broken links"
provides:
  - "Zero broken internal links across all 218 HTML pages (14,694 links checked)"
  - "Google Indexing API dry-run confirming 216 URLs ready for submission"
  - "Documented quota exhaustion for next-day resubmission"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns: ["Batch link fix via Node.js script for cross-file href replacement"]

key-files:
  created: []
  modified:
    - app/lubbock-tx-roofing/page.tsx
    - app/odessa-tx-roofing/page.tsx
    - app/midland-tx-roofing/page.tsx
    - app/blog/page.tsx
    - app/roofing-methods-in-amarillo/page.tsx
    - app/bushland-tx-roofing/page.tsx
    - app/claude-tx-roofing/page.tsx
    - app/vega-tx-roofing/page.tsx
    - app/wildorado-tx-roofing/page.tsx
    - app/roof-repair-snyder/page.tsx
    - app/roof-repair-midland/page.tsx
    - app/roof-repair-monahans/page.tsx
    - app/asphalt-flat-roof-repair-in-amarillo/page.tsx
    - app/heavy-rain-damage-roof-repair-in-amarillo/page.tsx
    - app/pvc-roof-repair-in-amarillo/page.tsx
    - app/pvc-roof-replacement-in-amarillo/page.tsx
    - app/pvc-roofing-contractors-in-amarillo/page.tsx
    - app/roof-rot-damage-in-amarillo/page.tsx
    - app/roof-snow-and-ice-damage-in-amarillo/page.tsx
    - app/hail-damage-repair-hereford/page.tsx
    - app/hail-damage-repair-plainview/page.tsx
    - app/flat-roof-repair-midland-texas/page.tsx
    - app/metal-roof-installation-odessa-texas/page.tsx
    - app/articles/page.tsx

key-decisions:
  - "Broken article attraction URLs redirected to /amarillo-texas-roofing/ (city hub) instead of removed, preserving page link equity"
  - "Niche Amarillo breadcrumb intermediate URLs pointed to /services/ as logical parent category"
  - "Google Indexing API quota exhaustion documented as non-blocking per phase constraints"

patterns-established:
  - "Broken link categories: canonical variant mismatches, missing breadcrumb parents, non-existent service-city combos, non-existent article pages"

# Metrics
duration: 7min
completed: 2026-02-21
---

# Phase 10 Plan 03: Internal Link Fix & Google Indexing API Resubmission Summary

**Fixed all 54 broken internal links across 24 source files (4 categories: canonical URL mismatches, breadcrumb parents, missing service-city pages, non-existent articles) and verified 216-URL Indexing API readiness**

## Performance

- **Duration:** 7 min
- **Started:** 2026-02-21T03:29:23Z
- **Completed:** 2026-02-21T03:36:00Z
- **Tasks:** 2
- **Files modified:** 24

## Accomplishments
- Resolved all 54 broken internal links across 37 unique targets in 24 source files
- Internal link audit now passes clean: 14,694 links across 218 pages, zero broken
- All 5 validation scripts pass post-fix (schema, meta, images, alt-text, internal-links)
- Google Indexing API dry-run confirms all 216 URLs ready for submission
- Actual API submission hit daily quota limit (200/day) -- documented for next-day retry

## Task Commits

Each task was committed atomically:

1. **Task 1: Run internal link check and fix all broken links** - `58b2b1b3` (fix)
2. **Task 2: Resubmit all pages to Google Indexing API** - no commit (no files modified; API-only task)

## Files Created/Modified

24 page.tsx files modified to fix broken internal links:

**Canonical URL mismatches (12 fixes in 10 files):**
- `app/lubbock-tx-roofing/page.tsx` - Fixed /midland-texas-roofing/, /odessa-texas-roofing/, /abilene-texas-roofing/
- `app/odessa-tx-roofing/page.tsx` - Fixed /lubbock-texas-roofing/, /midland-texas-roofing/, 3 non-existent /blog/ posts
- `app/midland-tx-roofing/page.tsx` - Fixed /lubbock-texas-roofing/, /odessa-texas-roofing/
- `app/blog/page.tsx` - Fixed /lubbock-texas-roofing/, /midland-texas-roofing/
- `app/flat-roof-repair-midland-texas/page.tsx` - Fixed /midland-texas-roofing/
- `app/metal-roof-installation-odessa-texas/page.tsx` - Fixed /odessa-texas-roofing/

**City hub name mismatches (5 fixes in 1 file):**
- `app/roofing-methods-in-amarillo/page.tsx` - Fixed borger/brownfield/dumas/pampa/plainview -tx- vs -texas- variants

**Amarillo service variant mismatches (13 fixes in 4 files):**
- `app/bushland-tx-roofing/page.tsx` - Fixed /commercial-roofing-amarillo-texas/, /metal-roofing-amarillo-texas/
- `app/claude-tx-roofing/page.tsx` - Fixed 3 -amarillo-texas/ variant links
- `app/vega-tx-roofing/page.tsx` - Fixed 4 -amarillo-texas/ variant links
- `app/wildorado-tx-roofing/page.tsx` - Fixed 3 -amarillo-texas/ variant links

**Non-existent service-city pages (8 fixes in 5 files):**
- `app/roof-repair-snyder/page.tsx` - /agricultural-roofing-snyder/ -> /services/
- `app/roof-repair-midland/page.tsx` - /energy-efficient-roofing-midland/ -> /services/
- `app/roof-repair-monahans/page.tsx` - /energy-efficient-roofing-monahans/ -> /services/
- `app/hail-damage-repair-hereford/page.tsx` - 3 non-existent hereford service links -> hub pages
- `app/hail-damage-repair-plainview/page.tsx` - 3 non-existent plainview service links -> hub pages

**Broken breadcrumb intermediate URLs (7 fixes in 7 files):**
- `app/asphalt-flat-roof-repair-in-amarillo/page.tsx` - Breadcrumb parent -> /services/
- `app/heavy-rain-damage-roof-repair-in-amarillo/page.tsx` - Breadcrumb parent -> /services/
- `app/pvc-roof-repair-in-amarillo/page.tsx` - Breadcrumb parent -> /services/
- `app/pvc-roof-replacement-in-amarillo/page.tsx` - Breadcrumb parent -> /services/
- `app/pvc-roofing-contractors-in-amarillo/page.tsx` - Breadcrumb parent -> /services/
- `app/roof-rot-damage-in-amarillo/page.tsx` - Breadcrumb parent -> /services/
- `app/roof-snow-and-ice-damage-in-amarillo/page.tsx` - Breadcrumb parent -> /services/

**Non-existent article attraction pages (6 fixes in 1 file):**
- `app/articles/page.tsx` - 6 attraction URLs -> /amarillo-texas-roofing/ (city hub)

## Decisions Made
- **Article attraction URLs:** Redirected to /amarillo-texas-roofing/ (Amarillo city hub) rather than removing links entirely. The articles page is an Amarillo-focused content hub, so linking to the Amarillo roofing hub preserves relevance and link equity.
- **Niche Amarillo breadcrumb parents:** Set to /services/ as the logical parent category. These pages (PVC repair, roof rot, snow damage) are specialty services without dedicated hub pages.
- **Non-existent service-city pages:** Hereford/Plainview service links pointed to respective hub pages (/roof-inspections/, /roof-replacement/, /storm-damage-repair/). Snyder/Midland/Monahans specialty service links pointed to /services/.
- **Google Indexing API quota:** Daily limit (200 URLs/day) already consumed by prior run. Documented as non-blocking per phase constraints. User can re-run `node submit-to-indexing-api.js` the following day.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered
- Google Indexing API daily quota (200 publish requests/day) already exhausted from a previous same-day run. All 216 URLs returned 429 "Quota exceeded" errors. Per plan instructions, this is documented as non-blocking. The dry-run confirms all 216 URLs are correct and ready for submission when quota resets.

## User Setup Required
**Google Indexing API resubmission needed.** The daily quota was exhausted. To submit all 216 pages:
```bash
cd sites/5-star-roofing
node submit-to-indexing-api.js
```
Run this command the following day when the daily quota resets.

## Next Phase Readiness
- All 54 broken internal links resolved -- zero broken links remaining
- All 5 validation scripts pass (schema, meta, images, alt-text, internal-links)
- Google Indexing API verified with 216 correct URLs, ready for next-day submission
- Phase 10 technical validation substantially complete (pending 10-02 sitemap/deploy)

---
*Phase: 10-technical-validation*
*Completed: 2026-02-21*
