import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/commercial-roofing-midland-texas/' },
  title: 'Commercial Roofing in Midland TX| Oil & Gas Specialists',
  description: 'Commercial Roofing in Midland, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function CommercialMidlandPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Midland", url: "/commercial-roofing-midland-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-midland-texas/#localbusiness",
        "name": "5 Star Commercial Roofing - Midland Commercial Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.9973, "longitude": -102.0779 },
        "url": "https://5starroofingpros.com/commercial-roofing-midland-texas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Midland,_Texas", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert commercial roofing services in Midland, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-6-1920w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Commercial Roofing in Midland, TX</h1>
            <p className="hero-subtitle">Flat Roof Specialists for Permian Basin Businesses</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Estimate</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Lead Form - Above the Fold */}
      <div className="container-custom">
        <FadeIn>
          <section id="lead-form" className="section -mt-16 relative z-20">
            <div className="max-w-2xl mx-auto">
              <HighLevelForm
                title="Get Your Free Roof Inspection"
                subtitle="Fill out the form below and we'll contact you within 24 hours. No obligation."
              />
            </div>
          </section>
        </FadeIn>
      </div>


      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Midland's Premier Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Midland's commercial sector demands roofing systems that can handle Permian Basin extremes. From industrial facilities near the airport to office buildings downtown, we install and maintain commercial roofing built for the long haul. As the energy capital of West Texas, Midland's oil and gas industry creates unique commercial roofing demands requiring specialized expertise in chemical-resistant systems and industrial-grade applications.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              5 Star Commercial Roofing specializes in flat roof systems, TPO, EPDM, and PVC installations for Midland businesses. Minimal disruption, maximum durability, and warranties that protect your investment. Our expertise serves the petroleum industry, financial sector, healthcare facilities, and growing technology companies throughout the Permian Basin.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With major oil companies, service providers, and financial institutions headquartered in Midland, we understand the complexity of commercial roofing projects for high-rise buildings, industrial facilities, and specialized petroleum operations. Emergency response capabilities and availability ensure critical business operations continue without weather-related interruptions.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Roofing for Midland's Oil and Gas Industry
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland serves as headquarters for major oil companies including Diamondback Energy, Pioneer Natural Resources, and Concho Resources, creating extensive commercial roofing demands for corporate headquarters, field offices, and industrial support facilities throughout the Permian Basin. These facilities require roofing systems that accommodate specialized telecommunications equipment, emergency communications, and backup power systems essential for coordinating widespread drilling operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Oilfield service companies including Halliburton, Schlumberger, and Baker Hughes operate large-scale facilities requiring chemical-resistant roofing systems designed for exposure to drilling fluids, completion chemicals, and petroleum byproducts. Industrial roofing installations must accommodate heavy equipment storage, chemical storage areas, and specialized ventilation systems that handle hazardous material processing.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pipeline and midstream facilities including compression stations, gathering facilities, and gas processing plants demand roofing systems that meet stringent safety requirements for explosive atmosphere applications. These installations require specialized fire-resistant materials, emergency ventilation integration, and compliance with petroleum industry safety standards that exceed standard commercial building requirements.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Chemical-Resistant Roofing for Petroleum Operations</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Petroleum industry facilities expose commercial roofing systems to hydrocarbons, hydrogen sulfide, and other corrosive compounds that rapidly deteriorate standard roofing materials. PVC membrane systems with enhanced chemical resistance provide superior protection compared to TPO or EPDM systems, while welded seam construction eliminates vulnerable adhesive joints that chemical vapors attack over time.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Metal roofing systems for industrial applications require specialized coatings formulated for petrochemical environments. Fluoropolymer coatings resist hydrocarbon exposure while maintaining color stability and reflectivity throughout 25+ year service lives. Standing seam systems with concealed fasteners eliminate penetration points that typically fail when exposed to petroleum industry chemicals.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Insulation systems beneath chemical-resistant membranes require careful material selection to prevent chemical infiltration that could compromise thermal performance and structural integrity. Closed-cell foam insulation with integrated vapor barriers prevents chemical penetration while maintaining energy efficiency critical for climate-controlled petroleum industry facilities.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Financial District and Corporate Headquarters Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland's financial district anchored by major banks including First National Bank of Midland and petroleum industry financial services creates high-rise commercial roofing demands requiring specialized expertise in wind-resistant systems, seismic considerations, and aesthetic requirements appropriate for corporate environments. These facilities demand superior weather protection while maintaining professional appearances that reflect corporate image standards.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Corporate headquarters buildings including the Diamondback Energy Tower and other high-rise facilities require roofing systems that accommodate telecommunications equipment, helicopter access, and emergency communication systems while providing energy-efficient solutions that control operational costs for large office complexes with extensive HVAC requirements.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Executive office complexes and professional buildings throughout Midland need roofing systems that support modern building technologies including smart building systems, renewable energy integration, and advanced HVAC controls while maintaining quiet, comfortable environments essential for professional office operations and client interactions.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Healthcare and Medical Facility Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland Memorial Hospital and associated medical facilities require specialized commercial roofing systems that support critical healthcare operations including emergency services, surgical facilities, and diagnostic equipment that demands consistent environmental conditions. Hospital roofing must accommodate medical gas systems, backup power equipment, and helicopter landing zones while maintaining infection control standards.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Specialized medical facilities including cancer treatment centers, surgical centers, and diagnostic imaging facilities need roofing systems that provide electromagnetic shielding for sensitive medical equipment while maintaining sterile environments essential for patient safety. These installations often require coordination with medical equipment manufacturers and infection control specialists.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mental health and rehabilitation facilities serving the petroleum industry workforce require roofing systems that provide quiet, comfortable environments while supporting specialized therapeutic equipment and privacy requirements essential for effective treatment programs. Energy efficiency becomes critical for controlling operational costs while maintaining therapeutic environment standards.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Industrial and Manufacturing Commercial Roofing Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland's industrial sector supporting petroleum operations requires commercial roofing systems for manufacturing facilities, equipment repair shops, and specialized service providers that operate around the clock to support drilling and production activities. These facilities need roofing systems that accommodate overhead cranes, welding operations, and heavy equipment movement while providing weather-tight protection for valuable petroleum industry equipment.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Steel fabrication and machining facilities serving the petroleum industry require roofing systems that withstand metal working operations, chemical cutting processes, and heavy equipment installation while providing adequate natural lighting and ventilation for precision manufacturing operations. Specialized drainage systems prevent contamination from metalworking fluids and cutting oils.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chemical storage and distribution facilities require roofing systems that meet EPA and DOT regulations for hazardous material storage while providing containment capabilities that prevent environmental contamination. These installations often require specialized fire suppression integration and emergency response access that affects roofing design and material selection.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Logistics and Transportation Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland International Air and Space Port requires specialized commercial roofing for aircraft maintenance facilities, cargo handling operations, and passenger terminal buildings that support petroleum industry transportation needs. These facilities demand large-span roofing systems that accommodate aircraft movement while providing weather protection for sensitive aviation equipment and operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Trucking and logistics facilities supporting petroleum industry transportation require roofing systems that accommodate loading dock operations, truck maintenance bays, and cargo storage areas while providing protection for petroleum industry equipment and supplies transported throughout the Permian Basin. These facilities often operate during peak drilling and completion activities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Railroad facilities including Union Pacific operations serving petroleum industry transportation need roofing systems for maintenance shops, cargo handling facilities, and administrative buildings that support critical transportation infrastructure for petroleum industry operations throughout West Texas and beyond.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Retail and Hospitality Commercial Roofing for Energy Sector Support
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland Park Mall and retail facilities throughout the city serve petroleum industry workers and their families, requiring commercial roofing systems that accommodate large retail spaces, restaurants, and service businesses while maintaining comfortable shopping environments during extreme West Texas weather conditions. These facilities often experience heavy traffic during shift changes and industry boom periods.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Hotel and hospitality facilities including major hotel chains and extended-stay properties serve petroleum industry professionals, contractors, and business travelers requiring specialized roofing systems that provide quiet, comfortable environments while controlling operational costs through energy efficiency. These properties often include conference facilities and executive meeting areas.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Restaurant and entertainment facilities serving petroleum industry workers require roofing systems that accommodate specialized kitchen equipment, outdoor dining areas, and entertainment systems while providing year-round weather protection for facilities that often operate extended hours to serve industry shift schedules.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Educational and Training Facility Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland College and petroleum industry training facilities require commercial roofing systems for specialized educational programs including petroleum technology, welding, and industrial safety training that support the region's energy economy. These facilities need roofing systems that accommodate technical equipment, safety systems, and specialized ventilation for industrial training operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Corporate training facilities operated by major oil companies require roofing systems that support advanced simulation equipment, conference facilities, and residential training accommodations while maintaining professional environments appropriate for executive education and technical training programs that attract personnel from worldwide operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Public school facilities serving petroleum industry families require cost-effective roofing solutions that accommodate educational technology, athletic facilities, and performance spaces while providing energy efficiency that controls operational costs for districts that often experience enrollment fluctuations related to petroleum industry cycles.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Emergency Response and Safety Considerations for Petroleum Industry Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Commercial roofing projects in Midland's petroleum industry environment require extensive safety protocols including hot work permits, fire watch procedures, and coordination with facility safety personnel to prevent ignition sources near hydrocarbon operations. Our crews maintain specialized training and certification for working in explosive atmosphere environments common throughout the Permian Basin.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency response capabilities specifically designed for petroleum industry environments include specialized equipment for chemical exposure situations and coordination with industrial emergency response teams. emergency roofing services ensure critical petroleum operations continue during severe weather events or equipment failures that could compromise facility operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Environmental compliance requirements for petroleum industry facilities affect roofing material selection, installation procedures, and waste management protocols. Storm water management, chemical containment, and air quality protection require specialized construction practices that exceed standard commercial building requirements while ensuring full regulatory compliance.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Energy Efficiency and Sustainability for Permian Basin Operations</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland's extreme climate conditions with summer temperatures exceeding 105°F create enormous energy demands for commercial buildings that require sophisticated cooling systems. High-reflectance roofing systems reduce cooling loads by 25-35% while protecting petroleum industry equipment from heat-related failures during extended summer operation periods.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Solar-ready roofing installations provide petroleum companies with opportunities for renewable energy integration that can offset high operational energy costs while supporting corporate sustainability initiatives. Structural assessments and electrical integration planning create pathways for future photovoltaic installations on petroleum industry facilities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Green building technologies including vegetative roofing systems and rainwater harvesting integration help petroleum industry facilities achieve LEED certification and meet corporate environmental stewardship goals while providing practical benefits including reduced storm water runoff and improved building energy performance throughout the Permian Basin's challenging climate conditions.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Commercial Roofing Systems</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Roofing Systems</h3>
                <p className="text-gray-700 mb-4">Thermoplastic Polyolefin (TPO) is ideal for Midland's climate. Heat-welded seams create watertight protection, white reflective surface reduces cooling costs, and it handles temperature extremes exceptionally well.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Energy-efficient white membrane</li>
                  <li>✓ Heat-welded seams (strongest)</li>
                  <li>✓ 20-30 year warranties</li>
                  <li>✓ Handles thermal expansion</li>
                  <li>✓ UV resistant</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚫</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 mb-4">Ethylene Propylene Diene Monomer (EPDM) is a proven flat roof solution. Durable rubber membrane withstands Midland's weather, easy to repair, and cost-effective for large commercial buildings.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Proven 50+ year track record</li>
                  <li>✓ Excellent weather resistance</li>
                  <li>✓ Cost-effective installation</li>
                  <li>✓ Easy to maintain and repair</li>
                  <li>✓ Fire resistant</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔵</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">PVC Membrane Systems</h3>
                <p className="text-gray-700 mb-4">Polyvinyl Chloride (PVC) offers superior chemical resistance—critical for industrial Midland facilities. Heat-welded seams, excellent durability, and premium warranties make it ideal for demanding applications.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Chemical resistant (oil/gas industry)</li>
                  <li>✓ Premium durability</li>
                  <li>✓ Heat-welded seams</li>
                  <li>✓ 25-30 year warranties</li>
                  <li>✓ Low maintenance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Flat Roof Repair & Maintenance</h3>
                <p className="text-gray-700 mb-4">Preventive maintenance extends roof life and prevents costly emergency repairs. We offer comprehensive maintenance programs and expert repair services for all commercial roof types.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Membrane patching</li>
                  <li>✓ Seam repairs</li>
                  <li>✓ Preventive maintenance plans</li>
                  <li>✓ Emergency service</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Midland Businesses Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Specialists</h3>
                <p className="text-gray-700">Over 10 years serving Midland's commercial sector. We understand oil & gas, warehouses, retail, and industrial roofing needs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Minimal Disruption</h3>
                <p className="text-gray-700">We work around your business hours and schedule installations to minimize operational impact. Your business keeps running.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Premium Warranties</h3>
                <p className="text-gray-700">Manufacturer warranties up to 30 years, plus our workmanship guarantee. Your investment is protected.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Challenges in Midland</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🌡️ Extreme Heat & UV</h3>
                <p className="text-gray-700">Midland roofs face 100°F+ temperatures for months. We install reflective membranes that reduce heat absorption and cooling costs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">⛈️ Hail & Storm Damage</h3>
                <p className="text-gray-700">Permian Basin hail can destroy flat roofs. We use impact-resistant systems and offer emergency repairs to protect your facility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🏭 Industrial Environment</h3>
                <p className="text-gray-700">Oil & gas operations require chemical-resistant roofing. Our PVC and specialized systems handle harsh industrial environments.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Commercial Roofing Pricing in Midland</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg"><strong>Average commercial roofing costs (per square foot):</strong></p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>TPO Roofing:</strong> $6-$9 per sq ft installed</li>
                <li>• <strong>EPDM Roofing:</strong> $5-$8 per sq ft installed</li>
                <li>• <strong>PVC Roofing:</strong> $8-$12 per sq ft installed</li>
                <li>• <strong>Modified Bitumen:</strong> $5-$9 per sq ft installed</li>
              </ul>
              <p className="mt-4">Factors: building size, roof accessibility, existing conditions, insulation needs, warranty level, and membrane thickness.</p>
              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Commercial Estimates</p>
                <p>We provide detailed proposals for all commercial roofing projects in Midland. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Midland Business</h2>
            <p className="cta-text">Expert commercial roofing for the Permian Basin. Free estimates, quality materials, and installations that last decades.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Request Estimate</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Midland Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/midland-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Midland Services</a>
              <span className="text-gray-400">•</span>
              <a href="/flat-roof-repair-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Flat Roof Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing Info</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Commercial Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
