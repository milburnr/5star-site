import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  /** String or rich ReactNode for inline links / paragraphs. */
  a: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** When true, emits a FAQPage JSON-LD script alongside the visible accordion.
   *  Default false — FAQPage schema has been deprecated for non-government /
   *  non-health pages since 2023 (per SEO-SCAFFOLD.md). Opt-in only when there's
   *  a clear reason to ship it. */
  schema?: boolean;
  /** Allow multiple items open at once. Default false (single, collapsible). */
  multi?: boolean;
  className?: string;
}

/**
 * FAQ accordion replicating the homepage FAQ pattern. Wraps the existing
 * shadcn/ui Radix-based Accordion with brand styling and an optional
 * FAQPage JSON-LD emitter.
 *
 * Replaces:
 *   - the static <h3>+<p> FAQ pile pattern (Sample 1 asphalt-shingle:
 *     duplicated FAQ as both JSON-LD AND static DOM list — wasteful + drift)
 *   - inline <Accordion> usage scattered across pages with inconsistent
 *     panel styling (Sample 3 Odessa wraps in bg-gradient-to-br
 *     from-amber-50-to-white p-12 rounded-3xl, Sample 8 has none)
 *
 * `schema` defaults to FALSE because FAQPage rich-result eligibility was
 * narrowed in 2023 to government / health domains. Most service-business
 * FAQs ship the schema for no SEO benefit and add ~1KB of payload. Pass
 * schema=true only when you've confirmed Google still treats this domain's
 * FAQ markup as eligible.
 */
export function FAQAccordion({
  items,
  schema = false,
  multi = false,
  className,
}: FAQAccordionProps) {
  const accordionRender = multi ? (
    <Accordion type="multiple" className={className}>
      {items.map((item, i) => (
        <FAQItemRow key={i} index={i} item={item} />
      ))}
    </Accordion>
  ) : (
    <Accordion type="single" collapsible className={className}>
      {items.map((item, i) => (
        <FAQItemRow key={i} index={i} item={item} />
      ))}
    </Accordion>
  );

  return (
    <>
      {accordionRender}
      {schema && <FAQPageSchema items={items} />}
    </>
  );
}

function FAQItemRow({ index, item }: { index: number; item: FAQItem }) {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 mb-3 last:mb-0 border-b-0"
    >
      <AccordionTrigger className="text-left text-lg font-semibold text-brand-brown hover:text-brand-gold-vibrant py-6 hover:no-underline">
        {item.q}
      </AccordionTrigger>
      <AccordionContent className="text-gray-700 leading-relaxed pb-6 text-base">
        {item.a}
      </AccordionContent>
    </AccordionItem>
  );
}

/**
 * Stringifies ReactNode answers for JSON-LD. Best-effort; rich content
 * with nested elements should be paired with a string-only `a` for the
 * schema. Render-time consumers can pass a separate plain-text version
 * via the `schema` prop in the future if needed.
 */
function nodeToText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in (node as object)) {
    // @ts-expect-error — runtime object inspection
    return nodeToText(node.props.children);
  }
  return "";
}

function FAQPageSchema({ items }: { items: FAQItem[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: nodeToText(item.a).trim(),
      },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
