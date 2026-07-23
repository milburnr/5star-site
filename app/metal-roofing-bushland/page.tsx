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
import { Check, Wind, Layers, Snowflake } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/metal-roofing-bushland/" },
  title: "Metal Roofing Bushland TX | 5 Star Roofing",
  description:
    "Metal roofing in Bushland, TX — standing-seam and R-panel systems for homes, farms, and commercial buildings built to beat open-plains wind. Free estimates. Call 5 Star Roofing.",
  openGraph: {
    title: "Metal Roofing Bushland TX | 5 Star Roofing",
    description:
      "Metal roofing in Bushland, TX — standing-seam and R-panel systems for homes, farms, and commercial buildings built to beat open-plains wind. Free estimates. Call 5 Star Roofing.",
    url: "https://5starroofingpros.com/metal-roofing-bushland/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://5starroofingpros.com/images/materials/standing-seam-metal.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Metal roofing in Bushland, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MetalRoofingBushlandPage() {
  return (
    <>
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/metal-roofing-bushland/#localbusiness",
            name: "5 Star Roofing",
            image: "https://5starroofingpros.com/images/materials/standing-seam-metal.jpg",
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
            url: "https://5starroofingpros.com/metal-roofing-bushland/",
            areaServed: { "@type": "City", name: "Bushland", containedInPlace: { "@type": "State", name: "Texas" } },
            description:
              "Metal roofing for Bushland, Texas — standing-seam and exposed-fastener systems for residential, agricultural, and commercial buildings, engineered for open high-plains wind.",
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
            serviceType: "Metal Roofing",
            name: "Metal Roofing in Bushland",
            description:
              "Metal roof installation, repair, and restoration in Bushland, Texas — standing-seam and R-panel systems.",
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
                name: "Do you install metal roofing in Bushland, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Bushland is about 14 miles west of our Amarillo office, and metal is the dominant roof type out there — on homes, farms, and commercial buildings. We install standing-seam and exposed-fastener metal and repair or restore existing metal roofs.",
                },
              },
              {
                "@type": "Question",
                name: "What does a metal roof cost in the Bushland area?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standing-seam metal in the Amarillo and Bushland market typically runs about $13 to $18 per square foot installed, as of April 2026, versus roughly $7 to $8 per square foot for an architectural shingle roof. Exposed-fastener R-panel on ag and commercial buildings runs less. Final pricing depends on panel type, roof size, and complexity, so an on-site measurement is required for an exact number.",
                },
              },
              {
                "@type": "Question",
                name: "Is standing-seam or exposed-fastener metal better for Bushland's wind?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standing-seam hides its fasteners under concealed clips, so there are no exposed screws to back out under constant wind — the reason it outlasts exposed-fastener systems on the open plains. Exposed-fastener R-panel costs less and is common on farm and commercial buildings, but it needs periodic fastener maintenance to stay watertight in this wind environment.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a metal roof last in the Texas Panhandle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A properly installed standing-seam metal roof can last 40 to 60 years in the Panhandle, well beyond the 20 to 25 years typical of architectural shingles here. Metal also resists the hail and wind that define this region, and Class 4-rated panels can qualify for insurance premium discounts from many Texas carriers.",
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
        service="Metal Roofing"
        h1="Metal Roofing in Bushland, TX"
        image="https://5starroofingpros.com/images/materials/standing-seam-metal.jpg"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Metal Roofing", url: "/metal-roofing/" },
          { name: "Bushland", url: "/metal-roofing-bushland/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Metal roofing for Bushland, TX — homes, farms, and commercial buildings along the I-40 corridor west of Amarillo.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Standing-seam hides its fasteners and wins on the open plains; exposed-fastener R-panel is the budget option for ag and commercial buildings.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Cost: about $13–$18/sq ft installed for standing-seam (April 2026); on-site measurement needed for an exact quote.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free estimate. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Metal Roofing in Bushland, TX: The Panhandle's Wind-Proven Choice
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Drive the I-40 frontage and county roads around Bushland and you see the same thing
              over and over: metal roofs. On this open stretch of high plains about 14 miles west of
              Amarillo, metal isn't a style choice — it's the answer to relentless wind. It spans
              wide farm and commercial buildings economically, sheds the occasional heavy snow, and,
              installed correctly, resists the uplift that tears cheaper systems apart.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing installs, repairs, and restores metal roofing across Bushland from our
              Amarillo office at 2909 S Western St. Whether you own a home off Bushland Road, a barn
              or ag structure, or a roadside commercial building, we match the panel system and
              fastening to how hard the wind works out here.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Metal Makes Sense in Bushland</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Wind className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Wind Resistance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Standing-seam panels lock over concealed clips with no exposed screws to back out
                  under constant wind — the single biggest reason they outlast other systems on the
                  open plains.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Layers className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Decades of Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  A properly installed standing-seam roof can last 40 to 60 years here — far beyond
                  the 20 to 25 years typical of architectural shingles in the Panhandle.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Snowflake className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail &amp; Snow Ready</h3>
                <p className="text-gray-600 leading-relaxed">
                  Metal sheds snow and, in Class 4-rated panels, stands up to the hail that defines
                  Hail Alley — often qualifying for insurance premium discounts from Texas carriers.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Standing-Seam vs. R-Panel: What Fits Your Building</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Standing-Seam</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Concealed-fastener panels for homes and higher-end commercial buildings. No
                  exposed screws means nothing to loosen in the wind, the longest service life, and
                  a clean architectural look. Typically about $13–$18 per square foot installed as
                  of April 2026.
                </p>
                <div className="flex gap-2 text-gray-700"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" /><span>Best long-term value in high wind</span></div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Exposed-Fastener R-Panel</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Budget-friendly panels common on farm, warehouse, and commercial buildings. Fast
                  to install and economical over large spans, but the exposed screws need periodic
                  maintenance to stay watertight in Bushland's wind.
                </p>
                <div className="flex gap-2 text-gray-700"><Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" /><span>Lowest cost for large ag/commercial roofs</span></div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you install metal roofing in Bushland, TX?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. Bushland is about 14 miles west of our Amarillo office, and metal is the dominant roof type out there — on homes, farms, and commercial buildings. We install standing-seam and exposed-fastener metal and repair or restore existing metal roofs.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What does a metal roof cost in the Bushland area?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Standing-seam metal in the Amarillo and Bushland market typically runs about $13 to $18 per square foot installed, as of April 2026, versus roughly $7 to $8 per square foot for an architectural shingle roof. Exposed-fastener R-panel on ag and commercial buildings runs less. Final pricing depends on panel type, roof size, and complexity, so an on-site measurement is required for an exact number.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Is standing-seam or exposed-fastener metal better for Bushland's wind?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Standing-seam hides its fasteners under concealed clips, so there are no exposed screws to back out under constant wind — the reason it outlasts exposed-fastener systems on the open plains. Exposed-fastener R-panel costs less and is common on farm and commercial buildings, but it needs periodic fastener maintenance to stay watertight in this wind environment.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">How long does a metal roof last in the Texas Panhandle?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">A properly installed standing-seam metal roof can last 40 to 60 years in the Panhandle, well beyond the 20 to 25 years typical of architectural shingles here. Metal also resists the hail and wind that define this region, and Class 4-rated panels can qualify for insurance premium discounts from many Texas carriers.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Ready for a Metal Roof That Beats the Wind?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free metal roofing estimates for Bushland homes, farms, and businesses.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Request Free Estimate</a>
          </div>
        </section>

        <aside className="container-custom mt-10 mb-4">
          <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-brand-brown mb-3">Roofing in Bushland &amp; Nearby</h2>
            <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
              <li><a href="/commercial-roofing-bushland/" className="text-brand-brown hover:text-brand-gold underline">Commercial roofing in Bushland</a></li>
              <li><a href="/hail-damage-repair-bushland/" className="text-brand-brown hover:text-brand-gold underline">Hail damage repair in Bushland</a></li>
              <li><a href="/bushland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">All roofing services in Bushland</a></li>
              <li><a href="/metal-roofing-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Metal roofing in Amarillo</a></li>
              <li><a href="/metal-roofing-canyon/" className="text-brand-brown hover:text-brand-gold underline">Metal roofing in Canyon</a></li>
              <li><a href="/metal-roofing/" className="text-brand-brown hover:text-brand-gold underline">All metal roofing services</a></li>
            </ul>
          </div>
        </aside>

        <RelatedArticles pageSlug="metal-roofing-bushland" />
      </div>
    </>
  );
}
