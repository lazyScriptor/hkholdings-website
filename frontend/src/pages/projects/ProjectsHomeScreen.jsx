import React, { lazy } from "react";
import image1 from "../../assets/about1.png";
import image2 from "../../assets/about2.png";
import productsImage from "../../assets/ourproducts.png";

import { useNavigate } from "react-router-dom";

function ProjectsHomeScreen() {
  const navigate=useNavigate()
  return (
    <div className="container py-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* image section */}
          <div className="flex  md:col-span-2  justify-center ">
            <div className="flex items-start">
              <img src={productsImage} alt="" loading={lazy} className=""/>
            </div>
          </div>
          {/* text section */}
          <div className="md:col-span-3  flex flex-col gap-8">
            <h1 className="text-brandLightMaroon capitalize text-2xl font-semibold">our Products</h1>
            <div>
              <h2 className="text-brandDarkMaroon text-2xl">
                RECENTLY COMPLETED
              </h2>
              <h3 className="font-semibold text-4xl">OUR LATEST PROJECTS</h3>
            </div>
            <p className="text-md text-gray-400">
              There are many variations of passages about of loram ipsum
              avalabie, but the majority have suffered alteration free in some
              form, by injected humour, or tree randomised words which don't
              lock even.
            </p>
            {/* <div className="px-8 py-4 bg-[#FEF6EB] text-gray-400">
              <p className="uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div> */}
            <button onClick={()=>navigate('/services/all')} className=" px-4 self-center md:self-auto py-2 w-44 rounded-lg bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white shadow-lg">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsHomeScreen;
