import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { ArticleImage } from "./ArticleImage";

/**
 * Custom MDX element styling to match existing hand-crafted article pages
 * (see app/blog/how-to-file-hail-damage-insurance-claim/page.tsx for the
 * visual reference). Uses the global .prose / .prose-lg selectors in
 * globals.css plus Tailwind utilities so headings, lists, and callouts
 * render identically to hardcoded articles.
 *
 * Custom component aliases:
 *   <ArticleImage src="..." alt="..." caption="..." variant="inline|wide|hero" />
 */
export const mdxComponents: MDXComponents = {
  ArticleImage: ArticleImage as MDXComponents["ArticleImage"],
  h1: (props) => (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-primary mt-0 mb-6 leading-tight" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-3xl font-bold text-gray-primary mt-12 mb-4 leading-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-semibold text-gray-primary mt-8 mb-3" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-xl font-semibold text-gray-primary mt-6 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="text-gray-text leading-relaxed mb-4" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-text" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-text" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-gray-primary" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-brand-gold bg-brand-gold-light/40 pl-6 py-4 my-6 italic text-gray-text"
      {...props}
    />
  ),
  hr: () => <hr className="border-t border-gray-200 my-10" />,
  a: ({ href, children, ...rest }) => {
    if (!href) return <a {...rest}>{children}</a>;
    const isExternal = /^https?:\/\//.test(href) && !href.includes("5starroofingpros.com");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-brown underline hover:text-brand-gold"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className="text-brand-brown underline hover:text-brand-gold" {...rest}>
        {children}
      </Link>
    );
  },
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-left" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b-2 border-gray-300 px-4 py-2 font-semibold bg-gray-50" {...props} />
  ),
  td: (props) => (
    <td className="border-b border-gray-200 px-4 py-2" {...props} />
  ),
  code: (props) => (
    <code className="bg-gray-100 text-brand-brown px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
};
