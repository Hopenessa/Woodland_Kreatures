import styled, { keyframes } from "styled-components";

const enter = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const MobileBar = styled.header<{ $solid: boolean }>`
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  min-height: 64px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: ${({ $solid }) => ($solid ? "#032b25f5" : "transparent")};
  border-bottom: 1px solid
    ${({ $solid }) => ($solid ? "#c8c3a633" : "transparent")};
  backdrop-filter: ${({ $solid }) => ($solid ? "blur(14px)" : "none")};
  transition:
    background 200ms ease,
    border-color 200ms ease;
`;
export const MobileBrand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 44px;
  font-size: clamp(13px, 3.6vw, 17px);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  span {
    transform: translateY(1px);
  }
  svg {
    flex-shrink: 0;
  }
`;
export const MenuButton = styled.button`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border: 1px solid #d9d2b780;
  border-radius: 3px;
  background: #032b2533;
  color: #f0edde;
  &:hover {
    background: #f0edde14;
  }
`;
export const MenuDialog = styled.dialog`
  position: fixed;
  inset: 0;
  margin: 0;
  width: 100%;
  max-width: none;
  height: 100dvh;
  max-height: none;
  padding: 18px 24px max(32px, env(safe-area-inset-bottom));
  border: 0;
  background:
    radial-gradient(ellipse at top right, #10443888, transparent 65%), #052920;
  color: #f0edde;
  overflow-y: auto;
  &[open] {
    display: flex;
    flex-direction: column;
    animation: ${enter} 220ms ease both;
  }
  &::backdrop {
    background: #001b19c9;
  }
`;
export const DialogTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 22px;
  border-bottom: 1px solid #d9d2b733;
`;
export const DialogTitle = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: clamp(14px, 3.7vw, 19px);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  svg {
    flex-shrink: 0;
  }
`;
export const MenuContent = styled.div`
  padding: clamp(28px, 7vh, 64px) 8px;
  nav {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    font-size: 32px;
  }
  nav > a {
    display: flex;
    align-items: center;
    min-height: 54px;
    width: fit-content;
  }
  nav > a[aria-current="location"] {
    color: #f5df9d;
  }
  nav > a[aria-current="location"]::after {
    transform: scaleX(1);
    bottom: 4px;
  }
  nav > span {
    border-left: 0;
    border-top: 1px solid #d9d2b733;
    margin: 20px 0 0;
    padding: 24px 0 0;
  }
  nav > span a {
    font-size: 28px;
    gap: 12px;
  }
  nav > span svg {
    width: 18px;
    height: 18px;
  }
`;
