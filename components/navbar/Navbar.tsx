"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal as TerminalIcon } from "lucide-react";
import { getAssetPath } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    NAV_LINKS.forEach(({ href }) => {
      const targetId = href.replace("/#", "#");
      const el = document.querySelector(targetId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-[var(--color-bg-surface)] backdrop-blur-xl border-b border-[var(--color-border-subtle)]">
        <div className="container-main h-full flex items-center justify-between">
          <Link href="/#hero" className="font-[family-name:var(--font-mono)] font-bold text-xl text-[var(--color-text-main)] hover:text-[var(--color-accent-cyan)] transition-colors">
            {"<PSK />"}
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === "/" && activeSection === href.replace("/#", "");

              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-all ${
                    isActive
                      ? "text-[var(--color-accent-cyan)] font-semibold"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Cyber Terminal Badge + Status & Resume */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Distinct High-End Cyber Terminal Link */}
            <Link
              href="/terminal"
              className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-[family-name:var(--font-mono)] text-xs font-semibold tracking-wider transition-all duration-300 ${
                pathname === "/terminal"
                  ? "bg-[#00e5ff]/15 border border-[#00e5ff] text-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.35)]"
                  : "bg-[#0a0f1d] border border-[#00e5ff]/40 text-[#00e5ff] hover:bg-[#00e5ff]/15 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.35)]"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]"></span>
              </span>
              <TerminalIcon className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span className="text-[11px] uppercase tracking-widest font-bold">
                CLI_TERMINAL
              </span>
            </Link>

            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] rounded-full px-3 py-1">
              <span className="text-[var(--color-accent-emerald)] text-xs">●</span> Open for Roles
            </div>
            <a
              href={getAssetPath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] text-[var(--color-bg-primary)] px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--color-text-main)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-bg-primary)] pt-[80px]">
          <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
            
            {/* Mobile Cyber Terminal Button */}
            <Link
              href="/terminal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-[280px] py-3 px-4 rounded-xl bg-[#0a0f1d] border-2 border-[#00e5ff] text-[#00e5ff] font-[family-name:var(--font-mono)] font-bold text-center flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(0,229,255,0.3)] text-sm tracking-widest uppercase mb-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e5ff]"></span>
              </span>
              <TerminalIcon className="w-4 h-4 text-[#00e5ff]" />
              CLI_TERMINAL
            </Link>

            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === "/" && activeSection === href.replace("/#", "");

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-medium ${
                    isActive
                      ? "text-[var(--color-accent-cyan)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href={getAssetPath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] text-[var(--color-bg-primary)] px-6 py-3 rounded-md font-bold w-full text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
