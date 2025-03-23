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
import { TbBrandLinkedin } from "react-icons/tb";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import OpenDirectionsButton from "./OpenDirectionsButton";
function Footer() {
  const navigate = useNavigate();
  const LinkItems = [
    { id: 1, name: "Home", navigation: "/" },
    { id: 2, name: "About", navigation: "/about" },
    { id: 4, name: "Blog", navigation: "/blog" },
    { id: 5, name: "Contact", navigation: "/contact" },
    { id: 3, name: "Services", navigation: "/services/all" },
  ];
  const SocialButtons = [
    {
      id: 1,
      icon: FiFacebook,
      navigate: "https://www.facebook.com/HKHoldingsPvtLtd/",
    },
    {
      id: 2,
      icon: TbBrandLinkedin,
      navigate: "https://www.linkedin.com/company/hk-holdings2009/about/",
    },
    {
      id: 3,
      icon: PiWhatsappLogoLight,
      navigate: "https://wa.me/+94705123804",
    },
    {
      id: 4,
      icon: PiTiktokLogo,
      navigate: "https://www.tiktok.com/@hkholding?_t=ZS-8uQDMb4esNz&_r=1",
    },
  ];
  return (
    <div className="py-4 bg-brandBlack  relative bg-cover bg-center">
      {/* Overlay with 60% opacity */}
      <div className="absolute inset-0 bg-brandDarkMaroon"></div>

      {/* Content container */}
      <div className="container relative z-10 py-12">
        <div className="grid  grid-cols-1  md:grid-cols-4 text-brandWhite gap-8">
          <div className="flex justify-center" >
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
                  <p
                    onClick={() => navigate(`${item.navigation}`)}
                    className="text-gray-300 hover:text-brandLightMaroon text-xs transition-all duration-200 cursor-pointer "
                  >
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
                  <a href="mailto:theekshana.jny@gmail.com">
                    www.hkholdings.lk
                  </a>
                </p>
              </div>
              <OpenDirectionsButton />
            </div>
          </div>
          <div className="flex justify-start flex-col">
            <div className="flex flex-col gap-4">
              {/* <h3 className="font-bold flex justify-center md:justify-normal ">
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
              </div> */}
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Follow us</h4>
                <div className="flex gap-2">
                  {SocialButtons.map((item) => (
                    <div
                      key={item.id}
                      className="bg-brandWhite hover:bg-transparent duration-200 transition-all cursor-pointer p-2 rounded-full"
                    >
                      <a
                        href={item.navigate}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <item.icon className="text-gray-400 hover:text-brandLightMaroon text-xl transition-all duration-200" />
                      </a>
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
