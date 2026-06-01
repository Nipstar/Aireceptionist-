"use client";

import { useEffect, useState } from "react";
import { PARENT } from "@/lib/site";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookie-consent", "accepted");
    } catch {
      /* ignore */
    }
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
    window.__loadClarity?.();
    setShow(false);
  };

  const reject = () => {
    try {
      localStorage.setItem("cookie-consent", "rejected");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-md rounded-card border border-border bg-bg-card p-5 shadow-2xl sm:left-6 sm:right-auto">
      <p className="text-sm text-text-secondary">
        We use cookies to measure traffic and improve the site. See our{" "}
        <a
          href={PARENT.privacy}
          target="_blank"
          rel="noopener"
          className="text-accent-secondary underline"
        >
          privacy policy
        </a>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={accept} className="btn-primary flex-1 px-4 py-2.5 text-sm">
          Accept
        </button>
        <button onClick={reject} className="btn-secondary flex-1 px-4 py-2.5 text-sm">
          Reject
        </button>
      </div>
    </div>
  );
}
