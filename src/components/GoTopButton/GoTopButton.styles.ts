import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const GoTopLink = styled.a`
  position: fixed;
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 15;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid #bdbb9a;
  border-radius: 50%;
  background: #032d27eb;
  color: #eee9d5;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px #00171455;
  animation: ${appear} 220ms ease both;
  transition:
    background 180ms ease,
    border-color 180ms ease;
  &:hover {
    background: #154638;
    border-color: #f0edde;
  }
  @media (max-width: 600px) {
    right: 16px;
    bottom: max(16px, env(safe-area-inset-bottom));
  }
`;
