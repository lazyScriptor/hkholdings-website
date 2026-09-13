import React from "react";
import useInView from "../../hooks/useInView";

const VARIANTS = {
  up: "animate-fade-up",
  down: "animate-fade-down",
  left: "animate-slide-in-left",
  right: "animate-slide-in-right",
  zoom: "animate-zoom-in",
  fade: "animate-fade-in",
};

/**
 * Reveals its children with a scroll-triggered animation.
 *
 * Motion-safe by design: when the user prefers reduced motion `useInView`
 * reports visible immediately, so content simply appears.
 *
 * <Reveal variant="up" delay={120}>…</Reveal>
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const [ref, inView] = useInView({ threshold, once });
  const animation = VARIANTS[variant] || VARIANTS.up;

  return (
    <Tag
      ref={ref}
      className={`${inView ? animation : "opacity-0"} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
