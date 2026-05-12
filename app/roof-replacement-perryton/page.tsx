import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

import { StickyContactBar } from "@/components/StickyContactBar";
import { Check, Phone, Star } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "https://5starroofingpros.com/roof-replacement-perryton/" },
  title: "Roof Replacement Perryton TX | 5 Star Roofing",
  description:
    "Professional roof replacement in Perryton TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Roof Replacement Perryton TX | 5 Star Roofing",
    description:
      "Professional roof replacement in Perryton TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/roof-replacement-perryton/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/perryton-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RoofReplacementPerrytonPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/roof-replacement-perryton/#localbusiness",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/perryton-hero.jpg",
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
            url: "https://5starroofingpros.com/roof-replacement-perryton/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Perryton,_Texas",
              name: "Perryton",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            description:
              "Professional roof replacement in Perryton TX. Expert installation, warranties, and insurance assistance.",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Roof Replacement Services",
            name: "Roof Replacement in Perryton",
            description:
              "Professional roof replacement services in Perryton, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Perryton",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Roof Replacement Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Roof Replacement Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Roof Replacement Repair" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Free Roof Inspection" },
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
                name: "When should I replace my Perryton roof?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 20 years, multiple leaks, extensive granule loss, or failed repairs.",
                },
              },
              {
                "@type": "Question",
                name: "What roofing materials work best in North Texas Panhandle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Class 4 impact-resistant shingles, metal roofing, and TPO handle Perryton's severe hail, high winds, and temperature extremes best.",
                },
              },
              {
                "@type": "Question",
                name: "How does agricultural dust affect roofing in Perryton?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Grain dust and agricultural particulates can accelerate roof wear. Regular cleaning and maintenance help extend roof life in farming communities.",
                },
              },
              {
                "@type": "Question",
                name: "Will a new roof increase my home value in Perryton?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. New roofs provide 60-70% ROI and are especially valuable in Perryton's stable agricultural economy. Class 4 roofs add premium value.",
                },
              },
            ],
          }),
        }}
      />

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="perryton"
        city="Perryton"
        service="Roof Replacement"
        h1="Roof Replacement in Perryton, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/perryton-hero.jpg"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Roof Replacement", url: "/roof-replacement/" },
          { name: "Perryton", url: "/roof-replacement-perryton/" },
        ]}
    />

      <FadeIn>
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Fast</div>
                <div className="text-brand-brown font-semibold text-lg">Response Time</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">Class 4</div>
                <div className="text-brand-brown font-semibold text-lg">Hail-Rated</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-brand-gold mb-3">1-3</div>
                <div className="text-brand-brown font-semibold text-lg">Days to Complete</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3">
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    ))}
                  </span>
                </div>
                <div className="text-brand-brown font-semibold text-lg">5-Star Rated</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Makes Perryton a Top Choice for Roof Repair?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Known as the "Wheatheart of the Nation," Perryton presents unique roofing challenges
              that require agricultural and weather expertise. This Ochiltree County seat sits in
              the heart of America's most productive wheat region, where extreme Panhandle weather
              meets intensive farming operations. Our team understands Perryton's specific
              environmental factors and provides roof replacement services engineered for both
              severe weather and agricultural conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Agricultural Community Challenges
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li>
                    • <strong>Grain Dust Exposure:</strong> Fine wheat dust accelerates roof wear
                  </li>
                  <li>
                    • <strong>Fertilizer & Chemical Spray:</strong> Agricultural chemicals affect
                    roof coatings
                  </li>
                  <li>
                    • <strong>Severe Hail Events:</strong> Prime location in "Hail Alley"
                  </li>
                  <li>
                    • <strong>High Wind Exposure:</strong> Open farmland offers no wind protection
                  </li>
                  <li>
                    • <strong>Equipment Vibration:</strong> Heavy machinery causes structural stress
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">
                  Our Agricultural Expertise
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li>
                    • <strong>Chemical-Resistant Materials:</strong> Coatings designed for
                    agricultural exposure
                  </li>
                  <li>
                    • <strong>Enhanced Ventilation:</strong> Prevents moisture from grain dust
                    accumulation
                  </li>
                  <li>
                    • <strong>Reinforced Systems:</strong> Extra support for equipment vibration
                  </li>
                  <li>
                    • <strong>Quick Installation:</strong> Minimal disruption during
                    planting/harvest
                  </li>
                  <li>
                    • <strong>Ochiltree County Knowledge:</strong> Local code and permit expertise
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              We've served Perryton's farming families, agribusiness operations, and
              community members with expert installations, comprehensive warranties, and outstanding
              customer service. We understand the critical timing of agricultural seasons and work
              efficiently to protect your investment without disrupting operations.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Specialized Roofing for Agricultural Operations?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Grain Storage Facilities
                </h3>
                <p className="text-gray-700 mb-4">
                  Protecting your harvest investment with specialized systems:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Metal roofing for maximum durability</li>
                  <li>• Moisture barrier systems</li>
                  <li>• Structural reinforcement options</li>
                  <li>• Ventilation for grain preservation</li>
                  <li>• Fast installation during off-season</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Farm Residential Properties
                </h3>
                <p className="text-gray-700 mb-4">
                  Home protection engineered for rural conditions:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Class 4 hail-resistant shingles</li>
                  <li>• Enhanced wind uplift protection</li>
                  <li>• Dust and chemical-resistant coatings</li>
                  <li>• Energy-efficient insulation packages</li>
                  <li>• Agricultural building matching</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agribusiness Buildings</h3>
                <p className="text-gray-700 mb-4">
                  Commercial solutions for agricultural businesses:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• TPO and EPDM membrane systems</li>
                  <li>• Chemical-resistant coatings</li>
                  <li>• Large-span structural support</li>
                  <li>• Loading dock protection</li>
                  <li>• Equipment access considerations</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-amber-50 to-yellow-50 p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Serving Greater Perryton Area
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our roof replacement services extend throughout Ochiltree County and the surrounding
              agricultural communities. We're familiar with local building codes, agricultural
              zoning requirements, and the specific challenges faced by rural property owners.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">
                  Primary Service Communities:
                </h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>• Perryton</div>
                  <div>• Booker</div>
                  <div>• Farnsworth</div>
                  <div>• Waka</div>
                  <div>• Huntoon</div>
                  <div>• Wolf Creek</div>
                  <div>• Ochiltree County</div>
                  <div>• Lipscomb County</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-brown">Agricultural Expertise</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Understanding of farming cycles and timing</li>
                  <li>• Experience with grain elevator operations</li>
                  <li>• Knowledge of agricultural building codes</li>
                  <li>• Relationships with local feed/seed suppliers</li>
                  <li>• Flexible scheduling around harvest seasons</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Perryton Weather & Your Roof
            </h2>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Perryton sits in the convergence zone where Gulf moisture meets Canadian cold
                fronts, creating some of North America's most severe weather. Our roofing systems
                are built to handle it all.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Storm Season (March-June)</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Baseball to softball-sized hail</li>
                    <li>• F4/F5 tornado corridor</li>
                    <li>• 80-120 mph straight-line winds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-800">Year-Round Extremes</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Temperature swings from -20°F to 105°F+</li>
                    <li>• 20+ mph average wind speeds</li>
                    <li>• Ice storms and dust storms</li>
                  </ul>
                </div>
              </div>
              <p className="text-red-700 leading-relaxed mt-6">
                Our systems feature UL 2218 Class 4 impact resistance, ASTM D3161 Class F wind
                ratings, and coatings designed for agricultural environments.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              The Perryton Agricultural Roofing Process
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-brown">
                  Farm-Friendly Installation
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">
                        Agricultural Impact Assessment
                      </h4>
                      <p className="text-gray-600">
                        Evaluate storm damage while considering dust, chemical, and
                        equipment-related wear patterns.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">
                        Seasonal Timing Coordination
                      </h4>
                      <p className="text-gray-600">
                        Schedule around planting and harvest seasons to minimize disruption to
                        farming operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">
                        Rural Permit & Code Compliance
                      </h4>
                      <p className="text-gray-600">
                        Navigate Ochiltree County requirements and agricultural building
                        considerations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">
                        Weather-Window Installation
                      </h4>
                      <p className="text-gray-600">
                        Efficient installation using agricultural-grade materials during optimal
                        weather conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-brown mb-2">
                        Agricultural Site Restoration
                      </h4>
                      <p className="text-gray-600">
                        Complete cleanup respecting farm property and agricultural operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-brown text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Why Perryton Farmers Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>Agricultural community understanding</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>Flexible seasonal scheduling</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>Chemical-resistant materials</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>Extreme weather protection</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>Licensed and insured in Texas</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>post-storm documentation</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-brand-gold-light">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>Ochiltree County expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              Supporting Perryton's Agricultural Economy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
                <h3 className="text-2xl font-bold mb-4 text-yellow-800">
                  Wheat & Grain Operations
                </h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Grain elevator maintenance and repairs</li>
                  <li>• Storage facility weatherization</li>
                  <li>• Equipment shed roof replacements</li>
                  <li>• Prompt harvest-season repairs</li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Cattle Ranch & Community</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Barn, stable, and feed storage roofing</li>
                  <li>• Ranch home weatherization</li>
                  <li>• Schools, healthcare, and public buildings</li>
                  <li>• Agricultural supply businesses</li>
                </ul>
              </div>
            </div>
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
                  When should I replace my Perryton roof?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Replace for widespread hail damage (10+ impacts per 100 sq ft), age over 15-20
                  years in severe weather zones, multiple leaks, extensive granule loss, chemical
                  deterioration from agricultural exposure, or when maintenance costs exceed 25% of
                  replacement value.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What roofing materials work best in North Texas Panhandle?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Class 4 impact-resistant shingles, standing seam metal roofing, and TPO membrane
                  systems are ideal for Perryton's severe hail, high winds, and temperature
                  extremes. Agricultural properties benefit from chemical-resistant coatings and
                  enhanced ventilation systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How does agricultural dust affect roofing in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Grain dust and agricultural particulates can accelerate roof wear by abrading
                  surfaces and clogging drainage systems. Regular cleaning, proper ventilation, and
                  dust-resistant coatings help extend roof life. We recommend semi-annual
                  inspections for properties near grain operations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can you work around farming schedules?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. We understand the critical nature of planting and harvest seasons. We
                  schedule installations during agricultural downtime and can provide storm repairs
                  during busy farming periods. Our team coordinates with your operation schedule to
                  minimize disruption.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will a new roof increase my home value in Perryton?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. New roofs provide 60-70% ROI and are especially valuable in Perryton's stable
                  agricultural economy. Class 4 impact-resistant roofs add premium value with
                  insurance discounts, reduced maintenance, and enhanced storm protection crucial
                  for this severe weather area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle storm damage on Perryton properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We schedule storm-damage documentation and inspections across Ochiltree County
                  once conditions are safe for crews to be on a roof. We are not an
                  emergency-dispatch service — our value is thorough documentation, insurance-claim
                  follow-through, and Class 4 impact-resistant restoration that holds up through
                  future Panhandle storm seasons.
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78185.92551807764!2d-101.86983241996795!3d35.17090106883206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015bd4a4880b03%3A0x9e1766fda6243b2b!2s5%20FIVE%20STAR%20Residential%20and%20Commercial%20Roofing!5e0!3m2!1sen!2sus!4v1768070164878!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </section>
        </FadeIn>
        <InternalLinks currentCity="perryton" currentService="roof-replacement" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Perryton Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Perryton and Ochiltree County agricultural and residential
            properties. Expert roof replacement engineered for North Panhandle weather extremes and
            agricultural conditions. Comprehensive warranties and specialized insurance assistance.
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
              Schedule Free Inspection
            </a>
          </div>
        </section>
        <RelatedArticles pageSlug="roof-replacement-perryton" />
      </div>
    </>
  );
}
