import React, { lazy } from "react";
import image1 from "../../assets/about1.png";
import image2 from "../../assets/about2.png";
import { useNavigate } from "react-router-dom";
function AboutusStrip() {
  const navigate = useNavigate(); 
  const handleAboutClick = () => {
    navigate("/about");
  };
  return (
    <div className="container py-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* image section */}
          <div className="flex  md:col-span-2  justify-center gap-1 ">
            <div className="flex items-start">
              <img
                src={image1}
                alt=""
                loading={lazy}
                className="w-36 shadow-2xl rounded-2xl"
              />
            </div>
            <div className="flex items-end">
              <img
                src={image2}
                alt=""
                loading={lazy}
                className="w-36 shadow-2xl rounded-2xl"
              />
            </div>
          </div>
          {/* text section */}
          <div className="md:col-span-3  flex flex-col gap-8">
            <h1 className="text-brandLightMaroon">About us</h1>
            <div>
              <h2 className="text-brandDarkMaroon text-2xl">
                PROJECT WITH EXPERT & METAL
              </h2>
              <h3 className="font-semibold text-4xl">WELDING COLLABORATION</h3>
            </div>
            <p className="text-md text-gray-400">
              {" "}
              There are many variations of passages about of loram ipsum
              avalabie, but the majority have suffered alteration free in some
              form, by injected humour, or tree randomised words which don't
              lock even{" "}
            </p>
            <div className="px-8 py-4 bg-[#FEF6EB] text-gray-400">
              <p className="uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
            <button
              onClick={handleAboutClick}
              className="mt-6 px-4 self-center md:self-auto py-2 w-44 rounded-lg bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white shadow-lg"
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusStrip;
