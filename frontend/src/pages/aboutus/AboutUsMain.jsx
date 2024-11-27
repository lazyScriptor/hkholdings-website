import React from "react";
import commonHeroImage from "../../assets/commonheroimage.png";

import aboutUsImage from "../../assets/aboutUsImage.png";
import aboutusvisionImage from "../../assets/aboutusvision.png";
import aboutusmissionimage from "../../assets/aboutusmissionimage.png";
import aboutuscharacters from "../../assets/aboutuscharacters.png";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import { RiSettingsFill } from "react-icons/ri";
function AboutUsMain() {
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
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="max-w-[60%] text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p>
        </div>
      </div>


      <div className="h-8 bg-brandLightMaroon"></div>
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <div className="h-8 bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}

export default AboutUsMain;

const SecondPart = () => {
  return (
    <>
      <div className="container pt-12 pb-12 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <img src={aboutUsImage} alt="aboutusImage" />
          </div>
          <div className="md:col-span-3 flex flex-col gap-8 pt-8">
            <h1 className="uppercase text-4xl font-semibold text-center md:text-start">
              WHO WE ARE?
            </h1>
            <p className="">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Urna
              tincidunt lectus mi porttitor rutrum habitasse. Interdum pharetra
              mi, et platea lobortis ex sapien. Eros eros nisl neque porttitor
              primis elit maecenas. Viverra quam luctus phasellus class ipsum
              duis elit vehicula nascetur.{" "}
            </p>
            <div className="flex items-start flex-col gap-4">
              <div className="flex">
                <RiSettingsFill className="text-4xl font-semibold flex items-start w-24" />
                <h2 className="text-xl font-semibold self-center">
                  Innovation at Every Step
                </h2>
              </div>
              <div>
                <div className="flex">
                  <RiSettingsFill className="text-5xl font-semibold flex items-start text-transparent w-28" />
                  <p>
                    We leverage cutting-edge technology to bring you the most
                    reliable solutions.We leverage cutting-edge technology We
                    leverage cutting-edge technology to bring you the most
                    reliable solutions.We leverage cutting-edge technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ThirdPart = () => {
  return (
    <>
      <div className="bg-brandLightMaroon">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 flex flex-col py-12 md:pb-0 md:pt-20 items-center md:items-end justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl font-semibold ">Vision:</h1>
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
      <div className="bg-brandDarkMaroon">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <img src={aboutusmissionimage} alt="" />
          </div>
          <div className="col-span-3 flex flex-col py-12 md:pb-0 md:pt-20 items-center md:items-start justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl font-semibold ">Mission:</h1>
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
const FifthPart = () => {
  return (
    <>
      <div className="container py-12">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="text-4xl font-semibold uppercase text-center">
            OUR TEAM
          </h1>
          <p className="text-center w-[80%]">
            There are many variations of passages about of loram ipsum avalabie,
            but the majority have suffered alteration free in some form, by
            injected humour, or tree randomised words which don't lock even
          </p>
          <img src={aboutuscharacters} className="py-4" alt="" />
        </div>
      </div>
    </>
  );
};
