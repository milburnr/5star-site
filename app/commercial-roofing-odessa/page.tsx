import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Odessa TX | 5 Star Roofing',
  description: "Professional commercial roofing in Odessa TX. TPO, EPDM, and metal roofing systems for businesses. 24/7 emergency service. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingOdessaPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Odessa", url: "/commercial-roofing-odessa/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/commercial-roofing-odessa/#localbusiness",
            "name": "5 Star Commercial Roofing - Odessa Commercial Roofing",
            "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2909 S Western St",
              "addressLocality": "Amarillo",
              "addressRegion": "TX",
              "postalCode": "79109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.1768,
              "longitude": -101.8590
            },
            "url": "https://5starroofingpros.com/commercial-roofing-odessa/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
              "name": "Odessa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "description": "Professional commercial roofing in Odessa TX. TPO, EPDM, and metal roofing systems for businesses. 24/7 emergency service. Free inspections. Call (806) 622-6041",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Roofing Services",
            "name": "Commercial Roofing in Odessa",
            "description": "Professional commercial roofing services in Odessa, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{"@type":"Question","name":"How much does commercial roof replacement cost in Odessa?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide free detailed estimates with transparent pricing and financing options for qualified businesses."}},{"@type":"Question","name":"Can you work after hours to minimize business disruption?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule commercial installations during evenings, weekends, or planned closure periods to minimize operational impact. Many Odessa businesses prefer after-hours work for retail locations or facilities that cannot shut down during business hours."}},{"@type":"Question","name":"What makes TPO roofing ideal for Odessa's commercial buildings?","acceptedAnswer":{"@type":"Answer","text":"TPO's white reflective membrane is Energy Star rated and dramatically reduces cooling costs. The heat-welded seams create watertight bonds that withstand high winds and hail. TPO offers excellent durability (15-25 year warranties) at a competitive price point."}}]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/CommercialRoofing.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Commercial Roofing in <span className="text-brand-gold-light">Odessa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Service for Texas Businesses
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert commercial roofing for Odessa businesses. TPO, EPDM, and metal roofing systems engineered for harsh weather. Minimize operational disruption with our after-hours installation. 24/7 emergency response available.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={10} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Odessa's Premier Commercial Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Expert commercial roofing for Odessa businesses serving the Permian Basin's energy sector. TPO, EPDM, and metal roofing systems engineered for harsh weather and industrial environments. Minimize operational disruption with our after-hours installation. 24/7 emergency response available for critical petroleum industry operations.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Since 2014, we've served Odessa with expert commercial roofing installations for oil and gas facilities, manufacturing operations, educational institutions, and healthcare facilities. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Odessa's role as a major petroleum industry center creates unique commercial roofing challenges requiring specialized expertise in chemical-resistant materials, large-span applications, and industrial safety protocols. Our certified teams understand the complex requirements of Permian Basin commercial operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Roofing for Odessa's Petroleum Industry
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa serves as a major hub for Permian Basin petroleum operations, housing drilling contractors, oilfield service companies, and industrial manufacturers serving the energy sector. These facilities require commercial roofing systems designed for exposure to petroleum byproducts, industrial chemicals, and the extreme weather conditions common in West Texas energy operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Major contractors including Nabors Industries, Patterson-UTI, and Unit Corporation operate large industrial facilities requiring specialized roofing systems that accommodate heavy equipment storage, chemical processing areas, and maintenance operations. These installations demand chemical-resistant materials and enhanced safety protocols for working near petroleum industry operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Oilfield equipment manufacturing and repair facilities throughout Odessa need roofing systems that withstand welding operations, heavy machinery movement, and chemical exposure while providing adequate ventilation for industrial processes. These applications often require fire-resistant materials and specialized drainage systems that prevent environmental contamination.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Manufacturing Commercial Roofing Solutions</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa's manufacturing sector supporting petroleum operations requires commercial roofing systems for steel fabrication, equipment manufacturing, and specialized service providers that operate around the clock during peak drilling seasons. These facilities need roofing systems that accommodate overhead crane systems, welding operations, and heavy equipment assembly while protecting valuable industrial equipment and work-in-progress materials.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Chemical processing and storage facilities require roofing systems that meet EPA and OSHA requirements for hazardous material handling while providing containment capabilities that prevent environmental contamination. These installations often require specialized ventilation integration and emergency response access that affects roofing design and material selection for industrial safety compliance.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Metal fabrication and machining operations serving the petroleum industry require roofing systems that accommodate precision manufacturing equipment while providing adequate natural lighting and climate control for quality manufacturing processes. Specialized insulation and acoustical control become important for facilities operating sensitive manufacturing equipment around the clock.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Educational Institution Commercial Roofing Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The University of Texas Permian Basin represents Odessa's largest educational facility, requiring specialized commercial roofing systems for academic buildings, research facilities, and student housing that accommodate modern educational technology while providing energy-efficient environments for year-round academic operations. University buildings often include specialized laboratory facilities requiring superior environmental control and chemical-resistant roofing materials.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Ector County Independent School District facilities including Odessa High School and Permian High School require cost-effective roofing solutions that accommodate large assembly spaces, athletic facilities, and specialized educational programs while providing energy efficiency that controls operational costs for large student populations in the challenging West Texas climate.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Petroleum industry training facilities including specialized welding schools and technical training centers require roofing systems that accommodate industrial training equipment, safety systems, and specialized ventilation for technical education programs that prepare workers for careers in the Permian Basin energy sector.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Healthcare and Medical Facility Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Medical Center Hospital and associated healthcare facilities require specialized commercial roofing systems that support critical medical operations including emergency services, surgical facilities, and diagnostic equipment that demands consistent environmental conditions. Hospital roofing must accommodate medical gas systems, backup power equipment, and helicopter landing zones while maintaining infection control standards essential for patient safety.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Specialized medical facilities including cancer treatment centers and outpatient surgery centers need roofing systems that provide electromagnetic shielding for sensitive medical equipment while maintaining sterile environments. These installations often require coordination with medical equipment manufacturers and specialized contractors familiar with healthcare facility requirements and infection control protocols.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Behavioral health and rehabilitation facilities serving petroleum industry workers require roofing systems that provide quiet, comfortable therapeutic environments while supporting specialized equipment and privacy requirements essential for effective treatment programs. Energy efficiency becomes critical for controlling operational costs while maintaining therapeutic environment standards required for patient comfort.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Retail and Commercial Center Roofing Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Music City Mall and major retail corridors throughout Odessa serve petroleum industry workers and their families, requiring commercial roofing systems that accommodate large retail spaces, restaurants, and entertainment facilities while maintaining comfortable shopping environments during extreme West Texas weather conditions. These facilities often experience heavy traffic during shift changes and industry boom periods that create unique operational demands.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Automotive dealerships and service facilities serving petroleum industry fleet operations require roofing systems that accommodate vehicle sales areas, service bays, and parts storage while providing comfortable environments for customers and employees. These facilities often include specialized equipment for servicing industrial vehicles and heavy equipment used throughout the Permian Basin.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Restaurant and hospitality businesses serving petroleum industry workers require roofing systems that accommodate specialized kitchen equipment, dining areas, and entertainment systems while providing year-round weather protection for facilities that often operate extended hours to serve industry shift schedules common in 24/7 petroleum operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Transportation and Logistics Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa-Schlemeyer Field and associated aviation facilities require specialized commercial roofing for aircraft maintenance operations, cargo handling, and passenger services that support petroleum industry transportation needs. These facilities demand large-span roofing systems that accommodate aircraft movement while providing weather protection for sensitive aviation equipment and flight operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Trucking and logistics facilities supporting petroleum industry transportation require roofing systems that accommodate loading dock operations, truck maintenance bays, and cargo storage areas while providing protection for petroleum industry equipment and supplies transported throughout the Permian Basin. These facilities often operate around the clock during peak drilling and completion activities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Railroad facilities serving petroleum industry transportation need roofing systems for maintenance shops, cargo handling facilities, and administrative buildings that support critical transportation infrastructure for petroleum products, drilling equipment, and industrial supplies moved throughout the region and to refineries and markets worldwide.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Government and Public Safety Commercial Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Ector County facilities including the courthouse, sheriff's department, and administrative buildings require commercial roofing systems that meet government specifications for durability, security, and energy efficiency while accommodating public safety equipment and emergency communication systems. These projects often involve complex procurement procedures and specialized security requirements that affect contractor selection and installation protocols.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency services facilities including fire stations and EMS facilities require roofing systems that support emergency communication equipment, vehicle storage, and rapid deployment capabilities while providing reliable weather protection during severe weather events when emergency services become most critical for community safety during petroleum industry emergencies.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Federal facilities including border patrol and homeland security installations require roofing systems that meet federal specifications and security standards while providing long-term durability and minimal maintenance requirements. These projects require specialized contractor certifications and extensive background checks for installation personnel working on secure federal facilities.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Energy Efficiency and Environmental Compliance for Odessa Commercial Buildings</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Odessa's extreme climate with summer temperatures regularly exceeding 100°F creates enormous cooling demands for commercial buildings throughout the petroleum industry sector. High-reflectance roofing systems reduce cooling loads by 25-35% while protecting petroleum industry equipment and commercial operations from heat-related failures during extended summer operation periods that coincide with peak petroleum industry activity.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Environmental compliance requirements for petroleum industry facilities affect roofing material selection, installation procedures, and waste management protocols. Storm water management, chemical containment, and air quality protection require specialized construction practices that exceed standard commercial building requirements while ensuring full compliance with EPA and state environmental regulations affecting petroleum industry operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Solar-ready roofing installations provide petroleum industry companies with opportunities for renewable energy integration that can offset high operational energy costs while supporting corporate sustainability initiatives. Structural assessments and electrical integration planning during roof installation create cost-effective pathways for future photovoltaic installations on petroleum industry and commercial facilities throughout Odessa.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Roofing Systems and Technology for Permian Basin Operations
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              TPO (Thermoplastic Polyolefin) membrane systems provide superior performance for Odessa's challenging environment with chemical resistance essential for petroleum industry applications, energy efficiency that reduces operational costs, and durability that withstands extreme weather conditions common throughout the Permian Basin. Heat-welded seams create permanently fused joints that eliminate potential failure points common in adhesive-based systems.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              EPDM (Ethylene Propylene Diene Monomer) rubber roofing systems offer cost-effective solutions for large commercial buildings with excellent weather resistance, ease of repair and maintenance, and proven long-term performance in petroleum industry environments. These systems accommodate thermal movement and provide superior puncture resistance for buildings subject to maintenance traffic and equipment installations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              PVC membrane systems provide premium chemical resistance essential for facilities exposed to petroleum industry chemicals while offering superior durability and energy efficiency. These systems prove especially important for facilities handling hydrocarbons, completion chemicals, and other petroleum industry materials that can rapidly deteriorate standard roofing systems through chemical attack and vapor exposure.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Metal roofing systems using standing seam construction provide 50+ year service life with minimal maintenance requirements while accommodating the thermal expansion and industrial loading common in petroleum industry facilities. Advanced coating systems resist chemical exposure while maintaining reflectivity and color stability throughout extended service lives in Odessa's challenging petroleum industry environment.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Emergency Response and Maintenance Services for Critical Operations</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              24/7 emergency response capabilities specifically designed for petroleum industry environments include specialized safety equipment and coordination with industrial emergency response protocols. Rapid response times minimize business interruption for facilities that cannot tolerate weather-related operational disruptions during critical petroleum industry activities including drilling, completion, and production operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Preventive maintenance programs designed for Odessa's industrial environment include quarterly inspections with chemical resistance testing, thermal imaging for equipment protection, and scheduled maintenance that coordinates with petroleum industry operational cycles to minimize disruption during critical business periods that affect regional energy production and economic activity.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Predictive maintenance using advanced diagnostic techniques helps identify potential failure points before they compromise petroleum industry operations or damage valuable equipment. Early detection systems prevent minor issues from becoming major failures that could impact critical petroleum operations, equipment protection, and business continuity during volatile energy market conditions that affect Permian Basin operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does commercial roof replacement cost in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide free detailed estimates with transparent pricing and financing options for qualified businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work after hours to minimize business disruption?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We schedule commercial installations during evenings, weekends, or planned closure periods to minimize operational impact. Many Odessa businesses prefer after-hours work for retail locations or facilities that cannot shut down during business hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes TPO roofing ideal for Odessa's commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  TPO's white reflective membrane is Energy Star rated and dramatically reduces cooling costs. The heat-welded seams create watertight bonds that withstand high winds and hail. TPO offers excellent durability (15-25 year warranties) at a competitive price point.
                </AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Odessa property owners. Expert commercial roofing with comprehensive warranties.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
