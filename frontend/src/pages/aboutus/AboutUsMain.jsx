import React from "react";
import commonHeroImage from "../../assets/commonheroimage.png";

import aboutUsImage from "../../assets/aboutUsImage.png";
import aboutusvisionImage from "../../assets/vission.webp";
import aboutusmissionimage from "../../assets/mission.webp";
import aboutuscharacters from "../../assets/aboutuscharacters.png";
import backgroundTexture from "../../assets/backgroundTexture.webp";
import ceoImage from "../../assets/ceo.webp";
import { PiQuotes } from "react-icons/pi";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import { RiSettingsFill } from "react-icons/ri";

import abt1 from "../../assets/abt1.png";
import abt2 from "../../assets/abt2.png";
import abt3 from "../../assets/abt3.png";
function AboutUsMain() {
  return (
    <>
      <div className=" relative">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="max-w-[60%] text-center text-sm">
            HK Holdings delivers a wide range of product and service related to
            construction and property decoration with a next level of creator.
          </p>
        </div>
      </div>

      <div className="h-8 bg-brandLightMaroon"></div>
      <SecondPart />

      <ThirdPart />
      <FourthPart />

      <MembersQuotes />
      <div className="h-8 bg-brandLightMaroon my-12"></div>

      <FifthPart />
      <div className="h-8 bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}

export default AboutUsMain;

const SecondPart = () => {
  return (
    <>
      <div className="container py-12 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2 flex items-end">
            <img src={aboutUsImage} alt="aboutusImage" className="" />
          </div>
          <div className="md:col-span-3 flex flex-col gap-8 pt-8">
            <h1 className="uppercase text-4xl font-semibold text-center md:text-start">
              WHO WE ARE?
            </h1>
            <p className="text-base text-justify">
              HK Holdings, was established in 2009 is approaching its 16 years
              in business. HK Holdings was founded with numerous welders. It has
              now grown to include technical, management, marketing &
              administrative positions. Our professionalism combined a strong
              personal touch.
            </p>
            <div className="flex items-start flex-col gap-4">
              <div className="flex">
                <RiSettingsFill className="text-4xl font-semibold flex items-start w-24" />
                <h2 className="text-xl font-semibold self-center">
                  Innovation at Every Step
                </h2>
              </div>
              <div>
                <div className="flex">
                  <RiSettingsFill className="text-5xl font-semibold flex items-start text-transparent " />
                  <div>
                    <p className="text-base text-justify">
                      We work diligently to provide homeowners, builders,
                      architects, and designers with the finest possible
                      outcomes every single day.
                    </p>
                    <p className="text-base text-justify py-4">
                      As one of Sri Lanka's leading firms, we strive for
                      excellence by delivering high-quality products and
                      services using the latest technology. Our experienced and
                      skilled team is capable of handling projects of all sizes,
                      from small residential jobs to large-scale developments.
                      HK Holdings offers a wide range of construction and home
                      décor solutions, ensuring superior craftsmanship and
                      customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ThirdPart = ({ image }) => {
  return (
    <>
      <div className="bg-brandLightMaroon ">
        <div className="grid grid-cols-1 lg:grid-cols-5 container">
          <div className="col-span-3 flex flex-col py-12 md:pb-20 md:pt-16 items-center md:items-end justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl font-semibold ">Vision</h1>
            <p className="text-center md:text-right">
              <span className="text-4xl font-semibold ">O</span>ur mission is to
              be the lead in Innovation, sustainable glass railing, steel
              building and wood flooring solutions, enhancing architectural
              designing worldwide while prioritizing safety, durability and
              aesthetics excellence.
            </p>
          </div>
          <div className="col-span-2">
            <img
              src={aboutusmissionimage}
              alt=""
              className="h-[100%] overflow-x-hidden"
            />
          </div>
        </div>
      </div>
      <div className="h-8" />
    </>
  );
};

const FourthPart = ({ image }) => {
  return (
    <>
      <div className="bg-[#40342F]">
        <div className="grid grid-cols-1 lg:grid-cols-5 container">
          <div className="col-span-2">
            <img
              src={aboutusvisionImage}
              alt=""
              className="h-[100%] overflow-x-hidden"
            />
          </div>
          <div className="col-span-3 flex flex-col py-12 md:pb-20 md:pt-16 items-center md:items-start justify-start  gap-8 container text-brandWhite">
            <h1 className="text-4xl font-semibold ">Mission</h1>
            <p className="text-center md:text-start">
              <span className="text-4xl font-semibold">T</span>o lead the
              construction and design industry by providing innovative,
              sustainable and high-quality solutions that seamlessly blend the
              elegance of glass the durability of Steel and the warmth of wood.
              we strong to elevate spaces, inspire creativity and create the
              latest value of our clients through craftsmanship integrity and
              commitment to Excellence in every project.
            </p>
          </div>
        </div>
      </div>
      <div className="h-8" />
    </>
  );
};

const FifthPart = () => {
  return (
    <>
      <div className="container py-12">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="text-4xl font-semibold uppercase text-center">
            OUR TEAM
          </h1>
          <p className="text-center w-[80%]">
            There are many variations of passages about of loram ipsum avalabie,
            but the majority have suffered alteration free in some form, by
            injected humour, or tree randomised words which don't lock even
          </p>
          <div className="flex gap-2 h-[60vh] ">
            {/* Image 1 */}
            <div className="relative w-[30%] overflow-hidden group">
              <img
                src={abt1}
                className="h-[100%] w-full object-cover transition-transform duration-300 group-hover:scale-125"
                alt="About Us"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">Name 1</h3>
                <p className="text-white text-sm">Position 1</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-[30%] overflow-hidden group">
              <img
                src={abt2}
                className="h-[100%] w-full object-cover transition-transform duration-300 group-hover:scale-125"
                alt="About Us"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">Name 2</h3>
                <p className="text-white text-sm">Position 2</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative w-[30%] overflow-hidden group">
              <img
                src={abt3}
                className="h-[100%] w-full object-cover transition-transform duration-300 group-hover:scale-125"
                alt="About Us"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">Name 3</h3>
                <p className="text-white text-sm">Position 3</p>
              </div>
            </div>

            {/* Image 1 */}
            <div className="relative w-[30%] overflow-hidden group">
              <img
                src={abt1}
                className="h-[100%] w-full object-cover transition-transform duration-300 group-hover:scale-125"
                alt="About Us"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">Name 1</h3>
                <p className="text-white text-sm">Position 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const MembersQuotes = ({ image, title, position, description }) => {
  return (
    <>
      <div className="pt-12 relative overflow-hidden flex flex-col items-center">
        <img
          src={backgroundTexture}
          className="absolute z-[-40] w-[100%] h-[100%]"
        />
        <div className="pt-4 container  ">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-4">
            <img src={ceoImage} className="lg:col-span-2" />

            <div className="flex flex-col items-center lg:items-start justify-center gap-4 text-brandDarkMaroon lg:col-span-3">
              <h1 className="font-bold text-2xl">CEO of HK holdings</h1>
              <p className="pb-12 text-center lg:text-start leading-[3rem]">
                <PiQuotes className="hidden lg:block rotate-180 -translate-x- translate-y-2 text-4xl" />
                The biggest risk is not taking any risk. In a world that is
                changing really quickly, the only strategy that is guaranteed to
                fail is not taking risks. As a leader, you have to embrace
                uncertainty, make bold decisions, and continuously innovate.
                Success is not about avoiding failures but about learning from
                them and adapting. That's what separates great companies from
                the ones that fade away{" "}
                <PiQuotes className="hidden lg:block text-4xl translate-x-56 -translate-y-12 xl:hidden"  />{" "}
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[60%] my-12 h-1 rounded-full bg-gray-200 border-none" />

        <div className="pt-4 container  ">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-4">
            <div className="flex flex-col items-center lg:items-start  justify-center gap-4 text-brandDarkMaroon lg:col-span-3">
              <h1 className="font-bold text-center  lg:text-end text-2xl">
                Manager of HK holdings
              </h1>
              <p className="pb-12 text-center lg:text-end leading-[3rem] relative">
                <PiQuotes className="hidden lg:block rotate-180 -translate-x-2 translate-y-2 text-4xl" />
                The biggest risk is not taking any risk. In a world that is
                changing really quickly, the only strategy that is guaranteed to
                fail is not taking risks. As a leader, you have to embrace
                uncertainty, make bold decisions, and continuously innovate.
                Success is not about avoiding failures but about learning from
                them and adapting. That's what separates great companies from
                the ones that fade away{" "}
                <PiQuotes className="hidden lg:block text-4xl absolute -right-12 bottom-16  xl:hidden" />{" "}
              </p>
            </div>
            <img src={ceoImage} className="lg:col-span-2" />
          </div>
        </div>
        <hr className="w-[60%] my-12 h-1 rounded-full bg-gray-200 border-none" />

        <div className="pt-4 container  ">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-4">
            <img src={ceoImage} className="lg:col-span-2" />

            <div className="flex flex-col items-center lg:items-start  justify-center gap-4 text-brandDarkMaroon lg:col-span-3">
              <h1 className="font-bold text-2xl">CTO of HK holdings</h1>
              <p className="pb-12 text-center lg:text-start leading-[3rem] ">
                <PiQuotes className="hidden lg:block rotate-180 -translate-x- translate-y-2 text-4xl" />
                The biggest risk is not taking any risk. In a world that is
                changing really quickly, the only strategy that is guaranteed to
                fail is not taking risks. As a leader, you have to embrace
                uncertainty, make bold decisions, and continuously innovate.
                Success is not about avoiding failures but about learning from
                them and adapting. That's what separates great companies from
                the ones that fade away{" "}
                <PiQuotes className="hidden lg:block text-4xl translate-x-56 -translate-y-12  xl:hidden" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
