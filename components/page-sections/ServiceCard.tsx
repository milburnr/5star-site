import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  /** Image URL. */
  imageSrc: string;
  /** srcSet for responsive images. */
  imageSrcSet?: string;
  imageSizes?: string;
  imageAlt: string;
  /** Optional Lucide icon rendered next to the title. */
  icon?: LucideIcon;
  /** Footer link label. */
  ctaLabel?: string;
  className?: string;
}

/**
 * ServiceCard — editorial card pattern, no stat overlays, no fabricated
 * numbers. Real image on top, serif title, honest 2-3 sentence description,
 * one secondary CTA. The whole card is a link; the CTA element is decorative
 * (kept visible so the affordance is clear).
 *
 * Visuals:
 *   - .card-standard base (white surface, gold-tinted hairline border).
 *   - Hover: lift -2px, border brightens to primary gold (per ART-BIBLE §10).
 *   - Image overflow-hidden; image scales 1.04 on hover for a quiet lift.
 *   - Title in Cormorant Garamond via .heading-secondary.
 *   - CTA via .cta-secondary (ghost) — never a primary pill in a card.
 *
 * Forbidden in this component:
 *   - Stat overlays on the image ("20+ years", "97% satisfaction"...).
 *   - Fabricated rating badges or trust seals.
 *   - Drop shadows beyond what .card-standard already provides.
 */
export function ServiceCard({
  href,
  title,
  description,
  imageSrc,
  imageSrcSet,
  imageSizes,
  imageAlt,
  icon: Icon,
  ctaLabel = "Learn more",
  className,
}: ServiceCardProps) {
  return (
    <a href={href} className={cn("service-card-v2 card-standard group", className)}>
      <style dangerouslySetInnerHTML={{ __html: SERVICE_CARD_CSS }} />

      <div className="service-card-v2-media">
        <img
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes={imageSizes}
          alt={imageAlt}
          width={768}
          height={576}
          className="service-card-v2-img"
          loading="lazy"
          fetchPriority="low"
        />
      </div>

      <div className="service-card-v2-body">
        <h3 className="service-card-v2-title">
          {Icon && <Icon className="service-card-v2-title-icon" aria-hidden="true" />}
          <span>{title}</span>
        </h3>
        <p className="service-card-v2-desc">{description}</p>
        <span className="cta-secondary service-card-v2-cta on-cream" aria-hidden="true">
          {ctaLabel}
          <ArrowRight className="service-card-v2-cta-arrow" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

const SERVICE_CARD_CSS = `
  .service-card-v2 {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: var(--font-system-ui);
  }

  .service-card-v2-media {
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: rgba(214, 178, 116, 0.08);
  }

  .service-card-v2-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 480ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .service-card-v2:hover .service-card-v2-img {
    transform: scale(1.04);
  }

  .service-card-v2-body {
    padding: clamp(20px, 1.8vw, 28px);
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
  }

  .service-card-v2-title {
    font-family: var(--font-heading-serif);
    font-weight: 400;
    color: var(--color-cta-text-dark);
    font-size: clamp(1.25rem, 1.6vw, 1.55rem);
    line-height: 1.15;
    letter-spacing: -0.012em;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 200ms ease;
  }

  .service-card-v2:hover .service-card-v2-title {
    color: var(--color-burnt-orange);
  }

  .service-card-v2-title-icon {
    width: 24px;
    height: 24px;
    color: var(--color-burnt-orange);
    flex: 0 0 auto;
  }

  .service-card-v2-desc {
    font-size: 0.96rem;
    line-height: 1.6;
    color: rgba(43, 24, 16, 0.78);
    margin: 0;
    flex: 1;
  }

  .service-card-v2-cta {
    align-self: flex-start;
    margin-top: 6px;
    pointer-events: none;
  }

  .service-card-v2-cta-arrow {
    width: 16px;
    height: 16px;
    margin-left: 6px;
    transition: transform 220ms ease;
  }

  .service-card-v2:hover .service-card-v2-cta-arrow {
    transform: translateX(3px);
  }
`;
