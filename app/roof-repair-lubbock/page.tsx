import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import type { Metadata } from "next";
import {
  CheckCircle,
  Home,
  Landmark,
  Microscope,
  Mountain,
  Phone,
  School,
  Tornado,
  Wind,
  XCircle,
  Zap,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-repair-lubbock/" },
  title: "Roof Repair Lubbock TX | Free Inspection | 5 Star Roofing",
  description: "Professional roof repair in Lubbock TX. South Plains weather specialists, dust storm damage experts, . Call (806) 622-6041 Free inspections, fast scheduling. Call (806) 622-6041.",
  openGraph: {
    title: "Roof Repair Lubbock TX | Free Inspection | 5 Star Roofing",
    description:
      "Professional roof repair in Lubbock TX. South Plains weather specialists, dust storm damage experts, . Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-repair-lubbock/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/lubbock-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Hail-damaged asphalt shingle roof with chalk markings in Lubbock TX — 5 Star Roofing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofRepairLubbockPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-repair-lubbock/#localbusiness",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
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
            url: "https://5starroofingpros.com/roof-repair-lubbock/",
            areaServed: [
              {
                "@type": "City",
                "@id": "https://en.wikipedia.org/wiki/Lubbock,_Texas",
                name: "Lubbock",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Lubbock County",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
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
              "Professional roof repair in Lubbock TX serving South Plains communities with dust storm damage expertise and Tech Terrace specialists.",
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
                name: "Lubbock",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Lubbock County",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
            description:
              "Comprehensive roof repair services for Lubbock's 1980s+ housing stock, addressing South Plains dust storm damage and university district needs.",
          }),
        }}
      />

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="lubbock"
        city="Lubbock"
        service="Roof Repair"
        h1="Roof Repair in Lubbock, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-50-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Repair", url: "/roof-repair/" },
          { name: "Lubbock", url: "/roof-repair-lubbock/" },
        ]}
    />

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">41</div>
                <div className="text-brand-brown font-semibold text-lg">Median Home Age</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">75+</div>
                <div className="text-brand-brown font-semibold text-lg">MPH Wind Gusts</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">0</div>
                <div className="text-brand-brown font-semibold text-lg">Wind Protection</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">
                  <Tornado className="w-6 h-6 inline-block" />
                  <Wind className="w-6 h-6 inline-block" />
                  <Mountain className="w-6 h-6 inline-block" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Dust Storms</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">

        {/* TL;DR */}
        <FadeIn>
          <section className="mb-10 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">Quick Summary</p>
            <p className="text-gray-800 font-medium leading-relaxed">
              5 Star Roofing repairs roofs throughout Lubbock TX, hail damage documentation, wind uplift repair, shingle replacement, and emergency repairs for homes and businesses on the South Plains.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-repair/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">← All Roof Repair</a>
              <a href="/hail-damage-repair-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Lubbock Hail Damage</a>
              <a href="/roof-replacement-lubbock/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Lubbock Roof Replacement</a>
              <a href="/lubbock-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">All Lubbock Services</a>
            </div>
          </section>
        </FadeIn>

        {/* Author byline */}
        <FadeIn>
          <div className="mb-8 max-w-5xl mx-auto flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-white text-xs font-bold flex-shrink-0">BT</div>
            <span>
              Written by <span className="font-semibold text-gray-700">Ben Terhune</span>, Owner — 5 Star Roofing, Amarillo TX
              &nbsp;·&nbsp; Updated May 2026
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why Lubbock Roofs Face Unique Challenges?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Lubbock's position in the heart of the South Plains creates distinct roofing
              challenges. With a median home construction year of 1983, the city's housing stock
              includes many 1980s-1990s developments that are reaching the typical roof replacement
              age, compounded by severe environmental stressors.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The flat South Plains landscape offers no natural wind protection, subjecting roofs to
              consistent stress from prevailing winds. Notorious dust storms (haboobs) can reduce
              visibility to near zero and sandblast exposed surfaces with fine particulates,
              accelerating material degradation. Spring supercells sweep through with wind gusts of
              60-77 mph, forcing rain beneath flashing and lifting shingle tabs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  University District Challenges
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Tech Terrace: 1950s-1970s brick homes with original 3-tab asphalt shingles, often missing modern ridge ventilation</li>
                  <li>• Student rental properties around Texas Tech with backlogged maintenance, where small leaks have sat through several seasons</li>
                  <li>• North Overton: dense infill housing with tight setbacks and limited ladder access along the alleys</li>
                  <li>• Medical District near UMC: professional buildings on Indiana Avenue requiring scheduled work around clinic hours</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  South Plains Environmental Damage
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Haboob dust storms off the Llano Estacado stripping granules from asphalt shingles</li>
                  <li>• Constant prevailing southwest wind with no terrain or tree cover to slow gusts</li>
                  <li>• Spring supercells along the South Plains driving rain sideways under flashing</li>
                  <li>• Open-sky UV exposure that ages standard asphalt faster than in shaded Texas markets</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Lubbock Neighborhoods Do We Serve?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Each Lubbock neighborhood presents unique roofing challenges based on construction
              era, proximity to Texas Tech, and exposure to South Plains weather patterns.
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">University Area</h3>
                <p className="text-gray-600 mb-4">Historic neighborhoods near the Texas Tech campus, mostly built before the 1980s</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tech Terrace: 1950s brick homes south of campus, often with original deck and limited ridge venting</li>
                  <li>• North Overton: dense infill near downtown with narrow alley access for tear-offs</li>
                  <li>• South Overton: mixed owner-occupied and rental stock, many roofs in their second or third asphalt cycle</li>
                  <li>• Maxey Park area near UMC: professional homes built mid-century, frequent valley and chimney flashing work</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Southwest Lubbock</h3>
                <p className="text-gray-600 mb-4">1980s-2000s family neighborhoods running south and west of Loop 289</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shadow Hills: larger executive homes with hips, valleys, and multiple dormers that complicate hail inspections</li>
                  <li>• Oakwood: late-1980s construction, much of it now on its second architectural asphalt roof</li>
                  <li>• Westridge: suburban tracts where annual maintenance keeps original systems serviceable</li>
                  <li>• Caprock: elevated lots that catch the full force of South Plains wind off the open prairie</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Newer Developments</h3>
                <p className="text-gray-600 mb-4">2000s-and-newer communities built with modern decking, synthetic underlayment, and balanced ventilation</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• The Reserve: luxury homes spec&apos;d with Class 4 impact shingles or standing seam metal</li>
                  <li>• Vintage Township: walkable, energy-conscious construction with ENERGY STAR cool-roof options on many homes</li>
                  <li>• Stone Gate: golf course community where wind-rated ridge caps matter on exposed fairway-facing lots</li>
                  <li>• Kelsey Park: contemporary architecture, many homes finished with standing seam metal in earth tones</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              How Does the South Plains-Specific Repair Process Work?
            </h2>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Microscope className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Dust Damage Assessment</h3>
                <p className="text-gray-700">
                  We measure granule loss after haboob events, check downspouts and gutter throats for fine Llano Estacado dust, and inspect ridge caps and south-facing slopes for UV damage that hits Lubbock harder than shaded markets to the east.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Wind className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Wind Uplift Analysis</h3>
                <p className="text-gray-700">
                  On open South Plains lots, we map tab lifting along windward eaves, check nail withdrawal at ridge caps, and look for fastener fatigue patterns typical of homes that take prevailing southwest gusts year-round.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Home className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  University District Expertise
                </h3>
                <p className="text-gray-700">
                  We work daily in Tech Terrace and the Overton corridor, so we know the common 1950s deck issues, the deferred maintenance patterns on student rentals, and how to coordinate with property managers around academic-year tenants.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Zap className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Post-Storm Repair Team</h3>
                <p className="text-gray-700">
                  Rapid deployment after supercell events, with expertise in documenting wind and
                  hail damage for insurance claims throughout Lubbock County.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Are the Most Common Lubbock Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Environmental Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Haboob Abrasion:</strong> windborne Llano Estacado dust strips ceramic granules from asphalt shingles, exposing the asphalt mat to UV
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Supercell Wind Damage:</strong> 60-77 mph gusts lift shingle tabs and cause nail withdrawal along ridges and rakes
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Gutter Clogging:</strong> fine dust packs into gutter throats and downspout elbows, sending water back under the drip edge
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Accelerated UV Aging:</strong> open South Plains exposure cooks south- and west-facing slopes faster than shaded markets
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Structural & Age Issues</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Tech Terrace Ventilation:</strong> 1950s-1970s homes often lack continuous ridge or soffit vents, trapping attic heat and aging shingles from below
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Student Rental Neglect:</strong> small leaks left for one or two academic years quietly rot decking around vent pipes and chimneys
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>1980s Shingle Failure:</strong> the city&apos;s median home year is 1983, and many original 20-year asphalt roofs are well past their service life
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Flashing Deterioration:</strong> wind-driven rain off the open prairie finds its way through aged step flashing on chimneys, dormers, and skylights
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              What Does Lubbock Roofing Investment Guide Involve?
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Lubbock's roofing costs reflect both university town dynamics and South Plains
                environmental challenges. Prices average 5-10% higher than smaller regional cities
                due to labor demand and material requirements.
              </p>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Minor Repairs</h3>
                  <p className="text-3xl font-bold text-green-800 mb-2">$350-850</p>
                  <p className="text-gray-600">
                    Granule restoration, minor leak fixes, gutter cleaning
                  </p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-2">Moderate Damage</h3>
                  <p className="text-3xl font-bold text-yellow-800 mb-2">$850-2,600</p>
                  <p className="text-gray-600">
                    Wind damage repair, section replacement, ventilation upgrades
                  </p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Extensive Repairs</h3>
                  <p className="text-3xl font-bold text-red-800 mb-2">$2,600-6,200</p>
                  <p className="text-gray-600">
                    Storm restoration, structural work, complete system overhaul
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Lubbock Market Considerations
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • University-area work near Texas Tech often needs pedestrian barricades and reduced-hour scheduling, which adds labor cost
                  </li>
                  <li>
                    • Peak hail season runs March through June. Demand spikes and Class 4 shingle stock can run thin at regional supply houses
                  </li>
                  <li>
                    • Tech Terrace homes built in the 1950s and 1960s may need color-matched architectural shingles to preserve the original streetscape
                  </li>
                  <li>
                    • Standing seam metal is gaining popularity in Lubbock because it shrugs off both haboob abrasion and sustained wind better than 3-tab asphalt
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
                  How do dust storms damage roofs in Lubbock?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  South Plains haboobs create sandblasting effects that strip granules from
                  shingles, clog gutters with fine particles, and accelerate UV degradation. The
                  abrasive action of windborne particles can reduce shingle life by 20-30% compared
                  to other regions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Tech Terrace neighborhood roofing unique?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Tech Terrace homes, built primarily in the 1950s-1970s near Texas Tech, often
                  feature original composition shingles and inadequate attic ventilation. Student
                  rental properties may have deferred maintenance, requiring comprehensive
                  inspections for hidden damage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Are roof repairs more expensive in Lubbock than other South Plains cities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lubbock repairs average 5-10% higher than smaller South Plains towns due to higher
                  labor costs and material demand. Minor repairs: $350-850, moderate damage:
                  $850-2,600, extensive repairs: $2,600-6,200. University area properties may cost
                  more due to access challenges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  When do spring supercells typically damage Lubbock roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Peak storm season runs March through June, with wind gusts of 60-77 mph common.
                  These supercells force rain beneath flashing and lift shingle tabs. Post-storm
                  inspections are crucial as damage may not be immediately visible from ground
                  level.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What permits are required for roof repairs in Lubbock city limits?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Minor repairs under $500 typically don't need permits. Structural work, section
                  replacements, or repairs affecting load-bearing elements require city permits. We
                  handle all paperwork and ensure compliance with Lubbock's building codes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does Lubbock's flat terrain affect roofing challenges?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The flat South Plains landscape offers no wind protection, creating consistent
                  stress on roofing materials. Homes face greater wind uplift forces and more UV
                  exposure without natural shade. Metal roofing performs especially well in these
                  conditions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-amber-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Do You Mitigate Environmental Roof Damage?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Specialized techniques for protecting roofs from the unique environmental challenges
              of the Lubbock region.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  <Mountain className="w-6 h-6 inline-block" /> Dust Storm Protection Systems
                </h3>
                <div className="space-y-3">
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
                      <h4 className="font-semibold">Enhanced Granule Protection</h4>
                      <p className="text-gray-600">
                        Premium asphalt shingles with tightly bonded ceramic granules from manufacturers like GAF and Owens Corning hold up better against South Plains dust abrasion than standard 3-tab products.
                      </p>
                    </div>
                  </div>
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
                      <h4 className="font-semibold">Advanced Gutter Guards</h4>
                      <p className="text-gray-600">
                        Fine-mesh stainless guards keep windblown dust and grit out of gutter throats while still passing the heavy spring rain that follows Lubbock storms.
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
                      <h4 className="font-semibold">Sealed Penetrations</h4>
                      <p className="text-gray-600">
                        Polyurethane and ASTM-rated sealants around plumbing boots, B-vents, and step flashing block the fine particulate that haboob winds push under loose laps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  <Wind className="w-6 h-6 inline-block" /> Wind Resistance Upgrades
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Enhanced Fastening Patterns</h4>
                      <p className="text-gray-600">
                        Six-nail high-wind nailing patterns and UL 580 wind-rated assemblies hold up to sustained prevailing winds across the open South Plains better than standard four-nail layouts.
                      </p>
                    </div>
                  </div>
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
                      <h4 className="font-semibold">Tab Reinforcement</h4>
                      <p className="text-gray-600">
                        Hand-sealed asphalt cement on starter courses, rake edges, and exposed tabs prevents the gradual lift that 60+ mph supercell gusts cause across Lubbock County roofs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-orange-600"
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
                      <h4 className="font-semibold">Ridge Cap Reinforcement</h4>
                      <p className="text-gray-600">
                        Mechanically attached hip and ridge caps with longer ring-shank nails hold the most wind-exposed line on the roof, where Lubbock failures usually start.
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
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Does University District Maintenance Strategies Include?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Specialized approaches for the unique challenges of properties near Texas Tech
              University campus.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-800">
                  <School className="w-6 h-6 inline-block" /> Student Rental Properties
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Deferred Maintenance Assessment</h4>
                    <p className="text-gray-700 text-sm">
                      We lift shingles around vent pipes, chimneys, and valleys on Overton and Tech Terrace rentals to find the hidden deck rot that years of small leaks leave behind.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Preventive Maintenance Programs</h4>
                    <p className="text-gray-700 text-sm">
                      Annual inspections timed to spring break or summer turnover catch supercell damage before fall move-in, when scheduling around tenants gets hard.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Landlord Liaison Services</h4>
                    <p className="text-gray-700 text-sm">
                      We coordinate directly with Lubbock property managers and absentee owners, working repairs around academic calendars and tenant lease cycles instead of around them.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Student-Safe Work Practices</h4>
                    <p className="text-gray-700 text-sm">
                      Crews keep ground zones clear during tear-offs around occupied student housing, with morning starts that respect late student schedules and walk-up traffic from campus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  <Landmark className="w-6 h-6 inline-block" /> Historic Tech Terrace
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Period-Appropriate Materials</h4>
                    <p className="text-gray-700 text-sm">
                      Architectural asphalt shingles in weathered wood and slate colors keep the Tech Terrace streetscape consistent while bringing the roof up to modern UL 2218 Class 4 impact ratings.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Structural Reinforcement</h4>
                    <p className="text-gray-700 text-sm">
                      We replace soft 1×6 board decking with structural sheathing where needed and add hurricane clips on rafters, so the roof meets current wind-load expectations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Ventilation Improvements</h4>
                    <p className="text-gray-700 text-sm">
                      Adding continuous ridge vents and soffit intake on Tech Terrace homes fixes the trapped attic heat that ages 1950s-era roof decks from below.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Energy Efficiency Upgrades</h4>
                    <p className="text-gray-700 text-sm">
                      Radiant barrier underlayment and ENERGY STAR cool-roof shingle options cut AC load through the long Lubbock summer without disturbing the historic look.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-amber-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Do You Choose the Right Roofing Material in Lubbock?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Optimized material choices for South Plains environmental conditions and university
              district requirements.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  <CheckCircle className="w-5 h-5 inline-block text-green-600" /> Recommended
                  Materials for Lubbock
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-800">Class 4 Impact Shingles</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Maximum hail protection with enhanced granule adhesion
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• GAF Timberline HD-Z</li>
                      <li>• Owens Corning Duration Storm</li>
                      <li>• CertainTeed Grand Manor</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold-vibrant pl-4">
                    <h4 className="font-bold text-brand-brown">Standing Seam Metal</h4>
                    <p className="text-gray-700 text-sm mb-2">Superior dust and wind resistance</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 26-gauge galvanized steel</li>
                      <li>• Kynar 500 finish system</li>
                      <li>• Mechanical seam construction</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-gold-vibrant pl-4">
                    <h4 className="font-bold text-brand-brown">Enhanced Underlayments</h4>
                    <p className="text-gray-700 text-sm mb-2">Superior moisture protection</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Self-adhering membranes</li>
                      <li>• High-temp rated materials</li>
                      <li>• Dust-resistant surfaces</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-red-700">
                  <XCircle className="w-5 h-5 inline-block text-red-600" /> Materials to Avoid in
                  South Plains
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-red-800">Basic 3-Tab Asphalt Shingles</h4>
                    <p className="text-gray-700 text-sm">
                      Loose granule adhesion gives up quickly under haboob abrasion and rarely makes it past 12-15 years on a Lubbock home.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-orange-800">Untreated Wood Shakes</h4>
                    <p className="text-gray-700 text-sm">
                      Fine South Plains dust packs into the grain and traps moisture against the wood, accelerating cupping and rot.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-bold text-yellow-800">Stark White or Light Surfaces</h4>
                    <p className="text-gray-700 text-sm">
                      Visible dust film shows on every breezy day in Lubbock and forces more frequent cleaning than weathered or earth-tone finishes.
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
              How Does Our Comprehensive Repair Process for South Plains Work?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our specialized methodology for addressing Lubbock's unique environmental challenges.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 1: Environmental Impact Assessment
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Dust Damage Evaluation</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Granule loss mapped slope by slope, with samples pulled from gutters and downspouts</li>
                      <li>• Gutter throat and downspout elbow inspection for packed Llano Estacado dust</li>
                      <li>• Attic intake checked for fine particulate buildup that chokes ventilation airflow</li>
                      <li>• South- and west-facing slopes inspected for UV blistering on dust-stripped areas</li>
                      <li>• Sealant condition checked at all plumbing boots, B-vents, and chimney flashing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Wind Stress Analysis</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Tab lifting patterns mapped along windward eaves and rakes facing prevailing southwest winds</li>
                      <li>• Nail withdrawal and fastener fatigue checked across ridge caps and exposed-edge courses</li>
                      <li>• Ridge cap shingles probed for adhesion loss in the most wind-exposed line of the roof</li>
                      <li>• Step and counter flashing checked for movement caused by daily thermal cycling on the South Plains</li>
                      <li>• Decking and rafter connections evaluated against current UL 580 wind-uplift expectations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 2: Specialized Material Procurement
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-green-700">Dust-Resistant Materials</h4>
                    <p className="text-gray-600 text-sm">
                      Architectural shingles with tightly bonded ceramic granules and standing seam metal panels handle haboob abrasion better than smooth or loosely surfaced products.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-brand-brown">Wind-Rated Components</h4>
                    <p className="text-gray-600 text-sm">
                      Shingles, ridge caps, and ridge vents rated to UL 580 wind-uplift standards with high-wind fastening patterns suited to open South Plains exposure.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-brand-brown">UV-Resistant Systems</h4>
                    <p className="text-gray-600 text-sm">
                      ENERGY STAR cool-roof shingles and reflective Kynar-finished metal panels slow the UV breakdown that hits south- and west-facing Lubbock slopes hardest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 3: Installation with Environmental Protections
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-gold p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        Enhanced Dust Protection Installation
                      </h4>
                      <p className="text-gray-700">
                        Hand-sealed plumbing boots and B-vents, step flashing tied into peel-and-stick underlayment at chimneys and dormers, and ridge vents with weather baffles that resist windblown South Plains dust.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">High-Wind Zone Fastening</h4>
                      <p className="text-gray-700">
                        Six-nail high-wind nailing on every shingle, mechanically attached hip and ridge caps, and metal drip edge with sealed starter courses along rake edges that take the brunt of prevailing wind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-gold p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">University District Coordination</h4>
                      <p className="text-gray-700">
                        Around Tech Terrace and the Overton corridor we schedule around final exams, move-in weekends, and landlord-tenant access rules, with ground crews on debris control to keep walkways clear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Do Insurance Claims for Environmental Damage Work?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Specialized expertise in documenting environmental damage unique to the South Plains
              region for insurance purposes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Dust Storm Damage Documentation
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Granule Loss Assessment</h4>
                    <p className="text-gray-600 text-sm">
                      Slope-by-slope photography and granule samples pulled from gutters give adjusters a measurable record of haboob impact on Lubbock asphalt shingles.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Accelerated Aging Evidence</h4>
                    <p className="text-gray-600 text-sm">
                      We document UV blistering and mat exposure on stripped sections so the claim file shows premature wear caused by South Plains dust events, not normal aging.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">System Infiltration Proof</h4>
                    <p className="text-gray-600 text-sm">
                      Attic and intake-vent photos showing fine windblown dust inside the assembly tie the interior issue back to the storm event for State Farm, Allstate, and Farmers adjusters.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Claims Process Support</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Environmental Damage Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      We know how Lubbock County windstorm and hail coverage applies to dust-driven granule loss, so the documentation matches the policy language adjusters read.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Adjuster Education</h4>
                    <p className="text-gray-600 text-sm">
                      Out-of-state adjusters from carriers like USAA or Farmers often haven&apos;t seen haboob abrasion before. We walk the roof with them and explain what they&apos;re looking at.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Supplemental Documentation</h4>
                    <p className="text-gray-600 text-sm">
                      When the initial scope misses dust-related damage, we pull moisture readings, drone imagery, and material samples to support a supplemental claim with the carrier.
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
                  response for supercell damage throughout Lubbock County
                </p>
                <a
                  href="/roof-repair-lubbock/"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Damage Repair</h3>
                <p className="text-gray-600 mb-4">
                  Specialized restoration for South Plains hailstorm damage
                </p>
                <a
                  href="/hail-damage-repair-lubbock/"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Metal Roofing Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  Superior wind and dust resistance for South Plains homes
                </p>
                <a
                  href="/metal-roofing-lubbock/"
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
              Serving the Hub City
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Proudly serving Lubbock and surrounding South Plains communities with expert roofing
              solutions.
            </p>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" city="Lubbock, TX" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="lubbock" currentService="roof-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Lubbock Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let South Plains weather compromise your home's protection. Expert roof repair
            with dust storm damage expertise and comprehensive warranties for Lubbock County
            properties.
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
        <RelatedArticles pageSlug="roof-repair-lubbock" />
      </div>
    </>
  );
}
