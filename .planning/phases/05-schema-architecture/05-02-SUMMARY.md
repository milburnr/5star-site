---
phase: 05-schema-architecture
plan: 02
subsystem: seo
tags: [schema.org, json-ld, WebSite, Person, knowledge-graph]

requires:
  - phase: 05-01
    provides: "Standardized entity names and @id references across all pages"
provides:
  - "WebSite entity schema on homepage with sameAs social links"
  - "Person entity schema on about page linked to Organization via worksFor"
affects: [05-04, 06-content-depth]

tech-stack:
  added: []
  patterns: ["Multiple JSON-LD blocks per page for distinct entity types"]

key-files:
  created: []
  modified:
    - app/page.tsx
    - app/about/page.tsx

key-decisions:
  - "Reused existing sameAs URLs (Facebook, Google Maps CID) from LocalBusiness schema for WebSite schema"
  - "Used 'Owner' as Person name placeholder since about page content does not mention owner by name"

patterns-established:
  - "WebSite schema on homepage with publisher @id cross-reference to Organization"
  - "Person schema with worksFor linking to Organization @id"

duration: 2min
completed: 2026-02-20
---

# Phase 5 Plan 2: WebSite and Person Entity Schema Summary

**WebSite entity schema on homepage and Person schema on about page to strengthen knowledge graph entity signals**

## Performance

- **Duration:** 2 min
- **Started:** 2026-02-20T23:56:02Z
- **Completed:** 2026-02-20T23:57:39Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Homepage now has WebSite JSON-LD with name, url, publisher @id reference, and sameAs social links
- About page now has Person JSON-LD for business owner with worksFor linking to Organization entity
- Both schemas use consistent @id reference (https://5starroofingpros.com/#organization) for entity disambiguation
- Build verified: all 209 pages compile, WebSite and Person appear in built HTML output

## Task Commits

Each task was committed atomically:

1. **Task 1: Add WebSite schema to homepage** - `3bb778cb` (feat)
2. **Task 2: Add Person schema to about page** - `6c38771a` (feat)

## Files Created/Modified
- `app/page.tsx` - Added WebSite JSON-LD script block after FAQPage schema
- `app/about/page.tsx` - Added Person JSON-LD script block after Organization schema

## Decisions Made
- Reused existing sameAs URLs from homepage LocalBusiness schema (Facebook page + Google Maps CID) rather than introducing new URLs
- Used "Owner" as Person name placeholder since about page content has no specific owner name
- Organization name on about page already correct ("5 Star Roofing") from plan 05-01 -- no fix needed

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All entity schemas now in place: LocalBusiness/RoofingContractor, Organization, WebSite, Person
- Plan 05-04 (remaining schema cleanup) can proceed
- Knowledge graph signals strengthened for domain-entity association

---
*Phase: 05-schema-architecture*
*Completed: 2026-02-20*
