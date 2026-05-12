import { AltHeroFrame } from "./AltHeroFrame";

/**
 * VARIANT D — Service + Location hero (most important for rankings).
 * E.g. /hail-damage-repair-lubbock/, /metal-roofing-midland/.
 *
 * Decorative display: [CITY] dominant on top line. [SERVICE] sub-display
 * below at lighter weight, smaller size. Order mirrors how users search:
 * location first, then service.
 *
 * Real H1: "[Service] in [City], TX" — the exact-match SEO target.
 * Title tag pattern: "[Service] [City] TX | 5 Star Roofing".
 */

const STANDARD_LEFT_RULE_LINES = [
  "Serving the Texas Panhandle",
  "& all of West & Central Texas",
] as const;

const DEFAULT_EYEBROW = "5 Star Residential and Commercial Roofing";

export type ServiceLocationHeroProps = {
  city: string;
  service: string;
  /** Override hero photo per page if a more specific image exists. */
  heroImageSrc?: string;
  /** Override the auto-generated H1. Defaults to "[Service] in [City], TX". */
  h1Override?: string;
  /** Override the eyebrow line. */
  eyebrowOverride?: string;
  /** CTA copy. Defaults to "Get Your Free Roof Inspection". */
  ctaText?: string;
  /** CTA href. Defaults to /contact/. */
  ctaHref?: string;
};

export function ServiceLocationHero({
  city,
  service,
  heroImageSrc = "/images/heroes/5star-new-hero.png",
  h1Override,
  eyebrowOverride = DEFAULT_EYEBROW,
  ctaText = "Get Your Free Roof Inspection",
  ctaHref = "/contact/",
}: ServiceLocationHeroProps) {
  const cityUpper = city.toUpperCase();
  return (
    <AltHeroFrame
      heroImageSrc={heroImageSrc}
      displayText={cityUpper}
      subDisplay={service.toUpperCase()}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule={`${cityUpper}, TX`}
      eyebrow={eyebrowOverride}
      h1={h1Override ?? `${service} in ${city}, TX`}
      ctaText={ctaText}
      ctaHref={ctaHref}
      displayScale={0.55}
    />
  );
}
