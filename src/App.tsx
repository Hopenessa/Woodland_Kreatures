import { useLayoutEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";
import Creatures from "./components/Creatures/Creatures";
import Artist from "./components/Artist/Artist";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GoTopButton from "./components/GoTopButton/GoTopButton";

export default function App() {
  useLayoutEffect(() => {
    const navigateToSection = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
        : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const id = link.getAttribute("href")?.slice(1);
      const destination = id ? document.getElementById(id) : null;
      if (!destination) return;
      event.preventDefault();
      destination.scrollIntoView({ block: "start" });
      if (!destination.hasAttribute("tabindex")) destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
    };
    document.addEventListener("click", navigateToSection);
    return () => document.removeEventListener("click", navigateToSection);
  }, []);

  useLayoutEffect(() => {
    let frame = 0;
    let interacted = false;
    const stopResetting = () => { interacted = true; };
    const resetScroll = () => {
      if (interacted) return;
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && focused !== document.body) {
        focused.blur();
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    const afterLoad = () => {
      resetScroll();
      frame = requestAnimationFrame(resetScroll);
    };
    resetScroll();
    frame = requestAnimationFrame(resetScroll);
    window.addEventListener("load", afterLoad, { once: true });
    window.addEventListener("pageshow", afterLoad);
    const interactions = ["pointerdown", "keydown", "wheel", "touchstart"] as const;
    interactions.forEach(event => window.addEventListener(event, stopResetting, { passive: true }));
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", afterLoad);
      window.removeEventListener("pageshow", afterLoad);
      interactions.forEach(event => window.removeEventListener(event, stopResetting));
    };
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Preview />
        <Creatures />
        <Artist />
        <Contact />
      </main>
      <Footer />
      <GoTopButton />
    </ThemeProvider>
  );
}
