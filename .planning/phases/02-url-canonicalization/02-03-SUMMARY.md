---
phase: 02-url-canonicalization
plan: 03
subsystem: seo
tags: [redirects, netlify, sitemap, canonicalization, internal-links]

# Dependency graph
requires:
  - phase: 02-url-canonicalization (plans 01-02)
    provides: "Initial redirect rules and duplicate page deletion for 36 pages"
provides:
  - "16 new redirect rules for 8 remaining redundant pages"
  - "Internal links updated to canonical URLs across ~30 pages"
  - "201-URL sitemap with zero redirected source URLs"
  - "SC1 and SC5 verification gaps closed"
affects: [03-meta-titles, 04-content-depth]

# Tech tracking
tech-stack:
  added: []
  patterns: [redirect-pair-pattern, internal-link-canonicalization]

key-files:
  created: []
  modified:
    - sites/5-star-roofing/netlify.toml
    - sites/5-star-roofing/public/sitemap.xml
    - sites/5-star-roofing/app/layout.tsx
    - sites/5-star-roofing/app/page.tsx
    - "~28 additional page.tsx files (internal link updates)"

key-decisions:
  - "Internal links updated to canonical targets before directory deletion to prevent PageRank leaking through 301 hops"
  - "Duplicate title check confirmed no actual self-competition remains (layout.tsx default title and openGraph duplicates are expected, not conflicts)"

patterns-established:
  - "Redirect pair pattern: every redirect needs both with and without trailing slash variant"
  - "Internal link canonicalization: always update href targets before deleting source pages"

# Metrics
duration: 4min
completed: 2026-02-20
---

# Phase 02 Plan 03: Gap Closure Summary

**8 redundant general-roofing pages redirected+deleted, ~30 internal links repointed to canonical URLs, sitemap regenerated to 201 URLs closing SC1 and SC5 verification gaps**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-20T22:22:45Z
- **Completed:** 2026-02-20T22:27:00Z
- **Tasks:** 2
- **Files modified:** 41

## Accomplishments
- Added 16 redirect rules (8 pairs) to netlify.toml for redundant general-roofing pages
- Updated internal links in ~30 page.tsx files to point to canonical URLs instead of redirected ones
- Deleted 8 redundant page directories that competed with existing canonical hub pages
- Regenerated sitemap to 201 canonical URLs with zero redirected source URLs
- Confirmed SC5 keyword self-competition resolved (both conflicting page pairs eliminated)

## Task Commits

Each task was committed atomically:

1. **Task 1: Add 16 redirect rules for 8 redundant pages and delete their directories** - `9f0513d9` (feat)
2. **Task 2: Regenerate sitemap and verify no keyword self-competition remains** - `dc8850f2` (chore)

## Files Created/Modified
- `netlify.toml` - 16 new redirect rules for 8 redundant pages
- `public/sitemap.xml` - Regenerated with 201 canonical URLs
- `app/layout.tsx` - Updated internal links (roofing-amarillo-tx, asphalt-roofing-in-amarillo)
- `app/page.tsx` - Updated internal links to canonical targets
- `app/service-areas/page.tsx` - Updated internal links
- `app/services/page.tsx` - Updated asphalt-roofing-in-amarillo link
- `app/residential-roofing/page.tsx` - Updated asphalt-roofing-in-amarillo link
- 8 deleted directories: roofing-amarillo-tx, roofing-services-in-amarillo-tx, roofing-companies-in-amarillo-tx, expert-roofing-services-in-amarillo, roofers-in-amarillo, roofing-services-lubbock-tx, asphalt-roofing-in-amarillo, roof-heavy-rain-damage-in-amarillo
- ~25 additional page.tsx files with internal link updates

## Redirect Mapping

| Source (redirected) | Target (canonical) |
|---|---|
| /roofing-amarillo-tx/ | /amarillo-texas-roofing/ |
| /roofing-services-in-amarillo-tx/ | /amarillo-texas-roofing/ |
| /roofing-companies-in-amarillo-tx/ | /amarillo-texas-roofing/ |
| /expert-roofing-services-in-amarillo/ | /amarillo-texas-roofing/ |
| /roofers-in-amarillo/ | /amarillo-texas-roofing/ |
| /roofing-services-lubbock-tx/ | /lubbock-tx-roofing/ |
| /asphalt-roofing-in-amarillo/ | /asphalt-shingle-roofing-amarillo/ |
| /roof-heavy-rain-damage-in-amarillo/ | /heavy-rain-damage-roof-repair-in-amarillo/ |

## 10 Designated Canonical Niche Pages (kept)

- flat-roof-repair-midland-texas
- metal-roof-installation-odessa-texas
- asphalt-flat-roof-repair-in-amarillo
- pvc-roof-repair-in-amarillo
- pvc-roof-replacement-in-amarillo
- pvc-roofing-contractors-in-amarillo
- heavy-rain-damage-roof-repair-in-amarillo
- roof-rot-damage-in-amarillo
- roof-snow-and-ice-damage-in-amarillo
- roofing-methods-in-amarillo

## Decisions Made
- Updated all internal links to canonical targets before deleting directories (Rule 2 - prevents PageRank loss through 301 chains)
- Confirmed "duplicate titles" flagged in audit are false positives (layout.tsx default title shared with homepage, openGraph title within same page)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Updated ~30 internal links to canonical URLs**
- **Found during:** Task 1, Step 2 (internal link scan)
- **Issue:** Many pages across the site linked to `/roofing-amarillo-tx/`, `/roofing-services-lubbock-tx/`, and `/asphalt-roofing-in-amarillo/` which would become 301 redirect sources
- **Fix:** Bulk-replaced all internal hrefs to point to canonical targets before deleting directories
- **Files modified:** ~30 page.tsx files + layout.tsx
- **Verification:** grep confirmed zero remaining internal links to any of the 8 redirected slugs
- **Committed in:** 9f0513d9 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 missing critical - internal link canonicalization)
**Impact on plan:** Essential for SEO - prevents PageRank leaking through 301 hops. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 02 (URL Canonicalization) fully complete: all 3 plans executed
- 201 canonical URLs in sitemap, zero redirect conflicts
- Ready for Phase 03 (Meta & Titles) which can now safely optimize page titles without worrying about duplicate/competing pages

---
*Phase: 02-url-canonicalization*
*Completed: 2026-02-20*
