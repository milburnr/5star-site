# 5 Star Roofing — Art Bible

**Brand:** 5 Star Residential and Commercial Roofing
**Location:** Amarillo, TX
**Service area:** Texas Panhandle & all of West & Central Texas
**Tone in three words:** Warm. Confident. Local.

This document is the single source of truth for how 5 Star Roofing looks. New
sections, components, or pages should be measured against it. If something
"feels off," the answer is usually in here.

The companion file `design-tokens-5star.json` carries the same values as raw
JSON for consumption by code.

---

## 1. Palette

### Brand golds

| Token | Hex | Use |
|---|---|---|
| `display_gold` | `#D6B274` | Dusty/dust-storm gold for the WEST TEXAS / city / service display type. Always paired with photo + lower opacity (0.4–0.6). Never solid. |
| `accent_gold` | `#F5C77A` | Eyebrow lines, small accent text on photos, corner-logo color tint, CTA arrow icon fill. |
| `gold_bright` | `#F1B84F` | Hover/active states on gold elements. Hairline rules accent. |
| `gold_warm_bright` | `#EEC835` | Underline draws under H1 (`.alt-intro .rule`). Tailwind token `brand-gold-bright`. |
| `nav_gold` | `#F7E291` | Navigation link text on photo. Light enough to read on the sunset sky. Tailwind token `brand-gold-light`. |
| `cta_cream` | `#F5F0E8` | Left end of the primary CTA gradient. The "calm" end of the call-to-action. |
| `cta_amber` | `#F1C77A` | Mid stop of the CTA gradient. |
| `cta_orange` | `#E08A36` | 72% stop on the CTA gradient. |
| `cta_burnt_orange` | `#B84A11` | Right end of the CTA gradient — sampled from the sun core in the hero photo. |

### Surface

| Token | Hex | Use |
|---|---|---|
| `surface_ink` | `#050403` | Page-level dark background that the alt-home `<section>` sits over. |
| `surface_brown_deep` | `#120B06` | Fallback background color of the hero section while the photo loads. |
| `cta_text_dark` | `#2B1810` | Dark text color on the CTA pill. Reads on both cream and burnt orange. |
| `text_ivory` | `#F2EADB` | Default light text in the hero (H1, body). |

### Photo overlays (used in gradients, not as fills)

Always rgba black, never solid. Layered asymmetrically: heavy on the left
(where text lives), light on the right (where the sun sits). See §6.

### Never pair

- **Cream `#F5F0E8` on white** — disappears.
- **Display gold `#D6B274` on solid burnt orange** — visually muddy. Display
  gold is for type on photo only.
- **CTA cream `#F5F0E8` next to nav gold `#F7E291` — both pale, no contrast.
  If the CTA is near the nav, ensure the dark vignette separates them.

---

## 2. Typography

### Fonts

| Role | Font | Loading | When |
|---|---|---|---|
| Display | Cormorant (Light 300) | Google Fonts, page-scoped only — never global | Hero display type (WEST TEXAS, [CITY], [SERVICE]) |
| Display fallback | Cormorant Garamond → Bodoni 72 Display → Didot → Times New Roman serif | Google Fonts | If primary doesn't load |
| H1 / editorial body | Cormorant Garamond (Regular 400) | Google Fonts | The real H1 in the content section ("Your West Texas Roofing Company") |
| UI / nav / body | Poppins → system-ui chain | **System fallback only** — Poppins not loaded globally for PSI | Nav, eyebrow, CTA label, vertical rule text |

**Why Cormorant, not Cormorant Garamond, for display?** At the masthead size
(160-320px on desktop) the base Cormorant has more pronounced thin/thick
contrast — closer to a magazine cover. Cormorant Garamond reads better at
body sizes.

**Why no global webfonts?** Per `app/layout.tsx`, all webfonts were removed
2026-04-01 because they regressed mobile PSI from 96 → 89. Display fonts on
the alt-home are scoped to that route only and accept the trade-off because
the page lives outside the regular content rotation.

### Size scale (desktop, then mobile)

| Element | Desktop | Mobile |
|---|---|---|
| Display headline (homepage Variant A) | `clamp(6rem, min(18vw, 32vh), 22vw)` × 1.0 scale | `clamp(6.45rem, 28.2vw, 18rem)` |
| Display headline (Variants B/C/D — interior) | Same clamp × 0.55 scale | Same × 0.55 |
| Sub-display (Variants C/D) | 58% of display em | 58% of display em |
| H1 (real semantic heading) | `clamp(1.95rem, min(3.3vw, 7.2vh), 4.4vw)` | `clamp(2.2rem, 7vw, 3.8rem)` |
| Eyebrow (above H1) | `clamp(0.82rem, 0.82vw, 1.05rem)` | `clamp(0.72rem, 2.2vw, 0.9rem)` |
| CTA label | `clamp(0.82rem, 0.82vw, 1rem)` | `clamp(0.82rem, 2.55vw, 1rem)` |
| Nav link | `clamp(0.78rem, 0.78vw, 0.95rem)` | hidden, hamburger replaces |
| Vertical rule text (side rails) | `clamp(0.62rem, 0.62vw, 0.78rem)` | `clamp(0.6rem, 1.8vw, 0.78rem)` |

### Line height and letter spacing

- Display: line-height 0.82, letter-spacing −0.018em. Tight, magazine-cover.
- H1: line-height 1.04, letter-spacing −0.018em.
- Eyebrow: line-height 1.3, letter-spacing 0.18em (wide tracking on caps).
- Nav: letter-spacing default (no tracking on lowercase nav items).
- Vertical rules: letter-spacing 0.22em (loose tracking on rotated caps).

### Opacity on photos

- Display type on photo: **0.56** — translucent so it layers, never fights.
- Sub-display: **0.72** — slightly more present than primary because it's smaller.
- H1 on photo: **1.0** (no opacity reduction — it carries semantic weight).
- Eyebrow on photo: **1.0**.
- Vertical rule text: **0.92** (rgba 255,246,226,0.92).
- Hairline rules: **0.55** (rgba 255,238,209,0.55).

---

## 3. Spacing

### Section rhythm (when content sections come below the hero)

- **Major section padding**: `clamp(60px, 8vw, 120px)` top + bottom.
- **Sub-section**: `clamp(32px, 4vw, 64px)` top + bottom.
- **Content max-width**: 1280px center on desktop, full-bleed on mobile with
  24px gutters.

### Hero interior spacing

- Nav from top: `clamp(20px, 2.4vw, 3vw)`.
- Nav from side: `clamp(22px, 2.8vw, 3.5vw)`.
- Display headline from top: `clamp(74px, 7vw, 9vw)`.
- Display headline from left: `clamp(30px, 6.7vw, 9vw)`.
- Intro block (eyebrow + H1) from left: `clamp(42px, 7.3vw, 9vw)`.
- Intro block from bottom: `clamp(116px, 14vh, 16vh)`.
- CTA from right edge: `clamp(40px, 3.2vw, 4vw)`.
- CTA from bottom: `clamp(40px, 4.2vw, 5vw)`.
- Vertical rule text from edge: `clamp(24px, 2.8vw, 48px)` (left), `clamp(36px, 4vw, 66px)` (right).

### Breathing room rule

When in doubt, give it more room. The brand reads as premium because elements
are confidently spaced — never crammed. If a layout feels tight, add 20%.

---

## 4. Layout principles

### What makes this hero work

1. **Editorial asymmetry.** Type is anchored bottom-left. Photo subject is
   center-right. CTA bottom-right. Side rails frame the photo. Negative
   space across the top-middle gives the eye somewhere to rest.

2. **Two reading zones.**
   - **Decorative zone** (display type) is large but translucent — establishes
     mood. Not read word-by-word.
   - **Functional zone** (eyebrow + H1 + CTA) is bottom-left, normal opacity,
     compact. This is what users actually scan.

3. **The display type is decorative, not semantic.** `aria-hidden="true"` on
   the display element. The real H1 lives in the content/intro block. Screen
   readers and search engines see the intro H1; sighted users see the
   editorial display type as a layered mood-setter.

4. **The photo carries the brand mood.** Overlays are tuned light on purpose
   (asymmetric: heavy on left, light on right) so the sunset and architectural
   warmth show through.

5. **No fake claims.** No medallions saying "TEXAS BUILT TEXAS PROUD." No
   stat bars saying "97% satisfaction." No fabricated stars or seals. The
   real logo carries brand identity; everything else is content.

### Grid approach

Hero is `position: relative` with absolutely-positioned children. No
horizontal grid required because the composition is editorial, not modular.

For content sections below the hero, use a centered max-width container with
12-column grid for desktop and stacked single-column for mobile. Default
gutter `24px`, content max-width `1280px`.

### What separates this from a WordPress template

- **Translucent layered type on photo** — most templates use solid type on a
  dark band. The translucent treatment is what reads as "magazine."
- **Vertical side rails** with rotated text — templates almost never do this.
  When done with restraint (small font, low opacity, single column or two)
  it adds editorial polish.
- **One primary CTA** with a sophisticated gradient — not a stack of buttons.
- **No stat bars or "20+ years" badges in the hero.** Templates always
  show them; this brand restrains them to interior trust sections only.

---

## 5. Image treatment

### What makes a good hero photo

- Real job photo or commissioned photography of a real West Texas building.
- **Golden hour preferred** — late afternoon light. Long shadows. Warm sky.
- **No stock photos.** The roofing industry sees the same generic stock
  hero on every competitor; ours must be visibly local.
- Centered or center-right composition with the building as the subject.
- Sky takes 30–50% of the frame (gives room for type at top and CTA at bottom).

### Overlay approach

Layered, asymmetric. From hottest to coolest reading priority:

1. **Top-right vignette** — small dark ellipse (60% × 50% at 92% 6%, rgba
   black 0.36 fading to transparent at 70%). Purpose: nav contrast against
   sunset sky. Should not look like a "dark band" — it's a soft gradient,
   barely perceptible.

2. **Horizontal gradient (90deg)** — heavy left (rgba 0,0,0,0.66), through
   midtones (0.40 at 30%, 0.10 at 60%), almost clear right (0.02 at 100%).
   Purpose: support all the text on the left, let the photo glow on the right.

3. **Vertical gradient (180deg)** — light top (0.20), clear middle (0.0 at
   35%), darker bottom (0.34 at 100%). Purpose: anchor the CTA visually
   without darkening the sky.

4. **Center ellipse (`::after`)** — transparent ellipse fading to dark at
   edges (offset to 30% horizontally so the right side stays bright).
   Purpose: subtle vignette focus toward the building.

5. **Sun warmth** — small radial gold (rgba 255,174,45,0.10) at 86% 34%.
   Purpose: enhance the sun spot in the photo without adding a fake glow.

### What never happens with photos

- No grain filter — looks like a 2014 hipster site.
- No heavy cinematic teal-orange grading — the photo's natural warmth is
  enough.
- No "drop shadow" frames around photos.
- No black-and-white treatment in the hero.
- Hero photo is the LCP element. Pre-optimize AVIF/WebP/JPEG, deliver same-
  origin (`public/images/heroes/`), respect the PSI rules in
  `service-site-builder/skills-notes.md`.

---

## 6. Motion rules

Archetype: **magazine cover.** Confident reveal, then stillness. Nothing
loops aggressively. Hover states are clean, not bouncy.

### Sequence on load

| Phase | Element | Timing | Easing |
|---|---|---|---|
| 0 ms | Hero photo | instant (LCP) | — |
| 220 ms | Side rails (both sides) — slide in | 1100ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 240 ms | Display headline — left-to-right wipe (clip-path) | 1400ms | `cubic-bezier(0.7, 0, 0.18, 1)` |
| 350 ms | Eyebrow — fade-up | 700ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 550 ms | H1 — fade-up | 760ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 750 ms | Rule under H1 — scaleX from 0 → 1 (left-to-right draw) | 820ms | `cubic-bezier(0.7, 0, 0.2, 1)` |
| 1200 ms (loop) | CTA — diagonal sheen sweep | 4200ms loop | `ease-in-out` |
| 1600 ms | Sub-display (Variants C/D) — rise + fade | 800ms | `cubic-bezier(0.16, 1, 0.3, 1)` |

### Side rail entrance

- **Left rail** slides up from below (+72px → 0, opacity 0 → 1).
- **Right rail** slides down from above (−72px → 0, opacity 0 → 1).
- Both anchored center vertically with flex, animate the transform property
  only. No layout shift.

### CTA sheen

- 60% wide diagonal stripe (115° angle).
- `mix-blend-mode: screen` over the gradient.
- Starts off-canvas left, sweeps across to off-canvas right, loops every
  4.2 seconds.
- Opacity ramps from 0 at start of cycle to peak then back to 0 — never
  popping in and out hard.

### Nav links

- Hairline underline (1px, gold-bright) scales from `scaleX(0)` to
  `scaleX(1)` on hover, 240ms ease.
- Transform-origin: center (underline expands from middle outward).

### Reduced motion

ALL animations respect `@media (prefers-reduced-motion: reduce)`:
- Side rails: animation none.
- Display wipe: animation none, clip-path none.
- Intro fade-ups: animation none (text visible at final state).
- Rule draw: animation none.
- CTA sheen: animation none, opacity 0.

### Deferred (not yet implemented)

- **Hero photo parallax drift** on scroll (5–10px max). Not implemented in
  this session because the alt-home is hero-only — there's no scrollable
  content. Add when content sections ship.
- **Side rail scroll parallax** (reverse the entry slide as user scrolls
  down). Same reason — no content to scroll past. CSS `animation-timeline:
  scroll()` is the implementation when content arrives.

---

## 7. Button style

### Primary CTA (hero pill)

- **Shape**: full pill (border-radius 999px), `min-height` 56–72px depending
  on viewport.
- **Padding**: `clamp(0.8rem, 0.85vw, 1rem)` vertical, `clamp(1.7rem, 1.7vw,
  2rem)` left, `clamp(0.75rem, 0.85vw, 1rem)` right (right is tighter
  because the arrow icon hugs the edge).
- **Gradient**: 4-stop linear gradient at 90°:
  - `0%` cream `#F5F0E8`
  - `40%` amber `#F1C77A`
  - `72%` orange `#E08A36`
  - `100%` burnt orange `#B84A11`
- **Text**: `#2B1810` dark brown. Poppins/system-ui, weight 700, letter-
  spacing 0.14em, uppercase.
- **Arrow icon**: 22px lucide `<ArrowRight>`, inside a 38–46px dark circle
  (`#2B1810` background, `#F5C77A` icon).
- **Box shadow**: outer glow + drop. `0 0 44px rgba(184,74,17,0.22), 0 16px
  30px rgba(0,0,0,0.36)`.
- **Hover**: brightness(1.06) + saturate(1.05) + translateY(-1px), larger
  shadow.
- **Sheen**: 60%-wide diagonal stripe at 115°, mix-blend-mode screen,
  sweeps across on a 4.2s loop.

### Secondary / ghost buttons (when interior pages need them)

- Outline only, 1.5px border in `accent_gold` (#F5C77A).
- Transparent fill, ivory text.
- On hover: fill with `accent_gold` at 0.08 opacity, text shifts to ivory.
- No drop shadow on ghost.

### When to use which

- **Pill gradient CTA**: one per page maximum. The primary conversion ask.
- **Ghost**: secondary CTAs (e.g., "Browse our gallery" in interior pages).
- Never two pill CTAs in the same viewport. Brand reads as premium because
  there's one obvious thing to do.

---

## 8. Nav style

### Desktop

- Logo PNG on the left at `clamp(40px, 3.4vw, 52px)` tall.
- 8 nav items: Home / Services (dropdown) / Areas (dropdown) / Gallery /
  Blog / Reviews / About / Contact (pill).
- Font: Poppins fallback → system-ui. Weight 500.
- Color: `#F7E291` default, `gold-bright` on hover.
- Spacing between items: `clamp(18px, 1.8vw, 32px)`.
- Active hover: hairline underline slides in from center.
- Contact item: filled pill (`rgba(129, 93, 1, 0.92)` brown), white text,
  rounded-full, drop shadow.
- Dropdown panel: dark ink `rgba(28, 16, 8, 0.96)` background, gold-bright
  border at 22% opacity, slides in with fade.

### Mobile

- Logo left, hamburger right (uses `<Menu>` from lucide-react).
- Desktop links hidden via media query at `≤1024px`.
- Hamburger color: `gold-bright`.

### What never happens

- No mega-menu on hover. Dropdowns are 4–6 items max.
- No animated mobile menu that takes more than 250ms to open.
- No nav over the hero photo with NO overlay vignette — that's a contrast
  failure waiting to happen.

---

## 9. Hero variants

Four reusable hero components live at `components/heroes/`:

### Variant A — Homepage (`HomeHero.tsx`)

- **Display text**: `WEST TEXAS` (2-line stack)
- **No sub-display.**
- **Display scale**: 1.0 (full size)
- **Right rule**: `AMARILLO, TX`
- **Left rule**: `Serving the Texas Panhandle` / `& all of West & Central Texas`
- **Eyebrow**: `5 Star Residential and Commercial Roofing`
- **H1** (semantic): `Your West Texas Roofing Company`
- **Title tag**: `5 Star Roofing | Amarillo's Residential & Commercial Roofing Company`
- **Use**: only on `/` (homepage). One per site.

### Variant B — Location pages (`LocationHero.tsx`)

- **Display text**: `[CITY]` uppercase
- **Sub-display**: `TEXAS` (or other state)
- **Display scale**: 0.55 (interior — leaves room for content below)
- **Right rule**: `[CITY], TX`
- **Left rule**: same as homepage
- **Eyebrow**: `5 Star Residential and Commercial Roofing`
- **H1**: `Roofing Company in [City], TX`
- **Title tag**: `[City] TX Roofing Company | 5 Star Roofing`
- **Props**: `city: string`, `state?: string` (defaults to "TEXAS")
- **Use**: city pages like `/lubbock-tx-roofing/`, `/midland-tx-roofing/`.

### Variant C — Service pages (`ServiceHero.tsx`)

- **Display text**: `[SERVICE]` uppercase
- **Sub-display** (optional): `[DESCRIPTOR]` — only when it adds clarity.
  Skip for self-complete names like "TPO ROOFING."
- **Display scale**: 0.55
- **Right rule**: `WEST TEXAS`
- **Left rule**: same as homepage
- **Eyebrow**: `5 Star Residential and Commercial Roofing`
- **H1**: `[Service] in West Texas`
- **Title tag**: `[Service] West Texas | 5 Star Roofing`
- **Props**: `service: string`, `serviceDescriptor?: string`
- **Use**: service pages like `/metal-roofing/`, `/hail-damage-repair/`.

### Variant D — Service + Location (`ServiceLocationHero.tsx`)

**Most important for SEO.** The exact-match landing pages.

- **Display text**: `[CITY]` (top, dominant)
- **Sub-display**: `[SERVICE]` (below, ~58% of display size)
- **Display scale**: 0.55
- **Right rule**: `[CITY], TX`
- **Left rule**: same as homepage
- **Eyebrow**: `5 Star Residential and Commercial Roofing`
- **H1**: `[Service] in [City], TX` — exact-match target for SERP
- **Title tag**: `[Service] [City] TX | 5 Star Roofing`
- **Props**: `city: string`, `service: string`
- **Use**: pages like `/hail-damage-repair-lubbock/`, `/metal-roofing-midland/`.
  The hierarchy (city dominant, service below) mirrors how users search:
  "lubbock roofing" first, then narrow by service.

### SEO notes

- The decorative display type carries NO semantic weight (aria-hidden).
  Don't optimize it for keywords; it's mood, not content.
- Title tag patterns are written for SERP click-through — front-load the
  query intent ("Hail Damage Lubbock"), brand at the end.
- H1 patterns are written for on-page relevance and the SERP snippet —
  include the exact "[Service] in [City], TX" phrase users search.

---

## 10. Extending the language

### Future sections should feel like

#### Services hub / featured services
- White or cream cards on a deep brown surface section.
- Card hover: lift 4px, gentle shadow expansion.
- Service title in Cormorant Garamond, body in Poppins.
- Hairline gold rule under the section heading (matches hero rule pattern).
- No stat bars.

#### Testimonials
- One review per row on desktop, never a slider that auto-rotates.
- Review text in Cormorant Garamond regular, italic. Attribution in Poppins.
- 5 gold stars (small, accent_gold), source ("Google review") muted.
- No "97% satisfaction" headline.

#### Contact section
- Photo of the actual office (or the Amarillo location) at left, form right.
- Form fields with the same gold accent underline on focus.
- NO cream/beige wall background — the contact section problem on the live
  site is exactly that beige wall. Use the deep brown surface and a single
  warm gold accent.

#### Location grid
- 5–6 cards, each with a city name in Cormorant Garamond.
- Subtle gold hairline border, no heavy box.
- Hover: faint photo background fade-in.

#### Gallery
- Masonry grid, no captions on hover (the photos speak for themselves).
- 4 columns desktop, 2 mobile.
- Lightbox: dark backdrop, ivory close button, simple prev/next.

#### Blog listing
- Single-column on desktop, max 750px wide for the cards.
- Article cards stack: photo at top, eyebrow (category), Cormorant Garamond
  title, Poppins date + reading time.
- Reads like a magazine index, not a card grid.

### What would feel out of place

- Drop shadows on cards beyond a single soft elevation.
- Heavy gradients beyond the CTA pill.
- Skeuomorphic depth (beveled edges, inner glows).
- Bright accent colors that aren't from the brand palette.
- Sans-serif italic body text — feels generic.
- "Wave divider" SVGs between sections.
- Curved section corners against straight sections.

### Tone words

**Warm. Confident. Local. Editorial. Unhurried.**

If a component drifts toward "loud," "templated," "corporate," or "stocky,"
it has drifted out of brand.
