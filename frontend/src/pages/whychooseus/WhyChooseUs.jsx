import React, { lazy } from "react";
import image1 from "../../assets/vector1.png";
import image2 from "../../assets/vector2.png";
import image3 from "../../assets/vector3.png";
import image4 from "../../assets/vector4.png";
import image5 from "../../assets/vector5.png";
import image6 from "../../assets/vector6.png";
import whyChooseUsImage from "../../assets/whyImage1.png";

function WhyChooseUs() {
  const iconArray = [
    {
      title: "Fast service ",
      image: image1,
    },
    {
      title: "Reliability  ",
      image: image2,
    },
    {
      title: "Quality & better completion ",
      image: image3,
    },
    {
      title: "After service ",
      image: image4,
    },
    {
      title: "High quality materials",
      image: image5,
    },
    {
      title: "Guidance of skilled experts  ",
      image: image6,
    },
  ];
  return (
    <div className="container py-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* text section */}
          <div className="md:col-span-3  flex flex-col gap-8 order-2 md:order-1">
            <h1 className="text-brandLightMaroon text-2xl font-semibold">
              Why choose us ?
            </h1>
            <div>
              <h2 className="text-brandDarkMaroon text-2xl uppercase">
                Why you should choose
              </h2>
              <h3 className="font-semibold text-4xl  uppercase">
                our  company
              </h3>
            </div>
            <p className="text-md text-gray-400">
              {" "}
              We are ready to create your residences , apartment, office or any
              other place as you wish. Our main objective is to reach the
              pinnacle of our development by ensuring customer satisfaction
              thought the provision of quality product. We are always committed
              to providing a flexible service & reasonable price.
            </p>
            <div className="grid grid-cols-1 gap-2  md:grid-cols-2 md:gap-4 py-12">
              {iconArray.map((item, index) => (
                <div
                  className="bg-[#8B8C8A] hover:bg-brandLightMaroon duration-700 transition-all hover:shadow-lg
                hover:shadow-brandLightMaroon rounded-lg p-2 lg:p-6 text-brandWhite flex gap-2 lg:gap-4 items-center"
                >
                  <div className="w-20">
                    <img src={item.image} alt="" />
                  </div>
                  <h2 className="font-semibold"> {item.title}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* image section */}
          <div className="flex  md:col-span-2  justify-center gap-1  items-center order-1 md:order-2 ">
            <img
              src={whyChooseUsImage}
              alt=""
              className=" shadow-2xl h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
