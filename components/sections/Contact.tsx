import ScrollReveal from "@/components/ScrollReveal";
import CalInline from "@/components/CalInline";
import { FullContactForm, QuickCallbackForm } from "@/components/ContactForms";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-secondary">
      <div className="container-page section">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Get started</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Book a call, or send us your number
          </h2>
          <p className="mt-4 text-text-secondary">
            Free 30-minute discovery call, no obligation. Or leave your details
            and we&apos;ll come to you.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal className="flex flex-col gap-6">
            <QuickCallbackForm />
            <FullContactForm />
          </ScrollReveal>
          <ScrollReveal>
            <CalInline />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
