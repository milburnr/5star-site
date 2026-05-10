import { Star } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  /** The quote text. */
  quote: ReactNode;
  /** Author name. */
  authorName: string;
  /** Author location ("Shadow Hills") or role ("Homeowner"). */
  authorContext?: string;
  /** Star rating, 1-5. Default 5. */
  rating?: number;
  /** Optional source attribution ("Google Review", "Verified Customer"). */
  source?: string;
  className?: string;
}

/**
 * Quote + author + 5-star rating card. Replaces the
 * .testimonial-card-visual utility class scattered across pages
 * (Sample 6 lubbock-tx-roofing lines 110-149) with a typed component
 * that's safer to compose into other contexts.
 *
 * Visual: white bg, rounded-2xl, shadow-md hover:shadow-xl.
 * Yellow filled stars at top, italic quote in brand-brown leading-
 * relaxed, attribution at bottom in gray-600.
 *
 * MASTER §6 Tier 2 Gap #1 flagged the lack of a typed TestimonialCard
 * — this resolves that gap.
 */
export function TestimonialCard({
  quote,
  authorName,
  authorContext,
  rating = 5,
  source,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 flex flex-col',
        className,
      )}
    >
      <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-5 h-5',
              i < rating
                ? 'fill-brand-gold-vibrant text-brand-gold-vibrant'
                : 'text-gray-300',
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="text-gray-700 leading-relaxed italic mb-6 flex-grow">
        {typeof quote === 'string' ? `"${quote}"` : quote}
      </blockquote>
      <div className="border-t border-brand-gold/20 pt-4">
        <p className="font-semibold text-brand-brown">{authorName}</p>
        {authorContext && <p className="text-sm text-gray-600">{authorContext}</p>}
        {source && (
          <p className="text-xs text-gray-500 mt-1 italic">{source}</p>
        )}
      </div>
    </div>
  );
}
