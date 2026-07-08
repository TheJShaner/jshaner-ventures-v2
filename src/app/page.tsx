import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata = {
  title: "AI Visibility, SEO & Automation for Small Business",
  description:
    "JShaner Ventures helps local businesses get found on Google, show up in AI answers, and stop losing leads — veteran-built, clear pricing, training included.",
  alternates: {
    canonical: "https://jshaner.ventures/",
  },
};

export default function HomePage() {
  return (
    <div className="z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 md:gap-12 md:px-10 md:py-10 lg:px-12">
      {/* Hero */}
      <section className="relative w-full overflow-hidden glass-panel">
        <div className="system-init-bg absolute inset-0 opacity-40" />
        <div className="relative z-10 flex min-h-[320px] flex-col items-start gap-8 p-5 sm:p-8 md:min-h-[400px] md:flex-row md:items-center md:gap-12 lg:p-12">
          <div className="flex flex-1 flex-col gap-5 sm:gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase bg-primary/10 px-2 py-1 border border-primary/20">
                Veteran-Owned · Muncy, PA
              </span>
              <div className="h-px flex-1 bg-primary/20" />
            </div>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-text-main sm:text-5xl lg:text-[54px]">
              Your next customer is searching right now.{" "}
              <span className="text-primary">Do you show up?</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              You&apos;re good at the work. It&apos;s the getting-found part — the website, the Google
              stuff, the AI stuff, the follow-up — that eats your nights. That&apos;s the part I take
              off your plate. Plain English, clear prices, and I teach you to run everything I build.
            </p>
            <div className="mt-2 flex w-full flex-col gap-3 sm:mt-4">
              <Link
                href="/free-audit"
                className="flex w-full items-center justify-center gap-3 border border-primary bg-primary px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 hover:bg-transparent hover:text-primary sm:w-auto sm:self-start"
              >
                Get Your Free Visibility Audit
                <MaterialIcon icon="search_insights" className="text-[18px]" />
              </Link>
              <p className="text-sm text-text-muted">
                Free, no sales call required. I&apos;ll check your website, Google presence, and AI
                footprint and send you what&apos;s worth fixing first.{" "}
                <Link href="/services" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Or see services &amp; pricing
                </Link>
              </p>
            </div>
          </div>

          {/* Logo Graphic */}
          <div className="hidden lg:flex w-1/3 flex-col items-center justify-center gap-4 relative translate-x-[-12px] translate-y-[24px]">
            <div className="w-80 relative flex items-center justify-center">
              <div className="absolute inset-0 border border-primary/20 rotate-45 animate-[pulse_6s_ease-in-out_infinite]" />
              <div className="relative z-10 w-full p-4 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/logo-main.png"
                  alt="JShaner Ventures Logo"
                  width={883}
                  height={850}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <MaterialIcon icon="handyman" className="text-primary" />
          <h2 className="text-text-main text-2xl font-semibold tracking-[-0.02em]">What I do, and what it costs</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="/services" className="group flex flex-col gap-3 border border-grid-line bg-surface/30 p-6 transition-all glow-hover hover:border-primary/60">
            <MaterialIcon icon="travel_explore" className="text-primary text-3xl" />
            <h3 className="text-text-main text-lg font-semibold">Get found</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              SEO and AI visibility, handled monthly — so you show up when people search on Google
              or ask ChatGPT for a business like yours.
            </p>
            <p className="mt-auto pt-2 font-mono text-xs text-primary uppercase tracking-widest">From $497/mo</p>
          </Link>
          <Link href="/services" className="group flex flex-col gap-3 border border-grid-line bg-surface/30 p-6 transition-all glow-hover hover:border-primary/60">
            <MaterialIcon icon="web" className="text-primary text-3xl" />
            <h3 className="text-text-main text-lg font-semibold">Get a better website</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              From a single landing page to a full custom build — fast, mobile-ready, and built to
              show up in search from day one.
            </p>
            <p className="mt-auto pt-2 font-mono text-xs text-primary uppercase tracking-widest">From $250</p>
          </Link>
          <Link href="/services#systems" className="group flex flex-col gap-3 border border-grid-line bg-surface/30 p-6 transition-all glow-hover hover:border-primary/60">
            <MaterialIcon icon="precision_manufacturing" className="text-primary text-3xl" />
            <h3 className="text-text-main text-lg font-semibold">Get your own AI operating system</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              A private AI workspace built around your business and loaded with your data — it finds
              where money leaks and which jobs to automate, and we fix them one priced piece at a time.
            </p>
            <p className="mt-auto pt-2 font-mono text-xs text-primary uppercase tracking-widest">Fixes from $500 · Sprint $2,500</p>
          </Link>
        </div>
        <div className="flex items-start gap-3 border border-accent/30 bg-accent/5 px-5 py-4">
          <MaterialIcon icon="school" className="mt-0.5 flex-shrink-0 text-accent text-lg" />
          <p className="text-sm text-text-main">
            <strong>Training is included with everything I build.</strong>{" "}
            <span className="text-text-muted">
              You get a walkthrough, a short video, and a cheat sheet — I don&apos;t hand you tools you can&apos;t drive.
            </span>
          </p>
        </div>
      </section>

      {/* Who you're working with */}
      <section className="grid w-full grid-cols-1 items-stretch gap-8 border-t border-grid-line/50 pt-6 md:gap-12 md:pt-8 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="group relative overflow-hidden border border-grid-line bg-surface/30 p-6 transition-all glow-hover md:p-8">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MaterialIcon icon="military_tech" className="text-6xl" />
            </div>
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              The short version
            </h3>
            <h2 className="text-text-main text-2xl font-semibold mb-4">
              I&apos;m Jonathan Shaner
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
              US Army Airborne Infantry veteran and Purple Heart recipient. After the Army, I taught
              myself to build software, and now I build AI and automation systems for a living —
              starting with my own business, which runs on the same systems I sell.
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
              That background shows up in the work: clear objectives, straight talk, and systems
              built to survive contact with real business mess.
            </p>
            <p className="text-text-muted text-sm leading-relaxed font-sans">
              I&apos;m not an agency, and you won&apos;t get handed off to one. When you call, you
              get me — the same person who built your system and knows why every piece of it is there.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3 border-b border-grid-line pb-4">
            <MaterialIcon icon="shield_person" className="text-primary" />
            <h2 className="text-text-main text-2xl font-semibold tracking-[-0.02em]">How I work</h2>
          </div>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <MaterialIcon icon="check_circle" className="text-primary text-xl mt-0.5" />
              <div>
                <p className="text-text-main font-semibold">Clear scope before tools</p>
                <p className="text-text-muted text-sm">You&apos;ll know exactly what I&apos;m doing and what it costs before anything starts. No open-ended billing, ever.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MaterialIcon icon="radar" className="text-primary text-xl mt-0.5" />
              <div>
                <p className="text-text-main font-semibold">Useful fixes over buzzwords</p>
                <p className="text-text-muted text-sm">No &quot;AI magic.&quot; Just work that saves you time or gets you customers — and gets deleted if it doesn&apos;t.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MaterialIcon icon="school" className="text-primary text-xl mt-0.5" />
              <div>
                <p className="text-text-main font-semibold">You learn to drive it</p>
                <p className="text-text-muted text-sm">Every build comes with training. If I got hit by a bus tomorrow, your systems would keep working and you&apos;d know how to run them.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="flex flex-col gap-6 border-t border-grid-line/50 pt-6 md:pt-8">
        <div className="flex items-center gap-3">
          <MaterialIcon icon="route" className="text-primary" />
          <h2 className="text-text-main text-2xl font-semibold tracking-[-0.02em]">How it starts</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-grid-line bg-surface/30 p-6">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Step 1 — Free</p>
            <h3 className="text-text-main text-lg font-semibold mb-2">Get your audit</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              I check your website, Google presence, and AI search footprint, then send you a plain-English
              scorecard: what&apos;s working, what&apos;s broken, what to fix first.
            </p>
          </div>
          <div className="border border-grid-line bg-surface/30 p-6">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Step 2 — Fixed price</p>
            <h3 className="text-text-main text-lg font-semibold mb-2">Pick a fix</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Some findings you can fix yourself — the audit tells you how. For the rest, every service
              has a price on it. You pick, I build.
            </p>
          </div>
          <div className="border border-grid-line bg-surface/30 p-6">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Step 3 — Included</p>
            <h3 className="text-text-main text-lg font-semibold mb-2">Learn to run it</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              I hand off every build with a walkthrough and training, so your business owns the system —
              not the other way around.
            </p>
          </div>
        </div>
        <Link
          href="/free-audit"
          className="flex w-full items-center justify-center gap-3 border border-primary bg-primary px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 hover:bg-transparent hover:text-primary sm:w-auto sm:self-start"
        >
          Start With the Free Audit
          <MaterialIcon icon="arrow_forward" className="text-[18px]" />
        </Link>
      </section>
    </div>
  );
}
