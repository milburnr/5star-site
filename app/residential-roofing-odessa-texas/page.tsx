import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing in Odessa TX| Hail Damage Specialists',
  description: 'Residential Roofing in Odessa, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function ResidentialOdessaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Odessa", url: "/residential-roofing-odessa-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Residential Roofing in Odessa, TX</h1>
            <p className="hero-subtitle">Protecting Permian Basin Homes Since 2013</p>
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
              <strong>Odessa's extreme weather demands tough roofing.</strong> From downtown to West Odessa, homes face intense heat, severe hail, high winds, and the kind of weather that destroys inferior roofing in just a few years.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> built for Odessa conditions. Complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacements</a>, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage repairs</a>, insurance claims, and preventive maintenance—all backed by comprehensive warranties. We also serve <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:underline">Midland</a>, <a href="/residential-roofing-lubbock-texas/" className="text-brand-gold hover:underline">Lubbock</a>, and the entire <a href="/" className="text-brand-gold hover:underline">West Texas region</a>.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Our Residential Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Complete Roof Replacement</h3>
                <p className="text-gray-700 mb-4">Full tear-off and replacement using premium materials designed for Odessa's harsh climate. Impact-resistant shingles, metal roofing, and more.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Architectural shingles (30-50 year)</li>
                  <li>✓ Class 4 impact-resistant options</li>
                  <li>✓ Standing seam metal roofs</li>
                  <li>✓ Complete deck inspection/repair</li>
                  <li>✓ Manufacturer warranties included</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Odessa sees frequent severe hail. We detect hidden damage, document everything for insurance, and handle the entire restoration process.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free hail damage inspections</li>
                  <li>✓ Insurance documentation</li>
                  <li>✓ Meet with adjusters on your behalf</li>
                  <li>✓ Maximize your claim approval</li>
                  <li>✓ Complete restoration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Repairs</h3>
                <p className="text-gray-700 mb-4">Fast, reliable repairs for leaks, storm damage, and wear. We fix it right the first time with quality materials.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection and repair</li>
                  <li>✓ Missing shingle replacement</li>
                  <li>✓ Flashing and vent repairs</li>
                  <li>✓ Wind damage fixes</li>
                  <li>✓ 24/7 emergency service</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Preventive Maintenance</h3>
                <p className="text-gray-700 mb-4">Regular inspections and maintenance extend roof life and catch small problems before they become expensive emergencies.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Annual inspections</li>
                  <li>✓ Debris removal</li>
                  <li>✓ Minor repairs included</li>
                  <li>✓ Detailed condition reports</li>
                  <li>✓ Warranty compliance checks</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Odessa Homeowners Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Storm Specialists</h3>
                <p className="text-gray-700">10+ years handling Odessa's severe weather. We know what your home needs to withstand Permian Basin storms.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Experts</h3>
                <p className="text-gray-700">We work directly with insurance companies, handling all paperwork and fighting for maximum coverage.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality First</h3>
                <p className="text-gray-700">Premium materials from top manufacturers. Every installation backed by comprehensive warranties.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Common Roofing Issues in Odessa</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌡️ Extreme Heat Damage</h3>
                <p className="text-gray-700">Odessa's scorching summers (100°F+ for weeks) accelerate shingle aging. UV rays break down asphalt and cause premature failure. We use reflective, UV-resistant materials to combat this.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">⛈️ Hail & Storm Damage</h3>
                <p className="text-gray-700">Large hail frequently pounds Odessa, creating bruising, granule loss, and cracks. Even golf ball-sized hail causes thousands in damage. Class 4 shingles are critical.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💨 Wind Uplift</h3>
                <p className="text-gray-700">High winds in the Permian Basin can lift and tear off shingles. Proper installation with high-wind rated materials prevents blow-offs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏜️ Dust & Debris</h3>
                <p className="text-gray-700">West Texas dust storms deposit debris that clogs valleys, damages shingles, and creates drainage problems. Regular maintenance prevents issues.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Residential Roofing Costs in Odessa</h2>
            <p className="text-lg text-gray-700 mb-6">
              Average residential roof replacement in Odessa ranges from <strong>$7,000 to $25,000+</strong> depending on home size, material choice, and roof complexity.
            </p>
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-brand-brown mb-4">2025 Cost Estimates by Home Size</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>1,200-1,800 sq ft:</strong> $7,000 - $11,000</li>
                <li><strong>1,800-2,500 sq ft:</strong> $11,000 - $16,000</li>
                <li><strong>2,500-3,500 sq ft:</strong> $16,000 - $25,000</li>
                <li><strong>3,500+ sq ft:</strong> $25,000+</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">Costs include tear-off, disposal, new materials, and labor. Metal roofing typically 20-40% higher.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown mb-2">💡 Insurance Coverage</p>
              <p className="text-gray-700">Most hail damage is covered 100% by insurance (minus deductible). We handle all insurance paperwork. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> for a free inspection.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Best Materials for Odessa Homes</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Impact-Resistant Shingles (Class 4)</h3>
                <p className="text-gray-700 mb-3">Essential for Odessa. These shingles withstand hail impacts, resist wind uplift, and often qualify for 20-35% insurance discounts.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Hail-prone areas, insurance savings</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 30-50 years</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Metal Roofing</h3>
                <p className="text-gray-700 mb-3">Excellent for Odessa's climate. Metal reflects heat (lowering cooling costs), handles extreme weather, and lasts 50+ years.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Long-term investment, energy efficiency</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 40-70 years</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Odessa Home</h2>
            <p className="cta-text">Expert residential roofing built for West Texas weather. Free inspections and insurance assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Schedule Inspection</a>
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
              <a href="/metal-roof-installation-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Metal Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Amarillo Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/contact/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Residential Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"}},"areaServed":[{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}}],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Residential Roofing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Complete Roof Replacement"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hail Damage Repair"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Repairs"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Preventive Maintenance"}}]}})}}/>
    </div>
  );
}
