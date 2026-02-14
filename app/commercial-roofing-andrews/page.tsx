import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/commercial-roofing-andrews/' },
  title: 'Commercial Roofing Andrews TX | 5 Star Roofing',
  description: "Professional commercial roofing in Andrews TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingAndrewsPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Andrews", url: "/commercial-roofing-andrews/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-andrews/#localbusiness",
        "name": "5 Star Commercial Roofing - Andrews Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-andrews/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Andrews,_Texas", "name": "Andrews", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Andrews TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Roofing Services",
            "name": "Commercial Roofing in Andrews",
            "description": "Professional commercial roofing services in Andrews, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Andrews",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Andrews?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Andrews vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Andrews?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Andrews."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-8-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Andrews</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Andrews. Expert installation, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Andrews's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Andrews and surrounding areas, serving the heart of the Permian Basin's energy sector. We understand the unique challenges facing Andrews' commercial properties, from oil and gas facilities to agricultural operations, and engineer roofing systems built for extreme Texas conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Andrews with expert installations, comprehensive warranties, and outstanding customer service. Our 90-minute response time from Amarillo headquarters ensures rapid service for emergency repairs. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
            
            <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-brand-gold">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Andrews' Commercial Roofing Needs</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Andrews County has emerged as one of Texas's fastest-growing micropolitan areas, driven by its position in the heart of the Permian Basin. This rapid growth in oil and gas operations has created unprecedented demand for commercial roofing solutions that can withstand the harsh West Texas environment while supporting the energy sector's operations.</p>
              <p className="text-gray-700 leading-relaxed">Our commercial roofing systems are specifically designed for Andrews' petroleum-based economy, featuring enhanced chemical resistance, superior weather protection, and energy-efficient designs that reduce operational costs for local businesses.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Services for Andrews' Key Industries</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🛢️ Oil & Gas Facilities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Andrews sits at the center of the Permian Basin's oil boom, hosting numerous drilling operations, processing facilities, and support services. These industrial facilities require specialized roofing systems that can handle:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Chemical exposure from petroleum operations</li>
                  <li>• operational requirements with minimal downtime</li>
                  <li>• Heavy equipment and vehicle traffic on roof areas</li>
                  <li>• Fire-resistant materials meeting OSHA standards</li>
                  <li>• Sound dampening for noise-sensitive operations</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Our TPO and metal roofing systems for oil and gas facilities feature enhanced chemical resistance and can be installed during planned maintenance windows to minimize operational disruption.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌾 Agricultural Operations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Andrews' agricultural sector, centered on livestock production and cattle ranching, requires roofing solutions for barns, storage facilities, and processing buildings that can withstand:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Corrosive effects from livestock areas</li>
                  <li>• Large clear-span requirements for equipment storage</li>
                  <li>• Ventilation systems for animal comfort</li>
                  <li>• Easy maintenance in rural settings</li>
                  <li>• Cost-effective solutions for large buildings</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Our metal roofing systems with specialized coatings provide excellent durability for agricultural applications, with 30+ year warranties and minimal maintenance requirements.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Andrews Businesses Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">90</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">90-Minute Response Time</h3>
                <p className="text-gray-700">Emergency response from our Amarillo headquarters ensures minimal business disruption for Andrews' critical operations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Industrial Expertise</h3>
                <p className="text-gray-700">Specialized experience with oil & gas, agricultural, and industrial facilities throughout the Permian Basin region.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Complete Project Management</h3>
                <p className="text-gray-700">We handle permits, inspections, insurance claims, and all project coordination so you can focus on your business.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Systems for Andrews Climate</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO (Thermoplastic Olefin) Roofing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">TPO roofing is ideal for Andrews' commercial buildings due to its exceptional energy efficiency and chemical resistance. The white reflective surface reduces cooling costs significantly in West Texas heat, while the material's flexibility handles temperature fluctuations without cracking.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Best Applications in Andrews:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Office buildings and administrative facilities</li>
                      <li>• Retail and commercial spaces</li>
                      <li>• Light industrial facilities</li>
                      <li>• Warehouses and distribution centers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Andrews-Specific Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• 30% reduction in cooling costs</li>
                      <li>• Chemical resistance for oil field environments</li>
                      <li>• 20-25 year lifespan with minimal maintenance</li>
                      <li>• Single-membrane installation reduces labor time</li>
                      <li>• Energy Star qualified for tax incentives</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Andrews Project Example:</strong> Recently completed a 25,000 sq ft TPO installation for a local oil service company, reducing their monthly cooling costs by $1,200.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Metal Roofing Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Metal roofing provides unmatched durability for Andrews' industrial applications. With proper installation and coating systems, metal roofs can withstand decades of Permian Basin weather while providing excellent protection for valuable equipment and operations.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Best Applications in Andrews:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Oil and gas processing facilities</li>
                      <li>• Agricultural buildings and barns</li>
                      <li>• Manufacturing and heavy industrial</li>
                      <li>• Equipment storage and maintenance shops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Andrews-Specific Advantages:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• 50+ year lifespan in proper conditions</li>
                      <li>• Fire resistance critical for oil operations</li>
                      <li>• Wind resistance up to 150 mph</li>
                      <li>• Low maintenance requirements</li>
                      <li>• Can support heavy equipment installations</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>Andrews Project Example:</strong> Installed standing seam metal roofing on a 40,000 sq ft drilling equipment warehouse, providing superior protection for $2M+ in equipment.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">EPDM provides cost-effective protection for Andrews' commercial properties. This proven technology offers excellent weather resistance and easy repair capabilities, making it ideal for budget-conscious businesses that still need reliable protection.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Best Applications in Andrews:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Small to medium commercial buildings</li>
                      <li>• Temporary or modular facilities</li>
                      <li>• Budget-conscious applications</li>
                      <li>• Retrofit projects over existing roofs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Cost Benefits for Andrews Businesses:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Lowest initial installation cost</li>
                      <li>• Easy field repairs minimize service calls</li>
                      <li>• 15-20 year lifespan with proper maintenance</li>
                      <li>• Compatible with most existing roof decks</li>
                      <li>• Quick installation reduces business disruption</li>
                    </ul>
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                      <p className="text-sm text-amber-800"><strong>Andrews Project Example:</strong> Completed EPDM installation on a 12,000 sq ft office building for a local petroleum services company, coming in 25% under budget while meeting all performance requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Emergency Response for Andrews' Critical Operations</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">90-Minute Emergency Response</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Andrews' oil and gas operations can't afford downtime due to roof failures. Our emergency response team can be on-site within 90 minutes of your call from our Amarillo headquarters, equipped with materials and expertise to provide immediate temporary protection and permanent repairs.</p>
                
                <h4 className="text-xl font-bold text-brand-brown mb-3 mt-6">Our Emergency Response Process:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Immediate Response (0-15 minutes)</h5>
                      <p className="text-gray-700 text-sm">Emergency hotline assessment and crew dispatch from Amarillo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">On-Site Assessment (60-90 minutes)</h5>
                      <p className="text-gray-700 text-sm">Professional evaluation and immediate temporary protection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Permanent Solution (24-72 hours)</h5>
                      <p className="text-gray-700 text-sm">Complete repair plan and execution with minimal business disruption</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-brand-brown mb-4">Common Emergency Scenarios in Andrews:</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Hail Damage</h5>
                    <p className="text-sm text-gray-600">West Texas hailstorms can severely damage commercial roofing. We provide immediate tarping and permanent repair solutions.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Wind Damage</h5>
                    <p className="text-sm text-gray-600">High winds can lift roofing materials and damage HVAC units. Emergency securing and repairs prevent further damage.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Equipment Damage</h5>
                    <p className="text-sm text-gray-600">Heavy industrial equipment can puncture roofing. We provide immediate patching and structural reinforcement.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-bold text-gray-800">Chemical Exposure</h5>
                    <p className="text-sm text-gray-600">Petroleum operations can compromise roofing materials. We assess chemical damage and provide resistant replacement systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Andrews Commercial Roofing: By the Numbers</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={150} suffix="+" /></div>
                  <div className="text-brand-brown font-semibold">Andrews Projects Completed</div>
                  <div className="text-sm text-gray-600 mt-1">Since 2014</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={2.5} prefix="$" suffix="M" /></div>
                  <div className="text-brand-brown font-semibold">Property Protected</div>
                  <div className="text-sm text-gray-600 mt-1">Commercial values secured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={90} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">Energy Savings</div>
                  <div className="text-sm text-gray-600 mt-1">Average cooling cost reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={99} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">Customer Satisfaction</div>
                  <div className="text-sm text-gray-600 mt-1">Andrews client retention rate</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Financing and Insurance Support for Andrews Businesses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">💰 Flexible Financing Options</h3>
                <p className="text-gray-700 leading-relaxed mb-4">We understand that commercial roofing represents a significant investment for Andrews businesses. Our financing programs help you protect your property without straining cash flow.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Available Financing Programs:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• 0% APR for 12 months (qualified customers)</li>
                  <li>• Extended payment plans up to 60 months</li>
                  <li>• Equipment financing for HVAC integration</li>
                  <li>• Seasonal payment programs for agriculture</li>
                  <li>• Government contractor net terms available</li>
                </ul>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Andrews Business Example:</strong> A local oil service company financed their $85,000 metal roofing project with 0% APR, saving over $8,000 in interest costs.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🛡️ Insurance Claim Assistance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Andrews' location in Tornado Alley means weather-related roof damage is common. Our insurance specialists help maximize your claim settlement and ensure proper repairs.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Our Insurance Services:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Free damage assessment and documentation</li>
                  <li>• Direct insurance company communication</li>
                  <li>• Supplemental claim preparation</li>
                  <li>• Code upgrade assistance</li>
                  <li>• Payment processing coordination</li>
                </ul>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Success Story:</strong> After hail damage to an Andrews manufacturing facility, we helped secure a $125,000 insurance settlement, $35,000 more than the initial offer.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Andrews vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Andrews.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What commercial roofing systems work best in Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Andrews Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Andrews property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}