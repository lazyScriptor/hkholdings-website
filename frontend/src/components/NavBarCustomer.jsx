import React from "react";
import heroImg from "../assets/hero.jpg";
import { LuPhoneCall } from "react-icons/lu";
import logo from "../assets/logo.webp";
import MobileNavigation from "./MobileNavigation";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NavBarCustomer({ children, number }) {
  const navigate =useNavigate();
  const navBarComponents = [
    { id: 1, name: "Home", navigate: "/" },
    { id: 2, name: "About", navigate: "/about" },
    { id: 4, name: "Blog", navigate: "/blog" },
    { id: 5, name: "Contact", navigate: "/contact" },
  ];
  const subnavigations = [
    { id: 6, name: "Railings", navigate: "/railings" },
    {
      id: 7,
      name: "Warehouse Construction",
      navigate: "/warehouse-construction",
    },
    { id: 8, name: "Wood Decking", navigate: "/wood-decking" },
    { id: 9, name: "StairCases", navigate: "/staircases" },
    { id: 10, name: "Canopies", navigate: "/canopies" },
    { id: 11, name: "Gates", navigate: "/gates" },
    { id: 12, name: "Roofing", navigate: "/roofing" },
    { id: 12, name: "Fences and Grills", navigate: "/fences-and-grills" },
  ];
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed  top-0 left-0 w-full text-white z-50 max-w-full bg-gradient-to-b from-brandBlack to-black/1">
        <MobileNavigation />
        <div className="container flex items-center  gap-12 h-16">
          {/* Left: Logo */}
          <div className="text-xl hidden md:flex font-bold">
            <a href="/" className="hover:text-brandLightMaroon duration-200">
              <img src={logo} className="w-12" alt="" />
            </a>
          </div>

          {/* Center: Navigation Links */}
          <ul className="hidden md:flex gap-8">
            {navBarComponents.map((component) => (
              <li
                className={`${
                  component.id == number ? "text-brandLightMaroon" : ""
                } hover:text-brandLightMaroon duration-200 transition-all`}
                key={component.id}
              >
                <a href={component.navigate}>{component.name}</a>
              </li>
            ))}
          </ul>

          <li className="group relative cursor-pointer flex">
            {/* services word and drop arrow */}
            <div className=" items-center hidden md:flex gap-[2px] justify-center dark:hover:text-white ">
              <span className="truncate cursor-pointer" onClick={()=>navigate('/services/all')} >Services</span>
              <span>
                <MdOutlineArrowDropDown className="group-hover:rotate-180 duration-300" />
              </span>
            </div>
            {/* Drop down links */}
            <div className="absolute mt-6 z-[9999] transition-all duration-200 hidden group-hover:block w-[210px] rounded-md bg-white/90 shadow-lg dark:bg-gray-900 p-2 text-white ">
              <ul className="space-y-2">
                <li className="h-4" />
                {subnavigations &&
                  subnavigations.map((item, index) => (
                    <a href={`/services/all${item.navigate}`} className="cursor-pointer">
                      <li
                        key={index}
                        className="text-gray-500 truncate hover:text-brandLightMaroon dark:hover:text-white transition-all duration-200 cursor-pointer hover:bg-brandLightMaroon/20 p-1 rounded"
                      >
                        {item.name}
                      </li>
                    </a>
                  ))}
              </ul>
            </div>
          </li>

          {/* Right: Button (absolute positioning) */}
          <div className="hidden md:block absolute group top-2 right-4">
            <a href="tel:+94705123804">
              <button className="flex rounded-full w-[200px] h-10  text-white hover:text-brandWhite items-center gap-2 border border-green-800 hover:bg-green-600 hover:rounded-full font-bold py-2 px-8 duration-700 transition-all overflow-hidden">
                {/* Icon */}
                <LuPhoneCall className=" group-hover:text-green-100 transition-all duration-300 " />
                {/* Text */}
                <p className="group-hover:text-green-20 group-hover:border-0 transition-all duration-400 ">
                070 5123 804
                </p>
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}

export default NavBarCustomer;
