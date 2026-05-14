// Note: prior version of this page contained fabricated review content ("10+ Years
// Experience") and an aggregateRating JSON-LD with a fabricated reviewCount.
// Both were stripped in Block 1g (2026-05-10). Do not re-introduce.

import type { Metadata } from "next";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import { ReviewsSection } from "@/components/page-sections/ReviewsSection";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/reviews/" },
  // Page surfaces real Google reviews via the Places API but exists primarily
  // as a brand-trust landing — primary review canonical is the GBP itself.
  robots: { index: false, follow: true },
  title: "Reviews | 5 Star Roofing Amarillo",
  description:
    "Read real, verified reviews from 5 Star Roofing customers on Google. Hail damage, storm repair, full replacements. Free inspection — (806) 622-6041",
  openGraph: {
    title: "Reviews | 5 Star Roofing Amarillo",
    description:
      "Read real, verified reviews from 5 Star Roofing customers on Google. Hail damage, storm repair, full replacements. Free inspection — (806) 622-6041",
    url: "https://5starroofingpros.com/reviews/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/services-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const GBP_URL = "https://maps.google.com/?cid=11391687022057110315";

export default function Page() {
  return (
    <div className="min-h-screen">
      <InteriorHeroSection
        heroVariant="service"
        service="Customer Reviews"
        h1="What West Texas Says About 5 Star Roofing"
        eyebrow="Verified reviews from our Google Business Profile"
        image="/images/heroes/cities/amarillo-hero-1200.webp"
        ctaText="Read Reviews on Google"
        ctaHref={GBP_URL}
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews/" },
        ]}
      />

      <ReviewsSection
        heading="What our customers say"
        subheading="Pulled live from our Google Business Profile. We don't publish testimonials we can't source — every review here is verified by Google."
      />

      <section className="bg-gradient-to-br from-brand-gold to-brand-gold-vibrant text-white py-16 md:py-20">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to see every review?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-8">
            Our full review history — every star, every comment — lives on Google.
            Click below to read what Amarillo-area homeowners and businesses actually
            say about working with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-hero"
            >
              Read Reviews on Google →
            </a>
            <a
              href="tel:8066226041"
              className="btn-secondary-hero inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (806) 622-6041
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
