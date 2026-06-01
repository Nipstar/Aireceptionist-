"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/tracking";

// Mobile-only bar that appears after ~35% scroll, hidden when #contact is visible.
export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let contactVisible = false;

    const onScroll = () => {
      const scrolled =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight || 1);
      setShow(scrolled > 0.35 && !contactVisible);
    };

    const contact = document.getElementById("contact");
    let io: IntersectionObserver | undefined;
    if (contact) {
      io = new IntersectionObserver(
        (entries) => {
          contactVisible = entries[0]?.isIntersecting ?? false;
          onScroll();
        },
        { threshold: 0.15 }
      );
      io.observe(contact);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-border bg-bg-secondary/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={SITE.mainPhoneHref}
        onClick={() => {
          track("phone_click", { number: SITE.mainPhoneHref, surface: "sticky" });
          track("sticky_cta_click", { action: "call" });
        }}
        className="btn-secondary flex-1 px-4 py-3 text-sm"
      >
        Call Now
      </a>
      <button
        type="button"
        onClick={() => {
          track("sticky_cta_click", { action: "book" });
          window.openBookingPopup?.("sticky-mobile");
        }}
        className="btn-primary flex-1 px-4 py-3 text-sm"
      >
        Book Free Call
      </button>
    </div>
  );
}
