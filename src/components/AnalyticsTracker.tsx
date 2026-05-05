"use client";

/**
 * Custom GA4 event tracker.
 *
 * Wires up the named events that the GA4 property has configured as Key Events
 * (conversions): phone_number_click, email_click, book_appointment_click,
 * contact_us_form, booking_system_form_submit. GA4's Enhanced Measurement
 * already fires generic `click` and `form_submit` events, but the named events
 * are what Google Ads / LSA / conversion dashboards listen for.
 *
 * Strategy: a single global delegated listener at the document level so we
 * don't need to instrument every link/button/form individually. Catches:
 *   - <a href="tel:..."> clicks  → phone_number_click
 *   - <a href="mailto:..."> clicks → email_click
 *   - Any element with data-track="book_appointment_click" → book_appointment_click
 *   - <form id="contact-us"> or [data-track-form="contact_us_form"] submits
 *     → contact_us_form
 *   - <form id="booking-system"> or [data-track-form="booking_system_form_submit"]
 *     submits → booking_system_form_submit
 *
 * If the booking/contact forms are added later or use different IDs/selectors,
 * the data-track-form attribute is the most flexible: just add
 * data-track-form="contact_us_form" to the relevant <form>.
 *
 * Safe no-op if window.gtag isn't loaded yet (NEXT_PUBLIC_GA_ID unset).
 */

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

function fire(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export default function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Walk up the DOM to find the closest interactive element.
      const target = e.target as Element | null;
      if (!target) return;

      // tel: / mailto: / /book-now links — fire on <a> click.
      const link = target.closest?.("a[href]") as HTMLAnchorElement | null;
      if (link) {
        const href = link.getAttribute("href") || "";
        if (href.startsWith("tel:")) {
          fire("phone_number_click", {
            phone_number: href.replace(/^tel:/, ""),
            link_url: href,
            page_path: window.location.pathname,
          });
        } else if (href.startsWith("mailto:")) {
          fire("email_click", {
            email_address: href.replace(/^mailto:/, "").split("?")[0],
            link_url: href,
            page_path: window.location.pathname,
          });
        } else if (
          // Any path ending in /book-now (handles /en/book-now, /es/book-now,
          // /book-now, with or without trailing slash or query string).
          /\/book-now\/?($|\?|#)/.test(href)
        ) {
          fire("book_appointment_click", {
            link_url: href,
            link_text: link.textContent?.trim().slice(0, 100) || "",
            page_path: window.location.pathname,
          });
        }
      }

      // Explicit "book appointment" CTAs — opt in by tagging element with
      // data-track="book_appointment_click".
      const trackEl = target.closest?.(
        "[data-track]",
      ) as HTMLElement | null;
      if (trackEl) {
        const eventName = trackEl.getAttribute("data-track");
        if (eventName) {
          fire(eventName, {
            page_path: window.location.pathname,
            element_text: trackEl.textContent?.trim().slice(0, 100) || "",
          });
        }
      }
    }

    function handleSubmit(e: SubmitEvent) {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;

      // Prefer explicit data attribute, then known IDs.
      const explicitName = form.getAttribute("data-track-form");
      let eventName = explicitName;
      if (!eventName) {
        const id = form.id || "";
        if (
          id.includes("booking") ||
          id.includes("book-now") ||
          id.includes("appointment")
        ) {
          eventName = "booking_system_form_submit";
        } else if (id.includes("contact")) {
          eventName = "contact_us_form";
        }
      }
      if (!eventName) return;

      fire(eventName, {
        page_path: window.location.pathname,
        form_id: form.id || undefined,
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    document.addEventListener("submit", handleSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("submit", handleSubmit, { capture: true });
    };
  }, []);

  return null;
}
