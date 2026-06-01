"use client";

import { useEffect, useRef } from "react";
import { INTEGRATIONS } from "@/lib/site";
import { track } from "@/lib/tracking";

// Loads the official Cal.com embed loader once, lazily.
function ensureCalLoader(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Cal) return Promise.resolve();
  return new Promise((resolve) => {
    (function (C: any, A: string) {
      const p = (a: any, ar: any) => {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            s.onload = () => resolve();
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (ar[0] === "init") {
            const api = function (...a2: any[]) {
              p(api, a2);
            } as any;
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js");
    // If Cal already existed the onload above won't fire — resolve next tick.
    if (window.Cal) resolve();
  });
}

// Inline Cal.com booking embed, lazy-loaded when scrolled into view.
export default function CalInline() {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ns = INTEGRATIONS.cal.inlineNamespace;

    const init = async () => {
      if (loaded.current) return;
      loaded.current = true;
      await ensureCalLoader();
      const Cal = window.Cal;
      Cal("init", ns, { origin: INTEGRATIONS.cal.origin });
      Cal.ns[ns]("inline", {
        elementOrSelector: "#cal-inline-embed",
        config: { layout: "month_view" },
        calLink: INTEGRATIONS.cal.link,
      });
      Cal.ns[ns]("ui", {
        theme: "dark",
        cssVarsPerTheme: { dark: { "cal-brand": "#10b981" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      Cal.ns[ns]("on", {
        action: "bookingSuccessful",
        callback: () => track("cal_booking", { surface: "inline" }),
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          init();
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id="cal-inline-embed"
      className="min-h-[560px] w-full overflow-hidden rounded-card border border-border bg-bg-card"
      style={{ overflow: "auto" }}
    />
  );
}
