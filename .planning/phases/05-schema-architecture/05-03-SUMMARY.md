---
phase: 05-schema-architecture
plan: 03
subsystem: seo
tags: [schema.org, faq, service, breadcrumb, json-ld, structured-data]

requires:
  - phase: 05-01
    provides: "RoofingContractor @type array and entity name standardization across all schemas"
provides:
  - "Zero FAQ schema gaps -- all pages with FAQ content have FAQPage JSON-LD"
  - "Zero Service schema gaps -- all service-city pages have Service JSON-LD"
  - "Durable schema coverage report at scripts/schema-audit-report.txt"
  - "Reusable audit scripts for ongoing schema verification"
affects: [05-04, 10-tech-validation]

tech-stack:
  added: []
  patterns:
    - "FAQ schema inserted after last ld+json block using regex extraction of AccordionTrigger/AccordionContent pairs"
    - "Schema audit scripts with --dry-run support for safe preview"

key-files:
  created:
    - scripts/fix-faq-schema-gaps.js
    - scripts/fix-service-schema-gaps.js
    - scripts/schema-audit-report.txt
  modified:
    - app/roof-repair-odessa/page.tsx

key-decisions:
  - "16 pages importing AccordionTrigger without JSX usage correctly skipped (no FAQ content, no schema needed)"
  - "4 LocalBusiness pages using non-array @type noted but left for 05-04 scope"
  - "Most FAQ and Service schema gaps were already fixed by 05-01 commit -- this plan verified and closed remaining gaps"

patterns-established:
  - "Schema audit scripts at scripts/ for ongoing verification of FAQ, Service, Breadcrumb, LocalBusiness coverage"

duration: 6min
completed: 2026-02-20
---

# Phase 5 Plan 3: FAQ and Service Schema Coverage Summary

**Closed all FAQ and Service schema gaps: 141 FAQ pages verified, 1 Service schema gap fixed, durable audit report generated**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-20T23:48:01Z
- **Completed:** 2026-02-20T23:54:14Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Verified 141 pages with FAQ accordion content all have FAQPage schema (0 gaps)
- Fixed 1 remaining Service schema gap (roof-repair-odessa)
- Created reusable audit scripts with --dry-run support
- Generated durable coverage report: FAQ 0 gaps, Service 0 gaps, Breadcrumb 197 pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Identify FAQ gap pages and add FAQPage schema** - `1ac2e147` (feat)
2. **Task 2: Fix Service schema gaps and write durable coverage report** - `3a12b10b` (feat)

## Files Created/Modified
- `scripts/fix-faq-schema-gaps.js` - Audit and fix FAQ schema gaps across all pages
- `scripts/fix-service-schema-gaps.js` - Audit and fix Service schema gaps on service-city pages
- `scripts/schema-audit-report.txt` - Full schema coverage report (FAQ, Service, Breadcrumb, LocalBusiness)
- `app/roof-repair-odessa/page.tsx` - Added missing Service schema

## Decisions Made
- 16 pages import AccordionTrigger in their imports but never use it in JSX -- correctly skipped (no FAQ content exists)
- 05-01 commit (e2954e62) had already fixed most FAQ schema gaps as part of its broad schema upgrade -- this plan verified completeness
- 4 LocalBusiness pages still use single-string @type instead of array format -- documented for 05-04 if needed

## Deviations from Plan

### Scope Adjustment

The plan estimated ~34 FAQ gaps and ~14 Service gaps. In reality, most were already fixed by the 05-01 schema upgrade commit. Actual gaps found:
- FAQ gaps: 0 remaining (05-01 already fixed them)
- Service gaps: 1 (roof-repair-odessa, fixed this run)

The scripts were still created as durable audit tools and the coverage report was generated as planned.

---

**Total deviations:** 0 auto-fixed
**Impact on plan:** Plan scope was smaller than estimated but all artifacts were delivered.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All schema types verified with zero gaps
- Coverage report available at scripts/schema-audit-report.txt
- Audit scripts available for ongoing verification
- Ready for 05-04 (remaining schema architecture work)

---
*Phase: 05-schema-architecture*
*Completed: 2026-02-20*
