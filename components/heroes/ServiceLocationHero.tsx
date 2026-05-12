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

export type ServiceLocationHeroProps = {
  city: string;
  service: string;
  /** Override hero photo per page if a more specific image exists. */
  heroImageSrc?: string;
};

export function ServiceLocationHero({
  city,
  service,
  heroImageSrc = "/images/heroes/5star-new-hero.png",
}: ServiceLocationHeroProps) {
  const cityUpper = city.toUpperCase();
  return (
    <AltHeroFrame
      heroImageSrc={heroImageSrc}
      displayText={cityUpper}
      subDisplay={service.toUpperCase()}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule={`${cityUpper}, TX`}
      eyebrow="5 Star Residential and Commercial Roofing"
      h1={`${service} in ${city}, TX`}
      ctaText="Get Your Free Roof Inspection"
      displayScale={0.55}
    />
  );
}
