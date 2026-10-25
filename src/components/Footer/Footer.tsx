import { useState } from "react";
import ShopLink from "../Shared/ShopLink";
import Moon from "../Shared/Moon";
import {
  FooterSection,
  FooterBrand,
  FooterLinks,
  Notice,
} from "./Footer.styles";
export default function Footer() {
  const [notice, setNotice] = useState("");
  return (
    <FooterSection>
      <Moon size={27} />
      <FooterBrand href="#home">Woodland Kreatures</FooterBrand>
      <FooterLinks aria-label="Footer navigation">
        <button
          type="button"
          onClick={() =>
            setNotice("The artist’s Instagram link will be added soon.")
          }
        >
          Instagram
        </button>
        <button
          type="button"
          onClick={() =>
            setNotice(
              "Contact details will be added when the portfolio is ready.",
            )
          }
        >
          Contact
        </button>
        <ShopLink>Shop</ShopLink>
      </FooterLinks>
      {notice && <Notice role="status">{notice}</Notice>}
    </FooterSection>
  );
}
