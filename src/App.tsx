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
    let frame = 0;
    let interacted = false;
    const stopResetting = () => { interacted = true; };
    const resetScroll = () => {
      if (interacted) return;
      // Browsers can restore both the scroll position and the focused anchor.
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
    // Never pull the visitor back after they have started navigating.
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
