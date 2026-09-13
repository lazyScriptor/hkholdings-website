import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { prefersReducedMotion } from "../../hooks/useInView";

/** Floating "back to top" button that fades in once the user scrolls. */
export default function BackToTop({ threshold = 500 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        })
      }
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-white
                  shadow-gold transition-all duration-500 ease-out-expo hover:bg-gold-600
                  ${
                    show
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
    >
      <HiArrowUp className="text-xl" />
    </button>
  );
}
