import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Phone } from "lucide-react";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://5starroofingpros.com/blog/' },
  title: "Roofing Blog & Resources | 5 Star Roofing",
  description: "Roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, maintenance. Call (806) 622-6041",
  openGraph: {
    title: "Roofing Blog & Resources | 5 Star Roofing",
    description: "Roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, maintenance. Call (806) 622-6041",
    url: "https://5starroofingpros.com/blog/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-4-1280w.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog/" },
      ]} />

      <section className="hero" style={{ backgroundImage: 'url(https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/hail-damage/hail-damage-canyon-4-1280w.jpg)', backgroundPosition: 'center' }}>
        <div className="hero-overlay"></div>
        <FadeIn>
          <div className="hero-content">
            <h1 className="hero-title">Roofing Blog & Resources</h1>
            <p className="hero-subtitle">Expert Advice for Texas Homeowners</p>
          </div>
        </FadeIn>
      </section>

      <div className="container-custom py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-2xl text-gray-700 mb-6">
              <strong>Everything you need to know about roofing in Texas.</strong> From choosing materials to filing insurance claims, our guides help you make informed decisions about your roof.
            </p>
            <p className="text-xl text-gray-600">
              Written by experienced West Texas roofers who understand the unique challenges of our climate.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-brown">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article) => (
                <article
                  key={article.frontmatter.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-brand-brown mb-3">
                      <a
                        href={`/blog/${article.frontmatter.slug}/`}
                        className="hover:text-brand-gold transition-colors"
                      >
                        {article.frontmatter.title}
                      </a>
                    </h2>
                    <p className="text-gray-700 mb-4 flex-1">
                      {article.frontmatter.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        {article.readingTimeMinutes} min read
                      </span>
                      <a
                        href={`/blog/${article.frontmatter.slug}/`}
                        className="text-brand-gold font-semibold hover:text-brand-gold-vibrant"
                      >
                        Read Article →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section">
            <h2 className="cta-title">Have Questions About Your Roof?</h2>
            <p className="cta-text">Talk to a roofing expert. Free consultations and inspections throughout West Texas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4"><Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041</a>
              <a href="/contact/" className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg">Contact Us</a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Blog", "name": "5 Star Commercial Roofing Blog", "description": "Expert roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, maintenance, and insurance claims.", "publisher": { "@type": "Organization", "name": "5 Star Roofing" } }) }} />
    </div>
  );
}
