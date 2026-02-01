import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Midland TX | 24/7 Permian Basin Storm Response',
  description: '24/7 emergency roof repair in Midland TX. 3.5-hour response from Amarillo HQ. Record 127°F temperature swings, severe hail, oil field wind damage. Call (806) 622-6041',
};

export default function EmergencyRoofRepairMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Midland", url: "/emergency-roof-repair-midland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/emergency-roof-repair-midland/#localbusiness",
            "name": "5 Star Commercial Roofing - Midland Emergency Roof Repair",
            "image": "https://5starroofingpros.com/images/emergency-repair-4.jpg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
            "priceRange": "$$",
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
              "latitude": 32.0234,
              "longitude": -102.1034
            },
            "url": "https://5starroofingpros.com/emergency-roof-repair-midland/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
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
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "description": "24/7 emergency roof repair in Midland TX. Permian Basin oil field experts. 127°F temperature extremes (-11°F to 116°F), severe dust storms, hail damage. 3.5-hour response from Amarillo. Emergency tarping, leak mitigation. Call (806) 622-6041",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"How quickly can you respond to emergency roof repairs in Midland?","acceptedAnswer":{"@type":"Answer","text":"We respond within 3.5 hours for emergency roof repairs in Midland. Our Amarillo headquarters is 239 miles away via US-87 South to I-20 West. Response time varies from 3-4 hours depending on traffic conditions and weather. For critical emergencies with active structural damage, we may dispatch crews directly from Lubbock (124 miles) for faster response."}},{"@type":"Question","name":"What makes Midland's oil field environment challenging for roofs?","acceptedAnswer":{"@type":"Answer","text":"Midland's Permian Basin location creates unique roofing challenges: 127°F temperature extremes (-11°F to 116°F), constant oil field dust accumulation, industrial chemical exposure, and severe dust storms. High oil field truck traffic creates vibrations that stress roof structures. Sandstorms abrade shingles and clog drainage systems, while chemical vapors accelerate material deterioration."}},{"@type":"Question","name":"Do you provide emergency tarping for Permian Basin storms?","acceptedAnswer":{"@type":"Answer","text":"Yes, 24/7 emergency tarping throughout Midland County and the Permian Basin. We use heavy-duty 8-mil polyethylene tarps designed for oil field environments and high winds. Our crews understand the unique challenges of working around oil and gas operations, ensuring safe, compliant emergency protection while coordinating with site safety requirements."}},{"@type":"Question","name":"Can you work around active oil field operations in Midland?","acceptedAnswer":{"@type":"Answer","text":"Yes, our crews are experienced working in and around Permian Basin oil field operations. We coordinate with site safety personnel, follow all industry safety protocols including H2S awareness, and carry required safety equipment. We understand production schedules and can work around drilling operations while maintaining emergency response capabilities."}},{"@type":"Question","name":"How do dust storms affect emergency roof repairs in Midland?","acceptedAnswer":{"@type":"Answer","text":"Midland's frequent dust storms create visibility and safety hazards during emergency repairs. We monitor weather conditions and may delay non-critical work during severe dust events. Emergency tarping can usually proceed with proper safety equipment. Dust infiltration during repairs is minimized with protective coverings, and we include post-storm cleanup in our emergency services."}},{"@type":"Question","name":"What types of roof damage are common in Midland's climate?","acceptedAnswer":{"@type":"Answer","text":"Midland's extreme climate causes multiple roof damage types: thermal shock from 127°F temperature swings, granule loss from sandblasting dust storms, premature aging from UV exposure and chemicals, hail damage from supercell storms, and structural stress from constant temperature cycling. Oil field environments accelerate deterioration with chemical exposure and accumulated contamination."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/emergency-repair-4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Emergency Roof Repair in <span className="text-brand-gold-light">Midland</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Permian Basin's Premier 24/7 Emergency Roofing Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                24/7 emergency roof repair serving Midland and the entire Permian Basin region. When severe weather, dust storms, or extreme temperature swings damage your roof, we respond within 3.5 hours from Amarillo. Expert in oil field environments with full safety compliance and emergency storm damage restoration.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Emergency: (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Free Emergency Assessment
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
                  3.5 hr
                </div>
                <div className="text-brand-brown font-semibold text-lg">Response Time from Amarillo</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">239</div>
                <div className="text-brand-brown font-semibold text-lg">Miles from HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">127°F</div>
                <div className="text-brand-brown font-semibold text-lg">Temperature Range</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">🛢️⚡</div>
                <div className="text-brand-brown font-semibold text-lg">Oil Field Certified</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Midland's Permian Basin Environment Destroys Roofs
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Midland sits at the heart of the Permian Basin, creating one of America's most hostile roofing environments. The combination of extreme temperature swings, industrial chemical exposure, constant dust, and oil field operations accelerates roof deterioration and creates unique emergency situations:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Extreme Temperature Stress</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>127°F temperature range</strong> - from record low -11°F (Feb 2, 1985) to record high 116°F (June 27, 1994).
                </p>
                <p className="text-gray-600 text-sm">
                  These extreme swings cause severe thermal shock, rapid expansion/contraction cycles, and accelerated aging of all roofing materials. Emergency failures often occur during temperature extremes.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Dust Storm Sandblasting</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Frequent dust storms</strong> with winds exceeding 40 MPH carry abrasive particles that sandblast shingles and clog drainage.
                </p>
                <p className="text-gray-600 text-sm">
                  Constant dust accumulation from oil field operations and natural events strips protective granules, clogs gutters, and creates drainage failures leading to emergency leaks.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-md border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Chemical & Industrial Exposure</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Oil field chemical exposure</strong> from H2S, drilling fluids, and hydrocarbon vapors accelerates material breakdown.
                </p>
                <p className="text-gray-600 text-sm">
                  Industrial operations create chemical contamination that deteriorates sealants, flashing, and shingles faster than normal aging. Requires specialized repair materials.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Permian Basin Weather Challenges</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Spring/Summer Hazards (March-September)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Supercell thunderstorms</strong> with large hail (common April-June)</li>
                    <li>• <strong>Extreme heat events</strong> - 100°F+ for weeks</li>
                    <li>• <strong>Flash flooding</strong> from brief but intense storms</li>
                    <li>• <strong>High UV exposure</strong> at 2,779 ft elevation</li>
                    <li>• <strong>Dust devils and sandstorms</strong> with 50+ MPH winds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Fall/Winter Conditions (October-February)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Blue northers</strong> - rapid 50°F+ temperature drops</li>
                    <li>• <strong>Ice storms</strong> coating roofs with destructive loads</li>
                    <li>• <strong>Freeze-thaw cycles</strong> causing shingle brittleness</li>
                    <li>• <strong>High winds</strong> during frontal passages</li>
                    <li>• <strong>Dry conditions</strong> increasing fire risk from sparks</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Midland Emergency Response: Oil Field Safety Compliant
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Emergency Dispatch (0-3.5 Hours)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">1.</span>
                    <span><strong>Emergency assessment</strong> - Evaluate severity, safety hazards, and oil field proximity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">2.</span>
                    <span><strong>Route planning</strong> - 239 miles via US-87 S to I-20 W (3.5 hours normal conditions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">3.</span>
                    <span><strong>Safety coordination</strong> - Check for H2S areas, active drilling, production schedules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">4.</span>
                    <span><strong>Equipment preparation</strong> - Load oil field safety gear, chemical-resistant materials</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">On-Site Emergency Work</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">1.</span>
                    <span><strong>Safety compliance</strong> - Follow all lease safety requirements, H2S protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">2.</span>
                    <span><strong>Emergency tarping</strong> - Install chemical-resistant, high-wind-rated protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">3.</span>
                    <span><strong>Contamination control</strong> - Contain/clean any chemical or oil exposure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">4.</span>
                    <span><strong>Documentation</strong> - Photo evidence for insurance, environmental compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Oil Field Emergency Roof Situations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-orange-700 mb-3">Immediate Emergency Response Required</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Chemical spill damage to roof materials</li>
                    <li>• Fire damage from flare-ups or equipment failures</li>
                    <li>• Equipment impact damage (crane, truck, debris)</li>
                    <li>• H2S exposure areas requiring immediate sealing</li>
                    <li>• Storm damage in active production areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-3">Planned Emergency Coordination</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Dust storm damage during active drilling</li>
                    <li>• Thermal shock damage near gas processing</li>
                    <li>• Vibration damage from heavy truck traffic</li>
                    <li>• Sand accumulation causing drainage failures</li>
                    <li>• Chemical vapor damage to roof sealants</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Comprehensive Emergency Roofing Services - Midland County
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Industrial Storm Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive storm damage restoration for Permian Basin industrial facilities, residential areas, and commercial properties. Specialized in chemical-contaminated environments.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Hail damage on oil field buildings</li>
                  <li>• Wind damage from dust storm events</li>
                  <li>• Equipment impact and debris damage</li>
                  <li>• Lightning strike and electrical damage</li>
                  <li>• Environmental contamination cleanup</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
                <h3 className="text-xl font-bold text-green-800 mb-3">Chemical-Resistant Emergency Repairs</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Emergency repairs using materials specifically designed for oil field chemical exposure, H2S environments, and industrial contamination scenarios.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Chemical-resistant sealants and flashing</li>
                  <li>• H2S-compatible repair materials</li>
                  <li>• Fire-retardant emergency patching</li>
                  <li>• Contamination containment systems</li>
                  <li>• Environmental compliance documentation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-800 mb-3">24/7 Industrial Emergency Tarping</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Heavy-duty emergency tarping designed for Permian Basin conditions including high winds, chemical exposure, and coordination with active oil field operations.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 8-mil chemical-resistant polyethylene</li>
                  <li>• High-wind anchoring systems (60+ MPH)</li>
                  <li>• Oil field safety protocol compliance</li>
                  <li>• Coordination with production schedules</li>
                  <li>• Temporary leak mitigation systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Emergency Service Coverage - Midland County & Permian Basin</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Midland</h4>
                  <p className="text-sm text-gray-600">City center & industrial areas</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Greenwood</h4>
                  <p className="text-sm text-gray-600">Northeast oil field region</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Spraberry</h4>
                  <p className="text-sm text-gray-600">Major oil production area</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Warfield</h4>
                  <p className="text-sm text-gray-600">South Midland County</p>
                </div>
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                <p>Full emergency coverage throughout Midland County oil field operations</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Midland Emergency Roof Repair - Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to emergency roof repairs in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We respond within 3.5 hours for emergency roof repairs in Midland. Our Amarillo headquarters is 239 miles away via US-87 South to I-20 West. Response time varies from 3-4 hours depending on traffic conditions and weather. For critical emergencies with active structural damage, we may dispatch crews directly from Lubbock (124 miles) for faster response.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Midland's oil field environment challenging for roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland's Permian Basin location creates unique roofing challenges: 127°F temperature extremes (-11°F to 116°F), constant oil field dust accumulation, industrial chemical exposure, and severe dust storms. High oil field truck traffic creates vibrations that stress roof structures. Sandstorms abrade shingles and clog drainage systems, while chemical vapors accelerate material deterioration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide emergency tarping for Permian Basin storms?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, 24/7 emergency tarping throughout Midland County and the Permian Basin. We use heavy-duty 8-mil polyethylene tarps designed for oil field environments and high winds. Our crews understand the unique challenges of working around oil and gas operations, ensuring safe, compliant emergency protection while coordinating with site safety requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work around active oil field operations in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our crews are experienced working in and around Permian Basin oil field operations. We coordinate with site safety personnel, follow all industry safety protocols including H2S awareness, and carry required safety equipment. We understand production schedules and can work around drilling operations while maintaining emergency response capabilities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do dust storms affect emergency roof repairs in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland's frequent dust storms create visibility and safety hazards during emergency repairs. We monitor weather conditions and may delay non-critical work during severe dust events. Emergency tarping can usually proceed with proper safety equipment. Dust infiltration during repairs is minimized with protective coverings, and we include post-storm cleanup in our emergency services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What types of roof damage are common in Midland's climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland's extreme climate causes multiple roof damage types: thermal shock from 127°F temperature swings, granule loss from sandblasting dust storms, premature aging from UV exposure and chemicals, hail damage from supercell storms, and structural stress from constant temperature cycling. Oil field environments accelerate deterioration with chemical exposure and accumulated contamination.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you handle insurance claims for oil field roof damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we handle both commercial and residential insurance claims in the Permian Basin. We understand the unique aspects of oil field-related damage and work with industrial insurance carriers. Our documentation includes environmental factors, chemical exposure assessment, and compliance with industry safety standards. We ensure all emergency services and contamination cleanup are properly included in claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What safety equipment do your crews carry for Midland emergencies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our Midland emergency crews carry full oil field safety equipment: H2S monitors and escape apparatus, flame-resistant clothing, safety boots, hard hats, and emergency communication devices. We maintain current safety training for Permian Basin operations and coordinate with site safety personnel before beginning any emergency work in industrial areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Emergency Response Coordination - Oil Field Operations
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-4">Working with Oil Field Operations</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Midland emergency response team coordinates seamlessly with Permian Basin oil and gas operations. We understand production schedules, safety requirements, and environmental compliance needs for emergency roofing work.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Advance coordination with lease operators</li>
                    <li>• Compliance with site-specific safety protocols</li>
                    <li>• Environmental contamination assessment</li>
                    <li>• Integration with production schedules</li>
                    <li>• Emergency response prioritization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-4">Environmental Considerations</h3>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-bold text-yellow-700 mb-3">Special Permian Basin Factors:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• H2S gas monitoring and safety protocols</li>
                      <li>• Chemical-resistant repair materials</li>
                      <li>• Dust control during active drilling</li>
                      <li>• Fire safety around gas processing</li>
                      <li>• Contamination containment procedures</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg mt-4">
                    <h4 className="font-bold text-green-700 mb-3">Emergency Prioritization:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Safety hazards requiring immediate attention</li>
                      <li>• Production facility protection</li>
                      <li>• Environmental compliance requirements</li>
                      <li>• Worker safety and access routes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Emergency Roof Damage in Midland?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            24/7 emergency response throughout Midland County and the Permian Basin. Oil field certified crews, environmental compliance, and comprehensive storm damage restoration available now.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Emergency: (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Request Emergency Service
            </a>
          </div>
        </section>
      </div>
    </>
  );
}