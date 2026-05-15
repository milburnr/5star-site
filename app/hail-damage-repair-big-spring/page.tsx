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
import { Check, Phone, Search, Shield, Star, Zap } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/hail-damage-repair-big-spring/" },
  title: "Hail Damage Repair Big Spring TX | 5 Star Roofing",
  description:
    "Professional hail damage repair in Big Spring TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
  openGraph: {
    title: "Hail Damage Repair Big Spring TX | 5 Star Roofing",
    description:
      "Professional hail damage repair in Big Spring TX. Expert installation, repair & insurance assistance. Free inspections. Call (806) 622-6041",
    url: "https://5starroofingpros.com/hail-damage-repair-big-spring/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-hail-damage.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HailDamageRepairBigSpringPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/hail-damage-repair-big-spring/#localbusiness",
            name: "5 Star Roofing",
            parentOrganization: { "@id": "https://5starroofingpros.com/#organization" },
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-amarillo-16-1280w.webp",
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
            url: "https://5starroofingpros.com/hail-damage-repair-big-spring/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Big_Spring,_Texas",
              name: "Big Spring",
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
              "Professional hail damage repair in Big Spring TX. Expert installation, warranties, and insurance assistance.",
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
            name: "Hail Damage Repair in Big Spring",
            description:
              "Professional hail damage repair services in Big Spring, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Big Spring",
              containedInPlace: { "@type": "State", name: "Texas" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Hail Damage Repair Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Hail Damage Repair Installation" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Hail Damage Roof Repair" },
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

      {/* schema-cleanup:faqpage:removed */}

            <InteriorHeroSection
        heroVariant="service-location"
        citySlug="midland"
        city="Big Spring"
        service="Hail Damage Repair"
        h1="Hail Damage Repair in Big Spring, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-san-angelo-28-1280w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Hail Damage Repair", url: "/hail-damage-repair/" },
          { name: "Big Spring", url: "/hail-damage-repair-big-spring/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Hail Damage Repair for homes and businesses in Big Spring, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Big Spring as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Materials and systems: UL 2218 Class 4 hail-rated options on every replacement, plus full insurance documentation support.</span></li>
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
              What Does Big Spring's Hail Damage Repair Specialists Look Like?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Professional hail damage repair throughout Big Spring and surrounding areas. We
              understand Texas weather challenges and install roofing systems engineered for extreme
              conditions including hail, high winds, and temperature swings.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've served Big Spring with expert installations, comprehensive
              warranties, and outstanding customer service. We handle all permits, insurance claims,
              and warranty documentation. Free inspections and estimates available.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-r from-red-50 to-orange-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              What Are Big Spring's High-Risk Hail Environment?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Howard County Storm Activity
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Big Spring sits in one of Texas's most active severe weather corridors, with
                  Howard County experiencing extreme hail events that regularly produce significant
                  property damage. The city's location at the intersection of multiple air masses
                  creates ideal conditions for supercell thunderstorm development.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Recent data shows the Big Spring area has experienced 75 confirmed ground-truth
                  hail reports and been under severe weather warnings 51 times in just 12 months,
                  with Doppler radar detecting hail at or near the city on over 100 occasions during
                  the same period.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                  <h4 className="font-semibold text-brand-brown mb-2">
                    Big Spring Hail Statistics
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • <strong>75 confirmed hail reports</strong> in past 12 months
                    </li>
                    <li>
                      • <strong>51 severe weather warnings</strong> issued for Howard County
                    </li>
                    <li>
                      • <strong>100+ radar detections</strong> of hail-producing storms
                    </li>
                    <li>
                      • <strong>Peak activity:</strong> Late May through mid-June
                    </li>
                    <li>
                      • <strong>Largest recorded:</strong> Tea cup size (3+ inches diameter)
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Recent Devastating Storm Events
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-brand-brown">June 2025 Microburst Event</h4>
                    <p className="text-gray-700 text-sm">
                      Destructive winds up to 119 mph combined with baseball-sized hail devastated
                      portions of Big Spring. The storm shattered windows, downed power lines, and
                      caused extensive roof and vehicle damage throughout the city.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <h4 className="font-semibold text-brand-brown">May 2025 Tea Cup Hail</h4>
                    <p className="text-gray-700 text-sm">
                      A supercell thunderstorm produced hail stones reaching 3+ inches in diameter
                      (tea cup size), causing catastrophic damage to roofs, vehicles, and outdoor
                      equipment across southeastern Howard County.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                    <h4 className="font-semibold text-brand-brown">Mayor's Disaster Declaration</h4>
                    <p className="text-gray-700 text-sm">
                      Recent severe storms prompted Mayor Shannon Thomason to declare a local
                      disaster, with city buildings including the historic auditorium and airpark
                      suffering significant hail and wind damage.
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>post-storm documentation:</strong> The City of Big Spring established special
                    debris collection sites for vegetation, fencing, roofing, and building materials
                    damaged by severe hailstorms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">
              What Does Specialized Hail Damage Detection Look Like?
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-gold">
                <div className="text-4xl mb-4">
                  <Search className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Advanced Assessment Technology
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>
                    • <strong>Thermal Imaging:</strong> FLIR technology to detect hidden moisture
                    intrusion
                  </li>
                  <li>
                    • <strong>Drone Inspections:</strong> High-resolution aerial damage assessment
                  </li>
                  <li>
                    • <strong>Impact Measurement:</strong> Precise documentation of hail strike
                    patterns
                  </li>
                  <li>
                    • <strong>Moisture Meters:</strong> Detection of water penetration in critical
                    areas
                  </li>
                  <li>
                    • <strong>Digital Documentation:</strong> GPS-tagged photos for insurance claims
                  </li>
                  <li>
                    • <strong>Granule Collection:</strong> Physical evidence sampling for adjusters
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-400">
                <div className="text-4xl mb-4">
                  <Zap className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Post-Storm Documentation Protocol
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>
                    • <strong>Priority Triage:</strong> Active leaks and structural concerns first
                  </li>
                  <li>
                    • <strong>Temporary Protection:</strong> Professional weatherproof sheeting
                    services
                  </li>
                  <li>
                    • <strong>Contents Safeguarding:</strong> Interior protection from additional
                    damage
                  </li>
                  <li>
                    • <strong>Utility Safety:</strong> Electrical and gas line inspection protocols
                  </li>
                  <li>
                    • <strong>Communication Hub:</strong> Regular updates to property owners
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-gold">
                <div className="text-4xl mb-4">
                  <Shield className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Big Spring Climate Solutions
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>
                    • <strong>Wind Resistance:</strong> Enhanced fastening for 119+ mph winds
                  </li>
                  <li>
                    • <strong>Hail Guards:</strong> Protective screening for HVAC and equipment
                  </li>
                  <li>
                    • <strong>Impact-Resistant Materials:</strong> UL 2218 Class 4 rated systems
                  </li>
                  <li>
                    • <strong>Reinforced Flashing:</strong> Heavy-gauge metals for critical
                    junctions
                  </li>
                  <li>
                    • <strong>Synthetic Underlayment:</strong> Superior tear and puncture resistance
                  </li>
                  <li>
                    • <strong>Ventilation Optimization:</strong> Storm-resistant ridge and soffit
                    vents
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-amber-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">
              How Does the Post-Storm Recovery Process Work?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  First 24 Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Contact Response</h4>
                      <p className="text-gray-600 text-sm">
                        hotline activation with storm tracking and rapid deployment protocols
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Safety Assessment</h4>
                      <p className="text-gray-600 text-sm">
                        Structural integrity evaluation and immediate hazard identification
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Storm Mitigation</h4>
                      <p className="text-gray-600 text-sm">
                        Professional weatherproof sheeting, securing damaged areas, and water extraction services
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-brand-brown mb-2">
                    Insurance Claim Initiation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We help property owners contact their insurance carriers immediately and begin
                    the documentation process while storm details are fresh and adjuster
                    availability is optimal.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Recovery Phase (1-30 Days)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-brand-brown rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Comprehensive Damage Assessment</h4>
                      <p className="text-gray-600 text-sm">
                        Detailed inspection using advanced technology and insurance industry
                        standards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-brand-brown rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Insurance Collaboration</h4>
                      <p className="text-gray-600 text-sm">
                        Professional representation during adjuster meetings and claim negotiations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-brand-brown rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      6
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Material Procurement</h4>
                      <p className="text-gray-600 text-sm">
                        Sourcing matching materials and scheduling installation around weather
                        windows
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Big Spring Recovery Support</h4>
                  <p className="text-green-700 text-sm">
                    We coordinate with local debris removal services and maintain relationships with
                    Howard County building officials for expedited permit processing.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">
              What Does Impact-Resistant roof system Include?
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Materials Engineered for Big Spring
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Given Big Spring's history of extreme hail events including tea cup-sized stones
                  and 119+ mph winds, we exclusively recommend and install Class 4 impact-resistant
                  roofing systems designed to withstand the area's severe weather patterns.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Asphalt Shingle Systems</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>
                        • <strong>GAF Timberline ArmorShield II:</strong> Advanced polymer backing
                        with enhanced impact resistance
                      </li>
                      <li>
                        • <strong>Owens Corning Duration Storm:</strong> SureNail technology with
                        reinforced nail zone
                      </li>
                      <li>
                        • <strong>CertainTeed Northgate Class 4:</strong> Modified asphalt with
                        impact-absorbing layer
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-brand-brown mb-3">Metal Roofing Options</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>
                        • <strong>Standing Seam Steel:</strong> 24-gauge with Kynar 500 coating for
                        maximum durability
                      </li>
                      <li>
                        • <strong>Stone-Coated Steel:</strong> DECRA systems with Class A fire
                        rating and hail resistance
                      </li>
                      <li>
                        • <strong>Aluminum Standing Seam:</strong> Corrosion-resistant with 50+ year
                        warranties
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Performance Specifications
                </h3>
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">
                    UL 2218 Class 4 Testing
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    All recommended materials pass rigorous impact testing involving 2-inch steel
                    balls dropped from 20 feet, simulating the impact of golf ball to tennis
                    ball-sized hail at terminal velocity.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-gold">2"</div>
                      <div className="text-xs text-gray-600">Steel Ball Diameter</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-gold">20'</div>
                      <div className="text-xs text-gray-600">Drop Height</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-gold">60+</div>
                      <div className="text-xs text-gray-600">MPH Impact Speed</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-gold">30%</div>
                      <div className="text-xs text-gray-600">Insurance Discount</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Big Spring Insurance Benefits
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Class 4 materials typically qualify for 20-30% insurance premium discounts and
                    often pay for themselves through reduced premiums and avoided future damage
                    costs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown text-center">
              Local Insurance Expertise?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Howard County Claims Experience
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With Big Spring's high frequency of severe hail events, our team has extensive
                  experience working with all major insurance carriers serving Howard County,
                  including State Farm, Allstate, USAA, and regional Texas providers.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-brand-brown mb-3">
                    Our Big Spring Claims Success
                  </h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>
                      • <strong>150+ successful claims</strong> processed after recent major storms
                    </li>
                    <li>
                                            County
                    </li>
                    <li>
                      • <strong>Average 22% increase</strong> in settlement amounts with
                      professional representation
                    </li>
                    <li>
                      • <strong>12-18 day average</strong> claim processing timeline
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Claim Optimization Strategies
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Storm-Specific Documentation</h4>
                      <p className="text-gray-600 text-sm">
                        Correlating damage with specific weather events using NOAA storm reports and
                        local weather station data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Code Upgrade Advocacy</h4>
                      <p className="text-gray-600 text-sm">
                        Ensuring coverage for current building code requirements and enhanced wind
                        resistance standards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Adjuster Education</h4>
                      <p className="text-gray-600 text-sm">
                        Professional presentation of damage scope using industry-standard
                        terminology and measurement techniques
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <Check className="w-5 h-5 text-brand-gold inline-block" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Supplement Management</h4>
                      <p className="text-gray-600 text-sm">
                        Systematic identification and documentation of additional damage discovered
                        during installation
                      </p>
                    </div>
                  </div>
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
                  How do I know if my Big Spring roof has hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Look for granule loss (shiny spots), dents on vents/flashing, cracked shingles,
                  and dented gutters. We provide free inspections with photo documentation for
                  insurance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Will insurance cover hail damage in Big Spring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, if damage occurred during your policy period. We document impacts, meet
                  adjusters, and advocate for maximum coverage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  Should I upgrade to Class 4 shingles after hail damage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Class 4 shingles meet UL 2218 impact testing and qualify for Texas insurance premium discounts (form PC068, 10-30% range).
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
        <InternalLinks currentCity="big-spring" currentService="hail-damage-repair" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Big Spring Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Big Spring property owners. Expert hail damage repair with
            comprehensive warranties and insurance assistance.
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
        <RelatedArticles pageSlug="hail-damage-repair-big-spring" />
      </div>
    </>
  );
}
