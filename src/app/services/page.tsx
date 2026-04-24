import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata = {
  title: "Services",
  description: "SEO/AEO optimization, AI integration, and technical training services for small businesses by JShaner Ventures.",
  alternates: {
    canonical: "https://jshaner.ventures/services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JShaner Ventures",
  url: "https://jshaner.ventures/services",
  description: "Professional services in Search Engine Optimization, Answer Engine Optimization, AI Integration, and Technical Training.",
  provider: {
    "@type": "Organization",
    name: "JShaner Ventures",
    url: "https://jshaner.ventures",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technical Service Vectors",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Optimization (SEO/AEO)", description: "Schema markup, semantic HTML, and LLM-targeted content structuring for machine-readable data." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration", description: "Local LLM deployment, API-driven automations, and data sanitization for operational efficiency." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical Training", description: "Upskilling local business teams on prompt engineering, digital hygiene, and AI tooling." } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-8 sm:px-6 md:px-8 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* AI Abstract Block */}
      <div className="w-full border-l-4 border-primary bg-surface/40 backdrop-blur-sm p-6 shadow-xl">
        <p className="font-mono text-sm text-slate-100 leading-relaxed">
          <span className="text-primary font-bold">&gt;[SYSTEM_ABSTRACT]:</span> Service deployment focuses on three primary vectors: Search Optimization (SEO/AEO), AI Integration, and Technical Training. We do not chase algorithmic trends. Instead, we build robust, machine-readable data structures that serve both human users and Large Language Models, ensuring long-term digital sovereignty and operational efficiency.
        </p>
      </div>

      {/* Page Title */}
      <div className="py-4 border-b border-grid-line/50">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Technical Vectors</h1>
        <p className="font-mono text-sm text-primary mt-2 uppercase tracking-wider">Operational Pipelines &amp; Methodologies</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 pt-4 lg:grid-cols-3">
        {/* SEO/AEO Node */}
        <div className="service-node flex flex-1 gap-4 border border-grid-line bg-surface/30 p-6 flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
          <div className="flex items-center justify-between">
            <div className="text-primary bg-primary/10 p-3">
              <MaterialIcon icon="search" className="text-3xl" />
            </div>
            <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1 bg-background/80">VECTOR_01</span>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-white text-xl font-semibold leading-tight tracking-tight">Search Optimization (SEO/AEO)</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Schema markup, semantic HTML, and LLM-targeted content structuring for machine-readable data.
            </p>
            <div className="mt-4 pt-4 border-t border-grid-line/30">
              <ul className="font-mono text-xs text-text-muted flex flex-col gap-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Semantic Architecture</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Answer Engine Readiness</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Structured Data Implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Integration Node */}
        <div className="service-node flex flex-1 gap-4 border border-grid-line bg-surface/30 p-6 flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
          <div className="flex items-center justify-between">
            <div className="text-primary bg-primary/10 p-3">
              <MaterialIcon icon="computer" className="text-3xl" />
            </div>
            <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1 bg-background/80">VECTOR_02</span>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-white text-xl font-semibold leading-tight tracking-tight">AI Integration</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Local LLM deployment, API-driven automations, and data sanitization for operational efficiency.
            </p>
            <div className="mt-4 pt-4 border-t border-grid-line/30">
              <ul className="font-mono text-xs text-text-muted flex flex-col gap-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Workflow Automation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Private LLM Deployment</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> API Orchestration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Training Node */}
        <div className="service-node flex flex-1 gap-4 border border-grid-line bg-surface/30 p-6 flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
          <div className="flex items-center justify-between">
            <div className="text-primary bg-primary/10 p-3">
              <MaterialIcon icon="school" className="text-3xl" />
            </div>
            <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1 bg-background/80">VECTOR_03</span>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-white text-xl font-semibold leading-tight tracking-tight">Technical Training</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Upskilling local business teams on prompt engineering, digital hygiene, and AI tooling.
            </p>
            <div className="mt-4 pt-4 border-t border-grid-line/30">
              <ul className="font-mono text-xs text-text-muted flex flex-col gap-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Prompt Engineering Basics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Security &amp; Hygiene Protocols</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary" /> Tool Adoption Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Training & Team Upskilling Section */}
      <section className="group relative mt-12 overflow-hidden border border-grid-line bg-surface/40 p-6 backdrop-blur-md md:p-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#38BDF8 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-grid-line/30 pb-6">
            <div>
              <span className="font-mono text-primary text-xs tracking-widest uppercase mb-2 block">// TRAINING_SYLLABUS_v2.0</span>
              <h2 className="text-3xl font-semibold text-white tracking-tight">Technical Training &amp; Team Upskilling</h2>
            </div>
            <Link href="/contact" className="flex w-full items-center justify-center gap-3 bg-primary px-8 py-3 font-bold text-background transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:bg-primary/90 sm:w-auto sm:self-start md:self-center">
              <MaterialIcon icon="calendar_today" />
              BOOK A CONSULTATION
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-primary font-mono text-sm uppercase tracking-tighter">Operational Focus</h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                Empower your workforce with the tools and knowledge to navigate the AI-driven landscape. We provide tailored on-site and remote workshops designed for office workers and local business teams.
              </p>
              <div className="space-y-4 mt-4">
                <div className="flex gap-4">
                  <MaterialIcon icon="psychology" className="text-primary" />
                  <div>
                    <h4 className="text-white font-medium">Prompt Engineering</h4>
                    <p className="text-text-muted text-sm">Mastering the art of structured input to maximize LLM output accuracy and relevance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MaterialIcon icon="shield" className="text-primary" />
                  <div>
                    <h4 className="text-white font-medium">Digital Hygiene</h4>
                    <p className="text-text-muted text-sm">Data privacy, security protocols, and ethical AI usage within corporate environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background/50 border border-grid-line/50 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <MaterialIcon icon="developer_mode_tv" className="text-sm" />
                <span>TERMINAL_OUTPUT: CORE_CURRICULUM</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">01_</span>
                  <span className="text-slate-300">Practical AI implementation for daily workflows (Email, Reports, Data analysis).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">02_</span>
                  <span className="text-slate-300">Tool-specific training (ChatGPT, Claude, Midjourney, Local LLMs).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">03_</span>
                  <span className="text-slate-300">Identifying and mitigating AI hallucinations and data leaks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">04_</span>
                  <span className="text-slate-300">Building custom &apos;GPT&apos; assistants for specific business units.</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 border-t border-grid-line/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[10px] text-text-muted">STATUS: READY_FOR_DEPLOYMENT</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary/40" />
                  <div className="w-2 h-2 bg-primary/60" />
                  <div className="w-2 h-2 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Architecture Hint */}
      <Link href="/roadmap" className="mt-8 border border-grid-line bg-surface/20 p-6 flex flex-col gap-4 hover:bg-surface/40 transition-colors group block">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-mono text-slate-200 group-hover:text-primary transition-colors tracking-tight">&gt; VIEW_PIPELINE_ARCHITECTURE</h3>
          <MaterialIcon icon="arrow_forward" className="text-primary group-hover:scale-110 transition-transform" />
        </div>
      </Link>
    </div>
  );
}
