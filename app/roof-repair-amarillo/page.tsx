import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import type { Metadata } from "next";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import {
  Check,
  CheckCircle,
  ClipboardList,
  Hammer,
  Leaf,
  Phone,
  Search,
  Snowflake,
  Sprout,
  Sun,
  Tornado,
  Zap,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-repair-amarillo/" },
  title: "Roof Repair Amarillo TX | 5 Star Roofing",
  description:
    "Professional roof repair in Amarillo TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Repair Amarillo TX | 5 Star Roofing",
    description:
      "Professional roof repair in Amarillo TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-repair-amarillo/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofRepairAmarilloPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-repair-amarillo/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-27-1280w.jpg",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 35.1768, longitude: -101.859 },
            url: "https://5starroofingpros.com/roof-repair-amarillo/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              name: "Amarillo",
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
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            description:
              "Professional roof repair in Amarillo TX. Expert installation, warranties, and insurance assistance.",
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
              name: "5 Star Roofing",
              url: "https://5starroofingpros.com",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Amarillo",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Potter County",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
            description:
              "Comprehensive roof repair services for Amarillo homes built from 1950s-2020s, addressing climate-related damage from Texas Panhandle weather extremes.",
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
                name: "Why do Amarillo roofs fail more often than other Texas cities?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amarillo's location in the Texas Panhandle creates unique stresses: extreme temperature swings from -10°F to 105°F cause expansion/contraction damage, constant 15+ mph winds loosen shingles, and frequent hailstorms damage roofing materials. The median home age of 52 years means many roofs are past their prime lifespan.",
                },
              },
              {
                "@type": "Question",
                name: "What roof repairs are most common in historic Wolflin and Paramount Terrace?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "These 1940s-1960s neighborhoods typically need: deteriorated wood decking replacement, failed flashing around brick chimneys, worn composite shingle replacement, and gutter system upgrades. Many homes still have original cedar shakes requiring specialized restoration techniques.",
                },
              },
              {
                "@type": "Question",
                name: "How much does roof repair cost in Amarillo compared to Dallas or Houston?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amarillo roof repairs average 15-20% less than major metro areas. Minor repairs: $400-900, moderate damage: $900-2,800, extensive repairs: $2,800-6,500. However, material costs are rising due to frequent hail damage creating supply shortages across the Panhandle.",
                },
              },
              {
                "@type": "Question",
                name: "When is the best time to schedule roof repairs in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Late fall through early spring (October-March) offers the most stable weather. Avoid summer heat stress repairs and spring hail season scheduling. storm repairs are available year-round, but planned work should avoid the peak storm months of April-July.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need special permits for roof repairs in Potter County?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Minor repairs under $1,000 typically don't require permits. Structural repairs, complete sections, or work involving electrical/plumbing need City of Amarillo permits. We handle all permit applications and ensure compliance with local wind load requirements for the Texas Panhandle.",
                },
              },
              {
                "@type": "Question",
                name: "What roofing materials work best in Amarillo's climate extremes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Impact-resistant asphalt shingles (Class 3-4) perform best against hail. Metal roofing excels in high winds and temperature extremes. Avoid standard 3-tab shingles which fail quickly. Clay tiles work but require structural reinforcement for wind uplift in this region.",
                },
              },
            ],
          }),
        }}
      />

      <InteriorHeroSection
        heroVariant="service-location"
        citySlug="amarillo"
        city="Amarillo"
        service="Roof Repair"
        h1="Roof Repair in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-wichita-falls-27-1280w.jpg"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Repair", url: "/roof-repair/" },
          { name: "Amarillo", url: "/roof-repair-amarillo/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Roof Repair for homes and businesses in Amarillo, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Amarillo as part of its West Texas service area.</span></li>
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
              Why Does Amarillo Roofs Need Specialized Care?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Amarillo's position in the Texas Panhandle creates one of the most challenging roofing
              environments in the state. With a median home construction year of 1972, over 40% of
              the city's housing stock faces age-related roofing issues compounded by extreme
              weather conditions.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our climate presents unique challenges: temperature swings from -10°F to 105°F cause
              severe expansion and contraction stress, constant winds averaging 15+ mph accelerate
              material degradation, and frequent hailstorms create both visible and hidden damage.
              These conditions demand specialized repair techniques and materials engineered for
              Texas Panhandle extremes.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Historic Housing Challenges
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 1950s-1970s homes in Wolflin and North Heights still carrying original wood shake or 3-tab asphalt</li>
                  <li>• Brittle 1x6 plank decking in older Potter County neighborhoods that flexes under modern shingle weight</li>
                  <li>• Mid-century attics built with ridge venting alone, leaving intake airflow short of current code</li>
                  <li>• Galvanized step flashing corroded at brick chimneys and skylights, a common leak source in homes east of Western Street</li>
                  <li>• Two-layer roof systems from earlier re-roofs that hide rotted decking beneath the top course</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Climate-Related Damage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hail bruising and granule loss from Panhandle supercells tracking out of the Llano Estacado</li>
                  <li>• Wind uplift along eaves and ridges from sustained 25+ mph gusts off I-40</li>
                  <li>• Accelerated UV degradation at Amarillo&apos;s 3,605-foot elevation, especially on south- and west-facing slopes</li>
                  <li>• Freeze-thaw cycles that crack pipe boots, splitting sealant lines along valleys and flashing</li>
                  <li>• Wind-driven caliche and grit that abrades shingle granules years ahead of schedule</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Amarillo Neighborhoods Do We Serve?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Each Amarillo neighborhood presents unique roofing challenges based on construction
              era, architectural style, and exposure to prevailing winds.
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Historic Districts</h3>
                <p className="text-gray-600 mb-4">
                  1940s-1960s construction in Potter County that calls for careful restoration work.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Wolflin: brick homes with steep gables, often still carrying original wood shake under composition layers</li>
                  <li>• Paramount Terrace: mid-century modern with low-slope sections better suited to TPO or modified bitumen than shingles</li>
                  <li>• North Heights: 1950s ranch builds running 3-tab asphalt that we typically replace with Class 4 impact-rated shingles</li>
                  <li>• Olsen Park: post-war homes where the gutter and fascia systems are the first thing to upgrade before the deck</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Established Areas</h3>
                <p className="text-gray-600 mb-4">
                  1970s-1990s developments across Randall and Potter Counties with aging roofing systems.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Westover Hills: 1980s builds running first-generation architectural shingles now past their service life</li>
                  <li>• River Road area: executive homes with hips, valleys, and dormers that need custom-fabricated step and counter flashing</li>
                  <li>• Sleepy Hollow: ranch profiles where soffit intake is undersized and we add baffled intake plus ridge vent in pairs</li>
                  <li>• Tascosa: suburban tracts where a GAF or Owens Corning architectural reroof handles the next 25-year cycle</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Newer Communities</h3>
                <p className="text-gray-600 mb-4">
                  2000s and newer construction with current roofing systems and active manufacturer warranties.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• The Colonies: Class 4 impact-rated asphalt shingles where most repair work is warranty documentation and selective replacement</li>
                  <li>• Ridgecrest: modern builds where hail claims with State Farm, Allstate, and USAA are the routine call</li>
                  <li>• Quail Creek: energy-efficient homes that benefit from reflective shingle colors and properly balanced soffit-to-ridge ventilation</li>
                  <li>• Westcliff: contemporary designs where standing seam metal or R-panel is often the better long-term choice over asphalt</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              How Does the Comprehensive Repair Process Work?
            </h2>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Search className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Detailed Inspection</h3>
                <p className="text-gray-700">
                  A walk of the roof field, eaves, valleys, and penetrations, with attic-side checks for moisture and decking condition. We look for hail bruising, wind uplift along ridges, and the Panhandle-specific wear patterns that show up at Amarillo&apos;s 3,605-foot elevation.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <ClipboardList className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Documentation</h3>
                <p className="text-gray-700">
                  Professional damage documentation for insurance claims, with expertise in Potter
                  County wind and hail damage requirements.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Hammer className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Expert Repairs</h3>
                <p className="text-gray-700">
                  Precision repairs using materials rated for Texas Panhandle extremes, with
                  techniques adapted to Amarillo's unique climate challenges.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <CheckCircle className="w-5 h-5 inline-block text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Quality Assurance</h3>
                <p className="text-gray-700">
                  A second-set-of-eyes walkthrough confirms fastening patterns meet the 110+ mph wind ratings Potter County jobs call for, and that flashing, underlayment, and ridge details are sealed against the next hail season.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Are the Most Common Roof Repairs in Amarillo?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Weather-Related Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Hail Damage:</strong> Bruised mats, granule loss, and split shingles from supercells rolling east out of the Llano Estacado
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Wind Uplift:</strong> Lifted tabs and missing shingles along eaves and ridges where sustained gusts off I-40 work fasteners loose
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Temperature Stress:</strong> Sealant strips and pipe boots that crack as Amarillo swings from sub-freezing winter nights to triple-digit July afternoons
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>UV Degradation:</strong> Accelerated aging on south- and west-facing slopes from the high-altitude Panhandle sun
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Wind-Driven Grit:</strong> Caliche dust off the plains that abrades shingle granules years ahead of typical wear
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Age-Related Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Deteriorated Decking:</strong> Rotted CDX plywood in 1970s North Heights and Olsen Park homes where attic ventilation never kept up with the insulation upgrades
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Failed Flashing:</strong> Corroded galvanized step and counter flashing around brick chimneys, skylights, and parapet walls in older Wolflin builds
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Gutter Failure:</strong> Sectional aluminum gutters that have separated at the seams from freeze-thaw expansion and 25+ mph wind loading
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Ventilation Problems:</strong> Mid-century Tascosa and Sleepy Hollow ranch designs running ridge vent only, with undersized soffit intake choking airflow
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              What Does Roofing Cost in Amarillo?
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Amarillo's roofing costs are generally 15-20% below major metropolitan areas, but
                frequent weather damage creates unique market conditions.
              </p>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Minor Repairs</h3>
                  <p className="text-3xl font-bold text-green-800 mb-2">$400-900</p>
                  <p className="text-gray-600">
                    Shingle replacement, flashing repair, minor leak fixes
                  </p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-2">Moderate Damage</h3>
                  <p className="text-3xl font-bold text-yellow-800 mb-2">$900-2,800</p>
                  <p className="text-gray-600">
                    Section replacement, decking repair, multi-area fixes
                  </p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Extensive Repairs</h3>
                  <p className="text-3xl font-bold text-red-800 mb-2">$2,800-6,500</p>
                  <p className="text-gray-600">
                    Major storm damage, structural work, complex restoration
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Amarillo Market Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • Material costs rising due to frequent hail damage creating regional shortages
                  </li>
                  <li>
                    • Labor availability affected by seasonal demand spikes after storm events
                  </li>
                  <li>
                    • Insurance claims common - most repairs covered under comprehensive policies
                  </li>
                  <li>
                    • Historic homes may require specialized materials increasing costs 20-30%
                  </li>
                </ul>
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
                  Why do Amarillo roofs fail more often than other Texas cities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo's location in the Texas Panhandle creates unique stresses: extreme
                  temperature swings from -10°F to 105°F cause expansion/contraction damage,
                  constant 15+ mph winds loosen shingles, and frequent hailstorms damage roofing
                  materials. The median home age of 52 years means many roofs are past their prime
                  lifespan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roof repairs are most common in historic Wolflin and Paramount Terrace?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  These 1940s-1960s neighborhoods typically need: deteriorated wood decking
                  replacement, failed flashing around brick chimneys, worn composite shingle
                  replacement, and gutter system upgrades. Many homes still have original cedar
                  shakes requiring specialized restoration techniques.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does roof repair cost in Amarillo compared to Dallas or Houston?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo roof repairs average 15-20% less than major metro areas. Minor repairs:
                  $400-900, moderate damage: $900-2,800, extensive repairs: $2,800-6,500. However,
                  material costs are rising due to frequent hail damage creating supply shortages
                  across the Panhandle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  When is the best time to schedule roof repairs in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Late fall through early spring (October-March) offers the most stable weather.
                  Avoid summer heat stress repairs and spring hail season scheduling. storm repairs
                  are available year-round, but planned work should avoid the peak storm months of
                  April-July.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do I need special permits for roof repairs in Potter County?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Minor repairs under $1,000 typically don't require permits. Structural repairs,
                  complete sections, or work involving electrical/plumbing need City of Amarillo
                  permits. We handle all permit applications and ensure compliance with local wind
                  load requirements for the Texas Panhandle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing materials work best in Amarillo's climate extremes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Impact-resistant asphalt shingles (Class 3-4) perform best against hail. Metal
                  roofing excels in high winds and temperature extremes. Avoid standard 3-tab
                  shingles which fail quickly. Clay tiles work but require structural reinforcement
                  for wind uplift in this region.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Are the Seasonal Roofing Considerations in Amarillo?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Understanding Amarillo's distinct seasonal patterns is crucial for effective roof
              maintenance and repair timing.
            </p>

            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  <Snowflake className="w-6 h-6 inline-block" /> Winter (Dec-Feb)
                </h3>
                <p className="text-gray-600 mb-4">Freeze-thaw cycles, blowing snow, and ice dam formation along north-facing eaves.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ice dam prevention with heat cable layout and self-adhered membrane along eaves</li>
                  <li>• Gutter winterization, debris clearing, and downspout extension checks</li>
                  <li>• Active-leak inspections scheduled around safe roof access</li>
                  <li>• Attic insulation and air-sealing assessment against current R-value targets</li>
                  <li>• Pipe boot and flashing checks where sealants split in sub-freezing temperatures</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-green-700">
                  <Sprout className="w-6 h-6 inline-block" /> Spring (Mar-May)
                </h3>
                <p className="text-gray-600 mb-4">Prime storm season across the Panhandle, with severe hail and damaging wind events.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Post-storm damage assessment with photo evidence and slope-by-slope notes</li>
                  <li>• Preventive maintenance checks on fasteners, sealants, and pipe boots</li>
                  <li>• Hail documentation packages built for State Farm, Allstate, USAA, and Texas Farm Bureau adjusters</li>
                  <li>• Insurance claim preparation including Xactimate line-item estimates</li>
                  <li>• Class 4 impact-rated shingle quotes for homeowners eligible for carrier discounts</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-red-700">
                  <Sun className="w-6 h-6 inline-block" /> Summer (Jun-Aug)
                </h3>
                <p className="text-gray-600 mb-4">Triple-digit highs and intense UV exposure at 3,605 feet of elevation.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Inspections for thermal expansion damage at sealant lines and metal flashing</li>
                  <li>• Soffit-to-ridge ventilation balancing to pull attic temps down</li>
                  <li>• Energy efficiency upgrades including radiant barrier and reflective shingle colors</li>
                  <li>• ENERGY STAR cool-roof options for residential and light-commercial buildings</li>
                  <li>• TPO or PVC membrane quotes for low-slope sections on Paramount Terrace and similar profiles</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-orange-700">
                  <Leaf className="w-6 h-6 inline-block" /> Fall (Sep-Nov)
                </h3>
                <p className="text-gray-600 mb-4">Stable weather and moderate temperatures make fall the strongest window for major roof work.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Full reroof projects in architectural asphalt, standing seam metal, or R-panel</li>
                  <li>• Winter readiness work including ice-and-water shield at vulnerable eaves</li>
                  <li>• Gutter cleaning, re-sloping, and downspout repair before freezing weather</li>
                  <li>• Preventive maintenance and sealant refresh at flashing and penetrations</li>
                  <li>• Attic ventilation upgrades while installers can work comfortably</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Do Roofing Materials Perform in Amarillo?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Different roofing materials perform uniquely in the Texas Panhandle's extreme climate
              conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Best Performing Materials
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-700">Impact-Resistant Asphalt Shingles</h4>
                    <p className="text-gray-600">
                      Class 3-4 rating, excellent hail protection, 25-30 year lifespan in Amarillo
                      conditions
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-gold-vibrant pl-4">
                    <h4 className="font-bold text-brand-brown">Standing Seam Metal</h4>
                    <p className="text-gray-600">
                      Superior wind resistance, excellent thermal performance, 40+ year durability
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-gold-vibrant pl-4">
                    <h4 className="font-bold text-brand-brown">Modified Bitumen (Commercial)</h4>
                    <p className="text-gray-600">
                      Excellent flat roof option, UV resistant, handles temperature extremes well
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Materials to Avoid</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-red-700">Standard 3-Tab Shingles</h4>
                    <p className="text-gray-600">
                      Typically rated to 60 mph and frequently lifted by sustained Panhandle gusts. Granule loss accelerates under wind-driven caliche, and most policies will only depreciate them at claim time.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-orange-700">Untreated Wood Shake</h4>
                    <p className="text-gray-600">
                      High maintenance, real fire risk on the dry Panhandle plains, and steady cupping and splitting through Amarillo freeze-thaw cycles. Many carriers including State Farm and Allstate restrict or surcharge wood-shake roofs.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-bold text-yellow-700">Standard Clay Tiles</h4>
                    <p className="text-gray-600">
                      Heavy on framing not engineered for the load, and prone to cracking when temperatures drop below freezing. Better suited to milder South Texas climates than the Panhandle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-amber-50 to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Does the Detailed Repair Process for Amarillo Homes Work?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our systematic approach ensures lasting repairs that withstand the Texas Panhandle's
              demanding climate.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 1: Comprehensive Assessment (Day 1)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-gray-800">Exterior Inspection</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Drone-assisted roof surface evaluation with high-resolution slope photos</li>
                      <li>• Wind damage pattern analysis along eaves, ridges, and field tabs</li>
                      <li>• Hail impact measurement against UL 2218 Class 3 and Class 4 criteria</li>
                      <li>• Flashing and penetration assessment at chimneys, skylights, and pipe boots</li>
                      <li>• Gutter, downspout, and fascia inspection for separation and freeze-thaw stress</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-gray-800">Interior Assessment</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Attic moisture readings and soffit-to-ridge ventilation balance check</li>
                      <li>• Structural beam and CDX decking evaluation for rot or sag</li>
                      <li>• Insulation condition assessment against current R-value targets</li>
                      <li>• Active leak detection with stain mapping in ceilings and gable walls</li>
                      <li>• Historical damage documentation built for insurance adjusters</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 2: Material Procurement (Days 2-3)
                </h3>
                <p className="text-gray-700 mb-4">
                  We source materials specifically rated for Texas Panhandle conditions:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Wind Rating Requirements</h4>
                    <p className="text-sm text-gray-600">
                      All materials must meet 110+ mph sustained wind ratings for Potter County
                      installation
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Hail Impact Standards</h4>
                    <p className="text-sm text-gray-600">
                      Class 3 minimum impact resistance, with Class 4 recommended for maximum
                      protection
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Temperature Tolerance</h4>
                    <p className="text-sm text-gray-600">
                      Materials tested for -20°F to 120°F temperature range performance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 3: Precision Repairs (Days 4-6)
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="font-bold">Structural Reinforcement</h4>
                    <p className="text-gray-700">
                      Enhanced fastening patterns for high-wind zones, structural decking
                      replacement where needed
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="font-bold">Weather Barrier Installation</h4>
                    <p className="text-gray-700">
                      Premium underlayment with self-sealing properties for ice dam protection
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="font-bold">Flashing Systems</h4>
                    <p className="text-gray-700">
                      Custom-fabricated metal flashing designed for Texas Panhandle wind patterns
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-gold pl-4">
                    <h4 className="font-bold">Final Surface Installation</h4>
                    <p className="text-gray-700">
                      Impact-resistant shingles with upgraded fastening for maximum wind resistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              What Warranty and Protection Plans Are Available?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Comprehensive coverage designed for Amarillo's challenging weather conditions.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Basic Protection</h3>
                <p className="text-3xl font-bold mb-4 text-green-800">2 Years</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    Workmanship warranty on repair labor and installation
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    Material defect coverage backed by manufacturers including GAF, CertainTeed, and Owens Corning
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    Scheduled leak repair on covered workmanship
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    Annual inspection included with photo report
                  </li>
                </ul>
                <p className="text-gray-600">A fit for minor repairs and ongoing maintenance on Amarillo homes.</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border-4 border-brand-gold/50">
                <div className="text-center mb-4">
                  <span className="bg-brand-brown text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Storm Shield</h3>
                <p className="text-3xl font-bold mb-4 text-brand-brown">5 Years</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    All Basic Protection features
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Hail damage coverage
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Wind damage protection
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Priority post-storm documentation
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Insurance claim assistance
                  </li>
                </ul>
                <p className="text-gray-600">
                  Ideal for comprehensive roof repairs and replacements
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Ultimate Guard</h3>
                <p className="text-3xl font-bold mb-4 text-brand-brown">10 Years</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    All Storm Shield features included
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Extended manufacturer material warranty on Class 4 impact-rated shingles or standing seam metal
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Energy efficiency support on ENERGY STAR cool-roof systems
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Bi-annual professional maintenance visits including a post-spring storm season check
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-brand-gold-vibrant mr-2 flex-shrink-0 mt-0.5" />
                    Transferable to the next homeowner if you sell within the term
                  </li>
                </ul>
                <p className="text-gray-600">The full coverage tier for new roof installations in Potter and Randall Counties.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Does the Insurance Claims Process Work in Amarillo?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We've successfully processed over 500 insurance claims in Potter County, understanding
              local requirements and common issues.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Common Claim Types in Amarillo
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-brand-gold-vibrant"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Hail Damage Claims (85% of claims)</h4>
                      <p className="text-gray-600">
                        Granule loss, cracked shingles, impact damage to gutters and flashing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Wind Damage Claims (12% of claims)</h4>
                      <p className="text-gray-600">
                        Missing shingles, lifted edges, damaged ridge caps from sustained high winds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-yellow-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Ice Dam Claims (3% of claims)</h4>
                      <p className="text-gray-600">
                        Interior water damage from winter ice formation and backup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Our Claims Support Process
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Initial Documentation</h4>
                    <p className="text-gray-600">
                      Professional photography, detailed damage assessment, and preliminary repair
                      estimate within 24 hours
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">2. Insurance Company Interface</h4>
                    <p className="text-gray-600">
                      Direct communication with adjusters, supplemental documentation, and scope
                      clarification
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Claim Optimization</h4>
                    <p className="text-gray-600">
                      Ensure all covered damage is included, fight for appropriate repair methods
                      and materials
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">4. Project Completion</h4>
                    <p className="text-gray-600">
                      Work directly with insurance payment schedules, provide final documentation
                      and warranties
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Repair</h3>
                <p className="text-gray-600 mb-4">
                  response for hail and wind damage throughout Potter County
                </p>
                <a
                  href="/roof-repair-amarillo/"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Repair</h3>
                <p className="text-gray-600 mb-4">
                  Specialized restoration for Panhandle hailstorm damage
                </p>
                <a
                  href="/hail-damage-repair-amarillo/"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Full Roof Replacement</h3>
                <p className="text-gray-600 mb-4">
                  Complete roofing systems for Amarillo's climate challenges
                </p>
                <a
                  href="/roof-replacement-amarillo/"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
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
        <InternalLinks currentCity="amarillo" currentService="roof-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Amarillo Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let Texas Panhandle weather compromise your home's protection. Expert roof repair
            with comprehensive warranties and insurance assistance for Potter County properties.
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
        <RelatedArticles pageSlug="roof-repair-amarillo" />
      </div>
    </>
  );
}
