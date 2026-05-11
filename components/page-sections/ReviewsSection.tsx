import { getBusinessPlaceDetails } from "@/lib/places/client";
import { ReviewCard } from "./ReviewCard";

interface ReviewsSectionProps {
  /** Section heading, e.g. "What Amarillo customers say". */
  heading?: string;
  /** Subheading rendered under the heading. */
  subheading?: string;
  className?: string;
}

/**
 * Renders a 3-up grid of Google reviews fetched from the Places API.
 * Server component — fetches at build time (output: "export"). Re-fetches
 * on every site rebuild; for live, schedule a rebuild cadence.
 *
 * No-fabrication contract: renders NOTHING when Places API returns null
 * or the reviews array is empty. Callers must tolerate the absence
 * (no layout collapse — section is wrapped in a max-width container
 * that has no border/padding when empty).
 *
 * Google attribution: per Places API ToS, displays "Reviews from Google"
 * with the official 4-color "G" mark at the section header.
 */
export async function ReviewsSection({
  heading = "What our customers say",
  subheading,
  className,
}: ReviewsSectionProps) {
  const places = await getBusinessPlaceDetails();
  if (!places || places.reviews.length === 0) {
    return null;
  }

  return (
    <section className={["py-12 md:py-16 bg-gray-50", className].filter(Boolean).join(" ")}>
      <div className="container-custom">
        <header className="mb-8 md:mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-2">{heading}</h2>
          {subheading && <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">{subheading}</p>}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <GoogleGMark className="w-4 h-4" />
            <a
              href={places.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-brand-brown hover:underline"
            >
              {places.rating.toFixed(1)} ★ from {places.user_ratings_total} Google reviews
            </a>
          </div>
        </header>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {places.reviews.map((rv, i) => (
            <ReviewCard key={`${rv.time}-${i}`} review={rv} businessGbpUrl={places.url} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Google "G" mark — the 4-color glyph from Google's branding guidelines.
 * Inlined as SVG (no extra asset). Used per Places API attribution ToS
 * when displaying Google reviews.
 */
function GoogleGMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-label="Google" role="img">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}
