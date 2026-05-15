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
import { Check, Flame, Phone, Shield, Star, Zap } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "https://5starroofingpros.com/metal-roofing-pampa/" },
  title: "Metal Roofing Pampa TX | 5 Star Roofing",
  description:
    "Expert metal roofing in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Metal Roofing Pampa TX | 5 Star Roofing",
    description:
      "Expert metal roofing in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/metal-roofing-pampa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-metal-roof.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MetalRoofingPampaPage() {
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
            "@id": "https://5starroofingpros.com/metal-roofing-pampa/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-metal-roof.jpg",
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
            geo: { "@type": "GeoCoordinates", latitude: 35.5364, longitude: -100.9599 },
            url: "https://5starroofingpros.com/metal-roofing-pampa/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              name: "Pampa",
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
              "Expert metal roofing services in Pampa, TX. Free inspections, insurance claim assistance.",
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
            serviceType: "Metal Roofing",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              "@id": "https://5starroofingpros.com/#organization",
              name: "5 Star Roofing",
              parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              name: "Pampa",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert metal roofing in Pampa TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "Why is metal roofing ideal for Pampa properties?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing excels in Pampa's Texas Panhandle climate due to superior wind resistance (140+ mph ratings), Class A fire resistance, exceptional hail resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency from reflective coatings. Metal roofs withstand Pampa's 7-9 annual hailstorms, extreme temperature swings, and sustained high winds better than any other roofing material.",
                },
              },
              {
                "@type": "Question",
                name: "How long does metal roofing last in Pampa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing systems typically last 50-70 years in Pampa when properly installed. Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains performance decade after decade. Many metal roofs installed in the 1970s-80s still perform excellently today.",
                },
              },
              {
                "@type": "Question",
                name: "Is metal roofing energy-efficient for Pampa homes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, metal roofing with reflective coatings significantly reduces cooling costs in Pampa's hot climate. Cool-roof metal systems reflect solar radiation and re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Pampa property owners typically see 20-40% reductions in summer cooling expenses. Metal roofing qualifies for energy efficiency tax credits.",
                },
              },
              {
                "@type": "Question",
                name: "How much does metal roofing cost in Pampa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing in Pampa typically costs $7-15 per square foot installed, depending on metal type, profile, coating, and roof complexity. Standing seam metal is premium ($12-15/sq ft), while R-panel and corrugated options are more economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+ year lifespan and low maintenance provide superior long-term value.",
                },
              },
              {
                "@type": "Question",
                name: "Can metal roofing withstand Pampa's hailstorms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, metal roofing with proper gauge thickness and dent-resistant coatings provides excellent hail protection for Pampa's 7-9 annual hailstorms. 26-gauge steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated metal shingles offer additional impact protection. Many insurance companies offer premium discounts for impact-resistant metal roofing installations.",
                },
              },
            ],
          }),
        }}
      />
            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="pampa"
        city="Pampa"
        service="Metal Roofing"
        h1="Metal Roofing in Pampa, TX"
        image="https://5starroofingpros.com/images/materials/standing-seam-metal.jpg"
      
      breadcrumbItems={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Metal Roofing",
            url: "/metal-roofing/",
          },
          {
            name: "Pampa",
            url: "/metal-roofing-pampa/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Metal Roofing for homes and businesses in Pampa, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Pampa as part of its West Texas service area.</span></li>
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
              What Makes Our Pampa Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in the Texas Panhandle creates unique roofing challenges.
              Agricultural community in the High Plains. Texas Panhandle weather extremes—6-8 annual
              hailstorms, High Plains winds 60+ mph, and agricultural community exposure to High
              Plains winds and frequent hailstorms—demand superior roofing materials and expert
              installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 220+ Pampa properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with Pampa
              property owners, and handle complete insurance claims. Most homeowners pay only their
              deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does Oil & Gas Industry Metal Roofing for Pampa Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Zap className="w-6 h-6 inline-block" /> Energy Sector Solutions
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Oil & gas processing facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Equipment storage buildings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Administrative and office complexes
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Maintenance and repair shops
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Flame className="w-6 h-6 inline-block" /> Safety & Performance
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Class A fire resistance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Lightning protection systems
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Chemical exposure resistance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    High temperature tolerance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Explosion-resistant construction
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-amber-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Pampa's Oil & Gas Industry Requirements
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Pampa's oil and gas operations demand roofing systems that meet strict safety codes,
                resist chemical exposure, provide fire protection, and withstand extreme industrial
                conditions while protecting valuable equipment and personnel.
              </p>
              <p className="text-lg text-gray-700">
                Metal roofing provides unmatched safety performance with Class A fire ratings,
                lightning protection capabilities, and chemical resistance specifically engineered
                for oil & gas facilities.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Permitting and Code Requirements Apply in Pampa?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                  <Flame className="w-6 h-6 inline-block" /> Fire Safety
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Class A fire rating</li>
                  <li>• UL listed assemblies</li>
                  <li>• Spark arrestor compatibility</li>
                  <li>• Non-combustible materials</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                  <Zap className="w-6 h-6 inline-block" /> Lightning Protection
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Integrated lightning systems</li>
                  <li>• Proper grounding design</li>
                  <li>• Strike termination devices</li>
                  <li>• Surge protection integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                  <Shield className="w-6 h-6 inline-block" /> Chemical Resistance
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hydrocarbon exposure protection</li>
                  <li>• Acid rain resistance</li>
                  <li>• UV stability coatings</li>
                  <li>• Industrial grade finishes</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Metal Roofing Excels in Pampa&apos;s Climate
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Gray County sits squarely in one of the most wind-prone corridors in North America.
              Sustained winds in Pampa average 14+ mph year-round, with gusts regularly exceeding 60
              mph during spring and fall fronts. That relentless wind stress tears at asphalt
              shingle tabs, loosens fasteners, and drives rain beneath conventional roofing
              materials. Metal roofing systems &mdash; particularly standing seam profiles with
              concealed fasteners &mdash; eliminate exposed attachment points that wind can exploit.
              Interlocking panels rated for 140+ mph uplift resist the sustained battering that
              Panhandle properties endure season after season.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hail compounds the problem. Gray County averages 6&ndash;8 significant hail events per
              year, and stones can exceed golf-ball size when supercell thunderstorms roll across
              the High Plains. While a single hailstorm can strip the granular surface off asphalt
              shingles &mdash; reducing their effective lifespan by years &mdash; 26-gauge steel
              panels with Kynar or dent-resistant coatings absorb impacts and maintain their
              protective barrier. That durability translates to fewer insurance claims, lower
              long-term costs, and uninterrupted protection for the structures underneath.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Temperature swings add another layer of stress. Pampa can see 50-degree temperature
              shifts in a single day, with summer highs above 100&deg;F and winter lows well below
              freezing. Metal roofing handles thermal cycling without cracking, curling, or losing
              adhesion. Reflective cool-roof coatings bounce solar radiation back into the
              atmosphere, reducing attic temperatures and cutting cooling costs during Pampa&apos;s
              brutally hot summers. For a community that deals with wind, hail, and heat in equal
              measure, metal roofing is the practical choice &mdash; not the premium one.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Residential Metal Roofing Options for Pampa Homeowners
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pampa homeowners looking to upgrade from asphalt shingles have two primary metal
              roofing paths, each with distinct advantages. Standing seam metal roofing uses
              vertical panels with raised seams and concealed fasteners, delivering the highest wind
              and water resistance available in residential roofing. The clean, modern profile works
              well on ranch-style homes and newer construction throughout Pampa&apos;s residential
              neighborhoods. Standing seam systems typically last 50&ndash;70 years with minimal
              maintenance &mdash; no granule loss, no cracking, no blown tabs after spring storms.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Stone-coated metal shingles offer a different approach. These steel panels are pressed
              into traditional shingle, shake, or tile profiles and coated with ceramic-coated stone
              granules bonded to the surface. The result looks like conventional roofing from the
              street but performs like metal underneath. For Pampa homeowners in neighborhoods with
              specific aesthetic expectations, stone-coated options provide Panhandle-grade
              protection without changing the visual character of the home. They carry Class 4
              impact ratings for hail resistance and wind ratings exceeding 120 mph.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Both options qualify for insurance premium discounts in Gray County due to their
              impact resistance ratings. Many Pampa homeowners find that the insurance savings,
              combined with eliminating the cycle of shingle replacement every 15&ndash;20 years,
              make metal roofing the more affordable choice over the life of the home. We help
              property owners evaluate both systems based on their roof geometry, neighborhood
              considerations, and budget to find the right fit for their specific situation.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does Metal Roofing FAQs - Pampa, TX Involve?
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is metal roofing ideal for Pampa properties?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing excels in Pampa's Texas Panhandle climate due to superior wind
                  resistance (140+ mph ratings), Class A fire resistance, exceptional hail
                  resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency
                  from reflective coatings. Metal roofs withstand Pampa's 7-9 annual hailstorms,
                  extreme temperature swings, and sustained high winds better than any other roofing
                  material.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does metal roofing last in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing systems typically last 50-70 years in Pampa when properly installed.
                  Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt
                  shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains
                  performance decade after decade. Many metal roofs installed in the 1970s-80s still
                  perform excellently today.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is metal roofing energy-efficient for Pampa homes?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with reflective coatings significantly reduces cooling costs in
                  Pampa's hot climate. Cool-roof metal systems reflect solar radiation and re-emit
                  absorbed heat, keeping buildings 10-15 degrees cooler. Pampa property owners
                  typically see 20-40% reductions in summer cooling expenses. Metal roofing
                  qualifies for energy efficiency tax credits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does metal roofing cost in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing in Pampa typically costs $7-15 per square foot installed, depending
                  on metal type, profile, coating, and roof complexity. Standing seam metal is
                  premium ($12-15/sq ft), while R-panel and corrugated options are more economical
                  ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+
                  year lifespan and low maintenance provide superior long-term value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can metal roofing withstand Pampa's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with proper gauge thickness and dent-resistant coatings
                  provides excellent hail protection for Pampa's 7-9 annual hailstorms. 26-gauge
                  steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated
                  metal shingles offer additional impact protection. Many insurance companies offer
                  premium discounts for impact-resistant metal roofing installations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Visit Our Amarillo Location - Serving Pampa
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="pampa" currentService="metal-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa property owners. Expert metal roofing with comprehensive
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
        <RelatedArticles pageSlug="metal-roofing-pampa" />
      </div>
    </>
  );
}
