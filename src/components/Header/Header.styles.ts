import styled, { keyframes } from "styled-components";
export const HeaderWrapper = styled.header`
  position: absolute;
  inset: 0 0 auto;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: clamp(22px, 2.7vw, 42px) 20px 0;
`;
export const Brand = styled.a`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: clamp(16px, 1.65vw, 22px);
  line-height: 1.3;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(22px, 3.2vw, 42px);
  font-size: clamp(18px, 1.7vw, 23px);
  a {
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transition: transform 180ms ease;
  }
  a:hover::after {
    transform: scaleX(1);
  }
`;

const reveal = keyframes`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`;

export const CompactHeader = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  background: linear-gradient(110deg, #032b25f5, #071f2af5);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #c8c3a633;
  box-shadow: 0 6px 28px #00151044;
  animation: ${reveal} 240ms ease both;
`;

export const CompactInner = styled.div`
  width: min(calc(100% - 64px), 1220px);
  min-height: 66px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  ${Brand} {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
  }
  ${Navigation} {
    font-size: 20px;
    gap: 28px;
  }
  @media (max-width: 700px) {
    width: calc(100% - 32px);
    min-height: 88px;
    padding-block: 10px;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    ${Brand} {
      font-size: 13px;
      gap: 8px;
    }
    ${Brand} svg {
      width: 16px;
      height: 16px;
    }
    ${Navigation} {
      font-size: 18px;
      gap: 24px;
    }
  }
`;
