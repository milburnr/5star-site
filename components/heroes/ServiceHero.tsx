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

const DEFAULT_EYEBROW = "5 Star Residential and Commercial Roofing";

export type ServiceHeroProps = {
  /** Primary service line, will be uppercased. */
  service: string;
  /** Optional secondary descriptor that sits below at ~60% size. */
  serviceDescriptor?: string;
  /** Override the hero photo per service if appropriate. */
  heroImageSrc?: string;
  /** Override the auto-generated H1. Defaults to "[Service] in West Texas". */
  h1Override?: string;
  /** Override the eyebrow line. */
  eyebrowOverride?: string;
  /** CTA copy. Defaults to "Get Your Free Roof Inspection". */
  ctaText?: string;
  /** CTA href. Defaults to /contact/. */
  ctaHref?: string;
};

export function ServiceHero({
  service,
  serviceDescriptor,
  heroImageSrc = "/images/heroes/5star-new-hero-1200w.webp",
  h1Override,
  eyebrowOverride = DEFAULT_EYEBROW,
  ctaText = "Get Your Free Roof Inspection",
  ctaHref = "/contact/",
}: ServiceHeroProps) {
  return (
    <AltHeroFrame
      heroImageSrc={heroImageSrc}
      displayText={service.toUpperCase()}
      subDisplay={serviceDescriptor?.toUpperCase()}
      leftRuleLines={STANDARD_LEFT_RULE_LINES}
      rightRule="WEST TEXAS"
      eyebrow={eyebrowOverride}
      h1={h1Override ?? `${service} in West Texas`}
      ctaText={ctaText}
      ctaHref={ctaHref}
      displayScale={0.55}
    />
  );
}
