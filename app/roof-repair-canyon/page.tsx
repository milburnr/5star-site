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
import { GraduationCap, Mountain, Phone, Star, Wheat } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-repair-canyon/" },
  title: "Roof Repair Canyon TX | 5 Star Roofing",
  description:
    "Expert roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Repair Canyon TX | 5 Star Roofing",
    description:
      "Expert roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-repair-canyon/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/canyon-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofRepairCanyonPage() {
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
            "@id": "https://5starroofingpros.com/roof-repair-canyon/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-27-1280w.jpg",
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
            url: "https://5starroofingpros.com/roof-repair-canyon/",
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
              "Expert roof repair services in Canyon, TX. Free inspections, insurance claim assistance",
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
            serviceType: "Roof Repair",
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
              "Expert roof repair in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "How much does roof repair cost in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Repair costs vary widely based on damage extent and accessibility. Simple shingle replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex structural repairs range from $1,500-$5,000. We provide free inspections with detailed written estimates before any work begins. Many repairs are insurance-covered, especially storm damage.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you repair my leaking roof in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We schedule repairs as quickly as possible. Standard repairs are typically scheduled within 3-5 business days. Most repairs complete in 2-4 hours depending on complexity.",
                },
              },
              {
                "@type": "Question",
                name: "Should I repair or replace my roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Repair makes sense for roofs under 15 years old with localized damage affecting less than 30% of surface area. Replacement is recommended when roofs exceed 20 years, show widespread damage, or require multiple repair areas. Our free inspections provide honest assessments—we recommend the most cost-effective solution for your situation.",
                },
              },
              {
                "@type": "Question",
                name: "Do you warranty your roof repairs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all our repairs include workmanship warranties ranging from 1-5 years depending on repair type. Materials carry manufacturer warranties. We stand behind our work—if a repair fails due to installation error, we fix it at no charge. This warranty protection gives you peace of mind that repairs will last.",
                },
              },
              {
                "@type": "Question",
                name: "What are the most common roof repairs in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In Canyon, the most common repairs include hail-damaged shingles from the area's 8-10 annual hailstorms, wind-lifted shingles from High Plains winds near Palo Duro Canyon, failed flashing around chimneys and vents, and leak repairs. The unique weather patterns near the canyon create specific damage we repair regularly.",
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
        service="Roof Repair"
        h1="Roof Repair in Canyon, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-27-1280w.jpg"
      
      breadcrumbItems={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Roof Repair",
            url: "/roof-repair/",
          },
          {
            name: "Canyon",
            url: "/roof-repair-canyon/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Repair for homes and businesses in Canyon, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Canyon as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Repair scope: leak isolation, flashing and seal repairs, partial reroofs, and storm-related fixes.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Canyon Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Canyon's location in the Texas Panhandle creates unique roofing challenges. Near Palo
              Duro Canyon, home to West Texas A&M University. Texas Panhandle weather extremes—6-8
              annual hailstorms, High Plains winds 60+ mph, and unique weather patterns near Palo
              Duro Canyon with High Plains wind exposure—demand superior roofing materials and
              expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 350+ Canyon properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with Canyon
              property owners, and handle complete insurance claims. Most homeowners pay only their
              deductible when insurance covers storm damage.
            </p>
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
                  How much does roof repair cost in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair costs vary widely based on damage extent and accessibility. Simple shingle
                  replacements range from $300-$800. Flashing repairs run $400-$1,200. Complex
                  structural repairs range from $1,500-$5,000. We provide free inspections with
                  detailed written estimates before any work begins. Many repairs are
                  insurance-covered, especially storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How quickly can you repair my leaking roof in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We schedule leak repairs as quickly as possible.
                  Standard repairs are typically scheduled within 3-5 business days. Most repairs
                  complete in 2-4 hours depending on complexity. We understand roof leaks cause
                  stress and damage—we prioritize quality work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I repair or replace my roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repair makes sense for roofs under 15 years old with localized damage affecting
                  less than 30% of surface area. Replacement is recommended when roofs exceed 20
                  years, show widespread damage, or require multiple repair areas. Our free
                  inspections provide honest assessments—we recommend the most cost-effective
                  solution for your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you warranty your roof repairs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, all our repairs include workmanship warranties ranging from 1-5 years
                  depending on repair type. Materials carry manufacturer warranties. We stand behind
                  our work—if a repair fails due to installation error, we fix it at no charge. This
                  warranty protection gives you peace of mind that repairs will last.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the most common roof repairs in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In Canyon, the most common repairs include hail-damaged shingles from the area's
                  8-10 annual hailstorms, wind-lifted shingles from High Plains winds near Palo Duro
                  Canyon, failed flashing around chimneys and vents, and leak repairs. The unique
                  weather patterns near the canyon create specific damage we repair regularly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Visit Our Amarillo Location
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Does Canyon Roof Repair Services We Provide Include?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  University District Specialist
                </h3>
                <p className="text-gray-700 mb-4">
                  Canyon is home to West Texas A&M University, creating unique roofing needs for
                  student housing, faculty residences, and university facilities. We specialize in
                  both residential and institutional roofing projects throughout the university
                  district.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Student housing roof repairs</li>
                  <li>• Faculty residential services</li>
                  <li>• Commercial property maintenance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Palo Duro Canyon Wind Patterns
                </h3>
                <p className="text-gray-700 mb-4">
                  Canyon sits just north of Palo Duro Canyon, where the 800-foot drop into the gorge funnels High Plains winds and produces gust patterns you do not see in flat-prairie Amarillo or Hereford. Homes along the rim and the FM 1541 corridor catch the strongest channeled gusts, and that geography drives our material selection toward UL 580-rated standing seam metal and six-nail asphalt installation on every reroof.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Wind-channel damage assessment</li>
                  <li>• Canyon-specific weather resistance</li>
                  <li>• Microclimate-adapted materials</li>
                  <li>• Geographic hazard evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Historic Downtown Preservation
                </h3>
                <p className="text-gray-700 mb-4">
                  Canyon&apos;s historic district around the Randall County Courthouse and the brick storefronts off 4th Avenue calls for materials and details that match the building era. We work with architectural asphalt and standing seam metal in profiles and colors that fit period-appropriate facades while still meeting current City of Canyon building code for wind uplift and ice and water shield coverage.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• City of Canyon historic-district compliance</li>
                  <li>• Period-appropriate architectural asphalt and standing seam metal</li>
                  <li>• Coordination with the local preservation review</li>
                  <li>• Current building-code upgrades on underlayment and flashing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Agricultural Community Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Canyon anchors the surrounding ranching and farming country across Randall County, and the building stock includes ranch headquarters, hay barns, equipment sheds, and rural homesteads scattered along Highway 217 and FM 1541. We install R-panel and standing seam metal for the long spans these buildings require, with fastening details rated for the unobstructed wind exposure rural properties face.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hay barn and equipment shed reroofs</li>
                  <li>• Ranch headquarters and rural homestead work</li>
                  <li>• Rural residential service across Randall County</li>
                  <li>• R-panel and standing seam metal on large-span structures</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Are Canyon's Unique Geographic Challenges?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <Mountain className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Canyon Geography</h3>
                <p className="text-gray-700">
                  Canyon sits at the rim of Palo Duro Canyon, the second-largest canyon system in the country. The 800-foot drop creates wind-funneling along the rim that pushes gusts higher than flat-prairie Amarillo and creates microclimate variation block by block across the city.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <GraduationCap className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">University Environment</h3>
                <p className="text-gray-700">
                  West Texas A&amp;M University and its surrounding student-rental district mix brick academic halls, mid-century housing stock, and newer apartment construction. That variety calls for different roofing approaches across the same neighborhood, from architectural asphalt on older single-family homes to TPO and modified bitumen on small multi-unit buildings.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-brand-gold mb-4">
                  <Wheat className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Agricultural Hub</h3>
                <p className="text-gray-700">
                  Canyon serves as a regional ag center for Randall County, which means our service calendar covers ranch headquarters, hay barns, grain storage structures along the rail line, and rural homes scattered across the county. Each building type calls for a different material spec, from asphalt shingle on a farmhouse to standing seam metal across a 60-foot hay barn span.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">Local Weather Patterns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Canyon Wind Effects</h4>
                  <p className="text-gray-700 mb-4">
                    Palo Duro Canyon creates wind-tunneling effects that can amplify High Plains
                    winds from 60+ mph to even higher velocities. These concentrated wind patterns
                    create unique stress on roofing systems not found in other Panhandle
                    communities.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand-gold">Hail Concentration</h4>
                  <p className="text-gray-700 mb-4">
                    Canyon's location in "Hail Alley" means 8-10 significant hailstorms annually,
                    with the canyon geography sometimes creating hail size variations across the
                    city. Our damage assessment accounts for these local patterns.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Does the Canyon Roof Repair Process Work?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      our roofing service Assessment
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Our Canyon service team provides our roofing service to service calls,
                      understanding that university district timing is critical for students and
                      faculty. We prioritize same-day post-storm documentation and work around academic
                      schedules when possible.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• University district priority response</li>
                      <li>• Academic calendar consideration</li>
                      <li>• Student housing safety protocols</li>
                      <li>• Faculty and staff accommodation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-gold">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Geographic-Specific Inspection
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Our inspectors understand how Canyon's proximity to Palo Duro Canyon affects
                      wind patterns and weather damage. We evaluate not just current damage but also
                      geographic risk factors unique to this location.
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
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Customized Material Selection
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Based on Canyon's unique geographic challenges, we recommend materials
                      specifically rated for canyon wind effects and high-velocity impact zones.
                      Historical district projects may require special architectural considerations.
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
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Community-Focused Installation
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Our installation teams work with Canyon's community character in mind,
                      minimizing disruption to university activities and respecting the needs of
                      both residential and agricultural properties throughout the area.
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
                  <div className="bg-brand-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">
                      Long-Term Performance Monitoring
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Canyon&apos;s rim-of-the-canyon weather puts more wear on a roof than the open-prairie average across the Panhandle, so we schedule follow-up walks on completed work through the high-wind months from March through June. Warranty service includes a check-in after the first heavy hail or wind event each season to verify that flashing, ridge caps, and seam welds are still performing.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Seasonal performance walks during March-June storm months</li>
                      <li>• Post-event follow-up after hail or 60-plus-mph wind events</li>
                      <li>• Warranty compliance tracking on every reroof</li>
                      <li>• Preventive maintenance scheduled around the academic calendar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Choose 5 Star for Your Canyon Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  University District Experience
                </h3>
                <p className="text-gray-700 mb-4">
                  We've served West Texas A&M University area properties for over a decade,
                  understanding the unique needs of university housing, faculty residences, and
                  campus-adjacent commercial properties.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 350+ Canyon area projects completed</li>
                  <li>• University district specialization</li>
                  <li>• Student housing expertise</li>
                  <li>• Academic calendar accommodation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Canyon Geographic Expertise
                </h3>
                <p className="text-gray-700 mb-4">
                  The 800-foot drop into Palo Duro Canyon changes wind behavior on the rim above it, and that translates to different uplift loads and impact patterns on Canyon homes than what we see on flat-prairie Amarillo just 18 miles north. We factor that geography into every material recommendation, especially on homes near the FM 1541 corridor and the canyon rim itself.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Rim-of-canyon wind pattern experience</li>
                  <li>• Microclimate damage assessment by neighborhood</li>
                  <li>• UL 580 wind-uplift-rated material selection</li>
                  <li>• Location-specific solutions for canyon-edge properties</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">Historical Preservation</h3>
                <p className="text-gray-700 mb-4">
                  Working in the historic district around the Randall County Courthouse calls for material profiles and color palettes that match the era of the building, not just whatever happens to be on the truck. We source architectural asphalt and standing seam metal in the profiles that fit Canyon&apos;s brick storefronts and older single-family stock while still meeting current building code.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Randall County historic-district compliance</li>
                  <li>• Coordination with the local preservation review</li>
                  <li>• Period-appropriate asphalt and metal profiles</li>
                  <li>• Underlayment and flashing upgraded to current code</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                  Agricultural Community Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Outside the city limits, our work covers the ranching and farming operations spread across Randall County off Highway 217 and FM 1541. Hay barns, equipment sheds, cattle facilities, and rural homes each call for a different material spec. We install R-panel and standing seam metal across the long spans these buildings require, with fastening patterns matched to the open-exposure wind loads.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hay barn and equipment shed reroofs</li>
                  <li>• Ranch headquarters and cattle facility work</li>
                  <li>• R-panel and standing seam on long-span roofs</li>
                  <li>• Rural-property service across Randall County</li>
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
                From our Amarillo headquarters, we serve Canyon and the broader Randall County area,
                including West Texas A&M University district, historic downtown, and surrounding
                agricultural communities:
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
                <h4 className="text-lg font-bold text-brand-brown mb-2">
                  Palo Duro Canyon State Park Area
                </h4>
                <p className="text-gray-700">
                  We also serve properties near Palo Duro Canyon State Park, understanding the
                  unique environmental challenges and building requirements for this scenic but
                  challenging geographic area.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="canyon" currentService="roof-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert roof repair with comprehensive
            warranties and insurance claim assistance.
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
        <RelatedArticles pageSlug="roof-repair-canyon" />
      </div>
    </>
  );
}
