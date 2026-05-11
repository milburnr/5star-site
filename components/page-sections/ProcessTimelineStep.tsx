import { cn } from "@/lib/utils";

interface ProcessTimelineStepProps {
  /** Step number (1-indexed). */
  number: number;
  title: string;
  description: string;
  /** Image URL. */
  imageSrc: string;
  /** Alt text. */
  imageAlt: string;
  imageSrcSet?: string;
  imageSizes?: string;
  className?: string;
}

/**
 * One step in a numbered process timeline. Designed for 3-col grid
 * layouts (homepage uses a 3x2 grid for 6 steps; city pages typically
 * use 4-step or 6-step variants per template-variation-rules.md Rule 10).
 *
 * Visual:
 *   - h-64 image with rounded-lg, object-cover
 *   - big numeral text-4xl in brand-gold-vibrant above the title
 *   - text-xl bold title in brand-brown
 *   - leading-relaxed description in gray-600
 *
 * Companion <ProcessTimeline> wrapper not included here; consumers
 * compose their own grid based on step count (3-col / 4-col / vertical).
 */
export function ProcessTimelineStep({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  imageSrcSet,
  imageSizes,
  className,
}: ProcessTimelineStepProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <img
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes={imageSizes}
        alt={imageAlt}
        width={768}
        height={512}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        loading="lazy"
        fetchPriority="low"
      />
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-4xl font-bold text-brand-gold-vibrant" aria-hidden="true">
          {number}
        </span>
        <h3 className="text-xl font-bold text-brand-brown">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
