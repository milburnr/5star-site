# Architecture

**Analysis Date:** 2026-02-20

## Pattern Overview

**Overall:** Next.js 15 static site generation (SSG) with client-side animations and interactivity layers

**Key Characteristics:**
- Static HTML export via Next.js App Router (`output: "export"` in `next.config.ts`)
- Hub-and-spoke page structure: central service/location hubs with location × service spoke pages
- Component-driven UI with Framer Motion animations for engagement
- Schema.org JSON-LD markup on every page for SEO
- Lazy-loaded tracking and widgets (GA4, HighLevel chat) to preserve page performance

## Layers

**Presentation Layer:**
- Purpose: Server-rendered React components and client-side interactive elements
- Location: `components/` directory (16 total components)
- Contains: Animation wrappers (`FadeIn`, `StaggerContainer`, `ParallaxSection`), UI primitives (`Accordion`, `Card`, `Button`), page-level components (`Breadcrumb`, `InternalLinks`, `FloatingCTA`)
- Depends on: `framer-motion`, Radix UI, Tailwind CSS, `react` 19+
- Used by: Every page in `app/` routes

**Styling Layer:**
- Purpose: Centralized Tailwind CSS configuration and component class definitions
- Location: `app/globals.css` (all component classes), `tailwind.config.ts` (theme colors/theme)
- Contains: `@layer components` definitions (buttons, cards, sections), custom CSS properties (depth system, shadow system), brand color palette
- Depends on: Tailwind CSS 3.4+
- Used by: All React components and HTML markup

**Data/Configuration Layer:**
- Purpose: Business constants, schema generation utilities, page metadata
- Location: `lib/` directory
  - `constants.ts`: `BUSINESS_INFO`, `NAV_ITEMS` - business name, phone, address, service areas
  - `schema-templates.ts`: Functions to generate Schema.org markup (LocalBusiness, FAQ, ServiceArea)
  - `utils.ts`: Utility functions
- Depends on: TypeScript types only (no runtime dependencies)
- Used by: Page components and server-side metadata generation

**Page Content Layer:**
- Purpose: Individual page implementations with routed content
- Location: `app/` directory (246 page.tsx files)
- Contains: Page metadata (via Next.js `Metadata` export), JSX templates with embedded schema, hero sections, content blocks, CTAs, internal links
- Depends on: Presentation layer components, schema templates, constants
- Used by: Next.js App Router for rendering

**Static Assets:**
- Purpose: Images, logos, sitemaps, robots.txt for SEO
- Location: `public/` directory
  - `images/`: 1,670+ product/location/hero images (AVIF/WebP optimized)
  - `logo.png`, `favicon.png`: Brand assets
  - `sitemap.xml`: Crawlable page index
  - `robots.txt`: Crawler directives
- Depends on: File system
- Used by: Page components and browser requests

## Data Flow

**Page Render Flow (Server → Browser):**

1. Browser requests URL (e.g., `/roof-repair-amarillo/`)
2. Next.js App Router matches `app/roof-repair-amarillo/page.tsx`
3. Page component imports:
   - Schema templates from `lib/schema-templates.ts`
   - Business info from `lib/constants.ts`
   - UI components from `components/`
4. Server renders:
   - Metadata object (title, description, OpenGraph tags)
   - JSON-LD schema blocks (LocalBusiness, RoofingContractor, FAQ)
   - Page layout via `app/layout.tsx` (header, footer, GA4 scripts)
   - Hero section with `FadeIn` wrapper
   - Content blocks with animations
5. Static HTML generated during build and exported to `out/` directory
6. Browser receives HTML + embedded schema
7. Hydration: Client-side React takes over, activating:
   - `FadeIn` animations via Framer Motion
   - Form interactions (`HighLevelForm`)
   - Navigation dropdowns (header)
   - Sticky contact bar (`StickyContactBar`)
   - Phone click tracking (`PhoneClickTracker`)

**Lazy Script Loading:**

GA4 and HighLevel chat load with delay to avoid blocking page rendering:
- GA4: Loads after 8 seconds OR on user interaction (scroll, click, touch, keyboard)
- HighLevel: Loads after 5 seconds OR on user interaction
- See `app/layout.tsx` lines 181-223 for implementation

**State Management:**

- Client-side only: Framer Motion viewport detection, form state in `HighLevelForm`
- No global state management (Redux, Zustand, Context API)
- No server-side session/authentication
- Stateless: Every page render is deterministic from constants + metadata

## Key Abstractions

**FadeIn Component:**
- Purpose: Fade-in + directional slide animation triggered on scroll
- Location: `components/FadeIn.tsx`
- Pattern: Uses Framer Motion `whileInView` trigger with `once: true` (animate only once per page load)
- Usage: Wraps any content to create reveal-on-scroll effect
- Example: `<FadeIn delay={0.2}><h2>Section Title</h2></FadeIn>`

**Schema Templates:**
- Purpose: Generate reusable, consistent Schema.org JSON-LD markup
- Location: `lib/schema-templates.ts`
- Exports:
  - `generateLocalBusinessSchema(city, service)`: Creates LocalBusiness + aggregateRating + geo coordinates
  - `generateFAQPageSchema(city, service, faqs)`: Creates FAQPage schema
  - `generateServiceAreaSchema(city, neighborhoods)`: Creates ServiceArea schema
  - `generatePageSchemas(city, service, faqs, neighborhoods)`: Batch generator
- Usage: Pages embed returned objects in `<script type="application/ld+json">` tags

**Breadcrumb Component:**
- Purpose: Navigation breadcrumb + automatic BreadcrumbList schema generation
- Location: `components/Breadcrumb.tsx`
- Pattern: Accepts array of `{name, url}` items, renders HTML breadcrumbs and JSON-LD markup
- Usage: Every page includes breadcrumbs for UX + SEO

**InternalLinks Component:**
- Purpose: Context-aware internal linking to related pages (same service in nearby cities, same city in other services)
- Location: `components/InternalLinks.tsx`
- Data structure: Hard-coded `cityData` record with city names, slugs, and nearby cities (geographic proximity)
- Pattern: Accepts current city/service slugs, generates relevant link suggestions
- Usage: Bottom of location/service pages for content siloing

**InteractiveCard Component:**
- Purpose: Reusable card with hover animations (scale, shadow)
- Location: `components/InteractiveCard.tsx`
- Pattern: Wraps content with Tailwind hover effects
- Usage: Trust signals, feature grids, service cards

## Entry Points

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: All page requests
- Responsibilities:
  - Sets global metadata defaults (title, description)
  - Renders persistent header (navigation with dropdowns)
  - Renders persistent footer (6-column link grid)
  - Mounts tracking components (`PhoneClickTracker`, `ScrollProgress`)
  - Injects GA4 and HighLevel scripts with lazy-load strategy
  - Applies scroll-smooth CSS

**Home Page:**
- Location: `app/page.tsx`
- Triggers: GET /
- Responsibilities:
  - Hero section with CTA buttons (phone, free inspection)
  - Trust signals (4-card grid with metrics)
  - Definition blocks (4 FAQ-style blocks for AI overview optimization)
  - Services grid
  - FAQ accordion
  - Schema: LocalBusiness, FAQPage

**Location/Service Pages (Spoke Pages):**
- Location: `app/{service}-{city}/page.tsx` (examples: `roof-repair-amarillo/`, `commercial-roofing-midland/`)
- Count: 246 pages (14 cities × ~17 services/service-area combinations + hub pages + blog/articles)
- Triggers: GET /{service}-{city}/
- Responsibilities:
  - Breadcrumb navigation
  - Sticky contact bar
  - Hero section (background image, title, CTAs)
  - Local content (city-specific facts, weather impacts, neighborhoods)
  - Service features/benefits
  - FAQ section with city-specific Q&A
  - Internal links to related pages
  - Multiple schema blocks (LocalBusiness, RoofingContractor, FAQPage)
- Page size: ~1,200 lines average (inline schema + rich content)

**Blog Hub:**
- Location: `app/blog/page.tsx`
- Triggers: GET /blog/
- Responsibilities:
  - Blog article listing with featured guides
  - Cards with category tags and read links

**Blog Articles:**
- Location: `app/blog/{article-slug}/page.tsx`
- Triggers: GET /blog/{article-slug}/
- Responsibilities:
  - Article content with headings, images, lists
  - Schema: NewsArticle or Article type

## Error Handling

**Strategy:** Fail gracefully with static content

**Patterns:**
- No error boundaries in code (static export handles errors at build time)
- Build fails if page.tsx has syntax errors or import issues
- Fallback: 404 page via Next.js default behavior if route doesn't exist
- Tracking errors (GA4, HighLevel load failures): Silent failure via lazy loading with try-catch in script blocks (lines 207-223 in layout.tsx)

## Cross-Cutting Concerns

**Logging:** No server-side logging; browser console via `console.log()` only. GA4 events track user interactions (phone clicks, page views).

**Validation:** Form validation in `HighLevelForm` component via HighLevel's form SDK (external library). No client-side validation layer.

**Authentication:** Not applicable. Site is public-facing with no user accounts or protected routes.

**Phone Tracking:** `PhoneClickTracker` component (mounted in layout) intercepts all `tel:` link clicks and sends GA4 event:
```javascript
gtag('event', 'phone_click', {
  phone_number: '(806) 622-6041',
  page_path: '/roof-repair-amarillo/',
  element_text: 'Call Now'
})
```
Allows tracking of customer phone interactions for ROI measurement.

**Image Optimization:** All images use WebP/AVIF formats stored in `public/images/`. Next.js `<OptimizedImage>` wrapper component handles responsive sizing and lazy loading. Static export requires `unoptimized: true` in config.

**Mobile Responsiveness:** Tailwind CSS responsive classes (e.g., `hidden md:flex`, `text-base md:text-lg`) applied throughout. Hero sections have mobile-specific padding/sizing. Trust signals grid: 2 columns on mobile, 4 on desktop.

---

*Architecture analysis: 2026-02-20*
