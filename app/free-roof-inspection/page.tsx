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
import { Check, X } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/free-roof-inspection/" },
  title: "Free Roof Inspection in Amarillo, TX | 5 Star Roofing",
  description:
    "What a free roof inspection in Amarillo covers, what a paid inspection costs and when you actually need one, and how to tell a real free inspection from post-storm bait. Call (806) 622-6041.",
  openGraph: {
    title: "Free Roof Inspection in Amarillo, TX | 5 Star Roofing",
    description:
      "What a free roof inspection in Amarillo covers, what a paid inspection costs and when you actually need one, and how to tell a real free inspection from post-storm bait.",
    url: "https://5starroofingpros.com/free-roof-inspection/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Free Roof Inspection in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FreeRoofInspectionPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Free Roof Inspection",
            name: "Free Roof Inspection in Amarillo",
            description:
              "A no-cost visual roof inspection in Amarillo, Texas, with slope-by-slope photographs and written findings the property owner keeps whether or not any work follows.",
            url: "https://5starroofingpros.com/free-roof-inspection/",
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
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free visual roof inspection with written findings.",
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
                name: "Do roofers offer free roof inspections?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most roofing contractors do, including us, because the inspection doubles as the site visit needed to write an estimate. That is the honest reason it costs nothing, and it is worth understanding: a free inspection is offered by the party who would be paid to do the work. Ours comes with the photographs and the written findings, and you keep them whether or not you hire us.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a roof inspection cost in Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends entirely on who is doing it and why. A contractor inspection tied to an estimate is normally free. An independent inspection performed by a home inspector as part of a property sale, or an engineer's report on structural condition, is a paid professional service and is priced accordingly because the person writing it has no interest in the repair. If you need an opinion from someone who will not be bidding the work, that is the paid product, and we will tell you when it is the one you want.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a free roof inspection take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most inspections take 30 to 60 minutes on a typical Amarillo home, longer on a large or cut-up roof, and longer again on a commercial building with rooftop equipment to work around. We walk every slope rather than the one facing the street, photograph as we go, and look in the attic where there is safe access.",
                },
              },
              {
                "@type": "Question",
                name: "How soon after a hailstorm should I have my roof inspected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sooner is better, because the claim is filed against a specific date of loss and the Texas filing window runs two years from that date. In a market averaging 8 to 12 hailstorms a year, waiting a season or two makes it materially harder to tie damage to the right storm. After a major event we schedule inspections in the order they are booked, typically within 24 to 48 hours.",
                },
              },
              {
                "@type": "Question",
                name: "Will a free roof inspection find damage that is not there?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not from us. If the roof has no storm damage on it we say so in writing, with the photographs behind the finding. Filing a claim on a roof that will not support one wastes your time and puts a claim on your record for nothing. That answer is part of the service, not a failure of it.",
                },
              },
              {
                "@type": "Question",
                name: "Why do roofs in Amarillo need inspecting so often?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amarillo sits at the center of Hail Alley where dry desert air meets Gulf moisture, and Potter County ranks in the top ten nationally for hail frequency. The county has recorded 131 severe hail days since 2000, the largest stone on record here is 4.25 inches from May 2019, and the city averages 14.3 mph winds at 3,600 feet of elevation. Roofs here accumulate damage in increments, and most of it is invisible from the ground.",
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
        service="Free Roof Inspection"
        h1="Free Roof Inspection in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Inspections", url: "/roof-inspections/" },
          { name: "Free Roof Inspection", url: "/free-roof-inspection/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: the <strong>free</strong> inspection specifically: why it costs nothing, what you get, and when a paid inspection is the right product instead. What an inspection examines is covered on our <a href="/roof-inspections/" className="text-brand-brown font-semibold underline hover:text-brand-gold">roof inspections</a> page.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>It is free because it is also our estimating visit. That is the honest incentive, and you should know it before anyone walks your roof.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>You keep the photographs and the written findings either way, including the finding that there is nothing wrong.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: call (806) 622-6041 to book, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why It Is Free, and Why That Matters
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A contractor's roof inspection is free because it is also the site visit needed to
              write an estimate. Nobody is doing charity work up there. We are telling you that
              plainly because the incentive is the thing you should understand before you let anyone
              on your roof: the person inspecting it is the person who would be paid to fix it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What makes the offer worth something anyway is what you get to keep. Our findings come
              to you as photographs and a written summary, and they are yours whether you hire us,
              hire somebody else, or do nothing at all. If the roof is fine, the report says the
              roof is fine. We would rather be the company an Amarillo owner calls in five years
              than the one that talked them into a claim this spring.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What a Free Inspection Gives You, and What It Does Not
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The most common disappointment with a free inspection is not that it was bad. It is
              that the owner needed a different document entirely and did not know it until later.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What you receive</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Photographs of every slope and elevation</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Close shots of flashing, penetrations and terminations</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Written findings in plain language</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A straight answer on whether there is a claim to make</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A line-item estimate if work is warranted</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Everything above, kept by you, either way</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">What it is not</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Not an independent opinion, since we would be bidding the work</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Not a home inspector's report for a property sale</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Not an engineer's opinion on structure or deck capacity</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Not a certification of remaining roof life for a lender</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Not a multi-year budget forecast across a property portfolio</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Not a substitute for reading your own insurance policy</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>If you own more than one building</strong> and the question is which roof
                gets replaced in which budget year, a free inspection is the wrong instrument. That
                is a{" "}
                <a
                  href="/commercial-roof-condition-survey-and-capital/"
                  className="text-brand-brown font-semibold underline hover:text-brand-gold"
                >
                  roof condition survey and capital plan
                </a>
                , which is a paid engineering-style deliverable with remaining-service-life estimates
                and a spend forecast. Different job, different document.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Happens on the Visit
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Most inspections take 30 to 60 minutes on a typical Amarillo home. A large or cut-up
              roof takes longer, and a commercial building with rooftop equipment to work around
              takes longer again.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. The ground and the perimeter</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start where the corroborating evidence is: gutters, downspouts, fascia, vents,
                  window screens and any soft metal around the building. Dents in those materials
                  tell you a hail event happened and give a read on stone size before anyone is on a
                  ladder.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Every slope, not one</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hail arrives on a bearing. It is completely normal for a north slope to be
                  destroyed and a south slope untouched, which is exactly why an inspection that
                  covers the elevation facing the street is worth nothing. We walk them all and
                  photograph as we go.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Inside, then in writing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Where there is safe attic access we look at the underside of the deck for
                  staining, daylight and wet insulation. Then you get the findings written down.
                  Nothing important should be delivered only as something somebody said in your
                  driveway.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              After a major regional hail event we schedule inspections in the order they are
              booked, typically within 24 to 48 hours. Booking early in the week after a storm is
              the practical way to get seen sooner.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Telling a Real Free Inspection From Post-Storm Bait
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Every large hail event in the Panhandle brings a wave of out-of-state operators
              working door to door with a free inspection as the opening line. Some are legitimate.
              Some are running a script, and the inspection is the pretext for getting a signature
              on the roof of your house. The tells are consistent.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-3">Walk away from</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />A contract or authorization presented at the door</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />An offer to cover, waive or rebate your deductible</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />A guaranteed claim approval, or a promised settlement figure</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Damage described but never photographed</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />No local address, and a phone number from another state</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Pressure to decide before they leave the property</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Ask for instead</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />The photographs, sent to you, before any paperwork</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A local address you can drive to</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A line-item estimate rather than a lump-sum number</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A plain answer on which slopes are damaged and which are not</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Time to think, with nothing signed</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Someone who will still be here for the warranty</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              The one that costs Amarillo owners the most money is the deductible offer, because it
              sounds like generosity. It is not something a Texas contractor should be putting on
              the table, and a company willing to do it is telling you something about how the rest
              of the job will be run.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              When to Book One
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              There are four moments worth booking an inspection in this market, and only one of
              them involves a leak. Potter County has recorded <strong>131 severe hail days since
              2000</strong> and the area averages <strong>8 to 12 hailstorms a year</strong>, so
              damage here accumulates in increments rather than arriving all at once.
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" /><span><strong>After a hailstorm you heard hit.</strong> The claim is filed against a date of loss and the Texas filing window is two years from that date. Every season you wait makes attribution harder.</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" /><span><strong>Before you buy.</strong> Knowing the remaining life of the roof changes what the property is worth to you, and it is a lot cheaper to know beforehand.</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" /><span><strong>When something inside changed.</strong> A stain on a ceiling, a smell in the attic, or a light bill that moved without a tariff change behind it.</span></li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" /><span><strong>When the roof is somewhere past 15 years old.</strong> Texas heat and UV are hard on asphalt shingles; knowing where you are in the life cycle is what lets you plan the spend instead of reacting to it.</span></li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              One thing worth doing while the roof is still healthy: if you are replacing it anyway,
              ask about UL 2218 Class 4 impact-resistant shingles. The Texas Department of Insurance
              allows carriers to offer a premium discount for Class 4 roofs, and in a county with
              this much hail exposure that is a conversation worth having before the storm rather
              than after it.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where the Free Inspection Sits in Our Assessment Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A free inspection is the entry point. Our{" "}
              <a
                href="/roof-inspections/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                roof inspections
              </a>{" "}
              page covers the full range of what an inspection can examine and the different reasons
              owners book one, and is the better starting point if you are not sure which you need.
              If a storm is the reason you are here, the{" "}
              <a
                href="/storm-damage-repair/"
                className="text-brand-brown font-semibold underline hover:text-brand-gold"
              >
                storm damage roof assessment
              </a>{" "}
              is the deeper version with test squares and a report written for a carrier.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We inspect out of 2909 S Western St in Amarillo and across the surrounding Panhandle,
              including Canyon, Borger, Pampa, Dumas, Hereford, Plainview, Perryton and Bushland.
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
                  Do roofers offer free roof inspections?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most roofing contractors do, including us, because the inspection doubles as the
                  site visit needed to write an estimate. That is the honest reason it costs
                  nothing, and it is worth understanding: a free inspection is offered by the party
                  who would be paid to do the work. Ours comes with the photographs and the written
                  findings, and you keep them whether or not you hire us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much does a roof inspection cost in Texas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends entirely on who is doing it and why. A contractor inspection tied to an
                  estimate is normally free. An independent inspection performed by a home inspector
                  as part of a property sale, or an engineer's report on structural condition, is a
                  paid professional service and is priced accordingly because the person writing it
                  has no interest in the repair. If you need an opinion from someone who will not be
                  bidding the work, that is the paid product, and we will tell you when it is the
                  one you want.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does a free roof inspection take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most inspections take 30 to 60 minutes on a typical Amarillo home, longer on a
                  large or cut-up roof, and longer again on a commercial building with rooftop
                  equipment to work around. We walk every slope rather than the one facing the
                  street, photograph as we go, and look in the attic where there is safe access.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How soon after a hailstorm should I have my roof inspected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Sooner is better, because the claim is filed against a specific date of loss and
                  the Texas filing window runs two years from that date. In a market averaging 8 to
                  12 hailstorms a year, waiting a season or two makes it materially harder to tie
                  damage to the right storm. After a major event we schedule inspections in the
                  order they are booked, typically within 24 to 48 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will a free roof inspection find damage that is not there?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Not from us. If the roof has no storm damage on it we say so in writing, with the
                  photographs behind the finding. Filing a claim on a roof that will not support one
                  wastes your time and puts a claim on your record for nothing. That answer is part
                  of the service, not a failure of it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do roofs in Amarillo need inspecting so often?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Amarillo sits at the center of Hail Alley where dry desert air meets Gulf
                  moisture, and Potter County ranks in the top ten nationally for hail frequency.
                  The county has recorded 131 severe hail days since 2000, the largest stone on
                  record here is 4.25 inches from May 2019, and the city averages 14.3 mph winds at
                  3,600 feet of elevation. Roofs here accumulate damage in increments, and most of
                  it is invisible from the ground.
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

        <InternalLinks currentCity="amarillo" currentService="roof-inspections" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Book a Free Roof Inspection</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Photographs of every slope and written findings you keep, including the finding that
            nothing is wrong.
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

        <RelatedArticles pageSlug="free-roof-inspection" />
      </div>
    </>
  );
}