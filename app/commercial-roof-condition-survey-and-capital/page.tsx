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
import { Check, X } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://5starroofingpros.com/commercial-roof-condition-survey-and-capital/",
  },
  title: "Commercial Roof Condition Survey & Capital Planning Report | Amarillo TX",
  description:
    "A roof-by-roof condition survey and multi-year capital plan for Amarillo building owners — remaining service life, costed options and a spend forecast by year. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Roof Condition Survey & Capital Planning Report | Amarillo TX",
    description:
      "A roof-by-roof condition survey and multi-year capital plan for Amarillo building owners — remaining service life, costed options and a spend forecast by year.",
    url: "https://5starroofingpros.com/commercial-roof-condition-survey-and-capital/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-10-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Roof Condition Survey and Capital Planning in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofConditionSurveyCapitalPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roof Condition Survey and Capital Planning Report",
            name: "Commercial Roof Condition Survey and Capital Planning in Amarillo",
            description:
              "A roof-section-by-roof-section condition survey of a commercial building or property portfolio in Amarillo, Texas, producing remaining service life estimates, costed options and a multi-year capital spend forecast.",
            url: "https://5starroofingpros.com/commercial-roof-condition-survey-and-capital/",
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
              name: "Commercial Roof Maintenance Program",
              url: "https://5starroofingpros.com/commercial-roof-maintenance-program/",
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
                name: "What is a commercial roof condition survey?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is a documented assessment of every roof section on a building or portfolio, producing an inventory of what is up there, a condition rating for each section, a photographed defect log, an estimate of remaining service life, and a recommended action with a cost band. It is written for an owner making budget decisions rather than for a crew doing a repair, and unlike a free inspection it is a paid deliverable you commission.",
                },
              },
              {
                "@type": "Question",
                name: "How is a condition survey different from a free roof inspection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A free inspection answers whether something is wrong right now and what it would cost to fix. A condition survey answers when each roof you own will need money and how much, across several years. The free inspection is a sales visit that produces useful documentation. The survey is a planning document you pay for, which is what makes it usable in front of a board, a lender or a buyer.",
                },
              },
              {
                "@type": "Question",
                name: "How often should a commercial roof condition survey be updated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Annually is normal practice on a portfolio, and in this market a survey should also be revisited after any significant hail event. Potter County has recorded 131 severe hail days since 2000 and the area averages 8 to 12 hailstorms a year, so a service life estimate written before a major storm may no longer be true after one.",
                },
              },
              {
                "@type": "Question",
                name: "Does a roof condition survey include a structural opinion?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. We survey the roof system (covering, flashing, drainage, insulation condition and deck condition where it can be observed) and we will tell you plainly when something we find warrants a structural review. A stamped opinion on structure or load capacity has to come from a licensed engineer, and we will say so rather than write around it.",
                },
              },
              {
                "@type": "Question",
                name: "Can a condition survey be used for property due diligence?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and that is one of the most common reasons owners commission one. A survey performed before closing tells you which roofs on the asset are near the end of their life and what the first three years of ownership will cost you in roofing. That number is frequently large enough to matter to the deal.",
                },
              },
              {
                "@type": "Question",
                name: "What is a roof capital plan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is the forecast built on top of the survey: for each roof section, the recommended action, the year it should be funded, and a cost band for that action. Laid across a portfolio it shows which years carry the heavy spend and where deferring one roof would push two into the same budget cycle. It is the document that turns roofing from an unplanned line item into a funded one.",
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
        service="Roof Condition Survey & Capital Planning"
        h1="Commercial Roof Condition Survey and Capital Planning in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-10-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Inspections", url: "/roof-inspections/" },
          {
            name: "Condition Survey & Capital Planning",
            url: "/commercial-roof-condition-survey-and-capital/",
          },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: a <strong>paid planning deliverable</strong> for owners with roofs to budget for. Condition rating and remaining service life per roof section, plus a spend forecast by year.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Not a <a href="/free-roof-inspection/" className="text-brand-brown font-semibold underline hover:text-brand-gold">free inspection</a> (that answers "is something wrong now") and not a <a href="/commercial-roof-maintenance-program/" className="text-brand-brown font-semibold underline hover:text-brand-gold">maintenance program</a> (that is recurring service visits).</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Written to be handed to a board, a lender, an insurer or a buyer, not filed in a drawer.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: call (806) 622-6041 to scope a survey, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              The Question This Answers Is "When", Not "What"
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Most roofing documents answer a present-tense question: something is leaking, what is
              wrong, what does it cost to fix. A condition survey answers a different one. Given
              every roof you are responsible for, which ones need money, how much, and in which
              budget year, so that roofing stops arriving as a surprise in the middle of a fiscal
              year and starts appearing in the plan before it does.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That makes it an asset-management deliverable rather than a sales visit. It is
              commissioned and paid for, the scope is agreed up front, and the output is a document
              you can put in front of a board, a lender, an insurer or a buyer. Eleven years of
              reading Panhandle roofs matters here more than it would elsewhere, because the service
              life assumptions in a national template do not survive contact with this market.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Who Actually Needs One
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you own one building and one roof, this is probably not your document. Book a free
              inspection instead. A survey earns its cost when there is more than one roof, more
              than one budget year, or somebody other than you who has to be convinced.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Portfolio owners and property managers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Several buildings, one capital budget, and no reliable way to rank them. The
                  survey converts a pile of roofs of unknown age into a ranked list with years
                  attached, which is the only form a capital committee can act on.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Buyers doing due diligence</h3>
                <p className="text-gray-700 leading-relaxed">
                  A roof three years from replacement and a roof fifteen years from it look
                  identical from the parking lot. Knowing which one you are buying changes the
                  number you are willing to pay, and it is a great deal cheaper to find out before
                  closing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Boards, HOAs and institutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Where the spend has to be justified to people who will never go on the roof, a
                  photographed defect log and a dated forecast do the arguing. Reserve studies that
                  cover roofing in a single line benefit from an actual roof-by-roof basis
                  underneath them.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Owners with a deferred-maintenance backlog</h3>
                <p className="text-gray-700 leading-relaxed">
                  When several roofs have been patched for years and nobody knows which is closest
                  to failure, the survey is what stops the decision being made by whichever one
                  leaks first, which is almost never the one that should have been funded first.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Gets Surveyed on Each Roof Section
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A building rarely has one roof. It has sections of different ages, different systems
              and different histories, and averaging them into a single condition rating hides
              exactly the section that is about to fail. Each section is surveyed and rated on its
              own.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What we record</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Area, system type and estimated age of each section</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Layer count and deck type, confirmed by core cut</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Seam, lap and termination condition</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Flashing at curbs, walls, drains and penetrations</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Drainage performance and ponding areas</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Moisture survey of the insulation below the surface</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Impact and puncture damage, mapped by location</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Rooftop equipment, service traffic and access paths</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What the report gives you</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A roof inventory: every section, keyed to a plan</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A condition rating per section, on one consistent scale</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A photographed defect log tied to locations</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />An estimated remaining service life in years</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A recommended action: maintain, repair, recover or replace</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A cost band for each recommended action</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A year-by-year spend forecast across the portfolio</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The consequence of deferring each item by a year</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>The deferral column is the one people actually use.</strong> Every capital
                plan gets cut somewhere, and the useful question is never "what should we do" but
                "what happens if we do not do it this year". A survey that does not answer that
                leaves the owner to guess at the most expensive decision in the document.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why Panhandle Hail Breaks the Standard Service-Life Table
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Capital plans normally lean on manufacturer service life and a depreciation curve. In
              this market that produces numbers that are wrong in a specific direction. Potter
              County has recorded <strong>131 severe hail days since 2000</strong>, the area averages{" "}
              <strong>8 to 12 hailstorms a year</strong>, and the largest stone on record here is{" "}
              <strong>4.25 inches</strong>. No depreciation table was built with that in it.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A membrane accumulates bruising that does not leak. It shows up years later as brittle
              failure across a whole slope at once, on the schedule of the weather rather than the
              schedule of the warranty. Add an annual average wind of 14.3 mph at 3,600 feet, and
              flashings and terminations here age faster than the covering they protect.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So we rate what is on the roof, not what the age says should be on it, and we revisit
              a survey after a significant storm rather than waiting for the annual cycle. An
              impact-damaged section may also be an insurance question rather than a capital one.
              When it is, we say so and point you at{" "}
              <a
                href="/insurance-claim-documentation-and-adjuster-meetings/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                claim documentation
              </a>{" "}
              before you spend your own budget on it.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Three Documents People Confuse, and Which One You Want
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Free inspection</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Is something wrong right now, and what would it cost to fix? Free, because it is
                  also our estimating visit. Right answer for one building with a present concern.
                </p>
                <a href="/free-roof-inspection/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                  Free roof inspection
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Maintenance program</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Recurring scheduled visits that keep a roof serviceable and the warranty intact.
                  Ongoing operating spend, not a one-off planning document.
                </p>
                <a href="/commercial-roof-maintenance-program/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                  Maintenance program
                </a>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold-vibrant">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Condition survey and capital plan</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Which roofs need money, how much, and in which year — across a whole portfolio.
                  Commissioned, paid for, and written to be handed to somebody else.
                </p>
                <span className="text-gray-500 italic">You are on this page</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              They are complementary, not alternatives. Most portfolio owners end up with a survey
              that sets the plan and a maintenance program that protects the assets between capital
              events.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              How the Engagement Runs
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Scope</h3>
                <p className="text-gray-700 leading-relaxed">
                  We agree which buildings and roof sections are in, how many core cuts are
                  warranted, whether a moisture survey is included, and the forecast horizon,
                  commonly five or ten years. The fee is scoped from that, and it is fixed before we
                  start.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Survey</h3>
                <p className="text-gray-700 leading-relaxed">
                  Roof walks, photographs keyed to a plan, core cuts, moisture readings and
                  measurements. Tenants are not disrupted and no work is performed. This stage
                  produces information, not repairs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Report and walkthrough</h3>
                <p className="text-gray-700 leading-relaxed">
                  You get the document, then we go through it with you: what each rating means,
                  where the judgment calls are, and which items we would fund first if it were our
                  money. Then it is yours to use, including with another contractor.
                </p>
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                <X className="w-5 h-5 flex-shrink-0 mt-1" />
                What the survey deliberately is not
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It is not a structural or engineering opinion. We survey the roof system and tell
                you plainly when a finding warrants a structural review, because a stamped opinion
                on structure or load capacity has to come from a licensed engineer. It is also not a
                bid. Commissioning a survey from us does not commit you to buying the work in it,
                and a survey that only ever recommends the surveyor is not worth what you paid for
                it.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where Surveys Sit in Our Inspection Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A condition survey is the deepest thing we do without touching the roof. Our{" "}
              <a
                href="/roof-inspections/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                roof inspections
              </a>{" "}
              page covers the full range of assessment work and is the right starting point if you
              are still working out which of these documents your situation calls for.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We survey commercial property in Amarillo and across the surrounding Panhandle from
              2909 S Western St, including Canyon, Borger, Pampa, Dumas, Hereford, Plainview,
              Perryton and Bushland.
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
                  What is a commercial roof condition survey?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is a documented assessment of every roof section on a building or portfolio,
                  producing an inventory of what is up there, a condition rating for each section, a
                  photographed defect log, an estimate of remaining service life, and a recommended
                  action with a cost band. It is written for an owner making budget decisions rather
                  than for a crew doing a repair, and unlike a free inspection it is a paid
                  deliverable you commission.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How is a condition survey different from a free roof inspection?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A free inspection answers whether something is wrong right now and what it would
                  cost to fix. A condition survey answers when each roof you own will need money and
                  how much, across several years. The free inspection is a sales visit that produces
                  useful documentation. The survey is a planning document you pay for, which is what
                  makes it usable in front of a board, a lender or a buyer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often should a commercial roof condition survey be updated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Annually is normal practice on a portfolio, and in this market a survey should
                  also be revisited after any significant hail event. Potter County has recorded 131
                  severe hail days since 2000 and the area averages 8 to 12 hailstorms a year, so a
                  service life estimate written before a major storm may no longer be true after
                  one.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does a roof condition survey include a structural opinion?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  No. We survey the roof system (covering, flashing, drainage, insulation condition
                  and deck condition where it can be observed) and we will tell you plainly when
                  something we find warrants a structural review. A stamped opinion on structure or
                  load capacity has to come from a licensed engineer, and we will say so rather than
                  write around it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can a condition survey be used for property due diligence?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, and that is one of the most common reasons owners commission one. A survey
                  performed before closing tells you which roofs on the asset are near the end of
                  their life and what the first three years of ownership will cost you in roofing.
                  That number is frequently large enough to matter to the deal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is a roof capital plan?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is the forecast built on top of the survey: for each roof section, the
                  recommended action, the year it should be funded, and a cost band for that action.
                  Laid across a portfolio it shows which years carry the heavy spend and where
                  deferring one roof would push two into the same budget cycle. It is the document
                  that turns roofing from an unplanned line item into a funded one.
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

        <InternalLinks currentCity="amarillo" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Put Your Roofs in the Budget Before They Put Themselves There</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Scoped condition survey and multi-year capital plan for Amarillo commercial property.
            Fixed fee, agreed before we start.
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
              Request a Survey Scope
            </a>
          </div>
        </section>

        <RelatedArticles pageSlug="commercial-roof-condition-survey-and-capital" />
      </div>
    </>
  );
}