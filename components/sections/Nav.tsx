"use client";

import { useState } from "react";
import { BookCTA } from "@/components/TrackedLinks";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#demo", label: "Demo" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#industries", label: "Industries" },
  { href: "/#faq", label: "FAQ" },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect width="28" height="28" rx="8" fill="#1a1f2e" stroke="#1e293b" />
        <g stroke="#06b6d4" strokeWidth="2" strokeLinecap="round">
          <line x1="9" y1="11" x2="9" y2="17" />
          <line x1="14" y1="8" x2="14" y2="20" />
          <line x1="19" y1="11" x2="19" y2="17" />
        </g>
      </svg>
      <span className="font-display text-sm font-bold leading-tight text-text-primary sm:text-base">
        AI Voice Agent <span className="text-accent-secondary">Receptionist</span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/85 backdrop-blur">
      <nav className="container-page flex h-[72px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {l.label}
            </a>
          ))}
          <BookCTA source="nav" className="btn-primary px-5 py-2.5 text-sm">
            Book a Free Discovery Call
          </BookCTA>
        </div>
        <button
          className="lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-bg-primary lg:hidden">
          <div className="container-page flex h-[72px] items-center justify-between border-b border-border">
            <Logo />
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="container-page flex flex-1 flex-col gap-6 pt-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-text-primary"
              >
                {l.label}
              </a>
            ))}
            <BookCTA source="nav-mobile" className="btn-primary mt-4 w-full">
              Book a Free Discovery Call
            </BookCTA>
          </div>
        </div>
      )}
    </header>
  );
}
