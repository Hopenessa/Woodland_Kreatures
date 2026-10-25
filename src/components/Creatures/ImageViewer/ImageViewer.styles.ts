import { Theme } from "../../../styles/Theme";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Viewer = styled.dialog`
  position: fixed;
  inset: 0;
  margin: auto;
  width: fit-content;
  min-width: min(500px, calc(100vw - 64px));
  max-width: min(1100px, calc(100% - 64px));
  height: auto;
  max-height: calc(100dvh - 96px);
  padding: 56px 68px 22px;
  border: 1px solid #ded5be88;
  border-radius: 4px;
  box-shadow: 0 20px 80px #00110e80;
  background: #052920f5;
  color: #f0edde;
  overflow-y: auto;
  &[open] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    animation: ${appear} 180ms ease both;
  }
  &::backdrop {
    background: #00120e80;
  }
  @media (max-width: 600px) {
    width: calc(100% - 24px);
    min-width: 0;
    max-width: none;
    max-height: calc(100dvh - 32px);
    padding: 54px 44px 20px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid #ded5be88;
  border-radius: 50%;
  background: #032b25;
  color: #f0edde;
  &:hover {
    background: #194b3c;
    color: ${Theme.colors.sage};
    border-color: ${Theme.colors.sage};
  }
`;
export const Photo = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: min(100%, 1400px);
  max-height: min(66dvh, calc(100dvh - 210px));
  object-fit: contain;
  flex: 0 1 auto;
  min-height: 0;
  border: 1px solid #ded5be99;
`;
export const Caption = styled.p`
  flex-shrink: 0;
  text-align: center;
  font-size: 25px;
  line-height: 1.2;
`;

export const PhotoArrow = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => $side}: 14px;
  transform: translateY(-50%);
  z-index: 1;
  width: 44px;
  height: 52px;
  display: grid;
  place-items: center;
  border: 1px solid #ded5be66;
  border-radius: 4px;
  background: #032b25cc;
  color: #f0edde;
  &:hover { background: #194b3c; color: ${Theme.colors.sage}; border-color: ${Theme.colors.sage}; }
  @media (max-width: 600px) {
    ${({ $side }) => $side}: 6px;
    width: 44px;
    height: 48px;
  }
`;
