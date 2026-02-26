---
phase: 11-ahrefs-crawl-fixes
plan: 01
subsystem: seo
tags: [open-graph, meta-tags, next-js-metadata, social-sharing]

requires:
  - phase: 10-technical-validation
    provides: validated build pipeline and page inventory
provides:
  - Complete Open Graph tags on all 218 HTML pages (og:title, og:description, og:image, og:url)
  - Bulk OG tag addition script (scripts/add-og-tags.js)
  - Default OG metadata in root layout.tsx for future pages
affects: [11-ahrefs-crawl-fixes]

tech-stack:
  added: []
  patterns: [Next.js metadata openGraph inheritance with page-level overrides]

key-files:
  created:
    - scripts/add-og-tags.js
  modified:
    - app/layout.tsx
    - app/**/page.tsx (216 files)

key-decisions:
  - "Next.js page-level openGraph fully overrides layout defaults (no deep merge) -- all 7 pre-existing OG pages needed images/url/siteName added manually"
  - "Single R2 image used as default og:image for all pages (completed-amarillo-4-1280w.jpg)"
  - "Script handles two metadata formats: standard multiline and compact single-line with closing brace"

patterns-established:
  - "OG tag pattern: every page.tsx metadata includes openGraph block with title, description, url, siteName, images, locale, type"

requirements-completed: []

duration: 8min
completed: 2026-02-25
---

# Phase 11 Plan 01: Open Graph Tags Summary

**Complete Open Graph tags added to all 216 pages via root layout defaults, bulk script, and manual fixes for 7 pre-existing pages**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-26T02:37:32Z
- **Completed:** 2026-02-26T02:45:40Z
- **Tasks:** 3
- **Files modified:** 217

## Accomplishments
- Added default openGraph block to root layout.tsx providing fallback OG tags for all pages
- Created and ran scripts/add-og-tags.js to add page-specific OG overrides to 209 pages
- Fixed 7 pre-existing openGraph pages that were missing images, url, siteName, and locale fields
- Verified 100% OG tag coverage: all 218 HTML files have og:title, og:description, og:image, og:url

## Task Commits

Each task was committed atomically:

1. **Task 1: Add default Open Graph tags to root layout.tsx** - `e0618a80` (feat)
2. **Task 2: Write and run script to add page-specific OG overrides** - `f14b1c41` (feat)
3. **Task 3: Build and verify / fix pre-existing OG pages** - `6eaaca63` (fix)

## Files Created/Modified
- `app/layout.tsx` - Added default openGraph metadata block
- `scripts/add-og-tags.js` - Bulk OG tag addition script (supports --dry-run)
- `app/**/page.tsx` (209 files) - Added page-specific openGraph blocks via script
- `app/page.tsx` - Added images array to existing OG block
- `app/contact/page.tsx` - Added images, url, siteName, locale to existing OG block
- `app/amarillo-weather-impact-on-roofing/page.tsx` - Added images, url, siteName, locale
- `app/articles/page.tsx` - Added images, url, siteName, locale
- `app/amarillo-homes-roofing-services/page.tsx` - Added images, url, siteName, locale
- `app/odessa-tx-roofing/page.tsx` - Added images, url, siteName
- `app/amarillos-best-roofer/page.tsx` - Added images, url, siteName, locale

## Decisions Made
- Next.js page-level openGraph fully replaces layout defaults (no deep merge) -- required manual fix for 7 pages
- Single R2 image (completed-amarillo-4-1280w.jpg) used as default og:image across all pages
- Script handles compact metadata format where description + closing `};` share one line (9 hail-damage pages)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added images/url/siteName to 7 pre-existing OG pages**
- **Found during:** Task 3 (Build verification)
- **Issue:** 7 pages had openGraph but without images array, url, or siteName. Next.js does NOT deep-merge openGraph -- page-level fully overrides layout defaults. These pages rendered without og:image in HTML.
- **Fix:** Manually added images array, url, siteName, and locale to all 7 pre-existing openGraph blocks
- **Files modified:** app/page.tsx, app/contact/page.tsx, app/amarillo-weather-impact-on-roofing/page.tsx, app/articles/page.tsx, app/amarillo-homes-roofing-services/page.tsx, app/odessa-tx-roofing/page.tsx, app/amarillos-best-roofer/page.tsx
- **Verification:** Rebuilt site, verified 218/218 HTML files have og:image
- **Committed in:** 6eaaca63

---

**Total deviations:** 1 auto-fixed (1 missing critical)
**Impact on plan:** Essential fix -- without it, 7 pages would have been missing og:image. No scope creep.

## Issues Encountered
- 9 hail-damage pages had compact metadata format (description + closing `};` on same line) -- script regex updated to handle both formats
- .DS_Store files in out/ directory caused ENOTEMPTY build errors -- cleaned before rebuild

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All pages have complete OG tags, ready for social sharing validation
- Ahrefs crawl should now pass OG tag checks for all pages
- Remaining 11-02 and 11-03 plans can proceed

---
*Phase: 11-ahrefs-crawl-fixes*
*Completed: 2026-02-25*
