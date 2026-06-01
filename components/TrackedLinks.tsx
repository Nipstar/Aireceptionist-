"use client";

import { track } from "@/lib/tracking";
import type { AnchorHTMLAttributes, ReactNode } from "react";

// tel: link that fires a phone_click GA event.
export function PhoneLink({
  href,
  children,
  label,
  className,
}: {
  href: string;
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track("phone_click", { number: href, label })}
    >
      {children}
    </a>
  );
}

// mailto: link that fires an email_click GA event.
export function EmailLink({
  email,
  children,
  className,
}: {
  email: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() => track("email_click", { email })}
    >
      {children}
    </a>
  );
}

// Routes a "book a consult" CTA to the contact section (inline Cal embed +
// forms) further down the page, instead of a popup.
export function scrollToContact() {
  if (typeof document === "undefined") return;
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // On a sub-page (e.g. /privacy) there's no #contact — go to the homepage's.
    window.location.href = "/#contact";
  }
}

export function BookCTA({
  source,
  children,
  className = "btn-primary",
  ...rest
}: {
  source: string;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={className}
      data-cta-source={source}
      onClick={scrollToContact}
      {...(rest as any)}
    >
      {children}
    </button>
  );
}
