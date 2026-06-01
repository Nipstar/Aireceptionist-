"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { DEMO_NUMBERS } from "@/lib/site";
import { track } from "@/lib/tracking";

export default function Demo() {
  return (
    <section id="demo" className="container-page section">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Try it yourself</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Don&apos;t take our word for it. Hear it.
        </h2>
        <p className="mt-4 text-text-secondary">
          Chat with our assistant or call a live AI voice agent right now.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Card A — chat */}
        <ScrollReveal className="card flex flex-col">
          <h3 className="font-display text-xl font-bold">
            Chat with our AI assistant
          </h3>
          <p className="mt-3 flex-1 text-text-secondary">
            Ask anything about pricing, setup or how an AI receptionist would
            work for your business. It replies instantly.
          </p>
          <button
            type="button"
            onClick={() => window.openAntekChat?.()}
            className="btn-primary mt-6 self-start"
          >
            Open the chat
          </button>
        </ScrollReveal>

        {/* Card B — call */}
        <ScrollReveal className="card">
          <h3 className="font-display text-xl font-bold">
            Call a live AI voice agent
          </h3>
          <ul className="mt-5 space-y-3">
            {DEMO_NUMBERS.map((d) => (
              <li
                key={d.href}
                className="rounded-xl border border-border bg-bg-secondary p-4"
              >
                <a
                  href={d.href}
                  onClick={() =>
                    track("phone_click", {
                      number: d.href,
                      label: d.label,
                      surface: "demo",
                    })
                  }
                  className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1"
                >
                  <span className="font-semibold text-text-primary">
                    {d.label}
                  </span>
                  <span className="font-display font-bold text-accent-secondary">
                    {d.display}
                  </span>
                </a>
                <p className="mt-1 text-sm text-text-muted">{d.prompt}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-muted">
            Available 24/7 · Powered by Retell AI · Live demo calls
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
