import React from "react";
import hero from "../../assets/hero.webp";
import heroImg2 from "../../assets/hero2.webp";
import heroImg3 from "../../assets/hero3.webp";
import heroImg4 from "../../assets/hero4.webp";
import { PiQuotes } from "react-icons/pi";
import heroImg6 from "../../assets/realImages/newImages/hero1.webp";
import heroImg7 from "../../assets/realImages/newImages/hero2.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Strip1 from "./Strip1";
import Footer from "../../components/Footer";
import AboutusStrip from "../aboutus/AboutusStrip";
import WhyChooseUs from "../whychooseus/WhyChooseUs";
import BottomFooter from "../../components/BottomFooter";
import QuantityBar from "../quantity/QuantityBar";
import ProjectsHomeScreen from "../projects/ProjectsHomeScreen";
import { useNavigate } from "react-router-dom";
import character1 from "../../assets/characters/character1.webp";
import character2 from "../../assets/characters/character2.webp";
import character3 from "../../assets/characters/character3.webp";
const settings = {
  dots: true, // Show navigation dots
  infinite: true, // Infinite loop
  speed: 1000, // Transition speed
  autoplay: true, // Autoplay the carousel
  autoplaySpeed: 3000, // Autoplay speed in ms
  fade: true, // Enable fade transition
};
function Home() {
  const customerReviews = [
    {
      name: "Theekshana Fernando",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      town: "Moratuwa",
      image: character1,
    },
    {
      name: "Sakunthala Perera",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      town: "Moratuwa",
      image: character2,
    },
    {
      name: "XYZ peiris",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      town: "Moratuwa",
      image: character3,
    },
    {
      name: "Theekshana Fernando",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      town: "Moratuwa",
      image: character1,
    },
    {
      name: "Sakunthala Perera",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      town: "Moratuwa",
      image: character2,
    },
    {
      name: "XYZ peiris",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      town: "Moratuwa",
      image: character3,
    },
  ];
  // Settings for the slick carousel

  return (
    <div className="relative h-screen">
      {/* Slick Carousel */}
      <Sliderr />
      <div className="relative">
        <AboutusStrip />
      </div>

      <Strip1 />
      <div className="h-8 my-1.5 bg-brandLightMaroon"></div>
      <WhyChooseUs />
      <QuantityBar />
      <ProjectsHomeScreen />
      <div className="bg-brandLightMaroon/20 mt-12 py-12">
        <div className="md:col-span-3 container  flex flex-col gap-2 order-2 md:order-1 mb-12">
          <h1 className="text-brandLightMaroon text-2xl font-semibold">
            Testimonials
          </h1>
          <h3 className="font-semibold text-4xl  uppercase">
            What our customers says
          </h3>
        </div>

        <div className=" container flex gap-12 overflow-x-scroll  ">
          {customerReviews &&
            customerReviews.map((item, index) => (
              <>
                <div key={index}>
                  <Testimonials
                    image={item.image}
                    description={item.description}
                    name={item.name}
                    town={item.town}
                  />
                </div>
              </>
            ))}
        </div>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default Home;

const Sliderr = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${heroImg2})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brandLightMaroon/30 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center capitalize">
                  Professional & Reliable works
                </h1>
                <p className="container text-sm text-center max-w-[70%] h-12">
                  Our dedicated work force is the driving force behind our
                  success with the right directions.
                </p>
                <button
                  onClick={() => navigate("/services/all")}
                  className="mt-12 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg"
                >
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        {/* <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${heroImg3})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brandLightMaroon/30 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center capitalize">
                  Professional & Reliable works
                </h1>
                <p className="container text-sm text-center max-w-[70%] capitalize h-12">
                  HK Holdings a leading brand in the field of glass & iron work,
                  is a trusted company the works to provide quality service to
                  you.
                </p>
                <button
                  onClick={() => navigate("/services/all")}
                  className="mt-12 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg"
                >
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Slide 3 */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${heroImg4})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brandLightMaroon/30 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center capitalize">
                  Professional & Reliable works
                </h1>
                <p className="container text-sm text-center max-w-[70%] capitalize h-12">
                  We inted to continue working diligently to satisfy our
                  cherished client.
                </p>
                <button
                  onClick={() => navigate("/services/all")}
                  className="mt-12 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg"
                >
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${heroImg6})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brandLightMaroon/50 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center capitalize">
                  Professional & Reliable works
                </h1>
                <p className="container text-sm text-center max-w-[70%] capitalize h-12">
                  Your vision, our expertise—creating lasting impressions
                  through quality craftsmanship.
                </p>
                <button
                  onClick={() => navigate("/services/all")}
                  className="mt-12 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg"
                >
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${heroImg7})` }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brandLightMaroon/50 text-white">
              <div className="container flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center capitalize">
                  Professional & Reliable works
                </h1>
                <p className="container text-sm text-center max-w-[70%] capitalize h-12">
                  Committed to excellence, we ensure every project exceeds
                  expectations with superior quality.
                </p>
                <button
                  onClick={() => navigate("/services/all")}
                  className="mt-12 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg"
                >
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="h-8 mb-1.5 bg-brandLightMaroon"></div>
    </div>
  );
};
const Testimonials = ({ description, name, image, town }) => {
  return (
    <>
      <div className="p-8 w-[80vw] md:w-[30vw] flex flex-col gap-8 bg-brandWhite rounded-xl h-full">
        <PiQuotes className=" text-[#EDB509] text-4xl" />
        <p>{description}</p>
        <div className="grid gap-4 grid-cols-4">
          <div className="aspect-square overflow-hidden  flex  justify-center items-start rounded-full ">
            <img src={image} alt="" className="w-24 " />
          </div>
          <div className="col-span-3 flex flex-col">
            <h2 className="text-blue-700 opacity-50">{name}</h2>
            <h4 className="text-xs text-gray-500">{town}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
