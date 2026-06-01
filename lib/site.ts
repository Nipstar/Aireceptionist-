// Central source of truth for cross-network constants, links and identity.
// Keep these in sync with the parent Antek Automation network.

// Canonical base URL for the whole site. Drives metadataBase, the canonical
// tag, Open Graph URLs, the sitemap <loc> and robots.txt Host/Sitemap — so they
// all agree on ONE host. Set NEXT_PUBLIC_SITE_URL to whichever host actually
// serves the site (e.g. the www subdomain) and set up a redirect from the other.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.aivoiceagentreceptionist.co.uk"
).replace(/\/+$/, "");

export const SITE = {
  name: "AI Voice Agent Receptionist",
  url: SITE_URL,
  domain: SITE_URL.replace(/^https?:\/\//, ""),
  mainPhone: "0333 038 9960",
  mainPhoneHref: "tel:03330389960",
  email: "hello@antekautomation.com",
} as const;

// Operating entity / registration identifiers — single source for the
// Organization JSON-LD (lib/schema.ts) and the privacy policy, so they agree.
export const ORG = {
  legalName: "Antek Automation",
  duns: "235593033",
  ico: "ZC133436",
  icoUrl: "https://ico.org.uk/ESDWebPages/Entry/ZC133436",
  founder: {
    name: "Andy Norman",
    jobTitle: "Founder",
    about: "https://www.antekautomation.com/about",
    linkedin: "https://www.linkedin.com/in/andy-norman-ab78443a1",
    aboutMe: "https://about.me/andynorman",
    image: "https://www.antekautomation.com/andy-norman.webp",
    description:
      "Founder of Antek Automation with 30+ years in technology. Background in managed print services as technician, service manager and print management solutions specialist. Now building AI voice agents, chatbots and workflow automation for UK businesses.",
    knowsAbout: [
      "AI automation",
      "AI chatbots",
      "Voice AI",
      "Workflow automation",
      "Conversational AI",
    ],
  },
} as const;

// Integration keys (public, client-side embeddable).
// Each reads a NEXT_PUBLIC_* env var, falling back to the current value so the
// build works with no .env file. NOTE: references must be literal so Next can
// inline them into the client bundle — do not refactor into a lookup helper.
export const INTEGRATIONS = {
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "G-C7MMT455TB",
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "ww6ws9q0if",
  webhook:
    process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ??
    "https://antekauto.app.n8n.cloud/webhook/29e3a09b-5b23-489b-a800-a07262afb4cb",
  cal: {
    link: process.env.NEXT_PUBLIC_CAL_LINK ?? "antek-automation/30min",
    inlineNamespace: "30min",
    popupNamespace: "popup-30min",
    origin: "https://app.cal.com",
  },
  retell: {
    scriptSrc: "https://dashboard.retellai.com/retell-widget-v2.js",
    publicKey:
      process.env.NEXT_PUBLIC_RETELL_PUBLIC_KEY ??
      "public_key_b96440ad931cbd5326e4d",
    agentId:
      process.env.NEXT_PUBLIC_RETELL_AGENT_ID ??
      "agent_1c30d12544e2aedfc07ac8be1c",
  },
} as const;

// Parent-network internal links. Anchor text is varied at each call site.
export const PARENT = {
  home: "https://www.antekautomation.com",
  hub: "https://www.antekautomation.com/ai-receptionist",
  voiceService: "https://www.antekautomation.com/services/ai-voice-assistants",
  pricing: "https://www.antekautomation.com/pricing#ai-receptionist",
  privacy: "https://www.antekautomation.com/privacy-policy",
  retellPartner: "https://www.retellai.com/partner/antek-automation",
} as const;

export const INDUSTRIES = [
  {
    name: "Plumbers",
    benefit: "Capture every emergency call-out, even mid-job.",
    href: "https://www.antekautomation.com/ai-receptionist/plumbers",
  },
  {
    name: "Electricians",
    benefit: "Book surveys while you're up a ladder.",
    href: "https://www.antekautomation.com/ai-receptionist/electricians",
  },
  {
    name: "HVAC",
    benefit: "Answer breakdown calls the second they ring.",
    href: "https://www.antekautomation.com/ai-receptionist/hvac",
  },
  {
    name: "Dentists",
    benefit: "Fill the diary with new and recall appointments.",
    href: "https://www.antekautomation.com/ai-receptionist/dentists",
  },
  {
    name: "Lawyers / Law Firms",
    benefit: "Qualify enquiries before they reach a fee earner.",
    href: "https://www.antekautomation.com/ai-receptionist/lawyers",
  },
  {
    name: "Accountants",
    benefit: "Take on new clients without manning the phone.",
    href: "https://www.antekautomation.com/ai-receptionist/accountants",
  },
  {
    name: "Therapists",
    benefit: "Book sessions discreetly, around the clock.",
    href: "https://www.antekautomation.com/ai-receptionist/therapists",
  },
  {
    name: "Veterinary Practices",
    benefit: "Triage worried owners and book them in fast.",
    href: "https://www.antekautomation.com/ai-receptionist/veterinary-practices",
  },
] as const;

export const DEMO_NUMBERS = [
  {
    label: "Bolt Electrical AI Reception",
    display: "+44 7782 214455",
    href: "tel:+447782214455",
    prompt: "Try asking about a fuse board replacement",
  },
  {
    label: "Antek Plumbing & Heating AI Receptionist",
    display: "0333 051 0944",
    href: "tel:03330510944",
    prompt: "Try booking a boiler service",
  },
  {
    label: "Ember & Oak Restaurant AI Host",
    display: "+44 7426 476540",
    href: "tel:+447426476540",
    prompt: "Try booking a table for four",
  },
  {
    label: "Antek Automation AI Assistant",
    display: "0333 038 9960",
    href: "tel:03330389960",
    prompt: "General enquiries",
  },
] as const;

export const FAQS = [
  {
    q: "What is an AI voice agent receptionist?",
    a: "It is a phone system that answers your business calls in a natural voice, handles enquiries, qualifies leads, books appointments into your calendar and hands off to a human when needed. It runs 24/7 and sends a written summary after every call, so nothing slips through.",
  },
  {
    q: "How much does an AI receptionist cost in the UK?",
    a: "Voice agents start at £97 per month plus a £249 setup fee. Chatbots start at £57 per month plus £149 setup. There are no long-term contracts, and most setups go live within 24 to 48 hours.",
  },
  {
    q: "Can an AI receptionist book appointments?",
    a: "Yes. It books directly into your calendar in real time, confirms by text or email and can manage reschedules. Dental practices and clinics use it to book check-ups, recalls and consultations without tying up front-desk staff.",
  },
  {
    q: "Will it sound robotic?",
    a: "No. The voice is natural and conversational, with your wording and tone. Most callers do not realise they are speaking to an AI agent. You approve the script and voice before it goes live.",
  },
  {
    q: "Is it available 24/7?",
    a: "Yes. It answers every call day and night, at weekends and on bank holidays. After-hours enquiries get captured and booked instead of going to voicemail.",
  },
  {
    q: "What happens if the AI can't handle a call?",
    a: "It hands the call to a human, takes a message or books a callback, based on rules you set. You decide which calls escalate and to whom, so urgent enquiries always reach a person.",
  },
  {
    q: "Do you offer no-code AI call agents?",
    a: "Yes. We build, configure and manage the whole thing for you. There is nothing to code and nothing to maintain on your side. You tell us how you want calls handled, and we set it up.",
  },
  {
    q: "AI receptionist vs a human answering service — what's the difference?",
    a: "A human answering service usually takes a message and charges per call or per minute. An AI voice agent answers instantly every time, qualifies the lead, books the appointment and logs the call, for a flat monthly fee with no queues and no missed calls at peak times.",
  },
  {
    q: "Which industries do you support?",
    a: "Any phone-based business. We work with trades such as plumbers, electricians and HVAC, plus dentists, law firms, accountants, therapists and veterinary practices. If you take bookings or enquiries by phone, it fits.",
  },
  {
    q: "Do you only work with UK businesses?",
    a: "We focus on businesses across the UK, with UK-based support and UK data handling. That keeps the service, the voice and the compliance right for a UK audience.",
  },
] as const;
