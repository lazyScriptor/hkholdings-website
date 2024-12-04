import React from "react";
import { useNavigate } from "react-router-dom";

function MainScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid md:grid-cols-2 h-screen">
        <div
          onClick={() => navigate("/admin-blogs")}
          className="flex items-center justify-center bg-brandLightMaroon hover:bg-opacity-90 cursor-pointer text-brandWhite
        text-7xl transition-all duration-700 hover:text-brandBlack relative p-4"
        >
          <div
            className="absolute top-2 right-2 p-2 aspect-square bg-brandDarkMaroon/90 hover:text-green-500 w-20 flex justify-center items-center rounded-lg
          "
          >
            5
          </div>
          Blogs
        </div>
        <div
          onClick={() => navigate("/admin-inquiries")}
          className="flex relative items-center justify-center bg-brandDarkMaroon  hover:bg-opacity-90 cursor-pointer text-brandWhite
        text-7xl transition-all duration-700  hover:text-brandLightMaroon"
        >
          <div
            className="absolute top-2 right-2 p-2 aspect-square bg-brandLightMaroon/90 hover:text-green-500 w-20 flex justify-center items-center rounded-lg
          "
          >
            5
          </div>
          Inquiries
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
