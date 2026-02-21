---
phase: 09-image-optimization
plan: 01
subsystem: images
tags: [r2, cdn, cloudflare, image-migration, schema, seo]

requires:
  - phase: 08-content-enrichment
    provides: "Complete page content with schema JSON-LD"
provides:
  - "All image references migrated from local paths to Cloudflare R2 CDN"
  - "Zero local /images/ or 5starroofingpros.com/images/ references in source"
  - "Post-build image audit script (scripts/audit-images.js)"
affects: [09-02-alt-text, 09-03-contextual-images, 10-final-validation]

tech-stack:
  added: []
  patterns: [r2-cdn-image-urls, post-build-image-audit]

key-files:
  created:
    - scripts/audit-images.js
    - scripts/migrate-images-to-r2.js
  modified:
    - lib/schema-templates.ts
    - "189 page files in app/"

key-decisions:
  - "Logo kept local (/logo.png) since R2 5star-logo.png returns 404 -- small static asset in public/"
  - "Schema image default uses completed-amarillo-4-1280w.jpg instead of per-city images that do not exist"
  - "EPDM images mapped to commercial-amarillo-5 and commercial-pampa-7 (plan originals returned 404)"
  - "Same-page duplicate detection excludes schema JSON-LD image references (schema should match hero)"

patterns-established:
  - "R2 CDN base: https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev"
  - "audit-images.js as reusable post-build validation gate"
  - "LOCAL_ALLOWLIST in audit script for intentional local assets"

duration: 5min
completed: 2026-02-21
---

# Phase 9 Plan 1: R2 Image Migration Summary

**Migrated 207 image references across 189 files from local paths and production URLs to Cloudflare R2 CDN, with post-build audit script validating zero broken URLs and 100% R2 compliance**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-21T02:49:46Z
- **Completed:** 2026-02-21T02:54:49Z
- **Tasks:** 2
- **Files modified:** 190

## Accomplishments
- Replaced 24 inline img src attributes, 2 blog background images, and 165+ schema JSON-LD image properties with R2 CDN URLs
- Updated schema-templates.ts image URL template to use R2 instead of non-existent per-city production URLs
- Created reusable audit-images.js that validates all image URLs in built HTML output
- Fixed 3 pre-existing broken R2 URLs (commercial-amarillo-14/15, commercial-pampa-8) discovered during migration

## Task Commits

Each task was committed atomically:

1. **Task 1: Migrate all local image references to R2 URLs** - `b5906731` (feat)
2. **Task 2: Create image audit script and validate zero broken URLs** - `171fb47c` (feat)

## Files Created/Modified
- `lib/schema-templates.ts` - Schema image URL updated from production domain to R2
- `scripts/migrate-images-to-r2.js` - Batch migration script (Node.js, 10 inline + 1 bg + 13 schema mappings)
- `scripts/audit-images.js` - Post-build image audit: scans out/ HTML for broken URLs, duplicates, R2 compliance
- `app/*/page.tsx` (187 files) - Schema image URLs migrated from 5starroofingpros.com to R2
- `app/services/page.tsx` - 4 inline img src attributes migrated
- `app/residential-roofing/page.tsx` - 3 inline img src attributes migrated
- `app/blog/*/page.tsx` (2 files) - Background image URL migrated

## Decisions Made
- **Logo stays local:** R2 5star-logo.png returns 404, so /logo.png kept as-is. Small file committed in public/.
- **Schema default image:** Used completed-amarillo-4-1280w.jpg as default business image in schema-templates.ts since per-city images (e.g., amarillo-location.jpg) do not exist on R2.
- **EPDM replacements adjusted:** Plan specified commercial-amarillo-14/15 which return 404 on R2. Used commercial-amarillo-5 and commercial-pampa-7 instead.
- **Duplicate detection scoping:** Same-page duplicate check strips `<script>` tags to avoid false positives from schema JSON-LD referencing the same hero image.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed 3 pre-existing broken R2 image URLs**
- **Found during:** Task 1 (R2 URL verification)
- **Issue:** commercial-amarillo-14-1280w.jpg, commercial-amarillo-15-1280w.jpg, and commercial-pampa-8-1280w.jpg all return HTTP 404 on R2 -- these were already in the codebase from prior phases
- **Fix:** Replaced with verified working alternatives (commercial-amarillo-5, commercial-pampa-6, commercial-pampa-7)
- **Files modified:** app/claude-tx-roofing/page.tsx, app/vega-tx-roofing/page.tsx, app/midland-tx-roofing/page.tsx
- **Verification:** curl HEAD requests confirm HTTP 200 for all replacements
- **Committed in:** b5906731 (Task 1 commit)

**2. [Rule 1 - Bug] Adjusted EPDM image mappings for verified R2 URLs**
- **Found during:** Task 1 (pre-replacement URL verification)
- **Issue:** Plan-specified R2 URLs for EPDM1/EPDM2 (commercial-amarillo-14/15) return 404
- **Fix:** Used commercial-amarillo-5 and commercial-pampa-7 which are verified HTTP 200
- **Files modified:** scripts/migrate-images-to-r2.js (mapping table)
- **Verification:** All 19 R2 replacement URLs verified HTTP 200 before migration
- **Committed in:** b5906731 (Task 1 commit)

**3. [Rule 1 - Bug] Homepage (app/page.tsx) had local image reference not in plan file list**
- **Found during:** Task 1 (grep scan)
- **Issue:** app/page.tsx contained src="/images/EPDM2-1280w.jpg" but was not listed in the plan's file list
- **Fix:** Batch script caught and migrated it automatically (same mapping as other EPDM2 references)
- **Files modified:** app/page.tsx
- **Committed in:** b5906731 (Task 1 commit)

---

**Total deviations:** 3 auto-fixed (all Rule 1 - bugs)
**Impact on plan:** All fixes necessary for correctness. No scope creep. Plan's URL mappings had 2 incorrect R2 paths that were caught by pre-verification.

## Issues Encountered
- `status` is a read-only shell variable in zsh -- renamed to `http_code` in verification script
- Audit script initially flagged 182 false-positive same-page duplicates (schema JSON-LD "image" matching url() regex inside script tags) -- fixed by stripping script tags before visual duplicate detection

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All image URLs point to R2 CDN -- ready for Plan 09-02 (alt text audit)
- audit-images.js available for ongoing validation in future plans
- 3 pre-existing broken R2 URLs fixed as bonus cleanup
- `/logo.png` is the only intentional local image (allowlisted in audit)

## Self-Check: PASSED

- scripts/audit-images.js: FOUND
- scripts/migrate-images-to-r2.js: FOUND
- Commit b5906731: FOUND
- Commit 171fb47c: FOUND
- src="/images/" in app/*.tsx: 0 (expected 0)
- 5starroofingpros.com/images/ in app/*.tsx: 0 (expected 0)
- url(/images/) in app/*.tsx: 0 (expected 0)
- r2.dev in schema-templates.ts: 1 (expected 1)

---
*Phase: 09-image-optimization*
*Completed: 2026-02-21*
