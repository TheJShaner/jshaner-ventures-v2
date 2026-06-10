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

      {/* Training */}
      <section className="relative overflow-hidden border border-grid-line bg-surface/40 p-6 backdrop-blur-md md:p-8">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(#38BDF8 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-grid-line/30 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">03 — training</p>
              <h2 className="text-2xl font-semibold text-white">AI training &amp; classes</h2>
              <p className="mt-1 text-sm text-slate-400">
                1-on-1 sessions, small teams, or workshops for people who want AI to help with real work, not just demos.
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
            </div>
            <div className="border border-grid-line/50 bg-background/30 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Small Team</p>
              <p className="mt-1 text-sm text-slate-300">Half or full day. Practical AI built around how your team actually works.</p>
            </div>
            <div className="border border-grid-line/50 bg-background/30 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Workshop</p>
              <p className="mt-1 text-sm text-slate-300">Larger groups, custom curriculum, tool builds, and rollout planning.</p>
            </div>
          </div>
          <p className="font-mono text-xs text-text-muted">Pricing varies by format and group size. Book a consult and we&apos;ll scope it without making it weird.</p>
        </div>
      </section>

      {/* More Services */}
      <section className="flex flex-col gap-4 border border-grid-line bg-surface/20 p-6 md:p-8">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">04 — everything else</p>
          <h2 className="text-2xl font-semibold text-white">Automation, AI reception &amp; more</h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Need social media help, business profile cleanup, AI reception, lead follow-up, or custom workflows? That can be scoped as a one-time build or folded into a monthly plan.
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
