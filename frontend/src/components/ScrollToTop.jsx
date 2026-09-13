import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { prefersReducedMotion } from "../hooks/useInView";

/**
 * Resets scroll position on route change — without this, navigating to a new
 * page keeps the previous page's scroll offset.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [pathname]);

  return null;
}
