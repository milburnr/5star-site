// Note: prior version of this page contained fabricated review content ("10+ Years
// Experience") and an aggregateRating JSON-LD with a fabricated reviewCount.
// Both were stripped in Block 1g (2026-05-10). Do not re-introduce.

import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Phone, Star } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/reviews/" },
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

export default function Page() {
  return (
    <div className="container-custom py-12">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews/" },
        ]}
      />

      <section className="max-w-2xl mx-auto text-center py-16">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-brand-gold text-brand-gold" />
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-6 text-brand-brown">Read Our Reviews on Google</h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our Google Business Profile is where our customers leave real, verified reviews. We
          don&apos;t publish testimonials we can&apos;t source — click below to read what
          Amarillo-area homeowners and businesses actually say about us.
        </p>

        <a
          href="https://maps.google.com/?cid=11391687022057110315"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-hero inline-block mb-6"
        >
          Read Reviews on Google →
        </a>

        <div className="mt-8">
          <a
            href="tel:8066226041"
            className="text-brand-gold font-semibold text-lg hover:text-brand-gold-vibrant"
          >
            <Phone className="w-5 h-5 inline-block mr-1" />
            Call (806) 622-6041 for a Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
