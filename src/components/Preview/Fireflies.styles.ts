import styled, { keyframes } from "styled-components";
import sprite from "../../assets/images/fireflies-sprite.svg";

const shimmer = keyframes`
  0%, 12%, 100% { opacity: 0; }
  32% { opacity: .28; }
  48% { opacity: .95; }
  62% { opacity: .6; }
  82% { opacity: .08; }
`;

export const FirefliesLayer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  user-select: none;
  contain: layout style;
  @media (max-width: 600px) {
    left: 51%;
    transform: translateX(-51%);
  }
  &[data-motion="paused"] > span {
    animation-play-state: paused;
  }
  &[data-motion="static"] > span {
    animation: none;
    opacity: 0.65;
  }
`;

export const Firefly = styled.span`
  position: absolute;
  display: block;
  background-image: url(${sprite});
  background-repeat: no-repeat;
  background-size: 600% 300%;
  opacity: 0.65;
  animation: ${shimmer} var(--duration) ease-in-out var(--delay) infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.65;
  }
`;
