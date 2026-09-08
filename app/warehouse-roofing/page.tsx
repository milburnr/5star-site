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
  alternates: { canonical: "https://5starroofingpros.com/warehouse-roofing/" },
  title: "Warehouse & Distribution Roofing in Amarillo, TX | 5 Star Roofing",
  description:
    "Roofing warehouses and distribution buildings in Amarillo — large roof areas, long-span decks, racking below, dock operations, skylights and condensation that gets mistaken for a leak. Call (806) 622-6041.",
  openGraph: {
    title: "Warehouse & Distribution Roofing in Amarillo, TX | 5 Star Roofing",
    description:
      "Roofing warehouses and distribution buildings in Amarillo — large roof areas, long-span decks, racking below, dock operations, skylights and condensation.",
    url: "https://5starroofingpros.com/warehouse-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-11-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Warehouse Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WarehouseRoofingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Warehouse Roofing",
            name: "Warehouse and Distribution Building Roofing in Amarillo",
            description:
              "Roof repair, restoration and replacement on warehouse and distribution buildings in Amarillo, Texas, planned around large roof areas, long-span decks, stored inventory, dock operations and rooftop safety.",
            url: "https://5starroofingpros.com/warehouse-roofing/",
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
              name: "Commercial Building Types We Roof",
              url: "https://5starroofingpros.com/commercial-building-types/",
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
                name: "What are the different types of warehouse roofs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In this market they fall into two families. Older and lighter buildings are usually pre-engineered metal: through-fastened panels on purlins, sometimes with a standing seam system. Larger distribution buildings are typically low-slope, a steel deck on open-web joists carrying insulation and a single-ply, modified bitumen or built-up membrane. Which family you have decides everything about how the roof is repaired, so the first thing we do on an unfamiliar building is confirm the assembly with a core cut or a panel inspection.",
                },
              },
              {
                "@type": "Question",
                name: "Why is it so hard to find a leak in a warehouse?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because there is no ceiling to read and no way to get close to the underside. In an office you lift a tile and follow the stain. In a warehouse the deck is thirty feet up, racking blocks the lift path, and by the time water reaches the floor it has run along a joist and dropped somewhere unrelated to where it came in. We work these from above, in a grid, and water-test suspect details in sequence rather than guessing from the puddle.",
                },
              },
              {
                "@type": "Question",
                name: "Can we keep shipping while the roof is replaced?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and the plan is built around the dock rather than around our convenience. Material staging and the crane pick have to keep the apron clear for trucks, work above an aisle needs that aisle closed to forklifts for the duration, and each roof section is dried in before the crew leaves. We agree the section map and the daily sequence with your operations manager before we mobilize.",
                },
              },
              {
                "@type": "Question",
                name: "Water is dripping inside but the roof looks fine. What is going on?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On an unconditioned or lightly insulated warehouse it is often condensation rather than a leak. Warm moist air rises, meets a cold metal deck or panel underside on a clear Panhandle night, and drips. It shows up on cold mornings, over a wide area, without any rain. The fix is insulation, vapor control and ventilation, not sealant, and telling the two apart before anyone buys a roof repair saves real money.",
                },
              },
              {
                "@type": "Question",
                name: "Are skylights on a warehouse roof a problem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They are two problems. Aged plastic domes yellow, craze and leak at the curb, and they are a serious fall hazard because a degraded panel will not hold a person. Amarillo hail is hard on them as well. Any warehouse project we scope includes the skylights explicitly: condition, curb flashing, and whether they get screens, replacement units or removal.",
                },
              },
              {
                "@type": "Question",
                name: "Does a reflective roof surface matter on a building this size?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The larger the roof, the more the surface choice affects what the building costs to run, and a distribution roof is mostly uninterrupted field area. Amarillo sits at 3,600 feet with intense sun, so a reflective membrane and an appropriate insulation thickness are worth pricing as a package rather than defaulting to whatever is cheapest per square. We will show both options on the estimate so the difference is visible.",
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
        service="Warehouse Roofing"
        h1="Warehouse & Distribution Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-11-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Building Types", url: "/commercial-building-types/" },
          { name: "Warehouse Roofing", url: "/warehouse-roofing/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>A warehouse roof is defined by <strong>scale and access</strong>: a large uninterrupted field, a deck thirty feet up, and racking that makes the underside unreachable.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Leaks are found from above, in a grid, because there is no ceiling to read from below. What lands on the floor tells you almost nothing about where the water came in.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Not every drip is a leak. On uninsulated buildings, cold-morning condensation is routinely misdiagnosed and repaired at the wrong end.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free warehouse roof assessment with a grid survey, moisture readings and a section-by-section work plan. Call (806) 622-6041.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Scale Changes the Problem, Not Just the Price
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              On a small commercial building the roof is a surface you can take in at a glance. On a
              distribution building it is acres of it, mostly identical, with the important details
              concentrated at the perimeter and at a handful of penetrations. Nothing about that roof
              is hard individually. What makes it a specialist job is that a small failure repeats
              itself hundreds of times, and that everything underneath is inventory.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The second thing scale changes is consequence. A pinhole over an office ruins a ceiling
              tile. The same pinhole over a racked aisle wets pallets thirty feet below, and the real
              loss is the product and the disruption, not the roof repair. On warehouses our
              assessment work is deliberately more thorough than the size of the repair usually
              justifies, because the downside is out of all proportion to the defect.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              You Cannot Chase a Warehouse Leak From the Floor
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In most buildings, finding a leak starts inside. In a warehouse that route is closed:
              the deck is out of reach, there is no ceiling plane to read, racking blocks the lift
              path, and water travels along a joist before it drops. So the search happens from the
              top down, systematically.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Grid the roof</h3>
                <p className="text-gray-700 leading-relaxed">
                  We divide the roof into mapped sections and survey each one rather than walking to
                  where someone thinks the leak is. On a large area, a defined grid is the only way
                  to be sure nothing was skipped.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Scan for moisture</h3>
                <p className="text-gray-700 leading-relaxed">
                  An infrared or capacitance survey finds wet insulation the eye cannot see. On a
                  roof this size the map matters more than any single defect, because it shows how
                  far the water has already travelled.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Correlate to the floor</h3>
                <p className="text-gray-700 leading-relaxed">
                  Only then do we tie roof findings to the interior locations your team reported.
                  Working in that order stops the crew repairing the nearest defect above the wet
                  pallet and calling it solved.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Deck type decides the method.</strong> A steel deck on open-web joists carries
                water sideways along the flutes; a through-fastened metal panel roof carries it down
                the underside of the panel. The same symptom on the floor means different things on
                the two systems, which is why we confirm the assembly before diagnosing anything.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Fails on a Large Low-Slope Roof
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Warehouse roofs do not usually fail in the middle. They fail where the design is
              working hardest — at the edges, over long spans, and at the few things that puncture
              the field.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Perimeter and corner uplift</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wind loads concentrate at corners and along edges, not evenly across the field. On
                  a roof this large that perimeter is long. With an average wind of 14.3 mph here and
                  spring gusts far above it, edge metal and perimeter attachment get checked first.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Ponding across long spans</h3>
                <p className="text-gray-700 leading-relaxed">
                  Long-span joists deflect, and a shallow slope over a wide bay means water finds the
                  low point and stays. Standing water accelerates everything else, and tapered
                  insulation is often the real repair.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Drains and overflow scuppers</h3>
                <p className="text-gray-700 leading-relaxed">
                  A large roof moves a great deal of water fast. Blocked drains and missing or
                  undersized overflows turn an ordinary Panhandle downpour into a structural load
                  question, so drainage capacity gets checked, not assumed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Skylights and smoke vents</h3>
                <p className="text-gray-700 leading-relaxed">
                  Aged domes craze and leak at the curb, and a degraded panel will not hold the
                  weight of a person. They are a leak item and a fall hazard at the same time, and
                  they belong in the scope explicitly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail bruising in the field</h3>
                <p className="text-gray-700 leading-relaxed">
                  A hail-struck membrane can look intact and be compromised. Potter County has
                  recorded 131 severe hail days since 2000, so on a large field we cut test squares
                  in several zones rather than judging the roof from one.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Equipment traffic damage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Exhaust fans, make-up air units and refrigeration draw service technicians onto the
                  roof year-round. Without walkway pads, that traffic wears defined paths into the
                  membrane between the ladder and every unit.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Condensation Gets Repaired as a Leak More Often Than It Should
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This is the single most common misdiagnosis on Panhandle warehouse and cold-storage
              buildings. Warm moist air inside rises to a cold metal deck or panel underside on a
              clear night, condenses, and drips. It presents as a roof leak, and it gets repaired as
              one, repeatedly and without success, because there is nothing wrong with the roof.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The tells are consistent: it appears on cold mornings rather than during rain, it is
              spread over a wide area instead of concentrated, and it is worst where the building is
              least insulated or where a process puts moisture into the air. The answer is insulation,
              vapor control and ventilation, and on a metal building that conversation often ends at
              a{" "}
              <a href="/metal-roof-retrofit-over-existing-roof/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                retrofit over the existing roof
              </a>, which adds the insulation the original assembly never had.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We check for it before quoting repairs, because a warehouse owner who buys three roof
              repairs for a condensation problem has bought nothing at all.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Working Above a Live Operation
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Distribution buildings do not pause. The schedule is built around the dock, the aisles
              and your shift pattern, and it is agreed before we mobilize rather than negotiated
              daily on site.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What we plan around</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Keeping the dock apron clear for trucks</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Aisles closed to forklifts under active work</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Crane picks outside receiving windows</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Fastening noise against shift changes</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Protection over anything that cannot be moved</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Non-negotiables on our side</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Every section dried in before the crew leaves</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Skylights and vents guarded during the work</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Fall protection at every open edge</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Daily magnet sweep of the dock and drive</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A named point of contact for your shift leads</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Where daytime work is genuinely impossible, we run nights. That costs more and the
              difference is shown as its own line on the estimate so it stays your decision, not an
              assumption we made for you.
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
                  After a Storm, the Inventory Clock Runs Faster Than the Claim Clock
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  On a warehouse the building damage is often the smaller half of the loss. Wet
                  product has to be assessed and moved at once, while the roof claim proceeds on its
                  own timetable, and both need the same evidence gathered on day one. That means
                  photographing the roof, the racking and the product before anything is cleaned up
                  or hauled out, and getting a roofer on the surface while the strike marks are
                  fresh. The property claim and the inventory claim will be argued from the same
                  photographs. Texas gives you a <strong>two-year window from the date of loss</strong>{" "}
                  to file the roof claim, but the inventory decision is made the same week. We secure
                  the roof first and document while we do it.
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
              Where Warehouses Fit Among the Buildings We Roof
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Warehouses are one of several building types we handle differently. Our{" "}
              <a href="/commercial-building-types/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial building types
              </a>{" "}
              page covers the full set. If your building is pre-engineered metal rather than a
              membrane roof on steel deck, the fastener and panel issues on our{" "}
              <a href="/metal-building-and-r-panel-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                metal building and R-panel page
              </a>{" "}
              will describe your roof more precisely than this one does.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Distribution buildings cluster along the interstate and rail corridors, so a lot of
              this work is outside Amarillo proper. We cover it from 2909 S Western St, including
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
                  What are the different types of warehouse roofs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In this market they fall into two families. Older and lighter buildings are usually
                  pre-engineered metal: through-fastened panels on purlins, sometimes with a
                  standing seam system. Larger distribution buildings are typically low-slope, a
                  steel deck on open-web joists carrying insulation and a single-ply, modified
                  bitumen or built-up membrane. Which family you have decides everything about how
                  the roof is repaired, so the first thing we do on an unfamiliar building is confirm
                  the assembly with a core cut or a panel inspection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is it so hard to find a leak in a warehouse?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Because there is no ceiling to read and no way to get close to the underside. In an
                  office you lift a tile and follow the stain. In a warehouse the deck is thirty feet
                  up, racking blocks the lift path, and by the time water reaches the floor it has
                  run along a joist and dropped somewhere unrelated to where it came in. We work
                  these from above, in a grid, and water-test suspect details in sequence rather than
                  guessing from the puddle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can we keep shipping while the roof is replaced?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, and the plan is built around the dock rather than around our convenience.
                  Material staging and the crane pick have to keep the apron clear for trucks, work
                  above an aisle needs that aisle closed to forklifts for the duration, and each roof
                  section is dried in before the crew leaves. We agree the section map and the daily
                  sequence with your operations manager before we mobilize.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Water is dripping inside but the roof looks fine. What is going on?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  On an unconditioned or lightly insulated warehouse it is often condensation rather
                  than a leak. Warm moist air rises, meets a cold metal deck or panel underside on a
                  clear Panhandle night, and drips. It shows up on cold mornings, over a wide area,
                  without any rain. The fix is insulation, vapor control and ventilation, not
                  sealant, and telling the two apart before anyone buys a roof repair saves real
                  money.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Are skylights on a warehouse roof a problem?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  They are two problems. Aged plastic domes yellow, craze and leak at the curb, and
                  they are a serious fall hazard because a degraded panel will not hold a person.
                  Amarillo hail is hard on them as well. Any warehouse project we scope includes the
                  skylights explicitly: condition, curb flashing, and whether they get screens,
                  replacement units or removal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does a reflective roof surface matter on a building this size?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The larger the roof, the more the surface choice affects what the building costs to
                  run, and a distribution roof is mostly uninterrupted field area. Amarillo sits at
                  3,600 feet with intense sun, so a reflective membrane and an appropriate insulation
                  thickness are worth pricing as a package rather than defaulting to whatever is
                  cheapest per square. We will show both options on the estimate so the difference is
                  visible.
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
          <h2 className="text-4xl font-bold mb-6">Get Your Warehouse Roof Surveyed Properly</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free assessment with a gridded roof survey, moisture readings and a section-by-section
            work plan built around your dock schedule. The survey is yours to keep.
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

        <RelatedArticles pageSlug="warehouse-roofing" />
      </div>
    </>
  );
}