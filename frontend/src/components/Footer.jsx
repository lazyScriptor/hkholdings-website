import React from "react";
import bgImage from "../assets/hero4.webp";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "../assets/logo.webp";
function Footer() {
  const LinkItems = [
    { id: 1, name: "About us", navigation: "/about-us" },
    {
      id: 2,
      name: "Meet the team",
      navigation: "/meet-the-team",
    },
    {
      id: 3,
      name: "Latest news",
      navigation: "/latest-news",
    },
    {
      id: 2,
      name: "Our projects",
      navigation: "/our-projects",
    },
    {
      id: 2,
      name: "Contact us",
      navigation: "/contact-us",
    },
  ];
  return (
    <div
      className="py-4 bg-brandBlack mt-1.5 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`, // Replace with your image path
      }}
    >
      {/* Overlay with 60% opacity */}
      <div className="absolute inset-0 bg-brandLightMaroon/30"></div>

      {/* Content container */}
      <div className="container relative z-10 py-12">
        <div className="grid  grid-cols-1  md:grid-cols-3 text-brandWhite gap-8">
          <div className="flex justify-center">
            <img className="w-40 aspect-square" src={logo} alt="" />
          </div>
          <div className="flex justify-center">
            <div>
              <h2 className="font-bold flex justify-center md:justify-normal ">LINKS</h2>
              <div className="flex flex-col gap-2 py-4 items-center md:items-start">
                {LinkItems.map((item, index) => (
                  <p className="text-gray-400 hover:text-brandLightMaroon text-xs transition-all duration-200 cursor-pointer">
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="flex justify-center md:justify-normal font-bold">
              CONTACT
            </h2>
            <div className="flex flex-col gap-2 py-4 items-center md:items-start">
              <div className="flex justify-center items-center gap-2 text-xs group">
                <BiSolidPhoneCall className="text-gray-400 group-hover:text-brandLightMaroon transition-all duration-200" />
                <p className="text-gray-400 group-hover:text-brandLightMaroon text-xs transition-all duration-200 cursor-pointer">
                  0705123804 / 0716795913
                </p>
              </div>

              <div className="flex justify-center items-center gap-2 text-xs  group">
                <CiGlobe className="text-gray-400 group-hover:text-brandLightMaroon transition-all duration-200" />
                <p className="text-gray-400 group-hover:text-brandLightMaroon text-xs transition-all duration-200 cursor-pointer">
                  www.hkholdings.lk
                </p>
              </div>

              <div className="flex justify-center items-center gap-2 text-xs group">
                <MdOutlineLocationOn className="text-gray-400 group-hover:text-brandLightMaroon transition-all duration-200" />
                <p className="text-gray-400 group-hover:text-brandLightMaroon text-xs transition-all duration-200 cursor-pointer">
                  Elpitiwala, Ragama
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
