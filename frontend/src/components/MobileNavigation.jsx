import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../assets/logo.webp";

function MobileNavigation() {
  const [pressStatus, setPressStatus] = useState(false);

  const navBarComponents = [
    { id: 1, name: "Home", navigate: "/" },
    { id: 2, name: "About", navigate: "/about" },
    { id: 3, name: "Services", navigate: "/services/all" },
    { id: 4, name: "Blog", navigate: "/blog" },
    { id: 5, name: "Contact", navigate: "/contact" },
  ];

  const handleClick = () => {
    setPressStatus(!pressStatus);
  };

  return (
    <div className="md:hidden flex absolute top-2 left-2 text-white">
      
  

      {/* Menu Button Area */}
      <div
        onClick={handleClick}
        className="absolute cursor-pointer flex items-center justify-center bg-brandMaroon rounded-full"
      >
        <AiOutlineMenuUnfold
          className={`${
            pressStatus ? "rotate-90" : "rotate-0"
          } text-3xl transition-transform duration-700`}
        />
      
      </div>
    
    
      {/* Dropdown Menu */}
      <div
        className={`${
          pressStatus ? "w-[80vw] h-auto" : "w-0 h-0"
        } duration-500 transition-all bg-black bg-opacity-60 py-12 rounded-r-xl overflow-hidden absolute top-10`}
      >
            <div className="text-xl pl-2 font-bold">
            <a href="/" className="hover:text-brandLightMaroon duration-200">
              <img src={logo} className="w-12" alt="" />
            </a>
          </div>
        <ul className="flex flex-col gap-2 p-4 rounded-lg">
          {navBarComponents.map((component) => (
            <li
              className="hover:text-black bg-brandLightMaroon p-4 rounded-lg"
              key={component.id}
            >
              <a href={component.navigate}>{component.name}</a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default MobileNavigation;
