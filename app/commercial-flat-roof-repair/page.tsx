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
  alternates: { canonical: "https://5starroofingpros.com/commercial-flat-roof-repair/" },
  title: "Commercial Flat Roof Repair in Amarillo, TX | 5 Star Roofing",
  description:
    "Repairing low-slope membrane on Amarillo commercial buildings — blisters, open seams, splits, failed flashing and hail punctures. How each system is patched, and when repair stops paying. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Flat Roof Repair in Amarillo, TX | 5 Star Roofing",
    description:
      "Blisters, open seams, splits, failed flashing and hail punctures on Amarillo low-slope roofs — how each membrane system is repaired, and when repair stops paying.",
    url: "https://5starroofingpros.com/commercial-flat-roof-repair/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-4-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Flat Roof Repair in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialFlatRoofRepairPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Flat Roof Repair",
            name: "Commercial Flat Roof Repair in Amarillo",
            description:
              "Repairing low-slope commercial roof membrane in Amarillo, Texas — blisters, open seams and laps, splits, failed flashing and terminations, hail punctures and drain detail failures, using methods matched to the existing system.",
            url: "https://5starroofingpros.com/commercial-flat-roof-repair/",
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
                name: "How do you repair a commercial flat roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The method has to match the system already on the building. TPO and PVC are repaired with heat-welded patches of the same membrane. EPDM needs a compatible adhesive or seam tape, and the substrate has to be cleaned and primed properly or the patch releases. Modified bitumen is repaired with matching cap sheet set in torch or cold adhesive. Built-up gravel roofs need the aggregate swept back, the failure cut out and the plies rebuilt before the surfacing goes back. Getting the chemistry wrong is the most common reason a repair fails within a year.",
                },
              },
              {
                "@type": "Question",
                name: "What is the average cost to repair a flat roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no useful average, because two repairs on the same building can differ by an order of magnitude. What sets the number is the size of the failure, whether insulation underneath is wet and has to be removed, how many separate details are involved, whether the existing membrane is still manufactured, and whether the crew can work during business hours. We survey the roof for moisture before pricing and the estimate comes back as line items so you can see exactly which of those factors applied.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 25% rule for roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is a rule of thumb, not a line in the code Amarillo enforces. The principle behind it is real: once a repair covers a large enough share of the roof, the permit can require the whole roof to meet current code rather than be patched back to its original standard. On commercial buildings that usually means added insulation and a wind-uplift rating the original assembly never had, which is how a large repair quietly becomes a recover or replacement project. Which thresholds apply to your building is confirmed with the City of Amarillo when we pull the permit.",
                },
              },
              {
                "@type": "Question",
                name: "What is the lifespan of a commercial flat roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the system, the quality of the original installation and how hard the climate works it. Amarillo works it hard: Potter County has recorded 131 severe hail days since 2000, the city averages 8 to 12 hailstorms a year, and the annual average wind of 14.3 mph puts constant uplift on fasteners and seams. A roof that would run its full expected service life in a mild climate can arrive at the repair-versus-replace decision several years early here. Age alone does not decide it. The condition of the membrane and the moisture survey do.",
                },
              },
              {
                "@type": "Question",
                name: "Is it worth repairing an old commercial flat roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is worth repairing when the failures are isolated, the membrane is still flexible and well adhered, the insulation below is dry, and the deck is sound. It stops being worth it when you are repairing several unrelated failures a year, when the moisture survey shows widespread saturation, or when the membrane has gone brittle across the field so every patch just moves the stress to the next weak spot. We will tell you which situation you are in rather than selling another patch.",
                },
              },
              {
                "@type": "Question",
                name: "Will a repair void my existing roof warranty?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It can, which is why we ask about it before touching anything. Manufacturer system warranties usually require that repairs be made with approved materials and, in some cases, by an authorized applicator. If your roof is still inside a live warranty period we will tell you what the paperwork requires before work starts, so you do not trade a small repair bill for a cancelled warranty.",
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
        service="Commercial Flat Roof Repair"
        h1="Commercial Flat Roof Repair in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-4-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Flat Roof Systems", url: "/commercial-roofing/" },
          { name: "Flat Roof Repair", url: "/commercial-flat-roof-repair/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: <strong>repairing the low-slope membrane itself</strong> on an Amarillo commercial building: blisters, open seams, splits, failed flashing, hail punctures and drain details.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The method has to match the system. A TPO patch, an EPDM patch and a modified bitumen patch are three different jobs with three different failure modes.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Watch the code trigger: repair a large enough share of a roof and the permit turns the project into a full upgrade.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free roof condition assessment with a moisture survey. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Gets Repaired on a Low-Slope Commercial Roof
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              This page is about the repair work itself: cutting out a failure in a commercial
              membrane, rebuilding the detail properly, and putting the system back to a condition
              where it does its job again. It is a narrower subject than choosing a roofing system
              and a different subject from chasing an active leak. If water is coming into your
              building right now and you do not know where it is entering, start with{" "}
              <a href="/commercial-roof-leak-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial roof leak repair
              </a>
              . The diagnosis has to come before the repair.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most of what we repair on Amarillo flat roofs is not dramatic. It is a seam that opened
              two feet, a blister the size of a dinner plate, a pitch pan that dried out, a splice
              somebody made with the wrong sealant in 2019. The work is unglamorous. Whether a
              repair lasts or fails next spring comes down to preparation, material compatibility
              and detailing, not to how big the patch is.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Failures We Repair Most on Panhandle Flat Roofs
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Different climates break roofs in different ways. Here, three forces do most of the
              damage: impact, uplift and thermal cycling. Everything below traces back to one of
              them.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Blisters and ridging
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Air or moisture trapped between layers expands in the heat and lifts the membrane
                  off its substrate. A blister is not itself a leak, but it is a soft spot waiting
                  for a boot or a hailstone. We cut it out, dry the substrate, and rebuild the area
                  rather than sealing over it and trapping the moisture for another summer.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Open seams and laps
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The join is always the weak point of a single-ply roof. Seams that were welded too
                  cold, welded over dust, or left slightly short come apart under years of thermal
                  movement. We probe seams with a hand tool across the field, not just where the
                  ceiling is stained, because a seam that has started to open rarely stops.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Splits at stress points
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo swings from hard winter cold to genuine summer heat, and the membrane
                  moves with every cycle. Where movement is restrained, over a deck joint, at a
                  change in direction, at a wall base, the material eventually tears. A split gets
                  a reinforced repair with a proper stress plate, not a strip of tape.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Flashing and termination failure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Curb flashings, pitch pans, termination bars and counter-flashing at parapets have
                  a shorter service life than the field membrane and they are what an inspection
                  should look at first. Rebuilding a detail costs a fraction of what it costs to
                  repair the wet insulation it has been feeding.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Hail punctures and bruising
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Potter County has recorded <strong>131 severe hail days since 2000</strong> and
                  Amarillo averages <strong>8 to 12 hailstorms a year</strong>. Hail often bruises
                  rather than punctures, crushing the reinforcement so the opening appears a season
                  or two later, on a roof nobody connected to the storm.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Drain details and ponding
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Standing water does not have to breach the membrane to cause problems. It loads
                  the structure, accelerates degradation and finds every marginal detail it sits on.
                  Repairing the drain assembly solves part of it; where the low spot is structural,
                  tapered insulation is the honest answer and we price it as such.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Repair Has to Match the System You Have
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              This is the part that separates a repair that lasts from one that peels in a year.
              Commercial roofing membranes are different chemistries, and they bond, weld and fail in
              different ways. Before we quote anything we take a core cut to confirm what is actually
              up there, because what a roof looks like from the surface and what it is are regularly
              two different things.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">TPO and PVC</h3>
                <p className="text-gray-700 leading-relaxed">
                  Thermoplastic membranes are repaired with a heat-welded patch of the same material.
                  The patch fuses into the sheet rather than sticking to it. Surface
                  preparation and weld temperature decide whether the repair is as strong as the
                  original sheet or a cosmetic overlay. Aged membrane needs cleaning and, on some
                  systems, a primer before it will take a weld at all.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">EPDM</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rubber membrane cannot be heat-welded. Repairs rely on compatible adhesives, seam
                  tape and primer, and every one of those depends on a genuinely clean, dry, prepared
                  surface. Skipping preparation on EPDM is the single most common cause of a patch
                  that lets go the following season.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Modified bitumen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Repaired with matching cap sheet set in torch, hot or cold adhesive depending on
                  the original system and what the building can tolerate. Color and granule match
                  will never be perfect on an aged roof. Watertightness and a properly lapped edge
                  are what matter.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Built-up and gravel-surfaced</h3>
                <p className="text-gray-700 leading-relaxed">
                  Aggregate gets swept clear, the failed plies are cut out and rebuilt, and the
                  surfacing is restored. It is a labor-heavy repair, and on an older built-up roof
                  it is worth being realistic about how many more of them the assembly justifies.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Where a building has been repaired repeatedly with whatever was in the truck, the roof
              becomes a patchwork of incompatible materials and each new repair has to include a
              transition detail. That work is legitimate and it is not free, and we will show it on
              the estimate rather than absorbing it into a vague line.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              The "25% Rule": When a Repair Becomes a Bigger Project
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Owners search for the 25 percent rule and find a lot of confident answers that state
              a number as if it were law. Treat the number as a rule of thumb.
              The principle underneath it is what matters here: once a repair covers a large enough
              share of the roof, the permit can require the whole roof to meet current code rather
              than be patched back to whatever it was originally built to. On a commercial building
              that typically means additional insulation and a wind-uplift rating the original
              assembly never carried.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              After a bad hail season this catches owners out constantly. A repair scope that grows
              past that point stops being a repair project in the eyes of the permit office, and at
              that point a full recover or replacement is usually the better value anyway: one
              system, one warranty, no seam between old and new work waiting to fail. Which
              thresholds apply to your specific building is a question for the City of Amarillo,
              not for a salesperson or a search result. We confirm it when we pull the permit, and
              we tell you before you sign rather than after.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              When Repair Stops Being the Right Money
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Every low-slope system has a service life, and Amarillo shortens it. Constant hail
              exposure, an annual average wind of <strong>14.3 mph</strong> at{" "}
              <strong>3,600 feet</strong> of elevation, and a wide annual temperature swing all put a
              commercial roof at the repair-or-replace decision earlier than a national spec sheet
              would suggest. Age by itself does not settle the question, though. Condition does.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Keep repairing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Failures are isolated and identifiable</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Membrane still flexible, seams generally sound</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Moisture survey comes back mostly dry</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Repair scope small enough not to trigger a code upgrade</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Matching material is still available</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Time to price a system</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Multiple unrelated repairs every year</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Widespread wet insulation on the survey</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Membrane brittle, chalked or shrinking at edges</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Repair scope pushing past the code threshold</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Deck deterioration under the wet zones</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              If your roof is in the right-hand column, the next decision is which system replaces it
              and whether the existing assembly can be recovered instead of torn off. Our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat roof systems
              </a>{" "}
              page lays out the options side by side. This page deliberately stops at repair, because
              conflating the two is how owners end up buying a roof they did not yet need.
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
                  If the Damage Followed a Storm, Check the Deadlines
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Repairs that follow a hail or wind event are often an insurance question rather
                  than a maintenance one, and the order of operations changes. A repair made before
                  the damage is photographed is a repair the adjuster will never see, and a bruised
                  membrane that has been patched over reads as wear rather than as a strike. You
                  have a <strong>two-year window from the date of loss</strong> to file in Texas.
                  If a storm is in the picture, we document the condition before we cut anything
                  out, and we meet the adjuster on site so the approved scope reflects the actual
                  state of the assembly.
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
              What We Do Before We Price a Repair
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A repair quoted from a photograph is a guess. The assessment is a walk of the full roof
              surface with photographs of every seam, penetration, drain and termination, a moisture
              survey to establish how far water has already spread inside the assembly, and at least
              one core cut to confirm system type, layer count and deck condition. You get the
              findings whether or not you hire us.
            </p>
            <img
              src="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/commercial/commercial-amarillo-45-1280w.jpg"
              alt="A close-up of a gray turbine ventilator or whirlybird roof vent lying on an asphalt surface &mdash; 5 Star Roofing"
              className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              We repair flat roofs out of 2909 S Western St across Amarillo and the wider Panhandle
              and West Texas market: Canyon, Borger, Pampa, Dumas, Hereford, Bushland, Plainview,
              Dalhart, Perryton, Tulia, Friona, Childress, Levelland, Lubbock, Midland and Odessa.
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
                  How do you repair a commercial flat roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The method has to match the system already on the building. TPO and PVC are
                  repaired with heat-welded patches of the same membrane. EPDM needs a compatible
                  adhesive or seam tape, and the substrate has to be cleaned and primed properly or
                  the patch releases. Modified bitumen is repaired with matching cap sheet set in
                  torch or cold adhesive. Built-up gravel roofs need the aggregate swept back, the
                  failure cut out and the plies rebuilt before the surfacing goes back. Getting the
                  chemistry wrong is the most common reason a repair fails within a year.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the average cost to repair a flat roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  There is no useful average, because two repairs on the same building can differ by
                  an order of magnitude. What sets the number is the size of the failure, whether
                  insulation underneath is wet and has to be removed, how many separate details are
                  involved, whether the existing membrane is still manufactured, and whether the crew
                  can work during business hours. We survey the roof for moisture before pricing and
                  the estimate comes back as line items so you can see exactly which of those factors
                  applied.
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
                  permit can
                  require the whole roof to meet current code rather than be patched back to its
                  original standard. On commercial buildings that usually means added insulation and
                  a wind-uplift rating the original assembly never had, which is how a large repair
                  quietly becomes a recover or replacement project. Which thresholds apply to your
                  building is confirmed with the City of Amarillo when we pull the permit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the lifespan of a commercial flat roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends on the system, the quality of the original installation and how hard the
                  climate works it. Amarillo works it hard: Potter County has recorded 131 severe
                  hail days since 2000, the city averages 8 to 12 hailstorms a year, and the annual
                  average wind of 14.3 mph puts constant uplift on fasteners and seams. A roof that
                  would run its full expected service life in a mild climate can arrive at the
                  repair-versus-replace decision several years early here. Age alone does not decide
                  it. The condition of the membrane and the moisture survey do.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Is it worth repairing an old commercial flat roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is worth repairing when the failures are isolated, the membrane is still
                  flexible and well adhered, the insulation below is dry, and the deck is sound. It
                  stops being worth it when you are repairing several unrelated failures a year, when
                  the moisture survey shows widespread saturation, or when the membrane has gone
                  brittle across the field so every patch just moves the stress to the next weak
                  spot. We will tell you which situation you are in rather than selling another
                  patch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will a repair void my existing roof warranty?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It can, which is why we ask about it before touching anything. Manufacturer system
                  warranties usually require that repairs be made with approved materials and, in
                  some cases, by an authorized applicator. If your roof is still inside a live
                  warranty period we will tell you what the paperwork requires before work starts, so
                  you do not trade a small repair bill for a cancelled warranty.
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
          <h2 className="text-4xl font-bold mb-6">Get the Repair Scoped From the Actual Roof</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free condition assessment with photographs, a moisture survey and a core cut, then a
            repair estimate priced detail by detail.
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

        <RelatedArticles pageSlug="commercial-flat-roof-repair" />
      </div>
    </>
  );
}