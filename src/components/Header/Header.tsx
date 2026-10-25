import { useEffect, useRef, useState } from "react";
import Moon from "../Shared/Moon";
import ShopLink from "../Shared/ShopLink";
import {
  HeaderWrapper,
  Brand,
  Navigation,
  CompactHeader,
  CompactInner,
} from "./Header.styles";

function Menu({ label }: { label: string }) {
  return (
    <Navigation aria-label={label}>
      <a href="#home">Home</a>
      <a href="#creatures">Creatures</a>
      <a href="#artist">The Artist</a>
      <ShopLink>Shop</ShopLink>
    </Navigation>
  );
}

export default function Header() {
  const originalHeader = useRef<HTMLElement>(null);
  const [compact, setCompact] = useState(false);

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
      {compact && (
        <CompactHeader aria-label="Quick navigation">
          <CompactInner>
            <Brand href="#home" aria-label="Woodland Kreatures, home">
              <Moon size={22} />
              <span>Woodland Kreatures</span>
            </Brand>
            <Menu label="Quick section links" />
          </CompactInner>
        </CompactHeader>
      )}
    </>
  );
}
