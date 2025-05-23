import React, { lazy, useRef } from "react";
import image1 from "../../assets/about1.png";
import image2 from "../../assets/realImages/newImages/heroAboutusImg1.webp";
import { useNavigate } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiSettingsFill } from "react-icons/ri";
function AboutusStrip() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".box", {
        x: -100,
        duration: 1,
        ease: "power4.inOut",
        yoyo: true,
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: container.current, // The element that triggers the animation
          start: "top 90%", // When the top of the container reaches 80% of the viewport
          end: "top 30%", // End point for the animation
          toggleActions: "play none none none", // Play once when it enters
        },
      });
    },
    { scope: container }
  );

  const navigate = useNavigate();
  const handleAboutClick = () => {
    navigate("/about");
  };
  return (
    <div className="container py-12" ref={container}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* image section */}
          <div className="flex  md:col-span-2  justify-center gap-1 ">
            <div className="flex items-start">
              <img
                src={image1}
                alt=""
                loading={lazy}
                className="w-36 h-60 shadow-2xl rounded-2xl"
              />
            </div>
            <div className="flex items-center md:items-end">
              <img
                src={image2}
                alt=""
                loading={lazy}
                className="w-36 h-60 shadow-2xl rounded-2xl"
              />
            </div>
          </div>
          {/* text section */}
          <div className="md:col-span-3  flex flex-col gap-4">
            <h1 className="box text-brandLightMaroon text-2xl  font-semibold">
              About us
            </h1>
            <div>
              <h2 className="box text-brandDarkMaroon text-2xl">
                PROJECT WITH EXPERT, METAL AND GLASS
              </h2>
              <h3 className="box font-semibold text-4xl">METAL COLLABORATION</h3>
            </div>
            <p className="text-md text-gray-400">
              As one of the leading firms in Sri Lanka . We provide our maximum
              production in high quality manner using the latest technology.
            </p>

            <ul className=" text-md list-disc pl-8 text-gray-400">
              <li>High quality material </li>
              <li>Height standard work </li>
              <li>Trusted & friendly </li>
              <li>Guaranteed service</li>
            </ul>
            <div className="absolute right-0 bottom-28 px-8 md:w-[40%] py-4 bg-brandLightMaroon/60 rounded-l-xl text-gray-400">
              <p className="capitalize flex items-center gap-2 text-lg font-semibold text-brandWhite">
                <RiSettingsFill /> Innovation at Every Step
              </p>
            </div>
            <button
              onClick={handleAboutClick}
              className="mt-20 px-4 self-center md:self-auto py-2 w-44 rounded-lg bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white shadow-lg"
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusStrip;
