import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  /** Image URL. Will be rendered with object-cover h-48 and group-hover scale-110. */
  imageSrc: string;
  /** srcSet for responsive images. Optional. */
  imageSrcSet?: string;
  imageSizes?: string;
  /** Alt text. */
  imageAlt: string;
  /** Optional Lucide icon rendered next to the title. */
  icon?: LucideIcon;
  /** Footer link label. Default "Learn More →". */
  ctaLabel?: string;
  className?: string;
}

/**
 * Image-led service card replicating the homepage services grid
 * pattern (app/page.tsx:202-256). The full card is a single <a>
 * with group-hover effects: image zoom, gold border reveal, blur-
 * bounce lift via the .card-blur-bounce utility class in globals.css.
 *
 * Visual:
 *   - white bg, rounded-lg, shadow-md
 *   - 2px transparent border that reveals brand-gold on hover
 *   - image scales 110% on hover (overflow hidden on parent)
 *   - card-blur-bounce overshoot animation on the card itself
 *   - "Learn More →" footer link with letter-spacing-on-hover
 *
 * Resolves the inline-class drift pattern flagged on 8/8 samples
 * (divergence-catalog cross-sample finding #2).
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
  ctaLabel = 'Learn More →',
  className,
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        'flex flex-col h-full bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold',
        className,
      )}
    >
      <img
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes={imageSizes}
        alt={imageAlt}
        width={768}
        height={576}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
        fetchPriority="low"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors flex items-center gap-2">
          {Icon && <Icon className="w-6 h-6 inline-block" aria-hidden="true" />}
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">
          {ctaLabel}
        </span>
      </div>
    </a>
  );
}
