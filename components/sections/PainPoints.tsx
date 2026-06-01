import ScrollReveal from "@/components/ScrollReveal";

const PAINS = [
  {
    title: "Missed calls go to your competitor",
    body: "A caller who hits voicemail rarely leaves one. They ring the next firm on the list, and that job is gone before you've checked your phone.",
  },
  {
    title: "After-hours and weekend calls vanish",
    body: "Most enquiries land when you're on a job, asleep or closed. Without cover, evenings and weekends are dead air — and lost revenue.",
  },
  {
    title: "Reception staff cost £25k+/year",
    body: "A full-time receptionist is salary, holiday, sick days and training. An AI voice agent answers every call for a flat monthly fee.",
  },
];

export default function PainPoints() {
  return (
    <section className="container-page section">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">The cost of a ringing phone</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Every unanswered call is money walking out the door
        </h2>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PAINS.map((p, i) => (
          <ScrollReveal key={p.title} className="card card-hover">
            <span className="font-display text-3xl font-extrabold text-accent-primary/40">
              0{i + 1}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-3 text-text-secondary">{p.body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
