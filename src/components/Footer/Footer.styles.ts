import { Theme } from "../../styles/Theme";
import styled from "styled-components";
export const FooterSection = styled.footer`
  min-height: 145px;
  padding: 20px 22px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  background: radial-gradient(ellipse at center top, #00402e, #003326);
`;
export const FooterBrand = styled.a`
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 0.19em;
`;
export const FooterLinks = styled.nav`
  display: flex;
  gap: 34px;
  margin-top: 4px;
  font-size: 22px;
  a, button { transition: color 180ms ease; }
  button {
    border: 0;
    background: none;
    padding: 0;
  }
  a[href]:hover,
  button:hover {
    color: ${Theme.colors.sage};
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;
export const Notice = styled.p`
  font-size: 17px;
  text-align: center;
  max-width: 400px;
  color: #d9d2b7;
`;
