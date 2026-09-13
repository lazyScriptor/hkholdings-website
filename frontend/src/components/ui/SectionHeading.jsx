import React from "react";
import Reveal from "./Reveal";

/**
 * Consistent section header: eyebrow → lead line → headline → optional copy.
 *
 * `tone="light"` for use on dark/photographic backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  lead,
  title,
  children,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-white" : "text-ink-900";
  const leadColor = tone === "light" ? "text-white/70" : "text-ink-700";
  const bodyColor = tone === "light" ? "text-white/70" : "text-ink-500";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal variant="fade" as="span" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}

      <Reveal variant="up" delay={80}>
        {lead && (
          <h2
            className={`text-lg font-medium uppercase tracking-wide md:text-xl ${leadColor}`}
          >
            {lead}
          </h2>
        )}
        {title && (
          <p
            className={`font-display text-fluid-h2 font-bold uppercase text-balance ${titleColor}`}
          >
            {title}
          </p>
        )}
      </Reveal>

      {children && (
        <Reveal
          variant="up"
          delay={160}
          className={`max-w-2xl text-fluid-body ${bodyColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {children}
        </Reveal>
      )}
    </div>
  );
}
