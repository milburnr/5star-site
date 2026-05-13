# Design System Session — 2026-05-12

**Branch:** `new-homepage` (does NOT touch `main` or `staging`)
**Working directory:** `/Volumes/External-2TB/Projects/Clients/5-star-roofing`
**Scope:** convert the editorial language established in the earlier
session (alt-home + 4 hero variants + art bible) into a reusable design
system, plus rebuild the three highest-priority shared components
(`InteriorHeroSection`, `ContactSection`, `ServiceCard`).

This session takes the next step the previous one teed up. We had:
tokens documented but not in code, an art bible but no utility classes,
and three hero variants but no single entry point a page could call.

This session lands all of that.

---

## Files changed

### Phase 1 — Token integration

| File | Change |
|---|---|
| `tailwind.config.ts` | Extended `colors.brand` with the design-tokens-5star.json palette (`primary-gold`, `accent-gold`, `burnt-orange`, `cream`, `dark-bg`, `surface-ink`, `surface-brown-deep`, `cta-text-dark`, `text-ivory`, and the four CTA gradient stops). Added `fontFamily.display` (Cormorant stack) and `fontFamily.heading-serif` (Cormorant Garamond stack). |
| `app/globals.css` | Added a documented design-system block in `:root` with `--color-*`, `--font-*`, `--section-*`, `--cta-gradient`, and `--cta-shadow` CSS variables that mirror the JSON token file. Added 14 new utility classes in `@layer components` (see "Utility classes added" below). |

The legacy `brand.gold`, `brand.gold-light`, `brand-brown`, `.btn-primary`,
`.section-major`, etc. are **kept** to keep existing pages working. New
work should use the new tokens; migration is per-page during the
COMPONENT-REDESIGN-BRIEF rollout.

### Phase 2 — `InteriorHeroSection`

| File | Change |
|---|---|
| `components/InteriorHeroSection.tsx` | New. Single entry point for every non-homepage hero — routes by `heroVariant` prop to `<LocationHero>`, `<ServiceHero>`, or `<ServiceLocationHero>`. Throws at runtime if required props (`city` / `service`) are missing for a given variant. No stat-bar slot exposed. |
| `components/heroes/LocationHero.tsx` | Added optional override props: `h1Override`, `eyebrowOverride`, `ctaText`, `ctaHref`. Existing call sites keep working — all overrides default to current behavior. |
| `components/heroes/ServiceHero.tsx` | Same override-prop additions. |
| `components/heroes/ServiceLocationHero.tsx` | Same override-prop additions. |
| `app/new-homepage/interior-hero/location/page.tsx` | New preview route (Lubbock, TX). |
| `app/new-homepage/interior-hero/service/page.tsx` | New preview route (Hail Damage). |
| `app/new-homepage/interior-hero/service-location/page.tsx` | New preview route (Lubbock + Hail Damage Repair). |

### Phase 3 — `ContactSection`

| File | Change |
|---|---|
| `components/ContactSection.tsx` | New. Split layout — 40% dark trust column + 60% cream form column. Heading, phone CTA, hours, 4 verified trust signals on the left; simplified form (name / phone / email / service / message) on the right. Mobile stacks vertically. Posts to the existing `/.netlify/functions/contact-submit` endpoint. Calls `useMarkContactForm()` for A2P chat-widget suppression. |
| `app/new-homepage/preview-contact/page.tsx` | New preview route. |

Note: the existing `components/ContactForm.tsx` (with the longer
address-fields form) is **not deleted** — it still ships on production
pages. `ContactSection` is the new editorial pattern that replaces it
as part of the redesign rollout.

### Phase 4 — `ServiceCard`

| File | Change |
|---|---|
| `components/page-sections/ServiceCard.tsx` | **Rebuilt.** Preserves the existing public API (`href`, `title`, `description`, `imageSrc`, `imageSrcSet`, `imageSizes`, `imageAlt`, `icon`, `ctaLabel`, `className`) so every consumer keeps working. Visual rewrite: `.card-standard` base, serif title via `--font-heading-serif`, honest copy, image with quiet 1.04 hover zoom, `.cta-secondary` ghost CTA. No stat overlays. No fabricated numbers. Hover lifts -2px, border brightens to `--color-primary-gold`. |
| `app/new-homepage/preview-service-cards/page.tsx` | New preview route (3-card grid). |

### Phase 5 — verification + handoff

| File | Change |
|---|---|
| `runs/SESSION-DESIGN-SYSTEM-2026-05-12.md` | This file. |
| `runs/design-screenshots/components/*.png` | 10 screenshots — see "Screenshots" below. |

---

## Utility classes added (globals.css `@layer components`)

All consume the design-system CSS variables and are documented in source.

| Class | Purpose |
|---|---|
| `.display-type` | Oversized editorial serif treatment — Cormorant, 0.56 opacity, viewport-scaled. For decorative display type on photos. |
| `.section-standard` | Standard content section padding + max-width centering. |
| `.section-dark` | Dark background section (`--color-dark-bg`) with ivory text. |
| `.section-cream` | Warm cream background section (`--color-cream`). |
| `.heading-primary` | H2 style — serif, warm gold, `clamp(2rem, 3.4vw, 3.4rem)`. |
| `.heading-secondary` | H3 style — same family, smaller. |
| `.body-text` | Standard body copy — system-ui stack, 1.65 line-height. |
| `.eyebrow` | Small caps label above headings. 0.18em tracking. |
| `.vertical-rule-text` | Rotated side-text treatment from the heroes. |
| `.cta-primary` | The gradient pill button (cream → burnt orange, gold-circled arrow, hover lift). |
| `.cta-secondary` | Ghost outline CTA for secondary actions. Auto-swaps to dark text on `.section-cream` / `.on-cream`. |
| `.card-standard` | Base card style — gold-tinted hairline border, soft shadow, -2px hover lift, border brightens on hover. |
| `.content-grid-2` | Two-column content grid; single column ≤720px. |
| `.content-grid-3` | Three-column content grid; single column ≤960px, two ≤720px? No — three ≥960px, otherwise one. |

---

## Design tokens added (tailwind.config.ts `colors.brand`)

```
primary-gold        #D6B274
display-gold        #D6B274
accent-gold         #F5C77A
gold-warm-bright    #EEC835
nav-gold            #F7E291
cta-cream           #F5F0E8
cta-amber           #F1C77A
cta-orange          #E08A36
cta-burnt-orange    #B84A11
burnt-orange        #B84A11
cream               #F5F0E8
dark-bg             #050403
surface-ink         #050403
surface-brown-deep  #120B06
cta-text-dark       #2B1810
text-ivory          #F2EADB
```

Plus `fontFamily.display` (Cormorant → Cormorant Garamond → Bodoni 72 →
Didot → Times → serif) and `fontFamily.heading-serif` (Cormorant
Garamond → Georgia → Times → serif).

---

## Screenshots

All in `runs/design-screenshots/components/`:

| File | What |
|---|---|
| `interior-hero-location-desktop.png` | InteriorHeroSection — location variant, Lubbock TX, 1440×900. |
| `interior-hero-location-mobile.png` | Same, 390×844. |
| `interior-hero-service-desktop.png` | InteriorHeroSection — service variant, Hail Damage, 1440×900. |
| `interior-hero-service-mobile.png` | Same, 390×844. |
| `interior-hero-service-location-desktop.png` | InteriorHeroSection — service+location, Lubbock + Hail Damage Repair, 1440×900. |
| `interior-hero-service-location-mobile.png` | Same, 390×844. |
| `contact-section-desktop.png` | ContactSection split layout, 1440 full-page. |
| `contact-section-mobile.png` | Same, 390 full-page (stacked). |
| `service-card-grid-desktop.png` | ServiceCard 3-up grid, 1440 full-page. |
| `new-homepage-regression-check.png` | Existing `/new-homepage/` route — unchanged by this session. |

---

## Build status

`npm run build` fails on **pre-existing** JSX syntax errors in four city
pages, none of which were touched in this session:

```
app/commercial-roofing-midland/page.tsx     line 158: malformed <script> tag
app/metal-roofing-borger/page.tsx           line 169: same
app/roof-repair-lubbock/page.tsx            line 157: same
app/wind-damage-repair-amarillo/page.tsx    line 169: same
```

Each one has an orphan `<script type="application/ld+json"` that's
missing its closing `>`, content, and `</script>`. The build was
already in this state at session start (`git stash` of my changes left
the same errors). These are independent of the design system work and
should be fixed in a separate cleanup pass — see "Follow-ups" below.

`npx tsc --noEmit -p tsconfig.json` for the rest of the codebase passes
cleanly. All files I created or edited type-check.

Dev server (`localhost:4250`) renders all four new preview routes
without console errors:

- `/new-homepage/interior-hero/location/`
- `/new-homepage/interior-hero/service/`
- `/new-homepage/interior-hero/service-location/`
- `/new-homepage/preview-contact/`
- `/new-homepage/preview-service-cards/`

The existing `/new-homepage/` route is visually unchanged.

---

## Font loading decision

The art bible (§2) explicitly forbids loading display fonts globally —
the 2026-04-01 Poppins+OpenSans addition regressed mobile PSI from 96
to 89. Cormorant Garamond is therefore **not** loaded in
`app/layout.tsx`. Instead:

- `AltHeroFrame` continues to load Cormorant + Cormorant Garamond
  per-page via `<link rel="stylesheet">` for routes that include a
  hero. This already worked and is unchanged.
- `ContactSection` and `ServiceCard` declare `--font-heading-serif`
  with Cormorant Garamond as the preferred family. If the font is
  not yet loaded on the page (i.e. there's no hero on the route),
  Georgia → Times → serif renders. The fallback is acceptable for
  editorial heading sizes — the layout doesn't shift.
- For production rollout of the redesigned ContactSection on routes
  without a hero, a follow-up should add a deferred `<link>` load of
  Cormorant Garamond at the layout level, or via `next/font` with
  `display: 'optional'` (which avoids the FOIT swap that caused the
  PSI regression).

Documented here so future sessions don't re-add a global font import
and re-trigger the regression.

---

## What the next session should do

**Title:** Apply the new components to existing pages, one page type
at a time. Replace old `<Hero>` / `<ContactForm>` / `<ServiceCard>`
usages with `<InteriorHeroSection>` / `<ContactSection>` / the
rebuilt `ServiceCard`.

**Plan:**

1. **Location pages first** (highest volume, lowest variation risk).
   - Sample: `app/lubbock-tx-roofing/page.tsx`,
     `app/midland-tx-roofing/page.tsx`,
     `app/amarillo-texas-roofing/page.tsx`.
   - Replace `<Hero>` with `<InteriorHeroSection heroVariant="location" city={...} state="TEXAS" h1={...} image={...} />`.
   - Replace `<ContactForm>` inside the page with `<ContactSection />`.
   - Playwright screenshot each at 1440 + 390. Compare to the saved
     pre-conversion screenshots in `runs/design-screenshots/` (use the
     prior session's variant captures as visual baselines).
   - Run `npm run build` after each batch of 3-5 pages.

2. **Service pages second.** `<InteriorHeroSection heroVariant="service" service={...} h1={...} image={...} />`. Same screenshot + build cadence.

3. **Service+location pages third** (highest SEO value — exact-match landing pages). `<InteriorHeroSection heroVariant="service-location" city={...} service={...} h1={...} image={...} />`.

4. **Homepage stays on `<HomeHero>`** (Variant A) — no change needed for that one.

5. **Service card grids** — homepage features grid + any service hubs
   that use `<ServiceCard>`. The rebuilt card is a drop-in replacement
   (same props); visual change happens automatically.

**Verification gate per batch:** Playwright desktop + mobile screenshot,
then mobile PSI run if the batch includes a top-traffic route (homepage,
Amarillo location, Lubbock location).

**Out of scope for the rollout:** Do not refactor data flow or routing
during the visual migration. Visual swaps only. Trust strips, reviews,
stat tiles, and InternalLinks stay on the old design until their own
tier in the COMPONENT-REDESIGN-BRIEF.

---

## Follow-ups (not blockers, but worth tracking)

- **Fix the four broken city pages** (`commercial-roofing-midland`,
  `metal-roofing-borger`, `roof-repair-lubbock`,
  `wind-damage-repair-amarillo`). Each has an orphan `<script>` tag at
  the start of its body. Five-minute fix per file once you know what
  the original `<script>` was meant to render — probably a JSON-LD
  block that lost its content during a prior edit.
- **Production font loading.** As above, set up Cormorant Garamond as
  a self-hosted `next/font` at the layout level with
  `display: 'optional'` once the new components are rolled out site-wide.
- **`ContactSection` width override.** When the contact section is placed
  on a route that already has a 1280px container above it, the inner
  card looks cramped against the gutters at 880-1100px. A
  `--contact-max-width` token override on the section would let the
  contact card breathe inside narrower contexts.
- **Service-card preview at narrower widths.** `content-grid-3` jumps
  straight from single-column to three-column at 960px. A two-column
  intermediate at 720-959px would smooth the transition for tablet.

---

## Commit

This session's commit lands on `new-homepage` only. It does not push
to `main` or `staging`. The InteriorHeroSection / ContactSection /
ServiceCard rollout to existing pages is the next session's scope —
the visual layer landed in this commit is non-breaking by design.
