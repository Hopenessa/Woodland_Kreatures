import { useEffect, useState, type RefObject, type CSSProperties } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { fireflies } from "./fireflies.data";
import { FirefliesLayer, Firefly } from "./Fireflies.styles";

export default function Fireflies({
  scene,
}: {
  scene: RefObject<HTMLElement>;
}) {
  const [scale, setScale] = useState(0);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const element = scene.current;
    if (!element) return;
    const resize = new ResizeObserver(([entry]) => {
      // Match background-size: cover and background-position: center bottom.
      setScale(
        Math.max(
          entry.contentRect.width / 1920,
          entry.contentRect.height / 840,
        ),
      );
    });
    const visibility = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    const updatePageVisibility = () => setPageVisible(!document.hidden);
    resize.observe(element);
    visibility.observe(element);
    document.addEventListener("visibilitychange", updatePageVisibility);
    return () => {
      resize.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", updatePageVisibility);
    };
  }, [scene]);

  const running = inView && pageVisible && !reducedMotion;
  return (
    <FirefliesLayer
      aria-hidden="true"
      data-motion={reducedMotion ? "static" : running ? "running" : "paused"}
      style={{
        width: 1920 * scale,
        height: 840 * scale,
        visibility: scale ? "visible" : "hidden",
      }}
    >
      {fireflies.map((light) => (
        <Firefly
          key={light.id}
          style={
            {
              left: (light.x - 64) * scale,
              top: (light.y - 64) * scale,
              width: 128 * scale,
              height: 128 * scale,
              backgroundPosition: `${light.column * 20}% ${light.row * 50}%`,
              "--duration": `${light.duration}s`,
              "--delay": `${light.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </FirefliesLayer>
  );
}
