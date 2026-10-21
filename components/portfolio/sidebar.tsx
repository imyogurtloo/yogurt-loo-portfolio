import { Mail, MapPin, Menu, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { sections } from "@/lib/data";
import { cn } from "@/lib/utils";

type SidebarProps = {
  active: string;
  menuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: () => void;
};

export function Sidebar({
  active,
  menuOpen,
  onMenuToggle,
  onNavigate,
}: SidebarProps) {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isMobileView = useMediaQuery({ maxWidth: 1224 });

  return (
    <aside className="fixed top-0 left-0 z-5 h-screen w-[38vw] bg-[#3636362c] lg:bg-[url('/avatar.png')] bg-cover bg-position-[0_50%] lg:bg-[#090b1bb6] bg-blend-multiply mobile:relative mobile:h-auto mobile:min-h-0 mobile:w-auto">
      <div className="flex h-full flex-col justify-between overflow-hidden px-[clamp(28px,6vw,100px)] py-[clamp(32px,5vw,70px)] mobile:h-auto mobile:overflow-visible mobile:px-[6vw] mobile:pt-6 mobile:pb-5.25">
        <a
          href="#top"
          className="flex items-start gap-3.5"
          aria-label="Yogurt Loo Hui Ling home"
        >
          <span className="flex h-12 w-12 items-center justify-center border border-aqua text-base tracking-wider text-aqua">
            YL
          </span>
          <span>
            <strong className="block text-lg tracking-[0.03em] uppercase mobile:text-base">
              Yogurt Loo Hui Ling
            </strong>
            <small className="block text-base text-fog">
              Senior Frontend Developer
            </small>
          </span>
        </a>
        {isMobileView && (
          <div
            className="block my-7 h-92 w-full bg-[url('/avatar.png')] bg-cover bg-position-[0_20%] bg-black/30 bg-blend-multiply animate-[portrait-in_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both]"
            role="img"
            aria-label="Portrait artwork inspired by mountain landscapes"
          />
        )}
        <p className="m-0 max-w-[70%] text-lg leading-[1.6] text-fog mobile:block mobile:max-w-full mobile:text-[14px]">
          Curious by nature, detail-driven by craft. <br />I care about building
          interfaces that work beautifully and scale well.
        </p>
        <nav
          id="portfolio-navigation"
          className={cn(
            "flex flex-col gap-4.5 mobile:hidden",
            menuOpen &&
              "mobile:static mobile:mt-0 mobile:flex mobile:p-[24px_0_12px]",
          )}
          aria-label="Portfolio sections"
        >
          {sections.map((section, index) => (
            <a
              className={cn(
                "flex items-center gap-4 text-xs tracking-[0.18em] text-fog uppercase transition-[color,transform] duration-200 hover:text-paper",
                active === section.id && " text-paper",
              )}
              href={`#${section.id}`}
              onClick={onNavigate}
              key={section.id}
            >
              <span
                className={cn(
                  "font-[monospace] text-sm text-[rgb(137_167_174/0.55)]",
                  active === section.id && "text-aqua",
                )}
              >
                0{index + 1}
              </span>
              {section.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4.5 border-t border-line pt-6 mobile:hidden">
          <a
            href="mailto:yogurtloo.studio@gmail.com"
            className="flex items-center gap-2 text-sm text-fog hover:text-aqua"
          >
            <Mail size={15} /> Email
          </a>
          <a
            href="tel:+60169441349"
            className="flex items-center gap-2 text-sm text-fog hover:text-aqua"
          >
            <span>↗</span> Phone
          </a>
          <span className="flex items-center gap-2 text-sm text-fog">
            <MapPin size={15} /> Kuala Lumpur, Malaysia
          </span>
        </div>
        <div className="mt-7 flex justify-between text-xs tracking-[0.11em] text-[#89a5acbd] uppercase mobile:hidden">
          <span>© 2026</span>
          <span>Available for select projects</span>
        </div>
        <button
          type="button"
          className="hidden bg-transparent text-paper mobile:absolute mobile:top-6 mobile:right-[6vw] mobile:block mobile:border-0"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </aside>
  );
}
