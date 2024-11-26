import React from "react";
import heroImg from "../../assets/hero.webp";
import heroImg2 from "../../assets/hero2.webp";
import heroImg3 from "../../assets/hero3.webp";
import heroImg4 from "../../assets/hero4.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Strip1 from "./Strip1";
import Footer from "../../components/Footer";
import AboutusStrip from "../aboutus/AboutusStrip";

const settings = {
  dots: true, // Show navigation dots
  infinite: true, // Infinite loop
  speed: 1000, // Transition speed
  autoplay: true, // Autoplay the carousel
  autoplaySpeed: 3000, // Autoplay speed in ms
  fade: true, // Enable fade transition
};
function Home() {
  // Settings for the slick carousel

  return (
    <div className="relative h-screen">
      {/* Slick Carousel */}
      <Sliderr />

      <AboutusStrip/>
      <Strip1 />
      <Footer />
    </div>
  );
}

export default Home;

const Sliderr = () => {
  return (
    <>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative h-screen ">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
              <div className="container  flex flex-col items-center justify-center">
                <h1 className=" text-4xl md:text-7xl font-bold mb-4 text-center">
                  IGNITING INNOVATION THROUGH CRAFTMANSHIP
                </h1>
                <p className="container text-sm text-center max-w-[70%]">
                  There are many variations of passages of Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Vero esse adipisci aliquid
                  necessitatibus!
                </p>
                <button className="mt-6 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg2})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl  font-bold mb-4 text-center">
                  IGNITING INNOVATION THROUGH CRAFTMANSHIP
                </h1>
                <p className="container text-sm text-center max-w-[70%]">
                  There are many variations of passages of Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Vero esse adipisci aliquid
                  necessitatibus!
                </p>
                <button className="mt-6 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg3})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl  font-bold mb-4 text-center">
                  IGNITING INNOVATION THROUGH CRAFTMANSHIP
                </h1>
                <p className="container text-sm text-center max-w-[70%]">
                  There are many variations of passages of Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Vero esse adipisci aliquid
                  necessitatibus!
                </p>
                <button className="mt-6 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg4})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center">
                  IGNITING INNOVATION THROUGH CRAFTMANSHIP
                </h1>
                <p className="container text-sm text-center max-w-[70%]">
                  There are many variations of passages of Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Vero esse adipisci aliquid
                  necessitatibus!
                </p>
                <button className="mt-6 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="h-8 mb-1.5 bg-brandLightMaroon"></div>
    </>
  );
};
