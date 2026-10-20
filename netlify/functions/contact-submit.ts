import type { Context } from "@netlify/functions";

const ALLOWED_ORIGINS = [
  "https://5starroofingpros.com",
  "https://www.5starroofingpros.com",
  "http://localhost:3000",
  "http://localhost:3005",
];

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.some((o) => origin.startsWith(o));
  return {
    "Access-Control-Allow-Origin": allowed ? origin! : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

const RESEND_URL = "https://api.resend.com/emails";
const ERROR_MESSAGE = "Something went wrong. Please try again or call us at (806) 622-6041.";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonError(headers: Record<string, string>) {
  return new Response(JSON.stringify({ error: ERROR_MESSAGE }), {
    status: 500,
    headers: { ...headers, "Content-Type": "application/json" },
  });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: Request, _context: Context) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  // Honeypot — silently succeed if filled
  if (body["bot-field"]) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  const { name, email, phone, street, city, state, zip, service, message } = body;

  const errors: string[] = [];
  if (!name || name.trim().length < 2) errors.push("Name is required (min 2 characters)");
  if (!email || !isValidEmail(email)) errors.push("Valid email is required");
  if (!street || street.trim().length < 3) errors.push("Street address is required");
  if (!city || city.trim().length < 2) errors.push("City is required");
  if (!zip || !/^\d{5}(-\d{4})?$/.test(zip.trim())) errors.push("Valid ZIP code is required");
  if (!message || message.trim().length < 10) errors.push("Message is required (min 10 characters)");
  if (phone && !/^[\d\s\-\(\)\+\.]{7,20}$/.test(phone)) errors.push("Invalid phone format");

  if (errors.length > 0) {
    return new Response(JSON.stringify({ error: errors.join("; ") }), {
      status: 400,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  const apiKey = Netlify.env.get("RESEND_API_KEY");
  const fromEmail = Netlify.env.get("CONTACT_FROM_EMAIL");
  const notifyEmail = Netlify.env.get("CONTACT_NOTIFY_EMAIL");

  if (!apiKey || !fromEmail || !notifyEmail) {
    // A silently dropped lead is the worst outcome — fail loudly.
    console.error(
      "[contact-submit] LEAD NOT DELIVERED: RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_NOTIFY_EMAIL must all be set"
    );
    return jsonError(headers);
  }

  const lead = {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || "",
    street: street.trim(),
    city: city.trim(),
    state: (state || "TX").trim(),
    zip: zip.trim(),
    service: service?.trim() || "",
    message: message.trim(),
  };

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Address", `${lead.street}, ${lead.city}, ${lead.state} ${lead.zip}`],
    ["Service", lead.service],
  ];
  const text = [
    "New lead from the 5starroofingpros.com contact form.",
    "",
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    lead.message,
  ].join("\n");
  const html = `
    <p>New lead from the 5starroofingpros.com contact form.</p>
    <table cellpadding="4">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
        .join("")}
    </table>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p>
  `;

  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notifyEmail.split(",").map((s) => s.trim()).filter(Boolean),
        reply_to: lead.email,
        subject: `New website lead: ${lead.name}${lead.service ? ` (${lead.service})` : ""}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[contact-submit] LEAD NOT DELIVERED: Resend API error", res.status, await res.text());
      return jsonError(headers);
    }
  } catch (err) {
    console.error("[contact-submit] LEAD NOT DELIVERED: Resend request failed:", err);
    return jsonError(headers);
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...headers, "Content-Type": "application/json" },
  });
}

export const config = {
  path: "/.netlify/functions/contact-submit",
};
