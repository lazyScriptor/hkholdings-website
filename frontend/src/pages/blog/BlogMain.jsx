import React from "react";
import commonHeroImage from "../../assets/commonheroimage.png";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
const BlogData = [
  {
    id: 1,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services1,
  },
  {
    id: 2,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services2,
  },
  {
    id: 3,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services3,
  },
  {
    id: 4,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services1,
  },
  {
    id: 5,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services2,
  },
  {
    id: 6,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services3,
  },
  {
    id: 7,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services1,
  },
  {
    id: 8,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services2,
  },
  {
    id: 9,
    title: "How to Choose the Right Grade of Tool Steel",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get ",
    image: services3,
  },
];
function BlogMain() {
  return (
    <>
      <div className="relative w-screen">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold">BLOG</h1>
          <p className="max-w-[60%] text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p>
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container py-12">
        {BlogData.map((item, index) => (
          <>
            <BlogSection
              image={item.image}
              title={item.title}
              shortDescription={item.shortDescription}
            />
          </>
        ))}
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>
      <Footer />
      <BottomFooter />
    </>
  );
}

export default BlogMain;

const BlogSection = ({ image, title, shortDescription }) => {
  return (
    <>
      <div className="p-8 shadow-2xl rounded-3xl flex flex-col gap-4">
        <img src={image} className="rounded-b-lg" alt="" />
        <h2 className="text-xl font-semibold" >{title}</h2>
        <p>{shortDescription}</p>
        <button className="px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all self-start duration-200 text-white rounded-lg">
          View Content
        </button>
      </div>
    </>
  );
};
