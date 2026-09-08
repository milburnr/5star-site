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
  alternates: { canonical: "https://5starroofingpros.com/commercial-roof-restoration/" },
  title: "Commercial Roof Restoration in Amarillo, TX | 5 Star Roofing",
  description:
    "Restoring a commercial roof in Amarillo instead of replacing it — what a restoration program actually includes, which roofs qualify, how coating fits in, and when restoration is the wrong answer. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Roof Restoration in Amarillo, TX | 5 Star Roofing",
    description:
      "Restoring a commercial roof in Amarillo instead of replacing it — what a restoration program actually includes, which roofs qualify, and when restoration is the wrong answer.",
    url: "https://5starroofingpros.com/commercial-roof-restoration/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Roof Restoration in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofRestorationPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roof Restoration",
            name: "Commercial Roof Restoration in Amarillo",
            description:
              "A staged program that extends the service life of an existing commercial roof in Amarillo, Texas — condition survey, moisture mapping, corrective repairs, detail rebuilds and a chosen surfacing method, in place of a full replacement.",
            url: "https://5starroofingpros.com/commercial-roof-restoration/",
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
              name: "Commercial Flat Roof Systems",
              url: "https://5starroofingpros.com/commercial-roofing/",
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
                name: "What is the difference between roof restoration and roof coating?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Restoration is the program; coating is one of the ways it can finish. A restoration starts with a condition survey and a moisture scan, removes and replaces what is wet, rebuilds the failed details, and only then applies a new surface, which may be a fluid-applied coating, a single-ply recover, or a metal retrofit depending on what is underneath. A coating sold without that groundwork is just paint over a roof that is still failing.",
                },
              },
              {
                "@type": "Question",
                name: "Which commercial roofs qualify for restoration in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Roofs that are worn rather than failed. The structure has to be sound, the insulation has to be substantially dry, the drainage has to work or be correctable, and the existing surface has to be able to hold the new one. Widespread saturation, a deck that will not hold fasteners, or a building already carrying the maximum number of roof coverings takes restoration off the table and points to replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a restored commercial roof last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the method chosen and the condition it started in, and the manufacturer's warranty on the new surface is the number that matters rather than any promise from a contractor. What we can say plainly is that restoration extends the life of an asset you already own. It does not reset the clock the way a full replacement does, and it needs the same inspection and maintenance discipline afterwards to reach its rated life.",
                },
              },
              {
                "@type": "Question",
                name: "Is restoration cheaper than replacing a commercial roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually, because you avoid tear-off labor, disposal and the day the building is open to weather. But the honest comparison is cost per year of remaining life, not sticker price. A restoration that buys a decade on a sound roof is excellent value; the same money spent on a roof that was already saturated buys nothing and delays the replacement you were always going to make. That is why the moisture survey comes before the quote.",
                },
              },
              {
                "@type": "Question",
                name: "Does restoration help with hail in the Texas Panhandle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It helps with weathering and it can help with impact depending on the system specified, but no surface makes a roof hail-proof. Potter County has recorded 131 severe hail days since 2000, which is why the choice between a coating, a recover and a metal retrofit is partly an impact decision here. We build that into the specification rather than treating it as a footnote, and we do not restore over unresolved storm damage.",
                },
              },
              {
                "@type": "Question",
                name: "Can I restore a roof that has an open insurance claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not before the damage is documented and the claim is settled. Restoring covers the evidence an adjuster needs to see, and a settled claim may change the answer entirely, because a covered loss can fund a replacement that restoration was only ever a substitute for. You have a two-year window from the date of loss to file in Texas. Get the storm loss resolved first, then decide whether the remaining roof is a restoration candidate.",
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
        service="Roof Restoration"
        h1="Commercial Roof Restoration in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Flat Roof Systems", url: "/commercial-roofing/" },
          { name: "Roof Restoration", url: "/commercial-roof-restoration/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Restoration is a <strong>program</strong>, not a product: survey, moisture scan, corrective repairs, detail rebuilds, then a new surface chosen after the survey, not before it.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Coating is one possible finish to that program. So is a single-ply recover. So is a metal retrofit. This page is the decision; those pages are the methods.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>It only works on a roof that is <strong>worn, not failed</strong>. Wet insulation, a bad deck or unresolved storm damage disqualifies it, and we would rather find that in the survey than after you have paid.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free restoration suitability survey with moisture readings. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Restoration Is the Program. Coating Is One Way It Ends.
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The word "restoration" gets used loosely in this trade, usually by someone selling a
              bucket of coating. Here is what it means on our estimates: a staged program that takes
              a worn but structurally sound commercial roof, corrects everything wrong with it, and
              then puts a new, warrantable surface over the top, so the building owner gets years of
              additional service out of an asset they already own instead of writing a replacement
              check.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The distinction matters because the sequence is where the value is. Any crew can spray
              a roof. The work that determines whether the restoration lasts happens before the
              surface goes on: finding the wet insulation, cutting it out, rebuilding the flashings
              and terminations, fixing the drainage that has been ponding water for five years. If a
              proposal you are holding does not describe that work, it is not a restoration
              proposal.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What a Restoration Program Actually Includes
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Five stages, in this order. We do not skip ahead, and if the roof fails at stage two we
              stop and tell you rather than pushing on to sell the rest.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Condition survey</h3>
                <p className="text-gray-700 leading-relaxed">
                  A full walk of the roof surface with photographs of every penetration, curb, drain
                  and termination, plus at least one core cut to confirm what the assembly is and how
                  many layers it already carries.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Moisture mapping</h3>
                <p className="text-gray-700 leading-relaxed">
                  An infrared or capacitance survey to map wet insulation. This is the stage that
                  decides whether restoration is honest or wishful, because trapped water does not
                  dry out under a new surface.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Corrective work</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wet areas cut out and replaced, blisters and splits repaired, drainage corrected
                  with tapered insulation where water stands. The roof has to be sound before it can
                  be surfaced.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Detail rebuild</h3>
                <p className="text-gray-700 leading-relaxed">
                  Curbs, pipe penetrations, drains, edge metal and wall terminations rebuilt. Details
                  are where roofs leak, and a new surface over an old detail simply relocates the
                  problem.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">5. New surface</h3>
                <p className="text-gray-700 leading-relaxed">
                  The chosen method goes on (coating, single-ply recover or metal retrofit),
                  installed to the manufacturer's specification so the warranty on it is real rather
                  than decorative.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Then: keep it</h3>
                <p className="text-gray-700 leading-relaxed">
                  A restored roof reaches its rated life only if it is inspected and maintained. Our{" "}
                  <a href="/commercial-roof-maintenance-program/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    maintenance program
                  </a>{" "}
                  is how most owners protect the investment they just made.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Choosing the Surface: Coating, Recover or Retrofit
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Stage five is where restoration branches, and the branch is decided by what the survey
              found, not by what a salesperson prefers to install. These are the three routes we
              actually price in Amarillo.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Fluid-applied coating</h3>
                <p className="text-gray-700 leading-relaxed">
                  A seamless membrane sprayed or rolled over the prepared roof. It suits a roof whose
                  substrate is sound and dry, where the surface is weathered rather than breached,
                  and where adhesion can be proven by a pull test. Silicone and acrylic behave
                  differently under Panhandle sun and ponding, and the choice between them is not
                  cosmetic. Our{" "}
                  <a href="/commercial-roof-re-coating/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial roof re-coating page
                  </a>{" "}
                  covers that decision in full.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Single-ply recover</h3>
                <p className="text-gray-700 leading-relaxed">
                  A new membrane installed over the existing assembly with insulation or a
                  coverboard between the two. This is the route when the old surface is past coating
                  but the building is sound, or when the owner wants a longer manufacturer warranty
                  than a coating carries. See{" "}
                  <a href="/commercial-tpo-roof-retrofit/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    TPO roof retrofit
                  </a>{" "}
                  for how that is built and what code allows.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Metal retrofit</h3>
                <p className="text-gray-700 leading-relaxed">
                  On a metal building, restoration frequently means framing a new roof system above
                  the old panels rather than surfacing them. It is the most involved of the three and
                  it changes the building's slope and drainage. See{" "}
                  <a href="/metal-roof-retrofit-over-existing-roof/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    metal roof retrofit over an existing roof
                  </a>.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Disqualifies a Roof From Restoration
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Restoration is not a universal alternative to replacement. Four findings end the
              conversation, and every one of them is cheaper to discover in a survey than after
              material is on site.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Saturation you cannot cut out
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Isolated wet zones get replaced as part of the corrective stage. When the moisture
                  map comes back mostly wet, the honest number is a replacement number. Surfacing
                  over it only hides the deck rotting underneath.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  A deck or structure that is failing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Restoration renews the roof surface, not the structure below it. Deteriorated
                  decking, corroded purlins or fastener pull tests that will not hold uplift are
                  structural problems and belong in a replacement scope.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Unresolved storm damage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If hail or wind opened the roof and the claim is not settled, restoring it destroys
                  the evidence. Document first, settle the claim, then decide what the remaining roof
                  deserves.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  A surface the new system cannot bond to
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chalked, contaminated or previously coated surfaces can refuse adhesion. A pull
                  test on the actual roof settles it. Where it fails, a recover is the route, not a
                  coating.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Restore or Replace: How We Frame the Decision
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The comparison that matters is not the price of the two proposals side by side. It is
              cost per year of service life you actually get, weighed against how long you intend to
              hold the building. A restoration that buys a decade on a sound roof is strong value. The
              same spend on a roof that was already saturated buys nothing and delays a replacement
              you were always going to make.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Restoration usually wins when</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The assembly is substantially dry</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Leaks are traceable to details, not the field</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The building cannot tolerate a tear-off</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />You are holding the asset, not flipping it</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The roof has not reached its layer limit</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Replacement is the honest answer when</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The moisture map is mostly wet</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The deck or framing is compromised</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Storm damage is extensive and covered</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The building already carries two coverings</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />You need a long-term warranty a recover cannot carry</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              One code point belongs in this decision. Once a repair covers a large enough share of
              a roof, the permit can require the whole roof to meet current code rather than be
              restored to its original standard, which can quietly convert a large repair into a
              full project. Our{" "}
              <a href="/commercial-flat-roof-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat roof repair page
              </a>{" "}
              covers that threshold in detail. We confirm how it applies to your building with the
              City of Amarillo when we pull the permit.
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
                  Never Restore Over an Open Storm Claim
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  This is the most expensive mistake we see in this market, and it happens because
                  restoration feels proactive. If hail or wind damaged the roof, surfacing over it
                  removes the evidence the adjuster needs, and it may also throw away a covered
                  replacement in favor of a restoration you are paying for yourself. Potter County
                  has recorded <strong>131 severe hail days since 2000</strong>, so a Panhandle
                  commercial roof has usually taken a hit at some point in its life. You have a{" "}
                  <strong>two-year window from the date of loss</strong> to file in Texas. Document,
                  settle, then restore.
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
              Where Restoration Sits in Our Commercial Flat-Roof Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Restoration is the middle path between repairing a roof and replacing it, and it is
              only one of the options a low-slope building owner has. Our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat-roof systems
              </a>{" "}
              page lays out the whole set (membrane, modified bitumen, coatings, recovers and full
              replacement). Start there if repair versus restore versus replace is still an open
              question.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We survey and restore commercial roofs from 2909 S Western St in Amarillo and in
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
                  What is the difference between roof restoration and roof coating?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Restoration is the program; coating is one of the ways it can finish. A restoration
                  starts with a condition survey and a moisture scan, removes and replaces what is
                  wet, rebuilds the failed details, and only then applies a new surface, which may
                  be a fluid-applied coating, a single-ply recover, or a metal retrofit depending on
                  what is underneath. A coating sold without that groundwork is just paint over a
                  roof that is still failing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Which commercial roofs qualify for restoration in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Roofs that are worn rather than failed. The structure has to be sound, the
                  insulation has to be substantially dry, the drainage has to work or be correctable,
                  and the existing surface has to be able to hold the new one. Widespread saturation,
                  a deck that will not hold fasteners, or a building already carrying the maximum
                  number of roof coverings takes restoration off the table and points to
                  replacement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does a restored commercial roof last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends on the method chosen and the condition it started in, and the
                  manufacturer's warranty on the new surface is the number that matters rather than
                  any promise from a contractor. What we can say plainly is that restoration extends
                  the life of an asset you already own. It does not reset the clock the way a full
                  replacement does, and it needs the same inspection and maintenance discipline
                  afterwards to reach its rated life.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Is restoration cheaper than replacing a commercial roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Usually, because you avoid tear-off labor, disposal and the day the building is
                  open to weather. But the honest comparison is cost per year of remaining life, not
                  sticker price. A restoration that buys a decade on a sound roof is excellent value;
                  the same money spent on a roof that was already saturated buys nothing and delays
                  the replacement you were always going to make. That is why the moisture survey
                  comes before the quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does restoration help with hail in the Texas Panhandle?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It helps with weathering and it can help with impact depending on the system
                  specified, but no surface makes a roof hail-proof. Potter County has recorded 131
                  severe hail days since 2000, which is why the choice between a coating, a recover
                  and a metal retrofit is partly an impact decision here. We build that into the
                  specification rather than treating it as a footnote, and we do not restore over
                  unresolved storm damage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can I restore a roof that has an open insurance claim?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Not before the damage is documented and the claim is settled. Restoring covers the
                  evidence an adjuster needs to see, and a settled claim may change the answer
                  entirely, because a covered loss can fund a replacement that restoration was only
                  ever a substitute for. You have a two-year window from the date of loss to file in
                  Texas. Get the storm loss resolved first, then decide whether the remaining roof
                  is a restoration candidate.
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

        <InternalLinks currentCity="amarillo" currentService="commercial-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Find Out If Your Roof Is Worth Restoring</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free restoration suitability survey with moisture readings, a core cut and a straight
            restore-or-replace recommendation, even when the answer is not the job we wanted.
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

        <RelatedArticles pageSlug="commercial-roof-restoration" />
      </div>
    </>
  );
}