import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Phone, Star } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/gallery/" },
  title: "Project Gallery | 5 Star Roofing Portfolio",
  description:
    "View our completed roofing projects in Amarillo, Midland, Odessa, and Lubbock. Residential and commercial roofing photos from across West Texas. (806) 622-6041",
  openGraph: {
    title: "Project Gallery | 5 Star Roofing Portfolio",
    description:
      "View our completed roofing projects in Amarillo, Midland, Odessa, and Lubbock. Residential and commercial roofing photos from across West Texas. (806) 622-6041",
    url: "https://5starroofingpros.com/gallery/",
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
  keywords:
    "roofing gallery, roofing portfolio, Amarillo roofing projects, completed roofing projects, commercial roofing photos, residential roofing photos",
};

// Curated from R2 photo catalog (image-db-progress.json).
// Filter: condition=completed AND visualQuality in (hero, card).
// Excluded: damaged, in-progress, inspection-mark photos, low-quality detail shots.
type GalleryPhoto = {
  url: string;
  city: string;
  roofType: string;
};

const galleryPhotos: GalleryPhoto[] = [
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-channing-31-1280w.jpg", city: "Channing", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-channing-34-1280w.jpg", city: "Channing", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-memphis-42-1280w.jpg", city: "Memphis", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-plainview-12-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-14-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-plainview-14-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-plainview-20-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-plainview-26-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-plainview-29-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-plainview-35-1280w.jpg", city: "Plainview", roofType: "Standing Seam Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-15-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-19-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-20-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-21-1280w.jpg", city: "Plainview", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-23-1280w.jpg", city: "Plainview", roofType: "Standing Seam Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.jpg", city: "Amarillo", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.jpg", city: "Amarillo", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-18-1280w.jpg", city: "Amarillo", roofType: "EPDM" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-20-1280w.jpg", city: "Amarillo", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-amarillo-37-1280w.jpg", city: "Amarillo", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-35-1280w.jpg", city: "Canyon", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-31-1280w.jpg", city: "Channing", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-channing-33-1280w.jpg", city: "Channing", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-channing-33-1280w.jpg", city: "Channing", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-dumas-32-1280w.jpg", city: "Dumas", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-dumas-36-1280w.jpg", city: "Dumas", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-dumas-43-1280w.jpg", city: "Dumas", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-levelland-44-1280w.jpg", city: "Levelland", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-memphis-44-1280w.jpg", city: "Memphis", roofType: "R-Panel Metal" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-odessa-46-1280w.jpg", city: "Odessa", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-24-1280w.jpg", city: "Perryton", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-28-1280w.jpg", city: "Perryton", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-44-1280w.jpg", city: "Perryton", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-13-1280w.jpg", city: "Sanderson", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-17-1280w.jpg", city: "Sanderson", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-19-1280w.jpg", city: "Sanderson", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-22-1280w.jpg", city: "Sanderson", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-23-1280w.jpg", city: "Sanderson", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-23-1280w.jpg", city: "Stinnett", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-49-1280w.jpg", city: "Stinnett", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-50-1280w.jpg", city: "Stinnett", roofType: "Built-Up Gravel" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-15-1280w.jpg", city: "Wichita Falls", roofType: "Asphalt Shingles" },
  { url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-26-1280w.jpg", city: "Wichita Falls", roofType: "Asphalt Shingles" },
];

function altFor(photo: GalleryPhoto): string {
  if (photo.city && photo.roofType) {
    return `Completed ${photo.roofType.toLowerCase()} roof in ${photo.city}, TX by 5 Star Roofing`;
  }
  return "Completed roofing project by 5 Star Roofing";
}

function captionFor(photo: GalleryPhoto): string | null {
  if (photo.city && photo.roofType) {
    return `${photo.city}, TX — ${photo.roofType}`;
  }
  return null;
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery/" },
        ]}
      />

      {/* Hero Section */}
      <section className="hero-home relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-orange-900/40 to-yellow-900/30"></div>
        <FadeIn>
          <div className="container-custom relative z-10 py-20">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}
            >
              Our <span className="text-brand-gold-light">Work</span>
            </h1>
            <p
              className="text-xl md:text-3xl text-white leading-relaxed"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              Completed Roofing Projects Across{" "}
              <span className="text-brand-gold-light">West Texas</span>
            </p>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        {/* Introduction */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Real Projects, Real Results</h2>
            <p className="text-xl text-gray-600 mb-4">
              Browse our portfolio of completed roofing projects throughout{" "}
              <a
                href="/amarillo-texas-roofing/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                Amarillo
              </a>
              ,{" "}
              <a
                href="/midland-tx-roofing/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                Midland
              </a>
              ,{" "}
              <a
                href="/odessa-tx-roofing/"
                className="text-brand-brown hover:text-brand-gold underline font-semibold"
              >
                Odessa
              </a>
              , and surrounding{" "}
              <a
                href="/service-areas/"
                className="text-brand-brown hover:text-brand-gold underline"
              >
                West Texas communities
              </a>
              .
            </p>
          </div>
        </FadeIn>

        {/* Unified Gallery Grid - completed work only */}
        <FadeIn>
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryPhotos.map((photo) => {
                const caption = captionFor(photo);
                return (
                  <figure
                    key={photo.url}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[4/3] bg-gray-100">
                      <Image
                        src={photo.url}
                        alt={altFor(photo)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    {caption && (
                      <figcaption className="px-4 py-3 text-sm text-gray-700 text-center">
                        {caption}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us Stats */}
        <FadeIn>
          <section className="mb-20 bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-brand-brown mb-8 text-center">
              Why West Texas Trusts Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">16+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">Class 4</div>
                <div className="text-gray-600">Hail-Rated Shingles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">
                  <span className="flex gap-0.5 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </div>
                <div className="text-gray-600">5-Star Rated</div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us transform your roof with the same quality and attention to detail you see in
              our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8066226041"
                className="bg-white text-brand-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg"
              >
                <Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041
              </a>
              <a
                href="/contact/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-brown transition-all text-lg"
              >
                Request Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "5 Star Commercial Roofing Project Gallery",
            description: "Completed roofing projects in Amarillo, Midland, Odessa, and West Texas",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2909 S Western St",
                addressLocality: "Amarillo",
                addressRegion: "TX",
                postalCode: "79109",
              },
            },
          }),
        }}
      />
    </div>
  );
}
