import Waveform from "@/components/Waveform";
import { BookCTA } from "@/components/TrackedLinks";
import { PARENT } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]" />
      <div className="container-page pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">
            AI Voice Agent Receptionist for{" "}
            <span className="gradient-text">UK Businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            Stop missing calls. Our AI voice agents answer every call, qualify
            the lead, book the appointment and text you the summary — 24/7, no
            missed business, no voicemail.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookCTA source="hero" className="btn-primary w-full sm:w-auto">
              Book Your Free Discovery Call
            </BookCTA>
            <a href="#demo" className="btn-secondary w-full sm:w-auto">
              Hear It In Action
            </a>
          </div>
          <p className="mt-8 text-sm text-text-muted">
            Replies within 1 hour Mon–Fri · Free 30-min discovery call · No
            long-term contracts
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Powered by{" "}
            <a
              href={PARENT.home}
              className="text-accent-secondary underline-offset-2 hover:underline"
            >
              Antek Automation
            </a>{" "}
            ·{" "}
            <a
              href={PARENT.retellPartner}
              target="_blank"
              rel="noopener"
              className="text-accent-secondary underline-offset-2 hover:underline"
            >
              Certified Retell AI Partner
            </a>
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Waveform />
        </div>
      </div>
    </section>
  );
}
