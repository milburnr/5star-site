import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Amarillo | 5 Star',
  description: 'Hail Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Hail Damage Repair Services",
                      "url": "/roof-hail-damage-repair-services/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-hail-damage-repair-services-in-amarillo-tx/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Roof Hail Damage Repair Services in Amarillo TX</h1>
            <p className="hero-subtitle">Hail Alley Specialists - Free Inspections & Insurance Assistance</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Hail Inspection</a>
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
              <strong>Amarillo sits in the heart of Hail Alley.</strong> When homeowners in Amarillo TX find themselves faced with the aftermath of a hailstorm, addressing <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">roof hail damage</a> promptly becomes their top priority. The Texas Panhandle experiences some of the most severe hail storms in the United States, with baseball to softball-sized hail damaging thousands of roofs every year.
            </p>
            <p className="text-xl text-gray-600">
              At 5 Star Commercial Roofing, we specialize in efficient roof hail damage repair services throughout Amarillo TX and surrounding areas. Our team provides swift and professional <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline">commercial roofing</a> services with expert care and top-notch craftsmanship. We handle everything from free inspections to complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof restoration</a>, working directly with your insurance company to maximize your claim.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Our Hail Damage Repair Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Hail Damage Inspections</h3>
                <p className="text-gray-700 mb-4">After any Amarillo hail storm, we provide completely free, no-obligation inspections. Our certified roofing contractors use professional techniques to identify all hail damage—including hidden damage invisible to untrained eyes.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 100% free, no obligation</li>
                  <li>✓ Professional photo documentation</li>
                  <li>✓ Insurance-ready damage reports</li>
                  <li>✓ Comprehensive roof assessment</li>
                  <li>✓ Same-day or next-day scheduling</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Claim Assistance</h3>
                <p className="text-gray-700 mb-4">Navigating insurance claims can be overwhelming. We handle all the paperwork, documentation, and communication with your insurance company to ensure you receive the maximum coverage you deserve.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Complete claim documentation</li>
                  <li>✓ Meet with insurance adjusters</li>
                  <li>✓ Professional damage photography</li>
                  <li>✓ Detailed repair estimates</li>
                  <li>✓ Maximize your claim approval</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔨</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Expert Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Our skilled team specializes in repairing all types of hail damage using high-quality materials and proven techniques. We restore your roof to peak condition with comprehensive warranties on all work.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Shingle bruising and granule loss repair</li>
                  <li>✓ Metal roofing dent repair</li>
                  <li>✓ Flashing and vent replacement</li>
                  <li>✓ Complete roof restoration</li>
                  <li>✓ Quality materials built for Hail Alley</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Emergency Repair Services</h3>
                <p className="text-gray-700 mb-4">Severe hail can create immediate leaks and damage. We offer emergency roof repair services to prevent further water damage to your home or business while we work on your insurance claim.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 24/7 emergency response</li>
                  <li>✓ Temporary leak repairs</li>
                  <li>✓ Tarp installation if needed</li>
                  <li>✓ Prevent interior water damage</li>
                  <li>✓ Fast response times</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-yellow-50 border-l-4 border-brand-gold -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Why Choose Us for Hail Damage Repair?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Alley Experts</h3>
                <p className="text-gray-700">Over 10 years specializing in Texas Panhandle hail damage. We know exactly what to look for and what insurance companies require for full claim approval.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Specialists</h3>
                <p className="text-gray-700">We work directly with all major insurance companies. Our proper documentation and expert negotiation maximize your coverage and minimize out-of-pocket costs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-700">Premium Class 4 impact-resistant materials from top manufacturers. Comprehensive warranties protect your investment for decades.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Recognizing Hail Damage on Your Roof</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔵 Shingle Bruising & Granule Loss</h3>
                <p className="text-gray-700">Hail impacts create dark spots where granules are knocked off, exposing the asphalt layer underneath. This accelerates aging and leads to leaks within months if not repaired.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💢 Cracked or Broken Shingles</h3>
                <p className="text-gray-700">Large hail can crack shingles completely, creating immediate leak points. Even small cracks allow water penetration during heavy rains.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🎯 Dented Roof Vents & Flashing</h3>
                <p className="text-gray-700">Metal components show obvious dents from hail impacts. These are easy indicators that your shingles likely have hidden damage too.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💧 Water Stains Inside</h3>
                <p className="text-gray-700">Interior water stains or ceiling discoloration after a hail storm indicate roof penetration requiring immediate attention.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">The Hail Damage Repair Process in Amarillo</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Free Inspection & Documentation</h3>
                  <p className="text-gray-700">We conduct a thorough inspection, photographing all damage and creating a comprehensive report. This typically takes 30-60 minutes and is always free.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Insurance Claim Filing</h3>
                  <p className="text-gray-700">We help you file your claim with detailed documentation, photos, and estimates. We can also meet with your adjuster to ensure all damage is recognized.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Claim Approval & Scheduling</h3>
                  <p className="text-gray-700">Once your claim is approved, we schedule your repair or replacement. Most projects are completed in 1-3 days depending on size and weather.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Professional Repair & Restoration</h3>
                  <p className="text-gray-700">Our certified crews complete all repairs using premium materials. We conduct a final inspection and cleanup, leaving your property spotless.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">Warranty & Follow-Up</h3>
                  <p className="text-gray-700">All work comes with comprehensive warranties. We follow up after completion to ensure your complete satisfaction.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance Coverage for Hail Damage</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Most homeowners and commercial insurance policies in Texas cover hail damage 100% (minus your deductible). Insurance companies recognize Amarillo as Hail Alley and expect frequent claims.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">✓ What's Typically Covered:</h3>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Complete roof replacement if damage is severe</li>
                    <li>Repair of damaged shingles, vents, and flashing</li>
                    <li>Code upgrades required by current building standards</li>
                    <li>Matching shingles (or full replacement if match unavailable)</li>
                    <li>Removal and disposal of damaged materials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">⚠️ Important Deadlines:</h3>
                  <p className="text-gray-700 ml-4">Most insurance policies require claims to be filed within 1 year of the hail event. Don't wait—schedule your free inspection as soon as possible after any hail storm.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">🌩️ Recent Hail Storm in Amarillo?</h2>
            <p className="text-lg text-gray-800 mb-6">
              Don't wait to assess the damage. Even if you don't see obvious problems, hidden hail damage can lead to expensive leaks and interior damage over time. Our free inspection takes less than an hour and provides peace of mind.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-blue-800 mb-2">📞 Schedule Your Free Hail Damage Inspection</p>
              <p className="text-gray-700">Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or <a href="/contact/" className="text-brand-gold font-bold">request online</a>. We'll inspect your roof within 24-48 hours—completely free with no obligation.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Expert Hail Damage Repair in Amarillo TX</h2>
            <p className="cta-text">Hail Alley specialists with over 10 years experience. Free inspections, insurance assistance, and quality repairs backed by comprehensive warranties.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Free Hail Inspection</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">Related Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Replacement</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/roof-repair-services-in-amarillo/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Roof Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/contact/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Hail Damage Repair","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"telephone":"+18066226041","address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"}},"areaServed":[{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}}],"offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free hail damage inspections"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Hail Damage Repair Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Free Hail Damage Inspections"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Insurance Claim Assistance"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hail Damage Repair"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Emergency Repair Services"}}]}})}}/>
    </div>
  );
}
