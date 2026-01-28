import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import { OptimizedImage } from "@/components/OptimizedImage";

export const metadata: Metadata = {
  title: 'Roofing Services in Amarillo, Midland, Odessa| Hail Damag...',
  description: 'Complete roofing services for West Texas including residential, commercial, and industrial. Call for a free quote!',
};

export default function Page() {
  // JSON-LD Schema for Service Catalog
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Roofing Services",
    "description": "Complete roofing services for residential, commercial, and industrial properties in West Texas",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Residential Roofing",
          "url": "https://5starroofingpros.com/residential-roofing/",
          "description": "Complete residential roofing services including asphalt shingles, metal roofing, and hail damage repair"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Commercial Roofing",
          "url": "https://5starroofingpros.com/commercial-roofing/",
          "description": "TPO, PVC, EPDM, built-up roofing, and modified bitumen systems for commercial buildings"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Hail Damage Repair",
          "url": "https://5starroofingpros.com/hail-damage-repair-amarillo-tx/",
          "description": "Expert hail damage assessment, documentation, and insurance claim assistance"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Storm Damage Restoration",
          "url": "https://5starroofingpros.com/storm-damage-roof-repair-in-amarillo/",
          "description": "24/7 emergency storm damage repair and restoration services"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Roof Inspections",
          "url": "https://5starroofingpros.com/roof-inspections-in-amarillo/",
          "description": "Free comprehensive roof inspections and damage assessments"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Roof Replacement",
          "url": "https://5starroofingpros.com/roof-replacement-in-amarillo/",
          "description": "Complete roof replacement services for all roofing types"
        }
      }
    ],
    "provider": {
      "@type": "RoofingContractor",
      "name": "5 Star Commercial Roofing",
      "telephone": "+1-806-622-6041",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amarillo",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Services",
                      "url": "/services/"
              }
      ]} />


      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Complete Roofing Services for West Texas</h1>

      {/* Hero Image */}
      <OptimizedImage
        src="/photos/Professional_roofing_crew_on_Texas_residential_home"
        alt="Professional roofing services in Amarillo Texas - Expert crew installing quality roofing - 5 Star Commercial Roofing"
        className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg mb-6 md:mb-8"
        priority={true}
        sizes="100vw"
      />

      <div className="content-block mb-12">
        <p className="text-lg">
          At 5 Star Commercial Roofing, we provide comprehensive roofing solutions for homes, businesses, and
          industrial facilities across Amarillo, Midland, Odessa, and the entire Texas Panhandle. With over 10 years
          of experience battling West Texas weather, we specialize in hail damage repair, storm restoration, and
          insurance claim assistance.
        </p>
      </div>

      {/* Emergency Services */}
      <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
        <div className="flex gap-6 items-start">
          <div className="text-5xl">🚨</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-red-800 mb-3">24/7 Emergency Roofing Services</h2>
            <p className="text-gray-700 mb-4">
              Storm damage doesn't wait for business hours. We offer round-the-clock emergency response for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Active roof leaks causing interior damage</li>
              <li>Severe hail or wind damage exposing roof deck</li>
              <li>Missing shingles after storms</li>
              <li>Tree or debris impact damage</li>
              <li>Commercial roof failures causing business interruption</li>
            </ul>
            <a href="tel:8066226041" className="btn-primary bg-red-600 hover:bg-red-700 text-white">
              📞 Emergency: (806) 622-6041
            </a>
          </div>
        </div>
      </section>

      {/* Storm Damage Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Storm Damage & Insurance Services</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <FadeIn delay={0.1} direction="left">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/images/hail-damage-3.jpg" alt="Hail Damage Roof Repair" className="card-image" />
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">Hail Damage Roof Repair</h3>
                <p className="mb-4">
                  The Texas Panhandle experiences 8-12 hailstorms annually, and Midland-Odessa averages 6-10 per year.
                  We're experts at identifying and documenting hail damage for insurance claims.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Free hail damage inspections</li>
                  <li>Complete insurance claim documentation</li>
                  <li>Available to meet with your adjuster</li>
                  <li>Class 4 impact-resistant replacements</li>
                </ul>
                <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                  Learn More About Hail Damage Repair →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/images/shutterstock_162724754.jpg" alt="Storm Damage Restoration" className="card-image" />
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">Storm Damage Restoration</h3>
                <p className="mb-4">
                  Wind, rain, snow, ice, and severe weather damage require immediate attention to prevent
                  further interior damage and costly repairs.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Wind damage from 60+ mph gusts</li>
                  <li>Heavy rain and water intrusion</li>
                  <li>Snow load and ice dam damage</li>
                  <li>Tree and debris impact repair</li>
                </ul>
                <a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                  Learn More About Storm Restoration →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/images/shutterstock_473737921.jpg" alt="Roof Inspections" className="card-image" />
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">Free Roof Inspections</h3>
                <p className="mb-4">
                  Professional roof inspections with detailed photo documentation, measurements, and comprehensive
                  reports for insurance claims or maintenance planning.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Post-storm damage assessment</li>
                  <li>Annual maintenance inspections</li>
                  <li>Pre-purchase home inspections</li>
                  <li>Insurance claim documentation</li>
                </ul>
                <a href="/roof-inspections-in-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                  Schedule Free Inspection →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="right">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">Insurance Claims Documentation Support</h3>
                <p className="mb-4">
                  After storm damage, insurance claims require detailed documentation. We provide professional
                  roofing expertise to support your claim process.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Professional damage documentation with photos</li>
                  <li>Technical roofing reports for your claim</li>
                  <li>Available to meet with adjusters to explain damage</li>
                  <li>Supplemental damage assessments when needed</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Track Record:</strong> We've provided documentation and roofing expertise supporting
                  over $50 million in insurance claims for West Texas property owners.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Residential Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Residential Roofing Services</h2>
        <div className="grid md:grid-cols-3 gap-8">

          <FadeIn delay={0.1} direction="left">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/images/asphaltshingles.jpg" alt="Asphalt Shingle Roofing" className="card-image" />
              <div className="card-body">
                <h3 className="text-xl font-semibold text-brand-brown mb-3">Asphalt Shingle Roofing</h3>
                <p className="text-gray-600 mb-3">
                  Class 4 impact-resistant shingles designed for West Texas hail. Available in architectural
                  and luxury styles with 20-50 year warranties.
                </p>
                <a href="/asphalt-roofing-in-amarillo/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/images/SteelRoofing.jpg" alt="Metal Roofing" className="card-image" />
              <div className="card-body">
                <h3 className="text-xl font-semibold text-brand-brown mb-3">Standing Seam Metal Roofing</h3>
                <p className="text-gray-600 mb-3">
                  Ultimate hail protection with 50+ year lifespan. Energy-efficient, fire-resistant, and
                  increasingly popular in the Panhandle.
                </p>
                <a href="/roofing-methods/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="right">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <h3 className="text-xl font-semibold text-brand-brown mb-3">Roof Replacement</h3>
                <p className="text-gray-600 mb-3">
                  Complete tear-off and replacement for aging roofs or severe storm damage. We handle all
                  aspects from permits to final cleanup.
                </p>
                <a href="/residential-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="left">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <h3 className="text-xl font-semibold text-brand-brown mb-3">Roof Repairs</h3>
                <p className="text-gray-600 mb-3">
                  Missing shingles, leak repairs, flashing replacement, vent boot replacement, and localized
                  damage repairs for Amarillo homes.
                </p>
                <a href="/residential-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <h3 className="text-xl font-semibold text-brand-brown mb-3">Roof Maintenance</h3>
                <p className="text-gray-600 mb-3">
                  Annual inspections, gutter cleaning, minor repairs, and preventive maintenance to extend
                  your roof's lifespan in harsh Texas weather.
                </p>
                <a href="/residential-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} direction="right">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <h3 className="text-xl font-semibold text-brand-brown mb-3">Ventilation & Insulation</h3>
                <p className="text-gray-600 mb-3">
                  Proper attic ventilation and insulation reduces energy costs and prevents roof rot. Critical
                  for West Texas's 100°F+ summers.
                </p>
                <a href="/roofing-methods/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Commercial Roofing Services</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <FadeIn delay={0.1} direction="left">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/images/TPO1.jpg" alt="TPO Commercial Roofing" className="card-image" />
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">TPO Roofing Systems</h3>
                <p className="mb-4">
                  White single-ply membrane roofing for flat and low-slope commercial roofs. Heat-welded seams
                  create watertight protection for Midland-Odessa industrial facilities and Amarillo businesses.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>15-25 year warranties</li>
                  <li>Energy Star rated reflective surface</li>
                  <li>Hail and puncture resistant</li>
                  <li>Low maintenance requirements</li>
                </ul>
                <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                  Learn More About TPO Roofing →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/images/EPDM2.jpg" alt="EPDM Commercial Roofing" className="card-image" />
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">EPDM Rubber Roofing</h3>
                <p className="mb-4">
                  Cost-effective black rubber membrane for commercial applications. Proven track record in
                  West Texas's extreme temperature swings (-40°F to 300°F).
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>15-30 year lifespan</li>
                  <li>Excellent UV resistance</li>
                  <li>Temperature stable</li>
                  <li>Budget-friendly option</li>
                </ul>
                <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                  Learn More About EPDM Roofing →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/photos/tpo-sunset7.jpg" alt="PVC and TPO commercial roofing system at sunset in West Texas - Premium flat roof installation - 5 Star Commercial Roofing" className="card-image" />
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">PVC Roofing Systems</h3>
                <p className="mb-4">
                  Premium commercial roofing for chemical plants, restaurants, and facilities requiring superior
                  chemical and grease resistance. Ideal for Midland-Odessa oil & gas industry.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>20-30 year warranties</li>
                  <li>Chemical and grease resistant</li>
                  <li>Class A fire rating</li>
                  <li>Energy efficient white surface</li>
                </ul>
                <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                  Learn More About PVC Roofing →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="right">
            <div className="card hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/photos/tpo-sunset8.jpg" alt="Built-up roofing and TPO commercial installation in Amarillo Texas - Multi-layer flat roof system - 5 Star Commercial Roofing" className="card-image" />
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-brand-brown mb-3">Built-Up Roofing (BUR)</h3>
                <p className="mb-4">
                  Traditional tar and gravel roofing for heavy-duty commercial applications. Multiple layers
                  create redundant waterproofing for flat roofs.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>15-25 year lifespan</li>
                  <li>Excellent waterproofing</li>
                  <li>Fire and hail resistant</li>
                  <li>Cost-effective for large roofs</li>
                </ul>
                <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industrial Services */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Industrial Roofing Services</h2>
        <p className="text-lg mb-6">
          Specialized roofing for Midland-Odessa oil & gas facilities, warehouses, manufacturing plants,
          and large industrial buildings across West Texas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-xl mb-3">⚙️ Oil & Gas Facilities</h3>
            <p className="text-gray-600 mb-2">
              Chemical-resistant PVC and TPO systems for refineries, compressor stations, tank farms,
              and processing facilities in the Permian Basin.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">🏭 Manufacturing Plants</h3>
            <p className="text-gray-600 mb-2">
              Large-scale metal roofing, single-ply membranes, and built-up systems for manufacturing
              and production facilities across West Texas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">📦 Warehouses & Distribution</h3>
            <p className="text-gray-600 mb-2">
              Cost-effective roofing solutions for large warehouses, distribution centers, and
              storage facilities with emphasis on durability and energy efficiency.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">🏗️ New Construction</h3>
            <p className="text-gray-600 mb-2">
              Complete roofing systems for new industrial construction projects with coordinated
              scheduling and quality control for general contractors.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/industrial-roofing/" className="btn-primary">
            View Industrial Services →
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why West Texas Chooses 5 Star Roofing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="font-bold text-xl mb-3">Hail Damage Specialists</h3>
            <p className="text-gray-600">
              Over 10 years exclusively serving the Texas Panhandle and West Texas hail belt. We know
              exactly what insurance adjusters look for.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-bold text-xl mb-3">Licensed & Insured</h3>
            <p className="text-gray-600">
              Fully licensed in Texas with comprehensive general liability and workers' compensation
              insurance for your protection.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-3">Fast Response Times</h3>
            <p className="text-gray-600">
              Same-day emergency response, 24-48 hour inspection scheduling, and rapid project completion
              to minimize business interruption.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-bold text-xl mb-3">Insurance Documentation Expertise</h3>
            <p className="text-gray-600">
              We've provided professional documentation and roofing expertise supporting over $50M in
              insurance claims. We know what adjusters need to see.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="font-bold text-xl mb-3">Quality Warranties</h3>
            <p className="text-gray-600">
              Comprehensive workmanship warranties plus manufacturer material warranties up to 50 years
              on premium systems.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="font-bold text-xl mb-3">Local Reputation</h3>
            <p className="text-gray-600">
              Hundreds of satisfied customers across Amarillo, Midland, Odessa and the Panhandle.
              Check our reviews and references.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Serving All of West Texas</h2>
        <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
          Professional roofing services throughout the Texas Panhandle, Permian Basin, and West Texas region.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2">Amarillo</h3>
            <p className="text-sm text-gray-600">Texas Panhandle</p>
          </div>
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2">Midland</h3>
            <p className="text-sm text-gray-600">Permian Basin</p>
          </div>
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2">Odessa</h3>
            <p className="text-sm text-gray-600">Permian Basin</p>
          </div>
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2">Lubbock</h3>
            <p className="text-sm text-gray-600">South Plains</p>
          </div>
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2">Canyon</h3>
            <p className="text-sm text-gray-600">Randall County</p>
          </div>
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2">Borger</h3>
            <p className="text-sm text-gray-600">Hutchinson County</p>
          </div>
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2">Pampa</h3>
            <p className="text-sm text-gray-600">Gray County</p>
          </div>
          <div className="bg-brand-gold-light p-4 rounded text-center">
            <h3 className="font-bold mb-2"><a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline">View All</a></h3>
            <p className="text-sm text-gray-600">20+ Cities</p>
          </div>
        </div>
      </section>

      {/* Comprehensive Service Links */}
      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Complete Service Directory</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Residential Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-gold">Residential Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/residential-roofing/" className="hover:text-brand-gold">Residential Roofing</a></li>
              <li><a href="/residential-roofing-amarillo-tx/" className="hover:text-brand-gold">Amarillo Residential</a></li>
              <li><a href="/residential-roof-repair-in-amarillo/" className="hover:text-brand-gold">Roof Repair</a></li>
              <li><a href="/residential-roof-replacement-in-amarillo/" className="hover:text-brand-gold">Roof Replacement</a></li>
              <li><a href="/asphalt-roofing-in-amarillo/" className="hover:text-brand-gold">Asphalt Shingles</a></li>
              <li><a href="/metal-roof-installation-odessa-texas/" className="hover:text-brand-gold">Metal Roofing</a></li>
            </ul>
          </div>

          {/* Commercial Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-gold">Commercial Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/commercial-roofing/" className="hover:text-brand-gold">Commercial Roofing</a></li>
              <li><a href="/commercial-roofing-amarillo-tx/" className="hover:text-brand-gold">Amarillo Commercial</a></li>
              <li><a href="/commercial-roof-repair-in-amarillo/" className="hover:text-brand-gold">Commercial Repair</a></li>
              <li><a href="/pvc-roofing-contractors-in-amarillo/" className="hover:text-brand-gold">PVC Roofing</a></li>
              <li><a href="/flat-roof-repair-midland-texas/" className="hover:text-brand-gold">Flat Roof Repair</a></li>
              <li><a href="/industrial-roofing/" className="hover:text-brand-gold">Industrial Roofing</a></li>
            </ul>
          </div>

          {/* Storm Damage Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-gold">Storm Damage</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/hail-damage-repair-amarillo-tx/" className="hover:text-brand-gold">Hail Damage Repair</a></li>
              <li><a href="/hail-damage-roof-repair-in-amarillo/" className="hover:text-brand-gold">Hail Repair Amarillo</a></li>
              <li><a href="/hail-damage-roof-replacement-in-amarillo/" className="hover:text-brand-gold">Hail Replacement</a></li>
              <li><a href="/storm-damage-roof-repair-in-amarillo/" className="hover:text-brand-gold">Storm Damage</a></li>
              <li><a href="/wind-damage-roof-repair-in-amarillo/" className="hover:text-brand-gold">Wind Damage</a></li>
              <li><a href="/emergency-roof-repair-odessa-texas/" className="hover:text-brand-gold">Emergency Repair</a></li>
            </ul>
          </div>

          {/* Inspections & Other */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-gold">Inspections & More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/roof-inspections-in-amarillo/" className="hover:text-brand-gold">Roof Inspections</a></li>
              <li><a href="/roof-inspection-amarillo-texas/" className="hover:text-brand-gold">Free Inspections</a></li>
              <li><a href="/roof-replacement-in-amarillo/" className="hover:text-brand-gold">Roof Replacement</a></li>
              <li><a href="/roofing-methods/" className="hover:text-brand-gold">Installation Methods</a></li>
              <li><a href="/amarillo-weather-impact-on-roofing/" className="hover:text-brand-gold">Weather Impact Guide</a></li>
              <li><a href="/gallery/" className="hover:text-brand-gold">Project Gallery</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact 5 Star Commercial Roofing today for a free inspection and estimate.
          Serving Amarillo, Midland, Odessa, and all of West Texas.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary text-lg bg-white text-brand-brown hover:bg-gray-100">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary text-lg border-2 border-white hover:bg-white hover:text-brand-brown">
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
