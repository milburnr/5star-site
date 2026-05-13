import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import MapEmbed from "@/components/MapEmbed";
import { Phone, MapPin, Truck, Zap } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/service-areas/" },
  title: "Roofing Service Areas in West Texas | 5 Star Roofing",
  description:
    "5 Star Commercial Roofing serves Amarillo, Lubbock, Midland, Odessa, and 16+ West Texas cities. Residential and commercial roof replacement, hail damage repair, insurance claim assistance.",
  openGraph: {
    title: "Roofing Service Areas in West Texas | 5 Star Roofing",
    description:
      "5 Star Commercial Roofing serves Amarillo, Lubbock, Midland, Odessa, and 16+ West Texas cities. Residential and commercial roof replacement, hail damage repair, insurance claim assistance.",
    url: "https://5starroofingpros.com/service-areas/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://5starroofingpros.com/images/heroes/cities/amarillo-hero-1200.webp",
        width: 1200,
        height: 675,
        alt: "5 Star Commercial Roofing — serving West Texas from Amarillo to the Permian Basin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Featured cities — get the photo card treatment. Each has both a hub page
// AND a pre-optimized city hero in /public/images/heroes/cities/.
const FEATURED_CITIES = [
  {
    name: "Amarillo",
    href: "/amarillo-tx-roofing/",
    slug: "amarillo",
    blurb: "HQ city. Hundreds of completed jobs across Potter and Randall counties.",
  },
  {
    name: "Lubbock",
    href: "/lubbock-tx-roofing/",
    slug: "lubbock",
    blurb: "South Plains hail belt. Insurance claims + residential and commercial roof replacement.",
  },
  {
    name: "Midland",
    href: "/midland-tx-roofing/",
    slug: "midland",
    blurb: "Permian Basin energy hub. TPO, PVC, and metal for oilfield and commercial properties.",
  },
  {
    name: "Odessa",
    href: "/odessa-tx-roofing/",
    slug: "odessa",
    blurb: "Heavy industrial and chemical-resistant systems. Class 4 impact residential roofing.",
  },
  {
    name: "Canyon",
    href: "/canyon-texas-roofing/",
    slug: "canyon",
    blurb: "WT A&M area + Palo Duro region. Residential repair and replacement.",
  },
  {
    name: "Borger",
    href: "/borger-texas-roofing/",
    slug: "borger",
    blurb: "Hutchinson County. Petrochemical industrial roofing and residential hail repair.",
  },
];

// All other cities we serve — get a simple link tile, no photo.
const OTHER_CITIES = [
  { name: "Andrews", href: "/andrews-tx-roofing/" },
  { name: "Big Spring", href: "/big-spring-tx-roofing/" },
  { name: "Bushland", href: "/bushland-tx-roofing/" },
  { name: "Claude", href: "/claude-tx-roofing/" },
  { name: "Dumas", href: "/dumas-texas-roofing/" },
  { name: "Hereford", href: "/hereford-texas-roofing/" },
  { name: "Levelland", href: "/levelland-tx-roofing/" },
  { name: "Monahans", href: "/monahans-tx-roofing/" },
  { name: "Pampa", href: "/pampa-texas-roofing/" },
  { name: "Perryton", href: "/perryton-texas-roofing/" },
  { name: "Plainview", href: "/plainview-texas-roofing/" },
  { name: "Snyder", href: "/snyder-tx-roofing/" },
  { name: "Vega", href: "/vega-tx-roofing/" },
  { name: "Wildorado", href: "/wildorado-tx-roofing/" },
];

const ALL_CITY_NAMES = [...FEATURED_CITIES, ...OTHER_CITIES].map((c) => c.name);

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor"],
    name: "5 Star Roofing",
    telephone: "(806) 622-6041",
    url: "https://5starroofingpros.com/service-areas/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amarillo",
      addressRegion: "TX",
      postalCode: "79101",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 35.222, longitude: -101.8313 },
    areaServed: ALL_CITY_NAMES.map((city) => ({
      "@type": "City",
      name: city,
      address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" },
    })),
    serviceType: [
      "Residential Roofing",
      "Commercial Roofing",
      "Hail Damage Repair",
      "Storm Damage Restoration",
      "Roof Replacement",
      "Metal Roofing",
      "TPO Roofing",
    ],
    description:
      "Roofing services across West Texas — Panhandle, South Plains, and Permian Basin. Residential and commercial roof replacement, hail damage repair, and insurance claim assistance.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <InteriorHeroSection
        heroVariant="service"
        service="Service Areas"
        citySlug="amarillo"
        h1="Roofing Across West Texas"
        image="/images/heroes/cities/amarillo-hero-1200.webp"
        ctaText="Get Your Free Roof Inspection"
        ctaHref="/contact/"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas/" },
        ]}
      />

      {/* Lead — storm-response identity */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-brand-brown font-light leading-relaxed">
            We&apos;re a West Texas roofing crew based in Amarillo. We serve homeowners and
            commercial properties across {ALL_CITY_NAMES.length}+ cities — from the Texas Panhandle
            south through the South Plains and into the Permian Basin.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/"
              className="cta-primary"
            >
              Get Your Free Roof Inspection
            </a>
            <a
              href="tel:8066226041"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-brand-gold text-brand-brown font-semibold hover:bg-brand-gold/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> (806) 622-6041
            </a>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-brand-brown py-12 text-amber-50">
        <div className="container-custom grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-light text-brand-gold mb-2">
              {ALL_CITY_NAMES.length}+
            </div>
            <div className="text-sm uppercase tracking-wider text-amber-50/80">Cities Served</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-light text-brand-gold mb-2">10+</div>
            <div className="text-sm uppercase tracking-wider text-amber-50/80">Years in West TX</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-light text-brand-gold mb-2">Free</div>
            <div className="text-sm uppercase tracking-wider text-amber-50/80">Inspections</div>
          </div>
        </div>
      </section>

      {/* Featured cities */}
      <section className="py-20 bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-brand-brown mb-3">
              Where we work
            </h2>
            <p className="text-brand-brown/70 max-w-2xl mx-auto">
              Pick your city to see roof replacement, hail damage, and commercial services tailored
              to your area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={city.href}
                className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/heroes/cities/${city.slug}-hero-900.webp`}
                  alt={`Roofing in ${city.name}, TX`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-2xl font-light text-amber-50 mb-1">
                    {city.name}, TX
                  </h3>
                  <p className="text-sm text-amber-50/85 mb-3 leading-snug">
                    {city.blurb}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-brand-gold font-semibold">
                    View {city.name} Services →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-brand-brown mb-3">
              Our service radius
            </h2>
            <p className="text-brand-brown/70 max-w-2xl mx-auto">
              Based in Amarillo, serving the Texas Panhandle, South Plains, and Permian Basin.
              Free roof inspections across all listed cities.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-brand-gold/20 aspect-[16/9]">
            <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-20 bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-brand-brown mb-3">
              Smaller communities we serve
            </h2>
            <p className="text-brand-brown/70 max-w-2xl mx-auto">
              Same crew, same response time, same workmanship — in every town where the storms hit.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {OTHER_CITIES.map((city) => (
              <li key={city.href}>
                <Link
                  href={city.href}
                  className="block px-4 py-3 rounded-lg bg-white border border-brand-gold/20 text-brand-brown hover:border-brand-gold hover:bg-brand-gold/5 hover:shadow-md transition-all text-center font-medium"
                >
                  {city.name}, TX
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Don't see your city */}
      <section className="py-20 bg-gradient-to-b from-brand-brown to-[#1f1408] text-amber-50">
        <div className="container-custom max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-gold/20 mb-6">
            <MapPin className="w-7 h-7 text-brand-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-4">Don&apos;t see your city listed?</h2>
          <p className="text-amber-50/80 text-lg mb-8 max-w-2xl mx-auto">
            We routinely take jobs beyond this list across West and Central Texas. Call us with
            your address and we&apos;ll let you know whether your property falls inside our
            service area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/"
              className="cta-primary"
            >
              Request a Free Inspection
            </a>
            <a
              href="tel:8066226041"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-brand-gold text-amber-50 font-semibold hover:bg-brand-gold/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> (806) 622-6041
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
            <div className="flex gap-3 items-start">
              <Truck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-amber-50">Local crew</div>
                <div className="text-sm text-amber-50/70">West Texas roofers, not subcontractors</div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Zap className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-amber-50">Insurance experts</div>
                <div className="text-sm text-amber-50/70">We handle claims end to end</div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-amber-50">West Texas locals</div>
                <div className="text-sm text-amber-50/70">Headquartered in Amarillo since 2014</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
