import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/hail-damage-repair-monahans/' },
  title: 'Hail Damage Repair Monahans TX | 5 Star Roofing',
  description: "Professional hail damage repair in Monahans TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function HailDamageRepairMonahansPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
        { name: "Monahans", url: "/hail-damage-repair-monahans/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/hail-damage-repair-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Hail Damage Repair",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/hail-damage-3.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/hail-damage-repair-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional hail damage repair in Monahans TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hail Damage Roof Repair",
            "name": "Hail Damage Repair in Monahans",
            "description": "Professional hail damage repair services in Monahans, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Monahans",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hail Damage Repair Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Repair Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Roof Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How do I know if my Monahans roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance."}},{"@type":"Question","name":"Will insurance cover hail damage in Monahans?","acceptedAnswer":{"@type":"Answer","text":"Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate."}},{"@type":"Question","name":"Should I upgrade to Class 4 shingles after hail damage?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-odessa-41-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Hail Damage Repair in <span className="text-brand-gold-light">Monahans</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional hail damage repair throughout Monahans. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Monahans's Hail Damage Repair Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional hail damage repair throughout Monahans and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Monahans with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-orange-50 to-red-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Permian Basin Storm Dynamics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ward County Weather Patterns</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Monahans occupies a unique position in the Permian Basin, where Ward County's desert-influenced climate creates distinct severe weather patterns compared to other West Texas regions. The city's elevation of 2,613 feet and proximity to oil field operations create localized atmospheric heating effects that influence storm development.</p>
                <p className="text-gray-700 mb-4 leading-relaxed">Recent storm tracking data reveals that Monahans experiences more focused, intense hail events rather than the broad storm systems common in northern Texas counties. The area has recorded 5 confirmed ground-truth hail reports from trained spotters and been under severe weather warnings 17 times in the past year, with Doppler radar detecting 96 hail-producing storm systems.</p>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                  <h4 className="font-semibold text-brand-brown mb-2">Monahans Hail Profile</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>5 ground-truth reports</strong> from trained weather spotters annually</li>
                    <li>• <strong>17 severe weather warnings</strong> issued for Ward County</li>
                    <li>• <strong>96 radar detections</strong> of hail-producing thunderstorms</li>
                    <li>• <strong>Peak activity:</strong> Late April through mid-June</li>
                    <li>• <strong>Unique pattern:</strong> Isolated supercells with concentrated impact zones</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Desert-Influenced Storm Formation</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-brand-brown">Thermal Instability</h4>
                    <p className="text-gray-700 text-sm">Permian Basin industrial activities and desert heating create intense thermal columns that spawn sudden, violent thunderstorms with large hail potential during peak heating hours.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                    <h4 className="font-semibold text-brand-brown">Isolated Supercells</h4>
                    <p className="text-gray-700 text-sm">Unlike widespread storm systems, Monahans typically experiences isolated supercell thunderstorms that concentrate their energy into smaller areas with devastating hail impact intensity.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <h4 className="font-semibold text-brand-brown">Rapid Development Cycles</h4>
                    <p className="text-gray-700 text-sm">Desert boundary interactions cause storms to intensify rapidly, often producing golf ball to tennis ball-sized hail with minimal advance warning compared to slower-developing systems.</p>
                  </div>
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800"><strong>Industrial Impact:</strong> Permian Basin oil and gas operations create heat island effects that contribute to localized severe weather development, requiring specialized preparedness strategies.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Permian Basin Damage Assessment</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-400">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Heat-Accelerated Damage</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Thermal Expansion Assessment:</strong> Desert heat cycles accelerate hail damage deterioration requiring rapid response</li>
                  <li>• <strong>UV Degradation Analysis:</strong> Intense Permian Basin sun exposure compounds impact damage to roofing materials</li>
                  <li>• <strong>Sand Abrasion Effects:</strong> Wind-blown sand erosion interacts with hail damage to accelerate material failure</li>
                  <li>• <strong>Temperature Differential Stress:</strong> Extreme daily temperature swings worsen structural damage from hail impacts</li>
                  <li>• <strong>Oil Field Contaminant Impact:</strong> Airborne particles from energy operations affect damage patterns and material selection</li>
                  <li>• <strong>Moisture Barrier Evaluation:</strong> Critical assessment in arid climate where minor leaks can cause disproportionate damage</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-400">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Rapid Response Systems</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Storm Tracking Technology:</strong> Advanced radar monitoring for sudden supercell development in Ward County</li>
                  <li>• <strong>Pre-Positioned Resources:</strong> Materials and crews strategically located for Permian Basin coverage</li>
                  <li>• <strong>Emergency Stabilization:</strong> Immediate protection systems designed for extreme desert conditions</li>
                  <li>• <strong>Heat Mitigation Protocols:</strong> Specialized procedures for working in temperatures exceeding 100°F</li>
                  <li>• <strong>Dust Storm Coordination:</strong> Timing repairs around frequent dust storm events in Ward County</li>
                  <li>• <strong>Industrial Site Safety:</strong> Enhanced protocols for properties near active oil and gas operations</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-400">
                <div className="text-4xl mb-4">🏜️</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Desert Climate Solutions</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Heat-Resistant Materials:</strong> Roofing systems engineered for sustained 120°F+ surface temperatures</li>
                  <li>• <strong>Sand-Blast Resistant Coatings:</strong> Protective finishes designed for Permian Basin environmental conditions</li>
                  <li>• <strong>Thermal Expansion Joints:</strong> Enhanced accommodation for extreme temperature cycling</li>
                  <li>• <strong>Enhanced Ventilation Design:</strong> Superior airflow systems for extreme heat management</li>
                  <li>• <strong>UV Protection Integration:</strong> Advanced UV-blocking technologies for extended material life</li>
                  <li>• <strong>Moisture Management Systems:</strong> Critical humidity control in arid environments</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Ward County Emergency Response</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Immediate Storm Response (0-2 Hours)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Rapid Storm Detection</h4>
                      <p className="text-gray-600 text-sm">Continuous monitoring for isolated supercell development with automated alert systems for Ward County</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Heat-Safe Assessment</h4>
                      <p className="text-gray-600 text-sm">Temperature-controlled evaluation protocols for safe damage assessment in extreme Permian Basin heat</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Industrial Coordination</h4>
                      <p className="text-gray-600 text-sm">Safety coordination with nearby oil and gas operations during emergency response activities</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-brand-brown mb-2">Monahans Resource Network</h4>
                  <p className="text-gray-700 text-sm">Established partnerships with Ward County Emergency Management, Monahans Fire Department, and Permian Basin industrial safety coordinators ensure comprehensive emergency response.</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Recovery Coordination (2-24 Hours)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Desert-Optimized Documentation</h4>
                      <p className="text-gray-600 text-sm">Specialized photography and assessment techniques accounting for intense glare and heat effects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Expedited Insurance Processing</h4>
                      <p className="text-gray-600 text-sm">Rapid claim initiation to minimize secondary damage from extreme heat exposure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Climate-Controlled Storage</h4>
                      <p className="text-gray-600 text-sm">Temperature-controlled material storage and staged logistics for quality preservation</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Permian Basin Logistics</h4>
                  <p className="text-green-700 text-sm">Strategic material staging at climate-controlled facilities ensures quality preservation despite extreme desert conditions affecting standard storage.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Desert-Engineered Roofing Systems</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Extreme Heat & Hail Protection</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">Monahans' location in the Permian Basin desert requires roofing systems engineered for both severe hail impacts and sustained exposure to extreme temperatures often exceeding 120°F at surface level. Our specialized solutions address these dual challenges.</p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Heat-Enhanced Impact Resistance</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Modified Asphalt Formulations:</strong> Polymer-enhanced systems maintaining flexibility at 120°F+</li>
                      <li>• <strong>Reflective Granule Technology:</strong> Advanced granules reducing surface temperatures by 20-30°F</li>
                      <li>• <strong>Thermal Cycling Resistance:</strong> Materials engineered for extreme day/night temperature swings</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Desert-Hardened Components</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>UV-Stabilized Materials:</strong> Enhanced protection against intense Permian Basin solar radiation</li>
                      <li>• <strong>Sand-Resistant Coatings:</strong> Specialized finishes preventing abrasion from wind-blown particles</li>
                      <li>• <strong>Corrosion Protection:</strong> Enhanced coatings for metal components in industrial environments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Permian Basin Performance Standards</h3>
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Extreme Environment Specifications</h4>
                  <p className="text-gray-700 text-sm mb-4">Our Monahans installations meet enhanced performance standards based on Ward County's unique desert-industrial climate conditions and isolated severe weather patterns.</p>
                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">150°F</div>
                      <div className="text-xs text-gray-600">Surface Temp Rating</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">Class 4+</div>
                      <div className="text-xs text-gray-600">Impact Resistance</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">40+</div>
                      <div className="text-xs text-gray-600">Year Desert Life</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-xl font-bold text-brand-gold">25%</div>
                      <div className="text-xs text-gray-600">Energy Savings</div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-xs text-yellow-800"><strong>Energy Efficiency:</strong> Advanced reflective systems reduce cooling costs by 15-25% in extreme desert conditions while maintaining hail resistance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">Ward County Insurance Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Permian Basin Claims Specialization</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Monahans' unique position in the Permian Basin requires specialized understanding of how desert conditions and industrial environments affect both storm damage patterns and insurance coverage considerations.</p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-brand-brown mb-3">Monahans Claims Performance</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>94% approval rate</strong> for desert-environment hail damage claims</li>
                    <li>• <strong>Average 19% increase</strong> in settlements with specialized documentation</li>
                    <li>• <strong>15-day average</strong> claim processing for isolated storm events</li>
                    <li>• <strong>Enhanced coverage</strong> for industrial environment considerations</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Desert Climate Documentation</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Heat-Accelerated Damage Analysis</h4>
                      <p className="text-gray-600 text-sm">Documentation of how extreme temperatures compound hail damage requiring immediate attention</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Industrial Environment Impact</h4>
                      <p className="text-gray-600 text-sm">Specialized assessment of how Permian Basin conditions affect standard damage evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Enhanced Material Justification</h4>
                      <p className="text-gray-600 text-sm">Professional documentation supporting upgraded materials for extreme climate conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Expedited Processing Advocacy</h4>
                      <p className="text-gray-600 text-sm">Emphasis on time-sensitive repairs due to rapid deterioration in desert conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do I know if my Monahans roof has hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles, and dented gutters. We provide free inspections with photo documentation for insurance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover hail damage in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, if damage occurred during your policy period. We document impacts, meet adjusters, and advocate for maximum coverage. 95%+ approval rate.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should I upgrade to Class 4 shingles after hail damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Absolutely. Class 4 shingles reduce future hail damage by 90% and qualify for insurance premium discounts up to 30% in Texas.</AccordionContent>
              </AccordionItem>
            </Accordion>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Monahans property owners. Expert hail damage repair with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}