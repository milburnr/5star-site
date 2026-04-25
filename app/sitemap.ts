import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

const BASE_URL = "https://5starroofingpros.com";

/**
 * Enumerate every immediate child of `app/` that contains a `page.tsx`.
 * Skips dynamic segments (e.g. `[slug]`) and route groups (e.g. `(group)`).
 */
function getRouteDirs(): string[] {
  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) return [];
  return fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("[") && !name.startsWith("("))
    .filter((name) =>
      fs.existsSync(path.join(appDir, name, "page.tsx")),
    );
}

/**
 * Enumerate hardcoded legacy blog post folders at `app/blog/<slug>/page.tsx`
 * (excludes `[slug]` and the index page itself).
 */
function getLegacyBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "app", "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("[") && !name.startsWith("("))
    .filter((name) =>
      fs.existsSync(path.join(blogDir, name, "page.tsx")),
    );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Top-level directories that don't contain a hyphen are treated as
  // primary navigation pages (about, contact, services, gallery, etc.)
  // and get priority 0.8. Hyphenated dirs are service-city landing pages
  // and get priority 0.7.
  const TOP_LEVEL_DIRS = new Set([
    "about",
    "articles",
    "blog",
    "contact",
    "gallery",
    "reviews",
    "services",
  ]);

  const routeDirs = getRouteDirs();

  const routePages: MetadataRoute.Sitemap = routeDirs
    // Don't emit /blog/ here — handled explicitly below with priority 0.7.
    .filter((dir) => dir !== "blog")
    .map((dir) => ({
      url: `${BASE_URL}/${dir}/`,
      lastModified: now,
      priority: TOP_LEVEL_DIRS.has(dir) ? 0.8 : 0.7,
    }));

  // Legacy hardcoded blog post pages (e.g. roof-replacement-cost-texas-2025)
  // live as their own folders under app/blog/. These are NOT in
  // content/blog/*.mdx, so include them explicitly.
  const legacyBlogSlugs = getLegacyBlogSlugs();
  const legacyBlogPages: MetadataRoute.Sitemap = legacyBlogSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/blog/${slug}/`,
      lastModified: now,
      priority: 0.5,
    }),
  );

  // Dynamic MDX articles from content/blog/*.mdx
  const articles = getAllArticles();
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.frontmatter.slug}/`,
    lastModified: article.frontmatter.lastmod
      ? new Date(article.frontmatter.lastmod)
      : new Date(article.frontmatter.date),
    priority: 0.5,
  }));

  // De-dup blog slugs (in case an MDX article shares a slug with a legacy folder)
  const seen = new Set<string>();
  const blogPages = [...legacyBlogPages, ...articlePages].filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });

  const fixedPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, priority: 1.0 },
    { url: `${BASE_URL}/blog/`, lastModified: now, priority: 0.7 },
  ];

  return [...fixedPages, ...routePages, ...blogPages];
}
