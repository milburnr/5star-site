---
phase: 05-schema-architecture
plan: 04
subsystem: seo
tags: [schema.org, json-ld, validation, post-build, quality-gate]

requires:
  - phase: 05-01
    provides: "RoofingContractor @type array and entity name standardization"
  - phase: 05-02
    provides: "WebSite and Person entity schemas"
  - phase: 05-03
    provides: "FAQ and Service schema coverage with zero gaps"
provides:
  - "Reusable post-build schema validation script checking 8 rules across all pages"
  - "npm run validate:schema quality gate for CI/CD integration"
  - "Zero-error validation across 204 pages and 712 schema blocks"
affects: [10-tech-validation]

tech-stack:
  added: []
  patterns:
    - "Post-build validation via Node.js script scanning out/**/*.html for JSON-LD correctness"
    - "Positive-match service-city detection using known service prefixes to avoid false positives"

key-files:
  created:
    - scripts/validate-schema.js
  modified:
    - package.json

key-decisions:
  - "Service-city page detection uses positive matching (known service prefixes) rather than exclusion lists to avoid false positives on city hub and blog pages"
  - "404 page excluded from BreadcrumbList warning since it has no meaningful breadcrumb path"
  - "Article @type pages auto-excluded from service-city checks regardless of URL pattern"

patterns-established:
  - "Post-build schema validation: run npm run validate:schema after any build to catch regressions"

duration: 3min
completed: 2026-02-20
---

# Phase 5 Plan 4: Schema Validation Script Summary

**Post-build schema validator checking 8 JSON-LD rules across 204 pages with zero errors -- Phase 5 final gate passed**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-20T23:59:16Z
- **Completed:** 2026-02-21T00:02:36Z
- **Tasks:** 1
- **Files modified:** 2

## Accomplishments
- Created comprehensive schema validation script checking 8 rules (LocalBusiness array, entity name, WebSite, Person, FAQ, Service, @context, BreadcrumbList)
- Validated all 204 built pages with 712 JSON-LD blocks -- zero errors
- Added `npm run validate:schema` as reusable quality gate for future builds
- Phase 5 success criterion met: schema validation passes all pages with zero errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Build and run schema validation script** - `d1a3fbdb` (feat)

## Files Created/Modified
- `scripts/validate-schema.js` - Post-build schema validation with 8 rules, smart service-city detection
- `package.json` - Added validate:schema npm script alias

## Decisions Made
- Service-city detection uses positive matching with known service prefixes (roof-repair, commercial-roofing, hail-damage-repair, etc.) rather than exclusion lists. Initial exclusion-based approach produced 17 false positives on city hub pages and blog articles.
- 404 page excluded from BreadcrumbList check -- no meaningful breadcrumb path for error pages.
- Pages with Article @type automatically excluded from service-city Service schema requirement.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed service-city page detection to avoid false positives**
- **Found during:** Task 1 (first validation run)
- **Issue:** Initial isServiceCityPath using exclusion list flagged 17 pages incorrectly -- city hub pages (amarillo-texas-roofing), blog articles (budgeting-for-roof-replacement-expenses), and similar non-service-city pages
- **Fix:** Rewrote detection to use positive matching with known service prefixes plus Article @type exclusion
- **Files modified:** scripts/validate-schema.js
- **Verification:** Re-ran validation -- zero errors, zero false positives
- **Committed in:** d1a3fbdb (part of task commit)

---

**Total deviations:** 1 auto-fixed (Rule 1 - bug in detection logic)
**Impact on plan:** Fix was necessary for correct validation. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 5 (Schema Architecture) is complete -- all 4 plans delivered
- Schema validation gate available for all future phases via `npm run validate:schema`
- Ready to proceed to Phase 6

---
*Phase: 05-schema-architecture*
*Completed: 2026-02-20*
