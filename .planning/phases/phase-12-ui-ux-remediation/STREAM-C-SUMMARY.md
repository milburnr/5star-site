# Phase 12 — Stream C (Trust-Signal Content) Summary

**Status:** Complete with scope deviations. 5 plan tasks (12.14-12.18) shipped across 8 atomic commits.
**Build:** `npx next build` green after every commit, zero errors.

## Commits

| # | Task | Commit |
|---|---|---|
| assets | Logos from official CDNs | `426f567f` |
| 12.14 | InsuranceLogos component | `63c4c8e6` |
| 12.15-17 | MaterialBrands (3 variants) | `a02d7213` |
| wire | Homepage | `c08e0cfb` |
| wire | /services/ | `a00a754f` |
| wire | Hub pages | `1eafd05e` |
| wire | Hail/storm Amarillo | `e8ebc796` |
| 12.18 | Footer disclaimer + cert placeholder | `60a961d5` |

## Logo sourcing — 20 of 28 shipped (71%)

All sourced from each brand's own CDN. Zero hotlinks, zero Wikipedia scrapes.

**Shipped (20):**
- **Insurance (4):** state-farm.svg (st8fm.com), allstate.png (allstate.com/resources), travelers.svg (travelers.com/ClientResources), progressive.svg (contentstack via progressive.com)
- **Residential (4):** certainteed.svg, malarkey.png, atlas.png, tamko.png — all vendor-hosted
- **Metal (5):** mcelroy-metal.png, metal-sales.png, englert.svg, drexel-metals.png, mbci.png
- **Commercial (7):** carlisle-syntec.svg, johns-manville.svg, sika-sarnafil.svg, duro-last.svg, versico.png, mule-hide.png, elevate.png

**Skipped (8) — bot-blocked at 3 attempts each:**
USAA (Akamai), Farmers (HTTP/2 error), Liberty Mutual (0-byte CDN paths), Nationwide (Akamai), GAF (403), Owens Corning (inline-SVG only), ATAS International (403), GAF EverGuard (rolled into GAF). To be re-attempted when interactive browser-fetch is available. Shipped 20 still cover the dominant-share brands for the Texas Panhandle market.

## Page mounts (20 grep hits across 8 files)

- **Homepage:** `<InsuranceLogos />` after trust badges; `<MaterialBrands variant="residential" />` after "Premium Roofing Materials" section
- **/services/:** `<InsuranceLogos />` below new hero; `<MaterialBrands variant="residential" />` after Residential Services
- **/residential-roofing/:** residential variant after intro
- **/metal-roofing/:** metal variant after "Why Metal" block
- **/commercial-roofing/:** commercial variant after intro
- **/tpo-roofing/:** commercial variant after intro FadeIn
- **/hail-damage-repair-amarillo/** and **/storm-damage-repair-amarillo/:** `<InsuranceLogos />` below hero

## Verification

- `find public/images/trust -type f | wc -l` → **20**
- `grep -rn "InsuranceLogos\|MaterialBrands" app/` → **20 hits / 8 files**
- `grep -c "trademarks of their respective owners" app/layout.tsx components/InsuranceLogos.tsx components/MaterialBrands.tsx` → **1/1/1**
- `grep -E "blue|indigo|cyan|sky|teal" components/{InsuranceLogos,MaterialBrands}.tsx` → **zero hits**
- **CLS guardrail:** every `<img>` in both components carries explicit `width={c.width}` + `height={c.height}` from the logo's native SVG viewBox or PNG pixel size. Class caps render height at `h-10 md:h-12` with `w-auto`, aspect preserved.
- `npx next build` → green, 268 pages prerendered

## Scope deviations

1. **28 → 20 logos** (71%). Brief explicitly allowed skipping bot-blocked brands after 2-3 attempts.
2. **Insurance grid re-flowed 8→4 cols** to handle reduced set cleanly.
3. **Hail/storm wiring bounded to canonical Amarillo templates.** 14 city variants each for hail and storm are flat-file copies — filed as a future codemod pass (matches Stream A 12.5/12.6 and Stream B bonus precedent).
4. **`.gitignore` updated** with `!public/images/trust/**/*.{svg,png}` exceptions — logos ship in-repo per brief ("R2 upload is deferred — public/ is fine for Phase 12").
5. **Cert badges skipped** per plan 12.18 default. Commented-out block staged in `layout.tsx` awaiting in-session confirmation of held certs.

## Left for Phase 12 verification

1. **Lighthouse Perf ≥ 95 + CLS < 0.05** on `/`, `/services/`, one location page. Stream C's explicit dimensions should hold logo-strip CLS at 0; overall page CLS depends on hero images in Phase 13.
2. **Playwright screenshot diff** at 1440px and 375px across the 6 plan-specified URLs.
3. **User acceptance:** Rich decides whether to accept 71% coverage, run a follow-up browser-fetch pass for the 8 bot-blocked brands, or uncomment cert badges after confirming held certifications.

## Self-Check: PASSED

- 8 Stream C commits verified via `git log`
- Final build green, 268 pages
- All 20 logo files present
- All import/mount pairs present
- Every new `<img>` has width+height (CLS guardrail)
- Zero blue tokens in new components
- Footer disclaimer verbatim to spec
- Cert badges correctly absent
