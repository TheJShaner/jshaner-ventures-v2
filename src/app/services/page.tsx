import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata = {
  title: "Services & Pricing",
  description: "SEO, AI visibility, websites, automation, and training for small businesses. Clear pricing, practical work, no agency fluff. JShaner Ventures.",
  alternates: {
    canonical: "https://jshaner.ventures/services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JShaner Ventures",
  url: "https://jshaner.ventures/services",
  description: "SEO, AI visibility, website builds, automation, and team training for small businesses.",
  provider: {
    "@type": "Organization",
    name: "JShaner Ventures",
    url: "https://jshaner.ventures",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services & Pricing",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Signal SEO + AI Visibility", description: "Monthly SEO and AI visibility support for solo operators and local pros. $497/month." },
        priceSpecification: { "@type": "PriceSpecification", price: "497", priceCurrency: "USD", billingDuration: "P1M" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Core SEO + AI Visibility", description: "SEO, AI visibility, citations, reporting, and quarterly automation support. $797/month." },
        priceSpecification: { "@type": "PriceSpecification", price: "797", priceCurrency: "USD", billingDuration: "P1M" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Growth SEO + AI Systems", description: "SEO, AEO, AI visibility, content, automation, and direct access for competitive markets. $1,497/month." },
        priceSpecification: { "@type": "PriceSpecification", price: "1497", priceCurrency: "USD", billingDuration: "P1M" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter Page", description: "Single conversion-focused landing page. $250 founding rate." },
        priceSpecification: { "@type": "PriceSpecification", price: "250", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter Site", description: "3-5 page website with SEO foundation. $1,200 founding rate." },
        priceSpecification: { "@type": "PriceSpecification", price: "1200", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom Site Build", description: "Custom website with SEO and AI visibility built in. Starting at $3,000." },
        priceSpecification: { "@type": "PriceSpecification", price: "3000", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Quick Win Fix", description: "One automation or visibility fix, built and delivered in a week with training included. $500." },
        priceSpecification: { "@type": "PriceSpecification", price: "500", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business Systems Sprint", description: "3-day deep dive: map your workflows, build one quick win, and deliver a fixed-price roadmap for everything else. $2,500." },
        priceSpecification: { "@type": "PriceSpecification", price: "2500", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Training Session", description: "90-minute 1-on-1 AI training on your tools and workflow. $150." },
        priceSpecification: { "@type": "PriceSpecification", price: "150", priceCurrency: "USD" },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 py-8 sm:px-6 md:px-8 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header */}
      <div className="border-b border-grid-line/50 pb-6">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Services &amp; Pricing</h1>
        <p className="mt-2 max-w-2xl text-base text-slate-400">
          Practical help for small businesses that need to show up on Google, get mentioned by AI tools, clean up their website, and stop losing leads in messy follow-up.
        </p>
      </div>

      {/* Founding Rates Banner */}
      <div className="flex items-start gap-3 border border-amber-500/30 bg-amber-500/5 px-5 py-4">
        <MaterialIcon icon="lock_clock" className="mt-0.5 flex-shrink-0 text-amber-400 text-lg" />
        <div>
          <p className="text-sm font-semibold text-amber-400">Founding client rates while the public portfolio is still being built.</p>
          <p className="text-sm text-slate-400 mt-0.5">Early clients get hands-on attention and keep their rate while we prove the process in public.</p>
        </div>
      </div>

      {/* Free Audit */}
      <div className="flex flex-col justify-between gap-4 border border-primary/40 bg-primary/5 p-6 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">Start here</p>
          <p className="text-lg font-semibold text-white">Not sure where to start? Get a free visibility audit.</p>
          <p className="mt-1 text-sm text-slate-400">We&apos;ll check your website, Google presence, and AI search footprint, then tell you what is actually worth fixing first.</p>
        </div>
        <Link
          href="/free-audit"
          className="flex flex-shrink-0 items-center justify-center gap-2 border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-background transition-all hover:bg-transparent hover:text-primary"
        >
          Get Free Audit
          <MaterialIcon icon="arrow_forward" className="text-[16px]" />
        </Link>
      </div>

      {/* Monthly Plans */}
      <section className="flex flex-col gap-6">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">01 — monthly plans</p>
          <h2 className="text-2xl font-semibold text-white">SEO &amp; AI visibility</h2>
          <p className="mt-1 text-sm text-slate-400">Ongoing cleanup, content, reporting, and AI-search prep so your business is easier to find and easier to understand.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Signal */}
          <div className="flex flex-col gap-6 border border-grid-line bg-surface/30 p-6">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Signal</p>
              <p className="text-sm text-slate-500 line-through">$997/mo</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">$497</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-amber-400">Founding rate</p>
              <p className="mt-2 text-sm text-slate-400">For solo businesses and local pros who need the basics handled right.</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />On-page SEO cleanup and fixes</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Google Business Profile (4 posts/mo)</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />2 blog articles/month</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Schema markup and llms.txt setup</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Monthly report + 30-min call</li>
            </ul>
            <Link href="/contact" className="mt-auto flex items-center justify-center gap-2 border border-primary/50 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background">
              Get Started
            </Link>
          </div>

          {/* Core */}
          <div className="relative flex flex-col gap-6 border border-primary bg-surface/30 p-6">
            <div className="absolute right-0 top-0 bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-background">
              Most Popular
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Core</p>
              <p className="text-sm text-slate-500 line-through">$1,597/mo</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">$797</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-amber-400">Founding rate</p>
              <p className="mt-2 text-sm text-slate-400">For established businesses that want SEO, AI visibility, and follow-up systems moving together.</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Everything in Signal</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />5 blog articles/month</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />50–100 local citations/month</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />1 AI workflow automation/quarter</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />AI visibility checks across ChatGPT, Perplexity, Claude, and similar tools</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Bi-weekly strategy calls</li>
            </ul>
            <Link href="/contact" className="mt-auto flex items-center justify-center gap-2 bg-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-background transition-all hover:bg-primary/80">
              Get Started
            </Link>
          </div>

          {/* Growth */}
          <div className="flex flex-col gap-6 border border-grid-line bg-surface/30 p-6">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Growth</p>
              <p className="text-sm text-slate-500 line-through">$2,500/mo</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">$1,497</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-amber-400">Founding rate</p>
              <p className="mt-2 text-sm text-slate-400">For competitive markets where content, visibility, and automation need steady attention.</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Everything in Core</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />10 blog articles/month</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />AI answer targeting and entity cleanup</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />1 custom AI tool or automation/month</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Direct async access (business hours)</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Weekly reports + quarterly 90-min session</li>
            </ul>
            <Link href="/contact" className="mt-auto flex items-center justify-center gap-2 border border-primary/50 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background">
              Get Started
            </Link>
          </div>
        </div>

        <p className="font-mono text-xs text-text-muted">
          Annual plans available. Backlink campaigns, ad spend, and paid listing fees are separate and based on your budget.
        </p>
      </section>

      {/* Websites */}
      <section className="flex flex-col gap-6">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">02 — websites</p>
          <h2 className="text-2xl font-semibold text-white">Website builds</h2>
          <p className="mt-1 text-sm text-slate-400">Clean sites with the boring but important stuff included: structure, mobile, metadata, schema, and clear calls to action.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Landing Page */}
          <div className="flex flex-col gap-4 border border-grid-line bg-surface/30 p-6">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Starter Page</p>
              <p className="text-sm text-slate-500 line-through">$397</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">$250</span>
                <span className="text-sm text-slate-400">one-time</span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-amber-400">Founding rate</p>
              <p className="mt-2 text-sm text-slate-400">One page, turnkey. Get something live fast and start capturing leads.</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Single conversion-focused page</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Headline, offer, form, CTA</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Mobile optimized</li>
            </ul>
            <Link href="/contact" className="mt-auto flex items-center justify-center border border-grid-line px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 transition-all hover:border-primary hover:text-primary">
              Inquire
            </Link>
          </div>

          {/* Starter Site */}
          <div className="flex flex-col gap-4 border border-grid-line bg-surface/30 p-6">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Starter Site</p>
              <p className="text-sm text-slate-500 line-through">$1,500</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">$1,200</span>
                <span className="text-sm text-slate-400">one-time</span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-amber-400">Founding rate</p>
              <p className="mt-2 text-sm text-slate-400">A real website for businesses that need more than a one-page placeholder.</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />3–5 pages</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />SEO foundation built in</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Google Business integration</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Mobile optimized</li>
            </ul>
            <Link href="/contact" className="mt-auto flex items-center justify-center border border-grid-line px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 transition-all hover:border-primary hover:text-primary">
              Inquire
            </Link>
          </div>

          {/* Custom Build */}
          <div className="relative flex flex-col gap-4 border border-primary bg-surface/30 p-6">
            <div className="absolute right-0 top-0 bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-background">
              Full Build
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Custom Site</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">$3,000+</span>
                <span className="text-sm text-slate-400">one-time</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">Custom design, stronger structure, and a full SEO/AI visibility foundation.</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Custom design, 5–10+ pages</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Full SEO + AI visibility baked in</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Schema markup throughout</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Blog, contact, mobile optimized</li>
            </ul>
            <Link href="/contact" className="mt-auto flex items-center justify-center bg-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-background transition-all hover:bg-primary/80">
              Inquire
            </Link>
          </div>
        </div>
      </section>

      {/* Systems & Automation */}
      <section id="systems" className="flex flex-col gap-6">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">03 — systems &amp; automation</p>
          <h2 className="text-2xl font-semibold text-white">Your own AI operating system</h2>
          <p className="mt-1 text-sm text-slate-400">
            Missed calls, forgotten follow-ups, reviews nobody asks for, reports nobody runs — this is where
            small businesses quietly bleed money. Here&apos;s how the fix gets priced without any hand-waving.
          </p>
        </div>

        {/* Flagship: Agentic OS */}
        <div className="relative overflow-hidden border border-primary/40 bg-primary/5 p-6 md:p-8">
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(#38BDF8 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">The flagship</p>
            <p className="max-w-3xl text-base leading-relaxed text-slate-300">
              I build you a private AI workspace matched to your business and loaded with your data — your
              tools, your workflows, your numbers. It surfaces the pain points and the jobs worth automating,
              and then it keeps working for you: follow-up, reporting, reminders, the stuff that slips.
              I run my own business on the exact same thing — when we talk, I&apos;ll show you mine.
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
              It starts with the Systems Sprint below: you walk away with your business mapped, one fix
              built and working, and a priced roadmap for the rest. No mystery invoices — every piece of
              your OS gets a number before it gets built.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Quick Win Fix */}
          <div className="flex flex-col gap-4 border border-grid-line bg-surface/30 p-6">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Quick Win Fix</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">$500</span>
                <span className="text-sm text-slate-400">one-time</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Pick one problem. I build the fix and deliver it inside a week, with training included.
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Missed-call text-back, so after-hours callers get an instant reply</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Review requests on autopilot after every job</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Google Business Profile overhaul</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />AI-visibility fix pack (schema, metadata, llms.txt)</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Lead follow-up sequence for your existing contact list</li>
            </ul>
            <Link href="/contact" className="mt-auto flex items-center justify-center border border-primary/50 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background">
              Pick Your Fix
            </Link>
          </div>

          {/* Systems Sprint */}
          <div className="relative flex flex-col gap-4 border border-primary bg-surface/30 p-6">
            <div className="absolute right-0 top-0 bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-background">
              The Deep Dive
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Business Systems Sprint</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">$2,500</span>
                <span className="text-sm text-slate-400">3 days</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                For businesses that know things are leaking but can&apos;t point to where. Three days inside
                your operation, and you walk away with the start of your own AI operating system: a working
                fix plus a priced plan.
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Day 1: map your tools, workflows, and where leads/revenue leak</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Day 2: build one quick win, live, from the biggest leak</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Day 3: 30/60/90 roadmap with a fixed price on every item</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />Training and handoff on everything built</li>
            </ul>
            <p className="text-xs text-slate-400">
              Bigger builds — dashboards, CRM, AI reception, multi-step automation — are only quoted from a
              sprint roadmap. You&apos;ll know exactly what a system costs before you spend another dollar,
              and there is no open-ended billing.
            </p>
            <Link href="/contact" className="mt-auto flex items-center justify-center bg-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-background transition-all hover:bg-primary/80">
              Book a Sprint
            </Link>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="relative overflow-hidden border border-grid-line bg-surface/40 p-6 backdrop-blur-md md:p-8">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(#38BDF8 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-grid-line/30 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">04 — training</p>
              <h2 className="text-2xl font-semibold text-white">AI training &amp; classes</h2>
              <p className="mt-1 text-sm text-slate-400">
                1-on-1 sessions, small teams, or workshops for people who want AI to help with real work, not just demos.
                Training is already included free with every build and plan above — these are for training-only engagements.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex flex-shrink-0 items-center justify-center gap-2 bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-background shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all hover:bg-primary/80 sm:self-start"
            >
              <MaterialIcon icon="calendar_today" className="text-[16px]" />
              Book a Consult
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="border border-grid-line/50 bg-background/30 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">1-on-1</p>
              <p className="mt-1 text-sm text-slate-300">90-minute session. Your tools, your workflow, your questions.</p>
              <p className="mt-2 font-mono text-sm font-bold text-white">$150</p>
            </div>
            <div className="border border-grid-line/50 bg-background/30 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Small Team</p>
              <p className="mt-1 text-sm text-slate-300">Half-day hands-on session. Practical AI built around how your team actually works.</p>
              <p className="mt-2 font-mono text-sm font-bold text-white">$750</p>
            </div>
            <div className="border border-grid-line/50 bg-background/30 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Workshop</p>
              <p className="mt-1 text-sm text-slate-300">Larger groups, custom curriculum, tool builds, and rollout planning.</p>
              <p className="mt-2 font-mono text-sm font-bold text-white">Custom quote</p>
            </div>
          </div>
          <p className="font-mono text-xs text-text-muted">Veterans and their businesses train at a discount — just ask.</p>
        </div>
      </section>

      {/* More Services */}
      <section className="flex flex-col gap-4 border border-grid-line bg-surface/20 p-6 md:p-8">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">05 — everything else</p>
          <h2 className="text-2xl font-semibold text-white">Automation, AI reception &amp; more</h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Need social media help, business profile cleanup, AI reception, or custom workflows? Small jobs get
            handled as a $500 Quick Win Fix. Bigger builds get mapped and priced in a Systems Sprint — so
            you&apos;re never guessing what something costs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mt-2">
          <div className="border border-grid-line/50 bg-surface/30 p-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Social &amp; GBP</p>
            <p className="text-sm text-slate-400">Profile setup, optimization, and ongoing management across platforms.</p>
          </div>
          <div className="border border-grid-line/50 bg-surface/30 p-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Automation Builds</p>
            <p className="text-sm text-slate-400">Lead follow-up, scheduling, CRM workflows — built and handed off or managed.</p>
          </div>
          <div className="border border-grid-line/50 bg-surface/30 p-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">AI Reception</p>
            <p className="text-sm text-slate-400">AI that answers, qualifies, and books — so you stop losing leads after hours.</p>
          </div>
        </div>
        <Link
          href="/contact"
          className="mt-2 flex w-fit items-center gap-2 border border-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background"
        >
          Book a Consult
          <MaterialIcon icon="arrow_forward" className="text-[16px]" />
        </Link>
      </section>

      {/* Guarantee */}
      <div className="flex flex-col items-start gap-4 border border-grid-line/50 bg-surface/20 p-6 sm:flex-row">
        <MaterialIcon icon="verified" className="mt-1 flex-shrink-0 text-3xl text-primary" />
        <div>
          <p className="font-semibold text-white">90-Day Guarantee</p>
          <p className="mt-1 text-sm text-slate-400">
            On any monthly retainer: if your AI visibility score does not improve within 90 days, we work an additional month free. Simple as that.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <Link href="/contact" className="group flex items-center justify-between border border-grid-line bg-surface/20 p-6 transition-colors hover:bg-surface/40">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">Ready to start?</p>
          <p className="font-semibold text-white">Book a free 20-minute call. No pitch, just clarity.</p>
        </div>
        <MaterialIcon icon="arrow_forward" className="text-2xl text-primary transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
