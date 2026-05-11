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
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Check, Factory, Phone, Star, Wheat } from "lucide-react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "https://5starroofingpros.com/metal-roofing-perryton/" },
  title: "Metal Roofing Perryton TX | 5 Star Roofing",
  description:
    "Expert metal roofing in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Metal Roofing Perryton TX | 5 Star Roofing",
    description:
      "Expert metal roofing in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/metal-roofing-perryton/",
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

export default function MetalRoofingPerrytonPage() {
  return (
    <>
      {" "}
      <Breadcrumb
        items={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Metal Roofing",
            url: "/metal-roofing/",
          },
          {
            name: "Perryton",
            url: "/metal-roofing-perryton/",
          },
        ]}
      />
      {/* Sticky Contact Bar */}
      <StickyContactBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/metal-roofing-perryton/#localbusiness",
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
            geo: { "@type": "GeoCoordinates", latitude: 36.4, longitude: -100.8028 },
            url: "https://5starroofingpros.com/metal-roofing-perryton/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              name: "Perryton",
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
              "Expert metal roofing services in Perryton, TX. Free inspections, insurance claim assistance",
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
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              name: "Perryton",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Expert metal roofing in Perryton TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "Why is metal roofing ideal for Perryton properties?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing excels in Perryton's Texas Panhandle climate due to superior wind resistance (140+ mph ratings), Class A fire resistance, exceptional hail resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency from reflective coatings. Metal roofs withstand Perryton's 7-9 annual hailstorms, extreme temperature swings, and sustained high winds better than any other roofing material.",
                },
              },
              {
                "@type": "Question",
                name: "How long does metal roofing last in Perryton?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing systems typically last 50-70 years in Perryton when properly installed. Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains performance decade after decade. Many metal roofs installed in the 1970s-80s still perform excellently today.",
                },
              },
              {
                "@type": "Question",
                name: "Is metal roofing energy-efficient for Perryton homes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, metal roofing with reflective coatings significantly reduces cooling costs in Perryton's hot climate. Cool-roof metal systems reflect solar radiation and re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Perryton property owners typically see 20-40% reductions in summer cooling expenses. Metal roofing qualifies for energy efficiency tax credits.",
                },
              },
              {
                "@type": "Question",
                name: "How much does metal roofing cost in Perryton?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing in Perryton typically costs $7-15 per square foot installed, depending on metal type, profile, coating, and roof complexity. Standing seam metal is premium ($12-15/sq ft), while R-panel and corrugated options are more economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+ year lifespan and low maintenance provide superior long-term value.",
                },
              },
              {
                "@type": "Question",
                name: "Can metal roofing withstand Perryton's hailstorms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, metal roofing with proper gauge thickness and dent-resistant coatings provides excellent hail protection for Perryton's 7-9 annual hailstorms. 26-gauge steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated metal shingles offer additional impact protection. Many insurance companies offer premium discounts for impact-resistant metal roofing installations.",
                },
              },
            ],
          }),
        }}
      />
      <section
        className="relative bg-cover bg-center text-white py-32 min-h-[700px] flex items-center"
        style={{
          backgroundImage:
            "url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-25-1280w.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-zinc-900/75 to-gray-900/70"></div>
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                Metal Roofing in <span className="text-brand-gold-light">Perryton</span>
              </h1>
              <p className="text-3xl mb-6 font-bold text-brand-gold-light">
                Premium Metal Systems | 50+ Year Lifespan
              </p>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Expert metal roofing in Perryton TX. Texas Panhandle experiences 6-8 hailstorms
                annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:8066226041" className="btn-primary-hero">
                  <Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041
                </a>
                <a
                  href="/contact/"
                  className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-110 transition-all duration-300 text-lg shadow-2xl"
                >
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
              What Makes Our Perryton Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Perryton's location in the Texas Panhandle creates unique roofing challenges. Wheat
              country agricultural community. Texas Panhandle weather extremes—6-8 annual
              hailstorms, High Plains winds 60+ mph, and wheat country agricultural exposure with
              severe Panhandle hailstorms—demand superior roofing materials and expert installation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2014, we've protected 160+ Perryton properties with premium materials engineered
              for Panhandle weather. We understand local building codes, work seamlessly with
              Perryton property owners, and handle complete insurance claims. Most homeowners pay
              only their deductible when insurance covers storm damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Grain Industry Metal Roofing for Perryton Agricultural Facilities?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Wheat className="w-6 h-6 inline-block" /> Grain Facility Advantages
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Large clear-span capabilities (150+ feet)
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Heavy load capacity for grain storage
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Dust-resistant smooth surfaces
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Easy cleaning and maintenance
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Cost-effective per square foot
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Factory className="w-6 h-6 inline-block" /> Agricultural Applications
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Grain elevators and storage
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Feed processing facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Equipment storage buildings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Loading dock structures
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Administrative offices
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Perryton's Grain Industry Roofing Needs
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Perryton's position as a major grain handling center requires roofing systems that
                can span vast storage areas, support heavy loads, resist dust accumulation, and
                withstand the demanding conditions of grain processing operations.
              </p>
              <p className="text-lg text-gray-700">
                Metal roofing provides the optimal solution with unmatched clear-span capabilities,
                superior load-bearing capacity, and the durability needed for heavy-duty
                agricultural operations.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Large-Span Agricultural Building Solutions?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Clear Spans</h3>
                <div className="text-3xl font-bold text-brand-gold mb-2">150+</div>
                <div className="text-gray-600">Feet without supports</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Load Capacity</h3>
                <div className="text-3xl font-bold text-brand-gold mb-2">90</div>
                <div className="text-gray-600">PSF live load rating</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Service Life</h3>
                <div className="text-3xl font-bold text-brand-gold mb-2">60+</div>
                <div className="text-gray-600">Years in agricultural use</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Agricultural Building Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Structural Efficiency</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Maximum usable space</li>
                    <li>• Minimal interior columns</li>
                    <li>• Optimal storage capacity</li>
                    <li>• Equipment access optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Operational Advantages</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Easy maintenance access</li>
                    <li>• Dust accumulation resistance</li>
                    <li>• Chemical cleaning compatibility</li>
                    <li>• Lightning protection integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Perryton Properties Need Metal Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Perryton occupies one of the most wind-exposed positions in Texas. Sitting in
              Ochiltree County &mdash; just 12 miles from the Oklahoma border &mdash; the area faces
              sustained winds averaging 14+ mph with some of the strongest recorded gusts anywhere
              in the state. Cold fronts barrel down from the north with nothing to slow them across
              hundreds of miles of open plains. That constant wind pressure is the primary reason
              asphalt shingle roofs in Perryton fail prematurely. Tab shingles lift, fasteners back
              out, and underlayment gets exposed to UV degradation years ahead of schedule.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Metal roofing eliminates the weak points that wind exploits. Standing seam panels
              interlock along their entire length, and concealed clip systems allow thermal movement
              without compromising the weather barrier. Rated for 140+ mph winds, these systems
              handle Perryton&apos;s sustained gales and sudden gusts without the maintenance cycle
              that comes with conventional shingles. Agricultural dust and debris &mdash; an
              unavoidable reality in wheat country &mdash; slides off the smooth metal surface
              rather than embedding in granular coatings. That self-cleaning characteristic keeps
              the roof performing at full capacity without periodic cleaning or debris removal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 50+ year lifespan of metal roofing matters especially in Perryton, where replacing
              a roof means coordinating around harvest schedules, managing limited local contractor
              availability, and dealing with material delivery logistics in a remote Panhandle
              location. Installing a metal roof means property owners can focus on running their
              operations instead of managing recurring roof replacements. When you factor in reduced
              insurance premiums, lower energy costs from reflective coatings, and zero maintenance
              between installations, metal roofing delivers the best total cost of ownership for
              Ochiltree County properties.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Metal Roofing for Perryton&apos;s Agricultural Buildings
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Perryton&apos;s economy runs on wheat, and the buildings that support that industry
              &mdash; barns, grain storage facilities, equipment sheds, and maintenance shops
              &mdash; need roofing systems built for agricultural reality. Metal roofing has been
              the standard for agricultural construction in wheat country for good reason. R-panel
              and PBR (purlin-bearing rib) metal systems provide clear-span coverage over large
              footprints without interior supports, maximizing usable space for equipment storage
              and grain handling operations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Grain storage buildings face specific challenges that metal roofing addresses
              directly. Dust from wheat handling coats every surface, but metal&apos;s smooth
              profile prevents buildup and allows rain to wash surfaces clean naturally. Moisture
              control is critical around stored grain, and properly ventilated metal roof assemblies
              manage condensation far better than other materials. For equipment sheds housing
              combines, tractors, and implements worth hundreds of thousands of dollars, the fire
              resistance of metal roofing (Class A rated) provides protection that wooden or
              asphalt-covered structures simply cannot match.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We work with Perryton&apos;s agricultural operators on building schedules that respect
              the rhythm of farming &mdash; installing during slower periods between planting and
              harvest when access to buildings is easiest. Our crews understand the practical
              requirements of ag buildings: wide overhead door openings, ventilation integration,
              and drainage planning for large roof areas. Whether you&apos;re re-roofing an existing
              barn or building a new equipment shed, we engineer metal roofing systems sized for
              Perryton&apos;s specific wind loads and snow loads to meet both local code
              requirements and the real-world demands of Ochiltree County agriculture.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does Metal Roofing FAQs - Perryton, TX Involve?
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is metal roofing ideal for Perryton properties?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing excels in Perryton's Texas Panhandle climate due to superior wind
                  resistance (140+ mph ratings), Class A fire resistance, exceptional hail
                  resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency
                  from reflective coatings. Metal roofs withstand Perryton's 7-9 annual hailstorms,
                  extreme temperature swings, and sustained high winds better than any other roofing
                  material.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does metal roofing last in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing systems typically last 50-70 years in Perryton when properly
                  installed. Standing seam metal roofs often outlast the buildings they protect.
                  Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal
                  roofing maintains performance decade after decade. Many metal roofs installed in
                  the 1970s-80s still perform excellently today.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is metal roofing energy-efficient for Perryton homes?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with reflective coatings significantly reduces cooling costs in
                  Perryton's hot climate. Cool-roof metal systems reflect solar radiation and
                  re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Perryton property
                  owners typically see 20-40% reductions in summer cooling expenses. Metal roofing
                  qualifies for energy efficiency tax credits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does metal roofing cost in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing in Perryton typically costs $7-15 per square foot installed,
                  depending on metal type, profile, coating, and roof complexity. Standing seam
                  metal is premium ($12-15/sq ft), while R-panel and corrugated options are more
                  economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal
                  roofing's 50+ year lifespan and low maintenance provide superior long-term value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can metal roofing withstand Perryton's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with proper gauge thickness and dent-resistant coatings
                  provides excellent hail protection for Perryton's 7-9 annual hailstorms. 26-gauge
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
              Visit Our Amarillo Location - Serving Perryton
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
                title="Perryton, TX Area Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="perryton" currentService="metal-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton property owners. Expert metal roofing with comprehensive
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
        <RelatedArticles pageSlug="metal-roofing-perryton" />
      </div>
    </>
  );
}
