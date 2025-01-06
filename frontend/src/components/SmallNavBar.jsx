import React from "react";
import logo from "../assets/logowhite.png";
import { useNavigate } from "react-router-dom";
function SmallNavBar() {
  const navigate = useNavigate();
  const userData = localStorage.getItem("userEmail");
  return (
    <div className="bg-transparent flex justify-between items-center text-xs container pb-4">
      <img
        src={logo}
        onClick={() => {
          navigate("/");
        }}
        alt=""
        className=" cursor-pointer w-32 aspect-square  bg-white bg-opacity-15 shadow-2xl rounded-xl"
      />
      <div className="flex gap-4 text-brandWhite items-center">
        <button className="px-8" onClick={()=>{navigate('/admin-blogs')}}> Blog Post Management</button>
        <button className="px-8" onClick={()=>{navigate('/admin-inquiries')}}> Enquiry Management</button>
        <button className="bg-brandLightMaroon p-4 rounded-full">
          {userData}
        </button>
      </div>
    </div>
  );
}

export default SmallNavBar;
