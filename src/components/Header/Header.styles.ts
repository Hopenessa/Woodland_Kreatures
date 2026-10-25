import { Theme } from "../../styles/Theme";
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
  @media (max-width: 800px) { display: none; }
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
  a[href]:hover { color: ${Theme.colors.sage}; }
  a { transition: color 180ms ease; }
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
    font-size: 18px;
    line-height: 1;
    min-height: 44px;
    span { transform: translateY(2px); }
  }
  ${Navigation} {
    font-size: 22px;
    line-height: 1;
    gap: 24px;
    & > a { display: inline-flex; align-items: center; min-height: 44px; padding-block: 7px; }
    & > a[aria-current="location"] { color: #f0edde; font-weight: 500; }
    & > a[aria-current="location"]::after { transform: scaleX(1); bottom: 2px; }

  }
  @media (max-width: 800px) {
    width: calc(100% - 32px);
    min-height: 88px;
    padding-block: 10px;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    ${Brand} {
      font-size: 14px;
      gap: 8px;
      min-height: 20px;
    }
    ${Brand} svg {
      width: 16px;
      height: 16px;
    }
    ${Navigation} {
      font-size: 18px;
      gap: clamp(10px, 4vw, 18px);
      & > a { padding-block: 5px; }
    }
  }
`;

export const ShopEntry = styled.span`
  display: inline-flex;
  align-items: center;
  border-left: 1px solid #d9d2b74d;
  padding-left: 22px;
  margin-left: 2px;
  a { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; padding-block: 7px; }
  a::after { display: none; }
  @media (max-width: 800px) {
    padding-left: 14px;
    margin-left: 0;
    a { gap: 5px; padding-block: 5px; }
    svg { width: 13px; height: 13px; }
  }
`;
