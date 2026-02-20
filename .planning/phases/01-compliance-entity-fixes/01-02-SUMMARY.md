---
phase: 01-compliance-entity-fixes
plan: 02
subsystem: seo
tags: [schema.org, nap, local-seo, entity-consistency]

# Dependency graph
requires:
  - phase: 01-compliance-entity-fixes/01
    provides: AggregateRating removal (clean schema baseline)
provides:
  - Canonical NAP data across all 246 page.tsx files
  - Standardized schema email, phone, hours, and entity name
  - Reusable standardize-nap.js script for future page additions
affects: [03-meta-titles-og-tags, 04-technical-seo]

# Tech tracking
tech-stack:
  added: []
  patterns: [bulk-regex-replacement-script, nap-standardization]

key-files:
  created:
    - scripts/standardize-nap.js
  modified:
    - app/**/page.tsx (232 files)
    - lib/schema-templates.ts
    - assets/schema/city-schema-template.json

key-decisions:
  - "Blog and Gallery schema 'name' fields kept as-is (describe page entities, not business entity)"
  - "Script targets only schema context patterns to avoid modifying meta titles or text content"

patterns-established:
  - "NAP standardization: all schema uses constants.ts canonical values"
  - "Bulk page modification: scripts/ directory with --dry-run support"

# Metrics
duration: 7min
completed: 2026-02-20
---

# Phase 1 Plan 2: NAP Standardization Summary

**Standardized email, phone, hours, and entity name across 232 page.tsx files and schema templates to match constants.ts canonical NAP values**

## Performance

- **Duration:** 7 min
- **Started:** 2026-02-20T20:56:15Z
- **Completed:** 2026-02-20T21:03:15Z
- **Tasks:** 3
- **Files modified:** 235

## Accomplishments
- Fixed 202 email fields from info@ to admin@5starroofingpros.com
- Fixed 112 phone fields from +1/raw formats to (806) 622-6041
- Fixed 137+1 hours fields from 24/7 (00:00-23:59) and 08:00-18:00 to 09:00-17:00
- Fixed 218 entity name fields removing city/service suffixes
- Added missing email field to schema-templates.ts LocalBusiness generator
- Fixed city-schema-template.json to use plain business name
- Built site successfully with zero NAP inconsistencies in HTML output

## Task Commits

Each task was committed atomically:

1. **Task 1: Write and run NAP standardization script** - `d0d53c37` (feat)
2. **Task 2: Standardize NAP in schema templates and reference files** - `4b20e73a` (fix)
3. **Task 3: Build site and verify NAP consistency in HTML output** - `cbbe9df3` (fix)

## Files Created/Modified
- `scripts/standardize-nap.js` - Bulk NAP standardization script with --dry-run support
- `app/**/page.tsx` (232 files) - Standardized schema email, phone, hours, entity name
- `lib/schema-templates.ts` - Fixed entity name template, added email field
- `assets/schema/city-schema-template.json` - Removed {{CITY_NAME}} suffix from business name

## Decisions Made
- Blog schema name "5 Star Commercial Roofing Blog" and Gallery schema name "5 Star Commercial Roofing Project Gallery" kept as-is -- these describe the page entity (Blog, CollectionPage), not the LocalBusiness entity
- Script designed to only target schema property contexts (e.g., "email":, "telephone":, "name":) to avoid modifying meta titles, OG tags, or visible text content

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed non-standard 08:00-18:00 hours on amarillos-best-roofer page**
- **Found during:** Task 3 (build verification)
- **Issue:** amarillos-best-roofer/page.tsx had "opens": "08:00" / "closes": "18:00" which was not caught by the standardization script (script only targeted 00:00/23:59 patterns)
- **Fix:** Manually corrected to "09:00" / "17:00"
- **Files modified:** app/amarillos-best-roofer/page.tsx
- **Verification:** Rebuild confirmed 294 opens/closes all show 09:00/17:00
- **Committed in:** cbbe9df3 (Task 3 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Minor edge case not anticipated by research. Fixed inline with no scope change.

## Issues Encountered
None beyond the deviation documented above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 1 (Compliance & Entity Fixes) is now complete
- All schema data standardized to canonical NAP values
- Ready for Phase 2 (URL Canonicalization) or Phase 3 (Meta/OG tags)
- Note: GBP business name confirmation still pending (blocker from STATE.md)

---
*Phase: 01-compliance-entity-fixes*
*Completed: 2026-02-20*
