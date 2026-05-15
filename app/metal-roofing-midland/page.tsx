import { FadeIn } from "@/components/FadeIn";
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
import {
  Check,
  Factory,
  FlaskConical,
  Fuel,
  Gem,
  Mountain,
  Phone,
  Snowflake,
  Star,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/metal-roofing-midland/" },
  title: "Metal Roofing Midland TX | 5 Star Roofing",
  description:
    "Professional metal roofing in Midland TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Metal Roofing Midland TX | 5 Star Roofing",
    description:
      "Professional metal roofing in Midland TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/metal-roofing-midland/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-metal-roof.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MetalRoofingMidlandPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/metal-roofing-midland/#localbusiness",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-memphis-44-1280w.jpg",
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
            url: "https://5starroofingpros.com/metal-roofing-midland/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Midland,_Texas",
              name: "Midland",
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
              "Professional metal roofing in Midland TX. Expert installation, warranties, and insurance assistance.",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Metal Roofing Installation",
            name: "Metal Roofing in Midland",
            description:
              "Professional metal roofing services in Midland, Texas. Expert installation, repair, and maintenance.",
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
              name: "Metal Roofing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Metal Roofing Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Metal Roofing Repair" },
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
                name: "How long does metal roofing last in Midland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Metal roofing lasts 50+ years in Texas climate. Standing seam systems with proper installation can last 70 years with minimal maintenance.",
                },
              },
              {
                "@type": "Question",
                name: "Is metal roofing noisy during rain and hail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Proper insulation and underlayment make metal roofs as quiet as asphalt shingles. Modern installations are acoustically dampened.",
                },
              },
              {
                "@type": "Question",
                name: "Does metal roofing increase home value?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Metal roofs offer strong long-term value, excellent curb appeal, and energy efficiency, and appeal to buyers seeking low-maintenance, durable roofing.",
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
        service="Metal Roofing"
        h1="Metal Roofing in Midland, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/metal/metal-memphis-44-1280w.jpg"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Metal Roofing", url: "/metal-roofing/" },
          { name: "Midland", url: "/metal-roofing-midland/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Metal Roofing for homes and businesses in Midland, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Midland as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Materials and systems: standing seam metal, TPO, and PVC membranes engineered for the West Texas climate.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Next step: free inspections available. Call (806) 622-6041 to schedule, or use the contact form on this page.</span></li>
            </ul>
          </div>
        </section>
      </FadeIn>


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
            <h2 className="text-4xl font-bold mb-6 text-brand-brown">
              What Makes Our Midland Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional metal roofing throughout Midland and surrounding areas. We understand
              Texas weather challenges and install roofing systems engineered for extreme conditions
              including hail, high winds, and temperature swings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've served Midland with expert installations, comprehensive warranties,
              and outstanding customer service. We handle all permits, insurance claims, and
              warranty documentation. Free inspections and estimates available.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-brown">
                  Engineered for Permian Basin Conditions?
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Midland's position in the heart of the Permian Basin creates unique roofing
                  challenges. Between desert winds, industrial emissions, sandstorms, and extreme
                  heat, roofing materials face conditions found nowhere else in Texas.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our metal roofing systems are specifically designed for West Texas conditions. We
                  use enhanced corrosion protection, superior fastening systems, and advanced
                  coatings that resist the environmental stresses unique to oil country and the
                  Chihuahuan Desert region.
                </p>
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <h3 className="text-xl font-bold text-brand-brown mb-3">
                    Permian Basin Durability Features:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-orange-600 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      AZ55 galvalume substrate resists Permian Basin H2S exposure
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-600 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      PVDF (Kynar 500) topcoats for sand and dust abrasion
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-600 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      ENERGY STAR cool-roof colors for Chihuahuan Desert heat
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-600 mr-2">
                        <Check className="w-5 h-5 text-brand-gold inline-block" />
                      </span>{" "}
                      UL 580 wind-uplift fastening for sustained West Texas gusts
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown">Specialized Systems</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h4 className="font-bold text-brand-brown">Desert-Grade Galvalume</h4>
                    <p className="text-gray-600">
                      Premium AZ55 galvalume coating with enhanced aluminum content for superior
                      corrosion resistance in arid environments.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h4 className="font-bold text-brand-brown">Industrial Coatings</h4>
                    <p className="text-gray-600">
                      PVDF and fluoropolymer finishes that resist chemical exposure and maintain
                      appearance in harsh industrial conditions.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h4 className="font-bold text-brand-brown">Reinforced Panels</h4>
                    <p className="text-gray-600">
                      22-gauge minimum thickness with enhanced rib profiles for structural integrity
                      and wind resistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-orange-50 to-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Desert Wind & Sandstorm Protection?
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 text-center">
                Midland's desert location means constant wind exposure and frequent sandstorms. Our
                metal roofing systems are engineered to withstand these abrasive conditions while
                maintaining structural integrity.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    65
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">mph Average Wind</h3>
                  <p className="text-gray-600">Constant exposure rating</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    120
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">mph Storm Rating</h3>
                  <p className="text-gray-600">Severe weather protection</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    50+
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Sandstorm Days</h3>
                  <p className="text-gray-600">Annual exposure events</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    300+
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2">Sunny Days</h3>
                  <p className="text-gray-600">Intense UV exposure</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    Sandstorm Resistance Features
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Smooth Kynar 500 finishes that shed Permian Basin sand</li>
                    <li>• Concealed standing seam panel connections, mechanically locked</li>
                    <li>• PVDF abrasion-resistant topcoat formulations</li>
                    <li>• High-temp ice-and-water underlayment beneath panels</li>
                    <li>• Reinforced eave, rake, and ridge flashing details</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown">
                    Wind Uplift Engineering
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Continuous structural clip attachment to purlins</li>
                    <li>• Tighter fastener spacing at perimeter and corner zones</li>
                    <li>• Mechanically seamed standing seam panels at 24" widths</li>
                    <li>• UL 580 Class 90 wind-uplift rated assemblies</li>
                    <li>• FM Global approved clips, fasteners, and panel profiles</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Industrial Environment Considerations?
            </h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Midland's oil and gas industry creates unique environmental challenges for roofing
                materials. Our metal systems are engineered to resist industrial emissions and
                maintain performance in these demanding conditions.
              </p>
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">
                    <FlaskConical className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Chemical Resistance</h3>
                  <p className="mb-4">
                    Permian Basin processing plants and pump stations vent hydrocarbons and
                    sulfur compounds that attack standard paint finishes.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• PVDF (Kynar 500) topcoats resist hydrocarbon vapors</li>
                    <li>• AZ55 galvalume substrate for sulfide exposure areas</li>
                    <li>• Non-porous fluoropolymer surface finish</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">
                    <Factory className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Dust & Particulates</h3>
                  <p className="mb-4">
                    Oilfield traffic on Highway 158 and FM 1788 kicks fine caliche dust onto
                    Midland rooftops year-round, where it sticks in seams and around vents.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Smooth PVDF surface that sheds dust with rainfall</li>
                    <li>• Concealed-fastener profiles prevent seam buildup</li>
                    <li>• Standing seam design rinses clean during gully washers</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-center">
                    <Thermometer className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Extreme Heat</h3>
                  <p className="mb-4">
                    Midland summers push surface temperatures past 160°F on dark roofs.
                    Metal expands and contracts daily, and the system has to absorb that
                    movement without splitting seams.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• ENERGY STAR cool-roof finishes with high SRI values</li>
                    <li>• Floating clip system for panel thermal expansion</li>
                    <li>• Stainless-steel fasteners rated for high-temp service</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-brown text-center">
                  Permian Basin Performance Data
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600 mb-1">118°F</div>
                    <p className="text-sm text-gray-600">Peak Summer Temperature</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-gold-vibrant mb-1">8°F</div>
                    <p className="text-sm text-gray-600">Winter Low Record</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">14"</div>
                    <p className="text-sm text-gray-600">Annual Rainfall</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-gold-vibrant mb-1">3,200</div>
                    <p className="text-sm text-gray-600">Elevation (feet)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              How Does This Roofing Improve Energy Efficiency?
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Midland's desert climate means extreme cooling costs and intense solar exposure. Our
                metal roofing systems maximize energy efficiency to combat these challenges.
              </p>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Cool Roof Technology</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Solar Reflectance</h4>
                        <p className="text-gray-600">
                          Light-colored metal roofing reflects 60- of solar radiation, crucial in
                          Midland's desert environment.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Thermal Emittance</h4>
                        <p className="text-gray-600">
                          Metal surfaces quickly release absorbed heat, preventing buildup that
                          plagues asphalt shingles.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-brown">Ventilation Design</h4>
                        <p className="text-gray-600">
                          Strategic ventilation systems prevent heat buildup and reduce HVAC loads
                          significantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-brand-brown text-center">
                    Midland Energy Savings
                  </h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2"></div>
                      <p className="text-gray-700">Cooling Cost Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">40°F</div>
                      <p className="text-gray-700">Surface Temperature Difference</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">+</div>
                      <p className="text-gray-700">Annual Savings Potential</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Note:</strong> Based on Midland climate data, average home size, and
                      current Oncor electric rates. Savings increase with larger homes and higher
                      energy usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Why Does Midland Properties Need Metal Roofing?
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Mountain className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Desert Durability
                  </h3>
                  <p className="text-gray-700">
                    The Permian Basin sits in the northern Chihuahuan Desert with around 14
                    inches of annual rainfall. Standing seam metal with PVDF finish handles
                    intense UV, blowing sand, and dramatic day-night temperature swings
                    better than asphalt shingles in this climate.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Fuel className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Industrial Resistance
                  </h3>
                  <p className="text-gray-700">
                    Homes and offices downwind of Permian Basin pump stations see hydrocarbon
                    and sulfur exposure in the air. AZ55 galvalume with Kynar 500 finish
                    holds color and resists corrosion where standard galvanized metal would
                    chalk within a few years.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Wind className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Wind Performance
                  </h3>
                  <p className="text-gray-700">
                    Sustained Permian Basin winds and squall-line gusts hammer Midland roofs.
                    We install standing seam panels with UL 580 Class 90 rated clip spacing
                    and 120 mph design wind speeds, with tighter fastening at corner and
                    perimeter zones.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Sun className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    UV Protection
                  </h3>
                  <p className="text-gray-700">
                    Midland sits near 2,800 feet of elevation with more than 280 sunny days a
                    year, which intensifies UV exposure on roofs. PVDF (Kynar 500) finishes
                    carry 30 to 35 year color and chalk warranties from manufacturers like
                    Sherwin-Williams and Valspar.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Snowflake className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Temperature Extremes
                  </h3>
                  <p className="text-gray-700">
                    From below freezing to over 115°F, Midland tests materials severely. Metal
                    roofing handles thermal cycling without cracking or deterioration.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4 text-center">
                    <Gem className="w-6 h-6 inline-block" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-brown text-center">
                    Low Maintenance
                  </h3>
                  <p className="text-gray-700">
                    A standing seam metal roof on a Midland home typically needs only an
                    annual visual check and gutter clearing. There are no shingles to lose in
                    a Permian Basin windstorm and no granule loss to track over a 40 to 50
                    year service life.
                  </p>
                </div>
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
                  How does metal roofing perform in Midland's desert climate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Metal roofing excels in Midland's harsh desert conditions. Our systems handle
                  extreme temperature swings (8°F to 118°F), constant wind exposure, sandstorms, and
                  industrial environments. Premium coatings resist UV damage, chemical exposure, and
                  abrasion, lasting 50-70 years with minimal maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What about corrosion resistance in the oil field environment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our metal roofing uses enhanced galvalume coatings and PVDF finishes specifically
                  designed for industrial environments. These systems resist chemical emissions,
                  acid rain, and corrosive pollutants common in the Permian Basin. We offer extended
                  warranties for industrial applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How much energy can I save in Midland's extreme heat?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Midland homeowners typically save 25-35% on cooling costs with reflective metal
                  roofing. The desert climate makes this especially valuable - surface temperatures
                  can be 40°F cooler than dark asphalt. Annual savings often exceed  with
                  higher savings for larger homes or those with poor insulation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Can metal roofing withstand Midland's sandstorms?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our metal roofing systems are engineered for frequent sandstorm exposure.
                  Smooth surface finishes shed sand and debris, while abrasion-resistant coatings
                  maintain appearance and protection. Sealed panel systems prevent infiltration of
                  dust and particulates that can damage other roofing types.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What wind ratings do your systems achieve?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our standing seam installations achieve 120+ mph wind ratings, exceeding Midland
                  building code requirements. Enhanced fastening patterns and structural connections
                  accommodate constant desert winds and severe storm events. Factory Mutual
                  certification ensures performance meets commercial standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How do you handle thermal expansion in extreme temperatures?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We use floating clip systems and thermal expansion joints to accommodate Midland's
                  100°F+ temperature swings. Panels can move naturally without stress, preventing
                  buckling or fastener failure. Proper installation techniques are critical for
                  long-term performance in extreme climates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What maintenance is required in dusty conditions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Metal roofing requires minimal maintenance in Midland's dusty environment.
                  Occasional power washing removes accumulated dust, and smooth surfaces naturally
                  shed debris. No granules to lose, shingles to replace, or frequent repairs needed.
                  Most maintenance involves keeping gutters clear and annual inspections.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Do you offer specialized systems for industrial properties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, we provide commercial-grade systems for industrial facilities including
                  enhanced corrosion protection, specialized fastening for equipment loads, and
                  chemical-resistant coatings. Our experience with oil and gas facilities ensures
                  proper design for Permian Basin industrial requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-orange-600 text-white p-12 rounded-3xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                How Does the Midland Installation Process Work?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Desert Assessment</h3>
                  <p className="text-sm opacity-90">
                    Evaluation of wind exposure, UV intensity, and environmental factors
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Custom Engineering</h3>
                  <p className="text-sm opacity-90">
                    Thermal movement calculations and corrosion protection selection
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Expert Installation</h3>
                  <p className="text-sm opacity-90">
                    Specialized techniques for extreme climate conditions
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Performance Verification</h3>
                  <p className="text-sm opacity-90">
                    Quality control and long-term warranty activation
                  </p>
                </div>
              </div>
            </div>
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
        <InternalLinks currentCity="midland" currentService="metal-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Midland Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Midland property owners. Expert metal roofing with comprehensive
            warranties and insurance assistance.
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
        <RelatedArticles pageSlug="metal-roofing-midland" />
      </div>
    </>
  );
}
