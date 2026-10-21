import { experiences } from "@/lib/data";
import {
  cvSection,
  entryLabel,
  roleTitle,
  sectionIntro,
  sectionIntroCopy,
  sectionIntroTitle,
  sectionNumber,
  tagClass,
  tagList,
} from "@/lib/styles";

export function ExperienceSection() {
  return (
    <section className={cvSection} id="experience">
      <div className={sectionNumber}>02 / Experience</div>
      <div className={sectionIntro}>
        <h2 className={sectionIntroTitle}>A frontend practice built over time.</h2>
        <p className={sectionIntroCopy}>
          Selected roles, responsibilities, and ways of working.
        </p>
      </div>
      <div className="border-l border-[rgb(72_202_228/0.38)]">
        {experiences.map((experience, index) => (
          <article
            className="relative grid grid-cols-[minmax(125px,0.34fr)_1fr] gap-[38px] py-[36px_43px] pr-6 pl-[30px] transition-[background] duration-[250ms] before:absolute before:top-[42px] before:-left-1 before:size-[7px] before:rotate-45 before:scale-100 before:bg-aqua before:content-[''] before:transition-[transform,box-shadow] before:duration-300 before:ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[rgb(72_202_228/0.06)] hover:before:scale-[1.2] hover:before:rotate-45 hover:before:shadow-[0_0_0_5px_rgb(72_202_228/0.12)] mobile:block mobile:py-[30px_36px] mobile:pr-0 mobile:pl-6"
            key={`${experience.company}-${experience.date}`}
          >
            <div className="font-[monospace] text-[12px] tracking-[0.04em] text-aqua mobile:mb-[25px]">
              {experience.date}
            </div>
            <div>
              <p className={entryLabel}>
                {index === 0 ? "CURRENT ROLE" : `0${index + 1} / EXPERIENCE`}
              </p>
              <h3 className={roleTitle}>{experience.role}</h3>
              <p className="m-0 text-[16px] text-paper">
                {experience.company}
                {experience.detail && (
                  <span className="text-aqua"> · {experience.detail}</span>
                )}
              </p>
              <div className={tagList}>
                {experience.technologies.map((item) => (
                  <span className={tagClass} key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <ul className="mt-5 max-w-[650px] pl-[18px] text-[14px] leading-[1.55] text-fog [&_li+li]:mt-4">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
