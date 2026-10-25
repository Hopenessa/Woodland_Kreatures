import { useMediaQuery } from "../../hooks/useMediaQuery";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useEffect, useRef, useState } from "react";
import Moon from "../Shared/Moon";
import ShopLink from "../Shared/ShopLink";
import {
  HeaderWrapper,
  Brand,
  Navigation,
  CompactHeader,
  CompactInner,
  ShopEntry,
} from "./Header.styles";

type SectionId = "home" | "creatures" | "artist";

function Menu({ label, active }: { label: string; active?: SectionId }) {
  return (
    <Navigation aria-label={label}>
      <a href="#home" aria-current={active === "home" ? "location" : undefined}>
        Home
      </a>
      <a
        href="#creatures"
        aria-current={active === "creatures" ? "location" : undefined}
      >
        Creatures
      </a>
      <a
        href="#artist"
        aria-current={active === "artist" ? "location" : undefined}
      >
        The Artist
      </a>
      {active === undefined ? (
        <ShopLink>Shop</ShopLink>
      ) : (
        <ShopEntry>
          <ShopLink>
            Shop
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 15 15 5M5 5h10v10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ShopLink>
        </ShopEntry>
      )}
    </Navigation>
  );
}

export default function Header() {
  const originalHeader = useRef<HTMLElement>(null);
  const mobile = useMediaQuery("(max-width: 800px)");
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Switch as the next section enters the upper 40% of the viewport.
      const marker = Math.max(
        window.innerWidth <= 800 ? 150 : 140,
        Math.min(window.innerHeight * 0.4, 360),
      );
      let current: SectionId = "home";
      for (const id of ["creatures", "artist"] as const) {
        if (
          (document.getElementById(id)?.getBoundingClientRect().top ??
            Infinity) <= marker
        )
          current = id;
      }
      // The last section may not reach the marker on a tall viewport.
      if (
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
      ) {
        current = "artist";
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    const header = originalHeader.current;
    if (!header) return;
    const observer = new IntersectionObserver(([entry]) => {
      setCompact(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeaderWrapper ref={originalHeader}>
        <Brand href="#home" aria-label="Woodland Kreatures, home">
          Woodland Kreatures
        </Brand>
        <Menu label="Main navigation" />
      </HeaderWrapper>
      {mobile && (
        <MobileMenu>
          <Menu label="Mobile navigation" active={active} />
        </MobileMenu>
      )}
      {compact && !mobile && (
        <CompactHeader aria-label="Quick navigation">
          <CompactInner>
            <Brand href="#home" aria-label="Woodland Kreatures, home">
              <Moon size={22} />
              <span>Woodland Kreatures</span>
            </Brand>
            <Menu label="Quick section links" active={active} />
          </CompactInner>
        </CompactHeader>
      )}
    </>
  );
}
