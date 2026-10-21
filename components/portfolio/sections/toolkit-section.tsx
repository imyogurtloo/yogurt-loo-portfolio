import { skills } from "@/lib/data";
import {
  cvSection,
  sectionIntro,
  sectionIntroCopy,
  sectionIntroTitle,
  sectionNumber,
  tagClass,
} from "@/lib/styles";

export function ToolkitSection() {
  return (
    <section className={cvSection} id="toolkit">
      <div className={sectionNumber}>05 / Toolkit</div>
      <div className={sectionIntro}>
        <h2 className={sectionIntroTitle}>Tools for making things move.</h2>
        <p className={sectionIntroCopy}>
          A practical set of technologies and engineering habits used across my
          work.
        </p>
      </div>
      <div className="border-t border-line">
        {Object.entries(skills).map(([group, items]) => (
          <div
            className="grid grid-cols-[150px_1fr] items-start gap-[30px] border-b border-line py-7 mobile:block"
            key={group}
          >
            <h3 className="m-0 text-[12px] font-normal tracking-[0.1em] text-aqua uppercase">
              {group}
            </h3>
            <div className="-mt-[7px] flex flex-wrap gap-[7px] mobile:mt-[18px]">
              {items.map((item) => (
                <span className={tagClass} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
