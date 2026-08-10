"use client";

import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  centered?: boolean;
}

export function SectionHeader({ subtitle, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start text-left"}`}>
      <span className="code-label text-[var(--color-accent-cyan)] uppercase">
        {subtitle}
      </span>
      <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[var(--color-text-main)]">
        {title}
      </h2>
      <div className="h-[2px] w-[60px] bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)]" />
    </div>
  );
}
