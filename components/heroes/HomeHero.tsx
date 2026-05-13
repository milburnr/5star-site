import { AltHeroFrame, type HeroImageSet } from "./AltHeroFrame";

/**
 * VARIANT A — Homepage hero.
 *
 * Decorative display: WEST TEXAS (2-line stack).
 * Real H1: "West Texas Roofing Company".
 * Title tag: "5 Star Roofing | Amarillo's Residential & Commercial Roofing Company".
 *
 * Use on `/` (homepage). One per site.
 *
 * Image strategy: source was a 2.5 MB PNG. Optimized to AVIF + WebP at
 * 600/900/1200/1920 widths via `scripts/optimize-hero.mjs`. Browser
 * picks the smallest acceptable size via CSS `image-set()` + a
 * `max-width: 1024px` media query.
 *
 * Mobile (≤1024px) ships ~39 KB AVIF (was 2.5 MB PNG). Desktop ships
 * ~125 KB AVIF (1200w) or ~199 KB AVIF (1920w on HD displays via the
 * image-set DPR fallback chain). LCP on throttled mobile should stay
 * well under 2 s.
 */

const STANDARD_LEFT_RULE_LINES = [
  "Serving the Texas Panhandle",
  "& all of West & Central Texas",
] as const;

const HERO_IMAGE_SRC = "/images/heroes/5star-new-hero-1200w.webp";

const HERO_IMAGE_SET: HeroImageSet = {
  fallback: HERO_IMAGE_SRC,
  sources: [
    {
      width: 600,
      avif: "/images/heroes/5star-new-hero-600w.avif",
      webp: "/images/heroes/5star-new-hero-600w.webp",
    },
    {
      width: 900,
      avif: "/images/heroes/5star-new-hero-900w.avif",
      webp: "/images/heroes/5star-new-hero-900w.webp",
    },
    {
      width: 1200,
      avif: "/images/heroes/5star-new-hero-1200w.avif",
      webp: "/images/heroes/5star-new-hero-1200w.webp",
    },
    {
      width: 1920,
      avif: "/images/heroes/5star-new-hero-1920w.avif",
      webp: "/images/heroes/5star-new-hero-1920w.webp",
    },
  ],
};

export function HomeHero() {
  return (
    <AltHeroFrame
      heroImageSrc={HERO_IMAGE_SRC}
      heroImageSrcSet={HERO_IMAGE_SET}
      displayText={["WEST", "TEXAS"]}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule="AMARILLO, TX"
      eyebrow="5 Star Residential and Commercial Roofing"
      h1="Your West Texas Roofing Company"
      ctaText="Get Your Free Roof Inspection"
    />
  );
}
