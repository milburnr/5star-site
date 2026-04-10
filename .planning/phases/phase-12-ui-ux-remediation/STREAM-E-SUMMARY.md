# Phase 12 — Stream E (Cleanup & Polish) Summary

**Status:** Complete. 5 plan tasks + 1 site-wide palette codemod shipped.
**Build:** `npx next build` green after every commit, zero errors, 268 pages prerendered.

## Commits

| # | Task | Commit | Files |
|---|---|---|---|
| 12.21 | Tighten homepage whitespace bands | `eb6a98f9` | `app/page.tsx` |
| 12.22 | "Did You Know?" editorial upgrade | `ba92574a` | `app/page.tsx` |
| 12.23 | Footer NAP + Google Maps lazy embed | `867c908f` | `app/layout.tsx` |
| 12.24 | Animation duration token scale | `c1bc5a6a` | `app/globals.css` |
| 12.25 | Document `.hero-overlay` as active (kept) | `e57901ba` | `app/globals.css` |
| codemod | Blue + cool-palette -> gold sunset | `51b99652` | 176 files, 1082 replacements |

## Codemod scope

- **176 files** touched across `app/` and `components/`.
- **1,082 total replacements** (Perl `-i` word-boundary regex pass + 15-file contrast-fix pass).
- Classes rewritten: `blue`, `indigo`, `cyan`, `sky`, `teal`, `violet`, `purple`, `rose`, `pink` — all Tailwind utilities (`from-`, `to-`, `via-`, `bg-`, `text-`, `border-`, `hover:bg-`, `hover:text-`).
- Hardcoded hex: `#2C4A5E` (slate-blue in `components/MobileMenu.tsx`) -> `#3D2415` (brand-brown-dark).
- Semantic mapping (not positional): cool-50/100 shades -> `amber-50/100`, cool-500/600 -> `brand-gold-vibrant`, cool-700/800/900 -> `brand-brown`, cool borders scaled onto `brand-gold/20|30|50` and `brand-gold-vibrant`.
- **Contrast guardrail:** naive pass produced 15 files with `bg-brand-gold-vibrant text-white` (previously `bg-{indigo,blue,purple}-600 text-white` solid panels — number badges, claims-process boxes). Gold-vibrant + white is ~2:1 and fails WCAG AA. Remapped those pairings to `bg-brand-brown text-white` in a second pass to preserve ~13:1 contrast.

### Judgement calls

- **Scope expansion from "blue only" to all cool/non-gold palettes.** Brief named `blue`; Stream B findings noted "handful of `-indigo-`, `-cyan-`, `-slate-` hits that crept in." Actual grep surfaced 400+ indigo/cyan/teal + 250+ purple/pink hits. The Phase 12 locked constraint reads "Only gold/brown/charcoal/black/white." Purple/pink/indigo etc. all violate that constraint just as loudly as blue, so they were swept in the same atomic codemod. Decision documented here rather than deferred to another phase because the mechanical fix is identical.
- **Single commit for the codemod, not split by template area.** Brief allowed splitting above 200 edits / 20 files. The codemod is a single mechanical rule set applied uniformly — splitting by `/hail-*`, `/storm-*`, etc. would fragment one semantic change into arbitrary buckets and make reverts harder. Single atomic commit chosen for reviewability.
- **`.hero-overlay` kept, not deleted (12.25).** Stream A/B summaries flagged the class as dead. Fresh grep found 26+ active consumers (amarillo, lubbock, midland, odessa, canyon, pampa, borger, hereford, perryton, big-spring, snyder, levelland, dumas, monahans, andrews, plainview, vega, claude, bushland, wildorado, flat-roof-repair-midland, metal-roof-installation-odessa, blog hub, multiple blog posts). Kept with an inline comment listing the consumers so future cleanup doesn't repeat the misdiagnosis.
- **12.23 footer lives inline in `app/layout.tsx`,** not `components/Footer.tsx`. Brief/plan assumed a separate component file. Edited in place.
- **12.21 approach: tighten, not populate.** Brief offered populate-or-tighten. The "See Our Quality Work" section was already populated with a 4-card project grid. The real empty band came from stacked `mb-16` + `section-major` (`py-24`) on the Before/After, Roofing Materials, and Hail Stats sections — collapsed those to `section-sub` and reduced inner `mb-12` -> `mb-8`.
- **12.24 scope bounded.** Added the three `--duration-*` CSS custom properties but did NOT refactor every `duration-{200,300,500,700}` Tailwind utility across the codebase. That's a follow-up codemod pass.

### Deliberately left alone

- **Pre-existing `amber-600`, `orange-*`, `yellow-*`, `gray-*` utilities.** These are inside the approved gold-sunset palette; not violations.
- **Tailwind gradient direction/ratio on replaced panels.** Where `from-blue-50 to-white` became `from-amber-50 to-white`, the gradient direction is preserved verbatim. A few former `from-purple-50 to-indigo-50` card backgrounds now read `from-amber-50 to-amber-100` — visually monotone but on-brand. Not a regression.
- **Hero image compositions and section order on location pages.** Stream D owns image replacement (Phase 13).

## Verification

- `grep -rE "(blue|indigo|cyan|sky|teal|violet|purple|fuchsia|rose|pink)-[0-9]+|#3D5A70|#2C4A5E" --include="*.tsx" --include="*.ts" --include="*.css" app/ components/` -> **0 hits**
- `grep -rn "hero-overlay" app/ components/` -> 27 hits (all active consumers + 1 definition in `globals.css`)
- `git log --oneline | head -10` -> 6 Stream E commits on top of Stream B's `8f74e0d9`
- `npx next build` -> green, 268 static pages rendered

## Build status

PASSED. Every commit in this stream built successfully.

## What Stream C still needs to ship

Stream E leaves Stream C with a clean canvas:

1. `components/InsuranceLogos.tsx` — 8 carrier logos from R2 with explicit `width`/`height` attrs; mount on homepage (right column placeholder already reserved from Stream B 12.10), `/services/`, `/hail-damage-repair-amarillo/`, all storm-damage templates.
2. `components/MaterialBrands.tsx` — residential/metal/commercial variants.
3. Footer accreditation row — placeholder comment already reserved in `app/layout.tsx` inside the Contact column (`{/* Phase 12 Stream C: accreditation row */}`). Stream C inserts BBB / GAF / OC cert badges there once Rich confirms held certifications.
4. Carrier-trademark footer disclaimer.

Everything else from the Phase 12 acceptance criteria (hero shell, no card chrome, charcoal body text, consolidated `@layer base`, no blue, no dark mode, gold-only palette) is done as of this stream.

## Self-Check: PASSED

- `git log main~6..HEAD --oneline` -> 6 commits (12.21, 12.22, 12.23, 12.24, 12.25, 12.E-codemod).
- Build green.
- Grep sweep for all blue + cool-palette tokens = 0.
- `.hero-overlay` retained with audit comment.
- Animation tokens present in `:root`.
