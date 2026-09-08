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
  alternates: { canonical: "https://5starroofingpros.com/commercial-tpo-roof-retrofit/" },
  title: "Commercial TPO Roof Retrofit in Amarillo, TX | 5 Star Roofing",
  description:
    "Recovering an existing commercial roof with TPO in Amarillo, TX — when code lets you retrofit instead of tear off, what it costs, 60 vs 80 mil, and how we keep your building open. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial TPO Roof Retrofit in Amarillo, TX | 5 Star Roofing",
    description:
      "Recovering an existing commercial roof with TPO in Amarillo, TX — when code lets you retrofit instead of tear off, what it costs, 60 vs 80 mil, and how we keep your building open.",
    url: "https://5starroofingpros.com/commercial-tpo-roof-retrofit/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-11-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial TPO Roof Retrofit in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialTpoRoofRetrofitPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial TPO Roof Retrofit",
            name: "Commercial TPO Roof Retrofit in Amarillo",
            description:
              "Recovering an existing low-slope commercial roof with a new TPO single-ply membrane in Amarillo, Texas, where code and roof condition allow a retrofit instead of a full tear-off.",
            url: "https://5starroofingpros.com/commercial-tpo-roof-retrofit/",
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
                name: "Can TPO be installed over an existing roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Often, yes. A TPO retrofit installs a new single-ply membrane over the existing roof assembly, usually with a layer of insulation or coverboard between the two. Building codes generally do not allow a recover when the existing roof is water-soaked or structurally deteriorated, or when the building already carries two or more roof coverings. A moisture survey and a core cut tell us which case you are in before anything is quoted.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 25% rule for roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is a rule of thumb, not a line in the code Amarillo enforces. The principle behind it is real: once a repair covers a large enough share of the roof, the permit can require the whole roof to meet current code rather than be patched back to the old standard. On a commercial building that usually means a repair project quietly becomes a full recover or replacement project. Which thresholds apply to your building is confirmed with the City of Amarillo when we pull the permit.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a commercial TPO retrofit cost in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Less than a tear-off and replacement of the same roof, because there is no tear-off labor and no landfill disposal, and we price it from the actual roof rather than publishing a per-square-foot figure that would be wrong for your building. The variables that actually move your number are membrane thickness, how much insulation is added to meet current code, the number of curbs, drains and penetrations to flash, and how much wet insulation has to be cut out before the new system goes down.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between 60 mil and 80 mil TPO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The number is membrane thickness in thousandths of an inch, and most of the extra material in an 80 mil sheet sits above the reinforcing scrim, which is what resists hail bruising and foot traffic. Potter County has recorded 131 severe hail days since 2000, so we specify 80 mil on buildings with rooftop equipment, regular service traffic, or an owner who intends to hold the asset long-term.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a TPO retrofit take on an occupied building?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because a retrofit leaves the existing roof deck in place, the building is never opened to weather and staff can usually keep working underneath. We stage the roof in sections, dry each section in before the crew leaves it, and schedule loud or disruptive work such as fastening near mechanical rooms around your operating hours.",
                },
              },
              {
                "@type": "Question",
                name: "Will insurance pay for a TPO retrofit after a hail storm?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on what the adjuster finds and what your policy covers, and on a retrofit there is a specific wrinkle: the carrier is paying to restore the roof that was damaged, and a recover over it is a different scope from a like-for-like replacement. Sometimes it is cheaper for the carrier and sometimes the layer count rules it out. You have a two-year window from the date of loss to file in Texas. We document the roof, including layer count and wet insulation, and meet the adjuster on site so the scope reflects what is actually up there.",
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
        service="TPO Roof Retrofit"
        h1="Commercial TPO Roof Retrofit in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-11-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Flat Roof Systems", url: "/commercial-roofing/" },
          { name: "TPO Roof Retrofit", url: "/commercial-tpo-roof-retrofit/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: recovering an <strong>existing</strong> failing low-slope roof with a new TPO membrane in Amarillo, instead of tearing the old system off. One service, not a services overview.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The gate: code generally blocks a recover if the existing roof is water-soaked or deteriorated, or if the building already carries two roof coverings. A moisture survey settles it.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Why owners choose it: no tear-off, no disposal, no day where the building is open to weather, and staff keep working underneath.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free retrofit assessment including a core cut. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What a TPO Retrofit Is, and When It Beats a Tear-Off
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A retrofit, which the trade also calls a recover, installs a new TPO single-ply
              membrane over the roof you already have, rather than stripping the building back to
              deck first. On most Amarillo commercial buildings that means new insulation or a
              coverboard laid over the existing surface, new fastening engineered for Panhandle
              wind, and a fully heat-welded TPO sheet on top. The old assembly stays where it is and
              becomes part of the thermal package.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This page is for the owner who already has a low-slope roof that is leaking, chalking
              or past its warranty, and wants to know one specific thing: can I put TPO over it, or
              am I paying for a tear-off? The honest answer depends on what is under the surface,
              and nobody can tell you from the parking lot. Eleven years in, we still cut a core
              before we quote a recover.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Can TPO Go Over Your Existing Roof?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Building codes treat a recover as a privilege, not a default. Four findings will
              disqualify your roof and push the project to a full replacement, and it is cheaper to
              find them now than after the material is on site.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Wet insulation below the surface
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Water trapped in the existing assembly does not dry out under a new membrane. It
                  keeps rotting the deck and voids the manufacturer warranty on the new system. An
                  infrared or capacitance moisture survey maps the wet areas. Small isolated zones
                  can be cut out and replaced; widespread saturation ends the retrofit conversation.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Two roof coverings already in place
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Code generally stops at two applications. If a previous owner already recovered
                  once, a third layer is not permitted, and the core cut is what proves how many
                  layers you actually have. On older Amarillo retail and warehouse stock this is the
                  most common disqualifier we find.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  A deck that will not hold fasteners
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A retrofit is only as good as its attachment. We pull test fasteners to confirm
                  the deck can hold the uplift resistance the assembly needs. At 3,600 feet with an
                  annual average wind of 14.3 mph and spring gusts well above that, uplift is not a
                  theoretical number here.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Ponding the recover would lock in
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A membrane follows the shape underneath it. If water stands on the existing roof,
                  it will stand on the new one. Tapered insulation can correct the slope as part of
                  the retrofit, but that has to be designed and priced up front, not discovered
                  after the first storm.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>What the assessment includes:</strong> a walk of the full roof surface,
                photographs of every penetration and termination, a moisture survey, and at least
                one core cut to confirm layer count and deck type. You get the findings whether or
                not you hire us, and if the roof fails the recover test we will say so.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              The "25% Rule", and Why a Repair Turns Into a Retrofit
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Owners hear about the 25 percent rule after a hail season and it usually arrives as
              bad news. The number itself is a rule of thumb rather than a line in the code Amarillo
              enforces, but the principle holds: once a repair covers a large enough share of the
              roof, the permit can require the whole roof to be brought up to current code rather
              than restored to whatever standard it was built to. Current code typically means more
              insulation and a wind-uplift rating the original assembly never had.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This is why a large hail repair on an Amarillo commercial building so often turns into
              a full recover. Patch a big enough share of a roof and you have triggered the upgrade
              anyway, at which point a TPO retrofit across the whole surface is usually better
              value, because you get one warranty, one system, and no seam between old and new work
              waiting to fail. Which thresholds apply to your building is a question for the City
              of Amarillo, not for a salesperson. We confirm it when we pull the permit and tell you
              before you sign, not after.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What a Retrofit Costs Compared With a Tear-Off
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We do not publish a per-square-foot figure for TPO, because the same membrane on two
              Amarillo buildings can land at very different numbers once insulation, penetrations
              and wet-area removal are counted. What holds across every job is the direction: a
              retrofit costs less than a tear-off and replacement of the same roof, for a simple
              reason. You are not paying a crew to remove the old roof, and you are not paying to
              haul it to a landfill. On a large low-slope roof, tear-off and disposal is a
              meaningful share of the total bill.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What pushes the price up</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />80 mil membrane instead of 60 mil</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Added insulation to satisfy current code</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Tapered insulation to correct ponding</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Curbs, drains and penetrations to re-flash</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Wet insulation that has to be cut out first</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />After-hours or weekend scheduling</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What the retrofit saves you</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />No tear-off labor</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />No dumpsters and no landfill fees</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />No day with the building open to weather</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />No interior protection or relocation costs</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Shorter schedule, so less operational drag</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Existing assembly adds to the R-value</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              Every number moves with the building. We price from the actual roof after the
              assessment, and the estimate shows line items, not a lump figure.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              60 Mil or 80 Mil TPO in the Texas Panhandle?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mil is thousandths of an inch of membrane thickness. What matters is not the total
              number but how much material sits above the reinforcing scrim. That layer is what
              absorbs hail bruising, dropped tools and boot traffic before the reinforcement is
              exposed. An 80 mil sheet carries meaningfully more of it than a 60 mil sheet.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Potter County has recorded <strong>131 severe hail days since 2000</strong>, and the
              largest stone on record here is <strong>4.25 inches</strong>. That is the environment
              your new membrane has to survive, and it is why we do not treat 60 mil as an automatic
              default the way a national spec sheet might.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specify 80 mil on buildings with rooftop mechanical equipment, regular service
              traffic, or an owner who plans to hold the property long-term. On a low-traffic roof
              with a shorter ownership horizon, 60 mil is a defensible choice and we will tell you
              so rather than upsell you.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              How We Sequence a Retrofit Without Closing Your Building
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The single biggest advantage of a recover is that the deck never comes off, so there
              is no point in the project where your building is exposed. That changes how the work
              can be scheduled.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Assess and core</h3>
                <p className="text-gray-700 leading-relaxed">
                  Full roof walk, moisture survey, core cut and fastener pull test. This is where we
                  confirm the retrofit is legal and buildable, and where any wet insulation gets
                  mapped for removal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Permit and stage</h3>
                <p className="text-gray-700 leading-relaxed">
                  We pull the City of Amarillo permit, confirm how the code upgrade threshold
                  applies, and stage material and equipment away from your entrances, docks and
                  customer parking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Recover in sections</h3>
                <p className="text-gray-700 leading-relaxed">
                  Insulation or coverboard, mechanical attachment, then heat-welded TPO, section by
                  section, each one dried in before the crew leaves. Loud work near occupied space
                  gets scheduled around your hours.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              The noisy part of a recover is the fastening, and on a metal deck it carries straight
              into the space below. If that is a problem for a tenant, tell us which hours are off
              limits and we will build the sequence around them. After-hours work is priced as its
              own line so you can see what the quiet is costing.
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
                  If the Retrofit Follows a Hail Claim, Watch the Clock
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  A hail claim and a recover decision depend on the same two facts, and both come
                  out of the core cut: how many layers the building already carries, and how much
                  of the insulation is wet. An adjuster who scopes the roof from the surface will
                  miss both, and a recover written into a scope that later fails the layer test has
                  to be re-argued. You have a{" "}
                  <strong>two-year window from the date of loss</strong> to file in Texas. We
                  document the roof, core included, and meet the adjuster on site so the approved
                  scope reflects what is actually up there.
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
              Where a TPO Retrofit Sits in Our Commercial Flat-Roof Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A retrofit is one option among several for a low-slope commercial roof. It is the
              right one when the existing assembly is dry, single-layered and structurally sound;
              it is the wrong one when it is not. Our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat-roof systems
              </a>{" "}
              page covers the full set (membrane, modified bitumen, coatings and full replacement).
              Start there if you have not decided a recover is the route.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We recover roofs out of 2909 S Western St in Amarillo and in Canyon, Borger, Pampa,
              Dumas, Hereford, Bushland and the wider West Texas market.
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
                  Can TPO be installed over an existing roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Often, yes. A TPO retrofit installs a new single-ply membrane over the existing
                  roof assembly, usually with a layer of insulation or coverboard between the two.
                  Building codes generally do not allow a recover when the existing roof is
                  water-soaked or structurally deteriorated, or when the building already carries
                  two or more roof coverings. A moisture survey and a core cut tell us which case
                  you are in before anything is quoted.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the 25% rule for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is a rule of thumb, not a line in the code Amarillo enforces. The principle
                  behind it is real: once a repair covers a large enough share of the roof, the
                  permit can require the whole roof to meet current code rather than be patched
                  back to the old standard. On a commercial building that usually means a repair
                  project quietly becomes a full recover or replacement project. Which thresholds
                  apply to your building is confirmed with the City of Amarillo when we pull the
                  permit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does a commercial TPO retrofit cost in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Less than a tear-off and replacement of the same roof, because there is no
                  tear-off labor and no landfill disposal, and we price it from the actual roof
                  rather than publishing a per-square-foot figure that would be wrong for your
                  building. The variables that actually move your number are membrane
                  thickness, how much insulation is added to meet current code, the number of curbs,
                  drains and penetrations to flash, and how much wet insulation has to be cut out
                  before the new system goes down.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the difference between 60 mil and 80 mil TPO?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The number is membrane thickness in thousandths of an inch, and most of the extra
                  material in an 80 mil sheet sits above the reinforcing scrim, which is what
                  resists hail bruising and foot traffic. Potter County has recorded 131 severe hail
                  days since 2000, so we specify 80 mil on buildings with rooftop equipment, regular
                  service traffic, or an owner who intends to hold the asset long-term.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does a TPO retrofit take on an occupied building?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Because a retrofit leaves the existing roof deck in place, the building is never
                  opened to weather and staff can usually keep working underneath. We stage the roof
                  in sections, dry each section in before the crew leaves it, and schedule loud or
                  disruptive work such as fastening near mechanical rooms around your operating
                  hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance pay for a TPO retrofit after a hail storm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends on what the adjuster finds and what your policy covers, and on a
                  retrofit there is a specific wrinkle: the carrier is paying to restore the roof
                  that was damaged, and a recover over it is a different scope from a like-for-like
                  replacement. Sometimes it is cheaper for the carrier and sometimes the layer count
                  rules it out. You have a two-year window from the date of loss to file in Texas.
                  We document the roof, including layer count and wet insulation, and meet the
                  adjuster on site so the scope reflects what is actually up there.
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

        <InternalLinks currentCity="amarillo" currentService="tpo-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Find Out If Your Roof Qualifies for a Retrofit</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free retrofit assessment with a moisture survey and core cut. If the roof fails the
            recover test, you will know before anyone orders material.
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

        <RelatedArticles pageSlug="commercial-tpo-roof-retrofit" />
      </div>
    </>
  );
}