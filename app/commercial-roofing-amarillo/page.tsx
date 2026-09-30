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
  title: "Commercial Roofing Amarillo TX: Repair, Replacement & Metal Roofs",
  description:
    "Commercial roofing contractor in Amarillo, TX: commercial roof repair, replacement and maintenance on TPO, metal and flat roofs. Free inspections. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Roofing Amarillo TX: Repair, Replacement & Metal Roofs",
    description:
      "Commercial roofing contractor in Amarillo, TX: commercial roof repair, replacement and maintenance on TPO, metal and flat roofs. Free inspections. Call (806) 622-6041.",
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
                  text: "It depends on building size, the roof system (TPO, EPDM, built-up or metal), the condition of the deck and insulation, and access. We price each building after a free inspection, which includes a core cut on flat and low-slope roofs, and give you a written, line-item estimate.",
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
                  text: "Commercial reroofing in Amarillo needs a permit from the City of Amarillo Building Safety Department, (806) 378-3041 or building@amarillo.gov. We pull the permit and build to the code the city has adopted, including its wind-load requirements and the manufacturer's installation specs that keep the warranty valid.",
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
                  text: "Highly recommended. While not mandated by Amarillo building codes, UL 2218 Class 4 roofing withstands 2-inch hailstones and provides maximum protection in Potter County's extreme hail environment. Some carriers offer premium credits for impact-resistant roofing, so ask yours before you choose a system.",
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
        h1="Commercial Roofing Contractor in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-8-1920w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing/" },
          { name: "Amarillo", url: "/commercial-roofing-amarillo/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: commercial roof repair, replacement, maintenance, and inspections for Amarillo business and property owners.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Amarillo as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Systems we work on: TPO, PVC, EPDM, built-up and modified bitumen, and metal (R-panel and standing seam).</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>



      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Commercial Roofing in Amarillo, TX: What Sets 5 Star Apart
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              5 Star Roofing is Amarillo's dedicated commercial roofing contractor, installing and
              repairing TPO, metal, and EPDM systems on businesses across the Texas Panhandle.
              Commercial buildings here face relentless weather—8-12 hailstorms
              annually, extreme temperature swings, intense UV radiation, and sustained winds. Your
              roof isn't just overhead protection; it's a critical business asset protecting
              inventory, equipment, and operations. Downtime from roof leaks costs Amarillo
              businesses thousands per day in lost productivity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We plan the work around your business. After-hours and weekend installations keep
              operations running, and storm damage gets documented for your carrier before any
              repair starts. From small retail buildings along Historic Route 66 to industrial
              facilities near Bell Helicopter, from Downtown Amarillo offices to warehouses near the
              Amarillo Civic Center, we install TPO, EPDM, and metal roofing systems with
              manufacturer warranties and our workmanship guarantee.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Commercial Roofing Services in Amarillo
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every commercial job starts with a free inspection. On flat and low-slope roofs that
              includes a core cut, so the estimate is based on what is actually under the membrane.
              From there the work usually falls into one of these services:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Commercial Roof Repair</h3>
                <p className="text-gray-700 leading-relaxed">
                  Water through the ceiling? Our{" "}
                  <a href="/commercial-roof-leak-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial roof leak repair
                  </a>{" "}
                  page covers how we trace a leak to its real source. Blisters, open seams, and
                  failed flashing on membrane roofs are handled under{" "}
                  <a href="/commercial-flat-roof-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial flat roof repair
                  </a>
                  .
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Commercial Metal Roofing</h3>
                <p className="text-gray-700 leading-relaxed">
                  R-panel and PBR roofs on pre-engineered buildings are covered on our{" "}
                  <a href="/metal-building-and-r-panel-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    metal building and R-panel roofing
                  </a>{" "}
                  page. For leaks, loose fasteners, and damaged panels on an existing roof, see{" "}
                  <a href="/commercial-metal-roof-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial metal roof repair in Amarillo
                  </a>
                  .
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Commercial Roof Replacement</h3>
                <p className="text-gray-700 leading-relaxed">
                  New single-ply systems are on our{" "}
                  <a href="/tpo-roofing-amarillo/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    TPO roofing in Amarillo
                  </a>{" "}
                  page. If code allows a recover instead of a tear-off, a{" "}
                  <a href="/commercial-tpo-roof-retrofit/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    TPO roof retrofit
                  </a>{" "}
                  can keep the building open during the work.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Commercial Roof Maintenance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our{" "}
                  <a href="/commercial-roof-maintenance-program/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial roof maintenance program
                  </a>{" "}
                  covers twice-yearly inspections, drain and detail servicing, and a condition
                  record that keeps warranties and claims defensible. Not sure where the roof stands?
                  Book a free{" "}
                  <a href="/commercial-roof-inspection/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial roof inspection
                  </a>
                  . Owners planning several years out can start with a{" "}
                  <a href="/commercial-roof-condition-survey-and-capital/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    roof condition survey and capital plan
                  </a>
                  .
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Restoration and Coatings</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some roofs have years left in them.{" "}
                  <a href="/commercial-roof-restoration/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    Commercial roof restoration
                  </a>{" "}
                  explains which ones qualify, and{" "}
                  <a href="/commercial-roof-re-coating/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    silicone and acrylic re-coating
                  </a>{" "}
                  covers the coating side.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-2">Hail and Storm Damage</h3>
                <p className="text-gray-700 leading-relaxed">
                  After a storm, start with{" "}
                  <a href="/commercial-storm-hail/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial storm and hail damage roofing
                  </a>
                  . It walks through documentation, the Texas claim clock, and when hail means a{" "}
                  <a href="/commercial-hail-damage-roof-replacement/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial hail damage roof replacement
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Commercial Roofing Systems for Amarillo
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
                  src="/images/materials/standing-seam-metal.jpg"
                  alt="Close-up of gray standing seam metal roof panels with raised vertical seams &mdash; 5 Star Roofing"
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
                  src="/images/materials/epdm-commercial.webp"
                  alt="EPDM black rubber membrane installation on a commercial flat roof &mdash; 5 Star Roofing"
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
                      Permit required for commercial reroofing
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Wind-load design to the city&apos;s adopted building code
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Manufacturer installation specs followed to keep warranties valid
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
                  Storm Damage or a Leak at Your Amarillo Building?
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Call and we will schedule an inspection, photograph and document the damage for
                  your insurance carrier, and walk you through repair or replacement options before
                  any work starts, so the claim and the roof stay on the same page.
                </p>
                <a
                  href="tel:8066226041"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300"
                >
                  Call (806) 622-6041
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
                  It depends on building size, the roof system (TPO, EPDM, built-up or metal), the
                  condition of the deck and insulation, and access. We price each building after a
                  free inspection, which includes a core cut on flat and low-slope roofs, and give
                  you a written, line-item estimate.
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
                  Commercial reroofing in Amarillo needs a permit from the City of Amarillo Building
                  Safety Department, (806) 378-3041 or building@amarillo.gov. We pull the permit and
                  build to the code the city has adopted, including its wind-load requirements and
                  the manufacturer's installation specs that keep the warranty valid.
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
                  County's extreme hail environment. Some carriers offer premium credits for
                  impact-resistant roofing, so ask yours before you choose a system.
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
        <aside className="container-custom mt-10 mb-4">
          <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing Guides Nearby</h2>
            <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
              <li><a href="/blog/shopping-center-roofing-sunset-center-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Shopping center roofing at Sunset Center, Amarillo</a></li>
              <li><a href="/blog/commercial-roofing-bushland-tx/" className="text-brand-brown hover:text-brand-gold underline">Commercial roofing in Bushland, TX</a></li>
            </ul>
          </div>
        </aside>
        <RelatedArticles pageSlug="commercial-roofing-amarillo" />
      </div>
    </>
  );
}
