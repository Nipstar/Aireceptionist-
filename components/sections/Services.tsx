import ScrollReveal from "@/components/ScrollReveal";
import { PARENT } from "@/lib/site";

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-text-secondary">
      <svg
        className="mt-0.5 shrink-0 text-accent-cta"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-bg-secondary">
      <div className="container-page section">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What it does</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Three services, one answered phone
          </h2>
          <p className="mt-4 text-text-secondary">
            Built on our{" "}
            <a
              href={PARENT.voiceService}
              className="text-accent-secondary underline-offset-2 hover:underline"
            >
              AI voice assistant platform
            </a>
            , set up and managed for you end to end.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <ScrollReveal className="card card-hover lg:col-span-3 lg:flex lg:items-start lg:gap-10">
            <div className="lg:flex-1">
              <span className="eyebrow">Flagship</span>
              <h3 className="mt-2 font-display text-2xl font-bold">
                AI Voice Agent Receptionist
              </h3>
              <p className="mt-3 text-text-secondary">
                A natural-sounding agent that handles your inbound and outbound
                calls, books straight into your calendar and never goes to
                voicemail.
              </p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:flex-1">
              <Tick>Inbound and outbound calls</Tick>
              <Tick>24/7 appointment booking</Tick>
              <Tick>Lead qualification</Tick>
              <Tick>Natural, human-like voice</Tick>
              <Tick>Human handoff on demand</Tick>
              <Tick>Written summary of every call</Tick>
            </ul>
          </ScrollReveal>

          <ScrollReveal className="card card-hover">
            <h3 className="font-display text-xl font-bold">AI Chatbot</h3>
            <p className="mt-3 text-text-secondary">
              Answers on your website and WhatsApp, around the clock.
            </p>
            <ul className="mt-4 space-y-3">
              <Tick>Website and WhatsApp</Tick>
              <Tick>Instant FAQ answers</Tick>
              <Tick>Lead capture into your CRM</Tick>
            </ul>
          </ScrollReveal>

          <ScrollReveal className="card card-hover lg:col-span-2">
            <h3 className="font-display text-xl font-bold">
              Workflow Automation
            </h3>
            <p className="mt-3 text-text-secondary">
              The admin behind the calls, handled automatically.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              <Tick>CRM updates</Tick>
              <Tick>Follow-up sequences</Tick>
              <Tick>Invoicing</Tick>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
