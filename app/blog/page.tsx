import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/blog/' },
  title: "Roofing Blog & Resources | 5 Star Commercial Roofing",
  description: 'roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, maintenance, and insurance claims from West Texas roofing professionals.',
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Blog",
                      "url": "/blog/"
              }
      ]} />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-morton-48-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Roofing Blog & Resources</h1>
            <p className="hero-subtitle">Expert Advice for Texas Homeowners</p>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-2xl text-gray-700 mb-6">
              <strong>Everything you need to know about roofing in Texas.</strong> From choosing materials to filing insurance claims, our guides help you make informed decisions about your roof.
            </p>
            <p className="text-xl text-gray-600">
              Written by experienced West Texas roofers who understand the unique challenges of our climate.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Featured Guides</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

              {/* How to File Hail Damage Insurance Claim */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <div className="text-8xl">📋</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-brand-gold font-semibold mb-2">INSURANCE CLAIMS</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">
                    <a href="/blog/how-to-file-hail-damage-insurance-claim/" className="hover:text-brand-gold transition-colors">
                      How to File a Hail Damage Insurance Claim in Texas
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Complete step-by-step guide to filing hail damage insurance claims in Texas. Learn what insurance covers, the filing process, common mistakes to avoid, and how to maximize your claim.
                  </p>
                  <a href="/blog/how-to-file-hail-damage-insurance-claim/" className="text-brand-gold font-semibold hover:text-brand-gold-vibrant">
                    Read Guide →
                  </a>
                </div>
              </article>

              {/* Roof Replacement Cost */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <div className="text-8xl">💰</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-brand-gold font-semibold mb-2">PRICING GUIDE</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">
                    <a href="/blog/roof-replacement-cost-texas-2025/" className="hover:text-brand-gold transition-colors">
                      Roof Replacement Cost in Texas 2025
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    How much does roof replacement cost in Texas? Complete 2025 pricing guide with average costs by home size, material type, and location. Learn what affects cost and how to save money.
                  </p>
                  <a href="/blog/roof-replacement-cost-texas-2025/" className="text-brand-gold font-semibold hover:text-brand-gold-vibrant">
                    Read Guide →
                  </a>
                </div>
              </article>

              {/* Best Roofing Materials */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <div className="text-8xl">🏠</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-brand-gold font-semibold mb-2">MATERIALS GUIDE</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">
                    <a href="/blog/best-roofing-materials-texas-2025/" className="hover:text-brand-gold transition-colors">
                      Best Roofing Materials for Texas Climate 2025
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Expert guide to choosing the best roofing materials for Texas weather. Compare asphalt shingles, metal roofing, tile, and more. Learn which materials handle heat, hail, and wind best.
                  </p>
                  <a href="/blog/best-roofing-materials-texas-2025/" className="text-brand-gold font-semibold hover:text-brand-gold-vibrant">
                    Read Guide →
                  </a>
                </div>
              </article>

              {/* Roof Maintenance Checklist */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                  <div className="text-8xl">✅</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-brand-gold font-semibold mb-2">MAINTENANCE GUIDE</div>
                  <h3 className="text-2xl font-bold text-brand-brown mb-3">
                    <a href="/blog/roof-maintenance-checklist-texas/" className="hover:text-brand-gold transition-colors">
                      Roof Maintenance Checklist for Texas Homeowners
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Complete roof maintenance checklist for Texas homes. Seasonal inspection guides, preventive care tips, and expert advice to extend your roof's life by 10-15 years.
                  </p>
                  <a href="/blog/roof-maintenance-checklist-texas/" className="text-brand-gold font-semibold hover:text-brand-gold-vibrant">
                    Read Guide →
                  </a>
                </div>
              </article>

            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Browse by Topic</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">⛈️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail & Storm Damage</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog/how-to-file-hail-damage-insurance-claim/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Filing Insurance Claims
                    </a>
                  </li>
                  <li>
                    <a href="/hail-damage-roof-repair-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Hail Damage Repair
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Costs & Pricing</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog/roof-replacement-cost-texas-2025/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Replacement Cost Guide
                    </a>
                  </li>
                  <li>
                    <a href="/residential-roofing-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Residential Roofing Costs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Materials & Installation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog/best-roofing-materials-texas-2025/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Best Materials for Texas
                    </a>
                  </li>
                  <li>
                    <a href="/metal-roof-installation-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Metal Roofing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Maintenance & Repairs</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog/roof-maintenance-checklist-texas/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Maintenance Checklist
                    </a>
                  </li>
                  <li>
                    <a href="/roof-inspection-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Roof Inspections
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/commercial-roofing-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Commercial Systems
                    </a>
                  </li>
                  <li>
                    <a href="/flat-roof-repair-midland-texas/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Flat Roof Repair
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Local Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/amarillo-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Amarillo Roofing
                    </a>
                  </li>
                  <li>
                    <a href="/midland-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Midland Roofing
                    </a>
                  </li>
                  <li>
                    <a href="/lubbock-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">
                      Lubbock Roofing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Have Questions About Your Roof?</h2>
            <p className="cta-text">Talk to a roofing expert. Free consultations and inspections throughout West Texas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Blog","name":"5 Star Commercial Roofing Blog","description":"Expert roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, maintenance, and insurance claims.","publisher":{"@type":"Organization","name":"5 Star Commercial Roofing"}})}}/>
    </div>
  );
}
