import { FAQS, PARENT, SITE } from "./site";

const SAME_AS = [
  "https://www.antekautomation.com",
  "https://www.retellai.com/partner/antek-automation",
  "https://www.linkedin.com/company/antek-automation",
  "https://www.linkedin.com/in/andy-norman-ab78443a1",
  "https://www.youtube.com/@AntekAutomation",
  "https://www.instagram.com/antekautomation/",
  "https://www.facebook.com/people/Antek-Automation-Intelligent-Voice-Ai-Chat-Agents/61587195202811/",
  "https://x.com/AntekAutomation",
  "https://www.crunchbase.com/organization/antek-automation",
  "https://about.me/andynorman",
  "https://www.upwork.com/freelancers/antekautomation",
  "https://clutch.co/profile/antek-automation",
];

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Antek Automation",
  url: PARENT.home,
  telephone: "0333 038 9960",
  email: "hello@antekautomation.com",
  areaServed: "United Kingdom",
  identifier: [
    { "@type": "PropertyValue", propertyID: "DUNS", value: "235593033" },
    {
      "@type": "PropertyValue",
      propertyID: "ICO",
      value: "ZC133436",
      url: "https://ico.org.uk/ESDWebPages/Entry/ZC133436",
    },
  ],
  sameAs: SAME_AS,
};

export const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Voice Agent Receptionist",
  name: "AI Voice Agent Receptionist",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  url: SITE.url,
  provider: {
    "@type": "ProfessionalService",
    name: "Antek Automation",
    url: PARENT.home,
    telephone: "0333 038 9960",
  },
  offers: {
    "@type": "Offer",
    price: "97",
    priceCurrency: "GBP",
    description: "AI voice agent receptionist from £97/month plus £249 setup.",
  },
};

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
