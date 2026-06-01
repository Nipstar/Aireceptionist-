import ScrollReveal from "@/components/ScrollReveal";
import { INDUSTRIES, PARENT } from "@/lib/site";

export default function Industries() {
  return (
    <section id="industries" className="container-page section">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Industries we support</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Built for phone-based businesses across the UK
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((ind) => (
          <ScrollReveal key={ind.name}>
            <a
              href={ind.href}
              className="card card-hover flex h-full flex-col"
            >
              <h3 className="font-display text-lg font-bold">{ind.name}</h3>
              <p className="mt-2 flex-1 text-text-secondary">{ind.benefit}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-secondary">
                See it for {ind.name.toLowerCase().split(" / ")[0]}
                <span aria-hidden>→</span>
              </span>
            </a>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <a
            href={PARENT.hub}
            className="card card-hover flex h-full flex-col justify-between border-accent-primary/40 bg-gradient-to-br from-bg-card to-bg-secondary"
          >
            <div>
              <h3 className="font-display text-lg font-bold">
                Any phone-based business
              </h3>
              <p className="mt-2 text-text-secondary">
                If you take bookings or enquiries by phone, it fits. Explore the
                full receptionist hub.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-cta">
              Explore the AI receptionist hub <span aria-hidden>→</span>
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
