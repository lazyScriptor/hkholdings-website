import React from "react";
import bgImage from "../assets/hero4.webp";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { styles } from "../pages/contactus/ContactUsMain";
import { TextField } from "@mui/material";
import { FiFacebook } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
function Footer() {
  const navigate = useNavigate();
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
  const SocialButtons = [
    {
      id: 1,
      icon: FiFacebook,
      navigate: "https://www.facebook.com/HKHoldingsPvtLtd/",
    },
    {
      id: 2,
      icon: CiLocationArrow1,
      navigate: "/",
    },
    {
      id: 3,
      icon: IoLogoInstagram,
      navigate: "/",
    },
    {
      id: 4,
      icon: FaFigma,
      navigate: "/",
    },
  ];
  return (
    <div
      className="py-4 bg-brandBlack  relative bg-cover bg-center" >
      {/* Overlay with 60% opacity */}
      <div className="absolute inset-0 bg-brandDarkMaroon"></div>

      {/* Content container */}
      <div className="container relative z-10 py-12">
        <div className="grid  grid-cols-1  md:grid-cols-4 text-brandWhite gap-8">
          <div className="flex justify-center">
            <img
              onClick={() => navigate("/")}
              className="cursor-pointer w-40 aspect-square  bg-white bg-opacity-55 shadow-2xl rounded-xl"
              src={logo}
              alt=""
            />
          </div>

          <div className="flex justify-center">
            <div>
              <h2 className="font-bold flex justify-center md:justify-normal ">
                LINKS
              </h2>
              <div className="flex flex-col gap-2 py-4 items-center md:items-start">
                {LinkItems.map((item, index) => (
                  <p className="text-gray-300 hover:text-brandLightMaroon text-xs transition-all duration-200 cursor-pointer uppercase">
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
                <p className="text-gray-400  text-xs transition-all duration-200 cursor-pointer">
                  <a
                    className="hover:text-brandLightMaroon"
                    href="tel:0716195913"
                  >
                    071 6195913
                  </a>{" "}
                  /{" "}
                  <a
                    className="hover:text-brandLightMaroon"
                    href="tel:0113425370"
                  >
                    011 3425370
                  </a>
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
                  No. 86/A 1/1, Elapitiwala, Ragama
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start flex-col">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold flex justify-center md:justify-normal ">
                Subscribe To Newsletter
              </h3>
              <div className="flex gap-4 justify-center items-center">
                <TextField
                  fullWidth
                  sx={styles}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
                <button className=" px-8 py-3 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg">
                  SEND
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Follow us</h4>
                <div className="flex gap-2">
                  {SocialButtons.map((item) => (
                    <div
                      key={item.id}
                      className="bg-brandWhite hover:bg-transparent duration-200 transition-all cursor-pointer p-2 rounded-full"
                      onClick={() => navigate(item.navigate)}
                    >
                
                      <item.icon className="text-gray-400 hover:text-brandLightMaroon text-xl transition-all duration-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
