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
  title: "Roof Repair Canyon TX | Same-Day Service | Free Inspection",
  description: "Expert roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
};

export default function RoofRepairCanyonPage() {
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
                      "name": "Canyon",
                      "url": "/roof-repair-canyon/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-repair-canyon/#localbusiness",
        "name": "5 Star Commercial Roofing - Canyon Roof Repair",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 34.9803, "longitude": -101.9188 },
        "url": "https://5starroofingpros.com/roof-repair-canyon/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas", "name": "Canyon", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof repair services in Canyon, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              "name": "Canyon",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041"
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
                "name": "How much does roof repair cost in Canyon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you repair my leaking roof in Canyon?",
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
                "name": "What are the most common roof repairs in Canyon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Canyon, the most common repairs include hail-damaged shingles from the area's 8-10 annual hailstorms, wind-lifted shingles from High Plains winds near Palo Duro Canyon, failed flashing around chimneys and vents, and leak repairs. The unique weather patterns near the canyon create specific damage we repair regularly."
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
                Roof Repair in <span className="text-brand-gold-light">Canyon</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Fast, Professional Repairs | Same-Day Service Available
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
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
              Canyon's Roof Repair Specialists
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
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does roof repair cost in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair my leaking roof in Canyon?
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
                  What are the most common roof repairs in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Canyon, the most common repairs include hail-damaged shingles from the area's 8-10 annual hailstorms, wind-lifted shingles from High Plains winds near Palo Duro Canyon, failed flashing around chimneys and vents, and leak repairs. The unique weather patterns near the canyon create specific damage we repair regularly.
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
              Canyon Roof Repair Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">University District Specialist</h3>
                <p className="text-gray-700 mb-4">
                  Canyon is home to West Texas A&M University, creating unique roofing needs for student housing, faculty residences, and university facilities. We specialize in both residential and institutional roofing projects throughout the university district.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Student housing roof repairs</li>
                  <li>• Faculty residential services</li>
                  <li>• Commercial property maintenance</li>
                  <li>• Emergency response for campus area</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Palo Duro Canyon Wind Patterns</h3>
                <p className="text-gray-700 mb-4">
                  Canyon's proximity to Palo Duro Canyon creates unique wind patterns and microclimates that affect roofing systems. Our team understands how canyon geography influences weather damage and material selection.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Wind-channel damage assessment</li>
                  <li>• Canyon-specific weather resistance</li>
                  <li>• Microclimate-adapted materials</li>
                  <li>• Geographic hazard evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Historic Downtown Preservation</h3>
                <p className="text-gray-700 mb-4">
                  Canyon's historic downtown district requires specialized attention to preserve architectural integrity while upgrading roofing systems. We balance historical preservation with modern performance standards.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Historical building compliance</li>
                  <li>• Period-appropriate materials</li>
                  <li>• Preservation society coordination</li>
                  <li>• Code-compliant upgrades</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Agricultural Community Support</h3>
                <p className="text-gray-700 mb-4">
                  Canyon serves the surrounding agricultural community with ranching and farming operations. We provide specialized roofing services for agricultural buildings, barns, and rural residential properties.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Agricultural building repairs</li>
                  <li>• Ranch and farm structures</li>
                  <li>• Rural residential services</li>
                  <li>• Large-span roof systems</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Canyon's Unique Geographic Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🏔️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Canyon Geography</h3>
                <p className="text-gray-700">
                  Located near Palo Duro Canyon, America's second-largest canyon, creating unique wind funneling effects and microclimate variations that impact roofing system performance and longevity.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">University Environment</h3>
                <p className="text-gray-700">
                  West Texas A&M University brings diverse architectural styles and high-density housing that requires specialized roofing approaches for both historic and modern campus buildings.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">🌾</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Hub</h3>
                <p className="text-gray-700">
                  Canyon serves as a regional agricultural center, requiring roofing solutions for diverse building types from residential homes to large agricultural facilities and grain storage structures.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Local Weather Patterns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Canyon Wind Effects</h4>
                  <p className="text-gray-700 mb-4">
                    Palo Duro Canyon creates wind-tunneling effects that can amplify High Plains winds from 60+ mph to even higher velocities. These concentrated wind patterns create unique stress on roofing systems not found in other Panhandle communities.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Hail Concentration</h4>
                  <p className="text-gray-700 mb-4">
                    Canyon's location in "Hail Alley" means 8-10 significant hailstorms annually, with the canyon geography sometimes creating hail size variations across the city. Our damage assessment accounts for these local patterns.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Our Canyon Roof Repair Process
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Rapid Response Assessment</h3>
                    <p className="text-gray-700 mb-3">
                      Our Canyon service team provides rapid response to emergency calls, understanding that university district timing is critical for students and faculty. We prioritize same-day emergency response and work around academic schedules when possible.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• University district priority response</li>
                      <li>• Academic calendar consideration</li>
                      <li>• Student housing emergency protocols</li>
                      <li>• Faculty and staff accommodation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Geographic-Specific Inspection</h3>
                    <p className="text-gray-700 mb-3">
                      Our inspectors understand how Canyon's proximity to Palo Duro Canyon affects wind patterns and weather damage. We evaluate not just current damage but also geographic risk factors unique to this location.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Canyon wind pattern analysis</li>
                      <li>• Microclimate damage assessment</li>
                      <li>• Historic building evaluation</li>
                      <li>• University code compliance check</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Customized Material Selection</h3>
                    <p className="text-gray-700 mb-3">
                      Based on Canyon's unique geographic challenges, we recommend materials specifically rated for canyon wind effects and high-velocity impact zones. Historical district projects may require special architectural considerations.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• High-wind zone materials</li>
                      <li>• Historical preservation compliance</li>
                      <li>• University aesthetic standards</li>
                      <li>• Agricultural building solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Community-Focused Installation</h3>
                    <p className="text-gray-700 mb-3">
                      Our installation teams work with Canyon's community character in mind, minimizing disruption to university activities and respecting the needs of both residential and agricultural properties throughout the area.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Academic schedule coordination</li>
                      <li>• Residential neighborhood consideration</li>
                      <li>• Agricultural operation accommodation</li>
                      <li>• Historic district protocols</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Long-Term Performance Monitoring</h3>
                    <p className="text-gray-700 mb-3">
                      Given Canyon's unique weather patterns, we provide extended monitoring services to ensure repairs perform as expected under local conditions. Our warranty service includes regular check-ins during severe weather seasons.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Seasonal performance monitoring</li>
                      <li>• Storm damage follow-up</li>
                      <li>• Warranty compliance tracking</li>
                      <li>• Preventive maintenance scheduling</li>
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
              Why Choose 5 Star for Your Canyon Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">University District Experience</h3>
                <p className="text-gray-700 mb-4">
                  We've served West Texas A&M University area properties for over a decade, understanding the unique needs of university housing, faculty residences, and campus-adjacent commercial properties.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 350+ Canyon area projects completed</li>
                  <li>• University district specialization</li>
                  <li>• Student housing expertise</li>
                  <li>• Academic calendar accommodation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Canyon Geographic Expertise</h3>
                <p className="text-gray-700 mb-4">
                  Our team understands how Palo Duro Canyon geography affects local weather patterns and building performance. We factor these unique conditions into every repair recommendation and material selection.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Canyon wind pattern expertise</li>
                  <li>• Microclimate damage assessment</li>
                  <li>• Geographic risk evaluation</li>
                  <li>• Location-specific solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Historical Preservation</h3>
                <p className="text-gray-700 mb-4">
                  Canyon's historic downtown district requires specialized knowledge of preservation standards and period-appropriate materials. We balance historical integrity with modern performance requirements.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Historic building compliance</li>
                  <li>• Preservation society coordination</li>
                  <li>• Period-appropriate materials</li>
                  <li>• Architectural integrity maintenance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Agricultural Community Support</h3>
                <p className="text-gray-700 mb-4">
                  We serve Canyon's broader agricultural community with specialized services for farming and ranching operations, understanding the unique requirements of agricultural buildings and rural properties.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Agricultural building expertise</li>
                  <li>• Ranch and farm services</li>
                  <li>• Large-span roof systems</li>
                  <li>• Rural property specialization</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Canyon and Randall County
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                From our Amarillo headquarters, we serve Canyon and the broader Randall County area, including West Texas A&M University district, historic downtown, and surrounding agricultural communities:
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Canyon</h4>
                  <p className="text-sm text-gray-600">City Center & WTAMU</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Buffalo Lake</h4>
                  <p className="text-sm text-gray-600">10 miles south</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Umbarger</h4>
                  <p className="text-sm text-gray-600">15 miles southwest</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-brand-brown">Happy</h4>
                  <p className="text-sm text-gray-600">20 miles east</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 rounded-xl">
                <h4 className="text-lg font-bold text-brand-brown mb-2">Palo Duro Canyon State Park Area</h4>
                <p className="text-gray-700">
                  We also serve properties near Palo Duro Canyon State Park, understanding the unique environmental challenges and building requirements for this scenic but challenging geographic area.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert roof repair with comprehensive warranties and insurance claim assistance.
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
