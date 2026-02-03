import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Monahans TX | 5 Star Roofing',
  description: "Professional commercial roofing in Monahans TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingMonahansPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Monahans", url: "/commercial-roofing-monahans/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-monahans/#localbusiness",
        "name": "5 Star Commercial Roofing - Monahans Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-monahans/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Monahans,_Texas", "name": "Monahans", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Monahans TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Roofing Services",
            "name": "Commercial Roofing in Monahans",
            "description": "Professional commercial roofing services in Monahans, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
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
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Monahans?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Monahans vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Monahans?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Monahans."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Monahans</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Monahans. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">24/7</div><div className="text-brand-brown font-semibold text-lg">Emergency Service</div></div>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Monahans's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Monahans and surrounding areas, serving the gateway to the Monahans Sandhills and a diversifying West Texas economy. As a traditional oil marketing center for over 800 square miles of petroleum and cattle country, Monahans is strategically diversifying into hydroponic agriculture, military gear manufacturing, and sand mining while maintaining its tourism appeal as home to one of Texas's most unique natural attractions.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Monahans' evolving economy with expert installations and comprehensive warranties for oil and gas facilities, emerging industries, and tourism-related businesses. Our 65-minute response time from Amarillo headquarters ensures rapid service for emergency repairs across diverse facility types. We handle all permits, insurance claims, and warranty documentation.</p>
            
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-2xl border-l-4 border-brand-gold">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Understanding Monahans' Economic Diversification</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Monahans represents a West Texas success story of economic diversification. While maintaining its foundation as an oil marketing center serving the Permian Basin, the city has strategically attracted hydroponic agriculture, military equipment manufacturing, and sand mining operations. Combined with tourism from the famous Monahans Sandhills State Park, this diversity creates unique commercial roofing needs spanning industrial, agricultural, manufacturing, and hospitality sectors.</p>
              <p className="text-gray-700 leading-relaxed">Our roofing solutions support Monahans' economic transformation while meeting the demanding requirements of petroleum operations, the specialized needs of emerging industries, and the aesthetic standards expected by tourists visiting this distinctive desert landscape.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Roofing Solutions for Monahans' Diverse Economy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-black">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🛢️ Petroleum Marketing Center</h3>
                <p className="text-gray-700 leading-relaxed mb-4">As a marketing center for 800+ square miles of oil and cattle operations, Monahans hosts numerous petroleum service companies, equipment suppliers, and support businesses requiring specialized commercial roofing:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Oil field service company offices and shops</li>
                  <li>• Equipment storage and maintenance facilities</li>
                  <li>• Chemical storage and distribution centers</li>
                  <li>• Petroleum transport and logistics operations</li>
                  <li>• Drilling equipment and supply warehouses</li>
                  <li>• Administrative offices for regional operations</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Petroleum industry roofing must provide chemical resistance, fire safety compliance, and structural capacity for heavy equipment while supporting 24/7 operations critical to regional oil production.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🥬 Hydroponic Agriculture</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Monahans has attracted cutting-edge hydroponic greenhouse operations as part of its economic diversification strategy, requiring specialized roofing systems that support controlled-environment agriculture:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Climate-controlled greenhouse facilities</li>
                  <li>• Processing and packaging buildings</li>
                  <li>• Cold storage and distribution centers</li>
                  <li>• Administrative and research facilities</li>
                  <li>• Equipment storage and maintenance buildings</li>
                  <li>• Worker facilities and training centers</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Agricultural technology roofing emphasizes energy efficiency for climate control, moisture management for plant health, and integration with sophisticated environmental control systems.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🪖 Military Manufacturing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Monahans hosts military gear manufacturing operations, requiring specialized roofing systems that meet security requirements and support precision manufacturing processes:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Manufacturing and assembly facilities</li>
                  <li>• Quality control and testing laboratories</li>
                  <li>• Secure storage and shipping areas</li>
                  <li>• Administrative and design offices</li>
                  <li>• Employee facilities and training centers</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Military manufacturing roofing requires security compliance, precision environmental control for manufacturing processes, and durable protection for valuable equipment and materials.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏖️ Sand Mining & Tourism</h3>
                <p className="text-gray-700 leading-relaxed mb-4">The unique Monahans Sandhills support both sand mining operations and tourism businesses, creating roofing needs that span industrial operations and hospitality services:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Sand mining and processing facilities</li>
                  <li>• Hotels and motels serving park visitors</li>
                  <li>• Restaurants and tourist services</li>
                  <li>• Gift shops and retail establishments</li>
                  <li>• Recreational vehicle parks and facilities</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Sand mining and tourism roofing must handle abrasive desert conditions while maintaining aesthetic appeal for visitors attracted to this unique West Texas destination.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-orange-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Monahans Industries Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">65</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">65-Minute Response Time</h3>
                <p className="text-gray-700">Rapid emergency response from Amarillo headquarters serves diverse industrial and tourism operations efficiently.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">Multi-Industry Expertise</h3>
                <p className="text-gray-700">Experience across petroleum, agriculture, manufacturing, and tourism sectors supports Monahans' economic diversity.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-bold text-brand-Brown mb-2">Desert Durability</h3>
                <p className="text-gray-700">Specialized materials and techniques for extreme desert conditions, sand exposure, and temperature fluctuations.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Specialized Roofing Systems for Monahans Industries</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Industrial Metal Roofing for Petroleum Operations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Petroleum marketing and service operations in Monahans require robust metal roofing systems that withstand chemical exposure, support heavy equipment, and provide fire resistance for operations handling flammable materials.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Petroleum Industry Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Oil field service equipment storage</li>
                      <li>• Chemical storage and mixing facilities</li>
                      <li>• Vehicle maintenance and repair shops</li>
                      <li>• Administrative offices for field operations</li>
                      <li>• Warehouse and distribution centers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Petroleum Industry Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Fire resistance meeting petroleum industry standards</li>
                      <li>• Chemical-resistant coatings for harsh environments</li>
                      <li>• Structural capacity for cranes and heavy equipment</li>
                      <li>• Low maintenance in abrasive desert conditions</li>
                      <li>• 50+ year lifespan protecting valuable assets</li>
                    </ul>
                    <div className="mt-4 p-4 bg-black/5 rounded-lg">
                      <p className="text-sm text-gray-800"><strong>Petroleum Project:</strong> Completed standing seam metal roofing on a 30,000 sq ft oil field service facility, providing superior protection for $8M in specialized equipment and vehicles.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Climate-Controlled TPO for Hydroponic Agriculture</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Hydroponic greenhouse operations require specialized roofing systems that support precise environmental control while providing superior energy efficiency for climate-controlled growing environments in the desert climate.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Hydroponic Facility Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Greenhouse and growing facility roofing</li>
                      <li>• Processing and packaging buildings</li>
                      <li>• Cold storage and distribution centers</li>
                      <li>• Research and development facilities</li>
                      <li>• Administrative and visitor centers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Agricultural Technology Benefits:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Superior insulation for energy-efficient climate control</li>
                      <li>• Moisture barrier systems for humidity control</li>
                      <li>• Integration with automated environmental systems</li>
                      <li>• Reflective surfaces reducing cooling costs 40%</li>
                      <li>• Chemical resistance for agricultural processing</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Hydroponic Success:</strong> Installed high-performance TPO roofing on a 50,000 sq ft greenhouse facility, achieving 45% energy savings while maintaining optimal growing conditions year-round.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Security-Enhanced Systems for Military Manufacturing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">Military gear manufacturing facilities require specialized roofing systems that meet security requirements while supporting precision manufacturing processes and protecting sensitive equipment and materials.</p>
                    <h4 className="font-bold text-brand-brown mb-2">Manufacturing Applications:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Manufacturing and assembly areas</li>
                      <li>• Quality control and testing facilities</li>
                      <li>• Secure storage and shipping areas</li>
                      <li>• Administrative and engineering offices</li>
                      <li>• Employee facilities and security checkpoints</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2">Manufacturing Facility Advantages:</h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Security-compliant installation procedures</li>
                      <li>• Precision environmental control for manufacturing</li>
                      <li>• Anti-tamper design and materials</li>
                      <li>• Static-free environments for electronics</li>
                      <li>• Restricted access during installation</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>Manufacturing Project:</strong> Completed security-compliant roofing installation on military gear manufacturing facility with full background checks and restricted access protocols.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Desert Environment Emergency Response</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Extreme Weather Protection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Monahans' desert environment creates unique challenges including extreme temperature fluctuations, sand infiltration, and intense UV exposure. Our emergency response protocols address these conditions while protecting diverse industrial operations and tourism businesses.</p>
                
                <h4 className="text-xl font-bold text-brand-brown mb-3 mt-6">Desert Emergency Response:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Rapid Assessment (45-65 minutes)</h5>
                      <p className="text-gray-700 text-sm">Quick response for wind-blown sand damage, extreme heat effects, and storm damage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Climate Protection Protocol</h5>
                      <p className="text-gray-700 text-sm">Specialized temporary protection for climate-sensitive operations like hydroponic facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-bold text-brand-brown">Sand-Resistant Repair Solutions</h5>
                      <p className="text-gray-700 text-sm">Permanent repairs using materials specifically designed for desert exposure</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-brand-brown mb-4">Desert Environment Challenges:</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-bold text-gray-800">Sand Infiltration</h5>
                    <p className="text-sm text-gray-600">Wind-blown sand can damage roofing systems and affect HVAC equipment requiring specialized sealing.</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-bold text-gray-800">Extreme Temperature Swings</h5>
                    <p className="text-sm text-gray-600">Daily temperature variations of 40+ degrees stress roofing materials requiring flexible systems.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-bold text-gray-800">UV Exposure</h5>
                    <p className="text-sm text-gray-600">Intense desert sun degrades standard materials requiring UV-resistant coatings and membranes.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-bold text-gray-800">Wind Events</h5>
                    <p className="text-sm text-gray-600">Desert wind storms can exceed 80 mph requiring enhanced attachment and wind resistance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Monahans Commercial Roofing Performance Metrics</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={140} suffix="+" /></div>
                  <div className="text-brand-brown font-semibold">Monahans Projects</div>
                  <div className="text-sm text-gray-600 mt-1">Oil, agriculture, manufacturing, tourism</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={45} suffix="%" /></div>
                  <div className="text-brand-brown font-semibold">Energy Savings</div>
                  <div className="text-sm text-gray-600 mt-1">Hydroponic facility average</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">100%</div>
                  <div className="text-brand-brown font-semibold">Security Compliance</div>
                  <div className="text-sm text-gray-600 mt-1">Manufacturing facility projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2"><AnimatedCounter to={15} suffix="+" /></div>
                  <div className="text-brand-brown font-semibold">Years Desert Experience</div>
                  <div className="text-sm text-gray-600 mt-1">Specialized material knowledge</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Economic Diversification Financing Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏭 Economic Development Financing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Monahans' economic diversification creates opportunities for businesses expanding into new sectors. Our financing programs support companies transitioning from traditional oil and gas into agriculture, manufacturing, and tourism.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Development Financing Options:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Start-up business flexible payment terms</li>
                  <li>• Economic development grant coordination</li>
                  <li>• SBA loan documentation and support</li>
                  <li>• Multi-industry expansion financing</li>
                  <li>• Technology upgrade and modernization loans</li>
                </ul>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Diversification Success:</strong> Supported a petroleum service company's expansion into hydroponic agriculture with flexible financing for a $220,000 greenhouse roofing project.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏨 Tourism Business Support</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Tourism businesses serving Monahans Sandhills State Park visitors face seasonal revenue patterns. Our financing accommodates these cycles while helping businesses maintain facilities that attract tourists to this unique destination.</p>
                
                <h4 className="text-lg font-bold text-brand-brown mb-3">Tourism Industry Programs:</h4>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>• Seasonal payment schedules for tourist revenue cycles</li>
                  <li>• Off-season installation with spring payment starts</li>
                  <li>• Quick approval for emergency tourist season repairs</li>
                  <li>• Aesthetic upgrade financing for visitor appeal</li>
                  <li>• Family business extended payment terms</li>
                </ul>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Tourism Project:</strong> Helped a Monahans hotel complete roof replacement during winter off-season with payment terms aligned to spring and summer tourist revenue, maintaining guest satisfaction.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Monahans vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Monahans?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Monahans.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Monahans Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Monahans property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}