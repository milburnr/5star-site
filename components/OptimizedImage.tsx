/**
 * OptimizedImage Component
 *
 * Responsive image component that serves modern formats (AVIF, WebP)
 * with automatic fallback to JPEG for older browsers.
 *
 * Usage:
 *   <OptimizedImage
 *     src="/images/hero.jpg"
 *     alt="Description"
 *     priority={true}  // For above-the-fold images
 *     sizes="(max-width: 768px) 100vw, 50vw"
 *   />
 */

interface OptimizedImageProps {
  src: string;  // Original image path like "/images/hero.jpg"
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;  // Load eagerly for LCP images
  width?: number;
  height?: number;
}

const RESPONSIVE_WIDTHS = [2560, 1920, 1280, 768, 640];

export function OptimizedImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  width,
  height
}: OptimizedImageProps) {
  // Extract path and create base path for optimized versions
  const basePath = src.replace(/\.(jpg|jpeg|png)$/i, '');

  // Generate srcset for each format
  const generateSrcSet = (format: 'avif' | 'webp' | 'jpg') => {
    return RESPONSIVE_WIDTHS
      .map(w => `${basePath}-${w}w.${format} ${w}w`)
      .join(', ');
  };

  return (
    <picture>
      {/* AVIF - smallest, best quality (modern browsers) */}
      <source
        type="image/avif"
        srcSet={generateSrcSet('avif')}
        sizes={sizes}
      />

      {/* WebP - universal fallback */}
      <source
        type="image/webp"
        srcSet={generateSrcSet('webp')}
        sizes={sizes}
      />

      {/* JPEG - legacy browsers */}
      <img
        src={`${basePath}-1280w.jpg`}
        srcSet={generateSrcSet('jpg')}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        width={width}
        height={height}
      />
    </picture>
  );
}
