"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

interface HighLevelFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * HighLevel Form Component
 *
 * Embeds the HighLevel (LeadConnector) form with a native HTML fallback.
 * If the HighLevel iframe fails to load within a few seconds, the fallback
 * form is shown so visitors can always submit their info.
 *
 * Form submissions go to: link.trustbasedseo.com (HighLevel)
 * Fallback submissions go to: mailto action (basic contact)
 */
export function HighLevelForm({
  title = "Get Your Free Roof Inspection",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  className = ""
}: HighLevelFormProps) {
  const FORM_ID = "03sa3ZregoVFawfNEbpc";
  const FORM_URL = `https://link.trustbasedseo.com/widget/form/${FORM_ID}`;
  const FORM_SCRIPT = "https://link.trustbasedseo.com/js/form_embed.js";
  const FORM_HEIGHT = 607;

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Give the HighLevel iframe 5 seconds to load before showing fallback
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true);
    setShowFallback(false);
  }, []);

  return (
    <div className={`highlevel-form-wrapper ${className}`}>
      {(title || subtitle) && (
        <div className="highlevel-form-header mb-6">
          {title && (
            <h3 className="text-2xl font-bold text-brand-brown mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-700">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* HighLevel iframe - hidden until loaded, replaced by fallback if it fails */}
      <div
        className="highlevel-form-container bg-white rounded-xl overflow-hidden"
        style={{ display: iframeLoaded ? 'block' : 'none' }}
      >
        <iframe
          src={FORM_URL}
          style={{
            width: '100%',
            height: '100%',
            minHeight: `${FORM_HEIGHT}px`,
            border: 'none',
            borderRadius: '20px'
          }}
          id={`inline-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Normal Opt In"
          data-height={FORM_HEIGHT.toString()}
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          title="Contact Form"
          onLoad={handleIframeLoad}
        ></iframe>

        <Script
          src={FORM_SCRIPT}
          strategy="lazyOnload"
        />
      </div>

      {/* Loading state / Fallback form */}
      {!iframeLoaded && (
        <div className="bg-white rounded-xl p-6">
          {isMounted && !showFallback ? (
            /* Loading indicator while waiting for HighLevel */
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <div className="w-10 h-10 border-4 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin mb-4"></div>
              <p className="text-sm">Loading form...</p>
            </div>
          ) : (
            /* Native fallback form */
            <NativeFallbackForm />
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Native HTML fallback form shown when HighLevel embed fails to load.
 * Submits via Netlify Forms (form-name attribute) or as a basic mailto fallback.
 */
function NativeFallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Submit via Netlify Forms
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      // Fallback: open mailto with form data
      const name = formData.get("name") || "";
      const phone = formData.get("phone") || "";
      const email = formData.get("email") || "";
      const service = formData.get("service") || "";
      const message = formData.get("message") || "";
      const subject = encodeURIComponent("Free Roof Inspection Request");
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:admin@5starroofingpros.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">&#10003;</div>
        <h3 className="text-2xl font-bold text-brand-brown mb-2">Thank You!</h3>
        <p className="text-gray-700">
          We received your request and will get back to you within 24 hours.
        </p>
        <p className="text-gray-600 mt-4">
          Need immediate help? Call{" "}
          <a href="tel:8066226041" className="text-brand-gold font-semibold hover:underline">
            (806) 622-6041
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact-fallback"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact-fallback" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="fallback-name" className="block text-sm font-semibold text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fallback-name"
          name="name"
          required
          placeholder="John Smith"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fallback-phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="fallback-phone"
            name="phone"
            required
            placeholder="(806) 555-1234"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="fallback-email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="fallback-email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="fallback-service" className="block text-sm font-semibold text-gray-700 mb-1">
          Service Needed
        </label>
        <select
          id="fallback-service"
          name="service"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          <option value="Free Roof Inspection">Free Roof Inspection</option>
          <option value="Hail Damage Repair">Hail Damage Repair</option>
          <option value="Roof Replacement">Roof Replacement</option>
          <option value="Roof Repair">Roof Repair</option>
          <option value="Commercial Roofing">Commercial Roofing</option>
          <option value="Residential Roofing">Residential Roofing</option>
          <option value="Insurance Claim Help">Insurance Claim Help</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="fallback-message" className="block text-sm font-semibold text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="fallback-message"
          name="message"
          rows={4}
          placeholder="Tell us about your roofing needs..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors resize-vertical"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-vibrant text-brand-brown font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-lg"
      >
        Request Free Inspection
      </button>

      <p className="text-xs text-gray-500 text-center mt-3">
        Or call us directly at{" "}
        <a href="tel:8066226041" className="text-brand-gold font-semibold hover:underline">
          (806) 622-6041
        </a>
      </p>
    </form>
  );
}
