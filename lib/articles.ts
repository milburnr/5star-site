import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export interface FaqItem {
  q: string;
  a: string;
}

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  lastmod?: string;
  slug: string;
  tags?: string[];
  topic?: string;
  question_id?: string;
  city?: string;
  type?: string;
  ogImage?: string;
  heroImage?: string;
  heroAlt?: string;
  heroCaption?: string;
  faq?: FaqItem[];
  noindex?: boolean;
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTimeMinutes: number;
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    frontmatter: { ...(data as ArticleFrontmatter), slug },
    content,
    readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
  };
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticle(slug))
    .filter((a): a is Article => a !== null)
    .sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
    );
}

// Related guides for the article footer. Tags are weighted by rarity: a shared
// "Bushland" tag means far more than a shared "materials" tag that half the
// guides carry. Noindexed articles are never suggested.
export function getRelatedArticles(slug: string, limit = 4): Article[] {
  const self = getArticle(slug);
  if (!self) return [];
  const all = getAllArticles().filter((a) => !a.frontmatter.noindex);
  const freq = new Map<string, number>();
  for (const a of all) for (const t of a.frontmatter.tags ?? []) freq.set(t, (freq.get(t) ?? 0) + 1);
  const tags = new Set(self.frontmatter.tags ?? []);
  const { city, topic } = self.frontmatter;
  return all
    .filter((a) => a.frontmatter.slug !== slug)
    .map((a) => {
      const f = a.frontmatter;
      let score = (f.tags ?? [])
        .filter((t) => tags.has(t))
        .reduce((sum, t) => sum + 1 / (freq.get(t) ?? 1), 0);
      if (city && f.city === city) score += 0.5;
      if (topic && f.topic === topic) score += 0.25;
      return { a, score };
    })
    .filter((x) => x.score >= 0.2)
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => x.a);
}
