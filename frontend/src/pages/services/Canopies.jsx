import React from "react";
import commonHeroImage from "../../assets/commonheroimage.png";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function Canopies() {
  return (
    <>
      <div className=" relative">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold max-w-[80%] text-center">Glass & Polycarbonate Canopies </h1>
        </div>
      </div>

      <ThirdPart
        title={"Canopies - Stylish & Functional Protection"}
        description={
          "Enhance your outdoor space with our durable and stylish canopies, designed to provide shade, protection, and aesthetic appeal. Whether for residential, commercial, or industrial use, our canopies are built with high-quality materials to withstand harsh weather conditions while complementing your property's design."
        }
        image={railingImg1}
      />

      <Footer />
      <BottomFooter />
    </>
  );
}

export default Canopies;

const ThirdPart = ({ image, title, description, path, handleNavigation }) => {
  return (
    <>
      <div
        onClick={() => console.log("first")}
        className="bg-brandLightMaroon "
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-3 flex flex-col py-12 md:pb-20 md:pt-16 items-center md:items-end justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl md:h-16 text-center md:text-right">
              {title}
            </h1>
            <p className="text-center md:text-right">{description}</p>
         
          </div>
          <div className="col-span-2">
            <img src={image} alt="" className="h-[100%] w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

const FourthPart = ({ image, title, description, path, handleNavigation }) => {
  return (
    <>
      <div className="bg-[#40342F]">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-2">
            <img
              src={image}
              alt=""
              className="h-[100%] w-[100%]   overflow-x-hidden"
            />
          </div>
          <div className="col-span-3 flex flex-col py-12 md:pb-20 md:pt-16 items-center md:items-start justify-start  gap-8 container border-b-white border-b text-brandWhite">
            <h1 className="text-4xl md:h-16  text-center md:text-left">
              {title}
            </h1>
            <p className="text-center md:text-start">{description}</p>
            
          </div>
        </div>
      </div>
      <div className="h-8 " />
    </>
  );
};
