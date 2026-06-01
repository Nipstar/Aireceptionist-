"use client";

import Script from "next/script";
import { useEffect } from "react";
import { INTEGRATIONS } from "@/lib/site";
import { track } from "@/lib/tracking";

// Loads the Retell chat widget and exposes window.openAntekChat().
export default function RetellWidget() {
  useEffect(() => {
    window.openAntekChat = () => {
      track("chat_start");
      // The widget renders inside a custom element with a shadow root.
      const host = document.querySelector(
        "retell-widget, [data-retell-widget], #retell-widget"
      ) as HTMLElement | null;
      const root = (host as any)?.shadowRoot as ShadowRoot | undefined;
      const btn =
        root?.querySelector<HTMLElement>(
          "button, [role='button'], .fab, .launcher"
        ) ||
        document.querySelector<HTMLElement>(
          ".retell-fab, [data-retell-fab]"
        );
      btn?.click();
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
