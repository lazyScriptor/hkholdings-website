import React, { lazy } from "react";
import image1 from "../../assets/vector1.png";
import image2 from "../../assets/vector2.png";
import whyChooseUsImage from "../../assets/whyImage1.png";

function WhyChooseUs() {
  return (
    <div className="container py-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* text section */}
          <div className="md:col-span-3  flex flex-col gap-8 order-2 md:order-1">
            <h1 className="text-brandLightMaroon text-2xl font-semibold">Why choose us ?</h1>
            <div>
              <h2 className="text-brandDarkMaroon text-2xl uppercase">
                Why you should choose
              </h2>
              <h3 className="font-semibold text-4xl  uppercase">
                our welding company
              </h3>
            </div>
            <p className="text-md text-gray-400">
              {" "}
              There are many variations of passages about of loram ipsum
              avalabie, but the majority have suffered alteration free in some
              form, by injected humour, or tree randomised words which don't
              lock even{" "}
            </p>
            <div className="block space-y-4 md:space-y-0  md:flex md:gap-4 py-12">
              <div
                className="bg-[#8B8C8A] hover:bg-brandLightMaroon duration-700 transition-all hover:shadow-lg
              hover:shadow-brandLightMaroon p-6 text-brandWhite flex gap-4"
              >
                <img src={image1} alt="" />
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold"> STRONG WELDING</h2>
                  <h2 className="text-xs">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia
                    fringilla aliquet nullam augue suscipit{" "}
                  </h2>
                </div>
              </div>

              <div
                className="bg-[#8B8C8A] hover:bg-brandLightMaroon duration-700 transition-all hover:shadow-lg
              hover:shadow-brandLightMaroon p-6 text-brandWhite flex gap-4"
              >
                <img src={image2} alt="" />
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold"> FAST SERVICE</h2>
                  <h2 className="text-xs">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia
                    fringilla aliquet nullam augue suscipit{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* image section */}
          <div className="flex  md:col-span-2  justify-center gap-1  items-center order-1 md:order-2 ">
            <img src={whyChooseUsImage} alt="" className=" shadow-2xl h-full rounded-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
