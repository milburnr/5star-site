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
  alternates: { canonical: 'https://5starroofingpros.com/roof-inspections-snyder/' },
  title: "Roof Inspections Snyder TX | 5 Star Commercial Roofing",
  description: "Professional roof inspections in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsSnyderPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Roof Inspections",
                      "url": "/roof-inspections/"
              },
              {
                      "name": "Snyder",
                      "url": "/roof-inspections-snyder/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-snyder/#localbusiness",
        "name": "5 Star Commercial Roofing - Snyder Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.7179, "longitude": -100.9176 },
        "url": "https://5starroofingpros.com/roof-inspections-snyder/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas", "name": "Snyder", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Snyder, TX. Free inspections, insurance claim assistance, prompt response.",
        "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
      }) }} />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roof Inspections",
            "provider": {
              "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
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
              "name": "Snyder",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Professional roof inspections in Snyder TX. West Texas experiences 7-9 hailstorms annually."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-20-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Roof Inspections in <span className="text-brand-gold-light">Snyder</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                West Texas Roof Inspections Experts
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Professional roof inspections in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041
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
                  10+
                </div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">24/7</div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
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
              Snyder's Roof Inspections Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Snyder's location in Scurry County creates unique roofing challenges. The West Texas experiences 7-9 hailstorms annually, sustained high winds, extreme temperature fluctuations, and severe weather conditions. Your roofing system must withstand these demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, 5 Star Commercial Roofing has protected properties throughout Snyder and Scurry County with premium materials and expert installation. From properties near Scurry County Museum to buildings throughout Snyder, we understand West Texas weather patterns, local building codes, and the specific needs of Scurry County property owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Snyder, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-100.92!3d32.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sSnyder%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Snyder, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Comprehensive Roof Inspection Services for West Texas Properties
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Storm Damage Detection</h3>
                <p className="text-gray-700 leading-relaxed">
                  West Texas supercells and hailstorms can cause subtle damage that worsens over time. Our certified inspectors use advanced technology including thermal imaging, moisture meters, and electronic leak detection to identify hidden damage that could lead to expensive failures.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Preventive Maintenance Planning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Regular inspections prevent small issues from becoming major repairs. Our comprehensive assessment identifies maintenance needs, recommends improvement priorities, and develops customized maintenance schedules for Scurry County's challenging climate conditions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Insurance Documentation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Proper documentation supports insurance claims and warranty compliance. Our detailed inspection reports include high-resolution photography, precise measurements, and professional assessments that insurance adjusters and warranty administrators accept without question.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Energy Efficiency Analysis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rising energy costs make roof performance critical. Our inspections evaluate insulation effectiveness, air leakage, thermal bridging, and reflective surface condition to identify opportunities for energy savings and improved building comfort.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-teal-50 to-blue-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Advanced Inspection Technology
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚁</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Drone Surveys</h3>
                <p className="text-gray-700">
                  Our professional drone pilots conduct comprehensive aerial surveys that provide detailed imagery of roof conditions, damage assessment, and safety documentation without putting inspectors at risk on dangerous roof areas.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Thermal Imaging</h3>
                <p className="text-gray-700">
                  Advanced thermal cameras detect moisture intrusion, insulation defects, and energy loss patterns invisible to standard visual inspection. This technology identifies problems before they cause visible damage to your building.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Electronic Leak Detection</h3>
                <p className="text-gray-700">
                  Specialized electronic equipment pinpoints the exact location of membrane breaches and water intrusion points. This precise detection eliminates guesswork and ensures repairs target actual problems rather than symptoms.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">Inspection Technology Benefits</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">100%</div>
                  <div className="text-sm text-gray-600">Roof Coverage</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">4K</div>
                  <div className="text-sm text-gray-600">Photo Resolution</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">±1°F</div>
                  <div className="text-sm text-gray-600">Thermal Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-2">24hr</div>
                  <div className="text-sm text-gray-600">Report Delivery</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Detailed Inspection Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Pre-Inspection Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team reviews property records, previous inspection reports, and local weather history to understand your roof's background. We coordinate access requirements, safety protocols, and any special considerations for agricultural or industrial properties common in Scurry County.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Exterior Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct thorough exterior inspection using drones and direct access where safe. This includes membrane condition, fastener integrity, flashing systems, drainage components, and equipment mounting areas. Every detail is photographed and documented with GPS coordinates.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Interior Investigation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Interior inspection reveals moisture intrusion, insulation performance, and structural conditions. We use moisture meters, thermal imaging, and visual assessment to identify problems not visible from the exterior. This step is crucial for agricultural buildings with hay storage or livestock areas.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Technical Analysis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our certified inspectors analyze findings against manufacturer specifications, local building codes, and industry standards. We evaluate storm damage potential, energy efficiency opportunities, and prioritize recommendations based on risk assessment and budget considerations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Comprehensive Reporting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Within 24 hours, you receive a detailed inspection report with high-resolution photos, thermal images, priority rankings, and cost estimates. Our reports meet insurance and warranty requirements while providing clear guidance for property management decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Roof Inspection Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="inspection-frequency" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How often should commercial roofs be inspected in West Texas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  We recommend bi-annual inspections (spring and fall) for all commercial properties in West Texas, with additional post-storm inspections after severe weather events. The intense UV exposure, temperature extremes, and frequent severe weather in Scurry County accelerate roof aging and require more frequent monitoring than milder climates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="storm-damage-detection" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can inspections detect storm damage that's not visible from the ground?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. Our drone surveys and thermal imaging detect membrane punctures, fastener loosening, and impact damage invisible from ground level. Hail damage, in particular, can cause micro-fractures and membrane bruising that only show up under thermal analysis or close inspection. Early detection prevents these minor issues from becoming major leaks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="agricultural-considerations" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Do agricultural buildings require different inspection approaches?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, agricultural buildings present unique challenges including chemical exposure from fertilizers, moisture from livestock areas, and heavy equipment loads. Our agricultural inspections evaluate ventilation adequacy, chemical resistance, and structural capacity while working around operational requirements like harvest schedules and livestock care.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="energy-assessment" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Do roof inspections include energy efficiency evaluation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Our comprehensive inspections include thermal imaging analysis that reveals energy loss patterns, insulation defects, and air leakage points. This information helps property owners reduce energy costs and improve building comfort. We often identify energy savings opportunities that pay for roof improvements over time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="insurance-benefits" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do regular inspections help with insurance claims?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Regular inspection reports establish baseline roof conditions and document proper maintenance, which insurance companies value when processing claims. Our detailed documentation helps distinguish new storm damage from pre-existing conditions, often resulting in better claim settlements. Some insurers offer premium discounts for properties with regular professional inspections.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cost-savings" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do inspections save money in the long run?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Regular inspections identify small problems before they become expensive failures. A $200 inspection can prevent a $20,000 roof replacement by catching issues early. Our maintenance recommendations extend roof life, reduce energy costs, and prevent water damage that can cost tens of thousands in interior repairs and business interruption.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Properties We Inspect Throughout Scurry County
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🌾</div>
                <h3 className="font-bold text-brand-brown mb-2">Agricultural Facilities</h3>
                <p className="text-gray-600 text-sm">Grain storage, livestock barns, equipment buildings, processing facilities</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold text-brand-brown mb-2">Educational Buildings</h3>
                <p className="text-gray-600 text-sm">Schools, colleges, libraries, training centers</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-bold text-brand-brown mb-2">Healthcare Facilities</h3>
                <p className="text-gray-600 text-sm">Hospitals, clinics, medical offices, assisted living</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-bold text-brand-brown mb-2">Commercial Properties</h3>
                <p className="text-gray-600 text-sm">Retail centers, office buildings, restaurants, banks</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold text-brand-brown mb-2">Industrial Buildings</h3>
                <p className="text-gray-600 text-sm">Manufacturing, processing plants, warehouses, distribution</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-brand-brown mb-2">Government Buildings</h3>
                <p className="text-gray-600 text-sm">Municipal offices, courthouse, emergency services, utilities</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From historic downtown Snyder buildings to modern agricultural operations throughout the Rolling Plains, we provide comprehensive roof inspections that protect property investments and ensure optimal building performance.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-blue-50 p-12 rounded-3xl border border-blue-200">
            <h2 className="text-4xl font-bold mb-8 text-blue-700 text-center">
              Seasonal Inspection Schedule for West Texas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Spring Inspection (March-April)</h3>
                <p className="text-gray-700 mb-4">
                  Pre-storm season inspection to identify and repair winter damage before severe weather arrives.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Winter freeze damage assessment</li>
                  <li>• Storm preparation checklist</li>
                  <li>• Drainage system cleaning</li>
                  <li>• Fastener tightening and replacement</li>
                  <li>• Emergency contact information update</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Fall Inspection (October-November)</h3>
                <p className="text-gray-700 mb-4">
                  Post-storm season inspection to assess summer weather damage and prepare for winter.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Storm season damage evaluation</li>
                  <li>• UV degradation assessment</li>
                  <li>• Winter preparation measures</li>
                  <li>• Insulation performance check</li>
                  <li>• Annual maintenance planning</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="tel:8066226041" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-block">
                Schedule Your Seasonal Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Snyder Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional roof inspections for West Texas properties. Our advanced technology and local expertise help you maintain, protect, and maximize the performance of your roofing investment. Trust Scurry County's inspection specialists.
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
