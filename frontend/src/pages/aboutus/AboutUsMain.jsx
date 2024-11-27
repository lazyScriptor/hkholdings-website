import React from "react";
import aboutUsHero from "../../assets/aboutheronew.png";
import aboutUsImage from "../../assets/aboutUsImage.png";
import { RiSettingsFill } from "react-icons/ri";
function AboutUsMain() {
  return (
    <>
      <div
        className="py-12 h-[50vh] flex gap-4 flex-col text-brandWhite justify-center items-center"
        style={{
          backgroundImage: `url(${aboutUsHero})`,
        }}
      >
        <h1 className=" text-4xl font-semibold">ABOUT US</h1>
        <p className="max-w-[60%] text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
        </p>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>
      <SecondPart />
    </>
  );
}

export default AboutUsMain;

const SecondPart = () => {
  return (
    <>
      <div className="container pt-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <img src={aboutUsImage} alt="aboutusImage" />
          </div>
          <div className="md:col-span-3 flex flex-col gap-8 pt-8">
            <h1 className="uppercase text-4xl font-semibold text-center md:text-start">WHO WE ARE?</h1>
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
