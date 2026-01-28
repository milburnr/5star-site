import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Midland | 5 Star',
  description: 'Hail Damage Repair in Midland, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function HailDamageMidlandPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Roof Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Midland", url: "/hail-damage-roof-repair-midland-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Hail Damage Roof Repair in Midland, TX</h1>
            <p className="hero-subtitle">Permian Basin Storm Damage Experts | Free Inspections</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Schedule Inspection</a>
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
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              <strong>Hail is probably the biggest threat of damage to a Midland/Odessa roof.</strong> The Permian Basin experiences severe thunderstorms with large hail multiple times per year, and unpredictable weather patterns where hail and severe storms can wreak havoc on roofing systems.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              5 Star Commercial Roofing specializes in hail damage detection, insurance claims, and complete roof restoration for Midland properties. We provide free inspections and handle your insurance claim from documentation to final installation.
            </p>
            <div className="bg-brand-gold-light p-6 rounded-lg">
              <p className="font-semibold text-brand-brown mb-2">🚀 Same-Day Inspections Available</p>
              <p className="text-gray-700">Serving all of Midland including North Midland, West Midland, Golf Course Road area, and Loop 250 corridor. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> now.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Our Hail Damage Repair Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-700">Comprehensive roof assessment with drone photography and professional documentation of all hail damage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claims</h3>
                <p className="text-gray-700">We prepare detailed reports and meet with your adjuster to ensure maximum claim approval.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Expert Repairs</h3>
                <p className="text-gray-700">Professional installation using impact-resistant materials built for Permian Basin weather.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Midland Property Owners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="text-4xl">🌪️</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Storm Damage Specialists</h3>
                  <p className="text-gray-700">Over 10 years handling Permian Basin hail storms. We know Midland weather patterns and what insurance companies look for.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Fast Response</h3>
                  <p className="text-gray-700">Same-day inspections available throughout Midland. The sooner you file, the sooner you get your new roof.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Insurance Experts</h3>
                  <p className="text-gray-700">We handle all paperwork and meet with adjusters. Most repairs are covered 100% (minus your deductible).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Impact-Resistant Materials</h3>
                  <p className="text-gray-700">Class 4 hail-resistant shingles protect against future Midland storms and may qualify for insurance discounts.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Common Hail Damage in Midland</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">🔹 Granule Loss</h3>
                <p className="text-gray-700">Hail impacts knock protective granules off shingles, exposing asphalt to Midland's intense UV. This accelerates aging and leads to premature failure.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">🔹 Shingle Bruising</h3>
                <p className="text-gray-700">Large hail creates soft spots that break the seal. In Midland's temperature extremes, these damaged areas crack and leak rapidly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">🔹 Vent & Flashing Damage</h3>
                <p className="text-gray-700">Roof vents, flashing, and pipe boots can be dented by hail. These are critical waterproofing components - damage means leaks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-3">🔹 Weakened Wind Resistance</h3>
                <p className="text-gray-700">Hail loosens adhesive strips. High winds in Midland can then blow off weakened shingles, exposing your property to water damage.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Insurance & Pricing in Midland</h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Good news:</strong> Most hail damage in Midland is covered 100% by homeowner's insurance, minus your deductible. Complete roof replacements are typically approved when hail damage exceeds insurance thresholds.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-3">What Insurance Covers:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Complete roof tear-off and disposal</li>
                  <li>✓ Premium impact-resistant shingles</li>
                  <li>✓ All underlayment and ice/water shield</li>
                  <li>✓ New flashing, vents, and accessories</li>
                  <li>✓ Proper ventilation upgrades</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-3">Average Midland Costs:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Small home: $7,000 - $11,000</li>
                  <li>• Medium home: $11,000 - $16,000</li>
                  <li>• Large home: $16,000 - $25,000+</li>
                  <li className="italic">You typically pay only your deductible</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown">📋 Free Inspection & Estimate</p>
              <p className="text-gray-700">We provide free hail damage inspections throughout Midland with no obligation. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> to schedule.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-3xl font-bold mb-6 text-red-700">Emergency Hail Damage Services</h2>
            <p className="text-lg text-gray-800 mb-6">
              <strong>Active leak after storm?</strong> We provide 24/7 emergency tarping and temporary repairs throughout Midland. Don't wait - water damage compounds quickly.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-red-700 mb-2">🚨 Call Now for Emergency Service</p>
              <p className="text-2xl font-bold text-brand-gold"><a href="tel:8066226041">(806) 622-6041</a></p>
              <p className="text-gray-700 mt-2">Available 24/7 throughout Midland and the Permian Basin</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Get Your Free Hail Damage Inspection</h2>
            <p className="cta-text">
              Serving Midland, Odessa, and the Permian Basin with expert hail damage repair. Free inspections, insurance claim assistance, and professional repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Schedule Inspection</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Midland Roofing Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/midland-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Midland Services</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/flat-roof-repair-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Flat Roof Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Info</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Hail Damage Roof Repair","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
