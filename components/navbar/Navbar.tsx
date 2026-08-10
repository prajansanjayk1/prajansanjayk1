"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
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
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-[var(--color-bg-surface)] backdrop-blur-xl border-b border-[var(--color-border-subtle)]">
        <div className="container-main h-full flex items-center justify-between">
          <Link href="#hero" className="font-[family-name:var(--font-mono)] font-bold text-xl text-[var(--color-text-main)] hover:text-[var(--color-accent-cyan)] transition-colors">
            {"<PSK />"}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === href.substring(1)
                    ? "text-[var(--color-accent-cyan)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Status & Resume */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] rounded-full px-3 py-1">
              <span className="text-[var(--color-accent-emerald)] text-xs">●</span> Open for Roles
            </div>
            <a
              href="/resume.pdf"
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
          <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium ${
                  activeSection === href.substring(1)
                    ? "text-[var(--color-accent-cyan)]"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
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
