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
  title: "Storm Damage Repair Lubbock | 5 Star Commercial Roofing",
  description: "Expert storm damage repair in Lubbock. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance. Call (806) 622-6041",
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
                      "name": "Lubbock",
                      "url": "/storm-damage-repair-lubbock/"
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
            "serviceType": "Storm Damage Roof Repair",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "+18066226041",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2909 S Western St",
                "addressLocality": "Lubbock",
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
              "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
              "name": "Lubbock",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert storm damage repair in Lubbock. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance."
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
                "name": "What types of storm damage affect roofs in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lubbock roofs face multiple storm threats including hail (7-10 events annually), wind gusts exceeding 70+ mph, heavy rain causing water infiltration, and debris impact from South Plains storms. Spring and early summer bring severe thunderstorms with large hail and straight-line winds. Dust storms reduce visibility and deposit abrasive particles. Winter ice accumulation stresses roof structures. Our comprehensive storm damage assessment identifies all issues including hidden damage to underlayment, decking, and structural components that worsen without prompt repair."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to storm damage emergencies in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide 24/7 emergency response throughout Lubbock and the South Plains region. Our crews typically arrive within 2-4 hours for urgent tarping and temporary weatherproofing. We prioritize properties with active leaks, missing shingles exposing underlayment, or structural damage. After severe storms affecting neighborhoods near Mackenzie Park, Prairie Dog Town, or the Depot District, we deploy multiple crews to serve affected areas quickly. Emergency tarping prevents secondary water damage while you schedule permanent repairs and process insurance claims."
                }
              },
              {
                "@type": "Question",
                "name": "Does insurance cover all types of storm damage in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Lubbock homeowner policies cover sudden storm damage including hail, wind, and debris impact. Coverage typically includes roof replacement, interior water damage repairs, and temporary housing if needed. Gradual deterioration or maintenance issues aren't covered. We document all storm-related damage with photos, measurements, and detailed reports. Our experience with South Plains insurance adjusters helps differentiate covered storm damage from pre-existing conditions. We handle the entire claims process, ensuring you receive fair compensation for complete restoration."
                }
              },
              {
                "@type": "Question",
                "name": "What areas of Lubbock do you serve for storm damage repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all Lubbock neighborhoods including Tech Terrace, Overton, Melonie Park, and areas surrounding Texas Tech University and the National Ranching Heritage Center. Our service extends throughout the South Plains agricultural region to rural properties and farm buildings. We're familiar with specific challenges in each area, from historic homes near the Buddy Holly Center requiring specialized repairs to modern developments with HOA requirements. Our local presence since 2014 ensures prompt response and expert service across greater Lubbock."
                }
              },
              {
                "@type": "Question",
                "name": "Can storm damage be prevented in Lubbock's severe weather?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While storms can't be prevented, proper preparation minimizes damage. Class 4 impact-resistant shingles reduce hail damage significantly. Proper attic ventilation prevents ice dam formation. Regular inspections identify weak spots before storms hit. Trim trees near the roof to prevent debris impact. Ensure proper flashing around chimneys and vents. Install high-wind rated shingles for South Plains conditions. Our preventive maintenance program includes pre-storm inspections, minor repairs, and recommendations to strengthen your roof against Lubbock's severe weather threats."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/storm-damage-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Protecting South Plains Properties Since 2014
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert storm damage repair in Lubbock. 24/7 emergency service for hail, wind, and weather damage. Complete insurance assistance.
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
              Lubbock Storm Damage Experts: South Plains Weather Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Lubbock County's Unique Storm Profile:</strong> The South Plains region experiences some of Texas's most dramatic weather phenomena, including the infamous <strong>October 17, 2011 haboob</strong> that rolled across Texas Tech University with 77+ mph winds and zero visibility. These massive dust storms, combined with severe thunderstorms, create multi-layered roofing challenges that demand specialized expertise.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Dust Storm Roof Damage:</strong> Lubbock's haboobs aren't just dramatic visually—they cause serious roof damage through abrasive sand particles, extreme winds, and sudden pressure changes. The 2011 event caused extensive roof damage at Lubbock Airport and across residential areas. These storms scour protective granules from shingles, drive sand into ventilation systems, and stress flashing around penetrations. Following dust storms, thunderstorms often bring heavy rain that infiltrates compromised roofing systems.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Texas Tech Weather Research Connection:</strong> Lubbock benefits from being home to leading atmospheric research at Texas Tech University. Local meteorologists track storm patterns that help us understand why the South Plains experiences such intense weather convergence. The combination of flat terrain, elevation changes moving toward the Caprock, and collision of air masses creates explosive storm development with minimal warning.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've responded to every major Lubbock weather event, from the March 2023 dust storms that blanketed the city to severe hailstorms that impact the Texas Tech campus and surrounding neighborhoods. We serve properties from historic Overton Park to modern developments near the Marsha Sharp Freeway, providing 24/7 emergency response with 2-4 hour arrival times. Our crews understand how South Plains weather creates hidden damage and document everything for comprehensive insurance claims.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Lubbock's Storm Seasons & Weather Patterns
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Spring Haboob Season</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>March-May:</strong> Prime haboob formation season when cold fronts meet heated ground conditions. These massive dust walls can exceed 10,000 feet in height with winds gusting 75+ mph. The 2011 haboob reached speeds of 77 mph as it rolled across Texas Tech campus.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Haboobs cause roof damage through abrasive sand particles, sudden pressure changes, and membrane stress.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Severe Thunderstorm Season</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>April-June:</strong> Peak severe weather period with supercell development across the Caprock. Golf ball to tennis ball-sized hail is common, often following dust storm events. Wind speeds regularly exceed 70 mph with embedded microbursts.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Combination storms (dust + rain + hail) create the most comprehensive roof damage scenarios.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Service Areas Throughout Lubbock County
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Texas Tech Area</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Tech Terrace Historic District</li>
                  <li>• University campus buildings</li>
                  <li>• Student housing complexes</li>
                  <li>• Faculty residential areas</li>
                  <li>• Greek life properties</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Central Lubbock</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Downtown Depot District</li>
                  <li>• Overton Park</li>
                  <li>• Melonie Park</li>
                  <li>• Guadalupe-Parkway</li>
                  <li>• Buddy Holly Cultural District</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">South Plains Regional</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Southwest Lubbock suburbs</li>
                  <li>• Agricultural properties</li>
                  <li>• Mackenzie Park vicinity</li>
                  <li>• Lubbock Lake Landmark area</li>
                  <li>• Rural Lubbock County</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Types of Storm Damage Unique to Lubbock
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Haboob Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lubbock's signature weather phenomenon: massive dust walls with 70+ mph winds that sandblast roofing materials, clog ventilation systems, and stress structural components through sudden pressure changes. The 2011 haboob caused roof damage across Texas Tech campus and surrounding areas.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Unique to South Plains: sand infiltration into flashing details and membrane stress from rapid barometric pressure changes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Post-Dust Storm Rain Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After dust storms compromise roof surfaces, subsequent rain events create rapid water infiltration through damaged seals and scoured shingle surfaces. This combination is particularly problematic in Lubbock where storms often occur in sequences.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Critical timeline: Dust storm damage must be addressed before the next rain event to prevent interior damage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Agricultural Debris Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  South Plains agricultural activity creates unique debris fields during storms. Cotton plants, irrigation equipment, and agricultural structures become projectiles in severe weather, causing puncture damage and membrane breaches across Lubbock County properties.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Rural properties face additional challenges from agricultural equipment and cotton gin debris during storm events.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Caprock Wind Acceleration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lubbock's position near the Caprock Escarpment creates wind acceleration zones where storms intensify rapidly. This geographic feature causes sudden wind speed increases that stress roofing systems beyond typical design parameters, particularly affecting buildings on the city's eastern edge.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Wind patterns unique to Caprock geography require specialized understanding for proper damage assessment.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Recent Notable Storm Events in Lubbock
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">October 17, 2011 - Historic Haboob</h3>
                <p className="text-gray-700 mb-2">The most famous Lubbock weather event: a massive dust wall rolled across Texas Tech campus with 77 mph winds, creating zero visibility and causing extensive roof damage across the city. This haboob was captured on dramatic time-lapse video from the TTU Business Administration Building.</p>
                <p className="text-sm text-gray-600 italic">Response: 234 emergency tarping jobs, extensive granule replacement across affected neighborhoods</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">March 2023 - Multi-Day Dust Storm</h3>
                <p className="text-gray-700 mb-2">A prolonged dust storm event lasting multiple days created some of the worst air quality conditions in Lubbock history. Unlike typical haboobs, this extended event caused sustained abrasive damage to roofing materials across the South Plains.</p>
                <p className="text-sm text-gray-600 italic">Response: 178 damage assessments, extensive ventilation system cleanings</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">May 2022 - Severe Hail Complex</h3>
                <p className="text-gray-700 mb-2">Tennis ball-sized hail impacted Texas Tech campus and surrounding residential areas, causing widespread damage to vehicles and roofs. This storm system produced multiple severe cells across Lubbock County.</p>
                <p className="text-sm text-gray-600 italic">Response: 156 roof replacements, $3.2M in insurance settlements processed</p>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Frequently Asked Questions - Storm Damage Repair in Lubbock
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes haboobs so damaging to Lubbock roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Haboobs combine extreme winds (70+ mph) with massive amounts of abrasive sand particles that sandblast roofing materials. The sudden barometric pressure changes stress membrane systems, while sand infiltration clogs ventilation and damages flashing seals. The 2011 haboob that hit Texas Tech demonstrated how these storms can cause city-wide roof damage in a matter of hours. Unlike typical windstorms, haboobs sustain high winds for extended periods while carrying debris that impacts every exposed surface.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to storm damage emergencies in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide 24/7 emergency response throughout Lubbock and the South Plains with 2-4 hour arrival times. After major events like haboobs affecting the Texas Tech campus or severe storms impacting the Depot District, we deploy multiple crews simultaneously. Our local knowledge of Lubbock's unique weather patterns means we're often pre-positioned before severe weather strikes. Emergency tarping and temporary repairs prevent interior damage while you process insurance claims and schedule permanent restoration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does insurance cover dust storm damage to roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, sudden damage from windstorms (including haboobs) is typically covered under standard homeowner policies in Texas. However, documenting dust storm damage requires specialized knowledge—the abrasive damage patterns and membrane stress are different from typical wind damage. Our experience with South Plains insurance adjusters helps ensure comprehensive coverage for all storm-related damage including granule loss, seal deterioration, and ventilation system impacts unique to dust storm events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What special considerations apply to Texas Tech area properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The Texas Tech University area has unique challenges including high-density housing, aging infrastructure in Tech Terrace, and specific HOA requirements for student housing. Many properties require fast emergency response due to rental income considerations. We're experienced with TTU campus protocols and work efficiently with property management companies. The elevated campus location also experiences different wind patterns during storms, requiring specialized damage assessment techniques for accurate insurance documentation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you protect roofs against future Lubbock dust storms?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We install specialized roofing systems designed for South Plains conditions: Class 4 impact-resistant shingles with enhanced adhesion, upgraded ventilation systems with dust filtration, and reinforced flashing details that resist sand infiltration. High-wind rated materials (130+ mph) protect against haboob-force winds. Proper attic ventilation prevents pressure differential damage during rapid barometric changes. Our maintenance program includes pre-storm inspections and post-storm assessments to address minor issues before they become major problems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why are combination storms (dust + rain) particularly problematic?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock frequently experiences dust storms followed by rain within hours or days. The initial haboob scours protective granules and compromises seals, then subsequent rain infiltrates through the damaged areas. This creates rapid onset of interior damage that wouldn't occur from either storm type individually. Our emergency response prioritizes quick temporary protection after dust storms to prevent secondary damage from following rain events. This timing-critical approach saves thousands in interior restoration costs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown text-center">
              Serving Lubbock and the South Plains
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214628.83174374424!2d-101.94953284999999!3d33.577863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add1019bfb%3A0x3704f77c0633ae02!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1642535234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lubbock, TX Service Area Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections and estimates for Lubbock property owners. Expert storm damage repair with honest assessments and fair pricing.
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
