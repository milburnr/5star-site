# Phase 4: Homepage Overhaul - Research

**Researched:** 2026-02-20
**Domain:** Homepage content rewrite (single-file React/Next.js page edit, no library changes)
**Confidence:** HIGH

## Summary

This phase is a **content-only edit** of a single file: `app/page.tsx` (967 lines). No new dependencies, no CSS changes, no layout changes. The file contains the entire homepage: metadata, hero section, trust signals, definition blocks, services grid, why-choose-us, project gallery, statistics, materials, process timeline, service areas, FAQs, CTA, and two JSON-LD schema blocks.

The core transformation is repositioning from "West Texas hail damage commercial roofer" to "Amarillo residential roofing expert who also serves West Texas." This requires surgical text edits across ~12 sections, plus adding one new "Also Serving" section and explicit hub links. The hard constraint is **no visual design changes** -- CSS, layout, animations, class names, and component structure must remain identical.

**Primary recommendation:** Edit `app/page.tsx` in a series of targeted text replacements organized by requirement (HOME-01 through HOME-05, CONT-01). Verify with build + grep checks. No new files or dependencies needed.

## Standard Stack

### Core

This phase requires no new libraries. All work is in-place editing of existing React JSX.

| Library | Version | Purpose | Already Installed |
|---------|---------|---------|-------------------|
| Next.js | 15 | App Router, Metadata API | Yes |
| React | 18+ | JSX rendering | Yes |
| Framer Motion | latest | FadeIn animations (preserve, don't modify) | Yes |

### Supporting

No additional libraries needed.

### Alternatives Considered

None. This is a content edit, not an architecture change.

## Architecture Patterns

### Single-File Edit Pattern

The homepage is a single `app/page.tsx` file with:
- Lines 1-32: Metadata export (title, description, OG, Twitter, canonical)
- Lines 34-63: Hero section (H1, subtitle, paragraph, CTAs)
- Lines 66-103: Trust signals (4 stat cards)
- Lines 106-141: Definition blocks (4 cards explaining hail damage terms)
- Lines 144-231: Services grid (6 service cards)
- Lines 233-286: Why Choose Us (6 feature items)
- Lines 288-358: Project gallery (4 project cards with images)
- Lines 360-398: Hail statistics (3 stat cards + did-you-know)
- Lines 401-473: Roofing materials (4 material cards)
- Lines 476-544: 6-step process timeline
- Lines 547-588: Service areas (3 column grid: Panhandle, West Texas, Surrounding)
- Lines 590-691: FAQ section (10 accordion items)
- Lines 693-708: Final CTA section
- Lines 711-964: Two JSON-LD schema blocks (RoofingContractor + FAQPage)

### Edit Strategy: Requirement-by-Requirement

Each requirement maps to specific line ranges:

| Requirement | What Changes | Lines Affected | Complexity |
|-------------|-------------|----------------|------------|
| HOME-01 | H1 text rewrite | 44-46 | Simple string replacement |
| HOME-02 | Remove "Amarillo - Midland - Odessa" subtitle | 47-49 | Replace with Amarillo/Canyon/Panhandle text |
| HOME-03 | Add "Also Serving" section | New section ~after line 588 (before FAQ) | New JSX block, ~30 lines |
| HOME-04 | Add /services/ and /amarillo-texas-roofing/ links | Multiple locations (hero CTA area, services grid intro, or new nav block) | Add links in existing sections |
| HOME-05 | First paragraph explicitly names Amarillo | 50-52 | Rewrite hidden paragraph text |
| CONT-01 | Residential-first positioning throughout | All text sections | Many small text edits |

### Entity Name Fix

**Critical finding:** The JSON-LD schema on line 718 uses `"name": "5 Star Commercial Roofing"` which violates entity guidelines. Per `.planning/brand/entity-guidelines.md`, the canonical name is `"5 Star Roofing"` (not "5 Star Commercial Roofing" which is legal name only).

Similarly, many `alt` attributes on images use "5 Star Commercial Roofing" -- these should become "5 Star Roofing" per entity guidelines.

The `lib/constants.ts` line 2 also has `name: "5 Star Commercial Roofing"` -- but changing constants.ts is potentially a broader change affecting other pages. The planner should decide whether to fix it in constants.ts (affecting all pages) or just fix the homepage hardcoded schema.

### Meta Description Update

**Current (line 14):** `"West Texas's trusted hail damage roofing specialists. Serving Amarillo, Midland, Odessa & Panhandle. Free inspections + insurance claims. Call (806) 622-6041"`

This needs rewriting for Amarillo-first, residential-first positioning. The OG and Twitter descriptions (lines 18, 27) also need updating to match.

### Anti-Patterns to Avoid

- **Changing CSS classes or layout structure:** The hard constraint says "no visual design changes (CSS, layout, animations frozen)." This means no adding/removing/changing Tailwind classes, no restructuring grid layouts, no modifying animation components.
- **Removing Midland/Odessa entirely:** These cities should still appear on the homepage, just below the fold in an "Also Serving" section. They currently appear above the fold in the hero, in the definition blocks, in statistics, in project gallery, and in the service areas section.
- **Breaking the service areas grid:** The existing 3-column service areas section (lines 547-588) already groups cities by region. This section is below the fold and can remain, but the "Also Serving" section adds a more prominent link block specifically for secondary market city hubs.
- **Generic replacement text:** Per content-voice.md, avoid "quality service, affordable prices" and similar empty claims. All new text should be specific and localized.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| "Also Serving" section | Custom component | Plain JSX matching existing section patterns | No new components needed; match existing `<FadeIn><section>` pattern |
| Hub page links | New nav component | Inline `<a>` tags in existing sections | Matches how all other internal links work on this page |
| Schema update | New schema generator | Edit inline JSON.stringify object | Schema is hardcoded in this page, not using lib/schema-templates.ts |

## Common Pitfalls

### Pitfall 1: Accidental CSS/Layout Changes
**What goes wrong:** While editing text, accidentally changing Tailwind classes, removing wrapper divs, or altering grid structure.
**Why it happens:** Large JSX blocks with interleaved content and styling.
**How to avoid:** Only modify text content between HTML tags and string values in attributes. Never touch `className`, structural JSX elements, or component props.
**Warning signs:** Any diff line starting with `className`, any removed/added `<div>`, any changed grid-cols value.

### Pitfall 2: Inconsistent Entity Name
**What goes wrong:** Some places say "5 Star Roofing", others say "5 Star Commercial Roofing."
**Why it happens:** The page has the old name hardcoded in schema and alt tags.
**How to avoid:** After edits, grep for "5 Star Commercial Roofing" in page.tsx and replace with "5 Star Roofing" (except in legal/schema @id contexts if needed).
**Warning signs:** `grep "5 Star Commercial" app/page.tsx` returns results.

### Pitfall 3: Breaking JSON-LD Schema
**What goes wrong:** Invalid JSON in the schema blocks after editing.
**Why it happens:** The schema is embedded as a JSON.stringify argument with nested objects.
**How to avoid:** Be careful with quotes and commas. After editing, verify the page builds without errors.
**Warning signs:** Build failure, JSON.parse errors in browser console.

### Pitfall 4: Removing Midland/Odessa Instead of Demoting
**What goes wrong:** Midland and Odessa disappear from the homepage entirely.
**Why it happens:** Overzealous "remove multi-city" interpretation.
**How to avoid:** Midland/Odessa should move below the fold, not be deleted. The project gallery (Midland wind damage, Odessa replacement, Midland TPO) should remain. The new "Also Serving" section should link to their city hub pages.
**Warning signs:** Zero mentions of Midland or Odessa on the page.

### Pitfall 5: Orphaned "West Texas" References
**What goes wrong:** After rewriting hero/intro, deeper sections still say "Serving all of West Texas" as primary framing.
**Why it happens:** The page has 30+ "West Texas" references spread across all sections.
**How to avoid:** Audit every "West Texas" occurrence. Keep it where it describes the region factually (weather, hail belt). Remove it as primary identity framing. Replace with "Amarillo" or "Texas Panhandle" where appropriate.
**Warning signs:** Section headings that still lead with "West Texas" as if it's the primary market.

## Code Examples

### HOME-01: H1 Rewrite

Current (line 44-46):
```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6 text-white leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.9)'}}>
  West Texas Hail Damage <span className="text-brand-gold-light block sm:inline">Roofing Experts</span>
</h1>
```

Target pattern (only change text, keep all classes/styles):
```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6 text-white leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.9)'}}>
  Amarillo Roofing &amp; Hail Damage <span className="text-brand-gold-light block sm:inline">Repair Experts</span>
</h1>
```

Note: Exact H1 wording is planner's discretion, but it MUST contain "Amarillo" and MUST NOT contain "West Texas."

### HOME-02: Subtitle Rewrite

Current (line 47-49):
```tsx
<p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 font-semibold md:font-bold text-brand-gold-light" style={{textShadow: '0 2px 6px rgba(0,0,0,0.8)'}}>
  Amarillo • Midland • Odessa
</p>
```

Target: Replace "Amarillo - Midland - Odessa" with Amarillo/Canyon/Panhandle focus. Keep the `<p>` tag and all its attributes identical.

### HOME-03: "Also Serving" Section Pattern

Based on the existing pattern from `app/amarillo-texas-roofing/page.tsx` (line 534-537):
```tsx
<FadeIn>
  <section className="section pb-16">
    <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
      Also Serving Nearby Cities
    </h2>
    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
      <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland</a>
      <span className="text-gray-300">|</span>
      <a href="/odessa-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Odessa</a>
      <span className="text-gray-300">|</span>
      <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Lubbock</a>
    </div>
  </section>
</FadeIn>
```

This reuses existing CSS classes already used elsewhere on the site. No new styles needed.

### HOME-04: Hub Page Links

Add explicit links to `/services/` and `/amarillo-texas-roofing/` in appropriate sections. Natural placement options:
1. In the hero paragraph (line 50-52) -- add inline links
2. In the services grid section heading area
3. In the "Why Choose Us" section

### Schema Entity Name Fix

Current (line 718):
```json
"name": "5 Star Commercial Roofing",
```

Target:
```json
"name": "5 Star Roofing",
```

## Inventory of Changes Needed

### Above the Fold (Hero Section, lines 34-63)

| Item | Current | Required Change | Requirement |
|------|---------|----------------|-------------|
| H1 (line 44-46) | "West Texas Hail Damage Roofing Experts" | Rewrite with "Amarillo" — no "West Texas" | HOME-01 |
| Subtitle (line 47-49) | "Amarillo - Midland - Odessa" | Replace with Amarillo/Canyon/Panhandle focus | HOME-02 |
| Paragraph (line 50-52) | "Free inspections... 10+ years protecting West Texas homes" | Mention Amarillo explicitly, residential-first | HOME-05, CONT-01 |

### Metadata (lines 12-32)

| Item | Current | Required Change | Requirement |
|------|---------|----------------|-------------|
| Title (line 13) | "Amarillo Residential Roofing & Hail Repair \| 5 Star Roofing" | Already correct from Phase 3 | N/A |
| Description (line 14) | "West Texas's trusted hail damage roofing specialists..." | Rewrite Amarillo-first, residential-first | CONT-01 |
| OG description (line 18) | "West Texas's trusted roofing contractor..." | Match new description | CONT-01 |
| Twitter description (line 27) | "West Texas roofing specialists..." | Match new description | CONT-01 |

### Below the Fold Sections

| Section | Lines | Changes Needed | Requirement |
|---------|-------|---------------|-------------|
| Definition blocks | 106-141 | H2: "Understanding Hail Damage Roofing in West Texas" -> Amarillo-focused | CONT-01 |
| Services grid | 144-231 | Add links to /services/ hub | HOME-04 |
| Why Choose Us | 233-286 | Already says "Why Amarillo Chooses..." -- good. Fix "Serving Amarillo, Midland, Odessa" text | CONT-01 |
| Project gallery | 288-358 | Intro text mentions "Amarillo, Midland, and Odessa" -- keep Midland/Odessa projects but reframe | CONT-01 |
| Hail statistics | 360-398 | H2 says "West Texas" -- acceptable here (factual weather region) | No change needed |
| Materials | 401-473 | H2 says "Premium Roofing Materials for West Texas" -- could become "for Amarillo" | CONT-01 |
| Process | 476-544 | Neutral, no city names -- no change needed | N/A |
| Service areas | 547-588 | H2: "Serving All of West Texas" -> reframe. Keep city listings. | CONT-01 |
| **New: Also Serving** | Insert before FAQ | New section linking Midland, Odessa, Lubbock city hubs | HOME-03 |
| FAQ | 590-691 | H2 mentions "West Texas Homeowners" -- could add "Amarillo &" prefix | CONT-01 |
| CTA | 693-708 | Neutral -- no change needed | N/A |
| Schema | 711-964 | Fix entity name "5 Star Commercial Roofing" -> "5 Star Roofing" | Entity guidelines |

### Alt Text Updates

Multiple images have `alt` text containing "5 Star Commercial Roofing" -- all should become "5 Star Roofing" per entity guidelines.

### Total Estimated Edit Count

- ~5 structural text rewrites (H1, subtitle, hero paragraph, meta descriptions)
- ~8 section heading/intro text tweaks (replace "West Texas" primary framing)
- ~1 new JSX block (Also Serving section, ~20-30 lines)
- ~2 link additions (to /services/ and /amarillo-texas-roofing/)
- ~12 alt text fixes (entity name)
- ~1 schema name fix

**Total: ~30 discrete edits in a single file.**

## Verification Strategy

### Build Check
```bash
cd sites/5-star-roofing && npm run build
```
Must succeed with 0 errors. Homepage must be in `out/index.html`.

### Entity Name Consistency
```bash
grep -c "5 Star Commercial Roofing" app/page.tsx  # Target: 0
grep -c "5 Star Roofing" app/page.tsx              # Target: > 0
```

### Amarillo-First H1
```bash
grep -A2 '<h1' app/page.tsx | grep -i 'amarillo'   # Must match
grep -A2 '<h1' app/page.tsx | grep -i 'west texas'  # Must NOT match
```

### No Midland/Odessa Above the Fold
Verify lines 34-103 (hero + trust signals) do NOT contain "Midland" or "Odessa."

### Also Serving Section Exists
```bash
grep -c "Also Serving" app/page.tsx  # Target: >= 1
```

### Hub Links Present
```bash
grep '/services/' app/page.tsx | grep -v 'submenu'           # Must find homepage links
grep '/amarillo-texas-roofing/' app/page.tsx                   # Must find homepage links
```

### PageSpeed
Run Lighthouse on built output. Target: 95+ performance score. Since no CSS/layout changes are being made, this should not regress.

## Open Questions

1. **Exact H1 wording:** The requirement says "Amarillo-first headline" but doesn't specify exact text. The planner needs to write specific H1 copy that:
   - Contains "Amarillo" explicitly
   - Does NOT contain "West Texas"
   - Maintains residential-first positioning
   - Fits the existing `<span>` structure (part of text is gold-highlighted)
   - Suggestion: "Amarillo Roofing & Hail Damage Repair Experts" or "Amarillo's Trusted Residential Roofing Experts"

2. **constants.ts entity name:** `lib/constants.ts` line 2 has `name: "5 Star Commercial Roofing"`. Fixing this affects all pages that reference `BUSINESS_INFO.name`. This may be better handled in a separate phase or as an explicit sub-task. The homepage schema is hardcoded and can be fixed independently.

3. **How aggressively to demote "West Texas":** Some "West Texas" references are factual (weather region, hail belt statistics). These can stay. The question is whether section headings like "Premium Roofing Materials for West Texas" should become "for Amarillo Homes" or "for the Texas Panhandle." Recommendation: Use "Amarillo" or "Texas Panhandle" for section headings; keep "West Texas" only in factual/statistical contexts.

4. **Scope of meta description rewrite:** Phase 3 set the title but the description still says "West Texas's trusted hail damage roofing specialists." Should this phase rewrite it, or was that intentionally left? The Phase 3 verification report does not mention the description being Amarillo-first. Recommendation: Rewrite description as part of CONT-01.

## Sources

### Primary (HIGH confidence)
- `app/page.tsx` -- direct file read, 967 lines, complete homepage source
- `.planning/brand/entity-guidelines.md` -- entity name rules, positioning
- `.planning/brand/content-voice.md` -- tone, anti-patterns, CTA standards
- `lib/constants.ts` -- business info, service areas, nav items
- `app/globals.css` -- hero-home CSS class definition (background image)
- `.planning/phases/03-meta-titles/03-VERIFICATION.md` -- Phase 3 completion status

### Secondary (MEDIUM confidence)
- `app/amarillo-texas-roofing/page.tsx` -- "Also Serving" pattern reference (verified exists)
- City hub pages exist: `/midland-tx-roofing/`, `/odessa-tx-roofing/`, `/lubbock-tx-roofing/` (verified via grep)
- `/services/` hub page exists (verified via glob)

## Metadata

**Confidence breakdown:**
- Architecture: HIGH -- single file edit, no dependencies, no new libraries
- Edit inventory: HIGH -- every line range verified by direct file read
- Pitfalls: HIGH -- based on actual content analysis, not hypothetical
- Verification: HIGH -- all checks are grep/build commands, easily automated

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable -- no external dependencies to change)
