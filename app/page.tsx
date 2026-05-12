import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { InsuranceLogos } from "@/components/InsuranceLogos";
import { MaterialBrands } from "@/components/MaterialBrands";
import { ContactSection } from "@/components/ContactSection";
import { HomeHero } from "@/components/heroes/HomeHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  Check,
  ClipboardList,
  CloudHail,
  CloudLightning,
  Home,
  MapPin,
  Phone,
  Search,
  Star,
} from "lucide-react";
import { getBusinessPlaceDetails } from "@/lib/places/client";
import { ReviewsSection } from "@/components/page-sections/ReviewsSection";

export const metadata: Metadata = {
  title: "Amarillo Roofing Company | Residential & Commercial | 5 Star Roofing",
  description:
    "Amarillo's trusted residential & commercial roofer serving the Texas Panhandle. Hail damage repair, roof replacement & free storm inspections. Serving the Texas Panhandle. Call (806) 622-6041",
  keywords:
    "amarillo roofing, roofing company amarillo tx, residential roofing amarillo, commercial roofing amarillo, hail damage repair amarillo, roof repair amarillo, texas panhandle roofer, storm damage roof repair, insurance claims roofing, midland roofing, odessa roofing",
  openGraph: {
    title: "Amarillo Roofing Company | Residential & Commercial | 5 Star Roofing",
    description:
      "Amarillo's trusted residential & commercial roofer serving the Texas Panhandle. 10+ years specializing in hail damage repair and insurance claims across the Texas Panhandle.",
    url: "https://5starroofingpros.com",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarillo Roofing Company | Residential & Commercial | 5 Star Roofing",
    description:
      "Amarillo residential & commercial roofing experts. Free storm inspections & insurance claim help.",
  },
  alternates: {
    canonical: "https://5starroofingpros.com",
  },
};

export default async function Page() {
  const places = await getBusinessPlaceDetails();
  return (
    <>
      {/* Hero preload: <HomeHero> emits its own <link rel="preload"> for the
          1200w WebP and uses CSS image-set() to swap in 600w (≤1024px) or
          1920w (HD) variants. Earlier same-origin preload is removed
          because it referenced the old `/images/home-hero-*.webp` set that
          no longer drives the homepage hero. */}

      {places && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Commercial Roofing",
              url: "https://5starroofingpros.com",
              telephone: "+18066226041",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2909 S Western St",
                addressLocality: "Amarillo",
                addressRegion: "TX",
                postalCode: "79109",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: places.rating,
                reviewCount: places.user_ratings_total,
                bestRating: 5,
                worstRating: 1,
              },
            }),
          }}
        />
      )}

      {/* Editorial homepage hero — WEST TEXAS display type, single gradient
          CTA, asymmetric photo overlay. See ART-BIBLE-5STAR.md §1-9. */}
      <HomeHero />

      <ReviewsSection heading="What Amarillo customers say" />

      {/* Trust Signals - Compact on mobile */}
      <FadeIn>
        {/* Trust Signals: simplified background. Original used a bg-gradient
            + two radial-gradient overlays which paint expensively on mobile
            GPU (each radial = separate composite layer). Solid amber-50 looks
            nearly identical and saves ~300ms on throttled mobile. */}
        <section className="section-major bg-amber-50 relative overflow-hidden below-fold">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 text-center">
              <FadeIn delay={0.1}>
                <a
                  href="/about/"
                  className="block bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer after:content-[''] after:block after:w-12 after:h-0.5 after:bg-brand-gold-vibrant after:mx-auto after:mt-3"
                >
                  <div className="text-brand-brown font-heading font-bold text-4xl md:text-5xl mb-1 sm:mb-2 md:mb-3">
                    Class 4
                  </div>
                  <div className="text-gray-primary font-semibold text-sm md:text-lg">
                    Hail-Rated
                  </div>
                </a>
              </FadeIn>
              <FadeIn delay={0.2}>
                <a
                  href="/contact/"
                  className="block bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer after:content-[''] after:block after:w-12 after:h-0.5 after:bg-brand-gold-vibrant after:mx-auto after:mt-3"
                >
                  <div className="text-brand-brown font-heading font-bold text-4xl md:text-5xl mb-1 sm:mb-2 md:mb-3">
                    <AnimatedCounter to={100} suffix="%" />
                  </div>
                  <div className="text-gray-primary font-semibold text-sm md:text-lg">
                    Free Inspections
                  </div>
                </a>
              </FadeIn>
              <FadeIn delay={0.3}>
                <a
                  href="/reviews/"
                  className="block bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer after:content-[''] after:block after:w-12 after:h-0.5 after:bg-brand-gold-vibrant after:mx-auto after:mt-3"
                >
                  <div className="text-brand-brown font-heading font-bold text-4xl md:text-5xl mb-1 sm:mb-2 md:mb-3">
                    <span className="flex gap-0.5 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-8 h-8 fill-brand-gold-vibrant text-brand-gold-vibrant"
                        />
                      ))}
                    </span>
                  </div>
                  <div className="text-gray-primary font-semibold text-sm md:text-lg">
                    5-Star Rated
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Phase 12 Stream C (12.14): insurance carrier trust strip */}
      <InsuranceLogos />

      {/* Definition Blocks - AI Overview / Featured Snippet Optimized */}
      <FadeIn>
        <section id="hail-damage-definitions" className="section-sub bg-white below-fold">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Understanding Hail Damage Roofing in Amarillo
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  What Is Hail Damage Roof Repair?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hail damage roof repair is the process of restoring a roof after hailstones have
                  compromised shingles, flashing, or underlayment. In West Texas, where severe
                  storms frequently produce golf ball-sized hail or larger, repairs may range from
                  replacing individual damaged shingles to full roof replacement. A professional
                  inspection determines the extent of damage and appropriate repair scope.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  What Is a Free Roof Inspection?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A free roof inspection is a no-cost assessment performed by a licensed roofing
                  contractor to evaluate your roof's condition after a storm. In Amarillo, Midland,
                  and Odessa, reputable contractors document hail impacts, cracked shingles, and
                  granule loss with photos and measurements. This documentation supports insurance
                  claims and helps homeowners understand whether repairs are needed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  What Is a Class 4 Impact-Resistant Shingle?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A Class 4 impact-resistant shingle is a roofing material rated to withstand the
                  highest level of impact testing under UL 2218 standards. These shingles are
                  engineered to resist cracking and splitting from hail up to 2 inches in diameter.
                  Many Texas insurers offer premium discounts for Class 4 roofs, making them a
                  practical choice for West Texas homeowners.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-brand-gold/20 shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  How the Roof Insurance Claim Process Works in Texas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The roof insurance claim process in Texas typically involves four steps: (1)
                  document the damage with photos immediately after the storm, (2) contact your
                  insurance company to file a claim, (3) schedule a professional roof inspection to
                  assess full damage, and (4) meet with your insurance adjuster on-site. Your
                  roofing contractor can provide documentation and communicate directly with your
                  adjuster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Services Grid */}
        <FadeIn direction="up">
          <section className="mb-16 below-fold">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Specialized Services</h2>
            <p className="text-center text-gray-text mb-8 max-w-2xl mx-auto">
              From hail damage repair to full roof replacements, we handle every roofing need for
              Amarillo homeowners.{" "}
              <a
                href="/services/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium underline"
              >
                View all roofing services
              </a>
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <FadeIn delay={0.1} direction="left">
                <a
                  href="/hail-damage-repair-amarillo/"
                  className="flex flex-col h-full bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold"
                >
                  <img
                    src="/images/services/hail-damage-repair.webp"
                    width={768}
                    height={576}
                    alt="Wide aerial of a gray architectural shingle roof with numerous hail strikes circled in chalk plus vents and skylight — strong hail-inspec... — 5 Star Roofing"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                      <CloudHail className="w-6 h-6 inline-block" /> Hail Damage Repair
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Expert assessment and repair of hail-damaged roofs. We know exactly what
                      insurance adjusters look for.
                    </p>
                    <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">
                      Learn More →
                    </span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <a
                  href="/storm-damage-repair-amarillo/"
                  className="flex flex-col h-full bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold"
                >
                  <img
                    src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-49-1280w.webp"
                    srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-49-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-stinnett-49-1280w.webp 1280w"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    alt="Wide-angle view of a completed gray dimensional shingle roof after storm damage restoration — 5 Star Roofing"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                      <CloudLightning className="w-6 h-6 inline-block" /> Storm Damage Restoration
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Wind, rain, and severe weather damage? We handle all types of storm-related
                      roof repairs.
                    </p>
                    <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">
                      Learn More →
                    </span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.3} direction="right">
                <a
                  href="/roof-inspections-amarillo/"
                  className="flex flex-col h-full bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold"
                >
                  <img
                    src="/images/process/01-inspection.webp"
                    width={768}
                    height={355}
                    alt="5 Star Roofing crew on a residential roof performing a free inspection in Canyon, Texas"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                      <Search className="w-6 h-6 inline-block" /> Free Roof Inspections
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive roof assessments with detailed documentation for insurance
                      claims.
                    </p>
                    <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">
                      Learn More →
                    </span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.4} direction="left">
                <a
                  href="/residential-roofing/"
                  className="block bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold"
                >
                  <img
                    src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-19-1280w.webp"
                    srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-19-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-19-1280w.webp 1280w"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    alt="Newly installed gray asphalt shingle residential roof showing clean valley work and ridge lines — 5 Star Roofing"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                      <Home className="w-6 h-6 inline-block" /> Residential Roofing
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Complete roofing solutions for homeowners. New installations, replacements,
                      and repairs.
                    </p>
                    <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">
                      Learn More →
                    </span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.5} direction="up">
                <a
                  href="/commercial-roofing/"
                  className="block bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold"
                >
                  <img
                    src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-9-1280w.webp"
                    srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-9-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-9-1280w.webp 1280w"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    alt="Commercial flat gravel roof with concrete parapet — 5 Star Roofing TPO and built-up systems"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                      <Building2 className="w-6 h-6 inline-block" /> Commercial Roofing
                    </h3>
                    <p className="text-gray-600 mb-4">
                      TPO, PVC, and built-up roofing systems for businesses and commercial
                      properties.
                    </p>
                    <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">
                      Learn More →
                    </span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.6} direction="right">
                <a
                  href="/contact/"
                  className="block bg-white rounded-lg shadow-md card-blur-bounce overflow-hidden group border-2 border-transparent hover:border-brand-gold"
                >
                  <img
                    src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-15-1280w.webp"
                    srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-15-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-15-1280w.webp 1280w"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    alt="Hail impact points circled with white chalk on a residential shingle roof — documentation packet prepared for insurance adjuster review"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                      <ClipboardList className="w-6 h-6 inline-block" /> Insurance Claims Help
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We work directly with your insurance company to maximize your coverage.
                    </p>
                    <span className="text-brand-gold font-semibold group-hover:tracking-wider transition-all">
                      Learn More →
                    </span>
                  </div>
                </a>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us */}
        <section className="mb-16 bg-brand-gold-light p-8 rounded-lg below-fold">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Amarillo Chooses 5 Star Roofing
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div>
                <Check className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Local Hail Damage Specialists</h3>
                <p>
                  We understand West Texas weather and know how to identify and{" "}
                  <a
                    href="/hail-damage-repair-amarillo/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    repair hail damage correctly
                  </a>
                  . The Texas Panhandle experiences 8-12 hailstorms annually—we've seen it all.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <Check className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Insurance Claim Experts</h3>
                <p>
                  We handle all the paperwork and work directly with adjusters to get you full
                  coverage. From{" "}
                  <a
                    href="/roof-inspections-amarillo/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    free roof inspections
                  </a>{" "}
                  to claim filing, we manage the entire process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <Check className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Fast post-storm documentation</h3>
                <p>
                  Insurance-grade storm-damage documentation: After a storm, we document damage with
                  photos and adjuster-ready reports, then handle{" "}
                  <a
                    href="/storm-damage-repair-amarillo/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    storm damage repair
                  </a>{" "}
                  scheduling once your claim is approved.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <Check className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                <p>
                  Fully licensed in Texas with comprehensive insurance coverage for your protection.
                  Serving{" "}
                  <a
                    href="/service-areas/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    Amarillo and the Texas Panhandle
                  </a>
                  , with additional coverage in Midland and Odessa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <Check className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Workmanship</h3>
                <p>
                  Over 10 years of experience delivering exceptional{" "}
                  <a
                    href="/residential-roofing/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    residential
                  </a>{" "}
                  and{" "}
                  <a
                    href="/commercial-roofing/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    commercial roofing
                  </a>{" "}
                  results across Amarillo and the Texas Panhandle. See why homeowners call us{" "}
                  <a
                    href="/amarillos-best-roofer/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    Amarillo&apos;s best roofer
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <Check className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Comprehensive Warranties</h3>
                <p>
                  We stand behind our work with industry-leading warranty protection. All{" "}
                  <a
                    href="/asphalt-shingle-roofing-amarillo/"
                    className="text-brand-brown hover:text-brand-gold underline"
                  >
                    Class 4 impact-resistant shingles
                  </a>{" "}
                  include manufacturer warranties up to 50 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Transformations — simplified background (see trust
            signals section above for rationale on removing radial gradients). */}
        <section className="section-sub bg-white relative overflow-hidden below-fold">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
              See Our Quality Work
            </h2>
            <p className="text-center text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-600">
              Real results from Amarillo, Midland, and Odessa homeowners. Click any project to learn
              more about our services in that area.
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              {/* Project 1 - Hail Damage */}
              <FadeIn delay={0.1}>
                <a
                  href="/hail-damage-repair-amarillo/"
                  className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.webp"
                      srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.webp 1280w"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      alt="Completed gray architectural shingle roof installation in Amarillo after hail damage restoration — 5 Star Roofing"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">
                      Hail Damage Restoration - Amarillo
                    </h3>
                    <p className="text-gray-600">
                      Complete roof replacement after severe hailstorm with Class 4 impact-resistant
                      shingles.
                    </p>
                  </div>
                </a>
              </FadeIn>

              {/* Project 2 - Storm Damage */}
              <FadeIn delay={0.2}>
                <a
                  href="/wind-damage-repair-midland/"
                  className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.webp"
                      srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-13-1280w.webp 1280w"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      alt="Aerial view of a completed residential roof with gray architectural asphalt shingles after wind damage repair — 5 Star Roofing"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">
                      Wind Damage Repair - Midland
                    </h3>
                    <p className="text-gray-600">
                      Storm damage restoration with upgraded wind-resistant materials.
                    </p>
                  </div>
                </a>
              </FadeIn>

              {/* Project 3 - Roof Replacement */}
              <FadeIn delay={0.3}>
                <a
                  href="/roof-replacement-odessa/"
                  className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-odessa-46-1280w.webp"
                      srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-odessa-46-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-odessa-46-1280w.webp 1280w"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      alt="Aerial view of a completed residential roof replacement with gray asphalt shingles in Odessa — 5 Star Roofing"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">
                      Roof Replacement - Odessa
                    </h3>
                    <p className="text-gray-600">
                      Complete upgrade with premium architectural shingles for enhanced curb appeal.
                    </p>
                  </div>
                </a>
              </FadeIn>

              {/* Project 4 - Commercial TPO */}
              <FadeIn delay={0.4}>
                <a
                  href="/tpo-roofing-midland/"
                  className="flex flex-col h-full bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg overflow-hidden card-blur-bounce border border-brand-gold/20 group cursor-pointer"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src="/images/materials/aerial-commercial-flat.png"
                      width={361}
                      height={209}
                      alt="Aerial view of a Midland commercial building with a completed white TPO membrane flat roof — 5 Star Roofing"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-brand-brown group-hover:text-brand-gold transition-colors">
                      Commercial TPO Installation - Midland
                    </h3>
                    <p className="text-gray-600">
                      Modern TPO system with 20-year warranty for commercial property.
                    </p>
                  </div>
                </a>
              </FadeIn>
            </div>

            <div className="text-center">
              <a
                href="/gallery/"
                className="inline-block bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-white px-8 py-4 rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                View Our Complete Gallery →
              </a>
            </div>
          </div>
        </section>

        {/* Texas Panhandle Hail Statistics */}
        <FadeIn>
          <section className="section-sub bg-gradient-to-br from-gray-50 via-amber-50/40 to-gray-50 rounded-3xl relative overflow-hidden below-fold">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_60%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
                Why West Texas Needs Impact-Resistant Roofing
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <FadeIn delay={0.1}>
                  <div className="text-center p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/30">
                    <div className="text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">
                      8-12
                    </div>
                    <div className="text-xl font-bold mb-3 text-brand-brown">
                      Hailstorms Per Year
                    </div>
                    <p className="text-gray-600">
                      The Texas Panhandle sits in America's hail belt with frequent severe storms
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="text-center p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/30">
                    <div className="text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">
                      $10K+
                    </div>
                    <div className="text-xl font-bold mb-3 text-brand-brown">
                      Average Claim Value
                    </div>
                    <p className="text-gray-600">
                      Most hail damage repairs in Amarillo, Midland, and Odessa exceed $10,000
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="text-center p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-brand-gold/30">
                    <div className="text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-vibrant bg-clip-text text-transparent mb-3">
                      72hrs
                    </div>
                    <div className="text-xl font-bold mb-3 text-brand-brown">Inspection Window</div>
                    <p className="text-gray-600">
                      Insurance companies require documentation within 72 hours of storm damage
                    </p>
                  </div>
                </FadeIn>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-brand-gold-vibrant pl-6 pr-8 py-8 rounded-r-2xl shadow-md">
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-brand-brown flex items-center gap-2">
                  <MapPin className="w-6 h-6 inline-block text-brand-gold-vibrant" /> Did You Know?
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                  Amarillo, Midland, and Odessa are among the top 20 cities in the U.S. for hail
                  frequency. Class 4 impact-resistant shingles can reduce hail damage by up to 90%
                  and qualify you for 10-30% insurance premium discounts in West Texas.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Roofing Materials Section */}
        <section className="section-sub bg-gradient-to-b from-white via-orange-50/20 to-white relative overflow-hidden below-fold">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.06),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.06),transparent_50%)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
              Premium Roofing Materials for Amarillo Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
                <img
                  src="/images/materials/impact-resistant-shingles.webp"
                  width={768}
                  height={576}
                  alt="TAMKO Titan XT Class 4 impact-resistant shingle bundles staged on a roof for installation — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  fetchPriority="low"
                />
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                  Impact-Resistant Asphalt Shingles
                </h3>
                <p className="text-gray-600 mb-4">
                  UL 2218 Class 4 rated shingles tested to withstand 2-inch hail strikes. Perfect
                  for residential roofing in Amarillo, Midland, and Odessa. Available in
                  architectural and luxury styles.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>20-50 year warranties</li>
                  <li>Insurance premium discounts</li>
                  <li>Multiple color options</li>
                  <li>Wind resistance up to 130 mph</li>
                </ul>
                <a
                  href="/asphalt-shingle-roofing-amarillo/"
                  className="text-brand-brown font-semibold hover:text-brand-gold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-plainview-35-1280w.webp"
                  width={1280}
                  height={853}
                  alt="Wide-angle view of a standing seam metal roof on an industrial facility — 5 Star Roofing West Texas"
                  className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  fetchPriority="low"
                />
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                  Standing Seam Metal Roofing
                </h3>
                <p className="text-gray-600 mb-4">
                  The ultimate hail protection. Metal roofing may dent but remains watertight even
                  after severe hailstorms. Increasingly popular across the Texas Panhandle.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>50+ year lifespan</li>
                  <li>Energy-efficient reflective coating</li>
                  <li>Fire-resistant (Class A rating)</li>
                  <li>Wind resistance 140+ mph</li>
                </ul>
                <a
                  href="/roofing-methods/"
                  className="text-brand-brown font-semibold hover:text-brand-gold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-36-1280w.webp"
                  width={1280}
                  height={717}
                  alt="Flat commercial roof during TPO installation showing membrane surface — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  fetchPriority="low"
                />
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                  TPO Commercial Roofing
                </h3>
                <p className="text-gray-600 mb-4">
                  Single-ply white membrane roofing for commercial flat roofs. Heat-welded seams
                  create watertight protection for Midland-Odessa industrial facilities and Amarillo
                  businesses.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>15-25 year warranties</li>
                  <li>Energy Star rated</li>
                  <li>Hail and puncture resistant</li>
                  <li>Low maintenance</li>
                </ul>
                <a
                  href="/commercial-roofing/"
                  className="text-brand-brown font-semibold hover:text-brand-gold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-brand-gold transition-all duration-300 group">
                <img
                  src="/images/materials/epdm-commercial.webp"
                  width={1280}
                  height={720}
                  alt="EPDM rubber membrane installation on a commercial flat roof — illustrative example of black single-ply rubber roofing — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  fetchPriority="low"
                />
                <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-gold transition-colors">
                  EPDM Rubber Roofing
                </h3>
                <p className="text-gray-600 mb-4">
                  Cost-effective black rubber membrane for commercial and industrial applications.
                  Excellent track record in West Texas's extreme temperature swings.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>15-30 year lifespan</li>
                  <li>Excellent UV resistance</li>
                  <li>Temperature stable (-40°F to 300°F)</li>
                  <li>Budget-friendly option</li>
                </ul>
                <a
                  href="/commercial-roofing/"
                  className="text-brand-brown font-semibold hover:text-brand-gold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 12 Stream C (12.15): residential material brand strip */}
        <MaterialBrands variant="residential" />

        {/* Our Process Section - Visual Timeline */}
        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 p-12 rounded-3xl shadow-lg relative overflow-hidden below-fold">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(203,213,225,0.3),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Our Proven 6-Step Process
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 — real 5 Star crew inspecting a roof in Canyon, TX */}
                <div className="text-center">
                  <img
                    src="/images/process/01-inspection.webp"
                    width={768}
                    height={355}
                    alt="5 Star Roofing crew inspecting a residential shingle roof in Canyon, Texas — free hail damage assessment"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="text-4xl font-bold text-brand-gold mb-2">1</div>
                  <h3 className="text-xl font-bold mb-2">Free Inspection</h3>
                  <p className="text-gray-600">
                    We thoroughly inspect your roof for hail damage, wind damage, and other issues.
                    Free, no-obligation assessment within 24-48 hours.
                  </p>
                </div>

                {/* Step 2 — measuring core sample on a flat roof */}
                <div className="text-center">
                  <img
                    src="/images/process/02-documentation.webp"
                    width={768}
                    height={1024}
                    alt="Roofing technician taking measurements with a tape measure during damage documentation — 5 Star Roofing"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="text-4xl font-bold text-brand-gold mb-2">2</div>
                  <h3 className="text-xl font-bold mb-2">Documentation</h3>
                  <p className="text-gray-600">
                    We document all damage with photos and measurements for your insurance claim.
                  </p>
                </div>

                {/* Step 3 — chalk-marked hail impacts (the documentation packet
                that goes to the insurance adjuster) */}
                <div className="text-center">
                  <img
                    src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-50-1280w.webp"
                    srcSet="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-50-640w.webp 640w, https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-50-1280w.webp 1280w"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    alt="Hail impact damage chalk-marked on a residential shingle roof — documentation prepared for insurance adjuster review"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="text-4xl font-bold text-brand-gold mb-2">3</div>
                  <h3 className="text-xl font-bold mb-2">Insurance Claim</h3>
                  <p className="text-gray-600">
                    We handle all paperwork and meet with your insurance adjuster to maximize your
                    coverage.
                  </p>
                </div>

                {/* Step 4 — full crew on a tearoff/install jobsite */}
                <div className="text-center">
                  <img
                    src="/images/process/04-installation.webp"
                    width={768}
                    height={576}
                    alt="5 Star Roofing crew installing a new shingle roof during a residential tearoff in West Texas"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="text-4xl font-bold text-brand-gold mb-2">4</div>
                  <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                  <p className="text-gray-600">
                    Our experienced crew installs your new roof using premium materials and proven
                    techniques.
                  </p>
                </div>

                {/* Step 5 — close-up of finished chimney flashing & cricket */}
                <div className="text-center">
                  <img
                    src="/images/process/05-quality.webp"
                    width={768}
                    height={576}
                    alt="Finished chimney flashing and cricket detail on a completed shingle roof — 5 Star Roofing quality inspection"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="text-4xl font-bold text-brand-gold mb-2">5</div>
                  <h3 className="text-xl font-bold mb-2">Quality Inspection</h3>
                  <p className="text-gray-600">
                    We perform a final inspection to ensure everything meets our high standards.
                  </p>
                </div>

                {/* Step 6 — beautiful curb-appeal exterior of a finished home */}
                <div className="text-center">
                  <img
                    src="/images/services/hail-damage-repair.webp"
                    width={768}
                    height={576}
                    alt="Wide aerial of a gray architectural shingle roof with numerous hail strikes circled in chalk plus vents and skylight — strong hail-inspec... — 5 Star Roofing"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <div className="text-4xl font-bold text-brand-gold mb-2">6</div>
                  <h3 className="text-xl font-bold mb-2">Your Satisfaction</h3>
                  <p className="text-gray-600">
                    We walk you through the completed work and provide all warranty documentation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Service Areas */}
        <section className="mb-16 below-fold">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Service Areas Across the Texas Panhandle &amp; Beyond
          </h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            We proudly serve Amarillo and the entire Texas Panhandle, with additional coverage in
            Midland, Odessa, and surrounding communities. Expert hail damage repair and roofing
            services wherever you are.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-brand-gold-light rounded-lg hover:bg-brand-gold-vibrant/10 transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">Texas Panhandle</h3>
              <div className="space-y-1 text-gray-700">
                <div>
                  <a
                    href="/amarillo-texas-roofing/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Amarillo
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Canyon
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Borger
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Pampa
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Dumas
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Hereford
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center p-6 bg-brand-gold-light rounded-lg hover:bg-brand-gold-vibrant/10 transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">West Texas</h3>
              <div className="space-y-1 text-gray-700">
                <div>
                  <a
                    href="/contact/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Midland
                  </a>
                </div>
                <div>
                  <a
                    href="/contact/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Odessa
                  </a>
                </div>
                <div>
                  <a
                    href="/lubbock-tx-roofing/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Lubbock
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Big Spring
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Plainview
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Levelland
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center p-6 bg-brand-gold-light rounded-lg hover:bg-brand-gold-vibrant/10 transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">Surrounding Areas</h3>
              <div className="space-y-1 text-gray-700">
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Childress
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Dalhart
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Perryton
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Tulia
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="hover:text-brand-gold hover:font-semibold transition-all"
                  >
                    Friona
                  </a>
                </div>
                <div>
                  <a
                    href="/service-areas/"
                    className="text-brand-brown hover:text-brand-gold underline font-semibold"
                  >
                    View All →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Also Serving - Below-fold links to West Texas city hubs */}
        <FadeIn>
          <section className="section-sub below-fold">
            <h2 className="text-2xl font-bold text-center mb-3 text-brand-brown">
              Also Serving West Texas &amp; Beyond
            </h2>
            <p className="text-center text-gray-text mb-6 max-w-2xl mx-auto">
              In addition to Amarillo and the Texas Panhandle, 5 Star Roofing provides residential
              and commercial roofing services to these West Texas communities:
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a
                href="/midland-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Midland
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/odessa-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Odessa
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/lubbock-tx-roofing/"
                className="text-brand-gold hover:text-brand-gold-vibrant font-medium"
              >
                Lubbock
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Hail Damage & Insurance FAQ Section */}
        <FadeIn>
          <section
            id="hail-damage-faq"
            className="mb-16 section-sub bg-gradient-to-b from-gray-50 to-white rounded-3xl below-fold"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              Hail Damage &amp; Insurance FAQs for Amarillo &amp; Texas Panhandle Homeowners
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Common questions about hail damage roof repair and insurance claims in Amarillo,
              Midland, Odessa, and the Texas Panhandle.
            </p>
            <div className="max-w-4xl mx-auto px-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How do I know if my roof has hail damage in Amarillo or West Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Look for dents or dings on metal vents, gutters, and air conditioning
                    units—these indicate hail hit your property. On the roof itself, hail damage
                    appears as circular cracks, bruised spots, or missing granules on shingles.
                    However, many signs of hail damage are not visible from the ground. After any
                    significant storm in the Texas Panhandle, schedule a{" "}
                    <a
                      href="/roof-inspections-amarillo/"
                      className="text-brand-gold hover:underline"
                    >
                      professional roof inspection
                    </a>{" "}
                    to get an accurate assessment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How big does hail have to be to damage a roof?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Hail as small as 1 inch in diameter (quarter-sized) can damage asphalt shingles,
                    especially older roofs or those already weathered by West Texas sun and wind.
                    Hail 1.5 inches or larger often causes significant damage that may require full
                    replacement. The Texas Panhandle regularly experiences hail in this range during
                    spring and summer storm seasons, making timely inspections essential after any
                    hail event.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    What should I do right after a hailstorm hits my roof?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    First, stay safe and do not climb on your roof. Document any visible damage from
                    the ground with photos and video, including your gutters, siding, and outdoor
                    equipment. Note the date and time of the storm. Then contact a local roofing
                    contractor in Amarillo, Midland, or Odessa for a{" "}
                    <a href="/contact/" className="text-brand-gold hover:underline">
                      professional inspection
                    </a>{" "}
                    before filing your insurance claim—this ensures you have thorough documentation
                    of all damage.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How long after a hailstorm can I file a roof insurance claim in Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Most Texas homeowner insurance policies require claims to be filed within one to
                    two years of the storm date, but deadlines vary by policy. However, filing
                    promptly is strongly recommended—waiting too long can make it harder to prove
                    the damage occurred from a specific storm. Contact your insurance company within
                    days of the hailstorm and schedule an inspection as soon as possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    Should I call my insurance company or a roofing contractor first?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    It's generally best to contact a reputable roofing contractor first. A
                    professional inspection provides detailed documentation of the damage, which
                    strengthens your insurance claim. Your contractor can identify damage that may
                    not be obvious and prepare a comprehensive report before the adjuster arrives.
                    In West Texas, experienced{" "}
                    <a
                      href="/storm-damage-repair-amarillo/"
                      className="text-brand-gold hover:underline"
                    >
                      storm restoration contractors
                    </a>{" "}
                    understand local insurance processes and can help ensure nothing is overlooked.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How much does hail damage roof repair cost in West Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Hail damage roof repair costs in the Amarillo, Midland, and Odessa area
                    typically range from $5,000 to $15,000 or more for a full replacement, depending
                    on roof size, pitch, and material. Minor repairs may cost significantly less.
                    Most homeowners with valid claims pay only their deductible, as insurance covers
                    the remaining approved costs. A{" "}
                    <a href="/contact/" className="text-brand-gold hover:underline">
                      professional inspection
                    </a>{" "}
                    provides an accurate scope for your specific situation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    How long does a hail damage roof replacement take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Once insurance approval is received, most residential roof replacements in West
                    Texas take one to three days to complete, depending on the size and complexity
                    of your roof. The overall timeline from storm to completion varies based on
                    insurance processing speed, material availability, and contractor scheduling.
                    During peak storm season, demand increases—scheduling your inspection early
                    helps avoid delays.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-8"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    What is a Class 4 shingle and why is it good for West Texas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Class 4 shingles are{" "}
                    <a
                      href="/asphalt-shingle-roofing-amarillo/"
                      className="text-brand-gold hover:underline"
                    >
                      impact-resistant roofing materials
                    </a>{" "}
                    that have passed rigorous testing for hail resistance. They're engineered to
                    withstand impacts from hail up to 2 inches in diameter without cracking. For
                    West Texas homeowners, Class 4 shingles offer better protection against
                    recurring hailstorms and may qualify for insurance premium discounts of 10% or
                    more, depending on your carrier.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-9"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    Can small hail damage my roof even if I don't see leaks?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    Yes. Small hail can cause granule loss and hairline fractures in shingles that
                    weaken your roof over time without causing immediate leaks. This hidden damage
                    shortens your roof's lifespan and leaves it vulnerable to future storms. In the
                    Texas Panhandle, cumulative hail damage is common. A professional inspection
                    after any hailstorm can identify issues before they become costly problems.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-10"
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold py-6">
                    What if my roof insurance claim is denied or underpaid?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    If your claim is denied or underpaid, you have options. Request a written
                    explanation from your insurer and review it with your roofing contractor. You
                    can file an appeal with additional documentation, request a re-inspection, or
                    hire a public adjuster. In Texas, homeowners also have the right to invoke the
                    appraisal clause in their policy to dispute the settlement amount through an
                    independent process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </FadeIn>

        {/* Inline Contact Section — editorial split layout (dark trust
            column + cream form). Posts JSON to /.netlify/functions/contact-submit
            which forwards to the GHL webhook. */}
        <FadeIn>
          <div id="get-quote" className="below-fold scroll-mt-24">
            <ContactSection />
          </div>
        </FadeIn>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg text-center below-fold">
          <h2 className="text-3xl font-bold mb-4">Storm Damage? Act Early.</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The sooner you address roof damage, the less costly repairs will be. Get your free
            inspection today and let us handle your insurance claim.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:8066226041"
              className="btn-primary text-lg bg-white text-brand-brown hover:bg-gray-100 hover:scale-110 transition-all duration-300 hover:shadow-2xl"
            >
              <Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041
            </a>
            <a
              href="#get-quote"
              className="btn-secondary text-lg border-2 border-white hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300"
            >
              Request Free Inspection
            </a>
          </div>
        </section>
      </div>

      {/* Structured Data - Organization Schema */}
      {/* schema-cleanup:aggregaterating:removed */}

      {/* FAQPage Schema for AI Overviews */}
      {/* schema-cleanup:faqpage:removed */}

      {/* WebSite Entity Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "5 Star Roofing",
            url: "https://5starroofingpros.com",
            publisher: {
              "@type": "Organization",
              name: "5 Star Roofing",
              "@id": "https://5starroofingpros.com/#organization",
            },
            sameAs: [
              "https://www.facebook.com/5starroofingpros",
              "https://www.google.com/maps?cid=11430502439073045291",
            ],
          }),
        }}
      />
    </>
  );
}
