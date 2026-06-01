"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { INTEGRATIONS } from "@/lib/site";
import { track } from "@/lib/tracking";

// Modal Cal.com embed. Exposes window.openBookingPopup(source).
export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const initialised = useRef(false);
  const mountRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    track("booking_popup_dismissed");
  }, []);

  useEffect(() => {
    window.openBookingPopup = (source?: string) => {
      setOpen(true);
      track("booking_popup_shown", { source: source || "unknown" });
    };
    return () => {
      delete window.openBookingPopup;
    };
  }, []);

  // Esc to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  // Initialise the popup-namespace Cal embed once the modal first opens.
  useEffect(() => {
    if (!open || initialised.current) return;
    const ns = INTEGRATIONS.cal.popupNamespace;
    const Cal = window.Cal;
    if (!Cal) return; // CalInline loads the script; popup reuses it.
    initialised.current = true;
    Cal("init", ns, { origin: INTEGRATIONS.cal.origin });
    Cal.ns[ns]("inline", {
      elementOrSelector: "#cal-popup-embed",
      config: { layout: "month_view" },
      calLink: INTEGRATIONS.cal.link,
    });
    Cal.ns[ns]("ui", { theme: "light", layout: "month_view" });
    Cal.ns[ns]("on", {
      action: "bookingSuccessful",
      callback: () => track("cal_booking", { surface: "popup" }),
    });
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Book a free discovery call"
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-card bg-white shadow-2xl">
        <button
          onClick={close}
          aria-label="Close booking dialog"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-slate-700 hover:bg-black/20"
        >
          ✕
        </button>
        <div
          ref={mountRef}
          id="cal-popup-embed"
          className="h-[80vh] max-h-[680px] w-full overflow-auto bg-white"
        />
      </div>
    </div>
  );
}
