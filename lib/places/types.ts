// Typed slice of the Google Places Details (legacy) response.
// Only fields requested by getBusinessPlaceDetails() are typed here —
// the legacy API returns more, but every field costs SKU and we don't read them.

export interface PlaceReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number; // unix seconds
  language?: string;
}

export interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  url: string; // canonical GBP page
  reviews: PlaceReview[]; // already filtered (rating>=4) + sorted (time desc) + capped at 5
}
