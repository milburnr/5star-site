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
  alternates: { canonical: "https://5starroofingpros.com/shopping-center-roofing/" },
  title: "Shopping Center & Strip Mall Roofing in Amarillo, TX | 5 Star Roofing",
  description:
    "Roofing multi-tenant retail centers in Amarillo — one roof, many leases. Storefront access, tenant sequencing, restaurant exhaust, lease allocation and leak accountability. Call (806) 622-6041.",
  openGraph: {
    title: "Shopping Center & Strip Mall Roofing in Amarillo, TX | 5 Star Roofing",
    description:
      "Roofing multi-tenant retail centers in Amarillo — one roof, many leases. Storefront access, tenant sequencing, restaurant exhaust and leak accountability.",
    url: "https://5starroofingpros.com/shopping-center-roofing/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Shopping Center Roofing in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ShoppingCenterRoofingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Shopping Center Roofing",
            name: "Shopping Center and Strip Mall Roofing in Amarillo",
            description:
              "Roof repair, restoration and replacement on multi-tenant retail centers in Amarillo, Texas, sequenced around store hours, storefront access and per-tenant leak documentation.",
            url: "https://5starroofingpros.com/shopping-center-roofing/",
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
              name: "Commercial Building Types We Roof",
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
                name: "Do the stores have to close while the roof is worked on?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Almost never. A retail center roof is worked in sections, and we size each section so it is dried in before the crew leaves for the day. The disruption that actually matters is not the roof work itself but access: where the crew stages material, where the dumpster sits, and whether the sidewalk in front of a storefront is closed. Those are the things we plan around your tenants before the first day.",
                },
              },
              {
                "@type": "Question",
                name: "Who pays for a shopping center roof, the landlord or the tenants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "That is set by your leases, not by us, and it usually turns on whether the work is classified as repair or as capital replacement. What we can do is write the scope so it can actually be allocated: separate line items, dated photographs, per-tenant areas identified, instead of a lump figure that nobody can apportion. Bring the scope to your property manager or counsel. A document that separates the work is far easier to recover against than one that does not.",
                },
              },
              {
                "@type": "Question",
                name: "A tenant says the roof ruined their inventory. What do we need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Documentation, quickly, and specific to that tenant space. We photograph the interior condition, trace the leak path back to its entry point on the roof, and record the date and location so the file distinguishes that tenant's loss from the building's condition generally. Without that, the tenant's claim and the landlord's claim end up arguing about the same water.",
                },
              },
              {
                "@type": "Question",
                name: "Why do the leaks in a strip center always seem to be at the front?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because the front of an Amarillo retail center is rarely just a roof edge. It is a parapet, a decorative mansard or a canopy carrying signage, and every one of those is a place where two systems meet, where sign brackets penetrate, and where wind gets underneath the edge metal. The flat field of a retail roof is often in reasonable shape while the storefront line is where the water is actually getting in.",
                },
              },
              {
                "@type": "Question",
                name: "Does a restaurant tenant affect the roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Significantly. Kitchen exhaust deposits grease on the roof surface around the fan, and grease attacks many membranes over time. Restaurant units also carry more rooftop equipment, more curbs and more penetrations than a dry-goods tenant. On a center with food service we specify grease containment and check that section of roof on a separate schedule from the rest.",
                },
              },
              {
                "@type": "Question",
                name: "How is hail damage handled on a multi-tenant center?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As one roof with several audiences. The landlord has a property claim, individual tenants may have contents claims, and both need the same evidence gathered at the same time, separated by tenant space so the two claims do not end up arguing about the same water. Amarillo averages 8 to 12 hailstorms a year, so a center that has been standing for a while has usually been through this more than once. The Texas filing window is two years from the date of loss, but the tenant claims move much faster than that.",
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
        service="Shopping Center Roofing"
        h1="Shopping Center & Strip Mall Roofing in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Building Types", url: "/commercial-building-types/" },
          { name: "Shopping Center Roofing", url: "/shopping-center-roofing/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>A retail center is <strong>one roof under many leases</strong>. The roofing is ordinary commercial work; the hard parts are access, sequencing and who the paperwork has to satisfy.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Storefronts are the constraint. Staging, dumpsters and crane picks cannot block entrances, sidewalks or the parking your tenants sell from.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Leaks cluster at the front, in parapets, decorative mansards and sign penetrations, not in the middle of the field.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free center-wide assessment with per-tenant leak mapping and a line-item scope. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              One Roof, Many Leases, Several Audiences
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The membrane on an Amarillo strip center is not technically different from the membrane
              on any other low-slope building. What is different is who is standing underneath it.
              A retail roof has a landlord who owns it, a property manager who schedules it, tenants
              whose businesses stop when it leaks, and customers walking directly beneath the edge of
              it all day. Every decision on the project has to survive all four.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That is why a retail roof job is planned differently from a warehouse or an office. The
              roofing is routine. The logistics are the project. On retail centers our first
              conversation is about your tenant roster and your busiest hours, not about materials.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              The Storefront Is the Job Site Constraint
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              On most commercial buildings we stage where it is convenient. On a retail center, every
              square foot of the front is either an entrance, a sidewalk, or parking a tenant is
              counting on. Four things get negotiated before the first crew arrives.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Where material lands</h3>
                <p className="text-gray-700 leading-relaxed">
                  Loads go up from the rear service drive wherever the building has one. Where it
                  does not, the pick happens before opening hours and the affected parking bays are
                  released back before the stores are busy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Overhead protection at entrances</h3>
                <p className="text-gray-700 leading-relaxed">
                  Customers walk under the roof edge. Any work above an entrance gets protection and
                  a spotter, or it gets scheduled outside trading hours. This is not optional and it
                  is priced into the job, not added later.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Dumpster placement</h3>
                <p className="text-gray-700 leading-relaxed">
                  A tear-off container in front of a tenant's door costs that tenant money every day
                  it sits there. We agree the location with the property manager in writing and move
                  it as the work advances rather than parking it for the duration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Noise over the wrong tenant</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fastening above a salon, a dental suite or a quiet-service tenant is a different
                  problem from fastening above a hardware store. We sequence loud work by what is
                  underneath it and by that tenant's peak hours.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Retail Leaks Live at the Front, Not in the Field
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Walk an Amarillo shopping center roof and the middle of it is usually unremarkable. The
              trouble is along the storefront line, because that line is not a simple roof edge. It
              is a parapet, or a decorative mansard, or a canopy: an architectural feature bolted to
              the front of the building to make the center look like something, and it introduces
              every failure point at once.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Sign penetrations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every tenant that has ever hung a sign left brackets through the fascia or the
                  parapet. Old tenants leave old holes, and the ones nobody flashed after a
                  turnover are the ones that leak over the sales floor.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Parapet and coping</h3>
                <p className="text-gray-700 leading-relaxed">
                  Coping caps take wind directly. At an average wind of 14.3 mph with far higher
                  spring gusts, loose coping joints and lifted edge metal are among the first things
                  we check on a Panhandle retail roof.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Mansard-to-roof transitions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Where the decorative sloped face meets the flat roof behind it, two different
                  systems have to be tied together. That joint is a repair specialty in itself and it
                  is frequently the source of a leak blamed on the flat roof.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Tracing these properly is the same discipline we apply to any low-slope leak — see{" "}
              <a href="/commercial-roof-leak-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial roof leak repair
              </a>{" "}
              for how we work a leak path back to its entry point rather than patching where the
              ceiling tile is stained.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Restaurants, Rooftop Units and Grease
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A food-service tenant changes the roof above it. Kitchen exhaust deposits grease on the
              membrane around the fan, and grease is hard on most roofing surfaces over time. Those
              units also run more equipment than a dry-goods tenant: more curbs, more conduit, more
              gas line supports, and more service technicians walking on the roof to maintain it all.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              On centers with food service we treat that section as its own maintenance zone: grease
              containment at the fan, a walkway path to the equipment so technicians stop crossing
              the field membrane, and inspection on a tighter interval than the rest of the roof.
              Where a make-up air intake sits close to work we are doing, we schedule that section
              around service hours so nothing unpleasant gets pulled into a dining room.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The wider point holds across the whole center: rooftop equipment belongs to tenants,
              but the roof it sits on belongs to the landlord. Sorting out who is allowed to
              penetrate what — before a tenant's HVAC contractor cuts a new curb — prevents most of
              the arguments we get called into.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              A Scope Your Property Manager Can Actually Use
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              On a multi-tenant building the estimate is more than a price. It is a document that has
              to survive lease allocation, a board or ownership group, and possibly an insurer. We
              build it accordingly.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">What we itemize</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Work areas identified by tenant space</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Repairs separated from replacement scope</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Tenant-caused damage flagged separately</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Storm-related items kept in their own section</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Dated photographs tied to each location</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Why it matters</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Lease allocation depends on the classification</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Tenants contest lump figures, not line items</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Insurers pay from documented scope</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Phased budgets need severable sections</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />A vacant unit's condition affects leasing it</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 italic leading-relaxed mt-8">
              How costs are recovered between landlord and tenants is a question for your leases and
              your advisors. Our job is to give you a scope precise enough that the question has a
              clear answer.
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
                  After Hail, Your Tenants Are Filing Too
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  A storm over a retail center produces more than one claim. You have a property
                  claim on the building; tenants may have contents and business-interruption claims
                  on what the water reached. All of it depends on evidence collected at the same
                  time, in a form that separates the building's condition from each tenant's loss.
                  A tenant whose stock got wet will have their own adjuster asking whether the roof
                  was maintained, so the landlord's file and the tenant's file need to agree on what
                  happened and when. Amarillo averages <strong>8 to 12 hailstorms a year</strong>.
                  Get the center photographed roof-by-tenant before the cleanup starts.
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
              Where Retail Fits Among the Buildings We Roof
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Shopping centers are one of several building types with their own rules. Our{" "}
              <a href="/commercial-building-types/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial building types
              </a>{" "}
              page covers the full set and is the right starting point if you manage a mixed
              portfolio. If your center is anchored by a large-format tenant with a distribution
              back-of-house, the constraints in{" "}
              <a href="/warehouse-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                warehouse roofing
              </a>{" "}
              apply to that section as well.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work retail centers out of 2909 S Western St in Amarillo and across the
              surrounding Panhandle as well: Canyon, Borger, Pampa, Dumas, Hereford, Plainview,
              Bushland and the wider West Texas market.
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
                  Do the stores have to close while the roof is worked on?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Almost never. A retail center roof is worked in sections, and we size each section
                  so it is dried in before the crew leaves for the day. The disruption that actually
                  matters is not the roof work itself but access: where the crew stages material,
                  where the dumpster sits, and whether the sidewalk in front of a storefront is
                  closed. Those are the things we plan around your tenants before the first day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Who pays for a shopping center roof, the landlord or the tenants?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  That is set by your leases, not by us, and it usually turns on whether the work is
                  classified as repair or as capital replacement. What we can do is write the scope
                  so it can actually be allocated: separate line items, dated photographs, per-tenant
                  areas identified, instead of a lump figure that nobody can apportion. Bring the
                  scope to your property manager or counsel. A document that separates the work is
                  far easier to recover against than one that does not.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  A tenant says the roof ruined their inventory. What do we need?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Documentation, quickly, and specific to that tenant space. We photograph the
                  interior condition, trace the leak path back to its entry point on the roof, and
                  record the date and location so the file distinguishes that tenant's loss from the
                  building's condition generally. Without that, the tenant's claim and the landlord's
                  claim end up arguing about the same water.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do the leaks in a strip center always seem to be at the front?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Because the front of an Amarillo retail center is rarely just a roof edge. It is a
                  parapet, a decorative mansard or a canopy carrying signage, and every one of those
                  is a place where two systems meet, where sign brackets penetrate, and where wind
                  gets underneath the edge metal. The flat field of a retail roof is often in
                  reasonable shape while the storefront line is where the water is actually getting
                  in.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does a restaurant tenant affect the roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Significantly. Kitchen exhaust deposits grease on the roof surface around the fan,
                  and grease attacks many membranes over time. Restaurant units also carry more
                  rooftop equipment, more curbs and more penetrations than a dry-goods tenant. On a
                  center with food service we specify grease containment and check that section of
                  roof on a separate schedule from the rest.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How is hail damage handled on a multi-tenant center?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  As one roof with several audiences. The landlord has a property claim, individual
                  tenants may have contents claims, and both need the same evidence gathered at the
                  same time, separated by tenant space so the two claims do not end up arguing about
                  the same water. Amarillo averages 8 to 12 hailstorms a year, so a center that has
                  been standing for a while has usually been through this more than once. The Texas
                  filing window is two years from the date of loss, but the tenant claims move much
                  faster than that.
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
          <h2 className="text-4xl font-bold mb-6">Get a Center-Wide Roof Assessment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free assessment with leaks mapped to tenant spaces and a line-item scope your property
            manager can allocate, whether or not you hire us for the work.
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

        <RelatedArticles pageSlug="shopping-center-roofing" />
      </div>
    </>
  );
}