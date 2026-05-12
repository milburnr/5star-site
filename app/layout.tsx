import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileMenu } from "@/components/MobileMenu";
import { PhoneClickTracker } from "@/components/PhoneClickTracker";
import { ChatWidget } from "@/components/ChatWidget";
import Script from "next/script";

// Webfonts removed entirely — matches the pre-April-1 state when the site
// scored 96-97 mobile on PSI. Google Fonts (Poppins + Open Sans) were
// introduced on 2026-04-01 in commit 3f6034e and dropped the score to 89
// because display:swap triggers a repaint after the LCP element, pushing
// LCP from ~2.5s to ~4.5s on throttled mobile.
//
// CSS vars kept as no-op identifiers so tailwind classes using
// var(--font-poppins) / var(--font-open-sans) still resolve via the fallback
// `system-ui, sans-serif` chain defined in tailwind.config.ts.
const poppins = { variable: "--font-poppins" };
const openSans = { variable: "--font-open-sans" };

// Cormorant Garamond — editorial display serif used by AltHeroFrame and
// section heading utilities. Previously loaded render-blocking from
// fonts.googleapis.com via a stylesheet inside AltHeroFrame.
// `display: 'optional'` means: use the fallback if the font isn't ready
// within ~100ms; never block render. No layout shift, no LCP regression.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "optional",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Amarillo Hail Damage Roof Repair | 5 Star Roofing",
  description:
    "Expert hail damage repair and roofing services in Amarillo, Texas. Free inspections and insurance claim assistance.",
  openGraph: {
    title: "Amarillo Hail Damage Roof Repair | 5 Star Roofing",
    description:
      "Expert hail damage repair and roofing services in Amarillo, Texas. Free inspections and insurance claim assistance.",
    url: "https://5starroofingpros.com",
    siteName: "5 Star Roofing",
    images: [
      {
        url: "https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev/images/heroes/amarillo-hero.jpg",
        width: 1280,
        height: 720,
        alt: "5 Star Roofing - Professional Roofing Services in Amarillo, TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to R2 so the hero image can be fetched in parallel
            with the HTML without an extra DNS/TLS round-trip.
            Per-page hero preload lives in each page.tsx. */}
        <link
          rel="preconnect"
          href="https://pub-797574ea9b1b4ccda73d4f6afb5d90d5.r2.dev"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <PhoneClickTracker />
        <ScrollProgress />
        {/* backdrop-blur is GPU-heavy on mobile — enable only at md+ where
            devices have the headroom. Mobile gets a solid (non-translucent)
            header for the same look without the paint cost. */}
        <header className="bg-gradient-to-r from-[#2C1810] via-[#3D2415] to-[#2C1810] md:from-[#2C1810]/80 md:via-[#3D2415]/80 md:to-[#2C1810]/80 shadow-lg sticky top-0 z-50 md:backdrop-blur-sm">
          <nav className="container-custom py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center group">
                <img
                  src="/logo.png"
                  alt="5 Star Commercial Roofing"
                  width={111}
                  height={48}
                  className="h-12 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                />
              </a>

              {/* gap scales with viewport so the 7 nav items + Contact pill
                  don't push the Contact pill off the right edge at md/lg.
                  Bug pre-2026-05-09: fixed gap-6 caused Contact to clip at
                  ~1024px wide (within container-custom max-w-7xl + lg:px-8). */}
              <div className="hidden md:flex gap-3 lg:gap-4 xl:gap-6 items-center">
                <a
                  href="/"
                  className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110"
                >
                  Home
                </a>

                {/* Services Dropdown */}
                <div className="relative group">
                  <a
                    href="/services/"
                    className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110 flex items-center gap-1"
                  >
                    Services
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#2C1810] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-brand-gold/20">
                    <div className="py-2">
                      <a
                        href="/residential-roofing/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Residential Roofing
                      </a>
                      <a
                        href="/commercial-roofing/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Commercial Roofing
                      </a>
                      <a
                        href="/hail-damage-repair-amarillo/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Hail Damage Repair
                      </a>
                      <a
                        href="/roof-replacement-amarillo/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Roof Replacement
                      </a>
                      <a
                        href="/services/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright font-semibold border-t border-brand-gold/20 mt-1 pt-2"
                      >
                        All Services →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Areas Dropdown */}
                <div className="relative group">
                  <a
                    href="/service-areas/"
                    className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110 flex items-center gap-1"
                  >
                    Areas
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#2C1810] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-brand-gold/20">
                    <div className="py-2">
                      <a
                        href="/amarillo-texas-roofing/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Amarillo
                      </a>
                      <a
                        href="/lubbock-tx-roofing/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Lubbock
                      </a>
                      <a
                        href="/midland-tx-roofing/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Midland
                      </a>
                      <a
                        href="/odessa-tx-roofing/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Odessa
                      </a>
                      <a
                        href="/canyon-texas-roofing/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright"
                      >
                        Canyon
                      </a>
                      <a
                        href="/service-areas/"
                        className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright font-semibold border-t border-brand-gold/20 mt-1 pt-2"
                      >
                        All Areas →
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="/gallery/"
                  className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110"
                >
                  Gallery
                </a>
                <a
                  href="/blog/"
                  className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110"
                >
                  Blog
                </a>
                <a
                  href="/reviews/"
                  className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110"
                >
                  Reviews
                </a>
                <a
                  href="/about/"
                  className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110"
                >
                  About
                </a>
                <a
                  href="/contact/"
                  className="bg-brand-brown text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-brown-dark transition-all duration-200 text-sm hover:scale-105 shadow-lg"
                >
                  Contact
                </a>
              </div>

              <MobileMenu />
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-primary text-white mt-20">
          <div className="container-custom py-12">
            <div className="grid md:grid-cols-5 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Contact Us</h3>
                <address className="not-italic">
                  <p>2909 S Western St</p>
                  <p>Amarillo, TX 79109</p>
                </address>
                <p className="mt-2">
                  <a
                    href="tel:8066226041"
                    className="text-white hover:text-brand-gold-bright font-bold text-lg"
                  >
                    (806) 622-6041
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:admin@5starroofingpros.com"
                    className="text-white hover:text-brand-gold-bright text-sm"
                  >
                    admin@5starroofingpros.com
                  </a>
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-white">Hours</p>
                  <p className="text-sm">Mon–Sun · 9:00 AM – 5:00 PM</p>
                </div>
                {/* GBP + social links — strengthens entity association
                    between the site and the Google Business Profile, and
                    clears the "no anchor pointing to maps.google.com" finding
                    from the May 2026 audit. */}
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="https://www.google.com/maps?cid=11430502439073045291"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View 5 Star Roofing on Google"
                    className="text-brand-gold-light hover:text-brand-gold-bright transition-colors text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                    View on Google
                  </a>
                  <a
                    href="https://www.facebook.com/5starroofingpros"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="5 Star Roofing on Facebook"
                    className="text-brand-gold-light hover:text-brand-gold-bright transition-colors text-sm font-semibold inline-flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </div>
                {/* Footer map removed (2026-05-12): duplicated the larger
                    MapEmbed on /contact/ and added a second iframe to every
                    page. The GBP "View on Google" anchor above still provides
                    the NAP/local SEO entity association without the extra
                    iframe weight. */}
                {/* Phase 12 Stream C (12.18): trademark disclaimer + cert badge placeholder.
                    Cert badges are intentionally NOT rendered — per plan 12.18 the default
                    is "skip" until Rich confirms which certifications 5 Star currently holds.
                    When confirmed, uncomment the accreditation block below and drop the
                    relevant badge SVGs into public/images/trust/accreditation/. */}
                <p className="mt-4 text-xs text-gray-300/80 leading-relaxed">
                  Carrier and manufacturer logos are trademarks of their respective owners. 5 Star
                  Commercial Roofing is independent and is not affiliated with or endorsed by any
                  listed carrier or manufacturer.
                </p>
                {/*
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-bright mb-2">
                    Accredited &amp; Certified
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <img src="/images/trust/accreditation/bbb-a-plus.svg" alt="BBB A+ Accredited" width="80" height="32" className="h-8 w-auto opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition" />
                    <img src="/images/trust/accreditation/gaf-master-elite.svg" alt="GAF Master Elite" width="80" height="32" className="h-8 w-auto opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition" />
                    <img src="/images/trust/accreditation/oc-platinum.svg" alt="Owens Corning Platinum Preferred" width="80" height="32" className="h-8 w-auto opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition" />
                    <img src="/images/trust/accreditation/ct-select.svg" alt="CertainTeed SELECT ShingleMaster" width="80" height="32" className="h-8 w-auto opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition" />
                  </div>
                </div>
                */}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/residential-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Residential Roofing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/commercial-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Commercial Roofing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hail-damage-repair-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Hail Damage Repair
                    </a>
                  </li>
                  <li>
                    <a
                      href="/roof-inspections-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Roof Inspections
                    </a>
                  </li>
                  <li>
                    <a
                      href="/roof-replacement-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Roof Replacement
                    </a>
                  </li>
                  <li>
                    <a
                      href="/asphalt-shingle-roofing-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Asphalt Shingles
                    </a>
                  </li>
                  <li>
                    <a
                      href="/metal-roof-installation-odessa-texas/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Metal Roofing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Major Cities</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/amarillo-texas-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Amarillo Roofing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/midland-tx-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Midland Roofing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/odessa-tx-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Odessa Roofing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/lubbock-tx-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Lubbock Roofing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/canyon-texas-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Canyon Roofing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/bushland-tx-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Bushland
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service-areas/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      All Service Areas →
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/gallery/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Project Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/blog/" className="text-brand-gold-light hover:text-brand-gold-bright">
                      Roofing Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/reviews/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Customer Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/amarillo-weather-impact-on-roofing/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Weather Impact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/roofing-methods/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Installation Methods
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Specialties</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/hail-damage-repair-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Hail Damage
                    </a>
                  </li>
                  <li>
                    <a
                      href="/storm-damage-repair-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Storm Damage
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wind-damage-repair-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Wind Damage
                    </a>
                  </li>
                  <li>
                    <a
                      href="/commercial-roofing-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Commercial TPO
                    </a>
                  </li>
                  <li>
                    <a
                      href="/residential-roofing-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      Residential Repair
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pvc-roofing-contractors-in-amarillo/"
                      className="text-brand-gold-light hover:text-brand-gold-bright"
                    >
                      PVC Roofing
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2026 5 Star Commercial Roofing. All rights reserved.</p>
              <p className="mt-2 text-gray-300">
                Serving Amarillo, Midland, Odessa, Lubbock, and all of West Texas with expert
                roofing services.
              </p>
            </div>
          </div>
        </footer>

        {/* Google Analytics — eager load via afterInteractive so every
            pageview is recorded. Earlier 8s setTimeout / interaction-only
            loader caused mobile bouncers to never fire GA. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BHH34LVX73"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-BHH34LVX73');
          `}
        </Script>

        {/* HighLevel Chat Widget - suppressed on pages with contact forms
            for A2P/SMS opt-in compliance. See components/ChatWidget.tsx */}
        <ChatWidget />
      </body>
    </html>
  );
}
