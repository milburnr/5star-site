---
phase: 01-compliance-entity-fixes
plan: 01
subsystem: seo
tags: [schema.org, structured-data, google-compliance, aggregaterating]

# Dependency graph
requires: []
provides:
  - "All 246 page.tsx files free of fabricated AggregateRating schema"
  - "Schema template files (lib/schema-templates.ts, brand-schema.json, city-schema-template.json) cleaned"
  - "Reusable bulk removal script at scripts/remove-aggregate-rating.js"
affects: [02-entity-standardization, schema-validation, deployment]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Regex-based bulk schema removal with dry-run preview"

key-files:
  created:
    - scripts/remove-aggregate-rating.js
  modified:
    - lib/schema-templates.ts
    - assets/schema/brand-schema.json
    - assets/schema/city-schema-template.json
    - fix-seo-gaps.js
    - 212 page.tsx files under app/

key-decisions:
  - "Removed AggregateRating from reviews page too (claims 500 reviews, only ~12 testimonials visible)"
  - "Also cleaned fix-seo-gaps.js generator script to prevent recontamination on future page generation"

patterns-established:
  - "Schema compliance: no rating markup without corresponding visible user-generated reviews"

# Metrics
duration: 8min
completed: 2026-02-20
---

# Phase 1 Plan 1: AggregateRating Removal Summary

**Removed fabricated AggregateRating schema from 212 page.tsx files, 3 schema template/reference files, and 1 generator script -- eliminating Google structured data policy violation site-wide**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-20T20:46:22Z
- **Completed:** 2026-02-20T20:54:17Z
- **Tasks:** 3
- **Files modified:** 216

## Accomplishments
- Removed AggregateRating from all 212 page.tsx files (397 total occurrences) using bulk regex script
- Cleaned schema templates (lib/schema-templates.ts, brand-schema.json, city-schema-template.json) to prevent recontamination
- Full site build succeeds with all 268 pages -- zero AggregateRating in HTML output, all JSON-LD valid, LocalBusiness schema intact on 442 output files

## Task Commits

Each task was committed atomically:

1. **Task 1: Write and run AggregateRating removal script** - `bb709b56` (feat)
2. **Task 2: Remove AggregateRating from schema templates** - `bab1ad40` (fix)
3. **Task 3: Build site and verify** - verification only, no commit needed (build output is gitignored)

## Files Created/Modified
- `scripts/remove-aggregate-rating.js` - Bulk AggregateRating removal with --dry-run support
- `lib/schema-templates.ts` - generateLocalBusinessSchema() cleaned of aggregateRating block
- `assets/schema/brand-schema.json` - Brand schema reference without AggregateRating
- `assets/schema/city-schema-template.json` - City template without AggregateRating
- `fix-seo-gaps.js` - Page generator template cleaned (deviation)
- 212 `app/**/page.tsx` files - AggregateRating blocks removed

## Decisions Made
- Removed AggregateRating from reviews page despite it being the "reviews" page -- the claimed 500 reviews do not correspond to the ~12 visible testimonials, so it is still fabricated
- Also cleaned fix-seo-gaps.js to prevent AggregateRating from being re-injected when generating new pages

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Cleaned fix-seo-gaps.js generator script**
- **Found during:** Task 2 (schema template cleanup)
- **Issue:** fix-seo-gaps.js contains a page template that injects AggregateRating into newly generated pages -- leaving it would recontaminate the site
- **Fix:** Removed the aggregateRating line from the template string in fix-seo-gaps.js
- **Files modified:** fix-seo-gaps.js
- **Verification:** grep confirms zero non-script references to AggregateRating
- **Committed in:** bab1ad40 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 missing critical)
**Impact on plan:** Essential to prevent recontamination. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- AggregateRating fully eliminated -- ready for entity standardization (Plan 02)
- Site builds cleanly, all schema intact except removed AggregateRating
- No blockers for next plan

---
*Phase: 01-compliance-entity-fixes*
*Completed: 2026-02-20*

## Self-Check: PASSED

- All key files exist on disk
- Both task commits verified in git log (bb709b56, bab1ad40)
- Zero AggregateRating in source (verified) and build output (verified)
