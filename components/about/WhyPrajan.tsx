"use client";

import { motion } from "framer-motion";
import { domains } from "@/lib/data";
import { Brain, ShieldCheck, Layers, Cloud, Plane, Rocket } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  ShieldCheck,
  Layers,
  Cloud,
  Plane,
  Rocket,
};

const borderColors: Record<string, string> = {
  cyan: "border-t-cyan-500",
  emerald: "border-t-emerald-500",
  blue: "border-t-blue-500",
  violet: "border-t-violet-500",
  amber: "border-t-amber-500",
  rose: "border-t-rose-500",
};

const textColors: Record<string, string> = {
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyPrajan() {
  return (
    <section id="about" className="section-padding container-main">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-main)] mb-4">
          Engineering Across Multiple Domains
        </h2>
        <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {domains.map((domain) => {
          const IconComponent = iconMap[domain.icon] || Layers;
          const borderColorClass = borderColors[domain.color] || "border-t-cyan-500";
          const textColorClass = textColors[domain.color] || "text-cyan-400";

          return (
            <motion.div
              key={domain.id}
              variants={item}
              className={`glass-panel-hover p-6 border-t-2 ${borderColorClass}`}
            >
              <div className={`mb-4 ${textColorClass}`}>
                <IconComponent className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-main)] mb-3">
                {domain.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {domain.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
