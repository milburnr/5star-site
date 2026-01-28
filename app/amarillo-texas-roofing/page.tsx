import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Amarillo Texas Roofing | Local Hail Experts',
  description: 'Trusted roofing contractor serving Amarillo, Texas. hail damage repair, residential & commercial roofing, metal roofs, and free inspections.',
};

export default function AmarilloRoofingPage() {
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
                      "name": "Amarillo",
                      "url": "/amarillo-texas-roofing/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(/images/cover-background-roofing-sunset-1024x683.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">
              Amarillo&apos;s Trusted Roofing Contractor
            </h1>
            <p className="hero-subtitle">
              Professional Roofing Services Throughout Amarillo, Texas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">
                📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="btn-secondary-hero text-lg px-8 py-4">
                Get Free Inspection
              </a>
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


      <div className="container-custom">
        {/* Introduction */}
        <FadeIn>
          <section className="section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Your Local Roofing Partner in Amarillo, Texas
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Located at 2909 S Western St in Amarillo, 5 Star Commercial Roofing has been protecting
                homes and businesses throughout the Texas Panhandle for over a decade. From the historic
                neighborhoods of Wolflin to the growing developments near Coulter Street, we understand
                Amarillo&apos;s unique roofing challenges.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us for Amarillo */}
        <FadeIn delay={0.1}>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg mb-16">
            <h2 className="section-title">Why Amarillo Residents Choose 5 Star Roofing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Local Amarillo Office</h3>
                <p className="text-gray-600">
                  Based right here in Amarillo on South Western Street. We&apos;re your neighbors,
                  not a fly-by-night contractor.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Fast Response</h3>
                <p className="text-gray-600">
                  30-minute emergency response time throughout Amarillo. We know every neighborhood
                  from Soncy Road to Loop 335.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold mb-3 text-brand-brown">Hail Storm Experts</h3>
                <p className="text-gray-600">
                  Amarillo gets hit hard by hail storms. We specialize in hail damage detection,
                  documentation, and insurance claims.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Services in Amarillo */}
        <section className="section">
          <FadeIn>
            <h2 className="section-title">Comprehensive Roofing Services in Amarillo</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Hail Damage Repair */}
            <FadeIn delay={0.1}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🌨️</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Hail Damage Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Amarillo experiences some of the most severe hail storms in Texas. From the Wolflin
                      neighborhood to Southwest Amarillo, we&apos;ve repaired thousands of hail-damaged roofs.
                      Our experts can spot even subtle granule loss and help you document damage for your
                      insurance claim.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>What we do:</strong> Free hail damage inspections, comprehensive photo documentation,
                      insurance claim assistance, and full roof replacement if needed. We work with all major
                      insurance companies.
                    </p>
                    <a
                      href="/hail-damage-roof-repair-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Learn More About Hail Damage Repair in Amarillo →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Residential Roofing */}
            <FadeIn delay={0.2}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🏠</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Residential Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Whether you own a historic home near San Jacinto or a new build in Sleepy Hollow,
                      we provide complete residential roofing services. From asphalt shingle replacement
                      to complete tear-offs, we handle projects of all sizes throughout Amarillo.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Services include:</strong> Roof replacement, roof repair, shingle installation,
                      ventilation upgrades, and warranty work. We use only premium materials designed for
                      Amarillo&apos;s extreme weather.
                    </p>
                    <a
                      href="/residential-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Explore Residential Roofing in Amarillo →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Commercial Roofing */}
            <FadeIn delay={0.3}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Commercial Roofing
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Serving Amarillo&apos;s business community from the Amarillo Medical Center to industrial
                      facilities near the airport. We specialize in flat roof systems, TPO, EPDM, and modified
                      bitumen installations that stand up to Amarillo&apos;s harsh climate.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Commercial expertise:</strong> Flat roof repair and replacement, preventive maintenance
                      programs, emergency repairs, and roof coating systems. Minimal disruption to your business.
                    </p>
                    <a
                      href="/commercial-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      View Commercial Roofing Services in Amarillo →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Metal Roofing */}
            <FadeIn delay={0.4}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🔩</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Metal Roof Installation
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Metal roofing is an excellent choice for Amarillo homes. It handles our extreme temperature
                      swings, high winds, and hail better than traditional shingles. Plus, it can last 50+ years
                      with minimal maintenance.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Metal roofing options:</strong> Standing seam, corrugated panels, metal shingles,
                      and commercial metal roofing systems. Energy-efficient and beautiful.
                    </p>
                    <a
                      href="/metal-roofing-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Discover Metal Roofing in Amarillo →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Roof Inspections */}
            <FadeIn delay={0.5}>
              <div className="card-hover p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-2">
                      Free Roof Inspections
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Don&apos;t wait for a leak to find out your roof is damaged. Our free roof inspections
                      throughout Amarillo can catch problems early, saving you thousands in repair costs.
                      We&apos;ll check for hail damage, wind damage, and normal wear.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Inspection includes:</strong> Complete roof assessment, attic ventilation check,
                      shingle condition analysis, flashing inspection, and detailed photo report. 100% free,
                      no obligation.
                    </p>
                    <a
                      href="/roof-inspections-amarillo-texas/"
                      className="text-brand-gold font-semibold hover:text-brand-gold-vibrant inline-flex items-center gap-2"
                    >
                      Schedule Your Free Inspection →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Emergency Repairs */}
            <FadeIn delay={0.6}>
              <div className="card-hover p-8 bg-red-50 border-2 border-red-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">🚨</div>
                    <h3 className="text-2xl font-bold text-red-700 mb-2">
                      Emergency Roof Repair
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>Available 24/7 for roofing emergencies in Amarillo.</strong> Roof leaks, storm
                      damage, or structural issues can&apos;t wait. We provide emergency tarping, leak repairs,
                      and temporary solutions to protect your property until permanent repairs can be made.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Call <a href="tel:8066226041" className="text-brand-gold font-bold hover:underline">(806) 622-6041</a>
                      {" "}now for immediate assistance anywhere in Amarillo.
                    </p>
                    <a
                      href="/emergency-roof-repair-amarillo-texas/"
                      className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-2"
                    >
                      24/7 Emergency Services →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Amarillo-Specific Roofing Challenges */}
        <FadeIn>
          <section className="section bg-brand-gold-light p-12 rounded-lg my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-brown">
              Common Roofing Issues in Amarillo, Texas
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌪️ Severe Hail Storms</h3>
                <p className="text-gray-700">
                  Amarillo sits in &quot;Hail Alley&quot; and experiences frequent severe thunderstorms from March through
                  September. Baseball-sized hail isn&apos;t uncommon, and even small hail can cause significant granule
                  loss on asphalt shingles, leading to premature aging and leaks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">💨 High Winds</h3>
                <p className="text-gray-700">
                  The Texas Panhandle is one of the windiest regions in the United States. Sustained winds of
                  30-40 mph and gusts over 60 mph can lift shingles, tear off flashing, and damage roof edges.
                  Proper installation with wind-rated materials is critical.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">🌡️ Extreme Temperature Swings</h3>
                <p className="text-gray-700">
                  Amarillo can see 100°F summer days and below-zero winter nights, sometimes within the same week.
                  This expansion and contraction puts tremendous stress on roofing materials, accelerating wear
                  and causing cracking.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">☀️ Intense UV Exposure</h3>
                <p className="text-gray-700">
                  At 3,605 feet elevation with over 260 days of sunshine annually, Amarillo roofs face intense
                  UV radiation that breaks down organic materials. This is why we recommend impact-resistant,
                  UV-stabilized shingles for maximum longevity.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Neighborhoods We Serve */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Amarillo Neighborhoods We Serve</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                We provide roofing services throughout all of Amarillo, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>✓ Wolflin</li>
                  <li>✓ Sleepy Hollow</li>
                  <li>✓ San Jacinto Heights</li>
                  <li>✓ Barrington Place</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Southwest Amarillo</li>
                  <li>✓ Tascosa</li>
                  <li>✓ Prospect Park</li>
                  <li>✓ North Heights</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Paramount Terrace</li>
                  <li>✓ Bishopsgate</li>
                  <li>✓ Colonies</li>
                  <li>✓ And all surrounding areas</li>
                </ul>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Whether you&apos;re near Coulter Street, Soncy Road, Western Street, or anywhere within Loop 335,
                we serve your area with fast, professional roofing services.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Customer Reviews */}
        <FadeIn>
          <section className="section bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="section-title">What Amarillo Residents Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;After the May hail storm damaged half of Wolflin, 5 Star was at our house within hours.
                  They handled everything with our insurance company and had us back under a new roof in two weeks.
                  Highly recommend!&quot;
                </p>
                <p className="font-semibold text-brand-brown">— Sarah M., Wolflin</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Our commercial building near I-40 needed a complete flat roof replacement. 5 Star worked
                  around our business hours and finished on budget. No leaks and great warranty.&quot;
                </p>
                <p className="font-semibold text-brand-brown">— James R., Commercial Property Owner</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;We called at 9pm with water pouring into our living room. They were here by 9:30pm with tarps
                  and stopped the leak. That&apos;s the kind of service you can&apos;t put a price on.&quot;
                </p>
                <p className="font-semibold text-brand-brown">— Mike T., Southwest Amarillo</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/reviews/" className="text-brand-gold font-semibold hover:text-brand-gold-vibrant text-lg">
                Read More Reviews →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Map Section */}
        <FadeIn>
          <section className="section">
            <h2 className="section-title">Visit Our Amarillo Office</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-brown mb-4">5 Star Commercial Roofing</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Address:</strong><br />
                        2909 S Western St<br />
                        Amarillo, TX 79109
                      </p>
                      <p>
                        <strong>Phone:</strong><br />
                        <a href="tel:8066226041" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold">
                          (806) 622-6041
                        </a>
                      </p>
                      <p>
                        <strong>Email:</strong><br />
                        <a href="mailto:admin@5starroofingpros.com" className="text-brand-gold hover:text-brand-gold-vibrant">
                          admin@5starroofingpros.com
                        </a>
                      </p>
                      <p>
                        <strong>Hours:</strong><br />
                        Monday - Sunday<br />
                        9:00 AM - 5:00 PM<br />
                        <span className="text-red-600 font-semibold">24/7 Emergency Service Available</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown mb-4">Serving All of Amarillo</h3>
                    <p className="text-gray-700 mb-4">
                      Located on South Western Street, we&apos;re centrally positioned to serve all of Amarillo
                      quickly. From the northern neighborhoods near Tascosa to South Amarillo near I-27,
                      we typically arrive within 30 minutes.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Our service radius includes:</strong> All of Amarillo proper, Canyon,
                      Bushland, and surrounding Potter and Randall County areas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.0!2d-101.8313!3d35.1859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148d5b7d3e54f%3A0x0!2s2909%20S%20Western%20St%2C%20Amarillo%2C%20TX%2079109!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="5 Star Commercial Roofing Location in Amarillo, TX"
                ></iframe>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Ready to Protect Your Amarillo Property?</h2>
            <p className="cta-text">
              Whether you need a free roof inspection, hail damage assessment, or emergency repairs,
              we&apos;re here to help. Serving Amarillo with honesty, integrity, and expert craftsmanship
              since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary-hero text-lg px-8 py-4">
                📞 Call (806) 622-6041 Now
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Nearby Cities */}
        <FadeIn>
          <section className="section pb-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-brown">
              Also Serving Nearby Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <a href="/canyon-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Canyon
              </a>
              <span className="text-gray-400">•</span>
              <a href="/plainview-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Plainview
              </a>
              <span className="text-gray-400">•</span>
              <a href="/hereford-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Hereford
              </a>
              <span className="text-gray-400">•</span>
              <a href="/borger-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Borger
              </a>
              <span className="text-gray-400">•</span>
              <a href="/pampa-texas-roofing/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                Pampa
              </a>
              <span className="text-gray-400">•</span>
              <a href="/service-areas/" className="text-brand-gold hover:text-brand-gold-vibrant font-medium">
                View All Service Areas
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://5starroofingpros.com/amarillo-texas-roofing/",
            "name": "5 Star Commercial Roofing - Amarillo",
            "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
            "image": "https://5starroofingpros.com/logo.png",
            "description": "Professional roofing contractor serving Amarillo, Texas. Expert hail damage repair, residential and commercial roofing services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2909 S Western St",
              "addressLocality": "Amarillo",
              "addressRegion": "TX",
              "postalCode": "79109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.1859",
              "longitude": "-101.8313"
            },
            "telephone": "+18066226041",
            "email": "admin@5starroofingpros.com",
            "url": "https://5starroofingpros.com",
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "areaServed": {
              "@type": "City",
              "@id": "https://en.wikipedia.org/wiki/Amarillo,_Texas",
              "name": "Amarillo",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roofing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hail Damage Roof Repair",
                    "description": "Expert hail damage assessment, documentation, and repair services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Roofing",
                    "description": "Complete residential roof replacement and repair services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roofing",
                    "description": "Commercial flat roof systems, TPO, EPDM, and maintenance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Installation",
                    "description": "Standing seam and metal roofing systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Roof Inspections",
                    "description": "Comprehensive roof inspections with no obligation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Roof Repair",
                    "description": "24/7 emergency roofing services for urgent situations"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "150"
            }
          })
        }}
      />
    </div>
  );
}
