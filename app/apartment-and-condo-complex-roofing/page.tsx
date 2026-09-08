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
  alternates: { canonical: "https://5starroofingpros.com/apartment-and-condo-complex-roofing/" },
  title: "Apartment & Condo Complex Roofing in Amarillo, TX | 5 Star Roofing",
  description:
    "Multi-building roofing for Amarillo apartment complexes, condos and HOAs — phased scheduling around residents who never leave, per-building claim scopes, and debris control over occupied parking. Call (806) 622-6041.",
  openGraph: {
    title: "Apartment & Condo Complex Roofing in Amarillo, TX | 5 Star Roofing",
    description:
      "Multi-building roofing for Amarillo apartment complexes, condos and HOAs — phased scheduling around residents who never leave, per-building claim scopes, and debris control over occupied parking.",
    url: "https://5starroofingpros.com/apartment-and-condo-complex-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-6-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Apartment and Condo Complex Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ApartmentAndCondoComplexRoofingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Apartment and Condominium Complex Roofing",
            name: "Apartment and Condo Complex Roofing in Amarillo",
            description:
              "Multi-building roof replacement and repair for apartment complexes, condominium associations and HOA-managed properties in Amarillo, Texas, phased around occupied residential units.",
            url: "https://5starroofingpros.com/apartment-and-condo-complex-roofing/",
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
                name: "Do residents have to move out during an apartment roof replacement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. We work one building at a time and dry each roof in before the crew leaves for the day, so no unit is ever left open to weather overnight. Residents stay in place. What they do need is notice, because tear-off is loud directly overhead and the parking next to the active building has to be cleared for the day.",
                },
              },
              {
                "@type": "Question",
                name: "Who approves a roof replacement at a condo complex?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on how the property is structured. At a professionally managed apartment property the decision usually sits with the management company and the owner. At a condominium or HOA-governed property the roof is normally common element, which means the board decides, the association's documents set out how it gets funded, and the timeline runs on board meetings rather than on our calendar. We scope and document accordingly so the board has something it can actually vote on.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to re-roof an entire apartment complex?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A complex is not one roof, it is a sequence of them, so the honest answer is a building-by-building schedule rather than a single date. We publish the order of buildings up front and update it as weather moves it, because the thing residents and managers actually need is to know which building is next and when their parking is affected.",
                },
              },
              {
                "@type": "Question",
                name: "How do you keep nails out of the parking lot and playground?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Debris control is a bigger part of a residential complex job than it is on any commercial building, because children, pets and tires are directly below the work. We cover and protect landscaping, balconies and patios below the active section, catch tear-off at the building rather than letting it scatter, and run magnet sweeps of the drive lanes and parking at the end of every working day.",
                },
              },
              {
                "@type": "Question",
                name: "Is a hail claim on a complex one claim or one per building?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One storm is generally one claim, but the adjuster has to scope every building on the property individually, and buildings on the same site do not always sustain the same damage. Roof orientation, tree cover and the direction the storm came in all change what a given roof took. We document each building separately and walk the property with the adjuster so nothing gets averaged out.",
                },
              },
              {
                "@type": "Question",
                name: "Do apartment buildings in Amarillo need impact-resistant shingles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is worth pricing. Potter County has recorded 131 severe hail days since 2000, and the largest stone recorded here is 4.25 inches. On a property with many buildings that frequency is a portfolio problem rather than a one-off, so a UL 2218 Class 4 impact-rated shingle is a conversation we bring up with owners and boards rather than waiting to be asked. The Texas Department of Insurance also allows carriers to offer premium discounts on Class 4 roofs, which on a dozen buildings is worth a phone call to your agent.",
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
        service="Apartment & Condo Complex Roofing"
        h1="Apartment & Condo Complex Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-6-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Building Types", url: "/commercial-building-types/" },
          { name: "Apartment & Condo Complexes", url: "/apartment-and-condo-complex-roofing/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: <strong>multi-building residential properties</strong> in Amarillo, meaning apartment complexes, condominiums and HOA-governed communities. Not single commercial buildings.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The constraint that shapes everything: people live under these roofs at every hour. There is no after-hours window and nowhere for them to go.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Condo and HOA work runs on board decisions and association documents, not on our schedule. We scope so a board can vote on it.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free property-wide assessment, every building documented separately. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              A Complex Is Not One Roof. It Is a Sequence of Them.
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The thing that makes a multifamily property different from every other kind of
              commercial roofing job is not the material on the roof. It is that a family is asleep
              under it. On a warehouse you can work weekends. On an office you can work evenings. On
              an apartment building there is no hour of the day when the building is empty, which
              means every decision about sequencing, noise and access has to start with the
              residents rather than with the crew.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So we plan these jobs as a published building-by-building schedule, not as a single
              project with one start and end date. One building is opened, replaced and dried in
              before the crew leaves that day. Nothing is left open overnight, ever, because on a
              residential property an overnight rain event is somebody's ceiling. That is the one
              rule we do not bend for schedule.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Apartment, Condo or HOA: Who Actually Signs?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              These three property types look identical from the parking lot and behave completely
              differently once the work is being approved. Getting this right at the start saves
              weeks.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Managed apartments</h3>
                <p className="text-gray-700 leading-relaxed">
                  A management company and an owner, often out of town. Decisions move fast but
                  documentation matters, because the person approving the spend frequently has never
                  stood on the roof. Photographs per building, not per property.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Condominiums</h3>
                <p className="text-gray-700 leading-relaxed">
                  The roof is normally a common element, so it is the association's responsibility
                  rather than any individual owner's. That changes who we talk to, how the work is
                  funded and, importantly, whose insurance policy the claim runs through.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">HOA communities</h3>
                <p className="text-gray-700 leading-relaxed">
                  A volunteer board, governing documents that set the process, and a timeline built
                  around meetings. We provide scope, photographs and options in a form a board can
                  actually review and vote on, rather than a one-page number.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Why we ask about your documents:</strong> on condo and HOA properties the
                association's governing documents decide who is responsible for the roof deck,
                the covering, and anything that penetrates it. We would rather read that at the start
                than discover mid-project that a stack of skylights or a set of unit-owner satellite
                mounts sit on the other side of the line.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Residents Actually Experience
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Most complaints on a multifamily re-roof are not about the roof. They are about cars,
              noise and mess, and all three are manageable if they are planned rather than
              apologized for afterwards.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What we handle</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Written notice per building, ahead of the crew</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A posted schedule showing which building is next</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Protection over balconies, patios and landscaping</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Magnet sweeps of drive lanes and parking, daily</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Dumpsters staged away from entrances and play areas</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Every building dried in before the crew leaves</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What we ask of management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Parking cleared beside the active building for the day</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A contact who can reach residents quickly</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A note to residents about pets and noise overhead</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Access to attic or ceiling spaces if a leak is reported</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Any known problem units flagged before we start</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A staging area for material away from foot traffic</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              Noise is the one thing we cannot design away. Tear-off directly overhead is loud, and
              on a property with residents working night shifts we will sequence around known units
              if management tells us where they are.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Complexes Are Rarely One Roof Type
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A typical Amarillo complex is a set of pitched, shingled buildings with low-slope
              sections tucked in among them, over breezeways, stair towers, laundry rooms and
              clubhouses. Those low-slope areas are where multifamily roofs leak most often, and
              they are also the areas most likely to be skipped in a fast bid, because they are small
              and awkward and priced by the piece.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our assessment covers the whole property, including those transitions. Where a pitched
              roof drains onto a flat section, where a stair tower meets a wall, where a valley dumps
              onto a walkway roof: those junctions get photographed and specified individually. A
              proposal that prices only the shingle squares is not a complex-wide proposal, and it is
              usually the reason the second call comes six months later.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Hail on a Multi-Building Property
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Potter County has recorded <strong>131 severe hail days since 2000</strong>, and the
              largest stone on record here is <strong>4.25 inches</strong>, softball size, from May
              2019. On a single building that is a risk. On a property with a dozen buildings it is
              an ongoing capital planning problem, because the same afternoon can put every roof
              you own into the same claim year.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The detail that catches owners out is that buildings on the same site do not take the
              same damage. Storms arrive with a direction, and roof orientation, tree cover and where
              a building sits on the site all change what its slopes actually took. An adjuster who
              scopes two buildings and extrapolates across the property is not doing you a favor in
              either direction. We document every building separately and walk the site with the
              adjuster so the approved scope matches what is on each roof.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Given the frequency here, UL 2218 Class 4 impact-rated shingles are worth pricing on
              a multifamily property even if you decide against them. When the same event can hit
              every building you own at once, the arithmetic looks different than it does on a
              single house, and the Texas Department of Insurance allows carriers to discount
              premiums on Class 4 roofs.
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
                  Storm Claims on a Complex Run on a Legal Clock
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Board approvals are slow and claim deadlines are not, which is a bad combination.
                  You have a <strong>two-year window from the date of loss</strong> to file in Texas,
                  and on a condo or HOA property it is normal for two or three board meetings to pass
                  before anyone is authorized to do anything. If your association is still deciding,
                  get the property documented now. The record is what protects the claim while the
                  board works through its process, and it costs the association nothing to have.
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
              Where Multifamily Fits Among the Buildings We Roof
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Apartment and condo properties sit in our commercial work because of how they are
              owned and managed, but they behave like nothing else we roof: occupied at all hours,
              spread across many buildings, and answerable to residents as well as owners. If you
              are weighing a different kind of property, our{" "}
              <a href="/commercial-building-types/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial building types
              </a>{" "}
              page sets out how we approach retail, warehouse, industrial, hospitality and
              agricultural buildings, each with its own constraints.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work multifamily properties out of 2909 S Western St in Amarillo and in Canyon,
              Borger, Pampa, Dumas, Hereford, Bushland and the wider West Texas market.
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
                  Do residents have to move out during an apartment roof replacement?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  No. We work one building at a time and dry each roof in before the crew leaves for
                  the day, so no unit is ever left open to weather overnight. Residents stay in
                  place. What they do need is notice, because tear-off is loud directly overhead and
                  the parking next to the active building has to be cleared for the day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Who approves a roof replacement at a condo complex?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It depends on how the property is structured. At a professionally managed apartment
                  property the decision usually sits with the management company and the owner. At a
                  condominium or HOA-governed property the roof is normally common element, which
                  means the board decides, the association's documents set out how it gets funded,
                  and the timeline runs on board meetings rather than on our calendar. We scope and
                  document accordingly so the board has something it can actually vote on.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does it take to re-roof an entire apartment complex?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A complex is not one roof, it is a sequence of them, so the honest answer is a
                  building-by-building schedule rather than a single date. We publish the order of
                  buildings up front and update it as weather moves it, because the thing residents
                  and managers actually need is to know which building is next and when their parking
                  is affected.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you keep nails out of the parking lot and playground?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Debris control is a bigger part of a residential complex job than it is on any
                  commercial building, because children, pets and tires are directly below the work.
                  We cover and protect landscaping, balconies and patios below the active section,
                  catch tear-off at the building rather than letting it scatter, and run magnet
                  sweeps of the drive lanes and parking at the end of every working day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Is a hail claim on a complex one claim or one per building?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  One storm is generally one claim, but the adjuster has to scope every building on
                  the property individually, and buildings on the same site do not always sustain the
                  same damage. Roof orientation, tree cover and the direction the storm came in all
                  change what a given roof took. We document each building separately and walk the
                  property with the adjuster so nothing gets averaged out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do apartment buildings in Amarillo need impact-resistant shingles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  It is worth pricing. Potter County has recorded 131 severe hail days since 2000,
                  and the largest stone recorded here is 4.25 inches. On a property with many
                  buildings that frequency is a portfolio problem rather than a one-off, so a UL 2218
                  Class 4 impact-rated shingle is a conversation we bring up with owners and boards
                  rather than waiting to be asked. The Texas Department of Insurance also allows
                  carriers to offer premium discounts on Class 4 roofs, which on a dozen buildings is
                  worth a phone call to your agent.
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
          <h2 className="text-4xl font-bold mb-6">Get Your Whole Property Assessed</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free property-wide roof assessment, every building documented separately, in a format
            an owner or a board can act on.
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

        <RelatedArticles pageSlug="apartment-and-condo-complex-roofing" />
      </div>
    </>
  );
}