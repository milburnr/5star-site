---
phase: 02-url-canonicalization
plan: 01
subsystem: seo
tags: [netlify, redirects, 301, canonical-urls, internal-linking]

requires:
  - phase: 01-compliance-entity-fixes
    provides: Clean schema markup and standardized NAP data
provides:
  - 74 correct 301 redirect rules in netlify.toml (37 redirect pairs x 2 trailing slash variants)
  - All internal links across 93 page.tsx files pointing at canonical URLs
  - Zero redirect chains
affects: [02-02 (page deletion), sitemap regeneration, deployment verification]

tech-stack:
  added: []
  patterns: ["/{service}-{city}/ canonical URL convention", "Both trailing-slash variants per redirect"]

key-files:
  created: []
  modified:
    - sites/5-star-roofing/netlify.toml
    - sites/5-star-roofing/app/**/page.tsx (93 files)
    - sites/5-star-roofing/app/layout.tsx

key-decisions:
  - "All redirect targets use suffix-free /{service}-{city}/ pattern matching InternalLinks component"
  - "Variant page.tsx files updated in place (not deleted yet -- deletion is plan 02-02)"

patterns-established:
  - "Canonical URL pattern: /{service}-{city}/ with no geographic suffix (-tx, -texas, -in-)"
  - "Redirect format: both with/without trailing slash, force=true, above catch-all"

duration: 4min
completed: 2026-02-20
---

# Phase 2 Plan 1: Redirect Rewrite and Internal Link Canonicalization Summary

**74 netlify.toml 301 redirects rewritten with correct suffix-free canonical targets, plus 93 page.tsx files updated to eliminate internal links through redirect hops**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-20T21:43:28Z
- **Completed:** 2026-02-20T21:47:34Z
- **Tasks:** 2
- **Files modified:** 94 (1 netlify.toml + 93 page.tsx)

## Accomplishments
- Fixed 10 existing redirect targets that pointed TO -tx URLs instead of AWAY from them
- Added 37 new redirect pairs for previously uncovered URL variants (hail damage -tx suffixes, residential roofing other cities, roof inspections, storm/wind damage -in- variants, misc Amarillo -in- variants)
- Eliminated 2 redirect chains (storm/wind damage pointed to -in-amarillo intermediaries)
- Updated all internal links in 93 page.tsx files to point directly at canonical URLs (zero PageRank leakage through 301 hops)
- Build passes with all 268 pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite and complete all 301 redirects in netlify.toml** - `b12e24aa` (feat)
2. **Task 2: Update all internal links in page.tsx files to canonical URLs** - `4b5e5b57` (fix)

## Files Created/Modified
- `sites/5-star-roofing/netlify.toml` - 74 redirect rules with correct canonical targets (was 36 with wrong targets)
- `sites/5-star-roofing/app/layout.tsx` - Updated footer/nav links to canonical URLs
- `sites/5-star-roofing/app/page.tsx` - Updated homepage links
- `sites/5-star-roofing/app/services/page.tsx` - Updated 20 service area links
- `sites/5-star-roofing/app/service-areas/page.tsx` - Updated hail damage city links
- 88 additional page.tsx files with internal link updates

## Decisions Made
- All redirect targets use suffix-free `/{service}-{city}/` pattern matching the InternalLinks component output
- Variant page.tsx files updated in place but NOT deleted (deletion is separate plan 02-02 per deploy-verify-delete sequence)
- Self-referencing URLs within variant pages (schema, canonical, breadcrumb) also updated for consistency

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Redirects ready for deployment to Netlify
- After deployment, plan 02-02 can verify live redirects and delete duplicate page.tsx files
- Sitemap regeneration should follow page deletion

---
*Phase: 02-url-canonicalization*
*Completed: 2026-02-20*
