import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/dumas-texas-roofing/' },
  title: 'Roofing in Dumas, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Dumas, Texas Panhandle. Residential, commercial, and hail damage repair. Serving Moore County. Free inspections available.',
};

export default function DumasRoofingPage() {
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
                      "name": "Dumas",
                      "url": "/dumas-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-dumas-32-1280w.webp)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Dumas&apos;s Professional Roofing Contractor</h1>
            <p className="hero-subtitle">Expert Roofing Services in Dumas, Texas</p>
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
            <h2 className="content-block-title">Trusted Roofing Services in Dumas, Texas</h2>
            <p className="text-lg mb-4">
              As Dumas's premier <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">professional roofing contractor</a>, 5 Star Commercial Roofing brings over a decade of experience serving Moore County and the entire Texas Panhandle. Whether you need agricultural building roofing for your feedlot operation, residential roofing for your home, or commercial roofing for your business, our expert team delivers reliable, high-quality roofing solutions.
            </p>
            <p className="text-lg mb-4">
              Dumas's position as an agricultural powerhouse—with over 180,000 cattle in feedlots and ranches throughout Moore County—creates unique roofing demands. Combined with severe hailstorms, high winds, and extreme temperature swings, properties require roofing systems built to withstand the harshest conditions. We specialize in <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail-resistant roofing materials</a> and large agricultural building systems proven to protect Moore County properties year after year.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="content-block mb-12">
            <h2 className="text-2xl font-bold mb-6">About Dumas: Agricultural Capital of Moore County</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">City Profile</h3>
                <ul className="space-y-2">
                  <li><strong>Population:</strong> 14,501 (2020 census)</li>
                  <li><strong>County:</strong> Moore County (County Seat)</li>
                  <li><strong>Distance from Amarillo:</strong> 50 miles north</li>
                  <li><strong>Founded:</strong> January 1891 by Louis Dumas</li>
                  <li><strong>Named After:</strong> Louis Dumas, Moore County Townsite Company founder</li>
                  <li><strong>Economic Base:</strong> Agriculture, cattle feeding, grain production</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Agricultural Powerhouse</h3>
                <p className="text-gray-600 mb-4">
                  Dumas is one of the nation's leading producers of agricultural products. Moore County ranks 7th in Texas for beef production, with approximately 180,000 cattle in ranches and feedlots throughout the county.
                </p>
                <p className="text-gray-600">
                  The area's soil composition and mild climate make it a prime farming location for wheat, corn, cotton, milo, alfalfa, soybeans, and sunflowers, creating a robust agricultural economy requiring specialized roofing for agricultural operations.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Major Employers & Industries</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Texas Beef Producers Feedyard</h4>
                <p className="text-sm text-gray-600">Major cattle feeding operation requiring large-scale agricultural building roofing and feed storage facilities</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Agricultural Operations</h4>
                <p className="text-sm text-gray-600">Wheat, corn, and cotton farming operations requiring grain storage, equipment buildings, and processing facility roofing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Cattle Ranches & Feedlots</h4>
                <p className="text-sm text-gray-600">180,000+ cattle operations requiring barn roofing, feed storage, and livestock facility metal buildings</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Moore County Government</h4>
                <p className="text-sm text-gray-600">County courthouse, offices, and governmental facilities requiring durable commercial roofing systems</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Dairy Operations</h4>
                <p className="text-sm text-gray-600">Substantial dairy cattle operations requiring specialized ventilated roofing for milking parlors and feed storage</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-brand-brown mb-2">Agricultural Services</h4>
                <p className="text-sm text-gray-600">Grain elevators, equipment dealers, and ag support businesses requiring commercial and industrial roofing</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Neighborhoods & Areas We Serve</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Agricultural District</h4>
                <p className="text-gray-600 mb-3">
                  The expansive agricultural areas surrounding Dumas, featuring massive feedlots, grain storage facilities, and equipment buildings. These operations require specialized large-span roofing systems designed for agricultural use, including metal buildings, feed storage roofs, and livestock facilities.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Downtown Dumas</h4>
                <p className="text-gray-600 mb-3">
                  The historic city center and Moore County courthouse area, featuring commercial buildings serving the agricultural community and government facilities that require durable commercial roofing systems to protect public services and records.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Residential Communities</h4>
                <p className="text-gray-600 mb-3">
                  Family neighborhoods throughout Dumas where ranchers, farmers, feedlot operators, and agricultural workers live. These homes require impact-resistant roofing systems that can protect families and property from severe Texas Panhandle weather while maintaining property values.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Rural Moore County</h4>
                <p className="text-gray-600 mb-3">
                  Vast agricultural properties throughout Moore County, including wheat farms, cattle ranches, and feedlot operations that require durable roofing for barns, equipment storage, grain silos, and processing facilities designed for extreme weather exposure.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="content-block mb-12">
          <h2 className="text-2xl font-bold mb-6">Specialized Roofing Solutions for Dumas's Agricultural Economy</h2>
          
          <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Building & Feedlot Roofing</h3>
          <p className="text-lg mb-4">
            With 180,000+ cattle in Moore County's ranches and feedlots, Dumas requires specialized roofing systems for large agricultural operations:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Large-Span Metal Buildings:</strong> Steel roofing systems for cattle barns, feed storage, and equipment buildings</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Ventilated Livestock Facilities:</strong> Specialized roofing with proper ventilation for dairy barns and cattle operations</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Feed Storage Buildings:</strong> Moisture-resistant roofing for grain storage and feed mill facilities</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Weather-Resistant Design:</strong> Systems engineered for high winds and hail common in open agricultural areas</div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 text-brand-brown">Grain & Crop Storage Facility Roofing</h3>
          <p className="text-lg mb-4">
            Moore County's position as a leading producer of wheat, corn, and cotton creates demand for specialized storage facility roofing:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Grain Elevator Roofing:</strong> Specialized systems for grain storage and processing facilities</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Moisture Control:</strong> Advanced vapor barriers preventing condensation damage to stored crops</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Large-Scale Coverage:</strong> Metal roofing systems for cotton warehouses and equipment storage</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Fire-Resistant Materials:</strong> Safety-rated roofing for facilities storing flammable agricultural products</div>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 text-brand-brown">Residential & Commercial Roofing</h3>
          <p className="text-lg mb-4">
            For Dumas families and businesses serving the agricultural community, we provide roofing solutions designed for Panhandle conditions:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Hail-Resistant Shingles:</strong> Class 4 impact-resistant materials for maximum protection</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Wind-Rated Installation:</strong> Systems designed for sustained high winds in open terrain</div>
            </li>
            <li className="flex items-start">
              <span className="text-brand-gold mr-2">▸</span>
              <div><strong>Energy-Efficient Systems:</strong> Cool roofing to reduce energy costs during hot Texas summers</div>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Dumas Roofing</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Do you specialize in roofing for feedlots and cattle operations in Moore County?</h3>
              <p className="text-gray-700">
                Absolutely. We have extensive experience with agricultural roofing throughout Moore County's cattle operations. We understand the unique requirements for feedlot facilities, including proper ventilation, drainage, and materials that can handle the corrosive environment of cattle operations. Our metal building systems are specifically designed for the large spans required in agricultural buildings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What type of roofing works best for grain storage facilities in Dumas?</h3>
              <p className="text-gray-700">
                For grain storage buildings, we recommend metal roofing systems with advanced moisture barriers to prevent condensation that can damage stored crops. We use materials specifically designed for agricultural applications, including specialized ventilation systems that maintain proper airflow while preventing moisture intrusion. Our systems are also designed to handle the heavy snow loads that can occur on large agricultural buildings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How do you handle the large-scale roofing projects common in Moore County agriculture?</h3>
              <p className="text-gray-700">
                We specialize in large agricultural projects and have the equipment and expertise to handle massive barn roofs, grain storage facilities, and feedlot buildings. Our crews are experienced with pre-engineered metal building systems and can coordinate with agricultural operations to minimize disruption to farming and livestock activities during installation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Can you work around harvest season and cattle operations schedules?</h3>
              <p className="text-gray-700">
                Yes, we understand that agricultural operations can't always be shut down for roofing work. We work closely with farmers and ranchers to schedule projects during low-activity periods, or we can work in phases to keep operations running. We're experienced in working around cattle feeding schedules, grain harvest timing, and other agricultural cycles critical to Dumas area operations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">What makes Dumas residential roofing different from other areas?</h3>
              <p className="text-gray-700">
                Homes in Dumas face unique challenges from both agricultural dust and severe weather. We recommend impact-resistant materials that also resist the abrasive effects of agricultural dust and maintain their appearance longer. The open terrain around Dumas also means homes are more exposed to high winds, so we use enhanced installation techniques with additional wind-rated fasteners and edge protection.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">How quickly can you respond to storm damage for agricultural buildings?</h3>
              <p className="text-gray-700">
                We provide prompt response for agricultural facilities throughout Moore County. Storm damage to barns or feed storage can be critical for livestock welfare and crop protection. We carry tarping materials sized for large agricultural buildings and can provide temporary repairs quickly to protect livestock, equipment, and stored feed or grain from further weather damage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Do you provide maintenance services for agricultural roofing systems?</h3>
              <p className="text-gray-700">
                Yes, we offer preventive maintenance programs specifically designed for agricultural operations. Regular maintenance is critical for large metal buildings exposed to agricultural conditions including dust, moisture, and chemicals. Our maintenance programs help prevent small issues from becoming major problems that could disrupt farming or ranching operations.
              </p>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Complete Roofing Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🌨️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Dumas is no stranger to severe hailstorms. We specialize in identifying and repairing hail damage, working directly with your insurance company to ensure proper coverage and quality repairs.</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>✓ Free storm damage inspections</li>
                  <li>✓ Insurance claim assistance</li>
                  <li>✓ Impact-resistant materials</li>
                  <li>✓ Tarping services</li>
                </ul>
                <a href="/hail-damage-roof-repair-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Learn More →</a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Residential Roofing</h3>
                <p className="text-gray-700 mb-4">Your home deserves the best protection. We offer complete residential roofing services including new installations, replacements, and repairs with materials built for Dumas weather.</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>✓ Architectural shingles</li>
                  <li>✓ Metal roofing systems</li>
                  <li>✓ Lifetime warranties available</li>
                  <li>✓ Energy-efficient options</li>
                </ul>
                <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Learn More →</a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Commercial Roofing</h3>
                <p className="text-gray-700 mb-4">Protect your Dumas business with professional commercial roofing. We specialize in flat roof systems, metal roofing, and TPO/EPDM membranes designed for commercial applications.</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>✓ TPO and EPDM systems</li>
                  <li>✓ Metal commercial roofing</li>
                  <li>✓ Minimal business disruption</li>
                  <li>✓ Preventive maintenance plans</li>
                </ul>
                <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Learn More →</a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Dumas Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Free Inspections</h3>
                <p className="text-gray-700">Comprehensive roof evaluations at no cost. We'll identify any issues and provide honest recommendations.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Materials</h3>
                <p className="text-gray-700">We use only premium roofing materials from trusted manufacturers, built to withstand Panhandle weather.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Experts</h3>
                <p className="text-gray-700">Full assistance with storm damage insurance claims. We handle the paperwork and communicate with adjusters.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fast Response</h3>
                <p className="text-gray-700"> for storm damage. We respond quickly to protect your property from further damage.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Dumas Weather & Your Roof</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">⛈️ Severe Hailstorms</h3>
                <p className="text-gray-700">Dumas sits in "Hail Alley" and experiences frequent severe hailstorms, particularly during spring and summer months. Golf ball to baseball-sized hail can cause significant roof damage requiring professional assessment and repair.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">💨 High Winds</h3>
                <p className="text-gray-700">The open Panhandle terrain means Dumas faces sustained high winds and powerful gusts that can lift shingles, damage flashing, and compromise roof integrity. Impact-resistant and wind-rated materials are essential.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">🌡️ Temperature Extremes</h3>
                <p className="text-gray-700">From summer heat exceeding 100°F to winter cold below zero, Dumas roofs endure extreme temperature swings. These cycles cause expansion and contraction that can lead to premature aging and material failure.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">☀️ Intense UV Exposure</h3>
                <p className="text-gray-700">High altitude and clear skies mean intense UV radiation that degrades roofing materials over time. UV-resistant materials and proper ventilation help extend roof life in Dumas conditions.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Serving the Entire Texas Panhandle</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                While we proudly serve Dumas and Moore County, 5 Star Commercial Roofing provides expert roofing services throughout the Texas Panhandle and West Texas. Our service area includes <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Odessa</a>, Lubbock, and surrounding communities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our extensive regional experience means we understand the unique challenges roofs face across different parts of West Texas, from the agricultural areas around Dumas to the oil patch of the Permian Basin.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Our Roofing Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">1</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Free Inspection</h3>
                <p className="text-gray-700">Thorough evaluation of your roof's condition with no obligation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">2</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Detailed Proposal</h3>
                <p className="text-gray-700">Transparent pricing and material options tailored to your needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">3</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Expert Installation</h3>
                <p className="text-gray-700">Professional crews with quality workmanship and attention to detail.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">4</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Guaranteed Results</h3>
                <p className="text-gray-700">Comprehensive warranties and ongoing support for your investment.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protecting Dumas Properties Since 2010</h2>
            <p className="cta-text">Free inspections and expert roofing throughout Moore County. Call today for immediate service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Request Free Inspection</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["RoofingContractor", "LocalBusiness"],
        "@id": "https://5starroofingpros.com/dumas-texas-roofing/#localBusiness",
        "name": "5 Star Commercial Roofing - Dumas",
        "alternateName": "5 Star Roofing Dumas TX",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
        "description": "Professional roofing contractor serving Dumas, Texas and Moore County with agricultural, residential, commercial roofing and specialized feedlot and grain storage facility roofing solutions.",
        "url": "https://5starroofingpros.com/dumas-texas-roofing/",
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
          "latitude": "35.8656",
          "longitude": "-101.9738"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Dumas",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Moore County"
            }
          },
          {
            "@type": "AdministrativeArea",
            "name": "Moore County"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "35.8656",
            "longitude": "-101.9738"
          },
          "geoRadius": "50"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Dumas Agricultural & Commercial Roofing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Agricultural Building Roofing Dumas",
                "description": "Specialized roofing for feedlots, cattle barns, grain storage facilities, and agricultural operations throughout Moore County"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Feedlot Roofing Moore County",
                "description": "Large-span metal building roofing for cattle feeding operations and livestock facilities"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Grain Storage Facility Roofing",
                "description": "Moisture-resistant roofing systems for grain elevators, feed mills, and crop storage buildings"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Roofing Dumas TX",
                "description": "Residential roof repair and replacement with impact-resistant materials for Texas Panhandle weather"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Roofing Dumas TX",
                "description": "Commercial roofing services for businesses and Moore County facilities"
              }
            }
          ]
        },
        "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
        "sameAs": [
          "https://www.facebook.com/5StarRoofingPros",
          "https://www.google.com/maps/place/5+Star+Commercial+Roofing"
        ]
      })}}/>
    </div>
  );
}
