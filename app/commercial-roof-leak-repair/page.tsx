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
  alternates: { canonical: "https://5starroofingpros.com/commercial-roof-leak-repair/" },
  title: "Commercial Roof Leak Repair in Amarillo, TX | 5 Star Roofing",
  description:
    "Water coming through the ceiling of your Amarillo building? How we trace a commercial roof leak back to its real source, get the building dried in, and fix it permanently. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Roof Leak Repair in Amarillo, TX | 5 Star Roofing",
    description:
      "How we trace a commercial roof leak back to its real source, get your Amarillo building dried in, and repair it permanently.",
    url: "https://5starroofingpros.com/commercial-roof-leak-repair/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Roof Leak Repair in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofLeakRepairPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roof Leak Repair",
            name: "Commercial Roof Leak Repair in Amarillo",
            description:
              "Locating and permanently repairing active water leaks on existing commercial buildings in Amarillo, Texas, including temporary dry-in and moisture mapping of the roof assembly.",
            url: "https://5starroofingpros.com/commercial-roof-leak-repair/",
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
                name: "How do you find a leak on a commercial roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not by standing under the drip and looking straight up. Water entering a low-slope roof travels sideways along the deck, through insulation joints and down structural members before it finds an opening into the space below, so the entry point is frequently many feet from the stain. We map the interior evidence first, then walk the whole roof surface photographing every penetration, seam and termination, then narrow it with a moisture survey and, where the picture is still ambiguous, a controlled water test that floods one suspect area at a time.",
                },
              },
              {
                "@type": "Question",
                name: "Do you stop the water before the permanent repair is scoped?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Temporary dry-in is a separate step from the permanent repair, and we treat it that way. Sealing the opening, patching the membrane or covering an area with weatherproof sheeting buys you a dry building while the real repair is scoped, priced and scheduled. What we will not do is call a temporary patch a permanent fix and leave.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to repair a leaking commercial roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends almost entirely on what caused it and how far the water has already travelled. A failed pipe boot or an open seam is a contained repair. The same leak left running for two seasons, with saturated insulation spreading under the membrane, is a much larger scope because the wet material has to come out before anything is sealed back up. That is why we survey for moisture before quoting rather than after, and why the estimate arrives as line items instead of a lump figure.",
                },
              },
              {
                "@type": "Question",
                name: "Does one leak mean I need a whole new roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually not. A single isolated failure at a penetration, drain or seam on an otherwise sound membrane is a repair. What changes the answer is the pattern: leaks appearing in several unrelated areas at once, widespread wet insulation on the moisture survey, or a membrane that has gone brittle across the whole field. We tell you which of those we found, and if the honest answer is that repairs will not hold, we say so instead of selling you a series of patches.",
                },
              },
              {
                "@type": "Question",
                name: "Will insurance cover a commercial roof leak in Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the cause. Damage from a hail or wind event is a very different conversation from long-term wear, and the distinction is what the adjuster is there to make. If a storm is involved the timeline is set by law: under the Texas Prompt Payment Act an insurer must acknowledge a claim within 15 days and pay or deny within 60 days, delayed payments accrue 18 percent annual interest, and you have a two-year window from the date of loss to file. We photograph the roof and meet the adjuster on site so the approved scope reflects what is actually up there.",
                },
              },
              {
                "@type": "Question",
                name: "Do you repair commercial roofs you did not install?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Most of the leak calls we take in Amarillo are on roofs installed by somebody else, often years ago and sometimes with no paperwork left behind. We work out what system is up there from a core cut and the visible detailing, then repair it with compatible materials. Where the original manufacturer warranty is still live we will tell you before we touch anything, because the wrong repair can void it.",
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
        service="Commercial Roof Leak Repair"
        h1="Commercial Roof Leak Repair in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Flat Roof Systems", url: "/commercial-roofing/" },
          { name: "Roof Leak Repair", url: "/commercial-roof-leak-repair/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: one job, finding and stopping an <strong>active water leak</strong> on a commercial building in Amarillo. Not a roof replacement page and not a services overview.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The hard part is the diagnosis, not the patch. On a low-slope roof the entry point is rarely above the ceiling stain.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Two separate steps: temporary dry-in to protect what is under the roof today, then a permanent repair scoped from what the survey actually found.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: call (806) 622-6041 for a leak assessment, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Water Is Coming In. Here Is What Actually Happens Next.
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              This page is about one specific problem: your Amarillo building has water coming
              through the ceiling, down a wall, or pooling on a stock room floor, and you need it
              stopped. Choosing a roofing system or planning a replacement is a different page. If
              a leak is running right now, the sequence that matters is find it, dry the building
              in, then fix it properly, in that order, with those three treated as separate pieces
              of work rather than blurred into one vague quote.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The call almost always sounds the same. The leak started during a storm, somebody put
              a trash can under it, and now it is back. The building owner wants to know two things:
              can you make it stop, and is this a patch or the beginning of a much bigger
              conversation. Both are answerable, but only after somebody has been on the roof.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why the Leak Is Almost Never Directly Above the Stain
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              On a steep residential roof, water runs downhill and gravity does most of the
              detective work for you. A commercial low-slope roof behaves nothing like that. Water
              that gets through the membrane lands on insulation, runs along the joints between
              boards, tracks sideways across a steel or wood deck, follows a purlin or a joist for
              twenty or thirty feet, and finally drips through the first available opening: a
              fastener hole, a light fixture penetration, a deck seam. The stain marks the exit, not
              the entry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This is why cutting a patch above the drip so often fails. The patch goes on a
              perfectly sound piece of membrane, the owner pays for it, and the next storm produces
              the same wet ceiling tile. It is also why a proper leak call takes longer than people
              expect on the first visit and less time than they expect on every visit after. Finding
              the entry point once, correctly, is what ends the cycle.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Where Amarillo Commercial Roofs Actually Let Water In
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Membrane fails in the middle of a wide open field far less often than owners assume.
              Nearly every leak we chase in the Panhandle starts at a detail, somewhere the roof
              had to be interrupted, terminated or attached.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Curbs, pipes and rooftop equipment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every HVAC curb, vent, conduit and pipe boot is a hole somebody sealed. Sealant
                  ages, boots split, and units get serviced by technicians who walk and kneel on
                  flashing that was never designed for it. On a busy commercial rooftop this is the
                  single most common source we find.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Seams, laps and field splices
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Single-ply membrane is watertight in the sheet and vulnerable at the join. A seam
                  that was cold-welded, contaminated with dust during installation, or stressed by
                  thermal movement will open before the membrane itself does. Amarillo's temperature
                  swing works those joins hard every single day of the year.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Drains, scuppers and standing water
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A blocked drain turns a low spot into a pond, and a pond finds every weakness the
                  roof has. Clamping rings loosen, drain bowls corrode, and debris from Panhandle
                  wind collects exactly where you cannot see it from the ground. Ponding does not
                  cause the leak so much as it guarantees you find one.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Parapet walls and terminations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Where the roof stops and turns up a wall, it depends on counter-flashing, coping
                  and a termination bar to stay sealed. Wind-driven rain gets behind failing coping
                  joints and enters the building without ever touching the roof field. Owners often
                  spend months looking at the wrong surface.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Hail bruising that opened later
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Potter County has recorded <strong>131 severe hail days since 2000</strong> and
                  Amarillo averages <strong>8 to 12 hailstorms a year</strong>. Hail frequently
                  bruises a membrane without breaking it. The impact crushes the material against
                  the substrate, the reinforcement is weakened, and the actual opening appears a
                  season or two later, long after anyone connected it to the storm.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Fasteners working back out
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo sits at <strong>3,600 feet</strong> with an annual average wind of{" "}
                  <strong>14.3 mph</strong> and spring gusts well beyond it. Constant uplift flutter
                  backs fasteners out of the deck over time. The plate telegraphs through the
                  membrane, wears a hole from underneath, and the leak arrives with no visible damage
                  on top at all.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <img
                src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-pampa-48-1280w.jpg"
                alt="Commercial rooftop covered with various HVAC equipment units and mechanical components on a gravel surface &mdash; 5 Star Roofing"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 leading-relaxed">
                <strong>A rooftop like this one is mostly details.</strong> Count the curbs, the
                supports, the conduit runs and the vents in a single photograph and you have counted
                the realistic suspect list. Open field membrane is the easy part of a commercial
                roof; everything that interrupts it is where the work is.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              How We Find It
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The sequence matters, because each step narrows the search area for the next one.
              Skipping straight to the roof and hoping something looks obviously wrong is how people
              end up patching sound membrane.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Map it from inside</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start under the roof, not on it. Where is the water appearing, how many places,
                  which direction does the deck run, and does it only leak in a driving rain from one
                  direction? That last question alone often moves the search from the roof field to a
                  parapet or wall.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Walk and photograph</h3>
                <p className="text-gray-700 leading-relaxed">
                  A full walk of the roof surface with photographs of every penetration, seam,
                  drain, curb and termination, not just the area above the stain. You get those
                  photos whether or not you hire us, and they become the baseline for anything we do
                  later.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Survey for moisture</h3>
                <p className="text-gray-700 leading-relaxed">
                  An infrared or capacitance survey maps where water is already sitting inside the
                  assembly. This is the step that separates a contained repair from a large one,
                  because saturated insulation has to be cut out and replaced before anything is
                  sealed back over it.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">4. Test and confirm</h3>
                <p className="text-gray-700 leading-relaxed">
                  Where the evidence still points at two or three candidates, we flood one suspect
                  area at a time with somebody watching from below. It is slow and it is unglamorous,
                  and it is the only way to be certain before you spend money on a repair.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              A core cut usually goes in at the same visit. It tells us what system is up there, how
              many layers the building already carries, and what condition the deck is in, which
              between them decide whether a repair is even the right answer.
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
                  Leaking Right Now? Dry-In Comes First.
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Temporary dry-in and permanent repair are two different jobs and we price them
                  that way. If water is running into your building, the first priority is getting
                  it stopped: sealing the opening, patching the membrane, or covering the area with
                  weatherproof sheeting so your inventory, equipment and operations are protected
                  while the real scope gets worked out. What we will not do is present a temporary
                  patch as a finished repair and hand you an invoice.
                </p>
                <a
                  href="tel:8066226041"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-110 transition-all duration-300"
                >
                  Call (806) 622-6041
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              When a Leak Is a Repair, and When It Is Telling You Something Else
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Most leaks are repairs. One failed boot, one open lap, one corroded drain on a
              membrane that is otherwise doing its job is a contained piece of work, and treating it
              as anything more than that is how contractors get a reputation in a town this size.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Points to a repair</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />One leak, one location, one storm direction</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Moisture survey shows an isolated wet area</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Membrane still flexible and well adhered</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Deck sound and holding fasteners</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Roof still inside its expected service life</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Points to a bigger conversation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Several unrelated leaks in the same season</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Widespread saturation on the survey</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Membrane brittle, chalked or shrinking at edges</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Seams failing in more than one area</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Deteriorated deck under the wet zones</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              If your roof is landing in the right-hand column, spending money on a third patch is
              spending money twice. Our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat roof systems
              </a>{" "}
              page covers what the alternatives look like (membrane replacement, recover, coatings
              and full tear-off) and is the right place to start once repair has been ruled out.
              This page stays on the narrower question of stopping a leak on the roof you have.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Actually Drives the Cost of a Leak Repair
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We will not put a number on this page, because a leak repair priced without seeing the
              roof is a guess dressed up as a quote. What we can tell you is what moves the figure,
              so you know what the estimator is looking at when the price comes back.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What keeps it small</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />You called during the first season it leaked</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A single identifiable entry point</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Insulation below is still dry</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Materials on the roof are still available</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Normal working-hours access to the roof</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What grows it</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Wet insulation that has to be cut out</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Deck repair once the wet material is off</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Multiple entry points in different details</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Obsolete membrane needing a transition detail</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />After-hours work over occupied tenant space</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              The single biggest variable on that list is time. A leak that has been running for two
              springs has moved water a long way inside the assembly, and none of it dries out on its
              own under a membrane. The repair you postpone is not the repair you eventually buy.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              If the Leak Started With a Storm, the Clock Is Already Running
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Amarillo sits at the center of Hail Alley, where dry desert air meets Gulf moisture,
              and Potter County ranks in the top ten nationally for hail frequency. The largest
              stone on record here is <strong>4.25 inches</strong>, softball size, from May 2019. A
              lot of the leaks we get called to in June and July started as impacts nobody
              documented in April.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              If a storm is in the picture, Texas law sets the timeline rather than the carrier.
              Under the Texas Prompt Payment Act an insurer must acknowledge your claim within{" "}
              <strong>15 days</strong> and pay or deny within <strong>60 days</strong>, delayed
              payments accrue <strong>18% annual interest</strong>, and you have a{" "}
              <strong>two-year window from the date of loss</strong> to file. We document the roof
              and meet the adjuster on site so the approved scope reflects the actual condition of
              the assembly, including wet insulation, which is the part that most often gets left out
              of a scope written from the ground.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where We Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We run leak calls out of 2909 S Western St in Amarillo and across the surrounding
              Panhandle and West Texas market, including Canyon, Borger, Pampa, Dumas, Hereford,
              Bushland, Plainview, Dalhart, Perryton, Tulia, Friona, Childress, Levelland, Lubbock,
              Midland and Odessa.
            </p>
            <img
              src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-amarillo-45-1280w.jpg"
              alt="A close-up of a gray turbine ventilator or whirlybird roof vent lying on an asphalt surface &mdash; 5 Star Roofing"
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
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
                  How do you find a leak on a commercial roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Not by standing under the drip and looking straight up. Water entering a low-slope
                  roof travels sideways along the deck, through insulation joints and down structural
                  members before it finds an opening into the space below, so the entry point is
                  frequently many feet from the stain. We map the interior evidence first, then walk
                  the whole roof surface photographing every penetration, seam and termination, then
                  narrow it with a moisture survey and, where the picture is still ambiguous, a
                  controlled water test that floods one suspect area at a time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you stop the water before the permanent repair is scoped?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. Temporary dry-in is a separate step from the permanent repair, and we treat
                  it that way. Sealing the opening, patching the membrane or covering an
                  area with weatherproof sheeting buys you a dry building while the real repair is
                  scoped, priced and scheduled. What we will not do is call a temporary patch a
                  permanent fix and leave.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does it cost to repair a leaking commercial roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends almost entirely on what caused it and how far the water has already
                  travelled. A failed pipe boot or an open seam is a contained repair. The same leak
                  left running for two seasons, with saturated insulation spreading under the
                  membrane, is a much larger scope because the wet material has to come out before
                  anything is sealed back up. That is why we survey for moisture before quoting
                  rather than after, and why the estimate arrives as line items instead of a lump
                  figure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does one leak mean I need a whole new roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Usually not. A single isolated failure at a penetration, drain or seam on an
                  otherwise sound membrane is a repair. What changes the answer is the pattern: leaks
                  appearing in several unrelated areas at once, widespread wet insulation on the
                  moisture survey, or a membrane that has gone brittle across the whole field. We
                  tell you which of those we found, and if the honest answer is that repairs will not
                  hold, we say so instead of selling you a series of patches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover a commercial roof leak in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends on the cause. Damage from a hail or wind event is a very different
                  conversation from long-term wear, and the distinction is what the adjuster is there
                  to make. If a storm is involved the timeline is set by law: under the Texas Prompt
                  Payment Act an insurer must acknowledge a claim within 15 days and pay or deny
                  within 60 days, delayed payments accrue 18% annual interest, and you have a
                  two-year window from the date of loss to file. We photograph the roof and meet the
                  adjuster on site so the approved scope reflects what is actually up there.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you repair commercial roofs you did not install?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. Most of the leak calls we take in Amarillo are on roofs installed by somebody
                  else, often years ago and sometimes with no paperwork left behind. We work out what
                  system is up there from a core cut and the visible detailing, then repair it with
                  compatible materials. Where the original manufacturer warranty is still live we
                  will tell you before we touch anything, because the wrong repair can void it.
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
          <h2 className="text-4xl font-bold mb-6">Find the Leak, Not Just the Stain</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leak assessment with a full roof walk, photographs and a moisture survey. The photos
            and the findings are yours whether you hire us or not.
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

        <RelatedArticles pageSlug="commercial-roof-leak-repair" />
      </div>
    </>
  );
}