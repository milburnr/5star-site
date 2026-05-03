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

  const webhookUrl = Netlify.env.get("GHL_WEBHOOK_URL");

  if (!webhookUrl) {
    console.warn("[contact-submit] GHL_WEBHOOK_URL not set — form data not forwarded");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  try {
    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      street: street.trim(),
      city: city.trim(),
      state: (state || "TX").trim(),
      zip: zip.trim(),
      service: service?.trim() || "",
      message: message.trim(),
      source: "website-contact-form",
      timestamp: new Date().toISOString(),
    };

    const ghlResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!ghlResponse.ok) {
      console.error(`[contact-submit] GHL webhook returned ${ghlResponse.status}`);
    }
  } catch (err) {
    console.error("[contact-submit] GHL webhook request failed:", err);
    // Never punish the user for backend issues
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...headers, "Content-Type": "application/json" },
  });
}

export const config = {
  path: "/.netlify/functions/contact-submit",
};
