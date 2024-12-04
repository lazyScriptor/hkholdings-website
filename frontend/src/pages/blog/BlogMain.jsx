import React from "react";
import commonHeroImage from "../../assets/commonheroimage.png";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import ServicesExpan from "./ServicesExpan";
const BlogData = [
  {
    id: 1,
    title: "10 Tips for Building Your First Web Application",
    shortDescription:
      "Learn the essential steps to develop your first web app, from planning to deployment.",
    image: services1,
  },
  {
    id: 2,
    title: "Understanding the Basics of Artificial Intelligence",
    shortDescription:
      "A beginner's guide to AI concepts, algorithms, and real-world applications.",
    image: services2,
  },
  {
    id: 3,
    title: "Mastering React: A Guide to Components and State Management",
    shortDescription:
      "Explore the core concepts of React, including components, hooks, and state.",
    image: services3,
  },
  {
    id: 4,
    title: "The Ultimate Guide to Responsive Web Design",
    shortDescription:
      "Discover how to create stunning websites that look great on any device.",
    image: services1,
  },
  {
    id: 5,
    title: "How to Improve Your JavaScript Debugging Skills",
    shortDescription:
      "Tips and tricks to efficiently debug JavaScript code and solve errors faster.",
    image: services2,
  },
  {
    id: 6,
    title: "Top 5 Programming Languages to Learn in 2024",
    shortDescription:
      "An overview of the most in-demand programming languages for the upcoming year.",
    image: services3,
  },
  {
    id: 7,
    title: "What is Cloud Computing and How Does It Work?",
    shortDescription:
      "Understand the basics of cloud computing and its advantages for businesses.",
    image: services1,
  },
  {
    id: 8,
    title: "SEO Tips for Beginners: How to Optimize Your Website",
    shortDescription:
      "A beginner-friendly guide to improving your website's search engine rankings.",
    image: services2,
  },
  {
    id: 9,
    title: "The Importance of Cybersecurity in Today's Digital World",
    shortDescription:
      "Learn about common cyber threats and how to protect your data online.",
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
              index={index}
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

const BlogSection = ({ index, image, title, shortDescription }) => {
  return (
    <>
      <div className="p-8 shadow-2xl rounded-3xl flex flex-col gap-4">
        <img src={image} className="rounded-b-lg" alt="" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{shortDescription}</p>
        {/* <button className="px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all self-start duration-200 text-white rounded-lg">
          View Content
        </button> */}
        <ServicesExpan
          index={index}
          image={image}
          title={title}
          shortDescription={shortDescription}
        />
      </div>
    </>
  );
};
