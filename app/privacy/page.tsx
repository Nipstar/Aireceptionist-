import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { PARENT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Voice Agent Receptionist",
  description:
    "How AI Voice Agent Receptionist (a service of Antek Automation) collects, uses and protects your personal data under UK GDPR.",
  alternates: { canonical: SITE.url + "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="1 June 2026">
      <p>
        This privacy policy explains how we collect, use, store and protect your
        personal data when you use{" "}
        <strong>{SITE.domain}</strong> or contact us through this site. We are
        committed to handling your data in line with the UK General Data
        Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2>Who we are</h2>
      <p>
        This website is operated by <strong>Antek Automation</strong>, which
        trades the service &ldquo;AI Voice Agent Receptionist&rdquo; and acts as
        the data controller for personal data collected through this site. We are
        registered with the UK Information Commissioner&rsquo;s Office (ICO),
        registration reference{" "}
        <a
          href="https://ico.org.uk/ESDWebPages/Entry/ZC133436"
          target="_blank"
          rel="noopener"
        >
          ZC133436
        </a>
        .
      </p>
      <p>
        Contact: <a href={SITE.mainPhoneHref}>{SITE.mainPhone}</a> ·{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>What data we collect</h2>
      <ul>
        <li>
          <strong>Information you give us</strong> through the contact and
          callback forms: your name, email address, phone number, business name
          and any details in your message.
        </li>
        <li>
          <strong>Booking information</strong> when you schedule a discovery call
          through our embedded scheduling tool.
        </li>
        <li>
          <strong>Usage and device data</strong> collected by analytics (such as
          pages viewed, approximate location, device and browser, and referring
          source) — only after you accept cookies.
        </li>
        <li>
          <strong>Marketing attribution</strong> such as UTM campaign parameters
          and analytics identifiers, where present.
        </li>
      </ul>

      <h2>How we use your data and our lawful basis</h2>
      <ul>
        <li>
          To respond to your enquiry, provide a quote and arrange a discovery
          call — lawful basis: <strong>taking steps at your request prior to
          entering a contract</strong>, and our legitimate interests in
          responding to business enquiries.
        </li>
        <li>
          To measure and improve the website — lawful basis:{" "}
          <strong>consent</strong>, given via the cookie banner.
        </li>
        <li>
          To comply with legal obligations and to establish, exercise or defend
          legal claims — lawful basis: <strong>legal obligation</strong> and{" "}
          <strong>legitimate interests</strong>.
        </li>
      </ul>

      <h2>Cookies and analytics</h2>
      <p>
        We use cookies and similar technologies only where you have consented.
        Analytics and tracking (Google Analytics 4 and Microsoft Clarity) run in
        a <strong>consent-denied state by default</strong> and are only enabled
        after you select &ldquo;Accept&rdquo; in our cookie banner. You can
        withdraw consent at any time by clearing cookies for this site. For more
        detail on how the wider Antek Automation network handles cookies, see the{" "}
        <a href={PARENT.privacy} target="_blank" rel="noopener">
          Antek Automation privacy policy
        </a>
        .
      </p>

      <h2>Who we share your data with</h2>
      <p>
        We do not sell your personal data. We share it only with service
        providers (processors) who help us run this service, including:
      </p>
      <ul>
        <li>
          <strong>n8n</strong> — workflow automation that receives and routes
          form submissions.
        </li>
        <li>
          <strong>Cal.com</strong> — appointment scheduling for discovery calls.
        </li>
        <li>
          <strong>Retell AI</strong> — the chat and voice assistant features.
        </li>
        <li>
          <strong>Google Analytics</strong> and{" "}
          <strong>Microsoft Clarity</strong> — website analytics (consent-based).
        </li>
      </ul>
      <p>
        Some of these providers may process data outside the UK. Where they do,
        we rely on appropriate safeguards (such as UK adequacy regulations or
        standard contractual clauses) to protect your data.
      </p>

      <h2>How long we keep your data</h2>
      <p>
        We keep enquiry and customer data only for as long as necessary to
        respond to and manage your enquiry or relationship, and to meet our legal
        and accounting obligations. Analytics data is retained according to the
        providers&rsquo; standard retention periods.
      </p>

      <h2>Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>access a copy of the personal data we hold about you;</li>
        <li>have inaccurate data corrected;</li>
        <li>have your data erased in certain circumstances;</li>
        <li>restrict or object to our processing of your data;</li>
        <li>data portability;</li>
        <li>withdraw consent at any time, where processing is based on consent.</li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. You also have the
        right to complain to the ICO at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener">
          ico.org.uk
        </a>{" "}
        if you are unhappy with how we handle your data.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of this
        page shows when it was last revised.
      </p>
    </LegalShell>
  );
}
