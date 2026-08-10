"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container-main max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-cyan-500 hidden sm:block"></span>
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-[var(--color-border-subtle)] ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[var(--color-bg-primary)] border-2 border-cyan-500 z-10" />

              <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-text-main)] group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-cyan-500 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-subtle)] space-y-1">
                    <span className="bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.startDate} – {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1.5 px-1">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-text-muted)] leading-relaxed">
                      <span className="text-violet-400 mt-1 shrink-0 text-lg leading-none">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-subtle)]">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
