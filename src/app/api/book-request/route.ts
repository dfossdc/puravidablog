import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface BookRequest {
  name: string;
  email: string;
  phone: string;
  time?: string;
  reason?: string;
  locale?: "en" | "es";
  sourceUrl?: string;
  conversationContext?: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  let body: BookRequest;
  try {
    body = (await request.json()) as BookRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = (body.name || "").trim().slice(0, 200);
  const email = (body.email || "").trim().slice(0, 200);
  const phone = (body.phone || "").trim().slice(0, 60);
  const time = (body.time || "").trim().slice(0, 500);
  const reason = (body.reason || "").trim().slice(0, 2000);
  const locale = body.locale === "es" ? "es" : "en";
  const sourceUrl = (body.sourceUrl || "").trim().slice(0, 500);
  const conversationContext = (body.conversationContext || "").trim().slice(0, 4000);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required" },
      { status: 400 }
    );
  }

  // Light email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const recipient = process.env.BOOKING_NOTIFY_EMAIL || "dfossdc@gmail.com";
  const sender = process.env.BOOKING_FROM_EMAIL || "Pura Vida Chat <onboarding@resend.dev>";

  const localeTag = locale === "es" ? "[ES]" : "[EN]";
  const subject = `${localeTag} Booking request — ${name}`;

  const rows: string[] = [
    `<tr><td style="padding:8px 12px 8px 0;font-weight:600;width:140px;color:#374151;">Name</td><td style="padding:8px 0;color:#111827;">${escapeHtml(name)}</td></tr>`,
    `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#2c5530;">${escapeHtml(email)}</a></td></tr>`,
    `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;">Phone</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(phone)}" style="color:#2c5530;">${escapeHtml(phone)}</a></td></tr>`,
  ];
  if (time) {
    rows.push(
      `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;vertical-align:top;">Preferred time</td><td style="padding:8px 0;color:#111827;">${escapeHtml(time).replace(/\n/g, "<br>")}</td></tr>`
    );
  }
  if (reason) {
    rows.push(
      `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;vertical-align:top;">Reason for visit</td><td style="padding:8px 0;color:#111827;">${escapeHtml(reason).replace(/\n/g, "<br>")}</td></tr>`
    );
  }
  rows.push(
    `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;">Language</td><td style="padding:8px 0;color:#111827;">${locale === "es" ? "Spanish" : "English"}</td></tr>`
  );
  if (sourceUrl) {
    rows.push(
      `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;">Source page</td><td style="padding:8px 0;"><a href="${escapeHtml(sourceUrl)}" style="color:#2c5530;">${escapeHtml(sourceUrl)}</a></td></tr>`
    );
  }

  const html = `<!DOCTYPE html><html><body style="margin:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px;background:#ffffff;">
    <div style="background:#2c5530;color:#fff;padding:16px 20px;border-radius:8px;">
      <div style="font-size:18px;font-weight:700;">New booking request from website chat</div>
      <div style="font-size:13px;opacity:0.85;margin-top:4px;">Reply to this email to reach the patient (their email is set as Reply-To)</div>
    </div>
    <table style="width:100%;border-collapse:collapse;margin-top:20px;font-size:14px;">${rows.join("")}</table>
    ${conversationContext ? `<div style="margin-top:24px;"><div style="font-weight:600;color:#374151;margin-bottom:8px;font-size:13px;">Recent chat context</div><pre style="background:#f3f4f6;padding:12px;border-radius:8px;white-space:pre-wrap;font-size:12px;color:#1f2937;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;margin:0;">${escapeHtml(conversationContext)}</pre></div>` : ""}
    <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;color:#9ca3af;font-size:12px;">
      Sent automatically from puravidasanantonio.com chat assistant.
    </div>
  </div>
  </body></html>`;

  const textParts = [
    "New booking request from website chat",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
  ];
  if (time) textParts.push(`Preferred time: ${time}`);
  if (reason) textParts.push(`Reason: ${reason}`);
  textParts.push(`Language: ${locale === "es" ? "Spanish" : "English"}`);
  if (sourceUrl) textParts.push(`Source page: ${sourceUrl}`);
  if (conversationContext) {
    textParts.push("", "Recent chat context:", conversationContext);
  }
  const text = textParts.join("\n");

  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        { error: "Failed to send email. Please call (210) 685-1994." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("book-request error", err);
    return NextResponse.json(
      { error: "Failed to send email. Please call (210) 685-1994." },
      { status: 500 }
    );
  }
}
