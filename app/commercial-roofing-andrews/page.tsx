import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

import { StickyContactBar } from "@/components/StickyContactBar";
import { ClipboardList, Factory, Fuel, Phone, Star, Wheat } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-roofing-andrews/" },
  title: "Commercial Roofing Andrews TX | 5 Star Roofing",
  description:
    "Professional commercial roofing in Andrews TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Commercial Roofing Andrews TX | 5 Star Roofing",
    description:
      "Professional commercial roofing in Andrews TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/commercial-roofing-andrews/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp",
        width: 1280,
        height: 720,
        alt: "Commercial metal roof installation on West Texas facility — 5 Star Roofing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofingAndrewsPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/commercial-roofing-andrews/#localbusiness",
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
            geo: { "@type": "GeoCoordinates", latitude: 35.1768, longitude: -101.859 },
            url: "https://5starroofingpros.com/commercial-roofing-andrews/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas",
              name: "Andrews",
              containedInPlace: { "@type": "State", name: "Texas" },
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
              "Professional commercial roofing in Andrews TX. Expert installation, warranties, and insurance assistance.",
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
            name: "Commercial Roofing in Andrews",
            description:
              "Professional commercial roofing services in Andrews, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Andrews",
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

      {/* schema-cleanup:faqpage:removed */}

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="midland"
        city="Andrews"
        service="Commercial Roofing"
        h1="Commercial Roofing in Andrews, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-plainview-14-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing/" },
          { name: "Andrews", url: "/commercial-roofing-andrews/" },
        ]}
    />

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Fast</div>
                <div className="text-brand-brown font-semibold text-lg">Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Class 4</div>
                <div className="text-brand-brown font-semibold text-lg">Hail-Rated</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing delivers commercial roofing in Andrews TX including flat roof repair, TPO systems, and metal roofing for Permian Basin oil field businesses and facilities.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">← All Commercial Roofing</a>
              <a href="/commercial-roofing-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Odessa Commercial</a>
              <a href="/commercial-roofing-midland/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Midland Commercial</a>
              <a href="/andrews-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">All Andrews Services</a>
            </div>
          </section>
        </FadeIn>

        {/* Author byline */}
        <FadeIn>
          <div className="mb-8 max-w-5xl mx-auto flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-white text-xs font-bold flex-shrink-0">BT</div>
            <span>
              Written by <span className="font-semibold text-gray-700">Ben Terhune</span>, Owner — 5 Star Roofing, Amarillo TX
              &nbsp;·&nbsp; Updated May 2026
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Andrews Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional commercial roofing throughout Andrews and surrounding areas, serving the
              heart of the Permian Basin's energy sector. We understand the unique challenges facing
              Andrews' commercial properties, from oil and gas facilities to agricultural
              operations, and engineer roofing systems built for extreme Texas conditions including
              hail, high winds, and temperature swings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has served Andrews for over a decade with expert installations, comprehensive warranties,
              and outstanding customer service. We handle all permits,
              insurance claims, and warranty documentation. Free inspections and estimates
              available.
            </p>

            <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-brand-gold">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">
                Understanding Andrews' Commercial Roofing Needs
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Andrews County has emerged as one of Texas's fastest-growing micropolitan areas,
                driven by its position in the heart of the Permian Basin. This rapid growth in oil
                and gas operations has created unprecedented demand for commercial roofing solutions
                that can withstand the harsh West Texas environment while supporting the energy
                sector's operations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commercial roofing systems are specifically designed for Andrews'
                petroleum-based economy, featuring enhanced chemical resistance, superior weather
                protection, and energy-efficient designs that reduce operational costs for local
                businesses.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Commercial Roofing Services for Andrews' Key Industries Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold-vibrant">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  <Fuel className="w-6 h-6 inline-block" /> Oil & Gas Facilities
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Andrews sits at the center of the Permian Basin's oil boom, hosting numerous
                  drilling operations, processing facilities, and support services. These industrial
                  facilities require specialized roofing systems that can handle:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Chemical exposure from petroleum operations</li>
                  <li>• operational requirements with minimal downtime</li>
                  <li>• Heavy equipment and vehicle traffic on roof areas</li>
                  <li>• Fire-resistant materials meeting OSHA standards</li>
                  <li>• Sound dampening for noise-sensitive operations</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Our TPO and metal roofing systems for oil and gas facilities feature enhanced
                  chemical resistance and can be installed during planned maintenance windows to
                  minimize operational disruption.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  <Wheat className="w-6 h-6 inline-block" /> Agricultural Operations
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Andrews' agricultural sector, centered on livestock production and cattle
                  ranching, requires roofing solutions for barns, storage facilities, and processing
                  buildings that can withstand:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Corrosive effects from livestock areas</li>
                  <li>• Large clear-span requirements for equipment storage</li>
                  <li>• Ventilation systems for animal comfort</li>
                  <li>• Easy maintenance in rural settings</li>
                  <li>• Cost-effective solutions for large buildings</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Our metal roofing systems with specialized coatings provide excellent durability
                  for agricultural applications, with 30+ year warranties and minimal maintenance
                  requirements.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-amber-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Do Andrews Businesses Choose 5 Star Roofing?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">90</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Documentation-First</h3>
                <p className="text-gray-700">
                  Andrews County industrial roofs sit in the open Permian Basin where storms
                  arrive fast. We document slope conditions, seam integrity, and rooftop
                  equipment before and after every site visit so the claim file for State
                  Farm, USAA, or Farmers is ready when an adjuster asks for it.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">
                    <Factory className="w-6 h-6 inline-block" />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Industrial Expertise</h3>
                <p className="text-gray-700">
                  Specialized experience with oil & gas, agricultural, and industrial facilities
                  throughout the Permian Basin region.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">
                    <ClipboardList className="w-6 h-6 inline-block" />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">
                  Complete Project Management
                </h3>
                <p className="text-gray-700">
                  We pull City of Andrews permits, schedule code inspections, coordinate with
                  insurance adjusters, and run material deliveries on TPO, PVC, modified
                  bitumen, and built-up roofing systems so a facility manager can stay focused
                  on Permian Basin production instead of the roof.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Commercial Roofing Systems for Andrews Climate
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Energy-efficient and chemical-resistant, ideal for offices, retail spaces, and
                  warehouses. The reflective surface cuts cooling costs by 30% in West Texas heat.
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• 20-25 year lifespan</li>
                  <li>• Chemical resistance for oil field environments</li>
                  <li>• Energy Star qualified</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Metal Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unmatched durability for industrial applications. Withstands decades of Permian
                  Basin weather while protecting valuable equipment and operations.
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• 50+ year lifespan</li>
                  <li>• Fire resistance for oil operations</li>
                  <li>• Wind resistance up to 150 mph</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cost-effective protection with excellent weather resistance. Perfect for
                  budget-conscious businesses, retrofits, and modular facilities.
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Lowest installation cost</li>
                  <li>• Easy field repairs</li>
                  <li>• 15-20 year lifespan</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Storm Damage Documentation in Andrews
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Storm-Damage Documentation in Andrews
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Andrews' oil and gas operations deserve thorough, insurance-ready documentation.
                  We are not an emergency-dispatch service — our value is documentation quality,
                  insurance-claim follow-through, and Class 4 restoration.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </div>
                    <p className="text-gray-700">
                      <strong>Scheduled Inspection</strong> — Free on-site assessment once
                      conditions are safe
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </div>
                    <p className="text-gray-700">
                      <strong>On-Site Assessment</strong> — Professional evaluation and
                      adjuster-ready documentation
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </div>
                    <p className="text-gray-700">
                      <strong>Permanent Restoration</strong> — Scheduled repair once insurance claim
                      is approved
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-brand-brown mb-4">
                  We Handle All Emergency Types:
                </h4>
                <ul className="text-gray-700 space-y-3">
                  <li>
                    <strong>Hail Damage</strong> — Documentation, inspection, and permanent repair solutions
                  </li>
                  <li>
                    <strong>Wind Damage</strong> — Securing lifted materials and HVAC units
                  </li>
                  <li>
                    <strong>Equipment Damage</strong> — Patching and structural reinforcement
                  </li>
                  <li>
                    <strong>Chemical Exposure</strong> — Damage assessment and resistant
                    replacements
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>


        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Financing & Insurance Assistance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Flexible Financing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Protect your property without straining cash flow with financing options tailored
                  for Andrews businesses.
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• 0% APR for 12 months (qualified customers)</li>
                  <li>• Extended plans up to 60 months</li>
                  <li>• Seasonal payment programs for agriculture</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Insurance Claims</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After a Permian Basin hail or wind event, we document every slope and seam,
                  meet the adjuster on the roof, and file supplements for what the first scope
                  misses. We work routinely with State Farm, Allstate, USAA, Farmers, and
                  Texas Farm Bureau on Andrews County commercial claims.
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Free damage assessment with slope-by-slope photo documentation</li>
                  <li>• Direct adjuster meetings on the roof, not in the parking lot</li>
                  <li>• Written supplements for missed flashing, decking, and code upgrades</li>
                </ul>
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
                  How much does commercial roofing cost in Andrews?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs in Andrews vary by size, type, and complexity. TPO:
                  $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates
                  with transparent pricing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work after hours in Andrews?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We schedule installations during evenings, weekends, or planned closures to
                  minimize business disruption in Andrews.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What commercial roofing systems work best in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM
                  (cost-effective) perform excellently in Texas climate.
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
        <InternalLinks currentCity="andrews" currentService="commercial-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Andrews property owners. Expert commercial roofing with
            comprehensive warranties and insurance assistance.
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
              Schedule Free Inspection
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="commercial-roofing-andrews" />
      </div>
    </>
  );
}
