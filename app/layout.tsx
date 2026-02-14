import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileMenu } from "@/components/MobileMenu";
import { PhoneClickTracker } from "@/components/PhoneClickTracker";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Amarillo Hail Damage Roof Repair | 5 Star Roofing",
  description: "Expert hail damage repair and roofing services in Amarillo, Texas. Free inspections and insurance claim assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload hero background image for LCP optimization - local 97KB */}
        <link
          rel="preload"
          href="/images/hero-bg.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body>
        <PhoneClickTracker />
        <ScrollProgress />
        <header className="bg-gradient-to-r from-[#2C1810]/80 via-[#3D2415]/80 to-[#2C1810]/80 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
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

              <div className="hidden md:flex gap-6 items-center">
                <a href="/" className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110">Home</a>
                
                {/* Services Dropdown */}
                <div className="relative group">
                  <a href="/services/" className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110 flex items-center gap-1">
                    Services
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </a>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#2C1810] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-brand-gold/20">
                    <div className="py-2">
                      <a href="/residential-roofing/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Residential Roofing</a>
                      <a href="/commercial-roofing/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Commercial Roofing</a>
                      <a href="/hail-damage-repair-amarillo-tx/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Hail Damage Repair</a>
                      <a href="/roofing-amarillo-tx/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Roof Replacement</a>
                      <a href="/services/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright font-semibold border-t border-brand-gold/20 mt-1 pt-2">All Services →</a>
                    </div>
                  </div>
                </div>
                
                {/* Areas Dropdown */}
                <div className="relative group">
                  <a href="/service-areas/" className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110 flex items-center gap-1">
                    Areas
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </a>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#2C1810] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-brand-gold/20">
                    <div className="py-2">
                      <a href="/roofing-amarillo-tx/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Amarillo</a>
                      <a href="/lubbock-tx-roofing/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Lubbock</a>
                      <a href="/midland-tx-roofing/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Midland</a>
                      <a href="/odessa-tx-roofing/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Odessa</a>
                      <a href="/canyon-tx-roofing/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright">Canyon</a>
                      <a href="/service-areas/" className="block px-4 py-2 text-brand-gold-light hover:bg-brand-gold/10 hover:text-brand-gold-bright font-semibold border-t border-brand-gold/20 mt-1 pt-2">All Areas →</a>
                    </div>
                  </div>
                </div>
                <a href="/gallery/" className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110">Gallery</a>
                <a href="/blog/" className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110">Blog</a>
                <a href="/reviews/" className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110">Reviews</a>
                <a href="/about/" className="text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 font-medium hover:scale-110">About</a>
                <a href="/contact/" className="bg-[#3D5A70] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2C4A5E] transition-all duration-200 text-sm hover:scale-105 shadow-lg">Contact</a>
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
                <p>2909 S Western St</p>
                <p>Amarillo, TX 79109</p>
                <p className="mt-2">
                  <a href="tel:8066226041" className="text-white hover:text-brand-gold-bright font-medium">
                    (806) 622-6041
                  </a>
                </p>
                <p>
                  <a href="mailto:admin@5starroofingpros.com" className="text-white hover:text-brand-gold-bright text-sm">
                    admin@5starroofingpros.com
                  </a>
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-white">Hours</p>
                  <p className="text-sm">Monday - Sunday</p>
                  <p className="text-sm">9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/residential-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Residential Roofing</a></li>
                  <li><a href="/commercial-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Commercial Roofing</a></li>
                  <li><a href="/hail-damage-repair-amarillo-tx/" className="text-brand-gold-light hover:text-brand-gold-bright">Hail Damage Repair</a></li>
                  <li><a href="/roof-inspections-in-amarillo/" className="text-brand-gold-light hover:text-brand-gold-bright">Roof Inspections</a></li>
                  <li><a href="/roof-replacement-in-amarillo/" className="text-brand-gold-light hover:text-brand-gold-bright">Roof Replacement</a></li>
                  <li><a href="/asphalt-roofing-in-amarillo/" className="text-brand-gold-light hover:text-brand-gold-bright">Asphalt Shingles</a></li>
                  <li><a href="/metal-roof-installation-odessa-texas/" className="text-brand-gold-light hover:text-brand-gold-bright">Metal Roofing</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Major Cities</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/roofing-amarillo-tx/" className="text-brand-gold-light hover:text-brand-gold-bright">Amarillo Roofing</a></li>
                  <li><a href="/midland-tx-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Midland Roofing</a></li>
                  <li><a href="/odessa-tx-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Odessa Roofing</a></li>
                  <li><a href="/lubbock-tx-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Lubbock Roofing</a></li>
                  <li><a href="/canyon-tx-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Canyon Roofing</a></li>
                  <li><a href="/bushland-tx-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Bushland</a></li>
                  <li><a href="/service-areas/" className="text-brand-gold-light hover:text-brand-gold-bright">All Service Areas →</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/gallery/" className="text-brand-gold-light hover:text-brand-gold-bright">Project Gallery</a></li>
                  <li><a href="/blog/" className="text-brand-gold-light hover:text-brand-gold-bright">Roofing Blog</a></li>
                  <li><a href="/reviews/" className="text-brand-gold-light hover:text-brand-gold-bright">Customer Reviews</a></li>
                  <li><a href="/about/" className="text-brand-gold-light hover:text-brand-gold-bright">About Us</a></li>
                  <li><a href="/contact/" className="text-brand-gold-light hover:text-brand-gold-bright">Contact</a></li>
                  <li><a href="/amarillo-weather-impact-on-roofing/" className="text-brand-gold-light hover:text-brand-gold-bright">Weather Impact</a></li>
                  <li><a href="/roofing-methods/" className="text-brand-gold-light hover:text-brand-gold-bright">Installation Methods</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-gold-bright">Specialties</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-gold-light hover:text-brand-gold-bright">Hail Damage</a></li>
                  <li><a href="/storm-damage-roof-repair-in-amarillo/" className="text-brand-gold-light hover:text-brand-gold-bright">Storm Damage</a></li>
                  <li><a href="/wind-damage-roof-repair-in-amarillo/" className="text-brand-gold-light hover:text-brand-gold-bright">Wind Damage</a></li>
                  <li><a href="/commercial-roofing-amarillo-tx/" className="text-brand-gold-light hover:text-brand-gold-bright">Commercial TPO</a></li>
                  <li><a href="/residential-roofing-amarillo-tx/" className="text-brand-gold-light hover:text-brand-gold-bright">Residential Repair</a></li>
                  <li><a href="/pvc-roofing-contractors-in-amarillo/" className="text-brand-gold-light hover:text-brand-gold-bright">PVC Roofing</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2026 5 Star Commercial Roofing. All rights reserved.</p>
              <p className="mt-2 text-gray-300">
                Serving Amarillo, Midland, Odessa, Lubbock, and all of West Texas with expert roofing services.
              </p>
            </div>
          </div>
        </footer>

        {/* Google Analytics - load only after user interaction to not block TTI */}
        <Script id="google-analytics-loader" strategy="lazyOnload">
          {`
            function loadGA() {
              if (window.gaLoaded) return;
              window.gaLoaded = true;
              var s = document.createElement('script');
              s.src = 'https://www.googletagmanager.com/gtag/js?id=G-BHH34LVX73';
              s.async = true;
              document.head.appendChild(s);
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-BHH34LVX73');
            }
            // Load after user interaction or 8 seconds
            setTimeout(loadGA, 8000);
            ['scroll', 'click', 'touchstart', 'keydown'].forEach(function(e) {
              document.addEventListener(e, loadGA, {once: true, passive: true});
            });
          `}
        </Script>

        {/* HighLevel Chat Widget - load after user shows intent */}
        <Script id="highlevel-loader" strategy="lazyOnload">
          {`
            function loadHighLevel() {
              if (window.hlLoaded) return;
              window.hlLoaded = true;
              var s = document.createElement('script');
              s.src = 'https://widgets.leadconnectorhq.com/loader.js';
              s.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
              s.setAttribute('data-widget-id', '68e83a586141ff5c3b72b4a4');
              document.body.appendChild(s);
            }
            // Load after 5 seconds or on user interaction
            setTimeout(loadHighLevel, 5000);
            ['scroll', 'click', 'touchstart'].forEach(e =>
              document.addEventListener(e, loadHighLevel, {once: true, passive: true})
            );
          `}
        </Script>

        {/* Fix HighLevel widget accessibility - runs once widget loads */}
        <Script id="highlevel-a11y-fix" strategy="lazyOnload">
          {`
            setTimeout(function() {
              var observer = new MutationObserver(function(mutations, obs) {
                var btn = document.querySelector('button.lc_text-widget_prompt--prompt-close');
                if (btn) {
                  btn.setAttribute('aria-label', 'Close chat prompt');
                  obs.disconnect();
                }
              });
              observer.observe(document.body, {childList: true, subtree: true});
            }, 5000);
          `}
        </Script>
      </body>
    </html>
  );
}
