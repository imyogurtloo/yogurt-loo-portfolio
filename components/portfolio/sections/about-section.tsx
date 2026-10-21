import { ArrowUpRight } from "lucide-react";

import {
  cvSection,
  inlineLink,
  sectionNumber,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section
      className={cn(
        cvSection,
        "is-visible min-h-screen border-t-0 pt-[clamp(60px,9vw,130px)] mobile:min-h-0 mobile:pt-[50px]",
      )}
      id="about"
    >
      <div className={sectionNumber}>01 / About</div>
      <div className="mt-[18vh] grid grid-cols-[1.15fr_0.85fr] gap-[4vw] mobile:mt-[50px] mobile:block">
        <div className="animate-[hero-copy-in_0.65s_cubic-bezier(0.2,0.7,0.2,1)_both]">
          <p className="mb-7 font-[monospace] text-[12px] tracking-[0.1em] text-fog uppercase">
            Senior frontend developer / Malaysia
          </p>
          <h1 className="m-0 max-w-[800px] text-[clamp(58px,7.8vw,130px)] leading-[0.86] tracking-[-0.09em] mobile:text-[clamp(58px,15vw,92px)]">
            Building systems. <span className="text-aqua">Shaping experiences.</span>
          </h1>
        </div>
        <div className="max-w-[430px] self-end text-[16px] leading-[1.65] text-fog animate-[hero-copy-in_0.65s_0.13s_cubic-bezier(0.2,0.7,0.2,1)_both] mobile:mt-10">
          <p className="mb-5">
            I&apos;m a Senior Frontend Developer experienced in crafting
            responsive web applications and cross-platform mobile applications.
            I care about the details that turn a functional interface into
            something people enjoy using.
          </p>
          <p className="mb-5">
            From frontend architecture and API integration to performance,
            deployment workflows, code reviews, and mentoring — I bring a
            systems mindset to every layer of the work.
          </p>
          <a className={inlineLink} href="mailto:yogurtloo.studio@gmail.com">
            Let&apos;s work together <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
