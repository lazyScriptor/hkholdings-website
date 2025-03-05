import React from "react";
import { Paper } from "@mui/material";
import img1 from "../../assets/strip1img1.webp";
import img2 from "../../assets/strip1img2.webp";
import img3 from "../../assets/strip1img3.webp";
import carousel1 from "../../assets/realImages/carousel1.jpg";
import carousel2 from "../../assets/realImages/carousel2.jpg";
import carousel3 from "../../assets/realImages/carousel3.jpg";
import carousel4 from "../../assets/realImages/carousel4.webp";
import carousel5 from "../../assets/realImages/carousel5.jpeg";
import carousel6 from "../../assets/realImages/carousel6.jpg";
import carousel7 from "../../assets/realImages/carousel7.jpg";
import servicesBackgroundImage from "../../assets/servicesbackground.png";
import Slider from "react-slick"; // Slick carousel import
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css";

function Strip1() {
  return (
    <div
      className="bg-brandDarkMaroon py-12 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${servicesBackgroundImage})` }}
    >
      <div className="py-8 flex justify-center flex-col items-center gap-4">
        <h1 className="text-3xl text-brandWhite uppercase">
          Services we provided
        </h1>
        <p className="text-md text-brandWhite text-opacity-70 max-w-[70%] text-center">
          {" "}
          HK Holdings specializes in high-quality construction and decorative
          solutions, offering tempered glass work, professional welding, custom
          staircases, stylish hand railings & balcony railings, and premium
          wooden craftsmanship. With expert craftsmanship and a commitment to
          durability and aesthetics, we deliver tailored solutions for both
          residential and commercial projects.
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
      title: "Tempered Glass Work",
      description:
        "High-quality tempered glass solutions for durability, and modern aesthetics, perfect for residential and commercial applications.",
      image: carousel1,
    },
    {
      id: 2,
      title: "Professional Welding Services",
      description:
        "Expert welding solutions for structural and decorative metalwork, ensuring strength, precision, and longevity.",
      image: carousel5,
    },
    {
      id: 3,
      title: "Hand Railings & Balcony Railings",
      description:
        "Stylish and sturdy railings crafted for safety and elegance, enhancing balconies, staircases, and walkways.",
      image: carousel3,
    },
    {
      id: 4,
      title: "Custom Staircase Designs",
      description:
        "Innovative staircase solutions, including metal, glass, and wood combinations, designed for both functionality and visual appeal.",
      image: carousel7,
    },
    {
      id: 5,
      title: "Premium Wooden Work",
      description:
        "Exceptional wooden craftsmanship for furniture, paneling, doors, and custom designs, adding warmth and sophistication to any space.",
      image: carousel6,
    },
    {
      id: 6,
      title: "Stainless Steel Fabrication",
      description:
        "Precision-crafted stainless steel solutions for durable, corrosion-resistant, and sleek architectural and industrial applications.",
      image: carousel4, // Replace with the appropriate image
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
          <div key={item.id} className="px-2">
            {" "}
            {/* Add padding for spacing */}
            <Paper sx={{ borderRadius: 0 }} className="bg-white">
              <div className="p-4 h-52 sm:h-24  lg:h-36 xl:h-28">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-xs py-2">{item.description}</p>
              </div>

              {/* Image carousel */}
              <div className="pt-4 h-80">
                <img
                  className="aspect-video object-cover w-full h-full"
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
