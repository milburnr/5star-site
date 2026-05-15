import { FadeIn } from "@/components/FadeIn";
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
import {
  DollarSign,
  Factory,
  Fuel,
  Home,
  Mountain,
  Phone,
  Shield,
  Sun,
  Thermometer,
  TrendingDown,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-repair-midland/" },
  title: "Roof Repair Midland TX | Free Inspection | 5 Star Roofing",
  description: "Professional roof repair in Midland TX. Desert climate specialists, oil industry housing experts, . Call (806) 622-6041 Free inspections, fast scheduling. Call (806) 622-6041.",
  openGraph: {
    title: "Roof Repair Midland TX | Free Inspection | 5 Star Roofing",
    description:
      "Professional roof repair in Midland TX. Desert climate specialists, oil industry housing experts, . Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-repair-midland/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/midland-hero.jpg",
        width: 1280,
        height: 720,
        alt: "Damaged asphalt shingle roof in Midland TX showing storm damage — 5 Star Roofing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofRepairMidlandPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-repair-midland/#localbusiness",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/midland-hero.jpg",
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
            url: "https://5starroofingpros.com/roof-repair-midland/",
            areaServed: [
              {
                "@type": "City",
                "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
                name: "Midland",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Midland County",
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
              "Professional roof repair in Midland TX serving Permian Basin oil industry communities with desert climate expertise and boom-cycle housing specialists.",
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
                name: "Midland",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
              {
                "@type": "AdministrativeArea",
                name: "Midland County",
                containedInPlace: { "@type": "State", name: "Texas" },
              },
            ],
            description:
              "Comprehensive roof repair services for Midland's oil boom-era housing from 1970s-1990s, addressing desert climate damage and Permian Basin environmental challenges.",
          }),
        }}
      />


            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="midland"
        city="Midland"
        service="Roof Repair"
        h1="Roof Repair in Midland, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/shingle/shingle-midland-30-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Repair", url: "/roof-repair/" },
          { name: "Midland", url: "/roof-repair-midland/" },
        ]}
    />

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">38</div>
                <div className="text-brand-brown font-semibold text-lg">Median Home Age</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">110+</div>
                <div className="text-brand-brown font-semibold text-lg">°F Summer Heat</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">300+</div>
                <div className="text-brand-brown font-semibold text-lg">Sun Days/Year</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">
                  <Mountain className="w-6 h-6 inline-block" />
                  <Fuel className="w-6 h-6 inline-block" />
                  <Sun className="w-6 h-6 inline-block" />
                </div>
                <div className="text-brand-brown font-semibold text-lg">Desert Oil Hub</div>
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
              5 Star Roofing provides roof repair throughout Midland TX, hail damage, wind uplift, emergency patching, and insurance claim documentation for residential and commercial Permian Basin properties.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/roof-repair/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">← All Roof Repair</a>
              <a href="/roof-repair-odessa/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Odessa Roof Repair</a>
              <a href="/roof-repair-andrews/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">Andrews Roof Repair</a>
              <a href="/midland-tx-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold transition-colors">All Midland Services</a>
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
              Why Does Midland Roofs Need Specialized Desert Care?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Midland's position as the Permian Basin's economic hub creates unique roofing
              challenges. With a median home construction year of 1986, many properties were built
              during oil boom periods when rapid development sometimes prioritized speed over
              long-term durability in desert conditions.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The hot semi-arid climate delivers intense thermal stress with summer temperatures
              exceeding 110°F and over 300 days of sun annually. This creates rapid expansion and
              contraction cycles that stress materials, accelerated UV degradation that makes
              shingles brittle, and extreme heat that can cause premature failure of roofing
              components not rated for desert conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Oil Boom Construction Issues
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 1970s through 1990s Permian Basin builds where speed often beat spec sheets</li>
                  <li>• Soffit and ridge ventilation that falls short of current IRC airflow ratios</li>
                  <li>• Lower-grade 3-tab asphalt shingles installed during peak crew shortages</li>
                  <li>• Complex hip and valley layouts on Grassland Estates and Preston Place executive homes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Desert Climate Challenges
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 70°F daily temperature swings that fatigue asphalt mat and fastener heads</li>
                  <li>• Permian Basin UV index above 10 for most summer afternoons, baking out shingle plasticizers</li>
                  <li>• Hot southwest winds off the Llano Estacado that strip ceramic granules from aging shingles</li>
                  <li>• Less than 15 inches of annual rainfall, leaving gutters and scuppers full of caliche dust until the next big storm</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              Midland Neighborhoods Do We Serve?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Each Midland neighborhood reflects different oil boom periods, with distinct roofing
              challenges based on construction era, material quality, and exposure to desert
              conditions.
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Executive Districts</h3>
                <p className="text-gray-600 mb-4">
                  Custom-built neighborhoods that grew during oil prosperity along the west side of Loop 250.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Grassland Estates: 1990s-2000s custom homes with multi-pitch hip rooflines</li>
                  <li>• Preston Place: executive properties typically running GAF or CertainTeed architectural lines</li>
                  <li>• Fairway Estate: golf course community with concrete and clay tile roofs that need underlayment replacement on most reroofs</li>
                  <li>• Wedgewood Park: laminated architectural shingles installed during the late-1990s build-out</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Oil Boom Developments</h3>
                <p className="text-gray-600 mb-4">1970s and 1980s subdivisions where most roofs are now on a second or third installation.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Northeast Midland: boom-era housing east of Big Spring Street with deferred maintenance backlogs</li>
                  <li>• Greenwood: 1980s rural-suburban development off Highway 158 with longer drive times for inspections</li>
                  <li>• Holiday Hill: mid-range homes with original 3-tab asphalt now well past their 20-year window</li>
                  <li>• Wilshire Park: family neighborhoods where soffit vents were often painted over and need to be cut back open</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Modern Communities</h3>
                <p className="text-gray-600 mb-4">2000s and newer developments built to current IRC and IECC standards.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• The Preserve: mixed-use builds with ENERGY STAR cool-roof shingles and code-compliant ridge venting</li>
                  <li>• Vintage Park: newer construction with balanced intake and exhaust ventilation in place from day one</li>
                  <li>• Rock Creek: contemporary homes typically installed with Class 4 impact-rated asphalt shingles</li>
                  <li>• Cimmaron: planned community where HOA color and material standards drive matched-system replacements</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              How Does the Desert Climate-Specific Repair Process Work?
            </h2>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Thermometer className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Thermal Stress Analysis</h3>
                <p className="text-gray-700">
                  We map expansion and contraction cracks across the field, flashing, and ridge, then
                  document fastener fatigue and sealant fracture lines. Permian Basin temperature
                  swings between 30°F winter nights and 110°F summer afternoons drive most of the
                  failure patterns we find on Midland asphalt and metal systems.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Sun className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">UV Damage Evaluation</h3>
                <p className="text-gray-700">
                  We inspect south and west exposures for granule loss, shingle curling, and the
                  brittle mat fractures that follow 300-plus sun days a year on the Llano Estacado.
                  ASTM D3462 testing benchmarks help us decide whether a slope can be repaired or
                  whether the asphalt has aged past useful life.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Factory className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Boom-Era Construction Expertise
                </h3>
                <p className="text-gray-700">
                  We know the shortcuts taken during the 1970s and 1980s Permian Basin building
                  rush. Step flashing skipped on chimney sidewalls, drip edge omitted on rakes,
                  and underventilated attics show up across Greenwood and Northeast Midland on
                  almost every tear-off.
                </p>
              </div>
              <div className="text-center p-6 bg-brand-gold-light/10 rounded-xl">
                <div className="text-4xl mb-4">
                  <Shield className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Desert-Rated Solutions</h3>
                <p className="text-gray-700">
                  Repairs that match Midland conditions. ENERGY STAR cool-roof shingles from GAF
                  or Owens Corning, standing seam metal with PVDF coatings for hot west slopes, and
                  balanced ridge-and-soffit ventilation sized to the attic volume. Class 4
                  impact-rated options are on the table whenever hail history justifies them.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Are the Most Common Midland Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Desert Climate Damage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Thermal Shock Cracking:</strong> overnight temperature drops of 40°F
                    or more split aging mat asphalt and metal panel laps
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>UV Brittleness:</strong> south-facing shingles in Wedgewood Park and
                    Holiday Hill snap rather than flex under foot traffic
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Granule Loss:</strong> gutter screens fill with ceramic granules,
                    exposing the asphalt mat to direct Permian Basin sun
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Expansion Joint Failure:</strong> pipe boots, skylight curbs, and
                    parapet sealant fracture from constant cycling
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Boom-Era Construction Issues
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Inadequate Ventilation:</strong> attic exhaust without matched soffit
                    intake, common in Northeast Midland builds from the 1980s
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Substandard Flashing:</strong> roll-roofing-grade metals around
                    chimneys and skylights that should have been step-flashed in copper or
                    galvanized
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Fastener Failure:</strong> overdriven or underdriven nails in the
                    asphalt mat that back out under thermal cycling
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <strong>Executive Home Complexity:</strong> Grassland Estates and Preston
                    Place rooflines with multiple valleys and dormers that require careful tie-in
                    details
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              What Does Midland Oil Economy Roofing Costs Involve?
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Midland's roofing costs fluctuate with oil prices and local economic conditions.
                During boom periods, increased demand and higher wages drive prices above regional
                averages. Desert-rated materials also command premium pricing.
              </p>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Minor Repairs</h3>
                  <p className="text-3xl font-bold text-green-800 mb-2">$400-950</p>
                  <p className="text-gray-600">
                    UV damage repair, thermal crack sealing, ventilation fixes
                  </p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-2">Moderate Damage</h3>
                  <p className="text-3xl font-bold text-yellow-800 mb-2">$950-2,900</p>
                  <p className="text-gray-600">
                    Section replacement, cooling upgrades, boom-era corrections
                  </p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Extensive Repairs</h3>
                  <p className="text-3xl font-bold text-red-800 mb-2">$2,900-6,800</p>
                  <p className="text-gray-600">
                    Complete system overhaul, executive home restoration
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Midland Market Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Oil boom periods increase labor costs 15-25% above regional averages</li>
                  <li>• Desert-rated materials command 10-20% premium over standard products</li>
                  <li>• Executive neighborhoods may require specialized contractors</li>
                  <li>• Bust cycles can create opportunities for planned improvements</li>
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
                  How does Midland's desert climate affect roof longevity?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland's hot semi-arid climate with temperature extremes causes rapid thermal
                  expansion/contraction, accelerated UV degradation, and brittle material failure.
                  Desert conditions can reduce typical shingle life by 15-25% compared to moderate
                  climates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing challenges are unique to oil boom neighborhoods like Grassland
                  Estates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Oil boom developments from the 1970s-1990s often feature rushed construction with
                  lower-grade materials. These neighborhoods may have inadequate ventilation,
                  inferior flashing, and roofing systems that weren't designed for long-term desert
                  exposure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Are roof repairs more expensive in Midland due to the oil economy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland repair costs typically run 10-15% higher than regional averages during oil
                  booms due to increased demand and higher wages. Minor repairs: $400-950, moderate
                  damage: $950-2,900, extensive repairs: $2,900-6,800. During bust cycles, costs may
                  normalize.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do I know if my Midland roof has desert climate damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Signs include: brittle, easily cracked shingles; excessive granule loss in
                  gutters; curling shingle edges; failed caulk around penetrations; and visible
                  thermal stress cracking. Professional inspection reveals hidden damage not visible
                  from ground level.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What building permits are needed for roof repairs in Midland County?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Repairs under $1,000 typically don't require permits in Midland. Structural work,
                  electrical/plumbing involvement, or section replacements need city permits. We
                  handle all documentation and ensure compliance with local building codes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing materials perform best in Midland's desert conditions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Cool-roof rated shingles with high solar reflectance perform best. Metal roofing
                  excels in thermal cycling. Clay and concrete tiles work well but need structural
                  support. Avoid dark colors and standard 3-tab shingles which fail quickly in
                  desert heat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-orange-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Do You Protect Roofs in Desert Climates?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Specialized techniques for combating the intense thermal stress and UV exposure unique
              to the Permian Basin region.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  <Thermometer className="w-6 h-6 inline-block" /> Thermal Management Solutions
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
                      <h4 className="font-semibold">Cool Roof Technology</h4>
                      <p className="text-gray-600">
                        High-reflectance materials reducing surface temperatures by 50-80°F
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
                      <h4 className="font-semibold">Thermal Expansion Joints</h4>
                      <p className="text-gray-600">
                        Strategic placement to accommodate movement without failure
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
                      <h4 className="font-semibold">Enhanced Ventilation Systems</h4>
                      <p className="text-gray-600">
                        Active and passive cooling to reduce attic temperatures
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
                      <h4 className="font-semibold">Radiant Barriers</h4>
                      <p className="text-gray-600">
                        Reflective insulation reducing heat transfer by up to 97%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  <Sun className="w-6 h-6 inline-block" /> UV Protection Strategies
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
                      <h4 className="font-semibold">UV-Stabilized Materials</h4>
                      <p className="text-gray-600">
                        Polymer-modified asphalt shingles and PVDF-coated metal panels rated for
                        the Permian Basin&apos;s 300-plus sun days a year
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
                      <h4 className="font-semibold">Protective Coatings</h4>
                      <p className="text-gray-600">
                        Elastomeric topcoats over TPO and modified bitumen flat sections, with
                        ASTM-tested reflectivity values that hold up through Midland summers
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
                      <h4 className="font-semibold">Color Selection Optimization</h4>
                      <p className="text-gray-600">
                        Lighter shingle blends and white or light-stone metal finishes that drop
                        attic temperatures in west-facing Midland exposures
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
                      <h4 className="font-semibold">Enhanced Granule Systems</h4>
                      <p className="text-gray-600">
                        GAF, CertainTeed, and Owens Corning lines with kiln-fired ceramic granules
                        that resist the abrasive grit blown across the Llano Estacado
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
              How Does the Energy Industry Affect Roofing in Midland?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Understanding the unique challenges of Midland's oil boom and bust cycles on
              residential construction and maintenance standards.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-800">
                  <Fuel className="w-6 h-6 inline-block" /> Boom Period Construction (1970s-2000s)
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Rapid Development Shortcuts</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Builder-grade 3-tab asphalt installed to meet boom-era demand</li>
                      <li>• Inspection backlogs that left fastener patterns uncorrected</li>
                      <li>• Simplified hip and ridge details that fail under thermal cycling</li>
                      <li>• No allowance for Permian Basin UV exposure in material specs</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Common Boom-Era Issues</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Roll-flashing where step flashing was needed at chimneys and sidewalls</li>
                      <li>• Attic exhaust without matched soffit intake, common in Greenwood and Wilshire Park</li>
                      <li>• Nail patterns that miss the manufacturer&apos;s nailing zone</li>
                      <li>• Felt underlayment below current code minimums and no ice-and-water shield in valleys</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Retrofitting Requirements</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Balanced ridge and soffit ventilation sized to the attic volume</li>
                      <li>• Six-nail fastening on architectural shingles for UL 580 wind uplift</li>
                      <li>• Galvanized step and counter-flashing at chimney and wall intersections</li>
                      <li>• Cool-roof granule blends or radiant barriers to cut summer attic temperatures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-800">
                  <Home className="w-6 h-6 inline-block" /> Executive Home Challenges
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Complex Architectural Features</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Multiple elevation changes and valleys</li>
                      <li>• Intricate flashing requirements</li>
                      <li>• Premium material specifications</li>
                      <li>• Custom color and style matching</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Specialized Access Requirements</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Landscaping and hardscape protection</li>
                      <li>• Security system considerations</li>
                      <li>• Architectural detail preservation</li>
                      <li>• HOA compliance and approval processes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">High-End Material Systems</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Designer shingle lines and specialty tiles</li>
                      <li>• Custom metal roofing systems</li>
                      <li>• Advanced gutter and downspout designs</li>
                      <li>• Integrated solar and smart home systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-amber-50 to-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Does the Comprehensive Desert Climate Repair Process Work?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our specialized methodology addresses the unique challenges of extreme desert
              conditions in the Permian Basin.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 1: Desert-Specific Damage Assessment
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Thermal Stress Evaluation</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Field, ridge, and valley crack mapping with photo documentation</li>
                      <li>• Fastener back-out and pull-through assessment in the nailing zone</li>
                      <li>• Pipe-boot, skylight curb, and parapet sealant fracture documentation</li>
                      <li>• Deck movement and truss-uplift analysis at gable ends</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">UV Degradation Analysis</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Granule loss measured against ASTM D3462 benchmarks</li>
                      <li>• Mat brittleness checked by flexing south-facing samples</li>
                      <li>• Color fade comparison between exposed slopes and protected eaves</li>
                      <li>• Elastomeric and aluminized coating condition on flat sections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Energy Efficiency Review</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Attic temperature readings during peak afternoon heat</li>
                      <li>• Net free vent area calculated against IRC minimums</li>
                      <li>• Insulation depth and compression check across the attic floor</li>
                      <li>• ENERGY STAR cool-roof shingle and metal options reviewed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 2: Desert-Rated Material Selection
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Performance Criteria</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="font-semibold">Temperature Rating:</span> -20°F to 180°F
                        operational range
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="font-semibold">UV Resistance:</span> 20+ year UV stability
                        certification
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="font-semibold">Solar Reflectance:</span> 0.65+ initial
                        reflectivity rating
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="font-semibold">Wind Rating:</span> 110+ mph sustained wind
                        resistance
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Recommended Systems</h4>
                    <div className="space-y-2">
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                        <span className="font-semibold text-green-800">Cool Roof Shingles:</span>{" "}
                        GAF Timberline Cool Series, Owens Corning TruDefinition Cool
                      </div>
                      <div className="bg-amber-50 p-3 rounded border-l-4 border-brand-gold-vibrant">
                        <span className="font-semibold text-brand-brown">Metal Systems:</span>{" "}
                        Standing seam with PVDF coatings, high-reflectance finishes
                      </div>
                      <div className="bg-amber-50 p-3 rounded border-l-4 border-brand-gold-vibrant">
                        <span className="font-semibold text-brand-brown">Tile Options:</span>{" "}
                        Concrete tiles with thermal barrier coatings
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">
                  Phase 3: Installation with Climate Adaptations
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">
                      Thermal Management Installation
                    </h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Balanced ridge and soffit ventilation sized to the attic cubic footage</li>
                      <li>• Foil-faced radiant barrier integrated under the deck on hot west slopes</li>
                      <li>• Expansion gaps at metal panel laps and counter-flashing details</li>
                      <li>• ENERGY STAR cool-roof shingles or PVDF-coated standing seam metal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Quality Assurance Protocols</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Post-install attic temperature readings to confirm ventilation works</li>
                      <li>• Thermal imaging sweep to find missed insulation gaps and hot spots</li>
                      <li>• Nail-gun pressure set to manufacturer specs for the asphalt mat</li>
                      <li>• Sealant pull-tests at pipe boots, skylight curbs, and wall flashings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown text-center">
              What Does Oil Boom vs Bust Cycle Roofing Strategy Involve?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Strategic timing and planning considerations for roofing projects based on Midland's
              economic cycles.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-800">
                  <DollarSign className="w-6 h-6 inline-block" /> Boom Period Considerations
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-700">Market Conditions</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Labor costs 15-25% above regional averages</li>
                      <li>• Material shortages and extended lead times</li>
                      <li>• High demand requiring advance scheduling</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-700">Strategic Advantages</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Higher property values justify premium materials</li>
                      <li>• Access to latest roofing technologies</li>
                      <li>• Enhanced warranty options available</li>
                      <li>• Improved resale value from quality upgrades</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-700">Timing Recommendations</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Schedule preventive maintenance to avoid emergencies</li>
                      <li>• Plan major projects 6-12 months in advance</li>
                      <li>• Consider off-season scheduling for better pricing</li>
                      <li>• Bundle multiple properties for volume discounts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-800">
                  <TrendingDown className="w-6 h-6 inline-block" /> Bust Period Opportunities
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-green-700">Market Advantages</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Labor costs settle back toward Texas Panhandle norms</li>
                      <li>• Shorter lead times on GAF, CertainTeed, and Owens Corning shingles</li>
                      <li>• Crews can give Midland County jobs full attention without juggling boom-era backlogs</li>
                      <li>• More time for proper deck inspection and flashing detail work</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-green-700">Investment Strategy</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Good window for full reroofs on Greenwood and Holiday Hill homes that are 25-plus years out</li>
                      <li>• ENERGY STAR cool-roof shingles or standing seam metal pay back over Permian Basin summers</li>
                      <li>• Tile and architectural shingle upgrades hold value into the next boom cycle</li>
                      <li>• Scheduled maintenance keeps current systems running until replacement makes sense</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-green-700">Quality Focus</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Full attic and deck inspections, not just slope-level walkthroughs</li>
                      <li>• Class 4 impact-rated asphalt available at fair pricing</li>
                      <li>• Installation sequencing that lets each detail get verified before the next slope starts</li>
                      <li>• Manufacturer warranty registration documented at handover</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              How Does This Roofing Improve Energy Efficiency?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Desert climate roofing improvements that deliver immediate and long-term energy
              savings for Midland homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Cool Roof Technology Benefits
                </h3>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Temperature Reduction</h4>
                    <p className="text-gray-600 text-sm">
                      Surface temperatures reduced by 50-80°F compared to standard dark roofs,
                      significantly lowering cooling costs
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Energy Cost Savings</h4>
                    <p className="text-gray-600 text-sm">
                      15-40% reduction in summer cooling costs, with payback periods of 3-7 years in
                      Midland's climate
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Extended Equipment Life</h4>
                    <p className="text-gray-600 text-sm">
                      HVAC systems last longer with reduced thermal stress, lowering replacement and
                      maintenance costs
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Property Value Enhancement</h4>
                    <p className="text-gray-600 text-sm">
                      Energy-efficient roofing increases home value and marketability in Midland's
                      competitive real estate market
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  ROI Analysis for Desert Climate Improvements
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Initial Investment Recovery</h4>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2">
                        <strong>Cool Roof Upgrade:</strong> $2,000-4,500 additional cost
                      </p>
                      <p className="mb-2">
                        <strong>Annual Savings:</strong> $300-800 in energy costs
                      </p>
                      <p>
                        <strong>Payback Period:</strong> 3-7 years
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Long-Term Value</h4>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2">
                        <strong>Extended Roof Life:</strong> 5-10 years additional lifespan
                      </p>
                      <p className="mb-2">
                        <strong>HVAC Savings:</strong> $1,500-3,000 in deferred replacement costs
                      </p>
                      <p>
                        <strong>Total 20-Year Savings:</strong> $15,000-25,000
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Incentives & Rebates</h4>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2">
                        <strong>Utility Rebates:</strong> Available for cool roof installations
                      </p>
                      <p className="mb-2">
                        <strong>Tax Credits:</strong> Federal energy efficiency incentives
                      </p>
                      <p>
                        <strong>Insurance Discounts:</strong> Potential premium reductions
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
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Storm Damage Repair</h3>
                <p className="text-gray-600 mb-4">
                  response for desert storm damage throughout Midland County
                </p>
                <a
                  href="/roof-repair-midland/"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Flat Roof Repair</h3>
                <p className="text-gray-600 mb-4">
                  Commercial and residential flat roof solutions for oil industry buildings
                </p>
                <a
                  href="/flat-roof-repair-midland-texas/"
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Cool Roof Installation</h3>
                <p className="text-gray-600 mb-4">
                  Energy-efficient roofing systems for desert climate conditions
                </p>
                <a href="/services/" className="text-brand-gold font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Serving the Permian Basin Hub
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Proudly serving Midland and surrounding Permian Basin communities with expert desert
              climate roofing solutions.
            </p>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" city="Midland, TX" />
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="midland" currentService="roof-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Midland Investment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let desert climate extremes compromise your home's protection. Expert roof repair
            with oil industry experience and desert-rated solutions for Midland County properties.
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
        <RelatedArticles pageSlug="roof-repair-midland" />
      </div>
    </>
  );
}
