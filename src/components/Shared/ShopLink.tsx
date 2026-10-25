import type { ComponentPropsWithoutRef } from "react";
import { siteLinks } from "../../config/links";

type ShopLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href">;

export default function ShopLink({ children, ...props }: ShopLinkProps) {
  return (
    <a
      {...props}
      href={siteLinks.shop}
      aria-disabled={!siteLinks.shop || undefined}
    >
      {children}
    </a>
  );
}
