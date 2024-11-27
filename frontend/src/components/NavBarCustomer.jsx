import React from "react";
import heroImg from "../assets/hero.jpg";
import { LuPhoneCall } from "react-icons/lu";
import logo from "../assets/logo.webp";
import MobileNavigation from "./MobileNavigation";
function NavBarCustomer({ children ,number}) {
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



      <nav className="fixed top-0 left-0 w-full text-white z-50 max-w-full bg-gradient-to-b from-brandBlack to-black/1">
        <div className="container flex items-center  gap-12 h-16">
        <MobileNavigation/>
          {/* Left: Logo */}
          <div className="text-xl font-bold">
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
          <div className="hidden md:block absolute top-2 right-4">
            <button className="flex text-brandBlack hover:text-brandWhite justify-center items-center gap-2 bg-brandLightMaroon hover:bg-brandDarkMaroon font-bold py-2 px-8 duration-200 transition-all">
              <LuPhoneCall />
              0705123804 / 0716795913
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}

export default NavBarCustomer;
