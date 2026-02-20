---
phase: 03-meta-titles
plan: 01
subsystem: seo
tags: [meta-titles, brand-standardization, next-js-metadata, batch-script]

requires:
  - phase: 01-compliance-entity-fixes
    provides: Canonical entity name "5 Star Roofing" established in entity-guidelines.md
  - phase: 02-url-canonicalization
    provides: 202 canonical page.tsx files (duplicates removed)
provides:
  - All 202 page.tsx files with standardized meta titles containing "5 Star Roofing"
  - Reusable fix-meta-titles.js script with --dry-run and --report modes
  - Homepage META-06 compliant title with residential focus
affects: [03-02-meta-descriptions, 03-03-verification, phase-10-final-qa]

tech-stack:
  added: []
  patterns: [metadata-block-isolation-regex, depth-based-title-extraction, quote-aware-replacement]

key-files:
  created:
    - scripts/fix-meta-titles.js
  modified:
    - app/**/page.tsx (111 files)

key-decisions:
  - "Multi-pipe titles consolidated to single brand suffix rather than preserving middle segments"
  - "Apostrophe-containing titles handled via quote-aware extraction (double-quote first, single-quote fallback)"
  - "Titles shortened by removing descriptors and 'in' prepositions before abbreviating service names"
  - "Schema JSON-LD 'name' fields intentionally left as-is (uses constants.ts value, separate concern)"

patterns-established:
  - "Title format: {Service} {City} TX | 5 Star Roofing"
  - "Metadata-only transforms: isolate export const metadata block, never touch JSX/schema"

duration: 6min
completed: 2026-02-20
---

# Phase 3 Plan 1: Meta Title Standardization Summary

**Batch-standardized 111 meta titles across 202 pages to use canonical "5 Star Roofing" brand, fix TXService/pipe formatting, enforce 60-char limit, and set homepage residential focus**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-20T22:48:35Z
- **Completed:** 2026-02-20T22:55:06Z
- **Tasks:** 2
- **Files modified:** 112 (111 page.tsx + 1 script)

## Accomplishments
- Created reusable fix-meta-titles.js script with --dry-run, --report, and apply modes
- Fixed 111 page.tsx files: 9 TXService typos, 16 missing pipe spaces, 2 truncated titles, 35 "Commercial" removals, 23 bare "5 Star" expansions, 26 brand additions, 26 multi-pipe consolidations, 18 over-60 shortenings
- Set homepage to META-06 title: "Amarillo Residential Roofing & Hail Repair | 5 Star Roofing"
- Synced 7 openGraph titles and 1 twitter title to match
- Post-fix report: zero issues across all 202 pages (zero missing brand, zero over 60 chars, zero TXService, zero missing spaces, zero duplicates)
- Build succeeds, HTML output confirmed matching source titles

## Task Commits

Each task was committed atomically:

1. **Task 1: Create fix-meta-titles.js script and run in dry-run mode** - `6800ee29` (feat)
2. **Task 2: Apply title fixes and verify build** - `3ce096a4` (feat)

## Files Created/Modified
- `scripts/fix-meta-titles.js` - Batch meta title standardization with dry-run/report/apply modes
- `app/page.tsx` - Homepage META-06 title + OG/twitter sync
- `app/**/page.tsx` (110 more) - Standardized meta titles with brand suffix

## Decisions Made
- Multi-pipe titles (e.g., "Service | Free Inspection | Brand") consolidated to keep first segment + brand, removing middle descriptors -- these were generic and added no SEO value
- Apostrophe in "Amarillo's Best Roofer" required quote-aware regex (try double-quote match first, then single-quote fallback) -- initial regex `[^'"]*` stopped at apostrophe
- Schema JSON-LD `"name"` fields left as "5 Star Commercial Roofing" intentionally -- they reference constants.ts which is a separate standardization concern flagged in research
- Titles shortened by progressive strategy: remove "in", remove commas, remove descriptors, abbreviate "Roofing" to "Roof", remove years, then drop middle segments

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Apostrophe-aware title extraction**
- **Found during:** Task 2 (initial apply + report)
- **Issue:** Report showed /amarillos-best-roofer/ as "(no title)" -- regex `[^'"]*` stopped at apostrophe in double-quoted "Amarillo's Best Roofer"
- **Fix:** Changed extractTitle, replaceTitle, replaceOGTitle, replaceTwitterTitle to use separate double-quote and single-quote matching instead of combined `[^'"]*` pattern
- **Files modified:** scripts/fix-meta-titles.js
- **Verification:** Re-run captured the title correctly, applied fix, report shows zero issues
- **Committed in:** 3ce096a4 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Essential fix for correctness. Without it, 1 page would retain incorrect title.

## Issues Encountered
None beyond the apostrophe regex issue documented above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 202 meta titles standardized, ready for Plan 03-02 (meta description fixes)
- fix-meta-titles.js --report can serve as ongoing verification tool
- Build confirmed passing with all changes

---
*Phase: 03-meta-titles*
*Completed: 2026-02-20*
