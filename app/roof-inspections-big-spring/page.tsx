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
  title: 'Roof Inspections Big Spring TX | 5 Star Roofing',
  description: "Expert roof inspections in Big Spring TX. West Texas experiences 7-9 hailstorms annually. Complete insurance documentation, storm damage assessment, and preventive maintenance. Free inspections. Call (806) 622-6041",
};

export default function RoofInspectionsBigSpringPage() {
  return (
    <>
      <Breadcrumb items={[
        {
          "name": "Home",
          "url": "/"
        },
        {
          "name": "Roof Inspections",
          "url": "/roof-inspections/"
        },
        {
          "name": "Big Spring",
          "url": "/roof-inspections-big-spring/"
        }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://5starroofingpros.com/roof-inspections-big-spring/#localbusiness",
        "name": "5 Star Commercial Roofing - Big Spring Roof Inspections",
        "image": "https://5starroofingpros.com/images/5star-logo.png",
        "telephone": "(806) 622-6041",
        "email": "info@5starroofingpros.com",
        "priceRange": "$",
        "address": { "@type": "PostalAddress", "streetAddress": "2909 S Western St", "addressLocality": "Amarillo", "addressRegion": "TX", "postalCode": "79109", "addressCountry": "US" },
        "geo": { "@type": "GeoCoordinates", "latitude": 32.2504, "longitude": -101.4787 },
        "url": "https://5starroofingpros.com/roof-inspections-big-spring/",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
        "areaServed": { "@type": "City", "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas", "name": "Big Spring", "containedInPlace": { "@type": "State", "name": "Texas" } },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
        "description": "Expert roof inspections services in Big Spring, TX. Free inspections, insurance claim assistance, 24/7 emergency response.",
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
              },
              "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "name": "Big Spring",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Expert roof inspections in Big Spring TX. Complete insurance documentation, storm damage assessment, and preventive maintenance."
          })
        }}
      />

      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-perryton-24-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/75 to-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Professional Roof Inspections in <span className="text-brand-gold-light">Big Spring, TX</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Complete Storm Damage Assessment & Insurance Documentation
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert roof inspections in Big Spring, Texas. West Texas experiences 7-9 severe hailstorms annually, making professional roof inspections critical for property protection and insurance claims. Complete inspection reports with detailed documentation.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">📞 Call (806) 622-6041</a>
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
                <div className="text-4xl font-bold text-brand-gold mb-3">15+</div>
                <div className="text-brand-brown font-semibold text-lg">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">100%</div>
                <div className="text-brand-brown font-semibold text-lg">Insurance Approved</div>
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
              Big Spring's Premier Roof Inspection Specialists
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Big Spring, Texas sits in the heart of Howard County where West Texas weather creates some of the most challenging roofing conditions in the United States. Located at the intersection of Highway 87 and Interstate 20, Big Spring experiences extreme weather patterns that demand professional roof inspections to protect your investment and ensure insurance compliance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The West Texas climate delivers 7-9 severe hailstorms annually, sustained winds exceeding 60 mph, extreme temperature fluctuations from below freezing to over 100°F, and sudden severe weather events that can cause immediate and long-term roofing damage. Professional roof inspections are not just recommended in Big Spring—they're essential for property protection and insurance coverage maintenance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2008, 5 Star Commercial Roofing has provided comprehensive roof inspection services throughout Big Spring and Howard County. Our certified inspectors understand local weather patterns, building codes, insurance requirements, and the specific challenges facing properties from downtown Big Spring near the historic Spring to residential areas around Big Spring State Park.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Comprehensive Roof Inspection Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🔍 Exterior Inspection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Shingle Assessment:</strong> Granule loss, cracking, curling, missing shingles</li>
                  <li>• <strong>Hail Damage Detection:</strong> Impact marks, bruising, exposed mat</li>
                  <li>• <strong>Wind Damage Evaluation:</strong> Lifted tabs, blown-off shingles, edge damage</li>
                  <li>• <strong>Flashing Inspection:</strong> Chimney, vent, skylight, and valley flashing</li>
                  <li>• <strong>Gutter System:</strong> Damage, debris accumulation, proper drainage</li>
                  <li>• <strong>Structural Assessment:</strong> Sagging, settlement, support issues</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">🏠 Interior Inspection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Attic Examination:</strong> Water stains, mold, insulation damage</li>
                  <li>• <strong>Ceiling Assessment:</strong> Discoloration, sagging, water marks</li>
                  <li>• <strong>Ventilation Evaluation:</strong> Proper airflow, moisture control</li>
                  <li>• <strong>Insulation Check:</strong> Damage, compression, wet insulation</li>
                  <li>• <strong>Structural Integrity:</strong> Rafters, trusses, decking condition</li>
                  <li>• <strong>Electrical Systems:</strong> Water damage to wiring, safety concerns</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What to Look For: Critical Damage Indicators
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🌨️ Hail Damage Signs</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Shingle Damage</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Circular impact marks</li>
                    <li>• Granule loss patterns</li>
                    <li>• Exposed black substrate</li>
                    <li>• Bruising without granule loss</li>
                    <li>• Cracked or split shingles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Metal Components</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Dented gutters and downspouts</li>
                    <li>• Damaged vent covers</li>
                    <li>• Impacted flashing</li>
                    <li>• Air conditioning unit damage</li>
                    <li>• Satellite dish impacts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Soft Materials</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Damaged window screens</li>
                    <li>• Chipped paint on siding</li>
                    <li>• Damaged outdoor furniture</li>
                    <li>• Landscape damage</li>
                    <li>• Pool equipment impacts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">💨 Wind Damage Indicators</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Visible Wind Damage</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Lifted Shingle Tabs:</strong> Wind gets under shingles and lifts them</li>
                    <li>• <strong>Missing Shingles:</strong> Complete removal of individual shingles</li>
                    <li>• <strong>Exposed Nail Heads:</strong> Shingles sliding down from wind uplift</li>
                    <li>• <strong>Torn or Ripped Shingles:</strong> Partial removal creating jagged edges</li>
                    <li>• <strong>Damaged Ridge Caps:</strong> Wind typically hits ridge areas first</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Subtle Wind Damage</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mat Exposure:</strong> Granules blown off without visible impact</li>
                    <li>• <strong>Seal Breakage:</strong> Shingle adhesive strips compromised</li>
                    <li>• <strong>Edge Lifting:</strong> Perimeter shingles showing uplift signs</li>
                    <li>• <strong>Debris Accumulation:</strong> Foreign objects embedded in roof</li>
                    <li>• <strong>Asymmetrical Damage:</strong> More damage on windward sides</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Insurance Claim Preparation & Documentation
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">📋 Complete Documentation Package</h3>
              <p className="text-lg leading-relaxed">
                Our comprehensive inspection reports provide all documentation required for successful insurance claims. We work directly with insurance adjusters to ensure your claim is properly documented and fairly assessed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📸 Visual Documentation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• High-resolution damage photographs</li>
                  <li>• Before and after storm comparisons</li>
                  <li>• Aerial drone inspection imagery</li>
                  <li>• Close-up detail shots of damage</li>
                  <li>• GPS-tagged photo locations</li>
                  <li>• Video documentation of extensive damage</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">📄 Written Reports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Detailed damage assessments</li>
                  <li>• Measurement documentation</li>
                  <li>• Material identification and specifications</li>
                  <li>• Cost estimates for repairs/replacement</li>
                  <li>• Building code compliance notes</li>
                  <li>• Weather event correlation data</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-800">⚠️ Insurance Claim Tips for Big Spring Property Owners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-amber-700">Immediate Actions</h4>
                  <ul className="space-y-1 text-amber-700 text-sm">
                    <li>• Document the weather event date and time</li>
                    <li>• Take photos before any temporary repairs</li>
                    <li>• Contact your insurance company within 24-48 hours</li>
                    <li>• Schedule professional inspection immediately</li>
                    <li>• Keep receipts for temporary protective measures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-amber-700">Working with Adjusters</h4>
                  <ul className="space-y-1 text-amber-700 text-sm">
                    <li>• Have your professional inspection report ready</li>
                    <li>• Request that your contractor be present during inspection</li>
                    <li>• Don't accept initial settlement without review</li>
                    <li>• Understand depreciation vs. replacement cost coverage</li>
                    <li>• Know your policy deductible and coverage limits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Big Spring Weather Patterns & Roofing Challenges
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">🌪️ West Texas Weather Impact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Seasonal Weather Patterns</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-400 pl-4">
                      <strong className="text-red-600">Summer (June-August)</strong>
                      <p className="text-gray-600 text-sm mt-1">Severe hailstorms, temperatures exceeding 100°F, UV damage, thermal expansion stress</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <strong className="text-blue-600">Fall (September-November)</strong>
                      <p className="text-gray-600 text-sm mt-1">High winds, temperature fluctuations, early freeze/thaw cycles</p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <strong className="text-gray-600">Winter (December-February)</strong>
                      <p className="text-gray-600 text-sm mt-1">Ice storms, freeze/thaw damage, snow loading, thermal contraction</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <strong className="text-green-600">Spring (March-May)</strong>
                      <p className="text-gray-600 text-sm mt-1">Tornado season, severe thunderstorms, heavy rainfall, rapid temperature changes</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Hailstorm Statistics</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded">
                      <strong className="text-red-700">Peak Hail Season:</strong>
                      <p className="text-red-600 text-sm">April through June, with May being the most active month</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded">
                      <strong className="text-orange-700">Average Hail Size:</strong>
                      <p className="text-orange-600 text-sm">Quarter to golf ball size, with larger hail (2"+) occurring 2-3 times annually</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded">
                      <strong className="text-yellow-700">Storm Duration:</strong>
                      <p className="text-yellow-600 text-sm">Most hailstorms last 10-30 minutes but can cause severe damage</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <strong className="text-purple-700">Wind Speeds:</strong>
                      <p className="text-purple-600 text-sm">Straight-line winds of 60-80 mph common during storms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Why Choose 5 Star Commercial Roofing for Big Spring Inspections?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Local Expertise</h3>
                <p className="text-gray-600">Over 15 years serving Big Spring and Howard County. We understand local weather patterns, building codes, and insurance requirements specific to West Texas.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Advanced Technology</h3>
                <p className="text-gray-600">Drone inspections, thermal imaging, moisture detection, and digital documentation ensure no damage goes undetected.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Partnership</h3>
                <p className="text-gray-600">We work directly with all major insurance companies and understand the claims process to maximize your coverage.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="cost">
                <AccordionTrigger className="text-xl font-semibold">
                  How much does a roof inspection cost in Big Spring?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We provide free roof inspections for Big Spring property owners, especially after severe weather events. Our comprehensive inspection includes detailed documentation, photography, and a written report. If repairs are needed, the inspection cost is waived when you choose us for the work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="frequency">
                <AccordionTrigger className="text-xl font-semibold">
                  How often should I have my roof inspected in West Texas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We recommend annual inspections for Big Spring properties due to severe weather frequency. Additionally, schedule inspections after any major storm event (hail, high winds, or severe thunderstorms). Spring inspections before storm season can identify vulnerabilities, while fall inspections assess summer storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="insurance">
                <AccordionTrigger className="text-xl font-semibold">
                  Will my insurance company accept your inspection report?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, our certified inspectors provide detailed reports that meet all insurance company requirements. We're approved by all major insurance carriers and regularly work with adjusters throughout Howard County. Our reports include photographic evidence, damage measurements, and cost estimates that support successful claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timing">
                <AccordionTrigger className="text-xl font-semibold">
                  How soon after a storm should I schedule an inspection?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Contact us within 24-48 hours after any severe weather event. Early inspection documentation is crucial for insurance claims and prevents further damage. We offer emergency inspection services and can usually schedule within 24 hours of your call during storm seasons.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="signs">
                <AccordionTrigger className="text-xl font-semibold">
                  What are signs I need a roof inspection immediately?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Schedule immediate inspection if you notice: water stains on ceilings, missing or damaged shingles, granules in gutters, dents on metal surfaces after storms, cracked or curling shingles, damaged flashing around chimneys or vents, or any interior leaks during rain. Don't wait—early detection prevents costly damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documentation">
                <AccordionTrigger className="text-xl font-semibold">
                  What documentation will I receive from the inspection?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  You'll receive a comprehensive inspection report including: high-resolution photographs of all damage, detailed written assessment, measurements and specifications, cost estimates for repairs/replacement, material recommendations, timeline for necessary work, and insurance claim support documentation. All reports are digital and available within 24 hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Big Spring, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d-101.47!3d32.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f91a92e0d0e0e0%3A0x0!2sBig%20Spring%2C%20TX!5e0!3m2!1sen!2sus!4v1736532000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Big Spring, TX Location Map"
              ></iframe>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Big Spring Service Areas</h3>
              <p className="text-lg text-gray-700 mb-4">
                We proudly serve all areas of Big Spring and Howard County, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• Downtown Big Spring</li>
                  <li>• Scenic Mountain area</li>
                  <li>• Big Spring State Park vicinity</li>
                  <li>• Highway 87 corridor</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Interstate 20 properties</li>
                  <li>• Airport Road area</li>
                  <li>• Comanche Trail Park region</li>
                  <li>• McMahon-Wrinkle Airpark</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Industrial areas</li>
                  <li>• Residential neighborhoods</li>
                  <li>• Commercial districts</li>
                  <li>• Rural Howard County properties</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Big Spring Property Today</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Don't wait for visible damage to appear. With West Texas experiencing 7-9 severe hailstorms annually, professional roof inspections are your first line of defense. Our comprehensive inspections provide complete documentation for insurance claims and peace of mind for your property investment.
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