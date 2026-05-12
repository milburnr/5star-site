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
import { Building2, Check, Phone, School, Star } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/metal-roofing-canyon/" },
  title: "Metal Roofing Canyon TX | 5 Star Roofing",
  description:
    "Expert metal roofing in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Metal Roofing Canyon TX | 5 Star Roofing",
    description:
      "Expert metal roofing in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/metal-roofing-canyon/",
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

export default function MetalRoofingCanyonPage() {
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
            name: "Canyon",
            url: "/metal-roofing-canyon/",
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
            "@id": "https://5starroofingpros.com/metal-roofing-canyon/#localbusiness",
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
            geo: { "@type": "GeoCoordinates", latitude: 34.9803, longitude: -101.9188 },
            url: "https://5starroofingpros.com/metal-roofing-canyon/",
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
              "Expert metal roofing services in Canyon, TX. Free inspections, insurance claim assistance",
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
              "Expert metal roofing in Canyon TX. Texas Panhandle experiences 6-8 hailstorms annually. High Plains winds 60+ mph. Free inspections. Call (806) 622-6041",
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
                name: "Why is metal roofing ideal for Canyon properties?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing excels in Canyon's Texas Panhandle climate due to superior wind resistance (140+ mph ratings), Class A fire resistance, exceptional hail resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency from reflective coatings. Metal roofs withstand Canyon's 8-10 annual hailstorms, extreme temperature swings, and sustained high winds better than any other roofing material.",
                },
              },
              {
                "@type": "Question",
                name: "How long does metal roofing last in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing systems typically last 50-70 years in Canyon when properly installed. Standing seam metal roofs often outlast the buildings they protect. Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal roofing maintains performance decade after decade. Many metal roofs installed in the 1970s-80s still perform excellently today.",
                },
              },
              {
                "@type": "Question",
                name: "Is metal roofing energy-efficient for Canyon homes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, metal roofing with reflective coatings significantly reduces cooling costs in Canyon's hot climate. Cool-roof metal systems reflect solar radiation and re-emit absorbed heat, keeping buildings 10-15 degrees cooler. Canyon property owners typically see 20-40% reductions in summer cooling expenses. Metal roofing qualifies for energy efficiency tax credits.",
                },
              },
              {
                "@type": "Question",
                name: "How much does metal roofing cost in Canyon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing in Canyon typically costs $7-15 per square foot installed, depending on metal type, profile, coating, and roof complexity. Standing seam metal is premium ($12-15/sq ft), while R-panel and corrugated options are more economical ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+ year lifespan and low maintenance provide superior long-term value.",
                },
              },
              {
                "@type": "Question",
                name: "Can metal roofing withstand Canyon's hailstorms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, metal roofing with proper gauge thickness and dent-resistant coatings provides excellent hail protection for Canyon's 8-10 annual hailstorms. 26-gauge steel with Kynar coatings resists denting from golf ball-sized hail. Stone-coated metal shingles offer additional impact protection. Many insurance companies offer premium discounts for impact-resistant metal roofing installations.",
                },
              },
            ],
          }),
        }}
      />
            <InteriorHeroSection
        heroVariant="service-location"
        city="Canyon"
        service="Metal Roofing"
        h1="Metal Roofing in Canyon, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-sanderson-23-1280w.webp"
      />
      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">
                  <AnimatedCounter to={350} suffix="+" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Canyon Projects</div>
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
              What Does Premium Metal Roofing for Canyon Educational & Commercial Properties
              Include?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <School className="w-6 h-6 inline-block" /> Educational Excellence
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    WTAMU campus buildings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Canyon ISD facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Student housing complexes
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Athletic and recreational buildings
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Administrative offices
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Building2 className="w-6 h-6 inline-block" /> Commercial Solutions
                </h3>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Downtown business district
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Tourism and hospitality
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Healthcare facilities
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Retail and service centers
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Government buildings
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                Canyon's Educational & Tourism Focus
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Canyon's unique position as home to West Texas A&M University and gateway to Palo
                Duro Canyon creates specific roofing needs. Educational facilities require long-term
                durability and budget-conscious solutions, while tourism-related buildings need
                aesthetic appeal and weather resistance.
              </p>
              <p className="text-lg text-gray-700">
                Metal roofing delivers the perfect combination of durability, energy efficiency, and
                architectural versatility to meet Canyon's diverse commercial and institutional
                requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">60+</div>
                <div className="font-semibold mb-1">Year Lifespan</div>
                <div className="text-gray-600 text-sm">Educational buildings</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">40%</div>
                <div className="font-semibold mb-1">Energy Savings</div>
                <div className="text-gray-600 text-sm">Cooling cost reduction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">25</div>
                <div className="font-semibold mb-1">Color Options</div>
                <div className="text-gray-600 text-sm">Architectural choices</div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does Educational Facility Metal Roofing Advantages Involve?
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-brown">
                Budget-Conscious Long-Term Value
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Lifecycle Cost Benefits</h4>
                  <p className="text-gray-700 mb-4">
                    Metal roofing provides exceptional value for educational institutions through
                    minimal maintenance requirements and decades of reliable performance.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 50-70 year service life</li>
                    <li>• Minimal maintenance costs</li>
                    <li>• Energy savings up to 40%</li>
                    <li>• Insurance premium reductions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Grant & Funding Opportunities</h4>
                  <p className="text-gray-700 mb-4">
                    Energy-efficient metal roofing often qualifies for educational grants and
                    sustainability funding programs.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• USDA rural development grants</li>
                    <li>• Energy efficiency rebates</li>
                    <li>• State education facility funding</li>
                    <li>• Federal tax incentive eligibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Metal Roofing for Canyon&apos;s Unique Environment
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Canyon&apos;s geography creates roofing conditions unlike anywhere else in the
              Panhandle. The city sits at roughly 3,500 feet elevation on the edge of Palo Duro
              Canyon &mdash; the second-largest canyon in the United States. That proximity to the
              canyon rim produces gap winds as air funnels through the canyon system and accelerates
              across the surrounding terrain. These localized wind patterns can intensify gusts well
              beyond what open-plains communities experience, putting additional stress on roof
              systems that weren&apos;t engineered for uplift resistance.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Elevation compounds the challenge. At 3,500 feet, Canyon receives more intense UV
              radiation than lower-altitude cities, which accelerates the breakdown of
              petroleum-based roofing materials. Asphalt shingles in Canyon dry out, crack, and lose
              granules faster than identical products installed at lower elevations. Metal roofing
              with Kynar 500 or Hylar 5000 fluoropolymer coatings maintains color stability and
              surface integrity under intense UV exposure for decades. The coatings resist chalking
              and fading even after years of direct High Plains sun.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Canyon&apos;s role as home to West Texas A&amp;M University adds institutional roofing
              needs to the mix. University buildings, student housing, and the commercial districts
              that serve the campus population all benefit from metal roofing&apos;s longevity and
              low maintenance profile. A roof that lasts 50+ years aligns with the long planning
              horizons of educational institutions and reduces the disruption of periodic re-roofing
              projects on active campuses. For both residential and institutional properties in
              Randall County, metal roofing delivers the performance margin that Canyon&apos;s
              unique environmental conditions demand.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Metal Roofing Aesthetics for Canyon&apos;s Residential Areas
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              One of the most common concerns Canyon homeowners raise about metal roofing is how it
              will look on their home. That concern made sense decades ago when metal roofing meant
              corrugated barn panels. Today&apos;s residential metal roofing options are designed
              specifically for neighborhood aesthetics. Stone-coated metal shingles replicate the
              appearance of traditional architectural shingles, wood shake, or even clay tile
              &mdash; while hiding a 26-gauge steel core underneath. From the curb, neighbors see a
              conventional-looking roof. Underneath, you have Panhandle-grade protection.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Standing seam metal roofing takes a different aesthetic approach with clean, modern
              lines that complement Canyon&apos;s newer construction and ranch-style homes.
              Available in 25+ colors with low-gloss finishes that reduce reflectivity, standing
              seam profiles add architectural distinction while delivering the highest wind and
              water resistance available in residential roofing. The concealed fastener design means
              no visible screws or nail heads &mdash; just uninterrupted lines running from ridge to
              eave.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Both options come with color warranties backing the finish against fading, chalking,
              and peeling for 30&ndash;40 years. That warranty matters in Canyon, where the
              combination of High Plains UV intensity and blowing dust acts as a natural sandblaster
              on exterior surfaces. We bring physical samples to every Canyon consultation so
              homeowners can see and touch the actual materials, compare profiles against their
              existing siding and trim colors, and make confident decisions about the right look for
              their home. Several Canyon neighborhoods now have multiple metal roofs installed,
              making it easy to see real-world examples of how these systems age gracefully in the
              local climate.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Does Metal Roofing FAQs - Canyon, TX Include?
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Why is metal roofing ideal for Canyon properties?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing excels in Canyon's Texas Panhandle climate due to superior wind
                  resistance (140+ mph ratings), Class A fire resistance, exceptional hail
                  resistance with dent-resistant coatings, 50+ year lifespan, and energy efficiency
                  from reflective coatings. Metal roofs withstand Canyon's 8-10 annual hailstorms,
                  extreme temperature swings, and sustained high winds better than any other roofing
                  material.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How long does metal roofing last in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing systems typically last 50-70 years in Canyon when properly
                  installed. Standing seam metal roofs often outlast the buildings they protect.
                  Unlike asphalt shingles that deteriorate in Texas Panhandle UV exposure, metal
                  roofing maintains performance decade after decade. Many metal roofs installed in
                  the 1970s-80s still perform excellently today.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Is metal roofing energy-efficient for Canyon homes?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with reflective coatings significantly reduces cooling costs in
                  Canyon's hot climate. Cool-roof metal systems reflect solar radiation and re-emit
                  absorbed heat, keeping buildings 10-15 degrees cooler. Canyon property owners
                  typically see 20-40% reductions in summer cooling expenses. Metal roofing
                  qualifies for energy efficiency tax credits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  How much does metal roofing cost in Canyon?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Metal roofing in Canyon typically costs $7-15 per square foot installed, depending
                  on metal type, profile, coating, and roof complexity. Standing seam metal is
                  premium ($12-15/sq ft), while R-panel and corrugated options are more economical
                  ($7-10/sq ft). While initial costs exceed asphalt shingles, metal roofing's 50+
                  year lifespan and low maintenance provide superior long-term value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-semibold">
                  Can metal roofing withstand Canyon's hailstorms?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Yes, metal roofing with proper gauge thickness and dent-resistant coatings
                  provides excellent hail protection for Canyon's 8-10 annual hailstorms. 26-gauge
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
              Visit Our Amarillo Location - Serving Canyon
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
                title="Canyon, TX Area Map"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="canyon" currentService="metal-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Canyon Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Canyon property owners. Expert metal roofing with comprehensive
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
        <RelatedArticles pageSlug="metal-roofing-canyon" />
      </div>
    </>
  );
}
