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
        <p className="mt-4 text-text-secondary">
          Founded by{" "}
          <a
            href={ORG.founder.about}
            target="_blank"
            rel="noopener"
            className="text-accent-secondary underline-offset-2 hover:underline"
          >
            {ORG.founder.name}
          </a>
          , {ORG.founder.jobTitle} of Antek Automation. Connect on{" "}
          <a
            href={ORG.founder.linkedin}
            target="_blank"
            rel="noopener"
            className="text-accent-secondary underline-offset-2 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </ScrollReveal>
    </section>
  );
}
