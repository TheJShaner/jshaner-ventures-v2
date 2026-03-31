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
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Executive Brief Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-primary mb-4">
            <span className="h-[1px] w-8 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase">Executive Brief 01-A</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
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
      <div className="executive-border bg-surface/30 p-8 mb-20 relative overflow-hidden group">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Strategic Overview */}
        <div className="lg:col-span-8 flex flex-col gap-24">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
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
                <div className="flex justify-between items-center py-2 border-b border-[rgba(148,163,184,0.05)]">
                  <span className="text-text-muted uppercase tracking-tighter">Status</span>
                  <span className="text-accent flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Operational
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(148,163,184,0.05)]">
                  <span className="text-text-muted uppercase tracking-tighter">Foundation</span>
                  <span className="text-text-main">Military Leadership</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(148,163,184,0.05)]">
                  <span className="text-text-muted uppercase tracking-tighter">Specialization</span>
                  <span className="text-text-main">AEO / AI Tooling</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(148,163,184,0.05)]">
                  <span className="text-text-muted uppercase tracking-tighter">Experience</span>
                  <span className="text-text-main">7+ Years Ops</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[rgba(148,163,184,0.05)]">
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
      <section className="mt-24 bg-[#1B2A41] border border-[rgba(148,163,184,0.1)] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <MaterialIcon icon="terminal" className="text-9xl" />
        </div>
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-3 text-primary mb-6">
            <span className="h-[1px] w-8 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase">Deployment Status: Ready</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-mono tracking-tighter uppercase mb-6">
            Systems ready for <br /><span className="text-primary">deployment.</span>
          </h2>
          <p className="text-text-muted text-lg mb-10 leading-relaxed font-sans">
            If you&apos;re running a business and your visibility, pipeline, or automation is broken — I&apos;ll show you exactly where and how to fix it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-primary text-background font-bold py-4 px-10 text-sm uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 inline-block">
              [Request Audit]
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
