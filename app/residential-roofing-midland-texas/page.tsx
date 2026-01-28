import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing in Midland TX| Hail Damage Specialists',
  description: 'Residential Roofing in Midland, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function ResidentialMidlandPage() {
  return (
    <div className="min-h-screen">
      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Residential Roofing in Midland, TX</h1>
            <p className="hero-subtitle">Expert Home Roofing for the Permian Basin</p>
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
              <strong>Midland homeowners face unique roofing challenges.</strong> Permian Basin weather means extreme heat, severe hail storms, high winds, and UV exposure that ages roofs faster than most of Texas. Your home deserves protection built for these conditions.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> throughout Midland. From new construction to complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacements</a>, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage repairs</a> to routine maintenance, we protect Midland homes with quality materials and expert installation. We also serve <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:underline">Odessa</a>, <a href="/residential-roofing-lubbock-texas/" className="text-brand-gold hover:underline">Lubbock</a>, and the entire <a href="/" className="text-brand-gold hover:underline">Texas Panhandle region</a>.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Residential Roofing Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">New Roof Installation</h3>
                <p className="text-gray-700 mb-4">Complete roof replacements using premium materials built for Midland's climate. Asphalt shingles, metal roofing, tile, and more. All installations include comprehensive warranties.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Architectural shingles (30-50 year)</li>
                  <li>✓ Impact-resistant Class 4 shingles</li>
                  <li>✓ Metal roofing systems</li>
                  <li>✓ Tile and specialty materials</li>
                  <li>✓ Complete tear-off and replacement</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Midland experiences frequent severe hail. We specialize in hail damage detection, insurance documentation, and complete restoration to protect your home and maximize your claim.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free hail damage inspections</li>
                  <li>✓ Professional damage documentation</li>
                  <li>✓ Insurance claim assistance</li>
                  <li>✓ Work directly with adjusters</li>
                  <li>✓ Complete restoration services</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Repairs</h3>
                <p className="text-gray-700 mb-4">From minor leaks to storm damage, we handle all residential roof repairs throughout Midland. Fast response times and quality repairs that last.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Shingle replacement</li>
                  <li>✓ Flashing repairs</li>
                  <li>✓ Vent and chimney work</li>
                  <li>✓ Emergency repairs available</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Inspections</h3>
                <p className="text-gray-700 mb-4">Comprehensive roof inspections for Midland homes. Perfect for home purchases, insurance requirements, or preventive maintenance.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free inspections available</li>
                  <li>✓ Detailed written reports</li>
                  <li>✓ Photo documentation</li>
                  <li>✓ Insurance-ready assessments</li>
                  <li>✓ Preventive maintenance plans</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Midland Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Local Experience</h3>
                <p className="text-gray-700">Over 10 years protecting Midland homes. We understand Permian Basin weather and what your home needs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Specialists</h3>
                <p className="text-gray-700">We work directly with your insurance company to maximize coverage and minimize your out-of-pocket costs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Materials</h3>
                <p className="text-gray-700">Premium shingles, metal systems, and materials from top manufacturers. Comprehensive warranties on all work.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Roofing Challenges in Midland</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌡️ Extreme Heat & UV Exposure</h3>
                <p className="text-gray-700">Midland's intense summer heat (100°F+) and year-round UV exposure rapidly age roofing materials. We use reflective, UV-resistant shingles and proper ventilation to extend roof life.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">⛈️ Severe Hail Storms</h3>
                <p className="text-gray-700">The Permian Basin sees frequent large hail that can destroy roofs in minutes. Class 4 impact-resistant shingles protect your home and often qualify for insurance discounts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💨 High Wind Events</h3>
                <p className="text-gray-700">Midland's high winds can lift shingles and cause blow-offs. We use high-wind rated materials and proper installation techniques to prevent wind damage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏜️ Dust & Debris</h3>
                <p className="text-gray-700">West Texas dust storms deposit debris that can damage roofing materials and clog drainage systems. Regular inspections prevent small problems from becoming major issues.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Residential Roofing Costs in Midland</h2>
            <p className="text-lg text-gray-700 mb-6">
              Average residential roof replacement costs in Midland vary based on home size, material choice, and roof complexity. Most projects range from <strong>$7,000 to $25,000+</strong>.
            </p>
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-brand-brown mb-4">Typical Costs by Home Size (2025)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Small Home (1,200-1,800 sq ft):</strong> $7,000 - $11,000</li>
                <li><strong>Medium Home (1,800-2,500 sq ft):</strong> $11,000 - $16,000</li>
                <li><strong>Large Home (2,500-3,500 sq ft):</strong> $16,000 - $25,000</li>
                <li><strong>Very Large Home (3,500+ sq ft):</strong> $25,000+</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown mb-2">📋 Free Estimates</p>
              <p className="text-gray-700">We provide detailed, written estimates for all residential roofing projects in Midland. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or <a href="/contact/" className="text-brand-gold font-bold">request online</a>.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Best Roofing Materials for Midland Homes</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Impact-Resistant Asphalt Shingles</h3>
                <p className="text-gray-700 mb-3">Class 4 impact-resistant shingles are ideal for Midland. They withstand hail damage, resist high winds, and often qualify for insurance discounts (up to 35%).</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 25-50 years | <strong>Cost:</strong> $$ to $$$</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Metal Roofing</h3>
                <p className="text-gray-700 mb-3">Metal roofs excel in Midland's climate. They reflect heat (reducing cooling costs), handle extreme weather, and can last 50+ years with minimal maintenance.</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 40-70 years | <strong>Cost:</strong> $$$ to $$$$</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Midland Home</h2>
            <p className="cta-text">Expert residential roofing for the Permian Basin. Free inspections, quality materials, and installations built to last.</p>
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
              <a href="/hail-damage-roof-repair-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Hail Damage Repair</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Odessa Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Amarillo Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/contact/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Residential Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"}},"areaServed":[{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}}],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Residential Roofing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"New Roof Installation"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hail Damage Repair"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Repairs"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Inspections"}}]}})}}/>
    </div>
  );
}
