"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personal } from "@/lib/data";
import { AnimateIn } from "../ui/AnimateIn";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % personal.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center pt-8 pb-12 md:py-12 overflow-hidden"
    >
      {/* Subtle ambient background glows */}
      <div className="absolute top-1/3 left-6 w-80 h-80 bg-[var(--color-accent-cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-6 w-80 h-80 bg-[var(--color-accent-violet)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Primary Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            
            {/* Technical Domain Badge */}
            <AnimateIn delay={0.1}>
              <span className="font-[family-name:var(--font-mono)] text-xs font-semibold tracking-widest text-[var(--color-accent-cyan)]/90 uppercase bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/20 px-3 py-1 rounded-md inline-block">
                // SOFTWARE • AI • CYBERSECURITY • CLOUD
              </span>
            </AnimateIn>

            {/* Main Headline */}
            <AnimateIn delay={0.2}>
              <h1 className="font-[family-name:var(--font-heading)] font-bold text-slate-100 tracking-tight leading-[1.04]">
                <span className="text-3xl md:text-4xl lg:text-[46px] font-semibold text-slate-200 block mb-1">
                  Hi, I&apos;m
                </span>
                <span className="gradient-text text-5xl md:text-6xl lg:text-[68px] font-extrabold block">
                  {personal.name}
                </span>
              </h1>
            </AnimateIn>

            {/* Dynamic Typing Role */}
            <AnimateIn delay={0.3}>
              <div className="font-[family-name:var(--font-mono)] text-lg md:text-xl lg:text-2xl text-slate-300 font-medium h-8 flex items-center justify-center lg:justify-start">
                <span className="text-[var(--color-accent-cyan)] font-bold mr-2">&gt;</span>
                <span>{personal.roles[roleIndex]}</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1.5 w-0.5 h-6 bg-[var(--color-accent-cyan)] align-middle"
                />
              </div>
            </AnimateIn>

            {/* Description */}
            <AnimateIn delay={0.4}>
              <p className="text-[16px] md:text-[18px] text-slate-300 max-w-[600px] leading-[1.65] font-normal">
                {personal.tagline} {personal.taglineExtended}
              </p>
            </AnimateIn>

            {/* Unified Baseline CTA Row */}
            <AnimateIn delay={0.5}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                
                {/* Primary Action Button */}
                <a
                  href="#projects"
                  className="h-[48px] px-6 inline-flex items-center gap-2 rounded-xl font-bold text-sm bg-gradient-to-r from-[var(--color-accent-cyan)] via-blue-500 to-[var(--color-accent-violet)] text-slate-950 shadow-md shadow-cyan-500/10 hover:opacity-95 hover:shadow-cyan-500/25 transition-all"
                >
                  Explore My Work <ArrowRight className="w-4 h-4" />
                </a>

                {/* Secondary Action Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[48px] px-6 inline-flex items-center gap-2 rounded-xl font-medium text-sm bg-slate-900/80 border border-white/10 text-slate-200 hover:border-[var(--color-accent-cyan)]/50 hover:bg-white/[0.04] transition-all"
                >
                  View Resume
                </a>

                {/* Social Icon Links */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[48px] w-[48px] inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-[var(--color-accent-cyan)] hover:border-[var(--color-accent-cyan)]/50 hover:bg-white/[0.04] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[48px] w-[48px] inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </AnimateIn>

          </div>

          {/* Right Column: Professional Identity Card */}
          <div className="w-full flex justify-center lg:justify-end items-center">
            <AnimateIn delay={0.6} className="w-full max-w-[380px] lg:max-w-[400px]">
              <div className="w-full bg-[#0d121e]/85 border border-white/10 rounded-[20px] p-6 md:p-6 backdrop-blur-xl shadow-2xl shadow-black/50 relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Profile Portrait Container */}
                <div className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[320px] aspect-[4/4.8] rounded-[18px] overflow-hidden border border-white/10 relative bg-[#090d16] flex justify-center">
                  <Image
                    src="/profile.jpg"
                    alt={personal.name}
                    width={800}
                    height={960}
                    quality={100}
                    unoptimized
                    className="w-full h-full object-cover object-[center_25%] brightness-[1.08] contrast-[1.05] saturate-[1.05] transition-all"
                    priority
                  />
                </div>

                {/* Name & Contact */}
                <div className="mt-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-[22px] font-bold text-slate-100 tracking-tight">
                    {personal.name}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-xs md:text-[13px] text-slate-400 mt-1">
                    {personal.email}
                  </p>
                </div>

                {/* Thin Divider */}
                <div className="h-[1px] w-full bg-white/10 my-5" />

                {/* Education */}
                <div className="w-full text-left flex flex-col gap-1">
                  <span className="text-[10px] md:text-[11px] uppercase font-[family-name:var(--font-mono)] font-semibold text-[var(--color-accent-cyan)] tracking-[0.12em]">
                    Education
                  </span>
                  <span className="text-sm font-semibold text-slate-200 leading-[1.4] mt-0.5">
                    {personal.education.degree} in {personal.education.field}
                  </span>
                  <span className="text-xs text-slate-400">
                    {personal.education.institution}
                  </span>
                </div>

                {/* Achievement Chips */}
                <div className="w-full flex flex-col gap-2.5 mt-4">
                  <div className="bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 flex items-center justify-between text-xs text-slate-200 hover:border-[var(--color-accent-cyan)]/30 transition-colors">
                    <span className="font-medium text-xs">HAL Aerothon Finalist</span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/10 px-2 py-0.5 rounded border border-[var(--color-accent-cyan)]/20 font-semibold">
                      Top 8
                    </span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 flex items-center justify-between text-xs text-slate-200 hover:border-[var(--color-accent-violet)]/30 transition-colors">
                    <span className="font-medium text-xs">National CTF Competition</span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-accent-violet)] bg-[var(--color-accent-violet)]/10 px-2 py-0.5 rounded border border-[var(--color-accent-violet)]/20 font-semibold">
                      7th Place
                    </span>
                  </div>
                </div>

              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
