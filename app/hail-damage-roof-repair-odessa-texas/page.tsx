import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair in Odessa | 5 Star',
  description: 'Hail Damage Repair in Odessa, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function HailDamageOdessaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Hail Damage Roof Repair", url: "/hail-damage-repair-amarillo/" },
        { name: "Odessa", url: "/hail-damage-roof-repair-odessa-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Hail Damage Roof Repair in Odessa, TX</h1>
            <p className="hero-subtitle">Permian Basin Storm Damage Experts</p>
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
              <strong>Odessa experiences frequent severe hail storms that can destroy roofs in minutes.</strong> From downtown to West Odessa, the Permian Basin sees large hail multiple times per year. Even golf ball-sized hail causes thousands in damage.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in hail damage detection, insurance claims, and complete roof restoration for Odessa properties. Located 3.5 hours northwest of our Amarillo headquarters, we respond within 4 hours for emergency hail damage in the Permian Basin. Free inspections and we handle everything with your insurance company.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Our Process in Odessa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Free Inspection</h3>
                <p className="text-gray-700">Comprehensive assessment with drone photography documenting all hail damage throughout Odessa.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Insurance Claims</h3>
                <p className="text-gray-700">We prepare reports, meet with adjusters, and maximize your claim approval.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Professional Repairs</h3>
                <p className="text-gray-700">Expert installation using Class 4 impact-resistant materials built for Odessa weather.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Odessa Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="text-4xl">🌪️</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Storm Damage Specialists</h3>
                  <p className="text-gray-700">10+ years handling Permian Basin hail. We understand Odessa weather and insurance requirements.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Fast Response</h3>
                  <p className="text-gray-700">Same-day inspections available throughout Odessa after major storms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Insurance Experts</h3>
                  <p className="text-gray-700">We handle all paperwork. Most repairs covered 100% by insurance (minus deductible).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-2">Impact-Resistant Materials</h3>
                  <p className="text-gray-700">Class 4 shingles protect against future Odessa hail and qualify for insurance discounts.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Common Hail Damage in Odessa</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔹 Granule Loss & Bruising</h3>
                <p className="text-gray-700">Hail knocks protective granules off shingles and creates soft spots. In Odessa's intense heat, this leads to rapid aging and leaks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔹 Flashing & Vent Damage</h3>
                <p className="text-gray-700">Roof vents and flashing can be dented by hail - these are critical waterproofing components that must be replaced.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔹 Compromised Wind Resistance</h3>
                <p className="text-gray-700">Hail loosens shingle adhesive. Odessa's high winds can then blow off weakened shingles during the next storm.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Insurance & Pricing</h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Good news:</strong> Most hail damage in Odessa is covered 100% by insurance (minus deductible). Average Odessa roof replacement: $7,000-$25,000+. You typically pay only your $1,000-$2,500 deductible.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-brand-brown">📋 Free Inspection</p>
              <p className="text-gray-700">We provide free inspections and estimates for Odessa properties. Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a>.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-3xl font-bold mb-6 text-red-700">Emergency Hail Services</h2>
            <p className="text-lg text-gray-800 mb-6">
              <strong>Active leak after storm?</strong> We provide 24/7 emergency tarping and repairs throughout Odessa.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-red-700">🚨 Emergency: <a href="tel:8066226041" className="text-brand-gold">(806) 622-6041</a></p>
              <p className="text-gray-700">Available 24/7 throughout Odessa and West Texas</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Get Your Free Hail Damage Inspection</h2>
            <p className="cta-text">Serving all of Odessa with expert hail damage repair. Free inspections and insurance claim assistance.</p>
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
              <a href="/metal-roof-installation-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Metal Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/emergency-roof-repair-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Emergency Repairs</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Hail Damage Roof Repair","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041"},"areaServed":{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
