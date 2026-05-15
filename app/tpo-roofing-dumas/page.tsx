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
import { Check, Factory, Phone, Star, Wheat } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/tpo-roofing-dumas/" },
  title: "TPO Roofing Dumas TX | 5 Star Roofing",
  description:
    "Expert tpo roofing in Dumas TX. Texas Panhandle experiences 7-9 hailstorms annually. Agricultural center. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "TPO Roofing Dumas TX | 5 Star Roofing",
    description:
      "Expert tpo roofing in Dumas TX. Texas Panhandle experiences 7-9 hailstorms annually. Agricultural center. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/tpo-roofing-dumas/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-10-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TpoRoofingDumasPage() {
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
            "@id": "https://5starroofingpros.com/tpo-roofing-dumas/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-10-1920w.webp",
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
            geo: { "@type": "GeoCoordinates", latitude: 35.8656, longitude: -101.973 },
            url: "https://5starroofingpros.com/tpo-roofing-dumas/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              name: "Dumas",
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
              "Expert tpo roofing services in Dumas, TX. Free inspections, insurance claim assistance",
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
            serviceType: "TPO Roofing",
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
            },
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Dumas,_Texas",
              name: "Dumas",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert TPO roofing in Dumas TX. Texas Panhandle agricultural center experiences 7-9 hailstorms annually. Energy-efficient commercial systems.",
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
                name: "Why is TPO roofing ideal for Dumas commercial buildings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TPO roofing excels in Dumas's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Dumas's severe weather and agricultural environment.",
                },
              },
              {
                "@type": "Question",
                name: "How long does TPO roofing last in Dumas's climate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Quality TPO roofing systems typically last 20-30 years in Dumas when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and agricultural environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan.",
                },
              },
              {
                "@type": "Question",
                name: "Is TPO roofing energy-efficient for Dumas businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TPO's white reflective surface significantly reduces cooling costs in Dumas's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Dumas commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates.",
                },
              },
              {
                "@type": "Question",
                name: "How much does TPO roofing cost in Dumas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TPO roofing in Dumas typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Dumas commercial properties.",
                },
              },
              {
                "@type": "Question",
                name: "Can TPO roofing withstand Dumas's hailstorms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Dumas's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations.",
                },
              },
            ],
          }),
        }}
      />
            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="dumas"
        city="Dumas"
        service="TPO Roofing"
        h1="TPO Roofing in Dumas, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-6-1920w.webp"
      
      breadcrumbItems={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "TPO Roofing",
            url: "/tpo-roofing/",
          },
          {
            name: "Dumas",
            url: "/tpo-roofing-dumas/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: TPO Roofing for homes and businesses in Dumas, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Dumas as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Materials and systems: standing seam metal, TPO, and PVC membranes engineered for the West Texas climate.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Dumas Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Dumas's location in the Texas Panhandle creates unique roofing challenges. Industrial
              petrochemical center. Texas Panhandle weather extremes—6-8 annual hailstorms, High
              Plains winds 60+ mph, and agricultural environment with petrochemical operations and
              Panhandle weather extremes—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 180+ Dumas properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with Dumas
              agricultural property owners, and handle complete insurance claims. Most homeowners
              pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Dumas Agricultural & Industrial Businesses Choose TPO?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Wheat className="w-6 h-6 inline-block" /> Agricultural Applications
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Grain storage facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Equipment buildings and barns
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Feed mills and processing plants
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Agricultural supply warehouses
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Administrative farm offices
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Factory className="w-6 h-6 inline-block" /> Industrial Solutions
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Manufacturing and processing facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Chemical resistant membranes
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    High-temperature performance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Easy maintenance and cleaning
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Long-term durability guarantees
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Dumas's Agricultural Climate Challenges
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                As a major agricultural center in the Texas Panhandle, Dumas faces unique roofing
                challenges from dust, chemicals, extreme temperature variations, and frequent severe
                weather. Agricultural facilities require roofing systems that can withstand chemical
                exposure from fertilizers and pesticides while maintaining energy efficiency.
              </p>
              <p className="text-lg text-gray-700">
                TPO roofing provides exceptional chemical resistance, easy cleaning capabilities,
                and excellent thermal performance - making it ideal for Dumas's agricultural and
                industrial applications.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              TPO Membrane Options for Dumas Commercial Properties?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Standard TPO (45-60 mil)
                </h3>
                <p className="text-gray-700 mb-3">
                  Cost-effective solution for basic commercial applications with moderate weather
                  exposure.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Excellent for office buildings</li>
                  <li>• Good wind resistance</li>
                  <li>• 15-20 year warranty available</li>
                  <li>• Budget-friendly installation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Reinforced TPO (60-80 mil)
                </h3>
                <p className="text-gray-700 mb-3">
                  Enhanced thickness for superior hail resistance and extended lifespan in Dumas's
                  challenging climate.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Superior hail impact resistance</li>
                  <li>• Enhanced puncture resistance</li>
                  <li>• 20-25 year warranty available</li>
                  <li>• Ideal for agricultural facilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Premium TPO (80+ mil)</h3>
                <p className="text-gray-700 mb-3">
                  Maximum performance for critical applications requiring ultimate durability and
                  chemical resistance.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Maximum chemical resistance</li>
                  <li>• Ultimate weather protection</li>
                  <li>• 25-30 year warranty available</li>
                  <li>• Perfect for industrial facilities</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Agricultural Facility Roofing Considerations?
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">
                Chemical Resistance & Durability
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Chemical Exposure Protection</h4>
                  <p className="text-gray-700 mb-4">
                    Agricultural operations often involve exposure to fertilizers, pesticides, and
                    other chemicals. TPO membranes provide excellent resistance to chemical
                    degradation.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Resistant to fertilizer runoff</li>
                    <li>• Withstands pesticide exposure</li>
                    <li>• Easy cleaning and maintenance</li>
                    <li>• No chemical absorption into membrane</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Agricultural Building Requirements</h4>
                  <p className="text-gray-700 mb-4">
                    Farm buildings require specialized roofing considerations for optimal
                    performance and code compliance in agricultural applications.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Large span capability</li>
                    <li>• Ventilation system integration</li>
                    <li>• Equipment mounting provisions</li>
                    <li>• Drainage for chemical washdown</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              How Does This Roofing Improve Energy Efficiency?
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">
                Cost Savings for Agricultural Operations
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-gold mb-2"></div>
                  <div className="font-semibold mb-1">Cooling Reduction</div>
                  <div className="text-gray-600 text-sm">
                    Summer energy savings for grain storage
                  </div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-gold mb-2">$12K</div>
                  <div className="font-semibold mb-1">Annual Savings</div>
                  <div className="text-gray-600 text-sm">Processing facility energy costs</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-brand-gold mb-2">18°F</div>
                  <div className="font-semibold mb-1">Temperature Drop</div>
                  <div className="text-gray-600 text-sm">Interior temperature reduction</div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">Equipment Protection</h4>
                <p className="text-gray-700 mb-3">
                  Cooler building temperatures extend equipment life and reduce maintenance costs
                  for sensitive agricultural machinery and storage systems.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Reduced HVAC strain</li>
                  <li>• Extended equipment lifespan</li>
                  <li>• Lower maintenance costs</li>
                  <li>• Improved product storage conditions</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">Environmental Benefits</h4>
                <p className="text-gray-700 mb-3">
                  Energy-efficient roofing reduces environmental impact while qualifying for
                  agricultural tax incentives and sustainability programs.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Reduced carbon footprint</li>
                  <li>• USDA sustainability compliance</li>
                  <li>• Energy tax credit eligibility</li>
                  <li>• Improved farm sustainability ratings</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does TPO Roofing FAQs - Dumas, TX Involve?
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is TPO roofing ideal for Dumas commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing excels in Dumas's Texas Panhandle climate due to its white reflective
                  surface that reduces cooling costs in extreme heat, superior resistance to UV
                  degradation, excellent performance against hail damage from 7-9 annual storms, and
                  strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded
                  seams create watertight bonds critical for Dumas's severe weather and agricultural
                  environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does TPO roofing last in Dumas's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality TPO roofing systems typically last 20-30 years in Dumas when properly
                  installed and maintained. The Texas Panhandle's intense sun, temperature
                  fluctuations, and agricultural environment can stress roofing materials, but TPO's
                  UV resistance and flexibility help it withstand these conditions. Regular
                  inspections after hailstorms extend system lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is TPO roofing energy-efficient for Dumas businesses?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, TPO's white reflective surface significantly reduces cooling costs in Dumas's
                  hot climate. The membrane reflects sunlight and heat, keeping building interiors
                  cooler. Many Dumas commercial property owners see 20-30% reductions in summer
                  cooling expenses. TPO roofing often qualifies for energy efficiency tax credits
                  and utility rebates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does TPO roofing cost in Dumas?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing in Dumas typically costs $4-8 per square foot installed, depending on
                  building size, roof complexity, insulation requirements, and membrane thickness.
                  While initial costs are moderate, TPO provides excellent long-term value through
                  energy savings, durability, and low maintenance requirements. We provide free
                  estimates for Dumas commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can TPO roofing withstand Dumas's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil)
                  provides excellent hail resistance for Dumas's 7-9 annual hailstorms. TPO's
                  flexibility allows it to absorb impacts without puncturing. We recommend
                  reinforced TPO systems for Texas Panhandle properties in high-risk hail zones.
                  Many insurance companies offer premium discounts for impact-resistant TPO
                  installations.
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
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="dumas" currentService="tpo-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Dumas Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Dumas agricultural property owners. Expert tpo roofing with
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
        <RelatedArticles pageSlug="tpo-roofing-dumas" />
      </div>
    </>
  );
}
