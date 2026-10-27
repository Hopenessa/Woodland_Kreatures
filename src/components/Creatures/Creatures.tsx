import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../Shared/Container";
import WoodlandDivider from "../Shared/WoodlandDivider/WoodlandDivider";
import ShopLink from "../Shared/ShopLink";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { creatures, type Creature } from "./creatures.data";
import ImageViewer from "./ImageViewer/ImageViewer";
import {
  CreaturesSection,
  Title,
  SectionDivider,
  ShopButton,
  Introduction,
  Invitation,
  Gallery,
  Viewport,
  Track,
  Card,
  Image,
  ImageButton,
  Name,
  Arrow,
  Controls,
} from "./Creatures.styles";

const CLONES = 3;
const SLIDE_INTERVAL = 4000;
const MANUAL_PAUSE = 5000;
const slides = [
  ...creatures.slice(-CLONES),
  ...creatures,
  ...creatures.slice(0, CLONES),
];

export default function Creatures() {
  const [selected, setSelected] = useState<Creature | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [slide, setSlide] = useState({ index: CLONES, animated: false });
  const [lastInteraction, setLastInteraction] = useState<number | null>(null);
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

  const manualMove = (direction: number) => {
    setLastInteraction(Date.now());
    move(direction);
  };

  useEffect(() => {
    if (selected || !inView || !pageVisible || reducedMotion) return;
    let timer = 0;
    let nextSlideAt = lastInteraction === null
      ? Date.now() + SLIDE_INTERVAL
      : Math.max(Date.now(), lastInteraction + MANUAL_PAUSE);

    const tick = () => {
      const gallery = galleryRef.current;
      if (!gallery) return;
      const inspecting = [...gallery.querySelectorAll<HTMLButtonElement>("button[data-creature-id]")]
        .some(button => button.matches(":hover") || button.contains(document.activeElement));
      if (!inspecting && Date.now() >= nextSlideAt) {
        move(1);
        nextSlideAt = Date.now() + SLIDE_INTERVAL;
      }
      timer = window.setTimeout(tick, Math.max(100, inspecting ? 250 : nextSlideAt - Date.now()));
    };
    timer = window.setTimeout(tick, Math.max(0, nextSlideAt - Date.now()));
    return () => window.clearTimeout(timer);
  }, [selected, inView, pageVisible, reducedMotion, move, lastInteraction]);

  useEffect(() => {
    if (!slide.animated) return;
    const fallback = window.setTimeout(finishSlide, 850);
    return () => window.clearTimeout(fallback);
  }, [slide, finishSlide]);

  return (
    <CreaturesSection id="creatures">
      <Container>
        <SectionDivider><WoodlandDivider /></SectionDivider>
        <Title>The Creatures</Title>
        <Introduction>
          A selection of my creations — each with a little soul and a story of
          its own.
        </Introduction>
        <Gallery
          ref={galleryRef}
          data-playback={
            selected
              ? "viewing"
              : reducedMotion
                ? "reduced-motion"
                : !pageVisible
                  ? "background"
                  : !inView
                    ? "offscreen"
                    : "playing"
          }
          role="region"
          aria-label="Woodland creatures gallery"
          aria-roledescription="carousel"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              manualMove(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <Arrow
            type="button"
            $side="left"
            onClick={() => manualMove(-1)}
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
                  <ImageButton
                    type="button"
                    data-creature-id={creature.id}
                    aria-label={`View ${creature.name} photograph`}
                    aria-haspopup="dialog"
                    tabIndex={
                      index >= slide.index && index < slide.index + visibleCount
                        ? 0
                        : -1
                    }
                    onClick={(event) => {
                      opener.current = event.currentTarget;
                      setSelected(creature);
                    }}
                  >
                    <Image
                      src={creature.image}
                      alt={creature.alt}
                      $position={creature.position}
                      $fit={creature.fit ?? "cover"}
                      loading="lazy"
                      draggable={false}
                    />
                  </ImageButton>
                  <Name>{creature.name}</Name>
                </Card>
              ))}
            </Track>
          </Viewport>
          <Arrow
            type="button"
            $side="right"
            onClick={() => manualMove(1)}
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
          <ShopButton as={ShopLink}>Visit the shop</ShopButton>
        </Controls>
      </Container>
      {selected && (
        <ImageViewer
          creature={selected}
          onClose={() => {
            setSelected(null);
            const visibleOpener =
              galleryRef.current?.querySelector<HTMLButtonElement>(
                `button[data-creature-id="${selected.id}"][tabindex="0"]`,
              );
            (visibleOpener ?? opener.current)?.focus({ preventScroll: true });
          }}
        />
      )}
    </CreaturesSection>
  );
}
