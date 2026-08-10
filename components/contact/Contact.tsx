"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setToastMessage(null), 5000);
    }, 1500);
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: personal.linkedinHandle, href: personal.linkedin },
    { icon: GithubIcon, label: "GitHub", value: personal.githubHandle, href: personal.github },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  return (
    <section id="contact" className="section-padding container-main relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold mb-4 gradient-text">
          Let's Build Something Meaningful.
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
          I'm interested in internships, engineering opportunities, research collaborations, and ambitious technical projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold mb-6">Connect With Me</h3>
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:border-[#00e5ff] transition-colors">
                  <Icon className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[#00e5ff] transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-subtle)]">{link.label}</div>
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-main)] hover:text-[#00e5ff] font-medium transition-colors">
                      {link.value}
                    </a>
                  ) : (
                    <div className="text-[var(--color-text-main)] font-medium">{link.value}</div>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 rounded-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--color-text-muted)]">Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-2 text-[var(--color-text-main)] focus:outline-none focus:border-[#00e5ff] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--color-text-muted)]">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-2 text-[var(--color-text-main)] focus:outline-none focus:border-[#00e5ff] transition-colors"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-[var(--color-text-muted)]">Subject</label>
              <input
                required
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-2 text-[var(--color-text-main)] focus:outline-none focus:border-[#00e5ff] transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-[var(--color-text-muted)]">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-2 text-[var(--color-text-main)] focus:outline-none focus:border-[#00e5ff] transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] text-[#09090b] font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>

          {/* Toast Notification */}
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-12 left-0 right-0 mx-auto w-max bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
            >
              {toastMessage}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Resume CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-panel w-full p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-main)]">Looking for more details?</h3>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">Download my complete resume in PDF format.</p>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-blue)] text-white font-bold hover:opacity-90 transition-opacity"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
