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
  alternates: { canonical: 'https://5starroofingpros.com/roof-repair-pampa/' },
  title: "Roof Repair Pampa TX | Same-Day Service | Free Inspection",
  description: "Expert roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairPampaPage() {
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
                      "name": "Pampa",
                      "url": "/roof-repair-pampa/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-pampa/#localbusiness",
        "name": "5 Star Commercial Roofing - Pampa Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 35.5364, "longitude": -100.9599 },
        "url": "https://5starroofingpros.com/roof-repair-pampa/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas", "name": "Pampa", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Pampa, TX. Free inspections, insurance claim assistance, prompt response.",
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
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              "name": "Pampa",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does roof repair cost in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you repair my leaking roof in Pampa?",
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
                "name": "What are the most common roof repairs in Pampa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Pampa, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The agricultural community's exposure to High Plains winds and frequent hailstorms creates specific damage patterns we repair regularly."
                }
              }
            ]
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-900/75 to-orange-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Repair in <span className="text-brand-gold-light">Pampa</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Fast, Professional Repairs | Same-Day Service Available
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof repair in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={220} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Pampa Projects</div>
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
              Pampa's Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in the Texas Panhandle creates unique roofing challenges. Agricultural community in the High Plains. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural community exposure to High Plains winds and frequent hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 220+ Pampa properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Pampa property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
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
                  How much does roof repair cost in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair my leaking roof in Pampa?
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
                  What are the most common roof repairs in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Pampa, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The agricultural community's exposure to High Plains winds and frequent hailstorms creates specific damage patterns we repair regularly.
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
              Pampa Roof Repair Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Oil & Gas Industry Specialist</h3>
                <p className="text-gray-700 mb-4">
                  Pampa's economy centers on oil and gas production, with numerous drilling operations and support facilities throughout Gray County. We specialize in industrial roofing for energy sector buildings and worker housing.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Oil field facility roofing</li>
                  <li>• Gas processing plant repairs</li>
                  <li>• Energy sector housing maintenance</li>
                  <li>• Industrial equipment shelter roofing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Gray County Seat Services</h3>
                <p className="text-gray-700 mb-4">
                  As Gray County's county seat, Pampa hosts government buildings, courthouse facilities, and municipal structures requiring specialized knowledge of public building codes and institutional roofing requirements.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• County courthouse maintenance</li>
                  <li>• Municipal building repairs</li>
                  <li>• Government facility roofing</li>
                  <li>• Public building compliance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Historic Downtown Preservation</h3>
                <p className="text-gray-700 mb-4">
                  Pampa's historic downtown district reflects its oil boom heritage, requiring specialized roofing approaches that preserve architectural character while meeting modern performance standards.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Historic building restoration</li>
                  <li>• Period-appropriate materials</li>
                  <li>• Architectural preservation compliance</li>
                  <li>• Heritage district requirements</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Energy Worker Community</h3>
                <p className="text-gray-700 mb-4">
                  Pampa houses energy sector workers and their families in residential neighborhoods designed around the oil and gas industry's unique scheduling and housing needs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Energy worker housing repairs</li>
                  <li>• Family residential services</li>
                  <li>• Shift schedule accommodation</li>
                  <li>• Emergency response for worker housing</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Pampa's Energy Industry Environment
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Oil & Gas Operations</h3>
                <p className="text-gray-700">
                  Pampa's location in Gray County places it at the center of significant oil and gas production, creating industrial environments that demand specialized roofing solutions for energy sector facilities.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">County Government</h3>
                <p className="text-gray-700">
                  As Gray County's seat, Pampa maintains essential government services and facilities that require specialized roofing expertise for public buildings and institutional structures.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🏘️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Energy Community</h3>
                <p className="text-gray-700">
                  Pampa's residential community primarily serves energy sector workers and their families, creating unique housing patterns and roofing needs tied to the oil and gas industry's demands.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Environmental Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Hydrocarbon Exposure</h4>
                  <p className="text-gray-700 mb-4">
                    Oil and gas operations in Pampa create airborne hydrocarbons and industrial chemicals that can affect roofing material selection and longevity. Our material choices account for this industrial environment.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Energy Sector Schedules</h4>
                  <p className="text-gray-700 mb-4">
                    The oil and gas industry operates on demanding schedules with operations. Our service delivery accommodates energy sector timing requirements and emergency response needs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Pampa Roof Repair Process
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Energy Sector Response Coordination</h3>
                    <p className="text-gray-700 mb-3">
                      Understanding that Pampa's energy sector operates around the clock, we coordinate our emergency response with oil and gas facility operations and worker shift schedules to minimize disruption.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• energy facility emergency response</li>
                      <li>• Shift schedule accommodation</li>
                      <li>• Industrial safety protocol compliance</li>
                      <li>• Oil field facility prioritization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Industrial Environment Assessment</h3>
                    <p className="text-gray-700 mb-3">
                      Our inspectors evaluate both weather damage and industrial environmental factors unique to Pampa's oil and gas operations, including exposure to hydrocarbons and industrial processes.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Hydrocarbon exposure evaluation</li>
                      <li>• Industrial contamination assessment</li>
                      <li>• Energy facility building codes</li>
                      <li>• County government compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Energy-Grade Material Selection</h3>
                    <p className="text-gray-700 mb-3">
                      We specify materials designed for industrial environments, including chemical-resistant coatings and components rated for exposure to hydrocarbons and other energy sector byproducts.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Chemical-resistant roofing systems</li>
                      <li>• Industrial-grade components</li>
                      <li>• Energy sector specifications</li>
                      <li>• Enhanced durability materials</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Industry-Coordinated Installation</h3>
                    <p className="text-gray-700 mb-3">
                      Our installation teams work around energy sector operations, understanding the critical nature of maintaining facility integrity and worker safety during the repair process.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Energy facility safety compliance</li>
                      <li>• Worker safety prioritization</li>
                      <li>• Industrial operation coordination</li>
                      <li>• Emergency protocol adherence</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Industrial Performance Monitoring</h3>
                    <p className="text-gray-700 mb-3">
                      Given Pampa's industrial environment, we provide enhanced monitoring to ensure repairs perform as expected under energy sector conditions and chemical exposure common in the area.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Industrial environment monitoring</li>
                      <li>• Chemical exposure tracking</li>
                      <li>• Energy sector performance verification</li>
                      <li>• Enhanced warranty programs</li>
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
              Why Choose 5 Star for Your Pampa Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Energy Industry Experience</h3>
                <p className="text-gray-700 mb-4">
                  We understand the unique demands of oil and gas operations in Gray County, providing specialized roofing services for energy sector facilities and worker housing throughout Pampa.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 220+ Pampa area projects completed</li>
                  <li>• Oil and gas facility expertise</li>
                  <li>• Energy worker housing specialization</li>
                  <li>• Industrial safety compliance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Industrial Environment Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Our material selection and installation processes account for Pampa's industrial environment, including exposure to hydrocarbons and chemicals common in oil and gas operations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chemical-resistant material systems</li>
                  <li>• Industrial contamination resistance</li>
                  <li>• Energy sector compliance</li>
                  <li>• Environmental durability testing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Energy Sector Support</h3>
                <p className="text-gray-700 mb-4">
                  Energy operations don't follow traditional schedules, and neither do we. Our emergency response accommodates the round-the-clock nature of oil and gas facilities in Pampa.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• prompt response</li>
                  <li>• Shift schedule accommodation</li>
                  <li>• Energy facility prioritization</li>
                  <li>• Industrial safety protocols</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Gray County Expertise</h3>
                <p className="text-gray-700 mb-4">
                  As the county seat, Pampa requires specialized knowledge of local building codes, government building requirements, and the unique characteristics of Gray County's energy economy.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• County building code compliance</li>
                  <li>• Government facility expertise</li>
                  <li>• Municipal building experience</li>
                  <li>• Local regulation knowledge</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Pampa and Gray County
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                From our Amarillo headquarters, we serve Pampa and the broader Gray County energy community, including residential, commercial, and industrial properties throughout the area:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Pampa</h4>
                  <p className="text-sm text-gray-600">County Seat & Center</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Lefors</h4>
                  <p className="text-sm text-gray-600">12 miles south</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">McLean</h4>
                  <p className="text-sm text-gray-600">20 miles east</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Laketon</h4>
                  <p className="text-sm text-gray-600">18 miles northwest</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-2">Gray County Energy District</h4>
                <p className="text-gray-700">
                  We serve the extensive oil and gas operations throughout Gray County, including drilling sites, processing facilities, and worker housing that support the region's energy economy.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert roof repair with comprehensive warranties and insurance claim assistance.
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
