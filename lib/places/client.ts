import { unstable_cache } from "next/cache";
import { cache } from "react";
import type { PlaceDetails, PlaceReview } from "./types";

// Block 1h+1 (2026-05-10) — live aggregateRating + reviews source.
//
// Contract:
//   - Returns live PlaceDetails on success.
//   - Returns null on any failure (missing env, API error, bad shape).
//   - Never throws. Never fabricates. Callers MUST handle null by
//     omitting the rating-bearing UI entirely (no hardcoded fallbacks).
//
// Cost minimization:
//   - Single Place Details call per 24h (unstable_cache revalidate: 86400).
//   - Only 5 fields requested: name, rating, user_ratings_total, reviews, url.
//   - React cache() dedupes concurrent awaits within a single request.
//
// Legacy endpoint per Block 1h+1 brief. Legacy Places API returns max 5 reviews
// per call regardless of how many exist — we cap at 5 (the prompt's "top 6"
// target isn't reachable on this endpoint).

const PLACES_ENDPOINT = "https://maps.googleapis.com/maps/api/place/details/json";
const REVISION_REVALIDATE_SECONDS = 86400; // 24h
const REVIEW_RATING_FLOOR = 4;
const MAX_REVIEWS = 5;

interface PlacesApiResponse {
  status: string;
  error_message?: string;
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: PlaceReview[];
  };
}

async function fetchPlaceDetailsUncached(): Promise<PlaceDetails | null> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_FIVESTAR_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error(
      "[places] missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY or NEXT_PUBLIC_FIVESTAR_PLACE_ID",
    );
    return null;
  }

  const url = new URL(PLACES_ENDPOINT);
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url");
  url.searchParams.set("key", apiKey);

  let payload: PlacesApiResponse;
  try {
    const res = await fetch(url.toString(), { next: { revalidate: REVISION_REVALIDATE_SECONDS } });
    if (!res.ok) {
      console.error(`[places] HTTP ${res.status} from Places API`);
      return null;
    }
    payload = (await res.json()) as PlacesApiResponse;
  } catch (err) {
    console.error("[places] fetch threw:", err);
    return null;
  }

  if (payload.status !== "OK" || !payload.result) {
    console.error(`[places] non-OK status: ${payload.status} ${payload.error_message ?? ""}`);
    return null;
  }

  const r = payload.result;
  if (
    typeof r.rating !== "number" ||
    typeof r.user_ratings_total !== "number" ||
    !r.name ||
    !r.url
  ) {
    console.error("[places] response missing required fields:", Object.keys(r));
    return null;
  }

  const reviews: PlaceReview[] = Array.isArray(r.reviews)
    ? r.reviews
        .filter(
          (rv) =>
            typeof rv.rating === "number" &&
            rv.rating >= REVIEW_RATING_FLOOR &&
            typeof rv.text === "string" &&
            rv.text.trim().length > 0,
        )
        .sort((a, b) => (b.time ?? 0) - (a.time ?? 0))
        .slice(0, MAX_REVIEWS)
    : [];

  return {
    name: r.name,
    rating: r.rating,
    user_ratings_total: r.user_ratings_total,
    url: r.url,
    reviews,
  };
}

// unstable_cache: cross-request, 24h TTL, survives between requests in the same build.
const cachedFetch = unstable_cache(fetchPlaceDetailsUncached, ["fivestar-place-details-v1"], {
  revalidate: REVISION_REVALIDATE_SECONDS,
  tags: ["places"],
});

// React.cache: per-request dedupe so Hero + Schema + ReviewsSection share one in-flight promise.
export const getBusinessPlaceDetails = cache(async (): Promise<PlaceDetails | null> => {
  return cachedFetch();
});
