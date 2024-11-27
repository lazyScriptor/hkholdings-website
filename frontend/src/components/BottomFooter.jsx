import React from "react";

function BottomFooter() {
  return (
    <div className="flex justify-between items-center px-8 md:px-32 bg-brandLightMaroon/90 py-8 text-white text-xs">
      <p className=""> @ 2024 All Rights Reserved</p>
      <div className="flex flex-col md:flex-row-reverse gap-2 md:gap-8">
        <button>Privacy Policy</button>
        <button>Terms of User</button>
        <button>Legal</button>
        <button>Site Map</button>
      </div>
    </div>
  );
}

export default BottomFooter;
