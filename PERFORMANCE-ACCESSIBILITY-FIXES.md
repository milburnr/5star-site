# Performance & Accessibility Fixes

**Date:** 2026-01-17
**Final Scores:** Performance 93, Accessibility 98, Best Practices 100, SEO 100

## Performance Optimizations

### 1. Third-Party Script Deferral

**Problem:** GA and HighLevel widget were blocking Time to Interactive (8.7s → 4.0s → under 3s)

**Solution:** Load scripts only after user interaction or timeout

```javascript
// Google Analytics - loads after interaction or 8 seconds
function loadGA() {
  if (window.gaLoaded) return;
  window.gaLoaded = true;
  var s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-BHH34LVX73';
  s.async = true;
  document.head.appendChild(s);
  // ... gtag config
}
setTimeout(loadGA, 8000);
['scroll', 'click', 'touchstart', 'keydown'].forEach(e =>
  document.addEventListener(e, loadGA, {once: true, passive: true})
);
```

**Files changed:** `app/layout.tsx`

### 2. Image Optimization

**Problem:** Images not lazy loading, not using optimized formats

**Solution:**
- Use `OptimizedImage` component with AVIF/WebP/JPEG fallbacks
- Add `loading="lazy"` for below-fold images
- Add explicit `width` and `height` to prevent layout shift

**Files changed:** `app/page.tsx`, `components/OptimizedImage.tsx`

### 3. Removed Unused Netlify Plugin

**Problem:** `netlify-plugin-cache` referenced but not installed, causing build failures

**Solution:** Removed plugin reference from `netlify.toml`

---

## Accessibility Fixes

### 1. Low Contrast Text on White Backgrounds

**Problem:** `text-brand-gold` (#E4C66E) on white failed WCAG 4.5:1 contrast

**Solution:** Changed to `text-brand-brown` (#815D01) with gold hover states

```jsx
// Before
<span className="text-brand-gold">Learn More</span>

// After
<span className="text-brand-brown font-semibold hover:text-brand-gold">Learn More</span>
```

**Files changed:** `app/page.tsx` and 10+ other page files

### 2. Low Contrast Footer Links

**Problem:** `text-brand-gold-bright` on dark footer, `text-gray-400` too dim

**Solution:**
- Phone/email/hours: Changed to `text-white hover:text-brand-gold-bright`
- Footer tagline: Changed `text-gray-400` to `text-gray-300`

**Files changed:** `app/layout.tsx`

### 3. Emergency Button Contrast

**Problem:** `btn-primary` class applied `bg-brand-gold`, conflicting with `bg-red-600`

**Solution:** Removed `btn-primary`, used explicit `bg-red-800` (7.3:1 contrast)

```jsx
// Before
<a className="btn-primary bg-red-600 ...">

// After
<a className="inline-block bg-red-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-900 ...">
```

**Files changed:** `app/page.tsx`

### 4. HighLevel Widget Button (Third-Party)

**Problem:** Chat widget close button missing `aria-label`

**Solution:** MutationObserver patches the button after widget loads

```javascript
setTimeout(function() {
  var observer = new MutationObserver(function(mutations, obs) {
    var btn = document.querySelector('button.lc_text-widget_prompt--prompt-close');
    if (btn) {
      btn.setAttribute('aria-label', 'Close chat prompt');
      obs.disconnect();
    }
  });
  observer.observe(document.body, {childList: true, subtree: true});
}, 5000);
```

**Note:** Lighthouse may still flag this since the fix runs after audit. Third-party widget limitations.

**Files changed:** `app/layout.tsx`

---

## Build & Deployment Fixes

### 1. Git Submodule Error

**Problem:** Accidentally committed embedded git repos, breaking Netlify builds

**Solution:**
```bash
git rm --cached tools/site-builder/test-fcs-automated/site
git rm --cached tools/site-builder/test-fcs-verified/site
```

Added to `.gitignore`:
```
tools/site-builder/test-*/
tools/site-builder/fcs-*/
tools/site-builder/projects/*/site/
```

### 2. Netlify Ignore Command Issues

**Problem:** Builds being skipped unexpectedly due to ignore command

**Solution:** Removed ignore command - every push now builds
```toml
# Removed this:
# ignore = "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF -- sites/5-star-roofing/"
```

---

## Key Metrics Improvement

| Metric | Before | After |
|--------|--------|-------|
| Performance | 61 | 93 |
| Accessibility | 90 | 98-100 |
| Time to Interactive | 8.7s | <3s |
| Total Blocking Time | 470ms | <380ms |

---

## Applying to Other Pages

Most fixes are in shared files (`layout.tsx`, `globals.css`) so they apply site-wide.

For page-specific fixes:
1. Use `text-brand-brown` instead of `text-brand-gold` on white backgrounds
2. Use `OptimizedImage` component for all images
3. Avoid `btn-primary` when overriding background colors - use explicit classes
