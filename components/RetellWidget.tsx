"use client";

import Script from "next/script";
import { useEffect } from "react";
import { INTEGRATIONS } from "@/lib/site";
import { track } from "@/lib/tracking";

const LAUNCHER_SELECTOR =
  "button, [role='button'], [class*='fab'], [class*='launch'], [class*='bubble'], [class*='toggle']";

// Searches the page (incl. any custom-element shadow roots, since the Retell
// widget renders inside one) for its launcher button and clicks it.
function tryOpenRetell(): boolean {
  if (typeof document === "undefined") return false;
  const hosts = Array.from(document.querySelectorAll<HTMLElement>("*")).filter(
    (el) =>
      el.tagName.toLowerCase().includes("retell") ||
      Boolean((el as any).shadowRoot)
  );
  for (const host of hosts) {
    const root = ((host as any).shadowRoot as ShadowRoot | undefined) ?? host;
    const btn = root.querySelector<HTMLElement>(LAUNCHER_SELECTOR);
    if (btn) {
      btn.click();
      return true;
    }
  }
  return false;
}

// Loads the Retell chat widget and exposes window.openAntekChat().
export default function RetellWidget() {
  useEffect(() => {
    window.openAntekChat = () => {
      track("chat_start");
      if (tryOpenRetell()) return;
      // The widget may still be mounting — retry briefly, then fall back to the
      // contact form so the button never silently does nothing.
      let tries = 0;
      const timer = setInterval(() => {
        tries += 1;
        if (tryOpenRetell() || tries >= 10) {
          clearInterval(timer);
          if (tries >= 10) {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 250);
    };
    return () => {
      delete window.openAntekChat;
    };
  }, []);

  return (
    <Script
      id="retell-widget"
      src={INTEGRATIONS.retell.scriptSrc}
      type="module"
      strategy="afterInteractive"
      data-public-key={INTEGRATIONS.retell.publicKey}
      data-agent-id={INTEGRATIONS.retell.agentId}
      data-title="AI Receptionist Assistant"
      data-bot-name="Antek AI"
      data-fab-text="Ask Antek AI"
      data-color="#10b981"
      data-popup-message="Quick question about an AI receptionist for your business?"
      data-show-ai-popup="true"
      data-show-ai-popup-time="6"
      data-auto-open="false"
    />
  );
}
