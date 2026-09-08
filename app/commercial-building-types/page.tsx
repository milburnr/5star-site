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
import { Check } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-building-types/" },
  title: "Commercial Building Types We Roof in Amarillo, TX | 5 Star Roofing",
  description:
    "Warehouses, shopping centers, hotels, apartment complexes, farm buildings and metal shops each constrain a roofing project differently. Find the building you own and what changes about the job.",
  openGraph: {
    title: "Commercial Building Types We Roof in Amarillo, TX | 5 Star Roofing",
    description:
      "Warehouses, shopping centers, hotels, apartment complexes, farm buildings and metal shops each constrain a roofing project differently. Find the building you own.",
    url: "https://5starroofingpros.com/commercial-building-types/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Building Types We Roof in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialBuildingTypesPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Roofing by Commercial Building Type",
            name: "Commercial Building Types We Roof in Amarillo",
            description:
              "Roofing work organized by the kind of building it is on — warehouses, shopping centers, industrial facilities, hotels and motels, apartment and condo complexes, agricultural buildings and pre-engineered metal buildings across Amarillo and the Texas Panhandle.",
            url: "https://5starroofingpros.com/commercial-building-types/",
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
              name: "Roofing by Building Type",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Warehouse Roofing",
                    url: "https://5starroofingpros.com/warehouse-roofing/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shopping Center Roofing",
                    url: "https://5starroofingpros.com/shopping-center-roofing/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Industrial Building Roofing",
                    url: "https://5starroofingpros.com/industrial-roofing/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hotel and Motel Roofing",
                    url: "https://5starroofingpros.com/hotel-and-motel-roofing/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Apartment and Condo Complex Roofing",
                    url: "https://5starroofingpros.com/apartment-and-condo-complex-roofing/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Agricultural Building Roofing",
                    url: "https://5starroofingpros.com/agricultural-building-roofing/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Metal Building and R-Panel Roofing",
                    url: "https://5starroofingpros.com/metal-building-and-r-panel-roofing/",
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
                name: "Does the type of building change how a roof is priced?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "More than owners expect. The material and square footage set a baseline, and then the building changes the number: whether the work can run during business hours, how much rooftop equipment has to be worked around, whether tenants or guests are underneath, how the crew gets material up, and whether the property is one roof or fifteen. Two buildings with identical roof areas can carry very different estimates for reasons that have nothing to do with the membrane.",
                },
              },
              {
                "@type": "Question",
                name: "What type of roof is best for commercial buildings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no single answer, which is why we split this by building rather than by material. A low-slope warehouse and a pre-engineered metal shop are not candidates for the same system, and a hotel with occupied rooms underneath is constrained by scheduling in a way a machine shed never is. Start from the building you own, then choose the system that suits how it is used and what the Panhandle does to it.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work on a building that has to stay open?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and on most of these building types it is the normal case rather than the exception. We stage the roof in sections and dry each section in before the crew leaves, keep material and equipment away from entrances, docks and customer parking, and schedule loud work around your hours. Where a tenant cannot tolerate daytime noise at all, we run evenings and weekends. That costs more, and the difference shows on the estimate.",
                },
              },
              {
                "@type": "Question",
                name: "Do you roof buildings outside Amarillo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We work out of 2909 S Western St in Amarillo and across the surrounding Panhandle and West Texas market, including Canyon, Borger, Pampa, Dumas, Hereford, Bushland, Plainview, Perryton, Levelland, Lubbock, Midland and Odessa. Farm and ranch buildings in particular tend to sit well outside the city limits, and that is routine work for us rather than a special trip.",
                },
              },
              {
                "@type": "Question",
                name: "Why does building type matter so much in Amarillo specifically?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because the weather is severe enough that what is underneath the roof decides the cost of a failure. Potter County has recorded 131 severe hail days since 2000, Amarillo averages 8 to 12 hailstorms a year, and the annual average wind is 14.3 mph at 3,600 feet. The same leak is an inconvenience over a machine shed, a claim over a warehouse of inventory, and a lost night's revenue over a guest room.",
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
        service="Commercial Building Types"
        h1="Roofing by Building Type in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Building Types", url: "/commercial-building-types/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: <strong>the building, not the material</strong>. Find the kind of property you own and see what changes about the job.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What is underneath the deck (inventory, tenants, guests, livestock, production) sets the schedule, the access and the cost of a failure.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Choosing a system instead? That decision lives on the flat roof systems page, linked below.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free assessment on your property. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              The Roof Is the Easy Part. The Building Is the Job.
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Two Amarillo buildings can carry the same square footage of the same membrane and be
              completely different projects. One is empty at night and has a dock the crew can stage
              from. The other has forty guest rooms sold underneath it and a corridor of rooftop
              units in the way. The membrane is a line item; how you work around what is beneath it
              is most of the schedule, most of the risk and a fair share of the price.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So this page is organized by building rather than by material. If you already know you
              are choosing a system, our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat roof systems
              </a>{" "}
              page covers membranes, coatings and asphalt assemblies, and{" "}
              <a href="/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                the homepage
              </a>{" "}
              covers everything 5 Star Roofing does. Eleven years of Panhandle commercial work is
              where the building-by-building rules below came from.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Changes From One Building to the Next
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">Who is underneath</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tenants, guests, residents, staff or nothing but stock. That single fact decides
                  whether we can run a normal daytime crew, whether the work goes to evenings and
                  weekends, and how much notice everyone under the deck needs before the noise
                  starts.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-3">What a leak costs</h3>
                <p className="text-gray-700 leading-relaxed">
                  In this market that is not hypothetical. Potter County has recorded{" "}
                  <strong>131 severe hail days since 2000</strong> and Amarillo averages{" "}
                  <strong>8 to 12 hailstorms a year</strong>. The same three feet of failed seam is a
                  nuisance over a shed and a five-figure problem over racked inventory.
                </p>
              </div>
            </div>
            <ul className="mt-8 grid md:grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />How the crew and material get onto the roof</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />How much rooftop equipment has to be flashed around</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Whether it is one roof or a whole property of them</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Who actually signs — owner, board, manager or tenant</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Warehouse Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Large low-slope roofs over racked inventory, where the roof area is big enough that
              small per-square decisions turn into real money and a single leak lands on stock rather
              than on a floor. Access, staging around live dock doors and sequencing so the building
              keeps shipping are usually harder problems than the membrane itself.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/warehouse-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                How we roof a working warehouse →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Shopping Center Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A retail center is one roof with many tenants under it, each with their own lease,
              their own trading hours and their own opinion about scaffolding by the front door.
              Work has to be sequenced tenant by tenant, staged clear of customer parking, and
              coordinated with a manager who has to keep every unit trading while it happens.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/shopping-center-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Roofing a retail center without closing it →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Industrial Building Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Production facilities put things on and through the roof that ordinary commercial
              buildings do not: heavy mechanical equipment, process exhaust, chemical or grease
              discharge, and penetrations that were added long after the original roof went on.
              Material selection and flashing detail matter more here, and downtime is usually the
              most expensive item in the project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/industrial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                What industrial roofs demand →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Hotel and Motel Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              On a lodging property every room under the work is a room you are trying to sell
              tonight, which turns the roof schedule into a revenue decision. Motels and hotels are
              also two different roofs. The low-rise motel walk-up and the multi-story hotel with a
              crowded mechanical deck are not the same job, and the leaks tend to start around all
              that rooftop equipment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/hotel-and-motel-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Roofing a property with guests in it →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Apartment and Condo Complex Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A complex is a sequence of roofs rather than one, and the first question is usually
              who signs: an owner, a condo board or an HOA with its own approval process. Residents
              are home during the day, buildings are rarely all the same roof type, and hail on a
              multi-building property produces a claim covering a dozen structures at once.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/apartment-and-condo-complex-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                How multi-building properties get scheduled →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Agricultural Building Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Barns, machine sheds, hay and grain storage, shops and livestock buildings are a
              different assembly from any commercial roof: usually uninsulated panel over purlin,
              where condensation control matters because the contents are the point. Open doors let
              wind in underneath and lift panels from the inside, and the work has to fit around the
              season rather than the calendar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/agricultural-building-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Farm and ranch roofs, and how they fail →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Metal Building and R-Panel Roofing
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Pre-engineered metal buildings (shops, self-storage, churches, offices and light
              industrial) carry through-fastened R-panel or PBR roofs held on by thousands of
              individual screws with washers that age out. Re-fastening is maintenance rather than
              repair, most leaks are in the trim, curbs and gutters rather than the panel field, and
              end of life is a choice between re-screwing, retrofitting over the top, or replacing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <a href="/metal-building-and-r-panel-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Screws, trim and what to do at end of life →
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Buildings We Reach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We work on all of these property types from 2909 S Western St in Amarillo and across
              the surrounding Panhandle and West Texas market, including Canyon, Borger, Pampa,
              Dumas, Hereford, Bushland, Plainview, Perryton, Lubbock, Midland and Odessa. If your
              building is not obviously on this list, call and describe it; the constraints usually
              map onto one of these categories.
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
                  Does the type of building change how a roof is priced?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  More than owners expect. The material and square footage set a baseline, and then
                  the building changes the number: whether the work can run during business hours,
                  how much rooftop equipment has to be worked around, whether tenants or guests are
                  underneath, how the crew gets material up, and whether the property is one roof or
                  fifteen. Two buildings with identical roof areas can carry very different estimates
                  for reasons that have nothing to do with the membrane.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What type of roof is best for commercial buildings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  There is no single answer, which is why we split this by building rather than by
                  material. A low-slope warehouse and a pre-engineered metal shop are not candidates
                  for the same system, and a hotel with occupied rooms underneath is constrained by
                  scheduling in a way a machine shed never is. Start from the building you own, then
                  choose the system that suits how it is used and what the Panhandle does to it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work on a building that has to stay open?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, and on most of these building types it is the normal case rather than the
                  exception. We stage the roof in sections and dry each section in before the crew
                  leaves, keep material and equipment away from entrances, docks and customer
                  parking, and schedule loud work around your hours. Where a tenant cannot tolerate
                  daytime noise at all, we run evenings and weekends. That costs more, and the
                  difference shows on the estimate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you roof buildings outside Amarillo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. We work out of 2909 S Western St in Amarillo and across the surrounding
                  Panhandle and West Texas market, including Canyon, Borger, Pampa, Dumas, Hereford,
                  Bushland, Plainview, Perryton, Levelland, Lubbock, Midland and Odessa. Farm and
                  ranch buildings in particular tend to sit well outside the city limits, and that is
                  routine work for us rather than a special trip.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why does building type matter so much in Amarillo specifically?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Because the weather is severe enough that what is underneath the roof decides the
                  cost of a failure. Potter County has recorded 131 severe hail days since 2000,
                  Amarillo averages 8 to 12 hailstorms a year, and the annual average wind is 14.3
                  mph at 3,600 feet. The same leak is an inconvenience over a machine shed, a claim
                  over a warehouse of inventory, and a lost night's revenue over a guest room.
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
          <h2 className="text-4xl font-bold mb-6">Tell Us About Your Building</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free assessment on any commercial property. We will tell you what the roof needs, and
            what it does not.
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

        <RelatedArticles pageSlug="commercial-building-types" />
      </div>
    </>
  );
}