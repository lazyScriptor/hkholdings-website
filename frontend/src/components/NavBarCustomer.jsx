import React from "react";
import heroImg from "../assets/hero.jpg";
import { LuPhoneCall } from "react-icons/lu";
import logo from "../assets/logo.webp";
import MobileNavigation from "./MobileNavigation";
function NavBarCustomer({ children, number }) {
  const navBarComponents = [
    { id: 1, name: "Home", navigate: "/" },
    { id: 2, name: "About", navigate: "/about" },
    { id: 3, name: "Services", navigate: "/services" },
    { id: 4, name: "Blog", navigate: "/blog" },
    { id: 5, name: "Contact", navigate: "/contact" },
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

          {/* Right: Button (absolute positioning) */}
          <div className="hidden md:block absolute group top-2 right-4">
            <a href="tel:0778408764">
              <button className="flex rounded-full w-[200px] hover:w-[100px] text-white hover:text-brandWhite items-center gap-2 bg-green-800 hover:bg-green-600 hover:rounded-full font-bold py-2 px-8 duration-700 transition-all overflow-hidden">
                {/* Icon */}
                <LuPhoneCall className="transition-all duration-300 group-hover:translate-x-0 group-hover:mx-auto" />
                {/* Text */}
                <p className=" group-hover:w-0 group-hover:opacity-0 transition-all duration-400 whitespace-nowrap">
                  0705123804
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
