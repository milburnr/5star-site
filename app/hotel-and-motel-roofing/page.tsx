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
  alternates: { canonical: "https://5starroofingpros.com/hotel-and-motel-roofing/" },
  title: "Hotel & Motel Roofing in Amarillo, TX | 5 Star Roofing",
  description:
    "Roofing for Amarillo hotels and motels — phased so rooms stay sellable, sequenced around occupancy and brand PIP deadlines, with kitchen exhaust and rooftop equipment detailed properly. Call (806) 622-6041.",
  openGraph: {
    title: "Hotel & Motel Roofing in Amarillo, TX | 5 Star Roofing",
    description:
      "Roofing for Amarillo hotels and motels — phased so rooms stay sellable, sequenced around occupancy and brand PIP deadlines, with kitchen exhaust and rooftop equipment detailed properly.",
    url: "https://5starroofingpros.com/hotel-and-motel-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-9-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Hotel and Motel Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HotelAndMotelRoofingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Hotel and Motel Roofing",
            name: "Hotel and Motel Roofing in Amarillo",
            description:
              "Roof replacement, repair and phased re-roofing for hotels, motels and other lodging properties in Amarillo, Texas, sequenced around guest occupancy and room revenue.",
            url: "https://5starroofingpros.com/hotel-and-motel-roofing/",
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
                name: "Can a hotel stay open during a roof replacement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and it usually has to. We work in sections sized so that only a defined block of rooms is under active work at any point, and each section is dried in before the crew leaves. That lets the front desk block the affected rooms deliberately rather than discovering a problem at check-in, and it keeps the rest of the property fully sellable.",
                },
              },
              {
                "@type": "Question",
                name: "What time of day should roofing work happen at a motel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lodging is the opposite of an office building. Guests are in their rooms overnight and early morning, so evening and weekend work is exactly wrong here. The practical loud-work window is usually between late morning and mid afternoon, after checkout and before the evening arrivals, and we set the daily schedule with the general manager rather than assuming it.",
                },
              },
              {
                "@type": "Question",
                name: "How do you handle a roof deadline in a franchise PIP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Brand-flagged properties often have the roof named in a property improvement plan with a date attached, and that date is what the project has to hit. We ask to see the relevant section before scoping so the specification, the documentation and the completion evidence line up with what the franchisor expects, rather than producing a roof that is fine but paperwork that is not.",
                },
              },
              {
                "@type": "Question",
                name: "What rooftop equipment causes the most roof leaks at hotels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kitchen and breakfast-area exhaust is the usual culprit, because grease attacks membrane and the curbs around exhaust fans are penetrated, hot and constantly vibrating. After that come pool and laundry ventilation, makeup air units, elevator overruns and the accumulated satellite and antenna mounts nobody has a record of. Every one of those is a penetration, and penetrations are where lodging roofs leak.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if a guest room leaks during the work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A leak in a guest room is a room out of service, a refund, and often a public review, which makes it far more expensive than the repair itself. That is why we never leave a section open overnight and why we want to know about existing problem rooms before we start. If something appears during the work, we want the call while the crew is still on the roof, not at the end of the day.",
                },
              },
              {
                "@type": "Question",
                name: "Does hail damage at a hotel go through insurance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually, and the documentation needs to cover business interruption as well as the roof itself, because rooms taken out of service are a loss the roof scope alone does not capture. Amarillo averages 8 to 12 hailstorms a year, so lodging properties here take storms regularly. Under the Texas Prompt Payment Act an insurer must acknowledge a claim within 15 days and pay or deny within 60 days, which matters more to a hotel than to most buildings because every week of delay is a week of rooms you are deciding whether to sell.",
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
        service="Hotel & Motel Roofing"
        h1="Hotel & Motel Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-9-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Building Types", url: "/commercial-building-types/" },
          { name: "Hotels & Motels", url: "/hotel-and-motel-roofing/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: <strong>lodging properties</strong> in Amarillo, meaning hotels, motels and inns, where every room under the work is a room you are trying to sell tonight.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The scheduling rule is inverted: evenings and weekends are the wrong time here. Loud work goes between checkout and evening arrivals.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Brand-flagged properties often have the roof written into a PIP with a date. We scope to that document, not around it.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free assessment with a room-block plan attached to the schedule. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              On a Hotel, the Roof Schedule Is a Revenue Decision
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Every other commercial building we work on has a cost of disruption that is hard to
              measure. A hotel does not. A room you cannot sell tonight has a price, the front desk
              knows exactly what it is, and it appears on the P&amp;L the same week. That single fact
              changes how a lodging re-roof should be planned: the objective is not the fastest
              possible finish, it is the smallest number of rooms out of inventory at any one time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So we size the work sections to the property's room blocks rather than to what is
              convenient for the crew. The general manager gets a plan that says which rooms are
              affected on which days, far enough ahead that the reservation system can be adjusted
              instead of guests being moved on arrival. On lodging work that plan is the deliverable
              owners actually judge us on.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why the Normal Commercial Playbook Is Backwards Here
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              On an office or a retail building, the answer to disruption is to work after hours. On
              a hotel that is the worst possible advice, because after hours is precisely when the
              building is full and people are trying to sleep. Lodging roofing runs on a different
              clock.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Loud work, mid-day</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tear-off, fastening and anything with a compressor gets scheduled after checkout
                  and finished before evening arrivals. The exact window comes from the property, not
                  from us, because every house runs a different pattern.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quiet work, either side</h3>
                <p className="text-gray-700 leading-relaxed">
                  Detail work, flashing, staging and clean-up can run outside the loud window. That
                  is how a section still gets dried in before dark without hammering over occupied
                  rooms at seven in the morning.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Guests who sleep by day</h3>
                <p className="text-gray-700 leading-relaxed">
                  Amarillo lodging serves a lot of overnight travel, and some guests sleep through
                  the middle of the day. If the desk flags those rooms, we sequence around them
                  rather than finding out through a complaint.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Ask us for the occupancy question early.</strong> Before we price a phased
                job we want the property's own calendar — which weeks are heavy, which are soft, and
                whether there are groups or events already on the books. A re-roof planned into a
                soft window costs the owner dramatically less in lost room nights than the same job
                priced without ever asking.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Motels and Hotels Are Two Different Roofs
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              They get named together and they are not the same job. A classic motel is low-rise,
              often L-shaped or in wings, with exterior corridors and rooms that open directly onto
              the parking. The roof is typically a long, simple run, but everything below the work
              is a guest walkway, a doorway and a parked car, so protection and debris control
              dominate the plan.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A mid-rise hotel is the opposite problem. Access is limited, material has to be hoisted
              rather than carried, and the roof is usually a low-slope membrane field crowded with
              equipment, often ringed by a steep decorative mansard or shingled skirt at the
              perimeter. That perimeter is a genuinely different assembly from the field, it is
              highly visible from the street, and it is regularly the part a fast bid leaves out.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our assessment covers both parts and prices them as what they are. Where the steep
              perimeter meets the low-slope field is a transition detail, and transitions are where
              lodging roofs fail.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Rooftop Is Crowded, and That Is Where the Leaks Are
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Lodging roofs carry more penetrations per square foot than almost any other commercial
              building type, because the guest experience downstairs depends on machinery upstairs.
              Each one is a hole in your roof with a detail wrapped around it.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What we inspect first</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Kitchen and breakfast exhaust curbs, and grease staining</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Pool and laundry ventilation, where humidity is constant</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Makeup air and rooftop HVAC curbs and their condensate lines</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Elevator overrun and stair tower penetrations</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Legacy satellite, antenna and cable mounts nobody documented</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Drains and overflow scuppers, and whether they still run</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What that changes in the scope</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Grease-exposed areas get a detail that tolerates it</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Abandoned mounts get removed and properly closed, not flashed around</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Equipment that must stay live gets a shutdown coordinated with the GM</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Walkway pads where staff and vendors service equipment</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Every penetration photographed before and after</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A record you can hand to a franchisor or a future buyer</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              A hotel roof with fifteen years of undocumented equipment on it is normal. The
              assessment is partly an inventory exercise, and it frequently pays for itself in
              abandoned penetrations we can simply close.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Hail, Guest Rooms and the Cost of Waiting
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Amarillo averages <strong>8 to 12 hailstorms a year</strong>, and a hotel is open for
              every one of them. There is no off-season for a roof over guest rooms, and the interstate
              traffic that fills Amarillo lodging does not slow down because a storm came through
              last night.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What makes it costlier on a hotel than on a warehouse is what sits directly beneath the
              membrane: finished ceilings, guest rooms and paying customers. A slow leak in a
              warehouse damages inventory you can move. The same leak over a guest room takes the
              room out of service, triggers a refund, and often ends up written into a public review
              that outlives the repair. On lodging properties, the case for fixing a marginal roof
              early is stronger than the roof itself suggests.
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
                  After a Storm, Document Before You Sell the Rooms
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Get the roof recorded while the evidence is still on it, and get the room-night
                  losses recorded alongside it, because business interruption is part of a lodging
                  claim and it is the part a roof-only scope leaves out. Under the Texas Prompt
                  Payment Act an insurer must acknowledge a claim within <strong>15 days</strong> and
                  pay or deny within <strong>60 days</strong>. We photograph the roof, put temporary
                  weather protection over anything actively leaking so rooms stay sellable in the
                  meantime, and meet the adjuster on site so the scope reflects what is really up
                  there.
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
              Where Lodging Fits Among the Buildings We Roof
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hotels and motels sit apart from the rest of our commercial work because the building
              earns money by the night and the guests never leave. If your property is a different
              type, whether retail, warehouse, industrial, multifamily or agricultural, our{" "}
              <a href="/commercial-building-types/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial building types
              </a>{" "}
              page sets out how each one changes the approach, and is the better place to start.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most of the lodging along the interstate corridors is within reach of 2909 S Western
              St, and we work properties in Canyon, Borger, Pampa, Dumas, Hereford, Bushland and the
              wider West Texas market as well.
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
                  Can a hotel stay open during a roof replacement?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, and it usually has to. We work in sections sized so that only a defined block
                  of rooms is under active work at any point, and each section is dried in before the
                  crew leaves. That lets the front desk block the affected rooms deliberately rather
                  than discovering a problem at check-in, and it keeps the rest of the property fully
                  sellable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What time of day should roofing work happen at a motel?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Lodging is the opposite of an office building. Guests are in their rooms overnight
                  and early morning, so evening and weekend work is exactly wrong here. The practical
                  loud-work window is usually between late morning and mid afternoon, after checkout
                  and before the evening arrivals, and we set the daily schedule with the general
                  manager rather than assuming it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle a roof deadline in a franchise PIP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Brand-flagged properties often have the roof named in a property improvement plan
                  with a date attached, and that date is what the project has to hit. We ask to see
                  the relevant section before scoping so the specification, the documentation and the
                  completion evidence line up with what the franchisor expects, rather than producing
                  a roof that is fine but paperwork that is not.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What rooftop equipment causes the most roof leaks at hotels?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Kitchen and breakfast-area exhaust is the usual culprit, because grease attacks
                  membrane and the curbs around exhaust fans are penetrated, hot and constantly
                  vibrating. After that come pool and laundry ventilation, makeup air units, elevator
                  overruns and the accumulated satellite and antenna mounts nobody has a record of.
                  Every one of those is a penetration, and penetrations are where lodging roofs leak.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What happens if a guest room leaks during the work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A leak in a guest room is a room out of service, a refund, and often a public
                  review, which makes it far more expensive than the repair itself. That is why we
                  never leave a section open overnight and why we want to know about existing problem
                  rooms before we start. If something appears during the work, we want the call
                  while the crew is still on the roof, not at the end of the day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does hail damage at a hotel go through insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Usually, and the documentation needs to cover business interruption as well as the
                  roof itself, because rooms taken out of service are a loss the roof scope alone
                  does not capture. Amarillo averages 8 to 12 hailstorms a year, so lodging
                  properties here take storms regularly. Under the Texas Prompt Payment Act an
                  insurer must acknowledge a claim within 15 days and pay or deny within 60 days,
                  which matters more to a hotel than to most buildings because every week of delay
                  is a week of rooms you are deciding whether to sell.
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
          <h2 className="text-4xl font-bold mb-6">Get a Roof Plan That Protects Your Room Nights</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free assessment with a phased schedule and a room-block plan attached, built around your
            occupancy rather than our convenience.
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

        <RelatedArticles pageSlug="hotel-and-motel-roofing" />
      </div>
    </>
  );
}