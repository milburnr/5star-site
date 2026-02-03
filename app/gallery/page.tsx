import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Project Gallery | 5 Star Commercial Roofing Portfolio",
  description: 'View our completed roofing projects in Amarillo, Midland, Odessa, and Lubbock. Call for a free quote!',
  keywords: "roofing gallery, roofing portfolio, Amarillo roofing projects, before after roofing, hail damage repair photos, TPO installation photos",
};

export default function GalleryPage() {
  const projects = [
    {
      title: "Sleepy Hollow Residential Roof Replacement",
      location: "Amarillo, TX",
      description: "Complete architectural shingle roof replacement after hail damage. Class 4 impact-resistant shingles installed.",
      category: "Residential",
      beforeImages: [
        "/images/danage.jpg",
        "/images/hail-damage-3.jpg",
        "/images/danage.jpg",
      ],
      afterImages: [
        "/images/ResidentialServices.jpg",
        "/images/ResidentialServices.jpg",
        "/images/Aerialview.jpg",
        "/images/ResidentialServices.jpg",
      ],
    },
    {
      title: "Borger Storm Damage Restoration",
      location: "Borger, TX",
      description: "Insurance claim assistance and complete roof replacement following severe storm damage.",
      category: "Residential",
      beforeImages: [
        "/images/hail-damage-3.jpg",
        "/images/danage.jpg",
        "/images/hail-damage-3.jpg",
      ],
      afterImages: [
        "/images/ResidentialServices.jpg",
        "/images/Aerialview.jpg",
        "/images/ResidentialServices.jpg",
      ],
    },
    {
      title: "Hereford Commercial Roof Installation",
      location: "Hereford, TX",
      description: "New commercial roofing system installation with 20-year warranty.",
      category: "Commercial",
      afterImages: [
        "/images/Alluminumroofing.jpg",
        "/images/ResidentialServices.jpg",
        "/images/Aerialview.jpg",
      ],
    },
    {
      title: "Commercial TPO Roofing Projects",
      location: "West Texas",
      description: "TPO membrane installations on commercial buildings throughout Amarillo, Midland, and Odessa.",
      category: "Commercial",
      afterImages: [
        "/images/TPO1.jpg",
        "/images/TPO2.jpg",
        "/images/TPO3.jpg",
        "/images/TPO1.jpg",
        "/images/TPO2.jpg",
        "/images/TPO3.jpg",
      ],
    },
  ];

  const actionPhotos = [
    {
      image: "/images/Constructionhome.jpg",
      caption: "Professional crew performing roof inspection",
    },
    {
      image: "/images/Aerialview.jpg",
      caption: "Quality installation in progress",
    },
  ];

  const sunsetPhotos = [
    {
      image: "/images/TPO1.jpg",
      caption: "Completed TPO installation at sunset",
    },
    {
      image: "/images/TPO2.jpg",
      caption: "Commercial flat roof project",
    },
    {
      image: "/images/TPO3.jpg",
      caption: "Quality workmanship on every project",
    },
    {
      image: "/images/TPO1.jpg",
      caption: "Professional TPO membrane installation",
    },
    {
      image: "/images/TPO2.jpg",
      caption: "Sunset view of completed commercial roof",
    },
    {
      image: "/images/TPO3.jpg",
      caption: "West Texas roofing excellence",
    },
    {
      image: "/images/TPO1.jpg",
      caption: "Another successful project completion",
    },
    {
      image: "/images/TPO2.jpg",
      caption: "Energy-efficient white TPO roofing",
    },
    {
      image: "/images/TPO3.jpg",
      caption: "Premium commercial roofing systems",
    },
  ];

  return (
    <div className="min-h-screen">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Gallery",
                      "url": "/gallery/"
              }
      ]} />


      {/* Hero Section */}
      <section className="hero-home relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-orange-900/40 to-yellow-900/30"></div>
        <FadeIn>
          <div className="hero-content relative z-10">
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight" style={{textShadow: '0 4px 12px rgba(0,0,0,0.9)'}}>
              Our <span className="text-brand-gold-light">Work</span>
            </h1>
            <p className="text-3xl text-white leading-relaxed" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
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
            <p className="text-lg text-gray-600">
              From <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-brown hover:text-brand-gold underline">residential hail damage repairs</a> to <a href="/commercial-roofing/" className="text-brand-brown hover:text-brand-gold underline">commercial TPO installations</a>, we deliver quality workmanship on every project. Learn more about our <a href="/residential-roofing/" className="text-brand-brown hover:text-brand-gold underline">residential services</a> or view our <a href="/services/" className="text-brand-brown hover:text-brand-gold underline">complete service offerings</a>.
            </p>
          </div>
        </FadeIn>

        {/* Before & After Projects */}
        {projects.map((project, index) => (
          <FadeIn key={index}>
            <section className="mb-20">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="text-brand-brown font-semibold">📍 {project.location}</span>
                </div>
                <h2 className="text-3xl font-bold text-brand-brown mb-3">{project.title}</h2>
                <p className="text-lg text-gray-600">{project.description}</p>
              </div>

              {project.beforeImages && project.beforeImages.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold mb-4">Before</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {project.beforeImages.map((img, i) => (
                      <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={img} alt={`${project.title} before ${i + 1}`} className="w-full h-64 object-cover" />
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 className="text-2xl font-bold mb-4">After</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {project.afterImages.map((img, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={img} alt={`${project.title} after ${i + 1}`} className="w-full h-64 object-cover" />
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        ))}

        {/* Our Team at Work */}
        <FadeIn>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-brown mb-8 text-center">Our Team in Action</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {actionPhotos.map((photo, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={photo.image} alt={photo.caption} className="w-full h-80 object-cover" />
                  <div className="p-4">
                    <p className="text-center text-gray-700 font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Commercial Projects Gallery */}
        <FadeIn>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-brown mb-4 text-center">Commercial Roofing Excellence</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Our commercial TPO roofing installations across West Texas. Energy-efficient, durable, and built to last.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {sunsetPhotos.map((photo, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={photo.image} alt={photo.caption} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Large Format Hero Images */}
        <FadeIn>
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-brown mb-8 text-center">Featured Commercial Projects</h2>
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/commercial-roof-1024x575-panorama.png"
                  alt="Commercial TPO flat roof installation Amarillo TX - White membrane roofing system for warehouse and industrial buildings - 5 Star Commercial Roofing"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/commercial-roof-1024x575-panorama.png"
                  alt="Large commercial warehouse roof installation Midland TX - Professional roofing crew installing TPO membrane system - Texas Panhandle roofing contractor"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/commercial-roof-1024x575-panorama.png"
                  alt="Industrial building TPO roofing project Odessa TX - Flat roof installation for oil and gas facilities - Permian Basin commercial roofing"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/commercial-roof-1024x575-panorama.png"
                  alt="Professional commercial roofing crew installing flat roof system West Texas - Expert TPO and PVC membrane installation Amarillo Midland Odessa"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-text">
              Let us transform your roof with the same quality and attention to detail you see in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                📞 Call (806) 622-6041
              </a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">
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
          "parentOrganization": {"@id": "https://5starroofingpros.com/#organization"},
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
