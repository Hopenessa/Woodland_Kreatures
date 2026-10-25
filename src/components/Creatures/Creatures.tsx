import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../Shared/Container";
import { LinkButton } from "../Shared/Button";
import ShopLink from "../Shared/ShopLink";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { creatures } from "./creatures.data";
import {
  CreaturesSection,
  Title,
  Introduction,
  Invitation,
  Gallery,
  Viewport,
  Track,
  Card,
  Image,
  Name,
  Arrow,
  Controls,
} from "./Creatures.styles";

const CLONES = 3;
const SLIDE_INTERVAL = 4000;
// Clones let the track cross either end before resetting invisibly.
const slides = [
  ...creatures.slice(-CLONES),
  ...creatures,
  ...creatures.slice(0, CLONES),
];

export default function Creatures() {
  const [slide, setSlide] = useState({ index: CLONES, animated: false });
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const galleryRef = useRef<HTMLDivElement>(null);
  const moving = useRef(false);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const mobile = useMediaQuery("(max-width: 600px)");
  const visibleCount = mobile ? 1 : 3;

  const finishSlide = useCallback(() => {
    moving.current = false;
    setSlide((current) => ({
      index:
        CLONES +
        ((current.index - CLONES + creatures.length) % creatures.length),
      animated: false,
    }));
  }, []);

  const move = useCallback(
    (direction: number) => {
      if (moving.current) return;
      if (reducedMotion) {
        setSlide((current) => ({
          index:
            CLONES +
            ((current.index - CLONES + direction + creatures.length) %
              creatures.length),
          animated: false,
        }));
        return;
      }
      moving.current = true;
      setSlide((current) => ({
        index: current.index + direction,
        animated: true,
      }));
    },
    [reducedMotion],
  );

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (
      !inView ||
      !pageVisible ||
      reducedMotion
    )
      return;
    const timer = window.setInterval(() => {
      const gallery = galleryRef.current;
      if (!gallery || gallery.matches(":hover") || gallery.contains(document.activeElement)) return;
      move(1);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [inView, pageVisible, reducedMotion, move]);

  useEffect(() => {
    if (!slide.animated) return;
    // Recover even if a browser cancels transitionend (e.g. a hidden tab).
    const fallback = window.setTimeout(finishSlide, 850);
    return () => window.clearTimeout(fallback);
  }, [slide, finishSlide]);

  return (
    <CreaturesSection id="creatures">
      <Container>
        <Title>The Creatures</Title>
        <Introduction>
          A selection of my creations — each with a little soul and a story of
          its own.
        </Introduction>
        <Gallery
          ref={galleryRef}
          data-playback={reducedMotion ? "reduced-motion" : !pageVisible ? "background" : !inView ? "offscreen" : "playing"}
          role="region"
          aria-label="Woodland creatures gallery"
          aria-roledescription="carousel"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <Arrow
            type="button"
            $side="left"
            onClick={() => move(-1)}
            aria-label="Previous creatures"
          >
            <svg viewBox="0 0 24 44" aria-hidden="true">
              <path d="M22 2 2 22l20 20" />
            </svg>
          </Arrow>
          <Viewport>
            <Track
              $index={slide.index}
              $animated={slide.animated}
              onTransitionEnd={(event) => {
                if (
                  event.target === event.currentTarget &&
                  event.propertyName === "transform"
                )
                  finishSlide();
              }}
            >
              {slides.map((creature, index) => (
                <Card
                  key={`${creature.id}-${index}`}
                  aria-hidden={
                    index < slide.index || index >= slide.index + visibleCount
                  }
                >
                  <Image
                    src={creature.image}
                    alt={creature.alt}
                    width="560"
                    height="650"
                    loading="eager"
                    draggable={false}
                  />
                  <Name>{creature.name}</Name>
                </Card>
              ))}
            </Track>
          </Viewport>
          <Arrow
            type="button"
            $side="right"
            onClick={() => move(1)}
            aria-label="Next creatures"
          >
            <svg viewBox="0 0 24 44" aria-hidden="true">
              <path d="m2 2 20 20L2 42" />
            </svg>
          </Arrow>
        </Gallery>
        <Controls>
          <Invitation>
            Looking for a woodland companion? Step into my shop and meet the
            creatures waiting for a home.
          </Invitation>
          <LinkButton as={ShopLink}>Visit the shop</LinkButton>
        </Controls>
      </Container>
    </CreaturesSection>
  );
}
