import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { PARENT } from "@/lib/site";

const REASONS = [
  {
    title: "Certified Retell AI Partner",
    body: "Built on enterprise-grade voice tech, configured by an accredited partner.",
    href: PARENT.retellPartner,
  },
  {
    title: "24/7 — never off sick",
    body: "No holidays, no lunch breaks, no bad days. Every call answered, every time.",
  },
  {
    title: "UK-based & UK data",
    body: "UK support and UK data handling, built for a UK audience.",
  },
  {
    title: "Natural voice your callers trust",
    body: "Conversational, on-brand and clear. Callers get answers, not a phone tree.",
  },
];

const STATS = [
  { end: 500, suffix: "+", label: "Calls handled" },
  { end: 24, suffix: "/7", label: "Availability" },
  { end: 1, prefix: "<", suffix: "s", label: "Response time" },
  { end: 2, suffix: "+ yrs", label: "In AI automation" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-bg-secondary">
      <div className="container-page section">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            The reliability of a team, the cost of a tool
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <ScrollReveal key={r.title} className="card card-hover">
              <h3 className="font-display text-lg font-bold">
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener"
                    className="hover:text-accent-secondary"
                  >
                    {r.title}
                  </a>
                ) : (
                  r.title
                )}
              </h3>
              <p className="mt-3 text-text-secondary">{r.body}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-14 grid grid-cols-2 gap-6 rounded-card border border-border bg-bg-card p-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-extrabold gradient-text md:text-4xl">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-sm text-text-secondary">{s.label}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
