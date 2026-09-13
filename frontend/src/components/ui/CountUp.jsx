import React, { useEffect, useRef, useState } from "react";
import useInView, { prefersReducedMotion } from "../../hooks/useInView";

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts from 0 up to `end` when it scrolls into view.
 * Animation is skipped (final value rendered immediately) for reduced motion.
 */
export default function CountUp({
  end = 0,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion()) {
      setValue(end);
      return;
    }

    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * end));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
