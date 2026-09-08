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
  alternates: { canonical: "https://5starroofingpros.com/built-up-and-modified-bitumen-roof/" },
  title: "Built-Up & Modified Bitumen Roof Repair in Amarillo, TX | 5 Star Roofing",
  description:
    "Repairing asphalt-based commercial roofs in Amarillo, TX — gravel built-up, smooth BUR and SBS/APP modified bitumen. Blisters, splits, alligatoring and flashing failures diagnosed and fixed. Call (806) 622-6041.",
  openGraph: {
    title: "Built-Up & Modified Bitumen Roof Repair in Amarillo, TX | 5 Star Roofing",
    description:
      "Repairing asphalt-based commercial roofs in Amarillo, TX — gravel built-up, smooth BUR and SBS/APP modified bitumen. Blisters, splits, alligatoring and flashing failures diagnosed and fixed.",
    url: "https://5starroofingpros.com/built-up-and-modified-bitumen-roof/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Built-Up and Modified Bitumen Roof Repair in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BuiltUpAndModifiedBitumenRoofPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Built-Up and Modified Bitumen Roof Repair",
            name: "Built-Up and Modified Bitumen Roof Repair in Amarillo",
            description:
              "Diagnosis and repair of asphalt-based commercial low-slope roofs in Amarillo, Texas, including gravel-surfaced built-up roofing, smooth-surfaced BUR, and SBS and APP modified bitumen membranes.",
            url: "https://5starroofingpros.com/built-up-and-modified-bitumen-roof/",
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
                name: "What is the difference between built-up roofing and modified bitumen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Built-up roofing is the older layered system: alternating plies of felt and asphalt built up on site, usually finished with gravel or a smooth coating. Modified bitumen is asphalt with rubber or plastic modifiers blended in and rolled into factory-made sheets, applied in one or two plies. Both are asphalt roofs and both are repairable, but they fail differently and they take different repair details, which is why identifying yours correctly comes first.",
                },
              },
              {
                "@type": "Question",
                name: "Why is my flat roof blistering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A blister is trapped air or moisture between plies that expands when the roof heats up and pushes the layers apart. On an asphalt roof it usually means a ply was laid over a damp or dirty surface, or the interply asphalt was applied too cool to bond. A blister that is intact and firm can often be monitored; one that has broken open is an active water entry and gets cut out, dried, and rebuilt in plies rather than smeared over with mastic.",
                },
              },
              {
                "@type": "Question",
                name: "Can a gravel built-up roof be repaired, or does it need replacing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gravel roofs are repairable, but the gravel makes the work slower and hides the evidence. The stone has to be spudded back from the repair area, the failure exposed, the plies rebuilt, and the surfacing restored. Repair stops being sensible when the felts have gone brittle across the whole roof, when moisture readings show widespread wet insulation, or when you are patching the same roof several times a year.",
                },
              },
              {
                "@type": "Question",
                name: "What does alligatoring on a roof mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Alligatoring is the cracked, scaled pattern that develops in the asphalt surface of a smooth built-up roof as sun and heat drive the oils out of it. Shallow alligatoring is aging, not failure, and it is often a signal that the roof needs resurfacing rather than repair. Cracks that run down into the felts are a different matter, because water is now reaching the plies and the repair has to reach that deep too.",
                },
              },
              {
                "@type": "Question",
                name: "Do you use torch-down repairs on occupied buildings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Only where it is the right method and it can be done safely. APP modified bitumen is designed to be torch-applied, but open flame on an occupied commercial roof carries real risk, especially near mechanical curbs, wood blocking and insulation. Cold-applied adhesives and self-adhered sheets do the same job on most repairs without a flame, and we default to those unless the assembly genuinely calls for heat.",
                },
              },
              {
                "@type": "Question",
                name: "Does hail damage show up on an asphalt flat roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It does, but it hides. Hail on a gravel built-up roof drives stone down into the plies and leaves bruises you cannot see from a walk-by, and on smooth or modified surfaces it shows as fractured spots that only open up months later. Potter County has recorded 131 severe hail days since 2000, so on any asphalt roof here we brush test areas clear and document what is underneath before writing a repair scope.",
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
        service="Built-Up & Modified Bitumen Roof Repair"
        h1="Built-Up & Modified Bitumen Roof Repair in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Flat Roof Systems", url: "/commercial-roofing/" },
          { name: "Built-Up & Modified Bitumen", url: "/built-up-and-modified-bitumen-roof/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: repairing the <strong>asphalt-based</strong> flat roofs specifically, meaning gravel built-up, smooth BUR, and SBS or APP modified bitumen. Not single-ply membrane, not replacement.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The five failures we are usually called for: blisters, splits, fishmouthed laps, alligatored surfacing, and flashing that has pulled away at a curb or wall.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Asphalt repairs are rebuilt in plies. Anything sealed over with a trowel of mastic and called finished will be back next season.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free roof assessment with the failure areas photographed and mapped. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              First, Which Asphalt Roof Do You Actually Have?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A surprising number of Amarillo building owners inherit a roof with no record of what
              it is. It matters, because a built-up roof and a modified bitumen roof look similar
              from a distance and repair very differently up close. Built-up roofing is the older
              layered method: plies of felt and asphalt built up on site, then surfaced with gravel
              or a smooth coating. Modified bitumen is asphalt with rubber or plastic modifiers
              blended in, manufactured into rolls and applied in one or two plies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We identify the system with a core cut before quoting anything beyond a temporary
              stop-gap. The core tells us the ply count, the surfacing, the insulation type and
              whether it is wet, and the deck below. Guessing at that from the surface is how a
              repair ends up bonded to the wrong thing and lifts within a year. After 11 years on
              Panhandle commercial roofs, the core cut is still the first thing we do.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Five Ways These Roofs Fail
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Asphalt roofs give a lot of warning before they leak, if someone is reading the
              surface. These are the failures we find on Amarillo buildings, and what each one
              actually needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Blisters between the plies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Air or moisture trapped between layers expands in the heat and separates them. A
                  firm, intact blister can sometimes be left and monitored. One that has split open
                  is a live water entry: it gets cut out, the cavity dried, and the plies rebuilt
                  back to the original thickness rather than capped with mastic.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Splits along a stress line
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A straight tear, usually over an insulation joint or a change in the deck. Splits
                  are movement, not wear, so patching the split without addressing what is moving
                  underneath simply relocates the tear a few inches. The repair gets a reinforced
                  detail designed to accept that movement.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Fishmouthed and lifting laps
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The edge of a sheet curls up and opens a mouth that funnels water straight between
                  plies. Common on modified bitumen where a lap was rolled cold or dirty. The lap is
                  cut back, the surfaces cleaned, and the seam rebuilt and sealed properly rather
                  than weighted back down.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Alligatored surfacing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The scaled, cracked pattern that appears when sun drives the oils out of exposed
                  asphalt. Shallow alligatoring means the roof wants resurfacing, not patching. When
                  the cracks run down into the felts, water is already reaching the plies and the
                  repair has to go that deep too.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>And the fifth, which causes most of the leaks:</strong> flashing at curbs,
                walls, drains and penetrations. Asphalt flashing is where two materials and two
                movement rates meet, and it is almost always the first thing to let go. When we get
                a leak call on a built-up or modified roof, the flashings get inspected before the
                field does, because that is where the water usually gets in.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Repairing a Gravel-Surfaced Roof Is Slower, and That Is the Point
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Gravel-surfaced built-up roofs are common on older Amarillo commercial and warehouse
              stock, and they are the roofs most often repaired badly. The gravel hides the failure,
              so the shortcut is to find roughly where the water is coming in, trowel plastic cement
              across the area, throw the stone back over it and leave. That repair looks finished
              and lasts one season.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Done properly, the stone is spudded back well past the failure so the plies can be
              seen. The damaged felts are cut out, the substrate is dried, and new plies are laid in
              with the laps staggered so the repair carries the same number of layers as the roof
              around it. The area is then re-surfaced and the gravel restored. It takes longer and it
              is the only version that holds.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              One local wrinkle worth knowing: hail drives gravel down into the plies. On a
              gravel roof that has taken a storm, the bruising sits under the stone where nobody can
              see it, which is why we brush test areas clear and document what is underneath rather
              than reporting on what the surface looks like.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Hot, Cold-Applied or Torch, and Why We Usually Avoid the Torch
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              There are three ways to bond asphalt roofing, and on an occupied Amarillo building the
              choice is as much a safety decision as a technical one.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hot asphalt</h3>
                <p className="text-gray-700 leading-relaxed">
                  The traditional method for built-up work and still the right one for rebuilding
                  plies on a hot-applied roof. It needs a kettle on site and it brings fumes, so on
                  occupied buildings it is scheduled around tenants and away from fresh-air intakes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Cold-applied</h3>
                <p className="text-gray-700 leading-relaxed">
                  Adhesives and self-adhered sheets that need no flame and no kettle. This is our
                  default for repairs on occupied commercial roofs, because it does the same job
                  with far less disruption and no ignition source over your building.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Torch-applied</h3>
                <p className="text-gray-700 leading-relaxed">
                  APP modified bitumen is designed for it, and sometimes the assembly genuinely
                  calls for it. But open flame near wood blocking, curbs and insulation is a real
                  risk, so we use it deliberately and never as a matter of routine.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Weather sets the calendar on all three. Asphalt does not bond to a cold or damp
              surface, and the Panhandle wind (Amarillo averages <strong>14.3 mph</strong> at{" "}
              <strong>3,600 feet</strong>) puts real limits on when a kettle or a roll of membrane
              can be handled safely. We schedule around it rather than forcing a repair into a bad
              window and coming back to redo it.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              When Repair Stops Being the Right Answer
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We would rather repair your roof than sell you a new one, but there is a point where
              repairs become an annual subscription. Three signals mean it is time for a different
              conversation: the felts have gone brittle across the whole roof rather than in one
              area; a moisture survey shows wet insulation over a meaningful share of the surface;
              or you are calling for repairs several times a year in different places.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              There is also a code trigger to know about. Once repairs cover a large enough share of
              a roof, the permit can require the whole roof to meet current code rather than be
              restored to the standard it was built to. Enough patches on one asphalt roof can
              quietly turn a repair budget into a replacement project, so we track the running total
              and tell you before you get there. Which thresholds apply to your building is a
              question for the City of Amarillo, and we confirm it when we pull the permit.
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
                  If the Damage Came From a Storm, Document Before You Patch
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Hail damage on an asphalt roof is easy to repair over and hard to prove afterwards,
                  because a trowel of mastic and a scatter of gravel erase the strike marks
                  completely. Get it recorded first. You have a{" "}
                  <strong>two-year window from the date of loss</strong> to file in Texas, but the
                  evidence on a gravel roof does not last that long. We photograph the roof, brush
                  test areas clear on gravel surfaces, and meet the adjuster on site so the scope
                  reflects what is actually under the stone.
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
              Where Asphalt Roof Repair Sits in Our Commercial Flat-Roof Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This page is about keeping an existing built-up or modified bitumen roof in service.
              If the assessment says the roof is past repair, the next questions are whether it can
              be recovered rather than torn off and what system should go on top. Our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat-roof systems
              </a>{" "}
              page covers those options (membrane, coatings, recover and full replacement) and is
              where to go if you already know the roof is at the end of its life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Older asphalt roofs are common on the downtown and older commercial stock across the
              Panhandle, and we repair them out of 2909 S Western St in Amarillo and in Canyon,
              Borger, Pampa, Dumas, Hereford, Bushland and the wider West Texas market.
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
                  What is the difference between built-up roofing and modified bitumen?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Built-up roofing is the older layered system: alternating plies of felt and asphalt
                  built up on site, usually finished with gravel or a smooth coating. Modified
                  bitumen is asphalt with rubber or plastic modifiers blended in and rolled into
                  factory-made sheets, applied in one or two plies. Both are asphalt roofs and both
                  are repairable, but they fail differently and they take different repair details,
                  which is why identifying yours correctly comes first.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is my flat roof blistering?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A blister is trapped air or moisture between plies that expands when the roof heats
                  up and pushes the layers apart. On an asphalt roof it usually means a ply was laid
                  over a damp or dirty surface, or the interply asphalt was applied too cool to bond.
                  A blister that is intact and firm can often be monitored; one that has broken open
                  is an active water entry and gets cut out, dried, and rebuilt in plies rather than
                  smeared over with mastic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can a gravel built-up roof be repaired, or does it need replacing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Gravel roofs are repairable, but the gravel makes the work slower and hides the
                  evidence. The stone has to be spudded back from the repair area, the failure
                  exposed, the plies rebuilt, and the surfacing restored. Repair stops being sensible
                  when the felts have gone brittle across the whole roof, when moisture readings show
                  widespread wet insulation, or when you are patching the same roof several times a
                  year.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What does alligatoring on a roof mean?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Alligatoring is the cracked, scaled pattern that develops in the asphalt surface of
                  a smooth built-up roof as sun and heat drive the oils out of it. Shallow
                  alligatoring is aging, not failure, and it is often a signal that the roof needs
                  resurfacing rather than repair. Cracks that run down into the felts are a different
                  matter, because water is now reaching the plies and the repair has to reach that
                  deep too.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you use torch-down repairs on occupied buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Only where it is the right method and it can be done safely. APP modified bitumen
                  is designed to be torch-applied, but open flame on an occupied commercial roof
                  carries real risk, especially near mechanical curbs, wood blocking and insulation.
                  Cold-applied adhesives and self-adhered sheets do the same job on most repairs
                  without a flame, and we default to those unless the assembly genuinely calls for
                  heat.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does hail damage show up on an asphalt flat roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It does, but it hides. Hail on a gravel built-up roof drives stone down into the
                  plies and leaves bruises you cannot see from a walk-by, and on smooth or modified
                  surfaces it shows as fractured spots that only open up months later. Potter County
                  has recorded 131 severe hail days since 2000, so on any asphalt roof here we brush
                  test areas clear and document what is underneath before writing a repair scope.
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

        <InternalLinks currentCity="amarillo" currentService="roof-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Asphalt Roof Diagnosed Properly</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free assessment with a core cut, moisture readings and every failure area photographed
            and mapped.
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

        <RelatedArticles pageSlug="built-up-and-modified-bitumen-roof" />
      </div>
    </>
  );
}