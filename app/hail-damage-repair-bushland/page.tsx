import { FadeIn } from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Check, CloudHail, FileText, Clock } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/hail-damage-repair-bushland/" },
  title: "Hail Damage Roof Repair Bushland TX | 5 Star Roofing",
  description:
    "Hail damage roof repair in Bushland, TX. Free storm inspections, insurance claim help, fast response from Amarillo. Call 5 Star Roofing after the next Panhandle hailstorm.",
  openGraph: {
    title: "Hail Damage Roof Repair Bushland TX | 5 Star Roofing",
    description:
      "Hail damage roof repair in Bushland, TX. Free storm inspections, insurance claim help, fast response from Amarillo. Call 5 Star Roofing after the next Panhandle hailstorm.",
    url: "https://5starroofingpros.com/hail-damage-repair-bushland/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Hail damage roof repair in Bushland, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HailDamageRepairBushlandPage() {
  return (
    <>
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/hail-damage-repair-bushland/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.webp",
            telephone: "(806) 622-6041",
            email: "admin@5starroofingpros.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2909 S Western St",
              addressLocality: "Amarillo",
              addressRegion: "TX",
              postalCode: "79109",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 35.1768, longitude: -101.859 },
            url: "https://5starroofingpros.com/hail-damage-repair-bushland/",
            areaServed: { "@type": "City", name: "Bushland", containedInPlace: { "@type": "State", name: "Texas" } },
            description:
              "Hail damage roof repair and insurance claim help for Bushland, Texas, from a crew based 14 miles east in Amarillo — the heart of Hail Alley.",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Hail Damage Roof Repair",
            name: "Hail Damage Repair in Bushland",
            description:
              "Storm and hail damage roof inspection, repair, and insurance claim assistance in Bushland, Texas.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: { "@type": "City", name: "Bushland", containedInPlace: { "@type": "State", name: "Texas" } },
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
                name: "How fast can you inspect hail damage in Bushland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bushland is about 14 miles west of our Amarillo office, so we can usually get a crew out quickly after a storm. We recommend a free inspection within a few days of any significant hail event so damage is documented before the next storm complicates the claim.",
                },
              },
              {
                "@type": "Question",
                name: "How often does Bushland get damaging hail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bushland sits in the same Hail Alley zone as Amarillo, which has recorded 131 severe hail days since 2000 and averages 8 to 12 hailstorms a year. The largest recorded stone locally was 4.25 inches — softball size — in May 2019. Metal and shingle roofs out here take repeated hail impacts.",
                },
              },
              {
                "@type": "Question",
                name: "Will insurance cover my Bushland roof after hail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, yes, if the storm caused functional damage. Texas gives you a two-year window from the date of loss to file, and under the Texas Prompt Payment Act insurers must acknowledge a claim within 15 days and pay or deny within 60 days, with 18% annual interest on late payments. We document the damage and meet your adjuster on site to support the claim.",
                },
              },
              {
                "@type": "Question",
                name: "What does hail damage look like on a metal roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On metal it shows up as denting, coating fracture, and loosened fasteners rather than the granule loss you see on shingles. Because so many Bushland buildings are metal, it takes a trained eye to separate cosmetic dents from functional damage that affects the roof's service life and warranty — which is exactly what our inspection documents.",
                },
              },
            ],
          }),
        }}
      />

      <InteriorHeroSection
        heroVariant="service-location"
        citySlug="amarillo"
        city="Bushland"
        service="Hail Damage Repair"
        h1="Hail Damage Roof Repair in Bushland, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-2-1280w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
          { name: "Bushland", url: "/hail-damage-repair-bushland/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Hail damage roof repair for Bushland, TX — same Hail Alley zone as Amarillo, just 14 miles west.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Free storm inspections and full insurance claim documentation, including on-site adjuster meetings.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Texas gives you a two-year filing window from the date of loss — but inspect early, before the next storm.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Hail Damage Roof Repair in Bushland, TX
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Bushland sits in the heart of Hail Alley, on the same open high plains as Amarillo
              about 14 miles east. Potter County ranks among the top ten in the nation for hail
              frequency, and the area has logged 131 severe hail days since 2000 with 8 to 12
              hailstorms in a typical year. When a storm rolls through Bushland, your roof takes the
              hit — and getting it documented and repaired quickly protects both the building and
              your insurance claim.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing responds to Bushland storm damage from our Amarillo office at 2909 S
              Western St. We inspect for free, document the damage the way adjusters need it, and
              handle the repair — whether it's a hail-battered shingle roof on a home off Bushland
              Road or dented metal panels on a farm or commercial building.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Our Hail Damage Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Clock className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fast Inspection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bushland is a short drive west of our office, so we get out quickly after a storm
                  to document damage before the next one complicates your claim.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <FileText className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Claim Documentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We photograph and measure the damage, prepare it in the format adjusters expect,
                  and meet your insurance adjuster on site to make sure nothing gets missed.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <CloudHail className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Repair or Replace</h3>
                <p className="text-gray-600 leading-relaxed">
                  From spot repairs to full replacement, we restore your roof to pre-storm condition
                  with materials rated for the Panhandle's hail and wind.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-red-800">Know Your Texas Insurance Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under the Texas Prompt Payment Act, your insurer must acknowledge a claim within 15
              days and either pay or deny it within 60 days. Late payments accrue 18% annual
              interest. You have a two-year window from the date of loss to file. The sooner a
              professional documents the damage, the stronger your position — don't wait for a leak
              to prove there was hail.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Free, no-obligation storm inspection",
                "Adjuster meetings handled on your behalf",
                "Damage documented to claim standards",
                "Repairs built for repeat Hail Alley storms",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-gray-700"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" /><span>{item}</span></div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How fast can you inspect hail damage in Bushland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Bushland is about 14 miles west of our Amarillo office, so we can usually get a crew out quickly after a storm. We recommend a free inspection within a few days of any significant hail event so damage is documented before the next storm complicates the claim.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How often does Bushland get damaging hail?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Bushland sits in the same Hail Alley zone as Amarillo, which has recorded 131 severe hail days since 2000 and averages 8 to 12 hailstorms a year. The largest recorded stone locally was 4.25 inches — softball size — in May 2019. Metal and shingle roofs out here take repeated hail impacts.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Will insurance cover my Bushland roof after hail?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">In most cases, yes, if the storm caused functional damage. Texas gives you a two-year window from the date of loss to file, and under the Texas Prompt Payment Act insurers must acknowledge a claim within 15 days and pay or deny within 60 days, with 18% annual interest on late payments. We document the damage and meet your adjuster on site to support the claim.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What does hail damage look like on a metal roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">On metal it shows up as denting, coating fracture, and loosened fasteners rather than the granule loss you see on shingles. Because so many Bushland buildings are metal, it takes a trained eye to separate cosmetic dents from functional damage that affects the roof's service life and warranty — which is exactly what our inspection documents.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Bushland from Amarillo</h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Storm Hit Your Bushland Roof?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free hail inspection. We handle the insurance paperwork.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Request Free Inspection</a>
          </div>
        </section>

        <aside className="container-custom mt-10 mb-4">
          <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-brand-brown mb-3">Roofing in Bushland &amp; Nearby</h2>
            <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
              <li><a href="/commercial-roofing-bushland/" className="text-brand-brown hover:text-brand-gold underline">Commercial roofing in Bushland</a></li>
              <li><a href="/metal-roofing-bushland/" className="text-brand-brown hover:text-brand-gold underline">Metal roofing in Bushland</a></li>
              <li><a href="/bushland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">All roofing services in Bushland</a></li>
              <li><a href="/hail-damage-repair-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Hail damage repair in Amarillo</a></li>
              <li><a href="/hail-damage-repair-canyon/" className="text-brand-brown hover:text-brand-gold underline">Hail damage repair in Canyon</a></li>
              <li><a href="/hail-damage-repair/" className="text-brand-brown hover:text-brand-gold underline">All hail damage repair services</a></li>
            </ul>
          </div>
        </aside>

        <RelatedArticles pageSlug="hail-damage-repair-bushland" />
      </div>
    </>
  );
}
