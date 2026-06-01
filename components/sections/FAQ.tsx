"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQS } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page section">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Questions, answered
        </h2>
      </ScrollReveal>

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-card border border-border bg-bg-card">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="font-display text-base font-bold md:text-lg">
                  {f.q}
                </span>
                <span
                  className={`shrink-0 text-accent-secondary transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-text-secondary">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
