# Phase 1: Compliance & Entity Fixes - Research

**Researched:** 2026-02-20
**Domain:** Schema.org compliance, NAP consistency, entity standardization for local SEO
**Confidence:** HIGH

## Summary

Phase 1 targets five compliance issues that actively suppress the site's rankings: fabricated AggregateRating schema on 212+ pages, inconsistent business entity naming, conflicting email addresses (admin@ vs info@), phone/hours format inconsistencies, and a stale copyright year. These are not "nice to have" fixes -- they represent active ranking suppression signals that Google's August 2025 and December 2025 Spam Updates specifically targeted.

The core challenge is scale: 246 page files exist, nearly all with hardcoded inline JSON-LD schema rather than using the `lib/schema-templates.ts` utility (which is never imported by any page). Each page was generated independently, creating a patchwork of inconsistent data. The fix strategy must handle bulk changes across 200+ files reliably while preserving per-page unique content (FAQs, service descriptions, area-served data).

**Primary recommendation:** Write a Node.js script (similar to the existing `fix-seo-gaps.js`) that programmatically processes all page.tsx files to (1) strip AggregateRating blocks, (2) normalize entity names, (3) fix email to canonical value, (4) standardize phone/hours formats, and (5) update copyright. Verify changes by searching the built HTML output, not just the source.

## Standard Stack

### Core

No new libraries needed. This phase is pure content/schema correction across existing files.

| Tool | Purpose | Why Standard |
|------|---------|--------------|
| Node.js script | Bulk-process 246 page.tsx files | Same pattern as existing `fix-seo-gaps.js` -- proven to work on this codebase |
| `fs` (Node built-in) | Read/write page files | No dependencies needed |
| `path` (Node built-in) | Resolve file paths | No dependencies needed |
| `npm run build` | Verify changes compile and produce correct HTML | Static export to `out/` for grep-based verification |

### Supporting

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `grep -r` on `out/` | Verify built HTML contains no AggregateRating | Post-build verification step |
| Google Rich Results Test | Spot-check schema validity | Manual QA on 3-5 representative pages |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Node script for bulk edits | Manual find-and-replace per file | 246 files makes manual editing error-prone and slow |
| Regex-based replacement | AST parsing (ts-morph, jscodeshift) | AST is more robust but overkill for string-level JSON-LD changes embedded in JSX template literals; regex is sufficient for well-structured patterns |
| Fixing inline schema | Refactoring all pages to use `lib/schema-templates.ts` | Correct long-term architecture, but out of scope for Phase 1 compliance sprint -- too high risk of regressions across 246 pages |

## Architecture Patterns

### Current Schema Architecture (What Exists)

```
app/
├── roof-repair-amarillo/page.tsx     # Inline JSON-LD with hardcoded values
├── commercial-roofing-midland/page.tsx  # Different inline JSON-LD pattern
├── midland-tx-roofing/page.tsx       # Yet another pattern (@graph style)
└── ...246 total page files

lib/
├── schema-templates.ts               # EXISTS but NEVER imported by any page
├── constants.ts                      # BUSINESS_INFO (source of truth)

assets/schema/
├── brand-schema.json                 # Reference schema (also has AggregateRating!)
├── city-schema-template.json         # Template with {{CITY_NAME}} placeholders
```

### Three Distinct Schema Patterns Found

**Pattern A: Inline separate script tags** (~190 pages, from fix-seo-gaps.js generation)
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "5 Star Commercial Roofing - Amarillo Roof Repair",
  "email": "info@5starroofingpros.com",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127" },
  ...
}) }} />
```

**Pattern B: @graph array** (~15 city hub pages, manually authored)
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "RoofingContractor", "aggregateRating": {...}, ... },
    { "@type": "LocalBusiness", ... },
    { "@type": "FAQPage", ... }
  ]
}) }} />
```

**Pattern C: Variable-assigned schema** (~40 older Amarillo-specific pages)
```tsx
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": { "name": "5 Star Commercial Roofing", "email": "admin@5starroofingpros.com" },
  ...
};
```

### Recommended Fix Pattern

Process each file as a string. For each pattern:
1. **AggregateRating removal:** Regex match and remove the `"aggregateRating": { ... }` block including trailing comma
2. **Entity name:** Replace all `"name": "5 Star Commercial Roofing - ..."` with standardized form
3. **Email:** Replace all `"email": "info@5starroofingpros.com"` with `"email": "admin@5starroofingpros.com"`
4. **Phone:** Normalize all telephone formats to `"(806) 622-6041"`
5. **Hours:** Normalize `"opens": "00:00", "closes": "23:59"` to `"opens": "09:00", "closes": "17:00"`

### Anti-Patterns to Avoid

- **Refactoring schema architecture during compliance fix:** Tempting to move all pages to use `schema-templates.ts`, but this changes JSX structure of 246 files and creates massive regression risk. Do compliance fixes in-place first.
- **Partial regex that breaks JSON structure:** AggregateRating removal must handle trailing commas and the case where it is the last property before `}`.
- **Trusting source-only verification:** The build process could theoretically transform content. Always verify against built `out/` HTML.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Bulk file processing | Custom AST parser | Simple Node.js fs.readFileSync + regex replace | The existing `fix-seo-gaps.js` proves this approach works on this codebase. JSON-LD is embedded as string templates, not dynamic JS -- regex is sufficient |
| Schema validation | Custom validator | Google Rich Results Test + grep-based checks | Google's own validator is the authority on what they accept |

**Key insight:** This is a string-replacement task, not a code-transformation task. The schema is embedded as JSON strings in JSX template literals. Regex replacement is the right tool.

## Common Pitfalls

### Pitfall 1: Trailing Comma After AggregateRating Removal
**What goes wrong:** Removing `"aggregateRating": {...}` leaves a trailing comma before the next property or before `}`, creating invalid JSON that breaks the page at build time.
**Why it happens:** JSON does not allow trailing commas. When AggregateRating is the last property before `}`, the preceding comma must also be removed.
**How to avoid:** The regex must handle both cases: (a) AggregateRating followed by another property (remove aggregateRating + its trailing comma), (b) AggregateRating as last property (remove the preceding comma + aggregateRating).
**Warning signs:** Build fails with JSON.parse errors or "Unexpected token" errors.

### Pitfall 2: Entity Name Standardization Scope
**What goes wrong:** The requirement says "5 Star Roofing" but `constants.ts` says "5 Star Commercial Roofing" and the GBP listing may say something different. Standardizing to the wrong name makes things worse.
**Why it happens:** Prior decision notes say "GBP authoritative business name needs confirmation before Phase 1 entity standardization."
**How to avoid:** Check the Google Business Profile for the exact registered name. Use THAT as the canonical name. If GBP says "5 Star Commercial Roofing", use that everywhere. The requirement COMP-02 says "5 Star Roofing" but this may conflict with GBP -- GBP wins.
**Warning signs:** Entity name in schema does not match GBP name exactly.

### Pitfall 3: Email Canonical Choice
**What goes wrong:** Standardizing all emails to one address, but choosing the wrong one (the one that does not match GBP/citations).
**Why it happens:** `constants.ts` says `admin@`, but 202 pages use `info@`, and only 41 pages use `admin@`. The majority does not determine correctness -- GBP match does.
**How to avoid:** Verify which email is on the Google Business Profile. Use that one. Currently `constants.ts` has `admin@5starroofingpros.com` and the footer also displays `admin@`, so `admin@` is likely canonical. Standardize everything to `admin@`.
**Warning signs:** BrightLocal citation audit shows email mismatches.

### Pitfall 4: Hours Format Conflict (24/7 vs Business Hours)
**What goes wrong:** 132 pages claim 24/7 availability (`opens: "00:00", closes: "23:59"`), while 56 pages claim 9-5. `constants.ts` says `9:00 AM - 5:00 PM`.
**Why it happens:** The `fix-seo-gaps.js` script used 24/7 hours. Some pages were authored with business hours.
**How to avoid:** Use whatever matches reality and GBP. If GBP says 9-5, use 9-5 everywhere. If the business truly offers 24/7 emergency service, consider separate `openingHoursSpecification` entries for regular hours vs emergency hours -- but for compliance, match GBP exactly.
**Warning signs:** Google shows incorrect hours in knowledge panel because schema conflicts with GBP.

### Pitfall 5: Reviews Page AggregateRating Special Case
**What goes wrong:** Blindly removing AggregateRating from ALL pages including `/reviews/`, which actually displays 12+ customer testimonials.
**Why it happens:** The reviews page has visible review content, making AggregateRating potentially valid there.
**How to avoid:** The reviews page is the ONE page where AggregateRating might be defensible, IF the rating and count match the visible reviews. Currently it claims `reviewCount: "500"` but only shows ~12 reviews. This is still fabricated. Either (a) remove it, or (b) update it to match the actual visible count (12 reviews, average 5.0). Option (a) is safer for compliance.
**Warning signs:** Google Rich Results Test flags the reviews page for mismatched review count.

### Pitfall 6: brand-schema.json and city-schema-template.json Left Unfixed
**What goes wrong:** Fixing all page.tsx files but leaving `assets/schema/brand-schema.json` and `assets/schema/city-schema-template.json` with AggregateRating and wrong email. If anyone regenerates pages from these templates, the problems come back.
**Why it happens:** These files are reference/template files not directly rendered, so they are easy to forget.
**How to avoid:** Fix these files too. They must match the same standards as live pages.

## Code Examples

### AggregateRating Removal Regex

```javascript
// Pattern for inline JSON-LD (handles trailing comma)
// Case 1: aggregateRating followed by another property
content = content.replace(
  /"aggregateRating"\s*:\s*\{[^}]*\}\s*,\s*/g,
  ''
);

// Case 2: aggregateRating as last property (preceded by comma)
content = content.replace(
  /,\s*"aggregateRating"\s*:\s*\{[^}]*\}/g,
  ''
);
```

**Note:** These regexes assume `AggregateRating` objects do not contain nested `{}`. The current codebase confirms this -- all AggregateRating blocks are flat objects like `{ "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" }`.

### Email Standardization

```javascript
// Replace info@ with admin@ (the constants.ts canonical value)
content = content.replace(
  /"email"\s*:\s*"info@5starroofingpros\.com"/g,
  '"email": "admin@5starroofingpros.com"'
);
```

### Phone Format Standardization

```javascript
// Normalize all phone formats to (806) 622-6041
content = content.replace(/"telephone"\s*:\s*"\+18066226041"/g, '"telephone": "(806) 622-6041"');
content = content.replace(/"telephone"\s*:\s*"\+1-806-622-6041"/g, '"telephone": "(806) 622-6041"');
```

### Hours Standardization

```javascript
// Fix 24/7 hours to match constants.ts business hours
content = content.replace(/"opens"\s*:\s*"00:00"/g, '"opens": "09:00"');
content = content.replace(/"closes"\s*:\s*"23:59"/g, '"closes": "17:00"');
```

### Copyright Year (in layout.tsx)

```typescript
// In app/layout.tsx, line 173:
// Current: <p>&copy; 2026 5 Star Commercial Roofing. All rights reserved.</p>
// Already correct for 2026. Verify no other files have outdated years.
```

### Post-Build Verification

```bash
# After npm run build, verify no AggregateRating in output
grep -r "AggregateRating" out/ | wc -l
# Expected: 0

# Verify no info@ email in output
grep -r "info@5starroofingpros" out/ | wc -l
# Expected: 0

# Verify consistent phone format
grep -ro '"telephone":"[^"]*"' out/ | sort | uniq -c
# Expected: single format across all pages
```

## Current State Audit (Verified by Direct Code Inspection)

### AggregateRating Contamination

| Metric | Value |
|--------|-------|
| Total pages with AggregateRating | 212 (in app/ source files) |
| Pages with visible reviews | 1 (reviews page only, but count is fabricated) |
| reviewCount variations | "84" (151), "127" (134), "150" (3), "200" (1), "156" (1), "94" (1), "89" (1), "500" (1, reviews page) |
| ratingValue | Uniformly "5.0" except reviews page ("4.9") |
| Also in schema templates | `brand-schema.json`, `city-schema-template.json`, `lib/schema-templates.ts` |

### Entity Name Variations

| Name Pattern | Count |
|--------------|-------|
| "5 Star Commercial Roofing" (plain) | 214 |
| "5 Star Commercial Roofing - {City}" | ~25 |
| "5 Star Commercial Roofing - {City} {Service}" | ~20 |
| "5 Star Roofing" (short form) | 3 (in Service schema provider) |
| "5 Star Commercial Roofing Project Gallery" | 1 |
| In meta titles: "5 Star Roofing" | ~50+ pages |
| In OG tags: siteName "5 Star Roofing" | 1 (homepage) |
| In footer: "5 Star Commercial Roofing" | 1 (layout.tsx, renders on all pages) |
| In header alt: "5 Star Commercial Roofing" | 1 (layout.tsx logo alt) |
| In constants.ts: "5 Star Commercial Roofing" | 1 (source of truth) |

### Email Inconsistency

| Email | Where Used | Count |
|-------|-----------|-------|
| `admin@5starroofingpros.com` | constants.ts, footer (layout.tsx), brand-schema.json, ~41 pages (older Amarillo pages, city hubs) | ~41 pages |
| `info@5starroofingpros.com` | ~202 pages (generated by fix-seo-gaps.js), some schema templates | ~202 pages |

### Phone Format Variations

| Format | Count |
|--------|-------|
| `(806) 622-6041` | 320 occurrences |
| `+18066226041` | 95 occurrences |
| `+1-806-622-6041` | 5 occurrences |

### Hours Inconsistency

| Hours | Count |
|-------|-------|
| `opens: "00:00", closes: "23:59"` (24/7) | 132 occurrences |
| `opens: "09:00", closes: "17:00"` (9-5) | 56 occurrences |

### Copyright

| Current Value | Location |
|---------------|----------|
| `2026 5 Star Commercial Roofing` | `app/layout.tsx` line 173 (footer, rendered on all pages) |

Copyright is already correct at 2026. No other locations found with copyright text.

## Open Questions

1. **What is the exact GBP-registered business name?**
   - What we know: `constants.ts` says "5 Star Commercial Roofing". COMP-02 says standardize to "5 Star Roofing" (shorter).
   - What's unclear: Which name is on the Google Business Profile. GBP is authoritative for entity matching.
   - Recommendation: Check GBP before execution. If GBP says "5 Star Commercial Roofing", keep that everywhere in schema/NAP. Meta titles can use "5 Star Roofing" as a shorter brand variant since meta titles are not NAP-critical. Prior decision notes confirm this needs checking.

2. **Which email matches GBP?**
   - What we know: `constants.ts` and footer use `admin@`. 202 pages use `info@`.
   - What's unclear: Which email is registered on GBP and major citation sites.
   - Recommendation: Default to `admin@` (matches constants.ts and footer). Verify against GBP before deploying.

3. **Should the reviews page keep AggregateRating?**
   - What we know: It displays ~12 real testimonials but claims reviewCount of 500.
   - What's unclear: Whether Google considers client-curated testimonials sufficient for AggregateRating.
   - Recommendation: Remove it entirely for safety. The reviews page testimonials are curated, not from a verified review platform. Google's guidelines are strict: AggregateRating should reference reviews from a review collection mechanism. If keeping it, update to match visible count (12 reviews, 5.0 rating), but removal is the safer path.

4. **Should hours be 9-5 or 24/7?**
   - What we know: `constants.ts` says 9:00 AM - 5:00 PM. Fix-seo-gaps.js set 24/7.
   - What's unclear: What GBP shows. Whether "24/7 emergency service" is a real offering vs marketing.
   - Recommendation: Match GBP exactly. If GBP says 9-5, use 9-5. Emergency availability can be mentioned in text content, not in openingHoursSpecification schema.

## Execution Strategy

### Plan 01-01: Audit and Remove AggregateRating

1. Write Node.js script to process all 246 page.tsx files
2. Remove AggregateRating blocks (handle both trailing-comma and preceding-comma patterns)
3. Also fix `lib/schema-templates.ts`, `assets/schema/brand-schema.json`, `assets/schema/city-schema-template.json`
4. Build and verify: `grep -r "AggregateRating" out/` returns 0 results

### Plan 01-02: Standardize Entity Name, NAP, and Copyright

1. Extend or create second script to:
   - Normalize email to `admin@5starroofingpros.com` everywhere
   - Normalize phone to `(806) 622-6041` format everywhere
   - Normalize hours to `09:00`/`17:00` everywhere
   - Verify copyright year in layout.tsx (already 2026)
2. Entity name standardization depends on GBP confirmation (Open Question 1)
3. Build and verify all consistency checks pass

### Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|------------|
| Regex breaks JSON structure | HIGH | Test on 3 representative pages first; run build to catch parse errors |
| Wrong canonical email chosen | MEDIUM | Verify against GBP before deploying |
| Wrong entity name chosen | MEDIUM | Verify against GBP before deploying |
| Missing edge case in page format | LOW | Three distinct patterns identified; script handles all three |
| Build regression | LOW | Full `npm run build` verification catches any compilation errors |

## Sources

### Primary (HIGH confidence)
- Direct code inspection of `lib/constants.ts` -- verified business info values
- Direct code inspection of `lib/schema-templates.ts` -- verified AggregateRating in template
- Direct code inspection of `app/layout.tsx` -- verified footer, header, copyright
- Direct code inspection of 5+ representative page.tsx files -- verified three schema patterns
- `grep` counts across all 246 page files -- verified email, phone, hours, name statistics
- `.planning/research/PITFALLS.md` -- prior research on AggregateRating and NAP risks

### Secondary (MEDIUM confidence)
- `.planning/REQUIREMENTS.md` -- requirements COMP-01 through COMP-05
- `.planning/ROADMAP.md` -- phase ordering and success criteria
- `fix-seo-gaps.js` -- demonstrates the bulk-processing pattern already used on this codebase

### Tertiary (LOW confidence)
- Entity name "5 Star Roofing" vs "5 Star Commercial Roofing" -- needs GBP verification
- Canonical email admin@ vs info@ -- needs GBP verification
- Hours 9-5 vs 24/7 -- needs GBP verification

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- no new libraries, proven patterns from existing codebase
- Architecture: HIGH -- three schema patterns fully mapped by direct inspection
- Pitfalls: HIGH -- all pitfalls identified from actual codebase inconsistencies, not hypothetical
- Open questions: MEDIUM -- three items need GBP verification before execution

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (30 days -- codebase is stable, no external dependencies changing)
