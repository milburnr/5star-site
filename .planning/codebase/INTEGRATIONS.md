# External Integrations

**Analysis Date:** 2026-02-20

## APIs & External Services

**Anthropic Claude API:**
- Purpose: Content generation, site optimization, vision analysis
- SDK: `@anthropic-ai/sdk` 0.32.1
- Agent Framework: `@anthropic-ai/claude-agent-sdk` 0.2.7
- Auth: `ANTHROPIC_API_KEY` environment variable
- Used in: `tools/site-builder/` for automated page generation, content analysis, screenshot interpretation
- CLI Integration: Claude CLI subprocess execution via `execution-engine-claude-cli.js`

**Google APIs:**
- Google Maps API:
  - Purpose: Geocoding, location services, service area mapping
  - Env var: `GOOGLE_MAPS_API_KEY`
  - Used in: `tools/site-builder/lib/utils/geocoder.js`
  - Implementation: `node-geocoder` package wrapper

- Google Drive API:
  - Purpose: Sync images from project folders
  - Implementation: `tools/site-builder/lib/integrations/image-processor.js`
  - Method: `syncGoogleDrive(folderId, outputDir)`
  - Output: Metadata JSON with image details

- Google Indexing API:
  - Purpose: Programmatic URL submission to Google Search Console
  - Implementation: `sites/5-star-roofing/submit-to-indexing-api.js`
  - Rate limit: 200 URLs/day
  - Commands:
    - `npm run index:dry-run` - Preview submissions
    - `npm run index:submit` - Submit 268 pages

**Google Analytics 4 (GA4):**
- Tag ID: `G-BHH34LVX73`
- Implementation: Script injection in `sites/5-star-roofing/app/layout.tsx`
- Loading: Lazy-loaded after 8 seconds or user interaction to preserve TTI
- Phone Tracking: Custom event tracking for phone clicks
- Component: `PhoneClickTracker` component

## Data Storage

**Databases:**
- None - Fully static site with no persistent database

**File Storage:**
- Local filesystem only
- Assets location: `sites/5-star-roofing/public/`
  - Images (AVIF, WebP, JPEG formats)
  - Sitemap: `public/sitemap.xml` (generated)
  - Logo and static assets

**Image Processing Pipeline:**
- Google Drive sync for project images
- Sharp 0.34.5 for optimization
- Format conversion: AVIF primary, WebP fallback, JPEG fallback
- Output: `tools/site-builder/projects/[project-name]/public/images/`

**Caching:**
- Netlify edge CDN via `netlify.toml`:
  - Static assets: `max-age=31536000` (1 year, immutable)
  - HTML files: `max-age=0, must-revalidate` (always fresh)
  - Images (AVIF, WebP, PNG, JPG): 1-year cache

## Authentication & Identity

**Auth Provider:**
- None - Public marketing site, no user authentication

**Business Profile:**
- Google Business Profile: Direct contact integration
- Social: Google share link in constants (`lib/constants.ts`)
- Phone tracking: All `tel:` links tracked to GA4

## Monitoring & Observability

**Error Tracking:**
- None configured - No Sentry, Rollbar, or similar

**Logs:**
- Console logging in development only
- Netlify build logs (default platform logging)
- Site builder: Detailed progress output via WebSocket to dashboard

**Performance Monitoring:**
- Google Analytics 4 - Web vitals via GTM
- Lighthouse CI (`@lhci/cli`) - Automated performance testing
- No custom APM configured

## CI/CD & Deployment

**Hosting:**
- Netlify (primary)
  - Base directory: `sites/5-star-roofing/`
  - Build command: `npm run build`
  - Publish directory: `out/`
  - Node version: Configured in build environment

**CI Pipeline:**
- Git-triggered builds via Netlify webhook
- Build environment: Node 18+
- Static HTML output deployment
- 301 redirects configured in `netlify.toml`

**Deployment:**
- Automatic on push to `main` branch
- Static file delivery (no server rendering)
- CDN distribution via Netlify Edge

## Environment Configuration

**Required env vars (Site Builder):**
- `ANTHROPIC_API_KEY` - Claude API access
- `GOOGLE_MAPS_API_KEY` - Maps/Geocoding (optional)
- `GOOGLE_PLACES_API_KEY` - Places data (optional)
- `PORT` - Dashboard server port (default 3000)

**Secrets location:**
- `.env` file in `tools/site-builder/` (not committed)
- Example: `tools/site-builder/.env.example`
- Site code has NO secrets (configuration in `lib/constants.ts`)

**Safe to commit:**
- `sites/5-star-roofing/lib/constants.ts` - Business info, phone, address
- GA4 tag ID is public (embedded in all analytics scripts)
- Google Indexing API credentials: service account JSON (not in repo)

## Webhooks & Callbacks

**Incoming:**
- Google Indexing API - No webhooks, polling-based
- Netlify deploy webhooks - Git push triggers builds

**Outgoing:**
- None detected
- Contact form submissions: Currently console-only (no backend)

## Content Management System

**Keystatic CMS Integration:**
- File-based Git-backed CMS (Phase 8)
- Implementation: `tools/site-builder/lib/keystatic-initializer.js`
- Config template: `packages/framework/keystatic-template/keystatic.config.ts`
- Optional setup: Configured during site builder wizard

**Manual Update Workflow:**
- Implementation: `tools/site-builder/lib/content-update-workflow.js`
- Methods:
  - `updateBusinessInfo()` - 10 min, ~$100-150
  - `addService()` - 15-30 min, ~$150-250
  - `addLocation()` - 45 min, ~$300-400
  - `batchUpdate()` - Multiple changes
  - `generateInvoice()` - Auto-billing

**Content Files:**
- Generated in `content/` directory (Keystatic format)
- Services, locations, testimonials, FAQs as .mdoc files
- Auto-mapped to page components

## Third-Party Scripts

**Loaded in site layout:**
1. Google Analytics GTM
   - Source: `https://www.googletagmanager.com/gtag/js?id=G-BHH34LVX73`
   - Strategy: Lazy-load after 8s or user interaction
   - Script: Inline initialization in `app/layout.tsx`

**Not used:**
- LeadConnector (GHL) - Not integrated in current 5 Star site
- Facebook Pixel - Not configured
- Intercom - Not integrated
- Other chat widgets - None active

## Schema.org & Structured Data

**Implementation:**
- Manual JSON-LD generation in `lib/schema-templates.ts` (no external library)
- Component-based schema: `components/Schema.tsx` pattern

**Schemas generated:**
- LocalBusinessSchema - Address, phone, hours, geo location
- ServiceSchema - Service descriptions with area served
- FAQSchema - FAQ accordion content (auto-generated from Accordion components)
- BreadcrumbSchema - Navigation hierarchy (via `<Breadcrumb>` component)

## Image Processing Pipeline

**Site Builder Image Processor:**
- Location: `tools/site-builder/lib/integrations/image-processor.js`

**Workflow:**
1. Sync from Google Drive (folderId → local images)
2. Scrape images from reference site (URL → images)
3. AI analysis (Claude Vision for quality/relevance scoring)
4. Optimize with Sharp (compression, format conversion)
5. Geotag with location data
6. Generate gallery markup

**Methods:**
- `syncGoogleDrive()` - Pull from Drive folder
- `scrapeImagesFromWebsite()` - Crawl reference site
- `analyzeImages()` - Claude Vision analysis
- `optimizeImages()` - Sharp compression pipeline
- `geotagImages()` - Add location metadata
- `generateGallery()` - Create gallery JSON

## External Tool Integrations

**Puppeteer:**
- Headless browser automation
- Screenshot generation for design extraction
- Full-page scraping
- JavaScript execution for SPA analysis
- Anti-detection: Puppeteer Extra stealth mode

**SQL.js:**
- In-memory SQLite database
- Site structure analysis
- Content inventory management
- Query-based gap detection

**Node Geocoder:**
- Address → Coordinates conversion
- Service area mapping
- Location-based content relevance

---

*Integration audit: 2026-02-20*
