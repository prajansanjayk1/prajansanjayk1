"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";

export function AchievementStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stripAchievements = achievements.slice(0, 4);

  return (
    <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] py-8 backdrop-blur-md">
      <div className="container-main">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-[var(--color-border-subtle)]"
        >
          {stripAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--color-accent-cyan)] mb-2">
                {achievement.metric}
              </div>
              <h4 className="text-[var(--color-text-main)] font-semibold text-sm md:text-base mb-1">
                {achievement.label}
              </h4>
              <p className="text-[var(--color-text-muted)] text-xs md:text-sm max-w-[200px]">
                {achievement.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
