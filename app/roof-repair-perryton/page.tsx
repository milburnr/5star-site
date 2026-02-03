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
  title: "Roof Repair Perryton TX | Same-Day Service | Free Inspection",
  description: "Expert roof repair in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairPerrytonPage() {
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
                      "name": "Perryton",
                      "url": "/roof-repair-perryton/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-perryton/#localbusiness",
        "name": "5 Star Commercial Roofing - Perryton Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 36.4, "longitude": -100.8028 },
        "url": "https://5starroofingpros.com/roof-repair-perryton/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas", "name": "Perryton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Perryton, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              "name": "Perryton",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof repair in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does roof repair cost in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you repair my leaking roof in Perryton?",
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
                "name": "What are the most common roof repairs in Perryton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Perryton, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The wheat country agricultural environment with severe Panhandle hailstorms creates specific damage patterns we repair regularly."
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
                Roof Repair in <span className="text-brand-gold-light">Perryton</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Fast, Professional Repairs | Same-Day Service Available
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof repair in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
                  <AnimatedCounter to={160} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Perryton Projects</div>
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
              Perryton's Roof Repair Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton's location in the Texas Panhandle creates unique roofing challenges. Wheat country agricultural community. Texas Panhandle weather extremes—6-8 annual hailstorms, High Plains winds 60+ mph, and wheat country agricultural exposure with severe Panhandle hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 160+ Perryton properties with premium materials engineered for Panhandle weather. We understand local building codes, work seamlessly with Perryton property owners, and handle complete insurance claims. Most homeowners pay only their deductible when insurance covers storm damage.
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
                  How much does roof repair cost in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair my leaking roof in Perryton?
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
                  What are the most common roof repairs in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Perryton, the most common repairs include hail-damaged shingles from the area's 7-9 annual hailstorms, wind-lifted shingles from High Plains winds, failed flashing around chimneys and vents, and leak repairs. The wheat country agricultural environment with severe Panhandle hailstorms creates specific damage patterns we repair regularly.
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
              Perryton Roof Repair Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Wheat Country Agricultural Specialist</h3>
                <p className="text-gray-700 mb-4">
                  Perryton sits in the heart of Texas wheat country, with vast grain operations and storage facilities throughout Ochiltree County. We specialize in agricultural building roofing designed for grain storage and farm operations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Grain elevator roofing systems</li>
                  <li>• Wheat storage facility repairs</li>
                  <li>• Farm building maintenance</li>
                  <li>• Agricultural equipment storage</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Ochiltree County Seat Services</h3>
                <p className="text-gray-700 mb-4">
                  As Ochiltree County's county seat, Perryton hosts government buildings, courthouse facilities, and municipal structures requiring specialized expertise for public buildings and institutional requirements.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• County courthouse maintenance</li>
                  <li>• Municipal building repairs</li>
                  <li>• Government facility roofing</li>
                  <li>• Public building code compliance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Extreme Hail Zone Protection</h3>
                <p className="text-gray-700 mb-4">
                  Perryton experiences some of the most severe hailstorms in the Texas Panhandle, with 8-10 significant events annually. We specialize in hail-resistant roofing systems and rapid storm damage response.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Impact-resistant roofing systems</li>
                  <li>• Hail damage assessment and repair</li>
                  <li>• Storm damage emergency response</li>
                  <li>• Insurance claim specialization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Rural Community Support</h3>
                <p className="text-gray-700 mb-4">
                  Perryton serves the broader rural community of Ochiltree County, including ranch properties, farm residences, and rural commercial buildings that require specialized roofing approaches.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Rural residential services</li>
                  <li>• Ranch building repairs</li>
                  <li>• Remote property access</li>
                  <li>• Agricultural community support</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Perryton's Wheat Country Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🌾</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Wheat Production</h3>
                <p className="text-gray-700">
                  Perryton serves as a major wheat production center with massive grain elevators and storage facilities requiring specialized roofing systems capable of handling structural loads and moisture control.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🌨️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Extreme Hail Events</h3>
                <p className="text-gray-700">
                  Perryton sits directly in "Hail Alley," experiencing 8-10 severe hailstorms annually with hail sizes frequently exceeding baseball diameter, creating unique roofing challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">County Services</h3>
                <p className="text-gray-700">
                  As Ochiltree County's seat, Perryton maintains essential government services and facilities requiring specialized roofing knowledge for public buildings and institutional structures.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Agricultural Environment Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Grain Dust Exposure</h4>
                  <p className="text-gray-700 mb-4">
                    Wheat processing and storage operations create significant airborne grain dust that can accumulate on roof surfaces and clog drainage systems, requiring specialized maintenance approaches.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Agricultural Chemical Exposure</h4>
                  <p className="text-gray-700 mb-4">
                    Farming operations use herbicides, pesticides, and fertilizers that can create airborne chemicals affecting roofing material longevity and requiring resistant material selection.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Perryton Roof Repair Process
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Schedule Coordination</h3>
                    <p className="text-gray-700 mb-3">
                      Understanding that Perryton's wheat operations follow strict seasonal schedules tied to planting, harvest, and storage, we coordinate our emergency response around critical agricultural timing.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Harvest season priority scheduling</li>
                      <li>• Grain storage facility emergency protocols</li>
                      <li>• Farm operation coordination</li>
                      <li>• Seasonal agricultural considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Severe Weather Damage Assessment</h3>
                    <p className="text-gray-700 mb-3">
                      Our inspectors specialize in evaluating hail damage patterns specific to Perryton's severe weather zone, understanding how extreme hailstorms affect different roofing materials and building types.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Extreme hail damage evaluation</li>
                      <li>• Agricultural building assessment</li>
                      <li>• Storm pattern analysis</li>
                      <li>• Insurance documentation expertise</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Impact-Resistant Material Selection</h3>
                    <p className="text-gray-700 mb-3">
                      Given Perryton's location in extreme hail territory, we specify the highest impact-resistance rated materials available, designed specifically for severe weather zones like Ochiltree County.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Class 4 impact-resistant shingles</li>
                      <li>• Hail-resistant metal systems</li>
                      <li>• Agricultural-grade materials</li>
                      <li>• Weather zone specifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Weather-Resistant Installation</h3>
                    <p className="text-gray-700 mb-3">
                      Our installation teams use enhanced attachment methods and sealing techniques designed for extreme weather zones, ensuring repairs can withstand future hailstorms and High Plains winds.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Enhanced attachment systems</li>
                      <li>• Weather-resistant sealing</li>
                      <li>• Extreme weather preparation</li>
                      <li>• Agricultural building considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Severe Weather Zone Monitoring</h3>
                    <p className="text-gray-700 mb-3">
                      Given Perryton's extreme weather exposure, we provide enhanced post-repair monitoring and proactive storm damage assessment to ensure continued protection through severe weather seasons.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Storm season monitoring</li>
                      <li>• Post-hail damage assessment</li>
                      <li>• Proactive maintenance scheduling</li>
                      <li>• Enhanced warranty support</li>
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
              Why Choose 5 Star for Your Perryton Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Wheat Country Expertise</h3>
                <p className="text-gray-700 mb-4">
                  We understand the unique demands of agricultural buildings in wheat country, from massive grain storage facilities to farm equipment shelters that require specialized roofing approaches.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 200+ Perryton area projects completed</li>
                  <li>• Grain facility roofing expertise</li>
                  <li>• Agricultural building specialization</li>
                  <li>• Farm operation coordination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Extreme Weather Specialists</h3>
                <p className="text-gray-700 mb-4">
                  Perryton's location in the most severe hail zone of the Texas Panhandle demands specialized expertise in impact-resistant materials and extreme weather damage assessment.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Extreme hail damage expertise</li>
                  <li>• Impact-resistant material specialization</li>
                  <li>• Severe weather zone experience</li>
                  <li>• Insurance claim advocacy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Agricultural Schedule Accommodation</h3>
                <p className="text-gray-700 mb-4">
                  We understand that agricultural operations in wheat country follow critical seasonal schedules. Our emergency response and scheduling accommodate the demands of farming cycles.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Harvest season scheduling</li>
                  <li>• Agricultural priority response</li>
                  <li>• Seasonal operation consideration</li>
                  <li>• Farm equipment protection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Ochiltree County Compliance</h3>
                <p className="text-gray-700 mb-4">
                  As the county seat, Perryton requires specialized knowledge of local building codes, government building requirements, and rural property considerations throughout Ochiltree County.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• County building code expertise</li>
                  <li>• Government facility compliance</li>
                  <li>• Rural property specialization</li>
                  <li>• Municipal building experience</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Perryton and Ochiltree County
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                From our Amarillo headquarters, we serve Perryton and the broader Ochiltree County wheat production region, including agricultural, residential, and government properties:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Perryton</h4>
                  <p className="text-sm text-gray-600">County Seat & Center</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Booker</h4>
                  <p className="text-sm text-gray-600">12 miles east</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Waka</h4>
                  <p className="text-sm text-gray-600">15 miles south</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Farnsworth</h4>
                  <p className="text-sm text-gray-600">18 miles northwest</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-2">Ochiltree County Wheat District</h4>
                <p className="text-gray-700">
                  We serve the extensive wheat production operations throughout Ochiltree County, including grain elevators, storage facilities, and farm buildings that support the region's agricultural economy.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton property owners. Expert roof repair with comprehensive warranties and insurance claim assistance.
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
