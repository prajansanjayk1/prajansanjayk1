"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Database,
  Cpu,
  Brain,
  BarChart3,
  Box,
  Monitor,
  Trophy,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Link from "next/link";
import { projects } from "@/lib/data";
import { TelemetryHUD } from "@/components/projects/TelemetryHUD";

const project = projects.find((p) => p.id === "hal-digital-twin")!;

const architectureSteps = [
  { icon: Database, label: "Sensor Data", desc: "Engine telemetry streams" },
  { icon: Cpu, label: "Preprocessing", desc: "Feature extraction & cleaning" },
  { icon: Brain, label: "ML Models", desc: "LSTM, CNN, Random Forest" },
  { icon: BarChart3, label: "Prediction", desc: "Health index & RUL estimation" },
  { icon: Box, label: "Digital Twin", desc: "3D engine state simulation" },
  { icon: Monitor, label: "Dashboard", desc: "Web-based monitoring UI" },
];

const challenges = [
  {
    title: "Limited Training Data",
    description:
      "Engine degradation data is inherently scarce — real failures are rare and expensive. Required careful data augmentation and synthetic generation strategies.",
  },
  {
    title: "Multi-Model Ensemble",
    description:
      "Combining LSTM for sequential patterns, CNN for spatial features, and Random Forest for classification required a robust ensemble architecture.",
  },
  {
    title: "Real-Time Visualization",
    description:
      "Synchronizing ML prediction outputs with the 3D digital twin state in Blender/Unity while maintaining smooth frame rates on the web dashboard.",
  },
  {
    title: "Validation Without Ground Truth",
    description:
      "Validating predictive maintenance models without actual engine failure events required statistical and domain-expert validation approaches.",
  },
];

const learnings = [
  "Applied deep learning to real-world industrial time-series data with practical constraints.",
  "Learned to work within a national-level competitive engineering environment with strict deadlines.",
  "Gained experience bridging AI models with 3D visualization pipelines (Blender → Unity → Web).",
  "Developed engineering communication skills presenting to HAL and IIT Indore professionals.",
  "Understood the gap between academic ML and production-grade predictive maintenance systems.",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function HALCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 h-20 flex items-center bg-[var(--color-bg-navbar)] backdrop-blur-xl border-b border-[var(--color-border-subtle)] z-50">
        <div className="container-main w-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-[family-name:var(--font-mono)] text-sm">
              Back to Portfolio
            </span>
          </Link>
          <span className="font-[family-name:var(--font-heading)] font-bold text-lg">
            <span className="text-[var(--color-accent-cyan)] font-[family-name:var(--font-mono)]">
              &lt;
            </span>
            PSK
            <span className="text-[var(--color-accent-cyan)] font-[family-name:var(--font-mono)]">
              /&gt;
            </span>
          </span>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container-main">
          {/* Hero */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="code-label">// Case Study</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30 rounded-full text-xs font-semibold text-[var(--color-accent-cyan)] font-[family-name:var(--font-mono)]">
                HAL Industry Project
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-accent-amber)]/10 border border-[var(--color-accent-amber)]/30 rounded-full text-xs font-semibold text-[var(--color-accent-amber)] font-[family-name:var(--font-mono)]">
                Top 8 / 2500+ Participants
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl font-[family-name:var(--font-heading)]">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Overview */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Overview
            </h2>
            <div className="glass-panel p-6 md:p-8">
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 p-4 bg-[var(--color-accent-amber)]/5 border border-[var(--color-accent-amber)]/20 rounded-xl">
                <p className="text-sm text-[var(--color-accent-amber)] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  This was a national-level aerospace challenge conducted by
                  Hindustan Aeronautics Limited (HAL) and IIT Indore.
                  Prajan&apos;s team was selected as a Top 8 Finalist from
                  2500+ participants nationwide.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Context */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Why Aerospace Engine Health Monitoring Matters
            </h2>
            <div className="glass-panel p-6 md:p-8">
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Turbojet engines operate under extreme conditions — high
                temperatures, intense pressures, and continuous mechanical
                stress. Unplanned engine failures in aerospace applications can
                have catastrophic consequences in terms of safety, operational
                downtime, and financial cost.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Predictive maintenance through digital twin technology enables
                continuous monitoring of engine health, early detection of
                degradation patterns, and data-driven maintenance scheduling —
                shifting from reactive to proactive engineering.
              </p>
            </div>
          </motion.section>

          {/* Problem & Approach */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Engineering Approach
            </h2>
            <div className="glass-panel p-6 md:p-8">
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[var(--color-text-muted)]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-cyan)] mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Architecture */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              System Architecture
            </h2>
            <div className="glass-panel p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                {architectureSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2 md:gap-3">
                    <div className="flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-[var(--color-border-subtle)] rounded-xl min-w-[120px] text-center hover:border-[var(--color-border-active)] transition-colors">
                      <step.icon className="w-6 h-6 text-[var(--color-accent-cyan)]" />
                      <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-[var(--color-text-main)]">
                        {step.label}
                      </span>
                      <span className="text-[0.7rem] text-[var(--color-text-subtle)]">
                        {step.desc}
                      </span>
                    </div>
                    {i < architectureSteps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-[var(--color-text-subtle)] hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Telemetry HUD */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Interactive Telemetry Dashboard
            </h2>
            <TelemetryHUD />
            <p className="text-center text-xs text-[var(--color-text-subtle)] mt-3 font-[family-name:var(--font-mono)]">
              Simulated demo telemetry — not live HAL data
            </p>
          </motion.section>

          {/* Engineering Challenges */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Engineering Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((c) => (
                <div key={c.title} className="glass-panel glass-panel-hover p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Recognition */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Recognition
            </h2>
            <div className="glass-panel p-6 md:p-8 border-[var(--color-accent-cyan)]/20 glow-cyan">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-8 h-8 text-[var(--color-accent-cyan)]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-1">
                    Top 8 Finalist — HAL Aerothon
                  </h3>
                  <p className="text-[var(--color-accent-cyan)] font-[family-name:var(--font-mono)] text-sm mb-3">
                    Hindustan Aeronautics Limited & IIT Indore
                  </p>
                  <p className="text-[var(--color-text-muted)]">
                    Selected as one of the Top 8 teams from 2500+ participants
                    in a national-level aerospace engineering challenge. The
                    project involved presenting the digital twin platform to HAL
                    and IIT Indore leadership, demonstrating the AI-driven
                    approach to turbojet engine health monitoring and predictive
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* What I Learned */}
          <motion.section
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.45 }}
            className="mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              What I Learned
            </h2>
            <div className="glass-panel p-6 md:p-8">
              <ul className="space-y-3">
                {learnings.map((l, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[var(--color-text-muted)]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-emerald)] mt-0.5 flex-shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Bottom CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] text-white shadow-lg shadow-[var(--color-accent-cyan)]/20 hover:shadow-[var(--color-accent-cyan)]/40 transition-shadow"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/[0.04] border border-[var(--color-border-subtle)] text-white hover:border-[var(--color-accent-cyan)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> View on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
