"use client";

import { useRef, useState } from "react";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { sections } from "@/lib/data";

import { Sidebar } from "./sidebar";
import { AboutSection } from "./sections/about-section";
import { BeyondSection } from "./sections/beyond-section";
import { ContactSection } from "./sections/contact-section";
import { EducationSection } from "./sections/education-section";
import { ExperienceSection } from "./sections/experience-section";
import { ToolkitSection } from "./sections/toolkit-section";
import { WorkSection } from "./sections/work-section";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const active = useSectionObserver(contentRef, sections);

  return (
    <div className="page-shell min-h-screen">
      <Sidebar
        active={active}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main
        className="ml-[38vw] h-screen min-w-0 overflow-x-hidden overflow-y-auto scroll-smooth mobile:ml-0 mobile:h-auto mobile:overflow-visible"
        id="top"
        ref={contentRef}
      >
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <ToolkitSection />
        <EducationSection />
        <BeyondSection />
        <ContactSection />
        <footer className="flex items-center justify-between border-l border-line px-[clamp(34px,8vw,145px)] py-6 text-[11px] tracking-[0.08em] text-fog uppercase mobile:gap-4.5 mobile:border-l-0 mobile:px-[7vw]">
          <span>Yogurt Loo Hui Ling / Senior Frontend Developer</span>
          <a href="#top" className="hover:text-aqua">
            Back to top ↑
          </a>
        </footer>
      </main>
    </div>
  );
}
