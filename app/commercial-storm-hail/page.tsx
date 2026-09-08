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
  alternates: { canonical: "https://5starroofingpros.com/commercial-storm-hail/" },
  title: "Commercial Storm & Hail Damage Roofing in Amarillo, TX | 5 Star Roofing",
  description:
    "What an Amarillo building owner does after a hail or wind event — documenting the damage, the Texas claim clock, and which repair or replacement path applies. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Storm & Hail Damage Roofing in Amarillo, TX | 5 Star Roofing",
    description:
      "What an Amarillo building owner does after a hail or wind event — documenting the damage, the Texas claim clock, and which repair or replacement path applies.",
    url: "https://5starroofingpros.com/commercial-storm-hail/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Storm and Hail Damage Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialStormHailPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Storm, Hail and Wind Damage Roofing",
            name: "Commercial Storm and Hail Damage Roofing in Amarillo",
            description:
              "Storm, hail and wind work on Amarillo commercial buildings: documenting what a specific storm did to the roof, working the insurance claim within the Texas statutory timeline, and carrying out the repair or replacement the evidence supports.",
            url: "https://5starroofingpros.com/commercial-storm-hail/",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Commercial Storm, Hail and Wind Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Storm Damage Roof Assessment",
                    url: "https://5starroofingpros.com/storm-damage-repair/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Insurance Claim Documentation and Adjuster Meetings",
                    url: "https://5starroofingpros.com/insurance-claim-documentation-and-adjuster-meetings/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Wind Damage Roof Repair",
                    url: "https://5starroofingpros.com/wind-damage-repair/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hail Damage Roof Repair",
                    url: "https://5starroofingpros.com/hail-damage-repair/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Hail Damage Roof Replacement",
                    url: "https://5starroofingpros.com/commercial-hail-damage-roof-replacement/",
                  },
                },
              ],
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
                name: "What should a building owner do first after storm damage to a commercial roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Make the building safe and stop active water entry, then document before anything is cleaned up or repaired. Photograph the interior damage, note the date of the storm, and get the roof surface itself documented by someone who will go up on it. Temporary work to stop a leak does not hurt a claim, but repairing damage before it is recorded removes the evidence the claim depends on.",
                },
              },
              {
                "@type": "Question",
                name: "How long do I have to file a hail claim on a commercial building in Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Two years from the date of loss. Under the Texas Prompt Payment Act the insurer must acknowledge the claim within 15 days and pay or deny within 60 days, and delayed payments accrue 18 percent annual interest. The practical problem with waiting is not the deadline itself but the evidence: after two more Panhandle hail seasons, nobody can separate the damage from the storm you are claiming against.",
                },
              },
              {
                "@type": "Question",
                name: "Can a commercial roof be hail damaged without leaking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and it is the normal case. Hail bruises a membrane or fractures the mat beneath the surface without opening a hole, so the roof holds water out for a season or several while the damaged area weathers faster than everything around it. A dry building is not evidence of an undamaged roof, which is why hail damage is confirmed by test squares and core cuts rather than by whether the ceiling is wet.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 25% rule for roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is a rule of thumb, not a line in the code Amarillo enforces. The idea behind it is real: once a repair covers a large enough share of the roof, the permit can require the whole roof to meet current code rather than be patched back to the old standard. After a big hail event that is what turns an approved repair scope into a replacement project. Which thresholds apply to your building is confirmed with the City of Amarillo when we pull the permit, not guessed at from a search result.",
                },
              },
              {
                "@type": "Question",
                name: "Why does Amarillo see so much commercial storm damage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Potter County has recorded 131 severe hail days since 2000 and Amarillo averages 8 to 12 hailstorms a year, with a largest recorded stone of 4.25 inches in May 2019. The city sits at 3,600 feet where dry desert air meets Gulf moisture, and it carries an annual average wind of 14.3 mph on top of that. Roofs here take a sustained load, not an occasional event.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a separate contractor to handle the insurance side?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. We document the roof, produce the photographic report, and meet your adjuster on the roof so the approved scope reflects what is actually up there. We are not public adjusters and we do not negotiate your policy for you. We supply the evidence and the technical scope, and the coverage decision stays between you and your carrier.",
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
        service="Commercial Storm & Hail"
        h1="Commercial Storm & Hail Damage Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Storm & Hail", url: "/commercial-storm-hail/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: what an Amarillo <strong>building owner does after a storm</strong>. The event, the evidence and the claim, and which of our storm pages you need next.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Order matters: document first, then scope, then repair. Work done before the damage is recorded is work the carrier cannot see.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The clock is statutory. Texas gives you a two-year filing window, and the carrier 15 days to acknowledge and 60 days to pay or deny.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free storm assessment. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              A Storm Is an Event, Not a Roofing Material
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Everything on this page follows from one thing happening to your building on one
              identifiable date. That is what separates storm work from the rest of what we do. A
              membrane that has quietly aged out gets replaced on your schedule and your budget; a
              roof that was struck by hail on a particular afternoon gets documented, claimed and
              rebuilt on a timeline set partly by Texas law. Same roof, entirely different project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This page routes you to the right one of those. If you are choosing a system for a
              low-slope roof rather than reacting to a storm, our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat roof systems
              </a>{" "}
              page is the better starting point, and{" "}
              <a href="/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                the homepage
              </a>{" "}
              covers everything 5 Star Roofing does across the Panhandle. Eleven years of Amarillo
              springs have taught us the order these steps have to go in.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What the Panhandle Actually Throws at a Commercial Roof
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Hail, repeatedly</h3>
                <p className="text-gray-700 leading-relaxed">
                  Potter County has recorded <strong>131 severe hail days since 2000</strong> and
                  Amarillo averages <strong>8 to 12 hailstorms a year</strong>. The largest stone on
                  record here is <strong>4.25 inches</strong>, softball size, from May 2019. Most
                  roofs in this market are carrying damage from more than one event.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-brand-gold-vibrant">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Wind as a constant</h3>
                <p className="text-gray-700 leading-relaxed">
                  An annual average of <strong>14.3 mph</strong> is a sustained load rather than an
                  occasional event, and spring gusts run well above it. Wind failures start at
                  corners and perimeters, where uplift suction is highest, not in the middle of the
                  field.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Where we sit</h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo is at <strong>3,600 feet</strong> where dry desert air meets Gulf
                  moisture, and Potter County ranks in the top ten nationally for hail frequency.
                  That is why storm work is its own category for us rather than an occasional
                  add-on.
                </p>
              </div>
            </div>
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
                  Three Things to Do Before You Call Any Roofer
                </h2>
                <ul className="space-y-2 text-lg text-gray-700 mb-4">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />Stop the water and make the space safe. Temporary protection never hurts a claim; leaving a building open does.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />Photograph the interior before anything is cleaned up, and write down the date of the storm.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />Do not have the roof repaired before it is documented. Repaired damage is damage the adjuster will never see.</li>
                </ul>
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
              Storm Damage Roof Assessment
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Everything else on this page depends on this step. An assessment establishes, with
              evidence, what one particular storm did to one particular roof: photographs, marked
              test squares, a moisture survey, a core cut and a written summary an adjuster can work
              from. It is free, you keep the report whether or not you hire us, and it is the step
              owners most often skip, usually because the building is still dry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/storm-damage-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                See what a storm damage roof assessment produces →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Insurance Claim Documentation and Adjuster Meetings
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Once the roof is documented, the claim becomes an argument about scope. We assemble
              the photographic record, translate it into a technical scope of work, and meet your
              adjuster on the roof so the approved scope reflects what is actually up there rather
              than what is visible from a ladder. Texas sets the clock: 15 days to acknowledge, 60
              days to pay or deny, 18 percent annual interest on delayed payments, two years to file.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/insurance-claim-documentation-and-adjuster-meetings/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                How we document a claim and meet the adjuster →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Commercial Wind Damage Roof Repair
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Wind is its own failure mode and gets repaired differently from hail. It fails a
              low-slope roof by suction at the corners and perimeter: lifted membrane, peeled
              seams, displaced coping and edge metal, fasteners backed out of the deck. Partially
              lifted membrane does not wait for a convenient date, because it acts as a sail and
              the next gust takes more of it. Securing the edge comes before any scoping
              conversation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/wind-damage-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                How wind damage gets found and repaired →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Hail Damage Roof Repair
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              When a hail event has damaged a defined area rather than the whole surface, repair is
              the right answer and the argument is about where the damage stops. This is the path
              for bruised or punctured sections, damaged flashings and penetrations, and hail-struck
              rooftop equipment curbs on a roof that is otherwise sound and still has service life
              left in it. Repair also has a limit, and the point where the permit starts requiring
              a code upgrade is usually where it is found.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/hail-damage-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                When hail damage can be repaired rather than replaced →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Commercial Hail Damage Roof Replacement
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Past a certain point, patching a hail-struck commercial roof buys you a seam between
              old and new work and two warranties that disagree with each other. Widespread bruising,
              a repair scope big enough to trigger a code upgrade, or an assembly already at the end
              of its life all push the project to replacement. That is a bigger conversation about
              system choice, code upgrades and how the building stays open while the work runs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/commercial-hail-damage-roof-replacement/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                What a hail damage replacement involves →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where We Work Storms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We handle storm work out of 2909 S Western St in Amarillo and across the surrounding
              Panhandle and West Texas market: Canyon, Borger, Pampa, Dumas, Hereford, Bushland,
              Plainview, Perryton, Tulia, Friona, Dalhart, Childress, Levelland, Lubbock, Midland
              and Odessa. Storms here do not respect a service-area map, and a hail swath that
              misses Amarillo often lands squarely on one of those towns.
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
                  What should a building owner do first after storm damage to a commercial roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Make the building safe and stop active water entry, then document before anything
                  is cleaned up or repaired. Photograph the interior damage, note the date of the
                  storm, and get the roof surface itself documented by someone who will go up on it.
                  Temporary work to stop a leak does not hurt a claim, but repairing damage before it
                  is recorded removes the evidence the claim depends on.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long do I have to file a hail claim on a commercial building in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Two years from the date of loss. Under the Texas Prompt Payment Act the insurer
                  must acknowledge the claim within 15 days and pay or deny within 60 days, and
                  delayed payments accrue 18% annual interest. The practical problem with waiting is
                  not the deadline itself but the evidence: after two more Panhandle hail seasons,
                  nobody can separate the damage from the storm you are claiming against.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can a commercial roof be hail damaged without leaking?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, and it is the normal case. Hail bruises a membrane or fractures the mat
                  beneath the surface without opening a hole, so the roof holds water out for a
                  season or several while the damaged area weathers faster than everything around it.
                  A dry building is not evidence of an undamaged roof, which is why hail damage is
                  confirmed by test squares and core cuts rather than by whether the ceiling is wet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the 25% rule for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is a rule of thumb, not a line in the code Amarillo enforces. The idea behind
                  it is real: once a repair covers a large enough share of the roof, the permit can
                  require the whole roof to meet current code rather than be patched back to the old
                  standard. After a big hail event that is what turns an approved repair scope into
                  a replacement project. Which thresholds apply to your building is confirmed with
                  the City of Amarillo when we pull the permit, not guessed at from a search result.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why does Amarillo see so much commercial storm damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Potter County has recorded 131 severe hail days since 2000 and Amarillo averages 8
                  to 12 hailstorms a year, with a largest recorded stone of 4.25 inches in May 2019.
                  The city sits at 3,600 feet where dry desert air meets Gulf moisture, and it
                  carries an annual average wind of 14.3 mph on top of that. Roofs here take a
                  sustained load, not an occasional event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do I need a separate contractor to handle the insurance side?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  No. We document the roof, produce the photographic report, and meet your adjuster
                  on the roof so the approved scope reflects what is actually up there. We are not
                  public adjusters and we do not negotiate your policy for you. We supply the
                  evidence and the technical scope, and the coverage decision stays between you and
                  your carrier.
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

        <InternalLinks currentCity="amarillo" currentService="storm-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Storm Just Went Through? Start With the Evidence.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free storm assessment on your commercial roof. You keep the report either way.
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

        <RelatedArticles pageSlug="commercial-storm-hail" />
      </div>
    </>
  );
}