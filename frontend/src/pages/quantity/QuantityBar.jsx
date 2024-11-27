import React from "react";
import backgroundImage from "../../assets/qtybackground.png";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import { MdPeople } from "react-icons/md";
function QuantityBar() {
  return (
    <div
      className="py-12 bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="py-8 flex justify-center flex-col items-center gap-4">
          <h1 className="text-3xl text-brandWhite uppercase text-center">
            helping a local business reinvent
          </h1>

          <CardComponentQuantity />
        </div>
      </div>
    </div>
  );
}

export default QuantityBar;

const CardComponentQuantity = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12">
        <div className="text-brandWhite hover:shadow-2xl hover:shadow-brandLightMaroon duration-200 transition-all bg-brandLightMaroon p-12 flex flex-col justify-center items-center rounded-2xl">
          <MdOutlinePeopleAlt className="text-6xl" />
          <p className="pt-4 text-brandBlack font-bold">2,245,264</p>
          <p className="text-brandBlack text-xs ">Members</p>
        </div>

        <div className="text-brandWhite  hover:shadow-2xl hover:shadow-brandLightMaroon duration-200 transition-all  bg-brandLightMaroon p-12 flex flex-col justify-center items-center rounded-2xl">
          <AiFillProject className="text-6xl" />
          <p className="pt-4 text-brandBlack font-bold">354</p>
          <p className="text-brandBlack text-xs ">Projects</p>
        </div>

        <div className="text-brandWhite  hover:shadow-2xl hover:shadow-brandLightMaroon duration-200 transition-all  bg-brandLightMaroon p-12 flex flex-col justify-center items-center rounded-2xl">
          <BiSolidLike className="text-6xl" />
          <p className="pt-4 text-brandBlack font-bold">2,700</p>
          <p className="text-brandBlack text-xs ">Reviews</p>
        </div>

        <div className="text-brandWhite  hover:shadow-2xl hover:shadow-brandLightMaroon duration-200 transition-all  bg-brandLightMaroon p-12 flex flex-col justify-center items-center rounded-2xl">
          <MdPeople className="text-6xl" />
          <p className="pt-4 text-brandBlack font-bold">455</p>
          <p className="text-brandBlack text-xs ">Professionals</p>
        </div>
      </div>
    </>
  );
};
