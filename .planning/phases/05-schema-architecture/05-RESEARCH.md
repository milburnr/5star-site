# Phase 5: Schema Architecture - Research

**Researched:** 2026-02-20
**Domain:** Schema.org structured data / JSON-LD / SEO schema markup
**Confidence:** HIGH

## Summary

The 5 Star Roofing site currently has schema markup across most of its ~202 page directories, but the implementation is inconsistent and needs systematic upgrades. The primary issues are:

1. **Wrong `@type`**: All 174 pages with LocalBusiness schema use `"@type": "LocalBusiness"` (string). The requirement is `["LocalBusiness", "RoofingContractor"]` (array). Note: Since `RoofingContractor` is a subtype of `LocalBusiness` in the schema.org hierarchy, an alternative approach is to simply use `"@type": "RoofingContractor"` which inherits all LocalBusiness properties. However, the requirement specifies the array form for maximum compatibility.

2. **Wrong `name` field**: The entity-guidelines.md specifies the canonical name as `"5 Star Roofing"`, but most schema blocks use `"5 Star Commercial Roofing"` (the legal name from `constants.ts`). Phase 1 should fix `BUSINESS_INFO.name` in constants.ts -- this phase must verify schema uses whatever `constants.ts` says, or hardcode `"5 Star Roofing"` directly. **Dependency: Phase 1 must complete first.**

3. **Missing WebSite entity**: Zero pages contain a `WebSite` schema. The homepage needs one with `sameAs` links. Currently only 5 pages (homepage + 4 city hubs) have `sameAs` at all.

4. **Missing Person schema**: The about page has an `Organization` schema but no `Person` schema for the business owner.

5. **FAQ schema coverage**: 124 pages have FAQPage schema, but 158 pages have `AccordionTrigger` (FAQ UI content). At least 34 pages have FAQ content without corresponding FAQPage schema.

6. **Breadcrumb schema**: 201 pages use the `Breadcrumb` component which auto-generates BreadcrumbList JSON-LD. This is well-covered. The homepage (`app/page.tsx`) does not use Breadcrumb, which is correct (homepage is the root).

7. **Service schema**: 124 pages have explicit `"@type": "Service"` schema. Pages that are service pages but lack it need auditing.

**Primary recommendation:** Use `sed`/scripted find-and-replace across all 200+ page files to change `@type` from `"LocalBusiness"` to `["LocalBusiness", "RoofingContractor"]` and fix the `name` field. Add WebSite + Person schemas manually to homepage and about page. Build a post-build validation script to catch regressions.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| schema-dts | ^1.1.2 | TypeScript types for Schema.org JSON-LD | Google-maintained, 334k weekly downloads, provides compile-time validation of schema objects |
| TypeScript | ^5.7.2 | Already installed | Type-checking schema objects at build time |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Node.js built-in `fs`/`path` | N/A | Validation script | Post-build schema scanning of HTML output |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| schema-dts | Manual type interfaces | schema-dts covers entire Schema.org vocabulary; manual types would only cover what we use but risk drift from spec |
| schema-dts | No types (current approach) | Current approach allows any typo/invalid property without warning |

**Installation:**
```bash
cd sites/5-star-roofing
npm install --save-dev schema-dts
```

## Architecture Patterns

### Current Schema Implementation Pattern

Schema is embedded inline in each page's `page.tsx` via `<script type="application/ld+json">` with `dangerouslySetInnerHTML`. There are two patterns:

**Pattern A: Inline JSON (majority of pages)**
```tsx
// ~174 pages use this directly in JSX
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",  // <-- needs to become array
  "name": "5 Star Commercial Roofing",  // <-- needs entity name fix
  // ... rest of schema
}) }} />
```

**Pattern B: Variable then render (about page, some hub pages)**
```tsx
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "5 Star Commercial Roofing",
  // ...
};
// ...
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
```

**Pattern C: Template function (lib/schema-templates.ts)**
```tsx
// Only used in ~2 page files via import
import { generateLocalBusinessSchema } from '@/lib/schema-templates';
```

The `lib/schema-templates.ts` file exists but is barely used. Most pages have hardcoded inline schema.

### Recommended Approach for This Phase

**Do NOT refactor to centralized schema templates.** That would touch 200+ files and change page architecture. Instead:

1. **Scripted mass update**: Use `sed` or Node.js script to find-and-replace across all `page.tsx` files
2. **Manual additions**: Add WebSite schema to homepage, Person schema to about page
3. **Update `lib/schema-templates.ts`**: Fix the template for future pages
4. **Validation script**: Post-build script that parses HTML and validates schema

### Schema Type Hierarchy (Schema.org)
```
Thing > Organization > LocalBusiness > HomeAndConstructionBusiness > RoofingContractor
Thing > Place > LocalBusiness > HomeAndConstructionBusiness > RoofingContractor
```

Using `["LocalBusiness", "RoofingContractor"]` is the safest approach because:
- Some crawlers only understand `LocalBusiness`
- `RoofingContractor` adds specificity for Google's knowledge graph
- Array form is valid JSON-LD for multi-type entities

### WebSite Schema Pattern (for homepage)
```typescript
import type { WithContext, WebSite } from 'schema-dts';

const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "5 Star Roofing",
  "url": "https://5starroofingpros.com",
  "publisher": {
    "@id": "https://5starroofingpros.com/#organization"
  },
  "sameAs": [
    "https://www.facebook.com/5starroofingpros",
    "https://www.google.com/maps?cid=11430502439073045291"
  ]
};
```

### Person Schema Pattern (for about page)
```typescript
import type { WithContext, Person } from 'schema-dts';

const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Owner Name]",  // Need to determine from client
  "jobTitle": "Owner",
  "worksFor": {
    "@id": "https://5starroofingpros.com/#organization"
  }
};
```

### Anti-Patterns to Avoid
- **Refactoring all pages to use template functions**: Too risky for 200+ files, high regression potential, not in scope
- **Using `@graph` instead of separate `<script>` tags**: Both are valid, but changing from separate tags to graph would touch every page
- **Removing `LocalBusiness` and only using `RoofingContractor`**: Some tools don't recognize the subtype; keep both
- **Adding schema to `layout.tsx`**: LocalBusiness schema should be page-specific (different URLs, areaServed per page)

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Schema type validation | Custom type definitions | `schema-dts` | Google maintains it, covers all 800+ Schema.org types |
| HTML parsing for validation | Regex-based parser | Built-in JSON.parse on extracted script content | Schema is JSON inside script tags, easily extractable |
| Schema.org compliance checking | Custom validator | Google Rich Results Test API (manual) + custom property checks | Google's tool is the authority; script checks structural issues |

**Key insight:** The hard part of this phase is not the schema itself (it's just JSON) -- it's the scale (200+ files) and consistency. Scripted mass updates with post-build validation is the right approach, not manual page-by-page editing.

## Common Pitfalls

### Pitfall 1: Entity Name Mismatch with Phase 1
**What goes wrong:** Phase 5 changes schema `name` to `"5 Star Roofing"` but Phase 1 hasn't updated `constants.ts` yet, creating inconsistency between schema and rendered HTML.
**Why it happens:** Phase 5 depends on Phase 1 completing the entity name fix first.
**How to avoid:** Either (a) ensure Phase 1 is complete before Phase 5 runs, or (b) Phase 5 hardcodes `"5 Star Roofing"` in schema independently of `constants.ts`.
**Warning signs:** `grep -r '"5 Star Commercial Roofing"' out/` returns matches in schema blocks.

### Pitfall 2: Breaking JSON Syntax in Mass Updates
**What goes wrong:** A `sed` replacement corrupts JSON structure (missing quotes, extra commas) and the page renders but schema is invalid.
**Why it happens:** The schema JSON is embedded in JSX strings, not standalone files. Regex-based replacements are fragile.
**How to avoid:** Use Node.js AST-aware script or very precise sed patterns. Always validate with `JSON.parse` after changes. Run build + validation script.
**Warning signs:** Build warnings about invalid JSON, or validation script reports parse errors.

### Pitfall 3: FAQ Content Without FAQ Schema
**What goes wrong:** Pages display FAQ accordions but have no FAQPage schema, missing rich result opportunities.
**Why it happens:** FAQ content was added incrementally; some pages got schema, others didn't.
**How to avoid:** Validation script should cross-check: if page HTML contains accordion FAQ markup, it must also contain FAQPage schema.
**Warning signs:** Validation script reports "FAQ content found but no FAQPage schema" for N pages.

### Pitfall 4: Duplicate Schema Types on Same Page
**What goes wrong:** Homepage already has `"@type": "RoofingContractor"` schema. Adding `["LocalBusiness", "RoofingContractor"]` creates two conflicting business entity declarations.
**Why it happens:** Homepage schema was written differently than other pages.
**How to avoid:** Audit homepage separately. The homepage already uses `"@type": "RoofingContractor"` -- it needs to become `["LocalBusiness", "RoofingContractor"]` to match the requirement.
**Warning signs:** Google Search Console reporting duplicate entity errors.

### Pitfall 5: schema-dts Types Don't Match Runtime JSON
**What goes wrong:** TypeScript compiles fine with `schema-dts` types but the generated JSON has camelCase vs. the expected schema.org property names.
**Why it happens:** schema-dts uses the actual schema.org property names (which are already camelCase in the spec), so this is usually fine. But confusion arises with properties like `@type`, `@context`, `@id` which need the `@` prefix.
**How to avoid:** `schema-dts` handles this correctly via `WithContext<T>` wrapper type. Use it.
**Warning signs:** N/A -- `schema-dts` property names match schema.org exactly.

## Code Examples

### Mass Update: Change LocalBusiness @type to Array (Node.js script)
```typescript
// scripts/upgrade-schema-type.ts
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

const appDir = path.join(__dirname, '../app');
const files = glob.sync(`${appDir}/**/page.tsx`);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');

  // Pattern: "@type": "LocalBusiness" -> "@type": ["LocalBusiness", "RoofingContractor"]
  // Only when it's standalone LocalBusiness, not already an array
  content = content.replace(
    /"@type":\s*"LocalBusiness"/g,
    '"@type": ["LocalBusiness", "RoofingContractor"]'
  );

  fs.writeFileSync(file, content);
}
```

### Post-Build Validation Script
```typescript
// scripts/validate-schema.ts
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

const outDir = path.join(__dirname, '../out');
const htmlFiles = glob.sync(`${outDir}/**/*.html`);

const errors: string[] = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf-8');
  const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;

  while ((match = schemaRegex.exec(html)) !== null) {
    try {
      const schema = JSON.parse(match[1]);

      // Check 1: LocalBusiness must include RoofingContractor
      if (schema['@type'] === 'LocalBusiness') {
        errors.push(`${file}: LocalBusiness without RoofingContractor`);
      }

      // Check 2: Name must be canonical
      if (schema.name === '5 Star Commercial Roofing' && schema['@type'] !== 'Organization') {
        errors.push(`${file}: Wrong entity name in schema`);
      }

      // Check 3: Valid JSON-LD context
      if (schema['@context'] && schema['@context'] !== 'https://schema.org') {
        errors.push(`${file}: Invalid @context`);
      }
    } catch (e) {
      errors.push(`${file}: Invalid JSON in schema block`);
    }
  }
}
```

### schema-dts Usage for Type-Safe Schema
```typescript
import type { WithContext, LocalBusiness, WebSite, FAQPage, Person } from 'schema-dts';

// Type-safe LocalBusiness+RoofingContractor
// Note: schema-dts doesn't directly support multi-type arrays in @type,
// but you can use type assertion for the array form
const localBusiness = {
  "@context": "https://schema.org" as const,
  "@type": ["LocalBusiness", "RoofingContractor"] as const,
  "name": "5 Star Roofing",
  "telephone": "(806) 622-6041",
  // ... other properties validated by LocalBusiness type
} satisfies Omit<WithContext<LocalBusiness>, '@type'> & { '@type': readonly string[] };
```

## Current State Inventory

### Schema Coverage Across ~202 Page Directories

| Schema Type | Pages With It | Notes |
|-------------|---------------|-------|
| LocalBusiness | 174 | All use `"@type": "LocalBusiness"` (string, not array) |
| RoofingContractor | 175 | Used in Service schema `provider` block, NOT as page-level @type |
| FAQPage | 124 | 34+ pages have FAQ UI but no FAQPage schema |
| Service | 188 | Good coverage across service pages |
| BreadcrumbList | 201 | Auto-generated by `<Breadcrumb>` component |
| Organization | 1 | About page only |
| WebSite | 0 | Missing entirely |
| Person | 0 | Missing entirely (required for about page) |

### Entity Name in Schema

| Value | Occurrences | Correct? |
|-------|-------------|----------|
| `"5 Star Commercial Roofing"` | ~363 | NO - should be "5 Star Roofing" per entity guidelines |
| `"5 Star Roofing"` | ~1 (homepage) | YES - canonical name |

### Key Files to Modify

| File | Change Needed |
|------|---------------|
| `lib/schema-templates.ts` | Change `@type` to array, fix `name` field |
| `app/page.tsx` | Add WebSite schema, verify RoofingContractor @type is array form |
| `app/about/page.tsx` | Add Person schema, fix Organization name |
| `app/*/page.tsx` (174 files) | Change `"@type": "LocalBusiness"` to array form |
| All pages with FAQ content | Audit and add FAQPage schema where missing |
| `package.json` | Add `schema-dts` to devDependencies |
| New: `scripts/validate-schema.ts` | Create post-build validation |

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single `@type` string | Multi-type arrays | Always valid in JSON-LD | Better entity disambiguation |
| Manual schema typing | `schema-dts` for TypeScript | 2021 (v1.0) | Compile-time validation |
| No `WebSite` entity | WebSite with sameAs | Google increasingly uses for knowledge panels | Better brand entity recognition |

**Deprecated/outdated:**
- Using `itemscope`/`itemtype` microdata: JSON-LD is Google's preferred format (this site already uses JSON-LD)
- Putting all schema in a single `@graph`: Valid but separate `<script>` tags per entity is equally valid and more maintainable

## Open Questions

1. **Business owner name for Person schema**
   - What we know: The about page mentions the company but not the owner by name
   - What's unclear: Whether Bo has the owner's name to include
   - Recommendation: Use placeholder or ask Bo; if unknown, skip Person schema or use generic "Owner" reference

2. **Social profile URLs for sameAs**
   - What we know: Homepage already has Facebook and Google Maps sameAs links
   - What's unclear: Are there other profiles (Yelp, BBB, LinkedIn, etc.)?
   - Recommendation: Use the two existing URLs; add more if discovered

3. **Should lib/schema-templates.ts be refactored?**
   - What we know: It's barely used (only 2 files import it), most pages have inline schema
   - What's unclear: Whether future phases will need centralized templates
   - Recommendation: Update it for correctness but don't force-migrate existing pages to use it. Future pages should use it.

4. **Pages with FAQ UI but no FAQ schema (~34 pages)**
   - What we know: 158 pages have AccordionTrigger, 124 have FAQPage schema
   - What's unclear: Which specific 34 pages are missing, and do they all have genuine FAQ content vs. accordion used for other UI patterns?
   - Recommendation: The validation script should identify these pages. Fix in 05-03 task.

## Sources

### Primary (HIGH confidence)
- [Schema.org RoofingContractor](https://schema.org/RoofingContractor) - Type hierarchy and properties
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness) - Parent type properties
- [schema-dts npm](https://www.npmjs.com/package/schema-dts) - v1.1.2, 334k weekly downloads, Google-maintained
- [schema-dts GitHub](https://github.com/google/schema-dts) - Usage patterns and WithContext type
- Direct codebase analysis of all 202 page directories in `app/`

### Secondary (MEDIUM confidence)
- [Schema App LocalBusiness Guide](https://www.schemaapp.com/schema-markup/how-to-do-schema-markup-for-local-business/) - Multi-type best practices
- [Google Rich Results documentation](https://developers.google.com/search/docs/appearance/structured-data) - FAQ, Breadcrumb, LocalBusiness requirements

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - schema-dts is the clear standard, well-maintained by Google
- Architecture: HIGH - direct codebase analysis of all 200+ files, patterns fully understood
- Pitfalls: HIGH - known from direct code inspection and schema.org spec
- Current state inventory: HIGH - derived from grep/count across actual codebase

**Research date:** 2026-02-20
**Valid until:** 2026-06-20 (schema.org spec is very stable)
