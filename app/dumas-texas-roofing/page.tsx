import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Roofing in Dumas, TX| Hail Damage Specialists | 5 Star',
  description: 'roofing services in Dumas, Texas Panhandle. Residential, commercial, and hail damage repair. Serving Moore County. Free inspections available.',
};

export default function DumasRoofingPage() {
  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Service Areas",
                      "url": "/service-areas/"
              },
              {
                      "name": "Dumas",
                      "url": "/dumas-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <section className="hero" style={{backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Dumas&apos;s Professional Roofing Contractor</h1>
            <p className="hero-subtitle">Expert Roofing Services in Dumas, Texas</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Free Inspection</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Lead Form - Above the Fold */}
      <div className="container-custom">
        <FadeIn>
          <section id="lead-form" className="section -mt-16 relative z-20">
            <div className="max-w-2xl mx-auto">
              <HighLevelForm
                title="Get Your Free Roof Inspection"
                subtitle="Fill out the form below and we'll contact you within 24 hours. No obligation."
              />
            </div>
          </section>
        </FadeIn>
      </div>


      <div className="container-custom py-12">
        <FadeIn>
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-brand-brown">Roofing Services in Dumas, Texas</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                5 Star Commercial Roofing is proud to serve Dumas and Moore County with comprehensive roofing solutions for residential and commercial properties. Located in the northern Texas Panhandle, Dumas faces unique weather challenges including severe hailstorms, high winds, and extreme temperature fluctuations that can take a toll on your roof.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                With over 10 years of experience serving the Texas Panhandle region, our team understands the specific needs of Dumas property owners. From <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">hail damage repairs</a> to complete roof replacements, we provide quality workmanship and materials designed to withstand the harsh Panhandle climate.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Complete Roofing Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🌨️</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">Dumas is no stranger to severe hailstorms. We specialize in identifying and repairing hail damage, working directly with your insurance company to ensure proper coverage and quality repairs.</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>✓ Free storm damage inspections</li>
                  <li>✓ Insurance claim assistance</li>
                  <li>✓ Impact-resistant materials</li>
                  <li>✓ Emergency tarping services</li>
                </ul>
                <a href="/hail-damage-roof-repair-amarillo-texas/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Learn More →</a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Residential Roofing</h3>
                <p className="text-gray-700 mb-4">Your home deserves the best protection. We offer complete residential roofing services including new installations, replacements, and repairs with materials built for Dumas weather.</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>✓ Architectural shingles</li>
                  <li>✓ Metal roofing systems</li>
                  <li>✓ Lifetime warranties available</li>
                  <li>✓ Energy-efficient options</li>
                </ul>
                <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Learn More →</a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Commercial Roofing</h3>
                <p className="text-gray-700 mb-4">Protect your Dumas business with professional commercial roofing. We specialize in flat roof systems, metal roofing, and TPO/EPDM membranes designed for commercial applications.</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>✓ TPO and EPDM systems</li>
                  <li>✓ Metal commercial roofing</li>
                  <li>✓ Minimal business disruption</li>
                  <li>✓ Preventive maintenance plans</li>
                </ul>
                <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">Learn More →</a>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Dumas Chooses 5 Star Roofing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Free Inspections</h3>
                <p className="text-gray-700">Comprehensive roof evaluations at no cost. We'll identify any issues and provide honest recommendations.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Quality Materials</h3>
                <p className="text-gray-700">We use only premium roofing materials from trusted manufacturers, built to withstand Panhandle weather.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Insurance Experts</h3>
                <p className="text-gray-700">Full assistance with storm damage insurance claims. We handle the paperwork and communicate with adjusters.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Fast Response</h3>
                <p className="text-gray-700">24/7 emergency service for storm damage. We respond quickly to protect your property from further damage.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Dumas Weather & Your Roof</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">⛈️ Severe Hailstorms</h3>
                <p className="text-gray-700">Dumas sits in "Hail Alley" and experiences frequent severe hailstorms, particularly during spring and summer months. Golf ball to baseball-sized hail can cause significant roof damage requiring professional assessment and repair.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">💨 High Winds</h3>
                <p className="text-gray-700">The open Panhandle terrain means Dumas faces sustained high winds and powerful gusts that can lift shingles, damage flashing, and compromise roof integrity. Impact-resistant and wind-rated materials are essential.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">🌡️ Temperature Extremes</h3>
                <p className="text-gray-700">From summer heat exceeding 100°F to winter cold below zero, Dumas roofs endure extreme temperature swings. These cycles cause expansion and contraction that can lead to premature aging and material failure.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-brand-brown mb-3">☀️ Intense UV Exposure</h3>
                <p className="text-gray-700">High altitude and clear skies mean intense UV radiation that degrades roofing materials over time. UV-resistant materials and proper ventilation help extend roof life in Dumas conditions.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Serving the Entire Texas Panhandle</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                While we proudly serve Dumas and Moore County, 5 Star Commercial Roofing provides expert roofing services throughout the Texas Panhandle and West Texas. Our service area includes <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant">Odessa</a>, Lubbock, and surrounding communities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our extensive regional experience means we understand the unique challenges roofs face across different parts of West Texas, from the agricultural areas around Dumas to the oil patch of the Permian Basin.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16 bg-brand-gold-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-brand-brown">Our Roofing Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">1</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Free Inspection</h3>
                <p className="text-gray-700">Thorough evaluation of your roof's condition with no obligation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">2</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Detailed Proposal</h3>
                <p className="text-gray-700">Transparent pricing and material options tailored to your needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">3</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Expert Installation</h3>
                <p className="text-gray-700">Professional crews with quality workmanship and attention to detail.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-brand-gold mb-3">4</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">Guaranteed Results</h3>
                <p className="text-gray-700">Comprehensive warranties and ongoing support for your investment.</p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Protecting Dumas Properties Since 2010</h2>
            <p className="cta-text">Free inspections and expert roofing throughout Moore County. Call today for immediate service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">📞 Call (806) 622-6041</a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">Request Free Inspection</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Roofing Contractor",
        "provider": {
          "@type": "RoofingContractor",
              "@id": "https://5starroofingpros.com/#organization",
          "name": "5 Star Commercial Roofing",
          "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
          "telephone": "+18066226041",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2909 S Western St",
            "addressLocality": "Amarillo",
            "addressRegion": "TX",
            "postalCode": "79109",
            "addressCountry": "US"
          },
          "url": "https://www.5starcommercialroofing.com",
          "priceRange": "$$"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Dumas",
            "containedInPlace": {
              "@type": "State",
              "name": "Texas"
            }
          },
          {
            "@type": "City",
            "name": "Amarillo",
            "containedInPlace": {
              "@type": "State",
              "name": "Texas"
            }
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Roofing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hail Damage Repair"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Roofing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Roofing"
              }
            }
          ]
        }
      })}}/>
    </div>
  );
}
