import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata = {
  title: "Roadmap",
  description: "Strategic roadmap from small business consulting to GovCon readiness — JShaner Ventures growth timeline.",
  alternates: {
    canonical: "https://jshaner.ventures/roadmap",
  },
};

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

      <div className="min-h-screen w-full px-4 pb-20 pt-8 sm:px-6">
        {/* Hero Section */}
        <section className="relative mx-auto mb-20 max-w-5xl text-center md:mb-32">
          <div className="glass-panel relative overflow-hidden rounded-lg border border-primary/20 p-6 sm:p-8 md:p-20">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image
                src="/images/blueprint-overlay.png"
                alt="Technical blueprint schematic overlay pattern"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="relative z-10 mb-6 font-mono text-3xl font-bold tracking-tighter text-white uppercase sm:text-4xl md:text-6xl">
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
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 timeline-line opacity-30 md:block" />

          {/* Phase 01: Deployment */}
          <div className="relative mb-16 flex w-full flex-col items-start md:mb-40 md:flex-row md:items-center">
            <div className="absolute -left-20 top-0 sketch-overlay hidden lg:block">
              <Image
                src="/images/davinci-catapult.png"
                alt="Cyan holographic Da Vinci catapult sketch"
                width={256}
                height={256}
                className="object-contain grayscale invert brightness-200"
              />
            </div>
            <div className="mb-6 w-full text-center md:mb-0 md:w-1/2 md:pr-16 md:text-right">
              <div className="font-mono text-primary text-xs mb-2">2005 — 2012</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 01: Deployment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operation Iraqi Freedom. US Army Airborne Infantry (11B3P). Two tours to Iraq. Purple Heart recipient — wounded in Baghdad. Foundational discipline and high-stakes problem solving in kinetic environments. Establishing the baseline for operational excellence, strategic resilience, and mission-first leadership.
              </p>
            </div>
            <div className="z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-primary bg-background shadow-[0_0_20px_rgba(34,211,238,0.4)] md:mb-0">
              <MaterialIcon icon="military_tech" className="text-primary text-sm" />
            </div>
            <div className="hidden md:block md:w-1/2 md:pl-16" />
          </div>

          {/* Phase 02: Engineering Foundation */}
          <div className="relative mb-16 flex w-full flex-col items-start md:mb-40 md:flex-row md:items-center">
            <div className="hidden md:block md:w-1/2 md:pr-16" />
            <div className="z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-600 bg-background md:mb-0">
              <MaterialIcon icon="precision_manufacturing" className="text-slate-400 text-sm" />
            </div>
            <div className="mt-0 w-full text-center md:w-1/2 md:pl-16 md:text-left">
              <div className="font-mono text-primary text-xs mb-2">2016 — 2020</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 02: Engineering Foundation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Welding Engineering at Pennsylvania College of Technology. Precision fabrication, technical documentation, and applied problem-solving in industrial environments. Building the engineering mindset that translates directly to system architecture.
              </p>
            </div>
          </div>

          {/* Phase 03: Technical Shift */}
          <div className="relative mb-16 flex w-full flex-col items-start md:mb-40 md:flex-row md:items-center">
            <div className="mb-6 w-full text-center md:mb-0 md:w-1/2 md:pr-16 md:text-right">
              <div className="font-mono text-primary text-xs mb-2">2020 — 2023</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 03: Technical Shift</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                From welding labs to computer labs. Self-taught software development, rapid AI tooling deployment, and the pivot from physical fabrication to digital infrastructure. Same engineering rigor, new medium.
              </p>
            </div>
            <div className="z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-primary bg-background md:mb-0">
              <MaterialIcon icon="terminal" className="text-primary text-sm" />
            </div>
            <div className="hidden md:block md:w-1/2 md:pl-16" />
          </div>

          {/* Phase 04: Agentic Economy */}
          <div className="relative mb-16 flex w-full flex-col items-start md:mb-40 md:flex-row md:items-center">
            <div className="hidden md:block md:w-1/2 md:pr-16" />
            <div className="z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-primary bg-background animate-pulse md:mb-0">
              <MaterialIcon icon="hub" className="text-primary text-sm" />
            </div>
            <div className="mt-0 w-full text-center md:w-1/2 md:pl-16 md:text-left">
              <div className="font-mono text-primary text-xs mb-2">2023 — PRESENT</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 04: Agentic Economy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Launch of JShaner Ventures. Focus on SEO/AEO and full AI Integration. Developing autonomous workflows that bridge the gap between human intent and machine execution. Training teams and individuals in AI-driven workflows and tool adoption.
              </p>
            </div>
          </div>

          {/* Phase 05: GovCon Readiness */}
          <div className="relative mb-20 flex w-full flex-col items-start md:flex-row md:items-center">
            <div className="absolute -right-20 bottom-0 sketch-overlay hidden lg:block scale-x-[-1]">
              <Image
                src="/images/davinci-flying.png"
                alt="Cyan holographic Da Vinci flying machine sketch"
                width={256}
                height={256}
                className="object-contain grayscale invert brightness-200"
              />
            </div>
            <div className="mb-6 w-full text-center md:mb-0 md:w-1/2 md:pr-16 md:text-right">
              <div className="font-mono text-primary text-xs mb-2">SOON</div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">Phase 05: GovCon Readiness</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Laying foundational technical infrastructure and administrative groundwork for federal government contracting initiatives. Focus on secure, compliant agentic systems built for the public sector.
              </p>
            </div>
            <div className="z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-primary bg-background shadow-[0_0_30px_rgba(34,211,238,0.6)] md:mb-0">
              <MaterialIcon icon="account_balance" className="text-primary text-sm" />
            </div>
            <div className="hidden md:block md:w-1/2 md:pl-16" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto mt-20 max-w-4xl md:mt-40">
          <div className="border border-primary/30 p-1 bg-primary/5">
            <div className="group cursor-pointer border border-primary p-6 text-center transition-colors hover:bg-primary/5 md:p-12">
              <h2 className="mb-6 font-mono text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                SYSTEMS READY FOR <span className="text-primary">STRATEGIC PARTNERSHIP</span>
              </h2>
              <p className="font-mono text-slate-500 text-xs uppercase tracking-widest mb-8">
                Establish secure communication channels via encrypted gateway
              </p>
              <Link href="/contact" className="inline-block w-full bg-primary px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-white sm:w-auto">
                Inquire for Strategic Partnerships
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
