# 5 Star Commercial Roofing - Website

## Overview
- **Live Site:** https://5starroofingpros.com
- **Business:** Roofing company serving Texas Panhandle (Amarillo, Lubbock, Midland, Odessa)
- **Focus:** Hail damage repair + insurance claims assistance

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Build Output:** Static export (`next export`)
- **Hosting:** Netlify
- **Image CDN:** Cloudflare R2

## Hosting & Deployment

### Netlify
- **Project:** 5starroofingpros
- **Admin:** https://app.netlify.com/projects/5starroofingpros
- **Deploy:** Automatic on push, or manual:
  ```bash
  npm run build
  netlify deploy --prod --dir=out
  ```

### Cloudflare R2 (Images)
- **Bucket:** `5star-images`
- **Public URL:** `https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev`
- **Full docs:** See `R2-SETUP.md`

Images are served from R2 CDN, not bundled with site. This keeps deploys fast.

## Key Folders
```
├── app/                    # Next.js pages (one folder per route)
├── components/             # Shared React components
├── public/images/          # Static images (legacy, moving to R2)
├── out/                    # Build output (what gets deployed)
├── styles/                 # Global CSS
└── *.md                    # Documentation
```

## Commands
```bash
# Development
npm run dev

# Build static site
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out

# Upload image to R2
wrangler r2 object put "5star-images/images/file.jpg" --file="./file.jpg" --remote
```

## Key Documentation
- `R2-SETUP.md` - Cloudflare R2 image CDN setup
- `REBUILD-PLAN.md` - Current rebuild project status
- `STYLE-GUIDE.md` - Brand colors, fonts, component styles
- `INDEXING-API-SETUP.md` - Google Search Console indexing

## Google Services
- **Service Account:** `id-star-instant@star-commercial-roofing.iam.gserviceaccount.com`
- **Indexing API:** Configured for instant indexing
- **GSC Property:** https://5starroofingpros.com

## Image Sources
- **Acculynx Photos:** 7,348 real job photos from `/Users/bo/Photos/5-star/`
  - Organized by city/street (e.g., `amarillo-tx/teckla-boulevard/`)
  - Before/after shots from actual jobs
- **Stock/Generated:** Some stock images remain in `/public/images/`

## Content Notes
- 262 pages total (city + service combinations)
- Priority services: Hail damage, roof replacement, insurance claims
- De-emphasized: Emergency/tarping services (client doesn't want this work)

## Contact
- **Phone:** (806) 622-6041
- **Address:** 2909 S Western St, Amarillo, TX

---
*Last updated: 2026-02-08*
