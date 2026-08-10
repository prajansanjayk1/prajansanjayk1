"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { Code2, Layout, Server, Brain, ShieldCheck, Cloud, Plane, Rocket, Layers } from "lucide-react";

// Map string icon names to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Brain,
  ShieldCheck,
  Cloud,
  Plane,
  Rocket,
  Layers
};

export default function SkillsMatrix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Capabilities</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            A comprehensive mapping of my technical skills and where I apply them in real-world engineering challenges.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="glass-panel rounded-2xl p-6 h-full border border-white/5 hover:border-cyan-500/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-main)]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                        <span className="font-semibold text-[var(--color-text-main)] text-sm">{skill.name}</span>
                      </div>
                      <div className="pl-3.5 flex flex-wrap gap-1.5 mt-0.5">
                        {skill.usedIn.map((context) => (
                          <span 
                            key={context} 
                            className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-[var(--color-text-subtle)] border border-white/5"
                          >
                            {context}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
