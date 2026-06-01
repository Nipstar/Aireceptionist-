import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { PARENT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | AI Voice Agent Receptionist",
  description:
    "The terms governing your use of the AI Voice Agent Receptionist website, a service of Antek Automation.",
  alternates: { canonical: SITE.url + "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="1 June 2026">
      <p>
        These terms govern your use of <strong>{SITE.domain}</strong> (the
        &ldquo;site&rdquo;). By using the site you agree to these terms. The site
        is operated by <strong>Antek Automation</strong> (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;), which provides the AI Voice Agent Receptionist
        service.
      </p>

      <h2>Use of the site</h2>
      <p>
        This site is provided for general information and to let you enquire
        about our services. You agree to use it lawfully and not to misuse it,
        attempt to disrupt it, or submit false or other people&rsquo;s details
        through our forms without authority.
      </p>

      <h2>Information and pricing</h2>
      <p>
        We aim to keep the information on this site accurate and up to date, but
        we make no warranties that it is complete or error-free. Any pricing
        shown (for example, monthly and setup fees) is indicative, may change,
        and does not form a binding quote. A binding quote is provided only after
        a discovery call and a written proposal.
      </p>

      <h2>Demonstration numbers and AI assistants</h2>
      <p>
        The demo phone numbers and chat assistant are provided to demonstrate the
        service. Calls and conversations may be processed by our AI providers.
        Please do not share sensitive personal information through these demos.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content, branding and design of this site are owned by or licensed to
        Antek Automation and are protected by intellectual property laws. You may
        not copy or reuse them without our permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site links to third-party websites, including the{" "}
        <a href={PARENT.home} target="_blank" rel="noopener">
          Antek Automation
        </a>{" "}
        network and our service providers. We are not responsible for the content
        or practices of those sites.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any indirect or
        consequential loss arising from your use of this site. Nothing in these
        terms limits liability that cannot be excluded under law.
      </p>

      <h2>Privacy</h2>
      <p>
        Our handling of personal data is described in our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales, and the courts
        of England and Wales have exclusive jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
        · <a href={SITE.mainPhoneHref}>{SITE.mainPhone}</a>.
      </p>
    </LegalShell>
  );
}
