import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Perryton TX | 5 Star Roofing',
  description: "Professional commercial roofing in Perryton TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingPerrytonPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Perryton", url: "/commercial-roofing-perryton/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Perryton TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Roofing Services",
            "name": "Commercial Roofing in Perryton",
            "description": "Professional commercial roofing services in Perryton, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Perryton",
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
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Perryton?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Perryton vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Perryton?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Perryton."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Perryton</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Perryton. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Perryton's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Perryton and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Since 2014, we've served Perryton with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Perryton's Agricultural and Energy Sector Challenges</h3>
                <p className="text-gray-700 mb-4">Located in Ochiltree County, Perryton serves as a vital agricultural and energy hub in the Texas Panhandle. The city's commercial roofing needs span diverse industries from grain elevators and processing facilities to oil and gas operations, each requiring specialized roofing solutions designed for specific operational demands.</p>
                <p className="text-gray-700 mb-4">Perryton's semi-arid climate brings extreme temperature fluctuations, with summer highs reaching 95°F+ and winter lows dropping to 15°F. Annual precipitation averages 20 inches, but severe weather events including hailstorms, tornadoes, and high winds create significant challenges for commercial roofing systems throughout the region.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Commercial Property Types in Perryton</h3>
                <p className="text-gray-700 mb-4">Perryton's diverse commercial landscape includes agricultural processing plants, grain storage facilities, manufacturing operations, retail centers, and professional services buildings. Each property type presents unique roofing challenges requiring customized solutions for optimal performance and longevity.</p>
                <p className="text-gray-700 mb-4">The region's position near major natural gas formations means many commercial properties support energy sector operations with specialized requirements for chemical resistance, fire ratings, and heavy equipment accommodation that traditional roofing systems may not adequately address.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Solutions for Perryton Industries</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Facilities</h3>
                <p className="text-gray-700 mb-4">Specialized roofing systems for grain elevators, processing plants, and storage facilities requiring corrosion resistance, superior drainage, and accommodation for heavy equipment loads.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Chemical and fertilizer resistant materials</li>
                  <li>• Enhanced structural support systems</li>
                  <li>• Specialized ventilation integration</li>
                  <li>• Dust and debris resistance</li>
                  <li>• Fire-resistant roofing solutions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Energy Sector Facilities</h3>
                <p className="text-gray-700 mb-4">High-performance roofing for oil and gas operations requiring superior chemical resistance, Class A fire ratings, and specialized equipment penetration sealing.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hydrocarbon resistant membrane systems</li>
                  <li>• Class A fire-rated assemblies</li>
                  <li>• Specialized equipment mounting systems</li>
                  <li>• Enhanced leak detection capabilities</li>
                  <li>• Emergency repair accessibility</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Retail and Office Buildings</h3>
                <p className="text-gray-700 mb-4">Energy-efficient roofing solutions for Perryton's commercial district focusing on cost savings, aesthetic appeal, and minimal business disruption during installation.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Cool roofing technology for energy savings</li>
                  <li>• Aesthetically pleasing design options</li>
                  <li>• Quiet installation techniques</li>
                  <li>• Enhanced insulation systems</li>
                  <li>• Sustainable material options</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Weather Resilience for Texas Panhandle Conditions</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Perryton's position in the Texas Panhandle exposes commercial properties to severe weather events requiring specialized roofing systems designed for extreme conditions.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Hail and Storm Protection</h3>
                  <p className="text-gray-700 mb-4">Advanced impact-resistant roofing systems designed to withstand Class 4 hail events common in the Texas Panhandle. Multi-layer protection systems prevent damage from hailstones up to 2 inches in diameter.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Class 4 impact-resistant materials</li>
                    <li>• UL 2218 tested and certified systems</li>
                    <li>• Enhanced membrane thickness options</li>
                    <li>• Reinforced seaming technologies</li>
                    <li>• Rapid repair protocols</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Wind Uplift Resistance</h3>
                  <p className="text-gray-700 mb-4">High wind-rated roofing systems engineered for Texas Panhandle wind conditions, with uplift ratings up to 165 mph to protect against severe storm events and seasonal high winds.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• FM Global approved wind ratings</li>
                    <li>• Enhanced mechanical fastening systems</li>
                    <li>• Perimeter edge securement</li>
                    <li>• Uplift testing and verification</li>
                    <li>• Emergency wind damage response</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Energy Efficiency Solutions for Perryton Businesses</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Reduce operating costs and improve building performance with advanced commercial roofing technologies designed for Texas climate challenges.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Cool Roofing Technology</h3>
                  <p className="text-gray-700 mb-4">Reflective roofing systems reduce heat absorption and lower internal temperatures, providing significant energy savings during Perryton's hot summers while improving interior comfort conditions for employees and customers.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Solar reflectance index up to 110</li>
                    <li>• 20-40% reduction in cooling costs</li>
                    <li>• Extended HVAC system lifespan</li>
                    <li>• Improved interior comfort</li>
                    <li>• Environmental sustainability benefits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Advanced Insulation Systems</h3>
                  <p className="text-gray-700 mb-4">High-performance insulation solutions create thermal barriers that maintain consistent interior temperatures, reducing energy consumption during both extreme summer heat and winter cold periods.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Continuous insulation systems</li>
                    <li>• Thermal bridge elimination</li>
                    <li>• Vapor barrier technologies</li>
                    <li>• Air sealing integration</li>
                    <li>• Energy code compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Project Management and Installation Excellence</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Our comprehensive project management approach ensures successful commercial roofing installations with minimal disruption to Perryton business operations.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Detailed Planning Phase</h3>
                  <p className="text-gray-600">Comprehensive site assessment, structural analysis, and coordination with facility operations to minimize business disruption during installation.</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Expert Installation</h3>
                  <p className="text-gray-600">Certified installation teams follow manufacturer specifications and industry best practices while maintaining safety protocols and quality standards.</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Quality Assurance</h3>
                  <p className="text-gray-600">Comprehensive inspections, performance testing, and documentation to ensure system integrity and warranty compliance.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Perryton?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Perryton vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. Agricultural and industrial facilities may require specialized systems affecting pricing. We provide free estimates with detailed breakdowns and transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Perryton?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned shutdowns to minimize business disruption in Perryton. This is particularly important for agricultural processing facilities and energy operations that require continuous uptime.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What commercial roofing systems work best in Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate. For Perryton's specific conditions, we recommend systems with enhanced hail resistance and wind uplift ratings due to severe weather exposure.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle agricultural facility roofing requirements?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Agricultural facilities in Perryton require specialized solutions including chemical resistance for fertilizers and pesticides, enhanced structural support for equipment loads, and specialized ventilation systems. We design custom solutions for each facility's specific operational requirements.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranties do you provide for energy sector facilities?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Energy sector facilities receive comprehensive warranty coverage including material warranties (15-30+ years), workmanship warranties (5-10 years), and specialized performance warranties for chemical resistance and fire ratings. All warranties include regular maintenance requirements.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How quickly can you respond to storm damage in Perryton?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We provide 24/7 emergency response for storm damage throughout Perryton and surrounding areas. Our emergency teams can typically respond within 2-4 hours for critical leaks and same-day service for urgent repairs to minimize business disruption.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you provide preventive maintenance programs?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we offer comprehensive maintenance programs for Perryton commercial properties including bi-annual inspections, preventive repairs, drainage system maintenance, and detailed reporting. Programs are customized based on roofing system type and facility requirements.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Safety and Environmental Compliance</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Comprehensive safety protocols and environmental compliance standards ensure responsible commercial roofing operations in Perryton.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">OSHA Safety Standards</h3>
                  <p className="text-gray-700 mb-4">All crew members receive comprehensive safety training with regular updates on OSHA standards. We maintain strict safety protocols including fall protection, hazard communication, and emergency response procedures.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• OSHA 10 and 30-hour certified personnel</li>
                    <li>• Daily safety meetings and hazard assessments</li>
                    <li>• Comprehensive fall protection systems</li>
                    <li>• Regular safety equipment inspections</li>
                    <li>• Emergency response protocols</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Environmental Responsibility</h3>
                  <p className="text-gray-700 mb-4">We implement sustainable practices throughout our operations including proper material disposal, waste minimization, and environmentally responsible product selection for Perryton projects.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Proper material recycling and disposal</li>
                    <li>• Sustainable roofing material options</li>
                    <li>• Waste minimization practices</li>
                    <li>• Environmental compliance monitoring</li>
                    <li>• Energy efficiency optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose 5 Star Roofing for Your Perryton Commercial Project</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Texas Panhandle Expertise</h3>
                      <p className="text-gray-700">Deep understanding of Perryton's unique climate challenges, agricultural industry requirements, and energy sector specifications gained through years of local experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Industry-Specific Solutions</h3>
                      <p className="text-gray-700">Specialized roofing systems designed for agricultural processing, energy operations, and commercial facilities with custom solutions for unique operational requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">24/7 Emergency Service</h3>
                      <p className="text-gray-700">Round-the-clock emergency response for critical repairs and storm damage, ensuring minimal disruption to Perryton business operations.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Comprehensive Project Management</h3>
                      <p className="text-gray-700">Complete project oversight from initial consultation through warranty service, including permits, inspections, and coordination with facility operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Advanced Technology</h3>
                      <p className="text-gray-700">Latest installation techniques, energy-efficient materials, and innovative roofing systems designed for optimal performance in challenging Texas Panhandle conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Proven Results</h3>
                      <p className="text-gray-700">Hundreds of successful commercial installations throughout the Texas Panhandle with consistent 5-star ratings and long-term customer relationships.</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Perryton property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}