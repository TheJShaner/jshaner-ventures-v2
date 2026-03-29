import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-8 border-t border-grid-line flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-text-muted uppercase tracking-widest px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          STATUS{" "}
          <span className="w-2 h-2 bg-green-500 inline-block shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
        </div>
        <span className="text-grid-line">|</span>
        <div>SYSTEM: ONLINE</div>
      </div>
      <div>&copy; 2026 JSHANER VENTURES. ALL RIGHTS RESERVED.</div>
      <div className="flex gap-4">
        <Link href="/legal#privacy" className="hover:text-primary transition-colors">
          Privacy
        </Link>
        <Link href="/legal#terms" className="hover:text-primary transition-colors">
          Terms
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
