import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

const OpenDirectionsButton = () => {
  const handleOpenDirections = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/a4dMS5ZZBCQvAFZH9`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div
      className="flex justify-center items-center gap-2 text-xs group"
      onClick={handleOpenDirections}
    >
      <MdOutlineLocationOn className="text-gray-400 group-hover:text-brandLightMaroon transition-all duration-200" />
      <p className="text-gray-400 group-hover:text-brandLightMaroon text-xs transition-all duration-200 cursor-pointer">
        No. 86/A 1/1, Elapitiwala, Ragama
      </p>
    </div>
  );
};

export default OpenDirectionsButton;
