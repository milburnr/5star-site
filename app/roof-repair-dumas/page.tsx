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
  title: "Roof Repair Dumas TX | Same-Day Service | Free Inspection",
  description: "Expert roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairDumasPage() {
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
                      "name": "Dumas",
                      "url": "/roof-repair-dumas/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


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
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              "name": "Dumas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does roof repair cost in Dumas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you repair my leaking roof in Dumas?",
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
                "name": "What are the most common roof repairs in Dumas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Dumas, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The agricultural and feedlot industry environment combined with severe Panhandle weather creates specific damage patterns we repair regularly."
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
                Roof Repair in <span className="text-brand-gold-light">Dumas</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Fast, Professional Repairs | Same-Day Service Available
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof repair in Dumas TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={190} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Dumas Projects</div>
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
              Dumas's Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas's location in the Texas Panhandle creates unique roofing challenges. Agricultural and feedlot industry center. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and agricultural and feedlot industry demands with extreme Panhandle weather—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 190+ Dumas properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Dumas property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
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
                  How much does roof repair cost in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair my leaking roof in Dumas?
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
                  What are the most common roof repairs in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Dumas, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The agricultural and feedlot industry environment combined with severe Panhandle weather creates specific damage patterns we repair regularly.
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
              Dumas Roof Repair Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Agricultural Industry Specialist</h3>
                <p className="text-gray-700 mb-4">
                  Dumas is Moore County's agricultural hub, home to massive cattle feedlots and grain storage facilities. We specialize in agricultural building roofing, understanding the unique demands of livestock operations and commodity storage.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Feedlot building repairs</li>
                  <li>• Grain storage facility roofing</li>
                  <li>• Livestock barn maintenance</li>
                  <li>• Agricultural equipment storage</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">County Seat Services</h3>
                <p className="text-gray-700 mb-4">
                  As Moore County's county seat, Dumas hosts government buildings, courthouse facilities, and municipal structures requiring specialized roofing expertise for public buildings and institutional requirements.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Government building maintenance</li>
                  <li>• Courthouse roof systems</li>
                  <li>• Municipal facility repairs</li>
                  <li>• Public building compliance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Industrial Ammonia Environment</h3>
                <p className="text-gray-700 mb-4">
                  Dumas's agricultural operations include significant ammonia production and storage facilities. We provide specialized roofing services for buildings exposed to industrial chemicals and agricultural processing environments.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chemical-resistant roofing systems</li>
                  <li>• Industrial facility maintenance</li>
                  <li>• Processing plant roof repairs</li>
                  <li>• Environmental compliance support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Residential Community Support</h3>
                <p className="text-gray-700 mb-4">
                  Dumas's residential neighborhoods house agricultural workers, county employees, and industrial personnel. We provide comprehensive residential roofing services tailored to this working community's needs and schedules.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Residential roof repairs</li>
                  <li>• Worker housing maintenance</li>
                  <li>• Family home protection</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Dumas's Agricultural and Industrial Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🐄</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Feedlot Operations</h3>
                <p className="text-gray-700">
                  Dumas hosts some of Texas's largest cattle feedlots, creating unique environmental challenges including ammonia exposure, dust, and moisture that accelerate roofing material degradation.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🌾</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Grain Storage</h3>
                <p className="text-gray-700">
                  Massive grain storage and processing facilities require specialized roofing systems capable of handling structural loads, moisture control, and agricultural chemical exposure common in this industry.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">County Government</h3>
                <p className="text-gray-700">
                  As Moore County's seat, Dumas maintains government buildings, courthouse facilities, and municipal structures requiring compliance with public building codes and accessibility standards.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Environmental Impact on Roofing</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Ammonia Exposure</h4>
                  <p className="text-gray-700 mb-4">
                    Agricultural operations in Dumas create airborne ammonia that can accelerate corrosion of metal roofing components and degrade certain membrane materials. Our material selection accounts for this chemical exposure.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Dust and Particulates</h4>
                  <p className="text-gray-700 mb-4">
                    Feedlot operations and grain processing create high levels of airborne dust and organic particulates that can clog drainage systems and create additional moisture retention on roof surfaces.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Dumas Roof Repair Process
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Schedule Coordination</h3>
                    <p className="text-gray-700 mb-3">
                      We understand that agricultural operations in Dumas run on demanding schedules tied to livestock care and commodity processing. Our emergency response considers the critical nature of agricultural building integrity.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Agricultural operation priority scheduling</li>
                      <li>• Livestock facility emergency protocols</li>
                      <li>• Grain storage protection measures</li>
                      <li>• Minimal operational disruption</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Environmental Impact Assessment</h3>
                    <p className="text-gray-700 mb-3">
                      Our inspectors evaluate not just weather damage but also environmental factors unique to Dumas's agricultural and industrial environment, including chemical exposure and organic material accumulation.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Chemical exposure evaluation</li>
                      <li>• Agricultural environment impact</li>
                      <li>• Dust and debris assessment</li>
                      <li>• Industrial facility considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural-Grade Materials</h3>
                    <p className="text-gray-700 mb-3">
                      We specify materials designed for agricultural environments, including chemical-resistant coatings, enhanced drainage systems, and structural components rated for the unique loads of agricultural buildings.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Chemical-resistant materials</li>
                      <li>• Agricultural building specifications</li>
                      <li>• Enhanced drainage systems</li>
                      <li>• Heavy-load structural support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Industry-Sensitive Installation</h3>
                    <p className="text-gray-700 mb-3">
                      Our installation teams work around agricultural operations, understanding the importance of maintaining livestock comfort and protecting stored commodities during the repair process.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Livestock operation consideration</li>
                      <li>• Commodity protection protocols</li>
                      <li>• Minimal agricultural disruption</li>
                      <li>• Safety compliance for all environments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Environment Monitoring</h3>
                    <p className="text-gray-700 mb-3">
                      Given the harsh environmental conditions in Dumas's agricultural sector, we provide enhanced monitoring of repairs to ensure they perform as expected under chemical exposure and operational stress.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Chemical exposure monitoring</li>
                      <li>• Agricultural operation impact tracking</li>
                      <li>• Enhanced warranty support</li>
                      <li>• Preventive maintenance programs</li>
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
              Why Choose 5 Star for Your Dumas Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Agricultural Industry Experience</h3>
                <p className="text-gray-700 mb-4">
                  We understand the unique challenges of agricultural roofing in Moore County, from feedlot environments to grain storage facilities. Our team has specialized experience with agricultural building requirements.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 190+ Dumas area projects completed</li>
                  <li>• Feedlot and agricultural expertise</li>
                  <li>• Industrial facility experience</li>
                  <li>• Government building specialization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Chemical-Resistant Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Our material selection accounts for Dumas's agricultural environment, including exposure to ammonia, organic acids, and other chemicals common in livestock and grain processing operations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chemical-resistant material specifications</li>
                  <li>• Agricultural environment testing</li>
                  <li>• Enhanced durability systems</li>
                  <li>• Environmental compliance support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Operational Coordination</h3>
                <p className="text-gray-700 mb-4">
                  We schedule our work around agricultural operations, understanding that livestock care and commodity processing cannot be interrupted for roofing work without careful planning and coordination.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Agricultural schedule accommodation</li>
                  <li>• Livestock operation consideration</li>
                  <li>• Commodity protection protocols</li>
                  <li>• Emergency response prioritization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Moore County Compliance</h3>
                <p className="text-gray-700 mb-4">
                  As the county seat, Dumas requires compliance with various municipal and county building codes. We ensure all work meets local requirements for both private and public buildings.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• County building code expertise</li>
                  <li>• Municipal compliance verification</li>
                  <li>• Public building standards</li>
                  <li>• Government facility experience</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Dumas and Moore County
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                From our Amarillo headquarters, we serve Dumas and the broader Moore County agricultural community, including residential, commercial, and agricultural properties throughout the area:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Dumas</h4>
                  <p className="text-sm text-gray-600">County Seat & Center</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Sunray</h4>
                  <p className="text-sm text-gray-600">12 miles north</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Cactus</h4>
                  <p className="text-sm text-gray-600">15 miles northwest</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Four Way</h4>
                  <p className="text-sm text-gray-600">20 miles south</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-2">Moore County Agricultural District</h4>
                <p className="text-gray-700">
                  We serve the extensive agricultural operations throughout Moore County, including major feedlots, grain storage facilities, and processing plants that form the backbone of the region's economy.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas property owners. Expert roof repair with comprehensive warranties and insurance claim assistance.
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
