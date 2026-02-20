# Architecture Research

**Domain:** Local service business SEO — 268-page roofing site, hub-and-spoke IA
**Researched:** 2026-02-20
**Confidence:** HIGH (multiple authoritative SEO sources cross-verified; site structure directly audited)

---

## Standard Architecture

### System Overview: Ideal 4-Tier Topology

```
┌─────────────────────────────────────────────────────────────────────┐
│  TIER 0: Homepage                                                    │
│  Target: "hail damage roofing amarillo" / brand                     │
│  Focus: Amarillo ONLY — zero dilution from other cities             │
│  Links → Tier 1 hubs (service category hubs + city hubs)           │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
       ┌──────────────────┼──────────────────────┐
       ↓                  ↓                      ↓
┌────────────┐    ┌────────────────┐    ┌──────────────────┐
│ TIER 1A    │    │ TIER 1B        │    │ TIER 1C          │
│ Service    │    │ City Hub Pages │    │ Damage/Event     │
│ Category   │    │                │    │ Cluster Hubs     │
│ Hubs       │    │ /amarillo-     │    │                  │
│            │    │ texas-roofing/ │    │ /hail-damage-    │
│ /commercial│    │ /midland-tx-   │    │ repair-amarillo/ │
│ -roofing/  │    │ roofing/       │    │ (PRIMARY page)   │
│ /residential    │ /lubbock-tx-   │    │                  │
│ -roofing/  │    │ roofing/       │    │ /storm-damage-   │
│ /roofing-  │    │ (1 per city)   │    │ roof-repair-in-  │
│ methods/   │    │                │    │ amarillo/        │
└─────┬──────┘    └───────┬────────┘    └────────┬─────────┘
      │                   │                      │
      └───────────────────┴──────────────────────┘
                          │
                          ↓
┌─────────────────────────────────────────────────────────────────────┐
│  TIER 2: City × Service Matrix Pages (PRIMARY SPOKE LAYER)          │
│                                                                      │
│  /roof-repair-amarillo/          /roof-repair-midland/              │
│  /commercial-roofing-amarillo/   /commercial-roofing-midland/       │
│  /hail-damage-repair-amarillo/   /hail-damage-repair-midland/       │
│  /metal-roofing-amarillo/        /metal-roofing-midland/            │
│  /tpo-roofing-amarillo/          /tpo-roofing-midland/              │
│  /storm-damage-repair-amarillo/  /storm-damage-repair-midland/      │
│  /wind-damage-repair-amarillo/   /wind-damage-repair-midland/       │
│  /roof-replacement-amarillo/     /roof-replacement-midland/         │
│  /asphalt-shingle-roofing-       /asphalt-shingle-roofing-          │
│    amarillo/                       midland/                         │
│  /roof-inspections-amarillo/     /roof-inspections-midland/         │
│  [same matrix × 14 cities]                                          │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          ↓
┌─────────────────────────────────────────────────────────────────────┐
│  TIER 3: Supporting / Long-Tail Content                              │
│  (informational, FAQ clusters, seasonal, niche)                     │
│                                                                      │
│  /amarillo-weather-impact-on-roofing/    (content marketing)        │
│  /budgeting-for-roof-replacement-expenses/                          │
│  /roofing-methods-in-amarillo/                                      │
│  /articles/ (blog cluster)                                          │
│  [Noindex or consolidate near-duplicate variants here]              │
└─────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Current State |
|-----------|----------------|---------------|
| Homepage (`/`) | Rank for primary brand + "hail damage roofing amarillo" — consolidate Amarillo authority | PROBLEM: mentions Amarillo, Midland, Odessa — dilutes primary city signal |
| Service Category Hubs (`/commercial-roofing/`, `/residential-roofing/`) | Tier 1A: Target service-category keywords without geography; link to all city variants below | EXISTS — but thin; do not list all cities |
| City Hub Pages (`/amarillo-texas-roofing/`, `/midland-tx-roofing/`) | Tier 1B: City-level authority consolidator; links down to all service×city spokes for that city | EXISTS — inconsistent naming; some lack adequate spoke links |
| Damage/Event Hubs (`/hail-damage-repair-amarillo/`) | Tier 1C: High-value seasonal hubs; rank for "{service} {city}" head terms; link to city variants and related services | PROBLEM: 7 near-duplicate Amarillo hail pages competing with each other |
| Spoke Pages (service × city matrix) | Tier 2: Rank for "{service} {city}" long-tail; link up to hub + sideways to sibling cities | EXISTS — good URL pattern; InternalLinks component handles cross-linking |
| Long-tail / Informational | Tier 3: Capture how-to, cost, seasonal queries; feed authority upward to Tier 2 | MIXED: some valuable; some are near-duplicate noise |

---

## Current Architecture Problems (Audit Findings)

### Problem 1: Hail Damage Page Cannibalization (CRITICAL)

7 Amarillo hail damage pages compete for the same "hail damage roof repair amarillo" keyword cluster:

```
/hail-damage-repair-amarillo/          ← canonical target (keep)
/hail-damage-repair-amarillo-tx/       ← duplicate
/hail-damage-roof-repair-amarillo-texas/ ← duplicate
/hail-damage-roof-repair-in-amarillo/  ← duplicate
/hail-damage-roof-replacement-in-amarillo/ ← variant (different intent: replacement vs repair — may keep)
/hail-damage-roofs-in-amarillo/        ← duplicate
/roof-hail-damage-repair-services-in-amarillo-tx/ ← duplicate

Similarly for Lubbock (2 pages), Midland (2 pages), Odessa (2 pages):
/hail-damage-repair-lubbock/
/hail-damage-repair-lubbock-tx/
```

**Effect:** Google splits ranking signals across 7 pages instead of funneling to one. None can accumulate enough authority to rank competitively.

### Problem 2: Homepage Diluting Amarillo Signal

Homepage hero text explicitly lists "Amarillo • Midland • Odessa" and metadata targets all three cities. This sends Google a mixed geographic signal — the homepage appears to target 3 cities simultaneously rather than establishing Amarillo as the primary location.

**Effect:** Homepage doesn't strongly reinforce Amarillo signals, which should flow back from 53 Amarillo spoke pages.

### Problem 3: Missing Service-Level Hub Pages

No hub pages exist for:
- `/hail-damage-repair/` (the highest-value service cluster)
- `/roof-repair/`
- `/roof-replacement/`
- `/storm-damage-repair/`
- `/wind-damage-repair/`
- `/metal-roofing/`
- `/tpo-roofing/`
- `/roof-inspections/`
- `/asphalt-shingle-roofing/`

Spoke pages like `/roof-repair-amarillo/` link up to a non-existent `/roof-repair/` hub (per breadcrumb data). This creates orphaned breadcrumb trails and wastes the PageRank uplift a hub would provide.

### Problem 4: City Hub Page Naming Inconsistency

Current city hub pages use inconsistent naming:
- `/amarillo-texas-roofing/`
- `/midland-tx-roofing/`
- `/lubbock-tx-roofing/`
- `/borger-texas-roofing/`
- `/canyon-tx-roofing/`

Some have full state name ("texas"), some use abbreviation ("tx"), some are inconsistent. This prevents a clean service-areas directory from linking to them uniformly.

---

## Recommended Architecture Patterns

### Pattern 1: Bi-Directional Hub-Spoke Linking

**What:** Every spoke page links up to its two parent hubs (service hub AND city hub). Every hub links down to all its spoke pages. Critical for PageRank flow.

**When to use:** On every city × service page without exception.

**Data flow direction:**
```
Hub page authority flows DOWN to spokes via hub→spoke links
Spoke pages return signals UP to hubs via spoke→hub links
Cross-spoke links (same service, sibling cities) distribute geographic relevance
```

**Implementation:**
```typescript
// In breadcrumb on /roof-repair-amarillo/
<Breadcrumb items={[
  { name: "Home", url: "/" },
  { name: "Roof Repair", url: "/roof-repair/" },        // SERVICE hub
  { name: "Amarillo", url: "/roof-repair-amarillo/" }   // current page
]} />

// In page body — link to city hub
<a href="/amarillo-texas-roofing/">All roofing services in Amarillo</a>
```

### Pattern 2: One Canonical Page Per Service × City

**What:** For any given service+city combination, exactly ONE page is the canonical target. All variants use `canonical` pointing to it, or are consolidated (301 redirect) into it.

**When to use:** Immediately — this is the cannibalization fix.

**Decision tree for duplicates:**
```
Does variant have unique content/intent?
  YES → Keep, assign distinct keyword target, update canonical
  NO  → 301 redirect → canonical page, delete variant
```

**Confidence:** HIGH — confirmed by Google's September 2025 Spam Update guidance, which flagged near-identical city×service pages lacking originality.

### Pattern 3: City Hub as Geographic Authority Consolidator

**What:** Each city gets one comprehensive hub page that: (a) ranks for "{city} roofing" head term, (b) links down to ALL service×city spokes for that city, (c) receives links from the `/service-areas/` index, (d) includes city-specific content (weather, landmarks, local stats).

**When to use:** Create/strengthen for the 14 primary cities.

**Example city hub structure:**
```
/amarillo-texas-roofing/
  Title: "Amarillo TX Roofing | Local Hail Damage Experts | 5 Star"
  H1: Roofing Contractor in Amarillo, TX
  Body:
    - Amarillo-specific content (panhandle weather, hail frequency, neighborhoods)
    - Links to ALL amarillo service pages:
      /roof-repair-amarillo/
      /roof-replacement-amarillo/
      /hail-damage-repair-amarillo/
      /commercial-roofing-amarillo/
      /metal-roofing-amarillo/
      /tpo-roofing-amarillo/
      [etc.]
```

### Pattern 4: Service Hub as Topical Authority Pillar

**What:** Each service type gets a hub page targeting the service keyword without a city suffix. This page: (a) explains the service comprehensively, (b) links down to ALL city variants, (c) links to the parent service category (commercial/residential/methods).

**When to use:** Create missing service hubs as Phase 1 of optimization work.

**Build order (by traffic value):**
1. `/hail-damage-repair/` — highest-value service cluster (West Texas market)
2. `/roof-repair/` — broad head term, 15 spoke pages orphaned without hub
3. `/roof-replacement/` — high commercial intent
4. `/storm-damage-repair/` — seasonal high-volume
5. `/metal-roofing/` — premium service, high margin
6. `/wind-damage-repair/` — panhandle-specific, differentiator
7. `/tpo-roofing/` — commercial niche authority
8. `/roof-inspections/` — top-of-funnel / insurance funnel entry
9. `/asphalt-shingle-roofing/` — residential volume

---

## Data Flow: How PageRank Should Move

### Current (Broken) Flow
```
Homepage → services/ → commercial-roofing/ → [dead end, no city links visible]
Homepage → [no links to city hubs]
Spoke pages → breadcrumb to /hail-damage-repair/ [doesn't exist — 404]
7 hail pages compete → zero consolidation
```

### Target Flow
```
Homepage (Amarillo-focused)
    ↓ nav links
Services/ ──────────────────────── Service-Areas/
    ↓                                    ↓
commercial-roofing/   residential/    amarillo-texas-roofing/ (city hub)
hail-damage-repair/   metal-roofing/  midland-tx-roofing/ (city hub)
roof-repair/          [etc.]          [14 city hubs]
    ↓                    ↓                  ↓
hail-damage-repair-amarillo/ ← ← ← ← ← ← ↓ (cross-linked)
hail-damage-repair-midland/
[city × service matrix pages]
    ↓ (spoke-to-hub backlinks)
hail-damage-repair/ ← ← receives authority from all 14 city pages
    ↓
Homepage ← receives Amarillo-consolidated authority
```

### Internal Links Component: Current vs Ideal Behavior

**Current `InternalLinks` behavior:**
- Links same service to 4 nearby cities (good: spoke→sibling)
- Links other services in same city (good: cross-service internal linking)
- Does NOT link up to service hub or city hub (missing: spoke→hub)

**Required addition to `InternalLinks`:**
```typescript
// Add hub links section to InternalLinks component
<div>
  <h3>More Roofing Services in {cityInfo.name}</h3>
  <a href={`/${currentService}/`}>All {serviceData[currentService].name} Services</a>
  <a href={`/${currentCity}-texas-roofing/`}>All Roofing in {cityInfo.name}</a>
</div>
```

---

## Recommended Project Structure (File System)

```
app/
├── page.tsx                    # Homepage — Amarillo-focused ONLY
├── services/                   # Tier 1A: Service catalog hub
├── service-areas/              # Tier 1B: Geographic hub directory
│
├── [MISSING — create these service hubs]
├── hail-damage-repair/         # Tier 1C: Highest-value service hub
├── roof-repair/                # Tier 1A spoke-target hub
├── roof-replacement/           # Tier 1A spoke-target hub
├── storm-damage-repair/        # Tier 1A spoke-target hub
├── metal-roofing/              # Tier 1A spoke-target hub
├── wind-damage-repair/         # Tier 1A spoke-target hub
├── tpo-roofing/                # Tier 1A spoke-target hub
├── roof-inspections/           # Tier 1A spoke-target hub
├── asphalt-shingle-roofing/    # Tier 1A spoke-target hub
│
├── [KEEP — these are good Tier 2 spokes]
├── roof-repair-amarillo/       # Tier 2: service × city canonical
├── roof-repair-midland/        # Tier 2: service × city canonical
├── hail-damage-repair-amarillo/ # Tier 2: CANONICAL — consolidate all hail-amarillo variants into this
├── hail-damage-repair-midland/  # Tier 2: CANONICAL
├── [clean city × service matrix]
│
├── [CONSOLIDATE — redirect these into canonicals]
├── hail-damage-repair-amarillo-tx/       → /hail-damage-repair-amarillo/
├── hail-damage-roof-repair-in-amarillo/  → /hail-damage-repair-amarillo/
├── hail-damage-roof-repair-amarillo-texas/ → /hail-damage-repair-amarillo/
├── hail-damage-roofs-in-amarillo/        → /hail-damage-repair-amarillo/
│
├── [KEEP as Tier 3 — distinct intent]
├── hail-damage-roof-replacement-in-amarillo/ # "replacement" = different from "repair"
│
├── [CONSOLIDATE or noindex — Amarillo variants]
├── commercial-roofing-amarillo-tx/  → /commercial-roofing-amarillo/
├── commercial-roofing-lubbock-texas/ → /commercial-roofing-lubbock/
├── commercial-roofing-midland-texas/ → /commercial-roofing-midland/
├── residential-roofing-amarillo-texas/ → /residential-roofing-amarillo/
├── residential-roofing-amarillo-tx/   → /residential-roofing-amarillo/
│
└── [KEEP — Tier 3 content marketing]
    ├── amarillo-weather-impact-on-roofing/
    ├── budgeting-for-roof-replacement-expenses/
    ├── articles/
    └── blog/
```

---

## City vs. Service Hierarchy Decision

The critical architectural question is: which is the parent — city or service?

**Recommended answer: Parallel hierarchies, not nested.**

Do NOT use `/commercial-roofing/amarillo/` (service-as-parent) or `/amarillo/commercial-roofing/` (city-as-parent) for spoke pages. Both approaches fail because:
1. URLs are already established at `/commercial-roofing-amarillo/` — changing breaks 268 indexed pages
2. Parallel hubs (service hubs + city hubs) both link INTO the same spoke pages
3. Spoke pages serve as the intersection, receiving authority from both hierarchies

**The correct mental model:**
```
Service hub ─────────────────────────────→ speaks to "what service"
                        ↘
City hub ────────────────→  spoke page  ← speaks to "what location"
                        ↗
Homepage ───────────────────────────────→ consolidates brand + primary city
```

This is the semantic cocoon model: the spoke page is reinforced from multiple parent directions, making it stronger than if it had only one parent path.

---

## Cannibalization Prevention Strategy

### Differentiation by Intent Layer

Each page in the matrix must target a distinct intent level. The three-axis matrix:

| Axis | Values | Example Pages |
|------|--------|---------------|
| **Service type** | hail repair / roof repair / roof replacement / commercial / residential / metal / TPO / inspection | `/hail-damage-repair-amarillo/` vs `/roof-repair-amarillo/` |
| **City** | Amarillo (primary) / Midland, Odessa, Lubbock (secondary) / 10 smaller cities (tertiary) | `/hail-damage-repair-amarillo/` vs `/hail-damage-repair-midland/` |
| **Content intent** | Transactional (get a quote) / Informational (how it works) / Educational (cost, materials) | Tier 2 vs Tier 3 |

**Rule:** No two live pages should target the same service × city × intent combination.

### Content Differentiation Requirements (per spoke page)

To avoid Google's September 2025 Spam Update penalties for near-duplicate location pages, each spoke page must include at least 3 city-specific elements:

1. **Local weather data** — "Amarillo averages 8.3 hail days/year" vs "Midland averages 5.1 hail days/year"
2. **Local neighborhood references** — Wolflin, Paramount Terrace (Amarillo) vs Midland Park, Greenwood (Midland)
3. **City-specific FAQ questions** — "Do I need permits in Potter County?" vs "Does Midland require hail damage documentation?"
4. **Local project examples** — real completed jobs in that city
5. **Regional pricing context** — "15-20% less than Dallas metro" vs Permian Basin labor cost differentials

**Confidence:** HIGH — Google's spam guidance explicitly targets "identical templates with only the city name swapped."

---

## Optimization Order (Biggest Impact First)

### Phase 1: Canonicalization — Immediate Signal Consolidation

Fix cannibalization before building anything new. Consolidating 7 Amarillo hail pages into 1 immediately multiplies ranking signals.

**Pages to consolidate (301 redirect):**
```
/hail-damage-repair-amarillo-tx/          → /hail-damage-repair-amarillo/
/hail-damage-roof-repair-in-amarillo/     → /hail-damage-repair-amarillo/
/hail-damage-roof-repair-amarillo-texas/  → /hail-damage-repair-amarillo/
/hail-damage-roofs-in-amarillo/           → /hail-damage-repair-amarillo/
/roof-hail-damage-repair-services-in-amarillo-tx/ → /hail-damage-repair-amarillo/
/hail-damage-repair-lubbock-tx/           → /hail-damage-repair-lubbock/
/hail-damage-repair-midland-tx/           → /hail-damage-repair-midland/
/hail-damage-repair-odessa-tx/            → /hail-damage-repair-odessa/
/commercial-roofing-amarillo-tx/          → /commercial-roofing-amarillo/
/commercial-roofing-lubbock-texas/        → /commercial-roofing-lubbock/
/commercial-roofing-midland-texas/        → /commercial-roofing-midland/
/commercial-roofing-odessa-texas/         → /commercial-roofing-odessa/
/residential-roofing-amarillo-texas/      → /residential-roofing-amarillo/
/residential-roofing-amarillo-tx/         → /residential-roofing-amarillo/
/residential-roofing-lubbock-texas/       → /residential-roofing-lubbock/
/residential-roofing-midland-texas/       → /residential-roofing-midland/
/residential-roofing-odessa-texas/        → /residential-roofing-odessa/
```

**Implementation:** 301 redirects in `netlify.toml` + remove duplicate page.tsx files.

**Expected impact:** Consolidates 17+ diluted pages into clean canonicals. Each canonical page's authority roughly multiplies by the number of variants consolidated.

### Phase 2: Create Missing Service Hub Pages

Creates the Tier 1 infrastructure that currently has orphaned breadcrumbs pointing to 404s.

**Build order:**
1. `/hail-damage-repair/` (highest value — West Texas market signature service)
2. `/roof-repair/` (broad head term, most spokes)
3. `/roof-replacement/` (high commercial intent)
4. `/storm-damage-repair/` (seasonal authority)

Each hub must:
- Target service keyword without city: "hail damage roof repair Texas"
- Link to ALL 14 city variants of that service
- Include schema: `Service` type with 14-city `areaServed` array
- 800-1200 words explaining the service (not thin)

### Phase 3: Fix Homepage City Signal

Refocus homepage on Amarillo only as primary signal.

**Changes:**
- H1: "Amarillo Hail Damage Roofing Experts" (current is fine)
- Subtitle: Change "Amarillo • Midland • Odessa" → "Serving Amarillo & West Texas" (retain geographic hint without equally weighting 3 cities)
- Body sections: Lead with Amarillo-specific content; mention other cities only in service-areas context
- Trust signals: Anchor to Amarillo neighborhoods, local landmarks
- Add explicit links in body to city hub (`/amarillo-texas-roofing/`) and service hub (`/hail-damage-repair/`)

### Phase 4: Strengthen InternalLinks Component

Add hub uplinks to every spoke page without requiring individual page edits.

**Modifications to `InternalLinks` component:**
- Add "Service Hub" link section: "All {service} services" → `/service-hub/`
- Add "City Hub" link section: "All roofing in {city}" → `/city-hub/`
- Current: links sideways (same service, nearby cities) and cross-service (same city)
- Add: links UP the hierarchy (spoke → hub)

### Phase 5: Content Differentiation Audit

Audit highest-traffic spokes for unique local content. Priority:
1. All Amarillo pages (53 pages — primary city)
2. Midland + Odessa (secondary cities — Permian Basin market)
3. Lubbock (university market, different demographics)

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: URL-Suffix Cannibalization

**What people do:** Create `/hail-damage-repair-amarillo/`, then later `/hail-damage-repair-amarillo-tx/` as a "variant" to target a slightly different keyword.

**Why it's wrong:** Google sees two pages competing for the same SERP position. Neither accumulates enough authority to rank. Both lose.

**Do this instead:** One canonical URL per service × city combination. Target keyword variants via on-page content (title, H1, body) on the single canonical page.

### Anti-Pattern 2: Listing All 14 Cities on Homepage

**What people do:** Include "Serving Amarillo, Midland, Odessa, Lubbock, Canyon, Borger, Pampa..." in homepage hero text or footer.

**Why it's wrong:** Dilutes the geographic relevance signal for the primary city (Amarillo). Google can't determine which city is most relevant to this business.

**Do this instead:** Homepage focuses on Amarillo. Service-areas page lists all cities. Each city hub page handles its own geographic authority.

### Anti-Pattern 3: Spoke Pages Without Hub Links

**What people do:** Build 14 city variants of "hail damage repair" but never create a `/hail-damage-repair/` hub page. Spokes have nowhere to funnel authority.

**Why it's wrong:** PageRank accumulates on spoke pages but has nowhere to concentrate. The hub page (which would rank for the head term) never gets built.

**Do this instead:** Build service hubs before (or immediately after) building city spokes. Every breadcrumb trail should resolve to a real page.

### Anti-Pattern 4: Identical City Page Templates

**What people do:** Copy `/roof-repair-amarillo/` and replace "Amarillo" with "Midland" in 14 places.

**Why it's wrong:** Google's September 2025 Spam Update explicitly targeted this. Pages without locally distinct content are filtered from SERPs or ranked minimally.

**Do this instead:** Each city page must include unique local content (weather stats, neighborhoods, local project examples, city-specific FAQs). At minimum 3 city-specific data points per page.

### Anti-Pattern 5: Over-Linking in InternalLinks Section

**What people do:** Link to all 12 services × all 14 cities in the InternalLinks section = 168 links per page.

**Why it's wrong:** Massively dilutes link equity. PageRank split across too many destinations is negligible. Google may interpret as a link farm pattern.

**Do this instead:** Limit to 4 nearby city links (current implementation is correct) + 6 related service links + 2 hub links = 12 total focused links per page.

---

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Google Search Console | Monitor cannibalization via Coverage + Performance reports | Filter by URL prefix per service cluster to spot competing pages |
| netlify.toml | 301 redirect declarations | Use `[[redirects]]` blocks; deploy before removing duplicate pages |
| Next.js `alternates.canonical` | Every page must declare its canonical URL | Already implemented — verify no duplicate pages share a canonical |
| Schema.org `@id` | Each LocalBusiness entity uses unique `@id` per page URL | Verify spoke pages don't accidentally reuse hub `@id` |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| InternalLinks ↔ page data | Component receives `currentCity` + `currentService` props | No changes to prop interface needed for hub-link addition |
| Breadcrumb ↔ hub pages | Breadcrumb assumes hub pages exist (e.g., `/roof-repair/`) | Hub pages must be created before breadcrumb links become valid |
| netlify.toml ↔ app/ pages | Redirects must be deployed before duplicate app/ pages are deleted | Order: add redirect → deploy → confirm → delete page.tsx |
| Homepage ↔ service-areas | Homepage should link explicitly to `/service-areas/` and `/amarillo-texas-roofing/` | Currently implied through nav only |

### Build Order Dependencies

```
Phase 1 (Canonicalization)
  └── Add redirects to netlify.toml
      └── Deploy to Netlify
          └── Delete duplicate page.tsx files

Phase 2 (Service Hub Pages) — can run in parallel with Phase 1
  └── Create /hail-damage-repair/page.tsx
      └── Update breadcrumbs on all hail-damage-repair-{city}/ pages to link to hub
          └── Verify no 404s in breadcrumb chain

Phase 3 (Homepage fix) — run after Phase 2 hubs exist
  └── Update homepage H1/hero text
      └── Add explicit links to service hubs and Amarillo city hub

Phase 4 (InternalLinks enhancement) — run after Phase 3
  └── Modify InternalLinks component to add hub uplinks
      └── Single component change propagates to ALL 268 pages automatically

Phase 5 (Content differentiation) — ongoing
  └── Audit Amarillo pages first
      └── Then Midland/Odessa
          └── Then remaining cities
```

---

## Scalability Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Current (14 cities × 10 services = 140 core spokes) | Clean up cannibalization, add missing hubs — no structural change needed |
| Expansion to 20+ cities | Add city hub pages first, then service × city spokes; update InternalLinks `cityData` record |
| Adding new services | Create service hub, then generate city spokes; update InternalLinks `serviceData` record |
| 300+ pages | Implement XML sitemap segmentation (service sitemap, city sitemap, article sitemap) |

---

## Sources

- [Hub, Wheel & Spoke Local SEO Strategy — Ciphers Digital](https://www.ciphersdigital.com/hub-wheel-spoke-local-seo-strategy/) — MEDIUM confidence (single source)
- [How to Target Multiple Cities Without Hurting Your SEO — Search Engine Journal](https://www.searchenginejournal.com/seo-target-multiple-cities/383000/) — HIGH confidence (SEJ + cross-verified with Google guidance)
- [Local Landing Pages That Rank: City/Neighborhood Page Architecture — Telescope Mapping](https://telescopemapping.com/blog/local-landing-page-architecture/) — MEDIUM confidence (specialist source)
- [Topic Clusters Guide — Search Engine Land](https://searchengineland.com/guide/topic-clusters) — HIGH confidence (authoritative SEO publication)
- [Content Clusters for Roofers — ContentWorks.ai](https://contentworks.ai/roofing-content-clusters/) — MEDIUM confidence (industry-specific)
- [Internal Linking Strategy 2026 — Koanthic](https://koanthic.com/en/internal-linking-strategy-complete-seo-guide-2026/) — MEDIUM confidence
- [Hub-and-Spoke Taxonomy Design — Bruce Clay](https://www.bruceclay.com/quick-solutions/how-do-i-design-a-hub-and-spoke-taxonomy-for-better-topical-authority/) — HIGH confidence (established SEO authority)
- [Google September 2025 Spam Update — near-duplicate location page guidance](https://www.webapex.com.au/blog/duplicate-content/) — HIGH confidence (multiple sources confirm)
- [Why Content Clusters Help Roofers Rank — ContentWorks](https://contentworks.ai/roofing-content-clusters/) — MEDIUM confidence
- Direct site audit: `sites/5-star-roofing/app/` directory structure + page.tsx files

---

*Architecture research for: 5 Star Roofing — 268-page local service site IA optimization*
*Researched: 2026-02-20*
