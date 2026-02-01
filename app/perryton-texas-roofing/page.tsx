import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roofing in Perryton, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Perryton, Texas Panhandle. Commercial, residential, and emergency roofing. Serving Ochiltree County. Free inspections available.',
};

export default function PerrytonRoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
    "name": "5 Star Commercial Roofing - Perryton",
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
    "description": "Professional roofing contractor serving Perryton, Texas and Ochiltree County with commercial, residential, and emergency roofing services.",
    "telephone": "+18066226041",
    "email": "admin@5starroofingpros.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2909 S Western St",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79109",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "Perryton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Ochiltree County" } },
      { "@type": "City", "name": "Amarillo" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing", "description": "Commercial roofing for Perryton businesses" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing", "description": "Residential roofing for Perryton homes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Repair", "description": "Storm and hail damage repair in Perryton, TX" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roofing", "description": "24/7 emergency roofing in Ochiltree County" } }
      ]
    }
  };

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Service Areas",
                      "url": "/service-areas/"
              },
              {
                      "name": "Perryton",
                      "url": "/perryton-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Perryton's Professional Roofing Contractor</h1>
            <p className="hero-subtitle">Expert Roofing Services in Perryton & Ochiltree County, Texas</p>
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
          <section className="content-block">
            <h2 className="content-block-title">Trusted Roofing Services in Perryton, Texas</h2>
            <p className="text-lg mb-4">
              As Perryton's premier <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">professional roofing contractor</a>, 5 Star Commercial Roofing brings over a decade of experience serving Ochiltree County and the entire Texas Panhandle. Whether you need commercial roofing, residential roofing for your home, or emergency storm damage repairs, our expert team delivers reliable, high-quality roofing solutions.
            </p>
            <p className="text-lg mb-4">
              Perryton's climate—with severe hailstorms, high winds, and extreme temperature swings—demands roofing systems built to withstand the harshest conditions. We specialize in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail-resistant roofing materials</a> and installation techniques proven to protect Ochiltree County properties year after year.
            </p>
          </section>
        </FadeIn>

        <section className="section">
          <h2 className="section-title">Comprehensive Roofing Services in Perryton</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                <p className="text-gray-600 mb-4">
                  We install TPO, EPDM, metal roofing, and built-up systems for businesses and facilities throughout Ochiltree County.
                </p>
                <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Commercial Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing</h3>
                <p className="text-gray-600 mb-4">
                  From asphalt shingles to metal roofing, we provide complete residential roofing services for Perryton homeowners. Our Class 4 impact-resistant shingles protect against Texas Panhandle hail.
                </p>
                <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Residential Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="card-hover p-6 bg-red-50">
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-red-700 mb-3">Emergency Repairs</h3>
                <p className="text-gray-700 mb-4">
                  When severe weather strikes Perryton, we respond 24/7 with emergency tarping and rapid roof repairs. Call us immediately for storm damage assessment.
                </p>
                <a href="/storm-damage-roof-repair-in-amarillo/" className="text-red-700 font-semibold">Emergency Service →</a>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Perryton Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Ochiltree County Experts</h3>
                <p className="text-gray-600">We understand Perryton's weather patterns, from spring hailstorms to winter freezes. Our roofing systems are engineered for local climate challenges.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Insurance Claim Assistance</h3>
                <p className="text-gray-600">We work directly with insurance adjusters on <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage claims</a>, ensuring you receive full coverage for storm repairs.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Local & Regional Experience</h3>
                <p className="text-gray-600">Serving Perryton and communities throughout the Texas Panhandle with specialized roofing designed for extreme weather conditions.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Free Inspections</h3>
                <p className="text-gray-600">Every Perryton property receives a complimentary roof inspection with detailed assessments, photos, and written estimates—no obligation.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-4">Perryton Weather Challenges & Your Roof</h2>
          <p className="text-lg mb-6">
            Located in Ochiltree County, Perryton experiences extreme weather in the Texas Panhandle:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Severe Hailstorms:</strong> Baseball-sized hail is common during spring and summer, requiring impact-resistant roofing materials.</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>High Winds:</strong> Sustained winds over 50 mph and gusts exceeding 70 mph demand wind-rated roofing systems.</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Temperature Extremes:</strong> From sub-zero winters to 100°F+ summers, roofing materials must withstand constant expansion and contraction.</div>
            </li>
          </ul>
        </section>

        <FadeIn>
          <section className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Understanding Perryton's Agricultural Environment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">Wheat Country Challenges</h3>
                <p className="text-gray-700 mb-4">
                  As the heart of wheat country in the Texas Panhandle, Perryton's agricultural environment creates unique roofing challenges. Grain dust, chemical exposure from farming operations, and equipment vibrations all impact roof longevity and performance.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Dust Accumulation:</strong> Wheat harvesting and processing create significant dust loads that can clog gutters and affect ventilation systems</li>
                  <li><strong>Chemical Exposure:</strong> Agricultural chemicals used in wheat production can accelerate deterioration of certain roofing materials</li>
                  <li><strong>Vibration Stress:</strong> Heavy farming equipment and grain trucks create ongoing vibrations that can loosen fasteners and stress roof structures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">High Plains Wind Patterns</h3>
                <p className="text-gray-700 mb-4">
                  Perryton's location in the High Plains creates unique wind challenges. With little natural windbreak across miles of farmland, properties face constant wind exposure that requires specialized roofing systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Prevailing Winds:</strong> Consistent southerly winds during growing season and harsh northerly winds during winter months</li>
                  <li><strong>Wind Acceleration:</strong> Open farmland allows winds to accelerate, creating uplift forces that exceed standard building codes</li>
                  <li><strong>Directional Damage:</strong> Wind-driven rain and debris typically impacts north and west-facing roof slopes most severely</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Specialized Roofing Solutions for Perryton Properties</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Agricultural Buildings</h3>
                <p className="text-gray-700 mb-4">
                  Grain storage facilities, equipment barns, and processing buildings require specialized roofing systems designed for agricultural use.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Metal roofing with enhanced corrosion resistance</li>
                  <li>• Ventilation systems for moisture and dust control</li>
                  <li>• Load-bearing systems for grain dust accumulation</li>
                  <li>• Chemical-resistant coatings and materials</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Residential Homes</h3>
                <p className="text-gray-700 mb-4">
                  Perryton families need roofing systems that protect against severe weather while handling the unique stresses of rural living.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Class 4 impact-resistant shingles for hail protection</li>
                  <li>• Enhanced wind uplift ratings for High Plains conditions</li>
                  <li>• Dust-resistant ventilation and filtration systems</li>
                  <li>• Energy-efficient materials for extreme temperature swings</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-4">Commercial Properties</h3>
                <p className="text-gray-700 mb-4">
                  Perryton businesses need reliable roofing that supports operations while withstanding agricultural and weather challenges.
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• TPO and EPDM systems with enhanced UV resistance</li>
                  <li>• Metal roofing designed for equipment mounting</li>
                  <li>• Drainage systems optimized for dust and debris</li>
                  <li>• Low-maintenance materials for reduced downtime</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Local Expertise That Makes the Difference</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-brown mb-6">Understanding Ochiltree County</h3>
                <p className="text-gray-700 mb-4">
                  Our team understands the unique characteristics of Perryton and Ochiltree County that affect roofing systems:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>Soil Conditions:</strong> High clay content soils that expand and contract with moisture changes, affecting foundation stability and roof alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>Local Building Patterns:</strong> Understanding of how Perryton's development patterns affect wind flow and weather exposure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>Seasonal Cycles:</strong> Knowledge of how wheat farming cycles affect dust levels, chemical exposure, and traffic patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 mt-1">▸</span>
                    <span><strong>Infrastructure:</strong> Familiarity with local utility systems, drainage patterns, and municipal requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-brown mb-6">Our Perryton Track Record</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-gold mb-2">160+</div>
                      <div className="text-sm text-gray-700">Perryton Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-gold mb-2">15+</div>
                      <div className="text-sm text-gray-700">Years in Area</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-gold mb-2">98%</div>
                      <div className="text-sm text-gray-700">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
                      <div className="text-sm text-gray-700">Emergency Response</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-brand-gold-light rounded-lg">
                    <p className="text-sm text-gray-800 text-center italic">
                      "Trusted by Perryton families and businesses for over a decade"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Insurance Claims Support for Perryton Residents</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">Navigating Weather Damage Claims</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-4">Common Perryton Weather Events</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Spring Supercells (March-June):</strong> Softball-sized hail and tornado activity peak during this period</li>
                    <li><strong>High Plains Derechos:</strong> Straight-line winds exceeding 70 mph cause widespread damage</li>
                    <li><strong>Winter Ice Storms:</strong> Freezing rain creates ice loads that can damage roof structures</li>
                    <li><strong>Summer Severe Thunderstorms:</strong> Large hail and microbursts during afternoon heating</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-brown mb-4">Our Insurance Support Process</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                      <span className="text-gray-700">Document all damage with professional photography and detailed measurements</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                      <span className="text-gray-700">Correlate damage with National Weather Service storm reports for your area</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                      <span className="text-gray-700">Meet with insurance adjusters and provide professional assessment</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                      <span className="text-gray-700">Handle all paperwork and ensure full coverage for legitimate damages</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
                <p className="text-green-800"><strong>Success Rate:</strong> 96% of our Perryton clients receive full coverage for weather-related damage when we handle their insurance documentation.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Emergency Response for Perryton Weather Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-brown mb-4">When Severe Weather Strikes</h3>
                <p className="text-gray-700 mb-4">
                  Perryton's location in the heart of "Hail Alley" means severe weather can strike with little warning. When storms hit, immediate action is critical to prevent further damage.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">24/7 Emergency Hotline</h4>
                  <p className="text-red-700 text-lg font-bold">(806) 622-6041</p>
                  <p className="text-red-700 text-sm">Available day or night for Ochiltree County emergencies</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emergency tarping to prevent water infiltration</li>
                  <li>• Rapid response team deployment within 2-4 hours</li>
                  <li>• Temporary repairs to secure property until permanent fixes</li>
                  <li>• Insurance claim initiation and documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-brown mb-4">Preventive Storm Preparation</h3>
                <p className="text-gray-700 mb-4">
                  The best defense against storm damage is preparation. We help Perryton property owners prepare for severe weather season.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">Spring Storm Season (March-June)</h4>
                    <p className="text-blue-700 text-sm">Pre-season inspections identify vulnerabilities before peak storm activity</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-semibold text-yellow-800 mb-2">Hail Season Preparation</h4>
                    <p className="text-yellow-700 text-sm">Installation of impact-resistant materials and protective systems</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Annual Maintenance</h4>
                    <p className="text-green-700 text-sm">Regular maintenance prevents small issues from becoming major storm vulnerabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">What Our Perryton Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "After the hailstorm last spring, 5 Star was out the next morning with tarps and had our roof completely replaced within a week. They handled everything with our insurance company."
                </p>
                <div className="text-brand-brown font-semibold">- Jerry M., Wheat Farmer</div>
                <div className="text-gray-500 text-sm">Perryton, TX</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Professional crew that understood our grain storage facility needs. They worked around harvest season and completed the job without disrupting operations."
                </p>
                <div className="text-brand-brown font-semibold">- Linda K., Agricultural Operations</div>
                <div className="text-gray-500 text-sm">Ochiltree County, TX</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  "Living in the country, we needed a contractor who understood our unique challenges. 5 Star delivered exactly what we needed at a fair price."
                </p>
                <div className="text-brand-brown font-semibold">- Mike & Sarah T.</div>
                <div className="text-gray-500 text-sm">Rural Perryton, TX</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Service Coverage Throughout the Texas Panhandle</h2>
            <p className="text-lg mb-4">
              While we're proud to serve Perryton and Ochiltree County, our roofing expertise extends across the entire region:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">• Amarillo Roofing</a>
              <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">• Midland Roofing</a>
              <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline">• Odessa Roofing</a>
              <a href="/lubbock-tx-roofing/" className="text-brand-gold hover:underline">• Lubbock Roofing</a>
              <a href="/service-areas/" className="text-brand-gold hover:underline">• All Service Areas</a>
            </div>
          </section>
        </FadeIn>

        <section className="bg-brand-gold-light rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Perryton Roofing Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-1">Free Inspection</h3>
                <p className="text-gray-700">We inspect your Perryton property, document damage with photos, and provide a detailed written estimate—completely free.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold mb-1">Insurance Support</h3>
                <p className="text-gray-700">We help file insurance claims, meet with adjusters, and ensure all damage is properly documented.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold mb-1">Professional Installation</h3>
                <p className="text-gray-700">Our experienced crews install your new roof using premium materials. Most residential roofs in Perryton are completed in 1-2 days.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold mb-1">Quality Inspection & Warranty</h3>
                <p className="text-gray-700">We inspect all work, clean up your property, and provide comprehensive warranty information.</p>
              </div>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof in Perryton?</h2>
            <p className="cta-text mb-6">
              Serving Perryton, Ochiltree County, and the entire Texas Panhandle. Contact us today for your free inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4 inline-block bg-white text-brand-brown hover:bg-gray-100">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4 border-2 border-white hover:bg-white hover:text-brand-brown">Request Free Inspection</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
    </div>
  );
}
