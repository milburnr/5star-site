# Cloudflare R2 Image CDN Setup

## Bucket Info
- **Bucket Name:** `5star-images`
- **Public URL:** `https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev`
- **Created:** 2026-02-08

## Image Access
Images are accessible at:
```
https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/[filename]
```

Example:
```
https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/Roof-Replacement-in-AmarilloTX-1280w.jpg
```

## Commands

### Upload a single image
```bash
wrangler r2 object put "5star-images/images/filename.jpg" --file="./filename.jpg" --remote
```

### Upload multiple images (folder)
```bash
cd /path/to/images
ls -1 | xargs -P 8 -I {} wrangler r2 object put "5star-images/images/{}" --file="./{}" --remote
```

### List objects in bucket
```bash
wrangler r2 object list 5star-images --remote
```

### Delete an image
```bash
wrangler r2 object delete "5star-images/images/filename.jpg" --remote
```

## Site Integration
Update image paths in site from:
```
/images/filename.jpg
```
To:
```
https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/filename.jpg
```

Or set up a custom domain (optional):
1. Add CNAME: `images.5starroofingpros.com` → bucket
2. Configure in Cloudflare R2 dashboard under "Custom Domains"

## Why R2?
- Images served from Cloudflare's edge (fast)
- Site deploys are small (just HTML/CSS/JS)
- Free egress (no bandwidth charges)
- $0.015/GB/month storage (~$0.50/month for these images)
