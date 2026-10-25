import styled, { keyframes } from "styled-components";
import background from "../../assets/images/background-forest.svg";
import { LinkButton } from "../Shared/Button";
const appearFromAbove = keyframes`
  from { opacity: 0; transform: translateY(-48px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PreviewSection = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  place-items: center;
  text-align: center;
  background: #031c29 url(${background}) center bottom / cover no-repeat;
  @media (max-width: 600px) {
    min-height: max(620px, 100svh);
    background-position: 51% bottom;
  }
`;
export const Content = styled.div<{ $revealed: boolean }>`
  padding: 130px 22px;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 40px -100px;
    pointer-events: none;
    background: radial-gradient(
      ellipse at center,
      rgba(2, 21, 32, .84) 0%,
      rgba(2, 21, 32, .7) 34%,
      rgba(2, 21, 32, .32) 57%,
      rgba(2, 21, 32, 0) 76%
    );
  }
  & > * {
    visibility: ${({ $revealed }) => $revealed ? "visible" : "hidden"};
    animation: ${appearFromAbove} 1134ms cubic-bezier(.25, .46, .45, .94) both;
    animation-play-state: ${({ $revealed }) => $revealed ? "running" : "paused"};
  }
  /* Opacity animates visually while the h1 stays in the accessibility tree. */
  & > h1 { visibility: visible; }
  & > :nth-child(2) { animation-delay: 146ms; }
  & > :nth-child(3) { animation-delay: 292ms; }
  & > :nth-child(4) { animation-delay: 437ms; }
  & > :nth-child(5) { animation-delay: 583ms; }
  @media (prefers-reduced-motion: reduce) {
    & > * { visibility: visible; opacity: 1; transform: none; }
  }
  @media (min-width: 1200px) {
    padding-top: 155px;
    padding-bottom: 155px;
  }
  @media (max-width: 600px) {
    padding-top: 110px;
    padding-bottom: 110px;
    &::before { inset: 36px -36px; }
  }
`;
export const Title = styled.h1`
  font-size: clamp(47px, 5.2vw, 76px);
  line-height: 0.96;
  letter-spacing: -0.025em;
  -webkit-text-stroke: 0.45px #031c29;
  paint-order: stroke fill;
  text-shadow:
    0 1px 2px #00131e,
    0 0 6px #031c29,
    0 0 14px #031c29,
    0 0 28px rgba(3, 28, 41, .9);
  @media (max-width: 600px) {
    font-size: clamp(43px, 10.4vw, 60px);
    line-height: 1.04;
  }
`;
export const Ornament = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 12px;
  color: #e3e2cc;
  span {
    display: flex;
    transform: scaleX(-1);
  }
`;
export const Subtitle = styled.p`
  font-size: clamp(21px, 2.2vw, 30px);
  line-height: 1.3;
  text-shadow: 0 1px 2px #00131e, 0 0 8px #031c29, 0 0 18px #031c29;
`;
export const Introduction = styled.p`
  max-width: 580px;
  margin: 18px auto 0;
  color: #ecebdd;
  font-size: clamp(19px, 1.65vw, 23px);
  line-height: 1.45;
  text-wrap: pretty;
  text-shadow: 0 1px 2px #00131e, 0 0 6px #031c29, 0 0 14px #031c29;
`;
export const HeroButton = styled(LinkButton)`
  margin-top: 22px;
  min-width: 204px;
  font-size: clamp(20px, 1.9vw, 26px);
`;

const driftDown = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

export const ScrollHint = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: max(24px, env(safe-area-inset-bottom));
  transform: translateX(-50%);
  margin: 0;
  @media (min-width: 801px) { bottom: clamp(28px, 4svh, 44px); }
  color: #e3e2cc;
  opacity: .8;
  svg { animation: ${driftDown} 2400ms ease-in-out infinite; }
  &:hover { color: #fff4c9; }
  @media (prefers-reduced-motion: reduce) { svg { animation: none; } }
`;
