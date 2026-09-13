import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { PiQuotes } from "react-icons/pi";
import { HiOutlineChevronDown } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroImg2 from "../../assets/hero2.webp";
import heroImg4 from "../../assets/hero4.webp";
import heroImg6 from "../../assets/realImages/newImages/hero1.webp";
import heroImg7 from "../../assets/realImages/newImages/hero2.webp";
import character1 from "../../assets/characters/character1.webp";
import character2 from "../../assets/characters/character2.webp";
import character3 from "../../assets/characters/character3.webp";

import Strip1 from "./Strip1";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import AboutusStrip from "../aboutus/AboutusStrip";
import WhyChooseUs from "../whychooseus/WhyChooseUs";
import QuantityBar from "../quantity/QuantityBar";
import ProjectsHomeScreen from "../projects/ProjectsHomeScreen";
import Reveal from "../../components/ui/Reveal";
import SectionHeading from "../../components/ui/SectionHeading";

const HERO_SLIDES = [
  {
    id: "craftsmanship",
    image: heroImg2,
    title: "Professional & Reliable Works",
    copy: "Our dedicated workforce is the driving force behind our success — guided by precision and pride in every weld.",
  },
  {
    id: "dedication",
    image: heroImg4,
    title: "Built to Last, Finished to Impress",
    copy: "We intend to continue working diligently to satisfy every cherished client, on every project.",
  },
  {
    id: "vision",
    image: heroImg6,
    title: "Your Vision, Our Expertise",
    copy: "Creating lasting impressions through quality craftsmanship in glass, steel and timber.",
  },
  {
    id: "excellence",
    image: heroImg7,
    title: "Committed to Excellence",
    copy: "Every project is delivered to a standard that exceeds expectations — inside and out.",
  },
];

/**
 * PLACEHOLDER CONTENT — these are sample quotes used to build the layout.
 * Replace with real, attributable client testimonials before the site goes
 * live; do not publish invented reviews.
 */
const TESTIMONIALS = [
  {
    id: "t1",
    name: "Client name",
    town: "Colombo",
    image: character1,
    description:
      "Sample testimonial — replace this text with a genuine quote from a completed project.",
  },
  {
    id: "t2",
    name: "Client name",
    town: "Ragama",
    image: character2,
    description:
      "Sample testimonial — replace this text with a genuine quote from a completed project.",
  },
  {
    id: "t3",
    name: "Client name",
    town: "Negombo",
    image: character3,
    description:
      "Sample testimonial — replace this text with a genuine quote from a completed project.",
  },
];

const heroSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1200,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  pauseOnHover: false,
  cssEase: "cubic-bezier(0.16, 1, 0.3, 1)",
};

function Hero() {
  return (
    <section className="relative">
      <Slider {...heroSettings}>
        {HERO_SLIDES.map((slide) => (
          <div key={slide.id}>
            <div className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
              {/* Slowly drifting background (Ken Burns) */}
              <div
                className="absolute inset-0 animate-ken-burns bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-hidden="true"
              />
              {/* Legibility veil */}
              <div
                className="absolute inset-0 bg-hero-veil"
                aria-hidden="true"
              />

              <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
                <span className="eyebrow mb-5 !text-gold-300 animate-fade-down">
                  HK Holdings — since 2009
                </span>

                <h1
                  className="max-w-4xl font-display text-fluid-h1 font-extrabold uppercase leading-[1.05] text-white text-balance animate-fade-up"
                  style={{ animationDelay: "120ms" }}
                >
                  {slide.title}
                </h1>

                <p
                  className="mt-5 max-w-xl text-fluid-body text-white/80 text-pretty animate-fade-up"
                  style={{ animationDelay: "260ms" }}
                >
                  {slide.copy}
                </p>

                <div
                  className="mt-9 flex flex-col gap-3 xs:flex-row animate-fade-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <Link to="/services/all" className="btn-primary btn-sheen">
                    Discover more
                  </Link>
                  <Link to="/contact" className="btn-ghost-light">
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-20 z-10 flex justify-center">
        <HiOutlineChevronDown className="animate-float text-3xl text-white/70" />
      </div>

      <div className="h-2 w-full bg-gold-500" />
    </section>
  );
}

function TestimonialCard({ description, name, image, town }) {
  return (
    <article className="card-hover flex h-full w-[85vw] shrink-0 snap-center flex-col gap-6 p-8 sm:w-[420px]">
      <PiQuotes className="text-4xl text-gold-400" />
      <p className="flex-1 text-fluid-body italic text-ink-500">
        “{description}”
      </p>
      <div className="flex items-center gap-4 border-t border-ink-100 pt-5">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-14 w-14 rounded-full object-cover ring-2 ring-gold-200"
        />
        <div>
          <h3 className="font-display text-base font-semibold text-ink-900">
            {name}
          </h3>
          <p className="text-xs uppercase tracking-wider text-gold-500">
            {town}
          </p>
        </div>
      </div>
    </article>
  );
}

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutusStrip />
      <Strip1 />
      <WhyChooseUs />
      <QuantityBar />
      <ProjectsHomeScreen />

      {/* Testimonials */}
      <section className="section bg-gold-50">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our customers say"
            align="center"
          />

          <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {TESTIMONIALS.map((item, index) => (
              <Reveal
                key={item.id}
                variant="up"
                delay={index * 120}
                className="flex"
              >
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="relative overflow-hidden bg-ink-900 py-20">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg4})` }}
          aria-hidden="true"
        />
        <div className="container relative text-center">
          <Reveal variant="up">
            <h2 className="font-display text-fluid-h2 font-bold uppercase text-white text-balance">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-fluid-body text-white/70">
              Tell us what you need — glass, steel, timber or a full build. We’ll
              get back to you with honest advice and a clear quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary btn-sheen">
                Request a quote
              </Link>
              <a href="tel:+94705123804" className="btn-ghost-light">
                Call 070 5123 804
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BottomFooter />
    </div>
  );
}

export default Home;
