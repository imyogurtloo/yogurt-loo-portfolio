import { education } from "@/lib/data";
import {
  cvSection,
  sectionIntro,
  sectionIntroCopy,
  sectionIntroTitle,
  sectionNumber,
} from "@/lib/styles";

export function EducationSection() {
  return (
    <section className={cvSection} id="education">
      <div className={sectionNumber}>03 / Education</div>
      <div className={sectionIntro}>
        <h2 className={sectionIntroTitle}>Foundations for the work.</h2>
        <p className={sectionIntroCopy}>
          Academic background in information and communication technology.
        </p>
      </div>
      <div className="border-t border-line">
        {education.map((item, index) => (
          <article
            className="grid grid-cols-[44px_1fr_auto] items-center gap-7 border-b border-line py-7 mobile:grid-cols-[30px_1fr_auto] mobile:items-start mobile:gap-3.5 mobile:py-6"
            key={item.degree}
          >
            <span className="font-[monospace] text-[12px] text-aqua">0{index + 1}</span>
            <div>
              <h3 className="m-0 mb-[7px] text-[clamp(22px,2.4vw,34px)] tracking-[-0.05em] mobile:text-[26px]">
                {item.degree}
              </h3>
              <p className="m-0 text-[14px] leading-[1.55] text-fog">
                {item.school}
              </p>
            </div>
            <time className="font-[monospace] text-[12px] whitespace-nowrap text-fog mobile:col-start-2 mobile:col-end-[-1]">
              {item.years}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}
