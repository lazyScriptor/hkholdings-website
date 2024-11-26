import React from "react";
import { Paper } from "@mui/material";
import img1 from "../../assets/strip1img1.webp";
import img2 from "../../assets/strip1img2.webp";
import img3 from "../../assets/strip1img3.webp";
import Slider from "react-slick"; // Slick carousel import
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css";

function Strip1() {
  return (
    <div className="bg-brandDarkMaroon py-12 flex flex-col justify-center items-center">
      <div className="py-8 flex justify-center flex-col items-center gap-4">
        <h1 className="text-3xl text-brandWhite uppercase">Services we provided</h1>
        <p className="text-md text-brandWhite text-opacity-70 max-w-[70%] text-center">
              {" "}
              There are many variations of passages about of loram ipsum
              avalabie, but the majority have suffered alteration free in some
              form, by injected humour, or tree randomised words which don't
              lock even{" "}
            </p>
      </div>
      <div className="container w-[90%] text-brandWhite">
        <CardComponent />
      </div>
    </div>
  );
}

export default Strip1;

const CardComponent = () => {
  const cardComponentDetails = [
    {
      id: 1,
      title: "CUSTOM WELDING ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaiste iure a architecto, hic fuga",
      image: img1,
    },
    {
      id: 2,
      title: "METAL WORKS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaiste iure a architecto, hic fuga",
      image: img1,
    },
    {
      id: 3,
      title: "STEEL WELDING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaiste iure a architecto, hic fuga",
      image: img1,
    },
  ];

  // Slick carousel settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto play the carousel
    autoplaySpeed: 2000, // Auto play speed
    centerMode: true, // Center the active slide
    responsive: [
      {
        breakpoint: 1024, // When screen width is 1024px or less
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 768, // When screen width is 768px or less
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {cardComponentDetails.map((item) => (
          <div key={item.id} className="px-2"> {/* Add padding for spacing */}
            <Paper sx={{ borderRadius: 0 }} className="bg-white">
              <div className="p-4">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-xs py-2">{item.description}</p>
              </div>

              {/* Image carousel */}
              <div className="pt-4">
                <img
                  className="aspect-video h-80 object-cover w-full"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </Paper>
          </div>
        ))}
      </Slider>
    </>
  );
};
