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
