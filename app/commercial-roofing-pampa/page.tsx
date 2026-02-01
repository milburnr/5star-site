import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Pampa TX | 5 Star Roofing',
  description: "Professional commercial roofing in Pampa TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingPampaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Pampa", url: "/commercial-roofing-pampa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Pampa TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Pampa vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Pampa?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Pampa."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Pampa</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Pampa. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Pampa's Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Pampa and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings.</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Since 2014, we've served Pampa with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Understanding Pampa's Unique Climate Challenges</h3>
                <p className="text-gray-700 mb-4">Pampa, located in Gray County in the Texas Panhandle, experiences a semi-arid climate with extreme temperature variations and severe weather events that present unique challenges for commercial roofing systems. Average annual rainfall of 21 inches, combined with intense summer heat reaching 100°F+ and winter lows dropping to 20°F, creates thermal expansion and contraction cycles that stress commercial roofing materials.</p>
                <p className="text-gray-700 mb-4">The region's position in "Hail Alley" means commercial properties face significant hail damage risks, particularly during spring and early summer storm seasons. Wind speeds regularly exceed 25 mph, with severe storms producing gusts over 70 mph. These conditions require specialized roofing systems designed for the unique Texas Panhandle environment.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Pampa's Commercial Landscape</h3>
                <p className="text-gray-700 mb-4">As a historic oil and gas hub, Pampa hosts diverse commercial and industrial facilities requiring specialized roofing solutions. From agricultural processing facilities and manufacturing plants to retail centers and office buildings, each structure demands roofing systems tailored to specific operational requirements.</p>
                <p className="text-gray-700 mb-4">The city's economic diversity, including healthcare facilities, educational institutions, and energy sector operations, means our commercial roofing expertise spans multiple industries with varying requirements for durability, energy efficiency, and specialized installations.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Systems for Pampa Properties</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">TPO Roofing Systems</h3>
                <p className="text-gray-700 mb-4">Thermoplastic Polyolefin (TPO) roofing offers exceptional performance for Pampa's climate with superior heat reflection, reducing cooling costs by up to 30%. TPO's welded seams provide superior water protection against severe weather events.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Energy Star certified options available</li>
                  <li>• 15-20 year manufacturer warranties</li>
                  <li>• Excellent hail impact resistance</li>
                  <li>• Chemical and UV resistant</li>
                  <li>• Cost-effective installation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Metal Roofing Systems</h3>
                <p className="text-gray-700 mb-4">Standing seam metal roofing provides unmatched durability for Pampa commercial properties with 50+ year lifespans. Advanced coating systems offer superior corrosion resistance and energy efficiency benefits crucial for Texas climate conditions.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Wind resistance up to 140 mph</li>
                  <li>• Class 4 hail impact rating available</li>
                  <li>• Fire resistant (Class A rating)</li>
                  <li>• Recyclable and sustainable</li>
                  <li>• Low maintenance requirements</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 mb-4">Ethylene Propylene Diene Monomer (EPDM) rubber roofing delivers reliable performance and cost-effectiveness for Pampa commercial applications. Exceptional temperature resistance and proven 30+ year track record.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Superior temperature flexibility</li>
                  <li>• Excellent weather resistance</li>
                  <li>• Cost-effective solution</li>
                  <li>• Easy maintenance and repair</li>
                  <li>• Proven long-term performance</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Specialized Services for Pampa Businesses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Industrial Facility Roofing</h3>
                  <p className="text-gray-700">Specialized roofing solutions for Pampa's industrial and manufacturing facilities, including chemical-resistant systems, high-temperature applications, and specialized drainage for large-format buildings.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Retail and Office Buildings</h3>
                  <p className="text-gray-700">Energy-efficient roofing systems designed for Pampa's commercial district, focusing on aesthetic appeal, energy savings, and minimal business disruption during installation.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Processing Facilities</h3>
                  <p className="text-gray-700">Specialized roofing for agricultural operations requiring chemical resistance, superior ventilation systems, and accommodation for heavy equipment and processing operations.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Healthcare and Educational Facilities</h3>
                  <p className="text-gray-700">Quiet installation techniques and specialized roofing systems for sensitive environments, ensuring continuous operations during roofing projects at schools and medical facilities.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Roof Repairs</h3>
                  <p className="text-gray-700">24/7 emergency response for storm damage, equipment penetration failures, and weather-related roofing emergencies throughout Pampa and surrounding areas.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Preventive Maintenance Programs</h3>
                  <p className="text-gray-700">Comprehensive maintenance programs designed to extend roof life, identify potential issues early, and maintain warranty compliance for Pampa commercial properties.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Energy Efficiency Solutions for Pampa Businesses</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Reduce energy costs and improve building performance with advanced commercial roofing technologies designed for Texas climate conditions.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Cool Roofing Technology</h3>
                  <p className="text-gray-700 mb-4">Cool roofing systems reflect solar energy and emit absorbed heat, reducing roof temperatures by up to 50°F compared to traditional roofing. This translates to significant energy savings for Pampa businesses, particularly during intense summer months.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Solar reflectance index (SRI) ratings up to 110</li>
                    <li>• Potential 20-30% reduction in cooling costs</li>
                    <li>• Improved indoor comfort conditions</li>
                    <li>• Extended HVAC system lifespan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Insulation and Air Sealing</h3>
                  <p className="text-gray-700 mb-4">Advanced insulation systems and air sealing technologies create thermal barriers that maintain consistent interior temperatures, reducing energy consumption and improving building performance year-round.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• High-performance polyiso insulation boards</li>
                    <li>• Continuous insulation systems</li>
                    <li>• Vapor barrier technologies</li>
                    <li>• Thermal bridging elimination</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Quality Assurance and Project Management</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Our comprehensive quality assurance program ensures every Pampa commercial roofing project meets the highest standards for workmanship and performance.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Pre-Installation Assessment</h3>
                  <p className="text-gray-600">Comprehensive structural analysis, moisture surveys, and building code compliance verification before project initiation.</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Installation Supervision</h3>
                  <p className="text-gray-600">Certified project managers oversee all installation phases, ensuring manufacturer specifications and industry best practices compliance.</p>
                </div>
                <div className="text-center">
                  <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-brown">Post-Installation Verification</h3>
                  <p className="text-gray-600">Comprehensive quality inspections, performance testing, and warranty documentation to ensure long-term system performance.</p>
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
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Pampa vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. Additional factors include insulation upgrades, structural modifications, and specialized equipment requirements. We provide free estimates with transparent pricing and detailed project breakdowns.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Pampa. Many retail and industrial facilities require off-hours work to maintain operations. We coordinate closely with facility managers to ensure minimal impact on daily operations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What commercial roofing systems work best in Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate. TPO and metal roofing with cool roofing technologies provide significant energy savings in Pampa's hot summers, while all three systems offer excellent hail and wind resistance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does a commercial roof replacement take in Pampa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Project duration depends on building size, roofing system complexity, and weather conditions. Typical timelines: Small commercial buildings (5,000-10,000 sq ft): 3-5 days. Medium facilities (10,000-25,000 sq ft): 1-2 weeks. Large industrial buildings (25,000+ sq ft): 2-4 weeks. We provide detailed project schedules and maintain open communication throughout the process.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle insurance claims for storm damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide comprehensive insurance claim assistance for Pampa commercial properties. Our certified inspectors document storm damage, prepare detailed reports, and work directly with insurance adjusters. We handle all communication with insurance companies and ensure claims are processed efficiently and fairly.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What warranties do you provide on commercial roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We offer comprehensive warranty coverage including manufacturer material warranties (10-30+ years depending on system), workmanship warranties (5-10 years), and optional extended warranty programs. All warranties are transferable and include regular maintenance requirements to ensure continued coverage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How do you handle permits and inspections?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">We handle all permitting and inspection requirements for commercial roofing projects in Pampa and Gray County. Our team coordinates with local building officials, schedules required inspections, and ensures all work meets current building codes and manufacturer specifications. Permit costs are included in project estimates.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can you work on occupied buildings?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we specialize in occupied building renovations with minimal disruption to business operations. We implement dust containment systems, noise reduction protocols, and coordinate work schedules with building occupants. Safety barriers and clear communication ensure occupied spaces remain functional during roofing projects.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Safety and Compliance Standards</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">Safety is our top priority on every Pampa commercial roofing project, with comprehensive safety protocols and compliance standards.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">OSHA Compliance</h3>
                  <p className="text-gray-700 mb-4">All crew members receive OSHA 10-hour safety training with annual updates. We maintain comprehensive safety equipment including fall protection systems, safety harnesses, and emergency response equipment on every job site.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• OSHA 10-hour certified crew members</li>
                    <li>• Daily safety briefings and hazard assessments</li>
                    <li>• Comprehensive fall protection systems</li>
                    <li>• Regular safety equipment inspections</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">Insurance and Licensing</h3>
                  <p className="text-gray-700 mb-4">Fully licensed, bonded, and insured commercial roofing contractor serving Pampa with comprehensive liability coverage and workers' compensation insurance protecting both our team and your property.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• $2 million general liability coverage</li>
                    <li>• Workers' compensation insurance</li>
                    <li>• Texas licensed roofing contractor</li>
                    <li>• Bonded and certified technicians</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose 5 Star Roofing for Your Pampa Commercial Project</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Local Expertise</h3>
                      <p className="text-gray-700">Deep understanding of Pampa's climate challenges, building codes, and commercial property requirements gained through years of local service.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Proven Track Record</h3>
                      <p className="text-gray-700">Hundreds of successful commercial roofing projects throughout the Texas Panhandle with consistent 5-star customer reviews and referrals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Advanced Technology</h3>
                      <p className="text-gray-700">Latest installation techniques, energy-efficient materials, and innovative roofing systems designed for optimal performance in Texas conditions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Comprehensive Service</h3>
                      <p className="text-gray-700">Complete project management from initial consultation through warranty service, including permits, inspections, and insurance coordination.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Emergency Response</h3>
                      <p className="text-gray-700">24/7 emergency service for storm damage, leak repairs, and urgent roofing issues affecting Pampa commercial operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-brown">Transparent Pricing</h3>
                      <p className="text-gray-700">Detailed estimates with clear pricing, no hidden costs, and competitive rates backed by quality materials and expert installation.</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Pampa property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}