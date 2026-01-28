/**
 * OptimizedBackground Component
 *
 * Hero section with responsive background images in modern formats.
 * Uses image-set CSS for automatic format selection and responsive sizing.
 *
 * Usage:
 *   <OptimizedBackground
 *     image="/images/hero.jpg"
 *     className="hero"
 *   >
 *     <h1>Hero Content</h1>
 *   </OptimizedBackground>
 */

import { ReactNode, CSSProperties } from 'react';

interface OptimizedBackgroundProps {
  image: string;  // Original path like "/images/hero.jpg"
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function OptimizedBackground({
  image,
  children,
  className = "",
  style = {}
}: OptimizedBackgroundProps) {
  const basePath = image.replace(/\.(jpg|jpeg|png)$/i, '');

  // Generate responsive background image CSS
  const backgroundStyle: CSSProperties = {
    ...style,
    backgroundImage: `
      image-set(
        url(${basePath}-2560w.avif) 1x type("image/avif"),
        url(${basePath}-1920w.avif) 1x type("image/avif"),
        url(${basePath}-2560w.webp) 1x type("image/webp"),
        url(${basePath}-1920w.webp) 1x type("image/webp"),
        url(${basePath}-1920w.jpg) 1x
      )
    `,
    backgroundSize: style.backgroundSize || 'cover',
    backgroundPosition: style.backgroundPosition || 'center',
    backgroundRepeat: style.backgroundRepeat || 'no-repeat'
  };

  return (
    <div
      className={className}
      style={backgroundStyle}
    >
      {children}
    </div>
  );
}

/**
 * For even better browser support, use this version with media queries:
 */
export function OptimizedBackgroundAdvanced({
  image,
  children,
  className = "",
  style = {}
}: OptimizedBackgroundProps) {
  const basePath = image.replace(/\.(jpg|jpeg|png)$/i, '');

  return (
    <div className={className} style={style}>
      {/* Preload the hero image for LCP */}
      <link
        rel="preload"
        as="image"
        href={`${basePath}-1920w.avif`}
        type="image/avif"
        media="(min-width: 1024px)"
      />
      <link
        rel="preload"
        as="image"
        href={`${basePath}-768w.avif`}
        type="image/avif"
        media="(max-width: 1023px)"
      />

      <style jsx>{`
        .bg-container {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Desktop - large images */
        @media (min-width: 1920px) {
          .bg-container {
            background-image: url(${basePath}-2560w.avif);
            background-image: image-set(
              url(${basePath}-2560w.avif) type("image/avif"),
              url(${basePath}-2560w.webp) type("image/webp"),
              url(${basePath}-2560w.jpg) type("image/jpeg")
            );
          }
        }

        @media (min-width: 1024px) and (max-width: 1919px) {
          .bg-container {
            background-image: url(${basePath}-1920w.avif);
            background-image: image-set(
              url(${basePath}-1920w.avif) type("image/avif"),
              url(${basePath}-1920w.webp) type("image/webp"),
              url(${basePath}-1920w.jpg) type("image/jpeg")
            );
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bg-container {
            background-image: url(${basePath}-1280w.avif);
            background-image: image-set(
              url(${basePath}-1280w.avif) type("image/avif"),
              url(${basePath}-1280w.webp) type("image/webp"),
              url(${basePath}-1280w.jpg) type("image/jpeg")
            );
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .bg-container {
            background-image: url(${basePath}-640w.avif);
            background-image: image-set(
              url(${basePath}-640w.avif) type("image/avif"),
              url(${basePath}-640w.webp) type("image/webp"),
              url(${basePath}-640w.jpg) type("image/jpeg")
            );
          }
        }
      `}</style>

      <div className="bg-container">
        {children}
      </div>
    </div>
  );
}
