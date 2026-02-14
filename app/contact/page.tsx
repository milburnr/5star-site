import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InteractiveCard } from "@/components/InteractiveCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/contact/' },
  title: "Contact Us | 5 Star Commercial Roofing | Amarillo, TX",
  description: 'Contact 5 Star Commercial Roofing for roofing services in Amarillo, Midland, Odessa, and West Texas.',
  openGraph: {
    title: "Contact Us | 5 Star Commercial Roofing",
    description: "Get in touch with West Texas's trusted roofing experts. Free inspections available.",
    type: "website",
  },
};

// JSON-LD Schema Markup for ContactPage
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "5 Star Commercial Roofing",
    "image": "https://5starroofingpros.com/images/5-star-with-letters-1.png",
    "@id": "https://5starroofingpros.com",
    "url": "https://5starroofingpros.com",
    "telephone": "(806) 622-6041",
    "email": "admin@5starroofingpros.com",
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
      "latitude": 35.1849,
      "longitude": -101.8552
    },
    "openingHoursSpecification": {
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
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Amarillo"
      },
      {
        "@type": "City",
        "name": "Midland"
      },
      {
        "@type": "City",
        "name": "Odessa"
      },
      {
        "@type": "City",
        "name": "Lubbock"
      },
      {
        "@type": "City",
        "name": "Canyon"
      }
    ],
    "priceRange": "$$",
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
            "name": "Roof Replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Inspection"
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
  }
};

export default function ContactPage() {
  return (
    <>      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Contact",
                      "url": "/contact/"
              }
      ]} />


      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-24 min-h-[400px] flex items-center"
        style={{
          backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/completed/completed-amarillo-3-1280w.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-orange-900/50 to-yellow-900/40"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9)'}}>
              Get In Touch With <span className="text-brand-gold-light">West Texas's Roofing Experts</span>
            </h1>
            <p className="text-2xl text-white leading-relaxed" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
              Ready to protect your property? Contact us today for a free inspection and expert consultation.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl border border-brand-gold/20">
              <h2 className="text-3xl font-bold mb-6 text-brand-brown">Request a Free Inspection</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. All inspections are completely free with no obligation.
              </p>

              {/* HighLevel Form */}
              <HighLevelForm />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              {/* Main Contact Info */}
              <InteractiveCard tiltEffect={false}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-brand-brown">Contact Information</h2>
                    <p className="text-gray-700 text-lg">
                      Reach out to us directly through any of these channels. We're here to help with all your roofing needs.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-brand-gold/20">
                      <span className="text-3xl">📞</span>
                      <div>
                        <h3 className="font-bold text-brand-brown mb-1">Phone</h3>
                        <a
                          href="tel:8066226041"
                          className="text-xl text-brand-gold hover:text-brand-gold-vibrant font-semibold hover:underline transition-colors"
                        >
                          (806) 622-6041
                        </a>
                        <p className="text-sm text-gray-600 mt-1">Click to call now</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-brand-gold/20">
                      <span className="text-3xl">✉️</span>
                      <div>
                        <h3 className="font-bold text-brand-brown mb-1">Email</h3>
                        <a
                          href="mailto:admin@5starroofingpros.com"
                          className="text-lg text-brand-gold hover:text-brand-gold-vibrant hover:underline transition-colors break-all"
                        >
                          admin@5starroofingpros.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-brand-gold/20">
                      <span className="text-3xl">📍</span>
                      <div>
                        <h3 className="font-bold text-brand-brown mb-1">Address</h3>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=2909+S+Western+St+Amarillo+TX+79109"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-brand-gold hover:text-brand-gold-vibrant hover:underline transition-colors"
                        >
                          2909 S Western St<br />
                          Amarillo, TX 79109
                        </a>
                        <p className="text-sm text-gray-600 mt-1">Click for directions</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-brand-gold/20">
                      <span className="text-3xl">🕒</span>
                      <div>
                        <h3 className="font-bold text-brand-brown mb-1">Business Hours</h3>
                        <p className="text-gray-700">Monday - Sunday</p>
                        <p className="text-gray-700">9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveCard>

            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Visit Our Location</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5244!2d-101.8552!3d35.1849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870148d5b5e5b5b5%3A0x5e5e5e5e5e5e5e5e!2s2909%20S%20Western%20St%2C%20Amarillo%2C%20TX%2079109!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="5 Star Commercial Roofing Location Map"
                className="w-full"
              ></iframe>
            </div>
          </section>
        </div>

        {/* Service Areas */}
        <div>
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-2xl border-2 border-brand-gold/20 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Service Areas</h2>
            <p className="text-xl text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              Proudly serving communities throughout West Texas and the Panhandle with expert roofing services
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { city: 'Amarillo', icon: '🏙️', link: '/roofing-amarillo-tx/' },
                { city: 'Midland', icon: '🌆', link: '/midland-tx-roofing/' },
                { city: 'Odessa', icon: '🏘️', link: '/odessa-tx-roofing/' },
                { city: 'Lubbock', icon: '🌃', link: '/lubbock-tx-roofing/' },
                { city: 'Canyon', icon: '🏞️', link: '/canyon-tx-roofing/' },
                { city: 'Pampa', icon: '🏡', link: '/service-areas/' },
                { city: 'Borger', icon: '🏠', link: '/service-areas/' },
                { city: 'Hereford', icon: '🌾', link: '/service-areas/' },
                { city: 'Plainview', icon: '🌻', link: '/service-areas/' },
                { city: 'Dumas', icon: '⭐', link: '/service-areas/' },
              ].map((area, index) => (
                <FadeIn key={area.city} delay={index * 0.05}>
                  <a
                    href={area.link}
                    className="block bg-white p-6 rounded-xl text-center hover:shadow-2xl hover:scale-110 hover:border-2 hover:border-brand-gold transition-all duration-300 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <div className="font-bold text-brand-brown group-hover:text-brand-gold transition-colors text-lg">
                      {area.city}
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8 text-lg">
              Don't see your city listed? <a href="tel:8066226041" className="text-brand-gold hover:text-brand-gold-vibrant font-semibold hover:underline">Call us</a> - we may still serve your area!
            </p>
          </section>
        </div>

        {/* Why Choose Us */}
        <div>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Why Choose 5 Star Commercial Roofing?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FadeIn delay={0.1}>
                <InteractiveCard>
                  <div className="text-center">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Free Inspections</h3>
                    <p className="text-gray-700">
                      Comprehensive roof evaluations at no cost to you. No obligation, no pressure.
                    </p>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.2}>
                <InteractiveCard>
                  <div className="text-center">
                    <div className="text-5xl mb-4">📋</div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Insurance Experts</h3>
                    <p className="text-gray-700">
                      Full assistance with insurance claims and documentation for hassle-free repairs.
                    </p>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.3}>
                <InteractiveCard>
                  <div className="text-center">
                    <div className="text-5xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">Fast Response</h3>
                    <p className="text-gray-700">
                      Quick scheduling and prompt service when you need roof repairs or inspections.
                    </p>
                  </div>
                </InteractiveCard>
              </FadeIn>

              <FadeIn delay={0.4}>
                <InteractiveCard>
                  <div className="text-center">
                    <div className="text-5xl mb-4">⭐</div>
                    <h3 className="text-xl font-bold mb-3 text-brand-brown">10+ Years Experience</h3>
                    <p className="text-gray-700">
                      Trusted by West Texas homeowners and businesses for over a decade.
                    </p>
                  </div>
                </InteractiveCard>
              </FadeIn>
            </div>
          </section>
        </div>

        {/* Services Overview */}
        <div>
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-amber-50 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-brown">Our Roofing Services</h2>
            <p className="text-center text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              From storm damage repairs to complete roof replacements, we offer comprehensive roofing solutions for residential and commercial properties across West Texas.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Hail Damage Repair</h3>
                <p className="text-gray-700 mb-4">
                  Expert <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">hail damage repair</a> services with insurance claim assistance throughout the Texas Panhandle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Residential Roofing</h3>
                <p className="text-gray-700 mb-4">
                  Complete <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">residential roofing</a> solutions including repairs, replacements, and new installations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-brand-brown mb-3">Commercial Roofing</h3>
                <p className="text-gray-700 mb-4">
                  Specialized <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:text-brand-gold-vibrant">commercial roofing</a> for businesses, warehouses, and industrial facilities.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/services/" className="inline-block bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-brand-brown px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                View All Services
              </a>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <div>
          <section className="bg-gradient-to-r from-brand-brown via-amber-900 to-brand-brown text-white p-12 rounded-2xl text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-brand-gold-bright">Ready to Get Started?</h2>
            <p className="text-2xl mb-8 max-w-3xl mx-auto">
              Don't wait until minor damage becomes a major problem. Contact us today for your free, no-obligation roof inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:8066226041"
                className="bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-brand-brown hover:text-white text-xl px-12 py-5 rounded-full font-bold shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-3xl">📞</span>
                Call (806) 622-6041
              </a>
              <a
                href="mailto:admin@5starroofingpros.com"
                className="bg-white text-brand-brown hover:bg-gray-100 text-xl px-12 py-5 rounded-full font-bold shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-brand-gold flex items-center gap-3"
              >
                <span className="text-3xl">✉️</span>
                Email Us Today
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
