import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/canyon-texas-roofing/' },
  title: 'Roofing in Canyon, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Canyon, Texas Panhandle. Commercial, residential, and emergency roofing. Serving Randall County. Free inspections available.',
};

export default function CanyonRoofingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": "https://5starroofingpros.com/canyon-texas-roofing/#localBusiness",
    "name": "5 Star Commercial Roofing - Canyon",
    "alternateName": "5 Star Roofing Canyon TX",
    "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
    "description": "Professional roofing contractor serving Canyon, Texas and Randall County with commercial, residential, emergency roofing, and specialized educational facility and museum roofing solutions.",
    "url": "https://5starroofingpros.com/canyon-texas-roofing/",
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
      "latitude": "34.9799",
      "longitude": "-101.9191"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Canyon",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Randall County"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Randall County"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "34.9799",
        "longitude": "-101.9191"
      },
      "geoRadius": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Canyon Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Roofing Canyon TX",
            "description": "Commercial roofing services for Canyon businesses, West Texas A&M University buildings, and Randall County facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Facility Roofing",
            "description": "Specialized roofing for West Texas A&M University campus buildings and educational facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Museum Roofing Canyon",
            "description": "Specialized climate-controlled roofing for Panhandle-Plains Historical Museum and cultural facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Roofing Canyon TX",
            "description": "Residential roof repair and replacement for Canyon homes with impact-resistant materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agricultural Roofing Randall County",
            "description": "Metal building and barn roofing for agricultural operations throughout Randall County"
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
                      "name": "Canyon",
                      "url": "/canyon-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-morton-35-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Canyon's Professional Roofing Contractor</h1>
            <p className="hero-subtitle">Expert Roofing Services in Canyon & Randall County, Texas</p>
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
            <h2 className="content-block-title">Trusted Roofing Services in Canyon, Texas</h2>
            <p className="text-lg mb-4">
              As Canyon's premier <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">professional roofing contractor</a>, 5 Star Commercial Roofing brings over a decade of experience serving Randall County and the entire Texas Panhandle. Whether you need commercial roofing, residential roofing for your home, or emergency storm damage repairs, our expert team delivers reliable, high-quality roofing solutions.
            </p>
            <p className="text-lg mb-4">
              Canyon's climate—with severe hailstorms, high winds, and extreme temperature swings—demands roofing systems built to withstand the harshest conditions. We specialize in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail-resistant roofing materials</a> and installation techniques proven to protect Randall County properties year after year.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">About Canyon: Education Capital of the Texas Panhandle</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">City Profile</h3>
                <ul className="space-y-2">
                  <li><strong>Population:</strong> 15,398 (2023 census)</li>
                  <li><strong>County:</strong> Randall County (County Seat)</li>
                  <li><strong>Distance from Amarillo:</strong> 16 miles south</li>
                  <li><strong>Founded:</strong> 1889</li>
                  <li><strong>Median Age:</strong> 28.2 years</li>
                  <li><strong>Median Household Income:</strong> $68,233</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Economic Foundation</h3>
                <p className="text-gray-600 mb-4">
                  Canyon's economy is built on education, agriculture, and tourism. West Texas A&M University is the largest employer and economic driver, bringing over 10,000 students and 1,500 employees to the city.
                </p>
                <p className="text-gray-600">
                  The city serves as both the county seat of Randall County and the gateway to Palo Duro Canyon State Park, making it a unique blend of educational, governmental, and tourism activities.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Major Employers & Industries</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">West Texas A&M University</h4>
                <p className="text-sm text-gray-600">Largest employer with over 1,500 faculty and staff, serving 10,000+ students with extensive campus facilities requiring specialized roofing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Panhandle-Plains Historical Museum</h4>
                <p className="text-sm text-gray-600">Largest history museum in Texas, requiring climate-controlled roofing systems to protect invaluable historical artifacts</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Randall County Government</h4>
                <p className="text-sm text-gray-600">County courthouse, offices, and governmental facilities needing durable, long-lasting commercial roofing systems</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Agriculture & Ranching</h4>
                <p className="text-sm text-gray-600">Wheat, sorghum, corn, and cattle operations requiring large agricultural building roofing and metal systems</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Tourism & Hospitality</h4>
                <p className="text-sm text-gray-600">Hotels, restaurants, and visitor services for Palo Duro Canyon tourists, requiring commercial roofing solutions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Texas Musical Drama</h4>
                <p className="text-sm text-gray-600">Outdoor amphitheater and support facilities requiring weather-resistant roofing for year-round operations</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Neighborhoods & Areas We Serve</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">University District</h4>
                <p className="text-gray-600 mb-3">
                  The West Texas A&M campus and surrounding academic buildings, dormitories, and student housing. These facilities require specialized commercial roofing designed for educational environments with high occupancy and safety requirements.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Historic Downtown Canyon</h4>
                <p className="text-gray-600 mb-3">
                  The original town square and courthouse area, featuring historic buildings from the early 1900s that often require restoration-compatible roofing solutions that maintain historical authenticity while providing modern protection.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Residential Neighborhoods</h4>
                <p className="text-gray-600 mb-3">
                  Family neighborhoods housing university faculty, county employees, and local professionals. These communities need reliable residential roofing systems that can handle Texas Panhandle weather while maintaining property values.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Rural Randall County</h4>
                <p className="text-gray-600 mb-3">
                  Agricultural properties and ranch lands extending throughout Randall County, where large metal buildings, barns, and equipment storage facilities require durable roofing systems designed for agricultural use.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="section">
          <h2 className="section-title">Comprehensive Roofing Services in Canyon</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                <p className="text-gray-600 mb-4">
                  We install TPO, EPDM, metal roofing, and built-up systems for businesses and facilities throughout Randall County.
                </p>
                <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Commercial Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card-hover p-6">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing</h3>
                <p className="text-gray-600 mb-4">
                  From asphalt shingles to metal roofing, we provide complete residential roofing services for Canyon homeowners. Our Class 4 impact-resistant shingles protect against Texas Panhandle hail.
                </p>
                <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold font-semibold">Residential Services →</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="card-hover p-6 bg-red-50">
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-red-700 mb-3">Storm Damage Repair</h3>
                <p className="text-gray-700 mb-4">
                  When severe weather strikes Canyon, we respond with emergency tarping and rapid roof repairs. Call us immediately for storm damage assessment.
                </p>
                <a href="/storm-damage-roof-repair-in-amarillo/" className="text-red-700 font-semibold">Emergency Service →</a>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="content-block bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Canyon Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Randall County Experts</h3>
                <p className="text-gray-600">We understand Canyon's weather patterns, from spring hailstorms to winter freezes. Our roofing systems are engineered for local climate challenges.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Insurance Claim Assistance</h3>
                <p className="text-gray-600">We work directly with insurance adjusters on <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage claims</a>, ensuring you receive full coverage for storm repairs.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Local & Regional Experience</h3>
                <p className="text-gray-600">Serving Canyon and communities throughout the Texas Panhandle with specialized roofing designed for extreme weather conditions.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">✓ Free Inspections</h3>
                <p className="text-gray-600">Every Canyon property receives a complimentary roof inspection with detailed assessments, photos, and written estimates—no obligation.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-4">Canyon Weather Challenges & Your Roof</h2>
          <p className="text-lg mb-6">
            Located in Randall County, Canyon experiences extreme weather in the Texas Panhandle:
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
              While we're proud to serve Canyon and Randall County, our roofing expertise extends across the entire region:
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
          <h2 className="text-2xl font-bold mb-4">Our Canyon Roofing Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-1">Free Inspection</h3>
                <p className="text-gray-700">We inspect your Canyon property, document damage with photos, and provide a detailed written estimate—completely free.</p>
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
                <p className="text-gray-700">Our experienced crews install your new roof using premium materials. Most residential roofs in Canyon are completed in 1-2 days.</p>
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
          <h2 className="text-2xl font-bold mb-6">Specialized Roofing Solutions for Canyon's Unique Needs</h2>
          
          <h3 className="text-xl font-bold mb-4 text-brand-brown">Educational Institution Roofing</h3>
          <p className="text-lg mb-4">
            West Texas A&M University's extensive campus requires specialized commercial roofing systems that meet educational facility standards and provide long-term durability:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Climate-Controlled Systems:</strong> Advanced roofing for laboratories, libraries, and research facilities</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>High-Occupancy Safety:</strong> Fire-rated and safety-compliant roofing for dormitories and academic buildings</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Energy Efficiency:</strong> Cool roofing systems to reduce operating costs for large campus buildings</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Historic Preservation:</strong> Compatible roofing for older campus buildings maintaining architectural integrity</div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 text-brand-brown">Museum & Cultural Facility Roofing</h3>
          <p className="text-lg mb-4">
            The Panhandle-Plains Historical Museum and other cultural facilities require specialized roofing to protect priceless artifacts and exhibits:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Moisture Protection:</strong> Advanced waterproofing systems to prevent humidity damage to artifacts</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Temperature Stability:</strong> Insulated roofing systems for consistent climate control</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>UV Protection:</strong> Specialized membranes preventing UV damage to roofing and interior exhibits</div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural & Ranch Roofing</h3>
          <p className="text-lg mb-4">
            Randall County's agricultural operations require durable, cost-effective roofing solutions for various farm and ranch buildings:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Metal Building Systems:</strong> Large-span roofing for equipment storage and livestock facilities</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Ventilation Solutions:</strong> Proper airflow systems for grain storage and livestock comfort</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Wind-Resistant Design:</strong> Systems engineered for the high winds common in open agricultural areas</div>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Canyon Roofing</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Do you work on West Texas A&M University campus buildings?</h3>
              <p className="text-gray-700">
                Yes, we have extensive experience with educational facility roofing and work with university procurement departments on campus roofing projects. We understand the unique requirements for dormitories, academic buildings, and research facilities, including safety codes, occupancy requirements, and environmental controls needed to protect sensitive equipment and research materials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What roofing systems work best for Canyon's agriculture buildings?</h3>
              <p className="text-gray-700">
                For Randall County agricultural operations, we typically recommend metal roofing systems for their durability, large-span capability, and cost-effectiveness. Standing seam metal roofs are ideal for barns and equipment storage, while properly ventilated systems work best for livestock facilities. We also install specialized roofing for grain storage that prevents condensation and protects valuable crops.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How do you handle roofing for historic buildings in downtown Canyon?</h3>
              <p className="text-gray-700">
                Canyon's historic downtown includes buildings from the early 1900s that require specialized restoration approaches. We work with local preservation guidelines and use materials that maintain historical authenticity while providing modern protection. This often includes using period-appropriate materials like slate or cedar shake alternatives, or installing modern systems designed to look historically accurate.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Can you handle the large roofing projects common in Canyon's institutional buildings?</h3>
              <p className="text-gray-700">
                Absolutely. We specialize in large commercial and institutional roofing projects, including university buildings, the museum complex, county government facilities, and other major structures in Canyon. Our crews are experienced with project management, coordination with multiple stakeholders, and working around active operations that can't be disrupted during roofing installation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What's the typical timeline for residential roofing in Canyon?</h3>
              <p className="text-gray-700">
                Most residential roof replacements in Canyon are completed in 1-2 days, depending on the size and complexity of the home. University faculty and staff often prefer summer installations when classes aren't in session, so we recommend scheduling early for summer projects. We work efficiently to minimize disruption to families and can coordinate timing around academic schedules when needed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How does proximity to Palo Duro Canyon affect roofing in the area?</h3>
              <p className="text-gray-700">
                The canyon creates unique wind patterns and weather conditions that can affect roofing performance. We use wind-rated materials and installation techniques designed for these conditions. Additionally, the tourism industry brings many commercial properties (hotels, restaurants, visitor centers) that need attractive, durable roofing systems that can handle both heavy use and extreme weather exposure.
              </p>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready for a New Roof in Canyon?</h2>
            <p className="cta-text mb-6">
              Serving Canyon, Randall County, and the entire Texas Panhandle. Contact us today for your free inspection.
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
