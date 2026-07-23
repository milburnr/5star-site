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
import { Check, Calculator, Ruler, TrendingUp } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/roof-replacement-cost-odessa/" },
  title: "Roof Replacement Cost Odessa TX (2026) | 5 Star Roofing",
  description:
    "What does a roof replacement cost in Odessa, TX? Real Xactimate-based pricing for 2026 — around $15,000 for a typical single-story home, with the factors that move the number. Free estimate.",
  openGraph: {
    title: "Roof Replacement Cost Odessa TX (2026) | 5 Star Roofing",
    description:
      "What does a roof replacement cost in Odessa, TX? Real Xactimate-based pricing for 2026 — around $15,000 for a typical single-story home, with the factors that move the number. Free estimate.",
    url: "https://5starroofingpros.com/roof-replacement-cost-odessa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Roof replacement cost in Odessa, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofReplacementCostOdessaPage() {
  return (
    <>
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-replacement-cost-odessa/#localbusiness",
            name: "5 Star Roofing",
            image: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
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
            url: "https://5starroofingpros.com/roof-replacement-cost-odessa/",
            areaServed: { "@type": "City", name: "Odessa", containedInPlace: { "@type": "State", name: "Texas" } },
            description:
              "Roof replacement cost guidance for Odessa, Texas, based on real Xactimate pricing from the West Texas market.",
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
                name: "How much does a roof replacement cost in Odessa, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As of April 2026, a typical single-story architectural shingle roof replacement in the West Texas market runs around $15,000 for a 20-square roof (about 2,000 sq ft of roof surface), based on insurance-grade Xactimate pricing — roughly $7.00 to $7.75 per square foot all-in. Two-story or steeper roofs run 15 to 20 percent higher. Odessa pricing sits within a couple of percentage points of the Amarillo Panhandle baseline. A final number requires an on-site inspection.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between insurance and retail roof pricing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Insurance (Xactimate) pricing itemizes every component — tear-off, underlayment, starter course, drip edge, valley metal, flashing, ventilation — with overhead and profit on qualifying claims. Retail cash bids often come in lower because contractors bundle line items and skip itemized upgrades. The figures on this page are insurance-grade, which is what most Odessa homeowners with storm damage actually work with.",
                },
              },
              {
                "@type": "Question",
                name: "What makes a roof replacement cost more in Odessa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The biggest drivers are steepness and height. A two-story home adds about 4 to 6 percent, a 7-9/12 pitch adds 10 to 14 percent, and steeper pitches add more. Decking replacement adds $2.25 to $3.50 per square foot of affected area, and a Class 4 impact-resistant upgrade adds about $85 to $125 per square. Chimneys, skylights, and multiple gables also add cost.",
                },
              },
              {
                "@type": "Question",
                name: "Does a new roof help with insurance in West Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. West Texas sees frequent hail and wind, and many Texas carriers offer 15 to 25 percent premium discounts for Class 4 impact-resistant shingles. If your roof was storm-damaged, you have a two-year window from the date of loss to file, and the Texas Prompt Payment Act requires insurers to acknowledge within 15 days and pay or deny within 60.",
                },
              },
            ],
          }),
        }}
      />

      <InteriorHeroSection
        heroVariant="service-location"
        citySlug="odessa"
        city="Odessa"
        service="Roof Replacement Cost"
        h1="Roof Replacement Cost in Odessa, TX (2026)"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Replacement", url: "/roof-replacement/" },
          { name: "Odessa Cost", url: "/roof-replacement-cost-odessa/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Answer</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>A typical single-story architectural shingle roof in Odessa runs about <strong>$15,000</strong> (20 SQ, ~2,000 sq ft of roof), or roughly <strong>$7.00–$7.75 per sq ft</strong> all-in — insurance-grade Xactimate pricing, April 2026.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Two-story or steep-pitch roofs run 15–20% higher; standing-seam metal runs $13–$18 per sq ft.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Odessa (West Texas) pricing tracks within a couple of points of the Amarillo Panhandle baseline.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Every roof is different — call (806) 622-6041 for a free, itemized on-site estimate.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">What a Roof Replacement Really Costs in Odessa</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Most roofing calculators online quote national averages that run 15 to 25 percent low
              for the insurance-grade work West Texas storm claims actually require. The numbers on
              this page come from real Xactimate exports for the Amarillo and West Texas market as of
              April 2026 — the same pricing basis insurers use. Odessa sits in the Permian Basin, and
              its roof pricing runs within a couple of percentage points of the Amarillo Panhandle
              baseline, so these figures are a reliable guide for what you'll see on an Odessa roof.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">What "20 SQ" means</p>
              <p className="text-gray-700 leading-relaxed">
                Roofing is priced per <strong>square</strong> — 100 sq ft of roof surface. A 20-square
                roof is roughly a 1,450 sq ft footprint on a one-story home at a 6:12 pitch, which
                works out to about 2,000 sq ft of actual roof surface once pitch, overhangs, and
                waste are counted. A home listed at 2,000 sq ft of living space usually has 25–30
                squares of roof — a meaningfully larger job.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Odessa Roof Replacement Cost by Scenario</h2>
            <p className="text-gray-600 mb-6">All figures are all-in Xactimate pricing (materials, labor, tear-off, O&amp;P), April 2026, West Texas market.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-brand-brown text-white">
                    <th className="p-4 font-bold">Roof Scenario</th>
                    <th className="p-4 font-bold">Per Sq Ft (All-In)</th>
                    <th className="p-4 font-bold">Typical 20 SQ Roof</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="p-4">Simple gable, 1-story, architectural shingle</td><td className="p-4">$7.00–$7.75</td><td className="p-4">~$15,000</td></tr>
                  <tr className="border-b border-gray-100 bg-amber-50/40"><td className="p-4">2-story OR moderately steep (7–9/12)</td><td className="p-4">$8.00–$8.75</td><td className="p-4">~$16,500–$17,800</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-4">2-story AND steep + cut-up</td><td className="p-4">$8.75–$9.50</td><td className="p-4">~$17,800–$19,000</td></tr>
                  <tr className="border-b border-gray-100 bg-amber-50/40"><td className="p-4">Very steep (10–12/12)</td><td className="p-4">$9.50–$11.00</td><td className="p-4">~$19,000–$22,000</td></tr>
                  <tr><td className="p-4">Standing-seam metal</td><td className="p-4">$13.00–$18.00</td><td className="p-4">~$26,000–$36,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">Ranges assume roughly 2,000 sq ft of roof surface on a 20-square roof. Larger homes scale up proportionally.</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">What Moves the Number</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <TrendingUp className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Height &amp; Pitch</h3>
                <p className="text-gray-600 leading-relaxed">A second story adds about 4–6% (~$560–$770 on a 20 SQ job). A 7–9/12 pitch adds 10–14% (~$1,670). Steeper roofs add more.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Ruler className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Decking &amp; Layers</h3>
                <p className="text-gray-600 leading-relaxed">Replacing rotted decking adds $2.25–$3.50 per sq ft of affected area. Tearing off a second existing layer adds $30–$50 per square.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Calculator className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Upgrades</h3>
                <p className="text-gray-600 leading-relaxed">Class 4 impact-resistant shingles add $85–$125 per square but can earn 15–25% insurance discounts. Each chimney or skylight adds $250–$700.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Real Xactimate Estimates</h2>
            <p className="text-gray-600 mb-6">
              Most contractors show zero real numbers. Here are two actual Xactimate estimates from
              the Amarillo market area — the same West Texas pricing basis that applies in Odessa.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <figure className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <img src="/assets/pricing-references/amarillo-simple-gable-20sq.png" alt="Xactimate estimate for a 20-square simple gable architectural shingle roof replacement, $15,036 grand total" className="w-full rounded-lg" loading="lazy" />
                <figcaption className="text-sm text-gray-500 mt-3">Sample Xactimate estimate: 20-square simple gable, architectural shingles, $15,036 grand total (April 2026). Valley metal included, ice &amp; water barrier excluded — standard Texas scope.</figcaption>
              </figure>
              <figure className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <img src="/assets/pricing-references/amarillo-complex-20sq.png" alt="Xactimate estimate for a 20-square 2-story roof with 7-9/12 pitch and partial hip, $17,819 grand total" className="w-full rounded-lg" loading="lazy" />
                <figcaption className="text-sm text-gray-500 mt-3">Sample Xactimate estimate: 20-square, 2-story with 7–9/12 pitch and partial hip, $17,819 grand total (April 2026) — about an 18–19% premium over the simple baseline.</figcaption>
              </figure>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How much does a roof replacement cost in Odessa, TX?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">As of April 2026, a typical single-story architectural shingle roof replacement in the West Texas market runs around $15,000 for a 20-square roof (about 2,000 sq ft of roof surface), based on insurance-grade Xactimate pricing — roughly $7.00 to $7.75 per square foot all-in. Two-story or steeper roofs run 15 to 20 percent higher. Odessa pricing sits within a couple of percentage points of the Amarillo Panhandle baseline. A final number requires an on-site inspection.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What is the difference between insurance and retail roof pricing?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Insurance (Xactimate) pricing itemizes every component — tear-off, underlayment, starter course, drip edge, valley metal, flashing, ventilation — with overhead and profit on qualifying claims. Retail cash bids often come in lower because contractors bundle line items and skip itemized upgrades. The figures on this page are insurance-grade, which is what most Odessa homeowners with storm damage actually work with.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What makes a roof replacement cost more in Odessa?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">The biggest drivers are steepness and height. A two-story home adds about 4 to 6 percent, a 7-9/12 pitch adds 10 to 14 percent, and steeper pitches add more. Decking replacement adds $2.25 to $3.50 per square foot of affected area, and a Class 4 impact-resistant upgrade adds about $85 to $125 per square. Chimneys, skylights, and multiple gables also add cost.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Does a new roof help with insurance in West Texas?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. West Texas sees frequent hail and wind, and many Texas carriers offer 15 to 25 percent premium discounts for Class 4 impact-resistant shingles. If your roof was storm-damaged, you have a two-year window from the date of loss to file, and the Texas Prompt Payment Act requires insurers to acknowledge within 15 days and pay or deny within 60.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">Serving Odessa &amp; the Permian Basin</h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" />
            </div>
          </section>
        </FadeIn>

        <InternalLinks currentCity="odessa" currentService="roof-replacement" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Free Odessa Roof Estimate</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Itemized, insurance-grade pricing for your exact roof — no guesswork.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Request Free Estimate</a>
          </div>
        </section>

        <RelatedArticles pageSlug="roof-replacement-cost-odessa" />
      </div>
    </>
  );
}
