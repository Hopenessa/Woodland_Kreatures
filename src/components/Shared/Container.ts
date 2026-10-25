import styled from "styled-components";
export const Container = styled.div`
  width: min(100% - 150px, 1220px);
  margin-inline: auto;
  @media (max-width: 900px) {
    width: calc(100% - 80px);
  }
  @media (max-width: 600px) {
    width: calc(100% - 44px);
  }
`;
