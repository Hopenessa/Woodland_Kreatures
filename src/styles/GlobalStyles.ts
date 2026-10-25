import { createGlobalStyle } from "styled-components";
import regularFont from "../assets/fonts/cormorant-0.ttf";
import mediumFont from "../assets/fonts/cormorant-1.ttf";
export const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'Cormorant Garamond'; src: url(${regularFont}) format('truetype'); font-weight: 400; font-style: normal; font-display: swap; }
  @font-face { font-family: 'Cormorant Garamond'; src: url(${mediumFont}) format('truetype'); font-weight: 500; font-style: normal; font-display: swap; }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 86px; }
  html { scrollbar-color: #f0edde #00382b; scrollbar-width: auto; }
  ::-webkit-scrollbar { width: 12px; height: 12px; }
  ::-webkit-scrollbar-track { background: #00382b; }
  ::-webkit-scrollbar-thumb { background: #f0edde; border: 3px solid #00382b; border-radius: 12px; }
  ::-webkit-scrollbar-corner { background: #00382b; }
  @media (forced-colors: active) { html { scrollbar-color: auto; } }
  body { margin: 0; background: #00382b; color: #f0edde; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 400; -webkit-font-smoothing: antialiased; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { font: inherit; color: inherit; }
  a { color: inherit; text-decoration: none; }
  a[aria-disabled="true"] { cursor: default; }
  @media (max-width: 800px) { html { scroll-padding-top: 84px; } }
  button, a { touch-action: manipulation; }
  button { cursor: pointer; }
  h1, h2, p, figure { margin: 0; }
  h1, h2 { font-weight: 400; }
  img { display: block; width: 100%; }
  ::selection { background: #8eaa91; color: #031e18; }
  :focus-visible { outline: 2px solid #e7d4a3; outline-offset: 6px; }
  .skip-link { position: fixed; top: 10px; left: 10px; transform: translateY(-180%); z-index: 30; padding: 12px 20px; background: #00382b; }
  .skip-link:focus { transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
