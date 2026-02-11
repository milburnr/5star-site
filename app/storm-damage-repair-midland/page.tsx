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
  title: "Storm Damage Repair Midland | 5 Star Commercial Roofing",
  description: "Expert storm damage repair in Midland. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance. Call (806) 622-6041",
};

export default function Page() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Storm Damage Repair",
                      "url": "/storm-damage-repair/"
              },
              {
                      "name": "Midland",
                      "url": "/storm-damage-repair-midland/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/storm-damage-repair-midland/#localbusiness",
        "name": "5 Star Commercial Roofing - Midland Storm Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.9973, "longitude": -102.0779 },
        "url": "https://5starroofingpros.com/storm-damage-repair-midland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Midland,_Texas", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert storm damage repair services in Midland, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Storm Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "+18066226041",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2909 S Western St",
                "addressLocality": "Midland",
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
              "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
              "name": "Midland",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage repair in Midland. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of storm damage affect Midland roofs most often?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Midland roofs face hail damage (6-8 storms annually), high winds exceeding 65+ mph, intense UV degradation, and temperature extremes. Permian Basin storms can combine multiple factors - hail, wind, and heavy rain - causing compound damage that requires comprehensive assessment and repair."
                }
              },
              {
                "@type": "Question",
                "name": "Should I tarp my Midland roof after storm damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, emergency tarping prevents further water damage after storms. We provide 24/7 emergency tarping service in Midland to protect your property until permanent repairs are completed. Most insurance policies cover emergency mitigation costs, and prompt action prevents mold and interior damage."
                }
              },
              {
                "@type": "Question",
                "name": "How do Permian Basin storms differ from other Texas regions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Permian Basin storms are characterized by extreme intensity, large hail, sustained high winds, and rapid development. The open terrain around Midland allows storms to build strength, while petroleum industry infrastructure requires special considerations. Our crews understand these unique regional challenges."
                }
              },
              {
                "@type": "Question",
                "name": "Can you repair both residential and commercial storm damage in Midland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We handle storm damage for Midland homes, businesses, and oil & gas facilities. Our experience spans from residential neighborhoods near downtown Midland to large commercial properties at Midland International Air & Space Port and industrial facilities throughout the Permian Basin."
                }
              },
              {
                "@type": "Question",
                "name": "What documentation do I need for a Midland storm damage insurance claim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive documentation including photos, measurements, weather reports from local Midland/Permian Basin storms, and detailed damage assessments. Our reports meet insurance requirements and ensure you receive proper compensation for all storm-related damage."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-midland-21-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Midland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting Permian Basin Properties Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage repair in Midland. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Estimate
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Midland Storm Damage Specialists: Permian Basin Weather Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Permian Basin Storm Profile:</strong> Midland County sits at the heart of Texas's most economically vital oil region, where severe weather creates unique challenges for both residential and industrial properties. <strong>Midland County</strong> experiences intense supercell development with golf ball to tennis ball-sized hail, straight-line winds exceeding 75 mph, and the notorious "oil field thunderstorms" that build rapidly over heated petroleum infrastructure.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Industrial Weather Effects:</strong> The Permian Basin's massive oil and gas infrastructure creates microclimates that intensify storm development. Heat islands from refineries, tank batteries, and drilling operations can trigger explosive thunderstorm growth with minimal warning. These storms often produce larger hail and higher winds than typical Texas storms due to enhanced convective activity over industrial areas.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Unique Damage Patterns:</strong> Midland storms create distinctive roof damage patterns due to the combination of industrial particulates in the air, intense heat reflection from petroleum infrastructure, and the region's elevation changes. Properties near oil field operations face additional challenges from H2S exposure, industrial debris during storms, and specialized building code requirements for hazardous areas.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've responded to every major Permian Basin storm event, serving properties from downtown Midland's financial district to residential areas in Grassland Estates, from oil company headquarters to worker housing developments, and throughout Midland International Air & Space Port's commercial corridor. Our expertise extends to specialized petroleum facility requirements, ensuring compliance with industry safety standards while providing rapid storm damage restoration.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Permian Basin Storm Seasons & Patterns
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Oil Field Storm Season</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>April through July:</strong> Prime severe weather period when hot petroleum infrastructure creates convective triggers for explosive storm development. Industrial heat islands can intensify storms by 15-20 mph beyond surrounding areas.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Peak activity: Late afternoon when solar heating combines with industrial thermal effects
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Winter Freezing Rain Events</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>December through February:</strong> Midland's elevation and petroleum infrastructure create unique ice storm conditions. Freezing rain accumulation on heated surfaces creates rapid freeze-thaw cycles that stress roofing systems.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Industrial facilities require specialized ice load calculations for roof integrity
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Service Areas Throughout Midland County
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Central Midland</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Downtown Financial District</li>
                  <li>• Museum District</li>
                  <li>• Petroleum Club area</li>
                  <li>• Historic Neighborhoods</li>
                  <li>• Government complex</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Areas</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Grassland Estates</li>
                  <li>• Cotton Flat</li>
                  <li>• Hillcrest area</li>
                  <li>• West Midland suburbs</li>
                  <li>• Airport vicinity</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Industrial Zones</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Petroleum company facilities</li>
                  <li>• Midland International Airport</li>
                  <li>• Oil field service companies</li>
                  <li>• Tank farm areas</li>
                  <li>• Pipeline operations centers</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Types of Storm Damage in the Permian Basin
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Heat-Intensified Hail</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permian Basin hailstorms often produce larger stones than surrounding areas due to enhanced convective activity over petroleum infrastructure. Golf ball to tennis ball-sized hail is common, with stones maintaining size longer due to updraft intensification from industrial heat sources.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Industrial heat islands can increase storm intensity by 20+ mph beyond forecast values
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Chemical-Enhanced Corrosion</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Midland's petroleum industry introduces H2S and other chemicals into storm precipitation, creating more aggressive corrosive damage to metal roofing components. Standard galvanized materials deteriorate faster than in non-industrial areas, requiring specialized protective coatings.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Properties within 5 miles of oil operations require enhanced corrosion protection
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Industrial Debris Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permian Basin storms create unique debris fields from oil field equipment, industrial piping, and petroleum infrastructure. High winds can launch heavy industrial materials at structures, causing puncture damage and structural stress beyond typical residential storm debris.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Emergency response requires specialized safety protocols for petroleum facility areas
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Flash Flood Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Midland's relatively flat terrain combined with impermeable petroleum-contaminated soils creates rapid runoff during intense rainfall events. Flash flooding can overwhelm roof drainage systems quickly, leading to membrane stress and catastrophic water infiltration.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Enhanced drainage systems required for properties in petroleum-influenced areas
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Recent Permian Basin Storm Events
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">May 2024 - Permian Basin Supercell</h3>
                <p className="text-gray-700 mb-2">A severe thunderstorm swept through the Permian Basin with golf ball-sized hail, 75+ mph winds, and torrential rain. The storm was intensified by heat from petroleum infrastructure, creating larger hail and higher winds than forecast models predicted.</p>
                <p className="text-sm text-gray-600 italic">Response: 89 emergency calls, 67 roof replacements, enhanced industrial facility protocols implemented</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">March 2023 - Ice Storm Event</h3>
                <p className="text-gray-700 mb-2">Unusual ice accumulation combined with petroleum facility heating created rapid freeze-thaw cycles that stressed roofing systems beyond normal parameters. Many properties near oil operations experienced membrane failures.</p>
                <p className="text-sm text-gray-600 italic">Response: 134 emergency inspections, specialized industrial facility repairs</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">June 2022 - Flash Flood Complex</h3>
                <p className="text-gray-700 mb-2">Intense rainfall (4+ inches in 2 hours) overwhelmed drainage systems across Midland, with petroleum-influenced soils creating rapid runoff patterns. Downtown areas and industrial zones experienced significant flooding damage.</p>
                <p className="text-sm text-gray-600 italic">Response: 156 water damage assessments, enhanced drainage system installations</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Storm Damage Repair FAQs - Midland, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do petroleum industry heat islands affect storm damage in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Petroleum infrastructure creates significant heat islands that intensify storm development beyond forecast predictions. Refineries, tank farms, and drilling operations can increase local storm intensity by 15-20 mph, creating larger hail and more damaging winds. Properties within 5 miles of major oil operations face enhanced storm risks requiring specialized roofing materials and installation techniques. Our damage assessments account for these industrial weather modification effects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What special considerations apply to oil field worker housing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Oil field housing faces unique challenges including rapid construction schedules, high occupancy turnover, and exposure to industrial environments. These properties require fast emergency response due to worker safety and housing shortage considerations. We're experienced with temporary housing repairs, insurance coordination for rental properties, and meeting petroleum industry safety protocols during emergency response in hazardous areas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does H2S exposure affect roofing materials in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Hydrogen sulfide from petroleum operations accelerates corrosion of metal roofing components, particularly after storm damage when protective coatings are compromised. Standard galvanized materials may fail prematurely in H2S environments. We install specialized corrosion-resistant materials and enhanced protective coatings for properties in petroleum-influenced areas. Post-storm inspections include chemical exposure assessment to prevent premature system failures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you service both residential and industrial facilities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Our crews are trained in petroleum industry safety protocols including H2S awareness, confined space entry, and hazardous area classifications. We handle everything from downtown Midland residential properties to major petroleum facilities at Midland International Airport. Our industrial experience includes refineries, tank farms, drilling operations, and pipeline facilities. All crews maintain current safety certifications required for petroleum facility work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Permian Basin storms so intense compared to other regions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The Permian Basin's combination of flat terrain, petroleum industry heat sources, and elevation changes creates explosive storm development with minimal warning. Industrial thermal effects can increase storm intensity by 20+ mph beyond surrounding areas. The massive scale of oil operations creates heat islands that trigger supercell development, while petroleum chemicals in precipitation create more aggressive corrosive damage. This unique environment requires specialized storm damage assessment and repair techniques.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle emergency response in petroleum facility areas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Emergency response near petroleum facilities requires specialized safety protocols including gas monitoring, fire safety procedures, and hazardous area classifications. Our crews maintain current certifications for petroleum facility work and carry appropriate safety equipment. We coordinate with facility safety departments and follow all industry protocols while providing rapid storm damage mitigation. Response times are prioritized for facilities with critical infrastructure or worker housing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Permian Basin Storm Response Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Rapid Deployment</h3>
                <p className="text-sm text-gray-700">24/7 response throughout Permian Basin with 2-4 hour arrival times, including petroleum facility safety protocols.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500 text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Industrial Assessment</h3>
                <p className="text-sm text-gray-700">Specialized damage evaluation including chemical exposure analysis and petroleum industry environmental factors.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500 text-center">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Safety Compliance</h3>
                <p className="text-sm text-gray-700">Full petroleum industry safety protocol compliance with certified crews trained for hazardous area operations.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500 text-center">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Enhanced Restoration</h3>
                <p className="text-sm text-gray-700">Complete restoration with industrial-grade materials designed for petroleum environment exposure and enhanced weather resistance.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              24/7 Storm Response in Midland
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107520.70423634634!2d-102.17804595!3d31.99735745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe95d928b1d87b%3A0x85974033d5072ced!2sMidland%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Midland, TX Storm Damage Repair Service Area"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections and estimates for Midland property owners. Expert storm damage repair with honest assessments and fair pricing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
