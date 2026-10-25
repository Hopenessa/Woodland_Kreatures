import styled from "styled-components";
export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #e3e2cc;
`;
export const BranchIcon = styled.svg<{ $flipped?: boolean }>`
  transform: ${({ $flipped }) => $flipped ? "scaleX(-1)" : "none"};
`;
