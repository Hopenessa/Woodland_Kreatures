import { useEffect, useState } from "react";
import { GoTopLink } from "./GoTopButton.styles";

export default function GoTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 300);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;
  return (
    <GoTopLink href="#home" aria-label="Back to top" title="Back to top">
      <svg
        width="22"
        height="24"
        viewBox="0 0 24 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m5 12 7-7 7 7M12 5v19"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </GoTopLink>
  );
}
