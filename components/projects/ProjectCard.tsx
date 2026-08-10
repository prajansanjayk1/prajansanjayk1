"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`glass-panel-hover p-6 rounded-2xl flex flex-col h-full border border-white/5 relative overflow-hidden group ${className}`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
        <div className="w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
          {project.category}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-subtle)]">
          {project.dates}
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-text-main)] mb-1">
        {project.title}
      </h3>
      <p className="text-[var(--color-text-muted)] text-sm mb-4 font-medium">
        {project.subtitle}
      </p>
      
      <p className="text-[var(--color-text-muted)] text-sm mb-6 flex-grow">
        {project.description}
      </p>

      <ul className="space-y-2 mb-6">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
            <ArrowRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border-subtle)]">
          {project.githubUrl && (
            <Link 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Code</span>
            </Link>
          )}
          {project.liveUrl && (
            <Link 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-cyan-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
