# Phase 12 — Stream A (Critical Layout Fixes) Summary

**Status:** Complete, all 6 tasks shipped.
**Build:** `npx next build` green, zero errors.

## Commits

| # | Task | Commit |
|---|---|---|
| 12.1 | Rebuild `/services/` hero to match `/contact/` | `42436ea5` |
| 12.2 | Strip dated card chrome from homepage hero | `b3bfb433` |
| 12.3 | Chat widget + sticky bar collision (CSS only) | `015bc34e` |
| 12.4 | Fix "Amarillo" phantom link styling | `86d38df9` |
| 12.5 | Standardize section rhythm tokens | `1eb3051d` |
| 12.6 | `.hero-location` warm overlay | `234c9ed1` |

## Verification

- `grep "backdrop-blur-sm" app/page.tsx` → zero hits (hero fully stripped).
- `grep "md:border-l-4 md:border-brand-gold" app/page.tsx` → zero hits.
- Remaining `border-l-4 border-brand-gold` hit is line 401 (unrelated "Did You Know?" callout; Stream E 12.22 owns).
- Services hero DOM order (lines 119-177): `<section hero-services section-major>` → Breadcrumb → `<h1>` → subhead → dual CTA (`tel:8066226041` + `/contact/`) → 4-badge trust row. `min-h-[400px]` + background `completed-amarillo-13-1280w.webp`.

## Deviations

**12.1 — background image.** Used `completed-amarillo-13-1280w.webp` (only `visualQuality=hero` + `completed` + `residential` asset in `image-db.json`). Phase 13 swaps to real `images/heroes/services-hero.jpg`.

**12.3 — cannot force collapse-on-load from code.** Chat widget is a `<script src>` loader in `app/layout.tsx`, not a component. Applied CSS positioning via seven defensive selectors + `body:has(.sticky-contact-bar.visible)` rules. **Rich must toggle "Open by default = OFF" in LeadConnector dashboard for widget `68e83a586141ff5c3b72b4a4`.**

**12.5 / 12.6 — scope-bounded.** Plan acceptance said "grep `app/**/*.tsx`" but task file list reads "`app/page.tsx`, `app/services/page.tsx`, any city page template". Interpreted "any city page template" as the reference template (`roof-repair-amarillo/page.tsx`) — 158 other template files would be ~3k edits. **157 city/service templates still have ad-hoc `py-*` on `<section>` and old dark-gray hero overlays.** Recommend codemod pass before Phase 12 verification closes.

## Findings for Streams B / C / E

- **Blue palette violations (Stream B 12.7/12.11):** `app/layout.tsx:117` header Contact button uses `bg-[#3D5A70]`. `roof-repair-amarillo/page.tsx` lines 284, 411 have `from-blue-50` gradient cards. Sweep in Stream B.
- **12.9 CTA hover:** New services hero CTAs use `hover:scale-105` copied from contact — include in Stream B sweep.
- **`.hero-overlay` still dead** in `globals.css:174-176` — task 12.25 owns.
- **Trust row placement:** Services hero now has an inline 4-badge trust row (rating/experience/free/insurance). Stream C 12.14's `InsuranceLogos` carrier strip should sit below and not duplicate messaging.
- **Card-panel sections:** `app/page.tsx` lines 246, 489, 725 use all-sides `p-8`/`p-12`. Pass the `py-*` grep; left alone.

## Decisions Rich needs before Stream B

1. Toggle "Open by default = OFF" in LeadConnector dashboard for widget `68e83a586141ff5c3b72b4a4`.
2. Accept scope-bounded 12.5/12.6 and file a codemod pass, or have Stream B/E bulk-sweep inline.
3. Confirm `bg-[#3D5A70]` header accent is intentional or to purge in 12.7.

## Self-Check: PASSED

- `git log --oneline main~6..HEAD` → 6 commits, one per task, all present.
- Final `npx next build` green, zero errors.
- Services hero DOM structure matches plan acceptance 12.1 (a)-(d).
- Hero chrome grep checks zero.
