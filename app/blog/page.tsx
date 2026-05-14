import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import { InteriorHeroSection } from "@/components/InteriorHeroSection";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Phone, Clock } from "lucide-react";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  alternates: { canonical: "https://5starroofingpros.com/blog/" },
  title: "Roofing Blog & Resources | 5 Star Roofing",
  description:
    "Roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, and maintenance from West Texas roofers. Call (806) 622-6041",
  openGraph: {
    title: "Roofing Blog & Resources | 5 Star Roofing",
    description:
      "Roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, and maintenance from West Texas roofers. Call (806) 622-6041",
    url: "https://5starroofingpros.com/blog/",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-storm.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Roofing Blog & Resources for Texas Homeowners",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const TOPIC_LABEL: Record<string, string> = {
  materials: "Materials",
  cost: "Cost & Budget",
  insurance: "Insurance",
  "hail-damage": "Hail Damage",
  installation: "Installation",
  maintenance: "Maintenance",
  inspection: "Inspection",
  "roof-types": "Roof Types",
  ventilation: "Ventilation",
  components: "Roof Components",
};

const FALLBACK_HERO =
  "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/hero-storm.jpg";

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}

export default function BlogIndexPage() {
  const articles = getAllArticles().filter((a) => !a.frontmatter.noindex);

  return (
    <div className="min-h-screen">
      <StickyContactBar />

      <InteriorHeroSection
        heroVariant="service"
        service="Blog & Resources"
        h1="Roofing Blog & Resources"
        eyebrow="Expert Advice for Texas Homeowners"
        image="/images/heroes/cities/amarillo-hero-1200.webp"
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog/" },
        ]}
      />

      <div className="container-custom">
        <FadeIn>
          <section className="mb-12 max-w-5xl mx-auto bg-amber-50 border-l-4 border-brand-gold rounded-r-2xl p-6 mt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
              About This Blog
            </p>
            <p className="text-gray-800 font-medium leading-relaxed">
              Practical roofing guidance from working West Texas roofers. We cover materials, costs,
              insurance claims, and maintenance for homes built to handle Panhandle hail, Permian
              Basin heat, and the everything in between.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-brand-brown">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article) => {
                const fm = article.frontmatter;
                const hero = fm.heroImage || fm.ogImage || FALLBACK_HERO;
                const heroAlt = fm.heroAlt || fm.title;
                const topicLabel =
                  fm.topic && TOPIC_LABEL[fm.topic]
                    ? TOPIC_LABEL[fm.topic]
                    : fm.topic
                    ? fm.topic
                        .split("-")
                        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                        .join(" ")
                    : null;
                return (
                  <article
                    key={fm.slug}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col border border-gray-100"
                  >
                    <a
                      href={`/blog/${fm.slug}/`}
                      className="block relative aspect-[16/9] overflow-hidden bg-gray-100"
                    >
                      <img
                        src={hero}
                        alt={heroAlt}
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {topicLabel ? (
                        <span className="absolute top-3 left-3 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                          {topicLabel}
                        </span>
                      ) : null}
                    </a>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-brand-brown mb-3 leading-snug">
                        <a
                          href={`/blog/${fm.slug}/`}
                          className="hover:text-brand-gold transition-colors"
                        >
                          {fm.title}
                        </a>
                      </h3>
                      <p className="text-gray-700 mb-4 flex-1 text-sm leading-relaxed">
                        {fm.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500">
                        <span>{formatDate(fm.lastmod || fm.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readingTimeMinutes} min read
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="cta-section my-16">
            <h2 className="cta-title">Have Questions About Your Roof?</h2>
            <p className="cta-text">
              Talk to a roofing expert. Free consultations and inspections throughout West Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8066226041" className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5 inline-block" /> Call (806) 622-6041
              </a>
              <a
                href="/contact/"
                className="bg-white text-brand-brown px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all text-lg"
              >
                Contact Us
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "5 Star Commercial Roofing Blog",
            description:
              "Expert roofing advice for Texas homeowners. Guides on hail damage, roof costs, materials, maintenance, and insurance claims.",
            publisher: { "@type": "Organization", name: "5 Star Roofing" },
            blogPost: articles.slice(0, 20).map((a) => ({
              "@type": "BlogPosting",
              headline: a.frontmatter.title,
              description: a.frontmatter.description,
              datePublished: a.frontmatter.date,
              dateModified: a.frontmatter.lastmod || a.frontmatter.date,
              url: `https://5starroofingpros.com/blog/${a.frontmatter.slug}/`,
              image: a.frontmatter.heroImage || FALLBACK_HERO,
            })),
          }),
        }}
      />
    </div>
  );
}
