import { Star } from "lucide-react";
import Image from "next/image";
import type { PlaceReview } from "@/lib/places/types";

interface ReviewCardProps {
  review: PlaceReview;
  /** Fallback GBP URL used when a review lacks its own author_url. */
  businessGbpUrl: string;
}

const TEXT_TRUNCATE_CHARS = 280;

function formatReviewDate(unixSeconds: number): string {
  // Deterministic locale to avoid SSR/client hydration drift.
  const d = new Date(unixSeconds * 1000);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "America/Chicago",
  });
}

function truncate(text: string): { display: string; needsMore: boolean } {
  const trimmed = text.trim();
  if (trimmed.length <= TEXT_TRUNCATE_CHARS) {
    return { display: trimmed, needsMore: false };
  }
  // Cut at the last space within budget to avoid mid-word break.
  const cut = trimmed.slice(0, TEXT_TRUNCATE_CHARS);
  const lastSpace = cut.lastIndexOf(" ");
  return {
    display: (lastSpace > 200 ? cut.slice(0, lastSpace) : cut) + "…",
    needsMore: true,
  };
}

export function ReviewCard({ review, businessGbpUrl }: ReviewCardProps) {
  const { display, needsMore } = truncate(review.text);
  const readMoreHref = review.author_url || businessGbpUrl;
  const dateLabel = formatReviewDate(review.time);

  return (
    <article
      className="bg-white rounded-lg shadow-md border-2 border-transparent p-6 flex flex-col h-full"
      itemScope
      itemType="https://schema.org/Review"
    >
      <header className="flex items-center gap-3 mb-3">
        {review.profile_photo_url ? (
          <Image
            src={review.profile_photo_url}
            alt={`${review.author_name} profile photo`}
            width={40}
            height={40}
            unoptimized
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover bg-gray-100"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full bg-brand-gold-light flex items-center justify-center text-brand-brown font-bold"
            aria-hidden="true"
          >
            {review.author_name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-brand-brown truncate" itemProp="author">
            {review.author_name}
          </div>
          <div className="text-xs text-gray-500" title={dateLabel}>
            {review.relative_time_description}
          </div>
        </div>
      </header>

      <div className="flex gap-0.5 mb-3" aria-label={`${review.rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            className={
              n <= Math.round(review.rating)
                ? "w-4 h-4 fill-brand-gold-vibrant text-brand-gold-vibrant"
                : "w-4 h-4 text-gray-300"
            }
            aria-hidden="true"
          />
        ))}
        <meta itemProp="reviewRating" content={String(review.rating)} />
      </div>

      <p className="text-gray-700 text-sm leading-relaxed flex-1" itemProp="reviewBody">
        {display}
        {needsMore && (
          <>
            {" "}
            <a
              href={readMoreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown font-semibold hover:underline whitespace-nowrap"
            >
              Read more
            </a>
          </>
        )}
      </p>

      <meta itemProp="datePublished" content={new Date(review.time * 1000).toISOString()} />
    </article>
  );
}
