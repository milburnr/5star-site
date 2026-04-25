import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

interface Props {
  pageSlug: string;
  limit?: number;
  heading?: string;
}

function tokenize(slug: string): string[] {
  return slug
    .toLowerCase()
    .split(/[-_]+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 3);
}

export default function RelatedArticles({
  pageSlug,
  limit = 4,
  heading = "Related Reading",
}: Props) {
  const articles = getAllArticles();
  if (!articles.length) return null;

  const tokens = tokenize(pageSlug);

  const scored = articles.map((a) => {
    const fm = a.frontmatter;
    const haystack = [
      fm.title,
      fm.description,
      fm.slug,
      fm.city ?? "",
      fm.topic ?? "",
      (fm.tags ?? []).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (haystack.includes(t)) score += 1;
    }
    return { article: a, score };
  });

  let chosen = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.article);

  if (chosen.length < 2) {
    // Fallback: most recent N (getAllArticles is already date-desc)
    chosen = articles.slice(0, limit);
  }

  if (!chosen.length) return null;

  return (
    <section className="bg-gray-50 py-12 mt-12">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-brand-brown">{heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {chosen.map((a) => {
            const fm = a.frontmatter;
            return (
              <Link
                key={fm.slug}
                href={`/blog/${fm.slug}/`}
                className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                  {fm.title}
                </h3>
                <p
                  className="text-gray-600 mb-3"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {fm.description}
                </p>
                <span className="text-sm font-semibold text-brand-gold">
                  {a.readingTimeMinutes} min read &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
