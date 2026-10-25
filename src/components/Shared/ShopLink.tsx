import type { ComponentPropsWithoutRef } from "react";
import { siteLinks } from "../../config/links";

type ShopLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href">;

export default function ShopLink({ children, ...props }: ShopLinkProps) {
  return (
    <a
      {...props}
      href={siteLinks.shop}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
