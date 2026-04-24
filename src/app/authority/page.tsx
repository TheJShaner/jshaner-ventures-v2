import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata = {
  title: "Authority",
  description: "Professional profile of Jonathan Shaner — US Army Airborne Infantry veteran, Purple Heart recipient, and founder of JShaner Ventures.",
  alternates: {
    canonical: "https://jshaner.ventures/authority",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonathan Shaner",
  jobTitle: "Principal Consultant",
  url: "https://jshaner.ventures/authority",
  worksFor: {
    "@type": "Organization",
    name: "JShaner Ventures",
    url: "https://jshaner.ventures",
  },
  knowsAbout: ["SEO", "Answer Engine Optimization", "AI Integration", "Technical Training", "Government Contracting"],
  description: "US Army Airborne Infantry veteran (11B3P), Purple Heart recipient, self-taught developer. Founder of JShaner Ventures specializing in SEO, AEO, and AI integration for small businesses.",
};

export default function AuthorityPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Executive Brief Header */}
      <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:mb-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-primary mb-4">
            <span className="h-[1px] w-8 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase">Executive Brief 01-A</span>
          </div>
          <h1 className="text-4xl font-black leading-[0.9] tracking-tighter uppercase sm:text-5xl md:text-7xl lg:text-8xl">
            Professional<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Authority</span>
          </h1>
        </div>
        <div className="lg:col-span-4 pb-2">
          <p className="text-text-muted font-mono text-xs leading-relaxed uppercase tracking-wider">
            Comprehensive profile regarding operational background, technical expertise, and strategic mission of Jonathan Shaner.
          </p>
        </div>
      </div>

      {/* AI Abstract */}
      <div className="group relative mb-16 overflow-hidden executive-border bg-surface/30 p-6 md:mb-20 md:p-8">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <MaterialIcon icon="security" className="text-6xl" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="bg-primary/10 text-primary px-3 py-1 font-mono text-[10px] tracking-widest uppercase border border-primary/20 shrink-0">
            AI Abstract
          </div>
          <p className="font-mono text-sm md:text-base leading-relaxed text-text-muted max-w-4xl">
            <span className="text-primary">CORE DATA:</span> Profile of Jonathan Shaner. US Army Airborne Infantry Veteran. Two tours to Iraq. Purple Heart recipient — wounded in Baghdad. Self-taught developer. Transitioned military operational experience into building robust AI tooling and optimization strategies for small businesses. Focuses on bridging the gap between cutting-edge answer engine algorithms and local business execution. Built on principles of structural integrity and mission success.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left: Strategic Overview */}
        <div className="flex flex-col gap-16 lg:col-span-8 lg:gap-24">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold uppercase tracking-tight">Leadership Foundation</h2>
              <div className="flex-1 h-[1px] bg-[rgba(148,163,184,0.1)]" />
            </div>
            <div className="space-y-8 text-text-muted leading-relaxed text-lg max-w-3xl">
              <p>
                The transition from a combat zone to the digital landscape requires a fundamental shift in tools, but not in mindset. My authority is rooted in over seven years of military service, two combat tours to Iraq, and a Purple Heart, where operational success depended on strict adherence to protocols, clear communication, and systems designed to function under extreme stress without failure. JShaner Ventures was built to translate these exact principles into technical architecture for small businesses.
              </p>
              <p>
                Military leadership training instills a unique &apos;commander&apos;s intent&apos;—the ability to understand the ultimate goal and execute independently towards it. In technical consulting, this translates to an unwavering focus on the business objective, cutting through the &apos;fluff&apos; of marketing jargon and fragile systems to deliver robust, mission-critical solutions.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="text-text-main font-bold text-sm uppercase tracking-widest mb-2">Operational Discipline</h4>
                  <p className="text-sm text-text-muted">Standard Operating Procedures (SOPs) are not suggestions; they are the framework for scalability. I apply this rigorous approach to code structure and AI deployment.</p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="text-text-main font-bold text-sm uppercase tracking-widest mb-2">Strategic Consulting</h4>
                  <p className="text-sm text-text-muted">Leveraging military planning methodologies to identify technical bottlenecks and deploy high-impact SEO/AEO strategies with tactical precision.</p>
                </div>
              </div>
              <p className="pt-4">
                By leveraging self-taught development skills honed through rigorous iteration, I specialize in{" "}
                <span className="text-text-main font-medium">Search Engine Optimization (SEO)</span>,{" "}
                <span className="text-text-main font-medium">Answer Engine Optimization (AEO)</span>, and deploying custom AI tooling. These aren&apos;t just services; they are deployable nodes designed to scale and prepare local infrastructure for future requirements.
              </p>
            </div>
          </section>
        </div>

        {/* Right: Identity & Credentials */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          <div className="sticky top-32">
            <div className="executive-border bg-surface/20 p-6 flex flex-col gap-8">
              {/* Identity Card */}
              <div className="aspect-[4/5] bg-background border border-[rgba(148,163,184,0.1)] relative overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Jonathan Shaner Profile"
                  fill
                  className="object-cover grayscale opacity-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="font-mono text-[10px] text-primary tracking-widest mb-1">ID // 11B3P</div>
                  <div className="text-2xl font-bold tracking-tighter uppercase">Jonathan Shaner</div>
                </div>
              </div>

              {/* Data Points */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(148,163,184,0.05)] py-2">
                  <span className="text-text-muted uppercase tracking-tighter">Status</span>
                  <span className="text-accent flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Operational
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(148,163,184,0.05)] py-2">
                  <span className="text-text-muted uppercase tracking-tighter">Foundation</span>
                  <span className="text-text-main">Military Leadership</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(148,163,184,0.05)] py-2">
                  <span className="text-text-muted uppercase tracking-tighter">Specialization</span>
                  <span className="text-text-main">AEO / AI Tooling</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(148,163,184,0.05)] py-2">
                  <span className="text-text-muted uppercase tracking-tighter">Experience</span>
                  <span className="text-text-main">7+ Years Ops</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(148,163,184,0.05)] py-2">
                  <span className="text-text-muted uppercase tracking-tighter">Theater</span>
                  <span className="text-text-main">Global Digital</span>
                </div>
              </div>

              <Link href="/contact" className="block w-full bg-text-main text-background font-bold py-4 text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 text-center">
                Request Collaboration
              </Link>
            </div>

            {/* Security Badge */}
            <div className="mt-8 flex items-center gap-4 px-6 opacity-40">
              <MaterialIcon icon="verified_user" className="text-3xl" />
              <div className="font-mono text-[9px] uppercase tracking-widest leading-tight">
                Identity Verified<br />Public Record Access Granted
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA Section */}
      <section className="relative mt-20 overflow-hidden border border-[rgba(148,163,184,0.1)] bg-[#1B2A41] p-6 md:mt-24 md:p-12">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <MaterialIcon icon="terminal" className="text-9xl" />
        </div>
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-3 text-primary mb-6">
            <span className="h-[1px] w-8 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase">Deployment Status: Ready</span>
          </div>
          <h2 className="mb-6 font-mono text-2xl font-black tracking-tighter uppercase sm:text-3xl md:text-4xl">
            Systems ready for <br /><span className="text-primary">deployment.</span>
          </h2>
          <p className="text-text-muted text-lg mb-10 leading-relaxed font-sans">
            If you&apos;re running a business and your visibility, pipeline, or automation is broken — I&apos;ll show you exactly where and how to fix it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-block w-full bg-primary px-10 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-white sm:w-auto">
              [Request Audit]
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
