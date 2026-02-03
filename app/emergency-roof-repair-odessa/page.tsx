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
  title: 'Emergency Roof Repair Odessa TX | 24/7 Service',
  description: '24/7 emergency roof repair in Odessa TX. 4-hour response from Amarillo. Petrochemical plant expertise, extreme climate damage, industrial chemical resistance. Call (806) 622-6041',
};

export default function EmergencyRoofRepairOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair/" },
        { name: "Odessa", url: "/emergency-roof-repair-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/emergency-roof-repair-odessa/#localbusiness",
            "name": "5 Star Commercial Roofing - Odessa Emergency Roof Repair",
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
              "latitude": 31.8457,
              "longitude": -102.3676
            },
            "url": "https://5starroofingpros.com/emergency-roof-repair-odessa/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
              "name": "Odessa",
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
            "description": "24/7 emergency roof repair in Odessa TX. Petrochemical industry specialist. 4-hour response from Amarillo (259 miles). Industrial chemical exposure, extreme temperature swings, refinery environment expertise. Emergency tarping, leak mitigation. Call (806) 622-6041",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Roofing Services",
            "name": "Emergency Roof Repair in Odessa",
            "description": "Professional emergency roof repair services in Odessa, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Odessa",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Emergency Roof Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"How quickly can you respond to emergency roof repairs in Odessa?","acceptedAnswer":{"@type":"Answer","text":"We respond within 4 hours for emergency roof repairs in Odessa. Our Amarillo headquarters is 259 miles away via US-87 South to I-20 West. Normal response time is 3.5-4 hours depending on traffic. For critical emergencies at petrochemical facilities or with safety hazards, we coordinate with local emergency responders and may dispatch specialized crews from Midland for faster response."}},{"@type":"Question","name":"Can you handle emergency repairs around Odessa's petrochemical plants?","acceptedAnswer":{"@type":"Answer","text":"Yes, our crews are certified for petrochemical facility emergency work throughout Ector County. We understand refinery safety protocols, chemical exposure risks, and environmental compliance requirements. Our emergency response includes specialized chemical-resistant materials, safety monitoring equipment, and coordination with plant safety departments for secure emergency roofing operations."}},{"@type":"Question","name":"What emergency tarping materials do you use in Odessa's industrial environment?","acceptedAnswer":{"@type":"Answer","text":"For Odessa's petrochemical environment, we use heavy-duty 8-mil polyethylene tarps with chemical resistance and flame-retardant properties. Our tarps are secured with corrosion-resistant fastening systems designed for industrial chemical exposure. We carry specialized tarps rated for hydrocarbon environments and coordinate installation with facility safety requirements."}},{"@type":"Question","name":"How do petrochemical vapors affect roof emergency repairs?","acceptedAnswer":{"@type":"Answer","text":"Petrochemical vapors in Odessa create unique emergency repair challenges including accelerated material degradation, special ventilation requirements, and fire safety considerations. We use vapor-resistant sealants, monitor air quality during repairs, and follow all refinery safety protocols. Our crews carry gas detection equipment and maintain current certifications for petrochemical facility work."}},{"@type":"Question","name":"Do you provide emergency roof service for both residential and industrial properties in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Yes, we provide 24/7 emergency roof services for residential homes, commercial buildings, and industrial facilities throughout Odessa and Ector County. This includes petrochemical plants, refineries, oil field facilities, and residential areas affected by industrial environment exposure. We adapt our emergency response to each property type's specific safety and environmental requirements."}},{"@type":"Question","name":"What makes Odessa's climate particularly damaging to roofs?","acceptedAnswer":{"@type":"Answer","text":"Odessa's location in the Permian Basin creates extreme roofing conditions: 120°F+ temperature swings, constant petrochemical exposure, severe dust storms, and high UV radiation at 2,890 ft elevation. The combination of natural weather extremes and industrial chemical exposure accelerates roof deterioration significantly faster than typical Texas environments, creating more frequent emergency situations."}}]
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
                Emergency Roof Repair in <span className="text-brand-gold-light">Odessa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Petrochemical Industry Emergency Roofing Specialists
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                24/7 emergency roof repair serving Odessa and Ector County's petrochemical corridor. When severe weather, chemical exposure, or industrial incidents damage your roof, we respond within 4 hours from Amarillo. Certified for refinery environments with specialized chemical-resistant materials and full safety compliance.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">🚨 Emergency: (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Industrial Emergency Assessment
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
                  4 hr
                </div>
                <div className="text-brand-brown font-semibold text-lg">Maximum Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">259</div>
                <div className="text-brand-brown font-semibold text-lg">Miles from Amarillo HQ</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">🏭</div>
                <div className="text-brand-brown font-semibold text-lg">Petrochemical Certified</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">🛡️⚡</div>
                <div className="text-brand-brown font-semibold text-lg">Industrial Safety Compliant</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Odessa's Petrochemical Environment Devastates Roofs
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Odessa serves as the petrochemical capital of West Texas, creating the most corrosive roofing environment in the region. Major refineries, chemical plants, and processing facilities release industrial vapors that, combined with extreme Permian Basin weather, accelerate roof deterioration at unprecedented rates:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Petrochemical Corrosion</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Industrial chemical exposure</strong> from refineries creates highly corrosive atmospheric conditions that dissolve standard roofing materials.
                </p>
                <p className="text-gray-600 text-sm">
                  Hydrocarbon vapors, sulfur compounds, and processing chemicals in the air accelerate membrane degradation, metal corrosion, and sealant failure, requiring specialized chemical-resistant materials.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl shadow-md border-t-4 border-orange-600">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Extreme Heat Island Effect</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Industrial heat amplification</strong> creates temperatures 5-10°F higher than surrounding areas due to refinery operations.
                </p>
                <p className="text-gray-600 text-sm">
                  Heat from flares, processing units, and vast concrete/asphalt surfaces creates an urban heat island effect that combines with natural 120°F+ summer heat to stress roofing systems beyond normal limits.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-md border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Multi-Hazard Emergency Risks</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Chemical spills, fires, explosions</strong> create unique emergency situations requiring immediate specialized response and containment.
                </p>
                <p className="text-gray-600 text-sm">
                  Industrial accidents can damage roofs with chemical contamination, fire damage, pressure wave impact, or toxic exposure requiring hazmat-trained emergency crews.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Odessa's Industrial Weather Amplification Effects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Natural Weather Hazards</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Severe hailstorms</strong> - March-June peak season</li>
                    <li>• <strong>Dust storms</strong> carrying abrasive particles</li>
                    <li>• <strong>Flash flooding</strong> from brief intense storms</li>
                    <li>• <strong>High winds</strong> during frontal passages</li>
                    <li>• <strong>Extreme temperature swings</strong> causing thermal shock</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Industrial Amplification Effects</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Chemical contamination</strong> during storm events</li>
                    <li>• <strong>Increased corrosion rates</strong> from industrial humidity</li>
                    <li>• <strong>Fire/explosion risks</strong> during electrical storms</li>
                    <li>• <strong>Air quality degradation</strong> affecting work safety</li>
                    <li>• <strong>Heat stress amplification</strong> near processing units</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Odessa Emergency Response: Petrochemical Plant Certified
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Emergency Mobilization (0-4 Hours)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">1.</span>
                    <span><strong>Hazard assessment</strong> - Evaluate chemical exposure risks, air quality, and facility safety status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">2.</span>
                    <span><strong>Route coordination</strong> - 259 miles via US-87 to I-20 West through Midland (4 hours max)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">3.</span>
                    <span><strong>Safety equipment</strong> - Load chemical detection, flame-retardant gear, vapor masks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">4.</span>
                    <span><strong>Facility clearance</strong> - Coordinate with plant security and safety departments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Industrial Emergency Operations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">1.</span>
                    <span><strong>Safety protocol compliance</strong> - Follow all plant-specific safety requirements and emergency procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">2.</span>
                    <span><strong>Chemical-resistant tarping</strong> - Install flame-retardant, hydrocarbon-resistant protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">3.</span>
                    <span><strong>Contamination containment</strong> - Prevent spread of any chemical exposure or contamination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">4.</span>
                    <span><strong>Environmental documentation</strong> - Complete records for insurance and regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Petrochemical Emergency Scenarios in Odessa</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-red-700 mb-3">High-Priority Emergency Response</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Roof damage from industrial accidents/explosions</li>
                    <li>• Chemical spill damage requiring immediate containment</li>
                    <li>• Fire damage to industrial or residential buildings</li>
                    <li>• Toxic vapor exposure requiring emergency ventilation</li>
                    <li>• Storm damage at critical processing facilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-3">Coordinated Industrial Response</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Wind damage during scheduled maintenance outages</li>
                    <li>• Hail damage affecting multiple plant buildings</li>
                    <li>• Corrosion failure in chemical exposure zones</li>
                    <li>• Heat damage from processing unit malfunctions</li>
                    <li>• Vibration damage from industrial equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Specialized Emergency Roofing Services - Ector County Industrial Corridor
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Industrial Fire & Explosion Damage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Emergency response for roof damage from petrochemical fires, explosions, and thermal events. Specialized in post-incident assessment, contamination cleanup, and structural integrity restoration.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fire damage assessment and repair</li>
                  <li>• Explosion pressure wave damage restoration</li>
                  <li>• Heat damage from flare incidents</li>
                  <li>• Structural integrity evaluation</li>
                  <li>• Hazmat cleanup coordination</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Chemical-Resistant Emergency Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Advanced emergency roofing systems designed for petrochemical environments including chemical-resistant materials, vapor barriers, and specialized ventilation integration.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Chemical-resistant membrane repairs</li>
                  <li>• Vapor barrier emergency restoration</li>
                  <li>• Corrosion-resistant flashing systems</li>
                  <li>• Emergency ventilation integration</li>
                  <li>• Contamination containment barriers</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
                <h3 className="text-xl font-bold text-green-800 mb-3">Multi-Facility Coordinated Response</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Large-scale emergency response coordination for weather events affecting multiple petrochemical facilities, residential areas, and commercial properties throughout Ector County.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Multi-facility storm damage coordination</li>
                  <li>• Priority facility emergency sequencing</li>
                  <li>• Regional incident management</li>
                  <li>• Cross-facility safety protocol compliance</li>
                  <li>• Emergency resource allocation</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Emergency Coverage - Odessa Metro & Ector County Industrial Areas</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Central Odessa</h4>
                  <p className="text-sm text-gray-600">Downtown & residential districts</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Petrochemical Corridor</h4>
                  <p className="text-sm text-gray-600">Industrial plant complex</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">West Odessa</h4>
                  <p className="text-sm text-gray-600">Residential & commercial areas</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Ector County Rural</h4>
                  <p className="text-sm text-gray-600">Oil field & ranch properties</p>
                </div>
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                <p>Comprehensive emergency coverage for residential, commercial, and industrial properties</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Odessa Emergency Roof Repair - Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to emergency roof repairs in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We respond within 4 hours for emergency roof repairs in Odessa. Our Amarillo headquarters is 259 miles away via US-87 South to I-20 West. Normal response time is 3.5-4 hours depending on traffic. For critical emergencies at petrochemical facilities or with safety hazards, we coordinate with local emergency responders and may dispatch specialized crews from Midland for faster response.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you handle emergency repairs around Odessa's petrochemical plants?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our crews are certified for petrochemical facility emergency work throughout Ector County. We understand refinery safety protocols, chemical exposure risks, and environmental compliance requirements. Our emergency response includes specialized chemical-resistant materials, safety monitoring equipment, and coordination with plant safety departments for secure emergency roofing operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What emergency tarping materials do you use in Odessa's industrial environment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For Odessa's petrochemical environment, we use heavy-duty 8-mil polyethylene tarps with chemical resistance and flame-retardant properties. Our tarps are secured with corrosion-resistant fastening systems designed for industrial chemical exposure. We carry specialized tarps rated for hydrocarbon environments and coordinate installation with facility safety requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do petrochemical vapors affect roof emergency repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Petrochemical vapors in Odessa create unique emergency repair challenges including accelerated material degradation, special ventilation requirements, and fire safety considerations. We use vapor-resistant sealants, monitor air quality during repairs, and follow all refinery safety protocols. Our crews carry gas detection equipment and maintain current certifications for petrochemical facility work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide emergency roof service for both residential and industrial properties in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we provide 24/7 emergency roof services for residential homes, commercial buildings, and industrial facilities throughout Odessa and Ector County. This includes petrochemical plants, refineries, oil field facilities, and residential areas affected by industrial environment exposure. We adapt our emergency response to each property type's specific safety and environmental requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Odessa's climate particularly damaging to roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Odessa's location in the Permian Basin creates extreme roofing conditions: 120°F+ temperature swings, constant petrochemical exposure, severe dust storms, and high UV radiation at 2,890 ft elevation. The combination of natural weather extremes and industrial chemical exposure accelerates roof deterioration significantly faster than typical Texas environments, creating more frequent emergency situations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle insurance claims for petrochemical industry roof damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We handle complex industrial insurance claims including environmental factors, chemical exposure assessment, and regulatory compliance documentation. Our claims process includes detailed contamination analysis, industrial safety compliance records, and coordination with specialized industrial insurance carriers. We ensure all emergency services, cleanup costs, and environmental remediation are properly documented and claimed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What safety certifications do your crews maintain for Odessa emergency work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our Odessa emergency crews maintain current certifications including: OSHA 40-hour HAZWOPER training, H2S awareness certification, confined space entry, petrochemical facility safety orientation, and fire safety training. We carry multi-gas detection equipment, emergency escape apparatus, and maintain liability insurance specifically for industrial/petrochemical emergency work.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Industrial Emergency Coordination - Petrochemical Plant Operations
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-4">Facility Safety Integration</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Odessa emergency response integrates seamlessly with petrochemical plant safety systems, emergency response protocols, and environmental compliance requirements for secure industrial roofing operations.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Pre-entry safety briefings with plant personnel</li>
                    <li>• Coordination with facility emergency response teams</li>
                    <li>• Compliance with plant-specific safety procedures</li>
                    <li>• Environmental impact assessment and mitigation</li>
                    <li>• Real-time communication with plant control rooms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-4">Specialized Emergency Equipment</h3>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-red-700 mb-3">Petrochemical Emergency Kit:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Multi-gas detection monitors (H2S, LEL, O2, CO)</li>
                      <li>• Self-contained breathing apparatus (SCBA)</li>
                      <li>• Chemical-resistant protective equipment</li>
                      <li>• Flame-retardant tarps and repair materials</li>
                      <li>• Emergency communication equipment</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg mt-4">
                    <h4 className="font-bold text-green-700 mb-3">Emergency Response Priorities:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Life safety and personnel protection</li>
                      <li>• Environmental contamination prevention</li>
                      <li>• Critical facility protection</li>
                      <li>• Secondary damage mitigation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Petrochemical Emergency? We're Ready.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            24/7 emergency response throughout Odessa and Ector County's petrochemical corridor. Industrial certified crews, chemical-resistant materials, and full safety compliance for any roofing emergency.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Emergency: (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Industrial Emergency Service
            </a>
          </div>
        </section>
      </div>
    </>
  );
}