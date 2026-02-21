---
phase: 07-internal-linking
plan: 02
subsystem: internal-linking
tags: [hub-spoke, city-pages, spoke-grids, internal-links, seo]

requires:
  - phase: 07-01
    provides: "InternalLinks hubUrl + hub uplink architecture"
  - phase: 06-service-hub-pages
    provides: "Service hub pages with spoke grid pattern"
provides:
  - "5 new city hub pages (Levelland, Big Spring, Snyder, Monahans, Andrews)"
  - "Complete InternalLinks cityData with all 14 hubUrl entries"
  - "Spoke grids on commercial-roofing and residential-roofing hub pages"
  - "Service-areas page with real city hub links"
  - "Fixed broken internal links in Amarillo and Lubbock city hubs"
affects: [07-internal-linking, 08-content-quality, 10-validation]

tech-stack:
  added: []
  patterns: ["City hub page with services grid linking to all 11 spoke pages"]

key-files:
  created:
    - app/levelland-tx-roofing/page.tsx
    - app/big-spring-tx-roofing/page.tsx
    - app/snyder-tx-roofing/page.tsx
    - app/monahans-tx-roofing/page.tsx
    - app/andrews-tx-roofing/page.tsx
  modified:
    - components/InternalLinks.tsx
    - app/commercial-roofing/page.tsx
    - app/residential-roofing/page.tsx
    - app/service-areas/page.tsx
    - app/amarillo-texas-roofing/page.tsx
    - app/lubbock-tx-roofing/page.tsx

key-decisions:
  - "City hub pages use inline services array + map for spoke grid (consistent with Phase 6 hub pattern)"
  - "New city hubs use -tx-roofing suffix (consistent with Midland, Odessa, Lubbock Permian Basin cities)"
  - "Childress and Dalhart still link to /contact/ (no spoke pages exist for these cities)"

patterns-established:
  - "City hub template: hero + intro + services grid (11 services) + challenges section + CTA + nearby cities + schema"

duration: 8min
completed: 2026-02-21
---

# Phase 7 Plan 02: City Hub Pages & Legacy Hub Spoke Grids Summary

**5 new city hub pages created, spoke grids added to commercial/residential hubs, service-areas links fixed to actual city hubs, broken internal links repaired in Amarillo and Lubbock pages**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-21T00:58:18Z
- **Completed:** 2026-02-21T01:06:35Z
- **Tasks:** 2
- **Files modified:** 11

## Accomplishments
- Created 5 missing city hub pages (Levelland, Big Spring, Snyder, Monahans, Andrews) with services grids linking to all 11 spoke pages per city
- Added 14-city spoke grids to commercial-roofing and residential-roofing legacy hub pages
- Fixed service-areas page: 10 cities now link to real hub pages instead of /contact/
- Fixed 5 broken internal link patterns in Amarillo and Lubbock city hub pages
- All 14 cities in InternalLinks now have hubUrl entries for complete hub-spoke uplinks

## Task Commits

Each task was committed atomically:

1. **Task 1: Create 5 missing city hub pages and update InternalLinks hubUrl entries** - `a6650865` (feat)
2. **Task 2: Add spoke grids to legacy hub pages, fix service-areas links, fix broken city hub links** - `0b3612ea` (feat)

## Files Created/Modified
- `app/levelland-tx-roofing/page.tsx` - Levelland city hub with Hockley County content, South Plains College focus
- `app/big-spring-tx-roofing/page.tsx` - Big Spring city hub with Howard County content, oil/refinery focus
- `app/snyder-tx-roofing/page.tsx` - Snyder city hub with Scurry County content, wind energy corridor focus
- `app/monahans-tx-roofing/page.tsx` - Monahans city hub with Ward County content, extreme heat/Sandhills focus
- `app/andrews-tx-roofing/page.tsx` - Andrews city hub with Andrews County content, Permian Basin growth focus
- `components/InternalLinks.tsx` - Added hubUrl for 5 new cities (all 14 now mapped)
- `app/commercial-roofing/page.tsx` - Added 14-city spoke grid section
- `app/residential-roofing/page.tsx` - Added 14-city spoke grid section
- `app/service-areas/page.tsx` - Fixed 10 city links from /contact/ to real hub URLs, added Monahans + Andrews cards
- `app/amarillo-texas-roofing/page.tsx` - Fixed 3 broken -amarillo-texas/ link patterns
- `app/lubbock-tx-roofing/page.tsx` - Fixed 2 broken -lubbock-texas/ link patterns

## Decisions Made
- City hub pages use inline services array + map for spoke grid (consistent with Phase 6 hub pattern)
- New city hubs use -tx-roofing suffix (matching Midland, Odessa, Lubbock Permian Basin city pattern)
- Childress and Dalhart still link to /contact/ on service-areas (no hub pages or spoke pages exist)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed broken link patterns in Lubbock city hub page**
- **Found during:** Task 2 (scanning other city hubs for broken URLs)
- **Issue:** lubbock-tx-roofing had `/metal-roofing-lubbock-texas/` and `/roof-inspections-lubbock-texas/` patterns that point to non-existent pages
- **Fix:** Changed to canonical `/metal-roofing-lubbock/` and `/roof-inspections-lubbock/` URLs
- **Files modified:** app/lubbock-tx-roofing/page.tsx
- **Verification:** Build succeeds, grep confirms no remaining -texas/ patterns
- **Committed in:** 0b3612ea (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 bug fix)
**Impact on plan:** Essential for link correctness. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Complete hub-and-spoke topology: every city has a hub page, every service hub links to all city spokes
- All 14 cities have hubUrl in InternalLinks for bidirectional uplinks
- Ready for plan 07-03 (remaining internal linking work)

---
*Phase: 07-internal-linking*
*Completed: 2026-02-21*
