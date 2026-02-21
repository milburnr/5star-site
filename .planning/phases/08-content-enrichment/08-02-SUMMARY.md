---
phase: 08-content-enrichment
plan: 02
subsystem: seo
tags: [faq, accordion, schema, json-ld, faqpage, content-enrichment]

# Dependency graph
requires:
  - phase: 06-service-hub-pages
    provides: Accordion FAQ pattern and FadeIn component established on hub pages
  - phase: 08-01
    provides: City hub enrichment pattern (faqItems array, FAQPage schema)
provides:
  - Visible on-page FAQ sections on all 22 pages that previously lacked them
  - FAQPage JSON-LD schema matching visible FAQ content on all 22 pages
  - 132 unique city/service-specific FAQ questions (22 pages x 6 each)
affects: [08-04, 09-technical-validation, 10-final-qa]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Accordion FAQ section with FadeIn wrapper before final CTA"
    - "FAQPage JSON-LD schema matching visible AccordionItem content"

key-files:
  created: []
  modified:
    - app/bushland-tx-roofing/page.tsx
    - app/claude-tx-roofing/page.tsx
    - app/lubbock-tx-roofing/page.tsx
    - app/odessa-tx-roofing/page.tsx
    - app/perryton-texas-roofing/page.tsx
    - app/plainview-texas-roofing/page.tsx
    - app/vega-tx-roofing/page.tsx
    - app/wildorado-tx-roofing/page.tsx
    - app/amarillo-homes-roofing-services/page.tsx
    - app/asphalt-flat-roof-repair-in-amarillo/page.tsx
    - app/pvc-roof-repair-in-amarillo/page.tsx
    - app/pvc-roof-replacement-in-amarillo/page.tsx
    - app/asphalt-shingle-roofing-andrews/page.tsx
    - app/metal-roofing-andrews/page.tsx
    - app/asphalt-shingle-roofing-big-spring/page.tsx
    - app/metal-roofing-big-spring/page.tsx
    - app/asphalt-shingle-roofing-levelland/page.tsx
    - app/metal-roofing-levelland/page.tsx
    - app/asphalt-shingle-roofing-monahans/page.tsx
    - app/metal-roofing-monahans/page.tsx
    - app/asphalt-shingle-roofing-snyder/page.tsx
    - app/metal-roofing-snyder/page.tsx

key-decisions:
  - "6 FAQ items per page (consistent count across all 22 pages)"
  - "City-specific FAQ content referencing local geography, economy, weather, and landmarks"
  - "Service-specific FAQ differentiation: asphalt-shingle pages cover granule loss, UV degradation, insurance; metal pages cover durability, noise, energy savings"
  - "Used Node.js batch scripts for efficient processing of 14 service spoke pages"

patterns-established:
  - "FAQ section placement: always before final CTA section"
  - "FAQ styling: bg-gradient-to-br from-blue-50, rounded-3xl, shadow-lg wrapper"
  - "AccordionItem styling: bg-white, rounded-xl, shadow-sm, border-gray-100, px-6, mb-4"

# Metrics
duration: 18min
completed: 2026-02-21
---

# Phase 8 Plan 2: FAQ Sections for Service and City Pages Summary

**132 unique city/service-specific FAQ AccordionItems with matching FAQPage JSON-LD schema added to 22 pages**

## Performance

- **Duration:** 18 min
- **Started:** 2026-02-21T01:32:31Z
- **Completed:** 2026-02-21T01:50:40Z
- **Tasks:** 2
- **Files modified:** 22

## Accomplishments
- Added visible Accordion FAQ sections with 6 items each to 8 city hub pages (Bushland, Claude, Lubbock, Odessa, Perryton, Plainview, Vega, Wildorado)
- Added visible Accordion FAQ sections with 6 items each to 14 service spoke pages (4 Amarillo specialty + 10 city-service)
- Added FAQPage JSON-LD schema to all 22 pages matching visible FAQ content
- All 132 FAQ questions are contextually unique to their city/service combination

## Task Commits

Each task was committed atomically:

1. **Task 1: Add FAQ sections to 8 city hub pages** - `2a55baf9` (feat)
2. **Task 2: Add FAQ sections to 14 service spoke pages** - `678ef695` (feat)

## Files Created/Modified

**City Hub Pages (Task 1):**
- `app/bushland-tx-roofing/page.tsx` - 6 FAQs: proximity to Amarillo, FM 2381, agricultural buildings, inspection frequency, Bushland ISD, insurance
- `app/claude-tx-roofing/page.tsx` - 6 FAQs: small population, Armstrong County, historic downtown, Tule Creek ranches, Palo Duro Canyon, UV at elevation
- `app/lubbock-tx-roofing/page.tsx` - 6 FAQs: Hail Alley insurance, Texas Tech rentals, replacement costs, accelerated aging, inspection timing, neighborhoods
- `app/odessa-tx-roofing/page.tsx` - 6 FAQs: oil/gas facilities, May 2019 storm, accelerated aging, UTPB area, metal cooling savings, flash flooding
- `app/perryton-texas-roofing/page.tsx` - 6 FAQs: northernmost storms, wheat farming, response time, ice storms, wind ratings, Ochiltree permits
- `app/plainview-texas-roofing/page.tsx` - 6 FAQs: cotton processing, Wayland Baptist, 3400ft elevation, residential costs, Covenant Health, grain elevators
- `app/vega-tx-roofing/page.tsx` - 6 FAQs: Route 66 heritage, 4000ft elevation, Oldham County ranches, I-40 winds, replacement timing, material availability
- `app/wildorado-tx-roofing/page.tsx` - 6 FAQs: feedlot effects, 200 residents, barn roofing, storm exposure, impact-resistant, financing

**Service Spoke Pages (Task 2):**
- `app/amarillo-homes-roofing-services/page.tsx` - 6 FAQs: HOA requirements, neighborhood weather, resale value, energy efficiency, timeline, flat sections
- `app/asphalt-flat-roof-repair-in-amarillo/page.tsx` - 6 FAQs: ponding water, hail damage patterns, coating vs replacement, lifespan, blistering, maintenance programs
- `app/pvc-roof-repair-in-amarillo/page.tsx` - 6 FAQs: PVC heat weld seams, UV degradation, chemical resistance, repair vs replace, warranty, energy reflectance
- `app/pvc-roof-replacement-in-amarillo/page.tsx` - 6 FAQs: PVC vs TPO, 100+ degree performance, commercial codes, replacement cost, membrane thickness, lifespan
- `app/asphalt-shingle-roofing-andrews/page.tsx` - 6 FAQs: oil field particulates, Class 4 rating, extreme heat lifespan, sand storms, insurance claims, ventilation
- `app/metal-roofing-andrews/page.tsx` - 6 FAQs: oil industry buildings, Kynar finish, standing seam hail, overlay install, rain noise, resale value
- `app/asphalt-shingle-roofing-big-spring/page.tsx` - 6 FAQs: refinery environment, wind ratings, shingle colors, inspection frequency, hard water, warranty coverage
- `app/metal-roofing-big-spring/page.tsx` - 6 FAQs: refinery proximity, elevation expansion, gauge recommendation, I-20 cooling costs, hailstorms, agricultural buildings
- `app/asphalt-shingle-roofing-levelland/page.tsx` - 6 FAQs: cotton dust, upgrades, South Plains College, replacement cost, dust storm inspections, building codes
- `app/metal-roofing-levelland/page.tsx` - 6 FAQs: cotton farmers, color options, thunderstorms, ranch-style homes, dusty maintenance, cell reception
- `app/asphalt-shingle-roofing-monahans/page.tsx` - 6 FAQs: Sandhills abrasion, Ward County climate, replacement frequency, emergency tarping, insurance carriers, sand-resistant shingles
- `app/metal-roofing-monahans/page.tsx` - 6 FAQs: sandy environment superiority, sand+sun coating, extreme heat, oil field shelters, gauge recommendation, insurance rates
- `app/asphalt-shingle-roofing-snyder/page.tsx` - 6 FAQs: Scurry County climate, ranch properties, SACROC oil field, replacement timeline, underlayment, peak oil scheduling
- `app/metal-roofing-snyder/page.tsx` - 6 FAQs: rancher popularity, rolling terrain, SACROC comparison, historic downtown, rain noise, resale value

## Decisions Made
- Used 6 FAQ items per page consistently (within the 6-7 range specified by CONT-04)
- City hub FAQs reference local geography, landmarks, and economy (e.g., Route 66 for Vega, Sandhills for Monahans)
- Service-specific differentiation: asphalt-shingle pages focus on granule loss, UV degradation, insurance claims; metal pages focus on durability, noise myths, energy savings
- Used Node.js batch scripts for efficient processing of 14 spoke pages instead of 14 manual edits

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Fixed CRLF line ending mismatch in 4 asphalt-shingle pages**
- **Found during:** Task 2 (service spoke FAQ insertion)
- **Issue:** Initial batch script used LF line endings for string matching but 4 asphalt-shingle-roofing pages (Andrews, Levelland, Monahans, Snyder) use CRLF, causing schema insertion to fail silently
- **Fix:** Created secondary fix script that normalizes line endings before processing and restores original endings after
- **Files modified:** asphalt-shingle-roofing-{andrews,levelland,monahans,snyder}/page.tsx
- **Verification:** All 4 pages confirmed with 13 AccordionItem references and 1 FAQPage schema each
- **Committed in:** 678ef695 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 3 - blocking)
**Impact on plan:** Line ending mismatch required a second pass on 4 files. No scope creep.

## Issues Encountered
- Initial batch script (add-faqs.js) failed to insert schema on 4 of 14 pages due to CRLF vs LF line ending differences. A targeted fix script (fix-faqs.js) resolved the issue by normalizing line endings during processing.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 22 previously-missing FAQ sections now in place with matching FAQPage schema
- CONT-04 requirement (6-7 FAQ items per service/city page) now satisfied across the full site
- Ready for 08-04 (remaining content enrichment tasks) or Phase 9 technical validation

## Self-Check: PASSED

- All 22 modified page files: FOUND
- Commit 2a55baf9 (Task 1): FOUND
- Commit 678ef695 (Task 2): FOUND
- 08-02-SUMMARY.md: FOUND

---
*Phase: 08-content-enrichment*
*Completed: 2026-02-21*
