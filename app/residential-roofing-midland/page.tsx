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
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Check, Fuel, Phone } from "lucide-react";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/residential-roofing-midland/" },
  title: "Residential Roofing Midland TX | 5 Star Roofing",
  description:
    "Expert residential roofing in Midland TX. Serving Grassland Estates, Saddle Club, and all Permian Basin neighborhoods. Call (806) 622-6041",
  openGraph: {
    title: "Residential Roofing Midland TX | 5 Star Roofing",
    description:
      "Expert residential roofing in Midland TX. Serving Grassland Estates, Saddle Club, and all Permian Basin neighborhoods. Call (806) 622-6041",
    url: "https://5starroofingpros.com/residential-roofing-midland/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/midland-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ResidentialRoofingMidlandPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/residential-roofing-midland/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/midland-hero.jpg",
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
            geo: {
              "@type": "GeoCoordinates",
              latitude: 35.1768,
              longitude: -101.859,
            },
            url: "https://5starroofingpros.com/residential-roofing-midland/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
              name: "Midland",
              containedInPlace: {
                "@type": "State",
                name: "Texas",
              },
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
              "Expert residential roofing services in Midland neighborhoods including Grassland Estates, Saddle Club, and energy executive communities. Specializing in premium Class 4 impact-resistant shingles for Permian Basin weather conditions.",
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
            serviceType: "Residential Roofing Services",
            name: "Residential Roofing in Midland",
            description:
              "Professional residential roofing services in Midland, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Midland",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Residential Roofing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Residential Roofing Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Residential Roofing Repair" },
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
                name: "How much does residential roof replacement cost in Midland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Costs typically range from $10,000-$35,000 for Midland homes, with Grassland Estates properties ($350K+ median) requiring $15,000-$25,000 for complete replacement. However, most Midland projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500). We maximize insurance coverage for oil industry executives and energy professionals.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Grassland Estates homes unique for roofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Grassland Estates features premium ranch-style homes from 2,100-5,000 sq ft with complex roof lines and high-end architectural details. These executive homes often have custom features requiring specialized installation techniques. We stock premium Class 4 materials in colors that complement the neighborhood's upscale character and HOA requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Why do Midland homes need superior roofing materials?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Midland County has recorded 144 trained spotter hail reports with 125 radar-detected hail occasions. The Permian Basin's geography creates intense weather patterns combining hail, wind, and extreme UV exposure. Class 4 impact-resistant shingles meet UL 2218 testing for 2-inch hail and qualify for Texas insurance premium discounts (form PC068, 10-30% range).",
                },
              },
              {
                "@type": "Question",
                name: "What building permits are required in Midland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All residential roofing projects require building permits from the City of Midland. Only licensed and bonded contractors registered with the city can obtain permits for homeowners. We handle all permit applications and city inspections at no extra charge, ensuring full code compliance.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with energy industry professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in serving Midland's energy industry community, from oil executives in Grassland Estates to petroleum engineers throughout the city. We understand the demands of energy professionals' schedules and offer flexible timing, premium materials, and expedited service for busy oil and gas families.",
                },
              },
              {
                "@type": "Question",
                name: "How do you handle HOA requirements in upscale neighborhoods?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We manage all architectural committee submissions for neighborhoods like Grassland Estates, Saddle Club, and other gated communities. We stock pre-approved premium shingles and understand each community's specific aesthetic requirements. Our process ensures seamless approval without project delays.",
                },
              },
              {
                "@type": "Question",
                name: "What financing options work best for Midland's higher home values?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For Midland's median home values ($350K+), HELOC options are often ideal given substantial equity positions. We also offer 0% financing through our lending partners. Many energy industry professionals prefer to leverage business relationships for preferred rates. We help evaluate the best approach for your financial situation.",
                },
              },
            ],
          }),
        }}
      />

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="midland"
        city="Midland"
        service="Residential Roofing"
        h1="Residential Roofing in Midland, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-2-1920w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Residential Roofing", url: "/residential-roofing/" },
          { name: "Midland", url: "/residential-roofing-midland/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Residential Roofing for homes and businesses in Midland, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Midland as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: every install is built for Panhandle hail, wind, and sun cycles, not generic conditions.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>



      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Does Midland's Premier Residential Roofing Experts Involve?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              In the heart of the Permian Basin oil fields, Midland represents Texas energy
              prosperity with some of the state's most valuable residential real estate. Home to
              petroleum executives and energy industry leaders, our city demands roofing solutions
              that match the quality of life oil country provides. With 144 documented hail reports
              and 125 radar-detected hail occasions, standard roofing materials simply cannot
              protect Midland's premium homes worth $350,000+.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We install premium Class 4
              impact-resistant shingles engineered for Permian Basin weather extremes. From
              executive estates in Grassland Estates to gated communities like Saddle Club, we serve
              every prestigious neighborhood in Midland County. We handle 100% of insurance claims
              paperwork, secure all City of Midland building permits, manage HOA architectural
              approvals, and deliver expert installation in 1-3 days. Most energy industry
              professionals pay only their insurance deductible when hail damage is
              covered—typically $1,000-$2,500 for complete roof replacement worth $15,000-$25,000 on
              Midland's high-value homes.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Are Midland's Most Prestigious Neighborhoods?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide expert residential roofing throughout Midland's most exclusive communities,
              where energy industry success has created Texas's premier residential districts:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border-l-4 border-gray-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Grassland Estates</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Median Home Price:</strong> $837,000
                  <br />
                  <strong>Home Size:</strong> 2,100-5,000 sq ft
                  <br />
                  <strong>Style:</strong> Premium Ranch Estates
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Midland's most sought-after neighborhood features luxury ranch-style homes with
                  complex roof lines, wide tree-lined streets, and expansive lots. These executive
                  properties often have custom architectural details requiring specialized
                  installation techniques. We've completed 150+ Grassland projects, maintaining the
                  community's prestigious character while providing maximum hail protection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border-l-4 border-gray-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Saddle Club Estates</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Location:</strong> North Midland
                  <br />
                  <strong>Type:</strong> Gated Community
                  <br />
                  <strong>Near:</strong> Country Clubs & Polo Club
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exclusive gated community among Midland's most prestigious addresses, close to
                  Midland Country Club and Polo Club. Spacious homes with quiet, sidewalk-lined
                  streets and stringent architectural standards. We manage all HOA approvals and
                  stock materials pre-approved by the architectural review committee.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border-l-4 border-gray-600">
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Petroleum Executive District
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Residents:</strong> Petroleum engineers and energy operators
                  <br />
                  <strong>Properties:</strong> Custom homes in central and west Midland
                  <br />
                  <strong>Features:</strong> Larger lots, custom architecture, HOA review boards
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Custom homes through central and west Midland often run larger square footage,
                  multiple roof planes, and architectural details like clay tile accents or
                  standing seam dormers that need careful flashing. Class 4 impact-rated shingles
                  and proper synthetic underlayment matter here because a hail event in Midland
                  County can otherwise total the roof in a single storm.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Energy Industry Families Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Oil Country Weather Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland County's 144 documented hail reports and 125 radar-detected hail occasions
                  create extreme roofing challenges. The Permian Basin's geography intensifies storm
                  systems, producing devastating hail that can destroy premium homes in minutes.
                  We've weathered every major storm serving the region, protecting energy executives'
                  investments while others suffered costly damage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Premium Materials & Installation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We exclusively install Class 4 impact-resistant shingles from premium
                  manufacturers, available in architectural styles that complement Midland's upscale
                  neighborhoods. These materials meet UL 2218 Class 4 impact testing and qualify for
                  substantial insurance premium discounts that typically offset the upgrade cost
                  within 5-7 years.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Energy Industry Scheduling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Midland County homeowners working in the energy sector tend to keep tight
                  travel and operations calendars. We plan around drilling rotation schedules,
                  permit timing, and HOA approval cycles. For most projects we can stage material
                  delivery to a side gate, work continuous days while the homeowner is on
                  rotation, and coordinate inspection appointments through email and text rather
                  than disrupting the workday.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Complete Luxury Service
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We handle all City of Midland building permits, HOA architectural submissions for
                  gated communities, insurance claim documentation, and code compliance. Licensed
                  and bonded contractors registered with the city manage every aspect, so busy
                  energy professionals can focus on their demanding careers while we protect their
                  homes.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              What Should You Know About Midland Building Requirements?
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold-vibrant">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All residential roofing projects in Midland require building permits and licensed
                contractor installation. We ensure your premium property meets all city standards
                and maintains insurance coverage validity.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    City of Midland Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Permits:</strong> Required for full reroofs and most major repairs
                    </li>
                    <li>
                      <strong>Contractors:</strong> Texas-licensed, bonded, and insured for the trade
                    </li>
                    <li>
                      <strong>Registration:</strong> Filed with the City of Midland Building Inspection office
                    </li>
                    <li>
                      <strong>Inspections:</strong> Mid-job and final inspections against the adopted IRC
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-3">Our Complete Service</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <strong>City of Midland permit</strong> pulled and paid by us
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Texas-licensed and bonded contractor on every job
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Registered with the Midland building inspection office
                    </li>
                    <li className="flex items-start gap-1">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      Mid-job and final inspections scheduled on your behalf
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic">
                We carry the licensing and general liability coverage required in Midland and
                maintain manufacturer certifications so the GAF, Owens Corning, or CertainTeed
                warranty stays valid on your finished roof.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-brand-brown">
              Why Permian Basin Weather Demands Superior Roofing?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Midland County sits at the epicenter of America's most productive oil fields, where
              geographic conditions that create energy wealth also generate extreme weather
              patterns. Your premium home faces unique environmental challenges:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-red-800 mb-3">Frequent Severe Hail</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>144 documented hail reports</strong> by trained weather spotters, with 125
                  radar-detected occasions. Permian Basin geography creates supercell corridors that
                  intensify hail formation, producing destructive storms that can total a premium
                  roof in minutes.
                </p>
                <p className="text-gray-600 text-sm">
                  Peak season: April-June. Standard shingles crack and granule strip away, leading
                  to expensive water damage in luxury homes. Class 4 protection is essential for
                  preserving home value.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-brand-gold-vibrant">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Oil Field Wind Patterns</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Sustained winds across open Permian Basin terrain</strong> work shingle
                  tabs and lap seams day after day. The flat ground around Midland gives the wind
                  almost nothing to break against, so a 30 mph daily wind plus a 60 mph gust front
                  loads a roof harder than a comparable home in Dallas would see.
                </p>
                <p className="text-gray-600 text-sm">
                  Fine dust from drilling operations and caliche roads abrades shingle granules
                  along the windward slope. Class 4 impact-rated asphalt shingles or 24-gauge
                  standing seam panels both hold up better than 3-tab shingles in this exposure.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl shadow-md border-t-4 border-amber-600">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Desert Sun & Heat</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>UV exposure on the Permian Basin</strong> runs harder than in the
                  Houston or Dallas markets thanks to elevation around 2,800 feet and mostly
                  cloudless summer skies. That UV breaks down the asphalt binder in standard
                  shingles. Pair that with summer highs over 100°F and winter overnight lows in
                  the 20s, and the freeze-and-bake cycle wears out lower-grade roofs early.
                </p>
                <p className="text-gray-600 text-sm">
                  Cool-roof rated architectural shingles or light-color standing seam panels
                  reflect a larger share of the sun, and a balanced ridge-and-soffit ventilation
                  system pulls the heat out of the attic before it cooks the decking.
                </p>
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
                  How much does residential roof replacement cost in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Costs typically range from $10,000-$35,000 for Midland homes, with Grassland
                  Estates properties ($350K+ median) requiring $15,000-$25,000 for complete
                  replacement. However, most Midland projects are insurance-covered hail damage
                  claims where homeowners pay only their deductible ($1,000-$2,500). We maximize
                  insurance coverage for oil industry executives and energy professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What makes Grassland Estates homes unique for roofing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Grassland Estates features premium ranch-style homes from 2,100-5,000 sq ft with
                  complex roof lines and high-end architectural details. These executive homes often
                  have custom features requiring specialized installation techniques. We stock
                  premium Class 4 materials in colors that complement the neighborhood's upscale
                  character and HOA requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Why do Midland homes need superior roofing materials?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland County has recorded 144 trained spotter hail reports with 125
                  radar-detected hail occasions. The Permian Basin's geography creates intense
                  weather patterns combining hail, wind, and extreme UV exposure. Class 4 impact-resistant shingles meet UL 2218 testing for 2-inch hail and qualify for Texas insurance premium discounts (form PC068, 10-30% range).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What building permits are required in Midland?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All residential roofing projects require building permits from the City of
                  Midland. Only licensed and bonded contractors registered with the city can obtain
                  permits for homeowners. We handle all permit applications and city inspections at
                  no extra charge, ensuring full code compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you work with energy industry professionals?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we specialize in serving Midland's energy industry community, from oil
                  executives in Grassland Estates to petroleum engineers throughout the city. We
                  understand the demands of energy professionals' schedules and offer flexible
                  timing, premium materials, and expedited service for busy oil and gas families.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle HOA requirements in upscale neighborhoods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We manage all architectural committee submissions for neighborhoods like Grassland
                  Estates, Saddle Club, and other gated communities. We stock pre-approved premium
                  shingles and understand each community's specific aesthetic requirements. Our
                  process ensures seamless approval without project delays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What financing options work best for Midland's higher home values?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  For Midland's median home values ($350K+), HELOC options are often ideal given
                  substantial equity positions. We also offer 0% financing through our lending
                  partners. Many energy industry professionals prefer to leverage business
                  relationships for preferred rates. We help evaluate the best approach for your
                  financial situation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-brown">
              Serving All of Midland County
            </h2>
            <div className="flex justify-center">
              <MapEmbed unwrapped widthAttr="100%" heightAttr="100%" city="Midland, TX" />
            </div>
            <p className="text-center text-gray-600 mt-4">
              Based in Amarillo, proudly serving Midland's energy industry communities
            </p>
          </section>
        </FadeIn>

        <InternalLinks currentCity="midland" currentService="residential-roofing" />

        <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Midland Investment?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for all Midland neighborhoods—from Grassland Estates to Saddle Club.
            Premium Class 4 roofing for energy industry executives. Most hail damage covered by
            insurance—you pay only your deductible.
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
        <RelatedArticles pageSlug="residential-roofing-midland" />
      </div>
    </>
  );
}
