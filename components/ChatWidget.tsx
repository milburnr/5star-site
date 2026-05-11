"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const WIDGET_ID = "69ee85bc52e6158bcd0c9b81";
const WIDGET_LOADER = "https://widgets.leadconnectorhq.com/loader.js";
const WIDGET_RESOURCES = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

/**
 * HighLevel chat widget loader.
 *
 * A2P/SMS compliance: the chat widget collects an opt-in, so on pages that
 * already have a contact form (also an opt-in) we MUST NOT show it. Pages
 * with a contact form mark `body[data-has-contact-form="1"]` via
 * useMarkContactForm. We re-evaluate on every route change.
 */
export function ChatWidget() {
  const pathname = usePathname();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let interactionListeners: Array<[string, EventListener]> = [];

    const hasContactForm = () => document.body.hasAttribute("data-has-contact-form");

    const setVisible = (visible: boolean) => {
      document.documentElement.setAttribute("data-chat-hidden", visible ? "0" : "1");
    };

    const cleanupListeners = () => {
      interactionListeners.forEach(([e, h]) => document.removeEventListener(e, h));
      interactionListeners = [];
    };

    const loadWidget = () => {
      cleanupListeners();
      if (timeoutId) clearTimeout(timeoutId);
      if (loadedRef.current) return;
      if (hasContactForm()) {
        setVisible(false);
        return;
      }
      loadedRef.current = true;

      const s = document.createElement("script");
      s.src = WIDGET_LOADER;
      s.setAttribute("data-resources-url", WIDGET_RESOURCES);
      s.setAttribute("data-widget-id", WIDGET_ID);
      s.async = true;
      document.body.appendChild(s);
      setVisible(true);

      // a11y: label the close-prompt button once the widget renders
      const observer = new MutationObserver((_, obs) => {
        const btn = document.querySelector("button.lc_text-widget_prompt--prompt-close");
        if (btn) {
          btn.setAttribute("aria-label", "Close chat prompt");
          obs.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => observer.disconnect(), 15000);
    };

    const checkTimer = setTimeout(() => {
      if (hasContactForm()) {
        setVisible(false);
        return;
      }
      setVisible(true);
      if (loadedRef.current) return;

      const handler = () => loadWidget();
      ["scroll", "click", "touchstart"].forEach((e) => {
        document.addEventListener(e, handler, { once: true, passive: true });
        interactionListeners.push([e, handler]);
      });
      timeoutId = setTimeout(loadWidget, 5000);
    }, 250);

    return () => {
      clearTimeout(checkTimer);
      if (timeoutId) clearTimeout(timeoutId);
      cleanupListeners();
    };
  }, [pathname]);

  return null;
}
