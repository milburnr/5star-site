import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/residential-roofing-big-spring/' },
  title: 'Residential Roofing Big Spring TX | 5 Star Roofing',
  description: "Professional residential roofing in Big Spring TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
};

export default function ResidentialRoofingBigSpringPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Residential Roofing", url: "/residential-roofing/" },
        { name: "Big Spring", url: "/residential-roofing-big-spring/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/residential-roofing-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring Residential Roofing",
        "image": "https://5starroofingpros.com/images/ResidentialServices.jpeg",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.1768, "longitude": -101.8590 },
        "url": "https://5starroofingpros.com/residential-roofing-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "84", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "17:00" },
        "description": "Professional residential roofing in Big Spring TX. Expert installation, warranties, and insurance assistance.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Roofing Services",
            "name": "Residential Roofing in Big Spring",
            "description": "Professional residential roofing services in Big Spring, Texas. Expert installation, repair, and maintenance with prompt response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Big Spring",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Residential Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type":"Question","name":"How much does roof replacement cost in Big Spring?","acceptedAnswer":{"@type":"Answer","text":"Residential roof replacement in Big Spring typically costs $8,000-$25,000. Most projects are insurance claims where homeowners pay only their deductible ($1,000-$2,500)."}},{"@type":"Question","name":"What are Class 4 shingles?","acceptedAnswer":{"@type":"Answer","text":"Class 4 shingles pass UL 2218 impact testing—the highest rating. They withstand 2-inch hail and qualify for 10-30% insurance discounts in Texas."}},{"@type":"Question","name":"How long does roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most homes complete in 1-3 days. Single-story homes under 2,000 sq ft: 1-2 days. Two-story or complex roofs: 2-3 days."}}]
      }) }} />

      <section className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Residential Roofing in <span className="text-brand-gold-light">Big Spring</span></h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">Crossroads Community Roofing Excellence</p>
              <p className="text-xl mb-8 text-white leading-relaxed">Professional residential roofing serving Big Spring and Howard County. Expert protection for West Texas families with comprehensive warranties, , and deep community roots since 2014.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">Get Free Inspection</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">Fast</div><div className="text-brand-brown font-semibold text-lg">Response Time</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3"><AnimatedCounter to={10} suffix="+" /></div><div className="text-brand-brown font-semibold text-lg">Years Experience</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-4xl font-bold text-brand-gold mb-3">1-3</div><div className="text-brand-brown font-semibold text-lg">Days to Complete</div></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg"><div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div><div className="text-brand-brown font-semibold text-lg">5-Star Rated</div></div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">Big Spring's Premier Residential Roofing Company</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">Big Spring sits at the crossroads of West Texas, where I-20 meets US-87, making it a vital regional hub for Howard County and surrounding communities. This strategic location also places Big Spring directly in the path of severe weather systems that challenge roofing integrity throughout the year.</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">As Howard County's seat and largest city, Big Spring combines historic charm with modern growth. From the established neighborhoods around Big Spring High School to newer developments near the medical center, our residential roofing services protect diverse housing styles across this proud West Texas community.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Since 2014, we've earned the trust of Big Spring families by understanding local challenges – from spring tornado season to punishing summer heat, from sudden winter storms to the persistent winds that sweep across the South Plains. Every installation meets or exceeds Texas building standards while addressing Big Spring's unique environmental demands.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Understanding Big Spring's Weather Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Spring Severe Weather Season</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Big Spring's location at the intersection of major highways isn't coincidental – it sits at a meteorological crossroads where different air masses collide, creating perfect conditions for severe thunderstorms from March through June.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">The area experiences frequent supercell thunderstorms capable of producing large hail, damaging winds exceeding 80 mph, and occasional tornadoes. Howard County sees multiple severe weather warnings each spring, making impact-resistant roofing essential for Big Spring homes.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Peak hail season: April through June</li>
                  <li>• Common hail sizes: 1-3 inches in diameter</li>
                  <li>• Tornado activity within 50 miles annually</li>
                  <li>• Wind damage reports: 20+ per season</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Extreme Temperature Stress</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Big Spring's continental climate creates exceptional thermal stress on roofing materials. Summer temperatures regularly exceed 100°F for weeks at a time, while winter can bring sudden freezes with temperatures dropping below 20°F.</p>
                <p className="text-gray-600 mb-4 leading-relaxed">The temperature swings are particularly challenging – spring days can start at 40°F and reach 85°F by afternoon, causing repeated expansion and contraction cycles that stress standard roofing materials beyond their design limits.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Daily temperature swings: up to 50°F</li>
                  <li>• Days above 100°F: 15-25 annually</li>
                  <li>• Freeze/thaw cycles: 25-40 per winter</li>
                  <li>• UV exposure at 2,400-foot elevation</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Big Spring Community-Focused Services</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Historic District Preservation</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Big Spring's historic neighborhoods require specialized roofing approaches that respect architectural heritage while providing modern protection. We work closely with historic preservation guidelines and homeowner associations.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Period-appropriate material selection</li>
                  <li>• Architectural guideline compliance</li>
                  <li>• Heritage district coordination</li>
                  <li>• Restoration-quality craftsmanship</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Medical Center Area Homes</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">The expanding medical district has attracted new residential development with modern homes requiring contemporary roofing solutions. We provide energy-efficient systems that reduce costs for growing families.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Energy-efficient installations</li>
                  <li>• New construction partnerships</li>
                  <li>• Builder-grade warranty upgrades</li>
                  <li>• Smart home integration ready</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border border-orange-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Retiree Community Support</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Big Spring's affordable cost of living attracts retirees who need reliable, low-maintenance roofing solutions. Our senior-focused programs include extended warranties and priority emergency response.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Senior citizen discounts</li>
                  <li>• Extended warranty programs</li>
                  <li>• Simplified claims assistance</li>
                  <li>• Priority emergency service</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Local Big Spring Expertise</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Howard County Building Compliance</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Big Spring operates under specific building codes that reflect local weather patterns and construction practices. Our team maintains current certifications and works directly with Howard County building officials to ensure all projects meet local requirements.</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">From permit applications to final inspections, we handle all administrative aspects of your roofing project. Our established relationships with local officials streamline the approval process and prevent costly delays.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Howard County permit handling</li>
                    <li>• Code compliance expertise</li>
                    <li>• Inspection coordination</li>
                    <li>• Documentation management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Regional Weather Patterns</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Our decade of experience in Big Spring has taught us to read local weather signs that affect roofing decisions. We track regional storm patterns, seasonal trends, and micro-climate conditions that impact material performance and installation timing.</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">This local knowledge helps us schedule projects during optimal weather windows and recommend materials best suited for Big Spring's specific environmental stresses.</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Seasonal installation planning</li>
                    <li>• Local weather monitoring</li>
                    <li>• Material climate matching</li>
                    <li>• Storm season preparedness</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Premium Materials for Big Spring Climate</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">GAF Timberline HDZ Shingles</h3>
                  <p className="text-gray-700 mb-3">America's most popular shingle, specifically engineered for challenging climates like Big Spring's. LayerLock technology provides superior wind resistance essential for West Texas conditions.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Wind Resistance:</div>
                      <div>130 MPH warranty</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Warranty:</div>
                      <div>Lifetime limited</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Fire Rating:</div>
                      <div>Class A certified</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Algae Guard:</div>
                      <div>25-year protection</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-brown">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Class 4 Impact Resistance</h3>
                  <p className="text-gray-700 mb-3">Essential protection for Big Spring's hail exposure. These premium shingles meet UL 2218 Class 4 standards and qualify for significant insurance discounts.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Impact Rating:</div>
                      <div>Class 4 (highest)</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Insurance Savings:</div>
                      <div>10-30% annually</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Hail Protection:</div>
                      <div>2-inch steel ball test</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Granule Retention:</div>
                      <div>Superior adhesion</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Metal Roofing Systems</h3>
                  <p className="text-gray-700 mb-3">Standing seam and panel systems ideal for Big Spring's wind exposure and extreme temperature variations. Excellent for both energy efficiency and longevity.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Lifespan:</div>
                      <div>50+ years</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Energy Savings:</div>
                      <div>20-30% cooling costs</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Wind Rating:</div>
                      <div>150+ MPH tested</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Maintenance:</div>
                      <div>Minimal required</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-3 text-brand-brown">Advanced Ventilation</h3>
                  <p className="text-gray-700 mb-3">Critical for Big Spring's extreme summer heat. Proper ventilation systems reduce attic temperatures by 20-30°F, significantly extending roof life and reducing energy costs.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">System Type:</div>
                      <div>Ridge & soffit vents</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Airflow:</div>
                      <div>Continuous circulation</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Temperature Control:</div>
                      <div>20-30°F reduction</div>
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold mb-1">Energy Impact:</div>
                      <div>Lower cooling bills</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Insurance & Financing for Big Spring Homeowners</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Storm Damage Claims Expertise</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Big Spring homeowners frequently file storm damage claims due to severe weather exposure. Our claims specialists have processed hundreds of Howard County insurance claims and understand local adjuster practices.</p>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Complete damage documentation with photos and measurements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Direct adjuster communication and negotiation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Supplement requests for additional coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Depreciation recovery assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Code upgrade coverage maximization</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Flexible Payment Solutions</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Not every roofing need in Big Spring results from storm damage. Our financing partnerships provide affordable options for maintenance, upgrades, and non-covered improvements.</p>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>0% interest financing available (qualified buyers)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Low monthly payments to fit any budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Quick approval process (often same-day)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>No prepayment penalties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1">•</span>
                      <span>Senior citizen and military discounts</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Big Spring Insurance Claim Statistics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">78%</div>
                    <div className="text-sm opacity-90">of Big Spring projects are insurance claims</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">$1,500</div>
                    <div className="text-sm opacity-90">average homeowner out-of-pocket cost</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm opacity-90">successful claim approval rate</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does roof replacement cost in Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Residential roof replacement in Big Spring typically costs $12,000-$28,000 for average homes. However, most Big Spring projects are insurance claims due to storm damage, meaning homeowners pay only their deductible ($1,000-$2,500). The insurance company covers the remaining replacement cost for covered damage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What are Class 4 shingles and why are they recommended for Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Class 4 shingles meet UL 2218 impact testing standards—the highest hail resistance rating available. They withstand 2-inch steel balls dropped from 20 feet without cracking. Big Spring's location in West Texas hail country makes Class 4 shingles essential protection. Texas insurance companies offer premium discounts of 10-30% for Class 4 installations, typically saving Big Spring homeowners $300-600 annually.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does roof replacement take in Big Spring?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most Big Spring homes complete roof replacement in 1-3 days, weather permitting. Single-story homes under 2,000 sq ft typically finish in 1-2 days, while larger two-story or complex roofs require 2-3 days. Spring weather can cause delays, so we monitor forecasts closely and adjust schedules to avoid storm systems that frequently affect Howard County.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle Howard County building permits and inspections?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we handle all Howard County permitting requirements for Big Spring roofing projects. Permits typically cost $75-200 depending on project scope. We submit all required documentation, coordinate with building officials, and schedule required inspections. Our established relationships with Howard County building department ensure smooth approval processes and prevent delays.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes Big Spring weather particularly challenging for roofing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Big Spring sits at a meteorological crossroads where different air masses collide, creating severe thunderstorms with large hail and damaging winds. The area experiences extreme temperature swings (up to 50°F daily variations), persistent winds, and over 100 days annually above 95°F. This combination of hail exposure, thermal stress, and UV radiation at 2,400-foot elevation requires premium materials and expert installation for reliable long-term performance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you offer emergency services for Big Spring storm damage?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes, we provide prompt response for Big Spring storm damage. Our emergency crews typically arrive within 90 minutes for urgent situations. We immediately secure damaged areas with tarps and temporary repairs while documenting everything for insurance claims. Emergency services include water damage mitigation, structural stabilization, and priority scheduling for permanent repairs.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-2">Proudly serving Big Spring from our Amarillo headquarters</p>
              <p className="text-gray-600">2909 S Western St, Amarillo, TX 79109</p>
              <p className="text-gray-600">Just 2 hours from Big Spring via I-20 West to US-87 North</p>
            </div>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspections for Big Spring homeowners. Expert residential roofing with comprehensive warranties, insurance assistance, and deep local knowledge of Howard County weather challenges.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Schedule Free Inspection</a>
          </div>
        </section>
      </div>
    </>
  );
}