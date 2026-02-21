# Phase 7: Internal Linking - Research

**Researched:** 2026-02-20
**Domain:** Internal link architecture for hub-and-spoke service site (Next.js static export)
**Confidence:** HIGH

## Summary

The site has 206 pages organized in a hub-and-spoke model: 11 service hub pages, 15 city hub pages, ~154 spoke pages (service x city), plus ~26 static/article pages. The internal linking infrastructure has significant gaps that this phase must address.

The most critical finding is that the `InternalLinks` component is imported by 154 spoke pages but **actually rendered by only 7 of them**. The remaining 147 spoke pages import it and never call it in JSX. Additionally, the component generates only sideways links (cross-city, cross-service) but has **zero hub uplinks** -- it never links up to the parent service hub (`/roof-repair/`) or city hub (`/amarillo-texas-roofing/`). There is also a phantom service (`emergency-roof-repair`) in the component's data that has no corresponding pages, generating broken links on the 7 pages that do render the component.

Two service hub pages (`commercial-roofing` and `residential-roofing`) are legacy pre-Phase-6 pages that lack systematic spoke grids. Five cities (Levelland, Big Spring, Snyder, Monahans, Andrews) have spoke pages but **no city hub page**. The `service-areas` page links many cities to `/contact/` instead of their actual city hub pages. Several city hub pages contain broken internal links to non-existent URL patterns (e.g., `/commercial-roofing-amarillo-texas/` instead of `/commercial-roofing-amarillo/`).

**Primary recommendation:** Fix the InternalLinks component first (add hub uplinks, remove phantom service, expose city hub links), then ensure all 154 spoke pages actually render it, then audit hub pages and static pages for completeness.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15 | App Router static export | Already in use |
| React | 19 | Component rendering | Already in use |
| TypeScript | 5.x | Type safety | Already in use |

### Supporting
No new libraries needed. This phase is pure content/component editing -- updating an existing React component and modifying page files.

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Manual page edits | Script-based batch updates | Script would be faster for 147 files but pages have inconsistent structures; manual is safer per-file |
| Centralized link data | Current per-component data | Centralized `lib/links.ts` would be cleaner but is scope creep for this phase |

**Installation:**
```bash
# No new dependencies needed
```

## Architecture Patterns

### Current Site Topology
```
Homepage (/)
├── /services/                    (services index)
│   ├── /residential-roofing/     (service hub) → 14 city spokes
│   ├── /commercial-roofing/      (service hub) → 14 city spokes
│   ├── /hail-damage-repair/      (service hub) → 16 city spokes
│   ├── /roof-repair/             (service hub) → 14 city spokes
│   ├── /roof-replacement/        (service hub) → 14 city spokes
│   ├── /storm-damage-repair/     (service hub) → 14 city spokes
│   ├── /wind-damage-repair/      (service hub) → 14 city spokes
│   ├── /metal-roofing/           (service hub) → 14 city spokes
│   ├── /tpo-roofing/             (service hub) → 14 city spokes
│   ├── /roof-inspections/        (service hub) → 14 city spokes
│   └── /asphalt-shingle-roofing/ (service hub) → 14 city spokes
├── /service-areas/               (city index)
│   ├── /amarillo-texas-roofing/  (city hub)
│   ├── /midland-tx-roofing/      (city hub)
│   ├── /odessa-tx-roofing/       (city hub)
│   ├── ... (15 city hubs total)
│   └── [5 cities MISSING hubs: levelland, big-spring, snyder, monahans, andrews]
├── /about/, /contact/, /reviews/, /gallery/, /blog/, /articles/
├── /industrial-roofing/, /roofing-methods/
└── ~14 article/one-off pages
```

### Pattern 1: Hub Uplinks in InternalLinks Component (LINK-01, LINK-02)
**What:** Add a third section to InternalLinks that links UP to the parent service hub and city hub
**When to use:** Every spoke page that renders InternalLinks

The component currently renders two panels:
1. Same service in nearby cities (cross-city)
2. Other services in same city (cross-service)

It needs a third element: hub uplinks. Add prominent links to:
- Service hub: `/{currentService}/` (e.g., `/roof-repair/`)
- City hub: `/{citySlug}-texas-roofing/` or `/{citySlug}-tx-roofing/` (city hub URL pattern varies)

**Implementation consideration:** City hub URLs are inconsistent:
- Some use `-texas-roofing` (amarillo, borger, canyon, dumas, hereford, pampa, perryton, plainview)
- Some use `-tx-roofing` (bushland, claude, lubbock, midland, odessa, vega, wildorado)
- Five cities have NO hub page at all (levelland, big-spring, snyder, monahans, andrews)

The component needs a `cityHubUrl` mapping or the 5 missing city hubs need to be created. Creating 5 small city hub pages is simpler and more valuable than adding conditional logic.

**Example enhancement:**
```typescript
// Add to cityData
const cityData: Record<string, CityData> = {
  'amarillo': {
    name: 'Amarillo',
    slug: 'amarillo',
    nearbyCities: ['canyon', 'borger', 'dumas', 'pampa'],
    hubUrl: '/amarillo-texas-roofing/'  // NEW
  },
  // ...
};

// Add to serviceData
const serviceData: Record<string, ServiceData> = {
  'roof-repair': {
    name: 'Roof Repair',
    slug: 'roof-repair',
    hubUrl: '/roof-repair/'  // NEW
  },
  // ...
};
```

### Pattern 2: Spoke Page Rendering Fix (Major)
**What:** 147 spoke pages import InternalLinks but never render it
**When to use:** Every spoke page

These pages all have `import { InternalLinks } from "@/components/InternalLinks";` at the top but never include `<InternalLinks currentCity="..." currentService="..." />` in their JSX. The fix is to add the JSX call before the closing tags.

**Scale:** 147 files need the JSX insertion. Each page's current city and service can be inferred from the directory name pattern `/{service}-{city}/`.

### Pattern 3: Hub-to-Spoke Grids (LINK-03)
**What:** Ensure every hub page has a city spoke grid linking to ALL its spoke pages
**Current state:**
- 9 hub pages (Phase 6 created) have `cities.map()` grids -- GOOD
- `commercial-roofing` hub: NO spoke grid (pre-Phase-6 legacy)
- `residential-roofing` hub: NO spoke grid (links to city hubs instead of service spokes)

Both legacy hub pages need spoke grids added matching the Phase 6 pattern.

### Anti-Patterns to Avoid
- **Broken phantom links:** InternalLinks currently lists `emergency-roof-repair` as a service but zero emergency-roof-repair spoke pages exist. Any page that renders InternalLinks can generate links to `/emergency-roof-repair-{city}/` which 404. Remove this service from serviceData.
- **URL pattern mismatch:** The `amarillo-texas-roofing` page links to `/commercial-roofing-amarillo-texas/` and `/metal-roofing-amarillo-texas/` which don't exist. The correct pattern is `/{service}-{city}/` with no state suffix.
- **service-areas linking to /contact/:** Most city cards on `/service-areas/` link to `/contact/` instead of the city hub page. Fix these to point to real city hub pages.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Batch file editing | Custom Node.js script | Structured manual edits per file or simple sed/grep patterns | Pages have inconsistent structures making scripting fragile |
| Link validation | Custom crawler | Build the site (`npm run build`) and check `out/` directory for all linked paths | Static export means all pages are in `out/` as directories |
| Orphan page detection | Custom graph analysis | Compare sitemap URLs against all `href` values found in built HTML | Simple set-difference operation |

**Key insight:** The site is a static export. Every page becomes a directory in `out/`. Link validation is checking if the target directory exists -- no need for a crawler.

## Common Pitfalls

### Pitfall 1: Emergency Roof Repair Phantom Links
**What goes wrong:** InternalLinks serviceData includes `emergency-roof-repair` but no `/emergency-roof-repair-{city}/` pages exist
**Why it happens:** Service was added to component data but pages were never created
**How to avoid:** Remove `emergency-roof-repair` from serviceData in InternalLinks.tsx
**Warning signs:** 404 errors on any page that renders InternalLinks with "Other Roofing Services" section

### Pitfall 2: City Hub URL Pattern Inconsistency
**What goes wrong:** Spoke pages need to link to city hubs but URL patterns vary (-texas-roofing vs -tx-roofing vs not existing)
**Why it happens:** City hub pages were created at different times with different naming conventions
**How to avoid:** Add explicit `hubUrl` mapping to cityData; don't try to auto-generate city hub URLs from city slug
**Warning signs:** Breadcrumbs or uplinks pointing to non-existent city hub URLs

### Pitfall 3: Forgetting Hereford and Plainview
**What goes wrong:** hail-damage-repair has 16 spoke pages (includes Hereford and Plainview) while all other services have 14
**Why it happens:** Different services were generated at different times
**How to avoid:** When auditing, check all services independently -- don't assume uniform 14-city coverage
**Warning signs:** Hereford and Plainview spokes having no cross-service links because other services lack those cities

### Pitfall 4: Editing 147 Files Without Verification
**What goes wrong:** Batch modifications introduce syntax errors or wrong props
**Why it happens:** Files have varied structures (different import orders, different JSX nesting)
**How to avoid:** Run `npm run build` after each batch of ~20-30 edits to catch errors early
**Warning signs:** Build failures with "unused import" warnings or JSX errors

### Pitfall 5: Missing 5 City Hub Pages
**What goes wrong:** Spoke pages for Levelland, Big Spring, Snyder, Monahans, and Andrews cannot link to a city hub because none exists
**Why it happens:** These secondary cities never got dedicated hub pages
**How to avoid:** Decide upfront: either create 5 city hub pages (recommended) or conditionally skip city hub uplinks for these cities
**Warning signs:** InternalLinks rendering broken links or null for 5 cities

## Existing Codebase Findings (HIGH Confidence)

### InternalLinks Component Analysis
**File:** `components/InternalLinks.tsx` (222 lines)

**Current behavior:**
- Props: `currentCity: string`, `currentService: string`
- Generates two link panels: cross-city (4 links) + cross-service (6 links)
- Uses hardcoded `cityData` (14 cities) and `serviceData` (12 services)
- URL pattern: `/{service}-{city}/`
- NO hub uplinks (never links to `/roof-repair/` or `/amarillo-texas-roofing/`)

**Data issues found:**
1. `emergency-roof-repair` in serviceData has 0 corresponding pages -- generates 404 links
2. `hereford` and `plainview` are NOT in cityData but have hail-damage-repair spoke pages
3. City hub URL pattern is not stored anywhere in the component

### Spoke Page Rendering Analysis
**Finding:** 154 pages import InternalLinks, only 7 render it

**Pages that render it** (all are hail-damage-repair variants):
- hail-damage-repair-borger
- hail-damage-repair-canyon
- hail-damage-repair-dumas
- hail-damage-repair-lubbock
- hail-damage-repair-midland
- hail-damage-repair-odessa
- hail-damage-repair-pampa

**Pages that import but don't render:** All other 147 spoke pages across all services

### Hub Page Spoke Grid Analysis
| Hub Page | Has Spoke Grid | Cities Listed | Status |
|----------|---------------|---------------|--------|
| asphalt-shingle-roofing | Yes (cities.map) | 14 | OK |
| commercial-roofing | **No** | N/A | **NEEDS GRID** |
| hail-damage-repair | Yes (cities.map) | 16 | OK (includes Hereford, Plainview) |
| metal-roofing | Yes (cities.map) | 14 | OK |
| residential-roofing | **No** | N/A | **NEEDS GRID** |
| roof-inspections | Yes (cities.map) | 14 | OK |
| roof-repair | Yes (cities.map) | 14 | OK |
| roof-replacement | Yes (cities.map) | 14 | OK |
| storm-damage-repair | Yes (cities.map) | 14 | OK |
| tpo-roofing | Yes (cities.map) | 14 | OK |
| wind-damage-repair | Yes (cities.map) | 14 | OK |

### City Hub Coverage
| City | Hub Page | Hub URL | Spokes (all 11 services) |
|------|----------|---------|--------------------------|
| Amarillo | Yes | /amarillo-texas-roofing/ | 11+extras |
| Canyon | Yes | /canyon-texas-roofing/ | 11 |
| Borger | Yes | /borger-texas-roofing/ | 11 |
| Dumas | Yes | /dumas-texas-roofing/ | 11 |
| Pampa | Yes | /pampa-texas-roofing/ | 11 |
| Perryton | Yes | /perryton-texas-roofing/ | 11 |
| Lubbock | Yes | /lubbock-tx-roofing/ | 11 |
| Midland | Yes | /midland-tx-roofing/ | 11 |
| Odessa | Yes | /odessa-tx-roofing/ | 11 |
| Hereford | Yes | /hereford-texas-roofing/ | 1 (hail only) |
| Bushland | Yes | /bushland-tx-roofing/ | 0 |
| Claude | Yes | /claude-tx-roofing/ | 0 |
| Vega | Yes | /vega-tx-roofing/ | 0 |
| Wildorado | Yes | /wildorado-tx-roofing/ | 0 |
| Plainview | Yes | /plainview-texas-roofing/ | 1 (hail only) |
| **Levelland** | **No** | N/A | 11 |
| **Big Spring** | **No** | N/A | 11 |
| **Snyder** | **No** | N/A | 11 |
| **Monahans** | **No** | N/A | 11 |
| **Andrews** | **No** | N/A | 11 |

### Broken Links Found in City Hub Pages
**amarillo-texas-roofing** links to:
- `/commercial-roofing-amarillo-texas/` -- **BROKEN** (should be `/commercial-roofing-amarillo/`)
- `/metal-roofing-amarillo-texas/` -- **BROKEN** (should be `/metal-roofing-amarillo/`)
- `/roof-inspections-amarillo-texas/` -- **BROKEN** (should be `/roof-inspections-amarillo/`)

### service-areas Page Issues
Many city cards link to `/contact/` instead of their city hub pages:
- Canyon, Borger, Pampa, Dumas, Hereford, Childress, Dalhart, Perryton -> `/contact/`
- Big Spring, Plainview -> `/contact/`
- Only Amarillo, Midland, Odessa, Lubbock have correct city hub links

### Breadcrumb Pattern Analysis
**Spoke pages use consistent pattern:**
```
Home (/) > Service Hub (/{service}/) > City (/{service}-{city}/)
```
All breadcrumb parent URLs (`/roof-repair/`, `/commercial-roofing/`, etc.) resolve to real hub pages. This is correct.

**City hub pages use:**
```
Home (/) > Service Areas (/service-areas/) > City (/{city}-texas-roofing/)
```
This is correct -- `/service-areas/` exists.

**Service hub pages use:**
```
Home (/) > Service Hub (/{service}/)
```
Simple and correct.

### Outbound Link Counts (Pages at Risk of Dead-End)
All pages without InternalLinks were checked -- all have 3+ outbound internal links already:
- `contact`: 4 links (borderline but OK)
- `hail-damage-repair-hereford`: 5 links
- `hail-damage-repair-plainview`: 5 links
- All article pages: 5-25 links each

The main dead-end risk is the 147 spoke pages that import InternalLinks but don't render it. These pages likely have inline links (CTA buttons to `/contact/`, phone links) but may fall below 3 outbound internal links.

## Code Examples

### Current InternalLinks Usage (Spoke Page)
```typescript
// Only 7 pages do this:
<InternalLinks currentCity="borger" currentService="hail-damage-repair" />

// 147 pages have this import but no JSX call:
import { InternalLinks } from "@/components/InternalLinks";
```

### Hub Page Spoke Grid Pattern (Phase 6 Template)
```typescript
// From roof-repair/page.tsx
const cities = [
  { name: "Amarillo", slug: "amarillo" },
  { name: "Andrews", slug: "andrews" },
  // ... all 14 cities
];

// In JSX:
<section className="mb-16">
  <h2 className="text-2xl font-bold mb-6">
    Roof Repair Services Across West Texas
  </h2>
  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
    {cities.map((city) => (
      <a
        key={city.slug}
        href={`/roof-repair-${city.slug}/`}
        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-gold/40"
      >
        <span className="font-semibold text-brand-brown">
          Roof Repair in {city.name}
        </span>
      </a>
    ))}
  </div>
</section>
```

### Breadcrumb Pattern (Spoke Page)
```typescript
<Breadcrumb items={[
  { name: "Home", url: "/" },
  { name: "Roof Repair", url: "/roof-repair/" },
  { name: "Amarillo", url: "/roof-repair-amarillo/" }
]} />
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual inline links | InternalLinks component | Original build | Component exists but isn't rendered on most pages |
| No hub pages | Phase 6 hub pages | 2026-02 | 9 hubs created with spoke grids |
| No city hubs for some cities | Still missing | Never addressed | 5 cities lack city hub pages |

## Open Questions

1. **Should we create city hub pages for 5 missing cities?**
   - What we know: Levelland, Big Spring, Snyder, Monahans, Andrews each have 11 spoke pages but no city hub
   - What's unclear: Whether creating these is in-scope for Phase 7 or should be Phase 8 (Content Enrichment)
   - Recommendation: Create minimal city hub pages (matching existing pattern) in Phase 7 to enable proper hub uplinks. Without them, LINK-02 cannot be fully satisfied for these 5 cities. These are small pages (~200 lines each following the existing template).

2. **Should the service-areas page be updated to link to city hubs?**
   - What we know: Most city cards on /service-areas/ link to /contact/ instead of city hub pages
   - What's unclear: Whether this is Phase 7 scope or a separate issue
   - Recommendation: Fix as part of LINK-06 (orphan page elimination) -- city hubs are effectively orphaned if service-areas doesn't link to them

3. **What about Hereford and Plainview spoke pages?**
   - What we know: They have hail-damage-repair spokes but no other service spokes; they have city hub pages
   - What's unclear: Whether InternalLinks should include them (they aren't in cityData currently)
   - Recommendation: Leave Hereford and Plainview handling as-is for Phase 7. They have city hubs and only 1 spoke each. Adding them to InternalLinks cityData would generate broken cross-service links since those service pages don't exist. Defer to Phase 8 Content Enrichment.

4. **What about Bushland, Claude, Vega, Wildorado city hubs?**
   - What we know: These cities have hub pages but ZERO spoke pages
   - What's unclear: Whether they should be addressable from InternalLinks
   - Recommendation: Leave them out of InternalLinks cityData. They are info-only city hubs with no service spokes. They are reachable from /service-areas/ and that's sufficient.

## Sources

### Primary (HIGH confidence)
- Direct codebase analysis: `components/InternalLinks.tsx` -- full component read
- Direct codebase analysis: `components/Breadcrumb.tsx` -- full component read
- Direct codebase analysis: All 206 page.tsx files scanned for InternalLinks import/render, href counts, breadcrumb patterns
- Direct codebase analysis: `netlify.toml` -- all redirect rules reviewed
- Direct codebase analysis: All 11 service hub pages checked for spoke grids
- Direct codebase analysis: All 15 city hub pages checked for existence and link patterns

### Secondary (MEDIUM confidence)
- `.planning/ROADMAP.md` -- Phase 7 requirements and success criteria
- `.planning/REQUIREMENTS.md` -- LINK-01 through LINK-08 specifications

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - No new libraries, pure component/page editing
- Architecture: HIGH - Complete audit of all 206 pages performed, all gaps identified
- Pitfalls: HIGH - Based on direct codebase evidence (broken links found, phantom service confirmed, missing pages verified)

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable codebase, no external dependencies)
