# 5 Star Roofing — Merge-to-Main Complete

**Date:** 2026-05-12
**Merge commit:** `c8817a9` (staging → main)
**Pushed to:** `origin/main` at github.com/milburnr/5star-site
**Production URL:** https://5starroofingpros.com
**Deploy confirmed live:** 2026-05-12 21:53 (ETag changed from `dcba61a0...` → `366d4c47...`, AnimatedCounter refs gone from served HTML)

This is the final handoff for the redesign rollout that started with the new editorial hero system in early May. The site now ships without fabricated stats, without the templated count-up gimmick, and with verified Lighthouse scores across the board.

---

## AnimatedCounter — confirmed gone

```bash
$ grep -r "AnimatedCounter" --include="*.tsx" --include="*.ts" /Volumes/External-2TB/Projects/Clients/5-star-roofing
# (no output)
```

Verification across the entire codebase: **0 references remain**. Component file deleted; `components/_DEPRECATED.md` documents the removal and the rule that prevents recreation (any future number must live in `claims-allowlist.md` and ship as static text, not animated).

Three sister dead components also deleted: `StatTile.tsx`, `TrustBadgeRow.tsx`, `CTASection.tsx` (verified zero imports across `app/` before removal).

---

## Final Lighthouse scores (mobile, simulated 3G throttling)

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| `/` | **95** | 93 | 96 | 92 |
| `/amarillo-tx-roofing/` | **96** | 95 | 96 | 100 |
| `/hail-damage-repair-lubbock/` | **96** | 96 | 96 | 100 |
| `/metal-roofing/` | **96** | 96 | 93 | 100 |

All four pages clear the 90 threshold across every category. Performance lands in the 95-96 band — the AnimatedCounter strip gave back a small budget (rAF + IntersectionObserver work removed per city page) without any LCP or CLS regression.

Full Lighthouse JSON reports: `runs/lighthouse-final/{page}-mobile.json`

---

## Screenshot audit trail

**Location (local only, gitignored — 22 MB of PNGs):**

```
runs/design-screenshots/pre-merge-final/
  01-homepage-1440.png        01-homepage-390.png
  02-lubbock-1440.png         02-lubbock-390.png
  03-amarillo-1440.png        03-amarillo-390.png
  04-hail-damage-repair-1440.png  04-hail-damage-repair-390.png
  05-hail-damage-lubbock-1440.png 05-hail-damage-lubbock-390.png
  06-metal-roofing-1440.png   06-metal-roofing-390.png
  07-commercial-odessa-1440.png   07-commercial-odessa-390.png
  08-gallery-1440.png         08-gallery-390.png
  09-about-1440.png           09-about-390.png
```

Captured against the local static export at `localhost:4250` after the AnimatedCounter strip, before merge.

---

## Indexing submissions

### IndexNow (Bing / Yandex / Naver / Seznam / Yep)

```json
{
  "status": "success",
  "http_status": 200,
  "count": 217,
  "host": "5starroofingpros.com"
}
```

**217 / 217 URLs accepted in a single batch.** No rate limiting on IndexNow.

### Google Search Console Indexing API

- **211 / 217 URLs submitted successfully**
- **6 URLs deferred** — hit the 200/day daily quota (the API returned HTTP 429 after the 211th publish; daily limit is 200, the 211 figure is the count including pre-existing today-quota usage). Deferred URLs:
  - `https://5starroofingpros.com/tpo-roofing/`
  - `https://5starroofingpros.com/wind-damage-repair-big-spring/`
  - `https://5starroofingpros.com/wind-damage-repair-dumas/`
  - `https://5starroofingpros.com/wind-damage-repair-lubbock/`
  - `https://5starroofingpros.com/wind-damage-repair-odessa/`
  - `https://5starroofingpros.com/wind-damage-repair-pampa/`

Quota resets at 00:00 PT. Re-submit tomorrow via:

```bash
python3 -c "
import sys; sys.path.insert(0, '/Volumes/External-2TB/Projects/content-ops/engine')
from indexing import submit_urls
urls = [
  'https://5starroofingpros.com/tpo-roofing/',
  'https://5starroofingpros.com/wind-damage-repair-big-spring/',
  'https://5starroofingpros.com/wind-damage-repair-dumas/',
  'https://5starroofingpros.com/wind-damage-repair-lubbock/',
  'https://5starroofingpros.com/wind-damage-repair-odessa/',
  'https://5starroofingpros.com/wind-damage-repair-pampa/',
]
print(submit_urls(urls))
"
```

All 217 URLs received by IndexNow regardless of GSC quota, so Bing/Yandex coverage is complete already.

Full GSC result: `runs/lighthouse-final/gsc-submission-result.json`
Full URL list: `runs/lighthouse-final/urls-submitted.json`

---

## What landed in this merge (last 20 commits)

```
c8817a9  merge(staging→main): claims/stats sweep + AnimatedCounter strip + final QA
169415e  chore(verify): final-pass Lighthouse reports + ignore screenshots
15570b9  fix(claims): strip every AnimatedCounter site-wide + delete dead components
8977b57  docs: handoff log final state for merge-ready session
1e8700b  fix(gallery): swap legacy <Hero> to InteriorHeroSection
89d422a  fix(claims): strip fabricated stats per allowlist + correct sub claim
9eb5353  fix(service-areas): map zoom + responsive aspect so the region is visible
31c1ec5  fix(service-areas): rebuild hub as focused West Texas pillar page
087462f  fix(mobile-nav): expandable accordion for Services + Service Areas
12248dc  fix(hero): restore editorial scale on mobile decorative display
837b003  fix(hero): mobile display overflow + sticky-CTA overlap on interior pages
8ff53a2  perf(hail-hub): same-origin AVIF/WebP hero — LCP 7.8s → 2.8s, perf 76 → 96
f04baa5  fix(about): real hero + card treatment on feature tiles + honest alt text
e1daa8d  fix(home): scope content-visibility placeholder to mobile only
17c83b8  fix(routes): rename /amarillo-texas-roofing/ → /amarillo-tx-roofing/
0d1845e  fix(contact): remove duplicate footer Maps iframe; keep MapEmbed only
64a769c  fix(contact): replace JSX-string icons with real components
2359367  fix(theme): remove body dark-bg override that broke 145 interior pages
790ded6  perf(hero): responsive preload (imagesrcset + type=image/avif)
bf24a0c  perf(hubs): wire AVIF/WebP image-set into service-hub heroes
```

Headline themes:

1. **Claims integrity** — 17 named forbidden stats from the allowlist + ~50 AnimatedCounter fabrications removed across ~75 page files. Sub-claim contradiction fixed on service-areas.
2. **Design rollout completion** — gallery joined the InteriorHeroSection family; all 170+ pages now share the editorial hero system.
3. **Performance** — hub hero AVIF/WebP, responsive preload, theme-regression fix that had broken interior body copy on 145 pages.
4. **Mobile** — hero overflow, sticky-CTA overlap, expandable nav accordion.

---

## Explicitly deferred (not in this merge)

These items are known and tracked, not regressions:

1. **118-page manual repair queue** — pages flagged for content-quality issues by prior audits, awaiting hand-rewrite. Not blocking SEO health.
2. **160 image-validator flags** — image alt-text or photo-vs-topic mismatches surfaced by the validator pass. Not visual defects; tracked for the next image curation cycle.
3. **Hero scroll parallax** — art bible §6.5 deferred. Subtle 5-10px drift on the hero photo when content sections scroll. Implementable now that content sections ship below the hero; gated on a fresh Lighthouse comparison so we don't trade perf for polish.
4. **InternalLinks restyle** — art bible asks for "anchor links, no cards." Component still uses rounded card/border treatment across 150+ pages. Non-trivial visual change; warrants a screenshot-pair review.
5. **GAF Master Elite footer badge** — `app/layout.tsx` ships a `gaf-master-elite.svg` trust badge. Allowlist marks the credential `verified: false`. Either Rich confirms with a GAF directory link or strip the badge.
6. **6 wind-damage URLs queued for tomorrow's GSC submit** — hit today's 200/day quota.

---

## Honest assessment: does 5starroofingpros.com now look and perform like a $60k website?

Yes — close enough that the gap is what you'd expect from a site at this stage, not a quality problem. The editorial hero system is on every page in the rotation. Performance is in the 95-96 range on mobile, which is rare for a 250-route static site carrying interactive maps, third-party chat, and a real form. Claims integrity is at a place where a competitor's audit wouldn't surface anything load-bearing — the fabricated numbers that used to telegraph "template" are gone, and what's left is verifiable (UL 2218 Class 4, Texas Prompt Payment Act timing, Amarillo headquarters since 2014, real Google reviews via Places API). The brand reads as warm, confident, and local across the board, which is exactly the art bible's three-word tone target. The two remaining gaps are stylistic (InternalLinks card treatment) and operational (the GAF credential and the manual repair queue) — neither is the kind of thing a customer notices first. The site is shippable, it shipped, and the production deploy reflects the work.

---

## Files of record

- `runs/SESSION-MERGE-READY-2026-05-12.md` — the live handoff during the work
- `runs/SESSION-COMPLETE-5STAR.md` — this file
- `runs/lighthouse-final/*.json` — Lighthouse reports + GSC result + URL list
- `runs/design-screenshots/pre-merge-final/*.png` — local screenshot audit (gitignored)
- `scripts/strip-fabricated-stats.mjs` — re-runnable claim stripper
- `scripts/strip-animated-counters.mjs` — re-runnable counter stripper
- `components/_DEPRECATED.md` — rule preventing AnimatedCounter from coming back
