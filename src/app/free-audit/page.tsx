"use client";

import { useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="z-10 mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-8 sm:px-6 md:gap-12 md:px-10 md:py-10 lg:px-12">
      {/* AI Abstract Block */}
      <section className="w-full border-l-2 border-primary bg-surface/40 backdrop-blur-sm p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <MaterialIcon icon="terminal" className="text-primary text-sm mt-1" filled />
          <p className="font-mono text-sm text-text-muted leading-relaxed uppercase tracking-wider">
            <span className="text-primary mr-2">SYS_MSG:</span>
            Complimentary audit of your website&apos;s search visibility, AI readiness, and technical architecture. No commitment required. Results delivered within 48 hours.
          </p>
        </div>
      </section>

      {/* Header */}
      <section className="w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase bg-primary/10 px-2 py-1 border border-primary/20">
            Free_Scan
          </span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
        <h1 className="font-mono text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-text-main sm:text-5xl lg:text-[56px]">
          Free Website <span className="text-primary">Audit.</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          Submit your site. We&apos;ll run a full diagnostic and deliver a tactical report — on us.
        </p>
      </section>

      {/* What You'll Get */}
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: "query_stats", label: "SEO Score" },
          { icon: "smart_toy", label: "AI Visibility Score" },
          { icon: "error_outline", label: "Critical Issues" },
          { icon: "lightbulb", label: "Missed Opportunities" },
          { icon: "checklist", label: "Step-by-Step Fix Plan" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-surface/30 border border-grid-line p-4 flex items-center gap-3 glow-hover transition-all"
          >
            <MaterialIcon icon={item.icon} className="text-primary text-xl" />
            <span className="font-mono text-xs text-text-main uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </section>

      {/* Form */}
      {submitted ? (
        <section className="glass-panel flex flex-col items-center gap-6 p-6 text-center sm:p-10 md:p-12">
          <MaterialIcon icon="check_circle" className="text-accent text-5xl" />
          <h2 className="text-text-main text-2xl font-mono font-medium">
            Audit Queued.
          </h2>
          <p className="text-text-muted font-sans max-w-md">
            Your site has been submitted for analysis. Expect your report within 48 hours.
          </p>
        </section>
      ) : (
        <form
          action="https://formspree.io/f/mzdkgbpq"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            fetch(form.action, {
              method: "POST",
              body: new FormData(form),
              headers: { Accept: "application/json" },
            }).then((res) => {
              if (res.ok) setSubmitted(true);
            });
          }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <input type="hidden" name="engagement" value="Free Website Audit" />

          {/* Name + Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="audit-name" className="font-mono text-xs text-primary uppercase tracking-widest">
                Name
              </label>
              <input
                id="audit-name"
                type="text"
                name="name"
                required
                placeholder="Full name"
                aria-label="Your full name"
                className="w-full bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="audit-email" className="font-mono text-xs text-primary uppercase tracking-widest">
                Email
              </label>
              <input
                id="audit-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                aria-label="Your email address"
                className="w-full bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Website URL */}
          <div className="flex flex-col gap-2">
            <label htmlFor="audit-website" className="font-mono text-xs text-primary uppercase tracking-widest">
              Website URL
            </label>
            <input
              id="audit-website"
              type="url"
              name="website"
              required
              placeholder="https://yoursite.com"
              aria-label="Your website URL"
              className="w-full bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary text-background font-bold text-xs uppercase tracking-widest px-8 py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center justify-center gap-3 w-full md:w-auto md:self-start mt-4"
          >
            Request Audit
            <MaterialIcon icon="send" className="text-[18px]" />
          </button>
        </form>
      )}

      {/* Direct Contact Fallback */}
      <section className="border-t border-grid-line/50 pt-8 flex flex-col gap-3">
        <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
          Direct Channels
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:ops@jshaner.ventures"
            className="flex items-center gap-2 break-all font-mono text-sm text-primary transition-colors hover:text-text-main"
          >
            <MaterialIcon icon="mail" className="text-[18px]" />
            ops@jshaner.ventures
          </a>
        </div>
      </section>
    </div>
  );
}
