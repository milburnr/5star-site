// Schema template utilities for SEO enhancement

interface CityData {
  name: string;
  slug: string;
  wikipedia: string;
  latitude?: number;
  longitude?: number;
}

interface ServiceData {
  name: string;
  slug: string;
  type: string;
}

/**
 * Generate LocalBusiness schema for location pages
 */
export function generateLocalBusinessSchema(city: CityData, service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `5 Star Commercial Roofing - ${city.name}`,
    "@id": `https://5starroofingpros.com/${service.slug}-${city.slug}/#localbusiness`,
    "image": `https://5starroofingpros.com/images/${city.slug}-location.jpg`,
    "telephone": "(806) 622-6041",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2909 S Western St",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79109",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.latitude || 35.1768,
      "longitude": city.longitude || -101.8590
    },
    "url": `https://5starroofingpros.com/${service.slug}-${city.slug}/`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "84",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "@id": city.wikipedia
    }
  };
}

/**
 * Generate FAQPage schema with local FAQs
 */
export function generateFAQPageSchema(city: CityData, service: ServiceData, faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate ServiceArea schema for neighborhoods
 */
export function generateServiceAreaSchema(city: CityData, neighborhoods: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ServiceArea",
    "name": `${city.name} Service Area`,
    "areaServed": neighborhoods.map(neighborhood => ({
      "@type": "Place",
      "name": neighborhood,
      "containedInPlace": {
        "@type": "City",
        "name": city.name
      }
    }))
  };
}

/**
 * Generate complete set of schemas for a location-service page
 */
export function generatePageSchemas(
  city: CityData,
  service: ServiceData,
  faqs: Array<{question: string, answer: string}>,
  neighborhoods: string[]
) {
  return {
    localBusiness: generateLocalBusinessSchema(city, service),
    faqPage: generateFAQPageSchema(city, service, faqs),
    serviceArea: generateServiceAreaSchema(city, neighborhoods)
  };
}
