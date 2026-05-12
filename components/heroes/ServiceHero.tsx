import { AltHeroFrame } from "./AltHeroFrame";

/**
 * VARIANT C — Service page hero (e.g. /metal-roofing/, /hail-damage-repair/).
 *
 * Decorative display: [SERVICE CATEGORY] uppercase. Optional sub-display for
 * a secondary descriptor (only when it adds clarity — e.g. "ROOF REPLACEMENT"
 * under "METAL ROOFING"). Skip for already-complete names like "TPO ROOFING".
 *
 * Real H1: "[Service] in West Texas".
 * Title tag pattern: "[Service] West Texas | 5 Star Roofing".
 */

const STANDARD_LEFT_RULE_LINES = [
  "Serving the Texas Panhandle",
  "& all of West & Central Texas",
] as const;

export type ServiceHeroProps = {
  /** Primary service line, will be uppercased. */
  service: string;
  /** Optional secondary descriptor that sits below at ~60% size. */
  serviceDescriptor?: string;
  /** Override the hero photo per service if appropriate. */
  heroImageSrc?: string;
};

export function ServiceHero({
  service,
  serviceDescriptor,
  heroImageSrc = "/images/heroes/5star-new-hero.png",
}: ServiceHeroProps) {
  return (
    <AltHeroFrame
      heroImageSrc={heroImageSrc}
      displayText={service.toUpperCase()}
      subDisplay={serviceDescriptor?.toUpperCase()}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule="WEST TEXAS"
      eyebrow="5 Star Residential and Commercial Roofing"
      h1={`${service} in West Texas`}
      ctaText="Get Your Free Roof Inspection"
      displayScale={0.55}
    />
  );
}
