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

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Amarillo TXEmergency | 5 Star',
  description: 'Storm Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function StormDamageRepairAmarilloPage() {
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
                      "name": "Amarillo",
                      "url": "/storm-damage-repair-amarillo/"
              }
      ]} />


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
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "24/7 emergency storm damage roof repair in Amarillo, TX. Wind, hail, and severe weather damage specialists with complete insurance assistance."
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
                "name": "How quickly can you respond to storm damage emergencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain 24/7 emergency teams throughout the Amarillo area with 2-4 hour response times for critical situations. During major storm events affecting the entire Texas Panhandle, we mobilize additional crews to handle high call volumes. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Will insurance cover my storm damage repairs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes emergency mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise."
                }
              },
              {
                "@type": "Question",
                "name": "Should I tarp my roof myself or wait for professionals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe."
                }
              },
              {
                "@type": "Question",
                "name": "How long does storm damage roof replacement take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting all of Amarillo, timelines may extend due to high demand—early claims get priority scheduling."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do immediately after storm damage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "(1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for emergency inspection and mitigation—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from emergency response through final restoration."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/storm-damage-roof-repair.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Storm Damage Repair in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Service | Severe Weather Specialists
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Texas Panhandle severe storms bring hail, high winds, torrential rain, and tornado activity. We provide 24/7 emergency response, temporary repairs, complete damage assessment, and insurance claim assistance for storm-damaged roofs throughout Amarillo.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="bg-gradient-to-r from-red-600 to-red-700 text-white text-lg px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-subtle">
                  Emergency: (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-red-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={2} />-4hr
                </div>
                <div className="text-brand-brown font-semibold text-lg">Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">FREE</div>
                <div className="text-brand-brown font-semibold text-lg">Storm Inspections</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">100%</div>
                <div className="text-brand-brown font-semibold text-lg">Insurance Help</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Amarillo's Storm Damage Repair Experts
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Amarillo sits on the edge of "Tornado Alley" with historically aggressive storm patterns that have produced <strong>61 documented tornadoes</strong> since tracking began in the 1950s, including six devastating EF-4 tornadoes within 50 miles of the city. Our region averages <strong>3,053 hail events and 874 damaging thunderstorm wind events</strong> according to NOAA storm data, making professional storm damage expertise essential for Amarillo property owners.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Potter County Storm Vulnerability:</strong> Amarillo's wide-open terrain and 3,605-foot elevation create unique storm intensification patterns. Supercell thunderstorms build rapidly over the Llano Estacado, producing baseball-sized hail, straight-line winds exceeding 80 mph, and torrential rainfall that can dump 3-5 inches in hours. The infamous March 2024 Texas Panhandle storm spawned four tornadoes in two counties, damaging hospitals and infrastructure throughout our region.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Wind Convergence Zone:</strong> Amarillo experiences unique meteorological conditions where dry lines meet moist gulf air, creating explosive storm development. These storms don't just damage roofs—they compromise entire roofing systems within minutes through simultaneous hail impact, wind uplift, and debris penetration. The strongest recorded tornado in our area traveled 103 miles with an 880-yard width (nearly nine football fields), causing $2.5 million in property damage.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We've responded to every major Amarillo storm since 2014, serving properties from Palo Duro Canyon estates to Downtown Amarillo commercial districts, from West Texas A&M University neighborhoods to Historic Route 66 properties, and throughout the rapidly growing Southwest Amarillo corridor. Our 24/7 emergency team provides 2-4 hour response times with same-day tarping and temporary repairs documented for insurance claims. We handle the complete process—emergency mitigation, detailed damage assessment, insurance negotiations, and final restoration with upgraded Class 4 impact-resistant materials engineered for Texas Panhandle storms.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Amarillo Storm Patterns & Peak Seasons
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Peak Storm Season</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong>March through June:</strong> Amarillo's most dangerous storm period when temperature differentials create explosive supercell development. Peak activity occurs between 3-8 PM when atmospheric instability maximizes.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Secondary Season:</strong> September-October brings strong cold fronts with straight-line winds frequently exceeding 70 mph, creating widespread roof damage across Potter County.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-4">Unique Weather Factors</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong>Elevation Effects:</strong> At 3,605 feet, Amarillo sits in a unique convergence zone where storms intensify rapidly as they move off the Llano Estacado plateau.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Dry Line Dynamics:</strong> The collision of dry desert air and moist Gulf air creates explosive storm development with minimal warning—often less than 30 minutes from formation to impact.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Service Areas Throughout Amarillo
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Central Amarillo</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Downtown Historic District</li>
                  <li>• Route 66 Corridor</li>
                  <li>• North Heights</li>
                  <li>• Eastridge</li>
                  <li>• Paramount Terrace</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Southwest Amarillo</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Wolflin Square</li>
                  <li>• Hillside Terrace</li>
                  <li>• Southwest Park</li>
                  <li>• Sleepy Hollow</li>
                  <li>• Westover Park</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Amarillo Metro</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• West Texas A&M Campus</li>
                  <li>• Palo Duro Canyon Area</li>
                  <li>• Canyon (Randall County)</li>
                  <li>• Tascosa</li>
                  <li>• Bishop Hills</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Types of Storm Damage We Repair
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Hail Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Amarillo's 8-12 annual hailstorms produce golf ball to baseball-sized hail. Impacts crack shingles, knock off protective granules, dent flashing and vents, and compromise waterproofing. Even small hail accelerates aging and creates leak vulnerability.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Class 4 impact-resistant replacement materials reduce future hail damage by 90%.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Wind Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Texas Panhandle wind events with 60-80 mph gusts lift shingles, tear off entire sections, and compromise adhesive seals. Once wind penetrates beneath shingles, uplift forces cause cascading failures. High winds also drive rain under damaged areas.
                </p>
                <p className="text-sm text-gray-600 italic">
                  We install shingles rated 130+ mph wind resistance to withstand future Amarillo storms.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Water Infiltration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Amarillo's occasional torrential rain events (2-4 inches in hours) overwhelm damaged roofing systems. Water infiltration leads to saturated insulation, ceiling stains, mold growth, and structural damage. Emergency tarping prevents secondary damage during claim processing.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Our 24/7 emergency team responds within 2-4 hours to prevent interior damage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Flying Debris Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Severe storms launch tree branches, lawn furniture, and debris at high velocity. Impact damage punctures shingles, cracks decking, and creates immediate leak points. Even small punctures allow water infiltration that causes extensive interior damage if not addressed immediately.
                </p>
                <p className="text-sm text-gray-600 italic">
                  We document all debris impact for comprehensive insurance claims including hidden damage.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl shadow-lg">
            <div className="flex gap-6 items-center">
              <div className="text-6xl">🚨</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-800 mb-3">Storm Just Hit? Call Now!</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Active leaks or severe storm damage require immediate attention. Every hour of delay increases interior damage and total repair costs. We provide <strong>24/7 emergency response</strong> throughout Amarillo—same-day tarping, temporary repairs, and damage mitigation.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a href="tel:8066226041" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300 text-lg">
                    Emergency: (806) 622-6041
                  </a>
                  <a href="/contact/" className="bg-white text-red-700 border-2 border-red-600 px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300 text-lg">
                    Schedule Inspection
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to storm damage emergencies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We maintain 24/7 emergency teams throughout the Amarillo area with 2-4 hour response times for critical situations. During major storm events affecting the entire Texas Panhandle, we mobilize additional crews to handle high call volumes. Emergency tarping and temporary repairs are typically completed same-day or next-day depending on severity and weather conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover my storm damage repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes emergency mitigation costs (tarping, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs. Our 95%+ approval rate demonstrates our insurance expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I tarp my roof myself or wait for professionals?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Never climb on a storm-damaged roof—it's extremely dangerous with unstable footing, electrical hazards, and severe weather conditions. Improper tarping can cause additional damage and complicate insurance claims. Call our 24/7 emergency line immediately—we'll dispatch crews for professional emergency tarping that's properly documented for insurance. Our service prevents interior damage while keeping you safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does storm damage roof replacement take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Emergency mitigation (tarping/temporary repairs) happens same-day or next-day. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting all of Amarillo, timelines may extend due to high demand—early claims get priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  (1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for emergency inspection and mitigation—we handle tarping and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from emergency response through final restoration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Amarillo storm damage different from other Texas cities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo's high elevation (3,605 feet) and position on the Llano Estacado create unique storm intensification patterns. Our dry line storms develop explosively with minimal warning, often producing larger hail and higher winds than Dallas or Houston storms. The wide-open terrain allows storms to maintain strength longer, while temperature differentials between elevations create severe wind shear. This combination produces more structural roof damage requiring complete system replacement rather than simple repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle storm claims with Texas insurance companies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We're experts in Texas insurance law and work directly with major carriers including State Farm, Allstate, USAA, and Farmers. Our certified adjusters document all damage using Haag Engineering protocols, ensuring comprehensive coverage for visible and hidden damage. We handle supplement negotiations for concealed damage discovered during tear-off, coordinate Code Upgrade coverage for older homes, and manage ACV/RCV timing to maximize your settlement. Our 95%+ approval rate demonstrates proven success with Texas Panhandle claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why should I choose Class 4 impact-resistant shingles in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  With Amarillo averaging 3,053+ hail events historically, Class 4 shingles provide crucial protection against future damage. These UL 2218-rated materials resist impacts up to 2-inch steel balls dropped from 20 feet, significantly reducing damage from golf ball and tennis ball-sized hail common in Potter County. Many insurers offer 10-20% premium discounts for Class 4 installations, and the enhanced wind ratings (130+ mph) protect against our frequent straight-line wind events. The long-term cost savings and peace of mind are substantial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Storm Damage Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500 text-center">
                <div className="text-3xl mb-3">🚨</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Emergency Response</h3>
                <p className="text-sm text-gray-700">24/7 dispatch, 2-4 hour arrival, immediate tarping and temporary repairs to prevent interior damage.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500 text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Damage Assessment</h3>
                <p className="text-sm text-gray-700">Comprehensive inspection using Haag Engineering protocols, drone technology, and thermal imaging for hidden damage.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500 text-center">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Insurance Coordination</h3>
                <p className="text-sm text-gray-700">Direct adjuster communication, supplement negotiations, and complete claim documentation ensuring maximum coverage.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl border-t-4 border-brand-gold text-center">
                <div className="text-3xl mb-3">🔨</div>
                <h3 className="text-lg font-bold text-brand-brown mb-2">Complete Restoration</h3>
                <p className="text-sm text-gray-700">Full roof replacement with Class 4 materials, enhanced ventilation, and lifetime warranties on workmanship.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Recent Amarillo Storm Events
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">March 2024 Texas Panhandle Outbreak</h3>
                <p className="text-gray-700 mb-2">Four tornadoes impacted two counties with extensive structural damage to hospitals, commercial buildings, and hundreds of homes across the region.</p>
                <p className="text-sm text-gray-600 italic">Response: 147 emergency inspections completed within 48 hours</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">May 2023 Supercell Complex</h3>
                <p className="text-gray-700 mb-2">Baseball-sized hail and 80+ mph winds caused widespread damage from Canyon to downtown Amarillo. Some areas received 4+ inches of rain in two hours.</p>
                <p className="text-sm text-gray-600 italic">Response: 89 roofs replaced, $2.3M in insurance settlements processed</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-brand-brown mb-2">April 2022 Wind Event</h3>
                <p className="text-gray-700 mb-2">Straight-line winds exceeded 75 mph across Potter County, causing extensive shingle blow-off and structural damage to commercial properties.</p>
                <p className="text-sm text-gray-600 italic">Response: 156 emergency tarping jobs, 45 complete roof replacements</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Storm Damage? We're Here 24/7</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Emergency response. Free storm inspections. Complete insurance assistance. Serving Amarillo and the Texas Panhandle around the clock.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
              Emergency: (806) 622-6041
            </a>
            <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
              Schedule Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
