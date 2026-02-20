# Design Quality Standards for 5 Star Roofing SEO Project

## Context

This document adapts professional frontend design principles to the SEO overhaul of 5starroofingpros.com. While the visual design is frozen (no CSS/layout changes), these principles ensure **content quality, consistency, and verification standards** across all phases.

## Core Principles

### 1. Component Standardization (Anti-Generic Content)

Just as generic AI designs use default Tailwind colors, generic SEO content uses templated patterns. Avoid:

**Generic SEO Patterns to Avoid:**
- ❌ "We are the leading roofing company..." (everyone says this)
- ❌ "Quality service, affordable prices" (empty claims)
- ❌ Same FAQ questions on every page (copy-paste laziness)
- ❌ Meta descriptions that start with "Looking for..."
- ❌ Generic "Call us today!" CTAs without local context

**Instead:**
- ✅ City-specific FAQs ("How long does hail damage roof repair take in Amarillo's climate?")
- ✅ Outcome-focused meta descriptions ("Get your Amarillo roof inspected within 24 hours after hail storms")
- ✅ Localized CTAs ("Amarillo homeowners: Free roof inspection after every storm")
- ✅ Answer-first H2 structure (H2s framed as actual homeowner questions)

### 2. Brand Consistency System

**Entity Guidelines (like brand assets folder):**
- Business Name: "5 Star Roofing" (never "5 FIVE Star", "Five Star", "5-Star")
- Voice: Professional, local expert, storm-response focused
- NAP: Single source of truth in `constants.ts`
- Copyright: 2026 (update annually)

**Enforcement:**
- Every phase plan must include entity consistency verification
- Schema validation checks business name matches everywhere
- No phase ships with entity name variants

### 3. Screenshot/Verification Loop (Adapted for SEO)

**Pre-Deploy Verification Checklist** (equivalent to screenshot comparison):

Before marking any phase complete:

1. **Build Verification:**
   ```bash
   npm run build
   # Must complete with zero errors
   # out/ directory must contain all 268+ pages
   ```

2. **Schema Validation:**
   ```bash
   # Check schema renders in static HTML (not just React)
   grep -r "LocalBusiness" out/ | wc -l  # Should match page count
   grep -r '"5 Star Roofing"' out/ | wc -l  # Should be high
   grep -r "5 FIVE Star" out/ | wc -l  # Should be ZERO
   ```

3. **Meta Quality Spot Check:**
   - Sample 10 random pages from `out/`
   - Verify meta descriptions are under 160 chars
   - Verify meta titles contain "5 Star Roofing"
   - Verify no double commas, truncation, or duplicates

4. **Image URL Audit:**
   ```bash
   # No GitHub-hosted images
   grep -r "public/images" out/ | wc -l  # Should be ZERO
   grep -r "r2.dev" out/ | wc -l  # Should be >0
   ```

5. **Internal Link Check:**
   ```bash
   # No broken internal links
   # Check that all href="/..." resolve to real pages in out/
   ```

6. **PageSpeed Regression:**
   ```bash
   npm run lighthouse  # Score must stay 95+ desktop
   ```

**Rule:** No phase is "complete" until all 6 checks pass.

### 4. Session Rules (CLAUDE.md for GSD)

**Always do FIRST (every GSD session):**
1. Read `.planning/PROJECT.md` - know what this project is
2. Read `.planning/STATE.md` - know where we are
3. Read `.planning/ROADMAP.md` - know the phase structure
4. Read this file (`.planning/DESIGN-QUALITY-STANDARDS.md`) - know the quality bar

**Before proposing ANY plan:**
1. Confirm it aligns with current phase requirements in ROADMAP.md
2. Confirm it doesn't violate "Out of Scope" constraints in PROJECT.md
3. Confirm verification steps are included in the plan

**After completing ANY plan:**
1. Run all 6 verification checks above
2. Update STATE.md with results
3. Mark phase complete ONLY if all checks pass

### 5. Component Library Pattern (for SEO)

Just as 21st.dev provides reusable UI components, we need **reusable content components**:

**Standard FAQ Component (6-7 questions per page type):**

Service pages get:
- How much does [service] cost in [city]?
- How long does [service] take?
- Does insurance cover [service]?
- What are signs I need [service]?
- Can I do [service] myself or hire a professional?
- How do I choose a [service] contractor in [city]?
- What materials do you use for [service]?

City pages get:
- Do you serve [city] and surrounding areas?
- What roofing services do you offer in [city]?
- How quickly can you respond to storm damage in [city]?
- Are you licensed and insured in [city]?
- What makes [city] roofing different? (climate, weather, building codes)
- Do you work with insurance adjusters in [city]?

**Standard Schema Component Template:**
- LocalBusiness + RoofingContractor on every page
- FAQ schema wherever FAQ content exists
- Breadcrumb schema matching actual nav hierarchy
- Service schema on service pages

**Standard Internal Linking Component:**
- Hub uplinks (every spoke links to service hub + city hub)
- Cross-city links (same service, different cities)
- Cross-service links (same city, different services)

### 6. Brand Assets Folder (Adapted)

Create `.planning/brand/`:
- `entity-guidelines.md` - Canonical name, NAP, voice, positioning
- `keyword-map.md` - Primary keyword for every page (prevent cannibalization)
- `content-voice.md` - Tone, style, examples of good vs. bad phrasing

Reference these in every content phase plan.

## Phase Integration Requirements

Every phase in ROADMAP.md must include:

### Planning Stage
- [ ] Verification steps defined upfront
- [ ] Success criteria measurable (not subjective)
- [ ] Component reuse identified (don't reinvent FAQs)

### Execution Stage
- [ ] Entity consistency maintained
- [ ] Schema validation passing
- [ ] No regression in build/performance

### Completion Stage
- [ ] All 6 verification checks passing
- [ ] Results documented in STATE.md
- [ ] Next phase dependencies confirmed ready

## Hard Rules (Never Violate)

1. **No visual design changes** - CSS, layout, animations stay frozen
2. **No URL structure changes** - Preserve existing Google index
3. **Build must succeed** - All 268+ pages must export successfully
4. **PageSpeed 95+ desktop** - No performance regressions
5. **Entity name: "5 Star Roofing"** - No variations, ever
6. **Images from R2 only** - Never commit images to GitHub
7. **Verification before completion** - All 6 checks pass or phase is incomplete

## Quality Bar

**Acceptable:**
- ✅ Generic content replaced with city-specific depth
- ✅ Every page has unique, optimized metadata
- ✅ Schema renders correctly in static HTML
- ✅ Internal linking follows hub-and-spoke topology
- ✅ FAQs are relevant and answer real homeowner questions

**Not Acceptable:**
- ❌ "Good enough" - if it's not great, fix it
- ❌ Skipping verification steps to move faster
- ❌ Entity name inconsistencies ("we'll fix it later")
- ❌ Broken builds ("I'll debug it next phase")
- ❌ Placeholder content ("Rich can fill this in")

---

**Adoption Note:** Review ROADMAP.md and all existing phase plans. Update them to incorporate these standards. Add verification steps, component templates, and quality checks to every phase.
