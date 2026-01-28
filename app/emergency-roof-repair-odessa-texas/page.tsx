import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'Emergency Roof Repair in Odessa | 5 Star',
  description: 'Emergency Roof Repair in Odessa, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function EmergencyRepairOdessaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Emergency Roof Repair", url: "/emergency-roof-repair-amarillo/" },
        { name: "Odessa", url: "/emergency-roof-repair-odessa-texas/" }
      ]} />

      <section className="hero bg-red-900" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/80"></div>
        <FadeIn>
          <div className="hero-content relative z-10">
            <h1 className="hero-title">Emergency Roof Repair in Odessa, TX</h1>
            <p className="hero-subtitle">24/7 Storm Damage & Leak Response</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="bg-white text-red-700 px-8 py-4 rounded-md font-bold text-xl hover:bg-gray-100 transition-all shadow-lg">🚨 Call Now: (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary text-lg px-8 py-4">Request Emergency Service</a>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <p className="text-2xl text-red-800 font-bold mb-6">
              🚨 ROOF EMERGENCY? We respond immediately to storm damage, active leaks, and wind damage throughout Odessa.
            </p>
            <p className="text-xl text-gray-700">
              5 Star Commercial Roofing provides 24/7 emergency roof repair service. When storms hit Odessa, we're ready with emergency tarping, temporary repairs, and permanent solutions to protect your property.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Emergency Services Available 24/7</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Storm Damage Repair</h3>
                <p className="text-gray-700 mb-4">Odessa's severe weather causes wind damage, hail impacts, and blown-off shingles. We respond immediately after storms to assess damage and prevent further water intrusion.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Wind damage assessment</li>
                  <li>✓ Hail damage documentation</li>
                  <li>✓ Missing shingle replacement</li>
                  <li>✓ Structural damage repairs</li>
                  <li>✓ Insurance documentation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Active Leak Repair</h3>
                <p className="text-gray-700 mb-4">Water coming through your ceiling causes immediate damage to insulation, drywall, and belongings. We locate and stop leaks fast.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Immediate leak location</li>
                  <li>✓ Temporary waterproofing</li>
                  <li>✓ Interior damage mitigation</li>
                  <li>✓ Permanent leak repairs</li>
                  <li>✓ 24/7 availability</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Emergency Tarping</h3>
                <p className="text-gray-700 mb-4">When your roof is compromised, emergency tarping prevents further water damage until permanent repairs can be completed.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Professional-grade tarps</li>
                  <li>✓ Secure fastening methods</li>
                  <li>✓ Large area coverage</li>
                  <li>✓ Temporary weatherproofing</li>
                  <li>✓ Prevents interior damage</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="text-5xl mb-4">💨</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Wind Damage Repair</h3>
                <p className="text-gray-700 mb-4">Permian Basin winds can lift shingles, tear flashing, and expose underlayment. We secure your roof and replace damaged components.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Blown-off shingle replacement</li>
                  <li>✓ Flashing repairs</li>
                  <li>✓ Loose material securing</li>
                  <li>✓ Underlayment protection</li>
                  <li>✓ Full wind damage assessment</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Emergency Response Process</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">📞</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">1. Call Us</h3>
                  <p className="text-gray-700">24/7 emergency line: (806) 622-6041. We answer immediately.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">🚗</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">2. Fast Dispatch</h3>
                  <p className="text-gray-700">Emergency crews dispatched to your Odessa location within 1-2 hours.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">3. Assessment</h3>
                  <p className="text-gray-700">Quick damage assessment and immediate temporary repairs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">🛠️</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">4. Permanent Fix</h3>
                  <p className="text-gray-700">Schedule and complete permanent repairs quickly.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">When to Call for Emergency Roof Repair</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">🚨 Active Water Intrusion</h3>
                <p className="text-gray-700">Water actively coming through your ceiling or walls. This requires immediate response to prevent extensive interior damage.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">🌪️ Storm Damage</h3>
                <p className="text-gray-700">After severe storms: missing shingles, visible holes, hanging gutters, or debris on your roof. The next rain will cause leaks.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">🔥 Fire Damage</h3>
                <p className="text-gray-700">Roof fire damage requires immediate temporary protection to prevent weather exposure while insurance assessment proceeds.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">🌳 Tree Damage</h3>
                <p className="text-gray-700">Fallen trees or large branches puncturing your roof. Requires immediate tarping and debris removal.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">💨 Partial Roof Blow-Off</h3>
                <p className="text-gray-700">Large sections of roofing blown off by wind. Exposed decking needs immediate protection from elements.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Emergency Repair Costs in Odessa</h2>
            <p className="text-lg text-gray-700 mb-6">
              Emergency roof repair costs vary based on damage extent and urgency. Most emergency calls range from <strong>$500 to $5,000+</strong>.
            </p>
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-brand-brown mb-4">Typical Emergency Service Costs</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Emergency tarping:</strong> $500 - $1,500</li>
                <li><strong>Minor leak repair:</strong> $400 - $1,200</li>
                <li><strong>Shingle replacement (storm damage):</strong> $800 - $2,500</li>
                <li><strong>Large section replacement:</strong> $2,000 - $5,000+</li>
                <li><strong>Structural repairs:</strong> $1,500 - $8,000+</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">After-hours emergency service may include additional fees. Most storm damage is covered by insurance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown mb-2">💡 Insurance Coverage</p>
              <p className="text-gray-700">Most storm damage is covered by homeowners insurance. We document everything and work directly with your insurance company. Emergency tarping costs are typically reimbursed.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-500">
            <h2 className="text-4xl font-bold mb-6 text-red-700 text-center">24/7 Emergency Contact</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚨</div>
                <p className="text-2xl font-bold text-red-700 mb-4">ROOF EMERGENCY?</p>
                <p className="text-lg text-gray-700 mb-6">We're available 24 hours a day, 7 days a week for emergency roof repairs throughout Odessa and the Permian Basin.</p>
              </div>
              <div className="text-center">
                <a href="tel:8066226041" className="inline-block bg-red-600 text-white px-12 py-5 rounded-md font-bold text-2xl hover:bg-red-700 transition-all shadow-lg mb-4">
                  📞 CALL (806) 622-6041
                </a>
                <p className="text-gray-600">Available 24/7 for emergencies • Fast response times • Professional service</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Coverage Area Throughout West Texas</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-700 mb-4">
                We provide 24/7 emergency roof repair service throughout Odessa and the Permian Basin:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700 mb-6">
                <ul className="space-y-2">
                  <li>✓ Downtown Odessa</li>
                  <li>✓ West Odessa</li>
                  <li>✓ East Odessa</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Gardendale</li>
                  <li>✓ Goldsmith</li>
                  <li>✓ Crane</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Monahans</li>
                  <li>✓ Kermit</li>
                  <li>✓ Andrews</li>
                </ul>
              </div>
              <p className="text-lg text-gray-700">
                Beyond Odessa, we also serve <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Midland</a>, Lubbock, and the entire Texas Panhandle with the same 24/7 emergency response. Our regional coverage ensures fast help when you need it most.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section bg-red-700">
            <h2 className="cta-title text-white">Emergency Roof Repair - Call Now</h2>
            <p className="cta-text text-white">24/7 emergency service throughout Odessa. Fast response to protect your property.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="bg-white text-red-700 px-12 py-5 rounded-md font-bold text-xl hover:bg-gray-100 transition-all shadow-lg">🚨 CALL (806) 622-6041</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Odessa Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/odessa-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Odessa Services</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Emergency Roof Repair",
        "provider": {
          "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
          "name": "5 Star Commercial Roofing",
          "telephone": "+18066226041",
          "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2909 S Western St",
            "addressLocality": "Amarillo",
            "addressRegion": "TX",
            "postalCode": "79109",
            "addressCountry": "US"
          },
          "url": "https://www.5starcommercialroofing.com"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Odessa",
            "containedInPlace": {
              "@type": "State",
              "name": "Texas"
            }
          },
          {
            "@type": "City",
            "name": "Midland",
            "containedInPlace": {
              "@type": "State",
              "name": "Texas"
            }
          }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+18066226041",
            "contactType": "Emergency",
            "availableLanguage": "English",
            "areaServed": "US-TX",
            "hoursAvailable": "Mo-Su 00:00-24:00"
          }
        }
      })}}/>
    </div>
  );
}
