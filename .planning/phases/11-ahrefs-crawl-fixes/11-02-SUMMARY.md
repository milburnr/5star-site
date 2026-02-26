---
phase: 11-ahrefs-crawl-fixes
plan: 02
subsystem: seo
tags: [internal-linking, orphan-pages, ahrefs]

requires:
  - phase: 10-technical-validation
    provides: validated build pipeline and internal link structure
provides:
  - zero orphan pages in built HTML output
  - 8 former orphan pages each have 2+ incoming internal links
affects: [11-ahrefs-crawl-fixes]

tech-stack:
  added: []
  patterns: [inline contextual links in existing content paragraphs]

key-files:
  created: []
  modified:
    - app/amarillo-texas-roofing/page.tsx
    - app/residential-roofing/page.tsx
    - app/roof-repair/page.tsx
    - app/roof-replacement/page.tsx
    - app/storm-damage-repair/page.tsx
    - app/services/page.tsx
    - app/asphalt-shingle-roofing/page.tsx
    - app/page.tsx

key-decisions:
  - "Links added as inline contextual anchors within existing paragraphs, not as link dumps"
  - "Each orphan gets exactly 2 incoming links from the most contextually relevant hub pages"

patterns-established:
  - "Orphan link pattern: add inline <a> tags within related content paragraphs on hub/city pages"

requirements-completed: []

duration: 5min
completed: 2026-02-25
---

# Phase 11 Plan 02: Fix Orphan Pages Summary

**Eliminated all 8 orphan pages by adding 16 contextual internal links from hub and city pages**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-26T02:37:43Z
- **Completed:** 2026-02-26T02:43:41Z
- **Tasks:** 2
- **Files modified:** 8

## Accomplishments
- All 8 orphan pages now have 2+ incoming internal links from contextually relevant pages
- Build succeeds with zero errors (268 pages)
- Orphan audit on built HTML returns 0 non-404 orphan pages
- Links are naturally integrated into existing content (not link dumps)

## Task Commits

1. **Task 1: Add links to orphan pages** - `48cae223` (feat)
2. **Task 2: Build and verify** - verification only, no commit needed

## Files Created/Modified
- `app/amarillo-texas-roofing/page.tsx` - Added links to amarillo-homes-roofing-services, amarillos-best-roofer, roofing-methods-in-amarillo, roof-snow-and-ice-damage, roof-rot-damage
- `app/residential-roofing/page.tsx` - Added links to amarillo-homes-roofing-services, budgeting-for-roof-replacement-expenses
- `app/roof-repair/page.tsx` - Added links to asphalt-flat-roof-repair-in-amarillo, heavy-rain-damage-roof-repair, roof-rot-damage
- `app/roof-replacement/page.tsx` - Added link to budgeting-for-roof-replacement-expenses
- `app/storm-damage-repair/page.tsx` - Added links to heavy-rain-damage-roof-repair, roof-snow-and-ice-damage
- `app/services/page.tsx` - Added link to roofing-methods-in-amarillo in service directory
- `app/asphalt-shingle-roofing/page.tsx` - Added link to asphalt-flat-roof-repair-in-amarillo
- `app/page.tsx` - Added link to amarillos-best-roofer

## Orphan Page Resolution Map

| Orphan Page | Source 1 | Source 2 |
|---|---|---|
| /amarillo-homes-roofing-services/ | amarillo-texas-roofing | residential-roofing |
| /amarillos-best-roofer/ | amarillo-texas-roofing | homepage |
| /asphalt-flat-roof-repair-in-amarillo/ | roof-repair | asphalt-shingle-roofing |
| /budgeting-for-roof-replacement-expenses/ | roof-replacement | residential-roofing |
| /heavy-rain-damage-roof-repair-in-amarillo/ | storm-damage-repair | roof-repair |
| /roof-rot-damage-in-amarillo/ | roof-repair | amarillo-texas-roofing |
| /roof-snow-and-ice-damage-in-amarillo/ | storm-damage-repair | amarillo-texas-roofing |
| /roofing-methods-in-amarillo/ | services | amarillo-texas-roofing |

## Decisions Made
- Links added as inline contextual anchors within existing paragraphs rather than separate link sections
- Each orphan gets exactly 2 incoming links from the most contextually relevant hub pages
- Link anchor text is descriptive and natural (e.g., "roofing services for Amarillo homes" not "click here")

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- The 11-01 plan (Open Graph) auto-committed changes to amarillo-texas-roofing and residential-roofing during the linter pass, so those files appeared as already committed. Verified the orphan link edits were present in HEAD and proceeded with remaining files.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All orphan pages resolved
- Ready for 11-03 plan (remaining Ahrefs crawl fixes)

---
*Phase: 11-ahrefs-crawl-fixes*
*Completed: 2026-02-25*
