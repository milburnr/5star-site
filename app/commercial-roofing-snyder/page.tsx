import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Snyder TX | 5 Star Roofing',
  description: "Professional commercial roofing in Snyder TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingSnyderPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Snyder", url: "/commercial-roofing-snyder/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Snyder TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Snyder?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Snyder vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Snyder?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Snyder."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Snyder</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Snyder. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Snyder's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Snyder and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Since 2014, we've served Snyder with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Snyder's Diverse Commercial Economy</h3>
                <p className="text-gray-700 mb-4">Located in Scurry County, Snyder serves as a regional hub for agriculture, energy production, and manufacturing operations. The city's diverse commercial landscape includes cotton processing facilities, oil refining operations, wind energy projects, and retail establishments, each requiring specialized roofing solutions tailored to specific operational demands.</p>
                <p className="text-gray-700 mb-4">Snyder's strategic location in West Texas places commercial properties at the intersection of major weather systems, creating unique challenges for roofing systems. Annual precipitation averaging 20 inches, combined with extreme temperature variations and severe storm activity, demands robust roofing solutions designed for harsh environmental conditions.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Climate Considerations for Commercial Properties</h3>
                <p className="text-gray-700 mb-4">Snyder's semi-arid climate features intense summer heat exceeding 100°F and winter lows dropping below 25°F, creating significant thermal stress on commercial roofing systems. The region's exposure to severe thunderstorms, hail events, and high winds requires enhanced protection strategies beyond standard roofing applications.</p>
                <p className="text-gray-700 mb-4">West Texas wind patterns regularly exceed 20 mph throughout the year, with severe weather events producing sustained winds over 60 mph. This consistent wind exposure, combined with UV radiation and thermal cycling, necessitates specialized roofing materials and installation techniques for optimal long-term performance.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Industry-Specific Commercial Roofing Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Processing Facilities</h3>
                <p className="text-gray-700 mb-4">Specialized roofing systems for cotton gins, grain storage, and processing facilities requiring superior moisture control, dust resistance, and accommodation for heavy equipment loads and conveyor systems.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Moisture and humidity control systems</li>
                  <li>• Dust and debris resistant materials</li>
                  <li>• Enhanced structural load capacity</li>
                  <li>• Specialized ventilation integration</li>
                  <li>• Fire-resistant assembly options</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Energy and Manufacturing</h3>
                <p className="text-gray-700 mb-4">High-performance roofing for oil and gas operations, wind energy facilities, and manufacturing plants requiring chemical resistance, specialized equipment mounting, and enhanced safety features.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Chemical and hydrocarbon resistant systems</li>
                  <li>• Class A fire-rated assemblies</li>
                  <li>• Equipment mounting and penetration sealing</li>
                  <li>• Enhanced lightning protection</li>
                  <li>• Emergency access and safety features</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Commercial and Healthcare</h3>
                <p className="text-gray-700 mb-4">Energy-efficient roofing solutions for retail centers, office buildings, and healthcare facilities focusing on interior comfort, noise reduction, and operational continuity during installation.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Energy-efficient cool roofing systems</li>
                  <li>• Superior insulation and air sealing</li>
                  <li>• Noise reduction technologies</li>
                  <li>• Non-disruptive installation methods</li>
                  <li>• Aesthetic design integration</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Advanced Roofing Technologies for West Texas Conditions</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Cutting-edge roofing systems designed to withstand Snyder's challenging climate while delivering superior energy performance and longevity.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">TPO and PVC Membrane Systems</h3>
                  <p className="text-gray-700 mb-4">Single-ply membrane roofing systems offering exceptional performance in West Texas conditions with superior heat reflection, chemical resistance, and welded seam integrity for long-term waterproof protection.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Heat-welded seam technology for superior waterproofing</li>
                    <li>• Solar reflective surfaces reducing cooling costs up to 40%</li>
                    <li>• Class A fire resistance and impact ratings</li>
                    <li>• Chemical and UV degradation resistance</li>
                    <li>• Manufacturer warranties up to 30 years</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Metal Roofing Systems</h3>
                  <p className="text-gray-700 mb-4">Standing seam and architectural metal roofing providing unmatched durability and longevity for Snyder commercial properties with advanced coating systems for enhanced performance in extreme conditions.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 50+ year service life with proper maintenance</li>
                    <li>• Wind uplift resistance up to 165 mph</li>
                    <li>• Class 4 hail impact rating available</li>
                    <li>• Energy-efficient cool color options</li>
                    <li>• Recyclable and sustainable material choice</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Energy Efficiency and Cost Savings</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Maximize energy savings and reduce operational costs with advanced commercial roofing technologies designed for Texas climate conditions.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Cool Roofing Technology</h3>
                  <p className="text-gray-700 mb-4">Reflective roofing systems significantly reduce heat absorption and lower building temperatures, providing substantial energy savings during Snyder's intense summer months while improving interior comfort for employees and customers.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Solar reflectance index (SRI) ratings up to 115</li>
                    <li>• 25-45% reduction in cooling energy consumption</li>
                    <li>• Reduced heat island effect for urban areas</li>
                    <li>• Extended HVAC equipment lifespan</li>
                    <li>• Potential utility rebates and tax incentives</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insulation and Air Barrier Systems</h3>
                  <p className="text-gray-700 mb-4">Advanced insulation technologies and air sealing systems create comprehensive thermal barriers that maintain consistent interior temperatures year-round, reducing energy consumption and improving building performance.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Continuous insulation systems eliminating thermal bridging</li>
                    <li>• Air barrier integration for enhanced performance</li>
                    <li>• Moisture management and vapor control</li>
                    <li>• R-values optimized for Texas climate zones</li>
                    <li>• ENERGY STAR certification compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Comprehensive Project Management and Quality Assurance</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Our systematic approach ensures successful commercial roofing projects with minimal disruption to Snyder business operations.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Detailed Assessment</h3>
                  <p className="text-gray-600">Comprehensive building evaluation including structural analysis, moisture surveys, and code compliance review to ensure optimal system design and performance.</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Professional Installation</h3>
                  <p className="text-gray-600">Certified installation teams following manufacturer specifications and industry best practices while maintaining strict safety protocols and quality control standards.</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Quality Verification</h3>
                  <p className="text-gray-600">Comprehensive final inspections, performance testing, and complete documentation to ensure system integrity and warranty compliance.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Snyder vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. Industrial and agricultural facilities may require specialized systems affecting pricing. We provide detailed estimates with transparent breakdowns and no hidden costs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Snyder?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned shutdowns to minimize business disruption in Snyder. This is especially important for manufacturing facilities, processing plants, and retail operations that require continuous operation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What commercial roofing systems work best in Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate. For Snyder's specific conditions, we recommend enhanced wind resistance and hail protection due to severe weather exposure.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle agricultural facility requirements?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Agricultural facilities in Snyder require specialized solutions including moisture control for grain storage, chemical resistance for fertilizers, enhanced ventilation systems, and accommodation for heavy equipment. We design custom solutions for each facility's specific operational needs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What energy savings can I expect from a new commercial roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Cool roofing systems in Snyder typically reduce cooling costs by 25-45% during summer months. Combined with enhanced insulation, total energy savings often range from 15-30% annually. We provide energy performance estimates based on your specific building and usage patterns.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide emergency storm response?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide 24/7 emergency response for storm damage, leak repairs, and urgent roofing issues throughout Snyder and surrounding areas. Our emergency teams typically respond within 2-4 hours for critical situations to minimize business disruption and property damage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What maintenance programs do you offer?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We offer comprehensive maintenance programs including bi-annual inspections, preventive repairs, drainage system maintenance, and detailed condition reporting. Programs are customized based on roofing system type, building use, and local environmental conditions.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Safety and Environmental Standards</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Comprehensive safety protocols and environmental responsibility guide all commercial roofing operations in Snyder.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Comprehensive Safety Program</h3>
                  <p className="text-gray-700 mb-4">All team members receive extensive safety training with regular updates on OSHA standards and industry best practices. We maintain strict safety protocols including fall protection, hazard recognition, and emergency response procedures.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• OSHA 10 and 30-hour certified personnel</li>
                    <li>• Daily safety briefings and job hazard analysis</li>
                    <li>• Comprehensive personal protective equipment</li>
                    <li>• Regular safety audits and equipment inspections</li>
                    <li>• Emergency response and first aid training</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Environmental Responsibility</h3>
                  <p className="text-gray-700 mb-4">We implement sustainable practices throughout our operations including proper waste management, material recycling, and environmentally responsible product selection for Snyder commercial projects.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive material recycling programs</li>
                    <li>• Sustainable product selection and specification</li>
                    <li>• Waste minimization and proper disposal practices</li>
                    <li>• Environmental impact assessment and mitigation</li>
                    <li>• Energy efficiency optimization and certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose 5 Star Roofing for Your Snyder Commercial Project</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">West Texas Expertise</h3>
                      <p className="text-gray-700">Deep understanding of Snyder's climate challenges, local building requirements, and industry-specific needs gained through extensive regional experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Proven Performance</h3>
                      <p className="text-gray-700">Hundreds of successful commercial roofing installations throughout West Texas with consistent 5-star customer reviews and long-term performance records.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Advanced Technology</h3>
                      <p className="text-gray-700">Latest installation techniques, energy-efficient materials, and innovative roofing systems designed for optimal performance in challenging Texas conditions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Complete Service</h3>
                      <p className="text-gray-700">Comprehensive project management from initial consultation through long-term warranty service, including permits, inspections, and insurance coordination.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Emergency Response</h3>
                      <p className="text-gray-700">24/7 emergency service for storm damage, leak repairs, and urgent roofing issues affecting Snyder commercial operations and property protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Competitive Value</h3>
                      <p className="text-gray-700">Transparent pricing, detailed estimates, and competitive rates backed by superior materials, expert installation, and comprehensive warranty protection.</p>
                    </div>
                  </div>
                </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Snyder Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Snyder property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}