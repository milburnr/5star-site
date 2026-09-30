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
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-roof-inspection/" },
  title: "Commercial Roof Inspection Amarillo TX | Free, With Core Cut | 5 Star",
  description:
    "Free commercial roof inspections in Amarillo, Canyon and Pampa, TX: membrane, seams, flashings, drains and metal panels checked, a core cut on flat roofs, and a photo report. Call (806) 622-6041.",
  openGraph: {
    title: "Commercial Roof Inspection in Amarillo, TX | 5 Star Roofing",
    description:
      "Free commercial roof inspections in Amarillo and the Panhandle: a full roof walk, a core cut on flat and low-slope roofs, and a dated photo report you can use for claims and budgeting.",
    url: "https://5starroofingpros.com/commercial-roof-inspection/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial Roof Inspection in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Is a commercial roof inspection really free?",
    a: "Yes. We inspect commercial roofs in Amarillo and the surrounding Panhandle towns at no charge and with no obligation. You get the photographs and our findings whether or not you hire us for any work.",
  },
  {
    q: "What is a core cut and why do you take one?",
    a: "A core cut is a small sample cut through the roof assembly on a flat or low-slope roof. It shows how many layers are up there, what the insulation is, and whether it is wet. Nothing on the surface tells you that, and it decides whether a roof can be repaired, recovered, or has to come off.",
  },
  {
    q: "How often should a commercial roof be inspected?",
    a: "Twice a year is the usual baseline, in spring before the severe season and in autumn after it, plus a check after any significant hail or wind event at your address. If you want those visits handled on a schedule, that is what our maintenance program is for.",
  },
  {
    q: "Can the inspection report be used for an insurance claim?",
    a: "Yes. The report is dated and photographed so it can support a claim. In Texas you generally have two years from the date of loss to file, and once you do, the insurer has 15 days to acknowledge the claim and 60 days to pay or deny it under the Prompt Payment Act. We document the damage; we do not act as your adjuster.",
  },
  {
    q: "Do you inspect metal roofs as well as flat roofs?",
    a: "Yes. On metal buildings we check panels, laps, fasteners and washers, ridge and trim, and penetrations. A core cut is for membrane roofs, so on a metal roof we do a panel and fastener inspection instead.",
  },
];

export default function CommercialRoofInspectionPage() {
  return (
    <>
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Commercial Roof Inspection",
            name: "Commercial Roof Inspection in Amarillo",
            description:
              "Free commercial roof inspections in Amarillo, Texas and the surrounding Panhandle: a full roof walk, core cut on flat and low-slope membrane roofs, panel and fastener checks on metal roofs, and a dated photographic report.",
            url: "https://5starroofingpros.com/commercial-roof-inspection/",
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
            areaServed: [
              { "@type": "City", name: "Amarillo", containedInPlace: { "@type": "State", name: "Texas" } },
              { "@type": "City", name: "Canyon", containedInPlace: { "@type": "State", name: "Texas" } },
              { "@type": "City", name: "Pampa", containedInPlace: { "@type": "State", name: "Texas" } },
            ],
            isRelatedTo: {
              "@type": "Service",
              name: "Commercial Roofing in Amarillo",
              url: "https://5starroofingpros.com/commercial-roofing-amarillo/",
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
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <InteriorHeroSection
        heroVariant="service-location"
        citySlug="amarillo"
        city="Amarillo"
        service="Commercial Roof Inspection"
        h1="Commercial Roof Inspection in Amarillo, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-7-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing-amarillo/" },
          { name: "Commercial Roof Inspection", url: "/commercial-roof-inspection/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: a <strong>one-time inspection</strong> of a commercial roof in Amarillo, Canyon, Pampa and nearby Panhandle towns.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Free, with no obligation. Flat and low-slope roofs get a core cut; metal roofs get a panel and fastener check.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>You keep a dated photo report you can use for a claim, a lease, a purchase, or next year&apos;s budget.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: call (806) 622-6041 or use the contact form to book a time that works around your building.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Why Inspect a Commercial Roof Before It Leaks
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Most commercial roofs in Amarillo are flat or low-slope, which means nobody sees them.
              By the time water shows up on a ceiling tile, it has usually been running under the
              membrane for a while and soaking the insulation on the way. An inspection finds the
              open seam, the blocked drain or the hail bruise while it is still a repair.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This page is about a single inspection. If you want the roof looked after on a
              schedule, that is our{" "}
              <a href="/commercial-roof-maintenance-program/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial roof maintenance program
              </a>
              . If you own several buildings and need a multi-year spending plan, start with a{" "}
              <a href="/commercial-roof-condition-survey-and-capital/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                roof condition survey and capital plan
              </a>
              . For houses, see{" "}
              <a href="/roof-inspections-amarillo/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                roof inspections in Amarillo
              </a>
              .
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What We Check on a Commercial Roof
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Membrane and seams</h3>
                <p className="text-gray-700 leading-relaxed">
                  We walk the whole field, not just the spot above the last leak, and probe seams
                  and laps on TPO, PVC, EPDM, built-up and modified bitumen roofs for splits,
                  blisters and seams that have started to open.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Flashings and penetrations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Curbs under rooftop units, pipe boots, pitch pans, parapet walls and termination
                  bars wear out faster than the field. Most commercial leaks start at one of them.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Drains and ponding</h3>
                <p className="text-gray-700 leading-relaxed">
                  Panhandle wind parks debris right where water needs to leave. We check drains,
                  scuppers and gutters and note any low spots where water stands after rain.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Core cut on flat roofs</h3>
                <p className="text-gray-700 leading-relaxed">
                  A small sample through the assembly shows the layers, the insulation and whether
                  it is wet. That is what decides repair, recover or tear-off, so we take one before
                  we tell you anything about cost.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Metal panels and fasteners</h3>
                <p className="text-gray-700 leading-relaxed">
                  On metal buildings we look at panel laps, backed-out fasteners, worn washers, ridge
                  and trim, and hail denting. See{" "}
                  <a href="/commercial-metal-roof-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial metal roof repair
                  </a>{" "}
                  for what we do with what we find.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Storm and hail damage</h3>
                <p className="text-gray-700 leading-relaxed">
                  After a storm we mark and photograph hail and wind damage slope by slope, so the
                  record lines up with a date of loss. More on that under{" "}
                  <a href="/commercial-storm-hail/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                    commercial storm and hail damage
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">What You Get Afterward</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A dated report with photographs, what we found, and what we would do about it, in
              plain language. Small items are listed as repairs. If the roof is near the end of its
              life, we say so and show you why, including the core cut. You can hand the report to
              an adjuster, a buyer, a landlord or your own budget meeting.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When the findings point to work, the next page is usually{" "}
              <a href="/commercial-roof-leak-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial roof leak repair
              </a>
              ,{" "}
              <a href="/commercial-flat-roof-repair/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                flat roof repair
              </a>{" "}
              or{" "}
              <a href="/commercial-roof-restoration/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                restoration
              </a>
              . For how often to schedule inspections, read{" "}
              <a href="/blog/how-often-should-a-commercial-roof-be-inspected/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                how often a commercial roof should be inspected
              </a>
              .
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Where We Inspect Commercial Roofs
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We work from 2909 S Western St in Amarillo and inspect commercial roofs across the
              Panhandle, including{" "}
              <a href="/commercial-roofing-canyon/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Canyon
              </a>
              ,{" "}
              <a href="/commercial-roofing-pampa/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Pampa
              </a>
              ,{" "}
              <a href="/commercial-roofing-borger/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Borger
              </a>
              ,{" "}
              <a href="/commercial-roofing-dumas/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                Dumas
              </a>{" "}
              and Hereford. For everything else we do on commercial buildings here, see{" "}
              <a href="/commercial-roofing-amarillo/" className="text-brand-brown font-semibold underline hover:text-brand-gold">
                commercial roofing in Amarillo
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
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i + 1}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
                >
                  <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
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
          <h2 className="text-4xl font-bold mb-6">Book a Free Commercial Roof Inspection</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We schedule around your operating hours and send the photo report afterward.
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
              Request Free Inspection
            </a>
          </div>
        </section>

        <RelatedArticles pageSlug="commercial-roof-inspection" />
      </div>
    </>
  );
}
