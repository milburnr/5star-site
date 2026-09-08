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
import { StickyContactBar } from "@/components/StickyContactBar";
import { AlertTriangle, Check, X } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://5starroofingpros.com/residential-standing-seam-metal-roofing/",
  },
  title: "Residential Standing Seam Metal Roofing Cost | Amarillo TX",
  description:
    "What standing seam costs on an Amarillo house against shingles, the cosmetic hail exclusion to check in your policy first, and the honest downsides. Call (806) 622-6041.",
  openGraph: {
    title: "Residential Standing Seam Metal Roofing Cost | Amarillo TX",
    description:
      "What standing seam costs on an Amarillo house against shingles, the cosmetic hail exclusion to check in your policy first, and the honest downsides.",
    url: "https://5starroofingpros.com/residential-standing-seam-metal-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Residential Standing Seam Metal Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ResidentialStandingSeamMetalRoofingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Residential Standing Seam Metal Roofing",
            name: "Residential Standing Seam Metal Roofing in Amarillo",
            description:
              "Standing seam metal roof installation on single-family homes in Amarillo, Texas, including the cost comparison against architectural shingles and the insurance implications of hail denting.",
            url: "https://5starroofingpros.com/residential-standing-seam-metal-roofing/",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2909 S Western St",
                addressLocality: "Amarillo",
                addressRegion: "TX",
                postalCode: "79109",
                addressCountry: "US",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Amarillo",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            isRelatedTo: {
              "@type": "Service",
              name: "Architectural Asphalt Shingle Roof Replacement",
              url: "https://5starroofingpros.com/asphalt-shingle-roofing-amarillo/",
            },
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
                name: "How much does a standing seam metal roof cost on a house in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standing seam metal runs $13 to $18 per square foot installed in the Texas market. For comparison, an example architectural shingle estimate on a simple one-story gable in Amarillo came to $15,036.55 in April 2026, about $7.52 per square foot all-in. So on the same house, standing seam is roughly double the shingle number, and the gap widens on a cut-up roof because every hip, valley and penetration has to be flashed in metal. We quote both side by side so you are comparing real figures for your roof rather than a national average.",
                },
              },
              {
                "@type": "Question",
                name: "What are the downsides of standing seam metal roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cost is the obvious one. The less obvious ones matter more in Amarillo: hail dents the panels without making them leak, and many homeowner policies carry a cosmetic damage exclusion on metal roof surfacing that makes those dents unpayable. Panels are also harder to match years later if a section is damaged, adding a satellite dish or a vent later means cutting a proper flashed penetration rather than a nail hole, and a bad install shows as oil canning across flat panel faces.",
                },
              },
              {
                "@type": "Question",
                name: "Does hail damage a standing seam metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It dents it. A metal roof will usually keep shedding water after a hail event that would have ended a shingle roof, which is the real argument for metal in this county. Potter County has recorded 131 severe hail days since 2000 and the largest stone on record here is 4.25 inches from May 2019. But the denting is visible and permanent, and whether it is a payable loss depends entirely on whether your policy excludes cosmetic damage. Read that clause before you buy the roof, not after the storm.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between standing seam and an exposed fastener metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standing seam hides its fasteners: panels are held by concealed clips and joined at raised seams above the water line, so nothing penetrates the weather surface. Exposed fastener panels (R-panel, ag panel) are screwed through the face into the deck, with a rubber washer at every screw. Those washers are the wear point, and after enough thermal cycling and Panhandle wind they need attention. Exposed fastener is cheaper up front and is a reasonable choice on a barn or a shop. Standing seam is what belongs on a house you intend to keep.",
                },
              },
              {
                "@type": "Question",
                name: "Which brand of standing seam metal roof is best?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Brand is the least important variable in this decision. Panel profile, panel gauge, the paint finish system, whether the seam is snap-lock or mechanically seamed, and above all the quality of the install determine how the roof performs. We will walk you through those choices on your specific roof, and we do not hold ourselves out as a certified installer for any manufacturer.",
                },
              },
              {
                "@type": "Question",
                name: "Can a standing seam metal roof go over existing shingles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sometimes. It depends on how many layers are already there, whether the deck is sound and dry, and whether the existing surface is flat enough that the new panels will not telegraph every irregularity underneath. Codes generally stop at two roof coverings. We check layer count and deck condition before quoting a recover, because a metal roof installed over a bad substrate looks wrong from the street and cannot be fixed without taking it back off.",
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
        service="Residential Standing Seam Metal Roofing"
        h1="Residential Standing Seam Metal Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Residential Roofing", url: "/residential-roofing/" },
          {
            name: "Standing Seam Metal Roofing",
            url: "/residential-standing-seam-metal-roofing/",
          },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: standing seam <strong>on a house</strong> in Amarillo: the cost against shingles, the insurance question that decides it, and the honest downsides.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Budget for standing seam metal at <strong>$13 to $18 per square foot installed</strong>, against about $7.52 all-in for an example architectural shingle estimate here. Roughly double.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Read your policy first. Hail dents metal without making it leak, and a cosmetic damage exclusion can make those dents your problem rather than the carrier's.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspection and a side-by-side estimate against shingles. Call (806) 622-6041.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              The Decision Homeowners Are Actually Making
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Almost nobody arrives at standing seam because they want a metal roof in the abstract.
              They arrive after a hail claim, holding two estimates, asking whether paying roughly
              double now buys them out of doing this again in eight years. That is a fair question and it
              has a real answer, but the answer in Potter County depends on a clause in your
              insurance policy more than it depends on the roof.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So this page is the comparison rather than a brochure for metal, including the parts
              that argue against it. In a market that averages <strong>8 to 12 hailstorms a
              year</strong>, we have watched both decisions work out well and badly depending on
              things the homeowner was never told to check.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What It Costs Against Shingles
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Standing seam metal runs <strong>$13 to $18 per square foot installed</strong> in the
              Texas market. For the shingle side of the comparison, here are two example Amarillo
              estimates from April 2026: a 20-square architectural shingle replacement on a simple
              one-story gable came to <strong>$15,036.55</strong>, about{" "}
              <strong>$7.52 per square foot</strong> all-in, and the two-story steep-pitch version
              came to $17,819.74, about $8.91. So standing seam is roughly double the shingle number
              on the same house. The full line-item breakdown for the shingle side is on our{" "}
              <a
                href="/asphalt-shingle-roofing-amarillo/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                architectural shingle roof replacement
              </a>{" "}
              page.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The multiple is not constant across houses. Metal costs more on a complicated roof
              than the ratio suggests, because every hip, valley, dormer and penetration has to
              be flashed in metal by hand rather than shingled over. A simple gable is where standing
              seam is closest to competitive. A cut-up roof with three dormers and two chimneys is
              where the gap gets wide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The case for paying it is service life measured in decades rather than years, and the
              fact that a hailstorm which would total a shingle roof usually leaves a metal roof
              still shedding water. The case against is on this page too, further down, because a
              contractor who only gives you one side of that is selling rather than advising.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-xl">
            <div className="flex gap-6 items-start">
              <div>
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-800 mb-3">
                  Read the Cosmetic Damage Clause Before You Buy the Roof
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  This is the single most important thing on this page and most homeowners hear it
                  after the storm rather than before. Hail does not usually make a metal roof leak.
                  It dents it, visibly and permanently. Many homeowner policies carry a cosmetic
                  damage exclusion or a separate roof surfacing endorsement that treats denting
                  without loss of function as unpayable.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  In a county with <strong>131 severe hail days since 2000</strong> and a record
                  stone of <strong>4.25 inches</strong>, that clause is not theoretical. Call your
                  agent and ask two questions before you commit: does the policy exclude cosmetic
                  damage to metal roof surfacing, and does adding a metal roof change the deductible
                  or the endorsement that applies to it. Then decide.
                </p>
                <a
                  href="tel:8066226041"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300"
                >
                  Talk it through: (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Standing Seam or Exposed Fastener?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A lot of the "metal roof" quotes homeowners receive here are not standing seam at all.
              They are exposed fastener panels (R-panel, ag panel), and the difference is not
              cosmetic.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Standing seam</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Concealed clips, so nothing penetrates the weather surface</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Panels joined at raised seams above the water line</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Clips let panels move as temperatures swing</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />No gasket wear item to maintain</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />What belongs on a house you intend to keep</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-300">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Exposed fastener panel</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />Screwed through the panel face into the deck</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />A rubber washer at every screw, hundreds of wear points</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />Washers degrade with UV and thermal cycling</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />Panels are pinned, so movement works the fasteners loose</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Genuinely sensible on a barn, a shop or an outbuilding</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              If you are comparing two metal quotes and one is dramatically cheaper, check which
              system it is before you compare anything else. They are different products with
              different maintenance futures, and at 3,600 feet with an annual average wind of 14.3
              mph, hundreds of gasketed fasteners is a real long-term commitment.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Honest Downsides
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every one of these is manageable and none of them is a reason not to do it. They are
              reasons to go in knowing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Denting is permanent</h3>
                <p className="text-gray-700 leading-relaxed">
                  A dented metal roof keeps working. It also keeps looking dented, and unless your
                  policy pays cosmetic damage, that appearance is yours to live with or replace out
                  of pocket. Heavier gauge and textured or matte finishes hide it better than a
                  smooth gloss panel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Matching later is hard</h3>
                <p className="text-gray-700 leading-relaxed">
                  If a section has to be replaced in ten years, the panel profile may be
                  discontinued and the finish will have weathered. Ordering a little extra material
                  at install and storing it is cheap insurance against a patch that never quite
                  matches.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Future penetrations cost more</h3>
                <p className="text-gray-700 leading-relaxed">
                  Adding a vent, a satellite dish or a solar array later means a properly flashed
                  penetration through a panel, not a screw and a bead of sealant. Plan anything you
                  know is coming before the panels are ordered.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Install quality shows</h3>
                <p className="text-gray-700 leading-relaxed">
                  Waviness across flat panel faces, called oil canning, is the visible signature of
                  a rushed job or an uneven substrate. Shingles forgive a bad deck. Metal reports it
                  to the whole street, permanently.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              How We Quote It on Your House
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We do not lead with a brand, and we are not a certified installer for any
              manufacturer. What we work through with you is the set of choices that actually
              changes how the roof performs: panel profile and width, gauge, the paint finish
              system, whether the seam is snap-lock or mechanically seamed, and how the panels are
              attached given the wind exposure at this elevation.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We also check whether the roof is a candidate for a recover over the existing shingles
              rather than a tear-off. It depends on layer count, deck condition and whether the
              existing surface is flat enough that irregularities will not telegraph through the new
              panels. Codes generally stop at two roof coverings, and a metal roof over a poor
              substrate cannot be corrected without taking it back off.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              You get both estimates, metal and architectural shingle, as line items side by side,
              so the comparison is yours to make on real numbers rather than on a recommendation.
              If your policy excludes cosmetic damage and you are on a tight horizon, we will tell
              you shingles are the better buy.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where This Sits in Our Residential Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our{" "}
              <a
                href="/residential-roofing/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                residential roofing
              </a>{" "}
              page covers the full range of work we do on houses and is the right starting point if
              you have not narrowed the material decision. If the building in question is not a
              house (a warehouse, a shop, a commercial property), the technical detail on panel
              systems and attachment engineering lives on our{" "}
              <a
                href="/standing-seam-metal-roof-installation/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                commercial standing seam installation
              </a>{" "}
              page instead.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We install metal roofs out of 2909 S Western St in Amarillo and across the surrounding
              Panhandle, including Canyon, Borger, Pampa, Dumas, Hereford, Plainview, Perryton and
              Bushland.
            </p>
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
                  How much does a standing seam metal roof cost on a house in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Standing seam metal runs $13 to $18 per square foot installed in the Texas market.
                  For comparison, an example architectural shingle estimate on a simple one-story
                  gable in Amarillo came to $15,036.55 in April 2026, about $7.52 per square foot
                  all-in. So on the same house, standing seam is roughly double the shingle number,
                  and the gap widens on a cut-up roof because every hip, valley and penetration has
                  to be flashed in metal. We quote both side by side so you are comparing real
                  figures for your roof rather than a national average.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the downsides of standing seam metal roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Cost is the obvious one. The less obvious ones matter more in Amarillo: hail dents
                  the panels without making them leak, and many homeowner policies carry a cosmetic
                  damage exclusion on metal roof surfacing that makes those dents unpayable. Panels
                  are also harder to match years later if a section is damaged, adding a satellite
                  dish or a vent later means cutting a proper flashed penetration rather than a nail
                  hole, and a bad install shows as oil canning across flat panel faces.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does hail damage a standing seam metal roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It dents it. A metal roof will usually keep shedding water after a hail event that
                  would have ended a shingle roof, which is the real argument for metal in this
                  county. Potter County has recorded 131 severe hail days since 2000 and the
                  largest stone on record here is 4.25 inches from May 2019. But the denting is
                  visible and permanent, and whether it is a payable loss depends entirely on
                  whether your policy excludes cosmetic damage. Read that clause before you buy the
                  roof, not after the storm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the difference between standing seam and an exposed fastener metal roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Standing seam hides its fasteners: panels are held by concealed clips and joined
                  at raised seams above the water line, so nothing penetrates the weather surface.
                  Exposed fastener panels (R-panel, ag panel) are screwed through the face into
                  the deck, with a rubber washer at every screw. Those washers are the wear point,
                  and after enough thermal cycling and Panhandle wind they need attention. Exposed
                  fastener is cheaper up front and is a reasonable choice on a barn or a shop.
                  Standing seam is what belongs on a house you intend to keep.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Which brand of standing seam metal roof is best?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Brand is the least important variable in this decision. Panel profile, panel
                  gauge, the paint finish system, whether the seam is snap-lock or mechanically
                  seamed, and above all the quality of the install determine how the roof performs.
                  We will walk you through those choices on your specific roof, and we do not hold
                  ourselves out as a certified installer for any manufacturer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can a standing seam metal roof go over existing shingles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Sometimes. It depends on how many layers are already there, whether the deck is
                  sound and dry, and whether the existing surface is flat enough that the new panels
                  will not telegraph every irregularity underneath. Codes generally stop at two roof
                  coverings. We check layer count and deck condition before quoting a recover,
                  because a metal roof installed over a bad substrate looks wrong from the street
                  and cannot be fixed without taking it back off.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

        <InternalLinks currentCity="amarillo" currentService="metal-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">See Both Numbers Before You Decide</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspection, then a line-item estimate for standing seam and for architectural
            shingles on the same roof.
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
              Request Free Estimate
            </a>
          </div>
        </section>

        <RelatedArticles pageSlug="residential-standing-seam-metal-roofing" />
      </div>
    </>
  );
}