import { EmailLink } from "@/components/TrackedLinks";
import { PARENT, SITE } from "@/lib/site";

const SAME_AS = [
  { label: "Website", href: PARENT.home },
  { label: "Retell AI Partner", href: PARENT.retellPartner },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/antek-automation" },
  { label: "YouTube", href: "https://www.youtube.com/@AntekAutomation" },
  { label: "Instagram", href: "https://www.instagram.com/antekautomation/" },
  { label: "X", href: "https://x.com/AntekAutomation" },
  { label: "Crunchbase", href: "https://www.crunchbase.com/organization/antek-automation" },
  { label: "Clutch", href: "https://clutch.co/profile/antek-automation" },
];

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#demo", label: "Demo" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#industries", label: "Industries" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold">
              AI Voice Agent{" "}
              <span className="text-accent-secondary">Receptionist</span>
            </p>
            <p className="mt-3 text-sm text-text-secondary">
              24/7 AI call answering for UK businesses.
            </p>
            <EmailLink
              email={SITE.email}
              className="mt-3 inline-block text-sm text-accent-secondary hover:underline"
            >
              {SITE.email}
            </EmailLink>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Find Antek Automation
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {SAME_AS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-text-secondary hover:text-accent-secondary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-text-muted">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-accent-secondary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              Certified Retell AI Partner · Powered by{" "}
              <a href={PARENT.home} className="hover:text-accent-secondary">
                Antek Automation
              </a>
            </p>
            <p>© 2025 AI Voice Agent Receptionist</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
