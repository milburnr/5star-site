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
  title: 'Wind Damage Repair Pampa TXService | High Plains Winds',
  description: 'wind damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041',
};

export default function WindDamageRepairPampaPage() {
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
                      "name": "Pampa",
                      "url": "/wind-damage-repair-pampa/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/wind-damage-repair-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Wind Damage Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.5364, "longitude": -100.9599 },
        "url": "https://5starroofingpros.com/wind-damage-repair-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert wind damage repair services in Pampa, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert wind damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How severe are High Plains winds in Pampa's agricultural region?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pampa experiences High Plains winds regularly exceeding 60 mph, with gusts often reaching 80+ mph during severe weather. Properties near Recreation Park, Harvester Stadium, and throughout Gray County's open ranching areas face constant wind exposure with minimal windbreaks. This unobstructed agricultural landscape near downtown Pampa, Pampa Regional Medical Center, and Coronado Healthcare Center creates extreme uplift pressures that damage roofs not properly engineered for High Plains conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What wind damage signs should Pampa property owners recognize?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common wind damage in Pampa includes lifted or missing shingles, peeled back metal panels, damaged ridge caps, torn flashing, and exposed underlayment. Properties near Hobart Street Park and White Deer Land Museum should check for creased shingles, loose granules, and nail pops after high wind events. Even minor wind damage can worsen rapidly in Gray County's repeated wind events."
                }
              },
              {
                "@type": "Question",
                "name": "Does insurance cover wind damage in Pampa's high-wind zone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Most property insurance policies cover wind damage when winds exceed certain thresholds, typically 50-60 mph. Given Pampa's documented High Plains winds 60+ mph, wind damage claims are common and expected. We document wind speeds, photograph all damage, and work directly with adjusters to secure full coverage for property owners throughout Gray County."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing materials resist Pampa's constant High Plains winds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For Pampa's extreme wind environment, we recommend Class 4 impact-resistant shingles with enhanced wind ratings (130+ mph), standing seam metal roofing with concealed fasteners, or TPO with reinforced attachment for commercial properties. Buildings near Woody Guthrie Folk Music Center and throughout downtown Pampa require superior fastening systems with 6-8 nails per shingle versus standard 4-nail patterns."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly should wind damage be repaired in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Schedule wind damage repairs immediately. Even small areas of wind damage allow water intrusion during Pampa's frequent rainstorms. Properties throughout Gray County's ranching community face repeated high-wind events, so unrepaired damage worsens quickly. We provide 24/7 emergency response with temporary repairs, then schedule permanent restoration within days to prevent secondary damage."
                }
              }
            ]
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
                Wind Damage Repair in <span className="text-brand-gold-light">Pampa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Service | High Plains Wind Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert wind damage roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  Emergency: (806) 622-6041
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
                  24/7
                </div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
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
              Pampa's Wind Damage Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in Gray County's open agricultural landscape creates extreme wind exposure. High Plains winds regularly exceed 60 mph with gusts to 80+ mph, damaging roofs from Recreation Park and Pampa Regional Medical Center to ranching properties throughout the county. Properties near downtown Pampa, Harvester Stadium, and Coronado Healthcare Center face constant wind pressure with minimal windbreaks—creating uplift damage, missing shingles, and structural stress requiring specialized High Plains wind damage repair.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've repaired wind damage on 220+ Pampa properties using materials engineered for extreme High Plains conditions. From homes near Woody Guthrie Folk Music Center to buildings near Hobart Street Park and White Deer Land Museum, we install wind-rated roofing systems (130+ mph), enhanced fastening patterns, and impact-resistant materials. We document wind speeds, photograph damage, work directly with insurance adjusters, and complete repairs efficiently. Most property owners pay only their deductible.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Wind Damage Challenges in Pampa's Oil and Ranch Economy
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Pampa's economy combines active oil and gas production with extensive cattle ranching operations across Gray County's 928 square miles of High Plains territory. This dual economy creates unique wind damage challenges as oil field operations and ranch facilities require specialized roofing systems that withstand both extreme weather and industry-specific environmental conditions.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Oil and gas facilities throughout Gray County experience accelerated roof deterioration due to H2S exposure, hydrocarbon vapors, and continuous vibrations from pump jack operations. Wind damage to these facilities can create safety hazards and environmental concerns requiring immediate expert attention. Our crews maintain specialized safety certifications for working around active oil operations while addressing wind damage emergencies.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ranch operations covering thousands of acres rely on large agricultural buildings that face extreme wind exposure with minimal structural protection. Cattle barns, equipment sheds, and hay storage facilities suffer frequent wind damage that can impact livestock welfare and cause significant economic losses during critical seasons like calving or harvest periods.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">High Plains Wind Patterns and Agricultural Land Effects</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Gray County's vast agricultural landscape provides minimal wind obstruction, allowing storm systems to build tremendous momentum before reaching Pampa. The Canadian River valley to the north creates unique topographical effects that can channel and intensify winds approaching from the northwest, the direction of many severe weather systems affecting the Texas Panhandle.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Spring storm systems moving across Gray County's open rangeland frequently produce sustained winds exceeding 60 mph with gusts over 85 mph. These winds create differential pressure across building surfaces that can lift entire roof sections on improperly fastened systems. Ranch buildings and oil field facilities often experience uplift failures at connection points not designed for extreme wind loading.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The flat terrain surrounding Pampa eliminates natural windbreaks that protect properties in more forested or hilly regions. Properties near the city limits experience full exposure to High Plains winds, while even downtown buildings near the T&P Building and Top O' Texas Hotel face significant wind pressure due to limited urban wind reduction effects.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Specialized Wind Damage Response for Oil and Gas Facilities
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Wind damage to oil and gas facilities in Gray County requires immediate specialized response due to safety and environmental concerns. Damaged roofing on compressor stations, storage tank facilities, and processing units can expose sensitive equipment to weather while creating potential safety hazards from compromised structural integrity around high-pressure operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our emergency response teams maintain OSHA safety certifications and specialized equipment for working around active oil and gas operations. Emergency tarping and temporary repairs use fire-resistant materials and spark-free installation techniques required in potentially hazardous environments. All repairs coordinate with facility safety personnel and follow established industry protocols.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Environmental compliance requires immediate containment of any roofing materials or debris that could contaminate soil or water sources. Wind damage cleanup around oil facilities involves specialized waste handling procedures and documentation to ensure regulatory compliance with Texas Railroad Commission and EPA requirements for petroleum industry operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Ranch and Agricultural Building Wind Damage Solutions</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Gray County's extensive ranching operations depend on large agricultural buildings that face unique wind damage challenges due to their size, construction methods, and critical operational requirements. Cattle barns, feed storage facilities, and equipment sheds typically use metal roofing systems with wide spans that create significant wind uplift potential during High Plains storm events.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency wind damage repairs to agricultural facilities require coordination with livestock management and seasonal operations. Cattle barns need immediate weather protection to maintain animal welfare, while feed storage facilities require rapid repair to prevent feed contamination and spoilage. Our agricultural emergency response prioritizes livestock protection and feed preservation.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hay storage and grain facilities present unique wind damage challenges as compromised roofing can destroy entire harvests worth hundreds of thousands of dollars. Emergency tarping for agricultural storage requires specialized anchoring techniques that prevent tarp failure in continued high winds while maintaining access for loading and unloading operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Wind Damage Response in Pampa's Business District
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Pampa's commercial district along Highway 60 and around the historic downtown area includes businesses serving both the oil industry and ranching community. Hotels, restaurants, and retail establishments experience significant wind damage during severe weather events, often requiring emergency repairs to maintain operations for traveling oil field workers and local residents.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Top O' Texas Hotel and other hospitality businesses cannot afford extended closures due to roof damage, as they serve essential lodging needs for oil industry workers and traveling ranchers. Emergency repairs to commercial lodging facilities receive priority response to maintain room availability and prevent business interruption during peak demand periods.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pampa Regional Medical Center and other healthcare facilities require immediate wind damage response to maintain critical care services for a widespread rural population. Medical facilities serving Gray County's oil workers and ranch families cannot tolerate weather exposure of sensitive equipment or interruption of patient care services during emergency situations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insurance Considerations for Rural and Industrial Properties</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Wind damage insurance claims in Gray County often involve complex coverage scenarios due to the area's mix of residential, agricultural, and industrial properties. Ranch operations may carry specialized agricultural insurance policies with different wind damage coverage than standard homeowner's policies, while oil facilities often have commercial coverage with specific industry requirements.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural insurance policies frequently include coverage limitations for wind damage to outbuildings and equipment storage facilities. Our documentation procedures accommodate these varied coverage requirements, providing detailed damage assessments that support maximum insurance recovery for ranch operations experiencing wind damage to critical agricultural infrastructure.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Oil and gas facility insurance often requires specialized documentation and compliance with industry safety standards during repair activities. We maintain relationships with insurance adjusters familiar with petroleum industry requirements and coordinate with facility risk management personnel to ensure repairs meet both insurance requirements and operational safety standards.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Enhanced Wind-Resistant Solutions for High Plains Conditions
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Gray County's extreme wind environment demands roofing solutions that exceed standard Texas building code requirements. Sustained winds of 50-60 mph with gusts over 80 mph create uplift forces that quickly overwhelm standard residential and light commercial roofing systems not specifically designed for High Plains conditions.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Metal roofing systems for agricultural and oil industry applications require enhanced fastening patterns with structural-grade fasteners at reduced spacing intervals. Standing seam metal roofing with concealed fasteners provides superior wind resistance compared to exposed-fastener systems common in agricultural construction. Proper clip spacing and panel attachment prevent progressive failure during extreme wind events.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Residential properties in Pampa benefit from Class 4 impact-resistant shingles with enhanced wind ratings of 130 mph or greater. These systems require specialized installation techniques including six-nail patterns, high-wind starter strips, and enhanced underlayment systems designed for sustained wind exposure. Edge details receive particular attention as wind damage typically begins at roof perimeters.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Preventive Measures and Ongoing Maintenance</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Proactive wind damage prevention proves essential for properties in Gray County's high-wind environment. Annual inspections identify potential weakness points before they become failure sites during severe weather events. Fastener integrity, sealant condition, and flashing performance require regular monitoring to maintain wind resistance over time.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural facilities benefit from seasonal preparation protocols that secure loose materials and inspect large-span roofing systems before peak storm seasons. Spring and fall maintenance programs address weather damage from previous seasons while preparing facilities for upcoming severe weather periods when High Plains storm systems peak in intensity.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Oil facility maintenance programs coordinate with operational schedules to minimize production interruption while maintaining critical weather protection. Predictive maintenance using infrared thermography and structural monitoring helps identify potential wind damage vulnerabilities before they compromise facility operations or create safety hazards.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Community Emergency Response and Regional Coordination
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Wind damage emergencies in Gray County require coordination with multiple agencies including county emergency management, volunteer fire departments, and mutual aid partners from surrounding counties. The area's rural nature and dispersed population create challenges for rapid emergency response that require advance planning and resource positioning.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Pampa's position as Gray County seat provides emergency management resources and equipment that support countywide storm response. However, the vast distances involved in serving ranch properties and oil facilities throughout the county demand strategic equipment positioning and coordination with local first responders familiar with rural access challenges.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Regional mutual aid agreements with neighboring counties provide additional emergency response resources during major storm events affecting multiple communities. These partnerships prove essential when wind damage exceeds local response capacity and outside contractors must be coordinated through emergency management channels to provide adequate storm damage response.
            </p>
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
                  How severe are High Plains winds in Pampa's agricultural region?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Pampa experiences High Plains winds regularly exceeding 60 mph, with gusts often reaching 80+ mph during severe weather. Properties near Recreation Park, Harvester Stadium, and throughout Gray County's open ranching areas face constant wind exposure with minimal windbreaks. This unobstructed agricultural landscape near downtown Pampa, Pampa Regional Medical Center, and Coronado Healthcare Center creates extreme uplift pressures that damage roofs not properly engineered for High Plains conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What wind damage signs should Pampa property owners recognize?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Common wind damage in Pampa includes lifted or missing shingles, peeled back metal panels, damaged ridge caps, torn flashing, and exposed underlayment. Properties near Hobart Street Park and White Deer Land Museum should check for creased shingles, loose granules, and nail pops after high wind events. Even minor wind damage can worsen rapidly in Gray County's repeated wind events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does insurance cover wind damage in Pampa's high-wind zone?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes! Most property insurance policies cover wind damage when winds exceed certain thresholds, typically 50-60 mph. Given Pampa's documented High Plains winds 60+ mph, wind damage claims are common and expected. We document wind speeds, photograph all damage, and work directly with adjusters to secure full coverage for property owners throughout Gray County.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing materials resist Pampa's constant High Plains winds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For Pampa's extreme wind environment, we recommend Class 4 impact-resistant shingles with enhanced wind ratings (130+ mph), standing seam metal roofing with concealed fasteners, or TPO with reinforced attachment for commercial properties. Buildings near Woody Guthrie Folk Music Center and throughout downtown Pampa require superior fastening systems with 6-8 nails per shingle versus standard 4-nail patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly should wind damage be repaired in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Schedule wind damage repairs immediately. Even small areas of wind damage allow water intrusion during Pampa's frequent rainstorms. Properties throughout Gray County's ranching community face repeated high-wind events, so unrepaired damage worsens quickly. We provide 24/7 emergency response with temporary repairs, then schedule permanent restoration within days to prevent secondary damage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Serving Pampa, Texas
            </h2>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104282.72655892584!2d-101.02071843828125!3d35.53617399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148b3c6f516d3%3A0x4f1e89dc3c2b7e7d!2sPampa%2C%20TX!5e0!3m2!1sen!2sus!4v1644444444444!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert wind damage repair with comprehensive warranties and insurance claim assistance.
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
