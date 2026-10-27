import { useEffect, useRef, useState } from "react";
import background from "../../assets/images/background-forest.svg";
import Fireflies from "./Fireflies";
import {
  PreviewSection,
  Content,
  Title,
  Ornament,
  Subtitle,
  Introduction,
  HeroButton,
  ScrollHint,
} from "./Preview.styles";
import WoodlandDivider from "../Shared/WoodlandDivider/WoodlandDivider";
export default function Preview() {
  const scene = useRef<HTMLElement>(null);
  const [assetsReady, setAssetsReady] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let firstFrame = 0;
    let secondFrame = 0;
    let startTimer = 0;
    const image = new Image();
    image.src = background;
    let timeout = 0;
    const fallback = new Promise<void>(resolve => { timeout = window.setTimeout(resolve, 2500); });
    const assets = Promise.allSettled([
      image.decode(),
      document.fonts.load('400 52px "Cormorant Garamond"'),
    ]);
    void Promise.race([assets, fallback]).then(() => {
      window.clearTimeout(timeout);
      if (cancelled) return;
      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          startTimer = window.setTimeout(() => {
            if (!cancelled) setAssetsReady(true);
          }, 146);
        });
      });
    });
    const element = scene.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (element) observer.observe(element);
    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearTimeout(timeout);
      window.clearTimeout(startTimer);
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, []);
  return (
    <PreviewSection id="home" ref={scene}>
      <Fireflies scene={scene} />
      <Content $revealed={assetsReady && entered}>
        <Title>
          Where the hidden
          <br />
          things live
        </Title>
        <Ornament><WoodlandDivider /></Ornament>
        <Subtitle>Handcrafted art dolls &amp; woodland spirits</Subtitle>
        <Introduction>
          Inspired by forgotten forests and the quiet magic of nature, I create
          one-of-a-kind creatures, each with a little soul and a story of its own.
          Perhaps one of them is waiting for you.
        </Introduction>
        <HeroButton href="#creatures">Meet the creatures</HeroButton>
      </Content>
      <ScrollHint href="#creatures" aria-label="Scroll down to the creatures">
          <svg width="24" height="34" viewBox="0 0 24 34" fill="none" aria-hidden="true"><path d="M12 4v23m-7-7 7 7 7-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </ScrollHint>
    </PreviewSection>
  );
}
