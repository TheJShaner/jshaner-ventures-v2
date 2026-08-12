import MaterialIcon from "@/components/MaterialIcon";

export const metadata = {
  title: "Legal",
  description: "Privacy policy and terms of service for JShaner Ventures.",
  alternates: {
    canonical: "https://jshaner.ventures/legal",
  },
};

export default function LegalPage() {
  return (
    <div className="py-10 px-6 sm:px-12 w-full max-w-3xl mx-auto flex flex-col gap-12 z-10">
      {/* Header */}
      <section>
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase bg-primary/10 px-2 py-1 border border-primary/20">
            Legal
          </span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
        <h1 className="text-text-main text-3xl font-mono font-medium tracking-[-0.03em]">
          Privacy &amp; Terms
        </h1>
        <p className="text-text-muted text-sm font-mono mt-2 uppercase tracking-wider">
          Effective Date: August 2026 &mdash; JShaner Ventures
        </p>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="flex flex-col gap-6 scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-grid-line pb-3">
          <MaterialIcon icon="shield" className="text-primary text-lg" />
          <h2 className="text-text-main text-xl font-semibold uppercase tracking-tight">
            I. Privacy Policy
          </h2>
        </div>
        <div className="space-y-6 text-text-muted text-sm leading-relaxed font-sans">
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">1.1 &mdash; Data Collection</h3>
            <p>
              JShaner Ventures collects information you voluntarily submit through our intake forms, including contact details, website URL, project details, engagement preference, and budget range. This site also uses Ahrefs Web Analytics, Google Analytics, Vercel Analytics, and Vercel Speed Insights to collect website usage and performance data. We do not sell personal data.
            </p>
          </div>
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">1.2 &mdash; Use of Information</h3>
            <p>
              Submitted information is used to evaluate potential engagements, respond to inquiries, and provide requested services. Information is disclosed to service providers only as needed to operate the website, process submissions, measure site usage, or comply with legal obligations.
            </p>
          </div>
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">1.3 &mdash; Data Storage &amp; Security</h3>
            <p>
              Form submissions are processed through encrypted channels. We retain inquiry data only for the duration necessary to evaluate and respond to your request. You may request deletion of your data at any time by contacting ops@jshaner.ventures.
            </p>
          </div>
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">1.4 &mdash; Third-Party Services</h3>
            <p>
              This site uses Vercel for hosting, analytics, and performance monitoring; Formspree to process and store form submissions; Ahrefs Web Analytics and Google Analytics to measure site usage; and Google Fonts to deliver web fonts. Each provider processes data under its own privacy policy and retention practices.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms" className="flex flex-col gap-6 scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-grid-line pb-3">
          <MaterialIcon icon="gavel" className="text-primary text-lg" />
          <h2 className="text-text-main text-xl font-semibold uppercase tracking-tight">
            II. Terms of Service
          </h2>
        </div>
        <div className="space-y-6 text-text-muted text-sm leading-relaxed font-sans">
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">2.1 &mdash; Scope of Services</h3>
            <p>
              JShaner Ventures provides consulting services in Search Engine Optimization (SEO), Answer Engine Optimization (AEO), AI integration, and technical training. All engagements are defined by individually scoped agreements. Submitting an intake form does not constitute a binding contract or guarantee of services.
            </p>
          </div>
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">2.2 &mdash; Intellectual Property</h3>
            <p>
              All content, design, code, and materials on this website are the intellectual property of JShaner Ventures. Deliverables produced during an engagement become the property of the client upon full payment, unless otherwise specified in a written agreement.
            </p>
          </div>
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">2.3 &mdash; Limitation of Liability</h3>
            <p>
              JShaner Ventures provides services on an as-is basis. We are not liable for indirect, incidental, or consequential damages arising from the use of our services, recommendations, or deliverables. Maximum liability shall not exceed the total fees paid for the specific engagement in question.
            </p>
          </div>
          <div>
            <h3 className="text-text-main font-mono text-xs uppercase tracking-widest mb-2">2.4 &mdash; Governing Law</h3>
            <p>
              These terms are governed by the laws of the Commonwealth of Pennsylvania, United States. Any disputes shall be resolved in the appropriate courts within Pennsylvania.
            </p>
          </div>
        </div>
      </section>

      {/* Contact for Legal */}
      <section className="border-t border-grid-line/50 pt-6">
        <p className="text-text-muted text-xs font-mono uppercase tracking-wider">
          Questions regarding these policies may be directed to{" "}
          <a href="mailto:ops@jshaner.ventures" className="text-primary hover:text-text-main transition-colors">
            ops@jshaner.ventures
          </a>
        </p>
      </section>
    </div>
  );
}
