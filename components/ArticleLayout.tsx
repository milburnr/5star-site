import { Calendar, Clock, Phone } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { Breadcrumb } from "./Breadcrumb";
import { ArticleImage } from "./ArticleImage";
import type { Article } from "@/lib/articles";

interface Props {
  article: Article;
  children: React.ReactNode;
}

// Deterministic date formatter — no locale/TZ variance between server and client.
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map((s) => Number.parseInt(s, 10));
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export function ArticleLayout({ article, children }: Props) {
  const { frontmatter, readingTimeMinutes } = article;
  const formattedDate = formatDate(frontmatter.date);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: frontmatter.title, url: `/blog/${frontmatter.slug}/` },
  ];

  const articleUrl = `https://5starroofingpros.com/blog/${frontmatter.slug}/`;

  // JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.lastmod || frontmatter.date,
    ...(frontmatter.heroImage ? { image: frontmatter.heroImage } : {}),
    author: {
      "@type": "Organization",
      name: "5 Star Commercial Roofing",
      url: "https://5starroofingpros.com",
    },
    publisher: {
      "@type": "Organization",
      name: "5 Star Commercial Roofing",
      logo: {
        "@type": "ImageObject",
        url: "https://5starroofingpros.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  // JSON-LD FAQPage schema (only if frontmatter.faq is populated)
  const faqSchema =
    frontmatter.faq && frontmatter.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: frontmatter.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumb items={breadcrumbItems} />

      <article className="container-custom py-8 md:py-12">
        <FadeIn>
          <header className="max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-primary mb-4 leading-tight">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="text-xl text-gray-text mb-6 leading-relaxed">
                {frontmatter.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readingTimeMinutes} min read
              </span>
              {frontmatter.city && (
                <span className="inline-flex items-center gap-1.5 text-brand-brown font-medium">
                  {frontmatter.city}, TX
                </span>
              )}
            </div>
          </header>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {frontmatter.heroImage && (
            <ArticleImage
              src={frontmatter.heroImage}
              alt={frontmatter.heroAlt || frontmatter.title}
              caption={frontmatter.heroCaption}
              variant="hero"
              priority
            />
          )}
          <div className="prose prose-lg max-w-none">{children}</div>

          {frontmatter.faq && frontmatter.faq.length > 0 && (
            <FadeIn>
              <section className="mt-16" aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  className="text-3xl font-bold text-gray-primary mb-6"
                >
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {frontmatter.faq.map((item, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-brand-gold pl-5"
                    >
                      <h3 className="text-xl font-semibold text-gray-primary mb-2">
                        {item.q}
                      </h3>
                      <p className="text-gray-text leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          <FadeIn>
            <div className="mt-16 rounded-lg bg-gray-800 text-white p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-gold mb-3">
                Need a roof inspection{frontmatter.city ? ` in ${frontmatter.city}` : ""}?
              </h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Free, no-pressure roof inspections from a locally owned Amarillo
                company. We&apos;ll walk you through exactly what we find — with photos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+18066226041"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call (806) 622-6041
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 rounded text-white hover:bg-white/10 transition"
                >
                  Request Online
                </Link>
              </div>
            </div>
          </FadeIn>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <FadeIn>
              <div className="mt-10 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </article>
    </>
  );
}
