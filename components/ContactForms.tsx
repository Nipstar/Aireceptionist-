"use client";

import { useState } from "react";
import { submitLead } from "@/lib/tracking";

type Status = "idle" | "sending" | "ok" | "error";

function Toast({ status }: { status: Status }) {
  if (status === "ok")
    return (
      <p className="mt-3 rounded-lg bg-accent-cta/15 px-4 py-3 text-sm text-accent-cta">
        Thanks — we&apos;ll be in touch within the hour (Mon–Fri).
      </p>
    );
  if (status === "error")
    return (
      <p className="mt-3 rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-400">
        Something went wrong. Please call 0333 038 9960 or try again.
      </p>
    );
  return null;
}

const inputCls =
  "w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-secondary focus:outline-none";

// Honeypot field — bots fill it, humans never see it.
function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      name="company_website"
      tabIndex={-1}
      autoComplete="off"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="absolute left-[-9999px] h-0 w-0 opacity-0"
      aria-hidden
    />
  );
}

export function QuickCallbackForm() {
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // honeypot tripped — silently abort
    if (!phone.trim()) return;
    setStatus("sending");
    const ok = await submitLead({
      name: "",
      email: "",
      phone: phone.trim(),
      business: "",
      message: "",
      form_source: "service-hub-quick-form",
    });
    setStatus(ok ? "ok" : "error");
    if (ok) setPhone("");
  };

  return (
    <form onSubmit={onSubmit} className="card relative">
      <h3 className="font-display text-lg font-bold">
        Want a quick callback?
      </h3>
      <p className="mt-1 text-sm text-text-secondary">
        Drop your number and we&apos;ll ring you back.
      </p>
      <Honeypot value={hp} onChange={setHp} />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="tel"
          inputMode="tel"
          required
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputCls}
          aria-label="Phone number"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary whitespace-nowrap disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Call me back"}
        </button>
      </div>
      <Toast status={status} />
    </form>
  );
}

export function FullContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // honeypot tripped
    if (!form.name.trim() || !form.email.trim()) return;
    setStatus("sending");
    const ok = await submitLead({ ...form, form_source: "service-hub-contact" });
    setStatus(ok ? "ok" : "error");
    if (ok) setForm({ name: "", email: "", phone: "", business: "", message: "" });
  };

  return (
    <form onSubmit={onSubmit} className="card relative">
      <h3 className="font-display text-lg font-bold">Send us a message</h3>
      <Honeypot value={hp} onChange={setHp} />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input required placeholder="Name *" value={form.name} onChange={set("name")} className={inputCls} aria-label="Name" />
        <input required type="email" placeholder="Email *" value={form.email} onChange={set("email")} className={inputCls} aria-label="Email" />
        <input type="tel" placeholder="Phone" value={form.phone} onChange={set("phone")} className={inputCls} aria-label="Phone" />
        <input placeholder="Business name" value={form.business} onChange={set("business")} className={inputCls} aria-label="Business name" />
      </div>
      <textarea
        placeholder="How can we help?"
        value={form.message}
        onChange={set("message")}
        rows={4}
        className={`${inputCls} mt-3 resize-y`}
        aria-label="Message"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-4 w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <Toast status={status} />
    </form>
  );
}
