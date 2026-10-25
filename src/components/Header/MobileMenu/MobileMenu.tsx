import { useEffect, useRef, useState, type ReactNode } from "react";
import Moon from "../../Shared/Moon";
import {
  MobileBar,
  MobileBrand,
  MenuButton,
  MenuDialog,
  DialogTop,
  DialogTitle,
  MenuContent,
} from "./MobileMenu.styles";

export default function MobileMenu({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY > 30);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <MobileBar $solid={scrolled}>
        <MobileBrand href="#home" aria-label="Woodland Kreatures, home">
          <Moon size={20} />
          <span>Woodland Kreatures</span>
        </MobileBrand>
        <MenuButton
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-haspopup="dialog"
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 4h21M2 11h21M2 18h21"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </MenuButton>
      </MobileBar>
      <MenuDialog
        ref={dialog}
        id="mobile-navigation"
        aria-labelledby="mobile-menu-title"
        onClose={() => setOpen(false)}
      >
        <DialogTop>
          <DialogTitle id="mobile-menu-title">
            <Moon size={23} />
            Woodland Kreatures
          </DialogTitle>
          <MenuButton
            type="button"
            aria-label="Close navigation"
            onClick={() => dialog.current?.close()}
            autoFocus
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m5 5 14 14M19 5 5 19"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </MenuButton>
        </DialogTop>
        <MenuContent
          onClick={(event) => {
            const link = (event.target as Element).closest("a[href]");
            if (!link) return;
            dialog.current?.close();
            const href = link.getAttribute("href");
            if (href?.startsWith("#")) {
              const section = document.getElementById(href.slice(1));
              if (section) {
                section.setAttribute("tabindex", "-1");
                section.focus({ preventScroll: true });
              }
            }
          }}
        >
          {children}
        </MenuContent>
      </MenuDialog>
    </>
  );
}
