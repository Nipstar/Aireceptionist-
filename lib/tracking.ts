// Client-side tracking + lead-capture helpers shared by both forms and CTAs.
import { INTEGRATIONS, SITE } from "./site";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    Cal?: any;
    clarity?: (...args: unknown[]) => void;
    __loadClarity?: () => void;
    openAntekChat?: () => void;
  }
}

// Network-wide GA event names — keep these consistent across satellites.
export type GAEvent =
  | "form_submit"
  | "phone_click"
  | "email_click"
  | "chat_start"
  | "cal_booking"
  | "scroll_depth"
  | "sticky_cta_click"
  | "booking_popup_shown"
  | "booking_popup_dismissed";

export function track(event: GAEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, {
    page_type: "service-hub",
    site_domain: SITE.domain,
    ...params,
  });
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export function getUTMs(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const fromQuery = params.get(key);
    if (fromQuery) {
      out[key] = fromQuery;
      try {
        sessionStorage.setItem(key, fromQuery);
      } catch {
        /* ignore */
      }
    } else {
      try {
        out[key] = sessionStorage.getItem(key) || "";
      } catch {
        out[key] = "";
      }
    }
  }
  return out;
}

// Resolve GA client + session id via gtag('get'), but never block submit on it.
export function getGAIds(timeoutMs = 800): Promise<{
  ga_client_id: string;
  ga_session_id: string;
}> {
  return new Promise((resolve) => {
    const result = { ga_client_id: "", ga_session_id: "" };
    if (typeof window === "undefined" || !window.gtag) {
      resolve(result);
      return;
    }
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve(result);
    };
    const timer = setTimeout(done, timeoutMs);
    try {
      window.gtag("get", INTEGRATIONS.ga4Id, "client_id", (id: string) => {
        result.ga_client_id = id || "";
      });
      window.gtag(
        "get",
        INTEGRATIONS.ga4Id,
        "session_id",
        (id: string) => {
          result.ga_session_id = id ? String(id) : "";
          clearTimeout(timer);
          done();
        }
      );
    } catch {
      clearTimeout(timer);
      done();
    }
  });
}

// Lightweight per-session engagement signals.
export function bumpSessionPages() {
  if (typeof window === "undefined") return;
  try {
    const n = parseInt(sessionStorage.getItem("session_pages") || "0", 10) + 1;
    sessionStorage.setItem("session_pages", String(n));
  } catch {
    /* ignore */
  }
}

function getSessionPages(): string {
  if (typeof window === "undefined") return "";
  try {
    return sessionStorage.getItem("session_pages") || "1";
  } catch {
    return "";
  }
}

const PAGE_START = typeof window !== "undefined" ? Date.now() : 0;

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
  form_source: "service-hub-contact" | "service-hub-quick-form";
}

export async function submitLead(input: LeadPayload): Promise<boolean> {
  const utms = getUTMs();
  const ga = await getGAIds();

  const payload = {
    name: input.name,
    email: input.email,
    phone: input.phone,
    business: input.business,
    message: input.message,
    source: SITE.domain,
    form_source: input.form_source,
    page_type: "service-hub",
    page_url: typeof window !== "undefined" ? window.location.href : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
    utm_source: utms.utm_source || "",
    utm_medium: utms.utm_medium || "",
    utm_campaign: utms.utm_campaign || "",
    utm_term: utms.utm_term || "",
    utm_content: utms.utm_content || "",
    session_pages: getSessionPages(),
    time_on_page_s: PAGE_START ? Math.round((Date.now() - PAGE_START) / 1000) : 0,
    ga_client_id: ga.ga_client_id,
    ga_session_id: ga.ga_session_id,
  };

  try {
    const res = await fetch(INTEGRATIONS.webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      track("form_submit", { form_source: input.form_source });
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
