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
import { Check, Wind, Building2, ShieldCheck } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/commercial-roofing-bushland/" },
  title: "Commercial Roofing Bushland TX | 5 Star Roofing",
  description:
    "Commercial roofing in Bushland, TX — metal and low-slope systems built for open-plains wind and Panhandle hail. Free inspections, insurance claim help. Call 5 Star Roofing.",
  openGraph: {
    title: "Commercial Roofing Bushland TX | 5 Star Roofing",
    description:
      "Commercial roofing in Bushland, TX — metal and low-slope systems built for open-plains wind and Panhandle hail. Free inspections, insurance claim help. Call 5 Star Roofing.",
    url: "https://5starroofingpros.com/commercial-roofing-bushland/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Commercial roofing services in Bushland, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofingBushlandPage() {
  return (
    <>
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/commercial-roofing-bushland/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp",
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
            url: "https://5starroofingpros.com/commercial-roofing-bushland/",
            areaServed: {
              "@type": "City",
              name: "Bushland",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            description:
              "Commercial roofing for Bushland, Texas — metal and low-slope systems engineered for open high-plains wind and Panhandle hail, from a crew based 14 miles east in Amarillo.",
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
            serviceType: "Commercial Roofing Services",
            name: "Commercial Roofing in Bushland",
            description:
              "Professional commercial roofing services in Bushland, Texas. Metal and low-slope installation, repair, restoration, and maintenance.",
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
                name: "Do you handle commercial roofing in Bushland, TX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Bushland sits about 14 miles west of our Amarillo office along Interstate 40, and we cover its commercial, agricultural, and light-industrial buildings. The metal and low-slope roofs common out there are exactly what our commercial crews install and repair.",
                },
              },
              {
                "@type": "Question",
                name: "What commercial roofing systems work best in Bushland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standing-seam and exposed-fastener metal dominate Bushland's commercial and agricultural buildings because they span wide steel structures economically and resist wind uplift. Newer retail and office buildings often use low-slope TPO membrane. We install and service both.",
                },
              },
              {
                "@type": "Question",
                name: "Why does wind matter so much for a Bushland commercial roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bushland sits on open high plains with little to break the wind, so uplift is the defining design load. On metal buildings, backed-out fasteners and loosened panel seams are the first failure points and get worse quickly once the wind starts working them, which is why fastening detail and seam quality matter more here than almost anywhere.",
                },
              },
              {
                "@type": "Question",
                name: "Can you restore an aging metal roof instead of replacing it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Often, yes. If the steel deck and structure are sound and leaks are at fasteners, seams, and flashings, a metal roof can be re-fastened, sealed, and coated to add years of service — a cost-effective way to keep an ag or commercial operation running without a full re-roof.",
                },
              },
              {
                "@type": "Question",
                name: "Do you help with insurance claims after a hail or wind event?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We document damage, meet the adjuster on site, and work within the Texas Prompt Payment Act timelines. There is a two-year filing window from the date of loss on Texas commercial claims, so it pays to get a professional inspection done promptly.",
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
        service="Commercial Roofing"
        h1="Commercial Roofing in Bushland, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-commercial-5-1920w.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing/" },
          { name: "Bushland", url: "/commercial-roofing-bushland/" },
        ]}
      />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Commercial roofing for Bushland, TX — the ag, light-industrial, and roadside businesses along the I-40 corridor west of Amarillo.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Bushland is about 14 miles west of our Amarillo office, so response times are short.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Systems: standing-seam and exposed-fastener metal, plus low-slope TPO — chosen for open-plains wind uplift.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspection. Call (806) 622-6041 or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              Commercial Roofing in Bushland, TX: Built for Wind and Metal
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              If you run a business in Bushland and need commercial roofing, two forces shape every
              decision: wind and metal. This stretch of open high plains roughly 14 miles west of
              Amarillo along Interstate 40 punishes roofs with relentless uplift, and most of the
              buildings out here — a community of about 2,200 anchored by Bushland ISD and a mix of
              agricultural, light-industrial, and roadside commercial structures — wear metal roofs
              built to take it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              5 Star Roofing has served the Texas Panhandle for over a decade from our office at
              2909 S Western St in Amarillo. Bushland is a short drive west, which means fast
              response when a seam opens up or a storm rolls through. We install, repair, restore,
              and maintain the metal and low-slope commercial systems that fit this landscape, and
              we handle the insurance side when hail or wind does the damage.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Why Metal Dominates Bushland's Commercial Roofs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Wind className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Wind Uplift Is the Design Load</h3>
                <p className="text-gray-600 leading-relaxed">
                  With little to break the wind on the open plains, uplift is the governing force on
                  a Bushland roof. Fastening pattern, panel-seam quality, and edge-metal detail
                  decide whether a roof lasts 30 years or starts leaking in five.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Building2 className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Metal Spans Big Buildings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exposed-fastener R-panel and standing-seam metal cover wide agricultural and
                  warehouse structures economically, shed the occasional heavy snow, and — installed
                  correctly — stand up to the uplift that defines this region.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold text-brand-brown mb-3">Restore Before You Replace</h3>
                <p className="text-gray-600 leading-relaxed">
                  If the deck and structure are sound and the leaks are at fasteners, seams, and
                  flashings, a metal roof can be re-fastened, sealed, and coated for years of added
                  service — a fraction of the cost of a full re-roof.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Commercial Services We Provide in Bushland</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "New metal roof installation (standing-seam and exposed-fastener)",
                "Low-slope TPO membrane installation for retail and office buildings",
                "Metal roof restoration, re-fastening, and coating systems",
                "Leak diagnosis and repair at seams, fasteners, and flashings",
                "Storm, hail, and wind damage repair with insurance documentation",
                "Preventive maintenance programs for ag and industrial roofs",
              ].map((item) => (
                <div key={item} className="flex gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you handle commercial roofing in Bushland, TX?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. Bushland sits about 14 miles west of our Amarillo office along Interstate 40, and we cover its commercial, agricultural, and light-industrial buildings. The metal and low-slope roofs common out there are exactly what our commercial crews install and repair.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">What commercial roofing systems work best in Bushland?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Standing-seam and exposed-fastener metal dominate Bushland's commercial and agricultural buildings because they span wide steel structures economically and resist wind uplift. Newer retail and office buildings often use low-slope TPO membrane. We install and service both.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Why does wind matter so much for a Bushland commercial roof?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Bushland sits on open high plains with little to break the wind, so uplift is the defining design load. On metal buildings, backed-out fasteners and loosened panel seams are the first failure points and get worse quickly once the wind starts working them, which is why fastening detail and seam quality matter more here than almost anywhere.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Can you restore an aging metal roof instead of replacing it?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Often, yes. If the steel deck and structure are sound and leaks are at fasteners, seams, and flashings, a metal roof can be re-fastened, sealed, and coated to add years of service — a cost-effective way to keep an ag or commercial operation running without a full re-roof.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4">
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">Do you help with insurance claims after a hail or wind event?</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">Yes. We document damage, meet the adjuster on site, and work within the Texas Prompt Payment Act timelines. There is a two-year filing window from the date of loss on Texas commercial claims, so it pays to get a professional inspection done promptly.</AccordionContent>
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
          <h2 className="text-4xl font-bold mb-6">Protect Your Bushland Building</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Free commercial roof inspections. Fast response from Amarillo.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8066226041" className="bg-white text-brand-brown px-10 py-5 rounded-full font-bold hover:bg-gray-100 hover:scale-110 transition-all duration-300 text-lg">Call (806) 622-6041</a>
            <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-brand-brown hover:scale-110 transition-all duration-300 text-lg">Request Free Estimate</a>
          </div>
        </section>

        <aside className="container-custom mt-10 mb-4">
          <div className="max-w-5xl mx-auto bg-amber-50/60 border border-brand-gold/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-brand-brown mb-3">Roofing in Bushland &amp; Nearby</h2>
            <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside">
              <li><a href="/metal-roofing-bushland/" className="text-brand-brown hover:text-brand-gold underline">Metal roofing in Bushland</a></li>
              <li><a href="/hail-damage-repair-bushland/" className="text-brand-brown hover:text-brand-gold underline">Hail damage repair in Bushland</a></li>
              <li><a href="/bushland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline">All roofing services in Bushland</a></li>
              <li><a href="/commercial-roofing-amarillo/" className="text-brand-brown hover:text-brand-gold underline">Commercial roofing in Amarillo, TX</a></li>
              <li><a href="/blog/commercial-roofing-bushland-tx/" className="text-brand-brown hover:text-brand-gold underline">Commercial roofing in Bushland: full guide</a></li>
              <li><a href="/commercial-roofing/" className="text-brand-brown hover:text-brand-gold underline">All commercial roofing services</a></li>
            </ul>
          </div>
        </aside>

        <RelatedArticles pageSlug="commercial-roofing-bushland" />
      </div>
    </>
  );
}
