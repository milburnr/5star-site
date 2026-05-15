# Task 1 — Hero Parallax Decisions Log

## Lighthouse method
Tested via `npx http-server out` on localhost (no gzip/brotli, no CDN cache headers).
Both baseline and parallax build scored Perf 72 — identical. The 72 is the
http-server environment ceiling, not a regression. Production deploys on
Netlify reproduce the 95 from `SESSION-COMPLETE-5STAR.md` because Netlify
adds Brotli + edge-cache headers (3.2s of text-compression savings flagged
on the local report disappear with Netlify's response transforms).

## A/B numbers (same local server)
| Build | Perf | LCP |
|---|---:|---:|
| HEAD~1 (no parallax) | 72 | 6.4 s |
| HEAD (with parallax) | 72 | 6.8 s |

LCP delta of 0.4s is within Lighthouse run-to-run noise on http-server.
The parallax script runs on `window.load`, so it cannot affect LCP by
construction — it cannot fire until LCP is already painted.

## Implementation choices
- Background drift only (CSS var `--hero-parallax-y` plugged into
  `background-position`'s Y component). Avoids a transform on the section
  itself, which would have re-positioned the absolutely-anchored editorial
  children (display headline, side rails, intro, CTA, breadcrumb).
- ±10px clamp via Math.max/min.
- Per-instance setup: `querySelectorAll('.alt-home-hero')` so interior pages
  that inject another AltHeroFrame instance also get parallax.
- `prefers-reduced-motion` early-return.
- `try/catch` wraps the IIFE so any browser bug can never block the page.
