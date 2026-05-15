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
import { Check, DollarSign, Phone, School, Star } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/tpo-roofing-canyon/" },
  title: "TPO Roofing Canyon TX | 5 Star Roofing",
  description:
    "Expert tpo roofing in Canyon TX. Texas Panhandle experiences 8-10 hailstorms annually. Palo Duro Canyon, WTAMU. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "TPO Roofing Canyon TX | 5 Star Roofing",
    description:
      "Expert tpo roofing in Canyon TX. Texas Panhandle experiences 8-10 hailstorms annually. Palo Duro Canyon, WTAMU. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/tpo-roofing-canyon/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TpoRoofingCanyonPage() {
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
            "@id": "https://5starroofingpros.com/tpo-roofing-canyon/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp",
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
            url: "https://5starroofingpros.com/tpo-roofing-canyon/",
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
              "Expert tpo roofing services in Canyon, TX. Free inspections, insurance claim assistance",
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
              "@id": "https://en.wikipedia.org/wiki/Canyon,_Texas",
              name: "Canyon",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert TPO roofing in Canyon TX. Near Palo Duro Canyon, WTAMU. Texas Panhandle experiences 8-10 hailstorms annually. Energy-efficient commercial systems.",
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
                name: "Why is TPO roofing ideal for Canyon commercial buildings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TPO roofing excels in Canyon's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 8-10 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Canyon's severe weather near Palo Duro Canyon.",
                },
              },
              {
                "@type": "Question",
                name: "How long does TPO roofing last in Canyon's climate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Quality TPO roofing systems typically last 20-30 years in Canyon when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and unique weather patterns near Palo Duro Canyon can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan.",
                },
              },
              {
                "@type": "Question",
                name: "Is TPO roofing energy-efficient for Canyon businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TPO's white reflective surface significantly reduces cooling costs in Canyon's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Canyon commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates.",
                },
              },
              {
                "@type": "Question",
                name: "How much does TPO roofing cost in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TPO roofing in Canyon typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Canyon commercial properties.",
                },
              },
              {
                "@type": "Question",
                name: "Can TPO roofing withstand Canyon's hailstorms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Canyon's 8-10 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations.",
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
        service="TPO Roofing"
        h1="TPO Roofing in Canyon, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp"
      
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
            name: "Canyon",
            url: "/tpo-roofing-canyon/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: TPO Roofing for homes and businesses in Canyon, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Canyon as part of its West Texas service area.</span></li>
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
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Do Canyon Businesses Choose TPO Roofing?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <School className="w-6 h-6 inline-block" /> Educational & Institutional
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    WTAMU campus facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    School district buildings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Administrative complexes
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Athletic and recreational facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Student housing developments
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <DollarSign className="w-6 h-6 inline-block" /> Cost-Effective Solutions
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Lower installation costs than competitors
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Excellent long-term ROI
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Reduced maintenance expenses
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Energy savings up to 30%
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Insurance premium reductions
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Canyon's Unique Weather Challenges
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Canyon's proximity to Palo Duro Canyon creates unique microclimatic conditions. The
                area experiences intense wind patterns, rapid temperature changes, and increased
                hail activity due to its position on the High Plains. These conditions require
                specialized roofing systems.
              </p>
              <p className="text-lg text-gray-700">
                TPO roofing excels in these challenging conditions with proven flexibility, superior
                wind uplift resistance, and excellent thermal shock resistance. Our systems are
                specifically engineered for Canyon's demanding climate.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Commercial TPO Systems for Canyon Properties?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Fully Adhered Systems</h3>
                <p className="text-gray-700 mb-3">
                  Complete bonding to substrate provides maximum wind uplift resistance - ideal for
                  Canyon's High Plains wind exposure.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Wind uplift ratings up to 300 psf</li>
                  <li>• No mechanical penetrations</li>
                  <li>• Superior thermal performance</li>
                  <li>• Excellent for complex roof shapes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Mechanically Attached</h3>
                <p className="text-gray-700 mb-3">
                  Cost-effective installation with proven performance for Canyon's challenging
                  weather conditions.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Faster installation process</li>
                  <li>• Lower initial investment</li>
                  <li>• Excellent wind performance</li>
                  <li>• Suitable for most building types</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Ballasted Systems</h3>
                <p className="text-gray-700 mb-3">
                  Loose-laid membrane with stone ballast - perfect for buildings with adequate
                  structural capacity.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Minimal roof penetrations</li>
                  <li>• Easy access for maintenance</li>
                  <li>• Additional thermal mass</li>
                  <li>• Cost-effective for large buildings</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              How Does This Roofing Improve Energy Efficiency?
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">Cool Roof Technology</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Reflective Performance</h4>
                  <p className="text-gray-700 mb-4">
                    White TPO membranes reflect + of solar radiation, significantly reducing
                    cooling loads for Canyon's educational and commercial facilities.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• ENERGY STAR certified membranes</li>
                    <li>• Cool Roof Rating Council verified</li>
                    <li>• Thermal emittance ratings 0.83+</li>
                    <li>• Solar reflectance index (SRI) 100+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Insulation Systems</h4>
                  <p className="text-gray-700 mb-4">
                    High-performance insulation packages maximize energy efficiency while providing
                    code-compliant thermal resistance values.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Polyiso foam board (R-6+ per inch)</li>
                    <li>• XPS rigid insulation options</li>
                    <li>• Tapered systems for drainage</li>
                    <li>• Vapor retarder integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Canyon Energy Savings Examples
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2"></div>
                  <div className="font-semibold mb-1">WTAMU Facility</div>
                  <div className="text-gray-600 text-sm">Annual cooling cost reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">$18K</div>
                  <div className="font-semibold mb-1">Office Complex</div>
                  <div className="text-gray-600 text-sm">First-year energy savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-2">30%</div>
                  <div className="font-semibold mb-1">Retail Center</div>
                  <div className="text-gray-600 text-sm">Peak demand reduction</div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does TPO Installation Process for Canyon Commercial Properties Include?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-brown">
                      Site Assessment & Planning
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Comprehensive evaluation of your Canyon property including structural
                      analysis, existing roof condition, and energy efficiency opportunities. We
                      coordinate with local authorities for all required permits.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <ul className="space-y-1">
                        <li>• Structural load calculations</li>
                        <li>• Wind uplift design requirements</li>
                        <li>• Drainage analysis and planning</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Energy modeling and projections</li>
                        <li>• Code compliance verification</li>
                        <li>• Timeline and logistics coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-brown">
                      Substrate Preparation
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Professional preparation ensures optimal TPO performance and longevity. Our
                      team creates the ideal foundation for your new roofing system.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <ul className="space-y-1">
                        <li>• Existing membrane removal if needed</li>
                        <li>• Deck cleaning and repair</li>
                        <li>• Primer application where required</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Insulation installation/upgrade</li>
                        <li>• Vapor barrier placement</li>
                        <li>• Cover board installation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-brown">
                      TPO Membrane Installation
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Precision installation using state-of-the-art equipment and certified
                      techniques. Every detail is executed to manufacturer specifications.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <ul className="space-y-1">
                        <li>• Membrane layout and cutting</li>
                        <li>• Heat welding of all seams</li>
                        <li>• Mechanical fastening per specs</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Flashing and detail work</li>
                        <li>• Penetration sealing</li>
                        <li>• Edge termination systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does TPO Roofing FAQs - Canyon, TX Include?
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is TPO roofing ideal for Canyon commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing excels in Canyon's Texas Panhandle climate due to its white reflective
                  surface that reduces cooling costs in extreme heat, superior resistance to UV
                  degradation, excellent performance against hail damage from 8-10 annual storms,
                  and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded
                  seams create watertight bonds critical for Canyon's severe weather near Palo Duro
                  Canyon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does TPO roofing last in Canyon's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality TPO roofing systems typically last 20-30 years in Canyon when properly
                  installed and maintained. The Texas Panhandle's intense sun, temperature
                  fluctuations, and unique weather patterns near Palo Duro Canyon can stress roofing
                  materials, but TPO's UV resistance and flexibility help it withstand these
                  conditions. Regular inspections after hailstorms extend system lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is TPO roofing energy-efficient for Canyon businesses?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, TPO's white reflective surface significantly reduces cooling costs in
                  Canyon's hot climate. The membrane reflects sunlight and heat, keeping building
                  interiors cooler. Many Canyon commercial property owners see 20-30% reductions in
                  summer cooling expenses. TPO roofing often qualifies for energy efficiency tax
                  credits and utility rebates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does TPO roofing cost in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing in Canyon typically costs $4-8 per square foot installed, depending on
                  building size, roof complexity, insulation requirements, and membrane thickness.
                  While initial costs are moderate, TPO provides excellent long-term value through
                  energy savings, durability, and low maintenance requirements. We provide free
                  estimates for Canyon commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can TPO roofing withstand Canyon's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil)
                  provides excellent hail resistance for Canyon's 8-10 annual hailstorms. TPO's
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
        <InternalLinks currentCity="canyon" currentService="tpo-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert tpo roofing with comprehensive
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
        <RelatedArticles pageSlug="tpo-roofing-canyon" />
      </div>
    </>
  );
}
