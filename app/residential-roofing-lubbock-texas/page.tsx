import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Residential Roofing in Lubbock TX| Hail Damage Specialists',
  description: 'Residential Roofing in Lubbock, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function ResidentialLubbockPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Lubbock", url: "/residential-roofing-lubbock-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Residential Roofing in Lubbock, TX</h1>
            <p className="hero-subtitle">Hail Alley Roofing Specialists</p>
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
              <strong>Lubbock sits in the heart of Hail Alley.</strong> The South Plains experiences some of Texas's most severe hail storms, with baseball to softball-sized hail common from March through September. Your home needs protection built for this reality.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential roofing</a> for Lubbock's unique challenges. Complete <a href="/roof-replacement-in-amarillo/" className="text-brand-gold hover:underline">roof replacements</a>, <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage repairs</a>, insurance claim assistance, and preventive maintenance—all with materials proven in Hail Alley conditions. We also serve <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:underline">Midland</a>, <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:underline">Odessa</a>, and throughout West Texas.
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
                <p className="text-gray-700 mb-4">Complete roof replacements using premium materials engineered for Lubbock's severe weather. Impact-resistant shingles, metal systems, and more.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Class 4 impact-resistant shingles</li>
                  <li>✓ Architectural shingles (30-50 year)</li>
                  <li>✓ Metal roofing systems</li>
                  <li>✓ Complete tear-off & replacement</li>
                  <li>✓ Comprehensive warranties</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Lubbock's frequent large hail demands expert damage detection and restoration. We handle everything from inspection to insurance to installation.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free hail damage inspections</li>
                  <li>✓ Professional photo documentation</li>
                  <li>✓ Insurance claim assistance</li>
                  <li>✓ Work directly with adjusters</li>
                  <li>✓ Complete restoration services</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Repairs</h3>
                <p className="text-gray-700 mb-4">Fast, reliable repairs for leaks, storm damage, and normal wear. Quality materials and expert workmanship on every job.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leak detection & repair</li>
                  <li>✓ Shingle replacement</li>
                  <li>✓ Flashing repairs</li>
                  <li>✓ Wind damage fixes</li>
                  <li>✓ Emergency services available</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Roof Inspections</h3>
                <p className="text-gray-700 mb-4">Thorough inspections for home purchases, insurance requirements, or after major storms. Detailed reports with photo documentation.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free inspections available</li>
                  <li>✓ Comprehensive written reports</li>
                  <li>✓ Professional photography</li>
                  <li>✓ Insurance-ready documentation</li>
                  <li>✓ Preventive maintenance plans</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Lubbock Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Alley Experts</h3>
                <p className="text-gray-700">Over 10 years handling Lubbock's severe hail. We know what to look for and what insurance companies require.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Specialists</h3>
                <p className="text-gray-700">We work directly with your insurance company, maximizing coverage and minimizing your out-of-pocket costs.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Materials</h3>
                <p className="text-gray-700">Premium impact-resistant shingles and metal systems from top manufacturers. Comprehensive warranties on all work.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Lubbock Roofing Challenges</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌪️ Severe Hail Storms</h3>
                <p className="text-gray-700">Lubbock is ground zero for hail. The South Plains experiences golf ball to baseball-sized hail regularly. Even new roofs can be destroyed in a single storm without proper impact resistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💨 High Wind Events</h3>
                <p className="text-gray-700">Lubbock is one of America's windiest cities. High winds can lift hail-weakened shingles and cause blow-offs. Proper installation and high-wind rated materials are critical.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">☀️ UV & Heat Exposure</h3>
                <p className="text-gray-700">With 260+ days of sunshine and summer temps over 100°F, UV exposure rapidly ages roofing materials. Hail damage accelerates this by exposing asphalt layers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏜️ Dust Storms</h3>
                <p className="text-gray-700">West Texas dust storms deposit debris that can clog drainage, damage shingles, and create leaks. Regular inspections catch these problems early.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Residential Roofing Costs in Lubbock</h2>
            <p className="text-lg text-gray-700 mb-6">
              Average residential roof replacement in Lubbock ranges from <strong>$7,000 to $25,000+</strong> depending on home size, materials, and roof complexity.
            </p>
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-brand-brown mb-4">2025 Cost Estimates by Home Size</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Small Home (1,200-1,800 sq ft):</strong> $7,000 - $11,000</li>
                <li><strong>Medium Home (1,800-2,500 sq ft):</strong> $11,000 - $16,000</li>
                <li><strong>Large Home (2,500-3,500 sq ft):</strong> $16,000 - $25,000</li>
                <li><strong>Very Large Home (3,500+ sq ft):</strong> $25,000+</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">Prices include tear-off, disposal, new materials, installation, and cleanup. Impact-resistant shingles add $1-2 per sq ft but often qualify for insurance discounts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown mb-2">💡 Insurance Coverage for Hail Damage</p>
              <p className="text-gray-700">Most hail damage in Lubbock is covered 100% by insurance (minus deductible). We handle all paperwork and fight for maximum coverage. Free inspections: <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Best Roofing Materials for Lubbock</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Class 4 Impact-Resistant Shingles</h3>
                <p className="text-gray-700 mb-3">Non-negotiable for Lubbock homes. Class 4 shingles withstand large hail impacts and qualify for insurance discounts of 20-35%. Essential in Hail Alley.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Hail protection, insurance savings</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 30-50 years</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Metal Roofing</h3>
                <p className="text-gray-700 mb-3">Excellent for Lubbock. Metal roofs shed hail impacts, reflect heat (reducing cooling costs), and last 50-70 years. Initial cost pays for itself over time.</p>
                <p className="text-gray-600 mb-2"><strong>Best For:</strong> Long-term value, energy efficiency</p>
                <p className="text-gray-600"><strong>Lifespan:</strong> 40-70 years</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Protect Your Lubbock Home</h2>
            <p className="cta-text">Expert residential roofing built for Hail Alley. Free inspections and comprehensive insurance assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Schedule Inspection</a>
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
              <a href="/metal-roof-installation-lubbock-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Metal Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Amarillo Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Midland Residential</a>
              <span className="text-gray-400">•</span>
              <a href="/contact/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Residential Roofing","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"address":{"@type":"PostalAddress","streetAddress":"2909 S Western St","addressLocality":"Amarillo","addressRegion":"TX","postalCode":"79109","addressCountry":"US"}},"areaServed":[{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Midland","containedInPlace":{"@type":"State","name":"Texas"}},{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}}],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Residential Roofing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"New Roof Installation"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Hail Damage Repair"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Repairs"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Inspections"}}]}})}}/>
    </div>
  );
}
