# Phase 12 — UI/UX Remediation & Trust-Signal Upgrade

**Status:** planned
**Created:** 2026-04-10
**Revised:** 2026-04-10 (plan-checker pass 1 — H1-H4, M1-M5 applied)
**Depends on:** Phase 11 (Ahrefs Crawl Fixes) — complete
**Driver:** ui-ux-pro-max audit surfaced 20 issues ranging from a broken `/services/` hero to dated hero chrome, chat-widget collisions, trust-signal gaps, and dull location-page imagery.

## Goal

Bring every template up to the "Trust & Authority" design pattern (the ui-ux-pro-max recommendation for insurance-driven service businesses) **without changing the gold sunset brand**. Fix critical layout bugs, upgrade hero imagery on location pages, add real insurance + material-brand trust signals, and remove dated card chrome that reads as 2014 template.

**Non-goals:**
- No re-palette to blue. Gold (`#E4C66E` / `#F1B609` / `#EEC835`), brand brown (`#815D01` / `#A57F0F`), and charcoal/black/white are the only allowed colors.
- No new pages. No SEO rewrites. No rebuild of `tools/site-builder/` pipeline.
- No dark mode (delete the dead tokens — see task 12.11).

## Success Criteria

1. `/services/` has the same hero treatment as `/contact/` (background photo, overlay, dual CTA, trust row).
2. Homepage hero no longer has the gold-left-border card chrome; headline lives full-bleed over the sunset photo with text-shadow + gradient overlay only.
3. Chat widget is collapsed on load, sits 80-96px above the bottom edge, and never overlaps sticky CTA bar or content on any viewport ≥ 320px.
4. Body text is charcoal (`#1F2937` or darker). Trust badges use solid white cards with charcoal numbers and a gold accent underline — verified in a Lighthouse accessibility pass (contrast all green).
5. Every city hero listed in `hero-manifest.json` either (a) uses a real high-quality R2 photo verified to be a wide composition (not a shingle close-up) or (b) is replaced by a newly generated AI image per the prompt library in `IMAGE-PROMPTS.md`.
6. Trust rows wired by surface: **insurance** strip on homepage + `/services/` + `/hail-damage-repair-amarillo/` + all storm-damage templates; **residential shingle** strip on `/residential-roofing/` + residential location pages; **metal** strip on `/metal-roofing/`; **commercial** strip on `/commercial-roofing/` + `/tpo-roofing/` + `/pvc-roofing/`. All logos load from R2 (no hotlinks). All logo `<img>` tags carry explicit `width` + `height` attributes (CLS guardrail).
7. `globals.css` has one `@layer base` block (currently has two that fight each other). Dead `.dark` tokens deleted.
8. Lighthouse Performance ≥ 95 desktop on homepage + `/services/` + one location page. No CLS regressions (CLS < 0.05, measured before and after on the same 3 URLs).
9. Build succeeds: `npx next build` with zero errors.

---

## Task Breakdown

Tasks group into 4 active work streams (A, B, C, E) plus Stream D which is deferred to Phase 13.

**Cert badge rule (applies to tasks 12.15 and 12.18):** Default = **no cert badges**, only logo strips. Cert badges (GAF Master Elite, OC Platinum Preferred, CT SELECT ShingleMaster, BBB A+, HAAG, TRCA) are only added if Rich confirms the certifications are currently held. Rich can answer this in-session — no async wait. If unanswered, ship logo strips without cert badges and file a follow-up task.

**Stream ordering:** Stream A first (layout shell). Streams B, C, E can run in parallel once A is complete. Stream D is deferred to Phase 13.

---

### Stream A — Critical Layout Fixes

**Depends on:** nothing (start here).
**Blocks:** Streams B, C, D, E — they all sit visually on top of the shell Stream A delivers.

**12.1 Rebuild `/services/` hero** — *critical*
- File: `app/services/page.tsx:130-133`
- Remove the bare `<h1>` + inline `<img>` pattern.
- Wrap in the same `<section className="hero ...">` used in `app/contact/page.tsx`.
- Background: `services-hero` — new AI image (see IMAGE-PROMPTS.md entry `services-hero`).
- Add breadcrumb → H1 → subhead → dual CTA (Call + Free Inspection) → trust row (same 4 badges as home).
- **Acceptance (binary):**
  - (a) `/services/` DOM contains a `<section>` with class token `hero` wrapping the h1.
  - (b) Inside the section, DOM order is: breadcrumb → `<h1>` → subhead `<p>` → 2 CTA anchors (`tel:` href + `/contact/` href) → trust row.
  - (c) Visual screenshot diff at 1440px vs `/contact/` shows matching grid: hero height ≥ 400px, dual CTAs on a single row, background image URL resolved (not white).
  - (d) At 375px: h1 wraps to ≤ 3 lines, CTAs stack vertically, background image visible.
- `app/contact/page.tsx` is the reference implementation — copy its hero structure verbatim and swap copy + image.

**12.2 Strip dated card chrome from homepage hero** — *critical*
- File: `app/page.tsx:52`
- Remove: `md:backdrop-blur-sm md:bg-gradient-to-r md:from-black/40 md:to-transparent ... md:rounded-2xl md:border-l-4 md:border-brand-gold`.
- Keep: headline, subhead, CTAs, text-shadow.
- Add a single subtle radial/linear gradient overlay at the section level for legibility, not a framed box.
- Center the content block vertically; let the image breathe to the right (pair with task 12.10 — two-column grid on desktop once hero image upgraded).
- **Acceptance:** the inline class list on `app/page.tsx:52` no longer contains any of `backdrop-blur`, `rounded-2xl`, `border-l-4`. Homepage screenshot at 1440px shows no card outline around the hero text.

**12.3 Fix chat widget + sticky bar collision** — *critical*
- **Reconnaissance first:** Inspect `components/ChatWidget.tsx`. If it's a `<script src=...>` injection of LeadConnector's loader, the collapsed-on-load behavior is likely controlled in the LeadConnector widget admin dashboard, not in code. If dashboard config is required, flag to Rich (owner has dashboard credentials) and proceed with only the CSS positioning fix. If it's controllable via component props, fix in code.
- Goal (all paths): widget starts collapsed, sits above the sticky bar, and never overlaps content.
- CSS fix (in all cases): `globals.css:312-339` — when `.sticky-contact-bar.visible` is present, the chat launcher wrapper uses `bottom: calc(88px + env(safe-area-inset-bottom))`; otherwise `bottom: calc(16px + env(safe-area-inset-bottom))`.
- Add `pb-24 md:pb-20` to main content wrapper when `.sticky-contact-bar.visible` is toggled.
- **Acceptance:** On iPhone SE (375×667) emulated in Playwright, the chat widget launcher's bounding box does not intersect the sticky bar's bounding box, and neither obscures the current viewport's H2. Auto-open popup does not appear on first page load.

**12.4 Fix the "Amarillo" phantom link in hero subhead** — *high*
- File: `app/page.tsx:60`
- Current: `<a href="/amarillo-texas-roofing/" class="text-white underline hover:text-brand-gold-light">Amarillo</a>` inside a normal sentence.
- Fix: remove the `underline` class; use `font-semibold text-brand-gold-light no-underline hover:underline` so it reads as emphasis, not a broken link.
- **Acceptance:** rendered sentence shows "Amarillo" in gold-light bold weight, no underline at rest, underline only on hover.

**12.5 Standardize section rhythm** — *high*
- Files: `app/page.tsx`, `app/services/page.tsx`, any city page template in `app/`.
- Replace ad-hoc `py-6 sm:py-10 md:py-16` / `py-8 md:py-12` / `py-16` with two class tokens in `globals.css`:
  ```css
  .section-major { @apply py-16 md:py-24; }
  .section-sub   { @apply py-12 md:py-16; }
  ```
- Audit all `<section>` elements and apply one of the two. Remove the current `.section` class (`py-8 md:py-12`) or redefine it to equal `.section-sub`.
- **Acceptance:** grep `app/**/*.tsx` for `py-6\|py-8\|py-10\|py-12\|py-16\|py-20\|py-24` returns zero hits on `<section>` elements (except via the two new tokens).

**12.6 Fix `/roof-repair-amarillo/` and other location hero backgrounds** — *high*
- The bundled before/after job photos in `hero-manifest.json` are close-ups of shingles, not wide establishing shots. They render as flat gray walls.
- **For each city in `hero-manifest.json`** (24 entries), make a decision: (a) replace with a better crop from `image-db.json` if a wide exterior exists, else (b) queue an AI-generated hero per IMAGE-PROMPTS.md `[city]-hero`.
- Until new assets land, add `bg-gradient-to-br from-brand-brown/85 via-brand-brown/60 to-brand-gold/40` overlay in `globals.css` `.hero-location` so current images at least feel warm and branded, not gray.
- **Acceptance:** every hero in `hero-manifest.json` has a decision logged (real photo kept OR AI prompt queued) in `OWNER-CONFIRMATIONS.md` or a sibling `HERO-DECISIONS.md`. No hero is left at "pending review" by phase close.

---

### Stream B — Brand & Color Discipline (NO blue, gold-sunset preserved)

**Depends on:** Stream A complete (layout shell must be clean before repainting).

**12.7 Darken body text to charcoal** — *high*
- File: `tailwind.config.ts:25-30` (closing brace on line 30), `globals.css:7`
- Change `gray.text: '#525252'` → `gray.text: '#1F2937'` (slate-800 equivalent, reads as charcoal on cream).
- Change `gray.primary: '#54595F'` → `gray.primary: '#111827'` (charcoal-black for headings).
- Verify contrast ratio ≥ 7:1 against `#FFF8E7` (cream body bg) and ≥ 4.5:1 against `#F7E291` (brand-gold-light).
- **Acceptance:** Lighthouse a11y pass on home + `/services/` shows zero contrast failures. Manual check with Chrome DevTools color picker on any body `<p>` element reads charcoal, not mid-gray.

**12.8 Trust badge redesign** — *high*
- File: `app/page.tsx:80-108`
- Replace the `bg-gradient-to-br from-white to-amber-50 ... border-brand-gold/20` cards with:
  - Solid white `bg-white` card, `shadow-md`, `rounded-xl`.
  - Large number in `text-brand-brown font-heading font-bold text-4xl md:text-5xl`.
  - Label in `text-gray-primary` (now charcoal from 12.7).
  - Gold underline accent: `after:content-[''] after:block after:w-12 after:h-0.5 after:bg-brand-gold-vibrant after:mx-auto after:mt-3`.
- Drop the text-transparent/bg-clip-text gradient on the numbers — it's unreadable at small sizes.
- **Acceptance:** trust badge number DOM element does not contain `bg-clip-text` or `text-transparent`. Rendered number reads as solid brand-brown at 4xl+.

**12.9 Simplify CTA button hover choreography** — *medium*
- File: `globals.css:89-95, 300-302, 342-348`.
- Current: color change + shadow glow + `-translate-y-1` + `scale-[1.02]` + `active:scale-95` — 5 effects stacked.
- Pick 2: keep `hover:bg-brand-gold-vibrant` (color) + `hover:-translate-y-0.5` (lift). Delete the shadow glow, scale, and active state.
- Apply same discipline to `.btn-primary-hero` and `.btn-secondary-hero`.
- **Acceptance:** `.btn-primary` class list in built CSS contains `hover:bg-` and `hover:-translate-y-` only — no `scale`, no `shadow-[0_0_`, no `active:scale`.

**12.10 Headline container width** — *high*
- File: `app/page.tsx:52`
- Current `max-w-4xl` inside `max-w-7xl` container leaves desktop hero looking lopsided.
- Add a two-column grid at `lg:grid-cols-5`: left 3 cols = headline + CTA, right 2 cols = insurance-carrier logo strip OR crew portrait (once new hero image lands, decide based on composition).
- Keep single-column on mobile and tablet.
- **Acceptance:** at 1440px, homepage hero content fills the visual width of the page; right-hand dead space is ≤ 10% of viewport width.

**12.11 Delete dead dark-mode tokens** — *medium*
- File: `globals.css:59-84`, `tailwind.config.ts:4`
- Delete the `.dark { ... }` block.
- Delete `darkMode: ["class"]` from `tailwind.config.ts`.
- Confirm no component uses `dark:*` Tailwind modifiers (`grep -r "dark:" app/ components/` before deleting; abort if any match).
- **Acceptance:** `grep "\.dark\b" globals.css` returns empty. `grep "darkMode" tailwind.config.ts` returns empty. Build still succeeds.

**12.12 Consolidate duplicate `@layer base` blocks** — *medium*
- File: `globals.css:5-85` and `globals.css:527-534`
- The second block applies `bg-background text-foreground` which fights the first block's `from-amber-50 to-white` gradient.
- Merge: keep the cream gradient as the body background; delete the second block entirely.
- **Acceptance:** `grep -c "@layer base" globals.css` returns `1`.

**12.13 Icon sizing consistency** — *medium*
- File: `globals.css:204-206` + any component using `.feature-icon`
- `.feature-icon { @apply text-3xl mb-2 }` sizes glyph fonts, not Lucide SVGs.
- Replace with `.feature-icon { @apply w-8 h-8 mb-2 text-brand-gold-vibrant }` so Lucide icons render uniformly.
- Audit every `.feature-icon` usage; ensure the child is a Lucide component.
- **Acceptance:** `.feature-icon` class definition contains `w-8 h-8`. All components that render a `.feature-icon` wrap a Lucide `<svg>` child.

---

### Stream C — Trust-Signal Content (real logos)

**Depends on:** Stream A complete (needs the hero shell to sit under). Partially blocked by 12.0 for cert badges only — logo strips ship regardless.

**12.14 Insurance carrier logo strip** — *critical for conversions*
- New component: `components/InsuranceLogos.tsx`.
- Copy: **"We work directly with your insurance carrier"** (H3) + grid of carrier logos.
- Carriers to include (Texas-dominant for storm/hail claims):
  1. State Farm
  2. Allstate
  3. USAA
  4. Farmers Insurance
  5. Liberty Mutual
  6. Nationwide
  7. Travelers
  8. Progressive
- **Sourcing rule:** Use the carrier's official brand asset center (see `BRAND-SOURCES.md`). Grayscale or mono-gold treatment at low opacity (`opacity-70 hover:opacity-100 transition`) so no carrier looks "endorsed" — this is a "we file claims with…" strip, not an affiliation claim.
- Store all logos in R2 under `images/trust/insurance/[carrier-slug].svg` (prefer SVG; PNG at 2x only as fallback).
- **CLS guardrail:** every `<img>` tag carries explicit `width` and `height` attributes matching the SVG's native `viewBox` (e.g., `width="160" height="48"`). Wrap each in a fixed-aspect container so lazy-loading does not trigger layout shift.
- Placement: homepage (below hero trust badges), `/services/`, `/hail-damage-repair-amarillo/`, all storm-damage templates.
- **Legal note:** add footer disclaimer: *"Carrier logos are trademarks of their respective owners. 5 Star Commercial Roofing is independent and not affiliated with or endorsed by any insurance carrier."*
- **Acceptance:** component renders 8 logos in a responsive grid, all sourced from R2, all with `width`+`height` attrs, footer disclaimer present on every page that mounts the component, Lighthouse CLS on home + `/services/` < 0.05.

**12.15 Residential shingle brand strip** — *high*
- New component: `components/MaterialBrands.tsx` (variant: `residential`).
- Copy: **"Premium residential materials we install"** (H3) + logo grid.
- Brands:
  1. GAF
  2. Owens Corning
  3. CertainTeed
  4. Malarkey Roofing Products
  5. Atlas Roofing
  6. TAMKO
- Source from each manufacturer's press/media kit per `BRAND-SOURCES.md`.
- Placement: homepage, `/residential-roofing/`, all residential location pages.
- **Certification badges:** default = skip. If Rich confirms in-session that any of {GAF Master Elite, OC Platinum Preferred, CT SELECT ShingleMaster} are currently held, render those cert badges above the logo strip using the official cert artwork from the manufacturer's channel-partner portal. Otherwise ship logo strip only.
- **CLS guardrail:** every `<img>` has explicit `width` + `height`.
- **Acceptance:** 6 brand logos visible on the three placement surfaces.

**12.16 Metal roofing brand strip** — *medium*
- Same component, variant: `metal`.
- Brands: McElroy Metal, Metal Sales Manufacturing, Englert, Drexel Metals, MBCI, ATAS International.
- Placement: `/metal-roofing/`, relevant `/commercial-roofing/` sub-pages.
- **CLS guardrail:** every `<img>` has explicit `width` + `height`.

**12.17 Commercial roof system brand strip** — *medium*
- Same component, variant: `commercial`.
- Brands: Carlisle SynTec, GAF EverGuard, Versico, Johns Manville, Sika Sarnafil, Mule-Hide, Duro-Last, Elevate (formerly Firestone Building Products).
- Placement: `/commercial-roofing/`, `/tpo-roofing/`, `/pvc-roofing/`.
- **CLS guardrail:** every `<img>` has explicit `width` + `height`.

**12.18 BBB / GAF / Owens Corning certification badges in footer** — *medium*
- File: `components/Footer.tsx`.
- **Default = skip.** Only ship cert badges if Rich confirms in-session which certifications are held.
- If confirmed: add a small "Accredited & Certified" row above the link columns with the relevant badges, greyscale on dark footer background, hover to color.
- If unconfirmed: file as a phase 12.5 follow-up and proceed.
- **CLS guardrail:** every `<img>` has explicit `width` + `height`.

---

### Stream D — Hero Image Upgrades **[DEFERRED TO PHASE 13]**

Stream D tasks (12.19, 12.20) are intentionally **not executed in Phase 12**. Hero image generation requires an image generator + human curation + R2 upload credentials and would block Phase 12 completion on an external dependency.

Phase 12 produces the planning artifacts only:
- **`IMAGE-PROMPTS.md`** — 32 Nano Banana 2 prompts, per-page relevant, rewritten for natural-language scene description
- **`IMAGE-MANIFEST.md`** — per-page mapping (page URL → image slug → template file → aspect ratio)
- Temporary location-page overlay (`bg-gradient-to-br from-brand-brown/85 via-brand-brown/60 to-brand-gold/40` — already scoped in task 12.6) so the current shingle-close-up heroes at least feel warm and branded until Phase 13 replaces them.

**Phase 13: Hero Image Generation** — consumes these artifacts, runs the prompts through Nano Banana 2, culls, uploads to R2, and wires the slugs into templates.

---

### Stream E — Cleanup & Polish

**Depends on:** Streams A and B complete.

**12.21 Section CTA panel on page scroll** — *medium*
- File: `app/page.tsx` — the "See Our Quality Work" section currently has a huge empty band (per audit scroll inspection). Either populate with a 4-image grid or delete and tighten the page.
- **Acceptance:** no `<section>` on homepage renders > 300px of vertical whitespace with no content at 1440px.

**12.22 "Did You Know?" callout upgrade** — *low*
- File: `app/page.tsx` (search for "Did You Know")
- Bump pin icon to `w-6 h-6`, add left border accent strip `border-l-4 border-brand-gold-vibrant pl-6`, increase editorial weight.

**12.23 Footer NAP + trust additions** — *low*
- File: `components/Footer.tsx`
- Add Google Map embed (lazy iframe) in Contact column.
- Add license # display if Rich provides the TX contractor license number in-session; otherwise skip.
- Repeat phone with `tel:` link + hours block.

**12.24 Animation token scale** — *low*
- File: `globals.css` `:root`
- Add:
  ```css
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  ```
- Replace scattered `duration-200 / 300 / 500 / 700` with these tokens via utility class remapping.

**12.25 Remove `hero-overlay` dead class** — *low*
- File: `globals.css:174-176`
- `.hero-overlay` is defined but homepage uses inline gradient. Either delete the class or refactor home hero to use it. Decide during implementation.

---

## Verification Loop (6 checks)

Before marking phase 12 complete, all 6 must pass:

1. **Build** — `cd sites/5-star-roofing && npx next build` → zero errors.
2. **Visual parity** — Screenshots at 1440px and 375px for: `/`, `/services/`, `/contact/`, `/roof-repair-amarillo/`, `/commercial-roofing/`, `/residential-roofing/`. All show: proper hero shell (image may still be existing asset pending Phase 13), trust row with real logos, no card chrome, no chat/sticky collision.
3. **Accessibility** — Lighthouse a11y ≥ 95 on homepage + `/services/`. All contrast green.
4. **Performance + CLS guardrail** — Lighthouse Performance ≥ 95 desktop on home + `/services/` + one location page. **CLS < 0.05 on each of those three URLs, measured before AND after the phase, with the delta documented in `VERIFICATION.md`.** Any regression triggers a revision pass on Stream C logo `<img>` dimensions.
5. **Stream D artifacts** — `IMAGE-PROMPTS.md` (Nano Banana 2 format, 32 prompts) and `IMAGE-MANIFEST.md` (per-page mapping) both exist, lint clean, and are referenced from Phase 13 in ROADMAP.md.
6. **Trademark/legal** — insurance carrier disclaimer present in footer on every page; no "affiliated with" or "endorsed by" language anywhere; all logos stored locally (R2 or `public/images/trust/` — never hotlinked); cert badges only shown if Rich confirmed in-session.

## Rollback

Every task in streams A, B, E is a pure edit to `app/**` or `globals.css` → revert via `git revert` of the phase 12 commits.

Stream C adds new logo assets (local `public/images/trust/...` or R2) plus new components. Rollback = delete the new imports in `app/page.tsx`, `app/services/page.tsx`, and hub pages; prune the asset directory.

Stream D planning artifacts (IMAGE-PROMPTS.md, IMAGE-MANIFEST.md) are inert until Phase 13 consumes them — no rollback needed.

## Estimated Work

- Stream A (critical layout): 6-8 hours
- Stream B (brand/color): 3-4 hours
- Stream C (trust logos — research + sourcing + staging + component): 5-7 hours
- Stream D (prompt + manifest planning artifacts only): 1-2 hours — deferred execution to Phase 13
- Stream E (cleanup): 2-3 hours

**Phase 12 total ~17-24 hours.** Stream A alone (quick wins) is 6-8 hours and unlocks ~70% of the visual impact. Phase 13 adds another ~8-12 hours of wall time for image generation + curation.
