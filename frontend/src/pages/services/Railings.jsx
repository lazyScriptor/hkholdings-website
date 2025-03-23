import React from "react";
import commonHeroImage from "../../assets/commonheroimage.png";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function Railings() {
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
          <h1 className="text-4xl max-w-[80%] text-center self-center font-semibold">
            Railings - Strength, Safety, and Style
          </h1>
        </div>
      </div>


      <ThirdPart
        title={"Glass Railings – Sleek, Modern, and Safe"}
        description={
          "Enhance your space with elegant glass railings that offer a seamless blend of style and security. Perfect for balconies, staircases, and terraces, our glass railings provide unobstructed views while maintaining durability and strength. Designed with high-quality tempered glass and sturdy metal framing, they ensure safety without compromising aesthetics. Whether for residential or commercial spaces, our glass railings add a touch of sophistication while maximizing openness and natural light.˝"
        }
        image={railingImg1}
      />
      <FourthPart
        title={"Wood & Steel Railings – Strength Meets Timeless Elegance"}
        description={
          "Our wood and steel railings combine the durability of steel with the natural warmth of wood, creating a perfect balance of strength and style. Ideal for staircases, balconies, and outdoor spaces, these railings offer long-lasting performance with a classic, refined look. The steel framework ensures stability and resilience, while the wooden elements add a touch of elegance and warmth. Whether modern or traditional, our wood and steel railings enhance any space with both beauty and security."
        }
        image={railingImg2}
      />

      <div className="h-8 bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}

export default Railings;

const ThirdPart = ({ image, title, description, path, handleNavigation }) => {
  return (
    <>
      <div onClick={() => console.log("first")} className="bg-brandLightMaroon">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-3 flex flex-col py-12 md:pb-20 md:pt-16 items-center md:items-end justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl md:h-16 text-center md:text-right">
              {title}
            </h1>
            <p className="text-center md:text-right">{description}</p>
           
          </div>
          <div className="col-span-2">
            <img
              src={image}
              alt=""
              className="h-[100%] w-[100%] border-b border-b-white  "
            />
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

    </>
  );
};
