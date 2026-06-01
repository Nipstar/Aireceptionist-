import ScrollReveal from "@/components/ScrollReveal";
import { PARENT } from "@/lib/site";

export default function AnswerBlock() {
  return (
    <section className="container-page py-12">
      <ScrollReveal className="mx-auto max-w-3xl rounded-card border border-accent-primary/30 bg-bg-secondary p-8 md:p-10">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          What is an AI voice agent receptionist?
        </h2>
        <p className="mt-5 text-text-secondary">
          An AI voice agent receptionist is a phone system that answers your
          business calls in a natural voice, handles enquiries, qualifies leads,
          books appointments into your calendar and hands off to a human when
          needed — 24/7, with a written summary of every call. AI Voice Agent
          Receptionist is a service of Antek Automation, a Certified Retell AI
          Partner serving businesses across the UK. Voice agents start at{" "}
          <a
            href={PARENT.pricing}
            className="text-accent-secondary underline-offset-2 hover:underline"
          >
            £97/month plus £249 setup
          </a>
          ; chatbots from £57/month plus £149 setup. No long-term contracts.
          Most setups go live within 24–48 hours. Phone: 0333 038 9960.
        </p>
      </ScrollReveal>
    </section>
  );
}
