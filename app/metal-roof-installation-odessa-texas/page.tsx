import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Metal Roof Installation in Odessa, TX| 50+ Year Lifespan',
  description: 'metal roof installation in Odessa, Texas. Standing seam, R-panel, commercial & residential. 50+ year lifespan. Free inspections available.',
};

export default function MetalRoofOdessaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Metal Roofing", url: "/metal-roofing-amarillo/" },
        { name: "Odessa", url: "/metal-roof-installation-odessa-texas/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Metal Roof Installation in Odessa, TX</h1>
            <p className="hero-subtitle">Permian Basin Metal Roofing Specialists</p>
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
            <p className="text-2xl text-gray-700 mb-6">
              <strong>Metal roofing is ideal for Odessa's extreme climate.</strong> When temperatures hit 105°F, hail pounds your roof, and winds gust to 70 mph, you need a roofing system that won't fail. Metal roofs excel in every condition the Permian Basin throws at them.
            </p>
            <p className="text-xl text-gray-600">
              5 Star Commercial Roofing specializes in metal roof installation throughout Odessa. Standing seam, R-panel, and corrugated systems for residential, commercial, and agricultural buildings. Energy-efficient, durable, and built to last 50+ years.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Metal Roofing Systems</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Standing Seam Metal Roofing</h3>
                <p className="text-gray-700 mb-4">Premium metal roofing with concealed fasteners. Vertical seams interlock for superior waterproofing. Ideal for residential homes and commercial buildings.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Concealed fasteners (no exposed screws)</li>
                  <li>✓ Superior wind resistance</li>
                  <li>✓ Sleek, modern appearance</li>
                  <li>✓ 50-70 year lifespan</li>
                  <li>✓ Multiple color options</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">R-Panel & Corrugated Metal</h3>
                <p className="text-gray-700 mb-4">Cost-effective metal roofing for commercial buildings, warehouses, and agricultural structures. Durable and fast to install.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Economical pricing</li>
                  <li>✓ Fast installation</li>
                  <li>✓ Excellent for large buildings</li>
                  <li>✓ 40-50 year lifespan</li>
                  <li>✓ Wide coverage panels</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏘️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Residential Metal Roofing</h3>
                <p className="text-gray-700 mb-4">Metal roofs for Odessa homes. Energy-efficient, hail-resistant, and maintenance-free. Multiple styles including standing seam and metal shingle profiles.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Reduces cooling costs 20-30%</li>
                  <li>✓ Hail resistant</li>
                  <li>✓ Insurance discounts available</li>
                  <li>✓ Increases home value</li>
                  <li>✓ Maintenance-free</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Commercial Metal Roofing</h3>
                <p className="text-gray-700 mb-4">Metal roofing systems for Odessa businesses. Low-slope and steep-slope applications. Superior longevity and energy efficiency.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Large-format panels</li>
                  <li>✓ Engineered wind resistance</li>
                  <li>✓ Fire-resistant (Class A)</li>
                  <li>✓ Low maintenance costs</li>
                  <li>✓ Cool roof certifications</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose Metal Roofing in Odessa</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">❄️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Energy Efficiency</h3>
                <p className="text-gray-700">Reflective coatings reduce heat absorption. Metal roofs can lower cooling costs by 20-30% in Odessa's scorching summers.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Resistance</h3>
                <p className="text-gray-700">Metal roofs shed hail impacts that would destroy asphalt shingles. Dents are cosmetic—waterproofing remains intact.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">50-70 Year Lifespan</h3>
                <p className="text-gray-700">Metal roofs last 2-3 times longer than asphalt shingles. Lower lifetime cost despite higher upfront investment.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Metal Roofing Benefits for Odessa</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💨 Superior Wind Resistance</h3>
                <p className="text-gray-700">Metal roofs resist wind uplift better than any other material. Properly installed standing seam systems withstand hurricane-force winds without damage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🔥 Fire Resistant</h3>
                <p className="text-gray-700">Class A fire rating—the highest available. Metal roofs won't ignite from flying embers or lightning strikes, critical for Odessa's dry climate.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">🌡️ Heat Reflection</h3>
                <p className="text-gray-700">Light-colored metal roofs reflect solar radiation, keeping attics cooler and reducing AC loads. "Cool roof" coatings enhance this further.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">💰 Insurance Discounts</h3>
                <p className="text-gray-700">Many insurance companies offer discounts for metal roofing (10-35%) due to superior hail, wind, and fire resistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-brown mb-2">♻️ Environmentally Friendly</h3>
                <p className="text-gray-700">Metal roofing is 100% recyclable and often contains recycled content. Asphalt shingles end up in landfills—metal roofs don't.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Metal Roofing Costs in Odessa</h2>
            <p className="text-lg text-gray-700 mb-6">
              Metal roofing costs more upfront than asphalt shingles but lasts 2-3 times longer. Most Odessa metal roof installations range from <strong>$12,000 to $35,000+</strong> depending on home size and system type.
            </p>
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-brand-brown mb-4">Cost Comparison (2025)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Standing Seam Metal:</strong> $10-$16 per sq ft installed</li>
                <li><strong>R-Panel Metal:</strong> $6-$10 per sq ft installed</li>
                <li><strong>Metal Shingle Profiles:</strong> $9-$14 per sq ft installed</li>
                <li><strong>Corrugated Metal:</strong> $5-$9 per sq ft installed</li>
              </ul>
              <p className="text-gray-600 mt-4 text-sm">Higher upfront cost, but lower lifetime cost than asphalt due to longevity and energy savings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-brand-brown mb-3">40-Year Cost Comparison</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Asphalt Shingles:</strong> $18,000 + $16,000 (replacement) = <span className="text-red-600 font-bold">$34,000+</span></p>
                <p><strong>Metal Roof:</strong> $24,000 (lasts 50+ years) = <span className="text-green-600 font-bold">$24,000</span></p>
                <p className="text-sm text-gray-600 mt-4">Plus metal roof energy savings: $200-400/year = $8,000-16,000 over 40 years</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Upgrade to Metal Roofing</h2>
            <p className="cta-text">Expert metal roof installation in Odessa. Energy-efficient, durable, and built to last 50+ years.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Free Estimate</a>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown">More Odessa Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/odessa-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">All Odessa Services</a>
              <span className="text-gray-400">•</span>
              <a href="/residential-roofing-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Residential Roofing</a>
              <span className="text-gray-400">•</span>
              <a href="/commercial-roofing-odessa-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">Commercial Roofing</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Metal Roof Installation","provider":{"@type":"LocalBusiness","name":"5 Star Commercial Roofing","telephone":"+18066226041","parentOrganization":{"@id":"https://5starroofingpros.com/#organization"}},"areaServed":{"@type":"City","name":"Odessa","containedInPlace":{"@type":"State","name":"Texas"}}})}}/>
    </div>
  );
}
