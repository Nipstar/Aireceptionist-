"use client";

import { useEffect } from "react";
import { bumpSessionPages, track } from "@/lib/tracking";

// Fires scroll_depth events at 25/50/75/90% and counts the page view.
export default function ScrollDepth() {
  useEffect(() => {
    bumpSessionPages();
    const thresholds = [25, 50, 75, 90];
    const fired = new Set<number>();

    const onScroll = () => {
      const depth =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight || 1)) *
        100;
      for (const t of thresholds) {
        if (depth >= t && !fired.has(t)) {
          fired.add(t);
          track("scroll_depth", { percent: t });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
