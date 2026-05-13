"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type SimpleLink = { kind: "link"; href: string; label: string; special?: boolean };
type Group = { kind: "group"; label: string; items: { href: string; label: string }[]; allHref: string };
type MenuItem = SimpleLink | Group;

const ITEMS: MenuItem[] = [
  { kind: "link", href: "/", label: "Home" },
  {
    kind: "group",
    label: "Services",
    allHref: "/services/",
    items: [
      { href: "/residential-roofing/", label: "Residential Roofing" },
      { href: "/commercial-roofing/", label: "Commercial Roofing" },
      { href: "/hail-damage-repair-amarillo/", label: "Hail Damage Repair" },
      { href: "/roof-replacement-amarillo/", label: "Roof Replacement" },
    ],
  },
  {
    kind: "group",
    label: "Service Areas",
    allHref: "/service-areas/",
    items: [
      { href: "/amarillo-tx-roofing/", label: "Amarillo" },
      { href: "/lubbock-tx-roofing/", label: "Lubbock" },
      { href: "/midland-tx-roofing/", label: "Midland" },
      { href: "/odessa-tx-roofing/", label: "Odessa" },
      { href: "/canyon-texas-roofing/", label: "Canyon" },
    ],
  },
  { kind: "link", href: "/gallery/", label: "Gallery" },
  { kind: "link", href: "/blog/", label: "Blog" },
  { kind: "link", href: "/reviews/", label: "Reviews" },
  { kind: "link", href: "/about/", label: "About" },
  { kind: "link", href: "/contact/", label: "Contact", special: true },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setOpenGroup(null);
  };

  const menuContent = (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] md:hidden"
          onClick={closeAll}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed right-0 top-0 bottom-0 w-72 sm:w-80 bg-gradient-to-b from-[#2C1810] to-[#3D2415] z-[100] md:hidden overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-3">
            {ITEMS.map((item) => {
              if (item.kind === "link") {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className={
                      item.special
                        ? "bg-brand-gold text-brand-brown px-6 py-3 rounded-full font-semibold text-center hover:bg-brand-gold-vibrant transition-all duration-200 shadow-lg"
                        : "text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 text-lg font-medium border-b border-brand-gold/20 pb-3"
                    }
                  >
                    {item.label}
                  </a>
                );
              }

              const expanded = openGroup === item.label;
              return (
                <div key={item.label} className="border-b border-brand-gold/20 pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(expanded ? null : item.label)}
                    className="w-full flex items-center justify-between text-left text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 text-lg font-medium pb-2 touch-manipulation"
                    aria-expanded={expanded}
                    aria-controls={`mobile-group-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <span>{item.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expanded && (
                    <div
                      id={`mobile-group-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex flex-col gap-2 pl-3 pt-1 pb-2 border-l border-brand-gold/30"
                    >
                      {item.items.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={closeAll}
                          className="text-brand-gold-light/90 hover:text-brand-gold-bright text-base py-1.5 transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                      <a
                        href={item.allHref}
                        onClick={closeAll}
                        className="text-brand-gold-bright text-sm uppercase tracking-wider py-1.5 mt-1 font-semibold"
                      >
                        All {item.label} →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href="tel:8066226041"
              onClick={closeAll}
              className="mt-4 bg-[#815D01] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#3D2415] transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> (806) 622-6041
            </a>
          </div>
        </div>
      </nav>
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-12 h-12 -mr-2 relative z-[101] touch-manipulation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`w-6 h-0.5 bg-brand-gold-light transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-brand-gold-light transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-brand-gold-light transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {mounted && createPortal(menuContent, document.body)}
    </>
  );
}
