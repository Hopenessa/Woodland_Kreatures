import { siteLinks } from "../../config/links";
import WoodlandDivider from "../Shared/WoodlandDivider/WoodlandDivider";
import {
  ContactSection, ContactInner, Eyebrow, Title, Description,
  ContactOptions, ContactOption, OptionTitle,
} from "./Contact.styles";

export default function Contact() {
  return (
    <ContactSection id="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <ContactInner>
        <WoodlandDivider />
        <Eyebrow>Custom creations & little conversations</Eyebrow>
        <Title id="contact-title">A little magic, made for you</Title>
        <Description>
          Have a creature in mind? I create custom art dolls and woodland
          companions. Get in touch to share your ideas — I’d love to hear them.
        </Description>
        <ContactOptions aria-label="Contact Sandy">
          <ContactOption
            as={siteLinks.instagram ? "a" : "div"}
            href={siteLinks.instagram || undefined}
            target={siteLinks.instagram ? "_blank" : undefined}
            rel={siteLinks.instagram ? "noopener noreferrer" : undefined}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <OptionTitle>Instagram</OptionTitle>
          </ContactOption>
          <ContactOption
            as={siteLinks.email ? "a" : "div"}
            href={siteLinks.email ? `mailto:${siteLinks.email}` : undefined}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
              <path d="m3.5 6 8.5 7 8.5-7" />
            </svg>
            <OptionTitle>Email</OptionTitle>
          </ContactOption>
        </ContactOptions>
      </ContactInner>
    </ContactSection>
  );
}
