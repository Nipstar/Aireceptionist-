import type { ReactNode } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

// Shared wrapper for long-form legal pages (privacy, terms).
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <a
            href="/"
            className="text-sm text-accent-secondary underline-offset-2 hover:underline"
          >
            ← Back to home
          </a>
          <h1 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-text-muted">Last updated: {updated}</p>
          <div className="prose-legal mt-8">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
