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
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Permian Basin Climate Advantages</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">🛢️ Oil Industry Environmental Challenges</h3>
                <p className="text-gray-700 mb-4">Odessa's oil-rich environment creates unique challenges for conventional roofing materials. Chemical exposure from industrial operations, hydrogen sulfide emissions, and airborne particulates accelerate degradation of organic materials like asphalt shingles, making metal roofing the superior long-term choice.</p>
                <p className="text-gray-700 mb-4">Metal roofing systems provide exceptional resistance to chemical exposure, industrial pollutants, and corrosive atmospheric conditions common in the Permian Basin. Specialized protective coatings available for extreme industrial environments ensure longevity even in harsh chemical exposure scenarios.</p>
                <p className="text-gray-700">Seismic considerations from hydraulic fracturing activity require roofing systems with enhanced flexibility and attachment integrity. Metal roofing's engineered connection systems accommodate minor ground movement while maintaining structural integrity and weather protection.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">💨 Extreme Wind Performance</h3>
                <p className="text-gray-700 mb-4">Odessa's position in the High Plains creates extreme wind conditions with sustained speeds regularly exceeding 40 mph and gusts over 70 mph. Metal roofing systems engineered for high-wind applications provide unmatched resistance to wind uplift and storm damage compared to traditional materials.</p>
                <p className="text-gray-700 mb-4">Standing seam metal roofing with structural attachments can withstand wind speeds exceeding 180 mph when properly installed. The continuous seam design and concealed fastener system eliminate weak points that cause catastrophic failure in other roofing materials during severe weather events.</p>
                <p className="text-gray-700">Aerodynamic panel profiles reduce wind loading and turbulence, while engineered attachment systems distribute forces across the entire roof structure. This comprehensive approach to wind resistance makes metal roofing essential for Odessa's challenging weather environment.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">🔥 Fire Protection in Arid Climate</h3>
                <p className="text-gray-700 mb-4">Odessa's arid climate with annual precipitation under 15 inches creates severe fire risk, especially during drought periods and high-wind events. Metal roofing provides Class A fire resistance—the highest rating available—protecting properties from wildfire, lightning strikes, and industrial fire hazards.</p>
                <p className="text-gray-700 mb-4">Non-combustible metal construction prevents fire spread and protects against flying embers that can ignite traditional roofing materials. This fire resistance is particularly critical in Odessa where industrial flare operations and electrical systems create elevated fire risks.</p>
                <p className="text-gray-700">Insurance companies recognize metal roofing's superior fire protection with significant premium discounts for properties in high-risk areas. These savings, combined with reduced fire damage risk, provide substantial financial benefits for Odessa property owners.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">❄️ Advanced Thermal Performance</h3>
                <p className="text-gray-700 mb-4">Odessa's extreme temperature environment with summer highs exceeding 110°F and winter lows below 20°F requires roofing systems engineered for thermal cycling. Metal roofing's thermal movement accommodation prevents stress failures common in rigid materials.</p>
                <p className="text-gray-700 mb-4">Cool roof technology with reflective coatings reduces surface temperatures by 50-70°F compared to dark asphalt roofs, dramatically reducing cooling costs and extending HVAC equipment life. Energy savings of 25-40% are common in Odessa's extreme heat.</p>
                <p className="text-gray-700">Thermal breaks and insulation systems optimize energy performance while accommodating Odessa's extreme temperature swings. Proper design prevents condensation issues and maintains consistent interior comfort despite external temperature extremes.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Advanced Metal Roofing Technologies</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">🏗️ Structural Standing Seam Systems</h3>
                <p className="text-gray-700 mb-4">Structural standing seam metal roofing provides the ultimate in durability and performance for Odessa's challenging environment. These systems attach directly to structural members, eliminating roof deck requirements and providing superior load-bearing capacity for equipment mounting and snow loads.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-brand-gold-light p-6 rounded-lg">
                    <h4 className="font-bold text-brand-brown mb-3">System Specifications</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Panel Widths:</strong> 12", 16", 18", 24" standard</li>
                      <li>• <strong>Seam Heights:</strong> 1.5" to 3" profiles available</li>
                      <li>• <strong>Gauges:</strong> 24-gauge, 22-gauge steel options</li>
                      <li>• <strong>Materials:</strong> Steel, aluminum, copper, zinc</li>
                      <li>• <strong>Finishes:</strong> Kynar 500, SMP, PVDF systems</li>
                      <li>• <strong>Warranties:</strong> 40-50 year material, 20+ fade</li>
                    </ul>
                  </div>
                  
                  <div className="bg-brand-gold-light p-6 rounded-lg">
                    <h4 className="font-bold text-brand-brown mb-3">Performance Features</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Wind Resistance:</strong> 180+ mph ratings available</li>
                      <li>• <strong>Thermal Movement:</strong> Engineered expansion joints</li>
                      <li>• <strong>Fastener Concealment:</strong> No exposed penetrations</li>
                      <li>• <strong>Seam Security:</strong> Mechanical and snap-lock options</li>
                      <li>• <strong>Accessory Integration:</strong> Snow retention, walkways</li>
                      <li>• <strong>Equipment Mounting:</strong> Structural attachment capability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">🌟 Premium Coating Technologies</h3>
                <p className="text-gray-700 mb-4">Advanced coating systems provide exceptional protection against Odessa's harsh environmental conditions. PVDF and Kynar 500 fluoropolymer coatings offer superior UV resistance, chemical resistance, and color retention essential for long-term performance in the Permian Basin's challenging climate.</p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-brand-gold-light p-6 rounded-lg">
                    <h4 className="font-bold text-brand-brown mb-3">Kynar 500® PVDF</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 70% PVDF fluoropolymer</li>
                      <li>• 35+ year fade warranties</li>
                      <li>• Superior chalking resistance</li>
                      <li>• Chemical exposure protection</li>
                      <li>• Premium color retention</li>
                    </ul>
                  </div>
                  
                  <div className="bg-brand-gold-light p-6 rounded-lg">
                    <h4 className="font-bold text-brand-brown mb-3">Cool Roof Coatings</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Solar reflectance up to 95%</li>
                      <li>• Thermal emittance 85%+</li>
                      <li>• Energy Star compliance</li>
                      <li>• Tax credit eligibility</li>
                      <li>• Utility rebate programs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-brand-gold-light p-6 rounded-lg">
                    <h4 className="font-bold text-brand-brown mb-3">Specialty Applications</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Anti-microbial treatments</li>
                      <li>• Self-cleaning surfaces</li>
                      <li>• Graffiti-resistant coatings</li>
                      <li>• Industrial chemical resistance</li>
                      <li>• Custom color matching</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">⚡ Integrated Solar Solutions</h3>
                <p className="text-gray-700 mb-4">Metal roofing provides the ideal platform for solar energy integration in Odessa's high-solar environment. Structural capability, longevity matching solar panel life, and superior heat dissipation make metal roofs the preferred choice for solar installations.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold text-brand-brown mb-3">Solar Integration Benefits</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Structural Capacity:</strong> Direct attachment to metal roof structure</li>
                      <li>• <strong>Longevity Match:</strong> 50+ year roof life matches solar panels</li>
                      <li>• <strong>Heat Dissipation:</strong> Improved solar panel efficiency</li>
                      <li>• <strong>No Penetrations:</strong> Clamp systems preserve roof integrity</li>
                      <li>• <strong>Installation Speed:</strong> Faster mounting compared to other materials</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-brand-brown mb-3">Economic Advantages</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Tax Credits:</strong> 30% federal tax credit for solar</li>
                      <li>• <strong>Net Metering:</strong> Sell excess power back to grid</li>
                      <li>• <strong>Utility Incentives:</strong> Local rebate programs</li>
                      <li>• <strong>Property Value:</strong> Increased home value</li>
                      <li>• <strong>Energy Independence:</strong> Reduced utility dependence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Professional Installation Excellence</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">🛠️ Precision Installation Techniques</h3>
                <p className="text-gray-700 mb-4">Metal roof installation in Odessa's extreme environment requires specialized techniques and equipment. Our certified crews use manufacturer-approved methods, precision tools, and quality control procedures to ensure long-term performance and warranty compliance.</p>
                <p className="text-gray-700 mb-4">Temperature-controlled installation procedures account for Odessa's extreme thermal conditions. Special considerations for expansion and contraction, material handling in extreme heat, and thermal break installation ensure optimal performance throughout the roof's service life.</p>
                <p className="text-gray-700">Advanced fastening systems designed for high-wind environments provide superior attachment strength. Structural screws, expansion anchors, and engineered connection details ensure roof system integrity under extreme loading conditions common to the Permian Basin.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-4">🔧 Quality Control & Testing</h3>
                <p className="text-gray-700 mb-4">Comprehensive quality control procedures include seam integrity testing, fastener pattern verification, and waterproofing validation. Each installation undergoes systematic inspection to ensure compliance with manufacturer specifications and building code requirements.</p>
                <p className="text-gray-700 mb-4">Wind uplift testing capabilities verify system performance under design loads. Pull-testing of fasteners and seam strength evaluation ensure installation meets or exceeds specified wind resistance ratings essential for Odessa's challenging wind environment.</p>
                <p className="text-gray-700">Final inspection protocols include thermal imaging to verify proper installation, moisture testing to confirm waterproof integrity, and documentation photography to support warranty registration and future service needs.</p>
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
