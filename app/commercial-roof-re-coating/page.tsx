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
  alternates: { canonical: "https://5starroofingpros.com/commercial-roof-re-coating/" },
  title: "Commercial Roof Re-Coating in Amarillo, TX | 5 Star Roofing",
  description:
    "Fluid-applied silicone and acrylic re-coating for commercial roofs in Amarillo, TX — which roofs qualify, why prep decides the outcome, and how a coating handles Panhandle hail and sun. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Roof Re-Coating in Amarillo, TX | 5 Star Roofing",
    description:
      "Fluid-applied silicone and acrylic re-coating for commercial roofs in Amarillo, TX — which roofs qualify, why prep decides the outcome, and how a coating handles Panhandle hail and sun.",
    url: "https://5starroofingpros.com/commercial-roof-re-coating/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-4-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Roof Re-Coating in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofReCoatingPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roof Re-Coating",
            name: "Commercial Roof Re-Coating in Amarillo",
            description:
              "Fluid-applied silicone and acrylic roof coating over an existing commercial low-slope or metal roof in Amarillo, Texas, to renew the waterproofing surface without a tear-off or a new membrane.",
            url: "https://5starroofingpros.com/commercial-roof-re-coating/",
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
                name: "What is commercial roof re-coating?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Re-coating is a fluid-applied membrane rolled or sprayed over a roof you already have. The coating cures into a single seamless waterproofing layer that covers the old surface, its seams and its flashings. Nothing is torn off, no new sheet goods go down, and the existing roof keeps doing the structural and insulating work. It renews the surface, it does not replace the system.",
                },
              },
              {
                "@type": "Question",
                name: "Which commercial roofs can be re-coated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A roof is a coating candidate when the substrate is dry, sound and still bonded down: aged single-ply, modified bitumen, built-up gravel that has been prepared, spray polyurethane foam, and screw-down metal panel roofs all take coatings well. Wet insulation, open or lifting seams over a wide area, a deck that will not hold fasteners, and standing water that never drains all rule a coating out until they are corrected.",
                },
              },
              {
                "@type": "Question",
                name: "Silicone or acrylic coating for an Amarillo roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Silicone holds up better where water sits and it does not soften and re-emulsify when it gets wet, so it is the usual choice on a roof with slow drainage or low spots. Acrylic is the friendlier system to walk on, recoat and repair, and it stays cleaner and more reflective under the sun. On a Panhandle roof the decision usually comes down to drainage first and rooftop foot traffic second, and we make it after walking the roof rather than in advance.",
                },
              },
              {
                "@type": "Question",
                name: "Will a roof coating survive Amarillo hail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A coating is a waterproofing layer, not armor. It adds thickness and it seals the small surface splits that hail leaves behind, but it does not turn a tired roof into an impact-rated assembly. Amarillo averages 8 to 12 hailstorms a year, so we are direct with owners: if the substrate under the coating is already bruised and brittle, a coating buys time, and the replacement conversation is still coming.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a commercial re-coating take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most of the schedule is preparation, not coating. The roof is cleaned, seams and penetrations are detailed, and repairs are made before any coating is applied, and each coat has to cure before the next goes on. The building stays open and occupied throughout because the roof is never opened up. Weather governs the calendar more than crew size does, since coating cannot be applied to a wet surface or ahead of a storm.",
                },
              },
              {
                "@type": "Question",
                name: "Does re-coating come with a warranty?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Coating manufacturers issue renewable warranties on qualifying systems, and the qualification is what matters. The roof has to pass a moisture survey and an adhesion test, the specified thickness has to actually be applied, and the details have to be built to the manufacturer's drawings. We document the mil thickness as we go so the warranty rests on evidence rather than on a promise.",
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
        service="Roof Re-Coating"
        h1="Commercial Roof Re-Coating in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-4-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Flat Roof Systems", url: "/commercial-roofing/" },
          { name: "Roof Re-Coating", url: "/commercial-roof-re-coating/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: one service only, spraying or rolling a <strong>fluid-applied coating</strong> over a commercial roof that is still structurally sound. Not a new membrane, not a tear-off.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>The gate: dry substrate, sound seams, drainage that works. A moisture survey and an adhesion test decide it, not the age of the roof.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Silicone where water sits. Acrylic where the roof gets walked on and cleaned. We choose after the roof walk.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free coating suitability survey, including moisture readings and an adhesion pull. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Re-Coating Is, and What It Is Not
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A re-coating is a liquid applied over the roof you already own. It is rolled or
              sprayed across the whole surface, works its way into seams, laps and flashing details,
              and cures into one continuous waterproofing skin with no laps of its own. Nothing gets
              torn off. No sheet goods go down. The existing assembly keeps carrying the structural
              and insulating load, and the coating takes over the job of keeping water out.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That distinction matters, because owners are often quoted a coating as though it were
              a substitute for a roof. It is not. A coating renews a surface; it cannot rebuild an
              assembly. If the insulation under your membrane is wet, if the deck will not hold a
              fastener, or if the drainage is wrong, a coating locks those problems in under a
              warranty that will not cover them. We would rather lose a coating job than sell you
              one over a roof that needs something else.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Which Roofs in Amarillo Qualify for a Coating
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Age is not the test. We have coated twenty-year-old roofs and refused eight-year-old
              ones. What the survey looks for is whether the surface underneath will hold a coating
              and stay dry beneath it.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Good coating candidates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Aged single-ply that is still bonded down and dry underneath</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Modified bitumen with sound laps and no widespread splitting</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Prepared built-up gravel roofs, once the surface is properly readied</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Spray polyurethane foam that has weathered but not failed</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Screw-down metal panel roofs with tight fasteners and treatable seams</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />Roofs with isolated problem areas that can be repaired first</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Disqualifiers we look for</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Wet insulation anywhere under the surface</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Seams or laps opening across a wide area, not just in spots</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />A deck that has softened or will not hold fasteners</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Standing water that never drains between storms</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />A surface that fails the adhesion pull test</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />Hail bruising deep enough that the substrate is already fractured</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-l-4 border-brand-gold">
              <p className="text-gray-700 leading-relaxed">
                <strong>What the suitability survey includes:</strong> a walk of the full roof
                surface, photographs of every penetration and termination, a moisture survey to map
                anything wet under the surface, and an adhesion pull test on the actual substrate so
                the coating manufacturer's system is matched to what is really up there. You get the
                findings whether or not you hire us, and if your roof fails the test we will say so
                and tell you what it needs instead.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Silicone or Acrylic on a Texas Panhandle Roof
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              These are the two coating chemistries you will be quoted, and they fail in different
              ways, which is the useful way to think about them. Silicone is the one that shrugs off
              standing water. It does not soften or wash away when a low spot holds water for days
              after a storm, and it holds its waterproofing through long sun exposure. Its
              trade-offs are that it stays slick when wet and it is fussier to walk on, clean and
              recoat later.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Acrylic is a water-based system. It is easier to apply, easier to repair, easier to
              add a maintenance coat to years later, and it stays brighter and cleaner in the sun.
              What it does not tolerate is water that sits. On a roof with genuinely poor drainage,
              acrylic in the ponding areas is a known way to buy a problem.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So the decision starts with drainage and ends with foot traffic. Amarillo sits at{" "}
              <strong>3,600 feet</strong> with an annual average wind of <strong>14.3 mph</strong>,
              which means every rooftop here collects grit, and buildings with regular service
              traffic to mechanical units get walked more than owners realize. Where the roof drains
              properly and gets serviced often, acrylic usually wins. Where water sits, silicone
              does. On roofs that are mixed, we specify by area rather than pretending one answer
              fits the whole surface.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Prep Is the Job. Coating Is the Easy Part.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Almost every coating failure we are called out to inspect traces back to what happened
              before the coating went on, not to the coating itself. Here is the sequence we run,
              and where the time actually goes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">1. Survey and test</h3>
                <p className="text-gray-700 leading-relaxed">
                  Full roof walk, moisture survey, adhesion pull test, and a photographic record of
                  every curb, drain, pipe and termination. This is where the roof either qualifies
                  or does not, and where the coating system gets matched to the substrate.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">2. Clean and repair</h3>
                <p className="text-gray-700 leading-relaxed">
                  The surface is cleaned back to something a coating can grip. Wet insulation is cut
                  out and replaced, open seams are reinforced, and every penetration is detailed with
                  fabric and base coat before a drop of finish coat is applied.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">3. Coat and verify</h3>
                <p className="text-gray-700 leading-relaxed">
                  Coating goes on to the specified thickness, in the number of passes the
                  manufacturer requires, with wet-film thickness checked as we work. Each coat cures
                  before the next. The mil readings go in your file.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Thickness is where corners get cut, because a thin coat looks identical to a correct
              one from the parking lot and costs meaningfully less in material. It is also the thing
              a manufacturer's warranty depends on. We measure as we go and hand you the readings,
              which is the only way you can tell the difference after the crew leaves.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What a Coating Will and Will Not Do About Hail
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Owners ask about hail before they ask about anything else here, and they are right to.
              Amarillo averages <strong>8 to 12 hailstorms a year</strong>, and the largest stone on
              record locally is <strong>4.25 inches</strong>. A coating is measured in thousandths
              of an inch. Those two numbers do not belong in the same sentence, and a coating
              salesman who puts them there is selling you something the product cannot do.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A coating helps with the aftermath of small hail: it seals surface splits, restores a
              continuous waterproof layer over a pockmarked membrane, and stops slow leaks that
              would otherwise soak insulation for a season before anyone noticed. What it does not
              do is add impact resistance. The coating is thin relative to the assembly under it,
              and a stone that would have fractured your membrane will still fracture it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So the honest version is this: on a roof that took cosmetic hail and is otherwise
              sound, a coating is good value and often the right call. On a roof that has been
              bruised repeatedly across several seasons, a coating is a delay tactic dressed up as a
              solution, and we will tell you that before you spend the money.
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
                  Do Not Coat Over an Open Insurance Claim
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Coating a storm-damaged roof erases the evidence an adjuster needs to see, and it
                  does so permanently. Once a seamless membrane is cured over the bruising, nobody
                  can reopen the question. If your roof took hail or wind, get it documented before
                  anything covers it up. You have a{" "}
                  <strong>two-year window from the date of loss</strong> to file in Texas, and a
                  coating job takes days, so there is no reason to do them in the wrong order. We
                  document the roof and meet the adjuster on site first, then talk about coating.
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
              Where Re-Coating Sits in Our Commercial Flat-Roof Work
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Re-coating is the lightest-touch option on a low-slope commercial roof, and it is the
              right one only inside a narrow window: the assembly is dry and sound, the drainage
              works, and you want more service life out of what you have. Once you step outside that
              window the answer is a recover or a replacement instead. Our{" "}
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial flat-roof systems
              </a>{" "}
              page lays out the full set of options side by side. Start there if you are not yet
              sure a coating is what the roof needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We coat roofs out of 2909 S Western St in Amarillo and in Canyon, Borger, Pampa,
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
                  What is commercial roof re-coating?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Re-coating is a fluid-applied membrane rolled or sprayed over a roof you already
                  have. The coating cures into a single seamless waterproofing layer that covers the
                  old surface, its seams and its flashings. Nothing is torn off, no new sheet goods
                  go down, and the existing roof keeps doing the structural and insulating work. It
                  renews the surface, it does not replace the system.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Which commercial roofs can be re-coated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A roof is a coating candidate when the substrate is dry, sound and still bonded
                  down: aged single-ply, modified bitumen, built-up gravel that has been prepared,
                  spray polyurethane foam, and screw-down metal panel roofs all take coatings well.
                  Wet insulation, open or lifting seams over a wide area, a deck that will not hold
                  fasteners, and standing water that never drains all rule a coating out until they
                  are corrected.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Silicone or acrylic coating for an Amarillo roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Silicone holds up better where water sits and it does not soften and re-emulsify
                  when it gets wet, so it is the usual choice on a roof with slow drainage or low
                  spots. Acrylic is the friendlier system to walk on, recoat and repair, and it stays
                  cleaner and more reflective under the sun. On a Panhandle roof the decision usually
                  comes down to drainage first and rooftop foot traffic second, and we make it after
                  walking the roof rather than in advance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will a roof coating survive Amarillo hail?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  A coating is a waterproofing layer, not armor. It adds thickness and it seals the
                  small surface splits that hail leaves behind, but it does not turn a tired roof
                  into an impact-rated assembly. Amarillo averages 8 to 12 hailstorms a year, so we
                  are direct with owners: if the substrate under the coating is already bruised and
                  brittle, a coating buys time, and the replacement conversation is still coming.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does a commercial re-coating take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most of the schedule is preparation, not coating. The roof is cleaned, seams and
                  penetrations are detailed, and repairs are made before any coating is applied, and
                  each coat has to cure before the next goes on. The building stays open and occupied
                  throughout because the roof is never opened up. Weather governs the calendar more
                  than crew size does, since coating cannot be applied to a wet surface or ahead of a
                  storm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Does re-coating come with a warranty?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Coating manufacturers issue renewable warranties on qualifying systems, and the
                  qualification is what matters. The roof has to pass a moisture survey and an
                  adhesion test, the specified thickness has to actually be applied, and the details
                  have to be built to the manufacturer's drawings. We document the mil thickness as
                  we go so the warranty rests on evidence rather than on a promise.
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
          <h2 className="text-4xl font-bold mb-6">Find Out If Your Roof Can Be Coated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free coating suitability survey with moisture readings and an adhesion pull test. If the
            roof fails the test, you will hear it from us first.
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
            Re-coating is one part of our{" "}
            <a href="/commercial-roofing-amarillo/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
              commercial roofing services in Amarillo
            </a>
            , which covers repair, replacement, maintenance, and storm work for Amarillo business
            and property owners.
          </p>
        </aside>
        <RelatedArticles pageSlug="commercial-roof-re-coating" />
      </div>
    </>
  );
}