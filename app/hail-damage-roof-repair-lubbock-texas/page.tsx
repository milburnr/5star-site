import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Lubbock | 5 Star',
  description: 'Hail Damage Repair in Lubbock, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function HailDamageLubbockPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Roof Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Lubbock", url: "/hail-damage-roof-repair-lubbock-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Hail Damage Roof Repair in Lubbock, TX</h1>
            <p className="hero-subtitle">Hail Alley Storm Damage Specialists</p>
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
              <strong>Lubbock sits in the heart of Hail Alley.</strong> The South Plains experiences severe hail storms multiple times annually, with baseball to softball-sized hail common from March through September. Even small hail causes significant damage to Lubbock roofs.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in hail damage detection, insurance documentation, and complete roof restoration for Lubbock properties. Free inspections and full insurance claim assistance.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Our Lubbock Hail Damage Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-700">Comprehensive assessment with professional photography documenting all hail damage throughout Lubbock.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claims</h3>
                <p className="text-gray-700">We prepare detailed reports and meet with adjusters to maximize your claim approval.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Expert Installation</h3>
                <p className="text-gray-700">Professional repairs using Class 4 impact-resistant materials built for Lubbock's severe weather.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Lubbock Homeowners Trust Us</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="text-4xl">🌪️</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Hail Alley Experts</h3>
                  <p className="text-gray-700">Over 10 years handling Lubbock's severe hail storms. We know what to look for and what insurance companies require.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Fast Response</h3>
                  <p className="text-gray-700">Same-day inspections available throughout Lubbock after major storms. The sooner you file, the sooner you're protected.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Insurance Specialists</h3>
                  <p className="text-gray-700">We handle all paperwork and fight for maximum coverage. Most repairs covered 100% by insurance minus deductible.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Impact-Resistant Materials</h3>
                  <p className="text-gray-700">Class 4 hail-resistant shingles protect against future Lubbock storms and often qualify for insurance discounts.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Hail Damage in Lubbock</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔹 Severe Storms & Large Hail</h3>
                <p className="text-gray-700">Lubbock experiences golf ball to baseball-sized hail regularly. This size hail can destroy even new roofs in one storm.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔹 Granule Loss</h3>
                <p className="text-gray-700">Hail impacts knock protective granules off shingles. With Lubbock's 260+ days of sunshine, exposed asphalt degrades rapidly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔹 Wind & Hail Combination</h3>
                <p className="text-gray-700">Lubbock is one of America's windiest cities. Hail-weakened shingles blow off during high winds, exposing your home to water damage.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Insurance & Pricing</h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Good news:</strong> Most hail damage in Lubbock is covered 100% by insurance (minus deductible). Average roof replacement: $7,000-$25,000+. You typically pay only your deductible ($1,000-$2,500).
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown">📋 Free Inspection & Estimate</p>
              <p className="text-gray-700">We provide free hail damage inspections throughout Lubbock. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Get Your Free Hail Damage Inspection</h2>
            <p className="cta-text">Serving all of Lubbock with expert hail damage repair. Free inspections, insurance claim assistance, and professional installation.</p>
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
              <a href="/residential-roofing-lubbock-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-lubbock-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Hail Damage Roof Repair","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Lubbock","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
