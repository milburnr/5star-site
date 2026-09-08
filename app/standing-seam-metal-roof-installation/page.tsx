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
  alternates: { canonical: "https://5starroofingpros.com/standing-seam-metal-roof-installation/" },
  title: "Standing Seam Metal Roof Installation in Amarillo, TX | 5 Star Roofing",
  description:
    "Installing new standing seam metal roofs in Amarillo, TX — concealed clips, snap-lock vs mechanically seamed, thermal movement, clip spacing for Panhandle wind, and planning penetrations. Call (806) 622-6041.",
  openGraph: {
    title: "Standing Seam Metal Roof Installation in Amarillo, TX | 5 Star Roofing",
    description:
      "Installing new standing seam metal roofs in Amarillo, TX — concealed clips, snap-lock vs mechanically seamed, thermal movement, clip spacing for Panhandle wind, and planning penetrations.",
    url: "https://5starroofingpros.com/standing-seam-metal-roof-installation/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Standing Seam Metal Roof Installation in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function StandingSeamMetalRoofInstallationPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Standing Seam Metal Roof Installation",
            name: "Standing Seam Metal Roof Installation in Amarillo",
            description:
              "Installation of new standing seam metal roof systems in Amarillo, Texas — concealed-clip snap-lock and mechanically seamed panels engineered for Texas Panhandle wind and thermal movement.",
            url: "https://5starroofingpros.com/standing-seam-metal-roof-installation/",
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
              name: "Commercial Metal Roofing",
              url: "https://5starroofingpros.com/commercial-metal-roofing/",
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
                name: "What makes standing seam different from a regular metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The fasteners. On a through-fastened roof the screws go through the face of the panel and a rubber washer does the sealing. On standing seam the panels are held by concealed clips under the raised seam, so there are no fasteners penetrating the roof surface in the field at all. That single change removes the most common leak path on a metal roof and lets the panels move with temperature instead of fighting the screws.",
                },
              },
              {
                "@type": "Question",
                name: "Snap-lock or mechanically seamed standing seam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Snap-lock panels press together by hand and suit steeper roofs in ordinary conditions. Mechanically seamed panels are folded closed with a seaming machine on the roof, producing a much tighter joint with far better uplift and water resistance. On low-slope planes and on exposed buildings in the Texas Panhandle, mechanically seamed is usually the right specification, and we say so rather than quoting the cheaper profile and hoping.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a standing seam metal roof cost in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In the Texas Panhandle, standing seam metal runs $13 to $18 per square foot installed. Where a specific roof lands inside that band depends on panel gauge and coating, seam type, how cut-up the roof is, how many penetrations have to be flashed, and whether the panels sit on a solid deck or on open purlins. We price from the measured roof after the assessment and the estimate shows every one of those as its own line.",
                },
              },
              {
                "@type": "Question",
                name: "Do standing seam panels need room to expand?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and this is what separates a metal roof that lasts from one that oil-cans and tears at the fasteners. Long panels grow and shrink measurably between a hot afternoon and a cold night. A correctly built system uses a fixed point plus sliding clips so the panel can move along its length, and the eave, ridge and penetration details are built to accept that movement. Pinning a long panel at both ends is a known way to destroy it.",
                },
              },
              {
                "@type": "Question",
                name: "Will standing seam survive Amarillo hail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It resists puncture far better than most systems, but steel dents. Potter County has recorded 131 severe hail days since 2000, and the largest stone on record here is 4.25 inches. Heavier gauge resists denting at larger stone sizes, and it is worth reading how your manufacturer warranty treats cosmetic damage before you choose a panel, because the roof can keep water out and still look hail-struck.",
                },
              },
              {
                "@type": "Question",
                name: "Can HVAC and vents be added to a standing seam roof later?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They can, but every new penetration cuts across a system designed to move, so it is far better to plan them before the panels go on. Curbs on a standing seam roof have to be sized and located to work with the rib layout and the panel's expansion, and clamps that attach to the seam without piercing it are the preferred way to mount anything after the fact. Tell us what is going up there at design stage and it costs almost nothing to accommodate.",
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
        service="Standing Seam Metal Roof Installation"
        h1="Standing Seam Metal Roof Installation in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Metal Roofing", url: "/commercial-metal-roofing/" },
          { name: "Standing Seam Installation", url: "/standing-seam-metal-roof-installation/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: installing a <strong>new</strong> standing seam roof in Amarillo. Not repairs, not a retrofit over an existing metal roof. Those are separate jobs.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The defining feature: concealed clips. No fasteners through the panel face in the field, which removes the most common leak path on a metal roof.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The two decisions that matter here: snap-lock or mechanically seamed, and how the panels are allowed to move as they heat and cool.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free measured assessment and a line-item estimate. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Standing Seam Actually Changes
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A standing seam roof is defined by what you cannot see. The panels are held down by
              concealed clips that sit under the raised seam, so across the whole field of the roof
              there are no screws driven through the face of the metal. On a through-fastened roof,
              those screws and the rubber washers under them are the waterproofing, and they are the
              first thing to age. Standing seam simply removes that failure mode from the equation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The second thing it changes is movement. Because the clips are not rigidly pinning the
              panel, a properly designed system lets the metal grow and shrink along its length as
              the temperature swings, instead of building that stress into a few thousand fasteners.
              That freedom is engineered, not accidental, and getting it wrong is the most common way
              a new metal roof goes bad. This page is about installing a new one; if you already have
              a metal roof that is leaking or tired, that is a different conversation.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Snap-Lock or Mechanically Seamed?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              This is the first real decision on the job, and it is where two quotes for "a standing
              seam roof" can be describing genuinely different products at genuinely different
              prices.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Snap-lock</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Panels press together by hand, no seaming machine</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Faster to install, which shows in the price</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Well suited to steeper roof planes</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Adequate on sheltered buildings in ordinary exposure</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Less uplift capacity than a folded seam</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Not our default on an exposed Panhandle building</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Mechanically seamed</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The seam is folded closed by a machine on the roof</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A far tighter joint, with sealant available in the seam</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Substantially better uplift performance</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The option that works on lower-slope planes</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Slower and more expensive to install, honestly</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />What we normally specify on exposed commercial roofs here</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>Slope decides a lot of this.</strong> The lower the roof plane, the longer
                water sits against the seam and the more the joint has to behave like a seal rather
                than a shingle overlap. Manufacturers publish minimum slopes for each profile, and
                they differ between snap-lock and seamed panels. We check the actual pitch of your
                roof against the panel's published minimum before specifying, because a profile
                installed below its rated slope is a warranty problem waiting to happen.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Thermal Movement: The Thing Most Installations Get Wrong
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Metal panels grow and shrink with temperature, and on a long panel that movement is not
              trivial. A well-built standing seam roof handles it deliberately: one fixed point per
              panel run, sliding clips everywhere else, and eave, ridge and penetration details built
              with the room for the metal to travel.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              This is also why panel length is a design decision rather than a delivery convenience.
              Longer runs mean fewer laps, which is good, and more accumulated movement, which has to
              be engineered for. On roll-formed panels the length is a choice we make with you rather
              than one the truck makes for us. Get it right and nothing about it is ever visible.
              Get it wrong and the roof tells you: oil-canning across the flats, clips deforming,
              seams under permanent tension, and fasteners working at the details that were
              supposed to stay still.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The underlayment matters here too. Metal roofs get hot, and standard underlayment is
              not built for the temperatures under a panel in full Texas sun. A high-temperature
              synthetic or self-adhered membrane rated for metal is part of the specification, not an
              upgrade, and it is a line item worth checking on any quote you compare us against.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Engineering the Attachment for Panhandle Wind
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Amarillo averages <strong>14.3 mph</strong> of wind at <strong>3,600 feet</strong> of
              elevation, with far higher gusts through spring. Uplift on a roof is not uniform. It
              concentrates at the perimeter and hardest at the corners, so a roof fastened to one
              pattern across the whole plane is under-attached exactly where it will be tested.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Clip spacing by zone</h3>
                <p className="text-gray-700 leading-relaxed">
                  Field, perimeter and corner zones each get their own clip spacing, tightened where
                  the load concentrates. That specification comes from the assembly's tested uplift
                  values, not from habit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">What it fastens to</h3>
                <p className="text-gray-700 leading-relaxed">
                  Solid deck and open purlins are different systems. On a deck we confirm what the
                  substrate will hold; over purlins the clip has to land on structure, and the layout
                  follows the framing rather than the panel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Edge metal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perimeter edge details are where wind gets its first grip on a roof. Properly
                  secured edge metal is unglamorous, cheap relative to the roof, and the difference
                  between a storm event and a claim.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              We pull the City of Amarillo permit and build the assembly to the wind design
              requirements that apply to your building. Where a rating drives a heavier clip or a
              tighter spacing, it appears on the estimate as its own line so you can see what you are
              buying.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What It Costs, and What Moves the Number
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In the Texas Panhandle, standing seam metal runs{" "}
              <strong>$13 to $18 per square foot installed</strong>. That is a wide band because
              standing seam is genuinely sensitive to the specifics of a building, and anyone
              quoting you a confident number over the phone is guessing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What pushes it up</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Mechanically seamed rather than snap-lock</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Heavier gauge and premium coating systems</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A cut-up roof with valleys, hips and dormers</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Curbs, vents and equipment to flash around</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Tighter clip spacing driven by wind zones</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Deck repair or re-decking found at tear-off</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What holds it down</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Simple roof planes with long uninterrupted runs</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Few penetrations, planned rather than retrofitted</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A sound existing deck that needs no work</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Straightforward site access for material</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Standard rather than custom color and finish</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Normal working hours rather than after-hours crews</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              We price from the measured roof after the assessment, and the estimate shows profile,
              gauge, coating, seam type, clip spacing, underlayment and every flashing as its own
              line, so you can compare it honestly against another bid.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Plan the Penetrations Before the Panels Arrive
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Every hole in a standing seam roof cuts across a system that is designed to move, which
              is why penetrations are cheap at design stage and expensive afterwards. Curbs have to
              be sized and positioned to work with the rib layout, located clear of seams where
              possible, and detailed so the panel can still travel around them. Doing that on paper
              before the roll former runs costs almost nothing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              If equipment has to go on later, seam clamps that grip the standing rib without piercing
              the panel are the right way to mount it. Solar racking, walkway supports, satellite and
              signage all have clamp solutions. What we do not want to find in five years is a
              tradesman's self-tapping screw through the flat of a panel, which is the fastest way to
              undo the whole reason you paid for standing seam. Tell us at the start what is going up
              there, and we will build the roof around it.
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
                  Read the Warranty on Cosmetic Hail Before You Choose a Panel
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Standing seam resists puncture well, but steel dents, and manufacturer warranties
                  treat cosmetic damage differently from performance failure. So do insurance
                  policies, which often carry a cosmetic damage exclusion on metal roof surfacing.
                  Potter County has recorded <strong>131 severe hail days since 2000</strong>, and
                  the largest stone on record here is <strong>4.25 inches</strong>. Before you
                  choose a gauge and a finish, read both documents: the panel warranty and the
                  policy. A heavier gauge and a textured finish hide dents better, and that choice
                  is cheap at order time and impossible afterwards.
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
              Where a New Standing Seam Roof Sits in Our Metal Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This page covers installing a new standing seam system. Repairing an existing metal
              roof, and going over one with new panels rather than tearing it off, are separate jobs
              with separate decisions. Our{" "}
              <a href="/commercial-metal-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial metal roofing
              </a>{" "}
              page sets out the full set side by side. Start there if you have not settled on new
              panels yet.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We install standing seam from 2909 S Western St in Amarillo and in Canyon, Borger,
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
                  What makes standing seam different from a regular metal roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The fasteners. On a through-fastened roof the screws go through the face of the
                  panel and a rubber washer does the sealing. On standing seam the panels are held by
                  concealed clips under the raised seam, so there are no fasteners penetrating the
                  roof surface in the field at all. That single change removes the most common leak
                  path on a metal roof and lets the panels move with temperature instead of fighting
                  the screws.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Snap-lock or mechanically seamed standing seam?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Snap-lock panels press together by hand and suit steeper roofs in ordinary
                  conditions. Mechanically seamed panels are folded closed with a seaming machine on
                  the roof, producing a much tighter joint with far better uplift and water
                  resistance. On low-slope planes and on exposed buildings in the Texas Panhandle,
                  mechanically seamed is usually the right specification, and we say so rather than
                  quoting the cheaper profile and hoping.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does a standing seam metal roof cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  In the Texas Panhandle, standing seam metal runs $13 to $18 per square
                  foot installed. Where a specific roof lands inside that band depends on panel
                  gauge and coating, seam type, how cut-up the roof is, how many penetrations have
                  to be flashed, and whether the panels sit on a solid deck or on open purlins. We
                  price from the measured roof after the assessment and the estimate shows every one
                  of those as its own line.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do standing seam panels need room to expand?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, and this is what separates a metal roof that lasts from one that oil-cans and
                  tears at the fasteners. Long panels grow and shrink measurably between a hot
                  afternoon and a cold night. A correctly built system uses a fixed point plus sliding
                  clips so the panel can move along its length, and the eave, ridge and penetration
                  details are built to accept that movement. Pinning a long panel at both ends is a
                  known way to destroy it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will standing seam survive Amarillo hail?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It resists puncture far better than most systems, but steel dents. Potter County has
                  recorded 131 severe hail days since 2000, and the largest stone on record here is
                  4.25 inches. Heavier gauge resists
                  denting at larger stone sizes, and it is worth reading how your manufacturer
                  warranty treats cosmetic damage before you choose a panel, because the roof can keep
                  water out and still look hail-struck.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can HVAC and vents be added to a standing seam roof later?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  They can, but every new penetration cuts across a system designed to move, so it is
                  far better to plan them before the panels go on. Curbs on a standing seam roof have
                  to be sized and located to work with the rib layout and the panel's expansion, and
                  clamps that attach to the seam without piercing it are the preferred way to mount
                  anything after the fact. Tell us what is going up there at design stage and it costs
                  almost nothing to accommodate.
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
          <h2 className="text-4xl font-bold mb-6">Get a Standing Seam Roof Specified Properly</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free measured assessment and an estimate that shows profile, gauge, coating, seam type
            and clip spacing separately, so you can compare it honestly.
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

        <RelatedArticles pageSlug="standing-seam-metal-roof-installation" />
      </div>
    </>
  );
}