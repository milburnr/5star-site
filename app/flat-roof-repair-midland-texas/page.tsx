import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Flat Roof Repair in Midland, TX| Commercial Specialists',
  description: "Expert flat roof repair in Midland, Texas. TPO, EPDM, membrane repairs, leak detection. Emergency service available. Free inspections. Call today (806) 622-6041",
};

export default function FlatRoofMidlandPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Flat Roof Repair", url: "/roof-repair-amarillo/" },
        { name: "Midland", url: "/flat-roof-repair-midland-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Flat Roof Repair in Midland, TX</h1>
            <p className="hero-subtitle">Commercial & Residential Flat Roof Specialists</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Inspection</a>
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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Expert Flat Roof Repair for Midland's Commercial Sector</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Flat roofs in Midland face extreme Permian Basin weather.</strong> Intense heat, severe hail, ponding water, and UV exposure create leaks, membrane damage, and premature failure. Fast, expert repairs prevent minor problems from becoming major disasters that disrupt critical petroleum industry operations and commercial facilities.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              5 Star Commercial Roofing specializes in flat roof repair throughout Midland's diverse commercial sectors. From leak detection to complete membrane restoration, we handle all TPO, EPDM, PVC, and modified bitumen systems. Emergency repairs available 24/7 for petroleum industry facilities, office buildings, retail centers, and healthcare facilities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Midland's role as the petroleum capital of West Texas creates unique flat roof repair challenges for oil company headquarters, industrial facilities, and commercial buildings serving the energy sector. Our specialized expertise addresses chemical-resistant repairs, emergency response protocols, and compliance requirements specific to petroleum industry environments.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Advanced Flat Roof Repair Techniques for Petroleum Industry Facilities
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Petroleum industry facilities in Midland require specialized flat roof repair techniques that address chemical exposure, fire safety requirements, and operational continuity demands specific to oil and gas operations. These facilities often house critical equipment and processes that cannot tolerate weather-related interruptions, making rapid, effective roof repairs essential for maintaining business operations throughout the Permian Basin.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Chemical-resistant repair materials become essential for facilities exposed to petroleum byproducts, drilling fluids, and industrial chemicals common in oil field service operations. PVC membrane repair systems provide superior chemical resistance compared to TPO or EPDM alternatives, while specialized adhesives and welding techniques ensure permanent bonds that withstand chemical exposure and thermal cycling in industrial environments.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Safety protocols for petroleum industry flat roof repairs include hot work permits, fire watch procedures, and specialized equipment designed for explosive atmosphere environments. Our certified technicians maintain training and certification for working near petroleum operations while utilizing non-sparking tools and emergency response equipment specifically designed for industrial environments.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Commercial Office Building Flat Roof Repair Excellence</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland's financial district and corporate headquarters buildings including high-rise petroleum company offices require sophisticated flat roof repair approaches that minimize disruption to business operations while addressing complex drainage systems, HVAC equipment integration, and aesthetic concerns appropriate for professional environments. These repairs often coordinate with building management systems and tenant operations to ensure continuous business functionality.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Executive office complexes and professional buildings throughout Midland need flat roof repairs that accommodate telecommunications equipment, emergency communication systems, and modern building technologies while maintaining quiet, comfortable environments essential for professional office operations and client interactions. Noise control during repair activities becomes critical for maintaining professional atmospheres.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Energy efficiency considerations during flat roof repairs include insulation upgrades, thermal bridge elimination, and cool roofing technologies that reduce operational costs for large office complexes while improving occupant comfort during Midland's extended summer periods with temperatures regularly exceeding 100°F for months at a time.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Industrial and Manufacturing Flat Roof Repair Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Manufacturing facilities serving Midland's petroleum industry require flat roof repairs that accommodate heavy industrial equipment, overhead crane systems, and specialized production processes that operate continuously during peak drilling seasons. These repairs must coordinate with production schedules and safety requirements while providing weather protection for valuable industrial equipment and work-in-progress materials.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Chemical processing and storage facilities require flat roof repairs that meet EPA and OSHA requirements for hazardous material handling while providing containment capabilities that prevent environmental contamination. Specialized drainage systems and emergency response access affect repair procedures and material selection for facilities handling petroleum industry chemicals and byproducts.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Warehouse and distribution facilities supporting petroleum industry logistics require flat roof repairs that accommodate loading dock operations, heavy equipment storage, and climate-controlled environments for temperature-sensitive petroleum industry supplies and equipment. These repairs often address large-span roofing systems with unique drainage and structural considerations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Healthcare Facility Flat Roof Repair Expertise</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland Memorial Hospital and associated healthcare facilities require specialized flat roof repair approaches that coordinate with critical medical operations, infection control protocols, and life-safety systems that operate around the clock. Hospital flat roof repairs must accommodate medical gas systems, backup power equipment, and emergency access routes while maintaining sterile environments essential for patient safety.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Medical office buildings and specialized healthcare facilities need flat roof repairs that provide quiet environments for patient care while supporting sensitive medical equipment and diagnostic systems that require consistent environmental conditions. These repairs often coordinate with medical equipment operations and patient scheduling to minimize disruption to healthcare services.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Emergency medical facilities and trauma centers require immediate flat roof repair responses that ensure continuous operation of critical life-saving equipment and services. Rapid repair capabilities and redundant weather protection systems help maintain medical operations during severe weather events that commonly affect the Permian Basin region.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Retail and Commercial Center Flat Roof Repair Services
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Shopping centers and retail facilities throughout Midland require flat roof repairs that minimize customer disruption while maintaining comfortable shopping environments during extreme West Texas weather conditions. These repairs often coordinate with retail operations and customer traffic patterns to ensure continuous business operations during peak petroleum industry activity periods.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Restaurant and hospitality facilities serving petroleum industry workers require flat roof repairs that accommodate specialized kitchen equipment, dining areas, and entertainment systems while providing year-round weather protection for facilities that operate extended hours to serve industry shift schedules common in 24/7 petroleum operations throughout the Permian Basin.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Automotive service facilities and equipment dealerships serving petroleum industry fleet operations require flat roof repairs that accommodate vehicle service areas, parts storage, and customer waiting areas while providing protection for expensive automotive equipment and inventory essential for supporting petroleum industry transportation and logistics operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Educational Institution Flat Roof Repair Excellence</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              University of Texas Permian Basin facilities require cost-effective flat roof repairs that coordinate with academic schedules while accommodating specialized educational equipment, research facilities, and student housing operations. These repairs often utilize phased approaches that address critical areas during summer breaks while implementing maintenance programs that control long-term costs.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Public school facilities serving petroleum industry families require flat roof repairs that balance budget constraints with durability requirements while providing energy-efficient solutions that control operational costs for large student populations in Midland's challenging climate conditions that require extensive air conditioning throughout extended summer periods.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Petroleum industry training facilities and technical education centers require flat roof repairs that accommodate industrial training equipment, safety systems, and specialized ventilation while providing weather protection for educational programs that prepare workers for careers in the Permian Basin energy sector and related industries.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Emergency Response and Weather Protection for Critical Flat Roof Systems
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Midland's location in Hail Alley creates frequent opportunities for catastrophic flat roof damage that requires immediate emergency response to protect valuable petroleum industry equipment and critical business operations. Our 24/7 emergency response teams maintain specialized equipment and materials for rapid deployment throughout the Permian Basin region during severe weather events.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Severe weather events including hailstorms, high winds, and flash flooding can cause immediate threats to flat roofing systems that protect critical petroleum industry operations and commercial facilities. Emergency tarping systems and temporary weather barriers provide interim protection while permanent repairs are planned and executed during optimal weather conditions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Rapid response capabilities specifically designed for petroleum industry environments include specialized safety equipment, chemical exposure protocols, and coordination with industrial emergency response teams. These capabilities ensure business continuity during weather events while maintaining safety standards required for petroleum industry operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-brown">Preventive Maintenance and Long-Term Performance for Commercial Flat Roofs</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Comprehensive preventive maintenance programs designed specifically for Midland's climate help commercial property owners avoid costly emergency flat roof repairs while extending system life and maintaining business operations. Regular inspections identify minor problems before they develop into major failures that could disrupt critical petroleum industry activities or commercial operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Predictive maintenance utilizing infrared thermography, moisture detection systems, and advanced diagnostic techniques helps identify potential failure points before they compromise building operations or require expensive emergency repairs during peak business periods. These techniques provide early warning systems that prevent costly business interruptions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Seasonal maintenance schedules coordinate with Midland's weather patterns and petroleum industry operational cycles to address specific flat roof concerns during optimal conditions. Spring preparations focus on severe weather readiness while fall maintenance ensures drainage systems are prepared for winter precipitation and freeze-thaw cycles that affect membrane performance.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Flat Roof Repair Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Leak Detection & Repair</h3>
                <p className="text-gray-700 mb-4">Finding leaks in flat roofs requires expertise. We use professional methods to locate leaks—even hidden ones—and repair them permanently.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Professional leak detection</li>
                  <li>✓ Infrared moisture scanning</li>
                  <li>✓ Membrane patching</li>
                  <li>✓ Seam repairs</li>
                  <li>✓ Flashing repairs</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Midland hail damages flat roof membranes, creating punctures, bruising, and compromised waterproofing. We repair or replace damaged sections.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Hail damage assessment</li>
                  <li>✓ Insurance documentation</li>
                  <li>✓ Membrane replacement</li>
                  <li>✓ System restoration</li>
                  <li>✓ Claim assistance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Membrane Repairs</h3>
                <p className="text-gray-700 mb-4">TPO, EPDM, and PVC membranes develop tears, punctures, and seam failures. We repair all membrane types using proper materials and techniques.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ TPO repairs and patches</li>
                  <li>✓ EPDM rubber repairs</li>
                  <li>✓ PVC membrane welding</li>
                  <li>✓ Seam re-welding</li>
                  <li>✓ Penetration flashing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">💦</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Ponding Water Solutions</h3>
                <p className="text-gray-700 mb-4">Ponding water accelerates roof deterioration and causes leaks. We fix drainage issues and address the root cause of standing water.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Drainage system repairs</li>
                  <li>✓ Slope correction</li>
                  <li>✓ Drain installation</li>
                  <li>✓ Tapered insulation systems</li>
                  <li>✓ Scupper repairs</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose Us for Flat Roof Repair</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fast Response</h3>
                <p className="text-gray-700">Same-day service available throughout Midland. Emergency repairs 24/7 to protect your property and minimize damage.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Expert Diagnosis</h3>
                <p className="text-gray-700">We find the actual source of leaks, not just symptoms. Professional equipment and 10+ years of experience.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Repairs</h3>
                <p className="text-gray-700">We use proper materials and techniques for lasting repairs. All work backed by our workmanship warranty.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Common Flat Roof Problems in Midland</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💦 Ponding Water</h3>
                <p className="text-gray-700">Poor drainage or structural settlement creates standing water. In Midland's heat, this accelerates membrane degradation and causes leaks within the ponding area.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔥 Heat & UV Damage</h3>
                <p className="text-gray-700">Permian Basin heat (100°F+) and intense UV rays break down membranes, causing brittleness, cracking, and premature failure—especially on dark EPDM roofs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">⛈️ Hail Impact</h3>
                <p className="text-gray-700">Midland hail creates punctures, membrane bruising, and compromised waterproofing. Even small hail causes hidden damage that leads to leaks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔗 Seam Failures</h3>
                <p className="text-gray-700">Seams are the weak point in any membrane system. Heat cycles, wind, and age cause seam separation—the most common source of flat roof leaks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏭 Flashing Issues</h3>
                <p className="text-gray-700">Penetrations (HVAC units, vents, pipes) require proper flashing. These are common leak points when flashing cracks, separates, or was improperly installed.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Flat Roof Repair Pricing in Midland</h2>
            <p className="text-lg text-gray-700 mb-6">
              Flat roof repair costs vary based on damage extent, roof type, and accessibility. Most repairs range from <strong>$300 to $3,000+</strong>.
            </p>
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-brand-brown mb-4">Typical Repair Costs</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Small leak repair:</strong> $300 - $800</li>
                <li><strong>Membrane patching (50-100 sq ft):</strong> $800 - $1,500</li>
                <li><strong>Seam repairs:</strong> $500 - $1,500</li>
                <li><strong>Flashing replacement:</strong> $400 - $1,200</li>
                <li><strong>Larger section replacement:</strong> $2,000 - $5,000+</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">Emergency repairs may include additional fees. Insurance often covers hail and storm damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown mb-2">📋 Free Inspections</p>
              <p className="text-gray-700">We provide free inspections and detailed repair estimates. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or <a href="/contact/" className="text-brand-gold font-bold">request online</a>.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-3xl font-bold mb-6 text-red-700">Emergency Flat Roof Repair</h2>
            <p className="text-lg text-gray-800 mb-6">
              <strong>Active leak causing water damage?</strong> We provide 24/7 emergency flat roof repairs throughout Midland. Fast response to minimize damage and protect your property.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-red-700 mb-2">🚨 Emergency: <a href="tel:8066226041" className="text-brand-gold">(806) 622-6041</a></p>
              <p className="text-gray-700">Available 24/7 for commercial and residential flat roof emergencies</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Signs You Need Flat Roof Repair</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🚨 Interior Water Stains</h3>
                <p className="text-gray-700">Brown stains on ceilings or walls indicate active or past leaks requiring immediate attention.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💦 Ponding Water 48+ Hours</h3>
                <p className="text-gray-700">Water remaining on your roof 48 hours after rain indicates drainage problems that will cause failure.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔍 Visible Membrane Damage</h3>
                <p className="text-gray-700">Cracks, blisters, punctures, or exposed areas mean your waterproofing is compromised.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">📈 Rising Energy Bills</h3>
                <p className="text-gray-700">Increased cooling costs can indicate wet insulation from undetected leaks.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Fix Your Midland Flat Roof</h2>
            <p className="cta-text">Expert flat roof repairs for commercial and residential properties. Free inspections and emergency service available.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Schedule Inspection</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Midland Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/midland-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Midland Services</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Flat Roof Repair","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
