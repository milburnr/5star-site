import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Commercial Roofing Lubbock TX | 5 Star Roofing',
  description: 'Expert commercial roofing in Lubbock, TX. TPO, EPDM, metal roofing for Texas Tech, healthcare facilities, agriculture. 24/7 emergency service. Call (806) 622-6041',
};

export default function CommercialRoofingLubbockPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Lubbock", url: "/commercial-roofing-lubbock/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/commercial-roofing-lubbock/#localbusiness",
            "name": "5 Star Commercial Roofing - Lubbock",
            "image": "https://5starroofingpros.com/images/CommercialRoofing.jpeg",
            "telephone": "(806) 622-6041",
            "email": "info@5starroofingpros.com",
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
              "latitude": 33.5779,
              "longitude": -101.8552
            },
            "url": "https://5starroofingpros.com/commercial-roofing-lubbock/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
              "name": "Lubbock",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "description": "Expert commercial roofing for Lubbock businesses including Texas Tech University, University Medical Center, and agriculture facilities. Serving Lubbock County with TPO, EPDM, and metal roofing systems.",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Roofing Services",
            "name": "Commercial Roofing in Lubbock",
            "description": "Professional commercial roofing services in Lubbock, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lubbock",
              "containedInPlace": { "@type": "State", "name": "Texas" }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Roofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Roof Inspection" } }
              ]
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does commercial roof replacement cost in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commercial roofing costs in Lubbock vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. Texas Tech University buildings and healthcare facilities often require specialized systems. We provide free detailed estimates with transparent pricing and financing options for qualified businesses."
                }
              },
              {
                "@type": "Question",
                "name": "Why does Lubbock's hail activity require impact-resistant commercial roofing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lubbock County has recorded 273 hail reports within 12 months from trained weather spotters - making it one of Texas's most hail-prone regions. Commercial buildings like Texas Tech facilities, University Medical Center, and agriculture warehouses require UL 2218 Class 4 impact-resistant roofing to withstand 2-inch hailstones. Many insurers offer premium discounts for impact-resistant systems."
                }
              },
              {
                "@type": "Question",
                "name": "What permits are required for commercial roofing in Lubbock?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All commercial roofing projects within Lubbock city limits require permits from the Building Safety Department (806) 775-2687. Projects must meet International Residential Code standards including wind resistance ratings, proper drainage, and energy efficiency requirements. We handle all permit applications and ensure your project meets Lubbock's building code requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Can you work around Texas Tech University and healthcare facility schedules?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We specialize in educational and healthcare facility roofing, scheduling work during breaks, planned shutdowns, or after-hours to minimize disruption. Texas Tech University buildings, University Medical Center (412 beds), and Covenant Health facilities require careful coordination. We work closely with facility managers to meet operational requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What commercial roofing is best for Lubbock's agriculture facilities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Agriculture warehouses, grain elevators, and processing facilities in Lubbock benefit from metal roofing systems with superior wind resistance and durability. Standing seam metal roofs withstand 140+ mph winds and offer 50+ year lifespans. For budget-conscious agricultural operations, EPDM rubber roofing provides reliable 15-30 year performance at competitive pricing."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide emergency roofing for Lubbock's severe weather events?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide 24/7 emergency commercial roofing throughout Lubbock County. With 273 hail reports in 12 months and frequent severe weather, rapid response is critical for businesses. We offer emergency tarping, temporary repairs, and leak mitigation to protect inventory and equipment while permanent repairs are scheduled."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/CommercialRoofing.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Commercial Roofing in <span className="text-brand-gold-light">Lubbock</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Serving Texas Tech, Healthcare & Agriculture Facilities
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert commercial roofing for Lubbock's diverse business community. Impact-resistant TPO, EPDM, and metal roofing systems engineered for Lubbock County's 273 annual hail reports. Specialized service for Texas Tech University, University Medical Center, and agriculture facilities throughout the South Plains.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={273} suffix="" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Hail Reports (12 Months)</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">55K+</div>
                <div className="text-brand-brown font-semibold text-lg">Tech Students Served</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Lubbock's Commercial Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Lubbock County's commercial landscape demands specialized roofing expertise. From Texas Tech University's sprawling 1,839-acre campus to University Medical Center's 412-bed healthcare facility, from Covenant Health's regional medical complex to agriculture warehouses processing cotton and beef throughout the South Plains—every commercial roof faces unique challenges in this dynamic regional hub.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With 273 hail reports documented by trained weather spotters in just 12 months, Lubbock ranks among Texas's most severe weather regions. Commercial buildings serving 55,000+ college students, major healthcare systems, and agriculture operations require impact-resistant roofing systems engineered for the South Plains climate. Our specialized commercial roofing protects critical infrastructure while minimizing operational disruption through careful scheduling and 24/7 emergency response.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We coordinate with facility managers at Texas Tech, healthcare administrators at UMC and Covenant Health, and agriculture facility operators to ensure roofing installations meet stringent institutional requirements while maintaining operations. Every project includes comprehensive permitting through the City of Lubbock Building Safety Department and full warranty documentation.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Commercial Roofing Systems for Lubbock
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img src="/images/TPO1.jpg" alt="TPO Commercial Roofing" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Roofing Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Single-ply white membrane roofing with heat-welded seams. Energy Star rated reflective surface reduces cooling costs for Texas Tech buildings and healthcare facilities. Excellent hail resistance proven in Lubbock County's extreme weather conditions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 15-25 year warranties</li>
                  <li>✓ Energy-efficient for large facilities</li>
                  <li>✓ UL 2218 Class 4 hail resistance available</li>
                  <li>✓ Ideal for flat roofs on educational buildings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img src="/images/SteelRoofing.jpg" alt="Metal Commercial Roofing" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Metal Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Standing seam and R-panel metal roofing for agriculture and industrial applications. Superior wind resistance for grain elevators, cotton warehouses, and processing facilities. Fire resistance critical for agricultural operations storing combustible materials.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 50+ year lifespan for agriculture facilities</li>
                  <li>✓ Class A fire rating for grain storage</li>
                  <li>✓ Wind resistance 140+ mph</li>
                  <li>✓ Low maintenance for remote locations</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img src="/images/EPDM2.jpg" alt="EPDM Rubber Roofing" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cost-effective black rubber membrane for commercial flat roofs. Excellent UV resistance in Lubbock's high-elevation sun exposure. Budget-friendly option for agriculture warehouses and smaller commercial buildings throughout Lubbock County.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 15-30 year lifespan</li>
                  <li>✓ Excellent UV resistance</li>
                  <li>✓ Budget-friendly for agriculture facilities</li>
                  <li>✓ Rapid installation minimizes downtime</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Lubbock Commercial Districts & Facilities
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide specialized commercial roofing throughout Lubbock's diverse business and institutional districts, each with unique roofing requirements and operational constraints:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Texas Tech University Campus</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>1,839-acre campus</strong> with 55,000+ students requiring specialized educational facility roofing. Multiple academic buildings, residence halls, research facilities, and the Jones AT&T Stadium complex. Roofing projects must coordinate with academic calendars and student housing operations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Texas Tech Health Sciences Center</strong> - Medical school facilities requiring hospital-grade roofing systems with emergency backup considerations and infection control protocols during construction.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Healthcare Campus Complex</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>University Medical Center</strong> - 412-bed teaching hospital requiring critical infrastructure roofing with 24/7 operational demands. Specialized systems for patient safety and uninterrupted healthcare delivery.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Covenant Health System</strong> - Region's largest healthcare institution with multiple specialty centers including Covenant Children's Hospital, cardiac facilities, and cancer treatment centers requiring precision roofing coordination.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Agriculture & Industrial Facilities</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Cotton Processing Centers</strong> - Lubbock County produces 25% of Texas cotton, requiring fire-resistant metal roofing for ginning facilities, warehouses, and processing equipment buildings.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Grain Elevators & Feed Operations</strong> - Tall structures requiring specialized wind-resistant roofing systems. Cattle feeding operations and beef processing facilities demanding durable, low-maintenance commercial roofing solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Downtown & Business Districts</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Lubbock Business Park</strong> - 586-acre commercial development requiring modern TPO and metal roofing systems for office buildings, warehouses, and light industrial facilities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Downtown Lubbock</strong> - Historic and modern commercial buildings including government facilities, professional offices, and retail centers requiring specialized urban commercial roofing expertise.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Understanding Lubbock Building Codes & Permits
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All commercial roofing projects within Lubbock city limits require permits and must comply with local building codes. We handle all permitting and ensure your project meets or exceeds city standards for educational, healthcare, and agriculture facilities.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Building Safety Department</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Phone:</strong> (806) 775-2687</li>
                    <li><strong>Location:</strong> 1625 13th Street</li>
                    <li><strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</li>
                    <li><strong>Online Portal:</strong> ci.lubbock.tx.us</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Key Code Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>International Residential Code (IRC)</strong></li>
                    <li>✓ Wind resistance: 110-125 mph design standards</li>
                    <li>✓ Energy efficiency standards for large buildings</li>
                    <li>✓ Fire resistance requirements for agriculture facilities</li>
                    <li>✓ Proper drainage and overflow systems</li>
                    <li>✓ UL 2218 Class 4 hail resistance recommended</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                Special considerations apply to Texas Tech University buildings, healthcare facilities, and agriculture operations. We coordinate with institutional facility managers and ensure all projects meet specialized requirements for educational and medical facilities.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Lubbock's Climate Demands Superior Commercial Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Lubbock's location in the South Plains creates challenging roofing conditions year-round. At 3,202 feet elevation, commercial buildings face intense UV radiation, extreme temperature swings, and severe weather patterns that demand specialized roofing systems:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Severe Hail Activity</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>273 hail reports in 12 months</strong> from trained weather spotters make Lubbock County one of Texas's most hail-prone regions. Commercial buildings require UL 2218 Class 4 impact-resistant roofing to withstand 2-inch hailstones.
                </p>
                <p className="text-gray-600 text-sm">
                  Texas Tech facilities, healthcare buildings, and agriculture warehouses have suffered significant hail damage. Many insurers now require or incentivize impact-resistant commercial roofing systems.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Extreme Temperature Swings</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Temperature range from 15°F to 105°F</strong> creates severe thermal stress on roofing materials. Commercial buildings with large flat roof areas experience significant expansion and contraction cycles throughout the year.
                </p>
                <p className="text-gray-600 text-sm">
                  Educational buildings like Texas Tech dormitories and healthcare facilities require roofing systems engineered to handle this 90-degree temperature variance without membrane failure.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">High Elevation UV Exposure</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>3,202 feet elevation</strong> increases UV radiation intensity, accelerating roofing material degradation. Commercial buildings with large roof areas face significant UV damage without proper membrane protection.
                </p>
                <p className="text-gray-600 text-sm">
                  Agriculture facilities and warehouse complexes require UV-resistant roofing systems with reflective coatings to extend lifespan and reduce cooling costs.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
            <div className="flex gap-6 items-center">
              <div className="text-6xl">🚨</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-800 mb-3">24/7 Emergency Commercial Roofing</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Storm damage threatening your Lubbock business operations? We provide 24/7 emergency response for Texas Tech facilities, healthcare institutions, and agriculture operations. Immediate temporary repairs, tarping, and leak mitigation protect critical operations and inventory.
                </p>
                <a href="tel:8066226041" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300">
                  Emergency: (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does commercial roof replacement cost in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs in Lubbock vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. Texas Tech University buildings and healthcare facilities often require specialized systems. We provide free detailed estimates with transparent pricing and financing options for qualified businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why does Lubbock's hail activity require impact-resistant commercial roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock County has recorded 273 hail reports within 12 months from trained weather spotters - making it one of Texas's most hail-prone regions. Commercial buildings like Texas Tech facilities, University Medical Center, and agriculture warehouses require UL 2218 Class 4 impact-resistant roofing to withstand 2-inch hailstones. Many insurers offer premium discounts for impact-resistant systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What permits are required for commercial roofing in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All commercial roofing projects within Lubbock city limits require permits from the Building Safety Department (806) 775-2687. Projects must meet International Residential Code standards including wind resistance ratings, proper drainage, and energy efficiency requirements. We handle all permit applications and ensure your project meets Lubbock's building code requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work around Texas Tech University and healthcare facility schedules?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We specialize in educational and healthcare facility roofing, scheduling work during breaks, planned shutdowns, or after-hours to minimize disruption. Texas Tech University buildings, University Medical Center (412 beds), and Covenant Health facilities require careful coordination. We work closely with facility managers to meet operational requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What commercial roofing is best for Lubbock's agriculture facilities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Agriculture warehouses, grain elevators, and processing facilities in Lubbock benefit from metal roofing systems with superior wind resistance and durability. Standing seam metal roofs withstand 140+ mph winds and offer 50+ year lifespans. For budget-conscious agricultural operations, EPDM rubber roofing provides reliable 15-30 year performance at competitive pricing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide emergency roofing for Lubbock's severe weather events?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we provide 24/7 emergency commercial roofing throughout Lubbock County. With 273 hail reports in 12 months and frequent severe weather, rapid response is critical for businesses. We offer emergency tarping, temporary repairs, and leak mitigation to protect inventory and equipment while permanent repairs are scheduled.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Visit Our Amarillo Location</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg"></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Lubbock Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Lubbock property owners. Expert commercial roofing with comprehensive warranties.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
