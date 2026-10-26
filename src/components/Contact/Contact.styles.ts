import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const ContactSection = styled.section`
  padding: 56px 22px 52px;
  background: radial-gradient(ellipse at 50% 0%, #10463866, transparent 70%), #00382b;
`;
export const ContactInner = styled.div`
  max-width: 800px;
  margin-inline: auto;
  text-align: center;
  & > div:first-child { margin-inline: auto; }
`;
export const Eyebrow = styled.p`
  color: ${Theme.colors.sage};
  font-size: 16px;
  letter-spacing: .12em;
  margin: 22px 0 12px;
`;
export const Title = styled.h2`
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.12;
`;
export const Description = styled.p`
  max-width: 610px;
  margin: 18px auto 28px;
  font-size: clamp(20px, 1.8vw, 25px);
  line-height: 1.4;
`;
export const ContactOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-inline: auto;
`;
export const ContactOption = styled.a`
  min-height: 48px;
  min-width: 158px;
  padding: 10px 22px;
  border: 1px solid #b4c9ad55;
  background: #001f191f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  svg { color: ${Theme.colors.sage}; flex-shrink: 0; }
  transition: background 180ms ease, border-color 180ms ease;
  &[href]:hover { background: #b4c9ad12; border-color: ${Theme.colors.sage}; }
  @media (max-width: 400px) {
    min-width: 0;
    padding-inline: 16px;
    gap: 8px;
  }
`;
export const OptionTitle = styled.span`
  font-size: 23px;
  font-weight: 500;
  line-height: 1.2;
`;
