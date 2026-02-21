---
phase: 07-internal-linking
plan: 01
subsystem: ui
tags: [internal-linking, hub-spoke, react, navigation]

requires:
  - phase: 06-service-hub-pages
    provides: "Hub page URLs for service and city hubs"
provides:
  - "InternalLinks component with hub uplinks, cross-city, cross-service links"
  - "hubUrl mappings for 9 cities and 11 services"
  - "Removal of phantom emergency-roof-repair service"
affects: [07-02, 07-03, spoke-pages]

tech-stack:
  added: []
  patterns: ["hub uplink pattern: spoke pages link back to service hub + city hub"]

key-files:
  created: []
  modified: ["components/InternalLinks.tsx"]

key-decisions:
  - "5 cities without hub pages (levelland, big-spring, snyder, monahans, andrews) get no hubUrl -- deferred to plan 07-02"
  - "City hub link conditionally rendered via hubUrl existence check"

patterns-established:
  - "Hub uplinks: brown button for service hub, gold button for city hub, both with back-arrow SVG icon"

duration: 1min
completed: 2026-02-21
---

# Phase 7 Plan 1: InternalLinks Hub Uplinks Summary

**Rebuilt InternalLinks component with spoke-to-hub uplinks, removed phantom emergency-roof-repair service, added hubUrl mappings for 9 cities and 11 services**

## Performance

- **Duration:** 1 min
- **Started:** 2026-02-21T00:55:19Z
- **Completed:** 2026-02-21T00:56:35Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments
- Added hub uplink section rendering service hub link (always) and city hub link (conditional on hubUrl existence)
- Removed phantom emergency-roof-repair from serviceData (generated 404 links for non-existent pages)
- Added hubUrl to CityData and ServiceData interfaces with all 9 existing city hub URLs and 11 service hub URLs mapped

## Task Commits

Each task was committed atomically:

1. **Task 1: Rebuild InternalLinks component with hub uplinks and data fixes** - `714ce6b1` (feat)

## Files Created/Modified
- `components/InternalLinks.tsx` - Added hubUrl to interfaces and data, hub uplink JSX section, removed emergency-roof-repair

## Decisions Made
- 5 cities without hub pages get no hubUrl property -- conditional rendering handles graceful omission
- Hub uplink uses brand-brown for service hub and brand-gold for city hub to differentiate visually

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- InternalLinks component ready for spoke pages to render 3-section layout
- Plans 07-02 and 07-03 can proceed to create missing city hub pages and deploy to spoke pages

---
*Phase: 07-internal-linking*
*Completed: 2026-02-21*
