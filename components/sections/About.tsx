import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { ORG, PARENT } from "@/lib/site";

export default function About() {
  return (
    <section className="container-page py-16">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          About AI Voice Agent Receptionist
        </h2>
        <p className="mt-4 text-text-secondary">
          AI Voice Agent Receptionist is a service of{" "}
          <a
            href={PARENT.home}
            className="text-accent-secondary underline-offset-2 hover:underline"
          >
            Antek Automation
          </a>
          , a Certified Retell AI Partner helping businesses across the UK answer
          every call. We design, build and manage AI voice agents and chatbots
          that qualify leads and book appointments 24/7 — so a missed call never
          means a missed customer.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-5 rounded-card border border-border bg-bg-card p-6 text-center sm:flex-row sm:text-left">
        <Image
          src={ORG.founder.image}
          alt={`${ORG.founder.name}, ${ORG.founder.jobTitle} of Antek Automation`}
          width={96}
          height={96}
          className="h-24 w-24 shrink-0 rounded-full border border-border object-cover"
        />
        <div>
          <p className="font-display font-bold">
            <a
              href={ORG.founder.about}
              target="_blank"
              rel="noopener"
              className="hover:text-accent-secondary"
            >
              {ORG.founder.name}
            </a>
            <span className="text-text-muted"> · {ORG.founder.jobTitle}</span>
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            {ORG.founder.description}
          </p>
          <a
            href={ORG.founder.linkedin}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-block text-sm font-semibold text-accent-secondary underline-offset-2 hover:underline"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
