"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/vault", label: "Vault" },
  { href: "/authority", label: "Authority" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/free-audit", label: "Free Audit" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-grid-line px-6 py-3 h-[64px] bg-background/90 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-4 text-text-main">
        <Image
          src="/images/logo-header.png"
          alt="JShaner Ventures"
          width={40}
          height={40}
          style={{ width: "auto", height: "40px" }} className="object-contain"
        />
        <h2 className="text-text-main text-lg font-bold leading-tight tracking-[-0.02em]">
          JShaner Ventures
        </h2>
      </Link>
      <nav aria-label="Main navigation" className="flex items-center gap-6 font-mono text-sm uppercase tracking-wider">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              {...(isActive ? { "aria-current": "page" as const } : {})}
              className={
                isActive
                  ? "text-primary font-medium border-b-2 border-primary py-[22px]"
                  : "text-text-muted hover:text-text-main transition-colors py-[22px]"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
