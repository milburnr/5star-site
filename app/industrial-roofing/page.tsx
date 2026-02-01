import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: 'Industrial Roofing in Amarillo TX | Warehouses & Manufacturing Facilities | 5 Star',
  description: 'Industrial roofing specialists in Amarillo TX. TPO, EPDM, and metal roofing for warehouses and manufacturing facilities. 24/7 emergency service.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industrial Roofing Services",
  "provider": {
    "@type": "RoofingContractor",
    "name": "5 Star Commercial Roofing",
    "telephone": "(806) 622-6041",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2909 S Western St",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79109",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Amarillo",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Midland",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Odessa",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Lubbock",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Industrial Roofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "TPO Roofing Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "EPDM Rubber Roofing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Metal Roofing Systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Hail Damage Repair"
        }
      }
    ]
  },
  "url": "https://5starcommercialroofing.com/industrial-roofing"
};

export default function Page() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Industrial Roofing",
                      "url": "/industrial-roofing/"
              }
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" 
        style={{ backgroundImage: 'url(/images/commercial-roofing-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Industrial Roofing Services in <span className="text-brand-gold-light">Amarillo & West Texas</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Warehouses • Manufacturing • Distribution Centers</p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Specialized industrial roofing for the Texas Panhandle's extreme weather. From emergency repairs to complete roof replacements, we handle facilities of any size with minimal downtime.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="bg-red-600 text-white px-10 py-5 rounded-full font-bold hover:bg-red-700 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Emergency: (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Free Assessment
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={15} suffix="+" /></div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">500K+</div>
                <div className="text-brand-brown font-semibold text-lg">Sq Ft Installed</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <div className="text-4xl font-bold text-brand-gold mb-3">100%</div>
                <div className="text-brand-brown font-semibold text-lg">Insured & Licensed</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Industrial Roofing Built for the Texas Panhandle</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Industrial facilities in Amarillo, Midland, Odessa, and Lubbock face unique roofing challenges that can shut down operations and cost millions in damage. The Texas Panhandle sits in America's hail belt, experiencing an average of 8-12 hailstorms per year, causing extensive damage to warehouses, manufacturing plants, and distribution centers across the region. Combined with extreme temperature swings (-10°F to 110°F), high winds averaging 12-14 mph with gusts exceeding 80 mph, and intense UV exposure at 3,600+ feet elevation, industrial roofs in West Texas require specialized engineering and materials designed for extreme weather survival.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At 5 Star Commercial Roofing, we specialize in industrial roofing systems engineered to withstand West Texas weather—with a focus on rapid <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">hail damage</a> assessment and insurance claim assistance to get your facility back in operation fast. Our comprehensive <a href="/commercial-roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">commercial roofing services</a> cover everything from emergency repairs to complete roof replacements for industrial facilities of any size, from 10,000 sq ft warehouses to million+ square foot distribution centers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Critical Business Continuity:</strong> Industrial downtime costs an average of $50,000+ per hour for manufacturing operations. We understand that your roof isn't just protection—it's essential infrastructure for maintaining production schedules, protecting inventory worth millions, and ensuring employee safety. Our industrial roofing solutions prioritize rapid installation, minimal operational disruption, and long-term durability to keep your facility running regardless of Texas Panhandle weather conditions.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Industrial Roofing Systems for Texas Panhandle Weather</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Industrial facilities require roofing systems that can withstand the most extreme weather conditions while maintaining operational integrity. Our material selection and installation methods are specifically engineered for the unique challenges of West Texas industrial environments.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-brand-brown mb-4">🏭 TPO Roofing Systems</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Thermoplastic Polyolefin (TPO) is our top recommendation for large industrial facilities in Amarillo and throughout the Texas Panhandle. Heat-welded seams create a completely waterproof barrier that stands up to hail impact, extreme temperatures, and high winds that would compromise mechanically fastened systems.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Performance Benefits</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Superior hail resistance (UL 2218 Class 4 available)</li>
                    <li>• Reflective white surface reduces cooling costs by 30-40%</li>
                    <li>• Excellent for large square footage (100,000+ sq ft)</li>
                    <li>• Rapid installation minimizes downtime (2-5 days typical)</li>
                    <li>• 20-30 year warranty options with proven track record</li>
                    <li>• Chemical resistance for industrial environments</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm italic">
                  <strong>Texas Advantage:</strong> White TPO membrane can reduce interior temperatures by 15-25°F compared to dark surfaces, significantly lowering HVAC costs in our extreme summer heat.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-brand-brown mb-4">🔧 EPDM Rubber Roofing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ethylene Propylene Diene Monomer (EPDM) offers proven durability for industrial applications where cost-effectiveness meets long-term performance. EPDM's flexibility and weather resistance make it ideal for facilities needing reliable protection against Texas Panhandle weather extremes.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Industrial Advantages</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Highly resistant to hail damage and punctures</li>
                    <li>• Withstands extreme temperature fluctuations (-40°F to 180°F)</li>
                    <li>• Budget-friendly for large roofs with excellent ROI</li>
                    <li>• Quick repairs if storm damage occurs (same-day possible)</li>
                    <li>• 25-30 year lifespan in Texas climate conditions</li>
                    <li>• Excellent resistance to industrial chemicals and ozone</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm italic">
                  <strong>Maintenance Benefit:</strong> EPDM repairs can often be completed without facility shutdown, making it ideal for 24/7 industrial operations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-semibold text-brand-brown mb-4">⚡ Standing Seam Metal Roofing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For warehouses and distribution centers requiring maximum durability, standing seam metal provides unmatched hail resistance and longevity. The raised seams shed water instantly—critical after Panhandle storms that can dump 3-4 inches in hours. Metal roofing also provides superior structural performance for facilities housing heavy equipment.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Long-Term Benefits</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Best hail impact resistance available (tested to 2" steel balls)</li>
                    <li>• 40-50 year lifespan with minimal maintenance</li>
                    <li>• Class A fire rating for insurance premium savings</li>
                    <li>• Wind uplift resistance to 200+ mph (critical in tornado alley)</li>
                    <li>• Energy-efficient cool roof coatings available</li>
                    <li>• 100% recyclable at end of service life</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm italic">
                  <strong>Insurance Advantage:</strong> Metal roofing often qualifies for significant insurance premium reductions due to superior fire and wind resistance ratings.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-brand-brown mb-4">🏗️ Modified Bitumen & BUR</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Built-up roofing (BUR) and modified bitumen systems offer multiple waterproof layers—essential protection for critical industrial operations that can't afford any downtime from water infiltration. These systems excel in applications requiring heavy equipment placement and foot traffic for maintenance access.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Heavy-Duty Performance</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Multi-layer protection against leaks (3-5 plies typical)</li>
                    <li>• Excellent for heavy equipment installations and HVAC units</li>
                    <li>• Gravel ballast provides superior hail protection</li>
                    <li>• Proven 50+ year performance in Texas climate</li>
                    <li>• Self-healing properties repair minor punctures automatically</li>
                    <li>• Superior performance under heavy foot traffic</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm italic">
                  <strong>Maintenance Access:</strong> BUR systems provide safe, stable platforms for rooftop equipment maintenance—crucial for industrial facilities with extensive HVAC and processing equipment.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Texas Panhandle Industrial Weather Challenges</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🌪️</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Tornado Alley Impact</h3>
                <p className="text-gray-700 text-center">The Texas Panhandle experiences more tornado activity than anywhere else in the state. Industrial facilities require wind ratings exceeding 200 mph to survive nearby tornado events and extreme microbursts.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🧊</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Hail Capital</h3>
                <p className="text-gray-700 text-center">Amarillo averages 8-12 severe hailstorms annually, with documented softball-sized hail events. Industrial roofs must withstand repeated impacts that would destroy residential systems.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4 text-center">🌡️</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Extreme Temperature Swings</h3>
                <p className="text-gray-700 text-center">Daily temperature variations of 40-50°F stress roofing materials beyond normal limits. Industrial systems require enhanced flexibility to prevent thermal cracking and membrane failure.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-red-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Emergency Hail Damage Response for Industrial Facilities</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              When hail strikes your industrial facility, every hour of downtime costs money—often exceeding $50,000+ per hour for manufacturing operations. Water infiltration from storm-damaged roofs can destroy millions in inventory, disrupt production schedules, and force facility shutdowns. Our emergency response team provides immediate protection to minimize business interruption and preserve your operations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">24/7 Emergency Service</h3>
                <p className="text-gray-700 mb-4">Available day or night for emergency tarping and temporary repairs to protect inventory, equipment, and maintain production capabilities. Our emergency crews carry specialized equipment for large-scale industrial facilities.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• 2-4 hour response time throughout Texas Panhandle</li>
                  <li>• Large-format emergency tarping (up to 10,000+ sq ft sections)</li>
                  <li>• Temporary roof repairs to maintain partial operations</li>
                  <li>• Emergency drainage solutions for water removal</li>
                  <li>• Coordination with facility management for minimal disruption</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Comprehensive Insurance Documentation</h3>
                <p className="text-gray-700 mb-4">Complete damage assessment with aerial drone footage, thermal imaging, and detailed reports designed specifically for commercial insurance adjusters and industrial facility claims.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Aerial drone photography and video documentation</li>
                  <li>• Thermal imaging to detect hidden water infiltration</li>
                  <li>• GPS-mapped damage assessment for precise location tracking</li>
                  <li>• Cost analysis for business interruption calculations</li>
                  <li>• Detailed material and labor estimates for insurance review</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Minimal Downtime Operations</h3>
                <p className="text-gray-700 mb-4">Strategic scheduling and efficient crews keep your operations running during roof replacement. We understand industrial processes and work around your production schedules and equipment requirements.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Phased installation to maintain operational sections</li>
                  <li>• Weekend and off-hours scheduling options</li>
                  <li>• Protection protocols for sensitive equipment and inventory</li>
                  <li>• Dust containment systems for clean room environments</li>
                  <li>• Coordination with facility safety and security requirements</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Complete Insurance Claim Management</h3>
                <p className="text-gray-700 mb-4">We handle all communication with your insurance company from initial claim through final payment, ensuring maximum coverage while you focus on running your business operations.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Direct adjuster communication and facility walk-throughs</li>
                  <li>• Supplement negotiations for additional discovered damage</li>
                  <li>• Business interruption loss documentation assistance</li>
                  <li>• Code upgrade coverage identification and claims</li>
                  <li>• Final claim resolution and payment processing coordination</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Industrial Facility Emergency Response Protocol</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                  <h4 className="font-semibold mb-2">Immediate Assessment</h4>
                  <p className="text-sm text-gray-700">Safety evaluation, damage extent, and immediate protection needs identification within 30 minutes of arrival.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                  <h4 className="font-semibold mb-2">Emergency Protection</h4>
                  <p className="text-sm text-gray-700">Large-scale tarping and temporary repairs to prevent water infiltration and protect operations. Completed within 4-8 hours.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                  <h4 className="font-semibold mb-2">Documentation & Claims</h4>
                  <p className="text-sm text-gray-700">Complete damage documentation, insurance notification, and adjuster coordination. Begins within 24 hours.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
                  <h4 className="font-semibold mb-2">Permanent Restoration</h4>
                  <p className="text-sm text-gray-700">Complete roof replacement with enhanced materials, minimal downtime, and full warranty coverage.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Industrial Facilities We Serve Throughout Texas Panhandle</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From Amarillo's growing industrial corridors to Lubbock's agricultural processing centers, Midland's energy infrastructure, and Odessa's petroleum facilities, we provide specialized roofing solutions for every type of industrial operation across West Texas.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                <div className="text-4xl mb-4 text-center">🏭</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Manufacturing Plants</h3>
                <p className="text-gray-700 text-center">Specialized roofing for automotive, food processing, electronics, and heavy machinery manufacturing facilities requiring precise environmental control.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="text-4xl mb-4 text-center">📦</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Distribution Centers</h3>
                <p className="text-gray-700 text-center">Large-scale warehouse roofing optimized for high-bay storage, automated systems, and rapid temperature control for inventory protection.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                <div className="text-4xl mb-4 text-center">❄️</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Cold Storage Facilities</h3>
                <p className="text-gray-700 text-center">Insulated roofing systems designed for temperature-controlled environments, preventing condensation and maintaining energy efficiency.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <div className="text-4xl mb-4 text-center">🌾</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Agricultural Processing</h3>
                <p className="text-gray-700 text-center">Cotton gins, grain elevators, feedlots, and meat processing facilities with specialized ventilation and chemical-resistant roofing systems.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Energy Infrastructure</h3>
                <p className="text-gray-700 text-center">Oil refineries, power plants, compressor stations, and pipeline facilities requiring specialized fire-resistant and chemical-resistant roofing materials.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                <div className="text-4xl mb-4 text-center">🚚</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Transportation Hubs</h3>
                <p className="text-gray-700 text-center">Truck terminals, rail yards, airport facilities, and logistics centers requiring durable, low-maintenance roofing for 24/7 operations.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
                <div className="text-4xl mb-4 text-center">🔬</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Technology & Research</h3>
                <p className="text-gray-700 text-center">Data centers, research facilities, and technology manufacturing requiring precise environmental control and electromagnetic compatibility.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
                <div className="text-4xl mb-4 text-center">🏢</div>
                <h3 className="text-xl font-semibold text-brand-brown mb-3 text-center">Industrial Parks</h3>
                <p className="text-gray-700 text-center">Multi-tenant industrial complexes and business parks requiring coordinated roofing solutions and maintenance programs across multiple buildings.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Specialized Industrial Applications</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">📊 Clean Room Environments</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Contamination-free installation procedures</li>
                    <li>• Positive pressure maintenance during work</li>
                    <li>• Specialized sealants and membranes</li>
                    <li>• HEPA filtration system protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🔥 Fire-Rated Assemblies</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• UL-rated fire-resistant roof assemblies</li>
                    <li>• Class A fire rating certifications</li>
                    <li>• Sprinkler system integration</li>
                    <li>• Emergency egress planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🧪 Chemical Resistance</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Acid and alkali resistant membranes</li>
                    <li>• Solvent-resistant sealant systems</li>
                    <li>• Corrosive environment protection</li>
                    <li>• Environmental compliance documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Industrial Roofing Project Management</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Industrial roofing projects require precise coordination, specialized equipment, and experienced project management to minimize operational disruption while ensuring quality installation. Our project management approach focuses on communication, safety, and efficiency.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-brand-brown">🎯 Pre-Construction Planning</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Facility Assessment & Coordination</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Production schedule analysis and work windows identification</li>
                      <li>• Equipment protection and access route planning</li>
                      <li>• Utility coordination (electrical, gas, water systems)</li>
                      <li>• Safety protocol development for specific industrial hazards</li>
                      <li>• Environmental compliance verification and permitting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Material Logistics & Staging</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Large-scale material delivery coordination</li>
                      <li>• On-site staging area designation and setup</li>
                      <li>• Crane and equipment access planning</li>
                      <li>• Weather contingency planning for material protection</li>
                      <li>• Waste management and disposal planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-brand-brown">⚙️ Installation Execution</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Phased Installation Approach</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Section-by-section installation to maintain operations</li>
                      <li>• Daily progress reporting and schedule updates</li>
                      <li>• Quality control inspections at each phase</li>
                      <li>• Real-time problem resolution and communication</li>
                      <li>• Weather monitoring and schedule adjustments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Safety & Compliance Management</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• OSHA compliance documentation and reporting</li>
                      <li>• Daily safety briefings and hazard assessments</li>
                      <li>• Hot work permits and fire watch protocols</li>
                      <li>• Fall protection and confined space entry procedures</li>
                      <li>• Environmental monitoring and protection measures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Choose 5 Star for Industrial Roofing?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4 text-center">🏆</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Proven Industrial Experience</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>15+ Years Experience:</strong> Proven track record with large commercial and industrial projects across Texas</li>
                  <li><strong>Million+ Sq Ft Installed:</strong> Experience with facilities from 10,000 to 500,000+ square feet</li>
                  <li><strong>Industrial Expertise:</strong> Specialized knowledge of manufacturing, processing, and distribution facility requirements</li>
                  <li><strong>Project Portfolio:</strong> Successfully completed projects for Fortune 500 companies and local businesses</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4 text-center">🛡️</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Complete Protection & Compliance</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Fully Licensed & Insured:</strong> $2M+ liability coverage protects your facility during installation</li>
                  <li><strong>Bonding Available:</strong> Performance bonds available for large-scale industrial projects</li>
                  <li><strong>OSHA Compliance:</strong> Certified safety programs with excellent safety records</li>
                  <li><strong>Environmental Compliance:</strong> EPA and state environmental regulation adherence</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Emergency Response Specialists</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>24/7 Emergency Service:</strong> Rapid response for storm damage and critical leaks</li>
                  <li><strong>Hail Damage Experts:</strong> Specialized assessment and insurance claim assistance</li>
                  <li><strong>Minimal Downtime:</strong> Strategic scheduling to maintain your operations</li>
                  <li><strong>Insurance Expertise:</strong> Direct adjuster relationships and claim management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4 text-center">🔬</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Advanced Technology & Materials</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Premium Materials:</strong> Top-tier roofing systems with manufacturer warranties up to 30 years</li>
                  <li><strong>Advanced Installation:</strong> State-of-the-art equipment for large-scale industrial applications</li>
                  <li><strong>Quality Control:</strong> Multi-point inspection process ensures perfect installation</li>
                  <li><strong>Thermal Imaging:</strong> Advanced diagnostic equipment for moisture detection</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Project Management Excellence</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Dedicated Project Managers:</strong> Single point of contact for all project communication</li>
                  <li><strong>Real-Time Updates:</strong> Daily progress reports and photo documentation</li>
                  <li><strong>Schedule Adherence:</strong> On-time completion with minimal operational disruption</li>
                  <li><strong>Post-Installation Support:</strong> Comprehensive warranties and maintenance programs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-semibold mb-4 text-brand-brown text-center">Local Texas Panhandle Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Weather Expertise:</strong> Deep understanding of Panhandle climate challenges</li>
                  <li><strong>Regional Relationships:</strong> Established supplier and contractor networks</li>
                  <li><strong>Local Code Knowledge:</strong> Expert understanding of regional building codes and requirements</li>
                  <li><strong>Community Investment:</strong> Locally owned business supporting Panhandle communities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

      <h2 className="text-2xl font-bold mt-8 mb-4">Free Industrial Roof Assessment</h2>
      <p className="mb-6">
        Don't wait for a leak to discover roof damage. Our comprehensive inspection includes:
      </p>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>Aerial drone photography to identify hail damage</li>
        <li>Moisture detection scans to find hidden leaks</li>
        <li>Structural assessment of roof deck and supports</li>
        <li>Drainage system evaluation</li>
        <li>Detailed written report with photos</li>
        <li>No-obligation repair or replacement estimate</li>
      </ul>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Comprehensive Service Areas Across West Texas</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
              Our industrial roofing services are available throughout the Texas Panhandle and West Texas region. We serve major industrial centers, energy production areas, agricultural processing facilities, and manufacturing hubs across the region's diverse industrial landscape.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <h3 className="text-xl font-bold mb-4 text-brand-brown text-center">Texas Panhandle Hub</h3>
                <ul className="space-y-2 text-center">
                  <li><a href="/roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline font-semibold">Amarillo</a> - Regional headquarters and major industrial center</li>
                  <li><strong>Canyon</strong> - Agricultural processing and Texas Tech proximity</li>
                  <li><strong>Borger</strong> - Petroleum refining and chemical processing</li>
                  <li><strong>Pampa</strong> - Energy production and manufacturing</li>
                  <li><strong>Dumas</strong> - Agricultural and energy industrial facilities</li>
                  <li><strong>Dalhart</strong> - Beef processing and agricultural operations</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-brand-brown text-center">Permian Basin Energy</h3>
                <ul className="space-y-2 text-center">
                  <li><a href="/midland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline font-semibold">Midland</a> - Energy corporate headquarters</li>
                  <li><a href="/odessa-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline font-semibold">Odessa</a> - Petroleum production and processing</li>
                  <li><strong>Andrews</strong> - Oil field services and manufacturing</li>
                  <li><strong>Big Spring</strong> - Energy infrastructure and logistics</li>
                  <li><strong>Pecos</strong> - Oil field equipment and services</li>
                  <li><strong>Monahans</strong> - Petroleum refining operations</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-4 text-brand-brown text-center">South Plains Agricultural</h3>
                <ul className="space-y-2 text-center">
                  <li><strong>Lubbock</strong> - Cotton processing and Texas Tech research</li>
                  <li><strong>Plainview</strong> - Agricultural processing and food production</li>
                  <li><strong>Levelland</strong> - Cotton warehousing and processing</li>
                  <li><strong>Brownfield</strong> - Agricultural equipment and storage</li>
                  <li><strong>Littlefield</strong> - Food processing and distribution</li>
                  <li><strong>Muleshoe</strong> - Agricultural processing facilities</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                <h3 className="text-xl font-bold mb-4 text-brand-brown text-center">Extended Coverage Areas</h3>
                <ul className="space-y-2 text-center">
                  <li><strong>Childress</strong> - Agricultural and transportation</li>
                  <li><strong>Hereford</strong> - Beef processing and agriculture</li>
                  <li><strong>Tulia</strong> - Agricultural processing</li>
                  <li><strong>Perryton</strong> - Wheat processing and oil field services</li>
                  <li><strong>Seminole</strong> - Agricultural and energy operations</li>
                  <li><strong>Lamesa</strong> - Cotton processing and distribution</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-gold-light to-yellow-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown text-center">Regional Industrial Specializations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">🏭 Energy & Petroleum Infrastructure</h4>
                  <p className="text-gray-700 mb-4">The Permian Basin produces over 5 million barrels of oil daily, requiring specialized roofing for refineries, processing plants, compressor stations, and pipeline facilities. We understand the unique requirements of energy infrastructure including fire resistance, chemical compatibility, and environmental compliance.</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Petroleum refinery roofing systems</li>
                    <li>• Natural gas processing facility protection</li>
                    <li>• Pipeline pumping station weather barriers</li>
                    <li>• Oil field service equipment buildings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">🌾 Agricultural Processing Facilities</h4>
                  <p className="text-gray-700 mb-4">West Texas produces 40%+ of America's cotton, requiring massive processing and storage facilities. Our agricultural roofing expertise includes grain elevators, cotton gins, feedlots, and processing plants designed for the region's harsh weather and operational demands.</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Cotton gin facility roofing and protection</li>
                    <li>• Grain elevator and storage facility systems</li>
                    <li>• Livestock facility environmental control</li>
                    <li>• Food processing plant specialized roofing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Understanding Industrial Roofing Costs & ROI in West Texas</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Industrial roofing is a significant investment, but understanding the long-term return on investment helps facility managers make informed decisions. In the Texas Panhandle's extreme climate, the right roofing system can save thousands annually in energy costs while preventing millions in damage from our region's severe weather events.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-brown mb-4">💰 Investment Cost Factors</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Square Footage Economics</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• <strong>10,000-50,000 sq ft:</strong> $8-15 per sq ft installed</li>
                        <li>• <strong>50,000-150,000 sq ft:</strong> $6-12 per sq ft (economy of scale)</li>
                        <li>• <strong>150,000+ sq ft:</strong> $5-10 per sq ft (bulk pricing)</li>
                        <li>• Setup costs distributed over larger areas reduce unit pricing</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Material Selection Impact</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• <strong>TPO Systems:</strong> $5-8 per sq ft (best value for large facilities)</li>
                        <li>• <strong>EPDM Rubber:</strong> $4-7 per sq ft (cost-effective durability)</li>
                        <li>• <strong>Standing Seam Metal:</strong> $12-18 per sq ft (40-50 year lifespan)</li>
                        <li>• <strong>Modified Bitumen:</strong> $6-10 per sq ft (heavy-duty applications)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Project Complexity Factors</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Roof penetrations and equipment installations</li>
                        <li>• Structural repairs and deck replacement needs</li>
                        <li>• Insulation upgrades and energy efficiency improvements</li>
                        <li>• Accessibility challenges and crane requirements</li>
                        <li>• Environmental protection and containment needs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-brand-brown mb-4">📈 Return on Investment Benefits</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">Energy Cost Savings</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• <strong>Cool Roof Savings:</strong> 20-40% reduction in cooling costs</li>
                        <li>• <strong>Insulation Upgrades:</strong> 15-25% total energy savings</li>
                        <li>• <strong>Thermal Performance:</strong> Reduced HVAC system wear and replacement costs</li>
                        <li>• <strong>Annual Savings:</strong> $0.50-2.00 per sq ft in energy costs</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 mb-2">Insurance & Risk Mitigation</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• <strong>Premium Reductions:</strong> 10-35% for impact-resistant systems</li>
                        <li>• <strong>Deductible Benefits:</strong> Lower wind/hail deductibles available</li>
                        <li>• <strong>Claims Prevention:</strong> Avoid costly water damage and business interruption</li>
                        <li>• <strong>Risk Assessment:</strong> Improved facility risk profile for insurers</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-yellow-800 mb-2">Business Continuity Value</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• <strong>Downtime Prevention:</strong> Each hour of avoided downtime worth $20,000-100,000+</li>
                        <li>• <strong>Inventory Protection:</strong> Prevent millions in moisture-damaged goods</li>
                        <li>• <strong>Equipment Preservation:</strong> Protect sensitive machinery from water damage</li>
                        <li>• <strong>Productivity Maintenance:</strong> Stable interior environment for operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-brand-gold-light to-yellow-100 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-brand-brown">Texas Panhandle ROI Example: 100,000 Sq Ft Distribution Center</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Initial Investment</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• TPO Roof System: $650,000</li>
                      <li>• Enhanced Insulation: $150,000</li>
                      <li>• <strong>Total Investment: $800,000</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Annual Savings</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Energy Cost Reduction: $45,000/year</li>
                      <li>• Insurance Premium Savings: $15,000/year</li>
                      <li>• <strong>Total Annual Savings: $60,000</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Payback Analysis</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Payback Period: 13.3 years</li>
                      <li>• 20-Year Net Savings: $400,000+</li>
                      <li>• <strong>ROI: 150%+ over roof lifespan</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Preventive Maintenance Programs for Industrial Facilities</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Extend your industrial roof's lifespan and prevent costly emergency repairs with our comprehensive preventive maintenance programs. In the Texas Panhandle's extreme weather environment, regular inspections and minor repairs catch problems before they become major issues that could shut down your operations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-brand-brown">🔍 Comprehensive Maintenance Services</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Bi-Annual Inspections</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Spring pre-storm season assessment and preparation</li>
                      <li>• Fall post-storm season damage evaluation and repairs</li>
                      <li>• Thermal imaging for moisture detection and energy loss</li>
                      <li>• Structural integrity assessment and load analysis</li>
                      <li>• Equipment and penetration seal inspection</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Drainage System Maintenance</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Roof drain cleaning and flow testing</li>
                      <li>• Gutter system inspection and repair</li>
                      <li>• Downspout evaluation and clearing</li>
                      <li>• Ponding water identification and remediation</li>
                      <li>• Emergency overflow system verification</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Preventive Repairs Included</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Sealant and caulking replacement (up to 50 linear feet annually)</li>
                      <li>• Minor membrane repairs and patches</li>
                      <li>• Flashing adjustments and re-securing</li>
                      <li>• Fastener replacement and tightening</li>
                      <li>• Surface cleaning and debris removal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-brand-brown">📊 Documentation & Reporting</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Detailed Inspection Reports</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• High-resolution photo documentation of all roof areas</li>
                      <li>• GPS-mapped condition assessment with severity ratings</li>
                      <li>• Prioritized repair recommendations with cost estimates</li>
                      <li>• Warranty compliance verification and documentation</li>
                      <li>• Historical tracking of roof condition trends</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Priority Emergency Response</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 24/7 emergency hotline access for maintenance program members</li>
                      <li>• Reduced response times during storm events</li>
                      <li>• Priority scheduling for urgent repairs</li>
                      <li>• Emergency tarping and temporary repairs included</li>
                      <li>• Direct communication channel with project managers</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Budget Planning Support</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Long-term roof replacement planning and budgeting</li>
                      <li>• Annual maintenance cost projections</li>
                      <li>• Capital expenditure planning assistance</li>
                      <li>• ROI analysis for major repairs vs. replacement</li>
                      <li>• Insurance claim preparation and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
              <h3 className="text-2xl font-semibold mb-6 text-brand-brown">Texas Panhandle Climate-Specific Maintenance</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Preventive maintenance programs are especially valuable for facilities in Amarillo and West Texas, where severe weather events can cause gradual damage that compounds over time. Our maintenance approach addresses the unique challenges of operating in America's hail belt.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🌩️ Storm Season Preparation</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Pre-storm season roof strengthening and loose material securing</li>
                    <li>• Emergency action plan development and crew pre-positioning</li>
                    <li>• Temporary protection material staging at your facility</li>
                    <li>• Insurance documentation and claim preparation assistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">❄️ Winter Weatherization</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Freeze protection for drainage systems and pipes</li>
                    <li>• Ice dam prevention and snow load assessment</li>
                    <li>• Insulation inspection and thermal bridge identification</li>
                    <li>• Heating system coordination for roof equipment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">☀️ Summer Heat Protection</h4>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• UV damage assessment and protective coating application</li>
                    <li>• Thermal expansion joint inspection and adjustment</li>
                    <li>• Cool roof performance monitoring and optimization</li>
                    <li>• HVAC system integration and efficiency improvements</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-brand-brown">Maintenance Program Investment & Savings</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Annual Program Costs</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Small Facilities (10,000-50,000 sq ft): $2,500-5,000/year</li>
                      <li>• Medium Facilities (50,000-150,000 sq ft): $5,000-12,000/year</li>
                      <li>• Large Facilities (150,000+ sq ft): $12,000-25,000/year</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Preventive Savings</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Emergency repair cost avoidance: $10,000-100,000+/year</li>
                      <li>• Extended roof lifespan: 5-10 additional years</li>
                      <li>• Reduced downtime and business interruption costs</li>
                      <li>• Lower insurance premiums through documented maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Call <strong>(806) 622-6041</strong> to discuss a customized maintenance plan for your facility. Our maintenance programs are tailored to your specific building type, operations schedule, and budget requirements.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">How long does industrial roof installation take?</h3>
                <p className="text-gray-700 leading-relaxed">Timeline depends on facility size, weather conditions, and operational requirements. A typical 50,000 sq ft warehouse takes 5-10 working days, while larger facilities may require 2-4 weeks. We work closely with your schedule to minimize operational disruption and can perform installations during off-hours, weekends, or planned maintenance shutdowns if needed. Our project managers provide detailed scheduling that phases work to maintain critical operational areas.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Can you work around our production schedule?</h3>
                <p className="text-gray-700 leading-relaxed">Absolutely. We understand industrial facilities can't afford extended downtime—every hour of production matters. Our project managers coordinate closely with your operations team to schedule work during low-activity periods, and we can phase installations to keep critical areas operational. We've successfully completed roofing projects while facilities maintained 24/7 operations, using specialized containment and protection systems to prevent dust or debris from affecting production areas.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Do you handle insurance claims for industrial properties?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. We have extensive experience with commercial insurance claims throughout West Texas and understand the complexities of industrial facility claims. We document damage thoroughly using thermal imaging and aerial photography, meet with adjusters on-site, and ensure all covered damage is included in the claim. Our team handles the paperwork, supplement negotiations, and claim management so you can focus on running your business. We maintain a 95%+ approval rate on insurance claims.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">What warranties do you offer on industrial roofing?</h3>
                <p className="text-gray-700 leading-relaxed">We provide comprehensive warranty coverage including manufacturer material warranties ranging from 15-30 years depending on the roofing system, plus our workmanship warranty. Many TPO and EPDM systems come with 20-year warranties, while metal roofing can include 40-50 year warranties. We also offer extended warranty options and maintenance programs. All warranty coverage is explained in detail before you make a decision, and we provide ongoing warranty compliance documentation.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">How do you ensure safety on large industrial projects?</h3>
                <p className="text-gray-700 leading-relaxed">Safety is our top priority on every industrial project. We maintain OSHA compliance with certified safety officers on-site, conduct daily safety briefings, and implement comprehensive fall protection systems. Our crews are trained in industrial facility safety protocols including hot work permits, confined space entry, and hazardous material awareness. We coordinate with your facility safety team and maintain detailed safety documentation throughout the project.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">What makes Texas Panhandle industrial roofing different?</h3>
                <p className="text-gray-700 leading-relaxed">The Texas Panhandle presents unique challenges including extreme hail events (averaging 8-12 severe storms annually), high winds, extreme temperature swings, and UV exposure. Our industrial roofing systems are specifically engineered for these conditions using enhanced materials, specialized installation techniques, and wind-uplift ratings exceeding 200 mph. We understand local climate patterns and select materials proven to perform in West Texas conditions.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-12 rounded-3xl">
            <div className="flex items-center gap-8 mb-8">
              <div className="text-8xl">🚨</div>
              <div>
                <h2 className="text-3xl font-bold text-red-700 mb-4">Emergency Service Available 24/7</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When storm damage threatens your industrial facility, every minute counts. Our emergency response team is available 24/7 for tarping, temporary repairs, and damage assessment throughout the Texas Panhandle. We respond quickly to minimize downtime and protect your valuable assets, inventory, and operations.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="font-bold text-gray-800 mb-2">2-4 Hour Response</h3>
                <p className="text-gray-600">Emergency crews dispatched throughout West Texas with large-scale tarping and temporary repair capabilities.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-800 mb-2">Asset Protection</h3>
                <p className="text-gray-600">Immediate protection for millions in inventory, equipment, and infrastructure from weather damage.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold text-gray-800 mb-2">Insurance Documentation</h3>
                <p className="text-gray-600">Complete damage assessment and insurance claim preparation to ensure maximum coverage and rapid claim resolution.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-red-700 mb-4">Call (806) 622-6041 anytime for immediate assistance.</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section bg-gradient-to-r from-brand-brown to-brand-gold text-white">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-6">Get Your Free Industrial Roof Assessment</h2>
              <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your industrial facility with expert roofing services designed for the Texas Panhandle's extreme weather. From emergency repairs to complete roof replacements, we provide comprehensive solutions that minimize downtime and maximize protection for your valuable operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3">✅ Free Assessment</h3>
                  <p>Comprehensive roof evaluation with detailed report and recommendations at no cost to your facility.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3">🤝 Insurance Assistance</h3>
                  <p>Complete claim management and adjuster coordination to ensure maximum coverage for your roofing project.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3">🏗️ Minimal Downtime</h3>
                  <p>Strategic project management that works around your operations to maintain productivity and minimize business disruption.</p>
                </div>
              </div>
              
              <div className="flex gap-6 justify-center flex-wrap">
                <a href="tel:8066226041" className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-full font-bold hover:scale-110 transition-all duration-300 text-xl shadow-2xl">
                  📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-12 py-6 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-xl shadow-2xl">
                  Request Free Assessment
                </a>
              </div>
              
              <p className="text-lg mt-8 opacity-90">
                Serving industrial facilities throughout Amarillo, Lubbock, Midland, Odessa, and the entire Texas Panhandle region
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
      </div>
    </>
  );
}
