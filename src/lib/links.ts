import type { Event } from "@/data/events";

export const CONTACT_EMAIL = "president@fianewengland.org";

/**
 * Where the "Donate" buttons point.
 *
 * Set NEXT_PUBLIC_DONATE_URL (e.g. a Givebutter / Zeffy / PayPal page) to send
 * donors straight to a real payment flow. Until that's configured we fall back
 * to the on-page contact/donate section so the button is never a dead end.
 */
export const DONATE_URL =
  process.env.NEXT_PUBLIC_DONATE_URL && process.env.NEXT_PUBLIC_DONATE_URL !== ""
    ? process.env.NEXT_PUBLIC_DONATE_URL
    : "#contact";

/** True when Donate points to an external payment page (vs the in-page anchor). */
export const donateIsExternal = DONATE_URL.startsWith("http");

/**
 * Registration link for an event. Uses the event's registrationUrl when it's a
 * real URL; otherwise falls back to a pre-addressed email so the button always
 * does something useful instead of linking to "#".
 */
export function registrationHref(event: Event): string {
  const url = event.registrationUrl;
  if (url && url !== "#") return url;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Registration: ${event.title}`
  )}&body=${encodeURIComponent(
    `Hi FIANE team,\n\nI'd like to register for "${event.title}" (${event.date}). Please send me the details.\n\nThank you!`
  )}`;
}

/** Whether the registration link opens externally (real URL) vs a mailto. */
export function registrationIsExternal(event: Event): boolean {
  return Boolean(event.registrationUrl && event.registrationUrl.startsWith("http"));
}
