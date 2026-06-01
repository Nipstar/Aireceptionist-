# CLAUDE.md

Guidance for AI assistants (Claude Code and others) working in this repository.

## Project Overview

**AI Voice Agent Receptionist** (`aivoiceagentreceptionist.co.uk`) is a
single-page marketing site — a UK-wide **service hub** for AI voice agent
receptionists. It is a **satellite** of the parent brand **Antek Automation**
and exists to (1) capture enquiries via its own forms and (2) pass qualified
traffic to the parent site's AI receptionist pages through contextual links.

Conversion goals, in priority order: book a discovery call (Cal.com) → submit a
form (webhook) → call a live demo number (`tel:`) → open the Retell chat widget.

- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS. No component
  library — the FAQ accordion is hand-rolled.
- **Audience:** UK SMBs that miss calls (trades, clinics, law firms). National,
  not local — copy says "UK"/"across the UK", never a single town.
- **Rendering:** the page is fully static (`○ (Static)` at build). All
  interactivity is in client components; third-party scripts load via
  `next/script`.

## Repository Structure

```
.
├── app/
│   ├── layout.tsx        # <head>: metadata, fonts, JSON-LD, GA4 consent mode, Clarity loader
│   ├── page.tsx          # composes all sections + mounts global client integrations
│   ├── globals.css       # CSS variables (RGB channels), Tailwind layers, animations
│   ├── robots.ts         # generates /robots.txt (allows GPTBot/ClaudeBot/Perplexity/Google-Extended)
│   └── sitemap.ts        # generates /sitemap.xml
├── components/
│   ├── sections/         # one file per page section (Nav, Hero, FAQ, Contact, …)
│   ├── ContactForms.tsx  # QuickCallbackForm + FullContactForm (both POST to webhook)
│   ├── CalInline.tsx     # lazy inline Cal.com embed (the booking destination)
│   ├── RetellWidget.tsx  # loads Retell widget; exposes window.openAntekChat()
│   ├── ConsentBanner.tsx # cookie banner → grants GA consent + loads Clarity
│   ├── StickyMobileCTA.tsx, ScrollDepth.tsx  # mobile CTA bar + scroll_depth events
│   ├── TrackedLinks.tsx  # PhoneLink / EmailLink (fire GA events) + BookCTA (scrolls to #contact)
│   ├── JsonLd.tsx, ScrollReveal.tsx, CountUp.tsx, Waveform.tsx
├── lib/
│   ├── site.ts           # SINGLE SOURCE OF TRUTH: keys, links, demo numbers, FAQs, industries
│   ├── schema.ts         # JSON-LD: Organization, Service, FAQPage
│   └── tracking.ts       # GA events, UTM capture, GA client/session id, submitLead()
└── public/llms.txt       # plain-text site summary for LLM crawlers
```

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build (verifies types + Tailwind compile)
npm run start    # serve the production build
```

### Verify before committing

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
npm run build       # the build is the real gate — it fails on type and CSS errors
```

There are no automated tests. **`npm run build` is the gate** — run it after any
change. A Tailwind class that references an undefined utility (or an opacity
modifier on a colour that isn't channel-based) fails the build, not just lint.

## Conventions

### Edit data, not markup
`lib/site.ts` is the single source of truth for FAQs, demo numbers, industries,
integration keys, and parent-network links. To change copy in those lists, edit
the arrays there — the sections map over them. `lib/schema.ts` derives the
FAQPage JSON-LD from the same `FAQS` array, so the visible FAQ and the schema
**cannot drift** — keep it that way.

### Colours
CSS variables in `globals.css` are stored as **raw RGB channel triplets**
(`--accent-cta: 16 185 129`), and `tailwind.config.ts` wraps them as
`rgb(var(--x) / <alpha-value>)`. This is what makes opacity modifiers like
`bg-accent-cta/15` or `border-accent-primary/40` work. **Do not** revert the
variables to hex — it silently breaks every opacity modifier and fails the build.
The CTA buttons (`--accent-cta`, green) are always the primary action.

### Fonts
Sora (display/headings, 700/800) and DM Sans (body) load via `next/font`, exposed
as `--font-sora` / `--font-dm-sans` and mapped to `font-display` / `font-body`.

### Client vs server components
Sections are server components by default. Add `"use client"` only when a section
needs state or browser APIs (Nav, Demo, FAQ, the forms, all `components/*` with
hooks). Section components live in `components/sections/`; reusable widgets and
integrations live directly in `components/`.

### Analytics & consent (do not weaken)
- GA4 (`G-C7MMT455TB`) runs in **consent mode, default denied**. Consent is only
  granted in `ConsentBanner` on "Accept", which also lazy-loads Clarity via
  `window.__loadClarity`. Never load Clarity or grant consent elsewhere.
- Fire GA events through `track()` in `lib/tracking.ts` using the **network-wide
  event names** (`form_submit`, `phone_click`, `email_click`, `chat_start`,
  `cal_booking`, `scroll_depth`, `sticky_cta_click`). Keep names consistent
  across the satellite network. (`booking_popup_*` events were retired when the
  Cal popup was replaced by scrolling consult CTAs to the `#contact` section.)
- Both forms POST JSON to the n8n webhook in `lib/site.ts` via `submitLead()`,
  which attaches source/UTM/GA-id/engagement metadata. Both have a **honeypot**
  (`company_website`) that silently aborts submission when filled.

### SEO (the point of the satellite)
- Canonical is **self-referencing** to the production host
  (`https://www.aivoiceagentreceptionist.co.uk/` — www is production; apex
  redirects to it). The base URL is driven by `NEXT_PUBLIC_SITE_URL` (default in
  `lib/site.ts`), which feeds canonical, OG, sitemap `<loc>` and robots. Never
  canonical to the parent — the satellite must rank on its own merit.
- Three JSON-LD blocks (Organization/ProfessionalService, Service, FAQPage) ship
  in `<head>` via `JsonLd`. The FAQPage must match the visible FAQ (it does,
  because both read `FAQS`).
- Internal links to the parent use **varied anchor text** — don't repeat the same
  phrase. Industry cards deep-link to the matching parent vertical (see
  `INDUSTRIES` in `lib/site.ts`).

### Copy voice
Direct, outcome-first, **UK English**. Short sentences. **No exclamation marks.**
No corporate filler ("leverage", "seamless", "unlock", "fast-paced world"). Lead
with the result for the business owner, not the technology.

## Pre-launch checklist (from the build brief — not yet verified live)
- Confirm £97 / £57 pricing is current (appears in the answer block, FAQ, schema).
- Test a form submit lands in n8n; confirm the Cal embed loads and the Retell
  widget opens; confirm GA4 shows `page_type=service-hub`; confirm the canonical
  is self-referencing.
- Add the domain to Google Search Console and submit the sitemap.

## Git / Workflow
- Active development branch: `claude/claude-md-docs-2zMIV`.
- Do not push to other branches without explicit permission, and do not open a PR
  unless asked.
- `node_modules`, `.next`, and `.env*` are gitignored.
