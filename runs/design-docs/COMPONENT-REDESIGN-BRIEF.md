# 5 Star Roofing — Component Redesign Brief

**Companion docs:** `ART-BIBLE-5STAR.md`, `design-tokens-5star.json`.

This brief inventories every shared component in `components/` and prescribes
the changes needed to bring each into the new editorial visual language
established on the alt-home preview.

**Priority key:**
- 🔴 **HIGH** — appears on 20+ pages, redesign cascades broadly.
- 🟡 **MEDIUM** — appears on 5–20 pages.
- 🟢 **LOW** — appears on 1–5 pages or is utility-only.

**Implementation order is fixed.** Do not jump ahead. Each component is a
single Playwright-verified PR. The order is chosen so the most-visible
problems (interior hero, contact section, service cards) ship first.

---

## TIER 1 — HIGH PRIORITY (start here)

### 1. `Hero.tsx` (current interior hero)
**Path:** `components/Hero.tsx`
**Appears on:** 26+ pages — every main route, service page, location page, hub page.
**Tags:** hero, trust, cta
**Priority:** 🔴 HIGH — **start with this one.**

**Current problems:**
- Generic split-title + trust block + dual-CTA layout. Reads as a 2018 service-business template.
- Uses solid title type on a dark band — none of the editorial layering established in the alt-home.
- Right-rail trust block clashes with the new "translucent display type" approach.
- Title type and body type are the same font family — no contrast between decorative and functional zones.
- Trust badges (years in business, insured, etc.) currently in the hero — should live in a dedicated trust section, not in every hero.
- Stat-tile pattern is too loud for an interior page hero.

**Recommended changes:**
- **Replace entirely** with the new `AltHeroFrame` variants. Map current `<Hero>` usages:
  - Homepage → `<HomeHero>`
  - `/lubbock-tx-roofing/`, `/midland-tx-roofing/`, etc. → `<LocationHero city="..." />`
  - `/metal-roofing/`, `/hail-damage-repair/`, etc. → `<ServiceHero service="..." />`
  - `/hail-damage-repair-lubbock/`, `/metal-roofing-midland/`, etc. → `<ServiceLocationHero city="..." service="..." />`
- For interior pages, the half-scale display type (displayScale 0.55) keeps the hero from dominating the viewport.
- Move trust badges OUT of the hero — they belong below the fold in a dedicated trust strip.
- Delete the dual-CTA pattern; one primary CTA per page.

**What stays:**
- The pre-optimized hero photo pipeline (`OptimizedBackground`-style image-set with AVIF/WebP/JPEG fallbacks).
- The breadcrumb slot (will be moved into the content section beneath the hero).

**Migration plan:**
1. Add `<Hero>` adapter at top of file that detects page type and forwards to the right Alt variant.
2. Convert pages one at a time, starting with the homepage, then services hub, then service+city pages.
3. Smoke-test mobile PSI after every 5 page conversions.

---

### 2. `ContactForm.tsx` (the "wall of beige" problem)
**Path:** `components/ContactForm.tsx`
**Appears on:** 25+ pages
**Tags:** form, wall-of-beige
**Priority:** 🔴 HIGH

**Current problems:**
- Heavy cream/gold gradient background ("wall of beige").
- Form fields are large with light borders that disappear against the cream — low perceived affordance.
- Label-above-field treatment with bold weight reads as 2015 SaaS form.
- Service dropdown is a native `<select>` with no styling — visually inconsistent.
- Submit button is gold-on-cream — fails WCAG contrast in some viewports.
- Address fields are split across 3 columns — claustrophobic on tablets.

**Recommended changes:**
- **Background:** swap cream/gold gradient for `surface_brown_deep` (#120B06) with subtle gold hairline border at top + bottom of the section.
- **Field treatment:** ghost inputs — no background fill, gold hairline border (1px, `accent_gold` at 0.35), focus state pulses border to full `accent_gold` and adds a thin gold underline (animated draw-in like the H1 rule).
- **Labels:** above field, smaller (Poppins 0.75rem, letter-spacing 0.14em, uppercase). Same tracking as eyebrows.
- **Service dropdown:** replace native select with a custom listbox using `@radix-ui/react-select` (already in deps via `tabs.tsx`). Same dark-on-gold-hairline treatment.
- **Submit button:** use the primary CTA pill (`alt-cta` style from AltHeroFrame). Same gradient, same sheen. Anchor right within the form footer.
- **Address fields:** stack to 2 columns on tablet, single column on mobile.
- **Validation messages:** thin gold text below field, no red except for hard failures.

**What stays:**
- Field set (name, email, phone, service, address, message). No new fields.
- Netlify function submission endpoint.
- Success/failure state messaging.
- `useMarkContactForm` hook integration (A2P compliance).

---

### 3. `CTASection.tsx`
**Path:** `components/page-sections/CTASection.tsx`
**Appears on:** 25+ pages
**Tags:** cta, wall-of-beige
**Priority:** 🔴 HIGH

**Current problems:**
- Brown→gold gradient that's been used identically since the template launched — generic.
- "Get a Free Estimate" + phone number + secondary button = three competing CTAs in one block.
- Heading uses tailwind `text-4xl font-bold` — same flat treatment as everything else.

**Recommended changes:**
- **Replace gradient bg** with `surface_brown_deep` and a single radial accent (gold at 0.08 opacity, 600px diameter, top-right of the block).
- **Heading:** Cormorant Garamond, 400 weight, gold-bright `#EEC835`. Eyebrow above in Poppins caps.
- **Single CTA:** pill gradient (`F5F0E8 → B84A11`), same as hero. Replace the dual button + phone pattern.
- **Phone:** below the CTA as a discreet text link, not a competing button.
- **Spacing:** `clamp(60px, 8vw, 120px)` vertical padding per art bible.

**What stays:**
- Per-page copy override (CTA text, phone, link target).
- Phone-click tracking integration.

---

## TIER 2 — MEDIUM PRIORITY

### 4. `StatTile.tsx` + `AnimatedCounter.tsx`
**Path:** `components/page-sections/StatTile.tsx`, `components/AnimatedCounter.tsx`
**Appears on:** Homepage trust row, potential expansion.
**Tags:** stat-bar
**Priority:** 🟡 MEDIUM — but **gate before redesign**.

**Current problems:**
- Numbers like "20+ years", "1000+ roofs", "97% satisfaction" — most are unverified per `claims-allowlist.md`.
- Animated counters add a 200–400ms entrance animation on every page that uses them, with intersection observer overhead.
- The "stat-bar" pattern across the top of pages is the most generic service-business design tropes. Removes premium feel.

**Recommended changes:**
- **Before redesign: audit every stat against `client.json` claims allow-list.** Remove any tile without a verified source. Often this leaves only 2–3 valid stats.
- For the surviving stats: replace tile cards with a quiet **editorial line treatment** — Cormorant Garamond large number, Poppins caption below, gold hairline divider between stats.
- Drop the count-up animation. Premium brands don't count up to their numbers — they state them.
- Reduce to maximum 3 stats per row. Wider treatment.

**What stays:**
- The `IntersectionObserver`-based reveal in `FadeIn.tsx` can be reused for a single fade-in on the new editorial stat row.

---

### 5. `TrustBadgeRow.tsx`
**Path:** `components/page-sections/TrustBadgeRow.tsx`
**Appears on:** Most service pages.
**Tags:** trust
**Priority:** 🟡 MEDIUM

**Current problems:**
- Icon-grid pattern. Each badge is an icon + label like "Licensed", "Insured", "Free Estimates."
- Looks like every roofing competitor's site.

**Recommended changes:**
- **Switch to a single horizontal trust strip** with text-only items separated by gold hairline dividers — no icons. Items: "Licensed in Texas · Bonded & Insured · GAF Master Elite · Free Inspections."
- Quieter — the new brand says these things without yelling.
- Position below the hero, full-bleed, dark surface.

**What stays:**
- Per-page subset selection (some pages emphasize different badges).

---

### 6. `ReviewsSection.tsx` + `ReviewCard.tsx`
**Path:** `components/page-sections/ReviewsSection.tsx`, `ReviewCard.tsx`
**Appears on:** Homepage, service hubs (when data available).
**Tags:** trust
**Priority:** 🟡 MEDIUM

**Current problems:**
- 3-up grid of review cards with white background, drop shadow — generic e-commerce review treatment.
- Profile photos + star ratings + truncated text = lots of UI to scan.
- Doesn't match the editorial restraint of the rest of the new design.

**Recommended changes:**
- Switch to single-review-per-row, vertical stack, max 3 reviews shown.
- **No profile photos.** Just review text in Cormorant Garamond italic + reviewer name + Google attribution below.
- Small 5 gold stars (accent_gold, no fill effect).
- Read-more link in Poppins, gold-bright on hover with underline draw.
- Dark surface (surface_brown_deep) under the reviews.

**What stays:**
- Server-side Google Place API data fetch.
- Truncation behavior + "read more" link to source.

---

### 7. `ArticleLayout.tsx`
**Path:** `components/ArticleLayout.tsx`
**Appears on:** 80+ blog articles.
**Tags:** form, cta
**Priority:** 🟡 MEDIUM (different audience — informational, not conversion-focused)

**Current problems:**
- Header treatment for blog articles uses tailwind defaults — disconnected from the new editorial language.
- FAQ section uses accordion + JSON-LD but doesn't match the gold-hairline pattern.
- Final-CTA block uses CTASection template — needs the same redesign as Tier 1.

**Recommended changes:**
- **Header:** smaller hero — use `<ServiceHero>` at 0.4 scale for articles, with `displayText` derived from the article category and the article H1 in the content section. Breadcrumb above the hero.
- **Body prose:** Cormorant Garamond for body, Poppins for callouts/captions. Max-width 720px center.
- **FAQ accordion:** gold hairline borders, no card backgrounds. Plus-icon to chevron transition on expand.
- **Inline article images:** use the existing `ArticleImage.tsx` but drop the heavy caption box, replace with Poppins italic caption + gold hairline above.
- **Final CTA:** consume the new `CTASection` redesign (above).

**What stays:**
- `next-mdx-remote` integration, reading-time + breadcrumb + FAQ schema injection.
- All MDX content rendering.

---

## TIER 3 — MEDIUM-LOW PRIORITY

### 8. `InternalLinks.tsx`
**Path:** `components/InternalLinks.tsx`
**Appears on:** 50+ city/service pages (308 imports total).
**Tags:** list, cta
**Priority:** 🟡 MEDIUM (high page count but template-generated content, low visual impact)

**Current problems:**
- Two-column grid of button-styled links — feels like a directory.
- Cream/gold pill backgrounds — wall of beige.

**Recommended changes:**
- Switch to a quiet 3-column editorial list: section heading in Cormorant Garamond, list items in Poppins with gold-bright underline on hover.
- No filled buttons. Each item is just a link with a hover state.
- Gold hairline between the two list columns (nearby cities, related services).

**What stays:**
- Data-driven content (city/service tokens fed from local constants).

---

### 9. `ServiceCard.tsx`
**Path:** `components/page-sections/ServiceCard.tsx`
**Appears on:** Homepage featured grid + potential service hub expansion.
**Tags:** card, cta
**Priority:** 🟡 MEDIUM

**Current problems:**
- Image at top + title + description + CTA = generic card pattern.
- Hover scale + border glow is OK but the resting state is template-bland.
- Footer CTA inside card duplicates the page-level CTA.

**Recommended changes:**
- **Editorial card:** full-bleed photo with a thin gold hairline border. Title in Cormorant Garamond overlaid bottom-left (like a magazine cover), eyebrow in Poppins above.
- **Hover:** image gentle zoom (scale 1.04, 600ms), hairline border brightens, title shifts slightly. No card-lift.
- **Drop the in-card CTA.** The whole card is the link.
- Bigger photos, fewer cards per row (3 instead of 4).

**What stays:**
- The semantic structure (link wraps the whole card).

---

### 10. `FAQAccordion.tsx`
**Path:** `components/page-sections/FAQAccordion.tsx`
**Appears on:** Blog articles, potential service page expansion.
**Tags:** other
**Priority:** 🟢 LOW

**Current problems:**
- Radix-based accordion with default chevron, light gray borders.
- Plus/minus icons feel SaaS.

**Recommended changes:**
- Gold hairline (1px, accent_gold 0.4) between FAQ items, no card backgrounds.
- Question in Cormorant Garamond 500, gold-bright when expanded.
- Answer in Cormorant Garamond regular, max-width 720px.
- Chevron rotates 90° on expand, no plus/minus toggle.

**What stays:**
- FAQPage JSON-LD schema injection.
- Single/multi-expand prop.

---

### 11. `Breadcrumb.tsx`
**Path:** `components/Breadcrumb.tsx`
**Appears on:** Most pages.
**Tags:** nav
**Priority:** 🟢 LOW

**Current problems:**
- Two tone variants (on-light, on-photo) but both use the same chevron `>` separators and same compact treatment.

**Recommended changes:**
- Use the **slash separator** (`/`) instead of chevron — more editorial.
- Poppins, letter-spacing 0.12em, uppercase.
- On-photo variant uses `accent_gold` (#F5C77A) for current page, lighter gold for parents.
- On-light variant uses brand-brown.

**What stays:**
- JSON-LD schema generation.

---

## TIER 4 — LOW PRIORITY

### 12. `MaterialBrands.tsx`, `InsuranceLogos.tsx`
**Path:** `components/MaterialBrands.tsx`, `components/InsuranceLogos.tsx`
**Tags:** trust
**Priority:** 🟢 LOW

**Recommended changes:**
- Convert color logos to **grayscale + 60% opacity** by default, color-fade-in on hover. This makes them feel like a "manufacturers we work with" wall instead of an "as seen on" testimonial bar.
- Single row, evenly spaced, on a quiet section background (white or surface_brown_deep, depending on placement).
- Legal disclaimer text in Poppins italic, smaller, gold-text-muted.

---

### 13. `MobileMenu.tsx`
**Path:** `components/MobileMenu.tsx`
**Tags:** nav
**Priority:** 🟢 LOW (mobile-only)

**Recommended changes:**
- Replace the brown→gold gradient bg with `surface_brown_deep` + a single soft gold accent at top.
- Slide-in from right (not from top) — feels more app-like.
- Items in Cormorant Garamond, larger touch targets.
- Single primary CTA at the bottom (matches the hero CTA style).

**What stays:**
- Portal rendering to escape backdrop-filter.

---

### 14. `Section.tsx`
**Path:** `components/page-sections/Section.tsx`
**Tags:** other
**Priority:** 🟢 LOW (low-level wrapper)

**Recommended changes:**
- Current 8 "recipe" backgrounds include amber-50, white, gold-light, brown-gold, gradients — too many.
- Prune to 4 recipes:
  - `light` — white surface
  - `dark` — `surface_brown_deep`
  - `cream` — single warm cream (`#FAF6EF`, NOT a gradient)
  - `accent` — dark with a single radial gold spotlight

**What stays:**
- Wrapper API.

---

### 15. `GradientH2.tsx`
**Path:** `components/page-sections/GradientH2.tsx`
**Tags:** other
**Priority:** 🟢 LOW

**Recommended changes:**
- **Drop the gradient text.** Replace with solid `accent_gold` (#F5C77A) at 90% opacity. Gradient text is dated.
- Cormorant Garamond, weight 400.
- Optional eyebrow above (Poppins caps).

---

### 16. `CalloutBox.tsx` + `DefinitionCard.tsx`
**Path:** `components/page-sections/CalloutBox.tsx`, `DefinitionCard.tsx`
**Tags:** card, other
**Priority:** 🟢 LOW

**Recommended changes:**
- Strip warm-gradient bgs, switch to a 4px gold left-border on a faintly-tinted neutral background (`#FAF6EF` at 60% opacity).
- "Did You Know?" / "Pro Tip" labels in Poppins uppercase, gold-bright.
- Body content stays.

---

### 17. `CityVariantGrid.tsx`, `ProcessTimelineStep.tsx`, `RelatedArticles.tsx`
**Tags:** list
**Priority:** 🟢 LOW

**Recommended changes:**
- Apply the same hairline-divider + Cormorant Garamond title + Poppins meta pattern from `ServiceCard.tsx` and `InternalLinks.tsx`.
- Remove card backgrounds; use spacing and typography to differentiate items.

---

### 18. Utility components (no redesign scope)

- `FadeIn.tsx` — fine as-is.
- `ScrollProgress.tsx` — fine, but verify gold-bright color matches token.
- `ChatWidget.tsx` — already updated this session (defer until scroll only).
- `StickyContactBar.tsx` — legacy; can be deleted once `CTASection` is fully rolled out.
- `PhoneClickTracker.tsx` — no UI.
- `OptimizedBackground.tsx`, `OptimizedImage.tsx`, `ArticleImage.tsx` — image plumbing.
- `mdx-components.tsx` — handled inside `ArticleLayout.tsx` redesign.
- shadcn primitives (`accordion`, `badge`, `button`, `card`, `tabs`) — keep as primitives; their consumers carry the style.

---

## Implementation order for the next session

```
Session N+1:
  1. Hero.tsx → migrate to <HomeHero/LocationHero/ServiceHero/ServiceLocationHero>
     - Convert homepage first, smoke-test PSI mobile
     - Convert all city pages, smoke-test
     - Convert all service pages, smoke-test
     - Convert all service+city pages, smoke-test

Session N+2:
  2. ContactForm.tsx — kill the wall of beige
  3. CTASection.tsx — single CTA + dark surface

Session N+3:
  4. StatTile audit + replacement (claims-allowlist first)
  5. TrustBadgeRow → text-only strip
  6. ReviewsSection → single-review editorial layout

Session N+4:
  7. ArticleLayout.tsx (with the new ServiceHero adapter for article heros)

Session N+5+:
  8–18. The remaining medium and low priority components.
```

**Verification gate for each component:** Playwright-screenshot before and
after at 1440 + 390 desktop + mobile, plus mobile PSI run after every Tier 1
component (Hero, ContactForm, CTASection) since these touch most pages.

**Out of scope for the redesign:** Don't refactor data flow or props
contracts in this pass. Visual changes only. Behavior preserved.
