import { personal } from "@/lib/data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // We could hardcode 2026 based on prompt, but this is safer

  return (
    <footer className="w-full bg-[#05070b] border-t border-[var(--color-border-subtle)] py-8 mt-20">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-main)]">
          &lt;{personal.shortName} /&gt;
        </div>

        {/* Center */}
        <div className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] text-center">
          Cybersecurity • AI • Full Stack • Cloud
        </div>

        {/* Right */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#00e5ff] transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#00e5ff] transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={`mailto:${personal.email}`} className="text-[var(--color-text-muted)] hover:text-[#00e5ff] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-xs text-[var(--color-text-subtle)]">
            © 2026 {personal.name}
          </div>
        </div>

      </div>
    </footer>
  );
}
