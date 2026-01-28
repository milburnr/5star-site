'use client';

import { useState, useEffect } from 'react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button - Always interactive */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-12 h-12 -mr-2 relative z-[60] touch-manipulation"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`w-6 h-0.5 bg-brand-gold-light transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-brand-gold-light transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-brand-gold-light transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu */}
      <nav
        className={`fixed right-0 top-0 bottom-0 w-72 sm:w-80 bg-gradient-to-b from-[#2C1810] to-[#3D2415] z-[55] md:hidden overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/services/', label: 'Services' },
              { href: '/service-areas/', label: 'Service Areas' },
              { href: '/gallery/', label: 'Gallery' },
              { href: '/blog/', label: 'Blog' },
              { href: '/reviews/', label: 'Reviews' },
              { href: '/about/', label: 'About' },
              { href: '/contact/', label: 'Contact', special: true },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  link.special
                    ? 'bg-brand-gold text-brand-brown px-6 py-3 rounded-full font-semibold text-center hover:bg-brand-gold-vibrant transition-all duration-200 shadow-lg'
                    : 'text-brand-gold-light hover:text-brand-gold-bright transition-all duration-200 text-lg font-medium border-b border-brand-gold/20 pb-3'
                }
              >
                {link.label}
              </a>
            ))}

            <a
              href="tel:8066226041"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-[#3D5A70] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#2C4A5E] transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> (806) 622-6041
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
