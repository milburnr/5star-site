"use client";

import { useState, useEffect } from "react";

interface StickyContactBarProps {
  phoneNumber?: string;
  displayNumber?: string;
  hideOnScroll?: number; // Hide bar when user scrolls past this pixel value
}

export function StickyContactBar({
  phoneNumber = "8066226041",
  displayNumber = "(806) 622-6041",
  hideOnScroll = 0
}: StickyContactBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (hideOnScroll > 0) {
      const handleScroll = () => {
        const shouldShow = window.scrollY < hideOnScroll;
        setIsVisible(shouldShow);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hideOnScroll]);

  return (
    <div className={`sticky-contact-bar ${isVisible ? "visible" : "hidden"}`}>
      <div className="sticky-contact-content">
        <span className="sticky-contact-text">
          Need a Roof Inspection?
        </span>
        <a
          href={`tel:${phoneNumber}`}
          className="sticky-contact-button"
          onClick={() => {
            // Track phone clicks
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "phone_click", {
                phone_number: displayNumber,
                page_path: window.location.pathname,
                element_text: "Sticky Bar"
              });
            }
          }}
        >
          <span className="sticky-contact-icon">📞</span>
          Call {displayNumber}
        </a>
      </div>
    </div>
  );
}
