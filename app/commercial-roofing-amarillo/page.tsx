import { FadeIn } from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { AlertTriangle, Check, Phone, Star } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-roofing-amarillo/" },
  title: "Commercial Roofing Amarillo TX | 5 Star Roofing",
  description:
    "Commercial Roofing in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!",
  openGraph: {
    title: "Commercial Roofing Amarillo TX | 5 Star Roofing",
    description:
      "Commercial Roofing in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!",
    url: "https://5starroofingpros.com/commercial-roofing-amarillo/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofingAmarilloPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/commercial-roofing-amarillo/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-4-1280w.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 35.1768,
              longitude: -101.859,
            },
            url: "https://5starroofingpros.com/commercial-roofing-amarillo/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              name: "Amarillo",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            description:
              "Expert commercial roofing services in Amarillo, TX. Serving Potter County Courthouse, Route 66 Historic District, and businesses throughout the Texas Panhandle.",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roofing Services",
            name: "Commercial Roofing in Amarillo",
            description:
              "Professional commercial roofing services in Amarillo, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Amarillo",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Commercial Roofing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Commercial Roofing Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Commercial Roofing Repair" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Free Roof Inspection" },
                },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does commercial roof replacement cost in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Commercial roofing costs vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide free detailed estimates with transparent pricing and financing options for qualified businesses.",
                },
              },
              {
                "@type": "Question",
                name: "Why is Amarillo one of the most challenging cities for commercial roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amarillo recorded 131 severe hail days since 2000 - among the highest in the USA. The city averages 14.3 mph winds annually (highest in Texas, #2 in America) with extreme gusts exceeding 50 mph. Temperature swings from 13°F to 99°F cause significant thermal stress on roofing materials. Commercial buildings in Amarillo require specialized roofing systems engineered for these extreme conditions.",
                },
              },
              {
                "@type": "Question",
                name: "What roofing permits are required in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All commercial roofing projects in Amarillo require permits per Section 105.1 of the 2015 International Residential Code. Contact the City of Amarillo Building Safety Department at (806) 378-3041 or building@amarillo.gov. We handle all permit applications and ensure your project meets Amarillo's code requirements including drip edge installation, proper ventilation, and wind resistance standards for 110-125 mph design wind speeds.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work after hours to minimize business disruption?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We schedule commercial installations during evenings, weekends, or planned closure periods to minimize operational impact. Many Amarillo businesses prefer after-hours work for retail locations or facilities that cannot shut down during business hours. We coordinate carefully to meet your scheduling requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide commercial roofing for historic buildings in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in historic commercial roofing for Amarillo's Route 66 Historic District, downtown buildings, and properties with preservation requirements. The Route 66 corridor features Spanish Revival, Art Deco, and Art Moderne architecture requiring specialized roofing expertise. We work with building owners to meet historic preservation standards while providing modern weather protection.",
                },
              },
              {
                "@type": "Question",
                name: "What makes TPO roofing ideal for Amarillo's commercial buildings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TPO's white reflective membrane is Energy Star rated and dramatically reduces cooling costs during Amarillo's hot summers. The heat-welded seams create watertight bonds that withstand Texas Panhandle winds and hail. TPO offers excellent durability (15-25 year warranties) at a competitive price point, making it the most popular commercial roofing choice in the region.",
                },
              },
              {
                "@type": "Question",
                name: "Should Amarillo commercial buildings use Class 4 impact-resistant roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Highly recommended. While not mandated by Amarillo building codes, UL 2218 Class 4 roofing withstands 2-inch hailstones and provides maximum protection in Potter County's extreme hail environment. Many Texas insurers offer up to 25% premium discounts for Class 4 commercial roofing systems, offsetting the initial investment with long-term savings and superior durability.",
                },
              },
            ],
          }),
        }}
      />

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="amarillo"
        city="Amarillo"
        service="Commercial Roofing"
        h1="Commercial Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-8-1920w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing/" },
          { name: "Amarillo", url: "/commercial-roofing-amarillo/" },
        ]}
    />


      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Amarillo Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Commercial buildings in the Texas Panhandle face relentless weather—8-12 hailstorms
              annually, extreme temperature swings, intense UV radiation, and sustained winds. Your
              roof isn't just overhead protection; it's a critical business asset protecting
              inventory, equipment, and operations. Downtime from roof leaks costs Amarillo
              businesses thousands per day in lost productivity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in minimizing disruption to your business. After-hours and weekend
              installations keep your operations running. Our roofing team handles storm
              damage and urgent leaks within hours. From small retail buildings along Historic Route
              66 to large industrial facilities near Bell Helicopter, from Downtown Amarillo offices
              to warehouses near the Amarillo Civic Center, we install TPO, EPDM, and metal roofing
              systems with 15-25 year warranties backed by manufacturers and our workmanship
              guarantee.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Commercial Roofing Systems for Amarillo Involve?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/TPO1-1280w.webp"
                  alt="Massive white single-ply membrane roof with rows of dome skylights under blue sky — strong real TPO/PVC reference. Top scarce-category ca... — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Roofing Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Single-ply white membrane roofing with heat-welded seams. Energy Star rated
                  reflective surface reduces cooling costs in Amarillo's hot summers. Excellent hail
                  resistance and proven performance in Texas Panhandle weather.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    15-25 year warranties
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Energy-efficient reflective coating
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Hail and puncture resistant
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Low maintenance requirements
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/TPO1-1280w.webp"
                  alt="Massive white single-ply membrane roof with rows of dome skylights under blue sky — strong real TPO/PVC reference. Top scarce-category ca... — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Metal Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Standing seam and R-panel metal roofing for commercial applications. Superior wind
                  resistance (140+ mph), fire resistance (Class A), and longevity (50+ years). Ideal
                  for warehouses, manufacturing facilities, and retail buildings.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    50+ year lifespan
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Class A fire rating
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Wind resistance 140+ mph
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Hail dent-resistant options
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img
                  src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/borger-hero.jpg"
                  alt="Brick ranch home with dark hipped standing-seam metal roof in oilfield landscape; pumpjack and orange sunset sky in background. Likely AI... — 5 Star Roofing"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cost-effective black rubber membrane for commercial flat roofs. Excellent UV
                  resistance and proven performance in extreme temperatures (-40°F to 300°F).
                  Budget-friendly option with reliable 15-30 year lifespan.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    15-30 year lifespan
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Excellent UV resistance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Temperature stable
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Budget-friendly option
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Commercial Areas Do We Serve in Amarillo?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide commercial roofing services throughout Amarillo's diverse business
              districts, from historic downtown to modern commercial developments:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">
                  Downtown & Historic Districts
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Route 66 Historic Commercial District</strong> - 13-block corridor
                  featuring Spanish Revival, Art Deco, and Art Moderne architecture from the
                  1920s-1930s. Historic commercial buildings require specialized roofing expertise
                  to meet preservation standards while providing modern weather protection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Downtown Amarillo</strong> - Government buildings, professional offices,
                  and commercial properties including Potter County Courthouse (500 S Fillmore St)
                  and J. Marvin Jones Federal Building (205 E 5th St). These historic structures
                  demand expert commercial roofing with attention to architectural integrity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">
                  Industrial & Commercial Zones
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Bell Helicopter Industrial Area</strong> - Manufacturing facilities,
                  warehouses, and industrial buildings requiring durable metal and TPO roofing
                  systems engineered for large-scale commercial operations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Retail & Business Centers</strong> - Shopping centers, office parks, and
                  commercial developments throughout Amarillo. We specialize in minimizing business
                  disruption with after-hours installations and efficient post-storm documentation.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Should You Know About Amarillo Building Codes?
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold-vibrant">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All commercial roofing projects in Amarillo must comply with local building codes
                and permit requirements. We handle all permitting and ensure your project meets or
                exceeds city standards.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Building Safety Department
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Phone:</strong> (806) 378-3041
                    </li>
                    <li>
                      <strong>Email:</strong> building@amarillo.gov
                    </li>
                    <li>
                      <strong>Location:</strong> Simms Municipal Building
                      <br />
                      808 S Buchanan St Suite 104
                    </li>
                    <li>
                      <strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Key Code Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <strong>2015 International Residential Code (IRC)</strong>
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Permits required per IRC Section 105.1
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Wind resistance: 110-125 mph design standards
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Drip edge installation mandatory
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Proper attic ventilation (1 sq ft per 150 sq ft)
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      UL 2218 Class 4 hail resistance recommended
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                We handle all permit applications and ensure your commercial roofing project meets
                Amarillo's building code requirements, preserving manufacturer warranties and
                ensuring long-term performance.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Amarillo's Climate Demands Superior Commercial Roofing?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Amarillo's location in the Texas Panhandle creates one of the most challenging roofing
              environments in the United States. Your commercial roof must withstand extreme
              conditions year-round:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Extreme Hail Danger</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Potter County has recorded <strong>131 severe hail days since 2000</strong> -
                  ranking among the highest hail frequencies in the entire USA. Amarillo sits in
                  "Hail Alley," experiencing multiple significant hail events annually during spring
                  and fall.
                </p>
                <p className="text-gray-600 text-sm">
                  Recent data shows 438 hail reports within 10 miles of Amarillo in just 12 months.
                  UL 2218 Class 4 impact-resistant roofing is highly recommended.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-brand-gold-vibrant">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Relentless Wind</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Amarillo averages <strong>14.3 mph winds annually</strong> - the highest in Texas
                  and second-highest in America. Peak winds in March-April regularly exceed 50 mph,
                  with extreme gusts documented above that threshold each year.
                </p>
                <p className="text-gray-600 text-sm">
                  At 3,600 feet elevation, Amarillo is exposed to clashing air masses. Commercial
                  roofing must meet 110-125 mph wind resistance standards.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Temperatures swing from <strong>13°F winter lows to 99°F summer highs</strong> -
                  an 86°F range causing severe thermal expansion and contraction. Commercial roofing
                  materials must withstand this constant stress.
                </p>
                <p className="text-gray-600 text-sm">
                  January averages 38.6°F while July averages 79.6°F. This extreme cycling
                  accelerates material degradation without proper installation.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
            <div className="flex gap-6 items-center">
              <div className="text-6xl">
                <AlertTriangle className="w-6 h-6 inline-block text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-800 mb-3">
                  How Does Emergency Commercial Roofing Work?
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Storm damage or active leak threatening your Amarillo business? We provide prompt
                  response with temporary repairs, weatherproof sheeting, and leak mitigation. Minimize inventory
                  damage, protect equipment, and keep operations running.
                </p>
                <a
                  href="tel:8066226041"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300"
                >
                  urgent: (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does commercial roof replacement cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs vary by building size, roof type, and complexity. Typical
                  TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per
                  square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide
                  free detailed estimates with transparent pricing and financing options for
                  qualified businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is Amarillo one of the most challenging cities for commercial roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo recorded 131 severe hail days since 2000 - among the highest in the USA.
                  The city averages 14.3 mph winds annually (highest in Texas, #2 in America) with
                  extreme gusts exceeding 50 mph. Temperature swings from 13°F to 99°F cause
                  significant thermal stress on roofing materials. Commercial buildings in Amarillo
                  require specialized roofing systems engineered for these extreme conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing permits are required in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All commercial roofing projects in Amarillo require permits per Section 105.1 of
                  the 2015 International Residential Code. Contact the City of Amarillo Building
                  Safety Department at (806) 378-3041 or building@amarillo.gov. We handle all permit
                  applications and ensure your project meets Amarillo's code requirements including
                  drip edge installation, proper ventilation, and wind resistance standards for
                  110-125 mph design wind speeds.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work after hours to minimize business disruption?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We schedule commercial installations during evenings, weekends, or planned
                  closure periods to minimize operational impact. Many Amarillo businesses prefer
                  after-hours work for retail locations or facilities that cannot shut down during
                  business hours. We coordinate carefully to meet your scheduling requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide commercial roofing for historic buildings in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we specialize in historic commercial roofing for Amarillo's Route 66 Historic
                  District, downtown buildings, and properties with preservation requirements. The
                  Route 66 corridor features Spanish Revival, Art Deco, and Art Moderne architecture
                  requiring specialized roofing expertise. We work with building owners to meet
                  historic preservation standards while providing modern weather protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes TPO roofing ideal for Amarillo's commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  TPO's white reflective membrane is Energy Star rated and dramatically reduces
                  cooling costs during Amarillo's hot summers. The heat-welded seams create
                  watertight bonds that withstand Texas Panhandle winds and hail. TPO offers
                  excellent durability (15-25 year warranties) at a competitive price point, making
                  it the most popular commercial roofing choice in the region.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should Amarillo commercial buildings use Class 4 impact-resistant roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Highly recommended. While not mandated by Amarillo building codes, UL 2218 Class 4
                  roofing withstands 2-inch hailstones and provides maximum protection in Potter
                  County's extreme hail environment. Many Texas insurers offer up to 25% premium
                  discounts for Class 4 commercial roofing systems, offsetting the initial
                  investment with long-term savings and superior durability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Visit Our Amarillo Location
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="amarillo" currentService="commercial-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Amarillo Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free commercial roofing estimates. After-hours installation available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:8066226041"
              className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg"
            >
              Call (806) 622-6041
            </a>
            <a
              href="/contact/"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg"
            >
              Request Free Estimate
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="commercial-roofing-amarillo" />
      </div>
    </>
  );
}
