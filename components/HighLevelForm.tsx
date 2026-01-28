"use client";

import Script from "next/script";

interface HighLevelFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * HighLevel Form Component
 *
 * This component wraps the HighLevel (LeadConnector) form embed.
 * The form URL is centralized here so it can be updated in one place.
 *
 * Form submissions go to: link.trustbasedseo.com
 *
 * @param title - Optional title above the form
 * @param subtitle - Optional subtitle/description
 * @param className - Optional CSS classes for the container
 */
export function HighLevelForm({
  title = "Get Your Free Roof Inspection",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  className = ""
}: HighLevelFormProps) {
  // Form configuration - UPDATE THIS URL TO CHANGE THE FORM SITE-WIDE
  const FORM_ID = "03sa3ZregoVFawfNEbpc";
  const FORM_URL = `https://link.trustbasedseo.com/widget/form/${FORM_ID}`;
  const FORM_SCRIPT = "https://link.trustbasedseo.com/js/form_embed.js";
  const FORM_HEIGHT = 607; // Minimum height in pixels

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

      <div className="highlevel-form-container bg-white rounded-xl overflow-hidden">
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
          loading="lazy"
        ></iframe>

        {/* Load HighLevel form embed script */}
        <Script
          src={FORM_SCRIPT}
          strategy="lazyOnload"
        />
      </div>
    </div>
  );
}
