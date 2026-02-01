import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "TPO Roofing Monahans TX | 5 Star Commercial Roofing",
  description: "Expert TPO roofing installation in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingMonahansPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "TPO Roofing",
                      "url": "/tpo-roofing/"
              },
              {
                      "name": "Monahans",
                      "url": "/tpo-roofing-monahans/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
              "telephone": "(806) 622-6041",
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
                "latitude": 35.1768,
                "longitude": -101.8590
              },
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
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Monahans",
              "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing installation in Monahans TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/tpo-roof-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                TPO Roofing in <span className="text-brand-gold-light">Monahans</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin TPO Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert TPO roofing installation in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
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
              Monahans's TPO Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Monahans's location in Ward County creates unique roofing challenges. The Permian Basin experiences 6-8 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Monahans and Ward County with premium materials and expert installation. From properties near Monahans Sandhills State Park to buildings throughout Monahans, we understand Permian Basin weather patterns, local building codes, and the specific needs of Ward County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Monahans, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-102.89!3d31.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sMonahans%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monahans, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Roofing Solutions for Permian Basin Commercial Properties
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Permian Basin Durability</h3>
                <p className="text-gray-700 leading-relaxed">
                  TPO roofing systems excel in Monahans' desert climate with extreme temperature variations, intense UV exposure, and periodic severe weather. Our premium TPO membranes withstand thermal cycling from freezing winters to scorching 110°F+ summer days without cracking or degradation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Oil & Gas Industry Protection</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Permian Basin's oil and gas facilities require roofing systems that resist chemical exposure and industrial contamination. TPO's chemical resistance and easy maintenance make it ideal for industrial applications throughout Ward County's energy sector.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Sand & Wind Resistance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Monahans' sandy environment and frequent high winds demand superior membrane attachment. Our mechanically fastened TPO systems provide exceptional wind uplift resistance while preventing sand infiltration that can damage other roofing materials.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Water Conservation</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the arid Permian Basin, every drop counts. TPO roofing systems can be integrated with rainwater collection systems, and their superior waterproofing prevents costly water damage in a region where replacement water is expensive.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-orange-50 to-red-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Monahans Desert Climate Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌵</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Desert Heat Extremes</h3>
                <p className="text-gray-700">
                  Summer temperatures often exceed 110°F with roof surface temperatures reaching 170°F+. TPO's reflective surface and thermal stability prevent heat-related membrane failure common in other roofing systems.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏖️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Sandstorm Exposure</h3>
                <p className="text-gray-700">
                  Near the famous Monahans Sandhills, properties face regular sandstorm exposure that can scour and damage roofing materials. TPO's smooth surface and UV-resistant formulation maintain integrity despite sand abrasion.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Severe Weather Events</h3>
                <p className="text-gray-700">
                  The Permian Basin experiences 6-8 hailstorms annually plus microbursts and straight-line winds exceeding 70 mph. TPO's impact resistance and wind uplift ratings provide superior protection.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Permian Basin Weather Statistics</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">6-8</div>
                  <div className="text-sm text-gray-600">Annual Hailstorms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">110°F+</div>
                  <div className="text-sm text-gray-600">Peak Summer Temps</div>
                </div>
                <div className="text-3xl font-bold text-brand-gold mb-2">12"</div>
                  <div className="text-sm text-gray-600">Annual Rainfall</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">320+</div>
                  <div className="text-sm text-gray-600">Sunny Days/Year</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Specialized TPO Installation for Industrial Applications
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Industrial Site Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team conducts specialized assessments for oil and gas facilities, considering factors like chemical exposure, equipment loads, vibration, and thermal expansion. We evaluate existing ventilation systems and plan for future equipment modifications common in Permian Basin operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Enhanced Membrane Selection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We specify TPO membranes with enhanced chemical resistance for industrial applications. Reinforced membranes and specialized attachment methods accommodate the higher loads and environmental stresses typical of Ward County's energy infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Safety Protocol Implementation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working around active oil and gas operations requires stringent safety protocols. Our crews are trained in H2S awareness, confined space procedures, and energy industry safety standards. We coordinate with facility managers to minimize operational disruptions.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Precision Installation Techniques</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Industrial roofing demands exceptional precision. We use advanced welding techniques suitable for high-temperature environments and provide additional seam testing beyond standard requirements. Each penetration is sealed with industrial-grade materials.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Extended Testing & Documentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Industrial facilities require comprehensive testing documentation for insurance and regulatory compliance. We perform electronic leak detection, thermal imaging, and provide detailed installation reports meeting industry standards.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Ward County TPO Roofing FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="desert-performance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How does TPO perform in Monahans' extreme desert heat?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  TPO excels in desert climates with its exceptional thermal stability and heat resistance. The white membrane reflects up to 85% of solar radiation, keeping roof temperatures 50-70°F cooler than dark membranes. TPO maintains flexibility and strength even with daily thermal cycling from freezing nights to 110°F+ days, preventing the cracking and splitting common in other materials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="chemical-resistance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Is TPO suitable for oil and gas facilities in the Permian Basin?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, TPO offers excellent chemical resistance to most industrial chemicals common in oil and gas operations. The membrane resists degradation from petroleum products, acids, and alkalis. We recommend specific TPO formulations for facilities with heavy chemical exposure and can provide additional protective coatings when needed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sand-protection" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How does TPO handle sandstorm damage near Monahans Sandhills?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  TPO's smooth, non-granulated surface resists sand abrasion better than modified bitumen or asphalt shingles. The membrane's UV-resistant formulation prevents degradation from sand scouring. While no roofing material is completely immune to severe sandstorm damage, TPO's durability and repair-friendly nature make it ideal for sandy environments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="water-efficiency" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can TPO roofing help with water conservation in the desert?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. TPO's superior waterproofing prevents water loss from leaks, crucial in water-scarce regions. The membrane can be integrated with rainwater harvesting systems to capture the limited precipitation Monahans receives. Every gallon saved reduces dependence on expensive trucked or piped water common in remote Permian Basin locations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="industrial-warranty" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  What warranties apply to industrial TPO installations?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Industrial TPO installations qualify for the same manufacturer warranties as commercial buildings - typically 15-30 years on materials. Our labor warranty extends to 10 years for industrial applications. Many warranties include protection against chemical exposure, wind uplift to 120+ mph, and thermal cycling damage common in industrial environments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="maintenance-schedule" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  What maintenance schedule is recommended for Monahans properties?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  In Monahans' desert environment, we recommend bi-annual inspections (spring and fall), with additional post-storm inspections after severe weather. Sand removal from drains and equipment areas should occur quarterly. The intense UV and temperature extremes require annual seam inspections. Proper maintenance extends TPO lifespan to 25-30 years in desert climates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Ward County Industrial & Commercial Properties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🛢️</div>
                <h3 className="font-bold text-brand-brown mb-2">Oil & Gas Facilities</h3>
                <p className="text-gray-600 text-sm">Refineries, pump stations, tank farms, processing plants</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-brand-brown mb-2">Energy Infrastructure</h3>
                <p className="text-gray-600 text-sm">Power plants, substations, transmission facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🚛</div>
                <h3 className="font-bold text-brand-brown mb-2">Logistics Centers</h3>
                <p className="text-gray-600 text-sm">Warehouses, distribution centers, equipment storage</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Manufacturing Plants</h3>
                <p className="text-gray-600 text-sm">Chemical processing, equipment manufacturing</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-brand-brown mb-2">Commercial Buildings</h3>
                <p className="text-gray-600 text-sm">Retail stores, restaurants, service businesses</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="font-bold text-brand-brown mb-2">Municipal Buildings</h3>
                <p className="text-gray-600 text-sm">Government facilities, emergency services, utilities</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From Permian Basin energy operations to municipal facilities and local businesses, our TPO roofing systems protect diverse properties throughout Monahans and Ward County's challenging desert environment.
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Monahans Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Ward County property owners. Expert TPO roofing engineered for desert climates and industrial applications. Trust the Permian Basin's commercial roofing specialists.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
