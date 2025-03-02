import React from "react";

import commonHeroImage from "../../assets/commonheroimage.png";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import services4 from "../../assets/services4.png";
import services5 from "../../assets/services5.png";
import services6 from "../../assets/services6.png";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";

function ServicesMain() {
  return (
    <>
      <div className="relative w-screen">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="max-w-[60%] text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p>
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>

      <SecondPart />
      <div className="bg-[#241C1A]">
        <div className="container py-12">
          <h1 className="text-4xl font-semibold flex items-center justify-center gap-4 text-brandWhite py-12">
            ALL SERVICES
          </h1>
          <ThirdPart image={services1} />
          <FourthPart image={services2} />

          <ThirdPart image={services3} />
          <FourthPart image={services4} />

          <ThirdPart image={services5} />
          <FourthPart image={services6} />
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}

export default ServicesMain;

const SecondPart = () => {
  return (
    <>
      <div className="container py-20 flex flex-col justify-center items-center gap-16">
        <h1 className="uppercase text-4xl font-semibold text-center md:text-start">
          WHO WE ARE?
        </h1>
        <p className="text-center  md:max-w-[80%]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Urna tincidunt
          lectus mi porttitor rutrum habitasse. Interdum pharetra mi, et platea
          lobortis ex sapien. Eros eros nisl neque porttitor primis elit
          maecenas. Viverra quam luctus phasellus class ipsum duis elit vehicula
          nascetur.{" "}
        </p>
      </div>
    </>
  );
};
// const SecondPart = () => {
//   return (
//     <div className="py-12 container">
//       <div className="flex justify-center items-center flex-col gap-4">
//         <h1 className="text-4xl font-semibold">WHO WE ARE?</h1>
//         <p>

//         </p>
//       </div>
//     </div>
//   );
// };
const ThirdPart = ({ image }) => {
  return (
    <>
      <div className="bg-brandLightMaroon">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 flex flex-col py-12 md:pb-0 md:pt-16 items-center md:items-end justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl font-semibold ">
              CUSTOM <span className="font-extralight">WELDING</span>
            </h1>
            <p className="text-center md:text-right">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Urna
              tincidunt lectus mi porttitor rutrum habitasse. Interdum pharetra
              mi, et platea lobortis ex sapien. Eros eros nisl neque porttitor
              primis elit maecenas. Viverra quam luctus phasellus class ipsum
              duis elit vehicula nascetur.
            </p>
          </div>
          <div className="col-span-2">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="h-8" />
    </>
  );
};

const FourthPart = ({ image }) => {
  return (
    <>
      <div className="bg-[#40342F]">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <img src={image} alt="" />
          </div>
          <div className="col-span-3 flex flex-col py-12 md:pb-0 md:pt-16 items-center md:items-start justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl font-semibold ">
              METAL <span className="font-extralight">WORKS</span>
            </h1>
            <p className="text-center md:text-start">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Urna
              tincidunt lectus mi porttitor rutrum habitasse. Interdum pharetra
              mi, et platea lobortis ex sapien. Eros eros nisl neque porttitor
              primis elit maecenas. Viverra quam luctus phasellus class ipsum
              duis elit vehicula nascetur.
            </p>
          </div>
        </div>
      </div>
      <div className="h-8" />
    </>
  );
};
