import { AltHeroFrame } from "./AltHeroFrame";

/**
 * VARIANT A — Homepage hero.
 *
 * Decorative display: WEST TEXAS (2-line stack).
 * Real H1: "West Texas Roofing Company".
 * Title tag: "5 Star Roofing | Amarillo's Residential & Commercial Roofing Company".
 *
 * Use on `/` (homepage). One per site.
 */

const STANDARD_LEFT_RULE_LINES = [
  "Serving the Texas Panhandle",
  "& all of West & Central Texas",
] as const;

export function HomeHero() {
  return (
    <AltHeroFrame
      heroImageSrc="/images/heroes/5star-new-hero.png"
      displayText={["WEST", "TEXAS"]}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule="AMARILLO, TX"
      eyebrow="5 Star Residential and Commercial Roofing"
      h1="Your West Texas Roofing Company"
      ctaText="Get Your Free Roof Inspection"
    />
  );
}
