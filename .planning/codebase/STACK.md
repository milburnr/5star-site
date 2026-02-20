# Technology Stack

**Analysis Date:** 2026-02-20

## Languages

**Primary:**
- TypeScript 5.7.2 - Full type-safe codebase with strict mode enabled
- JSX/TSX - React components in Next.js App Router
- JavaScript (Node.js) - Site builder automation, CLI tools, build scripts

**Secondary:**
- Bash/Shell - Repository management scripts
- CSS - Tailwind utilities via PostCSS pipeline

## Runtime

**Environment:**
- Node.js 18.0.0+ (required in root `package.json`)
- npm (workspace monorepo configuration)

**Package Manager:**
- npm 10+
- Lockfile: `package-lock.json` (present in root and all workspaces)

## Frameworks

**Core Web Framework:**
- Next.js 15.1.4 - Full-stack React framework with App Router
  - Static HTML export (`output: "export"` in `next.config.ts`)
  - Unoptimized images for static export (`images.unoptimized: true`)
  - Trailing slashes enforced (`trailingSlash: true`)
  - Location: `sites/5-star-roofing/`

**UI Libraries:**
- React 19.0.0 - Component library
- React DOM 19.0.0 - DOM rendering
- Framer Motion 12.23.24 - Animation engine (hero fades, parallax, stagger effects)
- Lucide React 0.546.0 - Icon library

**UI Component System:**
- Radix UI components:
  - `@radix-ui/react-accordion` 1.2.12 - FAQ sections
  - `@radix-ui/react-tabs` 1.1.13 - Tabbed content
  - `@radix-ui/react-slot` 1.2.3 - Slot composition
- Class Variance Authority 0.7.1 - Component variant system

**Styling Framework:**
- Tailwind CSS 3.4.17 - Utility-first CSS
  - Dark mode support (`darkMode: ["class"]`)
  - Extended brand color palette in `tailwind.config.ts`
  - Component layer (@layer components) in `app/globals.css`
- PostCSS 8.4.49 - CSS transformation pipeline
- Autoprefixer 10.4.20 - Vendor prefixes
- tailwind-merge 3.3.1 - Safe class merging (prevents conflicts)
- tailwindcss-animate 1.0.7 - Animation utilities

**Build & Development:**
- TypeScript 5.7.2 - Type checking
- Sharp 0.34.5 (site), 0.33.1 (builder) - Image optimization (AVIF/WebP)
- Lighthouse CI (`@lhci/cli` 0.15.1) - Performance testing
- Next.js ESLint - Built-in linting

## Site Builder Stack

**Automation Framework:**
- `@anthropic-ai/sdk` 0.32.1 - Claude API for content generation
- `@anthropic-ai/claude-agent-sdk` 0.2.7 - Claude Agent system for complex workflows
- Express.js 4.18.2 - Dashboard and API server
- Inquirer.js 9.2.12 - Interactive CLI prompts
- Nodemon 3.0.2 - Development file watcher

**Web Scraping & Analysis:**
- Puppeteer 21.11.0 - Headless browser automation
- Puppeteer Extra 3.3.6 - Browser plugins
- puppeteer-extra-plugin-stealth 2.11.2 - Anti-detection
- Cheerio 1.0.0-rc.12 - Fast HTML/jQuery parsing
- website-scraper 6.0.0 - Full-site scraping

**Data Processing:**
- sql.js 1.13.0 - In-memory SQLite (site content analysis)
- node-geocoder 4.3.0 - Address geocoding
- date-fns 3.0.6 - Date utilities
- axios 1.6.5 - HTTP client

**Utilities:**
- dotenv 17.2.3 - Environment variable management
- chalk 5.3.0 - Terminal colors
- ora 8.0.1 - Spinners/progress
- slug 9.0.0 - URL slug generation
- p-queue 8.0.1 - Rate-limited parallel execution
- ws 8.16.0 - WebSocket server (real-time dashboard)
- cors 2.8.6 - CORS middleware

## Key Dependencies

**Critical for Sites:**
- `next` 15.1.4 - Full web framework
- `framer-motion` 12.23.24 - Core animation engine
- `sharp` 0.34.5 - Image optimization
- `googleapis` 170.1.0 - Google APIs (Drive, Indexing, Maps)
- `@radix-ui/react-accordion` 1.2.12 - FAQ/accordion components

**Critical for Site Builder:**
- `@anthropic-ai/sdk` 0.32.1 - Claude API
- `puppeteer` 21.11.0 - Browser automation
- `cheerio` 1.0.0-rc.12 - HTML parsing
- `express` 4.18.2 - Server framework
- `sql.js` 1.13.0 - Database analysis

**Infrastructure:**
- `tailwind-merge` 3.3.1 - Class merging
- `clsx` 2.1.1 - Conditional classnames
- `class-variance-authority` 0.7.1 - Component variants

## Configuration

**Environment Variables:**

Site-builder requires `.env` file with:
```
ANTHROPIC_API_KEY=sk-...                           # Required: Claude API
GOOGLE_MAPS_API_KEY=AIza...                        # Optional: Maps/Geocoding
GOOGLE_PLACES_API_KEY=...                          # Optional: Places API
PORT=3000                                          # Dashboard server port
DEFAULT_MODEL=claude-sonnet-4-5-20250929          # Claude model
PARALLEL_TASKS=10                                  # Parallel job limit
```

**Build Configuration:**

- `next.config.ts` (`sites/5-star-roofing/`):
  - Static export mode
  - Trailing slash enforcement
  - Image optimization disabled

- `tailwind.config.ts` (`sites/5-star-roofing/`):
  - Brand colors (gold #E4C66E, brown #815D01)
  - Extended color system
  - Component layer support
  - Animation utilities

- `tsconfig.json` (`sites/5-star-roofing/`):
  - Strict type checking
  - ES2017 target
  - Path alias `@/*` pointing to root
  - DOM + ESNext libraries

- `netlify.toml` (`sites/5-star-roofing/`):
  - Build: `npm run build` with `NETLIFY_NEXT_PLUGIN_SKIP=true`
  - Publish: `out/` directory
  - 301 redirects for duplicate pages
  - Cache headers (1-year immutable for static assets)

## Platform Requirements

**Development:**
- macOS, Linux, or Windows (WSL2)
- Node.js 18.0.0+
- npm 10+
- 4+ GB RAM (8GB recommended for large site builds)

**Production:**
- Netlify hosting (primary platform)
- Base directory: `sites/5-star-roofing/`
- Build command: `npm run build`
- Publish directory: `out/`
- Static HTML deployment (no server-side rendering)

**External Services:**
- Anthropic API (Claude access)
- Google Cloud APIs (Maps, Indexing, Drive)
- Netlify hosting and CDN

---

*Stack analysis: 2026-02-20*
