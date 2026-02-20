---
phase: 04-homepage-overhaul
plan: 01
subsystem: seo
tags: [homepage, hero, metadata, entity-name, amarillo-positioning, residential-first]

requires:
  - phase: 01-compliance-entity-fixes
    provides: entity name standardization pattern
  - phase: 03-meta-titles
    provides: title format with "5 Star Roofing" brand suffix
provides:
  - Amarillo-first homepage hero section (H1, subtitle, paragraph)
  - Amarillo-first meta description, OG description, Twitter description
  - Entity name "5 Star Roofing" in all schema and alt text on homepage
  - Below-the-fold heading demotions from West Texas to Amarillo/Texas Panhandle
affects: [04-02, homepage, schema, entity-consistency]

tech-stack:
  added: []
  patterns: [amarillo-first-positioning, west-texas-factual-only]

key-files:
  created: []
  modified: [app/page.tsx]

key-decisions:
  - "West Texas kept in factual contexts (hail stats H2, weather references, FAQ answers, EPDM temperature) but removed from all identity/positioning headings"
  - "Hero paragraph includes inline link to /amarillo-texas-roofing/ for internal linking value"
  - "Service areas intro reframed: Amarillo primary, Midland/Odessa as additional coverage"

patterns-established:
  - "West Texas identity rule: never use West Texas as primary identity framing in H1/H2; only in factual weather/geographic body text"
  - "Entity name: 5 Star Roofing in all public-facing contexts including alt text and schema"

duration: 3min
completed: 2026-02-20
---

# Phase 4 Plan 1: Homepage Hero & Metadata Summary

**Amarillo-first hero rewrite with residential positioning, entity name fix across 12 instances, and West Texas demotion in 4 section headings**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-20T23:24:56Z
- **Completed:** 2026-02-20T23:27:53Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- H1 changed from "West Texas Hail Damage Roofing Experts" to "Amarillo Roofing & Hail Damage Repair Experts"
- Subtitle changed from "Amarillo - Midland - Odessa" to "Amarillo | Canyon | Texas Panhandle" (no Midland/Odessa above fold)
- All 3 meta descriptions rewritten Amarillo-first with residential framing
- All 12 instances of "5 Star Commercial Roofing" replaced with "5 Star Roofing" (alt text + schema)
- 4 section H2 headings demoted from "West Texas" to "Amarillo" / "Texas Panhandle"
- Build verified with 0 errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite hero section and metadata for Amarillo-first positioning** - `2b8d2501` (feat)
2. **Task 2: Fix entity name and below-the-fold West Texas demotions** - `1aa83bc4` (feat)

## Files Created/Modified
- `app/page.tsx` - Homepage with Amarillo-first hero, updated metadata, fixed entity name, demoted West Texas headings

## Decisions Made
- West Texas references preserved in factual contexts: hail statistics H2 ("Why West Texas Needs Impact-Resistant Roofing"), weather body text, FAQ questions/answers, EPDM temperature reference, alt text geographic descriptions
- Hero paragraph uses `<a>` link to /amarillo-texas-roofing/ wrapping "Amarillo" for internal linking value (satisfies HOME-04 partially)
- Service areas intro reworded from "plus Midland, Odessa, and surrounding West Texas communities" to "with additional coverage in Midland, Odessa, and surrounding communities"
- Quality Workmanship changed from "across West Texas" to "across Amarillo and the Texas Panhandle"

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Homepage hero and metadata complete, ready for 04-02 (below-fold content restructuring if applicable)
- All success criteria verified: H1 Amarillo, no West Texas in H1, no Midland/Odessa above fold, zero "5 Star Commercial Roofing", build passes

---
*Phase: 04-homepage-overhaul*
*Completed: 2026-02-20*

## Self-Check: PASSED
- app/page.tsx: FOUND
- 04-01-SUMMARY.md: FOUND
- Commit 2b8d2501: FOUND
- Commit 1aa83bc4: FOUND
