import React from "react";
import Reveal from "./Reveal";

/**
 * Alternating image / copy band used by the service detail pages.
 *
 * Each service page previously declared its own near-identical `ThirdPart`
 * and `FourthPart` components; this replaces both via the `reverse` prop.
 */
export default function FeatureSplit({
  title,
  description,
  image,
  reverse = false,
  tone = "gold",
}) {
  const isGold = tone === "gold";

  return (
    <section
      className={`overflow-hidden ${isGold ? "bg-gold-500" : "bg-ink-700"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Image */}
        <Reveal
          variant={reverse ? "left" : "right"}
          className={`lg:col-span-2 ${reverse ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="h-64 w-full overflow-hidden sm:h-80 lg:h-full lg:min-h-[26rem]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-900 ease-out-expo hover:scale-105"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div
          className={`flex flex-col justify-center gap-5 px-6 py-14 text-white sm:px-10 lg:col-span-3 lg:px-16 lg:py-20 ${
            reverse ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"
          } text-center`}
        >
          <Reveal variant="up">
            <h2 className="font-display text-fluid-h3 font-bold text-white text-balance">
              {title}
            </h2>
          </Reveal>
          <Reveal
            variant="up"
            delay={120}
            className="text-fluid-body leading-relaxed text-white/85 text-pretty"
          >
            {description}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
