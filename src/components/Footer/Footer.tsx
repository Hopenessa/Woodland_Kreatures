import Moon from "../Shared/Moon";
import { FooterSection, FooterBrand, Copyright } from "./Footer.styles";
export default function Footer() {
  return (
    <FooterSection>
      <Moon size={23} />
      <FooterBrand href="#home">Woodland Kreatures</FooterBrand>
      <Copyright>© {new Date().getFullYear()} Sandy Darling</Copyright>
    </FooterSection>
  );
}
