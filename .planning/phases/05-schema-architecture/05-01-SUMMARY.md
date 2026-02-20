---
phase: 05-schema-architecture
plan: 01
subsystem: seo
tags: [schema.org, json-ld, schema-dts, RoofingContractor, LocalBusiness]

requires:
  - phase: 01-compliance-entity-fixes
    provides: "Entity name standardization decisions and blog/gallery exceptions"
provides:
  - "All 351 LocalBusiness schemas upgraded to ['LocalBusiness', 'RoofingContractor'] @type array"
  - "368 schema name fields corrected to canonical '5 Star Roofing'"
  - "schema-dts dev dependency for type-safe schema authoring"
  - "schema-templates.ts generates correct @type and entity name"
affects: [05-schema-architecture, seo-validation]

tech-stack:
  added: [schema-dts]
  patterns: ["Multi-type @type arrays for schema specificity"]

key-files:
  created:
    - scripts/upgrade-schema.js
  modified:
    - lib/schema-templates.ts
    - package.json
    - "app/**/page.tsx (202 files)"

key-decisions:
  - "Standalone RoofingContractor on homepage converted to array form for consistency"
  - "All 368 'name': '5 Star Commercial Roofing' replaced including about page schema (Organization type untouched for @type)"

patterns-established:
  - "Schema @type uses array form ['LocalBusiness', 'RoofingContractor'] on all service/location pages"
  - "Entity name in schema is always '5 Star Roofing' (never '5 Star Commercial Roofing')"

duration: 3min
completed: 2026-02-20
---

# Phase 5 Plan 1: LocalBusiness Schema Type and Entity Name Summary

**Upgraded 351 schemas to ["LocalBusiness", "RoofingContractor"] @type array and fixed 368 entity name fields to canonical "5 Star Roofing" with schema-dts installed**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-20T23:47:59Z
- **Completed:** 2026-02-20T23:50:54Z
- **Tasks:** 2
- **Files modified:** 202 (199 page.tsx + lib/schema-templates.ts + package.json + script)

## Accomplishments
- Installed schema-dts as dev dependency for future type-safe schema development
- Updated lib/schema-templates.ts generator to produce correct @type array and entity name
- Mass-upgraded 351 @type values across 202 page files (174 LocalBusiness + 175 standalone RoofingContractor + 2 extras)
- Corrected 368 schema name fields from "5 Star Commercial Roofing" to "5 Star Roofing"
- Build verified clean with zero errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Install schema-dts and upgrade schema-templates.ts** - `d93727e2` (feat)
2. **Task 2: Mass update @type and entity name across all page.tsx files** - `e2954e62` (feat)

## Files Created/Modified
- `lib/schema-templates.ts` - Updated @type to array, entity name to canonical, added schema-dts import
- `package.json` - Added schema-dts devDependency
- `scripts/upgrade-schema.js` - Reusable script for mass schema field replacement
- `app/**/page.tsx` (202 files) - @type array and entity name corrections

## Decisions Made
- Homepage standalone "RoofingContractor" converted to array form for consistency across all pages
- About page "Organization" @type left untouched (only LocalBusiness and RoofingContractor targeted)
- All "name": "5 Star Commercial Roofing" replaced in .tsx files; blog/gallery exceptions already handled in Phase 01-02

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Initial script used `globSync` from `glob` package which wasn't available; replaced with native `fs.readdirSync` recursive walk (Rule 3 - blocking fix, handled inline)

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All LocalBusiness schemas now use proper RoofingContractor type for Google Business Profile alignment
- Entity name consistency achieved across all schema markup
- Ready for remaining 05-schema-architecture plans (Service schema, FAQ schema, breadcrumb schema)

---
*Phase: 05-schema-architecture*
*Completed: 2026-02-20*
