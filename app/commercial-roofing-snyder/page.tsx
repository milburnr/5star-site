import { FadeIn } from "@/components/FadeIn";
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
import { Check, Phone, Star } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-roofing-snyder/" },
  title: "Commercial Roofing Snyder TX | 5 Star Roofing",
  description:
    "Professional commercial roofing in Snyder TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Commercial Roofing Snyder TX | 5 Star Roofing",
    description:
      "Professional commercial roofing in Snyder TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/commercial-roofing-snyder/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-11-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofingSnyderPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/commercial-roofing-snyder/#localbusiness",
            name: "5 Star Roofing",
            image: "/images/home-hero-1200w.webp",
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
            url: "https://5starroofingpros.com/commercial-roofing-snyder/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              name: "Snyder",
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
              "Professional commercial roofing in Snyder TX. Expert installation, warranties, and insurance assistance.",
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
            name: "Commercial Roofing in Snyder",
            description:
              "Professional commercial roofing services in Snyder, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Snyder",
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
        city="Snyder"
        service="Commercial Roofing"
        h1="Commercial Roofing in Snyder, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-4-1920w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing/" },
          { name: "Snyder", url: "/commercial-roofing-snyder/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Commercial Roofing for homes and businesses in Snyder, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Snyder as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Materials and systems: standing seam metal, TPO, and PVC membranes engineered for the West Texas climate.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>


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
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Snyder Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional commercial roofing throughout Snyder and surrounding areas. We understand
              Texas weather challenges and install roofing systems engineered for extreme conditions
              including hail, high winds, and temperature swings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We've served Snyder with expert installations, comprehensive warranties,
              and outstanding customer service. We handle all permits, insurance claims, and
              warranty documentation. Free inspections and estimates available.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Snyder's Diverse Commercial Economy
                </h3>
                <p className="text-gray-700 mb-4">
                  Located in Scurry County, Snyder serves as a regional hub for agriculture, energy
                  production, and manufacturing operations. The city's diverse commercial landscape
                  includes cotton processing facilities, oil refining operations, wind energy
                  projects, and retail establishments, each requiring specialized roofing solutions
                  tailored to specific operational demands.
                </p>
                <p className="text-gray-700 mb-4">
                  Snyder's strategic location in West Texas places commercial properties at the
                  intersection of major weather systems, creating unique challenges for roofing
                  systems. Annual precipitation averaging 20 inches, combined with extreme
                  temperature variations and severe storm activity, demands robust roofing solutions
                  designed for harsh environmental conditions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Climate Considerations for Commercial Properties
                </h3>
                <p className="text-gray-700 mb-4">
                  Snyder's semi-arid climate features intense summer heat exceeding 100°F and winter
                  lows dropping below 25°F, creating significant thermal stress on commercial
                  roofing systems. The region's exposure to severe thunderstorms, hail events, and
                  high winds requires enhanced protection strategies beyond standard roofing
                  applications.
                </p>
                <p className="text-gray-700 mb-4">
                  West Texas wind patterns regularly exceed 20 mph throughout the year, with severe
                  weather events producing sustained winds over 60 mph. This consistent wind
                  exposure, combined with UV radiation and thermal cycling, necessitates specialized
                  roofing materials and installation techniques for optimal long-term performance.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Industry-Specific Commercial roof system Involve?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Agricultural Processing Facilities
                </h3>
                <p className="text-gray-700 mb-4">
                  Cotton gins, grain elevators, and feed-processing plants across Scurry County deal
                  with constant lint, dust, and humidity swings. We specify TPO or PVC membranes for
                  large flat spans where moisture control matters, and standing seam or R-panel metal
                  where conveyor systems and heavy mechanical loads cross the deck. Penetration
                  flashings around vents and dust collectors get hand-detailed, since that is where
                  agricultural roofs typically fail first.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Moisture and humidity control detailing at seams and penetrations</li>
                  <li>• Dust-tolerant membrane surfaces and welded TPO/PVC seams</li>
                  <li>• Decking and fastening rated for conveyor and equipment loads</li>
                  <li>• Ventilation integration for grain dryers and gin mill exhaust</li>
                  <li>• Class A fire-rated assemblies for cotton and grain storage</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Energy and Manufacturing
                </h3>
                <p className="text-gray-700 mb-4">
                  Oil and gas operations on the eastern edge of the Permian Basin, wind farms north
                  of Snyder, and manufacturing plants all share the same roof problem: hydrocarbon
                  exposure, vibration, and lightning risk on exposed High Plains rooftops. We use
                  PVC membranes where chemical resistance matters most, EPDM for ballasted systems
                  on larger spans, and standing seam metal where wind uplift is the driver. Class A
                  fire ratings and UL 580 wind certifications are standard on these specs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• PVC membranes for hydrocarbon and chemical resistance</li>
                  <li>• Class A fire-rated assemblies for industrial occupancies</li>
                  <li>• Engineered curbs and pitch pans for equipment penetrations</li>
                  <li>• Lightning protection coordination on West Texas plains buildings</li>
                  <li>• Roof hatch and tie-off placement for OSHA-compliant access</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Commercial and Healthcare
                </h3>
                <p className="text-gray-700 mb-4">
                  Retail centers along College Avenue, professional offices, and Cogdell Memorial
                  Hospital-adjacent facilities all share a need for quiet interiors and continuous
                  operations during a reroof. White TPO and PVC membranes carry ENERGY STAR
                  cool-roof ratings that cut summer air-conditioning load. Phased tear-off
                  scheduling lets us keep storefronts and patient wings dry and open while crews
                  work in sections.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• ENERGY STAR cool-roof TPO and PVC membrane options</li>
                  <li>• Polyiso insulation packages for higher R-value and air sealing</li>
                  <li>• Acoustic-rated decking assemblies for patient-care areas</li>
                  <li>• Phased installation that keeps tenants open</li>
                  <li>• Coordinated color and edge-metal options for retail facades</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Advanced Roofing Technologies for West Texas Conditions Involve?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Cutting-edge roofing systems designed to withstand Snyder's challenging climate
                while delivering superior energy performance and longevity.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    TPO and PVC Membrane Systems
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Single-ply membrane roofing systems offering exceptional performance in West
                    Texas conditions with superior heat reflection, chemical resistance, and welded
                    seam integrity for long-term waterproof protection.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Heat-welded seam technology for superior waterproofing</li>
                    <li>• Solar reflective surfaces reducing cooling costs up to 40%</li>
                    <li>• Class A fire resistance and impact ratings</li>
                    <li>• Chemical and UV degradation resistance</li>
                    <li>• Manufacturer warranties up to 30 years</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Metal Roofing Systems</h3>
                  <p className="text-gray-700 mb-4">
                    Standing seam and architectural metal roofing providing unmatched durability and
                    longevity for Snyder commercial properties with advanced coating systems for
                    enhanced performance in extreme conditions.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 50+ year service life with proper maintenance</li>
                    <li>• Wind uplift resistance up to 165 mph</li>
                    <li>• Class 4 hail impact rating available</li>
                    <li>• Energy-efficient cool color options</li>
                    <li>• Recyclable and sustainable material choice</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Does This Roofing Improve Energy Efficiency?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Reflective white TPO and PVC membranes, polyiso insulation, and ENERGY STAR
                cool-roof options cut cooling load through long Snyder summers and lower
                operating costs on the Llano Estacado.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                    Cool Roofing Technology
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Reflective roofing systems significantly reduce heat absorption and lower
                    building temperatures, providing substantial energy savings during Snyder's
                    intense summer months while improving interior comfort for employees and
                    customers.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Solar reflectance index (SRI) ratings up to 115</li>
                    <li>• 25-45% reduction in cooling energy consumption</li>
                    <li>• Reduced heat island effect for urban areas</li>
                    <li>• Extended HVAC equipment lifespan</li>
                    <li>• Potential utility rebates and tax incentives</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                    Insulation and Air Barrier Systems
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Advanced insulation technologies and air sealing systems create comprehensive
                    thermal barriers that maintain consistent interior temperatures year-round,
                    reducing energy consumption and improving building performance.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Continuous insulation systems eliminating thermal bridging</li>
                    <li>• Air barrier integration for enhanced performance</li>
                    <li>• Moisture management and vapor control</li>
                    <li>• R-values optimized for Texas climate zones</li>
                    <li>• ENERGY STAR certification compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Our Comprehensive Project Management and Quality Assurance Include?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Our systematic approach ensures successful commercial roofing projects with minimal
                disruption to Snyder business operations.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Detailed Assessment</h3>
                  <p className="text-gray-600">
                    Deck condition, structural load capacity, moisture survey on the existing
                    membrane, and a Scurry County code-compliance check. The output is a written
                    spec that drives material selection and warranty registration.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">
                    Professional Installation
                  </h3>
                  <p className="text-gray-600">
                    Crews trained on GAF, Carlisle, and Firestone systems follow the manufacturer
                    spec line by line, with on-site safety supervision and daily QC checks against
                    UL 580 wind and Class A fire requirements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Quality Verification</h3>
                  <p className="text-gray-600">
                    Final punch-list inspection, electronic leak detection or flood testing on
                    membrane roofs, and a closeout binder with warranty registration so the
                    manufacturer coverage is locked in from day one.
                  </p>
                </div>
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
                  How much does commercial roofing cost in Snyder?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs in Snyder vary by size, type, and complexity. TPO:
                  $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. Industrial and agricultural
                  facilities may require specialized systems affecting pricing. We provide detailed
                  estimates with transparent breakdowns and no hidden costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work after hours in Snyder?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We schedule installations during evenings, weekends, or planned shutdowns to
                  minimize business disruption in Snyder. This is especially important for
                  manufacturing facilities, processing plants, and retail operations that require
                  continuous operation.
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
                  (cost-effective) perform excellently in Texas climate. For Snyder's specific
                  conditions, we recommend enhanced wind resistance and hail protection due to
                  severe weather exposure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle agricultural facility requirements?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Agricultural facilities in Snyder require specialized solutions including moisture
                  control for grain storage, chemical resistance for fertilizers, enhanced
                  ventilation systems, and accommodation for heavy equipment. We design custom
                  solutions for each facility's specific operational needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What energy savings can I expect from a new commercial roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Cool roofing systems in Snyder typically reduce cooling costs by 25-45% during
                  summer months. Combined with enhanced insulation, total energy savings often range
                  from 15-30% annually. We provide energy performance estimates based on your
                  specific building and usage patterns.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle storm damage for Snyder commercial properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We schedule storm-damage documentation and inspections throughout Snyder and
                  Scurry County once conditions are safe for crews to be on a roof. We are not an
                  emergency-dispatch service — our value is thorough documentation, adjuster-ready
                  reports, and commercial restoration that minimizes long-term business disruption.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What maintenance programs do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We offer comprehensive maintenance programs including bi-annual inspections,
                  preventive repairs, drainage system maintenance, and detailed condition reporting.
                  Programs are customized based on roofing system type, building use, and local
                  environmental conditions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Safety and Environmental Standards?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Comprehensive safety protocols and environmental responsibility guide all commercial
                roofing operations in Snyder.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    Comprehensive Safety Program
                  </h3>
                  <p className="text-gray-700 mb-4">
                    All team members receive extensive safety training with regular updates on OSHA
                    standards and industry best practices. We maintain strict safety protocols
                    including fall protection, hazard recognition, and safety response procedures.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• OSHA 10 and 30-hour certified personnel</li>
                    <li>• Daily safety briefings and job hazard analysis</li>
                    <li>• Comprehensive personal protective equipment</li>
                    <li>• Regular safety audits and equipment inspections</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    Environmental Responsibility
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tear-off asphalt shingles go to recycling, scrap metal panels go to a Scurry
                    County metal recycler, and salvageable insulation gets reused where the spec
                    allows. White TPO and PVC membrane choices carry ENERGY STAR cool-roof ratings
                    that lower long-term energy use on Snyder commercial buildings.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Shingle and metal tear-off routed to recycling, not landfill</li>
                    <li>• ENERGY STAR cool-roof TPO and PVC options on commercial installs</li>
                    <li>• Polyiso insulation packages that raise R-value on existing decks</li>
                    <li>• Low-VOC adhesives and sealants where the spec allows</li>
                    <li>• Site protection plan to keep debris out of adjoining properties</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Choose 5 Star Roofing for Your Snyder Commercial Project?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        West Texas Expertise
                      </h3>
                      <p className="text-gray-700">
                        We work the Texas Panhandle and the Llano Estacado every week. That means
                        familiarity with Scurry County building requirements, Hail Alley wind and
                        impact ratings, and the oil-and-gas operations that drive Snyder property
                        decisions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Proven Performance
                      </h3>
                      <p className="text-gray-700">
                        Hundreds of successful commercial roofing installations throughout West
                        Texas with consistent 5-star customer reviews and long-term performance
                        records.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">
                        Advanced Technology
                      </h3>
                      <p className="text-gray-700">
                        Hot-air welded TPO and PVC seams, Class 4 impact-rated asphalt shingles for
                        Hail Alley exposure, and standing seam metal panels with concealed-fastener
                        clips that hold up to High Plains wind without back-out failure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Complete Service</h3>
                      <p className="text-gray-700">
                        One point of contact from the first walkthrough through final warranty
                        registration. We pull the Scurry County permits, schedule the inspections,
                        and coordinate billing with State Farm, Allstate, USAA, Farmers, or Texas
                        Farm Bureau when insurance is involved.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Storm Damage Documentation</h3>
                      <p className="text-gray-700">
                        After Hail Alley events, we deliver photographic damage reports, hail-size
                        evidence, and measurement diagrams that State Farm, USAA, and Texas Farm
                        Bureau adjusters work from. Inspections are typically scheduled within a
                        few days of the call.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Competitive Value</h3>
                      <p className="text-gray-700">
                        Line-item estimates so you can see material, labor, and disposal costs
                        separately. Pricing is backed by GAF, CertainTeed, Carlisle, and Firestone
                        warranties, and our payment timing follows the Texas Prompt Payment Act on
                        commercial projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <InternalLinks currentCity="snyder" currentService="commercial-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Snyder property owners. Expert commercial roofing with
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
        <RelatedArticles pageSlug="commercial-roofing-snyder" />
      </div>
    </>
  );
}
