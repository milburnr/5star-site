import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing in Lubbock TX| TPO, EPDM, Flat Roofs',
  description: 'Commercial Roofing in Lubbock, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function CommercialLubbockPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Lubbock", url: "/commercial-roofing-lubbock-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roofing-lubbock-texas/#localbusiness",
        "name": "5 Star Commercial Roofing - Lubbock Commercial Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
        "url": "https://5starroofingpros.com/commercial-roofing-lubbock-texas/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert commercial roofing services in Lubbock, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-channing-33-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Commercial Roofing in Lubbock, TX</h1>
            <p className="hero-subtitle">Hail Alley Commercial Roofing Specialists</p>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Lubbock's Premier Commercial Roofing Specialists</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Lubbock's commercial buildings sit in Hail Alley—ground zero for severe weather. From warehouses near the airport to downtown office buildings, your facility needs roofing systems engineered for baseball-sized hail, high winds, and extreme UV exposure. As West Texas's largest city and economic hub, Lubbock's diverse commercial sectors require specialized roofing expertise.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              5 Star Commercial Roofing specializes in commercial flat roof systems throughout Lubbock. TPO, EPDM, PVC installations with impact resistance, energy efficiency, and warranties that protect your investment. Our expertise serves Lubbock's universities, medical centers, agricultural facilities, and growing technology sector.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With Texas Tech University, Lubbock Christian University, and major medical facilities creating unique commercial roofing demands, we understand the complexities of educational and healthcare roofing projects. Large-span buildings, specialized equipment requirements, and critical operational schedules require expert project management and advanced installation techniques.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Commercial Roofing for Lubbock's Educational Institutions
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Texas Tech University represents one of the largest commercial roofing complexes in West Texas, with over 150 buildings requiring specialized roofing systems that accommodate research laboratories, student housing, athletic facilities, and administrative buildings. Educational facility roofing must support HVAC systems, telecommunications equipment, and emergency communication systems while maintaining aesthetic standards appropriate for campus environments.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Lubbock Independent School District facilities including Monterey High School, Coronado High School, and numerous elementary schools require cost-effective roofing solutions that accommodate large assembly spaces, gymnasiums, and cafeterias. School roofing projects often coordinate with summer break schedules and bond funding cycles to minimize disruption to educational activities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Private educational institutions including Trinity Christian School and All Saints Episcopal School need roofing systems that balance durability, energy efficiency, and budget constraints while supporting smaller-scale specialized educational facilities. These projects often require phased installations to maintain continuous operations during academic years.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">University Research and Laboratory Facility Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Texas Tech's research facilities require specialized commercial roofing systems that support sensitive scientific equipment, chemical exhaust systems, and climate-controlled environments. Laboratory buildings demand superior moisture control, chemical resistance, and vibration isolation that standard commercial applications don't provide.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Texas Tech University Health Sciences Center adds complexity with medical research requirements including biological containment systems, medical gas piping, and emergency power systems that must be integrated with roofing installations. These facilities require coordination with infection control protocols and specialized safety procedures.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Agricultural research facilities at Texas Tech demand roofing systems resistant to agricultural chemicals, grain dust, and specialized equipment installations. Greenhouse complexes and animal research facilities require integrated ventilation systems and specialized drainage for research operations that continue year-round.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Healthcare Commercial Roofing Excellence in Lubbock
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Lubbock's medical district anchored by Covenant Health System and University Medical Center creates extensive commercial roofing demands for critical healthcare facilities that operate 24/7 with zero tolerance for weather-related service disruptions. Hospital roofing systems must accommodate helicopter landing zones, medical gas systems, and specialized HVAC equipment while maintaining sterile environments.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The Grace Campus including Grace Clinic and specialized medical facilities requires roofing systems that support outpatient surgery centers, diagnostic imaging equipment, and pharmaceutical storage areas. These facilities demand superior moisture control and chemical resistance while maintaining infection control standards required for medical operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Long-term care facilities and assisted living complexes throughout Lubbock need roofing systems that provide residential comfort levels while meeting commercial durability standards. These facilities require energy-efficient solutions that control operational costs while supporting residents who require consistent environmental conditions for health reasons.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Agricultural Business and Food Processing Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Lubbock's position as a major cotton marketing center creates unique commercial roofing requirements for cotton warehouses, processing facilities, and agricultural equipment storage. These facilities require large-span roofing systems that accommodate overhead material handling equipment while providing weather-tight protection for valuable agricultural commodities.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Food processing facilities including meat processing plants and grain handling operations demand roofing systems that meet USDA and FDA requirements for food safety while withstanding the corrosive effects of agricultural chemicals and processing byproducts. Specialized drainage systems prevent contamination while maintaining compliance with food safety regulations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Agricultural equipment dealerships serving West Texas farmers require roofing systems that accommodate large machinery displays and service bays while providing energy-efficient environments for equipment storage. These facilities often include specialized crane systems and overhead equipment that affects roofing design and structural requirements.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Technology and Innovation Sector Commercial Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Lubbock's growing technology sector centered around Texas Tech Innovation Hub and downtown technology incubators requires modern commercial roofing systems that support high-tech operations, data centers, and research and development facilities. These buildings demand superior environmental control, electromagnetic shielding, and emergency power integration.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Data centers and telecommunications facilities require roofing systems that support heavy HVAC equipment, backup power systems, and specialized cooling equipment while providing absolute weather protection for sensitive electronic equipment. Redundant systems and emergency access provisions become essential for facilities supporting critical communications infrastructure.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Manufacturing facilities in Lubbock's industrial parks need roofing systems that accommodate production equipment, overhead cranes, and specialized ventilation systems while providing energy-efficient environments that control production costs. These facilities often require phased installations to maintain continuous production during roofing projects.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Retail and Hospitality Commercial Roofing Solutions</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              South Plains Mall and major retail corridors along Loop 289 and Slide Road require commercial roofing systems that accommodate large retail spaces, food courts, and anchor store requirements while maintaining comfortable shopping environments. Retail roofing projects often coordinate with holiday schedules and minimal business disruption requirements.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Hotel and hospitality facilities serving Texas Tech visitors and business travelers need roofing systems that provide quiet, comfortable environments while controlling operational costs through energy efficiency. These projects often include specialized features like rooftop pool areas, restaurant facilities, and conference center spaces.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Restaurant and entertainment facilities in Lubbock's Depot District and throughout the city require roofing systems that accommodate specialized kitchen exhaust systems, outdoor dining areas, and entertainment equipment while providing weather protection for year-round operations during West Texas weather extremes.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Industrial and Distribution Commercial Roofing Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Lubbock's strategic location at the intersection of major highways creates extensive warehouse and distribution facility requirements near Lubbock Preston Smith International Airport and along major transportation corridors. These facilities require large-span roofing systems that accommodate modern logistics equipment while providing energy-efficient environments for temperature-sensitive goods.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Cold storage and refrigerated warehouse facilities serving agricultural and food distribution require specialized roofing systems with superior insulation and moisture barriers that prevent ice formation and maintain consistent temperatures essential for food safety compliance. These systems must accommodate heavy refrigeration equipment while preventing thermal bridging.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Automotive and heavy equipment facilities including truck stops, fleet maintenance centers, and equipment dealerships need roofing systems that withstand vehicle emissions, hydraulic fluids, and heavy equipment operations while providing adequate lighting and ventilation for service operations that continue during extreme weather conditions.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Government and Public Facility Commercial Roofing</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Lubbock County facilities including the courthouse, jail, and administrative buildings require commercial roofing systems that meet government specifications for durability, security, and energy efficiency while accommodating public safety equipment and emergency communication systems. These projects often involve complex procurement procedures and specialized security requirements.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Federal facilities including the federal courthouse and post office require roofing systems that meet GSA specifications and security standards while providing long-term durability and minimal maintenance requirements. These projects require specialized contractor certifications and extensive background checks for installation personnel.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency services facilities including fire stations, EMS facilities, and police facilities require roofing systems that support emergency communication equipment, vehicle storage, and rapid deployment capabilities while providing reliable protection during severe weather events when emergency services are most critical for community safety.
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
                <p className="text-gray-700 mb-4">Thermoplastic Polyolefin (TPO) excels in Lubbock's climate. White reflective surface reduces cooling costs, heat-welded seams create superior waterproofing, and it handles severe weather exceptionally well.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Energy-efficient white membrane</li>
                  <li>✓ Heat-welded seams (strongest)</li>
                  <li>✓ 20-30 year warranties</li>
                  <li>✓ Impact-resistant options</li>
                  <li>✓ UV resistant</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚫</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 mb-4">Ethylene Propylene Diene Monomer (EPDM) is proven and reliable. Durable rubber membrane withstands Lubbock weather, easy to repair, and cost-effective for large commercial buildings.</p>
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
                <p className="text-gray-700 mb-4">Polyvinyl Chloride (PVC) offers premium durability and excellent chemical resistance. Heat-welded seams, superior warranties, and long-term performance make it ideal for demanding applications.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Premium durability</li>
                  <li>✓ Chemical resistant</li>
                  <li>✓ Heat-welded seams</li>
                  <li>✓ 25-30 year warranties</li>
                  <li>✓ Low maintenance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Repairs & Maintenance</h3>
                <p className="text-gray-700 mb-4">Preventive maintenance programs extend roof life and prevent expensive emergency repairs. We service all commercial roof types throughout Lubbock.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Membrane patching</li>
                  <li>✓ Seam repairs</li>
                  <li>✓ Preventive maintenance plans</li>
                  <li>✓ Emergency 24/7 service</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Lubbock Businesses Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Alley Experts</h3>
                <p className="text-gray-700">Over 10 years serving Lubbock's commercial sector. We understand the unique challenges of building in Hail Alley.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Minimal Disruption</h3>
                <p className="text-gray-700">We work around your business hours and schedule installations to minimize impact on your operations.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Premium Warranties</h3>
                <p className="text-gray-700">Manufacturer warranties up to 30 years, plus our workmanship guarantee. Your investment is fully protected.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Commercial Roofing Challenges in Lubbock</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">⛈️ Severe Hail Storms</h3>
                <p className="text-gray-700">Lubbock experiences some of Texas's most intense hail. Baseball to softball-sized hail can destroy commercial roofs in minutes. Impact-resistant systems are essential.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">💨 High Wind Events</h3>
                <p className="text-gray-700">As one of America's windiest cities, Lubbock demands properly installed, high-wind rated roofing systems. Wind uplift can tear off inferior installations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🌡️ Extreme UV & Heat</h3>
                <p className="text-gray-700">With 260+ days of sunshine and summer temps over 100°F, UV exposure rapidly ages roofing materials. Reflective membranes reduce heat and extend life.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🏜️ Dust & Debris</h3>
                <p className="text-gray-700">West Texas dust storms deposit debris that can clog drainage and damage roofing. Regular inspections and maintenance prevent these issues.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Commercial Roofing Pricing in Lubbock</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg"><strong>Average commercial roofing costs (per square foot):</strong></p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>TPO Roofing:</strong> $6-$9 per sq ft installed</li>
                <li>• <strong>EPDM Roofing:</strong> $5-$8 per sq ft installed</li>
                <li>• <strong>PVC Roofing:</strong> $8-$12 per sq ft installed</li>
                <li>• <strong>Modified Bitumen:</strong> $5-$9 per sq ft installed</li>
              </ul>
              <p className="mt-4">Cost factors include: building size, roof accessibility, existing conditions, insulation needs, warranty level, and membrane thickness.</p>
              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Commercial Estimates</p>
                <p>We provide detailed proposals for all commercial roofing projects in Lubbock. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Industries We Serve in Lubbock</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Warehouses</h3>
                <p className="text-gray-700">Large-format roofing systems for distribution and storage facilities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-bold text-brand-brown mb-2">Office Buildings</h3>
                <p className="text-gray-700">Professional installations with minimal disruption to operations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">🛒</div>
                <h3 className="font-bold text-brand-brown mb-2">Retail Centers</h3>
                <p className="text-gray-700">Fast installations that keep stores open during construction</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Lubbock Business</h2>
            <p className="cta-text">Expert commercial roofing for Hail Alley. Free estimates, quality materials, and installations built to last.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Request Estimate</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Lubbock Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/lubbock-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Lubbock Services</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-lubbock-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-lubbock-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing Info</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Commercial Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
