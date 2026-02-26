# Phase 9: Image Optimization - Research

**Researched:** 2026-02-20
**Domain:** Image asset management, alt text SEO, Cloudflare R2 migration
**Confidence:** HIGH

## Summary

The 5 Star Roofing site has 216 pages (268+ routes), all of which have at least one background image. However, only 18 pages contain inline `<img>` tags -- the remaining 172 pages with background images but no inline images represent a significant content-image gap, especially for pages that discuss specific materials, damage types, and completed work.

The site uses a mixed image hosting strategy: ~81 inline `<img>` tags point to R2 (`pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev`), ~180 background images point to R2, and 24 inline `<img>` tags still point to local `/images/` paths (10 unique files). Additionally, 181 schema.org `"image"` properties point to `5starroofingpros.com/images/` URLs, and 5 of those referenced files do not exist in the repository (though they do respond with HTTP 200 on production, suggesting legacy deployment artifacts). There are 1,633 image files tracked in git (4.6 GB total in `public/images/` including untracked subdirectories) -- the vast majority are unreferenced legacy files from WordPress migration.

**Primary recommendation:** Migrate the 10 remaining local image references to R2 URLs, fix all 5 broken/missing schema image references, audit and rewrite generic alt text across all 106 image tags, and add inline contextual images to the ~172 pages that currently have only a hero background image.

## Current State Analysis

### Image Reference Breakdown (all 216 pages)

| Type | Count | Source | Status |
|------|-------|--------|--------|
| Inline `<img>` with R2 URL | 81 | `pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev` | OK |
| Inline `<img>` with local URL | 24 (10 unique files) | `/images/*.jpg` | Must migrate to R2 |
| Background image with R2 URL | 180 | Same R2 bucket | OK |
| Background image with local URL | 3 | `/images/cover-background-*.jpg` | Must migrate to R2 |
| Schema.org `"image"` with production URL | 165 | `5starroofingpros.com/images/` | Must migrate to R2 |
| Schema.org `"image"` with logo | 110 | `5starroofingpros.com/logo.png` | Evaluate |
| Logo `<img>` tag | 1 | `/logo.png` | Must migrate to R2 |

### R2 Bucket Details

- **Base URL:** `https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev`
- **Verified accessible:** YES (HTTP 200, correct content-type)
- **Image categories on R2:**
  - `images/completed/` -- 99 references (completed project photos)
  - `images/heroes/` -- 57 references (hero background images)
  - `images/hail-damage/` -- 49 references (damage documentation)
  - `images/commercial/` -- 19 references (commercial projects)
  - `images/shingle/` -- 18 references (residential shingle work)
  - `images/metal/` -- 18 references (metal roofing)
  - `images/TPO1-1280w.webp` -- 1 reference (root-level)

### Local Images Still in Repository (Must Migrate)

**10 unique files referenced in `<img>` src attributes:**

| File | Used in Pages | Exists Locally |
|------|--------------|----------------|
| `SteelRoofing-1280w.jpg` | 11 pages | YES (216K) |
| `TPO1-1280w.jpg` | 3 pages | YES (144K) |
| `EPDM1-1280w.jpg` | 2 pages | YES (148K) |
| `EPDM2-1280w.jpg` | 2 pages | YES (304K) |
| `TPO2-1280w.jpg` | 1 page | YES (164K) |
| `TPO3.jpg` | 1 page | YES (48K) |
| `Concretetile-1280w.jpg` | 1 page | YES (176K) |
| `EPDM3-1280w.jpg` | 1 page | YES (344K) |
| `PVC1-1280w.jpg` | 1 page | YES (148K) |
| `hero.jpg` | 0 pages (unreferenced) | MISSING |

**3 local background images:**
- `cover-background-roofing-sunset-1024x683.jpg` -- 2 blog pages (EXISTS, 62K)
- `tpo-roof-1.jpg` -- 1 `.new` file (not active)

### Broken/Missing Schema Images

**5 files referenced in schema but MISSING from repo (exist on production as legacy):**

| File | Schema References | Production Status |
|------|------------------|-------------------|
| `5star-logo.png` | 95 pages | HTTP 200 (legacy) |
| `residential-roofing-5.jpeg` | 14 pages | HTTP 200 (legacy) |
| `asphalt-shingles-2.jpg` | 4 pages | HTTP 200 (legacy) |
| `roof-inspection-2.jpg` | 4 pages | HTTP 200 (legacy) |
| `roof-repair-3.jpg` | 4 pages | HTTP 200 (legacy) |
| `5-star-with-letters-1.png` | 1 page | HTTP 200 (legacy) |

These exist on the deployed Netlify site but not in the Git repository -- they are likely leftover from a previous WordPress migration or early deployment. They work now but are fragile (any redeployment from clean state would break them).

### Image Format Distribution (public/images/ recursive)

| Format | File Count | Total Size |
|--------|-----------|------------|
| .jpg | 13,538 | 107M |
| .webp | 13,415 | 113M |
| .avif | 497 | 64M |
| .jpeg | 40 | 824K |
| .png | 23 | 756K |

Most of `public/images/` (1,667 top-level files + 25,834 in subdirectories) are legacy WordPress exports that are NOT referenced in any code. The `jobs/` subdirectory (25,834 files) is already gitignored.

### Alt Text Quality Assessment

**Current state of alt attributes across 106 inline images:**

**Good examples (keyword-rich, contextual):**
- `"5 Star Commercial Roofing team in Amarillo Texas - Professional roofing contractors and crew - Locally owned and operated"`
- `"Roofing services in Amarillo, TX - Severe hail damage on roof - Insurance claim documentation - 5 Star Roofing"`
- `"TPO commercial roofing installation - White membrane flat roof system - 5 Star Commercial Roofing"`

**Generic/poor examples (needs improvement):**
- `"Metal Roofing"` -- too short, no location, no context
- `"EPDM Rubber Roofing"` -- generic material name only
- `"Commercial Roofing"` -- generic
- `"Free Roof Inspections"` -- service name only, no location
- `"Hail Damage Roof Repair"` -- generic service
- `"Asphalt Shingle Roofing"` -- material only
- `"Insurance Claims Help"` -- too vague
- `"TPO Commercial Roofing"` -- generic

**Location-specific but thin:**
- `"Metal roof systems for Bushland TX"` -- better but lacks specificity
- `"Hail damage repair services for Wildorado TX"` -- template-like
- `"professional roofing service for Claude TX"` -- lowercase "professional", template

**Estimated quality breakdown:**
- HIGH quality (descriptive, keyword-rich, contextual): ~25%
- MEDIUM quality (has location OR service, but generic): ~40%
- LOW quality (1-3 word generic labels): ~35%

### Content-Image Gap Analysis

**172 pages have ONLY a hero background image and NO inline `<img>` tags.** These are primarily location x service pages (e.g., `metal-roofing-midland`, `hail-damage-repair-lubbock`, `roof-repair-amarillo`).

These pages discuss specific topics that would benefit from inline images:
- **127 pages** mention "hail damage" in content
- **100 pages** mention "TPO" roofing
- Many pages describe specific materials (metal, shingles, EPDM) without showing them
- FAQ answers reference visible damage signs without supporting images

### Image Duplication

**Most reused images:**

| Image | Times Used | Issue |
|-------|-----------|-------|
| `SteelRoofing-1280w.jpg` (local) | 11 pages | Same generic metal roofing photo |
| `completed-amarillo-4-1280w.jpg` (R2) | 3 pages | Reused across unrelated pages |
| `commercial-pampa-4-1280w.jpg` (R2) | 3 pages | Reused |
| `TPO1-1280w.jpg` (local) | 3 pages | Reused |

Cross-page duplication is moderate. The bigger concern is within-page duplication (same image appearing in hero AND content) which needs validation during build output scanning.

## Architecture Patterns

### R2 URL Pattern
```
https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/{category}/{name}-{number}-{width}w.{ext}
```

**Categories:** `completed/`, `heroes/`, `hail-damage/`, `commercial/`, `shingle/`, `metal/`
**Widths:** `1280w` (inline images), `1920w` (hero backgrounds)
**Formats:** `.webp` (heroes, hail-damage), `.jpg` (completed, commercial, shingle)

### Gallery Page Pattern (good reference)
The `app/gallery/page.tsx` demonstrates the recommended pattern:
```typescript
const R2_CDN = "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev";

const commercialImages = [
  { url: `${R2_CDN}/images/commercial/commercial-pampa-1-1280w.jpg`, caption: "Commercial TPO installation - Pampa, TX" },
  // ...
];
```

### Page Structure for Inline Images
Pages with inline images follow this pattern:
```tsx
<img
  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-4-1280w.jpg"
  alt="Descriptive keyword-rich alt text including service, location, and business name"
  className="w-full h-48 object-cover rounded-lg mb-4"
  loading="lazy"
/>
```

### Background Image Pattern
```tsx
<section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
  style={{
    backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
```

Note: Background images have NO alt text by definition. For accessibility and SEO, adding inline images alongside or instead of background images would improve the site.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Broken URL detection | Manual curl checks | Build output scan of `out/` directory -- grep all HTML for image URLs, batch HEAD request validation | Catches both source-level and runtime-generated URLs |
| Alt text generation | Manual per-image writing | Template system based on page context (service + city + business name) | 172+ pages need consistent, contextual alt text |
| Duplicate detection | Visual comparison | Hash or URL-based dedup across rendered HTML | Need to catch same-page duplicates in built output |
| Image inventory | Manual listing | Script that extracts all image refs from `app/` (src, backgroundImage, schema image) | Need machine-readable inventory for validation |

## Common Pitfalls

### Pitfall 1: Background Images Have No Alt Text
**What goes wrong:** Hero sections use CSS `backgroundImage` which is invisible to screen readers and search engines.
**Why it happens:** Background images are decorative by CSS spec, but these carry semantic content (roofing work photos).
**How to avoid:** Where SEO value exists, add a hidden `<img>` tag or use `<img>` with absolute positioning instead of CSS background.
**Warning signs:** Pages where the only image is a background image.

### Pitfall 2: Schema Image URLs Breaking on Clean Deploy
**What goes wrong:** 122+ schema `"image"` properties point to `5starroofingpros.com/images/` with files not in the repo.
**Why it happens:** Legacy WordPress images were deployed but never committed to the Git repo.
**How to avoid:** Upload all schema-referenced images to R2 and update schema URLs.
**Warning signs:** Any `"image"` URL in schema that doesn't match R2 pattern.

### Pitfall 3: Keyword-Stuffed Alt Text
**What goes wrong:** Alt text becomes a keyword dump instead of describing the image.
**Why it happens:** SEO focus overrides accessibility purpose.
**How to avoid:** Alt text should describe what the image SHOWS, enriched with one location and one service keyword. Cap at ~125 characters.
**Warning signs:** Alt text that reads like a meta description rather than an image description.

### Pitfall 4: Same Image on Same Page
**What goes wrong:** Hero background uses same R2 image as an inline image below it.
**Why it happens:** Limited image inventory leads to reuse.
**How to avoid:** Ensure hero image URL differs from any inline image URL on the same page.
**Warning signs:** Visual repetition, same filename appearing in both backgroundImage and src on one page.

### Pitfall 5: 4.6 GB Image Directory Bloat
**What goes wrong:** `public/images/` contains 27,516 files (4.6 GB) mostly from WordPress migration, tracked in git.
**Why it happens:** Legacy migration dumped all WordPress media library into public.
**How to avoid:** After migrating the 10 referenced files to R2, the remaining 1,623 unreferenced files in git can be removed. The `jobs/` directory (25,834 files) is already gitignored.
**Warning signs:** Slow git clone, bloated deployments.

## Validation Approach

### Automated Broken Image Check (post-build)
```bash
# Build the site
npm run build

# Extract all image URLs from built HTML
grep -roh 'src="[^"]*\.\(jpg\|jpeg\|png\|webp\|avif\|svg\)"' out/ | sort -u > /tmp/image-urls.txt
grep -roh "url([^)]*\.\(jpg\|jpeg\|png\|webp\|avif\))" out/ | sort -u >> /tmp/image-urls.txt

# Check each URL (local or remote)
while read url; do
  if [[ "$url" == http* ]]; then
    curl -sf -o /dev/null "$url" || echo "BROKEN: $url"
  else
    path="out${url}"
    [ -f "$path" ] || echo "MISSING: $url -> $path"
  fi
done < /tmp/image-urls.txt
```

### Alt Text Audit Script
```bash
# Find all img tags without alt, or with very short alt
grep -rn '<img ' app/ --include="*.tsx" | grep -v 'alt="' # missing alt
grep -roh 'alt="[^"]*"' app/ | awk -F'"' 'length($2) < 20' # short alt
```

## Scope of Work Summary

### Plan 09-01: R2 Compliance and Broken URL Audit
1. Upload 10 local image files to R2 bucket under appropriate categories
2. Replace 24 local `<img>` src references with R2 URLs
3. Replace 3 local background image references with R2 URLs
4. Upload missing schema images to R2 (or find R2 equivalents)
5. Update 165+ schema `"image"` properties to R2 URLs
6. Update logo reference to R2 URL
7. Validate all image URLs post-build (zero broken)
8. Remove unreferenced images from git tracking

### Plan 09-02: Alt Text Audit and Rewrite
1. Inventory all ~106 inline `<img>` alt attributes
2. Rewrite ~35-40 generic/short alt texts with keyword-rich descriptions
3. Template: `"{What image shows} in {City} TX - {Service context} - 5 Star Commercial Roofing"`
4. Validate all alt texts are descriptive, 20-125 characters, contextually relevant
5. No duplicate alt text on same page

### Plan 09-03: Contextual Inline Images
1. Identify highest-value pages for inline images (hub pages, high-traffic spokes)
2. Add 1-2 inline `<img>` tags per page where content discusses specific materials/damage
3. Match image category to content (hail-damage photos on hail pages, metal photos on metal pages, etc.)
4. Add keyword-rich alt text to all new images
5. Ensure no duplication with hero background image
6. Focus on pages that reference materials without showing them

## Open Questions

1. **R2 bucket write access:** Does the development workflow have CLI/API access to upload the 10 local files to R2? If not, they need to be uploaded manually via Cloudflare dashboard.
   - What we know: Public read access works. Upload method unknown.
   - Recommendation: Verify R2 write access before Plan 09-01.

2. **Full R2 inventory:** How many total images exist in the R2 bucket? The site references ~64 unique R2 URLs, but the bucket likely has more that could be used for Plan 09-03.
   - What we know: Categories exist for completed, heroes, hail-damage, commercial, shingle, metal.
   - Recommendation: List R2 bucket contents to build a full image inventory.

3. **Legacy image cleanup:** Can the ~1,623 unreferenced tracked images be safely deleted from git after R2 migration?
   - What we know: They are not referenced in any code. Some may be served by production via legacy URLs.
   - Recommendation: After migrating all references to R2, verify no external links point to these before removal.

## Sources

### Primary (HIGH confidence)
- Direct filesystem analysis of `app/`, `components/`, `public/images/` directories
- `grep` extraction of all `src=`, `backgroundImage:`, and `"image":` references
- `curl -sI` verification of R2 URL accessibility (HTTP 200)
- `curl -sI` verification of production schema image accessibility
- `.gitignore` analysis for image tracking policy
- `REQUIREMENTS.md` for IMG-01 through IMG-08 specifications
- `ROADMAP.md` for phase dependencies and success criteria

### Secondary (MEDIUM confidence)
- Alt text quality assessment based on manual review of all ~80 unique alt strings
- Content-image gap estimate based on grep for material/damage keywords vs img presence

## Metadata

**Confidence breakdown:**
- Current state inventory: HIGH -- direct filesystem and code analysis
- R2 URL patterns: HIGH -- verified with HTTP requests
- Alt text quality: HIGH -- reviewed all unique alt strings
- Content-image gap: MEDIUM -- based on keyword grep, not manual page review
- Schema image fragility: HIGH -- verified missing files + production availability
- Cleanup scope (unreferenced images): MEDIUM -- sample-based, not exhaustive

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (stable -- image URLs don't change frequently)
