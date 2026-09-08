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
  alternates: { canonical: "https://5starroofingpros.com/agricultural-building-roofing/" },
  title: "Agricultural Building Roofing in Amarillo, TX | 5 Star Roofing",
  description:
    "Roofing for barns, machine sheds, hay storage and livestock buildings around Amarillo — fastener backout, ammonia corrosion, condensation control and wind uplift through open doors. Call (806) 622-6041.",
  openGraph: {
    title: "Agricultural Building Roofing in Amarillo, TX | 5 Star Roofing",
    description:
      "Roofing for barns, machine sheds, hay storage and livestock buildings around Amarillo — fastener backout, ammonia corrosion, condensation control and wind uplift through open doors.",
    url: "https://5starroofingpros.com/agricultural-building-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-10-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Agricultural Building Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AgriculturalBuildingRoofingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Agricultural Building Roofing",
            name: "Agricultural Building Roofing in Amarillo",
            description:
              "Roof repair, re-fastening, retrofit and replacement on agricultural buildings across the Texas Panhandle — barns, machine sheds, hay and grain storage, shops and livestock structures.",
            url: "https://5starroofingpros.com/agricultural-building-roofing/",
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
                name: "Why do the screws back out of a metal barn roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Exposed-fastener panels expand and contract with every hot day and cold night, and that movement works against the screw. Over years the shank walks back out of the purlin, the rubber washer flattens and cracks under sun, and the hole in the panel gets wider than the screw that is supposed to seal it. On an older agricultural roof, re-fastening with oversized screws and fresh washers often solves the leaks without touching a single panel.",
                },
              },
              {
                "@type": "Question",
                name: "Why does my metal roof drip when it has not rained?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "That is condensation, not a leak. Warm moist air inside an uninsulated building meets a cold panel and gives up its water on the underside of the steel. In a hay barn or a feed shed that water lands on what you are storing, and in a livestock building it is constant. Fixing it means a vapor control layer under the panels (a condensation blanket, a spray-applied barrier or a retrofit assembly), not more sealant on top.",
                },
              },
              {
                "@type": "Question",
                name: "What causes rust on the underside of a livestock building roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ammonia. Confinement buildings generate it constantly, it collects at the roof line, and combined with condensation it corrodes galvanized steel from the inside out. This is why a livestock roof can look sound from a drone and be paper-thin underneath. Any assessment on a confinement building has to include the inside of the panels, and the replacement specification has to account for the environment it is going back into.",
                },
              },
              {
                "@type": "Question",
                name: "Can you re-roof a metal building without tearing the old panels off?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Often, yes. A metal-over-metal retrofit installs new panels over the existing roof on sub-framing, so the building stays in use and the hay, feed or equipment underneath is never exposed. On a farm building the deciding questions are whether the purlins have been eaten from below by ammonia or wash-down humidity, and whether the frame can carry the extra weight. If the purlins are gone, new panels over them are a roof that fails at the same wind speed as the old one, and we will say so before anything is priced.",
                },
              },
              {
                "@type": "Question",
                name: "Why do agricultural roofs blow off in Panhandle wind?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually because a large door was open. When wind enters a building through a big opening it pressurizes the inside and pushes up on the roof at the same moment the wind outside is pulling on it, and the fasteners see a load nobody designed for. Amarillo averages 14.3 mph wind at 3,600 feet of elevation, with far higher gusts in spring, so on buildings with wide doors we pay particular attention to edge and corner attachment, where uplift concentrates.",
                },
              },
              {
                "@type": "Question",
                name: "Does hail damage a metal agricultural roof enough to claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It can, and it is often under-reported because a dented panel still keeps rain out for a while and a farm building is not somewhere anyone looks up. The largest stone on record around Amarillo is 4.25 inches, and a stone that size fractures the coating on an ag panel even when it does not hole it. Once the coating is broken, rust starts there, so a storm on a barn roof is worth documenting rather than assuming it was cosmetic.",
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
        service="Agricultural Building Roofing"
        h1="Agricultural Building Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-10-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Building Types", url: "/commercial-building-types/" },
          { name: "Agricultural Buildings", url: "/agricultural-building-roofing/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: <strong>farm and ranch structures</strong> around Amarillo, meaning barns, machine sheds, hay and grain storage, shops and livestock buildings. A different assembly from any commercial roof.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>No deck, no attic. Steel panels screwed to purlins, which means the failures are fasteners, corrosion and condensation, not membrane.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The drip that is not a leak: condensation on the underside of cold steel, landing on your hay. It is fixed from below, not with sealant on top.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free assessment covering both sides of the panels, scheduled around your operation. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              An Ag Roof Is Not a Small Commercial Roof
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Almost every agricultural building across the Panhandle is the same basic thing:
              exposed-fastener steel panels screwed directly to purlins over a clear-span frame.
              There is no deck under the panels, usually no insulation, and no attic in between. What
              is on the underside of that steel is your building's interior, and the screws you can
              see from the ground are the entire waterproofing strategy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That assembly fails in ways a commercial membrane roof never does, and it gets
              diagnosed wrong constantly, most often as a leak when it is condensation, or as
              cosmetic hail when the coating has actually been breached and rust is starting. We work
              these buildings across the farming country around Amarillo, including Hereford, Dumas,
              Dalhart, Friona, Tulia and Canyon, and the assessment always includes the inside of the
              roof, not just the outside.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Four Failures We Find on Panhandle Farm Buildings
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              These are not the failures a commercial roofer usually looks for, which is exactly why
              they get missed.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Fasteners backing out
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Panels move every day with the temperature and slowly walk the screws out of the
                  purlins. The neoprene washers flatten and crack under sun, and the holes wear wider
                  than the screws. Re-fastening with oversized screws and new washers fixes a
                  remarkable number of "the barn is leaking" calls without replacing a panel.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Corrosion from the inside
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ammonia in livestock confinement, salt and chemical vapor in fertilizer and input
                  storage, and constant humidity in wash areas all attack galvanized steel from
                  underneath. The roof looks fine from above and is thin from below. This is the
                  failure that most often turns a repair job into a replacement.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Condensation mistaken for a leak
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Water dripping on a clear night is warm interior air condensing on cold steel. It
                  wets hay, spoils feed, rusts equipment and corrodes the panel it forms on. Sealant
                  applied on top of the roof does nothing about it, because the water is forming on
                  the wrong side.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Edges and ridges peeling up
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Uplift concentrates at eaves, rakes, ridges and corners, and that is where an ag
                  roof starts to let go. Once one panel edge lifts, wind gets underneath the sheet
                  and the failure runs. Edge attachment is the cheapest place to strengthen a farm
                  building and the most commonly neglected.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>What the assessment includes:</strong> a walk of the panel surface, a
                fastener condition sample across several bays, an inspection from inside the building
                looking up at the underside of the steel, and a check of every edge, ridge and
                transition. You get the findings whether or not you hire us, including the honest
                answer when the right fix is a box of screws rather than a new roof.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Condensation Control, Because the Contents Are the Point
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              On a commercial building, water on the underside of the roof is an inconvenience. On a
              hay barn it is spoiled inventory and a heating risk in the stack. On a machine shed it
              is rust on equipment worth more than the building. On a livestock building it is a
              permanent wet environment that eats the roof itself. This is why condensation deserves
              its own line in an agricultural scope rather than being treated as an afterthought.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The fix is always on the interior side: a vapor control layer between the moist air and
              the cold steel. That can be a factory-laminated condensation blanket applied with new
              panels, a spray-applied barrier on the underside of existing panels, or an insulated
              retrofit assembly that creates a proper cavity. Which one is right depends on what the
              building is used for, whether it can be emptied, and what you are protecting.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ventilation is the other half of it. Moving air out of the building reduces how much
              moisture is available to condense in the first place, and on a lot of Panhandle
              buildings improving ridge and eave ventilation is the cheapest meaningful improvement
              available.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Wind, Open Doors and Why Ag Buildings Lose Roofs
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Amarillo averages <strong>14.3 mph</strong> of wind at <strong>3,600 feet</strong> of
              elevation, with far stronger gusts through spring. But average wind is not what takes a
              barn roof off. What takes a barn roof off is a large door standing open in a
              windstorm.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Internal pressure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wind entering through a wide opening pressurizes the building and pushes up on the
                  roof from inside, at the same moment the flow over the top is lifting it. The
                  fasteners see both loads at once. A closed building simply does not experience
                  this.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Corners and edges</h3>
                <p className="text-gray-700 leading-relaxed">
                  Uplift is never uniform. It concentrates at the perimeter and hardest at the
                  corners, which is why we increase fastening density there rather than screwing the
                  whole roof to one pattern and hoping.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Purlin condition</h3>
                <p className="text-gray-700 leading-relaxed">
                  A screw is only as good as what it is screwed into. On older buildings we check
                  whether the purlins still hold, because a perfect new panel fastened to a
                  compromised frame is a roof that fails at the same wind speed as the old one.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              None of this is a reason to keep your doors shut during operations. It is a reason to
              have the attachment specified for a building that will sometimes be open, which is what
              an agricultural building actually is.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Retrofit Over the Existing Panels, and Working Around the Season
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A metal-over-metal retrofit installs new panels over the roof you have, usually on
              sub-framing, and it is often the right answer on a working farm building. Nothing comes
              off, so the hay, feed or equipment underneath is never exposed, and the space created
              between old and new is where the condensation blanket or insulation finally goes. The
              farm-specific catch is the purlins. Ammonia and wash-down humidity eat purlins from
              below, and a new roof screwed to a purlin that has lost half its steel is a roof that
              fails at the same wind speed as the old one. We check them from inside before anything
              is quoted.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The other constraint on ag work is not technical at all. Your building has a season.
              A hay barn cannot be opened up during harvest, a livestock building cannot be worked
              when it is full, and a shop is needed most when the equipment is running. We plan
              around your calendar rather than ours, and we would rather schedule a job into a
              quieter month than fight the operation for access.
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
                  Hail on Steel Is Easy to Under-Report
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  A dented panel keeps the rain out, so ag hail damage often goes unclaimed until
                  rust arrives years later where the coating was fractured. By then it reads as age
                  on the adjuster's report, not as storm damage, and the claim is gone. Potter County
                  has recorded <strong>131 severe hail days since 2000</strong>. Farm policies often
                  schedule outbuildings separately from the house, so check how the barn is covered
                  before you assume anything. You have a{" "}
                  <strong>two-year window from the date of loss</strong> to file in Texas. Get it
                  documented while it is still provable.
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
              Where Farm Buildings Fit Among the Buildings We Roof
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Agricultural structures sit in our commercial work, but almost nothing transfers
              directly from a retail or office roof to a hay barn. If your building is a different
              type, whether warehouse, shopping center, industrial, hospitality or multifamily, our{" "}
              <a href="/commercial-building-types/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial building types
              </a>{" "}
              page sets out how each one changes the work, and is the better place to start.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our shop is at 2909 S Western St in Amarillo, but most of this work is an hour or more
              out, in Canyon, Hereford, Dumas, Friona, Dalhart, Tulia, Borger, Pampa and the wider
              West Texas farming country.
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
                  Why do the screws back out of a metal barn roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Exposed-fastener panels expand and contract with every hot day and cold night, and
                  that movement works against the screw. Over years the shank walks back out of the
                  purlin, the rubber washer flattens and cracks under sun, and the hole in the panel
                  gets wider than the screw that is supposed to seal it. On an older agricultural
                  roof, re-fastening with oversized screws and fresh washers often solves the leaks
                  without touching a single panel.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why does my metal roof drip when it has not rained?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  That is condensation, not a leak. Warm moist air inside an uninsulated building
                  meets a cold panel and gives up its water on the underside of the steel. In a hay
                  barn or a feed shed that water lands on what you are storing, and in a livestock
                  building it is constant. Fixing it means a vapor control layer under the panels (a
                  condensation blanket, a spray-applied barrier or a retrofit assembly), not more
                  sealant on top.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What causes rust on the underside of a livestock building roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Ammonia. Confinement buildings generate it constantly, it collects at the roof
                  line, and combined with condensation it corrodes galvanized steel from the inside
                  out. This is why a livestock roof can look sound from a drone and be paper-thin
                  underneath. Any assessment on a confinement building has to include the inside of
                  the panels, and the replacement specification has to account for the environment it
                  is going back into.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you re-roof a metal building without tearing the old panels off?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Often, yes. A metal-over-metal retrofit installs new panels over the existing roof
                  on sub-framing, so the building stays in use and the hay, feed or equipment
                  underneath is never exposed. On a farm building the deciding questions are whether
                  the purlins have been eaten from below by ammonia or wash-down humidity, and
                  whether the frame can carry the extra weight. If the purlins are gone, new panels
                  over them are a roof that fails at the same wind speed as the old one, and we will
                  say so before anything is priced.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do agricultural roofs blow off in Panhandle wind?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Usually because a large door was open. When wind enters a building through a big
                  opening it pressurizes the inside and pushes up on the roof at the same moment the
                  wind outside is pulling on it, and the fasteners see a load nobody designed for.
                  Amarillo averages 14.3 mph wind at 3,600 feet of elevation, with far higher gusts in
                  spring, so on buildings with wide doors we pay particular attention to edge and
                  corner attachment, where uplift concentrates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does hail damage a metal agricultural roof enough to claim?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It can, and it is often under-reported because a dented panel still keeps rain out
                  for a while and a farm building is not somewhere anyone looks up. The largest
                  stone on record around Amarillo is 4.25 inches, and a stone that size fractures the
                  coating on an ag panel even when it does not hole it. Once the coating is broken,
                  rust starts there, so a storm on a barn roof is worth documenting rather than
                  assuming it was cosmetic.
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
          <h2 className="text-4xl font-bold mb-6">Get Your Farm Buildings Looked At Properly</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free assessment covering both sides of the panels (fasteners, corrosion, condensation
            and edge attachment), scheduled around your operation.
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

        <RelatedArticles pageSlug="agricultural-building-roofing" />
      </div>
    </>
  );
}