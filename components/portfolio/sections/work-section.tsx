import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data";
import {
  cvSection,
  entryLabel,
  inlineLink,
  roleTitle,
  sectionIntro,
  sectionIntroCopy,
  sectionIntroTitle,
  sectionNumber,
  tagClass,
  tagList,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export function WorkSection() {
  return (
    <section className={cvSection} id="work">
      <div className={sectionNumber}>04 / Selected projects</div>
      <div className={sectionIntro}>
        <h2 className={sectionIntroTitle}>Work I&apos;ve helped bring to life.</h2>
        <p className={sectionIntroCopy}>
          Six projects, shaped through frontend contribution.
        </p>
      </div>
      <div className="border-t border-line">
        {projects.map((project, index) => (
          <article
            className="group grid grid-cols-[54px_1fr] gap-[38px] pt-[34px] pb-[42px] pl-0 transition-[padding,background] duration-[250ms] not-first:border-t not-first:border-line hover:pl-3 mobile:grid-cols-[34px_1fr] mobile:gap-3"
            key={`${project.title}-${project.label}`}
          >
            <div className="font-[monospace] text-[12px] text-aqua">0{index + 1}</div>
            <div>
              <p className={entryLabel}>{project.label}</p>
              <h3 className={cn(roleTitle, "mt-1")}>{project.title}</h3>
              <p className="m-0 max-w-[690px] text-[16px] leading-[1.6] text-fog">
                {project.description}
              </p>
              {project.contribution && (
                <p className="mt-3.5 max-w-[690px] text-[13px] leading-[1.55] text-fog">
                  <strong className="mb-1 block font-[monospace] text-[10px] tracking-[0.12em] text-paper uppercase">
                    Contribution
                  </strong>
                  {project.contribution}
                </p>
              )}
              <div className={tagList}>
                {project.tech.map((item) => (
                  <span className={tagClass} key={item}>
                    {item}
                  </span>
                ))}
              </div>
              {project.url && !project.hiddenLink && (
                <a
                  className={cn(
                    inlineLink,
                    "[&_svg]:transition-transform [&_svg]:duration-[250ms] [&_svg]:ease-in-out group-hover:[&_svg]:translate-[3px_-3px]",
                  )}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel ?? "View project"}{" "}
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
