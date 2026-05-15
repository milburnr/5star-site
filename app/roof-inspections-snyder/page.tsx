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
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import {
  Droplets,
  Factory,
  Hospital,
  Landmark,
  Phone,
  Plane,
  School,
  Star,
  Store,
  Thermometer,
  Wheat,
} from "lucide-react";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-inspections-snyder/" },
  title: "Roof Inspections Snyder TX | 5 Star Roofing",
  description: "Professional roof inspections in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041 Insurance documentation support.",
  openGraph: {
    title: "Roof Inspections Snyder TX | 5 Star Roofing",
    description:
      "Professional roof inspections in Snyder TX. West Texas experiences 7-9 hailstorms annually. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-inspections-snyder/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/lubbock-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofInspectionsSnyderPage() {
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
            "@id": "https://5starroofingpros.com/roof-inspections-snyder/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/lubbock-hero.jpg",
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
            geo: { "@type": "GeoCoordinates", latitude: 32.7179, longitude: -100.9176 },
            url: "https://5starroofingpros.com/roof-inspections-snyder/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              name: "Snyder",
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
              "Expert roof inspections services in Snyder, TX. Free inspections, insurance claim assistance",
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
            serviceType: "Roof Inspections",
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
              name: "Snyder",
              "@id": "https://en.wikipedia.org/wiki/Snyder,_Texas",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
            },
            description:
              "Professional roof inspections in Snyder TX. West Texas experiences 7-9 hailstorms annually.",
          }),
        }}
      />
      {/* schema-cleanup:faqpage:removed */}
            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="midland"
        city="Snyder"
        service="Roof Inspections"
        h1="Roof Inspections in Snyder, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/lubbock-hero.jpg"
      
      breadcrumbItems={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Roof Inspections",
            url: "/roof-inspections/",
          },
          {
            name: "Snyder",
            url: "/roof-inspections-snyder/",
          },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Inspections for homes and businesses in Snyder, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Snyder as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Inspection scope: visual and drone assessment, photo report, and clear written findings on what needs repair versus replacement.</span></li>
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
                <div className="text-4xl font-bold text-brand-gold mb-3">Class 4</div>
                <div className="text-brand-brown font-semibold text-lg">Hail-Rated</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">7-9</div>
                <div className="text-brand-brown font-semibold text-lg">Hailstorms/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                
                <div className="text-4xl font-bold text-brand-gold mb-3">Free</div>
                <div className="text-brand-brown font-semibold text-lg">Inspections</div>
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
              What Makes Our Snyder Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Snyder's location in Scurry County creates unique roofing challenges. The West Texas
              experiences 7-9 hailstorms annually, sustained high winds, extreme temperature
              fluctuations, and severe weather conditions. Your roofing system must withstand these
              demanding conditions year after year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Commercial Roofing has protected properties throughout Snyder and
              Scurry County with premium materials and expert installation. From properties near
              Scurry County Museum to buildings throughout Snyder, we understand West Texas weather
              patterns, local building codes, and the specific needs of Scurry County property
              owners.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Serving Snyder, Texas
            </h2>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" city="Snyder, TX" />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does Our Comprehensive Roof Inspection Services for West Texas Properties
              Include?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Storm Damage Detection</h3>
                <p className="text-gray-700 leading-relaxed">
                  Scurry County supercells produce hail that bruises asphalt shingle mats and
                  punctures TPO or EPDM membranes without leaving obvious signs from the ground.
                  Our inspectors document strike patterns with thermal imaging and moisture meters,
                  the same evidence State Farm, Allstate, and Texas Farm Bureau adjusters ask for
                  when reviewing a wind and hail claim. Catching micro-fractures early keeps a
                  small repair from becoming a deck-and-decking tear-off later.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Preventive Maintenance Planning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Snyder roofs sit through 100-degree summers, sub-freezing winters, and dust
                  storms blowing off the Llano Estacado. That cycle loosens fasteners and dries out
                  sealants every season. Our assessment maps which flashings, pipe boots, and seam
                  laps are aging fastest on your specific roof. We then build a spring-and-fall
                  maintenance schedule sized to your warranty terms and roof type, whether that is
                  Class 4 impact-rated shingles or a mechanically-attached TPO membrane.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Insurance Documentation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our inspection reports are built for the way Texas wind-and-hail claims actually
                  get reviewed. Each report includes test-square photos, drone overviews, slope
                  diagrams, and measured square-foot counts that adjusters from State Farm,
                  Allstate, USAA, and Farmers can drop straight into Xactimate. Manufacturer
                  warranty packages from GAF, CertainTeed, and Owens Corning use the same
                  documentation, so one inspection covers both the claim and the warranty file.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Energy Efficiency Analysis
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  West Texas cooling loads run hard from May through September. Our inspections
                  use thermal cameras to map insulation gaps, wet insulation under membranes, and
                  air leakage at parapet walls and curb flashings. On low-slope buildings we check
                  whether the existing TPO or PVC still meets ENERGY STAR cool-roof reflectivity.
                  Findings are written so you can weigh added insulation against a recover or
                  replacement, instead of guessing.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-amber-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              What Does Advanced Inspection Technology Involve?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-4">
                  <Plane className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Drone Surveys</h3>
                <p className="text-gray-700">
                  Licensed drone pilots fly a structured grid over your roof and capture 4K
                  imagery of every slope, valley, and penetration. That works well on tall grain
                  elevators south of Snyder and on standing seam metal roofs where walking the
                  panels risks denting them. Adjusters get the same aerial views we do, which
                  shortens claim reviews.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">
                  <Thermometer className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Thermal Imaging</h3>
                <p className="text-gray-700">
                  Thermal cameras read temperature differences across the roof surface and pick
                  up wet insulation under TPO or modified bitumen long before a stain shows on the
                  ceiling. The same scan flags missing insulation at parapet walls and HVAC curbs,
                  which is where Snyder buildings tend to lose conditioned air during summer.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">
                  <Droplets className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Electronic Leak Detection
                </h3>
                <p className="text-gray-700">
                  Low-voltage electronic leak detection floods a TPO, PVC, or EPDM membrane with
                  current and reads the exact spot where water is finding a path through. That is
                  far more accurate than flood testing on a large Scurry County warehouse and
                  keeps the repair scope tight. We mark every breach so the crew patches the real
                  problem, not the visible stain three bays away.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-brown mb-4">
                Inspection Technology Benefits
              </h3>
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
              How Does the Detailed Inspection Process Work?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Pre-Inspection Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before we arrive in Snyder, we pull the property's prior permit records,
                    review any previous inspection PDFs, and check NOAA hail-event history for
                    Scurry County so we know which storm dates may apply to your claim. We confirm
                    access for the building, ladder placement, and any operational constraints,
                    which matters for cotton gins, grain handling sites, and active livestock
                    barns where we cannot work directly over animals or product.
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
                    The exterior pass combines drone overflight with hands-on access where the
                    roof can be safely walked. We check shingle granule loss, TPO seam welds,
                    fastener back-out, pipe boot cracking, scupper and downspout flow, and the
                    flashings at HVAC curbs and parapet caps. Each finding is geotagged so the
                    repair crew lands on the right slope of the right building when the work is
                    scheduled.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Interior Investigation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    From the attic or underside of a metal deck we read moisture content at
                    sheathing, decking, and insulation, then run a thermal camera along the
                    interior face of the roof. That is how we find wet insulation under a TPO
                    membrane that still looks fine from above. For Scurry County hay barns and
                    livestock buildings, this step also flags ventilation problems that lead to
                    condensation damage on the underside of the deck.
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
                    Findings are compared against the original manufacturer specs (GAF,
                    CertainTeed, Carlisle, or Firestone in most Snyder buildings), the adopted
                    Texas building code edition, and UL 2218 Class 4 and UL 580 ratings where
                    they apply. We then sort the list into urgent, near-term, and planned items
                    so you can budget the work across one or two seasons rather than treating
                    everything as same-day.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Comprehensive Reporting
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Within 24 hours you receive a written report with test-square photos, drone
                    imagery, thermal scans, slope measurements, and a prioritized scope of work
                    with line-item estimates. The format matches what State Farm, Allstate, and
                    Texas Farm Bureau adjusters expect, and the same package satisfies GAF,
                    CertainTeed, and Owens Corning warranty documentation so the file is ready
                    if a claim opens later.
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
                  We recommend bi-annual inspections (spring and fall) for all commercial properties
                  in West Texas, with additional post-storm inspections after severe weather events.
                  The intense UV exposure, temperature extremes, and frequent severe weather in
                  Scurry County accelerate roof aging and require more frequent monitoring than
                  milder climates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="storm-damage-detection"
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Can inspections detect storm damage that's not visible from the ground?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Absolutely. Our drone surveys and thermal imaging detect membrane punctures,
                  fastener loosening, and impact damage invisible from ground level. Hail damage, in
                  particular, can cause micro-fractures and membrane bruising that only show up
                  under thermal analysis or close inspection. Early detection prevents these minor
                  issues from becoming major leaks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="agricultural-considerations"
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Do agricultural buildings require different inspection approaches?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Yes, agricultural buildings present unique challenges including chemical exposure
                  from fertilizers, moisture from livestock areas, and heavy equipment loads. Our
                  agricultural inspections evaluate ventilation adequacy, chemical resistance, and
                  structural capacity while working around operational requirements like harvest
                  schedules and livestock care.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="energy-assessment" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  Do roof inspections include energy efficiency evaluation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Our comprehensive inspections include thermal imaging analysis that reveals energy
                  loss patterns, insulation defects, and air leakage points. This information helps
                  property owners reduce energy costs and improve building comfort. We often
                  identify energy savings opportunities that pay for roof improvements over time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="insurance-benefits" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do regular inspections help with insurance claims?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Regular inspection reports establish baseline roof conditions and document proper
                  maintenance, which insurance companies value when processing claims. Our detailed
                  documentation helps distinguish new storm damage from pre-existing conditions,
                  often resulting in better claim settlements. Some insurers offer premium discounts
                  for properties with regular professional inspections.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cost-savings" className="bg-white rounded-lg shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-brand-brown">
                  How do inspections save money in the long run?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Regular inspections identify small problems before they become expensive failures.
                  A  inspection can prevent a $20,hundreds of roofs across the Panhandle replacement by catching issues early.
                  Our maintenance recommendations extend roof life, reduce energy costs, and prevent
                  water damage that can cost tens of thousands in interior repairs and business
                  interruption.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Properties We Inspect Throughout Scurry County?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">
                  <Wheat className="w-6 h-6 inline-block" />
                </div>
                <h3 className="font-bold text-brand-brown mb-2">Agricultural Facilities</h3>
                <p className="text-gray-600 text-sm">
                  Grain storage, livestock barns, equipment buildings, processing facilities
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">
                  <School className="w-6 h-6 inline-block" />
                </div>
                <h3 className="font-bold text-brand-brown mb-2">Educational Buildings</h3>
                <p className="text-gray-600 text-sm">
                  Schools, colleges, libraries, training centers
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">
                  <Hospital className="w-6 h-6 inline-block" />
                </div>
                <h3 className="font-bold text-brand-brown mb-2">Healthcare Facilities</h3>
                <p className="text-gray-600 text-sm">
                  Hospitals, clinics, medical offices, assisted living
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">
                  <Store className="w-6 h-6 inline-block" />
                </div>
                <h3 className="font-bold text-brand-brown mb-2">Commercial Properties</h3>
                <p className="text-gray-600 text-sm">
                  Retail centers, office buildings, restaurants, banks
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">
                  <Factory className="w-6 h-6 inline-block" />
                </div>
                <h3 className="font-bold text-brand-brown mb-2">Industrial Buildings</h3>
                <p className="text-gray-600 text-sm">
                  Manufacturing, processing plants, warehouses, distribution
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">
                  <Landmark className="w-6 h-6 inline-block" />
                </div>
                <h3 className="font-bold text-brand-brown mb-2">Government Buildings</h3>
                <p className="text-gray-600 text-sm">
                  Municipal offices, courthouse, scheduling, utilities
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From the older brick storefronts along College Avenue in downtown Snyder to the
                cotton gins, grain handling sites, and ranch headquarters scattered across the
                Rolling Plains, we inspect the full range of roof systems found in Scurry County.
                That includes architectural asphalt shingles on residential properties, R-panel
                metal on barns, and TPO or modified bitumen on commercial buildings near U.S. 84
                and U.S. 180.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-amber-50 p-12 rounded-3xl border border-brand-gold/30">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown text-center">
              Seasonal Inspection Schedule for West Texas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  Spring Inspection (March-April)
                </h3>
                <p className="text-gray-700 mb-4">
                  Pre-storm-season check that documents winter freeze and wind damage before
                  the West Texas hail season ramps up in April and May.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Freeze-cycle cracking at shingle tabs, TPO seams, and sealant joints</li>
                  <li>• Drainage check on scuppers, downspouts, and interior drains for Llano Estacado dust buildup</li>
                  <li>• Fastener tightening on R-panel metal and standing seam clips</li>
                  <li>• Pipe boot and flashing reseal at HVAC curbs</li>
                  <li>• Baseline photo set saved for any wind and hail claim filed later that year</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-brand-brown mb-4">
                  Fall Inspection (October-November)
                </h3>
                <p className="text-gray-700 mb-4">
                  Post-storm-season check that assesses summer hail and wind damage on Scurry
                  County roofs before the first hard freeze.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Test-square hail evaluation on asphalt shingles and TPO membranes</li>
                  <li>• UV degradation on south-facing slopes after the West Texas summer</li>
                  <li>• Attic and underside thermal scan for wet insulation</li>
                  <li>• Drainage clearing ahead of winter storms</li>
                  <li>• Twelve-month maintenance plan with prioritized line items and budget ranges</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="tel:8066226041"
                className="bg-brand-gold-vibrant hover:bg-brand-gold text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-block"
              >
                Schedule Your Seasonal Inspection
              </a>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="snyder" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Snyder Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional roof inspections for West Texas properties. Our advanced technology and
            local expertise help you maintain, protect, and maximize the performance of your roofing
            investment. Trust Scurry County's inspection specialists.
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
        <RelatedArticles pageSlug="roof-inspections-snyder" />
      </div>
    </>
  );
}
