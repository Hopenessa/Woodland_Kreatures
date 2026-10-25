import styled from "styled-components";
import { LinkButton } from "../Shared/Button";
export const CreaturesSection = styled.section`
  padding: 21px 0 44px;
  background: radial-gradient(
    ellipse at 50% 35%,
    #004331 0%,
    #00382b 65%,
    #003326 100%
  );
  @media (max-width: 600px) {
    padding: 30px 0 50px;
  }
`;
export const Title = styled.h2`
  font-size: clamp(36px, 4.15vw, 58px);
  text-align: center;
  line-height: 1.2;
  margin-bottom: 8px;
`;
export const Gallery = styled.div`
  position: relative;
`;
export const Viewport = styled.div`
  /* Keep thin borders away from the clip edge during fractional slide offsets. */
  padding: 4px;
  overflow: hidden;
  @media (max-width: 600px) {
    max-width: 360px;
    margin-inline: auto;
  }
`;
export const Track = styled.div<{ $index: number; $animated: boolean }>`
  --gap: 27px;
  --visible: 3;
  display: flex;
  gap: var(--gap);
  transform: translate3d(
    calc(${({ $index }) => -$index} * ((100% + var(--gap)) / var(--visible))),
    0,
    0
  );
  transition: ${({ $animated }) => ($animated ? "transform 700ms cubic-bezier(.22, .61, .36, 1)" : "none")};
  @media (max-width: 900px) {
    --gap: 18px;
  }
  @media (max-width: 600px) {
    --visible: 1;
  }
`;
export const Card = styled.figure`
  min-width: 0;
  flex: 0 0 calc((100% - (var(--visible) - 1) * var(--gap)) / var(--visible));
`;
export const ImageButton = styled.button`
  display: block;
  width: 100%;
  border: 0;
  padding: 0;
  background: #072c22;
  cursor: zoom-in;
  &:focus-visible {
    outline-offset: -5px;
  }
`;
export const Image = styled.img<{ $position: string; $fit: "cover" | "contain" }>`
  height: clamp(240px, min(30vw, 40svh), 440px);
  object-fit: ${({ $fit }) => $fit};
  background: #072c22;
  object-position: ${({ $position }) => $position};
  border: 1px solid #ddd5b9;
  @media (max-width: 600px) {
    height: auto;
    aspect-ratio: 280 / 350;
  }
`;
export const Name = styled.figcaption`
  font-size: clamp(21px, 2.2vw, 29px);
  text-align: center;
  margin-top: 6px;
  line-height: 1.3;
`;
export const Arrow = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: calc(50% - 40px);
  ${({ $side }) => $side}: -54px;
  display: grid;
  place-items: center;
  width: 44px;
  height: 56px;
  padding: 10px;
  background: none;
  border: 0;
  svg {
    width: 22px;
    height: 38px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
  }
  &:hover {
    color: #dfc88f;
  }
  @media (max-width: 900px) {
    ${({ $side }) => $side}: -39px;
    width: 36px;
  }
  @media (max-width: 600px) {
    ${({ $side }) => $side}: -22px;
    width: 32px;
    background: #00382bcc;
    z-index: 1;
  }
`;
export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
`;

export const Introduction = styled.p`
  max-width: 800px;
  margin: 0 auto 24px;
  color: #d3dac9;
  text-align: center;
  font-size: clamp(19px, 1.9vw, 25px);
  line-height: 1.4;
`;

export const Invitation = styled.p`
  max-width: 570px;
  margin-bottom: 5px;
  text-align: center;
  color: #dce1d2;
  font-size: clamp(20px, 2vw, 26px);
  line-height: 1.4;
`;

export const SectionDivider = styled.div`
  margin: 0 auto 12px;
`;
export const ShopButton = styled(LinkButton)`
  font-weight: 600;
  background: #f0edde;
  color: #00382b;
  border-color: #f0edde;
  &:hover { background: #fff6dd; color: #00382b; border-color: #fff6dd; }
`;
