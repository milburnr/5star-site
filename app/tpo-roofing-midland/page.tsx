import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/tpo-roofing-midland/' },
  title: "TPO Roofing Midland TX | Expert Service | Free Inspection",
  description: "Professional tpo roofing in Midland TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function TPORoofingMidlandPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "TPO Roofing", url: "/tpo-roofing/" },
        { name: "Midland", url: "/tpo-roofing-midland/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-midland/#localbusiness",
        "name": "5 Star Commercial Roofing - Midland TPO Roofing",
        "image": "https://5starroofingpros.com/images/TPO1.jpg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/tpo-roofing-midland/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Midland,_Texas", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional tpo roofing in Midland TX. Expert installation, warranties, and insurance assistance."
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Membrane Roofing Installation",
            "name": "TPO Roofing in Midland",
            "description": "Professional tpo roofing services in Midland, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Midland",
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
        "mainEntity": [{"@type":"Question","name":"What is TPO roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO (Thermoplastic Polyolefin) is a single-ply white membrane for flat/low-slope roofs. Energy Star rated, heat-welded seams, 15-25 year warranties."}},{"@type":"Question","name":"How much does TPO roofing cost in Midland?","acceptedAnswer":{"@type":"Answer","text":"TPO installation in Midland costs $4-$8 per square foot including materials and labor. Excellent value for energy efficiency and durability."}},{"@type":"Question","name":"Why choose TPO over other commercial roofing?","acceptedAnswer":{"@type":"Answer","text":"TPO reflects heat (lower cooling costs), resists hail/wind damage, heat-welded seams are watertight, and offers excellent cost-to-performance ratio."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-9-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">TPO Roofing in <span className="text-brand-gold-light">Midland</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Permian Basin's Energy Capital Roofing Experts</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional TPO roofing throughout Midland and the Permian Basin. Expert installation designed for industrial demands and West Texas extremes, comprehensive warranties, and . Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Midland's Premier Energy Industry Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional TPO roofing throughout Midland and the greater Permian Basin region. As the energy capital of America's most productive oil field, Midland demands roofing solutions that can withstand not only extreme West Texas weather but also the unique challenges of industrial environments, from chemical exposure to heavy equipment loads.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 2014, we've served Midland's energy sector with expert TPO installations engineered for industrial demands. Our team understands the specific requirements of petroleum facilities, corporate headquarters, processing plants, and the high-rise office towers that house the world's leading energy companies. We handle complex projects with the precision and reliability that Midland's energy industry demands.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gradient-to-br from-black/5 to-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🛢️ Industrial-Grade Performance</h3>
                <p className="text-gray-700 leading-relaxed">Midland's energy infrastructure requires roofing systems that can handle chemical exposure, heavy equipment loads, and the demanding operational environment of the Permian Basin. Our TPO systems feature enhanced chemical resistance and structural performance designed for the world's most productive oil field.</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🏢 Corporate Headquarters Excellence</h3>
                <p className="text-gray-700 leading-relaxed">From Fortune 500 energy giants to innovative technology companies, Midland's corporate district demands premium roofing solutions. Our TPO installations provide the reliability, aesthetics, and energy efficiency that reflect the quality standards of America's energy capital.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">TPO Roofing Engineered for Midland's Demands</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">🌡️ Extreme Heat Management</h3>
                <p className="text-gray-700 mb-4">Midland's desert climate with summer temperatures regularly exceeding 100°F creates intense thermal stress on commercial buildings. Our TPO systems feature the industry's most reflective membranes, reducing roof surface temperatures by up to 50°F and dramatically lowering cooling costs for energy-intensive facilities.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Solar reflectance up to 87%</li>
                  <li>• Thermal emittance ratings to 0.87</li>
                  <li>• Energy savings up to 40% on cooling</li>
                  <li>• Oncor utility rebate programs available</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">⚗️ Chemical Resistance</h3>
                <p className="text-gray-700 mb-4">The Permian Basin's industrial environment exposes roofing systems to various petroleum products, chemicals, and industrial emissions. Our TPO membranes feature enhanced chemical resistance formulations specifically designed to maintain integrity in hydrocarbon-rich environments.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hydrocarbon-resistant formulations</li>
                  <li>• ASTM chemical resistance testing</li>
                  <li>• Industrial-grade membrane thickness</li>
                  <li>• Long-term performance in oil field environments</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">💨 High-Wind Performance</h3>
                <p className="text-gray-700 mb-4">West Texas winds and occasional severe weather events demand superior wind resistance. Our TPO installations feature enhanced attachment systems designed to exceed Midland's wind load requirements while maintaining the flexibility needed for the region's significant temperature variations.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Wind uplift ratings to 150+ mph</li>
                  <li>• Enhanced perimeter securement details</li>
                  <li>• Factory Mutual global approved systems</li>
                  <li>• Proven performance in severe weather</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Midland Energy Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Energy Sector Facilities</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏢 Corporate Headquarters</h4>
                    <p className="text-gray-700">Serving Fortune 500 energy companies with premium TPO roofing that reflects their commitment to excellence and environmental stewardship.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🛢️ Processing Facilities</h4>
                    <p className="text-gray-700">Industrial-grade TPO systems designed for petroleum processing plants, refineries, and chemical facilities with enhanced chemical resistance.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏭 Equipment Buildings</h4>
                    <p className="text-gray-700">Durable roofing solutions for compressor stations, pump houses, control buildings, and other critical oil field infrastructure.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏗️ Support Services</h4>
                    <p className="text-gray-700">TPO roofing for oilfield service companies, equipment manufacturers, and the extensive support network that powers the Permian Basin.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Commercial & Municipal</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏦 Financial Centers</h4>
                    <p className="text-gray-700">Banks, investment firms, and financial institutions serving the energy capital with energy-efficient, premium roofing solutions.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏥 Healthcare Systems</h4>
                    <p className="text-gray-700">Midland Memorial Hospital and medical facilities requiring quiet, reliable roofing that meets healthcare industry standards.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🛒 Retail & Hospitality</h4>
                    <p className="text-gray-700">Shopping centers, restaurants, and hotels serving the energy industry workforce with cost-effective, durable TPO roofing.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold text-brand-gold mb-2">🏛️ Municipal Buildings</h4>
                    <p className="text-gray-700">City facilities, schools, and public buildings throughout Midland County with energy-efficient roofing that reduces operational costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Specialized TPO Installation for Energy Industry</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">1</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Hazard Assessment</h3>
                <p className="text-gray-700">Comprehensive evaluation of potential chemical exposure, equipment loads, operational requirements, and safety protocols specific to energy industry facilities.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">2</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Industrial Engineering</h3>
                <p className="text-gray-700">Custom system design incorporating chemical resistance requirements, heavy equipment loads, and specialized attachment methods for industrial environments.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">3</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Safety Compliance</h3>
                <p className="text-gray-700">Full compliance with OSHA requirements, energy industry safety protocols, and coordination with facility safety personnel throughout the installation process.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">4</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Premium Materials</h3>
                <p className="text-gray-700">Industrial-grade TPO membranes with enhanced chemical resistance, thicker gauges for durability, and specialized fastening systems for demanding applications.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">5</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Precision Installation</h3>
                <p className="text-gray-700">Expert installation by certified technicians experienced in industrial environments, using specialized equipment and techniques for energy industry facilities.</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-4">6</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Performance Validation</h3>
                <p className="text-gray-700">Rigorous testing and inspection protocols including chemical resistance verification, structural load testing, and comprehensive documentation for industrial applications.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Why Energy Companies Choose Our TPO Systems</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🏭 Industrial Durability</h3>
                <p className="text-gray-700 mb-4">Midland's energy facilities operate in challenging conditions. Our TPO systems are engineered for continuous industrial exposure with enhanced chemical resistance and structural performance.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">Performance Features:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Chemical-resistant membrane formulations</li>
                    <li>• Heavy equipment load capacity</li>
                    <li>• Extended service life in industrial environments</li>
                    <li>• Minimal maintenance requirements</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">💼 Corporate Standards</h3>
                <p className="text-gray-700 mb-4">Fortune 500 energy companies demand roofing solutions that meet the highest standards for performance, sustainability, and corporate responsibility.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">Corporate Benefits:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Energy Star certification for sustainability goals</li>
                    <li>• Comprehensive warranty protection</li>
                    <li>• Professional installation and documentation</li>
                    <li>• Reduced operational and maintenance costs</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">⚡ Energy Efficiency</h3>
                <p className="text-gray-700 mb-4">Energy companies understand the value of efficiency. Our TPO roofing can reduce cooling costs by up to 40%, providing significant operational savings for large industrial facilities.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">Efficiency Benefits:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Up to 40% reduction in cooling costs</li>
                    <li>• Utility rebate programs available</li>
                    <li>• LEED certification points</li>
                    <li>• Reduced carbon footprint</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">🛡️ Risk Management</h3>
                <p className="text-gray-700 mb-4">Energy operations require reliable infrastructure. Our TPO systems provide superior weather protection and fire resistance, reducing operational risks for critical facilities.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-brand-brown mb-2">Risk Reduction:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Superior weather resistance</li>
                    <li>• Fire-resistant membrane construction</li>
                    <li>• Comprehensive insurance coverage</li>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Why is TPO roofing ideal for Midland's energy industry facilities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO roofing offers the perfect combination of durability, chemical resistance, and energy efficiency that Midland's energy industry demands. Its white reflective surface dramatically reduces cooling costs in our desert climate - crucial for energy-intensive facilities. The membrane's chemical resistance protects against petroleum products and industrial emissions common in the Permian Basin. Additionally, TPO's flexibility handles the extreme temperature swings typical in West Texas while providing superior wind resistance for severe weather events.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What kind of energy savings can Midland businesses expect with TPO roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Midland commercial facilities typically see 30-45% reduction in cooling costs after TPO installation. With summer temperatures regularly exceeding 100°F, a typical 50,000 sq ft facility can save $15,000-$30,000 annually in energy costs. Corporate headquarters and data centers see even greater savings due to higher cooling loads. Our TPO systems qualify for Oncor utility rebates and federal tax credits, often providing immediate financial benefits. Most energy companies achieve full ROI within 4-6 years through energy savings alone.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How does TPO roofing handle chemical exposure from oil and gas operations?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Our TPO systems feature enhanced chemical-resistant formulations specifically designed for hydrocarbon-rich environments. The thermoplastic membrane resists petroleum products, industrial solvents, and chemical emissions without degrading. We use thicker membrane gauges (60-80 mil) for industrial applications and conduct chemical compatibility testing to ensure long-term performance. The welded seam construction creates a monolithic surface that prevents chemical infiltration, making TPO ideal for refineries, processing plants, and equipment buildings throughout the Permian Basin.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What's the installation process for large corporate facilities in Midland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Large corporate projects require specialized coordination and safety protocols. We begin with comprehensive site assessment including structural analysis, hazard evaluation, and operational impact planning. Installation typically occurs in phases to minimize business disruption, with most corporate buildings completed within 5-10 days depending on size. We coordinate closely with facility management, security teams, and safety personnel throughout the process. All work complies with corporate safety standards and OSHA requirements, with detailed documentation provided for corporate records and warranty compliance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work with major energy companies and their contractors?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we have extensive experience working with Fortune 500 energy companies, EPC contractors, and industrial facility managers throughout the Permian Basin. Our team understands corporate procurement processes, safety requirements, and the high-performance standards expected in the energy industry. We're familiar with prevailing wage requirements, union protocols, and specialized insurance requirements for energy facilities. Our project management approach ensures seamless coordination with general contractors, facility managers, and corporate oversight teams.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranties and guarantees do you provide for industrial applications?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide comprehensive warranty protection including manufacturer material warranties ranging from 20-30 years and our own 15-year workmanship warranty for industrial applications. Given the demanding conditions in energy facilities, we offer enhanced warranty coverage that specifically addresses chemical exposure, thermal cycling, and heavy equipment loads. All warranties include detailed maintenance protocols and are fully transferable. We also provide extended service agreements for critical facilities requiring ongoing maintenance and inspection services.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to storm damage repairs for energy facilities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We maintain prompt response capabilities for energy industry clients, understanding that operational downtime can be extremely costly. Our storm response team can be on-site within 2-4 hours for critical facilities, providing temporary repairs and leak mitigation while permanent solutions are planned. We stock storm repair materials specifically for TPO systems and maintain relationships with equipment suppliers to ensure rapid material availability. Our goal is to minimize operational impact while ensuring long-term roof integrity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What maintenance is required for TPO roofing in industrial environments?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO requires minimal maintenance even in industrial environments, but regular inspections are crucial for optimal performance. We recommend quarterly inspections for energy facilities, focusing on chemical exposure areas, equipment attachment points, and drainage systems. Key maintenance includes keeping drains clear, checking seam integrity around penetrations, and addressing any membrane damage promptly. Most maintenance can be performed by facility personnel with our training and guidance. We provide detailed maintenance protocols specific to each facility's operational environment and exposure conditions.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">Midland Service Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Midland Metro</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Midland</li>
                  <li>• Energy Corridor</li>
                  <li>• Medical District</li>
                  <li>• Airport Area</li>
                  <li>• Business District</li>
                  <li>• Industrial Corridor</li>
                  <li>• North Midland</li>
                  <li>• West Midland</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Permian Basin</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Stanton</li>
                  <li>• Big Spring</li>
                  <li>• Garden City</li>
                  <li>• Coahoma</li>
                  <li>• Forsan</li>
                  <li>• Sand Springs</li>
                  <li>• Greenwood</li>
                  <li>• Tarzan</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-gold mb-4">Extended Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Odessa</li>
                  <li>• Andrews</li>
                  <li>• Seminole</li>
                  <li>• Lamesa</li>
                  <li>• Colorado City</li>
                  <li>• Snyder</li>
                  <li>• Crane</li>
                  <li>• McCamey</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving the Permian Basin from Our Amarillo Office</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
            <div className="text-center mt-6">
              <p className="text-lg text-gray-700 mb-2">📍 2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-lg text-gray-700 mb-2">📞 (806) 622-6041 | ✉️ info@5starroofingpros.com</p>
              <p className="text-md text-gray-600">Proudly serving America's energy capital and the entire Permian Basin</p>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Midland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Midland commercial and industrial properties. Expert TPO roofing installation with industrial-grade performance, comprehensive warranties, and Permian Basin expertise you can trust.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}