# AI Voice Agent Receptionist

Single-page marketing site for **aivoiceagentreceptionist.co.uk** — a UK-wide
service hub for AI voice agent receptionists, and a satellite of
[Antek Automation](https://www.antekautomation.com).

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & run

```bash
npm run build
npm run start
```

## Quality gates

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
npm run build       # the real gate — fails on type or Tailwind errors
```

## Integrations

| Concern        | Where                                   |
| -------------- | --------------------------------------- |
| Lead webhook   | `lib/site.ts` → `INTEGRATIONS.webhook`  |
| GA4 + consent  | `app/layout.tsx`, `components/ConsentBanner.tsx` |
| Cal.com        | `components/CalInline.tsx`, `components/BookingPopup.tsx` |
| Retell widget  | `components/RetellWidget.tsx`           |
| Content/links  | `lib/site.ts` (single source of truth)  |
| Structured data| `lib/schema.ts`                         |

See [`CLAUDE.md`](./CLAUDE.md) for architecture and conventions.
