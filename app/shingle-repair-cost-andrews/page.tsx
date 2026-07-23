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
import { Check, Calculator, Wrench, ListChecks } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/shingle-repair-cost-andrews/" },
  title: "Shingle Roof Repair Cost Andrews TX (2026) | 5 Star Roofing",
  description:
    "What does shingle roof repair cost in Andrews, TX? Real 2026 Xactimate unit pricing — typical repairs run $350–$2,500 depending on scope. See the line-item numbers. Free inspection.",
  openGraph: {
    title: "Shingle Roof Repair Cost Andrews TX (2026) | 5 Star Roofing",
    description:
      "What does shingle roof repair cost in Andrews, TX? Real 2026 Xactimate unit pricing — typical repairs run $350–$2,500 depending on scope. See the line-item numbers. Free inspection.",
    url: "https://5starroofingpros.com/shingle-repair-cost-andrews/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Shingle roof repair cost in Andrews, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ShingleRepairCostAndrewsPage() {
  return (
    <>
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/shingle-repair-cost-andrews/#localbusiness",
            name: "5 Star Roofing",
            image: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp",
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
            url: "https://5starroofingpros.com/shingle-repair-cost-andrews/",
            areaServed: { "@type": "City", name: "Andrews", containedInPlace: { "@type": "State", name: "Texas" } },
            description:
              "Shingle roof repair cost guidance for Andrews, Texas, based on real Xactimate unit pricing from the West Texas market.",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
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
                name: "How much does shingle roof repair cost in Andrews, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most shingle roof repairs in the Andrews and West Texas market fall between about $350 and $2,500 as of April 2026, depending on scope. A small fix — a few wind-lifted shingles, one pipe boot, or a short run of flashing — typically lands in the $350 to $900 range, while a larger section, valley rework, or multiple penetrations runs $900 to $2,500. Small jobs carry a service minimum. A free inspection gives you an exact number.",
                },
              },
              {
                "@type": "Question",
                name: "When is repair worth it versus a full replacement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Repair makes sense when damage is localized, the shingles still have years of life, and the deck is sound — for example, a handful of hail-cracked shingles or a leaking pipe boot. If the roof is widely worn, has hail bruising across multiple slopes, or is past 18 to 22 years old, repair dollars are better put toward replacement, which runs around $15,000 for a typical single-story 20-square roof in West Texas.",
                },
              },
              {
                "@type": "Question",
                name: "What do the individual repair line items cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Based on April 2026 Xactimate pricing for the market: laminated architectural shingle runs about $284 per square (100 sq ft) installed, tear-off about $57 per square, synthetic underlayment about $48 per square, drip edge $3.68 per linear foot, valley metal $7.33 per linear foot, step flashing $11.65 per linear foot, and a lead pipe-jack flashing about $90 each. A repair estimate combines the specific items your roof needs.",
                },
              },
              {
                "@type": "Question",
                name: "Should minor hail damage go through insurance in Andrews?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If a single storm caused functional damage across the roof, a claim often makes sense even when the visible damage looks minor, because insurers scope the whole slope, not just the worst shingles. Texas gives you two years from the date of loss to file. For a small, isolated repair below your deductible, paying out of pocket is usually simpler. We can inspect and tell you honestly which path fits.",
                },
              },
            ],
          }),
        }}
      />

      <InteriorHeroSection
        heroVariant="service-location"
        citySlug="andrews"
        city="Andrews"
        service="Shingle Roof Repair Cost"
        h1="Shingle Roof Repair Cost in Andrews, TX (2026)"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Repair", url: "/roof-repair/" },
          { name: "Andrews Shingle Cost", url: "/shingle-repair-cost-andrews/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Answer</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Most shingle roof repairs in Andrews run <strong>$350–$2,500</strong> depending on scope (April 2026 pricing).</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Small fixes (a few shingles, a pipe boot, short flashing run): <strong>$350–$900</strong>. Larger sections or valley rework: <strong>$900–$2,500</strong>.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Line-item basis: architectural shingle ~$284/square, tear-off ~$57/square, drip edge $3.68/LF, pipe jack ~$90 each — real Xactimate numbers.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Not sure repair vs. replace? Free inspection: (806) 622-6041.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">What Shingle Repair Costs in Andrews</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A shingle roof repair isn't one price — it's the sum of the specific items your roof
              needs. That's why online calculators are usually wrong: they can't see whether you
              have three wind-lifted shingles or a failed valley. The ranges below come from real
              Xactimate unit pricing for the West Texas market as of April 2026, so you can see how a
              repair estimate actually gets built. Andrews sits in the Permian Basin, and its pricing
              tracks within a couple of points of the Amarillo Panhandle baseline.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has served West Texas for over a decade. We inspect for free, tell you
              honestly whether a repair or a replacement is the smarter spend, and — when hail or
              wind is involved — document everything the way an adjuster needs it.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Typical Repair Scope &amp; Cost</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-brand-brown text-white">
                    <th className="p-4 font-bold">Repair Type</th>
                    <th className="p-4 font-bold">Typical Cost (2026)</th>
                    <th className="p-4 font-bold">What's Involved</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Minor / localized</td><td className="p-4">$350–$900</td><td className="p-4">A few wind-lifted or hail-cracked shingles, one pipe boot, or a short flashing run</td></tr>
                  <tr className="border-b border-gray-100 bg-amber-50/40"><td className="p-4 font-semibold">Moderate</td><td className="p-4">$900–$2,500</td><td className="p-4">A damaged section, valley rework, ridge repair, or multiple penetrations</td></tr>
                  <tr><td className="p-4 font-semibold">Full replacement (reference)</td><td className="p-4">~$15,000</td><td className="p-4">Typical single-story 20-square architectural shingle roof, West Texas</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">Small repairs carry a service minimum. Final pricing depends on access, pitch, and exactly what's damaged — an on-site inspection is required for an accurate number.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">The Line Items Behind a Repair</h2>
            <p className="text-gray-600 mb-6">Most contractors won't show you this. These are real Xactimate unit prices for the market (April 2026) — a repair estimate combines the ones your roof actually needs.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-brand-gold text-white">
                    <th className="p-4 font-bold">Line Item</th>
                    <th className="p-4 font-bold">Unit Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="p-4">Laminated architectural shingle (installed)</td><td className="p-4">$284.01 / square</td></tr>
                  <tr className="border-b border-gray-100 bg-amber-50/40"><td className="p-4">Tear-off, haul &amp; dispose (1 layer)</td><td className="p-4">$56.62 / square</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4">Synthetic underlayment</td><td className="p-4">$47.89 / square</td></tr>
                  <tr className="border-b border-gray-100 bg-amber-50/40"><td className="p-4">Drip edge / gutter apron</td><td className="p-4">$3.68 / linear ft</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4">Valley metal (W-valley, standard in TX)</td><td className="p-4">$7.33 / linear ft</td></tr>
                  <tr className="border-b border-gray-100 bg-amber-50/40"><td className="p-4">Step flashing</td><td className="p-4">$11.65 / linear ft</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4">Hip / ridge cap</td><td className="p-4">$6.28 / linear ft</td></tr>
                  <tr><td className="p-4">Lead pipe-jack flashing</td><td className="p-4">$90.38 each</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Repair or Replace? How We Decide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Wrench className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Repair Wins When…</h3>
                <p className="text-gray-600 leading-relaxed">Damage is localized, shingles have life left, and the deck is sound — a few cracked shingles or a single leaking penetration.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <ListChecks className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Replace Wins When…</h3>
                <p className="text-gray-600 leading-relaxed">Hail bruising spans multiple slopes, shingles are brittle, or the roof is past 18–22 years — the West Texas heat range for architectural shingles.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Calculator className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Angle</h3>
                <p className="text-gray-600 leading-relaxed">If one storm caused functional damage, insurers scope the whole slope. Texas gives you two years from the date of loss to file.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">What a Full Replacement Looks Like</h2>
            <p className="text-gray-600 mb-6">If your roof turns out to be past repair, here's a real Xactimate estimate for a typical single-story replacement in the market — the same pricing basis that applies in Andrews.</p>
            <figure className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 max-w-2xl">
              <img src="/assets/pricing-references/amarillo-simple-gable-20sq.png" alt="Xactimate estimate for a 20-square simple gable architectural shingle roof replacement, $15,036 grand total" className="w-full rounded-lg" loading="lazy" />
              <figcaption className="text-sm text-gray-500 mt-3">Sample Xactimate estimate: 20-square simple gable, architectural shingles, $15,036 grand total (April 2026). Valley metal included, ice &amp; water barrier excluded — standard Texas scope.</figcaption>
            </figure>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does shingle roof repair cost in Andrews, TX?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Most shingle roof repairs in the Andrews and West Texas market fall between about $350 and $2,500 as of April 2026, depending on scope. A small fix — a few wind-lifted shingles, one pipe boot, or a short run of flashing — typically lands in the $350 to $900 range, while a larger section, valley rework, or multiple penetrations runs $900 to $2,500. Small jobs carry a service minimum. A free inspection gives you an exact number.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">When is repair worth it versus a full replacement?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Repair makes sense when damage is localized, the shingles still have years of life, and the deck is sound — for example, a handful of hail-cracked shingles or a leaking pipe boot. If the roof is widely worn, has hail bruising across multiple slopes, or is past 18 to 22 years old, repair dollars are better put toward replacement, which runs around $15,000 for a typical single-story 20-square roof in West Texas.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What do the individual repair line items cost?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Based on April 2026 Xactimate pricing for the market: laminated architectural shingle runs about $284 per square (100 sq ft) installed, tear-off about $57 per square, synthetic underlayment about $48 per square, drip edge $3.68 per linear foot, valley metal $7.33 per linear foot, step flashing $11.65 per linear foot, and a lead pipe-jack flashing about $90 each. A repair estimate combines the specific items your roof needs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Should minor hail damage go through insurance in Andrews?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">If a single storm caused functional damage across the roof, a claim often makes sense even when the visible damage looks minor, because insurers scope the whole slope, not just the worst shingles. Texas gives you two years from the date of loss to file. For a small, isolated repair below your deductible, paying out of pocket is usually simpler. We can inspect and tell you honestly which path fits.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Andrews &amp; the Permian Basin</h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>

        <InternalLinks currentCity="andrews" currentService="asphalt-shingle-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get an Honest Andrews Repair Quote</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free inspection. We'll tell you straight whether to repair or replace.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Request Free Inspection</a>
          </div>
        </section>

        <RelatedArticles pageSlug="shingle-repair-cost-andrews" />
      </div>
    </>
  );
}
