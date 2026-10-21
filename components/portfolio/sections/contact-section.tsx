import { ArrowUpRight, Code2, Mail, MapPin, Phone } from "lucide-react";

import {
  cvSection,
  sectionNumber,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section className={cn(cvSection, "text-aqua")} id="contact">
      <div className={cn(sectionNumber, "text-fog")}>07 / Contact</div>
      <div className="mt-[15vh] max-w-[800px] mobile:mt-[50px]">
        <Code2 size={21} />
        <h2 className="my-[22px] text-[clamp(54px,8vw,120px)] leading-[0.86] tracking-[-0.09em] mobile:text-[50px]">
          Let&apos;s make something move.
        </h2>
        <p className="max-w-[340px] text-[16px] leading-[1.5] text-fog">
          Open to discussing frontend engineering opportunities and thoughtful
          digital products.
        </p>
        <a
          className="mt-[35px] inline-flex items-center gap-3 border-b border-line pb-2.5 text-[clamp(16px,2vw,24px)]"
          href="mailto:yogurtloo.studio@gmail.com"
        >
          yogurtloo.studio@gmail.com <ArrowUpRight size={19} />
        </a>
      </div>
      <div className="mt-[15vh] flex flex-wrap gap-[25px] text-fog mobile:mt-[50px] mobile:flex-col">
        <span className="flex items-center gap-[7px] text-[15px]">
          <Mail size={14} /> yogurtloo.studio@gmail.com
        </span>
        <span className="flex items-center gap-[7px] text-[15px]">
          <MapPin size={14} /> Malaysia
        </span>
        <a
          href="tel:+60169441349"
          className="flex items-center gap-[7px] text-[15px]"
        >
          <Phone size={14} />
          016-944 1349
        </a>
      </div>
    </section>
  );
}
