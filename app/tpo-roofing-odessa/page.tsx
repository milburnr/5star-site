import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "TPO Roofing Odessa TX | Expert Service | Free Inspection",
  description: "Professional tpo roofing in Odessa TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "TPO Roofing", url: "/tpo-roofing/" },
        { name: "Odessa", url: "/tpo-roofing-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-odessa/#localbusiness",
        "name": "5 Star Commercial Roofing - Odessa TPO Roofing",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "image": "https://5starroofingpros.com/images/TPO1.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/tpo-roofing-odessa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional tpo roofing in Odessa TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Membrane Roofing Installation",
            "name": "TPO Roofing in Odessa",
            "description": "Professional tpo roofing services in Odessa, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
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
              "name": "TPO Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TPO Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TPO Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"What is TPO roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO (Thermoplastic Polyolefin) is a single-ply white membrane for flat/low-slope roofs. Energy Star rated, heat-welded seams, 15-25 year warranties."}},{"@type":"Question","name":"How much does TPO roofing cost in Odessa?","acceptedAnswer":{"@type":"Answer","text":"TPO installation in Odessa costs $4-$8 per square foot including materials and labor. Excellent value for energy efficiency and durability."}},{"@type":"Question","name":"Why choose TPO over other commercial roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO reflects heat (lower cooling costs), resists hail/wind damage, heat-welded seams are watertight, and offers excellent cost-to-performance ratio."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/TPO1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">TPO Roofing in <span className="text-brand-gold-light">Odessa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Oil Patch Capital's Industrial Roofing Experts</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional TPO roofing throughout Odessa and the heart of the Permian Basin. Expert installation designed for oil field demands and harsh desert conditions, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Odessa's Premier Oil Patch Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional TPO roofing throughout Odessa and the core Permian Basin region. As the historic heart of America's oil patch, Odessa presents unique roofing challenges from heavy industrial operations, oilfield service facilities, and the demanding desert environment that defines West Texas. Our specialized experience in this market ensures your commercial property receives roofing solutions built for oil country.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Odessa's diverse industrial landscape with expert TPO installations engineered for extreme conditions. From oilfield service companies and manufacturing facilities to the University of Texas Permian Basin and growing healthcare networks, our team understands the unique demands of operating in the world's most productive oil field.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🛢️ Oilfield Tough</h3>
                <p className="text-gray-700 leading-relaxed">Odessa's position at the heart of the Permian Basin exposes buildings to unique stresses - from constant truck traffic vibrations and chemical exposure to extreme temperature swings and sandstorms. Our TPO systems are specifically engineered to withstand the harsh realities of oil patch operations while providing superior energy efficiency.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏭 Industrial Heritage</h3>
                <p className="text-gray-700 leading-relaxed">From the legendary Odessa Meteorite to modern petrochemical facilities, Odessa's industrial heritage demands roofing solutions that can handle heavy equipment, chemical exposure, and 24/7 operations. Our installations serve everything from massive manufacturing complexes to specialized oilfield service facilities.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">TPO Roofing Built for Odessa's Harsh Environment</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌵 Desert Durability</h3>
                <p className="text-gray-700 mb-4">Odessa's desert climate combines extreme heat, intense UV radiation, and frequent dust storms that can quickly degrade inferior roofing materials. Our TPO systems feature the highest UV resistance ratings and smooth surfaces that shed dust and debris while maintaining peak performance throughout the harshest conditions.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Superior UV resistance ratings</li>
                  <li>• Heat resistance to 180°F+</li>
                  <li>• Dust-shedding smooth surface</li>
                  <li>• 25+ year desert climate performance</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">⚗️ Chemical Protection</h3>
                <p className="text-gray-700 mb-4">The petrochemical environment of Odessa exposes roofing to various industrial chemicals, petroleum vapors, and processing emissions. Our TPO membranes feature enhanced chemical resistance specifically formulated to maintain integrity in hydrocarbon-rich environments typical of oil patch operations.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hydrocarbon-resistant formulations</li>
                  <li>• Chemical compatibility testing</li>
                  <li>• Industrial membrane thickness options</li>
                  <li>• Proven oilfield performance record</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">💪 Heavy-Duty Performance</h3>
                <p className="text-gray-700 mb-4">Odessa's industrial facilities often house heavy equipment, processing machinery, and high-load operations that create unique roofing stresses. Our TPO installations feature enhanced structural attachment systems and reinforced membranes designed for demanding industrial applications.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Heavy equipment load ratings</li>
                  <li>• Enhanced structural attachment</li>
                  <li>• Puncture-resistant construction</li>
                  <li>• Industrial warranty coverage</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Odessa's Key Industries We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Oil & Gas Sector</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🛢️ Oilfield Services</h4>
                    <p className="text-gray-700">Serving Halliburton, Baker Hughes, Schlumberger, and hundreds of oilfield service companies with durable TPO systems designed for 24/7 industrial operations.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏭 Manufacturing</h4>
                    <p className="text-gray-700">Industrial manufacturing facilities producing equipment for the oil patch, from pipe and tubing to specialized drilling equipment and processing machinery.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🔧 Fabrication Shops</h4>
                    <p className="text-gray-700">Metal fabrication and welding shops serving the energy industry with roofing systems that handle high heat, sparks, and heavy equipment operations.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🚚 Transportation</h4>
                    <p className="text-gray-700">Trucking companies, logistics facilities, and transportation hubs that keep the Permian Basin moving with efficient, low-maintenance roofing solutions.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Community Infrastructure</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🎓 UTPB Campus</h4>
                    <p className="text-gray-700">University of Texas Permian Basin facilities requiring specialized roofing that meets educational standards while handling desert climate extremes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏥 Medical Center</h4>
                    <p className="text-gray-700">Medical Center Hospital and healthcare facilities serving the oil patch workforce with quiet, reliable roofing systems that meet healthcare standards.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🛒 Retail Centers</h4>
                    <p className="text-gray-700">Music City Mall, strip centers, and retail facilities serving Odessa's growing population with energy-efficient roofing that reduces operational costs.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏛️ Municipal Buildings</h4>
                    <p className="text-gray-700">City facilities, Ector County buildings, and public infrastructure requiring durable, cost-effective roofing solutions that serve the community long-term.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Oil Patch Specialized Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">1</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Industrial Site Assessment</h3>
                <p className="text-gray-700">Comprehensive evaluation including chemical exposure analysis, vibration assessment, equipment load calculations, and safety protocol review for oilfield environments.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">2</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Specialized System Design</h3>
                <p className="text-gray-700">Custom engineering for industrial applications including chemical resistance specifications, heavy load calculations, and specialized attachment methods for oil patch demands.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">3</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Safety Coordination</h3>
                <p className="text-gray-700">Full compliance with oilfield safety requirements, OSHA standards, and client-specific safety protocols with certified safety training for all installation personnel.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">4</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Industrial-Grade Materials</h3>
                <p className="text-gray-700">Premium TPO membranes with enhanced chemical resistance, thicker gauges for durability, and specialized fastening systems designed for demanding industrial applications.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">5</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Expert Installation</h3>
                <p className="text-gray-700">Certified technicians with oilfield experience using specialized equipment and techniques designed for industrial environments and operational continuity.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">6</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Performance Validation</h3>
                <p className="text-gray-700">Rigorous testing including chemical resistance verification, structural integrity testing, and comprehensive documentation for industrial warranty compliance.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Odessa Climate Challenges & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🌵 Extreme Desert Heat</h3>
                <p className="text-gray-700 mb-4">Odessa's desert location creates summer temperatures regularly exceeding 100°F with intense solar radiation that can quickly degrade inferior roofing materials and drive cooling costs through the roof.</p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Solar reflectance up to 87% reduces heat gain</li>
                    <li>• Superior thermal emittance properties</li>
                    <li>• Energy savings up to 45% on cooling costs</li>
                    <li>• Cool roof certification for utility rebates</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">💨 Dust & Sandstorms</h3>
                <p className="text-gray-700 mb-4">West Texas dust storms can coat buildings in fine particles that accumulate on roofs, clog drains, and create long-term maintenance challenges for traditional roofing systems.</p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Smooth, non-porous surface sheds dust naturally</li>
                    <li>• Easy cleaning with minimal maintenance</li>
                    <li>• Superior drainage design prevents clogging</li>
                    <li>• Long-term performance despite dust exposure</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">⚗️ Industrial Emissions</h3>
                <p className="text-gray-700 mb-4">The concentrated oil and gas operations around Odessa create airborne chemicals, petroleum vapors, and industrial emissions that can degrade conventional roofing materials over time.</p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Enhanced chemical-resistant formulations</li>
                    <li>• Hydrocarbon resistance testing certification</li>
                    <li>• Industrial-grade membrane thickness</li>
                    <li>• Proven performance in petrochemical environments</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🌪️ Severe Weather Events</h3>
                <p className="text-gray-700 mb-4">Odessa experiences severe thunderstorms with damaging hail, high winds, and flash flooding that can cause significant damage to inadequately protected commercial buildings.</p>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">TPO Solution:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• UL 2218 Class 4 hail impact resistance</li>
                    <li>• Wind uplift ratings exceeding 120 mph</li>
                    <li>• Flexible membrane accommodates building movement</li>
                    <li>• Superior water resistance and drainage</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Why is TPO roofing perfect for Odessa's oil patch environment?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO roofing is specifically engineered for demanding industrial environments like Odessa's oil patch. Its chemical-resistant membrane withstands petroleum vapors and industrial emissions common in the Permian Basin. The reflective white surface dramatically reduces cooling costs in our desert heat - crucial for 24/7 operations. TPO's flexibility handles extreme temperature swings without cracking, while its smooth surface sheds dust from frequent sandstorms. The welded seam construction creates a monolithic barrier perfect for industrial applications.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much energy savings can Odessa businesses expect from TPO roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Odessa commercial facilities typically see 35-45% reduction in cooling costs after TPO installation. With summer temperatures regularly exceeding 100°F, industrial facilities can save $20,000-$50,000 annually on energy costs for larger buildings. Oilfield service facilities and manufacturing plants see even greater savings due to heat-generating operations. AEP utility rebates are available for qualifying installations, and many businesses achieve full ROI within 4-6 years through energy savings alone.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does TPO handle chemical exposure from oil and gas operations?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our TPO systems feature enhanced chemical resistance specifically formulated for hydrocarbon-rich environments like Odessa. The thermoplastic membrane resists petroleum products, drilling fluids, and processing chemicals without degrading. We use industrial-grade membranes (60-80 mil thickness) and conduct chemical compatibility testing for each application. The heat-welded seams create a continuous barrier that prevents chemical infiltration, making TPO ideal for equipment buildings, service facilities, and processing operations throughout the oil patch.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the installation process for oilfield service facilities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Oilfield installations require specialized safety protocols and operational coordination. We begin with comprehensive hazard analysis including chemical exposure assessment and safety requirement review. Installation typically occurs in phases to maintain operations, with most facilities completed within 3-7 days. All personnel are OSHA-certified with oilfield safety training. We coordinate closely with safety managers and operations teams throughout the process, ensuring minimal disruption to critical business operations while meeting all industry safety standards.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with major oilfield service companies in Odessa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we have extensive experience serving major oilfield service companies including Halliburton, Baker Hughes, Schlumberger, and hundreds of local service providers. Our team understands the unique requirements of oilfield operations including safety protocols, operational continuity needs, and the demanding environmental conditions. We're familiar with corporate safety standards, insurance requirements, and the high-performance expectations of the oil and gas industry. Our installations have protected facilities throughout the core Permian Basin for over a decade.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranties do you offer for industrial applications in harsh environments?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide comprehensive warranty protection including manufacturer material warranties ranging from 20-30 years and our own 15-year workmanship warranty for industrial applications. Given Odessa's demanding conditions, we offer enhanced warranty coverage specifically addressing chemical exposure, extreme heat, dust exposure, and industrial operations. All warranties include detailed maintenance protocols and emergency service provisions. For critical facilities, we also provide extended service agreements with priority response and preventive maintenance programs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to emergency repairs for operational facilities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We maintain 24/7 emergency response for critical oilfield operations, understanding that downtime can cost thousands per hour. Our emergency team can be on-site within 2-4 hours for priority facilities, providing temporary repairs and leak mitigation. We stock industrial-grade repair materials specifically for harsh environments and maintain relationships with suppliers for rapid material access. Our goal is to restore operational integrity immediately while planning permanent solutions that ensure long-term performance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What maintenance is required for TPO in Odessa's dusty, chemical environment?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO requires minimal maintenance even in Odessa's challenging environment. We recommend quarterly inspections for industrial facilities, focusing on chemical exposure areas, equipment penetrations, and drainage systems after dust storms. Key maintenance includes drain cleaning after major dust events, seam inspection around equipment, and prompt repair of any physical damage. The smooth TPO surface makes cleaning easy when needed. Most routine maintenance can be performed by facility personnel with our training, though professional inspections ensure optimal performance and warranty compliance.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Odessa Service Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Odessa Metro</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Odessa</li>
                  <li>• UTPB Campus</li>
                  <li>• Medical District</li>
                  <li>• Industrial Corridor</li>
                  <li>• Oilfield Service Zone</li>
                  <li>• East Odessa</li>
                  <li>• West Odessa</li>
                  <li>• Music City Mall Area</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Ector County</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Goldsmith</li>
                  <li>• Notrees</li>
                  <li>• Penwell</li>
                  <li>• Gardendale</li>
                  <li>• Faudree</li>
                  <li>• West Odessa</li>
                  <li>• Crane County Line</li>
                  <li>• Andrews County Line</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Permian Basin</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Midland</li>
                  <li>• Andrews</li>
                  <li>• Crane</li>
                  <li>• Kermit</li>
                  <li>• Monahans</li>
                  <li>• Pecos</li>
                  <li>• Fort Stockton</li>
                  <li>• McCamey</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving the Oil Patch from Our Amarillo Office</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
            <div className="text-center mt-6">
              <p className="text-lg text-gray-700 mb-2">📍 2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-lg text-gray-700 mb-2">📞 (806) 622-6041 | ✉️ info@5starroofingpros.com</p>
              <p className="text-md text-gray-600">Proudly serving the oil patch capital and entire Permian Basin region</p>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Odessa industrial and commercial properties. Expert TPO roofing installation with oil patch durability, comprehensive warranties, and West Texas expertise you can trust.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}