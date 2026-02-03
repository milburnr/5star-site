import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roof Repair in AmarilloService | 5 Star',
  description: 'Roof Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Roof Repair",
    "provider": {
      "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
      "name": "5 Star Commercial Roofing",
      "telephone": "+18066226041",
      "email": "admin@5starroofingpros.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2909 S Western St",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "postalCode": "79109"
      },
      "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
    },
    "areaServed": [
      {"@type": "City", "name": "Amarillo"},
      {"@type": "City", "name": "Midland"},
      {"@type": "City", "name": "Odessa"}
    ],
    "description": "Professional commercial roof repair services in Amarillo and West Texas. Emergency leak repair, flat roof systems, preventive maintenance programs."
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Commercial Roof Repair",
                      "url": "/commercial-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/commercial-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/commercial-roof-repair-in-amarillo/#localbusiness",
        "name": "5 Star Commercial Roofing - Amarillo Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.222, "longitude": -101.8313 },
        "url": "https://5starroofingpros.com/commercial-roof-repair-in-amarillo/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Amarillo, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <FadeIn>
        <h1 className="text-4xl font-bold mb-6">Commercial Roof Repair in Amarillo</h1>
      </FadeIn>

      {/* Post Meta */}
      <div className="text-gray-600 mb-6 flex gap-4">
        <time dateTime="2023-12-15">December 15, 2023</time>
        <span>By 5 Star Roofing</span>
      </div>

      {/* Featured Image */}
      <img
        src="/images/commercial-roof-repair-amarillo.jpg"
        alt="Commercial Roof Repair in Amarillo"
        className="w-full max-w-2xl h-auto mb-8 rounded-lg shadow-lg"
      />

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          When it comes to <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing in Amarillo</a>, it's important to choose a roofing contractor
          who can provide a wide range of services, including <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:underline">roof repair</a>, roof leak repair, roof maintenance,
          and flat roof repair to address any roofing issue. From <strong>roof leak repair</strong> to{" "}
          <strong>roof maintenance</strong> and <strong>flat roof repair</strong>, finding a contractor who
          can handle all of your <strong>commercial roofing</strong> needs is crucial. We also service surrounding areas including <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a> and <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">Odessa</a>.
        </p>

        <p>
          One of the key factors to consider when selecting a <strong>roofing contractor</strong> is their{" "}
          <strong>experience and reputation</strong>. A contractor with years of experience in <strong>commercial roof repair</strong> will have the
          knowledge and expertise to effectively diagnose and fix any <strong>roofing problem</strong>. A contractor with a positive reputation in the community is more likely to provide reliable and
          high-quality services. In Amarillo, it's especially important to choose a contractor who uses{" "}
          <strong>high-quality materials</strong>.
        </p>

        <p>
          The harsh climate in the area requires durable and long-lasting roofing solutions that can
          withstand extreme weather conditions including hail, wind, and temperature fluctuations. Amarillo's location in Hail Alley creates unique commercial roof repair challenges that require specialized expertise and rapid response capabilities.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Commercial Roof Repair Techniques for Amarillo Businesses</h2>

        <p>
          Commercial roof repair in Amarillo demands sophisticated diagnostic techniques and repair methods designed for the High Plains environment. Our certified technicians utilize infrared thermography to identify hidden moisture intrusion, thermal bridging, and insulation defects that compromise building energy efficiency and structural integrity. Advanced moisture detection equipment pinpoints problem areas before they develop into major failures requiring complete system replacement.
        </p>

        <p>
          Membrane repair techniques vary significantly based on roofing system type and damage severity. TPO membrane repairs utilize heat welding equipment that creates seamless, watertight bonds stronger than the original membrane. EPDM rubber roofing repairs employ specialized adhesives and seaming tapes designed for permanent adhesion in extreme temperature conditions. PVC membrane repairs require hot-air welding techniques that chemically bond repair materials to existing membranes for permanent, leak-proof repairs.
        </p>

        <p>
          Flat roof drainage issues represent the most common commercial roofing problems in Amarillo, where sudden thunderstorms can deposit several inches of rainfall in minutes. Ponding water accelerates membrane deterioration and creates potential structural loading problems that compromise building safety. Our repair teams install additional roof drains, modify existing drainage systems, and perform precision slope corrections using lightweight insulation tapers that restore proper water flow without adding excessive structural loads.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Emergency Commercial Roof Repair Services for Critical Operations</h2>

        <p>
          Amarillo's severe weather patterns including hailstorms, high winds, and sudden temperature swings can cause catastrophic commercial roof damage that threatens business operations and valuable interior assets. Our 24/7 emergency response teams maintain specialized equipment and materials for immediate temporary repairs that protect commercial properties until permanent solutions can be implemented during optimal weather conditions.
        </p>

        <p>
          Emergency tarping systems designed for commercial applications utilize heavy-duty reinforced tarps with professional-grade fastening systems that withstand sustained winds up to 70 mph. Temporary roof membrane patches provide interim weather protection for small damage areas while permanent repair materials are ordered and weather conditions improve. Emergency water extraction services prevent secondary damage to building contents and structural components during leak events.
        </p>

        <p>
          Critical facility operations including hospitals, data centers, and manufacturing facilities require immediate emergency response that minimizes operational disruption while providing effective weather protection. Our emergency teams coordinate with facility managers to identify critical areas, establish temporary weather barriers, and implement repair procedures that maintain business continuity during severe weather events common throughout the Texas Panhandle region.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Specialized Repair Solutions for Amarillo's Commercial Building Types</h2>

        <p>
          Healthcare facilities including Northwest Texas Healthcare System and BSA Health System require specialized commercial roof repair techniques that accommodate medical gas systems, emergency power equipment, and infection control requirements. Hospital roof repairs coordinate with facility engineering teams to ensure critical life-safety systems remain operational during repair activities while maintaining sterile environments essential for patient safety.
        </p>

        <p>
          Educational institution repairs for Amarillo ISD facilities and West Texas A&M University require cost-effective solutions that coordinate with academic schedules and budget constraints. School roof repairs often utilize phased approaches that address critical areas during summer breaks while implementing long-term maintenance programs that extend roof life and control future repair costs.
        </p>

        <p>
          Industrial facility repairs for manufacturing, processing, and warehouse operations require specialized techniques that accommodate production equipment, overhead crane systems, and chemical exposure concerns. These repairs often involve working around heavy machinery and hazardous materials while maintaining the environmental controls essential for continuous industrial operations throughout Amarillo's diverse manufacturing sector.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Hail Damage Assessment and Insurance Claim Support for Commercial Properties</h2>

        <p>
          Amarillo's location in Hail Alley creates frequent opportunities for significant commercial roof damage that requires expert assessment and insurance claim documentation. Our certified inspectors utilize industry-standard damage assessment techniques including core cuts, membrane thickness measurements, and impact testing to document hail damage severity and recommend appropriate repair or replacement strategies.
        </p>

        <p>
          Insurance claim support includes detailed photographic documentation, material damage assessments, and cost estimates that accurately reflect repair requirements and local labor costs. Our experienced project managers work directly with insurance adjusters to ensure commercial property owners receive fair settlements that cover complete repair costs without hidden deficiencies that could compromise future performance.
        </p>

        <p>
          Storm damage documentation utilizes advanced techniques including aerial drone surveys, thermal imaging, and moisture detection that provide comprehensive damage assessment for large commercial facilities. These techniques identify both obvious and hidden damage that might be overlooked during standard visual inspections but could lead to future problems if not addressed during insurance claim repairs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Preventive Maintenance and Early Problem Detection for Commercial Roofing</h2>

        <p>
          Comprehensive preventive maintenance programs designed specifically for Amarillo's climate conditions help commercial property owners avoid costly emergency repairs while extending roof system life. Regular inspections identify minor problems before they develop into major failures that could disrupt business operations or require complete system replacement during peak business periods.
        </p>

        <p>
          Seasonal maintenance schedules coordinate with Amarillo's weather patterns to address specific concerns during optimal conditions. Spring inspections focus on winter storm damage and preparation for severe weather season. Summer maintenance addresses UV damage and heat-related expansion issues. Fall preparations ensure drainage systems are clear of debris before winter precipitation and freeze-thaw cycles begin.
        </p>

        <p>
          Predictive maintenance utilizing infrared thermography, moisture meters, and core sampling techniques helps identify potential failure points before they compromise building operations or require expensive emergency repairs. These diagnostic techniques provide early warning of membrane deterioration, insulation saturation, and structural concerns that could affect building performance and occupant comfort.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Energy-Efficient Repair Solutions and Building Performance Enhancement</h2>

        <p>
          Commercial roof repairs in Amarillo provide opportunities to improve building energy efficiency through advanced material selection and installation techniques. High-reflectance membrane repairs reduce cooling loads during Amarillo's extended summer season while improving occupant comfort and reducing operational costs for commercial properties throughout the Texas Panhandle region.
        </p>

        <p>
          Insulation upgrades during roof repair projects provide cost-effective methods for improving building thermal performance while addressing roof system deficiencies. Additional insulation layers, vapor barriers, and thermal break installations reduce energy consumption and improve indoor environmental quality for commercial facilities that operate year-round in Amarillo's challenging climate.
        </p>

        <p>
          Cool roofing technologies integrated during repair projects include reflective coatings, light-colored membranes, and specialized granule systems that reduce heat absorption while extending roof life. These technologies prove especially beneficial for retail facilities, warehouses, and manufacturing operations that experience high internal heat loads during Amarillo's summer months when temperatures regularly exceed 90°F for extended periods.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Commercial Roofing Repair Technologies and Materials</h2>

        <p>
          Single-ply membrane repair systems represent the most advanced technology for commercial roof repairs in Amarillo's demanding climate. TPO (Thermoplastic Polyolefin) membrane repairs utilize automated welding equipment that creates seamless, chemically-bonded joints stronger than the original material. These repairs withstand thermal cycling, UV exposure, and chemical attack while providing 20+ year performance in High Plains conditions.
        </p>

        <p>
          Modified bitumen repair systems using APP (Atactic Polypropylene) and SBS (Styrene-Butadiene-Styrene) polymers offer enhanced flexibility for buildings experiencing significant thermal movement. Cold-applied systems eliminate fire hazards during repairs while providing superior adhesion and weather resistance. These systems prove especially valuable for occupied buildings where hot-work restrictions limit repair options.
        </p>

        <p>
          Fluid-applied roofing systems provide seamless repair solutions for complex roof geometries including penetrations, equipment curbs, and expansion joints. Silicone, polyurethane, and acrylic systems offer different performance characteristics suited to specific repair requirements. Advanced formulations resist ponding water, UV degradation, and thermal shock while providing renewable surface protection.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Specialized Repair Solutions for Amarillo's Industrial and Healthcare Sectors</h2>

        <p>
          Amarillo's major healthcare facilities including Northwest Texas Healthcare System, BSA Health System, and Texas Tech University Health Sciences Center require specialized commercial roof repair approaches that accommodate life-safety equipment and maintain sterile environments. Hospital roof repairs coordinate with infection control protocols, emergency power systems, and medical gas installations while ensuring uninterrupted patient care operations.
        </p>

        <p>
          Manufacturing and processing facilities throughout Amarillo require roof repairs that accommodate production equipment, chemical exposure, and environmental controls. Food processing facilities demand repairs using FDA-approved materials and installation procedures that prevent contamination risks. Chemical and petroleum facilities require specialized safety protocols and fire-resistant repair materials.
        </p>

        <p>
          Agricultural processing and storage facilities unique to the Texas Panhandle require roof repairs resistant to ammonia exposure, grain dust, and extreme loading conditions. These facilities often operate 24/7 during harvest seasons, demanding repair schedules that minimize operational disruption while providing immediate weather protection for valuable stored crops and processing equipment.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Climate-Adaptive Repair Strategies for High Plains Conditions</h2>

        <p>
          Amarillo's continental climate with extreme temperature variations requires specialized repair techniques that accommodate thermal stress and material expansion. Daily temperature swings of 40-50 degrees create unique challenges for membrane repairs, requiring flexible materials and expansion-accommodating installation methods that prevent premature failure.
        </p>

        <p>
          Wind-resistant repair systems address Amarillo's persistent high winds and severe weather events. Mechanically-attached membrane repairs utilize enhanced fastening schedules and wind-uplift testing to ensure repairs withstand sustained winds over 70 mph. Edge securement details receive special attention as these areas experience the highest stress during wind events common throughout the Texas Panhandle.
        </p>

        <p>
          UV-resistant repair materials and installation techniques address the intense solar radiation exposure at Amarillo's 3,600-foot elevation. Specialized membrane compounds, reflective coatings, and UV-blocking additives extend repair life while maintaining performance characteristics throughout the extended sunny seasons typical of High Plains climates.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Quality Control and Testing Procedures for Commercial Roof Repairs</h2>

        <p>
          Electronic leak detection systems using low-voltage electrical testing provide precise identification of membrane breaches and installation defects. These systems detect pinhole leaks and installation flaws that traditional flood testing cannot identify, ensuring complete weather-tightness before project completion. Vector mapping pinpoints exact leak locations for targeted repairs without unnecessary membrane damage.
        </p>

        <p>
          Infrared thermography performed after repair completion verifies proper insulation installation and identifies thermal bridging that could compromise energy efficiency. Thermal imaging also detects moisture retention in existing insulation systems that might not be visible during conventional inspections but could lead to future problems if not addressed.
        </p>

        <p>
          Core sampling and laboratory testing verify material compatibility and installation quality for critical repair applications. Adhesion testing, tensile strength measurement, and accelerated aging tests ensure repair materials meet or exceed manufacturer specifications while providing long-term performance in Amarillo's challenging environmental conditions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Emergency Response Protocols and Business Continuity Planning</h2>

        <p>
          Commercial roof emergencies in Amarillo require immediate response capabilities that protect business operations and valuable interior assets. Our emergency response teams maintain pre-positioned materials, specialized equipment, and trained personnel available 24/7 for rapid deployment during severe weather events, system failures, or unexpected damage situations that threaten commercial operations.
        </p>

        <p>
          Temporary weather protection systems designed for commercial applications utilize heavy-duty materials and professional installation techniques that provide reliable protection during emergency situations. Emergency tarping, temporary membrane patches, and interim drainage solutions protect commercial properties while permanent repairs are planned and implemented under optimal conditions.
        </p>

        <p>
          Business continuity planning incorporates roof emergency procedures that minimize operational disruption during repair activities. Coordination with facility managers, IT departments, and operations teams ensures critical business functions continue during repair work while protecting personnel safety and maintaining environmental controls essential for sensitive operations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Cost-Effective Repair Strategies and Budget Planning</h2>

        <p>
          Comprehensive roof assessments help commercial property owners prioritize repair needs and develop realistic budget plans that address immediate concerns while planning for long-term system replacement. Our assessment procedures identify repairs that provide maximum value while extending roof life and preventing costly emergency situations.
        </p>

        <p>
          Phased repair programs allow commercial properties to spread repair costs over multiple budget cycles while addressing the most critical issues first. These programs coordinate with business operations, seasonal requirements, and capital improvement planning to provide optimal value while maintaining building protection and operational efficiency.
        </p>

        <p>
          Value engineering techniques help identify cost-effective repair alternatives that provide equivalent performance at reduced costs. Material substitutions, installation method modifications, and scope adjustments can significantly reduce project costs while maintaining quality and longevity standards essential for commercial property protection.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Warranty and Performance Guarantees for Commercial Roof Repairs</h2>

        <p>
          Comprehensive warranty programs provide commercial property owners with long-term protection and peace of mind regarding repair quality and performance. Our repair warranties include materials coverage, workmanship guarantees, and performance standards that ensure repairs provide expected service life while maintaining building protection.
        </p>

        <p>
          Extended warranty options available through manufacturer partnerships provide additional protection for qualifying repairs using specified materials and installation procedures. These programs often include periodic inspections, preventive maintenance services, and priority emergency response that maximize repair value while ensuring long-term performance.
        </p>

        <p>
          Performance guarantees backed by independent testing and verification procedures ensure repair work meets specified standards for water-tightness, energy efficiency, and durability. These guarantees provide commercial property owners with objective measures of repair quality while establishing clear expectations for long-term performance in Amarillo's challenging climate conditions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Sustainable Commercial Roofing Solutions and Environmental Impact</h2>

        <p>
          Environmental responsibility in commercial roof repair includes sustainable material selection, waste minimization, and energy efficiency improvements that reduce operational carbon footprints while providing long-term cost savings. Green repair practices support Amarillo's commitment to environmental stewardship while delivering superior performance in challenging High Plains conditions.
        </p>

        <p>
          Recycled content roofing materials and renewable energy integration opportunities during repair projects provide pathways for commercial properties to achieve sustainability goals while maintaining operational efficiency. Solar-ready installations and cool roofing technologies reduce environmental impact while improving building performance throughout the Texas Panhandle region.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commercial Roofing Services</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Roof Leak Repair:</strong> Fast response to emergency leaks and water intrusion</li>
          <li><strong>Flat Roof Repair:</strong> Specialized in TPO, EPDM, and modified bitumen systems</li>
          <li><strong>Roof Maintenance:</strong> Preventive maintenance programs to extend roof life</li>
          <li><strong>Commercial Roof Replacement:</strong> Complete tear-off and new installation</li>
          <li><strong>Storm Damage Assessment:</strong> Insurance claim support and documentation</li>
          <li><strong>Roof Coating Systems:</strong> Extend roof life with reflective coatings</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose 5 Star for Commercial Roofing?</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Minimal business disruption during repairs</li>
          <li>Night and weekend work available</li>
          <li>Licensed and fully insured commercial roofing specialists</li>
          <li>Experience with all commercial roofing systems</li>
          <li>Direct insurance billing and claims assistance</li>
          <li>Warranty-backed workmanship</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Commercial Roofing Problems in Amarillo</h2>

        <p>
          Amarillo's commercial buildings face unique roofing challenges:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ponding Water:</strong> Flat roofs require proper drainage to prevent water damage</li>
          <li><strong>Hail Damage:</strong> Impact from hailstorms can compromise membrane integrity</li>
          <li><strong>Wind Damage:</strong> High winds can lift membrane edges and flashings</li>
          <li><strong>UV Degradation:</strong> Intense sun exposure breaks down roofing materials over time</li>
          <li><strong>Thermal Expansion:</strong> Temperature swings cause expansion and contraction</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Preventive Maintenance Programs</h2>

        <p>
          Protect your investment with our commercial roof maintenance programs:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Bi-annual professional inspections</li>
          <li>Priority emergency service for maintenance customers</li>
          <li>Detailed inspection reports with photos</li>
          <li>Minor repairs included in maintenance agreement</li>
          <li>Extended warranty protection</li>
          <li>Budget-friendly monthly payment plans</li>
        </ul>
      </div>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-brand-gold/20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-brand-brown">Need Commercial Roof Repair in Amarillo?</h2>
        <p className="mb-6 text-gray-700">
          Contact 5 Star Commercial Roofing for fast, professional commercial roof repair and maintenance.
          We offer free estimates and emergency service for commercial properties.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:8066226041"
            className="btn-primary-hero"
          >
            📞 Call (806) 622-6041
          </a>
          <a
            href="/contact/"
            className="bg-white border-2 border-brand-gold text-brand-brown hover:bg-brand-gold px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/commercial-roofing-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Commercial Roofing</h3>
            <p className="text-sm text-gray-600">Complete commercial roofing solutions</p>
          </a>
          <a href="/roof-repair-services-in-amarillo/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Roof Repair Services</h3>
            <p className="text-sm text-gray-600">Expert roof repairs for all roof types</p>
          </a>
          <a href="/hail-damage-repair-amarillo-tx/" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="font-bold text-brand-brown mb-2">Storm Damage Repair</h3>
            <p className="text-sm text-gray-600">Insurance claims and storm damage restoration</p>
          </a>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Serving West Texas</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Amarillo Roofing</a>
          <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
          <a href="/canyon-tx-roofing/" className="text-brand-gold hover:underline">• Canyon Roofing</a>
          <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
