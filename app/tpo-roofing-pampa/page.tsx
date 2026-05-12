import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
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
import { Check, Phone, Shield, Star, Zap } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/tpo-roofing-pampa/" },
  title: "TPO Roofing Pampa TX | 5 Star Roofing",
  description:
    "Expert tpo roofing in Pampa TX. Texas Panhandle experiences 7-9 hailstorms annually. Ranching and oil industry. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "TPO Roofing Pampa TX | 5 Star Roofing",
    description:
      "Expert tpo roofing in Pampa TX. Texas Panhandle experiences 7-9 hailstorms annually. Ranching and oil industry. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/tpo-roofing-pampa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-9-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TpoRoofingPampaPage() {
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
            "@id": "https://5starroofingpros.com/tpo-roofing-pampa/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-9-1920w.webp",
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
            url: "https://5starroofingpros.com/tpo-roofing-pampa/",
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
              "Expert tpo roofing services in Pampa, TX. Free inspections, insurance claim assistance",
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
              "@id": "https://en.wikipedia.org/wiki/Pampa,_Texas",
              name: "Pampa",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert TPO roofing in Pampa TX. Texas Panhandle ranching and oil center experiences 7-9 hailstorms annually. Energy-efficient commercial systems.",
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
                name: "Why is TPO roofing ideal for Pampa commercial buildings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TPO roofing excels in Pampa's Texas Panhandle climate due to its white reflective surface that reduces cooling costs in extreme heat, superior resistance to UV degradation, excellent performance against hail damage from 7-9 annual storms, and strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded seams create watertight bonds critical for Pampa's severe weather and industrial/ranching environment.",
                },
              },
              {
                "@type": "Question",
                name: "How long does TPO roofing last in Pampa's climate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Quality TPO roofing systems typically last 20-30 years in Pampa when properly installed and maintained. The Texas Panhandle's intense sun, temperature fluctuations, and industrial/ranching environment can stress roofing materials, but TPO's UV resistance and flexibility help it withstand these conditions. Regular inspections after hailstorms extend system lifespan.",
                },
              },
              {
                "@type": "Question",
                name: "Is TPO roofing energy-efficient for Pampa businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TPO's white reflective surface significantly reduces cooling costs in Pampa's hot climate. The membrane reflects sunlight and heat, keeping building interiors cooler. Many Pampa commercial property owners see 20-30% reductions in summer cooling expenses. TPO roofing often qualifies for energy efficiency tax credits and utility rebates.",
                },
              },
              {
                "@type": "Question",
                name: "How much does TPO roofing cost in Pampa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TPO roofing in Pampa typically costs $4-8 per square foot installed, depending on building size, roof complexity, insulation requirements, and membrane thickness. While initial costs are moderate, TPO provides excellent long-term value through energy savings, durability, and low maintenance requirements. We provide free estimates for Pampa commercial properties.",
                },
              },
              {
                "@type": "Question",
                name: "Can TPO roofing withstand Pampa's hailstorms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil) provides excellent hail resistance for Pampa's 7-9 annual hailstorms. TPO's flexibility allows it to absorb impacts without puncturing. We recommend reinforced TPO systems for Texas Panhandle properties in high-risk hail zones. Many insurance companies offer premium discounts for impact-resistant TPO installations.",
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
        service="TPO Roofing"
        h1="TPO Roofing in Pampa, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-1920w.webp"
      
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
            name: "Pampa",
            url: "/tpo-roofing-pampa/",
          },
        ]}
    />
      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={180} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Pampa Projects</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
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
              What Makes Our Pampa Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Pampa's location in the Texas Panhandle creates unique roofing challenges. Industrial
              petrochemical center. Texas Panhandle weather extremes—6-8 annual hailstorms, High
              Plains winds 60+ mph, and industrial/ranching environment with petrochemical
              operations and Panhandle weather extremes—demand superior roofing materials and expert
              installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've protected 180+ Pampa properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with Pampa
              ranching/oil property owners, and handle complete insurance claims. Most homeowners
              pay only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Pampa Oil & Gas Industry Choose TPO Roofing?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Zap className="w-6 h-6 inline-block" /> Energy Industry Applications
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Oil & gas processing facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Industrial equipment buildings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Administrative offices
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Storage and warehouse facilities
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Shield className="w-6 h-6 inline-block" /> Industrial Performance
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Chemical resistance for harsh environments
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Fire resistance ratings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    High wind uplift performance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Temperature extremes tolerance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Low maintenance requirements
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Pampa's Industrial Roofing Demands
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Pampa's oil and gas industry creates demanding conditions for commercial roofing.
                Chemical exposure, extreme temperatures, high winds, and industrial operations
                require specialized roofing solutions that can withstand harsh environments while
                maintaining energy efficiency.
              </p>
              <p className="text-lg text-gray-700">
                TPO roofing excels in these industrial applications with superior chemical
                resistance, excellent fire ratings, and proven performance in oil & gas facilities
                throughout the Texas Panhandle.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Industrial TPO Systems for Pampa Facilities?
            </h2>
            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Chemical-Resistant TPO Formulations
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold mb-2">Standard TPO</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Basic chemical resistance for light industrial applications.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Office buildings</li>
                      <li>• Light manufacturing</li>
                      <li>• Retail facilities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <h4 className="font-bold mb-2">Enhanced TPO</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Superior chemical resistance for moderate industrial exposure.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Processing facilities</li>
                      <li>• Equipment buildings</li>
                      <li>• Storage warehouses</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <h4 className="font-bold mb-2">Industrial-Grade TPO</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Maximum chemical resistance for harsh industrial environments.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Oil & gas facilities</li>
                      <li>• Chemical processing</li>
                      <li>• Heavy industrial</li>
                    </ul>
                  </div>
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Cooling Cost Reduction</h3>
                  <p className="text-gray-700 mb-4">
                    White TPO membranes reflect + of solar energy, significantly reducing cooling
                    loads for industrial facilities and improving working conditions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand-gold"></div>
                      <div className="text-sm">Cooling Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-gold">$25K</div>
                      <div className="text-sm">Annual Savings</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Equipment Protection</h3>
                  <p className="text-gray-700 mb-4">
                    Cooler building temperatures extend the life of sensitive industrial equipment
                    and improve worker comfort in extreme Texas heat.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Extended equipment lifespan</li>
                    <li>• Reduced maintenance costs</li>
                    <li>• Improved worker safety</li>
                    <li>• Lower insurance premiums</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why TPO Is Ideal for Pampa Commercial Buildings
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pampa&apos;s position in the northern Texas Panhandle subjects commercial buildings to
              punishing weather extremes. Summer temperatures regularly exceed 100&deg;F, while
              winter cold fronts sweep south from the Oklahoma border with little terrain to slow
              them down. TPO&apos;s white reflective membrane addresses both ends of this spectrum
              &mdash; reflecting solar heat to reduce summer cooling costs by 20&ndash;30%, while
              maintaining flexibility in freezing temperatures that would crack rigid roofing
              materials.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wind uplift is a serious concern for flat commercial roofs in Gray County, where
              sustained winds regularly reach 30&ndash;40 mph and thunderstorm gusts can exceed 70
              mph. TPO systems installed with mechanical fastening and enhanced perimeter attachment
              resist these forces without the membrane peeling or ballooning. Heat-welded seams
              eliminate the weak points where wind-driven rain typically infiltrates other flat roof
              systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For properties near Pampa&apos;s oil and gas operations, TPO provides meaningful
              chemical resistance against airborne hydrocarbons and industrial fallout. While PVC
              remains the better choice for buildings with direct petroleum contact, TPO handles the
              ambient chemical exposure common throughout Gray County&apos;s industrial corridors.
              The membrane also resists ozone degradation &mdash; relevant in an area where flaring
              and petrochemical processing elevate atmospheric ozone levels above typical rural
              concentrations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Pampa TPO Maintenance in Agricultural Environment
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The agricultural activity surrounding Pampa creates maintenance considerations
              specific to this part of the Panhandle. During planting and harvest seasons, wind
              carries topsoil, crop dust, and particulate matter that settles on flat roof surfaces.
              This accumulation does more than look unsightly &mdash; it reduces the membrane&apos;s
              solar reflectivity, diminishing the energy efficiency that makes TPO valuable in the
              first place. A roof that reflected 85% of solar energy when new might only reflect 
              under a layer of agricultural dust.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We recommend cleaning TPO roofs in Pampa at least twice per year: once after spring
              planting season and again after fall harvest. A straightforward pressure washing
              restores the membrane&apos;s reflective properties and provides an opportunity to
              inspect drainage components. Clogged scuppers and drains are the most common
              maintenance issue we see on Pampa commercial roofs, as agricultural debris accumulates
              faster than property owners expect.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Pampa maintenance contracts include scheduled cleanings, drainage system
              inspections, and seam integrity checks at intervals calibrated to each property&apos;s
              dust exposure level. Buildings closer to active agricultural land or unpaved county
              roads need more frequent attention than those in downtown Pampa. Proactive maintenance
              extends TPO service life well beyond the standard 20&ndash;year warranty period and
              keeps energy savings at their maximum throughout the system&apos;s life.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does TPO Roofing FAQs - Pampa, TX Involve?
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is TPO roofing ideal for Pampa commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing excels in Pampa's Texas Panhandle climate due to its white reflective
                  surface that reduces cooling costs in extreme heat, superior resistance to UV
                  degradation, excellent performance against hail damage from 7-9 annual storms, and
                  strong wind uplift resistance for High Plains winds 60+ mph. TPO's heat-welded
                  seams create watertight bonds critical for Pampa's severe weather and
                  industrial/ranching environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does TPO roofing last in Pampa's climate?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Quality TPO roofing systems typically last 20-30 years in Pampa when properly
                  installed and maintained. The Texas Panhandle's intense sun, temperature
                  fluctuations, and industrial/ranching environment can stress roofing materials,
                  but TPO's UV resistance and flexibility help it withstand these conditions.
                  Regular inspections after hailstorms extend system lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is TPO roofing energy-efficient for Pampa businesses?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, TPO's white reflective surface significantly reduces cooling costs in Pampa's
                  hot climate. The membrane reflects sunlight and heat, keeping building interiors
                  cooler. Many Pampa commercial property owners see 20-30% reductions in summer
                  cooling expenses. TPO roofing often qualifies for energy efficiency tax credits
                  and utility rebates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does TPO roofing cost in Pampa?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  TPO roofing in Pampa typically costs $4-8 per square foot installed, depending on
                  building size, roof complexity, insulation requirements, and membrane thickness.
                  While initial costs are moderate, TPO provides excellent long-term value through
                  energy savings, durability, and low maintenance requirements. We provide free
                  estimates for Pampa commercial properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can TPO roofing withstand Pampa's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, properly installed TPO roofing with adequate membrane thickness (60-80 mil)
                  provides excellent hail resistance for Pampa's 7-9 annual hailstorms. TPO's
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amarillo, TX Location Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="pampa" currentService="tpo-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Pampa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Pampa ranching/oil property owners. Expert tpo roofing with
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
        <RelatedArticles pageSlug="tpo-roofing-pampa" />
      </div>
    </>
  );
}
