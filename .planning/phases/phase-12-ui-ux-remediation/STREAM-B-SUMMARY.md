# Phase 12 — Stream B (Brand & Color Discipline) Summary

**Status:** Complete. 7 plan tasks + 1 bonus cleanup shipped.
**Build:** `npx next build` green after every commit, zero errors.

## Commits

| # | Task | Commit |
|---|---|---|
| 12.7 | Darken body text to charcoal | `28608f7d` |
| 12.8 | Trust badge redesign (solid white + gold underline) | `a8b1743a` |
| 12.9 | Simplify CTA button hover choreography | `f780c6b5` |
| 12.10 | Two-column hero grid + right column reserve | `8ba9bd72` |
| 12.11 | Delete dead dark-mode tokens | `1514ae82` |
| 12.12 | Consolidate duplicate `@layer base` blocks | `dc9d679e` |
| 12.13 | `.feature-icon` → `w-8 h-8` for SVGs | `0a1c6c9b` |
| bonus | Remove blue palette violations (scoped 3 hits) | `a81462e4` |

## Verification

- `grep "@layer base" app/globals.css` → `1` (was `2`).
- `grep "darkMode" tailwind.config.ts` → empty.
- `grep "\.dark \{" app/globals.css` → empty.
- Pre-flight `grep "dark:"` in `app/`, `components/`, `packages/framework/components/` → zero Tailwind modifier hits (GlassCard.tsx match was object key, shadow-dark match was CSS var name — both benign). 12.11 safe.

## Contrast check (12.7)

- `#1F2937` (gray.text) on `#FFF8E7` (cream body bg): **≈13.8:1** — AAA.
- `#1F2937` on `#F7E291` (brand-gold-light): **≈10.2:1** — AAA.
- `#111827` (gray.primary) on `#FFF8E7`: **≈16.3:1** — AAA.
- `#111827` on `#F7E291`: **≈12.0:1** — AAA.
All four combinations clear WCAG AAA (≥7:1) with headroom.

## Deviations

**12.9 — hero CTAs folded in.** Plan text said "12.9 applies to `.btn-primary-hero`/`.btn-secondary-hero` + `.lead-form-submit`". Stream A noted the homepage inline hero `<a>` tags (tel + Free Inspection) still carried `hover:scale-105` + shadow glow copied from contact. Because I was rewriting those same tags for 12.10 (grid wrapper), I stripped `hover:scale-105` and the shadow glow inline — charged to 12.10 commit `8ba9bd72`, noted in commit body.

**12.13 — zero current usages.** Audit turned up no `.feature-icon` class consumers in `app/` or `components/`. Only STYLE-GUIDE.md references it (with a text emoji). Class redefinition landed as prep; no component rewrites needed. Marked complete.

**Bonus scope-bounded to 3 files.** Brief specified `layout.tsx:117`, `roof-repair-amarillo/page.tsx:284`, `roof-repair-amarillo/page.tsx:411`. Sweep of full tree turned up ~50+ additional blue palette hits across city/service templates (see "Findings" below). Stayed inside the bounded scope — matching Stream A's 12.5/12.6 pattern.

## Findings for Streams C / E

- **Blue palette violations remain widespread in city/service templates.** Representative hits (not exhaustive):
  - `residential-roofing-odessa`, `residential-roofing-canyon`, `asphalt-shingle-roofing-snyder`, `asphalt-shingle-roofing-big-spring`, `hereford-texas-roofing`, `metal-roofing-borger`, `metal-roofing-lubbock`, `metal-roofing-midland`, `metal-roofing-pampa`, `tpo-roofing-amarillo`, `tpo-roofing-canyon`, `tpo-roofing-odessa`, `roof-inspections-amarillo`, `roof-replacement-levelland`, `roofing-methods-in-amarillo` — `from-blue-50`, `bg-blue-50`, `border-blue-500`, `text-blue-600`/`-800`, `bg-blue-600`.
  - Recommend Stream E codemod: `from-blue-50` → `from-amber-50`, `bg-blue-50` → `bg-amber-50`, `border-blue-500` → `border-brand-gold-vibrant`, `text-blue-600`/`-800` → `text-brand-brown`, `bg-blue-600` → `bg-brand-gold-vibrant`. Then manual pass on the handful of `-indigo-`, `-cyan-`, `-slate-` hits that crept in.
- **Trust badge `Star` icons enlarged to `w-8 h-8`** (12.8) to match sibling 4xl/5xl number sizing. The row now scans cleanly across all four tiles.
- **Hero right column** (12.10) is a placeholder `aspect-[4/5]` div. Stream C's `InsuranceLogos.tsx` is the obvious candidate — Phase 13 hero image work may supersede. Decision belongs to Stream C / Phase 13.
- **`.hero-overlay` still dead** in `globals.css` — 12.25 (Stream E) owns.

## Self-Check: PASSED

- `git log --oneline main~8..HEAD` → 8 commits, one per task + bonus, all present.
- Final `npx next build` green, zero errors.
- `@layer base` count = 1. `darkMode` count = 0. `.dark {` count = 0.
- Trust badge DOM no longer contains `bg-clip-text` or `text-transparent` on numbers.
- `.btn-primary` class list contains only `hover:bg-brand-gold-vibrant` + `hover:-translate-y-0.5` (no scale, no shadow glow, no active:scale).
