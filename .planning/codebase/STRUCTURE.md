# Codebase Structure

**Analysis Date:** 2026-02-20

## Directory Layout

```
sites/5-star-roofing/
├── app/                       # Next.js App Router pages (246 total)
│   ├── layout.tsx             # Root layout: header, footer, GA4, tracking
│   ├── page.tsx               # Home page (/)
│   ├── globals.css            # All component classes + Tailwind layers
│   ├── {location}/page.tsx    # Hub pages (residential-roofing/, services/, etc.)
│   ├── {service}-{city}/      # Spoke pages (roof-repair-amarillo/, etc.)
│   ├── blog/                  # Blog hub and article pages
│   ├── contact/               # Contact page with form
│   ├── reviews/               # Reviews page
│   ├── gallery/               # Project gallery
│   ├── about/                 # About us page
│   └── articles/              # Educational articles
├── components/                # React components (18 total)
│   ├── AnimatedCounter.tsx    # Counter animation for metrics
│   ├── Breadcrumb.tsx         # Navigation breadcrumb + schema
│   ├── FadeIn.tsx             # Fade/slide reveal animation
│   ├── FloatingCTA.tsx        # Floating call-to-action button
│   ├── HighLevelForm.tsx      # Lead form (HighLevel CRM integration)
│   ├── InteractiveCard.tsx    # Hoverable card component
│   ├── InternalLinks.tsx      # Related links (city+service combinations)
│   ├── MobileMenu.tsx         # Mobile navigation dropdown
│   ├── OptimizedBackground.tsx # Background image wrapper
│   ├── OptimizedImage.tsx     # Image with lazy loading
│   ├── ParallaxSection.tsx    # Parallax scroll effect
│   ├── PhoneClickTracker.tsx  # GA4 phone click tracking
│   ├── ScrollProgress.tsx     # Page scroll progress bar
│   ├── StaggerContainer.tsx   # Stagger animations for children
│   ├── StickyContactBar.tsx   # Sticky bottom contact bar
│   └── ui/                    # Radix UI primitives
│       ├── accordion.tsx      # Accordion component
│       ├── badge.tsx          # Badge/tag component
│       ├── button.tsx         # Button primitive
│       ├── card.tsx           # Card primitive
│       └── tabs.tsx           # Tabs component
├── lib/                       # Business logic + utilities
│   ├── constants.ts           # BUSINESS_INFO, NAV_ITEMS config
│   ├── schema-templates.ts    # Schema.org markup generators
│   └── utils.ts               # Utility functions (cn() for class merging)
├── public/                    # Static assets
│   ├── images/                # 1,670+ optimized images (AVIF/WebP)
│   │   ├── completed/         # Project photos
│   │   ├── hero-*.webp        # Hero section backgrounds
│   │   └── {city}-*.jpg       # Location-specific images
│   ├── photos/                # Additional photos
│   ├── logo.png               # Brand logo (111×48px)
│   ├── favicon.png            # Browser tab icon
│   ├── sitemap.xml            # 268 URLs for search crawlers
│   └── robots.txt             # Crawler directives
├── next.config.ts             # Next.js config (static export, trailing slashes)
├── tailwind.config.ts         # Tailwind theme + brand colors
├── package.json               # Dependencies (Next.js 15, Framer Motion, Radix)
├── tsconfig.json              # TypeScript config with path aliases (@/)
├── .netlify/                  # Netlify build config
├── netlify.toml               # Deployment config + 301 redirects
├── .prettierrc                # Code formatting (if present)
└── scripts/                   # Site utilities (if any)
```

## Directory Purposes

**app/:**
- Purpose: Next.js App Router pages - each route gets its own directory with `page.tsx`
- Contains: Server-rendered React components, metadata exports, embedded JSON-LD schema
- Key files: `layout.tsx` (wrapper for all pages), `page.tsx` (home), 246 page files
- Pattern: `app/{slug}/page.tsx` maps to `/{slug}/` URL

**components/:**
- Purpose: Reusable React components used across pages
- Contains: Animation wrappers, UI primitives, page-level layout components, tracking utilities
- Key files: `FadeIn.tsx` (most used), `InternalLinks.tsx` (core SEO component), `ui/*` (Radix primitives)
- Pattern: Client-side and server components marked with `'use client'` directive

**lib/:**
- Purpose: Shared configuration and template utilities
- Contains: Business constants (phone, address, hours, service areas), schema generation functions, utilities
- Key files: `constants.ts` (BUSINESS_INFO used on every page), `schema-templates.ts` (generates SEO markup)
- Pattern: No external API calls; all data is hardcoded for static generation

**public/:**
- Purpose: Static assets served directly (images, sitemaps, robots.txt)
- Contains: 1,670+ optimized images, XML sitemaps, brand assets
- Key files: `sitemap.xml` (268 URLs), `images/` (organized by type), `logo.png` (44KB)
- Pattern: Static export requires `unoptimized: true` images; Next.js doesn't process at build

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout wrapping all pages (persistent header/footer, GA4, tracking)
- `app/page.tsx`: Home page (/)
- `app/contact/page.tsx`: Contact form page
- `app/blog/page.tsx`: Blog hub page
- `app/{service}-{city}/page.tsx`: Spoke pages (examples: `roof-repair-amarillo/page.tsx`, `commercial-roofing-midland/page.tsx`)

**Configuration:**
- `next.config.ts`: Enables static export (`output: "export"`), disables image optimization (`unoptimized: true`), enables trailing slashes
- `tailwind.config.ts`: Brand color definitions (gold, brown, gray palette), component extensions
- `tsconfig.json`: Path alias `@/` points to root directory for imports (`@/components/FadeIn`)
- `netlify.toml`: Deployment settings, base directory, 301 redirects for duplicate pages

**Core Logic:**
- `lib/constants.ts`: `BUSINESS_INFO` object with phone, address, hours; `NAV_ITEMS` array for navigation menus
- `lib/schema-templates.ts`: Functions `generateLocalBusinessSchema()`, `generateFAQPageSchema()` for SEO markup
- `components/InternalLinks.tsx`: Hard-coded `cityData` map of cities with geographic proximity for smart linking

**Testing:**
- Not present. No test directory. Testing is manual QA.

## Naming Conventions

**Files:**
- Pages: `page.tsx` (required by Next.js App Router)
- Components: PascalCase (e.g., `FadeIn.tsx`, `PhoneClickTracker.tsx`)
- Utilities: camelCase (e.g., `schema-templates.ts`, `constants.ts`)
- Directories: kebab-case (e.g., `app/roof-repair-amarillo/`, `app/blog/`)
- Styles: Global only in `globals.css`; no separate .css files per component

**Directories:**
- Pages: `{service}-{city}` format (e.g., `roof-repair-amarillo`, `commercial-roofing-midland`)
- Service hubs: `{service}` (e.g., `residential-roofing/`, `commercial-roofing/`)
- Location hubs: `{city}-tx-roofing` or `{city}-roofing` (e.g., `amarillo-roofing/`, `lubbock-tx-roofing/`)

**Variables & Functions:**
- Constants: UPPER_SNAKE_CASE (e.g., `BUSINESS_INFO`, `NAV_ITEMS`)
- Functions: camelCase (e.g., `generateLocalBusinessSchema()`, `cn()`)
- React props: camelCase (e.g., `className`, `delay`, `direction`)
- Types: PascalCase (e.g., `CityData`, `ServiceData`, `FadeInProps`)

**CSS Classes:**
- Utility classes: Tailwind prefixed (e.g., `.bg-brand-gold`, `.text-gray-primary`, `.hover:scale-105`)
- Component classes: In `globals.css` under `@layer components` (e.g., `.btn-primary`, `.container-custom`, `.card`)
- Semantic names: `.hero`, `.hero-title`, `.service-card`, `.cta-section`

## Where to Add New Code

**New Service Location Page (e.g., `/roof-repair-lubbock/`):**
- **Primary code:** Create `app/roof-repair-lubbock/page.tsx` with:
  - Metadata export (title, description, canonical URL)
  - Imports: `FadeIn`, `Breadcrumb`, `HighLevelForm`, `StickyContactBar`, `InternalLinks`
  - Hero section with background image
  - Location-specific content blocks
  - FAQ accordion with FAQs
  - Schema blocks (LocalBusiness, RoofingContractor, FAQPage)
- **Tests:** None (no test directory exists)
- **Reference:** Copy structure from `app/roofing-amarillo-tx/page.tsx` (1,234 lines)
- **Schema:** Use functions from `lib/schema-templates.ts`
- **City data:** Add to `cityData` record in `components/InternalLinks.tsx`

**New Component (e.g., `TestimonialCard`):**
- **Location:** `components/TestimonialCard.tsx` (not `components/ui/` unless it's a Radix primitive)
- **Pattern:** Export single default component with TypeScript props interface
- **Imports:** Use path alias: `import { FadeIn } from '@/components/FadeIn'`
- **Styling:** Use Tailwind classes; no separate CSS file
- **Animation:** Wrap in `FadeIn` if scroll-triggered reveal needed

**New Radix UI Primitive (e.g., `Dialog`):**
- **Location:** `components/ui/dialog.tsx`
- **Pattern:** Follow existing pattern in `components/ui/accordion.tsx` (export styled Radix primitives)
- **Styling:** Tailwind classes only, no CSS-in-JS

**New Configuration/Constant:**
- **Location:** `lib/constants.ts` if site-wide (preferred) or add to page metadata if page-specific
- **Pattern:** Hard-code values; no environment variables or dynamic loading

**New Blog Article:**
- **Location:** Create `app/blog/{article-slug}/page.tsx`
- **Pattern:** Import from `components/`, add title/description metadata, structure content with `<h2>`, `<p>`, bullet lists
- **Schema:** Include `NewsArticle` or `Article` type JSON-LD

**New Static Asset:**
- **Location:** `public/images/{category}/` (organize by type: completed, hero, location, etc.)
- **Format:** Use AVIF or WebP for optimization; WebP fallback
- **Reference:** Use relative paths in `<img>` tags: `src="/images/hero-bg.webp"`

## Special Directories

**public/images/:**
- Purpose: All product/location/hero images
- Generated: No (manually uploaded or synced from external source)
- Committed: Yes (binary images in git)
- Organization: Subdirectories by category (completed/, hero/, {city}/, etc.)

**.next/:**
- Purpose: Next.js build cache
- Generated: Yes (created by `npm run build`)
- Committed: No (in .gitignore)

**out/:**
- Purpose: Static HTML export output
- Generated: Yes (created by `npm run build` due to `output: "export"`)
- Committed: No (in .gitignore)
- Used: Deployed to Netlify directly from `out/`

**.netlify/:**
- Purpose: Netlify build configuration and cache
- Generated: Yes (by Netlify CI/CD)
- Committed: Partially (.netlify/functions-internal managed by Netlify)

**node_modules/:**
- Purpose: Installed dependencies
- Generated: Yes (by `npm install`)
- Committed: No (in .gitignore)

---

*Structure analysis: 2026-02-20*
