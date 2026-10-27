import styled, { css } from "styled-components";
const outline = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 7px 30px 9px;
  border: 1px solid #ded8c1;
  background: transparent;
  color: #f0edde;
  font-size: clamp(20px, 2.15vw, 28px);
  line-height: 1.2;
  transition:
    background 180ms ease,
    border-color 180ms ease;
  &:hover {
    background: rgba(230, 226, 198, 0.09);
    border-color: #fff9e5;
  }
`;
export const LinkButton = styled.a`
  ${outline}
`;
