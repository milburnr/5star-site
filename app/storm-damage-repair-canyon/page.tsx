import { FadeIn } from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Star } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/storm-damage-repair-canyon/" },
  title: "Storm Damage Repair Canyon TX | 5 Star Roofing",
  description:
    "Storm damage roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Storm Damage Repair Canyon TX | 5 Star Roofing",
    description:
      "Storm damage roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/storm-damage-repair-canyon/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-storm.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function StormDamageRepairCanyonPage() {
  return (
    <>
      {" "}      {/* Sticky Contact Bar */}
      <StickyContactBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/storm-damage-repair-canyon/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-storm.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 34.9803, longitude: -101.9188 },
            url: "https://5starroofingpros.com/storm-damage-repair-canyon/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              name: "Canyon",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            description:
              "Expert storm damage repair services in Canyon, TX. Free inspections, insurance claim assistance",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Storm Damage Roof Repair",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2909 S Western St",
                addressLocality: "Amarillo",
                addressRegion: "TX",
                postalCode: "79109",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.1768,
                longitude: -101.859,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
              parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            },
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              name: "Canyon",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert storm damage roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How quickly can you respond to storm damage emergencies in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We schedule storm-damage documentation across the Texas Panhandle including Canyon once conditions are safe. We are not an emergency-dispatch service — our value is documentation quality, insurance-claim follow-through, and Class 4 impact-resistant restoration, not minute-or-hour response time. Documentation and weather-protective measures are scheduled based on damage severity once it is safe for crews to be on a roof.",
                },
              },
              {
                "@type": "Question",
                name: "Will insurance cover my storm damage repairs in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most homeowner and commercial policies cover storm damage including wind, hail, and rain infiltration from covered perils. Coverage typically includes mitigation costs (weatherproof sheeting, temporary repairs) plus complete restoration. We document all damage professionally, work directly with adjusters, and handle supplement requests for hidden damage discovered during repairs.",
                },
              },
              {
                "@type": "Question",
                name: "Should I tarp my roof myself or wait for professionals in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                },
              },
              {
                "@type": "Question",
                name: "How long does storm damage roof replacement take in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weatherproof sheeting and temporary repairs are typically scheduled within 1-2 business days. Complete roof replacement typically occurs 2-4 weeks after insurance approval, depending on material availability and scheduling. Actual installation takes 1-3 days for most homes. During major storm events affecting Canyon, timelines may extend due to high demand—early claims get priority scheduling.",
                },
              },
              {
                "@type": "Question",
                name: "What should I do immediately after storm damage in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "(1) Ensure family safety—never go on damaged roofs. (2) Document visible damage with photos/video from the ground. (3) Call us for professional inspection—we handle weatherproof sheeting and temporary repairs. (4) Move valuables away from leak areas. (5) DO NOT make permanent repairs before insurance inspection—this can void coverage. We coordinate the entire process from initial assessment through final restoration.",
                },
              },
            ],
          }),
        }}
      />
            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="canyon"
        city="Canyon"
        service="Storm Damage Repair"
        h1="Storm Damage Repair in Canyon, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.webp"
      
      breadcrumbItems={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Storm Damage Repair",
            url: "/storm-damage-repair/",
          },
          {
            name: "Canyon",
            url: "/storm-damage-repair-canyon/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Storm Damage Repair for homes and businesses in Canyon, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Canyon as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Materials and systems: UL 2218 Class 4 hail-rated options on every replacement, plus full insurance documentation support.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3"></div>
                <div className="text-brand-brown font-semibold text-lg">Quick Scheduling</div>
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
                <div className="text-3xl mb-3">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </div>
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
              What Does Canyon's Storm Damage Repair Specialists Look Like?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon's location in the Texas Panhandle creates unique roofing challenges. Near Palo
              Duro Canyon, home to West Texas A&M University, this Randall County seat faces
              distinctive weather patterns. The canyon's geography creates microclimates and wind
              channeling effects that intensify storm damage. Properties from the WTAMU campus to
              historic downtown Canyon and residential areas near Canyon Country Club experience
              amplified weather conditions requiring specialized storm damage expertise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 350+ Canyon properties with premium materials engineered
              for Panhandle weather. From student housing near West Texas A&M to historic buildings
              downtown and modern subdivisions, we understand Canyon's diverse building stock and
              unique weather challenges. We work seamlessly with property owners, handle complete
              insurance claims, and understand Randall County building codes. Most homeowners pay
              only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-slate-50 to-amber-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Palo Duro Canyon's Weather Impact on Storm Damage Look Like?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Canyon Wind Channeling Effects
                </h3>
                <p className="text-gray-700 mb-4">
                  The famous Palo Duro Canyon creates unique wind patterns that amplify storm damage
                  in Canyon. As storms move across the High Plains, the canyon geography channels
                  and accelerates winds, creating turbulent airflow that can exceed normal storm
                  wind speeds by 20-30%. This channeling effect particularly impacts properties on
                  the canyon's east and west rims.
                </p>
                <p className="text-gray-700">
                  West Texas A&M University's elevated campus location and areas near Canyon Country
                  Club face increased exposure to these wind effects. Our installations account for
                  these localized wind patterns with enhanced fastening systems and aerodynamic
                  design features.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Microclimate Storm Formation
                </h3>
                <p className="text-gray-700 mb-4">
                  Palo Duro Canyon's 800-foot depth creates temperature differentials that can
                  trigger or intensify thunderstorm development. Cool air from the canyon floor
                  meets heated surface air from the surrounding plains, creating atmospheric
                  instability. This effect is strongest during late afternoon and early evening
                  hours.
                </p>
                <p className="text-gray-700">
                  These localized storm cells often produce more intense hail and damaging winds
                  than regional weather forecasts predict. Our repair crews monitor local
                  conditions and respond quickly when canyon-enhanced storms develop.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Storm Damage Patterns by Canyon Area Look Like?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-brand-gold-vibrant">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">WTAMU Campus Area</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Open campus on the Llano Estacado catches the full Texas Panhandle wind</li>
                  <li>• Large TPO and modified-bitumen flat roofs collect more hail per square</li>
                  <li>• Multi-story academic buildings create wind-load eddies at parapets</li>
                  <li>• Dense residence halls share continuous roof planes, multiplying damage scope</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Buildings around WTAMU benefit from UL 580 wind-rated edge metal and 6-nail
                  fastening on shingle systems. On flat roofs we specify mechanically fastened
                  TPO with welded seams or fully adhered PVC for parapet detail work.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-3 text-green-700">Historic Downtown Canyon</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Plank decking and original framing common in early-1900s Canyon buildings</li>
                  <li>• Historic district approvals before any visible material change</li>
                  <li>• Mix of low-slope built-up roofs and steeper standing-seam additions</li>
                  <li>• Tight Sixth Street setbacks limiting crane and dumpster placement</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Restoration work pairs traditional materials with modern underlayment and Class
                  4 impact-rated shingles or standing seam metal where the historic district
                  allows. We submit material samples with the application packet before tear-off.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold mb-3 text-orange-700">Canyon Rim Residential</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Palo Duro rim properties catch the full Texas Panhandle wind unbuffered</li>
                  <li>• Storm channels through the canyon, accelerating gusts at the rim line</li>
                  <li>• Mesquite and juniper debris driven into shingle granules</li>
                  <li>• HOAs that restrict shingle colors to maintain canyon view aesthetics</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Class 4 impact-rated architectural shingles from GAF, CertainTeed, or Owens
                  Corning come in earth tones approved by most canyon-rim HOAs. We pair the
                  shingle with a UL 580 wind assembly and synthetic underlayment for the gust
                  exposure typical along the rim.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Does Our Post-Storm Process Work in Canyon?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">
                  Campus Emergency Protocols
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Coordinated University Response</h4>
                      <p className="text-gray-600 text-sm">
                        We work directly with WTAMU facilities management to coordinate storm
                        repairs on campus buildings and student housing complexes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Student Safety Priority</h4>
                      <p className="text-gray-600 text-sm">
                        Housing protection focuses on residence halls and student apartments,
                        ensuring safe living conditions throughout the repair process.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Academic Continuity</h4>
                      <p className="text-gray-600 text-sm">
                        We schedule repairs to minimize disruption to academic schedules, working
                        around finals, move-in periods, and major university events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Insurance Coordination</h4>
                      <p className="text-gray-600 text-sm">
                        We handle both private property claims and university insurance requirements
                        with documentation meeting institutional standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">
                  Student Housing Specialization
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Multi-Unit Efficiency</h4>
                    <p className="text-gray-600 text-sm">
                      Continuous roof planes on WTAMU-area apartment complexes let one tear-off
                      cover multiple units, which keeps per-unit cost on architectural asphalt
                      shingle or TPO membrane work down compared to single-building jobs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Temporary Housing Support</h4>
                    <p className="text-gray-600 text-sm">
                      When a Canyon storm makes residence halls or off-campus apartments
                      uninhabitable, we coordinate temporary weather protection with property
                      managers and document the displacement timeline for the insurance file.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Budget-Conscious Solutions</h4>
                    <p className="text-gray-600 text-sm">
                      For student housing we typically spec a standard architectural asphalt
                      shingle from CertainTeed or Owens Corning with synthetic underlayment.
                      That meets Texas Panhandle wind requirements without the upgrade cost of
                      Class 4 impact-rated shingles.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Noise Management</h4>
                    <p className="text-gray-600 text-sm">
                      Tear-off and nail-gun work happens in mid-morning windows on WTAMU-area
                      jobs, scheduled around finals weeks and the late-night and weekend hours
                      when students are studying or sleeping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you respond to storm damage emergencies in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We schedule storm-damage documentation across the Texas Panhandle including Canyon
                  once conditions are safe. We are not an emergency-dispatch service — our value is
                  documentation quality, insurance-claim follow-through, and Class 4
                  impact-resistant restoration, not minute-or-hour response time. Documentation and
                  weather-protective measures are scheduled based on damage severity once it is safe
                  for crews to be on a roof.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover my storm damage repairs in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homeowner and commercial policies cover storm damage including wind, hail,
                  and rain infiltration from covered perils. Coverage typically includes mitigation
                  costs (weatherproof sheeting, temporary repairs) plus complete restoration. We document all
                  damage professionally, work directly with adjusters, and handle supplement
                  requests for hidden damage discovered during repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I tarp my roof myself or wait for professionals in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed"></AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does storm damage roof replacement take in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Weatherproof sheeting and temporary repairs are typically scheduled within 1-2 business days.
                  Complete roof replacement typically occurs 2-4 weeks after insurance approval,
                  depending on material availability and scheduling. Actual installation takes 1-3
                  days for most homes. During major storm events affecting Canyon, timelines may
                  extend due to high demand—early claims get priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What should I do immediately after storm damage in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  (1) Ensure family safety—never go on damaged roofs. (2) Document visible damage
                  with photos/video from the ground. (3) Call us for professional inspection—we
                  handle weatherproof sheeting and temporary repairs. (4) Move valuables away from leak areas. (5)
                  DO NOT make permanent repairs before insurance inspection—this can void coverage.
                  We coordinate the entire process from initial assessment through final
                  restoration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does Palo Duro Canyon affect storm damage in the area?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Palo Duro Canyon creates unique microclimate effects that can intensify storm
                  damage. The canyon channels winds, creating wind speeds 20-30% higher than
                  regional forecasts. Temperature differentials between the canyon floor and rim
                  trigger localized storm development. Properties near the canyon rim face maximum
                  exposure, while the university campus experiences enhanced wind shear effects. We
                  factor these geographic influences into all our Canyon area installations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work on West Texas A&M University buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we're experienced with university facilities and work directly with WTAMU
                  management on storm damage repairs. We understand academic schedules, coordinate
                  around university events, and meet institutional insurance requirements. Our team
                  handles everything from residence halls to academic buildings, ensuring student
                  safety while maintaining educational continuity. We also serve private student
                  housing throughout Canyon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Canyon's downtown historic buildings challenging for storm repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Downtown Canyon's historic buildings require specialized approaches that preserve
                  architectural character while providing modern storm protection. Many structures
                  have unique architectural features, older framing systems, and historic
                  preservation requirements. We use period-appropriate materials where possible and
                  work with city planning officials to ensure repairs meet both modern building
                  codes and historic district guidelines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle storm damage on canyon rim properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Canyon rim properties face the most severe weather exposure but often have scenic
                  view restrictions on modifications. We use low-profile, aesthetically compatible
                  materials that provide maximum protection without compromising views. Enhanced
                  fastening systems account for channeled canyon winds, while debris barriers
                  protect against vegetation and materials carried up from the canyon during storms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What preventive measures work best for Canyon's unique weather patterns?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Canyon properties benefit from wind-resistant design features including
                  impact-resistant materials, enhanced attachment systems, and aerodynamic edge
                  details. Regular inspections before storm seasons help identify vulnerabilities.
                  Properties near the canyon should secure outdoor items that become projectiles and
                  consider landscaping that reduces wind exposure. University area buildings benefit
                  from coordinated maintenance programs that address multiple units efficiently.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Historic Preservation & Storm Protection?
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-brand-gold">
                    Preservation Challenges
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Architectural Integrity</h4>
                      <p className="text-gray-600 text-sm">
                        Modern Class 4 impact-rated shingles in earth tones blend with early-1900s
                        Canyon buildings near the courthouse square without losing wind and hail
                        performance.
                      </p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Building Code Compliance</h4>
                      <p className="text-gray-600 text-sm">
                        Randall County and City of Canyon code amendments since the original
                        build need to be reconciled with historic designation. Variance requests
                        cover items like updated ice-and-water shield and edge metal.
                      </p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Material Compatibility</h4>
                      <p className="text-gray-600 text-sm">
                        Original 1x6 plank decking and live-sawn rafters expand differently than
                        modern OSB. We pair a vented underlayment with a Class 4 shingle from
                        GAF or CertainTeed so the assembly moves together.
                      </p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h4 className="font-semibold text-amber-700">Approval Processes</h4>
                      <p className="text-gray-600 text-sm">
                        We submit material samples and elevation drawings to the Canyon historic
                        review group before tear-off, and route any variance request through
                        city planning before crews mobilize.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-brand-gold">
                    Our Historic Solutions
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Period-Appropriate Materials</h4>
                      <p className="text-gray-600 text-sm">
                        We source materials that match historic appearance while providing modern
                        performance, including clay tiles, slate, and specialty metal systems.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Hidden Protection Systems</h4>
                      <p className="text-gray-600 text-sm">
                        Enhanced underlayment and fastening systems provide superior storm
                        protection without visible modifications to historic exteriors.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Documentation Expertise</h4>
                      <p className="text-gray-600 text-sm">
                        We handle all preservation committee applications and work with historic
                        preservation consultants to ensure compliance.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Craftsman Specialists</h4>
                      <p className="text-gray-600 text-sm">
                        Our team includes specialists trained in historic restoration techniques and
                        familiar with Canyon's architectural heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Serving Canyon, TX
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" city="Canyon, TX" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="canyon" currentService="storm-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert storm damage repair with
            comprehensive warranties and insurance claim assistance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:8066226041"
              className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg"
            >
              Call (806) 622-6041
            </a>
            <a
              href="/contact/"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg"
            >
              Schedule Free Inspection
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="storm-damage-repair-canyon" />
      </div>
    </>
  );
}
