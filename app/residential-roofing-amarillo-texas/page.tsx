import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing Amarillo TX | 5 Star Roofing',
  description: "Expert residential roofing services in Amarillo, Texas. Roof replacement, repair, and upgrades for Amarillo homes. Free estimates. Call (806) 622-6041.",
};

export default function ResidentialAmarilloPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Residential Roofing",
                      "url": "/residential-roofing/"
              },
              {
                      "name": "Amarillo",
                      "url": "/residential-roofing-amarillo-texas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Residential Roofing in Amarillo, TX</h1>
            <p className="hero-subtitle">Expert Roof Replacement & Repair for Amarillo Homes</p>
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
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
              Your Amarillo home deserves a roof that can handle Texas Panhandle weather. From Wolflin's historic homes to new construction in Southwest Amarillo, we provide complete residential roofing services built to withstand our extreme climate.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing has been protecting Amarillo homes for over 10 years. We use premium materials rated for hail, high winds, and temperature extremes—backed by industry-leading warranties.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Our Residential Roofing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Complete Roof Replacement</h3>
                <p className="text-gray-700 mb-4">Full tear-off and replacement with premium asphalt shingles or metal roofing. We handle everything from permits to final cleanup. Most projects completed in 1-2 days.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Architectural asphalt shingles</li>
                  <li>✓ Impact-resistant (Class 4) options</li>
                  <li>✓ Metal roofing systems</li>
                  <li>✓ Premium underlayment</li>
                  <li>✓ Proper ventilation</li>
                  <li>✓ 50-year warranties available</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Roof Repair Services</h3>
                <p className="text-gray-700 mb-4">From minor leak repairs to storm damage fixes, we handle all residential roof repairs throughout Amarillo. Fast response and guaranteed workmanship.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Missing/damaged shingle replacement</li>
                  <li>✓ Flashing repairs</li>
                  <li>✓ Vent and pipe boot replacement</li>
                  <li>✓ Storm damage repairs</li>
                  <li>✓ Emergency tarping</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Ventilation Upgrades</h3>
                <p className="text-gray-700 mb-4">Proper attic ventilation is critical in Amarillo's 100°F+ summers. We install ridge vents, soffit vents, and powered systems to extend roof life and reduce cooling costs.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Ridge vent installation</li>
                  <li>✓ Soffit vent improvements</li>
                  <li>✓ Attic fan systems</li>
                  <li>✓ Temperature reduction</li>
                  <li>✓ Energy savings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Insurance Claim Assistance</h3>
                <p className="text-gray-700 mb-4">Had recent hail or wind damage? We handle your insurance claim from inspection to installation. Most storm damage is covered 100% by insurance.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free damage inspections</li>
                  <li>✓ Complete documentation</li>
                  <li>✓ Meet with adjusters</li>
                  <li>✓ Maximize your claim</li>
                  <li>✓ Direct insurance billing</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Amarillo Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Local Amarillo Company</h3>
                <p className="text-gray-700">Located at 2909 S Western St. We're not storm chasers—we'll be here for your warranty needs decades from now.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Premium Materials</h3>
                <p className="text-gray-700">We use only top-tier shingles rated for Texas weather. Class 4 impact-resistant options available for maximum protection.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-700">Our crews are trained, insured, and experienced. We follow manufacturer specifications to ensure your warranty stays valid.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Roofing Challenges in Amarillo</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🌪️ Severe Hail & Wind</h3>
                <p className="text-gray-700">Amarillo sits in Hail Alley with frequent storms. We install impact-resistant shingles and ensure proper wind resistance for 90+ mph gusts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">🌡️ Extreme Temperatures</h3>
                <p className="text-gray-700">From 100°F+ summers to below-zero winters, Amarillo roofs face 120+ degree temperature swings annually. We use materials designed for thermal expansion/contraction.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-2">☀️ Intense UV Exposure</h3>
                <p className="text-gray-700">At 3,605 feet elevation with 260+ sunny days, Amarillo's UV is brutal on roofing. We install UV-stabilized shingles with maximum granule protection.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Residential Roofing Pricing in Amarillo</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg"><strong>Average roof replacement costs in Amarillo:</strong></p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>1,200-1,800 sq ft home:</strong> $7,000 - $11,000</li>
                <li>• <strong>1,800-2,500 sq ft home:</strong> $11,000 - $16,000</li>
                <li>• <strong>2,500-3,500+ sq ft home:</strong> $16,000 - $25,000+</li>
              </ul>
              <p className="italic mt-4">Factors affecting price: roof pitch, layers to remove, material choice, ventilation needs, and accessibility.</p>
              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="font-semibold text-brand-brown mb-2">📋 Free Estimates</p>
                <p>We provide detailed, no-obligation estimates for all residential roofing projects in Amarillo. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Ready for a New Roof in Amarillo?</h2>
            <p className="cta-text">Free estimates, premium materials, expert installation. Serving Wolflin, Southwest Amarillo, San Jacinto, and all Amarillo neighborhoods.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Get Free Estimate</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Amarillo Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Amarillo Services</a>
              <span className="text-gray-400">•</span>
              <a href="/hail-damage-roof-repair-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/roof-inspections-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Inspections</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing Info</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Residential Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
