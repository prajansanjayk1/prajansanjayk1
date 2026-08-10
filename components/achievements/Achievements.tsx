"use client";

import { motion } from "framer-motion";
import { achievements, certifications } from "@/lib/data";
import { Trophy, Shield, Award, Medal, Star, GraduationCap, FileCode, Cloud } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Shield,
  Award,
  Medal,
  Star,
  GraduationCap,
  FileCode,
  Cloud,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold mb-4">
          Awards & <span className="gradient-text">Recognitions</span>
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-2xl">
          Highlights from national hackathons, CTF competitions, and industry problem statements.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.icon] || Award;
          const isHighlighted = achievement.id === "hal-aerothon";

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel-hover p-6 rounded-2xl flex flex-col border ${
                isHighlighted ? "border-cyan-500/50" : "border-transparent"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)]`}>
                  <Icon className="w-6 h-6 text-[#00e5ff]" />
                </div>
              </div>
              <div className="text-4xl font-[family-name:var(--font-heading)] font-bold text-[#00e5ff] mb-2">
                {achievement.metric}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-1">
                {achievement.label}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-4 flex-grow">
                {achievement.detail}
              </p>
              <div className="text-xs text-[var(--color-text-subtle)] font-[family-name:var(--font-mono)] mt-auto pt-4 border-t border-[var(--color-border-subtle)]">
                {achievement.context}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold mb-6">
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-panel p-5 rounded-xl flex items-center gap-4"
              >
                <div className="p-2 rounded-lg bg-[var(--color-bg-alt)]">
                  <Icon className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[var(--color-text-main)]">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
