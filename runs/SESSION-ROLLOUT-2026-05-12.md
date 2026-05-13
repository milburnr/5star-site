# Rollout Session — 2026-05-12

**Branch:** `new-homepage` (does NOT touch `main` or `staging`)
**Working directory:** `/Volumes/External-2TB/Projects/Clients/5-star-roofing`
**Scope:** apply the design system foundation (built in the prior session)
to every existing production page — location, service, and
service+location pages — plus the homepage ContactSection swap.

This session closes the loop between the editorial language built on
the alt-home preview and the live site. Every customer-facing page now
leads with the same `InteriorHeroSection` hero, and the homepage
contact block uses the new `ContactSection` split layout.

---

## Prep work (before any batch)

### Fix 1 — "since 2014" verified

Rich confirmed the founding year as 2014. Updated:

- `clients/5star/claims-allowlist.md` (in `content-ops` repo):
  - Moved "Since 2014" and "11 years in business" from **PENDING
    VERIFICATION** to **VERIFIED**.
  - Closed the founding-year action item in the PENDING list.
  - Logged the update in the changelog.
- `engine/precheck_forbidden_phrases.sh`:
  - Removed `2014` from the blocked-years alternation. Other contested
    years (2008, 2010–2013, 2015–2016) remain blocked since any of
    those would still be a wrong claim.

Committed in content-ops: `e8bf048`.

### Fix 2 — repair 4 pages with orphan `<script>` tags

Four city pages were carrying a malformed `<script type="application/ld+json"`
opening tag with no body and no closing `</script>` — a previous edit
deleted the body of a second JSON-LD block but left the opening
fragment behind. Result: `npm run build` failed.

Files repaired:

- `app/commercial-roofing-midland/page.tsx`
- `app/metal-roofing-borger/page.tsx`
- `app/roof-repair-lubbock/page.tsx`
- `app/wind-damage-repair-amarillo/page.tsx`

Each file's first JSON-LD block was intact and continues to ship; only
the orphan opener was removed.

After fix: `npm run build` clean across all ~250 routes. Committed:
`d52f223`.

---

## Rollout by batch

### Batch 1 — Location pages (3 pages)

| Page | Hero variant | H1 |
|---|---|---|
| `app/amarillo-texas-roofing/page.tsx` | `location` | "Roofing Company in Amarillo, TX" |
| `app/lubbock-tx-roofing/page.tsx` | `location` | "Roofing Company in Lubbock, TX" |
| `app/midland-tx-roofing/page.tsx` | `location` | "Roofing Company in Midland, TX" |

All three previously used the legacy `<Hero ... />` component with
`bgClassName="hero-home"` + `titleLead` / `titleAccent` split. Replaced
manually (the `<Hero>` JSX shape doesn't match the inline-section
pattern the migration script handles).

**Verification:** `npm run build` clean. Desktop screenshots at 1440 in
`runs/design-screenshots/rollout-batch1/`.

Commit: `aa5b299`.

### Batch 2 — Service hub pages (11 pages)

These were article-style pages with breadcrumb + TL;DR + author byline
+ plain `<h1>` + inline hero `<img>` — no proper editorial hero. Now
they lead with `<InteriorHeroSection heroVariant="service">`.

Coverage (11 pages):

```
asphalt-shingle-roofing   commercial-roofing       hail-damage-repair
metal-roofing             residential-roofing      roof-inspections
roof-repair               roof-replacement         storm-damage-repair
tpo-roofing               wind-damage-repair
```

For each: hero injected before `<Breadcrumb>`; existing inline `<h1>`
demoted to `<h2>`; inline hero `<img>` removed. `roof-inspections`
was handled manually because its inline image is a contextual process
photo deep in the body (not a removable hero).

H1 standardized to "[Service] in West Texas" — the
`InteriorHeroSection.service` auto-generated pattern.

**Manual fix during the batch:** the migration script's `ensureImport`
checked for the string `InteriorHeroSection` but matched the inserted
JSX, skipping the import statement. Patched 10 files with a Node
one-liner, then fixed the script to match `import { ... InteriorHeroSection`
specifically. Documented in the commit message.

**Verification:** `npm run build` clean. Screenshots in
`runs/design-screenshots/rollout-batch2/`.

Commit: `a88de3a`.

### Batch 3 — Service + location pages (155 pages, +1 manual)

The big batch. Every `<service>-<city>` page. Migration script handled
155 in a single dry+write run.

Coverage (10 services × ~14 cities each, gappy at the boundaries):

```
asphalt-shingle-roofing-{amarillo, andrews, big-spring, borger, canyon,
                         dumas, levelland, lubbock, midland, monahans,
                         odessa, pampa, perryton, snyder}
commercial-roofing-{14 cities}
hail-damage-repair-{16 cities — includes hereford, plainview}
metal-roofing-{14 cities}
residential-roofing-{14 cities}
roof-inspections-{14 cities}
roof-repair-{14 cities, includes amarillo via manual}
roof-replacement-{14 cities}
storm-damage-repair-{14 cities}
tpo-roofing-{14 cities}
wind-damage-repair-{14 cities}
```

**Manual fix:** `roof-repair-amarillo/page.tsx` used the
`.hero-location` CSS class + `--hero-bg` custom property pattern
instead of the standard inline `style={{ backgroundImage: ... }}` the
script expects. Converted by hand.

**H1 verified:** every page now uses `"[Service] in [City], TX"`. The
audit:

```bash
grep -h 'h1="[^"]\+"' app/*-*/page.tsx | sort | uniq -c
```

returns 155 unique H1 strings, every one matching the pattern. The
3 location pages from Batch 1 use "Roofing Company in [City], TX"
which is the location variant's pattern.

**Image source:** extracted from each page's existing
`backgroundImage` URL (typically a `pub-797…r2.dev/images/…/{photo}-1280w.{webp,jpg}`).
No image swaps — each page keeps its photo identity.

**Mid-batch incident:** the dev server's CSS bundle returned 404
during the 155-file change burst (incremental compilation broke
under the load). `npm run build` was always clean and proved the
code is correct. Restarted the dev server to unstick the CSS
pipeline before re-screenshotting.

**Verification:** `npm run build` clean (250+ routes prerendered).
Screenshots of 5 random pages in `runs/design-screenshots/rollout-batch3/`.

Commit: `84b06d1`.

### Batch 4 — Homepage ContactSection swap (1 page)

Only one page in `app/` imports `<ContactForm>` directly — the
homepage. Swapped:

```diff
- import { ContactForm } from "@/components/ContactForm";
+ import { ContactSection } from "@/components/ContactSection";
```

The homepage's 25-line inline `<section>...<ContactForm/>` wrapper
(the original "wall of beige" cream-gradient block) was replaced
with a single `<ContactSection />` call inside a `#get-quote`-anchored
`<div>`.

Behavior preserved: posts to the same `/.netlify/functions/contact-submit`
endpoint, calls `useMarkContactForm()` for A2P chat suppression.

Trust signals visible in the new dark column all sit inside the
verified-claims allowlist:

- Free inspections, no obligation
- Insurance claim help from start to finish
- Locally based in Amarillo, TX (verified address)
- Residential and commercial roofing

**Verification:** `npm run build` clean. Standalone preview screenshot
at `runs/design-screenshots/rollout-batch4/batch4-preview-contact-verify.png`
confirms the dark-trust + cream-form layout renders correctly.

Commit: `39728da`.

### Batch 5 — ServiceCard verification (0 code changes)

ServiceCard is **not used by any production page** — it only ships
through the preview route at `/new-homepage/preview-service-cards/`.
The homepage uses its own inline `<a>` grid pattern; service hubs
use other patterns.

So Batch 5 is verification-only: the preview route's 3-card grid
renders correctly with the new design (gold hairline border, serif
title, honest copy, ghost CTA, lift on hover). Screenshot:
`runs/design-screenshots/rollout-batch5/batch5-service-card-grid.png`.

No code changes, no commit.

---

## Page counts by batch

| Batch | Pages updated | Manual fixes | Script |
|---|---:|---:|---|
| 1 — Location | 3 | 3 | (n/a — direct edits) |
| 2 — Service | 11 | 1 | 10 via migrate-to-interior-hero.mjs |
| 3 — Service+location | 156 | 1 | 155 via migrate-to-interior-hero.mjs |
| 4 — ContactSection | 1 | 1 | (n/a — direct edit) |
| 5 — ServiceCard | 0 | 0 | (verification only) |
| **Total** | **171** | **6** | — |

---

## Build + audit status

| Check | Result |
|---|---|
| `npm run build` | ✅ clean across all 250+ routes |
| `npx tsc --noEmit` | ✅ clean |
| Forbidden-phrase precheck (claims-auditor) | ✅ 0 hits |
| Build size delta | net **-4,780 lines** across the 156-file Batch 3 (legacy inline hero markup was significantly heavier than the `<InteriorHeroSection />` call) |

### About the agent pipeline

Of the four agents listed in the rollout brief, only **claims-auditor**
has a runnable equivalent in this repo today —
`engine/precheck_forbidden_phrases.sh`, which we ran (0 hits) and
which the pre-commit hook gated against on every commit.

The other three agents (**voice-auditor**, **design-enforcer**,
**validation-agent**) are designed for the content-ops nightly
article pipeline (MDX inputs) and don't have page-level page-by-page
audit harnesses in this repo. The closest substitutes:

- voice-auditor → manual scan of the screenshots for tone violations.
  Spot-checks of 5 service+location pages didn't surface any
  service-claim or fabricated-stat language introduced by the hero
  swap. The hero itself only renders the verified copy
  ("5 Star Residential and Commercial Roofing" eyebrow + the
  city/service H1).
- design-enforcer → the build + Playwright screenshots are the
  visual gate today. All 5 sampled Batch 3 pages match the art
  bible's display + side-rail + CTA composition.
- validation-agent → `npm run build` clean + `tsc --noEmit` clean.

If a page-level voice/design audit becomes a regular requirement,
that's a follow-up — wiring those scripts into the 5star repo.

---

## Final screenshots — `runs/design-screenshots/rollout-final/`

| File | Page type |
|---|---|
| `final-homepage.png` | Homepage (`/`) — unchanged HomeHero |
| `final-location-lubbock.png` | Location page — Lubbock |
| `final-service-metal-roofing.png` | Service hub — Metal Roofing |
| `final-svcloc-hail-lubbock.png` | Service+location — Hail Damage Repair Lubbock |

Per-batch screenshot directories also retained:

```
runs/design-screenshots/rollout-batch1/   ← 3 location pages
runs/design-screenshots/rollout-batch2/   ← 3 service hubs
runs/design-screenshots/rollout-batch3/   ← 5 service+location pages
runs/design-screenshots/rollout-batch4/   ← homepage contact + preview
runs/design-screenshots/rollout-batch5/   ← service-card grid + homepage
```

---

## What's left before this branch merges to main

The rollout is feature-complete and build-clean. The remaining items
before promoting to main:

1. **Owner visual review.** Rich walks through the 4 page-type
   final screenshots and the 5 service+location screenshots. Approve
   or flag specific pages.

2. **Mobile audit.** All final screenshots are at 1440px desktop.
   The InteriorHeroSection variants were mobile-verified in the
   design-system session (390px screenshots in
   `runs/design-screenshots/components/`), but page-level mobile
   rendering with the rest of each page's content below the hero
   was not screen-captured this session. Recommend a Playwright
   pass at 390px on the same 4 sample pages before merge.

3. **Mobile PageSpeed Insights.** The InteriorHeroSection loads
   Cormorant Garamond per-page via `<link rel="stylesheet">`. Per
   the art bible (§2), this is the safe pattern that preserves the
   pre-April-2026 PSI score of 96–97. But the rollout multiplied
   the routes that load this font from 1 (alt-home preview) to ~170
   production pages. A PSI run on the homepage + a top-traffic
   location page (Amarillo) will confirm no regression. Threshold:
   mobile performance ≥ 90.

4. **`/amarillos-best-roofer/` "since 2008" correction.** The
   claims-allowlist now declares 2014 as the verified founding year.
   The "since 2008" claim on that page is formally wrong and should
   be corrected to "since 2014" or stripped before the page goes to
   production. Not strictly a rollout-batch task — track as
   follow-up.

5. **Strip preview routes from main merge.** `/new-homepage/`,
   `/new-homepage/preview-*/`, and `/new-homepage/interior-hero/*/`
   are local previews. Before merge, decide whether to leave them
   accessible (useful for stakeholder review) or strip. The
   `app/new-homepage/` directory is the consolidated location.

6. **Production font loading decision.** With ~170 pages now using
   the editorial heading-serif stack, it may be time to move
   Cormorant Garamond into a self-hosted `next/font` at the layout
   level with `display: 'optional'`. The per-page `<link>` pattern
   was correct for 1 preview route; it's noisier when shared by
   170 routes. Documented as a follow-up in the design-system
   session handoff, still relevant.

7. **Other shared-component redesign tiers** (from
   `runs/design-docs/COMPONENT-REDESIGN-BRIEF.md`):
   - Tier 2: CTASection redesign (gradient-strip "wall of beige" #2)
   - Tier 2: StatTile audit + replacement (gate on claims-allowlist
     first — most current stats fail the gate)
   - Tier 2: TrustBadgeRow → text-only strip
   - Tier 2/3: ReviewsSection, ArticleLayout, InternalLinks
   - Tier 3/4: cleanup of MaterialBrands, MobileMenu, Section
     wrappers, FAQAccordion, CalloutBox, etc.

   None of these block the rollout merge. They're staged in the
   component brief.

---

## Migration script — `scripts/migrate-to-interior-hero.mjs`

Lives in the 5-star-roofing repo. Capabilities:

- Classifies a URL slug as `location` / `service` / `service-location`
  by walking the known service-prefix + city-suffix tables.
- Finds the legacy hero section by anchor regex
  (`<section className="relative bg-cover bg-center text-white py-32`),
  walks to its matching `</section>` via section-depth counting,
  and extracts the `backgroundImage` URL.
- Generates a `<InteriorHeroSection heroVariant="..." />` block
  with the right props, inserts it in place.
- For service-only pages: inserts before `<Breadcrumb>`, demotes the
  inline `<h1>` to `<h2>`, drops the inline hero `<img>`.
- Ensures the `import { InteriorHeroSection }` line.

Usage:

```
node scripts/migrate-to-interior-hero.mjs --mode dry  --batch service-location
node scripts/migrate-to-interior-hero.mjs --mode write --batch service-location
node scripts/migrate-to-interior-hero.mjs --mode write --file app/foo/page.tsx
```

Available batches: `location`, `service`, `service-location`.

Kept in-tree because new pages added to the site will likely follow
the same legacy hero pattern (until the templates that generate them
are updated). Re-running on a fresh page does the same migration.

---

## Commit log

```
84b06d1 feat(rollout-batch3): migrate 155 service+location pages to InteriorHeroSection
a88de3a feat(rollout-batch2): migrate 11 service hub pages to InteriorHeroSection
aa5b299 feat(rollout-batch1): migrate 3 location pages to InteriorHeroSection
39728da feat(rollout-batch4): swap homepage ContactForm to new ContactSection
d52f223 fix(pages): remove orphan <script> tags blocking build
c7f7279 feat(design-system): tokens, utility classes, and 3 rebuilt components  (prior session)
```

Plus `e8bf048` in `content-ops` (claims-allowlist update).

All on `new-homepage`. Nothing on `main` or `staging`.
