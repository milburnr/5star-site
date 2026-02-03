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
  title: "Roof Repair Borger TX | Same-Day Service | Free Inspection",
  description: "Expert roof repair in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairBorgerPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Repair",
                      "url": "/roof-repair/"
              },
              {
                      "name": "Borger",
                      "url": "/roof-repair-borger/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-borger/#localbusiness",
        "name": "5 Star Commercial Roofing - Borger Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.6678, "longitude": -101.3974 },
        "url": "https://5starroofingpros.com/roof-repair-borger/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Borger,_Texas", "name": "Borger", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Borger, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Repair",
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
              },
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Borger,_Texas",
              "name": "Borger",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof repair in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does roof repair cost in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you repair my leaking roof in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For emergency leaks, we provide same-day service when called before noon on most days. Non-emergency repairs are typically scheduled within 3-5 business days. Most repairs complete in 2-4 hours depending on complexity. We understand roof leaks cause stress and damage—we prioritize fast response without sacrificing quality."
                }
              },
              {
                "@type": "Question",
                "name": "Should I repair or replace my roof?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Repair makes sense for roofs under 15 years old with localized damage affecting less than 30% of surface area. Replacement is recommended when roofs exceed 20 years, show widespread damage, or require multiple repair areas. Our free inspections provide honest assessments—we recommend the most cost-effective solution for your situation."
                }
              },
              {
                "@type": "Question",
                "name": "Do you warranty your roof repairs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our repairs include workmanship warranties ranging from 1-5 years depending on repair type. Materials carry manufacturer warranties. We stand behind our work—if a repair fails due to installation error, we fix it at no charge. This warranty protection gives you peace of mind that repairs will last."
                }
              },
              {
                "@type": "Question",
                "name": "What are the most common roof repairs in Borger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Borger, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The Texas Panhandle's severe weather creates specific damage patterns we repair regularly."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/images/commercial-roofing-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-900/75 to-orange-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Repair in <span className="text-brand-gold-light">Borger</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Fast, Professional Repairs | Same-Day Service Available
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof repair in Borger TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={180} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Borger Projects</div>
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
              Borger's Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Borger's location in the Texas Panhandle creates unique roofing challenges. Industrial petrochemical center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and industrial environment with petrochemical operations and Panhandle weather extremes—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 180+ Borger properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Borger property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
            </p>
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
                  How much does roof repair cost in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair my leaking roof in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For emergency leaks, we provide same-day service when called before noon on most days. Non-emergency repairs are typically scheduled within 3-5 business days. Most repairs complete in 2-4 hours depending on complexity. We understand roof leaks cause stress and damage—we prioritize fast response without sacrificing quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I repair or replace my roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair makes sense for roofs under 15 years old with localized damage affecting less than 30% of surface area. Replacement is recommended when roofs exceed 20 years, show widespread damage, or require multiple repair areas. Our free inspections provide honest assessments—we recommend the most cost-effective solution for your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you warranty your roof repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, all our repairs include workmanship warranties ranging from 1-5 years depending on repair type. Materials carry manufacturer warranties. We stand behind our work—if a repair fails due to installation error, we fix it at no charge. This warranty protection gives you peace of mind that repairs will last.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the most common roof repairs in Borger?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Borger, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The Texas Panhandle's severe weather creates specific damage patterns we repair regularly.
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

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Borger Roof Repair Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Storm Damage Repair</h3>
                <p className="text-gray-700 mb-4">
                  Borger's location in Hutchinson County puts it in the path of severe Texas Panhandle storms. Our storm damage specialists handle hail damage, wind-lifted shingles, and structural repairs from severe weather events.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hail damage assessment and repair</li>
                  <li>• Wind damage restoration</li>
                  <li>• Emergency leak repair</li>
                  <li>• Insurance claim assistance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Roof Maintenance</h3>
                <p className="text-gray-700 mb-4">
                  Borger's petrochemical industry and Phillips 66 refinery operations create unique environmental challenges. We provide specialized maintenance for industrial roofing systems exposed to chemical emissions and harsh conditions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chemical-resistant coating applications</li>
                  <li>• Industrial membrane repairs</li>
                  <li>• Metal roof maintenance</li>
                  <li>• Environmental compliance support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Residential Repairs</h3>
                <p className="text-gray-700 mb-4">
                  From historic downtown Borger homes to newer subdivisions, we repair all residential roofing types. Our team understands local architectural styles and building requirements specific to Hutchinson County.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Asphalt shingle repair and replacement</li>
                  <li>• Metal roof maintenance</li>
                  <li>• Flat roof membrane repair</li>
                  <li>• Gutter and downspout repair</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Emergency Services</h3>
                <p className="text-gray-700 mb-4">
                  Texas Panhandle weather doesn't follow business hours. Our 24/7 emergency service ensures your Borger property is protected when storms strike or unexpected damage occurs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 24/7 emergency response</li>
                  <li>• Temporary weatherproofing</li>
                  <li>• Leak location and repair</li>
                  <li>• Same-day service available</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Understanding Borger's Unique Weather Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🌪️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Severe Storms</h3>
                <p className="text-gray-700">
                  The Texas Panhandle experiences 6-8 significant hailstorms annually, with hail sizes frequently exceeding golf ball diameter. Borger's flat terrain offers no protection from these severe weather events.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">💨</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">High Plains Winds</h3>
                <p className="text-gray-700">
                  Constant winds averaging 15-20 mph with gusts exceeding 60 mph stress roofing materials. These persistent winds can lift shingles and create pressure differentials that lead to structural damage.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Industrial Environment</h3>
                <p className="text-gray-700">
                  Borger's petrochemical operations, including the Phillips 66 refinery, create airborne chemicals that can accelerate roofing material degradation, requiring specialized maintenance approaches.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Local Climate Data</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Temperature Extremes</h4>
                  <p className="text-gray-700 mb-4">
                    Summer highs regularly exceed 95°F, causing thermal expansion and contraction stress. Winter lows drop below 20°F, creating freeze-thaw cycles that damage roofing materials and flashings.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Precipitation Patterns</h4>
                  <p className="text-gray-700 mb-4">
                    Annual precipitation averages 19 inches, with most occurring during intense spring and summer storms. Quick temperature changes and severe weather events stress roofing systems beyond normal wear.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Borger Roof Repair Process
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Emergency Response Assessment</h3>
                    <p className="text-gray-700 mb-3">
                      When you call our Borger emergency line, we dispatch certified technicians within 2 hours during business hours, or first thing the next morning for after-hours calls. Our initial assessment identifies immediate safety concerns and temporary weatherproofing needs.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Safety evaluation of damaged areas</li>
                      <li>• Leak source identification and temporary sealing</li>
                      <li>• Documentation for insurance purposes</li>
                      <li>• Interior damage prevention measures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Comprehensive Inspection</h3>
                    <p className="text-gray-700 mb-3">
                      Our certified inspectors examine all roofing components, from structural decking to flashing systems. In Borger's industrial environment, we pay special attention to chemical corrosion and environmental damage patterns unique to the area.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Complete structural integrity assessment</li>
                      <li>• Industrial contamination evaluation</li>
                      <li>• Weather damage documentation</li>
                      <li>• Code compliance verification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Detailed Estimate & Insurance Coordination</h3>
                    <p className="text-gray-700 mb-3">
                      We provide detailed written estimates that itemize all necessary repairs with material specifications and labor costs. Our team works directly with insurance adjusters familiar with Borger's unique weather challenges to ensure proper coverage.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Line-item repair breakdown</li>
                      <li>• Insurance claim documentation</li>
                      <li>• Timeline and scheduling coordination</li>
                      <li>• Material upgrade options</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Professional Repair Execution</h3>
                    <p className="text-gray-700 mb-3">
                      Our certified crews use premium materials engineered for Texas Panhandle conditions. All work follows manufacturer specifications and local building codes, with special attention to wind resistance and chemical compatibility for Borger's environment.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• High-wind rated materials installation</li>
                      <li>• Chemical-resistant components</li>
                      <li>• Quality control inspections</li>
                      <li>• Clean-up and site restoration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Quality Assurance & Warranty Protection</h3>
                    <p className="text-gray-700 mb-3">
                      Before project completion, our supervisors conduct final inspections to ensure all repairs meet our quality standards. We provide comprehensive warranties on both materials and workmanship, giving you long-term peace of mind.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Final quality inspection</li>
                      <li>• Warranty documentation</li>
                      <li>• Maintenance recommendations</li>
                      <li>• 24/7 warranty support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Choose 5 Star for Your Borger Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Local Expertise Since 2014</h3>
                <p className="text-gray-700 mb-4">
                  We've been serving Borger and Hutchinson County for over a decade, completing 180+ projects. Our team understands the unique challenges posed by the area's industrial environment and severe weather patterns.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 180+ successful Borger projects</li>
                  <li>• Local building code expertise</li>
                  <li>• Established relationships with suppliers</li>
                  <li>• Quick response times</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Insurance Specialists</h3>
                <p className="text-gray-700 mb-4">
                  Our certified insurance specialists work directly with adjusters to ensure you receive proper coverage for storm damage. We handle the paperwork and advocacy, so you focus on getting your property restored.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Complete insurance claim assistance</li>
                  <li>• Direct adjuster communication</li>
                  <li>• Damage documentation</li>
                  <li>• Supplement negotiation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Premium Materials</h3>
                <p className="text-gray-700 mb-4">
                  We exclusively use materials rated for Texas Panhandle conditions. Our partnerships with leading manufacturers ensure access to the latest technology in weather-resistant and chemical-resistant roofing systems.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• High-wind rated shingles</li>
                  <li>• Chemical-resistant membranes</li>
                  <li>• Impact-resistant materials</li>
                  <li>• Manufacturer warranties</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Comprehensive Warranties</h3>
                <p className="text-gray-700 mb-4">
                  All our repairs include workmanship warranties ranging from 1-5 years depending on scope. Combined with manufacturer material warranties, you receive comprehensive protection for your investment.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 1-5 year workmanship warranties</li>
                  <li>• Manufacturer material coverage</li>
                  <li>• 24/7 warranty support</li>
                  <li>• No-cost defect corrections</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Borger and Surrounding Communities
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                From our Amarillo headquarters, we serve Borger and the broader Hutchinson County area with the same commitment to quality and customer service. Our service area includes:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Borger</h4>
                  <p className="text-sm text-gray-600">City Center</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Stinnett</h4>
                  <p className="text-sm text-gray-600">15 miles north</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Fritch</h4>
                  <p className="text-sm text-gray-600">10 miles east</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Sanford</h4>
                  <p className="text-sm text-gray-600">20 miles south</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Borger Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Borger property owners. Expert roof repair with comprehensive warranties and insurance claim assistance.
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
