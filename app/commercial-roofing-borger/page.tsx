import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Borger TX | 5 Star Roofing',
  description: "Professional commercial roofing in Borger TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingBorgerPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Borger", url: "/commercial-roofing-borger/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Borger TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Roofing Services",
            "name": "Commercial Roofing in Borger",
            "description": "Professional commercial roofing services in Borger, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Borger",
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
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Borger?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Borger vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Borger?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Borger."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Borger</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Borger. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Borger's Premier Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Borger and surrounding areas. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings. Our expertise extends to industrial-grade applications serving Borger's petrochemical sector.</p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">Since 2014, we've served Borger with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Borger's proximity to Phillips 66 Borger Refinery creates unique commercial roofing challenges requiring specialized materials and installation techniques. Our certified technicians understand chemical-resistant roofing requirements, industrial safety protocols, and enhanced durability specifications for petrochemical environments.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Roofing for Borger's Industrial Economy
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's identity centers around the Phillips 66 Borger Refinery, one of Texas's largest petroleum processing facilities. This industrial foundation creates unique commercial roofing challenges requiring specialized expertise in chemical-resistant materials, thermal cycling resistance, and compliance with stringent safety regulations. Our commercial roofing solutions protect critical infrastructure supporting the refinery and associated petrochemical operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The refinery complex and surrounding industrial facilities experience constant exposure to chemical vapors, temperature extremes, and corrosive atmospheres that accelerate normal roof deterioration. Commercial buildings within a five-mile radius of the refinery require enhanced material specifications and more frequent maintenance cycles. We've developed specialized installation protocols that extend roof life by 40-60% compared to standard commercial applications.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Beyond the refinery, Borger's commercial sector includes agricultural services, railroad operations, and retail businesses along Highway 207 and Highway 136. Each sector presents distinct roofing requirements. Agricultural facilities need systems resistant to ammonia and other agricultural chemicals, while retail buildings require energy-efficient solutions that withstand High Plains wind and hail exposure.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Chemical-Resistant Roofing Systems for Industrial Applications</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Phillips 66 Borger Refinery operations release various airborne chemicals that attack conventional roofing materials. Standard asphalt-based systems deteriorate rapidly in this environment, requiring specialized membrane systems designed for chemical exposure. We install TPO and PVC membrane systems with enhanced chemical resistance, using welded seam construction that eliminates adhesive-vulnerable joints.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Metal roofing systems for industrial applications require upgraded coatings specifically formulated for petrochemical environments. Standard painted metal roofing fails within 5-7 years due to chemical exposure, while our recommended systems use fluoropolymer coatings designed for 25+ year performance in aggressive atmospheres. These specialized coatings resist acid rain, sulfur compounds, and hydrocarbon vapors common in refinery environments.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Insulation systems under chemical-resistant membranes require careful material selection to prevent chemical infiltration and thermal bridging. We use closed-cell foam insulation with vapor barriers that prevent chemical penetration while maintaining thermal efficiency. This approach proves especially important for temperature-controlled storage facilities and process buildings where thermal consistency affects operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Safety Protocols for Refinery-Adjacent Commercial Projects
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial roofing projects near the Phillips 66 facility require extensive safety protocols and specialized equipment to prevent ignition sources and chemical exposure. Our crews complete refinery-specific safety training including confined space awareness, chemical hazard recognition, and emergency evacuation procedures. All equipment undergoes inspection for spark-prevention compliance before entering refinery-adjacent areas.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Hot work permits and fire watch procedures are mandatory for any heat-based installation techniques within refinery influence zones. We coordinate extensively with refinery safety personnel and maintain constant communication during installation activities. Emergency response equipment and chemical exposure protocols are standard requirements for all crew members working in these environments.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Air quality monitoring during roofing installations ensures worker safety and project compliance. Continuous monitoring for hydrogen sulfide, benzene, and other petrochemical compounds determines safe working conditions. When air quality exceeds safety thresholds, work stops until conditions improve, ensuring both worker safety and project integrity.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Thermal Cycling and Temperature-Resistant Solutions</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's continental climate creates extreme temperature cycles, with summer highs exceeding 105°F and winter lows dropping below 10°F. Refinery operations add significant thermal loading, with roof surface temperatures often reaching 140-160°F on industrial buildings. These conditions demand roofing systems specifically engineered for thermal expansion and contraction stresses.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Membrane roofing systems require enhanced flexibility to accommodate thermal movement without cracking or tearing. We install TPO membranes with increased thickness (80-mil versus standard 60-mil) and use mechanically-attached systems that allow controlled thermal movement. Expansion joints at critical locations prevent stress concentrations that cause premature failures.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Metal roofing installations use floating clip systems that accommodate thermal expansion while maintaining weather-tight performance. Standing seam systems with structural thermal breaks prevent heat transfer into building interiors while allowing metal panels to expand and contract safely. These systems prove especially important for process buildings where internal temperature control affects operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Energy Efficiency and Environmental Compliance for Borger Commercial Buildings
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's commercial buildings face unique energy challenges due to extreme weather conditions and proximity to industrial heat sources. Cool roofing technologies become essential for reducing HVAC loads and maintaining comfortable interior conditions. We install high-reflectance membrane systems that reduce cooling costs by 20-30% while improving interior comfort.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Solar reflectance indices (SRI) of 82 or higher are standard for our commercial membrane installations in Borger. These systems reflect infrared radiation while maintaining durability in the area's chemical exposure environment. White TPO and PVC membranes provide optimal energy efficiency while resisting chemical degradation from refinery emissions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Environmental compliance requires careful attention to material selection and waste management. Roofing materials containing volatile organic compounds (VOCs) may violate air quality regulations in industrial areas. We use low-VOC adhesives and solvents while implementing waste containment procedures that prevent chemical contamination of surrounding areas.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Maintenance Programs for Industrial Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial buildings in Borger's industrial environment require intensive maintenance programs to combat accelerated deterioration from chemical exposure and thermal cycling. Our maintenance contracts include quarterly inspections with chemical resistance testing, thermal imaging for heat loss detection, and preventive sealant renewal to maintain system integrity.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Predictive maintenance using infrared thermography identifies potential failure points before they compromise building operations. Thermal imaging reveals insulation defects, membrane delamination, and moisture intrusion that could lead to costly operational disruptions. Early detection prevents minor issues from becoming major system failures that could impact business operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency response capabilities are essential for commercial properties in Borger's industrial area. Chemical spills, thermal events, and severe weather can compromise roofing systems within hours. Our emergency response teams maintain equipment specifically designed for chemical-contaminated environments and coordinate with industrial emergency response protocols.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Roofing Solutions for Borger's Diverse Business Sectors
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              While the Phillips 66 refinery dominates Borger's economy, the community supports diverse commercial sectors requiring specialized roofing approaches. Agricultural businesses along Highway 207 need chemical-resistant systems that withstand fertilizer exposure and grain dust accumulation. Retail centers and restaurants require energy-efficient solutions that maintain comfortable environments while controlling operating costs.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Healthcare facilities including Hutchinson Regional Medical Center require specialized roofing systems that support critical life-safety equipment while maintaining sterile environments. Hospital and medical office roofing installations coordinate with infection control protocols and backup power systems. Emergency access routes and helicopter landing zones add complexity to healthcare facility roofing projects.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Educational facilities including Frank Phillips College and Borger High School need durable, cost-effective roofing solutions that accommodate large spans and provide energy efficiency. School roofing projects often coordinate with summer break schedules and require phased installations to maintain continuous operations during construction periods.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Transportation and logistics facilities serving the refinery and agricultural sectors require high-durability roofing systems that withstand heavy truck traffic vibrations and frequent loading operations. Warehouse and distribution center roofing must accommodate overhead crane operations while providing weather-tight protection for stored goods and equipment.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Professional Installation Teams and Project Management</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our commercial roofing teams serving Borger include certified professionals with specialized training in industrial environments, chemical safety protocols, and advanced installation techniques. Team leaders hold OSHA 30-hour certifications with additional training in confined space safety, fall protection systems, and emergency response procedures specific to petrochemical environments.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Project management for Borger commercial installations incorporates extensive pre-planning phases that address weather windows, production schedules, and safety coordination requirements. We maintain detailed communication protocols with facility managers, safety coordinators, and operations personnel to ensure seamless project execution without compromising business operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Quality control procedures for commercial projects include third-party inspections, thermal imaging verification, and comprehensive documentation packages that support warranty claims and insurance requirements. All installations include detailed as-built drawings, material certifications, and maintenance recommendations tailored to Borger's industrial environment.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Advanced Commercial Roofing Technologies</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Single-ply membrane systems represent the most advanced commercial roofing technology for Borger's challenging environment. TPO (Thermoplastic Polyolefin) membranes provide superior chemical resistance, thermal stability, and energy efficiency compared to traditional built-up roofing systems. Heat-welded seams create permanently fused joints that eliminate potential leak points common in adhesive-based systems.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Modified bitumen systems using APP (Atactic Polypropylene) or SBS (Styrene-Butadiene-Styrene) modifiers offer enhanced flexibility and chemical resistance for industrial applications. These systems accommodate thermal movement while providing superior puncture resistance for buildings subject to maintenance traffic and equipment installations. Self-adhering base sheets eliminate torch applications in sensitive environments.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Metal roofing systems using architectural standing seam panels provide 50+ year service life with minimal maintenance requirements. Concealed fastener systems eliminate penetration points that typically fail in chemical environments. Advanced coating systems including fluoropolymer finishes resist chemical attack while maintaining color stability and reflectivity throughout the system's service life.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Green roofing technologies and solar-ready installations are increasingly important for commercial properties seeking LEED certification and energy independence. Structural assessments determine load capacity for vegetative systems or photovoltaic installations. Specialized drainage systems and root barriers protect membrane integrity while supporting sustainable building objectives.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Regulatory Compliance and Code Requirements</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial roofing in Borger must comply with enhanced building codes and safety regulations due to the community's industrial classification. Fire-resistant materials and enhanced structural requirements apply to buildings within defined proximity zones to the refinery. We maintain current certification with all relevant regulatory bodies and ensure full compliance with industrial safety standards.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Environmental protection regulations affect material selection and installation procedures for commercial projects. Storm water management, chemical containment, and air quality protection require specialized construction practices. Our installation procedures incorporate environmental protection measures that exceed standard requirements while ensuring project completion efficiency.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Insurance requirements for commercial properties in Borger often specify enhanced wind resistance and fire protection beyond standard Texas requirements. We work closely with commercial insurance providers to ensure roofing installations meet or exceed policy requirements while providing optimal protection for business operations and property values.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Building permit processes in Hutchinson County require detailed engineering calculations and material specifications for commercial projects. Our design team prepares comprehensive permit packages that expedite approval processes while ensuring full code compliance. Coordination with local building officials ensures smooth inspections and timely project completion.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Emergency Roofing Services and Response Capabilities</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Borger's industrial environment requires immediate emergency response capabilities for roofing failures that could impact critical operations. Our emergency response teams maintain specialized equipment for chemical-contaminated environments and coordinate with industrial emergency response protocols established by major facilities including Phillips 66.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Severe weather events including hailstorms, tornadoes, and high winds can cause catastrophic damage to commercial roofing systems. Emergency tarping and temporary weather protection services prevent secondary damage while permanent repairs are planned and executed. Rapid response times minimize business interruption and protect valuable interior assets.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              24/7 emergency hotline services ensure immediate contact with qualified technicians who understand Borger's unique industrial environment. Emergency response protocols include safety assessments, temporary protection installation, and coordination with insurance adjusters and facility managers to minimize disruption to critical operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Borger?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Borger vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Borger?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Borger.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Borger property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}