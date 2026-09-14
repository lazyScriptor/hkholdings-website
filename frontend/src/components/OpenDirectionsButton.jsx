import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

/**
 * Address row in the footer. Styled to line up with the phone and website
 * rows above it (same alignment, gap, icon size and colours) so the three
 * contact icons sit on one left edge.
 */
const OpenDirectionsButton = () => {
  const handleOpenDirections = () => {
    window.open("https://maps.app.goo.gl/a4dMS5ZZBCQvAFZH9", "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleOpenDirections}
      aria-label="Open directions to HK Holdings"
      className="group flex items-start justify-center gap-2 text-left sm:justify-start"
    >
      <MdOutlineLocationOn className="mt-0.5 shrink-0 text-white/40 transition-colors duration-200 group-hover:text-gold-400" />
      <span className="text-xs text-white/60 transition-colors duration-200 group-hover:text-gold-400">
        No. 86/A 1/1, Elapitiwala, Ragama
      </span>
    </button>
  );
};

export default OpenDirectionsButton;
