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
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import {
  Check,
  ClipboardList,
  CloudLightning,
  Home,
  Lightbulb,
  Phone,
  Search,
  Star,
  Thermometer,
  Wrench,
} from "lucide-react";

import MapEmbed from "@/components/MapEmbed";
export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/residential-roofing-odessa/" },
  title: "Residential Roofing Odessa TX | 5 Star Roofing",
  description:
    "Expert residential roofing in Odessa TX. Serving Crestview, Ridgecrest West, and all Ector County working families. Call (806) 622-6041",
  openGraph: {
    title: "Residential Roofing Odessa TX | 5 Star Roofing",
    description:
      "Expert residential roofing in Odessa TX. Serving Crestview, Ridgecrest West, and all Ector County working families. Call (806) 622-6041",
    url: "https://5starroofingpros.com/residential-roofing-odessa/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ResidentialRoofingOdessaPage() {
  return (
    <>      {/* Sticky Contact Bar */}
      <StickyContactBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": "https://5starroofingpros.com/residential-roofing-odessa/#localbusiness",
            name: "5 Star Roofing",
            image:
              "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/odessa-hero.jpg",
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
            url: "https://5starroofingpros.com/residential-roofing-odessa/",
            areaServed: {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Odessa,_Texas",
              name: "Odessa",
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
              "Expert residential roofing services in Odessa neighborhoods including Crestview, Ridgecrest West, and Sherwood Park. Specializing in affordable Class 4 impact-resistant shingles for established brick ranch homes and working families.",
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
            name: "Residential Roofing in Odessa",
            description:
              "Professional residential roofing services in Odessa, Texas. Expert installation, repair, and maintenance.",
            provider: {
              "@type": ["LocalBusiness", "RoofingContractor"],
              name: "5 Star Roofing",
              telephone: "(806) 622-6041",
              "@id": "https://5starroofingpros.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Odessa",
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
                name: "How much does residential roof replacement cost in Odessa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typical costs range from $8,000-$25,000 depending on home size and complexity. However, most projects are insurance-covered hail damage claims where homeowners pay only their deductible ($1,000-$2,500).",
                },
              },
              {
                "@type": "Question",
                name: "What are Class 4 shingles and why do I need them?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Class 4 shingles pass UL 2218 impact testing—the highest rating available. They withstand 2-inch hail strikes without cracking. Class 4 impact-resistant shingles meet UL 2218 testing for 2-inch hail and qualify for Texas insurance premium discounts (form PC068, 10-30% range).",
                },
              },
              {
                "@type": "Question",
                name: "How long does residential roof replacement take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most homes are completed in 1-3 days depending on size and roof complexity. Single-story homes under 2,000 sq ft take 1-2 days. Two-story homes with steeper pitches require 2-3 days.",
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
        service="Residential Roofing"
        h1="Residential Roofing in Odessa, TX"
        image="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-residential-3-1920w.webp"
      
      breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Residential Roofing", url: "/residential-roofing/" },
          { name: "Odessa", url: "/residential-roofing-odessa/" },
        ]}
    />

      {/* TL;DR */}
      <FadeIn>
        <section className="container-custom mt-8">
          <div className="max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">Quick Summary</p>
            <ul className="space-y-2 text-gray-800 font-medium leading-relaxed">
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>What this page covers: Residential Roofing for homes and businesses in Odessa, Texas.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: 5 Star Roofing has been headquartered in Amarillo since 2014 and serves Odessa as part of its West Texas service area.</span></li>
              <li className="flex gap-2"><span className="text-brand-gold flex-shrink-0">•</span><span>Local context: every install is built for Panhandle hail, wind, and sun cycles, not generic conditions.</span></li>
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
                
                <div className="text-4xl font-bold text-brand-gold mb-3">Free</div>
                <div className="text-brand-brown font-semibold text-lg">Inspections</div>
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
              What Makes Our Odessa Roof Repair Specialists Different?
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Expert residential roofing in Odessa. Class 4 impact-resistant shingles meet UL 2218 Class 4 impact testing. Free inspections and insurance claim assistance included.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've served Odessa with expert residential roofing. We handle all
              permits, insurance claims, and warranty documentation. Free inspections and estimates
              available.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Complete Residential Roofing Services Involve?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">
                  <Home className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">New Roof Installation</h3>
                <p className="text-gray-700 mb-4">
                  Complete roof replacements using premium materials built for Odessa's challenging
                  climate. From architectural shingles to metal roofing systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Class 4 impact-resistant shingles
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Architectural asphalt shingles
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Standing seam metal roofs
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Complete tear-off and replacement
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Enhanced ventilation systems
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Comprehensive warranties
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">
                  <CloudLightning className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Storm Damage Restoration
                </h3>
                <p className="text-gray-700 mb-4">
                  Odessa faces frequent severe weather. We specialize in hail damage detection, wind
                  damage repair, and complete insurance claim management.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Free storm damage inspections
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Insurance documentation
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Adjuster meetings and advocacy
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Post-storm protection services
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Complete damage restoration
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Direct insurance billing
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">
                  <Wrench className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Roof Repairs & Maintenance
                </h3>
                <p className="text-gray-700 mb-4">
                  Scheduled repairs on asphalt shingles, standing seam metal, and flat
                  roofs across Odessa and Ector County. We replace torn shingles with
                  matched GAF or CertainTeed material and reseal aged flashings with
                  manufacturer-approved sealants so the work lasts.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Leak detection and repair
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Missing shingle replacement
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Flashing and vent repairs
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Preventive maintenance plans
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Gutter installation and repair
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-5xl mb-4">
                  <Search className="w-6 h-6 inline-block" />
                </div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">
                  Professional Inspections
                </h3>
                <p className="text-gray-700 mb-4">
                  Detailed inspections for Odessa home purchases, insurance claims, and
                  routine maintenance. Each report includes drone and ground photos, a
                  written condition summary, and notes formatted for State Farm, USAA,
                  Allstate, Farmers, and Texas Farm Bureau adjusters.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Free damage assessments
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Pre-purchase inspections
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Detailed written reports
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Photo documentation
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Insurance-ready assessments
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    Maintenance recommendations
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              Odessa Neighborhoods Do We Serve?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">
                  <Home className="w-6 h-6 inline-block" /> Popular Odessa Residential Areas
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Crestview</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Established neighborhood with homes built 1970s-1990s. Many brick ranch homes
                      requiring updated roofing systems to meet current standards.
                    </p>
                    <p className="text-xs text-gray-600">
                      Common: Age-related replacements, Class 4 upgrades
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Ridgecrest West</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Family-oriented community with diverse housing styles. Mix of newer and older
                      homes creates varied roofing needs and solutions.
                    </p>
                    <p className="text-xs text-gray-600">
                      Common: Mixed repair/replacement projects
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Sherwood Park</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Well-maintained neighborhood with quality homes requiring premium roofing
                      materials and expert installation techniques.
                    </p>
                    <p className="text-xs text-gray-600">
                      Common: Premium material upgrades, energy efficiency
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">West Odessa</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Large established area with varying home ages. Focus on cost-effective
                      solutions and insurance claim optimization.
                    </p>
                    <p className="text-xs text-gray-600">
                      Common: Insurance claims, budget-conscious solutions
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Northeast Odessa</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Newer developments requiring modern roofing standards and materials. Emphasis
                      on warranty compliance and energy efficiency.
                    </p>
                    <p className="text-xs text-gray-600">Common: Warranty work, modern materials</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-brown mb-2">Downtown Historic</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Character homes requiring specialized restoration approaches. Focus on
                      maintaining architectural integrity while improving performance.
                    </p>
                    <p className="text-xs text-gray-600">
                      Common: Historic preservation, custom solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">
              What Does Residential Roofing Investment in Odessa Involve?
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-4">
                    2025 Odessa Roofing Costs
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <strong>Compact homes (1,000-1,400 sq ft):</strong> $6,500 - $9,200
                      <br />
                      <span className="text-sm text-gray-600">
                        Typical ranch homes, straightforward replacement
                      </span>
                    </li>
                    <li>
                      <strong>Standard homes (1,400-2,000 sq ft):</strong> $9,200 - $13,800
                      <br />
                      <span className="text-sm text-gray-600">Most common Odessa home size</span>
                    </li>
                    <li>
                      <strong>Large homes (2,000-2,800 sq ft):</strong> $13,800 - $20,500
                      <br />
                      <span className="text-sm text-gray-600">
                        Two-story or complex floor plans
                      </span>
                    </li>
                    <li>
                      <strong>Premium homes (2,800+ sq ft):</strong> $20,500 - $35,000+
                      <br />
                      <span className="text-sm text-gray-600">
                        Custom homes, complex architecture
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-4">
                    Material Options & Value
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <strong>Architectural Shingles:</strong> $85-$115/square
                      <br />
                      <span className="text-sm text-gray-600">25-30 year warranty, good value</span>
                    </li>
                    <li>
                      <strong>Class 4 Impact-Resistant:</strong> $105-$135/square
                      <br />
                      <span className="text-sm text-gray-600">Highly recommended for Odessa</span>
                    </li>
                    <li>
                      <strong>Cool Roof Systems:</strong> $115-$155/square
                      <br />
                      <span className="text-sm text-gray-600">
                        Energy-efficient, heat-reflecting
                      </span>
                    </li>
                    <li>
                      <strong>Metal Roofing:</strong> $170-$270/square
                      <br />
                      <span className="text-sm text-gray-600">
                        Premium durability, long-term value
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-brand-brown mb-4">
                  <Lightbulb className="w-6 h-6 inline-block" /> Value-Added Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Insurance Claim Optimization</h4>
                    <p className="text-sm text-gray-600">
                      We maximize insurance coverage for storm damage claims, often covering 90-100%
                      of replacement costs minus deductible.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Energy Efficiency Upgrades</h4>
                    <p className="text-sm text-gray-600">
                      Cool roof technology and enhanced ventilation can reduce cooling costs by
                      15-25% in Odessa's hot climate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-brand-brown mb-2">
                  <ClipboardList className="w-6 h-6 inline-block" /> Transparent Pricing & Estimates
                </p>
                <p className="text-gray-700">
                  All estimates include detailed material specifications, labor breakdown, timeline,
                  and warranty information. Most estimates provided within 24 hours. Call{" "}
                  <a href="tel:8066226041" className="text-brand-gold font-bold">
                    (806) 622-6041
                  </a>{" "}
                  for your free assessment.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">
              What Does Odessa Climate & Roofing Performance Involve?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">
                  <Thermometer className="w-6 h-6 inline-block" /> Climate Challenges for Odessa
                  Roofs
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Heat & UV Exposure</h4>
                    <p className="text-gray-700 mb-3">
                      Odessa experiences extreme summer temperatures with roof surface temperatures
                      exceeding 150°F. This intense heat accelerates material aging and increases
                      cooling costs significantly.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Average summer high: 95°F</li>
                      <li>• Days over 100°F: 30+ annually</li>
                      <li>• Roof surface peak: 150-160°F</li>
                      <li>• UV index: Very High (9-10)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Storm Patterns</h4>
                    <p className="text-gray-700 mb-3">
                      Odessa sits in a moderate hail risk zone but still experiences damaging
                      storms. High winds and dust storms are frequent throughout spring and summer
                      months.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Annual hail events: 6.1 days</li>
                      <li>• Wind speeds: Regular 25+ mph</li>
                      <li>• Dust storm frequency: 12-15/year</li>
                      <li>• Peak storm season: April-June</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-brand-brown mb-4">
                  <Wrench className="w-6 h-6 inline-block" /> Material Performance in Odessa
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Understanding how different roofing materials perform in Odessa's climate helps
                    homeowners make informed decisions about replacement timing and material
                    selection.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Standard Shingles</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Expected life: 15-18 years</li>
                        <li>• Heat degradation: Moderate</li>
                        <li>• Hail resistance: Limited</li>
                        <li>• Energy efficiency: Basic</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Class 4 Shingles</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Expected life: 22-28 years</li>
                        <li>• Heat degradation: Reduced</li>
                        <li>• Hail resistance: Excellent</li>
                        <li>• Insurance discounts: 15-30%</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-semibold text-brand-brown mb-2">Metal Roofing</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Expected life: 40-60 years</li>
                        <li>• Heat degradation: Minimal</li>
                        <li>• Hail resistance: Superior</li>
                        <li>• Energy savings: 20-25%</li>
                      </ul>
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
                  How much does residential roof replacement cost in Odessa?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Typical costs range from $8,000-$25,000 depending on home size and complexity.
                  However, most projects are insurance-covered hail damage claims where homeowners
                  pay only their deductible ($1,000-$2,500).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  What are Class 4 shingles and why do I need them?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Class 4 shingles pass UL 2218 impact testing—the highest rating available. They
                  withstand 2-inch hail strikes without cracking. Class 4 impact-resistant shingles meet UL 2218 testing for 2-inch hail and qualify for Texas insurance premium discounts (form PC068, 10-30% range).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-brand-brown hover:text-brand-gold">
                  How long does residential roof replacement take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most homes are completed in 1-3 days depending on size and roof complexity.
                  Single-story homes under 2,000 sq ft take 1-2 days. Two-story homes with steeper
                  pitches require 2-3 days.
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
        <InternalLinks currentCity="odessa" currentService="residential-roofing" />

        <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Odessa Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free inspections for Odessa property owners. Expert residential roofing with
            comprehensive warranties.
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
        <RelatedArticles pageSlug="residential-roofing-odessa" />
      </div>
    </>
  );
}
