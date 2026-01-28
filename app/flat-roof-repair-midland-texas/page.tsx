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
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6">
              <strong>Flat roofs in Midland face extreme Permian Basin weather.</strong> Intense heat, severe hail, ponding water, and UV exposure create leaks, membrane damage, and premature failure. Fast, expert repairs prevent minor problems from becoming major disasters.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in flat roof repair throughout Midland. From leak detection to complete membrane restoration, we handle all TPO, EPDM, PVC, and modified bitumen systems. Emergency repairs available 24/7.
            </p>
          </div>
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
