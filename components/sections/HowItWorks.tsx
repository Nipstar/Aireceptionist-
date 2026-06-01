import ScrollReveal from "@/components/ScrollReveal";
import { PARENT } from "@/lib/site";

const STEPS = [
  {
    n: 1,
    title: "Discovery call",
    body: "A 30-minute call, no obligation. We learn how your calls come in, what you want booked and where the gaps are.",
  },
  {
    n: 2,
    title: "Custom build",
    body: "We write your scripts, set your brand voice and connect your calendar and CRM. You approve everything before it goes live.",
  },
  {
    n: 3,
    title: "Launch & optimise",
    body: "Live within 24–48 hours, with full support. We tune the agent on real calls so it keeps getting sharper.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-secondary">
      <div className="container-page section">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Live in days, not months
          </h2>
          <p className="mt-4 text-text-secondary">
            It&apos;s the same managed process behind the{" "}
            <a
              href={PARENT.hub}
              className="text-accent-secondary underline-offset-2 hover:underline"
            >
              Antek Automation AI receptionist
            </a>
            , tailored to your business.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <ScrollReveal key={s.n} className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary font-display text-lg font-bold text-white">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-text-secondary">{s.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
