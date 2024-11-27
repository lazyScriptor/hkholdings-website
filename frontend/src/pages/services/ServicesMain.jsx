import React from "react";
import aboutUsHero from "../../assets/aboutheronew.png";
import aboutUsImage from "../../assets/aboutUsImage.png";
import aboutusvisionImage from "../../assets/aboutusvision.png";
import aboutusmissionimage from "../../assets/aboutusmissionimage.png";
import aboutuscharacters from "../../assets/aboutuscharacters.png";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import { RiSettingsFill } from "react-icons/ri";
function ServicesMain() {
  return (
    <>
      <div
        className="py-12 h-[50vh] flex gap-4 flex-col text-brandWhite justify-center items-center"
        style={{
          backgroundImage: `url(${aboutUsHero})`,
        }}
      >
        <h1 className=" text-4xl font-semibold">Services</h1>
        <p className="max-w-[60%] text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
        </p>
      </div>
      {/* <SecondPart /> */}
      <div className="bg-[#241C1A]">
        <div className="container py-12">
          <h1 className="text-4xl font-semibold flex items-center justify-center gap-4 text-brandWhite py-12">
            ALL SERVICES
          </h1>
          <ThirdPart />
          <FourthPart />
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}

export default ServicesMain;

// const SecondPart = () => {
//   return (
//     <>
//       <div className="container pt-12 pb-12 flex flex-col justify-center items-center gap-8">
//         <h1 className="uppercase text-4xl font-semibold text-center md:text-start">
//           WHO WE ARE?
//         </h1>
//         <p className="text-center  ">
//           Lorem ipsum odor amet, consectetuer adipiscing elit. Urna tincidunt
//           lectus mi porttitor rutrum habitasse. Interdum pharetra mi, et platea
//           lobortis ex sapien. Eros eros nisl neque porttitor primis elit
//           maecenas. Viverra quam luctus phasellus class ipsum duis elit vehicula
//           nascetur.{" "}
//         </p>
//       </div>
//     </>
//   );
// };

const ThirdPart = () => {
  return (
    <>
      <div className="bg-brandLightMaroon">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 flex flex-col py-12 md:pb-0 md:pt-20 items-center md:items-end justify-start  gap-8 container text-brandWhite">
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
            <img src={aboutusvisionImage} alt="" />
          </div>
        </div>
      </div>
      <div className="h-8" />
    </>
  );
};

const FourthPart = () => {
  return (
    <>
      <div className="bg-[#40342F]">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <img src={aboutusmissionimage} alt="" />
          </div>
          <div className="col-span-3 flex flex-col py-12 md:pb-0 md:pt-20 items-center md:items-start justify-start  gap-8 container text-brandWhite">
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
