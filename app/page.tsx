import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { AchievementStrip } from "@/components/hero/AchievementStrip";
import { WhyPrajan } from "@/components/about/WhyPrajan";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Timeline from "@/components/experience/Timeline";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import Achievements from "@/components/achievements/Achievements";
import Link from "next/link";
import { Terminal as TerminalIcon, ArrowRight } from "lucide-react";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import AskPrajan from "@/components/interactive/AskPrajan";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-[80px]">
        {/* Hero — Who Prajan Is */}
        <Hero />

        {/* Achievement Metrics Strip */}
        <AchievementStrip />

        {/* Engineering Domains — Why Prajan */}
        <WhyPrajan />

        {/* HAL Digital Twin — Signature Experience */}
        <FeaturedProject />

        {/* Other Projects */}
        <ProjectGrid />

        {/* Experience Timeline */}
        <Timeline />

        {/* Skills Matrix */}
        <SkillsMatrix />

        {/* Achievements & Certifications */}
        <Achievements />

        {/* Interactive Terminal Link */}
        <section className="container-main py-12 flex justify-center">
          <Link href="/terminal" className="glass-panel-hover flex items-center gap-3 px-6 py-4 rounded-xl group transition-all duration-300 hover:border-[#00e5ff]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] bg-[#0a0a0c]">
            <TerminalIcon className="w-5 h-5 text-[#00e5ff]" />
            <span className="font-[family-name:var(--font-mono)] text-sm text-[#f8fafc]">
              $ Explore my portfolio via terminal
            </span>
            <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#00e5ff] group-hover:translate-x-1 transition-all" />
          </Link>
        </section>

        {/* Contact */}
        <Contact />
      </main>

      <Footer />

      {/* Floating Ask Prajan Assistant */}
      <AskPrajan />
    </>
  );
}
