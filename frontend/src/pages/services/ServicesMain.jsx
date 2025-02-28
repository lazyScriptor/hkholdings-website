import React, { useState } from "react";

import commonHeroImage from "../../assets/commonheroimage.png";
import services1 from "../../assets/services1.webp";
import services2 from "../../assets/services2.webp";
import services3 from "../../assets/services3.webp";
import services4 from "../../assets/services4.webp";
import services5 from "../../assets/services5.webp";
import services6 from "../../assets/services6.webp";
import services7 from "../../assets/services7.webp";
import services8 from "../../assets/services8.webp";
import services9 from "../../assets/services9.webp";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import { useNavigate } from "react-router-dom";

function ServicesMain() {
  const navigate = useNavigate();
  const dataArray = [
    {
      id: 1,
      title: "Glass Hand Railings & Balcony Railings",
      description:
        "We offer high-quality glass hand railings, balcony railings, and staircases for both residential and commercial properties, ensuring safety, durability, and elegance.",
      image: services1,
      navigation: "railings",
    },
    {
      id: 2,
      title: "Steel & Wood Hand Railings",
      description:
        "Our steel and wood railing solutions provide a perfect blend of strength and aesthetics, tailored to suit your interior and exterior spaces.",
      image: services2,
      navigation: "railings",
    },
    {
      id: 3,
      title: "Warehouse Construction",
      description:
        "We specialize in custom warehouse construction, ensuring safety and efficiency to meet all your company's storage and operational needs.",
      image: services3,
      navigation: "warehouse-construction",
    },
    {
      id: 4,
      title: "Wood Decking",
      description:
        "Experience the natural elegance of high-quality wood decking with HK Holdings (PVT) Ltd, your trusted wood deck expert.",
      image: services4,
      navigation: "wood-decking",
    },
    {
      id: 5,
      title: "Staircase Solutions",
      description:
        "Choose from a variety of styles, components, and finishes to create an innovative, well-constructed staircase that complements your space.",
      image: services5,
      navigation: "staircases",
    },
    {
      id: 6,
      title: "Glass & Polycarbonate Canopies",
      description:
        "We offer a wide selection of carports and canopies, crafted with high-quality glass and polycarbonate sheets for durability and style.",
      image: services6,
      navigation: "canopies",
    },
    {
      id: 7,
      title: "Steel & Glass Roofing",
      description:
        "As a leading metal and glass roofing company, we provide top-tier products, expert installations, and exceptional customer service.",
      image: services7,
      navigation: "roofing",
    },
    {
      id: 8,
      title: "Gates Wicket, Wood, Steel & Amano",
      description:
        "We manufacture a variety of gates, including standard, remote-controlled, and motorized options, tailored to your security and aesthetic needs.",
      image: services8,
      navigation: "gates",
    },
    {
      id: 9,
      title: "Fences & Grills",
      description:
        "We provide and install high-quality fences and grills for both residential and commercial properties, ensuring security and enhancing the aesthetic appeal.",
      image: services9,
      navigation: "fences-and-grills",
    },
  ];

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="max-w-[60%] text-center text-sm">
            For more than 16 years, HK Holdings has been taking steps to fit
            every customer's design, using the best designer crafting and
            technology. As all other international and local designers has just
            recently been invented by our company. we are always committed to
            providing a flexible service at a reasonable price.
          </p>
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon" />

      {/* <SecondPart /> */}
      <div className="bg-[#241C1A]">
        <div className="container py-12">
          <h1 className="text-4xl font-semibold flex items-center justify-center gap-4 text-brandWhite py-12">
            ALL SERVICES
          </h1>
          {dataArray.map((item, index) => (
            <>
              {index % 2 == 0 ? (
                <ThirdPart
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  path={item.navigation}
                  handleNavigation={handleNavigate}
                />
              ) : (
                <FourthPart
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  path={item.navigation}
                  handleNavigation={handleNavigate}
                />
              )}
            </>
          ))}
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}

export default ServicesMain;

const SecondPart = () => {
  return (
    <>
      <div className="container py-20 flex flex-col justify-center items-center gap-16">
        <h1 className="uppercase text-4xl font-semibold text-center md:text-start">
          WHO WE ARE?
        </h1>
        <p className="text-center  md:max-w-[80%]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Urna tincidunt
          lectus mi porttitor rutrum habitasse. Interdum pharetra mi, et platea
          lobortis ex sapien. Eros eros nisl neque porttitor primis elit
          maecenas. Viverra quam luctus phasellus class ipsum duis elit vehicula
          nascetur.{" "}
        </p>
      </div>
    </>
  );
};
// const SecondPart = () => {
//   return (
//     <div className="py-12 container">
//       <div className="flex justify-center items-center flex-col gap-4">
//         <h1 className="text-4xl font-semibold">WHO WE ARE?</h1>
//         <p>

//         </p>
//       </div>
//     </div>
//   );
// };
const ThirdPart = ({ image, title, description, path, handleNavigation }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div onClick={() => console.log("first")} className="bg-brandLightMaroon">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-3 flex flex-col py-12 md:pb-20 md:pt-16 items-center md:items-end justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl md:h-16 text-center md:text-right">
              {title}
            </h1>
            <p className="text-center md:text-right">{description}</p>
            {loading && <p> "Loading..."</p>}
            <button
              onClick={() => handleNavigation(path)}
              className="mt-20 px-4 self-center md:self-auto py-2 w-44 rounded-lg bg-brandDarkMaroon hover:bg-brandDarkMaroon/80 transition-all duration-200 text-white shadow-lg"
            >
              Read more
            </button>
          </div>
          <div className="col-span-2">
            <img
              onLoad={() => setLoading(false)} // Hide loading when image loads
              src={image}
              alt=""
              className="h-[100%] overflow-x-hidden w-[100%] border-b border-b-white  "
            />
          </div>
        </div>
      </div>
      <div className="h-8" />
    </>
  );
};

const FourthPart = ({ image, title, description, path, handleNavigation }) => {
  return (
    <>
      <div className="bg-[#40342F]">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-2">
            <img
              src={image}
              alt=""
              className="h-[100%] w-[100%]   overflow-x-hidden"
            />
          </div>
          <div className="col-span-3 flex flex-col py-12 md:pb-20 md:pt-16 items-center md:items-start justify-start  gap-8 container border-b-white border-b text-brandWhite">
            <h1 className="text-4xl md:h-16  text-center md:text-left">
              {title}
            </h1>
            <p className="text-center md:text-start">{description}</p>
            <button
              onClick={() => handleNavigation(path)}
              className="mt-20 px-4 self-center md:self-auto py-2 w-44 rounded-lg  bg-brandLightMaroon hover:bg-brandLightMaroon/80 transition-all duration-200 text-white shadow-lg"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="h-8 " />
    </>
  );
};
