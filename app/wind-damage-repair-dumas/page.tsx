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
  alternates: { canonical: 'https://5starroofingpros.com/wind-damage-repair-dumas/' },
  title: 'Wind Damage Repair Dumas TXService | High Plains Winds',
  description: 'wind damage roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function WindDamageRepairDumasPage() {
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
                      "name": "Dumas",
                      "url": "/wind-damage-repair-dumas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/wind-damage-repair-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Wind Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.8656, "longitude": -101.973 },
        "url": "https://5starroofingpros.com/wind-damage-repair-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert wind damage repair services in Dumas, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


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
              "telephone": "+18066226041",
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
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              "name": "Dumas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert wind damage roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                              "name": "What wind speeds typically cause roof damage in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sustained winds above 45 mph begin lifting shingle tabs on older roofs. Gusts exceeding 60 mph can remove entire shingles even from relatively new roofs if installation quality was poor. Dumas regularly experiences wind events in this range, especially during spring and fall frontal passages. High-wind rated installation methods dramatically improve performance."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Will insurance cover wind damage to my Dumas roof?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most homeowner policies cover wind damage when sustained winds or gusts exceed thresholds specified in your policy—typically 50-60 mph. We help document wind speeds from National Weather Service reports and link damage patterns to specific wind events. Our professional documentation improves claim approval rates significantly."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How do you prevent future wind damage in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "High-wind installation methods are critical in Dumas. We use 6-nail patterns instead of standard 4-nail, install premium starter strips with enhanced adhesion, seal all flashing with high-grade sealants, and use Class 4 shingles rated for 130 mph winds. These methods reduce wind damage risk by 80-90% compared to standard installations."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "How quickly can you repair wind damage in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We provide tarping and temporary repairs for actively leaking roofs. Full repair or replacement typically occurs 2-4 weeks after claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle, we work extended hours to accommodate scheduling needs."
                              }
                    },
                    {
                              "@type": "Question",
                              "name": "Should I get a wind damage inspection after every windstorm in Dumas?",
                              "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph. Even if you see no obvious damage from the ground, lifted shingles and flashing issues may exist. We offer free inspections that identify problems early before they cause leaks. Early detection prevents minor wind damage from becoming major water damage."
                              }
                    }
          ]
})
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-5-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Wind Damage Repair in <span className="text-brand-gold-light">Dumas</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Service | High Plains Wind Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  urgent: (806) 622-6041
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
                 
                </div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
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
              Dumas's Wind Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas's location in the Texas Panhandle creates unique roofing challenges. Agricultural and feedlot industry center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural and feedlot industry demands with extreme Panhandle weather—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 190+ Dumas properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Dumas property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-sky-50 border-l-4 border-sky-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-sky-800">🌬️ Dumas High Plains Wind Environment</h3>
            <p className="text-lg mb-6">Dumas sits on the High Plains at 3,700 feet elevation, creating one of the most wind-exposed environments in Texas. The combination of elevation, flat terrain, and weather patterns makes wind damage a year-round concern for property owners.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-sky-700">Geographic Wind Factors</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Elevation:</strong> 3,700+ feet increases wind exposure</li>
                  <li>• <strong>Topography:</strong> Flat high plains allow unobstructed wind flow</li>
                  <li>• <strong>Agricultural setting:</strong> Open farmland provides 50+ mile wind fetch</li>
                  <li>• <strong>Industrial exposure:</strong> Feedlot and agricultural facilities create wind turbulence</li>
                  <li>• <strong>Caprock proximity:</strong> Escarpment creates wind acceleration zones</li>
                  <li>• <strong>Urban heat island:</strong> City creates local thermal wind patterns</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-sky-700">Seasonal Wind Patterns</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Spring (March-May):</strong> Severe weather season, 70-100+ mph gusts</li>
                  <li>• <strong>Summer (June-August):</strong> Daily thermal winds, isolated microbursts</li>
                  <li>• <strong>Fall (September-November):</strong> Frontal passages, 50-70 mph winds</li>
                  <li>• <strong>Winter (December-February):</strong> Arctic fronts, sustained 40-60 mph</li>
                  <li>• <strong>Year-round average:</strong> 14-16 mph sustained winds</li>
                  <li>• <strong>Peak wind months:</strong> March, April, and October</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Understanding Wind Damage in Dumas</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
              Wind damage in Dumas follows predictable patterns based on building orientation, roof design, and material quality. Our comprehensive assessment identifies both visible damage and potential failure points.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-3xl mb-4">💨</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Shingle Blow-Off Damage</h3>
                <p className="text-gray-600 mb-4">Most common wind damage in Dumas. High Plains winds get under shingle edges and tear them completely off, especially at roof perimeters.</p>
                <ul className="text-sm space-y-1">
                  <li>• Corner and edge shingles most vulnerable</li>
                  <li>• Progressive failure from small lifts to complete loss</li>
                  <li>• Ridge caps blown off in sustained winds</li>
                  <li>• Starter strip failures at roof eaves</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-3xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Edge Lifting & Curling</h3>
                <p className="text-gray-600 mb-4">Constant High Plains winds cause shingle edges to lift and curl, breaking sealant bonds and creating entry points for future wind events.</p>
                <ul className="text-sm space-y-1">
                  <li>• Thermal cycling accelerates edge lifting</li>
                  <li>• Broken adhesive strips from wind flexing</li>
                  <li>• UV damage weakens shingle flexibility</li>
                  <li>• Progressive worsening with each wind event</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Flashing & Metal Work</h3>
                <p className="text-gray-600 mb-4">Metal components are particularly vulnerable to High Plains winds. Flashing around penetrations and edges fails first.</p>
                <ul className="text-sm space-y-1">
                  <li>• Chimney flashing pulled loose from substrate</li>
                  <li>• Vent pipe boots torn or displaced</li>
                  <li>• Drip edge separation from fascia boards</li>
                  <li>• Valley metal lifting and bending</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-3xl mb-4">🌿</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Debris Impact</h3>
                <p className="text-gray-600 mb-4">Dumas's agricultural setting creates unique debris hazards during windstorms—equipment, materials, and vegetation become projectiles.</p>
                <ul className="text-sm space-y-1">
                  <li>• Farm equipment debris (tarps, panels, tools)</li>
                  <li>• Crop residue and tumbleweeds</li>
                  <li>• Feedlot materials (fencing, panels)</li>
                  <li>• Tree limbs from shelter belt plantings</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-3xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Commercial Building Stress</h3>
                <p className="text-gray-600 mb-4">Large commercial and agricultural buildings in Dumas experience concentrated wind loads that stress roof systems differently than residential properties.</p>
                <ul className="text-sm space-y-1">
                  <li>• Membrane billowing on flat roofs</li>
                  <li>• Metal panel fastener failures</li>
                  <li>• Parapet wall wind pressure damage</li>
                  <li>• HVAC equipment displacement</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Electrical & Utility Damage</h3>
                <p className="text-gray-600 mb-4">High Plains winds often damage electrical systems and utilities, creating additional hazards and complicating roof repairs.</p>
                <ul className="text-sm space-y-1">
                  <li>• Power line failures affecting repair scheduling</li>
                  <li>• Electrical mast and service entrance damage</li>
                  <li>• Satellite dish and antenna displacement</li>
                  <li>• Solar panel mounting system stress</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-amber-50 border-l-4 border-amber-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-amber-800">🏭 Dumas Industrial & Agricultural Considerations</h3>
            <p className="text-lg mb-6">Dumas's role as a major agricultural and feedlot center creates unique roofing challenges that require specialized expertise and materials.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-amber-700">Agricultural Industry Impacts</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Feedlot operations:</strong> Ammonia exposure accelerates metal corrosion</li>
                  <li>• <strong>Grain storage facilities:</strong> Dust accumulation affects roof surface</li>
                  <li>• <strong>Processing plants:</strong> Chemical emissions impact roofing materials</li>
                  <li>• <strong>Heavy equipment:</strong> Vibration affects fastener integrity</li>
                  <li>• <strong>Agricultural chemicals:</strong> Fertilizer runoff creates corrosive conditions</li>
                  <li>• <strong>Livestock operations:</strong> Biological contaminants require special cleaning</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-amber-700">Industrial Building Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Large span roofs:</strong> Enhanced structural support needed</li>
                  <li>• <strong>Heavy load ratings:</strong> Equipment and storage requirements</li>
                  <li>• <strong>Chemical resistance:</strong> Special membrane materials</li>
                  <li>• <strong>Ventilation systems:</strong> Complex penetration sealing</li>
                  <li>• <strong>Drainage capacity:</strong> Oversized systems for flat roofs</li>
                  <li>• <strong>Access requirements:</strong> Walkways and safety systems</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What wind speeds typically cause roof damage in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Sustained winds above 45 mph begin lifting shingle tabs on older roofs. Gusts exceeding 60 mph can remove entire shingles even from relatively new roofs if installation quality was poor. Dumas regularly experiences wind events in this range, especially during spring and fall frontal passages. High-wind rated installation methods dramatically improve performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover wind damage to my Dumas roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner policies cover wind damage when sustained winds or gusts exceed thresholds specified in your policy—typically 50-60 mph. We help document wind speeds from National Weather Service reports and link damage patterns to specific wind events. Our professional documentation improves claim approval rates significantly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you prevent future wind damage in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  High-wind installation methods are critical in Dumas. We use 6-nail patterns instead of standard 4-nail, install premium starter strips with enhanced adhesion, seal all flashing with high-grade sealants, and use Class 4 shingles rated for 130 mph winds. These methods reduce wind damage risk by 80-90% compared to standard installations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair wind damage in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide tarping and temporary repairs for actively leaking roofs. Full repair or replacement typically occurs 2-4 weeks after claim approval, depending on material availability and scheduling. During widespread wind events affecting the entire Texas Panhandle, we work extended hours to accommodate scheduling needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I get a wind damage inspection after every windstorm in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Inspect after wind events with sustained winds above 45 mph or gusts exceeding 60 mph. Even if you see no obvious damage from the ground, lifted shingles and flashing issues may exist. We offer free inspections that identify problems early before they cause leaks. Early detection prevents minor wind damage from becoming major water damage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        
        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Dumas, TX</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52373.48394183475!2d-101.9734!3d35.8657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870196c5448c58c7%3A0x61f1e483f088b833!2sDumas%2C%20TX!5e0!3m2!1sen!2sus!4v1736541456789!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas property owners. Expert wind damage repair with comprehensive warranties and insurance claim assistance.
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
