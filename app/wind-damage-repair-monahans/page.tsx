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
  title: "Wind Damage Repair Monahans TX | 5 Star Commercial Roofing",
  description: "Expert wind damage roof repair in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function WindDamageRepairMonahansPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Wind Damage Repair",
                      "url": "/wind-damage-repair/"
              },
              {
                      "name": "Monahans",
                      "url": "/wind-damage-repair-monahans/"
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
            "serviceType": "Wind Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
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
              },
              "parentOrganization": { "@id": "https://5starroofingpros.com/#organization" }
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
            "description": "Expert wind damage roof repair in Monahans TX. Permian Basin experiences 6-8 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/wind-damage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Monahans</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin Wind Damage Repair Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Monahans TX. Permian Basin experiences 6-8 hailstorms annually. Free inspections. Call (806) 622-6041
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
              Monahans's Wind Damage Repair Specialists
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
              Permian Basin Wind Damage Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Desert Microburst Systems</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Permian Basin's arid environment creates intense microburst systems that can generate downburst winds exceeding 100 mph in concentrated areas. These sudden, powerful wind events cause severe damage to industrial roofing systems and require specialized repair techniques unique to desert climates.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Industrial Wind Loading</h3>
                <p className="text-gray-700 leading-relaxed">
                  Oil and gas facilities in Ward County experience additional wind loading from industrial equipment, flare stacks, and processing units that create turbulence and pressure variations. This complex wind environment requires advanced understanding of aerodynamic forces for effective repairs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Sand Abrasion Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  High winds in the Monahans area carry sand and debris that can scour roofing materials, accelerating wear and creating weak points. Wind damage repairs must account for ongoing abrasion and include protective measures against sand-laden winds from nearby sandhills.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Thermal Wind Stress</h3>
                <p className="text-gray-700 leading-relaxed">
                  Desert temperature extremes create thermal winds and expansion stresses that compound mechanical wind damage. Our repair methods account for thermal cycling effects that can cause secondary damage after initial wind events.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-orange-50 to-red-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Wind Damage Patterns in the Permian Basin
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Downdraft Microbursts</h3>
                <p className="text-gray-700">
                  Intense downdrafts from thunderstorms create concentrated wind zones with speeds exceeding 100 mph. These microbursts can completely destroy roofing systems in small areas while leaving adjacent properties untouched.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Haboob Dust Storms</h3>
                <p className="text-gray-700">
                  Massive dust storms sweep across the Permian Basin with 50-70 mph winds carrying sand and debris. These storms cause widespread damage through abrasion and can infiltrate building envelopes through wind-damaged areas.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Thermal Gradient Winds</h3>
                <p className="text-gray-700">
                  Extreme temperature differences between day and night create strong gradient winds that stress roofing systems. These thermal winds can reach 40-60 mph and cause progressive damage over time.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Permian Basin Wind Data</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">100+</div>
                  <div className="text-sm text-gray-600">Microburst Winds (MPH)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">50-70</div>
                  <div className="text-sm text-gray-600">Dust Storm Winds (MPH)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">280+</div>
                  <div className="text-sm text-gray-600">Windy Days/Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">2,600</div>
                  <div className="text-sm text-gray-600">Elevation (ft)</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Industrial Wind Damage Repair Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Industrial Safety Protocol</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Oil and gas facilities require specialized safety protocols including H2S training, hot work permits, and confined space procedures. Our certified technicians follow strict industrial safety standards while conducting damage assessments and repairs around active operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Advanced Damage Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Using thermal imaging, drone surveys, and wind load calculations, we analyze damage patterns specific to desert wind events. Our assessments consider not only visible damage but also underlying structural stress and thermal effects that may cause future failures.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Operational Continuity Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Industrial facilities cannot shut down for repairs. We develop phased repair plans that maintain operational continuity while addressing wind damage. Our scheduling accommodates production requirements and emergency response needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Enhanced Material Specifications</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Desert wind conditions demand superior materials. We specify high-wind-rated membranes, upgraded fastening systems, and chemical-resistant components that withstand both wind forces and industrial exposure common in Permian Basin facilities.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Environmental Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Industrial repairs must meet environmental regulations and air quality standards. Our processes minimize dust generation, prevent contamination, and ensure all repair activities comply with EPA and TCEQ requirements for industrial facilities.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Ward County Wind Damage Repair FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="industrial-response" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do you handle wind damage emergencies at industrial facilities?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Our industrial emergency response team is available 24/7 with specialized equipment for oil and gas facilities. We maintain safety certifications for industrial work and can coordinate with facility safety managers to provide immediate emergency repairs while maintaining operational safety protocols.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="microburst-damage" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  What makes microburst wind damage different from regular storm damage?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Microburst damage is typically more severe and concentrated than regular storm damage. The straight-down wind flow creates unique damage patterns including crushed equipment, compressed membranes, and structural deformation. Repairs must address not only surface damage but also underlying structural impacts from intense downward pressure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dust-storm-repairs" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do you repair damage from Permian Basin dust storms?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Dust storm repairs address both wind damage and sand infiltration. We perform thorough cleaning to remove abrasive particles, assess membrane integrity, and seal all penetration points. Special attention is paid to HVAC systems and drainage areas where sand accumulation can cause ongoing problems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="industrial-insurance" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Do industrial wind damage repairs qualify for business interruption coverage?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Many industrial policies include business interruption coverage for wind damage. We work with commercial insurance adjusters who understand industrial operations and can document both property damage and operational impacts. Our detailed assessments help support business interruption claims when applicable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="prevention-upgrades" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can wind damage repairs include upgrades to prevent future damage?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, we often recommend and implement upgrades during repairs including enhanced fastening systems, reinforced membrane specifications, and improved edge details. These upgrades are particularly important for industrial facilities where downtime costs can exceed repair costs significantly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="remote-locations" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can you repair wind damage at remote Permian Basin locations?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. Our mobile repair units are equipped for remote operations throughout Ward County and the Permian Basin. We coordinate material delivery, equipment transport, and logistics for facilities in remote locations, ensuring the same quality repairs regardless of accessibility challenges.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Permian Basin Properties We've Restored
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🛢️</div>
                <h3 className="font-bold text-brand-brown mb-2">Oil & Gas Facilities</h3>
                <p className="text-gray-600 text-sm">Refineries, processing plants, pump stations, tank farms</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-brand-brown mb-2">Power Generation</h3>
                <p className="text-gray-600 text-sm">Power plants, substations, transmission facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Industrial Manufacturing</h3>
                <p className="text-gray-600 text-sm">Chemical plants, equipment manufacturing, processing facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🚛</div>
                <h3 className="font-bold text-brand-brown mb-2">Transportation Hubs</h3>
                <p className="text-gray-600 text-sm">Distribution centers, truck terminals, logistics facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-brand-brown mb-2">Commercial Buildings</h3>
                <p className="text-gray-600 text-sm">Retail centers, offices, service businesses</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-brand-brown mb-2">Municipal Facilities</h3>
                <p className="text-gray-600 text-sm">Government buildings, emergency services, public works</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From major energy operations to municipal buildings throughout Ward County, we've helped Permian Basin property owners recover from severe wind damage and prepare for future desert storm events.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-12 rounded-3xl border border-red-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-red-700 mb-4">Industrial Emergency Wind Damage Response</h2>
              <div className="text-6xl mb-4">🚨</div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Desert microbursts and dust storms can cause catastrophic damage to industrial facilities. Emergency response is critical.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">Industrial Emergency Protocols</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Establish safety perimeter around damaged areas</li>
                  <li>• Contact facility safety manager immediately</li>
                  <li>• Document damage for insurance and regulatory compliance</li>
                  <li>• Secure any hazardous material exposures</li>
                  <li>• Call our industrial emergency line: (806) 622-6041</li>
                  <li>• Coordinate with environmental compliance officers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">Our Industrial Emergency Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24/7 certified industrial response team</li>
                  <li>• Emergency containment and securing</li>
                  <li>• Hot work permits and safety compliance</li>
                  <li>• Environmental protection measures</li>
                  <li>• Regulatory documentation assistance</li>
                  <li>• Operational continuity planning</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="tel:8066226041" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 inline-block">
                🚨 Industrial Emergency: Call (806) 622-6041
              </a>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Restore Your Permian Basin Operation</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert wind damage repair for Ward County industrial and commercial properties. Our specialized team understands desert wind patterns and industrial requirements. Trust the Permian Basin's wind damage experts.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Assessment
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
