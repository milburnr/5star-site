# Design Session — 2026-05-12

**Branch:** `new-homepage` (does NOT touch `main` or `staging`)
**Working directory:** `/Volumes/External-2TB/Projects/Clients/5-star-roofing`
**Scope:** alt-home preview hero design + reusable hero variants + redesign brief.

This session was driven by an iterative live design review. The starting
point was the v2 alt-home preview from earlier in the day. The ending point
is a refactored hero with 4 reusable variants, full motion, an art bible,
and a redesign brief for the rest of the components.

---

## What was built and where

### New code

```
components/heroes/
├── AltHeroFrame.tsx         ← Shared layout + CSS for all 4 variants
├── HomeHero.tsx             ← Variant A — homepage
├── LocationHero.tsx         ← Variant B — city pages (city, state? props)
├── ServiceHero.tsx          ← Variant C — service pages (service, serviceDescriptor? props)
└── ServiceLocationHero.tsx  ← Variant D — service+location pages (city, service props)

app/new-homepage/
├── page.tsx                            ← Variant A preview (refactored to use HomeHero)
├── preview-location/page.tsx           ← Variant B preview ("Lubbock, TX")
├── preview-service/page.tsx            ← Variant C preview ("Hail Damage" + "Roof Replacement")
└── preview-service-location/page.tsx   ← Variant D preview ("Lubbock" + "Hail Damage Repair")
```

### Modified

- `components/ChatWidget.tsx` — removed the 5-second auto-load fallback so
  the widget only loads on first scroll/click/touchstart. Site-wide change
  per Rich's directive. Documented in `chat_widget_behavior` of the design
  tokens file.
- `public/images/heroes/5star-new-hero.png` — updated to the May 12 version
  from the project root (Rich pointed out the older copy was being served).

### New artifacts

```
runs/
├── design-docs/
│   ├── ART-BIBLE-5STAR.md             ← Visual language source of truth
│   ├── design-tokens-5star.json       ← Same values as machine-readable JSON
│   └── COMPONENT-REDESIGN-BRIEF.md    ← Tiered redesign plan for every shared component
├── design-screenshots/
│   ├── alternate-home-v2-desktop.png  ← (Earlier baseline)
│   ├── alternate-home-v2-mobile.png
│   ├── alternate-home-v3-desktop.png  ← (Earlier baseline)
│   ├── alternate-home-v3-mobile.png
│   ├── phase1-after-desktop.png
│   ├── phase1-after-mobile.png
│   ├── phase1-final-mobile.png        ← After chat-widget hide fix
│   ├── phase2-1440.png
│   ├── phase2-1920.png
│   ├── phase2-2560.png                ← Wide-HD scaling check
│   ├── phase2-3840.png                ← 4K scaling check
│   ├── phase2-final-1440.png
│   ├── phase2-opacity-1440.png
│   ├── phase2-opacity-mobile.png
│   ├── phase2-stars-removed-1440.png
│   └── hero-variants/
│       ├── variantA-home-1440.png
│       ├── variantA-home-mobile.png
│       ├── variantB-location-1440.png
│       ├── variantB-location-mobile.png
│       ├── variantC-service-1440.png
│       ├── variantC-service-mobile.png
│       ├── variantD-svcloc-1440.png
│       └── variantD-svcloc-mobile.png
└── SESSION-DESIGN-2026-05-12.md       ← (this file)
```

---

## All screenshot locations

| Phase | What | Path |
|---|---|---|
| Phase 1 (visual QA) | Desktop after fixes | `runs/design-screenshots/phase1-after-desktop.png` |
| Phase 1 | Mobile after chat fix | `runs/design-screenshots/phase1-final-mobile.png` |
| Phase 2 (copy + CTA) | 1440, 1920, 2560, 4K | `runs/design-screenshots/phase2-{1440,1920,2560,3840}.png` |
| Phase 2 | Final + opacity check | `runs/design-screenshots/phase2-final-1440.png`, `phase2-opacity-{1440,mobile}.png` |
| Phase 2 | Stars-removed iteration | `runs/design-screenshots/phase2-stars-removed-1440.png` |
| Phase 3 (variants) | All 4 × desktop + mobile | `runs/design-screenshots/hero-variants/variant{A,B,C,D}-*-{1440,mobile}.png` |

---

## Art bible + tokens

- **Art Bible:** `runs/design-docs/ART-BIBLE-5STAR.md` — 10-section visual
  language doc covering palette, typography, spacing, layout, image
  treatment, motion, button + nav styles, hero variants, and how future
  sections should feel.
- **Design tokens:** `runs/design-docs/design-tokens-5star.json` — same
  values as machine-readable JSON. Schema matches the brief's spec plus
  added sections for motion timing, scaling strategy, and the chat-widget
  behavior change.

## Component redesign brief

- `runs/design-docs/COMPONENT-REDESIGN-BRIEF.md` — every shared component
  in `components/` and `components/page-sections/` and `components/ui/`,
  tiered High/Medium/Low. Includes implementation order across sessions.

---

## Decisions made and why

### 1. **Branch & non-destructive scope**
Created `new-homepage` branch from `staging` and confined all work there.
The 5-star-roofing repo had ~80 modified files at session start (other
in-flight work); the commit below stages ONLY the files touched in this
session so Rich's other pending work isn't swept up.

### 2. **Cormorant Light 300, opacity 0.56, on the display headline**
The original brief from Rich called for opacity 0.15–0.20, but the
reference mockup showed a much more visible headline. After iterating live
with Rich, we landed on Cormorant 300 (Light) at opacity 0.56 — translucent
enough to layer over the photo and feel "magazine," opaque enough for the
thin 300-weight strokes to read.

### 3. **Removed the medallion + fake tagline**
Rich called out that the circular "5 STAR ROOFING · TEXAS BUILT. TEXAS
PROUD" badge in the original mockup wasn't a real brand mark and the
tagline wasn't real. Replaced with a small `/logo.png` in the bottom-right
quadrant as a quiet brand anchor (sits above the CTA pill).

### 4. **Removed the decorative stars flanking the side rule**
Rich said they were crowding other elements. The side rule reads cleaner
without them — also gives more room for the rule itself + the multi-column
vertical text.

### 5. **Side text grouped with its hairline + matching orientation both sides**
Original right side rule was top-to-bottom; Rich asked to match the left
(bottom-to-top). Wrapped each side's vertical text + hairline rule into
`<div class="alt-side-wrap">` so they animate as a unit. Both read
bottom-to-top now.

### 6. **Left rail offset down so it doesn't sit on the WEST TEXAS headline**
The right rail (single line) stays at true viewport center. The left rail
(two-column wrapping text) drops to roughly 57% vertical center to avoid
overlapping the headline. Per Rich's request — "less spacing between
those vertical lines of text, and position them down a bit."

### 7. **Display type scales proportionally from 1280 → 4K**
The original clamp had a rem-capped max which made the headline tiny on
4K. Switched to viewport-relative max (`22vw`) so it scales proportionally
across HD, wide HD, and 4K. Headline grows from ~96px at 1280 to ~720px at
4K, matching the rest of the composition.

### 8. **Interior pages get displayScale 0.55**
Rich confirmed the half-size display type "looked right" for service pages.
HomeHero stays at 1.0; LocationHero/ServiceHero/ServiceLocationHero all
pass `displayScale={0.55}` to AltHeroFrame. Implemented via a CSS custom
property `--hero-display-scale` so future tuning is a single number.

### 9. **CTA pill: cream → burnt orange gradient with diagonal sheen**
Gradient stops sampled from the sunset in the hero photo:
- 0% `#F5F0E8` cream
- 40% `#F1C77A` amber
- 72% `#E08A36` orange
- 100% `#B84A11` burnt orange (sun core)
Plus an animated diagonal sheen sweep on a 4.2-second loop. Right end is
intentionally biased deeper into burnt orange ("more like the sun") per
Rich's request.

### 10. **Asymmetric photo overlay**
Heavy black gradient on the left (rgba 0,0,0,0.66 at 0%), light on the
right (0.02 at 100%), small top-right vignette for nav contrast. Keeps
the sunset/sun glow visible while giving all the text on the left a dark
backdrop. Per Rich's directive — "more opaque on the left, more
transparent on the right."

### 11. **Chat widget defers until scroll site-wide**
Removed the 5-second auto-load timer from `components/ChatWidget.tsx`.
The widget now only loads on scroll, click, or touchstart. Two reasons:
(a) Rich asked for it ("make the chat defer load until scroll"), (b) on
hero-only preview pages there's nothing to scroll past so the widget
never appears anyway — matches the cleaner UX Rich wanted.

### 12. **Motion sequence is staggered top-to-bottom**
Per Rich's "stagger them so they come in top, middle, bottom":
- Side rails (220ms)
- Display headline wipe (240ms)
- Eyebrow (350ms)
- H1 (550ms)
- Rule draw (750ms)
- Sub-display (1600ms — after main wipe finishes)
- CTA sheen loop (always running)

All respect `prefers-reduced-motion: reduce`.

### 13. **Scroll-parallax for the side rails is deferred**
Rich asked for the side rails to "reverse on scroll down in parallax
fashion." The alt-home is hero-only with no content below — nothing to
scroll to — so the parallax is documented in `design-tokens-5star.json`
under `motion.deferred_for_phase_4_followup` but not implemented this
session. CSS `animation-timeline: scroll()` is the implementation path
when content sections ship.

### 14. **Nav matches the live site's 8 items**
Original alt-home had 4 nav items. Live site has Home / Services / Areas
/ Gallery / Blog / Reviews / About / Contact (pill). Matched the live nav
exactly with dropdowns for Services and Areas. Per Rich's directive — "We
need to match the menu on the rest of the site."

### 15. **Hero photo updated to May-12 version**
Rich noted the served hero was the older May-10 version. Copied the newer
`5star-new-hero.png` (from project root) into
`public/images/heroes/5star-new-hero.png`. New photo has stronger sunset
glow and brighter house illumination.

### 16. **Header / footer / chat widget hidden on alt-home preview**
The alt-home is a hero-only preview. The page sets `display: none` on the
layout `<header>` and `<footer>` via a `body:has(.alt-home-hero)` selector,
and the same selector hides the chat widget container if it manages to
render anyway. Standard preview-route convention.

---

## What needs Rich's review before anything goes to main

**Nothing in this session is ready for main.** The deliverables are:

1. ✅ A reviewable alt-home preview at `/new-homepage/` (Variant A)
2. ✅ Three variant previews at `/new-homepage/preview-location/`,
   `/preview-service/`, `/preview-service-location/`
3. ✅ Documentation (Art Bible + tokens + redesign brief)
4. ✅ The chat-widget behavior change (5s auto-load removed) — site-wide
   but only affects the live site's chat behavior; the widget still
   shows up on scroll, which is the expected behavior 95% of the time.

**Before merge:**
- Rich reviews the 4 variants at all sizes (1440 + 390 baseline; 1920 +
  2560 + 4K scaling captures included for Variant A).
- Approve the chat-widget defer-until-scroll change.
- Decide whether to keep the `/new-homepage/preview-*` routes in
  production (probably not — strip them before main merge).
- Confirm the redesign brief's implementation order before any of those
  components are touched.

**Known issues to handle in next session:**
- Mobile Variant B (Location) doesn't yet test sub-display + city
  combination thoroughly; sub-display sizing may need tuning on shorter
  city names like "Pampa" vs longer ones like "Levelland."
- Variant C (Service) with no `serviceDescriptor` was not screenshotted —
  the screenshot used both `service="Hail Damage"` and
  `serviceDescriptor="Roof Replacement"`. A no-descriptor screenshot
  (e.g. "TPO ROOFING" alone) would round out the visual review.

---

## Recommended next session

**Title:** Implement COMPONENT-REDESIGN-BRIEF.md — start with InteriorHeroSection.

**Plan:**
1. Read `runs/design-docs/ART-BIBLE-5STAR.md`,
   `runs/design-docs/COMPONENT-REDESIGN-BRIEF.md`, and
   `runs/design-docs/design-tokens-5star.json`.
2. Implement Tier 1 Component #1: migrate `components/Hero.tsx` (interior
   hero on 26+ pages) to use the new `AltHeroFrame` variants.
   - Start with one page type (e.g., service+location pages — the highest
     SEO value). Convert 3 pages, screenshot, mobile PSI check.
   - Iterate until all interior hero usages are migrated.
3. **Playwright-verify after each component.** Take desktop + mobile
   screenshots, compare to art bible, mobile PSI run.
4. **One component per PR.** Do not bundle multiple components into a
   single change set — the redesign is too broad and the regression
   surface too large.

**Estimated session count for full redesign rollout:**
- Tier 1 (3 components × 26+ pages each): 3 sessions.
- Tier 2 (4 components): 1–2 sessions.
- Tier 3 (4 components): 1 session.
- Tier 4 (cleanup): 0.5 session.

Total: ~6–8 focused sessions to bring every shared component into the new
visual language. The hero migration alone is the highest-leverage step —
every customer-facing page improves visually after Session N+1.

---

## Open Brain capture

Worth saving for future Claude sessions:

- 5 Star Roofing alt-home is the canonical design direction. Reference
  `runs/design-docs/ART-BIBLE-5STAR.md` before any visual work.
- The component redesign brief is sequenced — don't reorder without
  checking blast radius.
- Chat widget on this site now defers until interaction site-wide. Don't
  re-add the 5s auto-load timer without explicit owner approval.
- The 4 hero variants share a single CSS source (AltHeroFrame). Visual
  tweaks happen there, not in the wrappers.
