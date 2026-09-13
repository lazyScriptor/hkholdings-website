import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { HiArrowRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carousel1 from "../../assets/realImages/carousel1.jpg";
import carousel3 from "../../assets/realImages/carousel3.jpg";
import carousel4 from "../../assets/realImages/carousel4.webp";
import carousel5 from "../../assets/realImages/carousel5.jpeg";
import carousel6 from "../../assets/realImages/carousel6.jpg";
import carousel7 from "../../assets/realImages/carousel7.jpg";
import servicesBackgroundImage from "../../assets/servicesbackground.png";
import SectionHeading from "../../components/ui/SectionHeading";

const SERVICES = [
  {
    id: "tempered-glass",
    title: "Tempered Glass Work",
    description:
      "High-quality tempered glass solutions for durability and modern aesthetics, perfect for residential and commercial applications.",
    image: carousel1,
    to: "/services/all/canopies",
  },
  {
    id: "welding",
    title: "Professional Welding Services",
    description:
      "Expert welding solutions for structural and decorative metalwork, ensuring strength, precision and longevity.",
    image: carousel5,
    to: "/services/all/fences-and-grills",
  },
  {
    id: "railings",
    title: "Hand Railings & Balcony Railings",
    description:
      "Stylish and sturdy railings crafted for safety and elegance, enhancing balconies, staircases and walkways.",
    image: carousel3,
    to: "/services/all/railings",
  },
  {
    id: "staircases",
    title: "Custom Staircase Designs",
    description:
      "Innovative staircase solutions in metal, glass and wood combinations — designed for functionality and visual appeal.",
    image: carousel7,
    to: "/services/all/staircases",
  },
  {
    id: "wooden-work",
    title: "Premium Wooden Work",
    description:
      "Exceptional wooden craftsmanship for decking, panelling, doors and custom designs, adding warmth to any space.",
    image: carousel6,
    to: "/services/all/wood-decking",
  },
  {
    id: "stainless-steel",
    title: "Stainless Steel Fabrication",
    description:
      "Precision-crafted stainless steel for durable, corrosion-resistant and sleek architectural applications.",
    image: carousel4,
    to: "/services/all/gates",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.16, 1, 0.3, 1)",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

function ServiceCard({ item }) {
  return (
    <Link
      to={item.to}
      className="group relative mx-2 mb-14 block overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-lift"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-900 ease-out-expo group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-bold leading-tight text-white">
          {item.title}
        </h3>
      </div>

      <div className="p-5">
        <p className="min-h-[4.5rem] text-sm leading-relaxed text-ink-500">
          {item.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-600">
          Learn more
          <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function Strip1() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${servicesBackgroundImage})` }}
        aria-hidden="true"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="What we do"
          title="Services we provide"
          align="center"
          tone="light"
        >
          HK Holdings specialises in high-quality construction and decorative
          solutions — tempered glass work, professional welding, custom
          staircases, hand and balcony railings, and premium wooden
          craftsmanship for both residential and commercial projects.
        </SectionHeading>

        <div className="mt-14">
          <Slider {...settings}>
            {SERVICES.map((item) => (
              <div key={item.id}>
                <ServiceCard item={item} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-4 flex justify-center">
          <Link to="/services/all" className="btn-outline !border-gold-400 !text-gold-300 hover:!text-white">
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Strip1;
