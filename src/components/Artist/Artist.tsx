import {
  ArtistSection,
  ArtistContainer,
  Portrait,
  ArtistCopy,
  Title,
  Text,
} from "./Artist.styles";
import portrait from "../../assets/images/artist-placeholder.svg";
export default function Artist() {
  return (
    <ArtistSection id="artist">
      <ArtistContainer>
        <Portrait
          src={portrait}
          alt="Temporary illustrated portrait of the artist — photograph coming soon"
          width="640"
          height="650"
          loading="lazy"
        />
        <ArtistCopy>
          <Title>Hi, I’m the artist.</Title>
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
