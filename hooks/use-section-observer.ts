import { type RefObject, useEffect, useState } from "react";

export function useSectionObserver(
  contentRef: RefObject<HTMLElement | null>,
  sections: readonly { id: string }[],
) {
  const [active, setActive] = useState(sections[0]?.id ?? "about");

  useEffect(() => {
    const observedElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    if (isMobile) {
      observedElements.forEach((element) => {
        element.classList.add("is-visible");
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      {
        root: isMobile ? null : contentRef.current,
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0, 0.2, 0.5, 1],
      },
    );

    observedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [contentRef, sections]);

  return active;
}
