import styled from "styled-components";
import { Container } from "../Shared/Container";
export const ArtistSection = styled.section`
  padding-block: 50px;
  background:
    radial-gradient(ellipse at 14% 65%, #0d3147aa, transparent 55%),
    radial-gradient(ellipse at 95% 30%, #12344899, transparent 55%), #061a29;
`;
export const ArtistContainer = styled(Container)`
  display: grid;
  grid-template-columns: 0.89fr 1.1fr;
  gap: clamp(45px, 7.4vw, 105px);
  align-items: center;
  padding-left: clamp(0px, 8.3vw, 110px);
  width: min(calc(100% - 150px), 1220px);
  @media (max-width: 900px) {
    width: calc(100% - 80px);
    padding-left: 0;
    gap: 40px;
  }
  @media (max-width: 700px) {
    width: calc(100% - 44px);
    padding: 0;
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;
export const Portrait = styled.img`
  height: auto;
  border: 1px solid #ded5be;
  aspect-ratio: 1;
  object-fit: cover;
  @media (max-width: 700px) {
    max-width: 360px;
    margin-inline: auto;
  }
`;
export const ArtistCopy = styled.div`
  @media (max-width: 700px) {
    padding-bottom: 10px;
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-size: clamp(36px, 4.4vw, 60px);
  line-height: 1.1;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
`;
export const Text = styled.p`
  font-size: clamp(19px, 1.85vw, 26px);
  line-height: 1.35;
  & + & {
    margin-top: 12px;
  }
  @media (max-width: 900px) {
    .desktop-break {
      display: none;
    }
  }
`;

export const ArtistRole = styled.p`
  margin: 0 0 18px;
  color: #d9d2b7;
  font-size: clamp(18px, 1.6vw, 22px);
  line-height: 1.35;
`;
