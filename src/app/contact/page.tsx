"use client";

import { useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="z-10 mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-8 sm:px-6 md:gap-12 md:px-10 md:py-10 lg:px-12">
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
        <h1 className="font-mono text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-text-main sm:text-5xl lg:text-[56px]">
          Initialize <span className="text-primary">Engagement.</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          Define your objective. We&apos;ll assess fit and respond with a tactical brief.
        </p>
      </section>

      {/* Form */}
      {submitted ? (
        <section className="glass-panel flex flex-col items-center gap-6 p-6 text-center sm:p-10 md:p-12">
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
          action="https://formspree.io/f/mbdpyjly"
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
          {/* Name + Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="font-mono text-xs text-primary uppercase tracking-widest">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="w-full bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="font-mono text-xs text-primary uppercase tracking-widest">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Objective */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-objective" className="font-mono text-xs text-primary uppercase tracking-widest">
              Objective
            </label>
            <textarea
              id="contact-objective"
              name="objective"
              required
              rows={3}
              placeholder='EG: "Integrating a localized LLM to automate customer support" or "Optimizing search architecture for GovCon visibility."'
              className="w-full resize-none bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Current Stack */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-stack" className="font-mono text-xs text-primary uppercase tracking-widest">
              Current Stack
            </label>
            <textarea
              id="contact-stack"
              name="current_stack"
              required
              rows={3}
              placeholder='EG: "Currently running legacy WordPress with no AI integration" or "Migrating to a headless Next.js environment."'
              className="w-full resize-none bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Engagement Level + Budget Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-engagement" className="font-mono text-xs text-primary uppercase tracking-widest">
                Engagement Level
              </label>
              <select
                id="contact-engagement"
                name="engagement_level"
                required
                defaultValue=""
                className="w-full cursor-pointer appearance-none bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors focus:border-primary focus:outline-none"
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
              <label htmlFor="contact-budget" className="font-mono text-xs text-primary uppercase tracking-widest">
                Budget Bracket
              </label>
              <select
                id="contact-budget"
                name="budget_bracket"
                required
                defaultValue=""
                className="w-full cursor-pointer appearance-none bg-surface/50 border border-grid-line px-4 py-3 font-sans text-sm text-text-main transition-colors focus:border-primary focus:outline-none"
              >
                <option value="" disabled className="text-text-muted">
                  Select budget range
                </option>
                <option value="Under $500">Under $500</option>
                <option value="$500 - $1,000">$500 — $1,000</option>
                <option value="$1,000 - $5,000">$1,000 — $5,000</option>
                <option value="$5,000 - $15,000">$5,000 — $15,000</option>
                <option value="$15,000 - $25,000">$15,000 — $25,000</option>
                <option value="Over $25,000">Over $25,000</option>
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
