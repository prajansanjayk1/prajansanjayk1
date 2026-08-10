"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Link from "next/link";
import { TelemetryHUD } from "./TelemetryHUD";

export function FeaturedProject() {
  const project = projects[0];

  return (
    <section id="projects" className="section-padding container-main">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-6 md:p-10 relative overflow-hidden"
      >
        <div className="flex flex-wrap gap-3 mb-6 relative z-10">
          <div className="code-label bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1 rounded-full text-xs">
            HAL Industry Problem Statement
          </div>
          <div className="code-label bg-amber-500/10 text-amber-400 border-amber-500/20 px-3 py-1 rounded-full text-xs">
            Top 8 Finalist from 2500+ participants
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-main)] mb-2">
            {project.title}
          </h2>
          <p className="text-xl text-cyan-400 mb-6 font-medium">
            {project.subtitle}
          </p>
          
          <p className="text-[var(--color-text-muted)] mb-8 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-[var(--color-text-muted)] text-sm">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Architecture Flow */}
          <div className="py-6 border-y border-[var(--color-border-subtle)] mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-subtle)]">
            <span className="bg-[var(--color-bg-alt)] px-3 py-1 rounded border border-[var(--color-border-subtle)]">DATA</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="bg-[var(--color-bg-alt)] px-3 py-1 rounded border border-[var(--color-border-subtle)]">PREPROCESSING</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="bg-[var(--color-bg-alt)] px-3 py-1 rounded border border-[var(--color-border-subtle)] text-cyan-400 border-cyan-500/30">ML MODEL</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="bg-[var(--color-bg-alt)] px-3 py-1 rounded border border-[var(--color-border-subtle)]">PREDICTION</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="bg-[var(--color-bg-alt)] px-3 py-1 rounded border border-[var(--color-border-subtle)] text-emerald-400 border-emerald-500/30">DIGITAL TWIN</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="bg-[var(--color-bg-alt)] px-3 py-1 rounded border border-[var(--color-border-subtle)]">UI</span>
          </div>

          <TelemetryHUD />

          <p className="text-center text-xs text-[var(--color-text-subtle)] mt-4 mb-8">
            * Simulated demo telemetry — not live HAL data
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link 
              href="/projects/hal-digital-twin"
              className="inline-flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-6 py-3 rounded-lg font-medium transition-colors border border-cyan-500/30"
            >
              View Full Case Study <ArrowRight className="w-4 h-4" />
            </Link>
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-bg-alt)] hover:bg-[var(--color-bg-surface)] text-[var(--color-text-main)] px-6 py-3 rounded-lg font-medium transition-colors border border-[var(--color-border-subtle)]"
              >
                <GithubIcon className="w-4 h-4" /> Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
