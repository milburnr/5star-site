import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/roof-replacement-snyder/' },
  title: 'Roof Replacement Snyder TX | 5 Star Roofing',
  description: "Professional roof replacement in Snyder TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function RoofReplacementSnyderPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Roof Replacement", url: "/roof-replacement/" },
        { name: "Snyder", url: "/roof-replacement-snyder/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-replacement-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Roof Replacement",
        "image": "https://5starroofingpros.com/images/residential-roofing-5.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/roof-replacement-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional roof replacement in Snyder TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Replacement Services",
            "name": "Roof Replacement in Snyder",
            "description": "Professional roof replacement services in Snyder, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Snyder",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roof Replacement Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"When should I replace my Snyder roof?","acceptedAnswer":{"@type":"Answer","text":"Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs."}},{"@type":"Question","name":"What roofing materials work best in West Texas?","acceptedAnswer":{"@type":"Answer","text":"Class 4 impact-resistant shingles, metal roofing, and TPO handle Snyder's extreme heat, hail, and high winds best."}},{"@type":"Question","name":"How do oil field conditions affect roofing in Snyder?","acceptedAnswer":{"@type":"Answer","text":"Permian Basin operations create dust, vibrations, and emissions that can accelerate roof deterioration. Regular maintenance is crucial."}},{"@type":"Question","name":"Will a new roof increase my home value in Snyder?","acceptedAnswer":{"@type":"Answer","text":"Yes. New roofs provide 60-70% ROI and are especially valuable in Snyder's stable energy economy. Class 4 roofs add premium value."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-15-1280w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Roof Replacement in <span className="text-brand-gold-light">Snyder, Texas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">West Texas Energy Capital Roofing Solutions</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional roof replacement throughout Snyder and Scurry County. Specializing in energy sector and residential roofing systems engineered for West Texas climate extremes. Expert installation, comprehensive warranties, and  for this vital Permian Basin community.</p>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={15} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">Snyder's Premier Roof Replacement Specialists</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">As the county seat of Scurry County and a major hub in the heart of the Permian Basin, Snyder presents unique roofing challenges that demand specialized expertise. This West Texas energy capital experiences some of the most demanding climate conditions combined with industrial factors that require superior roofing solutions. Our team understands Snyder's specific environmental and economic factors, providing roof replacement services engineered for long-term performance in this vital oil and gas community.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Permian Basin Challenges</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Extreme Heat:</strong> Summer temperatures regularly exceed 105°F</li>
                  <li>• <strong>Severe Hailstorms:</strong> Located in active hail corridor</li>
                  <li>• <strong>High Winds:</strong> Open terrain creates extreme wind exposure</li>
                  <li>• <strong>Oil Field Emissions:</strong> Industrial pollutants accelerate deterioration</li>
                  <li>• <strong>Ground Vibrations:</strong> Heavy equipment causes structural stress</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Snyder-Specific Solutions</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Energy Industry Expertise:</strong> Materials tested for industrial environments</li>
                  <li>• <strong>Extreme Weather Protection:</strong> Systems rated for West Texas conditions</li>
                  <li>• <strong>Enhanced Durability:</strong> Superior materials for extended lifespan</li>
                  <li>• <strong>Rapid Response:</strong>  for critical facilities</li>
                  <li>• <strong>Scurry County Knowledge:</strong> Local codes and permit expertise</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've served Snyder's energy workers, families, and businesses with expert installations, comprehensive warranties, and outstanding customer service. We understand the critical nature of protecting infrastructure in this essential energy producing region and work efficiently to minimize disruption to operations while providing maximum protection.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Energy Industry Roofing Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Oil & Gas Facilities</h3>
                <p className="text-gray-700 mb-4">Specialized systems for Permian Basin operations:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Chemical-resistant TPO and EPDM</li>
                  <li>• High-temperature performance coatings</li>
                  <li>• Explosion-resistant construction methods</li>
                  <li>• Environmental compliance standards</li>
                  <li>• Rapid emergency repair capabilities</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Worker Housing</h3>
                <p className="text-gray-700 mb-4">Residential solutions for energy workforce:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Class 4 impact-resistant shingles</li>
                  <li>• Enhanced wind uplift protection</li>
                  <li>• Energy-efficient cool roof systems</li>
                  <li>• Rapid installation schedules</li>
                  <li>• Insurance premium discounts</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Commercial Buildings</h3>
                <p className="text-gray-700 mb-4">Downtown and business district solutions:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Historic building preservation</li>
                  <li>• Modern efficiency upgrades</li>
                  <li>• Minimal business disruption</li>
                  <li>• Aesthetic enhancement options</li>
                  <li>• Long-term warranty protection</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Serving Greater Snyder Area</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Our roof replacement services extend throughout Scurry County and the surrounding West Texas communities. We're familiar with local building codes, energy industry requirements, and the specific challenges faced by property owners in the Permian Basin region.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Service Communities:</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>• Snyder</div>
                  <div>• Fluvanna</div>
                  <div>• Hermleigh</div>
                  <div>• Ira</div>
                  <div>• Dunn</div>
                  <div>• Inadale</div>
                  <div>• Scurry County</div>
                  <div>• Fisher County</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Energy Sector Expertise</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Understanding of oil field operations</li>
                  <li>• Experience with industrial safety requirements</li>
                  <li>• Knowledge of Permian Basin conditions</li>
                  <li>• Relationships with energy contractors</li>
                  <li>• Flexible scheduling for operations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">West Texas Climate Extremes</h2>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">Snyder's location in the heart of West Texas creates one of the most challenging roofing environments in North America. The combination of Permian Basin industrial conditions and extreme continental climate demands specialized roofing solutions designed for maximum durability and performance.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Summer Brutality (May-September)</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Scorching Heat:</strong> Daily highs often 105-115°F</li>
                    <li>• <strong>Roof Surface Temps:</strong> Can exceed 160°F</li>
                    <li>• <strong>Severe Thunderstorms:</strong> Explosive storm development</li>
                    <li>• <strong>Golf Ball Hail:</strong> Frequent large hail events</li>
                    <li>• <strong>Straight-line Winds:</strong> 70-90 mph microbursts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Winter & Industrial Stress</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>Blue Northers:</strong> Rapid 60°F temperature drops</li>
                    <li>• <strong>Freezing Conditions:</strong> Ice storms and freeze damage</li>
                    <li>• <strong>Constant Wind:</strong> 15-20 mph sustained speeds</li>
                    <li>• <strong>Industrial Pollution:</strong> Oil field emissions and dust</li>
                    <li>• <strong>Equipment Vibration:</strong> Heavy machinery stress</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl border border-red-300">
                <h3 className="text-xl font-bold mb-4 text-red-800">Our Climate-Warrior Approach</h3>
                <p className="text-red-700 leading-relaxed">We select and install roofing systems specifically engineered for these punishing conditions. Our materials feature superior heat resistance, enhanced impact protection, and specialized coatings designed to withstand industrial environments. Every installation includes advanced fastener systems, enhanced wind uplift protection, and comprehensive weather sealing designed to perform in West Texas extremes.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">The Snyder Energy-Grade Installation Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">Industrial-Grade Excellence</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Comprehensive Damage Analysis</h4>
                      <p className="text-gray-600">Detailed assessment including storm damage, heat stress, and industrial environmental factors.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Energy-Sector Material Selection</h4>
                      <p className="text-gray-600">Choose from industrial-tested materials with proven Permian Basin performance records.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Scurry County Compliance</h4>
                      <p className="text-gray-600">Complete permit processing and coordination with county building officials.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Weather-Safe Installation</h4>
                      <p className="text-gray-600">Strategic scheduling around West Texas weather for optimal installation conditions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">Industrial-Standard Cleanup</h4>
                      <p className="text-gray-600">Complete site restoration meeting energy industry safety and cleanliness standards.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-brown text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Why Snyder Chooses Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Energy industry expertise</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>West Texas climate specialists</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>prompt response</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Licensed and insured in Texas</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Industrial-grade materials</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Comprehensive warranties</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">✓</div>
                    <div>Scurry County knowledge</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Supporting Snyder's Energy Economy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">Permian Basin Operations</h3>
                <p className="text-orange-700 mb-4">Serving the heart of America's energy production:</p>
                <ul className="text-orange-700 space-y-2">
                  <li>• Oil field facility maintenance</li>
                  <li>• Well site building protection</li>
                  <li>• Pipeline facility roofing</li>
                  <li>• Equipment storage buildings</li>
                  <li>• Emergency repair services</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Energy Service Companies</h3>
                <p className="text-blue-700 mb-4">Supporting the service sector that keeps energy flowing:</p>
                <ul className="text-blue-700 space-y-2">
                  <li>• Fleet maintenance facilities</li>
                  <li>• Parts warehouses and distribution</li>
                  <li>• Office building upgrades</li>
                  <li>• Workshop and fabrication shops</li>
                  <li>• Administrative complex roofing</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Community Infrastructure Protection</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Snyder's role as the Scurry County seat means protecting vital community infrastructure. We provide specialized services for:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Government Buildings</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Courthouse and county offices</li>
                    <li>• Emergency services facilities</li>
                    <li>• Municipal buildings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Educational Facilities</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Snyder ISD schools</li>
                    <li>• Western Texas College</li>
                    <li>• Childcare facilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-2">Healthcare & Community</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Cogdell Memorial Hospital</li>
                    <li>• Medical clinics</li>
                    <li>• Churches and community centers</li>
                  </ul>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When should I replace my Snyder roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 15-18 years in extreme heat climates, multiple leaks, extensive granule loss, heat-related material failure, or when repair costs exceed 25% of replacement value. West Texas conditions accelerate normal aging.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What roofing materials work best in West Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 impact-resistant shingles, standing seam metal roofing, and TPO membrane systems are ideal for Snyder's extreme heat, hail, and high winds. Energy-reflective materials help combat intense summer heat, while reinforced systems handle severe weather.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do oil field conditions affect roofing in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Permian Basin operations create dust, chemical emissions, and ground vibrations that can accelerate roof deterioration. We use specialized coatings and materials designed to resist industrial exposure and recommend quarterly inspections for properties near active oil operations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do I need permits for roof replacement in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, Scurry County requires building permits for roof replacement. We handle all permit applications, ensure compliance with local codes, and coordinate required inspections. Permits typically cost $100-400 depending on project scope and building type.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will a new roof increase my home value in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. New roofs provide 60-70% ROI and are especially valuable in Snyder's stable energy economy. Class 4 impact-resistant roofs add premium value with insurance discounts, reduced maintenance, and enhanced protection crucial for this high-risk weather area.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to emergency roof damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide prompt response throughout Scurry County, typically arriving within 2-4 hours for severe damage. For energy sector facilities requiring immediate attention, we maintain priority response protocols and can mobilize emergency crews within 1-2 hours.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Snyder and Scurry County property owners. Expert roof replacement engineered for West Texas extremes and energy industry conditions. Comprehensive warranties and specialized insurance assistance for storm-damaged properties.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}