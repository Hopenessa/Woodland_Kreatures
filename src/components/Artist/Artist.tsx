import {
  ArtistSection,
  ArtistContainer,
  Portrait,
  ArtistCopy,
  Title,
  ArtistRole,
  Text,
} from "./Artist.styles";
import portrait from "../../assets/images/portrait.webp";
export default function Artist() {
  return (
    <ArtistSection id="artist">
      <ArtistContainer>
        <Portrait
          src={portrait}
          alt="Sandy Darling, the artist behind Woodland Kreatures, standing beside a black horse in a wooded paddock"
          width="1280"
          height="1280"
          loading="lazy"
        />
        <ArtistCopy>
          <Title>Hi, I’m Sandy Darling.</Title>
          <ArtistRole>The artist behind Woodland Kreatures</ArtistRole>
          <Text>
            I create one-of-a-kind art dolls and woodland spirits inspired by
            forgotten forests, wild things and the magic that lives in the quiet
            places.
          </Text>
          <Text>
            Each piece is a celebration of nature, imagination
            <br className="desktop-break" /> and the creatures that still
            believe.
          </Text>
        </ArtistCopy>
      </ArtistContainer>
    </ArtistSection>
  );
}
