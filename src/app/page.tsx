import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

export const metadata = { title: "AI Visibility, SEO & Automation for Small Business" };

export default function HomePage() {
  return (
    <div className="z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 md:gap-12 md:px-10 md:py-10 lg:px-12">
      {/* AI Abstract Block */}
      <section className="w-full border-l-2 border-primary bg-surface/40 backdrop-blur-sm p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <MaterialIcon icon="terminal" className="text-primary text-sm mt-1" filled />
          <p className="font-mono text-sm text-text-muted leading-relaxed uppercase tracking-wider">
            <span className="text-primary mr-2">SYS_MSG:</span>
            JShaner Ventures operates at the intersection of traditional search architecture and emerging AI models. By mapping semantic relationships and structuring unstructured data, we build scalable digital infrastructure for small businesses. Core competencies include Answer Engine Optimization (AEO), localized generative AI tooling, and programmatic workflow automation. Execution over theory.
          </p>
        </div>
      </section>

      {/* SYSTEM.INIT Hero Section */}
      <section className="relative w-full overflow-hidden glass-panel">
        <div className="system-init-bg absolute inset-0 opacity-40" />
        <div className="relative z-10 flex min-h-[320px] flex-col items-start gap-8 p-5 sm:p-8 md:min-h-[400px] md:flex-row md:items-center md:gap-12 lg:p-12">
          <div className="flex flex-1 flex-col gap-5 sm:gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase bg-primary/10 px-2 py-1 border border-primary/20">
                System.Init
              </span>
              <div className="h-px flex-1 bg-primary/20" />
            </div>
            <h1 className="font-mono text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-text-main sm:text-5xl lg:text-[56px]">
              Engineered Growth <br />
              <span className="text-primary">Infrastructure.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              Precision AI integration, advanced search optimization, and technical blueprinting for scalable small business architecture.
            </p>
            <div className="mt-2 flex w-full flex-col gap-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/services"
                className="flex w-full items-center justify-center gap-3 border border-primary bg-primary px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-background transition-all duration-300 hover:bg-transparent hover:text-primary sm:w-auto"
              >
                Initialize Services
                <MaterialIcon icon="arrow_forward" className="text-[18px]" />
              </Link>
              <Link
                href="/vault"
                className="group flex w-full items-center justify-center gap-3 border border-grid-line bg-transparent px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-text-main transition-all duration-300 hover:border-primary sm:w-auto"
              >
                Access Vault
                <MaterialIcon icon="lock_open" className="text-[18px] group-hover:text-primary" />
              </Link>
              <Link
                href="/free-audit"
                className="flex w-full items-center justify-center gap-3 border border-primary/40 bg-transparent px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 sm:w-auto"
              >
                Request Free Audit
                <MaterialIcon icon="search_insights" className="text-[18px]" />
              </Link>
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
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
            </div>
            <div className="font-mono text-[10px] text-primary/60 tracking-widest uppercase mt-4">
              Node_Calibration_Complete
            </div>
          </div>
        </div>
      </section>

      {/* Operational Ethos & Bio */}
      <section className="grid w-full grid-cols-1 items-stretch gap-8 border-t border-grid-line/50 pt-6 md:gap-12 md:pt-8 lg:grid-cols-12">
        {/* Military Context */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="group relative overflow-hidden border border-grid-line bg-surface/30 p-6 transition-all glow-hover md:p-8">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MaterialIcon icon="military_tech" className="text-6xl" />
            </div>
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              Operational Doctrine
            </h3>
            <h2 className="text-text-main text-2xl font-semibold mb-4">
              The Military Leadership Advantage
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-6 font-sans">
              The firm&apos;s technical approach is forged in high-stakes environments. Jonathan Shaner&apos;s background as a{" "}
              <strong>US Army Airborne Infantry Veteran, Purple Heart recipient</strong> dictates an objective-oriented methodology defined by:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MaterialIcon icon="check_circle" className="text-primary text-lg" />
                <span className="text-xs font-mono text-text-main uppercase tracking-tight pt-1">Disciplined Architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon icon="radar" className="text-primary text-lg" />
                <span className="text-xs font-mono text-text-main uppercase tracking-tight pt-1">Objective-Oriented Consulting</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon icon="target" className="text-primary text-lg" />
                <span className="text-xs font-mono text-text-main uppercase tracking-tight pt-1">High-Stakes Precision</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Founder Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3 border-b border-grid-line pb-4">
            <MaterialIcon icon="shield_person" className="text-primary" />
            <h2 className="text-text-main text-2xl font-semibold tracking-[-0.02em]">Principal Consultant</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-main text-lg leading-relaxed font-sans">
              Jonathan Shaner is a self-taught developer and veteran whose transition from battlefield leadership to digital infrastructure brings a unique rigor to technical training.
            </p>
            <p className="text-text-muted text-base leading-relaxed font-sans mt-4">
              Currently focused on pragmatic AI tooling and foundational local business empowerment, with a strategic roadmap toward future GovCon deployments. Our methodology prioritizes functional utility over vanity metrics, ensuring systems are built for resilience, scalability, and total data sovereignty.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-4 py-1.5 bg-surface/50 border border-grid-line font-mono text-[10px] text-primary uppercase tracking-widest">Strategy</span>
            <span className="px-4 py-1.5 bg-surface/50 border border-grid-line font-mono text-[10px] text-primary uppercase tracking-widest">Architecture</span>
            <span className="px-4 py-1.5 bg-surface/50 border border-grid-line font-mono text-[10px] text-primary uppercase tracking-widest">Deployment</span>
          </div>
        </div>
      </section>
    </div>
  );
}
