---
phase: 03-meta-titles
plan: 02
subsystem: seo
tags: [meta-descriptions, seo, node-scripts, batch-fix]

# Dependency graph
requires:
  - phase: 03-01
    provides: "Standardized meta titles across all 202 pages"
  - phase: 01-02
    provides: "Entity name guidelines and NAP standardization pattern"
provides:
  - "All 202 pages have meta descriptions under 160 chars"
  - "All descriptions start uppercase and contain CTAs"
  - "Reusable fix-meta-descriptions.js script with dry-run/report modes"
affects: [03-meta-titles, 06-content-depth]

# Tech tracking
tech-stack:
  added: []
  patterns: ["Batch description fix with sentence-aware trimming and smart CTA fitting"]

key-files:
  created:
    - scripts/fix-meta-descriptions.js
  modified:
    - app/**/page.tsx (75 files)

key-decisions:
  - "Smart CTA fitting: try multiple CTA formats before trimming description to make room"
  - "Sentence/clause-aware trimming: cut at sentence boundaries first, fall back to comma-based clause cuts"
  - "Duplicate descriptions (3x roof repair, 2x replacement Amarillo variants) left as-is since they are different service pages sharing legitimately similar descriptions"

patterns-established:
  - "Description fix script: same pattern as fix-meta-titles.js and standardize-nap.js for future metadata batch operations"

# Metrics
duration: 6min
completed: 2026-02-20
---

# Phase 3 Plan 2: Meta Description Fixes Summary

**Batch-fixed 75 page.tsx meta descriptions: 34 capitalized, 13 trimmed under 160, 17 CTAs added, 1 anti-pattern rewritten, 1 padded, 63 quotes normalized**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-20T22:57:40Z
- **Completed:** 2026-02-20T23:04:00Z
- **Tasks:** 2
- **Files modified:** 76 (1 script + 75 page.tsx)

## Accomplishments
- Zero meta descriptions over 160 characters (was 14)
- Zero lowercase-start descriptions (was 34)
- Zero descriptions missing CTAs (was 18)
- Zero "Looking for..." anti-patterns (was 1)
- All single-quoted descriptions normalized to double quotes (63 files)
- 4 openGraph descriptions synced with updated main descriptions
- Build passes with zero errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Create fix-meta-descriptions.js and dry-run** - `360b66bd` (feat)
2. **Task 2: Apply fixes and verify build** - `002b110b` (fix)

## Files Created/Modified
- `scripts/fix-meta-descriptions.js` - Batch description fix script with --dry-run, --report, and apply modes
- `app/**/page.tsx` (75 files) - Meta descriptions fixed: capitalization, trimming, CTA addition, quote normalization

## Decisions Made
- Smart CTA fitting tries 4 CTA variants (`. Call`, `. Free estimate`, `-- call`, `. (phone)`) before trimming description to make room for shortest option
- Sentence-aware trimming cuts at sentence boundaries first, falls back to clause-level (comma) cuts when sentence-based result is too short (<70% of maxLen)
- Duplicate descriptions for Amarillo repair variants left as-is (different routes sharing legitimately similar service descriptions)
- The amarillos-best-roofer "Looking for..." rewrite uses hardcoded replacement per content-voice.md guidelines

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed CTA addition trimming too aggressively**
- **Found during:** Task 1 (dry-run review)
- **Issue:** When adding CTA to descriptions near 160 chars, sentence-based trimming was cutting to first sentence only (e.g., articles page dropped from 153 to 85 chars)
- **Fix:** Changed trimDescription to use 70% threshold for clause fallback and try multiple CTA length variants
- **Files modified:** scripts/fix-meta-descriptions.js
- **Verification:** Dry-run shows reasonable AFTER lengths for all pages
- **Committed in:** 360b66bd (Task 1 commit)

**2. [Rule 1 - Bug] Fixed trailing comma before CTA**
- **Found during:** Task 1 (dry-run review)
- **Issue:** When trimming at comma boundary and appending CTA, result was "...hail,. Call" (comma before period)
- **Fix:** Changed cleanup regex from `/\.?\s*$/` to `/[.,;:\s]+$/` to strip trailing punctuation
- **Files modified:** scripts/fix-meta-descriptions.js
- **Verification:** All AFTER descriptions read naturally
- **Committed in:** 360b66bd (Task 1 commit)

---

**Total deviations:** 2 auto-fixed (2 bugs in script logic)
**Impact on plan:** Both fixes necessary for correct output quality. No scope creep.

## Issues Encountered
- Accidental script execution during debugging (Node.js `require()` runs top-level code) modified 75 files before intended. Restored with `git checkout -- app/` and re-ran properly. No data loss.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All meta descriptions standardized, ready for Phase 3 Plan 3 (verification and keyword map)
- Build passing with all 202 pages
- Report mode available for ongoing audits: `node scripts/fix-meta-descriptions.js --report`

---
*Phase: 03-meta-titles*
*Completed: 2026-02-20*
