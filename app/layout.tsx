import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { INTEGRATIONS, SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "AI Voice Agent Receptionist for UK Businesses | 24/7 AI Call Answering",
  description:
    "AI voice agent receptionist for UK businesses. Answer every call 24/7, qualify leads and book appointments automatically. Certified Retell AI Partner. From £97/mo.",
  alternates: { canonical: SITE.url + "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.url + "/",
    siteName: SITE.name,
    title:
      "AI Voice Agent Receptionist for UK Businesses | 24/7 AI Call Answering",
    description:
      "Answer every call 24/7, qualify leads and book appointments automatically. Certified Retell AI Partner. From £97/mo.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Voice Agent Receptionist for UK Businesses | 24/7 AI Call Answering",
    description:
      "Answer every call 24/7, qualify leads and book appointments automatically. From £97/mo.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd />
        {/* GA4 consent mode — default denied until the cookie banner Accept. */}
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
            gtag('js', new Date());`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${INTEGRATIONS.ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`gtag('config', '${INTEGRATIONS.ga4Id}', {
              page_type: 'service-hub',
              site_domain: '${SITE.domain}'
            });`}
        </Script>
        {/* Deferred Microsoft Clarity loader — only runs after consent Accept. */}
        <Script id="clarity-loader" strategy="afterInteractive">
          {`window.__loadClarity = function(){
              if (window.__clarityLoaded) return;
              window.__clarityLoaded = true;
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${INTEGRATIONS.clarityId}");
              window.clarity && window.clarity('set', 'page_type', 'service-hub');
              window.clarity && window.clarity('set', 'site_domain', '${SITE.domain}');
            };
            if (localStorage.getItem('cookie-consent') === 'accepted') {
              window.__loadClarity();
            }`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
