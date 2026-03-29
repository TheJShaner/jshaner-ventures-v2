import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata = { title: "Roadmap" };

export default function RoadmapPage() {
  return (
    <>
      {/* Node Network Background (unique to roadmap) */}
      <div className="node-network" />

      {/* AI Abstract Sidebar */}
      <aside className="hidden lg:block fixed top-24 right-8 w-80 z-40">
        <div className="glass-panel rounded-lg p-6 border-l-4 border-l-primary shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <MaterialIcon icon="psychology" className="text-primary text-sm" filled />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">AI Abstract</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300 font-mono">
            Strategic trajectory toward Federal Government Contracting (GovCon). By leveraging foundations in military precision and modern AI infrastructure, JShaner Ventures is architecting the path toward secure, agentic compliance for federal environments. From battlefield operations to the digital frontier—execution over theory.
          </p>
        </div>
      </aside>

      <div className="pt-8 pb-20 px-6 min-h-screen w-full">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto mb-32 text-center relative">
          <div className="glass-panel rounded-lg p-12 md:p-20 relative overflow-hidden border border-primary/20">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image
                src="/images/blueprint-overlay.png"
                alt="Technical blueprint schematic overlay pattern"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 uppercase relative z-10">
              STRATEGIC_ROADMAP // <span className="text-primary">GOVCON</span>
            </h1>
            <p className="font-mono text-primary/60 text-sm tracking-widest uppercase mb-8 relative z-10">
              Executive Briefing : Version 4.0.2
            </p>
            <div className="flex justify-center gap-4 relative z-10">
              <div className="h-[1px] w-12 bg-grid-line self-center" />
              <MaterialIcon icon="shield_person" className="text-primary" />
              <div className="h-[1px] w-12 bg-grid-line self-center" />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full timeline-line opacity-30" />

          {/* Phase 01: Deployment */}
          <div className="relative mb-40 flex flex-col md:flex-row items-center w-full">
            <div className="absolute -left-20 top-0 sketch-overlay hidden lg:block">
              <Image
                src="/images/davinci-catapult.png"
                alt="Cyan holographic Da Vinci catapult sketch"
                width={256}
                height={256}
                className="object-contain grayscale invert brightness-200"
              />
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-16 text-center md:text-right mb-8 md:mb-0">
              <div className="font-mono text-primary text-xs mb-2">2005 — 2012</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 01: Deployment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operation Iraqi Freedom. US Army Airborne Infantry (11B3P). Two tours to Iraq. Purple Heart recipient — wounded in Baghdad. Foundational discipline and high-stakes problem solving in kinetic environments. Establishing the baseline for operational excellence, strategic resilience, and mission-first leadership.
              </p>
            </div>
            <div className="z-10 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <MaterialIcon icon="military_tech" className="text-primary text-sm" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16" />
          </div>

          {/* Phase 02: Engineering Foundation */}
          <div className="relative mb-40 flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 pr-0 md:pr-16" />
            <div className="z-10 w-10 h-10 rounded-full bg-background border-4 border-slate-600 flex items-center justify-center">
              <MaterialIcon icon="precision_manufacturing" className="text-slate-400 text-sm" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left mt-8 md:mt-0">
              <div className="font-mono text-primary text-xs mb-2">2016 — 2020</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 02: Engineering Foundation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Welding Engineering at Pennsylvania College of Technology. Precision fabrication, technical documentation, and applied problem-solving in industrial environments. Building the engineering mindset that translates directly to system architecture.
              </p>
            </div>
          </div>

          {/* Phase 03: Technical Shift */}
          <div className="relative mb-40 flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 text-center md:text-right mb-8 md:mb-0">
              <div className="font-mono text-primary text-xs mb-2">2020 — 2023</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 03: Technical Shift</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                From welding labs to computer labs. Self-taught software development, rapid AI tooling deployment, and the pivot from physical fabrication to digital infrastructure. Same engineering rigor, new medium.
              </p>
            </div>
            <div className="z-10 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center">
              <MaterialIcon icon="terminal" className="text-primary text-sm" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16" />
          </div>

          {/* Phase 04: Agentic Economy */}
          <div className="relative mb-40 flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 pr-0 md:pr-16" />
            <div className="z-10 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center animate-pulse">
              <MaterialIcon icon="hub" className="text-primary text-sm" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left mt-8 md:mt-0">
              <div className="font-mono text-primary text-xs mb-2">2023 — PRESENT</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 04: Agentic Economy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Launch of JShaner Ventures. Focus on SEO/AEO and full AI Integration. Developing autonomous workflows that bridge the gap between human intent and machine execution. Training teams and individuals in AI-driven workflows and tool adoption.
              </p>
            </div>
          </div>

          {/* Phase 05: GovCon Readiness */}
          <div className="relative mb-20 flex flex-col md:flex-row items-center w-full">
            <div className="absolute -right-20 bottom-0 sketch-overlay hidden lg:block scale-x-[-1]">
              <Image
                src="/images/davinci-flying.png"
                alt="Cyan holographic Da Vinci flying machine sketch"
                width={256}
                height={256}
                className="object-contain grayscale invert brightness-200"
              />
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-16 text-center md:text-right mb-8 md:mb-0">
              <div className="font-mono text-primary text-xs mb-2">SOON</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 05: GovCon Readiness</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Laying foundational technical infrastructure and administrative groundwork for federal government contracting initiatives. Focus on secure, compliant agentic systems built for the public sector.
              </p>
            </div>
            <div className="z-10 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              <MaterialIcon icon="account_balance" className="text-primary text-sm" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-40">
          <div className="border border-primary/30 p-1 bg-primary/5">
            <div className="border border-primary p-8 md:p-12 text-center group cursor-pointer hover:bg-primary/5 transition-colors">
              <h2 className="font-mono text-xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                SYSTEMS READY FOR <span className="text-primary">STRATEGIC PARTNERSHIP</span>
              </h2>
              <p className="font-mono text-slate-500 text-xs uppercase tracking-widest mb-8">
                Establish secure communication channels via encrypted gateway
              </p>
              <Link href="/contact" className="px-8 py-3 bg-primary text-background font-mono font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors inline-block">
                Inquire for Strategic Partnerships
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
