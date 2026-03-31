"use client";

import { useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";

const vaultCards = [
  {
    icon: "code_blocks",
    status: "COMING SOON",
    statusClass: "text-amber-500",
    title: "SEO Node Restructure",
    description: "Automated Python script to audit and restructure local business markup for Answer Engine Optimization.",
    tag: "SCRIPTS",
    locked: true,
  },
  {
    icon: "smart_toy",
    status: "COMING SOON",
    statusClass: "text-amber-500",
    title: "Customer Service AI",
    description: "Fine-tuned LLM model setup for handling Tier 1 local service inquiries and appointment scheduling.",
    tag: "AI_TOOLS",
    locked: true,
  },
  {
    icon: "gavel",
    status: "COMING SOON",
    statusClass: "text-amber-500",
    title: "GovCon Compliance Checklist",
    description: "Standard operating procedure document for NIST 800-171 preliminary compliance for sub-contractors.",
    tag: "GOVCON",
    locked: true,
  },
  {
    icon: "database",
    status: "COMING SOON",
    statusClass: "text-amber-500",
    title: "Lead Extraction Node",
    description: "Data scraping utility designed to interface with public directories to build structured B2B contact lists.",
    tag: "SCRIPTS",
    locked: true,
  },
  {
    icon: "hub",
    status: "COMING SOON",
    statusClass: "text-amber-500",
    title: "Zapier Workflow Templates",
    description: "Pre-configured automation nodes connecting CRM inputs to dispatch systems for rapid deployment.",
    tag: "AI_TOOLS",
    locked: true,
  },
  {
    icon: "military_tech",
    status: "COMING SOON",
    statusClass: "text-amber-500",
    title: "Past Performance Matrix",
    description: "Spreadsheet template for organizing commercial past performance data into GovCon-ready formats.",
    tag: "GOVCON",
    locked: true,
  },
  {
    icon: "partner_reports",
    status: "COMING SOON",
    statusClass: "text-amber-500",
    title: "Military Leadership Frameworks",
    description: "Battle-tested decision-making models and command structures adapted for SMB operational efficiency and team cohesion.",
    tag: "GOVCON",
    locked: true,
  },
];

const filters = ["ALL", "AI_TOOLS", "GOVCON", "SCRIPTS"] as const;

export default function VaultPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filtered = activeFilter === "ALL"
    ? vaultCards
    : vaultCards.filter((card) => card.tag === activeFilter);

  return (
    <div className="py-8 px-4 md:px-10 lg:px-40 w-full max-w-[1200px] mx-auto flex flex-col gap-8">
      {/* AI Abstract Block */}
      <section className="terminal-block p-4 md:p-6 w-full">
        <div className="flex items-start gap-4">
          <MaterialIcon icon="memory" className="text-text-muted mt-1" />
          <p className="text-text-main text-sm md:text-base font-normal leading-relaxed tracking-wide font-mono uppercase">
            <span className="text-primary font-bold">AI ABSTRACT:</span> Secure repository of operational assets. Contains deployable AI scripts, business optimization tools, and documentation for GovCon readiness. Assets are categorized by deployment status and functional requirement. Access strictly governed by technical utility. No marketing fluff—only executable code and strategic documentation.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="flex flex-wrap items-center gap-4 py-2 border-b border-surface uppercase font-mono text-sm">
        <span className="text-text-muted tracking-widest mr-2">// FILTER_NODES:</span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 border transition-colors duration-200 ${
              activeFilter === filter
                ? "border-primary text-primary"
                : "border-surface text-text-main hover:text-primary hover:border-primary"
            }`}
          >
            [{filter}]
          </button>
        ))}
      </section>

      {/* Vault Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-20">
        {filtered.map((card) => (
          <div key={card.title} className="glass-card p-6 flex flex-col gap-4 group">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-surface rounded text-primary">
                <MaterialIcon icon={card.icon} />
              </div>
              <span className={`${card.statusClass} font-mono text-xs font-bold tracking-wider`}>[{card.status}]</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-main uppercase mb-2">{card.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed min-h-[60px]">{card.description}</p>
            </div>
            <div className="mt-auto pt-4 flex items-center justify-between border-t border-surface border-opacity-50">
              <span className="text-xs text-text-muted font-mono">TAG: [{card.tag}]</span>
              {card.locked ? (
                <span className="text-text-muted text-sm font-bold tracking-widest cursor-not-allowed uppercase flex items-center gap-1">
                  [LOCKED] <MaterialIcon icon="lock" className="text-[16px]" />
                </span>
              ) : (
                <span className="text-primary text-sm font-bold tracking-widest uppercase flex items-center gap-1">
                  [ACCESS] <MaterialIcon icon="chevron_right" className="text-[16px]" />
                </span>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
