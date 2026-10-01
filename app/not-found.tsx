import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";

// Rendered by `output: "export"` as out/404.html. Netlify serves that file
// with a real 404 status for any path that has no page (the old
// `/* -> /index.html 200` catch-all in netlify.toml was removed 2026-09-30).
export const metadata: Metadata = {
  title: "Page Not Found | 5 Star Roofing",
  description: "This page doesn't exist. Find roofing services in Amarillo and West Texas, or call 5 Star Roofing.",
  robots: { index: false, follow: true },
};

const SERVICE_LINKS = [
  { label: "Commercial Roofing in Amarillo", href: "/commercial-roofing-amarillo/" },
  { label: "Roof Repair", href: "/roof-repair-amarillo/" },
  { label: "Hail Damage Repair", href: "/hail-damage-repair-amarillo/" },
  { label: "Roof Replacement", href: "/roof-replacement-amarillo/" },
  { label: "Free Roof Inspection", href: "/free-roof-inspection/" },
  { label: "All Services", href: "/services/" },
];

const AREA_LINKS = [
  { label: "Amarillo", href: "/amarillo-tx-roofing/" },
  { label: "Lubbock", href: "/lubbock-tx-roofing/" },
  { label: "Midland", href: "/midland-tx-roofing/" },
  { label: "Odessa", href: "/odessa-tx-roofing/" },
  { label: "Canyon", href: "/canyon-texas-roofing/" },
  { label: "All Areas", href: "/service-areas/" },
];

export default function NotFound() {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="relative">
        <p
          aria-hidden="true"
          className="display-type pointer-events-none select-none absolute -top-4 right-0 hidden md:block"
        >
          404
        </p>

        <div className="relative z-10 max-w-2xl">
          <span className="eyebrow">Error 404 · Page not found</span>
          <p
            aria-hidden="true"
            className="md:hidden font-[family-name:var(--font-display)] text-[7rem] leading-none text-[#D6B274] opacity-60 mb-2"
          >
            404
          </p>
          <h1 className="heading-primary">We couldn&apos;t find that page.</h1>
          <p className="body-text text-[#F5EEDF]/85 mb-8">
            It may have moved, or the address has a typo in it. The roofing help you came for
            is still here. Pick a page below, or call and talk to someone on our crew.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-14">
            <a href="/" className="cta-primary">
              <span>Back to Home</span>
              <span className="cta-icon" aria-hidden="true">→</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-brand-gold-light hover:text-brand-gold-bright font-semibold text-lg"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

        <div className="relative z-10 grid gap-10 sm:grid-cols-2 max-w-3xl border-t border-brand-gold/20 pt-10">
          <nav aria-label="Roofing services">
            <h2 className="eyebrow">Services</h2>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-gold-light hover:text-brand-gold-bright">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Service areas">
            <h2 className="eyebrow">Service Areas</h2>
            <ul className="space-y-3">
              {AREA_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-gold-light hover:text-brand-gold-bright">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="relative z-10 body-text text-[#F5EEDF]/70 mt-10">
          Prefer to write?{" "}
          <a href="/contact/" className="text-brand-gold-light hover:text-brand-gold-bright underline">
            Send us a message
          </a>
          .
        </p>
      </div>
    </section>
  );
}
