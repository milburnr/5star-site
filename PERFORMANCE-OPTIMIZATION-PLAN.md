# Performance Optimization Plan: 5 Star Roofing

**Date:** 2026-01-15
**Current Performance:** Desktop 62, Mobile 60
**Target Performance:** Desktop 95+, Mobile 90+
**Primary Issue:** Large unoptimized images (LCP 47.2s on mobile)

---

## Problem Analysis

### Current State
- **143MB of images** across 511+ files
- **No modern formats:** All JPG/JPEG/PNG, no AVIF or WebP
- **No responsive images:** Single large files served to all devices
- **Large file sizes:**
  - Hero images: 800KB - 1.7MB each
  - Product images: 200KB - 1.4MB
  - Total page weight: 10-20MB per page load
- **Next.js optimization disabled:** `unoptimized: true` due to static export

### Impact
- **Largest Contentful Paint (LCP):** 47.2 seconds (should be <2.5s)
- **Total Blocking Time:** High due to image downloads
- **First Contentful Paint:** Delayed by hero image load
- **Mobile experience:** Extremely poor on 4G/5G connections

---

## Solution Strategy

### Phase 1: Setup & Baseline Testing (1-2 hours)

**1.1 Install Lighthouse CI**
```bash
cd sites/5-star-roofing
npm install --save-dev @lhci/cli
```

Create `.lighthouserc.json`:
```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./out",
      "url": [
        "http://localhost/",
        "http://localhost/services/",
        "http://localhost/roof-repair-amarillo/"
      ]
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.95}]
      }
    }
  }
}
```

**1.2 Run Baseline Audit**
```bash
npm run build
npx lhci collect
npx lhci assert
```

Save results to `BASELINE-AUDIT.json` for comparison.

---

### Phase 2: Image Processing (2-3 hours)

**2.1 Inventory Current Images**
Create JSON inventory of all images in use:
- `/public/images/` (511 files, 105MB)
- `/public/photos/` (38MB, organized by project)
- Document which pages use which images
- Identify hero images (highest priority)

**2.2 Configure Image Processing Tool**
```bash
cd packages/tools/image-processing
npm install
```

Create processing configuration in `process-config.json`:
```json
{
  "inputDir": "../../../sites/5-star-roofing/public",
  "outputDir": "../../../sites/5-star-roofing/public-optimized",
  "formats": ["avif", "webp", "jpg"],
  "quality": {
    "avif": 85,
    "webp": 85,
    "jpg": 90
  },
  "sizes": {
    "hero": [2560, 1920, 1280, 960, 640],
    "content": [1600, 1200, 800, 400],
    "thumbnail": [400, 300, 200]
  }
}
```

**2.3 Process All Images**
```bash
# Analyze images first
node analyze-images.js --input-dir ../../../sites/5-star-roofing/public/images --industry roofing

# Optimize with responsive sizes
node optimize-images.js --input output/analyzed-images.json --output ../../../sites/5-star-roofing/public-optimized
```

**Expected Results:**
- 60-80% file size reduction
- AVIF versions (smallest, modern browsers)
- WebP versions (universal fallback)
- JPEG versions (legacy browsers)
- Multiple responsive sizes per image

---

### Phase 3: Code Implementation (3-4 hours)

**3.1 Create Responsive Image Component**

Create `sites/5-star-roofing/components/OptimizedImage.tsx`:

```typescript
interface OptimizedImageProps {
  src: string; // Original path like "/images/hero.jpg"
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: 'hero' | 'content' | 'thumbnail';
}

export function OptimizedImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  priority = false,
  quality = 'content'
}: OptimizedImageProps) {
  const basePath = src.replace(/\.(jpg|jpeg|png)$/i, '');

  // Generate srcset for each format
  const sizes = getSizesForQuality(quality);

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={generateSrcSet(basePath, 'avif', sizes)}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={generateSrcSet(basePath, 'webp', sizes)}
        sizes={sizes}
      />
      <img
        src={`${basePath}-${sizes[0]}.jpg`}
        srcSet={generateSrcSet(basePath, 'jpg', sizes)}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
```

**3.2 Create Optimized Background Component**

Create `sites/5-star-roofing/components/OptimizedBackground.tsx`:

```typescript
export function OptimizedBackground({
  image,
  children,
  className = ""
}: OptimizedBackgroundProps) {
  const basePath = image.replace(/\.(jpg|jpeg|png)$/i, '');

  return (
    <div
      className={className}
      style={{
        backgroundImage: `
          image-set(
            url(${basePath}-xl.avif) type("image/avif"),
            url(${basePath}-xl.webp) type("image/webp"),
            url(${basePath}-large.jpg) type("image/jpeg")
          )
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {children}
    </div>
  );
}
```

**3.3 Update Hero Sections**

Replace in all location/service pages:

**Before:**
```typescript
<div
  className="hero"
  style={{
    backgroundImage: 'url(/images/hail-damage-3.jpg)'
  }}
>
```

**After:**
```typescript
<OptimizedBackground
  image="/images/hail-damage-3.jpg"
  className="hero"
>
```

**3.4 Update Inline Images**

Replace standard `<img>` tags:

**Before:**
```tsx
<img src="/images/ResidentialServices.jpeg" alt="Residential roofing services" />
```

**After:**
```tsx
<OptimizedImage
  src="/images/ResidentialServices.jpeg"
  alt="Residential roofing services"
  quality="content"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

---

### Phase 4: Deployment & Testing (1-2 hours)

**4.1 Replace Original Images**
```bash
# Backup originals
mv sites/5-star-roofing/public/images sites/5-star-roofing/public/images-original
mv sites/5-star-roofing/public/photos sites/5-star-roofing/public/photos-original

# Move optimized images
mv sites/5-star-roofing/public-optimized/images sites/5-star-roofing/public/images
mv sites/5-star-roofing/public-optimized/photos sites/5-star-roofing/public/photos
```

**4.2 Build & Test**
```bash
npm run build
npm start # Preview on localhost:3000
```

Verify:
- All images load correctly
- No broken images
- Mobile responsive behavior
- Fallbacks work in different browsers

**4.3 Run Lighthouse CI**
```bash
npx lhci collect
npx lhci assert
```

Compare to baseline audit.

---

## Expected Performance Improvements

### File Size Reduction
- **Current:** 143MB total, 800KB-1.7MB per hero image
- **After:** 30-40MB total, 150-300KB per hero image (AVIF)
- **Reduction:** 70-75% smaller

### Performance Metrics
- **LCP:** 47.2s → **1.5-2.0s** (target: <2.5s)
- **Performance Score:** 60-62 → **90-95+**
- **FCP:** Should drop to <1.5s
- **TBT:** Reduced by 60-80%

### Format Breakdown
- **AVIF:** ~30% smaller than WebP (served to Chrome, Edge, Firefox 93+)
- **WebP:** ~25-30% smaller than JPEG (served to Safari, older browsers)
- **JPEG:** Optimized fallback (mozjpeg compression)

### Responsive Benefits
- **Mobile:** Serves 640px images instead of 2560px
- **Tablet:** Serves 1280px images
- **Desktop:** Serves 1920px images
- **4K:** Serves 2560px images only when needed

---

## Implementation Priority

### Critical (Immediate Impact)
1. **Hero images on top 20 pages** (homepage, service hubs, top cities)
   - These are LCP elements causing 47.2s delay
   - Highest traffic pages

2. **Above-the-fold images** on all pages
   - First visible content
   - Impacts FCP and LCP

### High Priority
3. **Product/service grid images** (appears on 100+ pages)
4. **Portfolio/gallery images** in `/photos/`

### Medium Priority
5. **Below-the-fold inline images** (lazy load)
6. **Background patterns and textures**

---

## Automation Scripts

Create helper scripts in `sites/5-star-roofing/scripts/`:

**`analyze-image-usage.js`** - Scan all pages for image references
**`update-images-bulk.js`** - Bulk replace image tags with components
**`verify-images.js`** - Check all optimized images exist

---

## Rollback Plan

If issues occur:
```bash
# Restore original images
rm -rf sites/5-star-roofing/public/images
rm -rf sites/5-star-roofing/public/photos
mv sites/5-star-roofing/public/images-original sites/5-star-roofing/public/images
mv sites/5-star-roofing/public/photos-original sites/5-star-roofing/public/photos

# Revert code changes
git checkout sites/5-star-roofing/app/
git checkout sites/5-star-roofing/components/
```

---

## Cost Analysis

**Processing Cost:**
- Image analysis (Claude Vision): ~$3 for 1,000 images
- Processing time: ~50 minutes for all 511 images
- One-time cost: **$2-3 total**

**Storage:**
- Original images: 143MB
- Optimized images (3 formats × avg 3 sizes): ~120MB
- Additional storage: **~120MB** (multiple formats/sizes)

**Benefits:**
- 70% reduction in bandwidth costs
- Better user experience → higher conversion rates
- SEO ranking improvement (Core Web Vitals signal)

---

## Success Metrics

### Performance Targets
- ✅ **Desktop Score:** 95+ (currently 62)
- ✅ **Mobile Score:** 90+ (currently 60)
- ✅ **LCP:** <2.5s (currently 47.2s)
- ✅ **FCP:** <1.8s
- ✅ **CLS:** <0.1
- ✅ **TBT:** <200ms

### Business Impact
- Improved mobile conversion rates (faster load = less bounce)
- Better Google rankings (Core Web Vitals are ranking factor)
- Reduced hosting bandwidth costs
- Enhanced user experience

---

## Next Steps

1. Review and approve this plan
2. Install Lighthouse CI
3. Run baseline audit
4. Begin image processing with tool
5. Implement responsive image components
6. Test and deploy

**Estimated Total Time:** 8-12 hours (1-1.5 days)
**Estimated Cost:** $2-3 (API usage)
**Expected Impact:** 30-35 point performance increase
