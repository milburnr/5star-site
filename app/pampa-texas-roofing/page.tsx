import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/pampa-texas-roofing/' },
  title: 'Roofing in Pampa, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Pampa, Texas Panhandle. Commercial, residential, and emergency roofing. Serving Gray County. Free inspections available.',
};

export default function PampaRoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": "https://5starroofingpros.com/pampa-texas-roofing/#localBusiness",
    "name": "5 Star Commercial Roofing - Pampa",
    "alternateName": "5 Star Roofing Pampa TX",
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
    "description": "Professional roofing contractor serving Pampa, Texas and Gray County with commercial, residential, emergency roofing, and specialized chemical plant and industrial facility roofing solutions.",
    "url": "https://5starroofingpros.com/pampa-texas-roofing/",
    "telephone": "+18066226041",
    "email": "admin@5starroofingpros.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2909 S Western St",
      "addressLocality": "Amarillo",
      "addressRegion": "TX",
      "postalCode": "79109",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.5373",
      "longitude": "-100.9598"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Pampa",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Gray County"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gray County"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "35.5373",
        "longitude": "-100.9598"
      },
      "geoRadius": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pampa Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chemical Plant Roofing Pampa",
            "description": "Specialized roofing for chemical manufacturing facilities including Celanese Corporation and Cabot Corporation with chemical-resistant materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Roofing Gray County",
            "description": "Industrial roofing for oil and gas facilities, manufacturing plants, and heavy industry with specialized materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Roofing Pampa TX",
            "description": "Commercial roofing services for Pampa businesses and Gray County facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Roofing Pampa TX",
            "description": "Residential roof repair and replacement for Pampa homes with impact-resistant and pollution-resistant materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Roofing Gray County",
            "description": "emergency roof repair services for residential and industrial facilities in Gray County"
          }
        }
      ]
    },
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
    "sameAs": [
      "https://www.facebook.com/5StarRoofingPros",
      "https://www.google.com/maps/place/5+Star+Commercial+Roofing"
    ]
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
                      "name": "Pampa",
                      "url": "/pampa-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-odessa-11-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Pampa's Professional Roofing Contractor</h1>
            <p className="hero-subtitle">Expert Roofing Services in Pampa & Gray County, Texas</p>
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
            <h2 className="content-block-title">Trusted Roofing Services in Pampa, Texas</h2>
            <p className="text-lg mb-4">
              As Pampa's premier <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">professional roofing contractor</a>, 5 Star Commercial Roofing brings over a decade of experience serving Gray County and the entire Texas Panhandle. Whether you need commercial roofing for Pampa's chemical plants, residential roofing for your home, or emergency storm damage repairs, our expert team delivers reliable, high-quality roofing solutions.
            </p>
            <p className="text-lg mb-4">
              Pampa's climate—with severe hailstorms, high winds, and extreme temperature swings—combined with the city's industrial base demands roofing systems built to withstand the harshest conditions and chemical exposure. We specialize in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail-resistant roofing materials</a> and chemical-resistant roofing systems proven to protect Gray County properties year after year.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">About Pampa: Industrial Heart of Gray County</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">City Profile</h3>
                <ul className="space-y-2">
                  <li><strong>Population:</strong> 16,867 (2020 census)</li>
                  <li><strong>County:</strong> Gray County (County Seat)</li>
                  <li><strong>Distance from Amarillo:</strong> 55 miles northeast</li>
                  <li><strong>Founded:</strong> 1902 (incorporated 1912)</li>
                  <li><strong>Named After:</strong> Quechua word "pampa" meaning "plain"</li>
                  <li><strong>Economic Base:</strong> Chemical manufacturing, oil/gas, agriculture</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Industrial Heritage</h3>
                <p className="text-gray-600 mb-4">
                  Pampa's economy transformed from agriculture to industry following the Worley-Reynolds #1 oil well discovery that launched the local oil boom. Today, major chemical manufacturers like Celanese Corporation and Cabot Corporation anchor the city's industrial base.
                </p>
                <p className="text-gray-600">
                  The city's strategic location and access to petroleum feedstocks made it a natural hub for petrochemical manufacturing, creating a robust industrial economy that requires specialized commercial and industrial roofing solutions.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Major Employers & Industries</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Celanese Corporation</h4>
                <p className="text-sm text-gray-600">Major petrochemical manufacturer producing synthetic fibers, plastics, and industrial chemicals requiring specialized chemical-resistant roofing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Cabot Corporation</h4>
                <p className="text-sm text-gray-600">Carbon black manufacturing facility producing essential petroleum byproducts for tires and inks, operating since 1927</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">National Oilwell Varco</h4>
                <p className="text-sm text-gray-600">Oilfield equipment manufacturing requiring large-span industrial roofing for equipment assembly and storage</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Oil & Gas Operations</h4>
                <p className="text-sm text-gray-600">Multiple petroleum companies including Phillips, Shell, and Kerr-McGee with facilities requiring specialized industrial roofing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Gray County Government</h4>
                <p className="text-sm text-gray-600">County courthouse, offices, and municipal facilities needing durable commercial roofing systems</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Clarendon College Pampa Center</h4>
                <p className="text-sm text-gray-600">Educational facilities requiring institutional-grade roofing systems for classrooms and administrative buildings</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Neighborhoods & Areas We Serve</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Industrial District</h4>
                <p className="text-gray-600 mb-3">
                  The massive chemical manufacturing complex housing Celanese, Cabot, and other industrial facilities. These properties require specialized roofing systems designed to handle chemical exposure, high temperatures, and industrial processes while meeting strict safety and environmental regulations.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Downtown Pampa</h4>
                <p className="text-gray-600 mb-3">
                  The historic city center and county courthouse area, featuring commercial buildings and government facilities that need reliable commercial roofing systems capable of protecting valuable records and providing long-term durability for public buildings.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Residential Communities</h4>
                <p className="text-gray-600 mb-3">
                  Family neighborhoods throughout Pampa where chemical plant workers, oil field employees, and local professionals live. These homes require impact-resistant roofing systems that can protect families and property from severe Texas Panhandle weather.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Rural Gray County</h4>
                <p className="text-gray-600 mb-3">
                  Agricultural and oil field properties throughout Gray County, including ranches, farms, and petroleum operations that require large metal building roofing, equipment storage facilities, and agricultural building systems designed for extreme weather exposure.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="section">
          <h2 className="section-title">Comprehensive Roofing Services in Pampa</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                <p className="text-gray-600 mb-4">
                  We install TPO, EPDM, metal roofing, and built-up systems for businesses and facilities throughout Gray County.
                </p>
                <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Commercial Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing</h3>
                <p className="text-gray-600 mb-4">
                  From asphalt shingles to metal roofing, we provide complete residential roofing services for Pampa homeowners. Our Class 4 impact-resistant shingles protect against Texas Panhandle hail.
                </p>
                <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Residential Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="card-hover p-6 bg-red-50">
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-red-700 mb-3">Storm Damage Repair</h3>
                <p className="text-gray-700 mb-4">
                  When severe weather strikes Pampa, we respond with emergency tarping and rapid roof repairs. Call us immediately for storm damage assessment.
                </p>
                <a href="/storm-damage-roof-repair-in-amarillo/" className="text-red-700 font-semibold">Emergency Service →</a>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Pampa Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Gray County Experts</h3>
                <p className="text-gray-600">We understand Pampa's weather patterns, from spring hailstorms to winter freezes. Our roofing systems are engineered for local climate challenges.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Insurance Claim Assistance</h3>
                <p className="text-gray-600">We work directly with insurance adjusters on <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage claims</a>, ensuring you receive full coverage for storm repairs.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Local & Regional Experience</h3>
                <p className="text-gray-600">Serving Pampa and communities throughout the Texas Panhandle with specialized roofing designed for extreme weather conditions.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Free Inspections</h3>
                <p className="text-gray-600">Every Pampa property receives a complimentary roof inspection with detailed assessments, photos, and written estimates—no obligation.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-4">Pampa Weather Challenges & Your Roof</h2>
          <p className="text-lg mb-6">
            Located in Gray County, Pampa experiences extreme weather in the Texas Panhandle:
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
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">Service Coverage Throughout the Texas Panhandle</h2>
            <p className="text-lg mb-4">
              While we're proud to serve Pampa and Gray County, our roofing expertise extends across the entire region:
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
          <h2 className="text-2xl font-bold mb-4">Our Pampa Roofing Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-1">Free Inspection</h3>
                <p className="text-gray-700">We inspect your Pampa property, document damage with photos, and provide a detailed written estimate—completely free.</p>
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
                <p className="text-gray-700">Our experienced crews install your new roof using premium materials. Most residential roofs in Pampa are completed in 1-2 days.</p>
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

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-6">Specialized Roofing Solutions for Pampa's Industrial Base</h2>
          
          <h3 className="text-xl font-bold mb-4 text-brand-brown">Chemical Manufacturing Facility Roofing</h3>
          <p className="text-lg mb-4">
            Pampa's chemical plants, including Celanese Corporation and Cabot Corporation, require specialized roofing systems designed for chemical manufacturing environments:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Chemical-Resistant Membranes:</strong> TPO, EPDM, and specialty coatings designed to withstand chemical exposure and emissions</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>High-Temperature Performance:</strong> Roofing systems rated for extreme heat generated by industrial processes</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Vapor Barrier Protection:</strong> Advanced systems preventing chemical vapors from compromising structural integrity</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Environmental Compliance:</strong> Roofing solutions that meet EPA and OSHA requirements for chemical facilities</div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 text-brand-brown">Oil & Gas Facility Roofing</h3>
          <p className="text-lg mb-4">
            Pampa's petroleum industry facilities require rugged roofing systems capable of handling oil field and processing environments:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Hydrocarbon-Resistant Systems:</strong> Roofing materials specifically designed for petroleum exposure</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Large-Span Coverage:</strong> Metal and membrane systems for equipment storage and processing buildings</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Fire-Resistant Materials:</strong> Class A fire-rated roofing for enhanced safety in petroleum environments</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Explosion-Resistant Design:</strong> Engineered systems that can handle pressure differentials safely</div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 text-brand-brown">Residential & Community Roofing</h3>
          <p className="text-lg mb-4">
            For Pampa's families and community buildings, we provide roofing solutions that handle both weather extremes and the unique challenges of living in an industrial town:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Impact-Resistant Shingles:</strong> Class 4 rated materials for maximum hail protection</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Pollution-Resistant Coatings:</strong> Systems designed to resist industrial pollutants and maintain appearance</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Energy-Efficient Solutions:</strong> Cool roofing to reduce energy costs and improve comfort</div>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Pampa Roofing</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Do you have experience working with Celanese Corporation and other chemical plants in Pampa?</h3>
              <p className="text-gray-700">
                Yes, we specialize in chemical facility roofing and have extensive experience with petrochemical plants throughout the Texas Panhandle. We understand the unique requirements including chemical resistance, environmental compliance, and safety protocols. Our crews are trained in industrial safety procedures and carry the high liability insurance required for work in chemical manufacturing environments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What roofing systems work best for oil and gas facilities in Gray County?</h3>
              <p className="text-gray-700">
                For petroleum facilities, we typically recommend metal roofing systems or specialized TPO membranes that resist hydrocarbon exposure. These materials are designed to handle the unique challenges of oil field environments including chemical exposure, temperature extremes, and potential fire hazards. We also ensure all systems meet petroleum industry safety standards and local fire codes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How does living near chemical plants affect residential roofing choices in Pampa?</h3>
              <p className="text-gray-700">
                Homes near industrial facilities benefit from roofing materials that resist industrial pollutants and maintain their appearance longer. We recommend impact-resistant shingles with enhanced UV and chemical resistance, plus regular maintenance to ensure optimal performance. These systems protect your investment while providing superior weather protection compared to standard materials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Can you handle emergency repairs during industrial incidents or severe weather?</h3>
              <p className="text-gray-700">
                Absolutely. We maintain prompt response capability for both residential and industrial clients throughout Gray County. During severe weather events or industrial incidents, we can provide rapid tarping and temporary repairs to prevent water damage and secure facilities. Our response teams are equipped to work safely in industrial environments and coordinate with facility safety personnel.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What's involved in roof replacement for Pampa's historic downtown buildings?</h3>
              <p className="text-gray-700">
                Pampa's historic downtown includes buildings dating to the oil boom era that require careful restoration approaches. We work with local preservation guidelines and can install modern roofing systems designed to maintain historical appearance while providing superior protection. This often involves custom fabrication and specialty materials to match original designs while meeting current building codes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How quickly can you complete roofing projects for businesses that can't afford downtime?</h3>
              <p className="text-gray-700">
                We understand that industrial operations can't afford extended shutdowns. We work with facility managers to schedule installations during planned maintenance windows, work in phases to keep operations running, or use rapid-installation systems when appropriate. Most commercial projects in Pampa are completed efficiently with minimal disruption to business operations.
              </p>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof in Pampa?</h2>
            <p className="cta-text mb-6">
              Serving Pampa, Gray County, and the entire Texas Panhandle. Contact us today for your free inspection.
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
