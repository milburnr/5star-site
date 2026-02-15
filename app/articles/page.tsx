import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/articles/' },
  title: 'Roofing Articles & Amarillo Guide | 5 Star',
  description: "Read our roofing articles and explore local Amarillo attractions. Expert tips on hail damage, storm damage, and roofing maintenance for West Texas homes.",
  openGraph: {
    title: "Roofing Articles & Local Amarillo Guide",
    description: "Expert roofing tips and local Amarillo guides from 5 Star Commercial Roofing. Call (806) 622-6041",
    type: "website",
  },
};

export default function Page() {
  const blogPosts = [
    {
      title: "Cadillac Ranch: Amarillo's Iconic Public Art Installation",
      url: "/amarillo-cadillac-ranch/",
      excerpt: "Explore one of Amarillo's most iconic roadside attractions and public art installations.",
    },
    {
      title: "Amarillo Botanical Gardens: An Oasis in the High Plains",
      url: "/amarillo-botanical-gardens/",
      excerpt: "Discover the beauty and tranquility of Amarillo's premier botanical gardens.",
    },
    {
      title: "Amarillo Zoo: Wildlife Adventures in the Texas Panhandle",
      url: "/amarillo-zoo/",
      excerpt: "A family-friendly guide to the Amarillo Zoo and its amazing animal exhibits.",
    },
    {
      title: "American Quarter Horse Hall of Fame & Museum in Amarillo",
      url: "/amarillo-quarter-horse-museum/",
      excerpt: "Learn about the rich history of the American Quarter Horse at this world-class museum.",
    },
    {
      title: "Whataburger in Amarillo: A Texas Culinary Icon",
      url: "/amarillo-whataburger/",
      excerpt: "The story of Whataburger and its special place in Amarillo's culinary landscape.",
    },
    {
      title: "Martin Road Park: Tranquility in Nature in Amarillo",
      url: "/amarillo-martin-road-park/",
      excerpt: "Find peace and recreation at one of Amarillo's beloved neighborhood parks.",
    },
  ];

  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Articles",
                      "url": "/articles/"
              }
      ]} />


      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Roofing Articles & Local Amarillo Guide",
            "description": "Expert roofing articles and local Amarillo guides from 5 Star Commercial Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "name": "5 Star Commercial Roofing",
              "telephone": "(806) 622-6041",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2909 S Western St",
                "addressLocality": "Amarillo",
                "addressRegion": "TX",
                "postalCode": "79109",
                "addressCountry": "US"
              }
            }
          })
        }}
      />

      <h1 className="text-4xl font-bold mb-6">Articles & Local Amarillo Guide</h1>

      <div className="mb-12">
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our collection of articles featuring local Amarillo attractions and roofing insights.
          As a locally-owned business, we're proud to serve Amarillo and showcase the best our community has to offer.
          For professional <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing services in Amarillo</a>,
          call us at <strong>(806) 622-6041</strong> for a free inspection.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Whether you're exploring the Texas Panhandle or need expert roofing advice, you'll find valuable
          information here. From <a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold hover:underline">hail damage repair</a> to
          local attractions, we cover it all. Our team serves Amarillo, Midland, Odessa, Lubbock, and all surrounding
          West Texas communities with comprehensive <a href="/residential-roofing-amarillo-tx/" className="text-brand-gold hover:underline">residential</a> and
          <a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold hover:underline"> commercial roofing solutions</a>.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-brand-brown mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <span className="text-brand-gold font-semibold">Read More →</span>
          </a>
        ))}
      </div>

      {/* Roofing Resources Section */}
      <section className="bg-brand-gold-light p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Professional Roofing Resources for West Texas</h2>
        <p className="mb-6">
          Looking for expert roofing information? At 5 Star Commercial Roofing, we provide comprehensive
          roofing services throughout the Texas Panhandle. Check out our specialized service pages for
          detailed information about our roofing solutions:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <a href="/hail-damage-roof-repair-in-amarillo/" className="btn-secondary block text-center">
            Hail Damage Guide
          </a>
          <a href="/roof-inspections-in-amarillo/" className="btn-secondary block text-center">
            Roof Inspections
          </a>
          <a href="/amarillo-weather-impact-on-roofing/" className="btn-secondary block text-center">
            Weather & Roof Longevity
          </a>
        </div>
        <p className="text-gray-700">
          Our services extend beyond Amarillo to include <a href="/midland-tx-roofing/" className="text-brand-gold hover:underline">Midland</a>,
          <a href="/odessa-tx-roofing/" className="text-brand-gold hover:underline"> Odessa</a>, and Lubbock.
          We offer free inspections, prompt services, and work directly with your insurance company
          for hail and storm damage claims. Call <strong>(806) 622-6041</strong> today for immediate assistance.
        </p>
      </section>

      {/* Additional Content Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose 5 Star Commercial Roofing?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Expert Roofing Services</h3>
            <p className="text-gray-700 mb-4">
              With over 10 years of experience serving the Texas Panhandle, we understand the unique
              roofing challenges of our region. From severe hailstorms to extreme temperature fluctuations,
              we've seen it all and know how to protect your home or business.
            </p>
            <p className="text-gray-700">
              Visit our <a href="/contact/" className="text-brand-gold hover:underline">contact page</a> to
              schedule your free roof inspection today.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Local Knowledge, Quality Results</h3>
            <p className="text-gray-700 mb-4">
              As Amarillo locals, we're not just your roofing contractor—we're your neighbors. We take
              pride in our community and are committed to providing the highest quality roofing services
              at fair, competitive prices. Every project is completed with the same attention to detail
              we'd expect for our own homes.
            </p>
            <p className="text-gray-700">
              Explore our comprehensive <a href="/roofing-amarillo-tx/" className="text-brand-gold hover:underline">roofing services</a> to
              learn more about what we can do for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gold text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need Roofing Help in Amarillo?</h2>
        <p className="mb-6 text-lg">
          Free inspections, expert repairs, and insurance claim assistance. Contact us today!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary bg-white text-brand-brown hover:bg-gray-100">
            Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary border-2 border-white hover:bg-white hover:text-brand-brown">
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
