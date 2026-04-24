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
    <header className="sticky top-0 z-50 border-b border-grid-line bg-background/90 px-4 py-4 backdrop-blur-md sm:px-6 md:flex md:h-[64px] md:items-center md:justify-between md:py-3">
      <Link href="/" className="flex min-w-0 items-center gap-3 text-text-main sm:gap-4">
        <Image
          src="/images/logo-header.png"
          alt="JShaner Ventures"
          width={40}
          height={40}
          style={{ width: "auto", height: "40px" }} className="object-contain"
        />
        <h2 className="text-base font-bold leading-tight tracking-[-0.02em] text-text-main sm:text-lg">
          JShaner Ventures
        </h2>
      </Link>
      <nav
        aria-label="Main navigation"
        className="mt-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-wider md:mt-0 md:w-auto md:justify-end md:gap-6 md:text-sm"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              {...(isActive ? { "aria-current": "page" as const } : {})}
              className={
                isActive
                  ? "whitespace-nowrap py-1 font-medium text-primary md:border-b-2 md:border-primary md:py-[22px]"
                  : "whitespace-nowrap py-1 text-text-muted transition-colors hover:text-text-main md:py-[22px]"
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
