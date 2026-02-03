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
  title: 'Commercial Roofing Amarillo TX | 5 Star Roofing',
  description: 'Commercial Roofing in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function CommercialRoofingAmarilloPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Commercial Roofing", url: "/commercial-roofing/" },
        { name: "Amarillo", url: "/commercial-roofing-amarillo/" }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/commercial-roofing-amarillo/#localbusiness",
            "name": "5 Star Commercial Roofing - Amarillo",
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
              "latitude": 35.1768,
              "longitude": -101.8590
            },
            "url": "https://5starroofingpros.com/commercial-roofing-amarillo/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "84",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
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
            "description": "Expert commercial roofing services in Amarillo, TX. Serving Potter County Courthouse, Route 66 Historic District, and businesses throughout the Texas Panhandle.",
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
            "name": "Commercial Roofing in Amarillo",
            "description": "Professional commercial roofing services in Amarillo, Texas. Expert installation, repair, and maintenance with 24/7 emergency response.",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization"
            },
            "areaServed": {
              "@type": "City",
              "name": "Amarillo",
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
                "name": "How much does commercial roof replacement cost in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commercial roofing costs vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide free detailed estimates with transparent pricing and financing options for qualified businesses."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Amarillo one of the most challenging cities for commercial roofing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amarillo recorded 131 severe hail days since 2000 - among the highest in the USA. The city averages 14.3 mph winds annually (highest in Texas, #2 in America) with extreme gusts exceeding 50 mph. Temperature swings from 13°F to 99°F cause significant thermal stress on roofing materials. Commercial buildings in Amarillo require specialized roofing systems engineered for these extreme conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing permits are required in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All commercial roofing projects in Amarillo require permits per Section 105.1 of the 2015 International Residential Code. Contact the City of Amarillo Building Safety Department at (806) 378-3041 or building@amarillo.gov. We handle all permit applications and ensure your project meets Amarillo's code requirements including drip edge installation, proper ventilation, and wind resistance standards for 110-125 mph design wind speeds."
                }
              },
              {
                "@type": "Question",
                "name": "Can you work after hours to minimize business disruption?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We schedule commercial installations during evenings, weekends, or planned closure periods to minimize operational impact. Many Amarillo businesses prefer after-hours work for retail locations or facilities that cannot shut down during business hours. We coordinate carefully to meet your scheduling requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide commercial roofing for historic buildings in Amarillo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in historic commercial roofing for Amarillo's Route 66 Historic District, downtown buildings, and properties with preservation requirements. The Route 66 corridor features Spanish Revival, Art Deco, and Art Moderne architecture requiring specialized roofing expertise. We work with building owners to meet historic preservation standards while providing modern weather protection."
                }
              },
              {
                "@type": "Question",
                "name": "What makes TPO roofing ideal for Amarillo's commercial buildings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO's white reflective membrane is Energy Star rated and dramatically reduces cooling costs during Amarillo's hot summers. The heat-welded seams create watertight bonds that withstand Texas Panhandle winds and hail. TPO offers excellent durability (15-25 year warranties) at a competitive price point, making it the most popular commercial roofing choice in the region."
                }
              },
              {
                "@type": "Question",
                "name": "Should Amarillo commercial buildings use Class 4 impact-resistant roofing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Highly recommended. While not mandated by Amarillo building codes, UL 2218 Class 4 roofing withstands 2-inch hailstones and provides maximum protection in Potter County's extreme hail environment. Many Texas insurers offer up to 25% premium discounts for Class 4 commercial roofing systems, offsetting the initial investment with long-term savings and superior durability."
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
                Commercial Roofing in <span className="text-brand-gold-light">Amarillo</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                24/7 Emergency Service for Texas Panhandle Businesses
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert commercial roofing for Amarillo businesses. TPO, EPDM, and metal roofing systems engineered for the Texas Panhandle's harsh weather. Minimize operational disruption with our after-hours installation. 24/7 emergency response available.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041
                </a>
                <a href="/contact/" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl">
                  Get Free Estimate
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Emergency Service</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={131} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Hail Days Since 2000</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">14.3</div>
                <div className="text-brand-brown font-semibold text-lg">Avg Wind Speed (MPH)</div>
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
              Amarillo's Commercial Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Commercial buildings in the Texas Panhandle face relentless weather—8-12 hailstorms annually, extreme temperature swings, intense UV radiation, and sustained winds. Your roof isn't just overhead protection; it's a critical business asset protecting inventory, equipment, and operations. Downtime from roof leaks costs Amarillo businesses thousands per day in lost productivity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in minimizing disruption to your business. After-hours and weekend installations keep your operations running. Our 24/7 emergency response team handles storm damage and urgent leaks within hours. From small retail buildings along Historic Route 66 to large industrial facilities near Bell Helicopter, from Downtown Amarillo offices to warehouses near the Amarillo Civic Center, we install TPO, EPDM, and metal roofing systems with 15-25 year warranties backed by manufacturers and our workmanship guarantee.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Commercial Roofing Systems for Amarillo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img src="/images/TPO1.jpg" alt="TPO Commercial Roofing" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">TPO Roofing Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Single-ply white membrane roofing with heat-welded seams. Energy Star rated reflective surface reduces cooling costs in Amarillo's hot summers. Excellent hail resistance and proven performance in Texas Panhandle weather.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 15-25 year warranties</li>
                  <li>✓ Energy-efficient reflective coating</li>
                  <li>✓ Hail and puncture resistant</li>
                  <li>✓ Low maintenance requirements</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img src="/images/SteelRoofing.jpg" alt="Metal Commercial Roofing" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Metal Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Standing seam and R-panel metal roofing for commercial applications. Superior wind resistance (140+ mph), fire resistance (Class A), and longevity (50+ years). Ideal for warehouses, manufacturing facilities, and retail buildings.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 50+ year lifespan</li>
                  <li>✓ Class A fire rating</li>
                  <li>✓ Wind resistance 140+ mph</li>
                  <li>✓ Hail dent-resistant options</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <img src="/images/EPDM2.jpg" alt="EPDM Rubber Roofing" className="w-full h-48 object-cover rounded-lg mb-6" />
                <h3 className="text-2xl font-bold text-brand-brown mb-4">EPDM Rubber Roofing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cost-effective black rubber membrane for commercial flat roofs. Excellent UV resistance and proven performance in extreme temperatures (-40°F to 300°F). Budget-friendly option with reliable 15-30 year lifespan.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 15-30 year lifespan</li>
                  <li>✓ Excellent UV resistance</li>
                  <li>✓ Temperature stable</li>
                  <li>✓ Budget-friendly option</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Commercial Service Areas in Amarillo
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide commercial roofing services throughout Amarillo's diverse business districts, from historic downtown to modern commercial developments:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Downtown & Historic Districts</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Route 66 Historic Commercial District</strong> - 13-block corridor featuring Spanish Revival, Art Deco, and Art Moderne architecture from the 1920s-1930s. Historic commercial buildings require specialized roofing expertise to meet preservation standards while providing modern weather protection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Downtown Amarillo</strong> - Government buildings, professional offices, and commercial properties including Potter County Courthouse (500 S Fillmore St) and J. Marvin Jones Federal Building (205 E 5th St). These historic structures demand expert commercial roofing with attention to architectural integrity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Industrial & Commercial Zones</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Bell Helicopter Industrial Area</strong> - Manufacturing facilities, warehouses, and industrial buildings requiring durable metal and TPO roofing systems engineered for large-scale commercial operations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Retail & Business Centers</strong> - Shopping centers, office parks, and commercial developments throughout Amarillo. We specialize in minimizing business disruption with after-hours installations and rapid emergency response.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Understanding Amarillo Building Codes
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All commercial roofing projects in Amarillo must comply with local building codes and permit requirements. We handle all permitting and ensure your project meets or exceeds city standards.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Building Safety Department</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Phone:</strong> (806) 378-3041</li>
                    <li><strong>Email:</strong> building@amarillo.gov</li>
                    <li><strong>Location:</strong> Simms Municipal Building<br/>808 S Buchanan St Suite 104</li>
                    <li><strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Key Code Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>2015 International Residential Code (IRC)</strong></li>
                    <li>✓ Permits required per IRC Section 105.1</li>
                    <li>✓ Wind resistance: 110-125 mph design standards</li>
                    <li>✓ Drip edge installation mandatory</li>
                    <li>✓ Proper attic ventilation (1 sq ft per 150 sq ft)</li>
                    <li>✓ UL 2218 Class 4 hail resistance recommended</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                We handle all permit applications and ensure your commercial roofing project meets Amarillo's building code requirements, preserving manufacturer warranties and ensuring long-term performance.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Amarillo's Climate Demands Superior Commercial Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Amarillo's location in the Texas Panhandle creates one of the most challenging roofing environments in the United States. Your commercial roof must withstand extreme conditions year-round:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Extreme Hail Danger</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Potter County has recorded <strong>131 severe hail days since 2000</strong> - ranking among the highest hail frequencies in the entire USA. Amarillo sits in "Hail Alley," experiencing multiple significant hail events annually during spring and fall.
                </p>
                <p className="text-gray-600 text-sm">
                  Recent data shows 438 hail reports within 10 miles of Amarillo in just 12 months. UL 2218 Class 4 impact-resistant roofing is highly recommended.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Relentless Wind</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Amarillo averages <strong>14.3 mph winds annually</strong> - the highest in Texas and second-highest in America. Peak winds in March-April regularly exceed 50 mph, with extreme gusts documented above that threshold each year.
                </p>
                <p className="text-gray-600 text-sm">
                  At 3,600 feet elevation, Amarillo is exposed to clashing air masses. Commercial roofing must meet 110-125 mph wind resistance standards.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Temperature Extremes</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Temperatures swing from <strong>13°F winter lows to 99°F summer highs</strong> - an 86°F range causing severe thermal expansion and contraction. Commercial roofing materials must withstand this constant stress.
                </p>
                <p className="text-gray-600 text-sm">
                  January averages 38.6°F while July averages 79.6°F. This extreme cycling accelerates material degradation without proper installation.
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
                  Storm damage or active leak threatening your Amarillo business? We provide 24/7 emergency response with temporary repairs, tarping, and leak mitigation. Minimize inventory damage, protect equipment, and keep operations running.
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
                  How much does commercial roof replacement cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Commercial roofing costs vary by building size, roof type, and complexity. Typical TPO installations range $4-$8 per square foot. Metal roofing runs $7-$12 per square foot. EPDM is most budget-friendly at $3-$6 per square foot. We provide free detailed estimates with transparent pricing and financing options for qualified businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is Amarillo one of the most challenging cities for commercial roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo recorded 131 severe hail days since 2000 - among the highest in the USA. The city averages 14.3 mph winds annually (highest in Texas, #2 in America) with extreme gusts exceeding 50 mph. Temperature swings from 13°F to 99°F cause significant thermal stress on roofing materials. Commercial buildings in Amarillo require specialized roofing systems engineered for these extreme conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing permits are required in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All commercial roofing projects in Amarillo require permits per Section 105.1 of the 2015 International Residential Code. Contact the City of Amarillo Building Safety Department at (806) 378-3041 or building@amarillo.gov. We handle all permit applications and ensure your project meets Amarillo's code requirements including drip edge installation, proper ventilation, and wind resistance standards for 110-125 mph design wind speeds.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work after hours to minimize business disruption?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We schedule commercial installations during evenings, weekends, or planned closure periods to minimize operational impact. Many Amarillo businesses prefer after-hours work for retail locations or facilities that cannot shut down during business hours. We coordinate carefully to meet your scheduling requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you provide commercial roofing for historic buildings in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we specialize in historic commercial roofing for Amarillo's Route 66 Historic District, downtown buildings, and properties with preservation requirements. The Route 66 corridor features Spanish Revival, Art Deco, and Art Moderne architecture requiring specialized roofing expertise. We work with building owners to meet historic preservation standards while providing modern weather protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes TPO roofing ideal for Amarillo's commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  TPO's white reflective membrane is Energy Star rated and dramatically reduces cooling costs during Amarillo's hot summers. The heat-welded seams create watertight bonds that withstand Texas Panhandle winds and hail. TPO offers excellent durability (15-25 year warranties) at a competitive price point, making it the most popular commercial roofing choice in the region.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should Amarillo commercial buildings use Class 4 impact-resistant roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Highly recommended. While not mandated by Amarillo building codes, UL 2218 Class 4 roofing withstands 2-inch hailstones and provides maximum protection in Potter County's extreme hail environment. Many Texas insurers offer up to 25% premium discounts for Class 4 commercial roofing systems, offsetting the initial investment with long-term savings and superior durability.
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
          <h2 className="text-4xl font-bold mb-6">Protect Your Amarillo Business</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free commercial roofing estimates. 24/7 emergency service. After-hours installation available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">
              Call (806) 622-6041
            </a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">
              Request Free Estimate
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
