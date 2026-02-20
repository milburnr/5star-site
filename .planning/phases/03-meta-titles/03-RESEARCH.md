# Phase 3: Meta & Titles - Research

**Researched:** 2026-02-20
**Domain:** Next.js 15 metadata API, SEO meta tag optimization, local service site patterns
**Confidence:** HIGH

## Summary

Phase 3 requires standardizing meta titles and descriptions across 202 page.tsx files in a Next.js 15 App Router static export site. The current state shows significant inconsistency: 52 pages lack the "5 Star" brand name entirely, 35 use "5 Star Commercial Roofing" instead of the canonical "5 Star Roofing", 23 use a truncated "5 Star" without "Roofing", and only 92 use the correct "5 Star Roofing". Additionally, 11 titles contain "TXService" typos (missing space), 18 have missing spaces before pipe separators, and 1 title exceeds 60 characters. On the description side, 19 descriptions exceed 160 characters, 34 start lowercase, 17 lack any CTA, and 1 starts with "Looking for..." (anti-pattern per content-voice.md).

The double-comma issue (META-05) referenced in the requirements as affecting 113 pages appears to have already been resolved -- zero instances found in current source. The prior audit was likely conducted against an earlier version of the codebase. This should be verified during execution but does not require a dedicated fix plan.

**Primary recommendation:** Use bulk Node.js scripts (following the established `scripts/standardize-nap.js` pattern) with `--dry-run` support to batch-fix titles and descriptions. Do NOT use Next.js title.template -- it would require restructuring all 202 metadata exports and complicates per-page title control.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15 | Metadata API (`export const metadata: Metadata`) | Already in use; `Metadata` type from `next` provides title, description, openGraph, alternates |
| Node.js fs | built-in | Bulk file reading/writing for batch scripts | Established pattern from Phase 1 (`standardize-nap.js`) |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| TypeScript `Metadata` type | Next.js 15 | Type-safe metadata declarations | Every page.tsx file already imports this |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Per-page `export const metadata` | Next.js `title.template` in layout.tsx | Template would enforce brand suffix automatically, BUT requires restructuring all 202 pages to use just the page-specific part, and we lose control of per-page brand formatting. Not worth the churn for a one-time fix. |
| Bulk regex scripts | Manual editing | 202 pages makes manual editing impractical and error-prone |
| AST-based transforms (ts-morph, jscodeshift) | Regex replacement | Regex is sufficient for metadata string values; AST transforms are overengineered for string-in-string replacement |

**Installation:**
```bash
# No new dependencies needed - uses Node.js built-ins only
```

## Architecture Patterns

### Recommended Project Structure
```
scripts/
├── standardize-nap.js          # (existing) Phase 1 NAP script
├── fix-meta-titles.js           # (new) Phase 3 title standardization
├── fix-meta-descriptions.js     # (new) Phase 3 description fixes
└── audit-meta.js                # (new) Phase 3 verification audit
```

### Pattern 1: Bulk Metadata Fix Script
**What:** Node.js script that reads all `app/**/page.tsx` files, applies regex-based transformations to metadata blocks, writes back, and reports counts.
**When to use:** Fixing consistent patterns across many files (brand name, formatting, length).
**Example:**
```javascript
// Source: Established pattern from scripts/standardize-nap.js
const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const APP_DIR = path.join(__dirname, '..', 'app');

function findPageFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findPageFiles(fullPath));
    else if (entry.name === 'page.tsx') results.push(fullPath);
  }
  return results;
}

// Target only the metadata block, not page content
function fixTitle(content) {
  // Match the title field within export const metadata
  return content.replace(
    /(export const metadata:\s*Metadata\s*=\s*\{[^}]*?title:\s*["'])([^"']+)(["'])/,
    (match, prefix, title, suffix) => {
      const fixed = applyTitleRules(title);
      return `${prefix}${fixed}${suffix}`;
    }
  );
}
```

### Pattern 2: Metadata Extraction for Audit
**What:** Extract title and description from every page.tsx into a structured report for verification.
**When to use:** Pre-fix audit (understand scope), post-fix verification (confirm all issues resolved).
**Example:**
```javascript
// Extract metadata from file content
function extractMeta(content) {
  const metaBlock = content.match(/export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?\n\};/);
  if (!metaBlock) return null;
  const titleMatch = metaBlock[0].match(/title:\s*["']([^"']+)["']/);
  const descMatch = metaBlock[0].match(/description:\s*"([^"]+)"/);
  // Handle single-quoted descriptions with apostrophes
  if (!descMatch) {
    descMatch = metaBlock[0].match(/description:\s*'([^']+)'/);
  }
  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null,
  };
}
```

### Pattern 3: Next.js 15 Metadata Declaration
**What:** The standard metadata export pattern already used across all 202 pages.
**When to use:** Every page file.
**Example:**
```typescript
// Source: Next.js 15 App Router docs - static metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-repair-amarillo/' },
  title: 'Roof Repair Amarillo TX | 5 Star Roofing',
  description: 'Same-day roof repair for Amarillo homeowners. Insurance assistance, hail damage experts. Free inspection — call (806) 622-6041',
};
```

### Anti-Patterns to Avoid
- **Using title.template in layout.tsx:** Would require restructuring all page metadata to omit the brand suffix, and loses per-page control. Bad ROI for a one-time fix.
- **Modifying page content outside metadata block:** Scripts must target ONLY the `export const metadata` block to avoid corrupting page JSX, schema JSON-LD, or visible text.
- **Regex that spans across metadata block boundary:** The metadata object can be multi-line. Use a regex that first isolates the metadata block, then operates within it.
- **Hardcoding new titles in the script:** Use rules/patterns that derive the correct title from the existing content (e.g., extract service+city, apply template). Only override completely broken pages manually.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Title length checking | Custom char counter | `String.length` is sufficient | Meta titles are ASCII/Latin-1; no surrogate pairs to worry about |
| Bulk file modification | Per-file manual edits | Node.js script with `fs.readFileSync`/`writeFileSync` | 202 files, established pattern from Phase 1 |
| Duplicate detection | Manual comparison | Script with `Map<title, route[]>` | Automatic detection of collisions |
| Metadata extraction | Ad-hoc grep | Dedicated extraction function | Need to handle both quote types, multiline descriptions |

**Key insight:** The NAP standardization script from Phase 1 is the proven pattern. Copy its structure (dry-run support, file discovery, counters, targeted regex) for Phase 3 scripts.

## Common Pitfalls

### Pitfall 1: Regex Corrupts Non-Metadata Content
**What goes wrong:** A title-matching regex catches title text inside schema JSON-LD blocks, H1 headings, or OG tags, corrupting page content.
**Why it happens:** `title:` appears in multiple contexts in page.tsx files (metadata, openGraph, twitter, schema `"name":` fields).
**How to avoid:** First isolate the `export const metadata` block (from `export const metadata` to its closing `};`), then apply transformations only within that block. For openGraph.title and twitter.title, handle them as separate fields if they need updating.
**Warning signs:** Build failures, visual regressions, schema validation errors after running script.

### Pitfall 2: Single-Quote Descriptions with Apostrophes
**What goes wrong:** Regex `'([^']+)'` fails on descriptions containing apostrophes like `"West Texas's"`, capturing only up to the apostrophe.
**Why it happens:** Some descriptions use double quotes (allowing apostrophes), others use single quotes (breaking on apostrophes).
**How to avoid:** Match double-quoted descriptions first (`"([^"]+)"`), fall back to single-quoted only if no double-quote match. During fixing, always output double-quoted descriptions.
**Warning signs:** Truncated descriptions in audit output, descriptions that appear too short.

### Pitfall 3: Title Under 60 Chars But Loses Brand Name
**What goes wrong:** To fit under 60 characters, brand name gets truncated to "5 Star" (23 pages already have this).
**Why it happens:** Long service names + city name + brand name exceed 60 characters.
**How to avoid:** Title template: `{Service} {City} TX | 5 Star Roofing` (aim for this). If over 60, abbreviate the service name or use a shorter city reference, not the brand name. Example: "Asphalt Shingles Pampa TX | 5 Star Roofing" (43 chars) instead of "Asphalt Shingle Roofing Pampa TX | Class 4 | Free Inspection" (60 chars).
**Warning signs:** Titles ending with just "| 5 Star" or missing brand entirely.

### Pitfall 4: Blog/Article Pages and Brand Name Requirement
**What goes wrong:** Enforcing "5 Star Roofing" in blog article titles makes them look spammy in search results.
**Why it happens:** Blog content articles ("How to File a Hail Damage Insurance Claim") target informational queries where brand name adds no value.
**How to avoid:** Decide whether blog posts require brand name. The success criteria says "every page" but content-voice.md focuses on service pages. Recommendation: blog posts use `{Article Title} | 5 Star Roofing` but keep the article title as the dominant element. This is a point requiring a decision during planning.
**Warning signs:** Blog titles that prioritize brand over article topic.

### Pitfall 5: OpenGraph Title Desync
**What goes wrong:** Only 7 pages have openGraph metadata. After fixing meta titles, OG titles on those 7 pages may not match.
**Why it happens:** OG title is a separate field that needs separate updating. Pages without explicit OG tags inherit from the page title (Next.js default behavior).
**How to avoid:** When fixing titles, also update openGraph.title on pages that have it. For pages without OG tags, no action needed (they inherit the fixed title automatically).
**Warning signs:** Social media previews showing old/wrong titles.

### Pitfall 6: Description Descriptions Starting Lowercase
**What goes wrong:** 34 descriptions begin with lowercase letters, appearing unprofessional in search results and signaling careless content.
**Why it happens:** Likely generated by a script that omitted "Expert" or "Professional" prefix.
**How to avoid:** Script should capitalize the first character of every description. Better: rewrite to start with a strong action-oriented word per content-voice.md.
**Warning signs:** Descriptions starting with "roofing", "commercial", "storm damage" etc.

## Code Examples

Verified patterns from the existing codebase:

### Current Metadata Pattern (Spoke Page)
```typescript
// Source: app/tpo-roofing-canyon/page.tsx
export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/tpo-roofing-canyon/' },
  title: 'TPO Roofing Canyon TX | 5 Star Roofing',
  description: "Expert tpo roofing in Canyon TX. Texas Panhandle experiences 8-10 hailstorms annually. Palo Duro Canyon, WTAMU. Free inspections. Call (806) 622-6041",
};
```

### Current Metadata Pattern (Homepage)
```typescript
// Source: app/page.tsx
export const metadata: Metadata = {
  title: 'Amarillo Hail Damage Roof Repair | 5 Star Roofing',
  description: "West Texas's trusted hail damage roofing specialists. Serving Amarillo, Midland, Odessa & Panhandle. Free inspections + insurance claims. Call (806) 622-6041",
  // ... openGraph, twitter, alternates
};
```

### Target Title Format (Service-City Pages)
```
{Service} {City} TX | 5 Star Roofing
```
Examples:
- "Roof Repair Amarillo TX | 5 Star Roofing" (41 chars)
- "TPO Roofing Canyon TX | 5 Star Roofing" (38 chars)
- "Storm Damage Repair Borger TX | 5 Star Roofing" (46 chars)
- "Metal Roofing Big Spring TX | 5 Star Roofing" (44 chars)

### Target Title Format (City Landing Pages)
```
{City} TX Roofing | 5 Star Roofing
```
Examples:
- "Borger TX Roofing | 5 Star Roofing" (34 chars)
- "Midland TX Roofing | 5 Star Roofing" (35 chars)

### Target Description Format
```
{Outcome-focused sentence with city name}. {Supporting detail}. {CTA with phone or action}
```
Examples:
- "Same-day roof repair for Amarillo homeowners. Insurance claim experts, hail damage pros. Free inspection — call (806) 622-6041" (126 chars)
- "Hail-rated TPO roofing for Canyon TX businesses. Energy-efficient systems built for Panhandle storms. Free estimate — (806) 622-6041" (132 chars)

## Current State Audit Results

### Title Issues (202 pages total)

| Issue | Count | Examples |
|-------|-------|---------|
| Missing "5 Star" entirely | 52 | `/roof-repair-amarillo/`, `/metal-roofing-midland/`, all blog posts |
| Uses "5 Star Commercial Roofing" (wrong) | 35 | `/metal-roofing-andrews/`, `/contact/`, `/blog/` |
| Truncated to "5 Star" only | 23 | `/borger-texas-roofing/`, `/canyon-texas-roofing/`, `/commercial-roofing/` |
| Correct "5 Star Roofing" | 92 | `/tpo-roofing-canyon/`, `/hail-damage-repair-levelland/` |
| Over 60 characters | 1 | `/amarillos-best-roofer/` (66 chars) |
| Exactly 60 characters (borderline) | 13 | Various |
| "TXService" typo (missing space) | 11 | `/storm-damage-repair-borger/`, `/wind-damage-repair-dumas/` |
| Missing space before pipe ("TX\|") | 18 | `/borger-texas-roofing/`, `/commercial-roofing/` |
| Truncated ("..." or "& West") | 2 | `/blog/how-to-file...`, `/service-areas/` |

### Description Issues (202 pages total)

| Issue | Count | Examples |
|-------|-------|---------|
| Over 160 characters | 19 | `/asphalt-shingle-roofing-amarillo/` (183 chars) |
| Under 80 characters | 1 | `/reviews/` (79 chars) |
| Starts lowercase | 34 | `/service-areas/`, `/industrial-roofing/`, `/blog/` |
| No CTA (call/free/schedule) | 17 | `/gallery/`, `/articles/`, blog posts |
| Starts with "Looking for..." | 1 | `/amarillos-best-roofer/` |
| Double commas | 0 | (appears already fixed) |

### Pages by Category

| Category | Count | Notes |
|----------|-------|-------|
| Homepage | 1 | Title OK but missing "residential" focus per META-06 |
| Hub pages | 6 | `/services/`, `/commercial-roofing/`, `/residential-roofing/`, etc. |
| Service-city pages | 166 | Bulk of the site; most follow `{service}-{city}` pattern |
| City landing pages | 0 | Categorized under "other" (e.g., `/borger-texas-roofing/`) |
| Blog hub + posts | 5 | 1 hub + 4 articles |
| Utility pages | 4 | `/about/`, `/contact/`, `/gallery/`, `/reviews/` |
| Other/specialty | 20 | Weather, articles, niche pages |

### META-06 Specific (Homepage)
- **Current title:** "Amarillo Hail Damage Roof Repair | 5 Star Roofing" (49 chars)
- **Amarillo-first:** YES
- **Residential focus:** NO (says "Hail Damage Roof Repair" -- could be commercial)
- **Required change:** Rewrite to include residential focus. Example: "Amarillo Residential Roofing & Hail Repair | 5 Star Roofing" (59 chars)

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `<meta>` tags in `<head>` | Next.js Metadata API export | Next.js 13+ (2023) | Type-safe, automatic `<head>` injection |
| Keywords meta tag | Not used by Google | Deprecated ~2009 | 4 pages still have `keywords` -- harmless but unnecessary |
| Exact-match title tags | Natural language titles | Google 2021+ | Google rewrites titles 61% of the time if they look spammy |
| Title stuffing (keyword|keyword|brand) | One keyword + brand | Current best practice | `{Primary Keyword} {City} TX \| Brand` format |

**Deprecated/outdated:**
- `keywords` meta tag: Google ignores it. Present on 4 pages -- can remove but no urgency.
- Multiple pipe-separated segments in titles (e.g., "Expert Service | Free Inspection | Brand"): Google may rewrite these. Single pipe separator is ideal.

## Open Questions

1. **Blog post brand requirement**
   - What we know: Success criteria says "every page" must have "5 Star Roofing" in title. Blog posts currently lack it entirely.
   - What's unclear: Should blog posts prioritize article title or brand name? Blog titles are already at 52-60 chars.
   - Recommendation: Add "| 5 Star Roofing" suffix to blog posts. Titles like "Roof Replacement Cost Texas 2025 | 5 Star Roofing" (49 chars) fit easily. The "Step-by-Step ..." blog title (currently 60 chars) needs rewriting regardless.

2. **OpenGraph and Twitter metadata scope**
   - What we know: Only 7 pages have openGraph, only 1 has twitter metadata. Pages without them inherit from `title`/`description` in Next.js.
   - What's unclear: Should Phase 3 add OG/twitter to all 202 pages?
   - Recommendation: OUT OF SCOPE for Phase 3. Fix the 7 existing OG titles to match, but don't add OG to all pages. That's a separate task if needed.

3. **Keyword map population**
   - What we know: `.planning/brand/keyword-map.md` is a skeleton that should be populated during Phase 3.
   - What's unclear: How detailed should it be? Full 202-row table or categories?
   - Recommendation: Generate it as output of the title audit script. Each page's primary keyword is derived from its title. Output as markdown table to keyword-map.md during plan 03-03 verification.

4. **`lib/constants.ts` BUSINESS_INFO.name discrepancy**
   - What we know: `BUSINESS_INFO.name` is "5 Star Commercial Roofing" but entity-guidelines.md says canonical name is "5 Star Roofing".
   - What's unclear: Should this be updated? Phase 1 standardized schema to use the value from constants.ts.
   - Recommendation: Flag but do NOT change in Phase 3. Changing constants.ts would cascade to schema, footer, and other components. That's a Phase 1 scope concern. Meta titles are set per-page and don't reference constants.ts.

## Planning Guidance

### Plan 03-01: Title Audit & Batch Fix

**Scope:** All 202 page.tsx files -- title field in metadata export only.

**Fix rules (in priority order):**
1. Fix "TXService" typos: add space ("TX | Service" or rewrite entirely)
2. Fix missing space before pipe ("TX|" -> "TX |")
3. Fix truncated titles ("& West", "Step-by-Step ...")
4. Standardize brand suffix: replace "5 Star Commercial Roofing" -> "5 Star Roofing", expand "5 Star" -> "5 Star Roofing"
5. Add brand name to pages missing it (52 pages): append "| 5 Star Roofing"
6. Remove middle segments when brand is missing: "Expert Service | Free Inspection" -> "5 Star Roofing"
7. Ensure every title is under 60 chars after changes
8. Verify no duplicates after all changes

**Script approach:** Single `fix-meta-titles.js` with `--dry-run` and `--report` modes.

**Homepage special case (META-06):** Manually set title to include residential focus. Script should have a homepage override.

### Plan 03-02: Description Audit & Batch Fix

**Scope:** All 202 page.tsx files -- description field in metadata export only.

**Fix rules:**
1. Capitalize first letter of every description
2. Trim descriptions over 160 chars (cut last sentence, ensure still coherent)
3. Add CTA to descriptions missing one (append "Free inspection — (806) 622-6041" or similar)
4. Rewrite "Looking for..." descriptions per content-voice.md
5. Pad descriptions under 100 chars with city-specific detail + CTA
6. Ensure all descriptions use double quotes (not single quotes) for apostrophe safety
7. Update OG descriptions on the 7 pages that have them

**Script approach:** `fix-meta-descriptions.js` with `--dry-run`. Manual review for descriptions that need creative rewriting.

### Plan 03-03: Verification & Keyword Map

**Scope:** Build site, verify all success criteria, populate keyword-map.md.

**Steps:**
1. Run `npm run build` -- must succeed
2. Run audit script to verify: all titles contain "5 Star Roofing", all under 60 chars, no duplicates, all descriptions under 160 chars with CTA, no double commas, no lowercase starts
3. Spot-check 10 pages in built HTML output
4. Generate keyword-map.md from title audit data
5. Verify homepage title meets META-06 requirements

## Sources

### Primary (HIGH confidence)
- **Codebase analysis**: Direct regex extraction from 202 page.tsx files in `app/` directory
- **`.planning/brand/entity-guidelines.md`**: Canonical business name "5 Star Roofing"
- **`.planning/brand/content-voice.md`**: Meta description patterns (good vs bad)
- **`scripts/standardize-nap.js`**: Established bulk modification script pattern
- **`app/layout.tsx`**: Root layout metadata (no title.template configured)

### Secondary (MEDIUM confidence)
- **`.planning/research/FEATURES.md`**: Prior audit claiming 113 double-comma issues (now 0 found -- likely fixed between audits)
- **`.planning/REQUIREMENTS.md`**: META-01 through META-06 requirement definitions

### Tertiary (LOW confidence)
- **Google title rewriting behavior**: Based on training data knowledge that Google rewrites ~61% of title tags. Not verified against current 2026 documentation.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - No new libraries; using established codebase patterns
- Architecture: HIGH - Direct extension of Phase 1 script approach, verified against 202 page files
- Pitfalls: HIGH - All pitfalls identified from actual codebase analysis (TXService typo, apostrophe handling, metadata block isolation)
- Current state audit: HIGH - Extracted directly from source files with Python analysis

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable -- no external dependencies or moving targets)
