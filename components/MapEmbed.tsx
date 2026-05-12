import { MapPin } from "lucide-react";

/**
 * MapEmbed — Google Maps iframe component that accepts a city/address
 * instead of hardcoding to Amarillo.
 *
 * Why this exists: ~149 service+location pages previously embedded an
 * iframe inline, all hardcoded to the Amarillo HQ Maps URL. Pages that
 * legitimately show the HQ (about, contact, Amarillo-specific) can keep
 * passing no props. Pages that serve a different city should pass `city`
 * (and optionally `address`) so the embed re-centers there.
 *
 * Resolution order for the embed query string:
 *   1. `query` (raw override — caller supplies the full place string)
 *   2. `address` (e.g. "1234 Main St, Lubbock, TX 79401")
 *   3. `city` (e.g. "Lubbock, TX")
 *   4. fall back to the Amarillo HQ embed URL with our place_id
 *
 * The fallback uses the canonical 5 Star HQ embed (place_id matched) so
 * existing call sites that pass no props render unchanged.
 */

const AMARILLO_HQ_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus";

const AMARILLO_HQ_ADDRESS = "2909 S Western St, Amarillo, TX 79109";

export type MapEmbedProps = {
  /** City name (e.g. "Lubbock, TX"). Used to re-center the map. */
  city?: string;
  /** Specific street address to drop a pin on. Takes precedence over city. */
  address?: string;
  /** Raw query string (caller-controlled). Highest precedence. */
  query?: string;
  /** Display address shown below the iframe. Defaults to HQ when no props passed. */
  displayAddress?: string;
  /** Optional CSS class for the iframe wrapper. */
  className?: string;
  /** Optional className for the iframe itself. */
  iframeClassName?: string;
  /** Width attribute. Defaults to 600. */
  width?: number;
  /** Height attribute. Defaults to 450. */
  height?: number;
  /** Suppress the address line below the map. */
  hideAddress?: boolean;
  /**
   * When true, render only the <iframe> with no wrapper divs or address line.
   * Useful for migrating inline embeds where the caller already provides its
   * own wrapping div for sizing (e.g. <div className="w-full h-[450px] ...">).
   */
  unwrapped?: boolean;
  /**
   * iframe width attribute as a string (e.g. "100%"). Overrides numeric width.
   * Useful when callers want responsive iframes inside their own sized wrapper.
   */
  widthAttr?: string;
  /** iframe height attribute as a string (e.g. "100%"). Overrides numeric height. */
  heightAttr?: string;
};

function buildEmbedSrc(query?: string, address?: string, city?: string): string {
  const q = query || address || city;
  if (!q) return AMARILLO_HQ_EMBED;
  // Use the basic "place" embed which accepts a free-form query.
  // Equivalent to https://www.google.com/maps/embed/v1/place?q=...
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
}

export function MapEmbed({
  city,
  address,
  query,
  displayAddress,
  className,
  iframeClassName = "rounded-xl shadow-lg",
  width = 600,
  height = 450,
  hideAddress = false,
  unwrapped = false,
  widthAttr,
  heightAttr,
}: MapEmbedProps) {
  const src = buildEmbedSrc(query, address, city);
  const isHQ = !city && !address && !query;
  const shownAddress = displayAddress ?? (isHQ ? AMARILLO_HQ_ADDRESS : address ?? city ?? "");
  const title = isHQ ? "Map of 5 Star Roofing — Amarillo office" : `Map of ${shownAddress}`;

  const iframe = (
    <iframe
      src={src}
      width={widthAttr ?? width}
      height={heightAttr ?? height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={unwrapped ? undefined : iframeClassName}
      title={title}
    />
  );

  if (unwrapped) {
    return iframe;
  }

  return (
    <div className={className}>
      <div className="flex justify-center">{iframe}</div>
      {!hideAddress && shownAddress && (
        <div className="text-center mt-6">
          <p className="text-lg text-gray-700 mb-2">
            <MapPin className="w-6 h-6 inline-block" /> {shownAddress}
          </p>
        </div>
      )}
    </div>
  );
}

export default MapEmbed;
