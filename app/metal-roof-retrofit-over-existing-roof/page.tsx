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
  alternates: { canonical: "https://5starroofingpros.com/metal-roof-retrofit-over-existing-roof/" },
  title: "Metal Roof Retrofit Over an Existing Roof in Amarillo, TX | 5 Star Roofing",
  description:
    "Framing a new metal roof system above the roof you already have in Amarillo — how retrofit framing works, adding slope and insulation, what the structure has to prove, and when it beats a tear-off. Call (806) 622-6041.",
  openGraph: {
    title: "Metal Roof Retrofit Over an Existing Roof in Amarillo, TX | 5 Star Roofing",
    description:
      "Framing a new metal roof system above the roof you already have in Amarillo — retrofit framing, adding slope and insulation, and when it beats a tear-off.",
    url: "https://5starroofingpros.com/metal-roof-retrofit-over-existing-roof/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Metal Roof Retrofit Over an Existing Roof in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MetalRoofRetrofitOverExistingRoofPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Metal Roof Retrofit",
            name: "Metal Roof Retrofit Over an Existing Roof in Amarillo",
            description:
              "Installing a new metal roof system on retrofit framing above an existing commercial roof in Amarillo, Texas — adding slope, insulation and a new uplift-engineered assembly without a tear-off.",
            url: "https://5starroofingpros.com/metal-roof-retrofit-over-existing-roof/",
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
              url: "https://5starroofingpros.com/metal-roofing/",
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
                name: "Is it possible to install a metal roof over an existing metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and on a pre-engineered metal building it is often the best available option. The new panels do not sit on the old ones. A retrofit sub-framing system is fastened through the existing panels into the purlins below, and the new roof is built on that framing. The old panels stay in place as a substrate. What has to be confirmed first is that the existing structure can carry the added weight and the new uplift path, which is a structural question, not a roofing preference.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a retrofit and a repair?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A repair fixes the roof you have. A retrofit gives you a new roof system above the one you have, and the old roof is demoted to a substrate. If the failures on your building are individual (a few leaks, some backed-out fasteners, a bad curb), repair is the right money. A retrofit is what you do when the failures have become general and you want a new assembly without opening the building to weather.",
                },
              },
              {
                "@type": "Question",
                name: "Can a retrofit fix a roof that ponds water?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "That is one of its strongest arguments. Because the new roof sits on framing rather than on the old surface, the framing can be built to create slope where the existing roof had little or none. A low-slope roof that has been holding water for years can be given a genuine pitch and drained properly, which no coating or membrane recover can do on its own.",
                },
              },
              {
                "@type": "Question",
                name: "Will a retrofit stop the condensation dripping in my metal building?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is usually the right vehicle for fixing it, because the cavity created by the retrofit framing is where new insulation goes. Condensation on a metal building is an insulation and vapor problem rather than a leak, and a retrofit is one of the few ways to add meaningful insulation to an existing roof without gutting the building. The insulation and vapor detail has to be designed deliberately, not treated as filler.",
                },
              },
              {
                "@type": "Question",
                name: "What are the cons of putting a new metal roof over an old one?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Three, honestly. It adds dead load, so the structure has to be evaluated rather than assumed. It hides whatever is underneath, so any wet insulation or corroded purlin has to be dealt with before the new system goes on rather than after. And it is not available on every building, because code limits how many roof coverings a structure may carry, and a building that has already been recovered may be out of options.",
                },
              },
              {
                "@type": "Question",
                name: "Will insurance cover a retrofit after a hail storm in Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Coverage depends on your policy and on what the adjuster finds, and a retrofit raises a question a like-for-like replacement does not: the carrier owes you the roof you had, and a framed system with new slope and insulation is more roof than that. The difference is usually an upgrade you fund, unless ordinance-or-law coverage picks up code-required insulation. You have a two-year window from the date of loss to file in Texas. We document the existing roof before it is enclosed and meet the adjuster on site so the scope reflects the actual condition.",
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
        service="Metal Roof Retrofit"
        h1="Metal Roof Retrofit Over an Existing Roof in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-2-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Metal Roofing", url: "/metal-roofing/" },
          { name: "Metal Roof Retrofit", url: "/metal-roof-retrofit-over-existing-roof/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>A retrofit is a <strong>new roof system built on framing above the old one</strong>. The existing roof stays put and becomes a substrate. It is not a repair and it is not a patch.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Because the new roof sits on framing, it can add what the original never had: real slope, real insulation, and an uplift path engineered for Panhandle wind.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The gate is structural. Added dead load and a new uplift path have to be verified against the existing purlins and frames before anything is ordered.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free retrofit feasibility assessment including fastener pull tests. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              A New Roof Above the Old One, Not a New Skin On It
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A metal retrofit is easy to describe and easy to misunderstand. We fasten a sub-framing
              system (hat channels, sub-purlins or a light bar system depending on the building)
              through the existing roof into the structure below it. New insulation goes into the
              space that framing creates. A new metal roof, usually a standing seam with concealed
              clips, is installed on the framing. The old roof never comes off. It ends its life as
              a substrate and a secondary water barrier.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That is a fundamentally different product from repairing the roof you have. Our{" "}
              <a href="/commercial-metal-roof-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                metal roof repair page
              </a>{" "}
              covers fixing individual failures, and it is the cheaper answer while the failures are
              still individual. A retrofit is what you buy when they are not: when the fastener
              holes are worn across the whole roof, when corrosion is general rather than spotted, or
              when the building has problems the original roof was never built to solve.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What a Retrofit Can Fix That a New Panel Cannot
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Replacing panels one-for-one gives you the same roof you had, newer. A retrofit gives
              you a chance to correct the original design, and on Panhandle buildings that is usually
              where the value sits.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">It can add slope</h3>
                <p className="text-gray-700 leading-relaxed">
                  The framing can be built to create pitch where the existing roof had almost none.
                  A building that has been ponding water for a decade can finally be made to drain,
                  something no coating or membrane recover can achieve on its own, because those
                  follow the shape underneath them.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">It can add insulation</h3>
                <p className="text-gray-700 leading-relaxed">
                  The cavity between old roof and new panels is where insulation goes. On an older
                  metal building with almost none, this is the practical route to a real thermal
                  envelope, and to ending the winter condensation that gets misdiagnosed as a leak
                  every year.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">It removes exposed fasteners</h3>
                <p className="text-gray-700 leading-relaxed">
                  Retrofitting a through-fastened roof with a concealed-clip standing seam ends the
                  cycle of re-screwing every several years, because the new system has no gasketed
                  penetrations through the field of the panel to fail in the first place.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">It re-engineers the uplift path</h3>
                <p className="text-gray-700 leading-relaxed">
                  The attachment is designed for today's wind requirements rather than whatever the
                  building was built to. At 3,600 feet with an average wind of 14.3 mph and spring
                  gusts well above that, this is not a paperwork exercise.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              If your building is a warehouse with a persistent cold-morning drip that no repair has
              ever fixed, read the condensation section on our{" "}
              <a href="/warehouse-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                warehouse roofing page
              </a>{" "}
              before you buy another repair.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Structure Has to Say Yes First
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A retrofit puts a second roof's worth of dead load on a frame that was designed for
              one, and it changes how uplift is transferred into the building. Nobody should quote
              this work from a parking lot. Four findings decide it.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Purlins or frames that cannot take the load
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The added weight and the new uplift path have to be carried by the existing
                  structure. On buildings where that is in doubt, this is a question for a structural
                  engineer and the answer goes in writing before material is ordered.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Corroded purlins or a failing deck
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Retrofit framing has to be anchored into sound material. Where years of leaking
                  have rusted the purlins the new roof would be fastened to, the honest scope is
                  repair of the structure first, or replacement.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Wet insulation left in place
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Anything saturated under the old roof does not dry out because a new roof went over
                  it. Wet material gets mapped and removed as part of the scope; if the map comes
                  back mostly wet, the project is a replacement.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  A building at its roof-covering limit
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Code limits how many roof coverings a structure may carry. A building that has
                  already been recovered once may not be permitted a second, and that is confirmed
                  with the City of Amarillo when the permit is pulled, not afterwards.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>What the feasibility assessment includes:</strong> a full roof walk with
                photographs, fastener pull tests to confirm what the existing structure will hold, a
                moisture survey of the assembly below, and a written statement of whether the
                retrofit is buildable on your building. You get the findings whether or not you hire
                us.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              How the Work Runs Without Closing the Building
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The operational argument for a retrofit is simple: the existing roof stays watertight
              the entire time, so there is never a day when your building is open to weather. That
              changes what is possible on an occupied warehouse, plant or retail box.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Verify and design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Roof walk, pull tests, moisture survey and structural review. The framing layout,
                  slope design, insulation and attachment are engineered from the actual building
                  before anything is ordered.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Frame in sections</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sub-framing is set section by section and fastened into the structure below,
                  keeping the old roof intact and draining while the new geometry goes up above it.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Insulate and panel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Insulation into the cavity, then panels and trim, with every section closed out
                  before the crew leaves. Loud work near occupied areas is scheduled around your
                  operating hours.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              If your building is low-slope rather than metal, the equivalent conversation is a
              single-ply recover, covered under{" "}
              <a href="/commercial-tpo-roof-retrofit/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial TPO roof retrofit
              </a>
              , and both routes sit inside the broader{" "}
              <a href="/commercial-roof-restoration/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                roof restoration
              </a>{" "}
              decision.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Retrofit, Repair or Replace
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Three roads leave the same starting point, and the assessment is what decides which one
              your building is on. We will tell you which, including when the answer costs us the
              bigger job.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Retrofit is the right call when</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The structure is sound but the roof is done</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The building cannot be opened to weather</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />You need slope or insulation the original lacked</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />You are tired of the re-screw cycle</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />You intend to hold the building long-term</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Something else is the right call when</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Failures are still individual, so repair them</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Purlins or deck are corroded through</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The structure cannot carry the added load</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The building is at its covering limit</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A covered storm loss funds a full replacement</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              For a new metal roof on a building that is being re-roofed conventionally rather than
              retrofitted, see{" "}
              <a href="/standing-seam-metal-roof-installation/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                standing seam metal roof installation
              </a>{" "}
              and{" "}
              <a href="/metal-building-and-r-panel-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                metal building and R-panel roofing
              </a>.
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
                  Do Not Cover a Storm-Damaged Roof Before It Is Documented
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  A retrofit permanently encloses the old roof. If hail or wind damaged it and the
                  claim is not settled, the evidence goes under the new system and does not come
                  back, and neither does the option of having the carrier fund the replacement
                  instead of you funding the retrofit. Potter County has recorded{" "}
                  <strong>131 severe hail days since 2000</strong>, so on any metal building more
                  than a few years old the question is worth asking. You have a{" "}
                  <strong>two-year window from the date of loss</strong> to file in Texas. Document
                  the existing roof first, then retrofit over it.
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
              Where Retrofits Sit in Our Commercial Metal Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A retrofit is one of several answers for an aging metal roof. Our{" "}
              <a href="/metal-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial metal roofing
              </a>{" "}
              page covers the whole range (panel systems, repair, re-fastening, retrofits and new
              installation). Start there if you have not yet decided which category your building
              is in.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We build retrofit systems out of 2909 S Western St in Amarillo and in Canyon, Borger,
              Pampa, Dumas, Hereford, Plainview, Bushland and the wider West Texas market.
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
                  Is it possible to install a metal roof over an existing metal roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, and on a pre-engineered metal building it is often the best available option.
                  The new panels do not sit on the old ones. A retrofit sub-framing system is
                  fastened through the existing panels into the purlins below, and the new roof is
                  built on that framing. The old panels stay in place as a substrate. What has to be
                  confirmed first is that the existing structure can carry the added weight and the
                  new uplift path, which is a structural question, not a roofing preference.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the difference between a retrofit and a repair?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A repair fixes the roof you have. A retrofit gives you a new roof system above the
                  one you have, and the old roof is demoted to a substrate. If the failures on your
                  building are individual (a few leaks, some backed-out fasteners, a bad curb),
                  repair is the right money. A retrofit is what you do when the failures have become
                  general and you want a new assembly without opening the building to weather.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can a retrofit fix a roof that ponds water?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  That is one of its strongest arguments. Because the new roof sits on framing rather
                  than on the old surface, the framing can be built to create slope where the
                  existing roof had little or none. A low-slope roof that has been holding water for
                  years can be given a genuine pitch and drained properly, which no coating or
                  membrane recover can do on its own.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will a retrofit stop the condensation dripping in my metal building?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is usually the right vehicle for fixing it, because the cavity created by the
                  retrofit framing is where new insulation goes. Condensation on a metal building is
                  an insulation and vapor problem rather than a leak, and a retrofit is one of the
                  few ways to add meaningful insulation to an existing roof without gutting the
                  building. The insulation and vapor detail has to be designed deliberately, not
                  treated as filler.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are the cons of putting a new metal roof over an old one?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Three, honestly. It adds dead load, so the structure has to be evaluated rather
                  than assumed. It hides whatever is underneath, so any wet insulation or corroded
                  purlin has to be dealt with before the new system goes on rather than after. And it
                  is not available on every building, because code limits how many roof coverings a
                  structure may carry, and a building that has already been recovered may be out of
                  options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover a retrofit after a hail storm in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Coverage depends on your policy and on what the adjuster finds, and a retrofit
                  raises a question a like-for-like replacement does not: the carrier owes you the
                  roof you had, and a framed system with new slope and insulation is more roof than
                  that. The difference is usually an upgrade you fund, unless ordinance-or-law
                  coverage picks up code-required insulation. You have a two-year window from the
                  date of loss to file in Texas. We document the existing roof before it is enclosed
                  and meet the adjuster on site so the scope reflects the actual condition.
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
          <h2 className="text-4xl font-bold mb-6">Find Out If Your Building Can Take a Retrofit</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free feasibility assessment with fastener pull tests, a moisture survey and a written
            buildable-or-not answer, including when the answer is no.
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

        <RelatedArticles pageSlug="metal-roof-retrofit-over-existing-roof" />
      </div>
    </>
  );
}