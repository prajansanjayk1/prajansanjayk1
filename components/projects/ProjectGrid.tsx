"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  // Filter out the flagship project (HAL Digital Twin) as it goes in FeaturedProject
  const gridProjects = projects.filter((p) => !p.flagship);

  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            <span className="text-cyan-400">Other</span> Notable Projects
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl">
            A selection of my other impactful work spanning full-stack development, mobile apps, and scalable web platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridProjects.map((project, index) => {
            // Make MediQue (or first featured non-flagship project) larger on desktop
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={isFeatured ? "md:col-span-2" : "md:col-span-1"}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
