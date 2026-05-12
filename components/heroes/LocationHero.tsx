import { AltHeroFrame } from "./AltHeroFrame";

/**
 * VARIANT B — Location page hero (e.g. /lubbock-tx-roofing/).
 *
 * Decorative display: [CITY] uppercase, with [STATE] sitting quietly below
 * at lighter weight / smaller size.
 *
 * Real H1: "Roofing Company in [City], TX".
 * Title tag pattern: "[City] TX Roofing Company | 5 Star Roofing".
 */

const STANDARD_LEFT_RULE_LINES = [
  "Serving the Texas Panhandle",
  "& all of West & Central Texas",
] as const;

export type LocationHeroProps = {
  city: string;
  /** Defaults to "TEXAS". Use the full state name uppercase. */
  state?: string;
  /** Override the hero photo per city; falls back to the default. */
  heroImageSrc?: string;
};

export function LocationHero({
  city,
  state = "TEXAS",
  heroImageSrc = "/images/heroes/5star-new-hero.png",
}: LocationHeroProps) {
  const cityUpper = city.toUpperCase();
  return (
    <AltHeroFrame
      heroImageSrc={heroImageSrc}
      displayText={cityUpper}
      subDisplay={state}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule={`${cityUpper}, TX`}
      eyebrow="5 Star Residential and Commercial Roofing"
      h1={`Roofing Company in ${city}, TX`}
      ctaText="Get Your Free Roof Inspection"
      displayScale={0.55}
    />
  );
}
