import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'TPO Roofing Canyon TX | 5 Star Roofing',
  description: "Expert tpo roofing in Canyon TX. Texas Panhandle experiences 8-10 hailstorms annually. Palo Duro Canyon, WTAMU. Free inspections. Call (806) 622-6041",
};

export default function TpoRoofingCanyonPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "TPO Roofing",
                      "url": "/tpo-roofing/"
              },
              {
                      "name": "Canyon",
                      "url": "/tpo-roofing-canyon/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/tpo-roofing-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon TPO Roofing",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 34.9803, "longitude": -101.9188 },
        "url": "https://5starroofingpros.com/tpo-roofing-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert tpo roofing services in Canyon, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "TPO Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "+18066226041",
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              "name": "Canyon",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert TPO roofing in Canyon TX. Near Palo Duro Canyon, WTAMU. Texas Panhandle experiences 8-10 hailstorms annually. Energy-efficient commercial systems."
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
                "name": "Why is TPO roofing ideal for Canyon commercial buildings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing excels in Canyon's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 8-10 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Canyon's severe weather near Palo Duro Canyon."
                }
              },
              {
                "@type": "Question",
                "name": "How long does TPO roofing last in Canyon's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality TPO roofing systems typically last 20-30 years in Canyon when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and unique weather patterns near Palo Duro Canyon can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan."
                }
              },
              {
                "@type": "Question",
                "name": "Is TPO roofing energy-efficient for Canyon businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, TPO's white reflective surface significantly reduces cooling costs in Canyon's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Canyon commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates."
                }
              },
              {
                "@type": "Question",
                "name": "How much does TPO roofing cost in Canyon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TPO roofing in Canyon typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Canyon commercial properties."
                }
              },
              {
                "@type": "Question",
                "name": "Can TPO roofing withstand Canyon's hailstorms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Canyon's 8-10 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/tpo-roof-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Tpo Roofing in <span className="text-brand-gold-light">Canyon</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Energy-Efficient TPO Systems | Commercial Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert tpo roofing in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={350} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Canyon Projects</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">6-8</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
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
              Canyon's Tpo Roofing Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon's location in the Texas Panhandle creates unique roofing challenges. Near Palo Duro Canyon, home to West Texas A&M University. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and unique weather patterns near Palo Duro Canyon with High Plains wind exposure—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 350+ Canyon properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Canyon property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Canyon Businesses Choose TPO Roofing
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏫 Educational & Institutional</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ WTAMU campus facilities</li>
                  <li>✓ School district buildings</li>
                  <li>✓ Administrative complexes</li>
                  <li>✓ Athletic and recreational facilities</li>
                  <li>✓ Student housing developments</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">💰 Cost-Effective Solutions</h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li>✓ Lower installation costs than competitors</li>
                  <li>✓ Excellent long-term ROI</li>
                  <li>✓ Reduced maintenance expenses</li>
                  <li>✓ Energy savings up to 30%</li>
                  <li>✓ Insurance premium reductions</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Canyon's Unique Weather Challenges</h3>
              <p className="text-lg text-gray-700 mb-4">
                Canyon's proximity to Palo Duro Canyon creates unique microclimatic conditions. The area experiences intense wind patterns, rapid temperature changes, and increased hail activity due to its position on the High Plains. These conditions require specialized roofing systems.
              </p>
              <p className="text-lg text-gray-700">
                TPO roofing excels in these challenging conditions with proven flexibility, superior wind uplift resistance, and excellent thermal shock resistance. Our systems are specifically engineered for Canyon's demanding climate.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Commercial TPO Systems for Canyon Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Fully Adhered Systems</h3>
                <p className="text-gray-700 mb-3">
                  Complete bonding to substrate provides maximum wind uplift resistance - ideal for Canyon's High Plains wind exposure.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Wind uplift ratings up to 300 psf</li>
                  <li>• No mechanical penetrations</li>
                  <li>• Superior thermal performance</li>
                  <li>• Excellent for complex roof shapes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Mechanically Attached</h3>
                <p className="text-gray-700 mb-3">
                  Cost-effective installation with proven performance for Canyon's challenging weather conditions.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Faster installation process</li>
                  <li>• Lower initial investment</li>
                  <li>• Excellent wind performance</li>
                  <li>• Suitable for most building types</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Ballasted Systems</h3>
                <p className="text-gray-700 mb-3">
                  Loose-laid membrane with stone ballast - perfect for buildings with adequate structural capacity.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Minimal roof penetrations</li>
                  <li>• Easy access for maintenance</li>
                  <li>• Additional thermal mass</li>
                  <li>• Cost-effective for large buildings</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Energy Efficiency for Canyon Commercial Buildings
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Cool Roof Technology</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Reflective Performance</h4>
                  <p className="text-gray-700 mb-4">
                    White TPO membranes reflect 80%+ of solar radiation, significantly reducing cooling loads for Canyon's educational and commercial facilities.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• ENERGY STAR certified membranes</li>
                    <li>• Cool Roof Rating Council verified</li>
                    <li>• Thermal emittance ratings 0.83+</li>
                    <li>• Solar reflectance index (SRI) 100+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Insulation Systems</h4>
                  <p className="text-gray-700 mb-4">
                    High-performance insulation packages maximize energy efficiency while providing code-compliant thermal resistance values.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Polyiso foam board (R-6+ per inch)</li>
                    <li>• XPS rigid insulation options</li>
                    <li>• Tapered systems for drainage</li>
                    <li>• Vapor retarder integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Canyon Energy Savings Examples</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">25%</div>
                  <div className="font-semibold mb-1">WTAMU Facility</div>
                  <div className="text-gray-600 text-sm">Annual cooling cost reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">$18K</div>
                  <div className="font-semibold mb-1">Office Complex</div>
                  <div className="text-gray-600 text-sm">First-year energy savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">30%</div>
                  <div className="font-semibold mb-1">Retail Center</div>
                  <div className="text-gray-600 text-sm">Peak demand reduction</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Installation Process for Canyon Commercial Properties
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-brown">Site Assessment & Planning</h3>
                    <p className="text-gray-700 mb-3">
                      Comprehensive evaluation of your Canyon property including structural analysis, existing roof condition, and energy efficiency opportunities. We coordinate with local authorities for all required permits.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <ul className="space-y-1">
                        <li>• Structural load calculations</li>
                        <li>• Wind uplift design requirements</li>
                        <li>• Drainage analysis and planning</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Energy modeling and projections</li>
                        <li>• Code compliance verification</li>
                        <li>• Timeline and logistics coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-brown">Substrate Preparation</h3>
                    <p className="text-gray-700 mb-3">
                      Professional preparation ensures optimal TPO performance and longevity. Our team creates the ideal foundation for your new roofing system.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <ul className="space-y-1">
                        <li>• Existing membrane removal if needed</li>
                        <li>• Deck cleaning and repair</li>
                        <li>• Primer application where required</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Insulation installation/upgrade</li>
                        <li>• Vapor barrier placement</li>
                        <li>• Cover board installation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-brown">TPO Membrane Installation</h3>
                    <p className="text-gray-700 mb-3">
                      Precision installation using state-of-the-art equipment and certified techniques. Every detail is executed to manufacturer specifications.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <ul className="space-y-1">
                        <li>• Membrane layout and cutting</li>
                        <li>• Heat welding of all seams</li>
                        <li>• Mechanical fastening per specs</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Flashing and detail work</li>
                        <li>• Penetration sealing</li>
                        <li>• Edge termination systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Roofing FAQs - Canyon, TX
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is TPO roofing ideal for Canyon commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing excels in Canyon's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 8-10 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Canyon's severe weather near Palo Duro Canyon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does TPO roofing last in Canyon's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality TPO roofing systems typically last 20-30 years in Canyon when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and unique weather patterns near Palo Duro Canyon can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is TPO roofing energy-efficient for Canyon businesses?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, TPO's white reflective surface significantly reduces cooling costs in Canyon's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Canyon commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does TPO roofing cost in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing in Canyon typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Canyon commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can TPO roofing withstand Canyon's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Canyon's 8-10 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Amarillo Location
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amarillo, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert tpo roofing with comprehensive warranties and insurance claim assistance.
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
