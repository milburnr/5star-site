# CRITICAL FEATURES - DO NOT REMOVE

## Desktop Navigation Dropdowns

The header in `app/layout.tsx` has **dropdown menus** for:
1. **Services** - shows Residential, Commercial, Hail Damage, Roof Replacement
2. **Areas** - shows Amarillo, Lubbock, Midland, Odessa, Canyon

These are CSS hover-based dropdowns using `group` and `group-hover` Tailwind classes.

**DO NOT simplify these to plain links.** They have been accidentally removed multiple times.

## Hero Image

The homepage hero uses a local WebP image at `/images/hero-bg.webp` - the sunset photo with roofers silhouetted.

Preloaded in `layout.tsx` for fast LCP.

## Mobile Menu

The MobileMenu component uses React Portal to render outside the header (avoids backdrop-filter z-index issues).

Located in `components/MobileMenu.tsx`.
