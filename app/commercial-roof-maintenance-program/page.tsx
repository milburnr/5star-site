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
  alternates: { canonical: "https://5starroofingpros.com/commercial-roof-maintenance-program/" },
  title: "Commercial Roof Maintenance Program in Amarillo, TX | 5 Star Roofing",
  description:
    "A scheduled maintenance program for Amarillo commercial roofs: twice-yearly inspections, drain and detail servicing, documented condition history, and a record that keeps warranties and claims defensible. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Roof Maintenance Program in Amarillo, TX | 5 Star Roofing",
    description:
      "Twice-yearly inspections, drain and detail servicing, and a documented condition history that keeps warranties and storm claims defensible on Amarillo commercial roofs.",
    url: "https://5starroofingpros.com/commercial-roof-maintenance-program/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-6-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Roof Maintenance Program in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofMaintenanceProgramPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roof Maintenance Program",
            name: "Commercial Roof Maintenance Program in Amarillo",
            description:
              "A scheduled preventive maintenance program for commercial low-slope roofs in Amarillo, Texas: twice-yearly inspections, drain and debris clearing, detail and flashing servicing, minor repairs, and a documented condition history for warranty and insurance purposes.",
            url: "https://5starroofingpros.com/commercial-roof-maintenance-program/",
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
                name: "How much does yearly commercial roof maintenance cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is priced per building, because the work is driven by roof area, how many details are up there and how much access the building allows. A single-tenant warehouse with six penetrations and a simple perimeter is a very different visit from a retail building carrying twenty curbs, a mansard edge and a rooftop restaurant exhaust. We survey the roof once, then quote an annual figure with the scope of each visit written out, so you are not comparing a real program against a competitor's drive-by.",
                },
              },
              {
                "@type": "Question",
                name: "How often should a commercial roof be inspected in Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Twice a year as the baseline, plus after any significant storm. In this market the two scheduled visits do different jobs: the spring visit clears the roof and checks it before the severe season, and the autumn visit assesses what the season did and gets the roof ready for winter. Amarillo averages 8 to 12 hailstorms a year, so a program without event-triggered visits is only doing half the work.",
                },
              },
              {
                "@type": "Question",
                name: "What is the average lifespan of a commercial roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It varies by system and by how hard the climate works it, and Amarillo works it hard. Potter County has recorded 131 severe hail days since 2000 and the annual average wind of 14.3 mph puts continuous uplift on fasteners and seams. What maintenance changes is not the material's theoretical life but how much of it you actually get: roofs fail early because small unaddressed problems become wet insulation, and wet insulation is what ends an assembly.",
                },
              },
              {
                "@type": "Question",
                name: "Will insurance cover a 20 year old roof in Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on your policy and on whether the damage is attributable to a covered event rather than to age. That is precisely where a maintenance file earns its keep. If you can show a documented condition history — dated photographs of a roof in serviceable condition before the storm — the argument that the damage is pre-existing wear becomes much harder to sustain. Without records, an older roof puts the burden of proof squarely on the owner.",
                },
              },
              {
                "@type": "Question",
                name: "Does maintenance keep my roof warranty valid?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Frequently it is a condition of it. Manufacturer system warranties commonly require periodic inspection, timely repair of damage, and that repairs use approved materials, and they commonly exclude damage caused by neglected drains or unauthorized rooftop alterations. A program produces the dated record those clauses ask for. We will read your warranty documents and tell you what they actually require rather than guessing.",
                },
              },
              {
                "@type": "Question",
                name: "What is included in a maintenance visit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A full walk of the roof surface, clearing of drains, scuppers and debris, inspection and probing of seams, servicing of flashings, pitch pans, terminations and equipment curbs, minor repairs done on the spot, and a dated photographic report. Anything larger than a minor repair gets quoted separately rather than absorbed quietly, so you always know what the program covered and what it did not.",
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
        service="Commercial Roof Maintenance Program"
        h1="Commercial Roof Maintenance Program in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-6-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Flat Roof Systems", url: "/commercial-roofing/" },
          { name: "Roof Maintenance Program", url: "/commercial-roof-maintenance-program/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: an ongoing <strong>scheduled maintenance agreement</strong> for a commercial roof in Amarillo. Not a one-off repair and not a replacement.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Two visits a year plus post-storm checks: spring before severe season, autumn after it, and whenever a significant event hits your address.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The underrated deliverable is the paperwork. A dated condition history is what protects a warranty and what makes a storm claim defensible.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: survey and a written annual scope. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What a Maintenance Program Is, and Why It Is Not an Inspection
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A{" "}
              <a href="/commercial-roof-inspection/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial roof inspection
              </a>{" "}
              tells you what is wrong today. A maintenance program is a standing
              agreement to keep a specific roof in serviceable condition, with scheduled visits, a
              defined scope of work at each one, minor repairs done on the spot, and a file of dated
              records that accumulates year over year. That file is a large part of what you are
              actually buying, and it is the part owners consistently undervalue until the first time
              a carrier questions the age of their roof.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This page is only about that ongoing arrangement. If you have an active problem right
              now, a{" "}
              <a href="/commercial-flat-roof-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                flat roof repair
              </a>{" "}
              comes first and the program starts once the roof is back to a defensible baseline.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Actually Happens on a Visit
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A maintenance visit is mostly unglamorous housekeeping and detail work. That is the
              whole model. Almost every expensive commercial roof failure we get called to started
              as something on this list that nobody did.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Drains, scuppers and debris</h3>
                <p className="text-gray-700 leading-relaxed">
                  Panhandle wind delivers debris to your roof all year and it collects exactly where
                  water needs to leave. A blocked drain turns a shallow low spot into standing water,
                  and standing water finds every marginal detail it sits on. Clearing them is the
                  single highest-value ten minutes of the visit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Seams and laps</h3>
                <p className="text-gray-700 leading-relaxed">
                  Seams get probed across the field, not spot-checked near the last known leak. A
                  seam that has begun to open is a cheap repair on the day it is found and an
                  expensive one after a winter of water tracking under the membrane.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Details and flashings</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pitch pans, termination bars, curb flashings, pipe boots and counter-flashing wear
                  out faster than the field membrane. Servicing them on a schedule is the difference
                  between replacing sealant and replacing insulation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Equipment and traffic damage</h3>
                <p className="text-gray-700 leading-relaxed">
                  HVAC technicians, telecom installers and window cleaners all walk your roof, and
                  some of them kneel on flashing or leave fasteners behind. We look for the marks
                  that trade traffic leaves and flag where walk pads are missing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fastener and edge check</h3>
                <p className="text-gray-700 leading-relaxed">
                  At <strong>3,600 feet</strong> with an annual average wind of{" "}
                  <strong>14.3 mph</strong>, uplift flutter backs fasteners out over time and works
                  at perimeter and corner attachment first. Those are the zones we check before the
                  open field, because that is where wind damage starts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">The written record</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dated photographs, what was found, what was serviced, what was repaired, and what
                  we recommend next. It goes in your file and ours. Over three or four years it
                  becomes the most useful document you own about that building.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why the Schedule Is Built Around the Storm Season
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A generic national maintenance calendar does not fit this market. Amarillo sits at the
              center of Hail Alley, where dry desert air meets Gulf moisture, and Potter County ranks
              in the top ten nationally for hail frequency: <strong>131 severe hail days since
              2000</strong> and an average of <strong>8 to 12 hailstorms a year</strong>, with a
              stone of 4.25 inches on record from May 2019.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So the visits are placed deliberately. Spring, before the severe season, is when the
              roof gets cleared and every detail is put in the best condition it can be in for what
              is coming. Autumn is when we establish what the season actually did, including hail
              bruising that has not opened yet, and get the roof ready for winter. On top of that, a
              significant event at your address triggers a check, because the whole point of holding
              a documented baseline is being able to compare against it.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Paperwork Is Half the Product
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Two situations decide whether a commercial roof costs an owner a manageable amount of
              money or a large amount, and both of them turn on documentation rather than on
              roofing.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">The warranty conversation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Manufacturer system warranties routinely require periodic inspection, timely
                  attention to damage, approved repair materials, and no unauthorized rooftop
                  alterations. When a claim is made, the first question is what records exist. A
                  program answers it with dates and photographs instead of recollection.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">The insurance conversation</h3>
                <p className="text-gray-700 leading-relaxed">
                  After a storm, the argument against a claim is usually that the damage is
                  pre-existing wear on an aging roof. A dated record showing the roof in serviceable
                  condition weeks before the event is difficult to argue with, and it is a great deal
                  more persuasive than an owner's account.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              There is a code angle too. Once repairs cover a large enough share of a roof, the
              permit can require the whole roof to be brought up to current standards rather than
              restored to its original condition. Small problems addressed on a schedule tend to
              stay small. A backlog of them all landing in one year is how a repair budget quietly
              becomes a replacement budget.
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
                  What a Program Does Not Do
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  It does not make an old roof new, it does not cover a full replacement, and it will
                  not save an assembly that is already widely saturated. If the survey at enrollment
                  shows a roof at the end of its service life, we will tell you that before you sign
                  anything rather than taking an annual fee to watch it fail. A maintenance program
                  is worth buying for a roof with life left in it, which is most of them, and more
                  than owners expect.
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
              How Enrollment Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Baseline survey</h3>
                <p className="text-gray-700 leading-relaxed">
                  A full walk, photographs, a moisture survey and a core cut to establish what system
                  is on the building, what condition it is in, and whether a program is the right
                  purchase at all.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Written scope</h3>
                <p className="text-gray-700 leading-relaxed">
                  Visit frequency, exactly what is done at each visit, what counts as a minor repair
                  included in the fee, and what gets quoted separately. In writing, before you
                  commit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Scheduled work</h3>
                <p className="text-gray-700 leading-relaxed">
                  Visits booked around your operating hours, event-triggered checks after
                  significant storms, and a dated report after every attendance that goes straight
                  into your building file.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We run programs from 2909 S Western St across Amarillo and the wider Panhandle and West
              Texas market, including Canyon, Borger, Pampa, Dumas, Hereford, Bushland, Plainview,
              Dalhart, Perryton, Tulia, Friona, Childress, Levelland, Lubbock, Midland and Odessa.
              For the systems themselves and how they are specified, see{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat roof systems
              </a>
              .
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
                  How much does yearly commercial roof maintenance cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is priced per building, because the work is driven by roof area, how many
                  details are up there and how much access the building allows. A single-tenant
                  warehouse with six penetrations and a simple perimeter is a very different visit
                  from a retail building carrying twenty curbs, a mansard edge and a rooftop
                  restaurant exhaust. We survey the roof once, then quote an annual figure with the
                  scope of each visit written out, so you are not comparing a real program against a
                  competitor's drive-by.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How often should a commercial roof be inspected in Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Twice a year as the baseline, plus after any significant storm. In this market the
                  two scheduled visits do different jobs: the spring visit clears the roof and checks
                  it before the severe season, and the autumn visit assesses what the season did and
                  gets the roof ready for winter. Amarillo averages 8 to 12 hailstorms a year, so a
                  program without event-triggered visits is only doing half the work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is the average lifespan of a commercial roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It varies by system and by how hard the climate works it, and Amarillo works it
                  hard. Potter County has recorded 131 severe hail days since 2000 and the annual
                  average wind of 14.3 mph puts continuous uplift on fasteners and seams. What
                  maintenance changes is not the material's theoretical life but how much of it you
                  actually get: roofs fail early because small unaddressed problems become wet
                  insulation, and wet insulation is what ends an assembly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover a 20 year old roof in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends on your policy and on whether the damage is attributable to a covered
                  event rather than to age. That is precisely where a maintenance file earns its
                  keep. If you can show a documented condition history, meaning dated photographs of
                  a roof in serviceable condition before the storm, the argument that the damage is
                  pre-existing wear becomes much harder to sustain. Without records, an older roof
                  puts the burden of proof squarely on the owner.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does maintenance keep my roof warranty valid?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Frequently it is a condition of it. Manufacturer system warranties commonly require
                  periodic inspection, timely repair of damage, and that repairs use approved
                  materials, and they commonly exclude damage caused by neglected drains or
                  unauthorized rooftop alterations. A program produces the dated record those clauses
                  ask for. We will read your warranty documents and tell you what they actually
                  require rather than guessing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What is included in a maintenance visit?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A full walk of the roof surface, clearing of drains, scuppers and debris,
                  inspection and probing of seams, servicing of flashings, pitch pans, terminations
                  and equipment curbs, minor repairs done on the spot, and a dated photographic
                  report. Anything larger than a minor repair gets quoted separately rather than
                  absorbed quietly, so you always know what the program covered and what it did not.
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
          <h2 className="text-4xl font-bold mb-6">Start With a Baseline Survey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We survey the roof, tell you honestly whether a program is worth buying for it, and put
            the annual scope in writing.
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

        <aside className="max-w-5xl mx-auto mt-10 mb-4 bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
          <p className="text-gray-700 leading-relaxed">
            Maintenance is one part of our{" "}
            <a href="/commercial-roofing-amarillo/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
              commercial roofing services in Amarillo
            </a>
            , which covers repair, replacement, maintenance, and storm work for Amarillo business
            and property owners.
          </p>
        </aside>
        <RelatedArticles pageSlug="commercial-roof-maintenance-program" />
      </div>
    </>
  );
}