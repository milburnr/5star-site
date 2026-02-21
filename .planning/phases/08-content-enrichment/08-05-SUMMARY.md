---
phase: 08-content-enrichment
plan: 05
subsystem: seo
tags: [faq, schema, json-ld, accordion, faqpage]

requires:
  - phase: 08-content-enrichment
    provides: "FAQ patterns from 08-01 (faqItems array) and 08-02 (AccordionItem FAQ sections)"
provides:
  - "FAQPage JSON-LD schema on all 11 remaining gap pages"
  - "Visible Accordion FAQ sections on 7 pages (6 spokes + Amarillo hub)"
  - "Truth 2 from 08-VERIFICATION.md fully resolved"
affects: [09-technical-seo, 10-final-qa]

tech-stack:
  added: []
  patterns: ["faqItems array single source of truth for FAQ content + schema (extended to all remaining pages)"]

key-files:
  created: []
  modified:
    - app/wind-damage-repair-andrews/page.tsx
    - app/wind-damage-repair-big-spring/page.tsx
    - app/tpo-roofing-andrews/page.tsx
    - app/tpo-roofing-big-spring/page.tsx
    - app/tpo-roofing-monahans/page.tsx
    - app/roof-inspections-andrews/page.tsx
    - app/canyon-texas-roofing/page.tsx
    - app/borger-texas-roofing/page.tsx
    - app/pampa-texas-roofing/page.tsx
    - app/dumas-texas-roofing/page.tsx
    - app/amarillo-texas-roofing/page.tsx

key-decisions:
  - "Spoke pages use faqItems.map() for both Accordion rendering and FAQPage schema (single source of truth)"
  - "City hubs keep existing div/h3 FAQ format unchanged; only FAQPage schema added to match"
  - "Amarillo hub gets full Accordion FAQ + schema (was the only hub with zero FAQ content)"

patterns-established:
  - "All service-city pages and city hubs now have FAQPage JSON-LD schema"

duration: 6min
completed: 2026-02-21
---

# Phase 8 Plan 5: FAQ Gap Closure Summary

**FAQPage JSON-LD schema added to 11 pages: 6 spoke pages get visible Accordion FAQ sections + schema, 4 city hubs get schema matching existing FAQ content, Amarillo hub gets new FAQ section + schema**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-21T02:24:15Z
- **Completed:** 2026-02-21T02:30:15Z
- **Tasks:** 2
- **Files modified:** 11

## Accomplishments
- All 6 spoke pages (wind-damage-repair-andrews/big-spring, tpo-roofing-andrews/big-spring/monahans, roof-inspections-andrews) now have visible Accordion FAQ sections with 6 items each and matching FAQPage JSON-LD schema
- All 4 city hubs (Canyon, Borger, Pampa, Dumas) now have FAQPage JSON-LD schema matching their existing div/h3 FAQ content
- Amarillo city hub now has Accordion imports, faqItems array, visible FAQ section, and FAQPage schema (was the only hub with no FAQ at all)
- Truth 2 from 08-VERIFICATION.md fully resolved: no more pages with AccordionItem imports but no FAQ content, no more FAQ content without FAQPage schema

## Task Commits

1. **Task 1: Add FAQ sections and schema to 6 spoke pages** - `692fa187` (fix)
2. **Task 2: Add FAQPage schema to 4 city hubs and FAQ section to Amarillo hub** - `59ad80a0` (fix)

## Files Created/Modified
- `app/wind-damage-repair-andrews/page.tsx` - Added faqItems array (6 items), Accordion FAQ section, FAQPage schema
- `app/wind-damage-repair-big-spring/page.tsx` - Added faqItems array (6 items), Accordion FAQ section, FAQPage schema
- `app/tpo-roofing-andrews/page.tsx` - Added faqItems array (6 items), Accordion FAQ section, FAQPage schema
- `app/tpo-roofing-big-spring/page.tsx` - Added faqItems array (6 items), Accordion FAQ section, FAQPage schema
- `app/tpo-roofing-monahans/page.tsx` - Added faqItems array (6 items), Accordion FAQ section, FAQPage schema
- `app/roof-inspections-andrews/page.tsx` - Added faqItems array (6 items), Accordion FAQ section, FAQPage schema
- `app/canyon-texas-roofing/page.tsx` - Added FAQPage JSON-LD schema (6 items matching existing FAQ)
- `app/borger-texas-roofing/page.tsx` - Added FAQPage JSON-LD schema (6 items matching existing FAQ)
- `app/pampa-texas-roofing/page.tsx` - Added FAQPage JSON-LD schema (6 items matching existing FAQ)
- `app/dumas-texas-roofing/page.tsx` - Added FAQPage JSON-LD schema (7 items matching existing FAQ)
- `app/amarillo-texas-roofing/page.tsx` - Added Accordion imports, faqItems array (6 items), visible FAQ section, FAQPage schema

## Decisions Made
- Spoke pages use faqItems.map() for both Accordion rendering and FAQPage schema (single source of truth pattern from 08-01)
- City hubs (Canyon, Borger, Pampa, Dumas) keep existing div/h3 FAQ visual format unchanged; only FAQPage JSON-LD schema added alongside
- Amarillo hub uses same faqItems + Accordion pattern as spoke pages since it had no pre-existing FAQ content
- FAQ content is city+service-specific: no duplicate questions across the 11 pages

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 8 gap closure complete: Truth 2 fully resolved
- All service-city pages now have both visible FAQ content and FAQPage JSON-LD schema
- Ready for Phase 9 (Technical SEO) or Phase 10 (Final QA)

---
*Phase: 08-content-enrichment*
*Completed: 2026-02-21*
