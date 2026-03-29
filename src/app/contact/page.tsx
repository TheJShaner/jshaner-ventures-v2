"use client";

import { useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-10 px-6 sm:px-12 w-full max-w-4xl mx-auto flex flex-col gap-12 z-10">
      {/* AI Abstract Block */}
      <section className="w-full border-l-2 border-primary bg-surface/40 backdrop-blur-sm p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <MaterialIcon icon="terminal" className="text-primary text-sm mt-1" filled />
          <p className="font-mono text-sm text-text-muted leading-relaxed uppercase tracking-wider">
            <span className="text-primary mr-2">SYS_MSG:</span>
            Intake form for prospective engagements. All fields are required to ensure proper routing and resource allocation. Submissions are reviewed within one business day.
          </p>
        </div>
      </section>

      {/* Header */}
      <section className="w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase bg-primary/10 px-2 py-1 border border-primary/20">
            Secure_Intake
          </span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
        <h1 className="text-text-main text-[48px] md:text-[56px] font-mono font-medium leading-[1.1] tracking-[-0.03em]">
          Initialize <span className="text-primary">Engagement.</span>
        </h1>
        <p className="text-text-muted text-lg max-w-xl font-sans leading-relaxed mt-4">
          Define your objective. We&apos;ll assess fit and respond with a tactical brief.
        </p>
      </section>

      {/* Form */}
      {submitted ? (
        <section className="glass-panel p-12 text-center flex flex-col items-center gap-6">
          <MaterialIcon icon="check_circle" className="text-accent text-5xl" />
          <h2 className="text-text-main text-2xl font-mono font-medium">
            Transmission Received.
          </h2>
          <p className="text-text-muted font-sans max-w-md">
            Your intake has been logged. Expect a response within one business day.
          </p>
        </section>
      ) : (
        <form
          action="https://formspree.io/f/PLACEHOLDER"
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
          className="flex flex-col gap-8"
        >
          {/* Name + Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-primary uppercase tracking-widest">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="bg-surface/50 border border-grid-line text-text-main font-sans text-sm px-4 py-3 focus:border-primary focus:outline-none transition-colors placeholder:text-text-muted/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-primary uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="bg-surface/50 border border-grid-line text-text-main font-sans text-sm px-4 py-3 focus:border-primary focus:outline-none transition-colors placeholder:text-text-muted/50"
              />
            </div>
          </div>

          {/* Objective */}
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-primary uppercase tracking-widest">
              Objective
            </label>
            <textarea
              name="objective"
              required
              rows={3}
              placeholder='EG: "Integrating a localized LLM to automate customer support" or "Optimizing search architecture for GovCon visibility."'
              className="bg-surface/50 border border-grid-line text-text-main font-sans text-sm px-4 py-3 focus:border-primary focus:outline-none transition-colors placeholder:text-text-muted/50 resize-none"
            />
          </div>

          {/* Current Stack */}
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-primary uppercase tracking-widest">
              Current Stack
            </label>
            <textarea
              name="current_stack"
              required
              rows={3}
              placeholder='EG: "Currently running legacy WordPress with no AI integration" or "Migrating to a headless Next.js environment."'
              className="bg-surface/50 border border-grid-line text-text-main font-sans text-sm px-4 py-3 focus:border-primary focus:outline-none transition-colors placeholder:text-text-muted/50 resize-none"
            />
          </div>

          {/* Engagement Level + Budget Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-primary uppercase tracking-widest">
                Engagement Level
              </label>
              <select
                name="engagement_level"
                required
                defaultValue=""
                className="bg-surface/50 border border-grid-line text-text-main font-sans text-sm px-4 py-3 focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-text-muted">
                  Select engagement type
                </option>
                <option value="One-time Audit">One-time Audit</option>
                <option value="Strategic Consulting">Strategic Consulting</option>
                <option value="Full System Deployment">Full System Deployment</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-primary uppercase tracking-widest">
                Budget Bracket
              </label>
              <select
                name="budget_bracket"
                required
                defaultValue=""
                className="bg-surface/50 border border-grid-line text-text-main font-sans text-sm px-4 py-3 focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-text-muted">
                  Select budget range
                </option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $5,000">$1,000 — $5,000</option>
                <option value="$5,000 - $15,000">$5,000 — $15,000</option>
                <option value="$15,000 - $50,000">$15,000 — $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary text-background font-bold text-xs uppercase tracking-widest px-8 py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center justify-center gap-3 w-full md:w-auto md:self-start mt-4"
          >
            Submit Intake
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
            className="text-primary font-mono text-sm hover:text-text-main transition-colors flex items-center gap-2"
          >
            <MaterialIcon icon="mail" className="text-[18px]" />
            ops@jshaner.ventures
          </a>
        </div>
      </section>
    </div>
  );
}
