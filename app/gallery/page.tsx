import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/gallery/' },
  title: "Project Gallery | 5 Star Commercial Roofing Portfolio",
  description: 'View our completed roofing projects in Amarillo, Midland, Odessa, and Lubbock. Residential and commercial roofing photos from across West Texas.',
  keywords: "roofing gallery, roofing portfolio, Amarillo roofing projects, before after roofing, hail damage repair photos, TPO installation photos",
};

// R2 CDN base URL
const R2_CDN = "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev";

// Commercial project images - variety of TPO and flat roof installations
const commercialImages = [
  { url: `${R2_CDN}/images/commercial/commercial-pampa-1-1280w.jpg`, caption: "Commercial TPO installation - Pampa, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-pampa-2-1280w.jpg`, caption: "Large warehouse roofing - Pampa, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-pampa-3-1280w.jpg`, caption: "Industrial flat roof - Pampa, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-amarillo-5-1280w.jpg`, caption: "Commercial project - Amarillo, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-channing-8-1280w.jpg`, caption: "TPO roofing system - Channing, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-amarillo-10-1280w.jpg`, caption: "Commercial installation - Amarillo, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-amarillo-11-1280w.jpg`, caption: "Flat roof replacement - Amarillo, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-amarillo-12-1280w.jpg`, caption: "Large commercial project - Amarillo, TX" },
  { url: `${R2_CDN}/images/commercial/commercial-pampa-4-1280w.jpg`, caption: "Commercial roofing - Pampa, TX" },
];

// Residential shingle project images
const residentialImages = [
  { url: `${R2_CDN}/images/shingle/shingle-midland-1-1280w.jpg`, caption: "Shingle installation - Midland, TX" },
  { url: `${R2_CDN}/images/shingle/shingle-san-angelo-2-1280w.jpg`, caption: "Residential roofing - San Angelo, TX" },
  { url: `${R2_CDN}/images/shingle/shingle-perryton-3-1280w.jpg`, caption: "New shingle roof - Perryton, TX" },
  { url: `${R2_CDN}/images/shingle/shingle-perryton-4-1280w.jpg`, caption: "Shingle replacement - Perryton, TX" },
  { url: `${R2_CDN}/images/shingle/shingle-odessa-5-1280w.jpg`, caption: "Residential project - Odessa, TX" },
  { url: `${R2_CDN}/images/shingle/shingle-perryton-6-1280w.jpg`, caption: "Complete reroof - Perryton, TX" },
];

// Hail damage repair projects (before photos)
const hailDamageImages = [
  { url: `${R2_CDN}/images/hail-damage/hail-damage-canyon-1-1280w.jpg`, caption: "Hail damage assessment - Canyon, TX" },
  { url: `${R2_CDN}/images/hail-damage/hail-damage-canyon-2-1280w.jpg`, caption: "Storm damage repair - Canyon, TX" },
  { url: `${R2_CDN}/images/hail-damage/hail-damage-levelland-3-1280w.jpg`, caption: "Hail impact damage - Levelland, TX" },
  { url: `${R2_CDN}/images/hail-damage/hail-damage-midland-6-1280w.jpg`, caption: "Insurance claim project - Midland, TX" },
  { url: `${R2_CDN}/images/hail-damage/hail-damage-amarillo-16-1280w.jpg`, caption: "Hail damage - Amarillo, TX" },
  { url: `${R2_CDN}/images/hail-damage/hail-damage-amarillo-22-1280w.jpg`, caption: "Storm restoration - Amarillo, TX" },
];

// Completed projects - mix of types
const completedImages = [
  { url: `${R2_CDN}/images/completed/completed-san-angelo-1-1280w.jpg`, caption: "Completed project - San Angelo, TX" },
  { url: `${R2_CDN}/images/completed/completed-odessa-2-1280w.jpg`, caption: "New roof installation - Odessa, TX" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { "name": "Home", "url": "/" },
        { "name": "Gallery", "url": "/gallery/" }
      ]} />

      {/* Hero Section */}
      <section className="hero-home relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-orange-900/40 to-yellow-900/30"></div>
        <FadeIn>
          <div className="container-custom relative z-10 py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9)'}}>
              Our <span className="text-brand-gold-light">Work</span>
            </h1>
            <p className="text-xl md:text-3xl text-white leading-relaxed" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
              Quality Roofing Projects Across <span className="text-brand-gold-light">West Texas</span>
            </p>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        {/* Introduction */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Real Projects, Real Results</h2>
            <p className="text-xl text-gray-600 mb-4">
              Browse our portfolio of completed roofing projects throughout <a href="/roofing-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline font-semibold">Amarillo</a>, <a href="/midland-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline font-semibold">Midland</a>, <a href="/odessa-tx-roofing/" className="text-brand-brown hover:text-brand-gold underline font-semibold">Odessa</a>, and surrounding <a href="/service-areas/" className="text-brand-brown hover:text-brand-gold underline">West Texas communities</a>.
            </p>
          </div>
        </FadeIn>

        {/* Commercial Projects */}
        <FadeIn>
          <section className="mb-20">
            <div className="mb-8">
              <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-semibold">Commercial</span>
              <h2 className="text-3xl font-bold text-brand-brown mt-4 mb-3">Commercial Roofing Projects</h2>
              <p className="text-lg text-gray-600">TPO, EPDM, and flat roof installations for businesses across West Texas.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {commercialImages.map((img, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={img.url} alt={img.caption} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/commercial-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold underline">
                Learn More About Commercial Roofing →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Residential Projects */}
        <FadeIn>
          <section className="mb-20">
            <div className="mb-8">
              <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-semibold">Residential</span>
              <h2 className="text-3xl font-bold text-brand-brown mt-4 mb-3">Residential Roofing Projects</h2>
              <p className="text-lg text-gray-600">Shingle replacements and repairs for homes throughout the Texas Panhandle.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {residentialImages.map((img, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={img.url} alt={img.caption} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/residential-roofing/" className="text-brand-brown font-semibold hover:text-brand-gold underline">
                Learn More About Residential Roofing →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Hail Damage & Insurance Work */}
        <FadeIn>
          <section className="mb-20">
            <div className="mb-8">
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Storm Damage</span>
              <h2 className="text-3xl font-bold text-brand-brown mt-4 mb-3">Hail & Storm Damage Repairs</h2>
              <p className="text-lg text-gray-600">Insurance claim assistance and complete roof restoration after Texas storms.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {hailDamageImages.map((img, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={img.url} alt={img.caption} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown font-semibold hover:text-brand-gold underline">
                Learn More About Hail Damage Repair →
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Completed Work Showcase */}
        <FadeIn>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-brown mb-8 text-center">Recently Completed Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {completedImages.map((img, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={img.url} alt={img.caption} className="w-full h-80 object-cover" loading="lazy" />
                  <div className="p-4">
                    <p className="text-center text-gray-700 font-medium">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Why Choose Us Stats */}
        <FadeIn>
          <section className="mb-20 bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-brand-brown mb-8 text-center">Why West Texas Trusts Us</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">$50M+</div>
                <div className="text-gray-600">Claims Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">20+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-gold mb-2">⭐⭐⭐⭐⭐</div>
                <div className="text-gray-600">5-Star Rated</div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="bg-gradient-to-r from-brand-brown to-brand-gold text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us transform your roof with the same quality and attention to detail you see in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="bg-white text-brand-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-brown transition-all text-lg">
                Request Free Inspection
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "5 Star Commercial Roofing Project Gallery",
        "description": "Completed roofing projects in Amarillo, Midland, Odessa, and West Texas",
        "provider": {
          "@type": "RoofingContractor",
          "name": "5 Star Commercial Roofing",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2909 S Western St",
            "addressLocality": "Amarillo",
            "addressRegion": "TX",
            "postalCode": "79109"
          }
        }
      })}}/>
    </div>
  );
}
