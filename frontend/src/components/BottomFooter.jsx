import React from "react";

function BottomFooter() {
  return (
    <div className="flex justify-between px-32 bg-brandLightMaroon/90 py-8 text-gray-300 text-xs">
      <p> @ 2024 All Rights Reserved</p>
      <div className="flex gap-8">
        <button>Privacy Policy</button>
        <button>Terms of User</button>
        <button>Legal</button>
        <button>Site Map</button>
      </div>
    </div>
  );
}

export default BottomFooter;
