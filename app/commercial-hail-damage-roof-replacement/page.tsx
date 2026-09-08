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
import { AlertTriangle, Check } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-hail-damage-roof-replacement/" },
  title: "Commercial Hail Damage Roof Replacement in Amarillo, TX | 5 Star Roofing",
  description:
    "When hail means replacing a commercial roof in Amarillo rather than repairing it — the evidence that decides it, the code threshold that forces it, and how to build back better than you had. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Hail Damage Roof Replacement in Amarillo, TX | 5 Star Roofing",
    description:
      "When hail means replacing a commercial roof in Amarillo rather than repairing it — the evidence that decides it, the code threshold that forces it, and how to build back better.",
    url: "https://5starroofingpros.com/commercial-hail-damage-roof-replacement/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-4-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Hail Damage Roof Replacement in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialHailDamageRoofReplacementPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Hail Damage Roof Replacement",
            name: "Commercial Hail Damage Roof Replacement in Amarillo",
            description:
              "Full replacement of hail-damaged commercial roofs in Amarillo, Texas — establishing that the damage is beyond repair, specifying the replacement assembly, and sequencing the work on an occupied building.",
            url: "https://5starroofingpros.com/commercial-hail-damage-roof-replacement/",
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
              name: "Commercial Storm, Hail and Wind Damage",
              url: "https://5starroofingpros.com/commercial-storm-hail/",
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
                name: "Does hail damage always require a roof replacement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Hail damage becomes a replacement when it is distributed rather than localized: when test squares across several zones of the roof all show impact, when the membrane or panel is fractured rather than only marked, or when the extent of repair needed would trigger a code upgrade anyway. Damage confined to one area of the roof is a repair, and we will scope it that way rather than inflate it into a replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How is it proved that the roof needs replacing and not repairing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With evidence gathered in a standard way: marked test squares in multiple zones of the roof, a hit count within each, photographs of representative strikes, core cuts or panel inspections where the damage is not visible from the surface, and a moisture survey showing where water has already entered the assembly. That record is what an adjuster works from. A contractor's opinion without it is just an opinion.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 25% rule for roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is a rule of thumb, not a line in the code Amarillo enforces. The principle behind it is real: once a repair covers a large enough share of the roof, the permit can require the whole roof to meet current code rather than be restored to its original standard. After a widespread hail event this is frequently what turns a large repair into a full replacement project, because the upgrades required apply to the entire roof either way. Which thresholds apply to your building is confirmed with the City of Amarillo when we pull the permit.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to replace a roof after hail damage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We do not publish a figure, because on a commercial building the honest answer is set by the roof itself: system type, insulation required by current code, deck condition once exposed, the number of curbs, drains and penetrations, drainage corrections, and whether the building can be worked during business hours. We price from the actual roof after the assessment and the estimate shows line items rather than a lump figure, so you can see exactly what each decision costs.",
                },
              },
              {
                "@type": "Question",
                name: "Will insurance cover a 20 year old roof in Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Age alone does not decide it. What matters is what your policy covers and how it settles (replacement cost versus actual cash value changes the outcome far more than the roof's birthday), plus whether the damage is attributable to the storm you are claiming. Those are questions for your policy and your carrier. What Texas law does fix is the timeline: an insurer must acknowledge a claim within 15 days and pay or deny within 60 days, delayed payments accrue 18 percent annual interest, and you have a two-year window from the date of loss to file.",
                },
              },
              {
                "@type": "Question",
                name: "Can the business stay open during a commercial roof replacement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In nearly every case. The roof is worked in sections sized so each one is torn off and dried in before the crew leaves, which means no part of the building is left open overnight. What needs planning is everything else: where material is staged, when the crane picks, which areas are protected underneath, and how loud work is scheduled around the people below it.",
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
        service="Hail Damage Roof Replacement"
        h1="Commercial Hail Damage Roof Replacement in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-4-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Storm, Hail & Wind", url: "/commercial-storm-hail/" },
          { name: "Hail Damage Roof Replacement", url: "/commercial-hail-damage-roof-replacement/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>This page is the <strong>replacement</strong> half of hail work. If the damage is localized, it is a repair, and we will say so.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Three things push hail from repair to replacement: damage distributed across zones, the membrane or panel fractured rather than marked, and the code threshold that a large repair triggers anyway.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>A replacement is the one chance to correct the roof's original faults: insulation, drainage, impact resistance, equipment curbs. Most owners find out about it too late.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free hail assessment with marked test squares and a line-item scope. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Amarillo Buildings Do Not Get One Hail Storm
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Potter County has recorded <strong>131 severe hail days since 2000</strong>, Amarillo
              averages <strong>8 to 12 hailstorms a year</strong>, and the largest stone on record
              here measured <strong>4.25 inches</strong>, softball size, in May 2019. This city sits
              where dry desert air meets Gulf moisture, and Potter County ranks in the top ten
              nationally for hail frequency. A commercial roof here is not asked to survive an event.
              It is asked to survive a career of them.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That accumulation is why so many hail conversations in this market end in replacement
              rather than repair. A roof that has taken a dozen seasons of impact does not fail in
              one place. It fails everywhere at once, quietly, and then a single storm makes it
              obvious. After 11 years of assessing Panhandle commercial roofs, the pattern is
              consistent enough that we look for it deliberately.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Turns Hail Damage Into a Replacement
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Three findings move a roof from the repair column to the replacement column. Any one of
              them can do it; on a badly hit building all three usually appear together.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Damage is distributed</h3>
                <p className="text-gray-700 leading-relaxed">
                  Test squares marked in several zones, not one, all showing impact means the
                  storm hit the whole roof. You cannot repair a roof that was damaged everywhere.
                  You are simply patching the parts you happened to look at.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">The material is fractured</h3>
                <p className="text-gray-700 leading-relaxed">
                  There is a difference between a surface mark and a strike that has bruised a
                  membrane through to the reinforcement or fractured a panel's coating. The first is
                  cosmetic. The second is the beginning of a failure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Code takes over</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once a repair covers a large enough share of the roof, the permit can require the
                  whole roof to be brought to current code. At that point a partial repair stops
                  being the cheaper option.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>What none of this is:</strong> a decision made from the ground, or from a
                drone photo, or from the fact that your neighbor got a new roof. It comes from
                marked test squares, hit counts, core cuts and a moisture survey. Our{" "}
                <a href="/storm-damage-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                  storm damage roof assessment
                </a>{" "}
                is the step that produces that record, and it is the step that has to come first.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Build Back Better, Because You Only Get One Chance
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This is the part most owners miss. A replacement is the only moment in a roof's life
              when the whole assembly is open and every original compromise is on the table. If the
              new roof simply reproduces the old one, the building inherits the same ponding, the
              same thin insulation and the same vulnerability to the next storm, and nobody gets
              another opportunity for twenty years.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Worth specifying deliberately</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Impact resistance appropriate to this market</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Membrane thickness matched to rooftop traffic</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Tapered insulation to end long-standing ponding</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Uplift attachment engineered for Panhandle wind</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Curbs and penetrations rebuilt, not reused</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Walkway pads to the equipment technicians service</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Decided once the deck is exposed</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Deteriorated decking found under the old system</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Wet insulation wider than the survey showed</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Drains undersized for the roof they serve</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Old penetrations nobody knew were abandoned</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Edge blocking that will not hold new edge metal</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Findings in the right-hand column are why a tear-off scope can change mid-project. We
              photograph and document each one as it is uncovered rather than absorbing it quietly or
              springing it on you at invoicing. Where the change belongs in your claim, the mechanics
              of that are covered on our{" "}
              <a href="/insurance-claim-documentation-and-adjuster-meetings/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                insurance claim documentation page
              </a>.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Replacing a Roof Over a Business That Is Still Open
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A tear-off is the one commercial roofing operation where the building is genuinely
              exposed, so the entire schedule is built around never leaving it that way overnight.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Section and stage</h3>
                <p className="text-gray-700 leading-relaxed">
                  The roof is divided into sections sized so each one can be torn off and dried in
                  within a single day, and material and disposal are staged where they will not block
                  your entrances, docks or customer parking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Tear off and inspect</h3>
                <p className="text-gray-700 leading-relaxed">
                  The old system comes off one section at a time and the deck underneath is inspected
                  and documented before anything new goes down. Interior areas below get protection
                  where they cannot be cleared.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Rebuild and close</h3>
                <p className="text-gray-700 leading-relaxed">
                  Insulation, attachment, membrane and flashings go in, and the section is watertight
                  before the crew leaves. Spring weather in the Panhandle moves fast, so dry-in
                  discipline is not negotiable.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Where the building genuinely cannot take daytime work, we run evenings and weekends,
              and that premium appears as its own line on the estimate rather than being buried. If a
              tear-off is not the only route (some hail-damaged buildings qualify for a recover
              instead) we will price both. See{" "}
              <a href="/commercial-roof-restoration/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial roof restoration
              </a>{" "}
              for when that applies.
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
                  The Clock Started the Day of the Storm
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Hail damage does not announce itself, and a roof that looks fine from the parking
                  lot can already be failing. Waiting costs you twice: the assembly keeps taking on
                  water, and the window to file closes. Under the Texas Prompt Payment Act an insurer
                  must acknowledge your claim within <strong>15 days</strong> and pay or deny within{" "}
                  <strong>60 days</strong>, delayed payments accrue{" "}
                  <strong>18% annual interest</strong>, and you have a{" "}
                  <strong>two-year window from the date of loss</strong> to file. If a storm has
                  passed over your building in that window and nobody has been on the roof, that is
                  the call to make today.
                </p>
                <a
                  href="tel:8066226041"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300"
                >
                  Talk to us: (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where Hail Replacement Sits in Our Storm Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Replacement is the last step of a sequence, not the first. Our{" "}
              <a href="/commercial-storm-hail/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial storm, hail and wind
              </a>{" "}
              page covers the whole path (assessment, claim documentation, repair and replacement)
              and is the right starting point if the storm was recent and you do not yet know what
              you are dealing with.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We replace hail-damaged commercial roofs out of 2909 S Western St in Amarillo and in
              Canyon, Borger, Pampa, Dumas, Hereford, Plainview, Bushland and the wider West Texas
              market.
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
                  Does hail damage always require a roof replacement?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  No. Hail damage becomes a replacement when it is distributed rather than
                  localized: when test squares across several zones of the roof all show impact,
                  when the membrane or panel is fractured rather than only marked, or when the extent of
                  repair needed would trigger a code upgrade anyway. Damage confined to one area of
                  the roof is a repair, and we will scope it that way rather than inflate it into a
                  replacement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How is it proved that the roof needs replacing and not repairing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  With evidence gathered in a standard way: marked test squares in multiple zones of
                  the roof, a hit count within each, photographs of representative strikes, core cuts
                  or panel inspections where the damage is not visible from the surface, and a
                  moisture survey showing where water has already entered the assembly. That record
                  is what an adjuster works from. A contractor's opinion without it is just an
                  opinion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the 25% rule for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is a rule of thumb, not a line in the code Amarillo enforces. The principle
                  behind it is real: once a repair covers a large enough share of the roof, the
                  permit can require the whole roof to meet current code rather than be restored to
                  its original standard. After a widespread hail event this is frequently what turns
                  a large repair into a full replacement project, because the upgrades required
                  apply to the entire roof either way. Which thresholds apply to your building is
                  confirmed with the City of Amarillo when we pull the permit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does it cost to replace a roof after hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We do not publish a figure, because on a commercial building the honest answer is
                  set by the roof itself: system type, insulation required by current code, deck
                  condition once exposed, the number of curbs, drains and penetrations, drainage
                  corrections, and whether the building can be worked during business hours. We price
                  from the actual roof after the assessment and the estimate shows line items rather
                  than a lump figure, so you can see exactly what each decision costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover a 20 year old roof in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Age alone does not decide it. What matters is what your policy covers and how it
                  settles (replacement cost versus actual cash value changes the outcome far more
                  than the roof's birthday), plus whether the damage is attributable to the storm you
                  are claiming. Those are questions for your policy and your carrier. What Texas law
                  does fix is the timeline: an insurer must acknowledge a claim within 15 days and
                  pay or deny within 60 days, delayed payments accrue 18% annual interest, and you
                  have a two-year window from the date of loss to file.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can the business stay open during a commercial roof replacement?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In nearly every case. The roof is worked in sections sized so each one is torn off
                  and dried in before the crew leaves, which means no part of the building is left open
                  overnight. What needs planning is everything else: where material is staged, when
                  the crane picks, which areas are protected underneath, and how loud work is
                  scheduled around the people below it.
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

        <InternalLinks currentCity="amarillo" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Find Out What the Hail Actually Did</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free hail assessment with marked test squares, photographs and a line-item scope. You get
            the findings whether the answer is repair or replace.
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

        <RelatedArticles pageSlug="commercial-hail-damage-roof-replacement" />
      </div>
    </>
  );
}