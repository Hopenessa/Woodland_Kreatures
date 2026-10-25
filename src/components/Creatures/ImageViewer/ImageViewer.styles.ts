import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Viewer = styled.dialog`
  position: fixed;
  inset: 0;
  margin: 0;
  width: 100%;
  max-width: none;
  height: 100dvh;
  max-height: none;
  padding: 60px 64px 24px;
  border: 0;
  background: #001912ed;
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
    background: #00120ee6;
  }
  @media (max-width: 600px) {
    padding: 66px 18px max(24px, env(safe-area-inset-bottom));
  }
`;
export const CloseButton = styled.button`
  position: fixed;
  top: max(14px, env(safe-area-inset-top));
  right: max(18px, env(safe-area-inset-right));
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
  }
`;
export const Photo = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: min(100%, 1400px);
  max-height: calc(100dvh - 140px);
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
  position: fixed;
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
  &:hover { background: #194b3c; border-color: #ded5be; }
  @media (max-width: 600px) {
    ${({ $side }) => $side}: 6px;
    width: 44px;
    height: 48px;
  }
`;
