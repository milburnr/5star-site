import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roof Inspection in Amarillo, TX| Hail Damage Assessment',
  description: 'Roof Inspections in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function RoofInspectionAmarilloPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspection",
                      "url": "/roof-inspection/"
              },
              {
                      "name": "Amarillo",
                      "url": "/roof-inspection-amarillo-texas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Roof Inspection in Amarillo, TX</h1>
            <p className="hero-subtitle">Professional Roof Inspections & Assessments</p>
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
            <p className="text-2xl text-gray-700 mb-6">
              <strong>Regular roof inspections prevent expensive surprises.</strong> Amarillo's severe hail, high winds, and extreme weather damage roofs gradually. Professional inspections catch problems early—when repairs are simple and affordable.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing provides comprehensive roof inspections throughout Amarillo. Free hail damage inspections, home buying assessments, insurance inspections, and preventive maintenance inspections. Detailed reports with professional photography.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Roof Inspection Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Free Hail Damage Inspections</h3>
                <p className="text-gray-700 mb-4">After Amarillo hail storms, we provide free inspections to detect damage. Comprehensive assessment with professional photography for insurance claims.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 100% free, no obligation</li>
                  <li>✓ Professional photo documentation</li>
                  <li>✓ Insurance-ready reports</li>
                  <li>✓ Hail impact detection</li>
                  <li>✓ Hidden damage identification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Home Buying Inspections</h3>
                <p className="text-gray-700 mb-4">Protect your investment. Our inspections reveal roof condition, remaining lifespan, and potential issues before you purchase an Amarillo home.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Detailed written reports</li>
                  <li>✓ Remaining life assessment</li>
                  <li>✓ Repair cost estimates</li>
                  <li>✓ Photo documentation</li>
                  <li>✓ Fast 24-48 hour turnaround</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Insurance Inspections</h3>
                <p className="text-gray-700 mb-4">Insurance companies require documentation for claims. We provide professional inspections that meet all insurance requirements.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Insurance company approved</li>
                  <li>✓ Detailed damage reports</li>
                  <li>✓ Professional photography</li>
                  <li>✓ Code compliance assessment</li>
                  <li>✓ Claim support</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Preventive Maintenance Inspections</h3>
                <p className="text-gray-700 mb-4">Annual inspections catch small problems before they become expensive emergencies. Extend roof life and maintain warranty compliance.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Comprehensive assessments</li>
                  <li>✓ Minor issues identified</li>
                  <li>✓ Maintenance recommendations</li>
                  <li>✓ Warranty compliance checks</li>
                  <li>✓ Annual inspection programs</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">What We Inspect</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Roofing Materials</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Shingle condition and age</li>
                    <li>✓ Granule loss assessment</li>
                    <li>✓ Cracking, curling, or missing shingles</li>
                    <li>✓ Hail impact damage</li>
                    <li>✓ Wind damage indicators</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Flashing & Penetrations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Valley flashing condition</li>
                    <li>✓ Chimney flashing and seals</li>
                    <li>✓ Vent pipe boots</li>
                    <li>✓ Skylight seals</li>
                    <li>✓ HVAC penetrations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Drainage Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Gutter condition</li>
                    <li>✓ Downspout functionality</li>
                    <li>✓ Debris accumulation</li>
                    <li>✓ Water flow assessment</li>
                    <li>✓ Ice dam indicators</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-brand-brown mb-3">Structural Elements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Decking condition (from attic)</li>
                    <li>✓ Sagging or structural issues</li>
                    <li>✓ Ventilation adequacy</li>
                    <li>✓ Interior moisture/stains</li>
                    <li>✓ Insulation condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">When to Schedule a Roof Inspection</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌪️ After Severe Storms</h3>
                <p className="text-gray-700">After Amarillo hail storms, high winds, or severe weather, schedule a free inspection. Even minor hail creates damage that worsens over time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">📆 Annual Preventive Inspections</h3>
                <p className="text-gray-700">Schedule annual inspections to catch small problems early. This is especially important for roofs over 10 years old or with past hail damage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🏠 Before Buying a Home</h3>
                <p className="text-gray-700">Never purchase an Amarillo home without a professional roof inspection. A $200 inspection can reveal $15,000+ in needed repairs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💰 Before Selling a Home</h3>
                <p className="text-gray-700">Pre-listing inspections identify issues that could derail sales. Address problems proactively or adjust pricing accordingly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">⚠️ When You Notice Problems</h3>
                <p className="text-gray-700">Water stains, missing shingles, sagging areas, or increased energy bills all indicate roof problems requiring professional inspection.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Roof Inspection Pricing in Amarillo</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-brand-brown mb-4">Free Inspections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Hail damage inspections:</strong> Always FREE</li>
                  <li>✓ <strong>Storm damage inspections:</strong> FREE after major weather events</li>
                  <li>✓ <strong>Insurance claim support:</strong> FREE when we perform repairs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-brand-brown mb-4">Paid Inspection Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Home buying inspection:</strong> $150-$300 (detailed written report)</li>
                  <li>• <strong>Comprehensive assessment:</strong> $200-$400 (including drone photography)</li>
                  <li>• <strong>Annual maintenance inspection:</strong> FREE with maintenance contract</li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm">Inspection fees often credited toward repairs if work is performed by us.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">What You Receive</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-4xl">📸</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Professional Photography</h3>
                    <p className="text-gray-700">High-resolution photos documenting all damage and areas of concern. Includes close-ups of hail impacts, damaged shingles, and problem areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">📋</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Detailed Written Report</h3>
                    <p className="text-gray-700">Comprehensive report covering all roof components, condition assessment, problems identified, and recommended repairs with cost estimates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Roof Diagram</h3>
                    <p className="text-gray-700">Marked roof diagram showing location of damage, measurements, and areas requiring attention.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">💰</div>
                  <div>
                    <h3 className="font-bold text-brand-brown mb-2">Repair Cost Estimate</h3>
                    <p className="text-gray-700">Detailed estimates for any needed repairs, from minor fixes to complete replacement if necessary.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Free Hail Damage Inspection</h2>
            <p className="text-lg text-gray-800 mb-6">
              <strong>Recent hail storm in Amarillo?</strong> We provide completely free hail damage inspections with no obligation. Even minor hail causes damage—let us check your roof before the next storm.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl font-bold text-blue-800 mb-2">📞 Schedule Your Free Inspection</p>
              <p className="text-gray-700">Call <a href="tel:8066226041" className="text-brand-gold font-bold">(806) 622-6041</a> or <a href="/contact/" className="text-brand-gold font-bold">request online</a>. We'll schedule your inspection within 24-48 hours.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Schedule Your Roof Inspection</h2>
            <p className="cta-text">Professional roof inspections throughout Amarillo. Free hail damage inspections available.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Request Inspection</a>
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
              <a href="/residential-roofing-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Roof Inspection","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"},"telephone":"+18066226041"},"areaServed":{"@type":"City","name":"Amarillo","containedInPlace":{"@type":"State","name":"Texas"}},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free hail damage inspections"}})}}/>
    </div>
  );
}
