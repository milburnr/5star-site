# Phase 12: UI/UX Remediation & Trust-Signal Upgrade - Context

**Gathered:** 2026-04-10
**Status:** Ready for planning (PLAN.md, IMAGE-PROMPTS.md, BRAND-SOURCES.md already drafted)
**Source:** ui-ux-pro-max audit of live site (5starroofingpros.com) + conversation with Rich on 2026-04-10

<domain>
## Phase Boundary

**In scope:**
- Fix broken `/services/` hero (no background, plain `<h1>`)
- Strip dated card chrome from homepage hero (`app/page.tsx:52`)
- Resolve chat widget + sticky CTA bar collisions
- Body-text color discipline (charcoal, not gray)
- Trust-signal content: real insurance carrier logos + material manufacturer logos
- Hero image upgrades for 24 city pages + homepage + services + commercial + residential + hail/storm/inspection/metal heroes
- Remove dead code: dark-mode tokens, duplicate `@layer base`, unused classes
- Simplify overworked CTA hover choreography
- Lighthouse: maintain 95+ desktop, zero CLS regression

**Out of scope:**
- No rewrite of SEO titles/meta (Phase 3 territory)
- No new pages, no hub-page restructure (Phase 6 territory)
- No backend, no API, no forms rework
- No dark mode implementation (dark tokens deleted as dead code, not wired)
- No change to routing, redirects, or sitemap
- No rebuild of `tools/site-builder/` pipeline

</domain>

<decisions>
## Implementation Decisions

### Brand & Color (LOCKED — Rich's instructions 2026-04-10)
- **NO blue palette.** Ignore ui-ux-pro-max's Trust & Authority blue recommendation.
- Keep the existing gold/sunset brand: `#E4C66E` (gold), `#F7E291` (gold-light), `#F1B609` (gold-vibrant), `#EEC835` (gold-bright), `#815D01` (brown), `#A57F0F` (brown-dark).
- For high-contrast needs, use charcoal + black + white variants instead of blue.
- Body text → charcoal `#1F2937` (was `#525252`).
- Headings → near-black `#111827` (was `#54595F`).
- Trust badges: solid white cards, charcoal numbers, gold accent underline (not gradient-text-transparent).

### Hero Imagery (LOCKED — Rich's instructions)
- Current location-page heroes that render as flat gray shingle close-ups MUST be replaced.
- Each replaced hero gets a reference slug like `[page]-hero` and a detailed AI image prompt.
- **Prompt library lives in `IMAGE-PROMPTS.md`.**
- Visual theme: sunset or sunrise Texas Panhandle, photo-realistic, cinematic, matches the current homepage hero's warmth.
- Homes must read as high-end (limestone, brick, custom farmhouse, modern metal-roof) — no vinyl tract housing.
- Roof must be the dominant visual element.
- **Hard ban on safety gear:** NO harness, NO hard hat, NO safety vest. Residential Texas roofers don't wear them. Any generated image with this gear must be regenerated.
- Mix shingle and standing-seam metal roofing across the 24 city heroes so the site doesn't feel monotone.
- 16:9 aspect, ~1/3 negative space on the left for headline overlay.

### Trust Logos (LOCKED — Rich's instructions)
- Must use **real** insurance carrier logos (State Farm, Allstate, USAA, Farmers, Liberty Mutual, Nationwide, Travelers, Progressive).
- Must use **real** residential shingle brand logos (GAF, Owens Corning, CertainTeed, Malarkey, Atlas, TAMKO).
- Must use **real** metal roofing brand logos (McElroy Metal, Metal Sales, Englert, Drexel Metals, MBCI, ATAS).
- Must use **real** commercial roof system brand logos (Carlisle SynTec, GAF EverGuard, Versico, Johns Manville, Sika Sarnafil, Mule-Hide, Duro-Last, Elevate).
- All logos sourced from official press kits → stored in R2 at `images/trust/[category]/[slug].svg`. No hotlinking.
- Display treatment: grayscale/mono-gold at 70% opacity, hover to 100% + native color.
- Mandatory legal disclaimer in footer: not affiliated/endorsed.
- Cert badges (GAF Master Elite, OC Platinum Preferred, CertainTeed SELECT) only displayed if actually held — must confirm with owner (Ben Terhune) before shipping.

### Layout Fixes (LOCKED — from audit findings)
- `/services/` hero must mirror `/contact/` treatment (proper `<section className="hero">`, background image, overlay, dual CTA, trust row).
- Homepage hero must lose the `md:backdrop-blur-sm md:bg-gradient-to-r ... md:border-l-4 md:border-brand-gold` card wrapper.
- Chat widget (LeadConnector) must start collapsed and sit `calc(88px + env(safe-area-inset-bottom))` above bottom edge when sticky bar visible.
- Section rhythm standardized to two tokens: `.section-major py-16 md:py-24` and `.section-sub py-12 md:py-16`.

### Code Cleanup (LOCKED)
- Delete the `.dark { ... }` block in `globals.css:59-84` and `darkMode: ["class"]` in `tailwind.config.ts:4`.
- Merge the two `@layer base` blocks in `globals.css` (lines 5 and 527) — the second fights the first.
- Fix `.feature-icon` — currently uses `text-3xl` which sizes font glyphs, not Lucide SVGs.
- CTA hover: reduce from 5 stacked effects to 2 (color + lift).

### Claude's Discretion
- Exact AI image generator (Imagen 4 / Flux Pro / Midjourney) — use judgment per prompt.
- Component file locations inside `components/` — match existing patterns.
- Specific R2 CDN path convention under `images/trust/` and `images/heroes/`.
- Whether to add a Google Maps embed in the footer (task 12.23 is low-priority nice-to-have).
- Exact shade of charcoal within `#111827` - `#1F2937` range.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Audit findings
- `.planning/phases/phase-12-ui-ux-remediation/PLAN.md` — 25-task breakdown across 5 streams (A: critical layout, B: brand/color, C: trust logos, D: hero images, E: cleanup)
- `.planning/phases/phase-12-ui-ux-remediation/IMAGE-PROMPTS.md` — 32 AI image prompts with base style, hard rules, and per-city scenes
- `.planning/phases/phase-12-ui-ux-remediation/BRAND-SOURCES.md` — official press-kit URLs, R2 path conventions, legal disclaimer, component skeleton

### Existing codebase
- `app/page.tsx` — homepage (1020 lines) with hero that needs chrome stripped
- `app/services/page.tsx` — services hub page with broken hero (line 130-133)
- `app/contact/page.tsx` — reference implementation of a correct hero
- `app/globals.css` — component layer styles, has duplicate `@layer base` blocks and dead `.dark` tokens
- `tailwind.config.ts` — brand color tokens, `darkMode: ["class"]` to delete
- `components/ChatWidget.tsx` — LeadConnector loader that needs collapsed-on-load config
- `components/Footer.tsx` — needs insurance disclaimer + accreditation badges
- `hero-manifest.json` — 24 city hero entries to update once new AI images land

### Brand & voice
- `.planning/brand/entity-guidelines.md` — canonical business name, NAP
- `.planning/brand/content-voice.md` — tone rules
- `.planning/DESIGN-QUALITY-STANDARDS.md` — the 6-check verification loop

### Design intelligence
- `tools/site-builder/uipro-data/colors.csv` — existing palette data (for cross-reference, not repalette)
- `tools/site-builder/uipro-data/ui-reasoning.csv` — industry rules (service businesses)

</canonical_refs>

<specifics>
## Specific Ideas

### Concrete file-level fixes
- `app/page.tsx:52` — strip `md:backdrop-blur-sm md:bg-gradient-to-r md:from-black/40 md:to-transparent p-4 sm:p-6 md:p-8 lg:p-12 md:rounded-2xl md:border-l-4 md:border-brand-gold`
- `app/page.tsx:60` — fix phantom "Amarillo" link, drop underline
- `app/page.tsx:80-108` — replace trust badge gradient cards with solid white + charcoal + gold underline
- `app/services/page.tsx:130-133` — wrap in `.hero` treatment like `/contact/`
- `globals.css:7` — body text `text-gray-text` → charcoal
- `globals.css:59-84` — delete `.dark` block
- `globals.css:89-95` — simplify `.btn-primary` hover to 2 effects
- `globals.css:204` — `.feature-icon` fix for Lucide
- `globals.css:312-339` — `.sticky-contact-bar` z-index + offset for chat widget coexistence
- `globals.css:527-534` — delete second `@layer base` block
- `tailwind.config.ts:4` — delete `darkMode: ["class"]`
- `tailwind.config.ts:25-29` — charcoal gray tokens

### Trust row composition
- Homepage: hero → trust badges (existing, redesigned) → insurance carrier strip (NEW) → body sections
- `/services/`: hero (NEW) → trust badges → material brand strip (NEW, variant auto-detect) → body
- `/commercial-roofing/`: hero (NEW) → commercial brand strip → body
- `/residential-roofing/`: hero (NEW) → shingle brand strip → body

### Image generation workflow
- 32 prompts × 4 variants = 128 images to cull
- Target: 32 final heroes at 2560×1440 AVIF + WebP + JPG
- Upload path convention: `images/heroes/[slug].[ext]`
- Update `hero-manifest.json` in a single commit after all R2 uploads complete

</specifics>

<deferred>
## Deferred Ideas

- **Dark mode implementation** — explicitly out of scope. The dead tokens are being deleted, not wired.
- **Google Map embed in footer** — optional task 12.23, low priority, can slip to phase 13 if time-constrained.
- **Animation token scale** (`--duration-fast/base/slow`) — task 12.24, low priority, nice cleanup but not blocking.
- **License # display** in footer — depends on owner confirmation of TX license details, can slip.
- **`hero-overlay` dead class cleanup** — task 12.25, trivial, bundle with whatever else touches `globals.css` last.
- **Accreditation cert badges** (GAF Master Elite, OC Platinum, CertainTeed SELECT) — contingent on Ben Terhune confirming actual certifications held; if unconfirmed at execution time, ship logo strip without cert badges and plan cert row as a follow-up.
- **Replacing `/gallery/` and `/contact/` imagery** — these are already rich and working; explicitly NOT in scope.

</deferred>

---

*Phase: 12-ui-ux-remediation*
*Context gathered: 2026-04-10 via manual audit + Rich constraints*
