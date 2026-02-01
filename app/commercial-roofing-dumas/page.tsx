import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Dumas TX | 5 Star Roofing',
  description: "Professional commercial roofing in Dumas TX. Expert installation, 24/7 emergency service, insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function CommercialRoofingDumasPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Dumas", url: "/commercial-roofing-dumas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-dumas/#localbusiness",
        "name": "5 Star Commercial Roofing - Dumas Commercial Roofing",
        "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/commercial-roofing-dumas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas", "name": "Dumas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional commercial roofing in Dumas TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does commercial roofing cost in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Commercial roofing costs in Dumas vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing."}},{"@type":"Question","name":"Do you work after hours in Dumas?","acceptedAnswer":{"@type":"Answer","text":"Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Dumas."}},{"@type":"Question","name":"What commercial roofing systems work best in Texas?","acceptedAnswer":{"@type":"Answer","text":"TPO (energy efficient, reflective), Metal (durable, 50+ year lifespan), and EPDM (cost-effective) perform excellently in Texas climate."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(/images/CommercialRoofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Commercial Roofing in <span className="text-brand-gold-light">Dumas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Expert Service for Texas Properties</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional commercial roofing throughout Dumas. Expert installation, comprehensive warranties, and 24/7 emergency service. Free inspections and insurance assistance available.</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Dumas's Premier Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Professional commercial roofing throughout Dumas and surrounding areas serving Moore County's agricultural economy. We understand Texas weather challenges and install roofing systems engineered for extreme conditions including hail, high winds, and temperature swings common in the High Plains agricultural environment.</p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">Since 2014, we've served Dumas with expert installations, comprehensive warranties, and outstanding customer service. We handle all permits, insurance claims, and warranty documentation. Free inspections and estimates available.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Dumas's role as Moore County's agricultural hub creates unique commercial roofing challenges for grain storage facilities, agricultural processing plants, livestock operations, and agricultural support businesses. Our specialized expertise addresses chemical-resistant materials, large-span applications, and compliance requirements specific to agricultural commercial properties.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Roofing Solutions for Dumas' Agricultural Economy
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dumas serves as the agricultural hub of Moore County, supporting extensive grain production, cattle feeding operations, and agricultural processing facilities across the Texas High Plains. This agricultural foundation creates unique commercial roofing demands requiring specialized expertise in large-span agricultural buildings, grain storage facilities, and processing plants that operate around the clock during harvest and shipping seasons.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The city's commercial roofing needs center around agricultural support services including grain elevators, fertilizer storage facilities, equipment dealerships, and livestock feeding operations. These facilities demand roofing systems capable of withstanding agricultural chemical exposure, grain dust accumulation, and extreme weather events that can disrupt critical agricultural operations during peak seasons.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Beyond agricultural businesses, Dumas supports healthcare, education, and retail sectors that require energy-efficient commercial roofing solutions suitable for the High Plains climate. Moore County Hospital, local schools, and retail establishments along Highway 287 need durable roofing systems that maintain comfort while controlling operational costs in the area's extreme temperature environment.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Grain Processing and Storage Facility Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dumas area grain elevators and storage facilities require specialized commercial roofing systems designed for the unique challenges of grain handling operations. Grain dust accumulation, moisture control, and fire prevention create specific requirements for roofing materials and ventilation systems that standard commercial applications don't address.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Metal roofing systems for grain storage facilities must incorporate specialized ventilation panels and moisture barriers to prevent condensation that can damage stored crops. Proper airflow management through roof-mounted ventilation systems protects grain quality while maintaining structural integrity of storage buildings during thermal cycling from extreme daily temperature variations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fire-resistant roofing materials become essential for facilities storing flammable agricultural products and operating dust-generating equipment. Class A fire-rated metal roofing systems with specialized coatings resist ignition from spark sources while providing superior weather protection for valuable crop storage throughout the extended harvest and marketing seasons.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Chemical-Resistant Systems for Agricultural Support Industries
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural support businesses in Dumas handle various chemicals including fertilizers, pesticides, and livestock pharmaceuticals that create corrosive environments requiring specialized roofing materials. Standard commercial roofing systems deteriorate rapidly when exposed to ammonia-based fertilizers, sulfur compounds, and other agricultural chemicals common in farming operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Fertilizer storage and blending facilities require membrane roofing systems specifically formulated for chemical resistance. TPO and PVC membrane systems with enhanced chemical resistance provide superior protection compared to standard commercial membranes, while welded seam construction eliminates vulnerable adhesive joints that chemical vapors can attack over time.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Livestock pharmaceutical and feed additive facilities need roofing systems that meet FDA and USDA requirements for facilities producing animal health products. These specialized applications require documentation of material composition and installation procedures to ensure compliance with agricultural product safety regulations affecting commercial livestock operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Large-Span Roofing for Agricultural Equipment and Livestock Facilities</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Modern agricultural operations around Dumas utilize enormous equipment requiring large-span building coverage for protection and maintenance. Commercial buildings housing combine harvesters, irrigation equipment, and livestock handling facilities need roofing systems designed for spans exceeding 100 feet without intermediate support columns that interfere with equipment movement.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Pre-engineered metal building roofing systems provide optimal solutions for agricultural equipment storage with clear spans up to 150 feet. Structural insulated panel systems and standing seam metal roofing create weather-tight protection while accommodating thermal expansion and wind uplift forces common in the High Plains agricultural environment.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Livestock confinement facilities including cattle feeding operations and dairy barns require roofing systems that provide environmental control while withstanding corrosive ammonia vapors from animal waste. Specialized ventilation integration and corrosion-resistant materials extend roof life while maintaining optimal conditions for livestock health and productivity.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Energy Efficiency Solutions for Agricultural Processing Operations
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural processing facilities in Moore County consume enormous amounts of energy for crop drying, grain cleaning, and refrigeration systems. Commercial roofing systems with superior insulation and reflective properties significantly reduce energy costs while maintaining consistent internal temperatures critical for product quality and equipment performance.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Cool roofing technologies prove especially beneficial for facilities operating temperature-sensitive processes during summer months when High Plains temperatures exceed 100°F for extended periods. High-reflectance membrane systems reduce cooling loads by 25-35% while protecting processing equipment from heat-related failures during peak agricultural seasons.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Solar-ready roofing systems provide agricultural businesses with opportunities for renewable energy installation that can offset high operational energy costs. Structural assessments and electrical integration planning during roof installation preparation create cost-effective pathways for future solar panel installation on agricultural processing facilities.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Weather Protection for Critical Agricultural Operations</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural operations cannot afford weather-related disruptions during critical periods like harvest, planting, or livestock breeding seasons. Commercial roofing systems must provide absolute weather protection for facilities housing valuable crops, equipment, and livestock that represent significant economic investments for agricultural producers.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Hail-resistant roofing systems become essential for protecting agricultural processing equipment and stored crops from costly storm damage. Class 4 impact-resistant materials and reinforced membrane systems provide superior protection against hailstones up to golf-ball size that commonly occur during High Plains severe weather events.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency backup and redundant roofing protection systems help critical agricultural facilities maintain operations during extended severe weather periods. Temporary weather protection capabilities and rapid repair protocols ensure continuous operation of time-sensitive agricultural processes that cannot tolerate weather-related delays.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Healthcare and Community Service Commercial Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Moore County Hospital and medical facilities serving Dumas' agricultural community require specialized commercial roofing systems that support critical healthcare delivery while accommodating medical equipment and emergency services. Hospital roofing must accommodate helicopter access, medical gas systems, and backup power equipment while maintaining sterile environments.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Educational facilities including Dumas High School and elementary schools need durable, cost-effective roofing systems that accommodate large assembly spaces while providing energy efficiency for year-round climate control. School roofing projects often coordinate with summer break schedules and agricultural community funding cycles.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency services facilities including fire stations and EMS facilities require roofing systems that support emergency communication equipment and vehicle storage while providing rapid deployment capabilities during agricultural emergencies like grain elevator fires or chemical spills at agricultural facilities.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Retail and Service Commercial Roofing for Agricultural Communities</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Retail businesses serving Dumas' agricultural economy need commercial roofing systems that accommodate seasonal demand fluctuations and equipment storage for agricultural products and supplies. Farm supply stores, implement dealerships, and agricultural service businesses require specialized loading dock coverage and equipment storage areas.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Automotive and equipment service facilities supporting agricultural machinery need roofing systems that accommodate overhead cranes, welding operations, and parts storage while providing adequate workspace for maintaining the large equipment essential to modern agricultural operations throughout Moore County.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Restaurant and hospitality businesses serving agricultural workers and traveling salespeople require energy-efficient roofing systems that maintain comfortable environments while controlling operational costs during peak agricultural seasons when visitor traffic increases significantly during planting and harvest periods.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Compliance and Safety Standards for Agricultural Commercial Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial roofing for agricultural facilities must comply with various regulatory requirements including OSHA safety standards, EPA environmental regulations, and USDA facility requirements for food and feed production. These compliance requirements affect material selection, installation procedures, and ongoing maintenance protocols for agricultural commercial buildings.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Food safety regulations affect roofing systems for facilities processing agricultural products for human or animal consumption. Materials must meet FDA requirements for food-contact surfaces while installation procedures prevent contamination risks that could compromise agricultural product safety and quality certifications.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Environmental compliance includes storm water management, chemical containment, and air quality protection requirements that affect commercial roofing design and installation. Agricultural facilities handling pesticides, fertilizers, and other regulated materials require specialized drainage and containment systems integrated with roofing installations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Maintenance Programs for Agricultural Commercial Properties</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Agricultural commercial properties require intensive maintenance programs to combat accelerated deterioration from chemical exposure, grain dust accumulation, and extreme weather conditions. Seasonal maintenance schedules coordinate with agricultural cycles to minimize business disruption during critical operational periods.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Predictive maintenance using infrared thermography and moisture detection helps identify potential failure points before they compromise agricultural operations or stored products. Early detection prevents equipment damage and product losses that could significantly impact agricultural business profitability during competitive market conditions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency response capabilities specifically designed for agricultural environments include specialized safety equipment for working around grain handling equipment and agricultural chemicals. Our emergency response teams maintain training and equipment necessary for safe operations in agricultural facility environments during emergency repair situations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does commercial roofing cost in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Commercial roofing costs in Dumas vary by size, type, and complexity. TPO: $4-$8/sq ft, Metal: $7-$12/sq ft, EPDM: $3-$6/sq ft. We provide free estimates with transparent pricing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you work after hours in Dumas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We schedule installations during evenings, weekends, or planned closures to minimize business disruption in Dumas.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Dumas property owners. Expert commercial roofing with comprehensive warranties and insurance assistance.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}