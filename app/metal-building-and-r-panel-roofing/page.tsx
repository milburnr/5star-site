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
  alternates: { canonical: "https://5starroofingpros.com/metal-building-and-r-panel-roofing/" },
  title: "Metal Building & R-Panel Roofing in Amarillo, TX | 5 Star Roofing",
  description:
    "R-panel and PBR roofing on pre-engineered metal buildings in Amarillo — panel profile and gauge, fastener and washer specification, insulation sandwich, and what to do at end of life. Call (806) 622-6041.",
  openGraph: {
    title: "Metal Building & R-Panel Roofing in Amarillo, TX | 5 Star Roofing",
    description:
      "R-panel and PBR roofing on pre-engineered metal buildings in Amarillo — panel profile and gauge, fastener and washer specification, insulation sandwich, and what to do at end of life.",
    url: "https://5starroofingpros.com/metal-building-and-r-panel-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Metal Building and R-Panel Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MetalBuildingAndRPanelRoofingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Metal Building and R-Panel Roofing",
            name: "Metal Building and R-Panel Roofing in Amarillo",
            description:
              "Repair, re-fastening, retrofit and replacement of through-fastened R-panel and PBR metal roofs on pre-engineered metal buildings in Amarillo, Texas — shops, self-storage, churches, offices and light industrial.",
            url: "https://5starroofingpros.com/metal-building-and-r-panel-roofing/",
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
              name: "Commercial Building Types",
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
                name: "What is R-panel roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "R-panel is the ribbed, through-fastened steel panel that covers most pre-engineered metal buildings in this part of Texas. The screws go straight through the face of the panel into the purlin below, and a rubber washer under each screw head does the sealing. It is economical, fast to install and easy to repair, and its defining characteristic is that the waterproofing depends on thousands of individual fasteners rather than on the panel alone.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between R-panel and PBR panel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They look nearly identical from the ground. PBR adds a purlin bearing leg, an extra return under the lap that supports the sidelap where two panels meet and keeps the joint from being squeezed out of shape when the screw is driven. On a roof, that difference matters, which is why PBR is the profile we normally specify on a roof plane and R-panel is more often left to walls.",
                },
              },
              {
                "@type": "Question",
                name: "How often do metal building roof screws need replacing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no fixed interval, but the washers age faster than the steel does. Panels move with every temperature swing, that movement works the screws loose, and sun degrades the rubber until it no longer seals. A full re-fasten with oversized screws and long-life washers is a scheduled maintenance event on a through-fastened roof rather than a repair, and it is dramatically cheaper than replacing panels that were still fine.",
                },
              },
              {
                "@type": "Question",
                name: "Why is my metal building roof leaking at the ridge and the endwalls?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because those are the trim details, and trim is where through-fastened roofs almost always let go first. Ridge caps, rake trim, endwall and sidewall flashing, gutter straps and equipment curbs all involve closures, sealant and fasteners working together, and all of them have a shorter service life than the panel itself. When we get called to a metal building leak, the trims and penetrations get inspected before the field of the roof does.",
                },
              },
              {
                "@type": "Question",
                name: "Can you put a new metal roof over an existing R-panel roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Frequently, yes, and on a self-storage row or an occupied shop it is often the right answer because nothing comes off and the tenants never notice. It is a bigger project than a re-screw and a smaller one than a tear-off. Our metal roof retrofit page covers how the sub-framing, slope and insulation work; the short version is that the existing frame has to prove it can carry the added weight before anything is ordered.",
                },
              },
              {
                "@type": "Question",
                name: "How does hail affect an R-panel roof in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Steel dents before it punctures, so hail damage on a metal building is easy to dismiss as cosmetic. The problem is the coating: once the finish is fractured, corrosion starts at that point and works outward, and thinner-gauge panels dent at smaller stone sizes. Potter County has recorded 131 severe hail days since 2000, so we document metal roofs after storms rather than waiting for a leak, and we read the cosmetic-damage wording in the policy before anyone assumes the dents are covered.",
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
        service="Metal Building & R-Panel Roofing"
        h1="Metal Building & R-Panel Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Building Types", url: "/commercial-building-types/" },
          { name: "Metal Buildings & R-Panel", url: "/metal-building-and-r-panel-roofing/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: <strong>through-fastened R-panel and PBR roofs on pre-engineered metal buildings</strong> in Amarillo: shops, self-storage, churches, offices and light industrial.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The whole system hangs on fasteners and trim. The panel usually outlives both, which is why re-fastening is maintenance, not repair.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Gauge, coating and washer specification are where these roofs are quietly cheapened. They are also what decides how the roof ages here.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free metal building assessment covering fasteners, trim, curbs and gutters. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              A Roof Held On by Thousands of Individual Screws
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Most metal buildings around Amarillo, from the contractor shops and self-storage rows
              to the church annexes and the small industrial units off the arterials, are roofed in
              through-fastened ribbed panel. R-panel and its close relative PBR are the profiles you
              will see quoted. The screws pass straight through the face of the steel into the
              purlins underneath, and a rubber washer beneath each screw head is what actually keeps
              the water out.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That design is why these buildings go up quickly and economically, and it is also the
              whole story of how they age. The steel panel will usually outlast everything holding it
              down. Understanding a through-fastened roof means thinking about fasteners, washers and
              trim as the wearing parts of a system, on their own maintenance clock, rather than
              waiting for a leak to tell you something is finished.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              R-Panel, PBR, and Why the Difference Matters on a Roof
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              These two profiles are routinely treated as interchangeable, quoted as interchangeable,
              and they are not, at least not overhead.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">The profile decision</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />PBR carries a purlin bearing leg that supports the sidelap</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />That leg stops the lap deforming as the screw is driven</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A deformed sidelap is a slow leak that never shows a hole</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />R-panel without that leg is better suited to walls</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />From the ground the two look effectively identical</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />So the profile has to be confirmed in the specification, not assumed</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Gauge and coating</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Heavier gauge steel resists denting at smaller stone sizes</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Bare Galvalume and painted systems weather differently</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Coating warranties cover chalk and fade, not impact</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Cut edges and field-drilled holes are where rust begins</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Light colors reduce heat load on the building below</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Cheapening the gauge is the quietest way to cheapen a bid</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>Two bids on a metal roof are frequently not the same roof.</strong> Profile,
                gauge, coating system and fastener specification can all differ while the drawing
                looks the same and the price does not explain why. Our estimates list those items
                explicitly so you can compare like with like, including against a competing quote.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Re-Fastening Is Maintenance, Not a Repair
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A through-fastened roof has a wearing part that a membrane roof does not: the washer
              under every screw head. Panels expand and contract with each hot day and cold night,
              that movement gradually works the screws loose, and sunlight degrades the rubber until
              it stops sealing. The steel above it can still have years left.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A full re-fasten replaces every screw with an oversized fastener that bites fresh
              material in the purlin, fitted with a long-life washer. Done at the right point it
              restores the roof for a fraction of what panels cost, and it is the single most
              cost-effective thing an owner of a metal building can do. Left too long, the holes are
              worn oversized and water has been reaching the purlins for years, at which point the
              conversation is about panels.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The tell is visible from the ground on a bright day: rows of screw heads sitting at
              slightly different depths, rust streaks running down the panel below individual
              fasteners, or washers that have gone hard and cracked. If you can see that from your
              parking lot, the roof is asking for attention before it starts asking for money.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Trim, Curbs and Gutters: Where the Leaks Actually Are
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When we are called to a leaking metal building, the field of the roof is rarely the
              culprit. It is the places where the panel stops and something else begins.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Ridge, rake and endwall</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every trim relies on closures, sealant and fasteners working together, and all
                  three age faster than the panel. Foam closures compress and fail, sealant hardens,
                  and the trim starts moving. These are the first details we inspect.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Curbs and penetrations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rooftop HVAC, exhaust fans, plumbing vents, conduit and the antenna somebody added
                  in 2011. Anything cut into a ribbed panel needs a curb that matches the rib
                  profile, and a lot of them were never built that way.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Gutters and downspouts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Metal buildings are long, so a single eave collects an enormous volume of water
                  fast. Undersized or blocked gutters back water up under the eave trim, and that is
                  a leak with no hole in the roof at all.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              There is also the insulation sandwich to consider. Most Amarillo metal buildings carry
              a fiberglass blanket draped over the purlins and pinched at each fastener line. Where a
              building has been conditioned, or where an office has been built inside a shop, that
              detail decides whether the underside of your roof stays dry. It is worth checking from
              inside as well as outside, and our assessment does both.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              End of Life: Re-Screw, Retrofit or Replace
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              There are three honest options on a tired metal building roof, and which one applies is
              decided by the condition of the holes and the purlins rather than the age on the
              drawing. Re-screwing works while the panels are sound and the fastener holes can still
              be upsized into fresh material. A retrofit puts a new roof system on framing above the
              old panels. Full replacement is what is left when the panels themselves are corroded
              through or the purlins will no longer hold.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              On this kind of building the decision usually turns on the holes. Once a screw hole
              has been upsized twice there is no fresh purlin steel left to bite, and at that point
              re-screwing is over and the choice is between retrofit and replacement. The retrofit
              route has its own page, with the structural questions it raises. What we can tell you
              from a walk of the roof and a look at the purlins from inside is which of the three
              you are actually choosing between.
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
                  Dents Are Not Automatically Cosmetic
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Steel dents long before it punctures, which is why hail damage on metal buildings
                  goes unclaimed. But once the coating is fractured, corrosion starts there, and a
                  thin-gauge panel that took a stone of <strong>4.25 inches</strong> (the largest on
                  record here) is not cosmetic. Two things to know before you file: many commercial
                  policies carry a cosmetic damage exclusion on metal roof surfacing, and you have a{" "}
                  <strong>two-year window from the date of loss</strong> to file in Texas. Read the
                  first before you count on the second.
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
              Where Metal Buildings Fit Among the Buildings We Roof
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A pre-engineered metal building behaves like nothing else on our list: no deck, no
              membrane, and a waterproofing system made of fasteners and trim. If your property is a
              different type, whether retail, warehouse, industrial, hospitality, multifamily or
              agricultural, our{" "}
              <a href="/commercial-building-types/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial building types
              </a>{" "}
              page sets out how each one changes the approach, and is the better place to start.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work on metal buildings out of 2909 S Western St in Amarillo and in Canyon, Borger,
              Pampa, Dumas, Hereford, Bushland and the wider West Texas market.
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
                  What is R-panel roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  R-panel is the ribbed, through-fastened steel panel that covers most pre-engineered
                  metal buildings in this part of Texas. The screws go straight through the face of
                  the panel into the purlin below, and a rubber washer under each screw head does the
                  sealing. It is economical, fast to install and easy to repair, and its defining
                  characteristic is that the waterproofing depends on thousands of individual
                  fasteners rather than on the panel alone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the difference between R-panel and PBR panel?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  They look nearly identical from the ground. PBR adds a purlin bearing leg, an
                  extra return under the lap that supports the sidelap where two panels meet and
                  keeps the joint from being squeezed out of shape when the screw is driven. On a
                  roof, that difference matters, which is why PBR is the profile we normally specify
                  on a roof plane and R-panel is more often left to walls.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often do metal building roof screws need replacing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  There is no fixed interval, but the washers age faster than the steel does. Panels
                  move with every temperature swing, that movement works the screws loose, and sun
                  degrades the rubber until it no longer seals. A full re-fasten with oversized screws
                  and long-life washers is a scheduled maintenance event on a through-fastened roof
                  rather than a repair, and it is dramatically cheaper than replacing panels that
                  were still fine.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why is my metal building roof leaking at the ridge and the endwalls?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Because those are the trim details, and trim is where through-fastened roofs almost
                  always let go first. Ridge caps, rake trim, endwall and sidewall flashing, gutter
                  straps and equipment curbs all involve closures, sealant and fasteners working
                  together, and all of them have a shorter service life than the panel itself. When we
                  get called to a metal building leak, the trims and penetrations get inspected before
                  the field of the roof does.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you put a new metal roof over an existing R-panel roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Frequently, yes, and on a self-storage row or an occupied shop it is often the
                  right answer because nothing comes off and the tenants never notice. It is a bigger
                  project than a re-screw and a smaller one than a tear-off. Our metal roof retrofit
                  page covers how the sub-framing, slope and insulation work; the short version is
                  that the existing frame has to prove it can carry the added weight before anything
                  is ordered.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does hail affect an R-panel roof in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Steel dents before it punctures, so hail damage on a metal building is easy to
                  dismiss as cosmetic. The problem is the coating: once the finish is fractured,
                  corrosion starts at that point and works outward, and thinner-gauge panels dent at
                  smaller stone sizes. Potter County has recorded 131 severe hail days since 2000, so
                  we document metal roofs after storms rather than waiting for a leak, and we read
                  the cosmetic-damage wording in the policy before anyone assumes the dents are
                  covered.
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
          <h2 className="text-4xl font-bold mb-6">Find Out Whether Yours Needs Screws or Panels</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free metal building assessment covering fasteners, trim, curbs and gutters, inside and
            out. If the answer is a box of screws, that is what we will tell you.
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

        <RelatedArticles pageSlug="metal-building-and-r-panel-roofing" />
      </div>
    </>
  );
}