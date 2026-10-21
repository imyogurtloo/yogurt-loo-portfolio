import { interests } from "@/lib/data";
import {
  cvSection,
  sectionIntro,
  sectionIntroCopy,
  sectionIntroTitle,
  sectionNumber,
} from "@/lib/styles";

export function BeyondSection() {
  return (
    <section className={cvSection} id="beyond">
      <div className={sectionNumber}>06 / Beyond the Code</div>
      <div className={sectionIntro}>
        <h2 className={sectionIntroTitle}>Hobbies &amp; Interests</h2>
        <p className={sectionIntroCopy}>
          A few things that keep the work grounded, curious, and human.
        </p>
      </div>
      <div className="border border-line">
        {interests.map((item) => (
          <article
            className="grid min-h-[240px] grid-cols-2 items-center gap-[clamp(20px,3vw,40px)] border-b border-line px-[clamp(20px,3vw,40px)] py-[clamp(28px,3.5vw,48px)] transition-[background] duration-[250ms] last:border-b-0 hover:bg-[rgb(72_202_228/0.06)] min-[801px]:even:[&>:first-child]:order-2 mobile:min-h-0 mobile:grid-cols-1 mobile:gap-[18px] mobile:px-5 mobile:py-7"
            key={item.title}
          >
            <div className="w-full max-w-[38ch] justify-self-center">
              <span className="font-[monospace] text-[12px] text-aqua">{item.mark}</span>
              <h3 className="m-0 mb-[7px] text-[clamp(22px,2.4vw,34px)] tracking-[-0.05em] mobile:text-[26px]">
                {item.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.55] text-fog">
                {item.text}
              </p>
            </div>
            <figure className="flex min-h-[180px] w-full items-center justify-center self-stretch empty:border empty:border-dashed empty:border-line empty:bg-[rgb(72_202_228/0.04)] mobile:min-h-[160px]">
              <img
                src={item.imgsrc}
                alt={item.title}
                className="block h-full max-h-[240px] w-full object-cover grayscale contrast-[1.08] mobile:max-h-[140px]"
              />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
