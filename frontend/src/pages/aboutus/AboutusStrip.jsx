import React from "react";
import { Link } from "react-router-dom";
import { RiSettingsFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import image1 from "../../assets/about1.png";
import image2 from "../../assets/realImages/newImages/heroAboutusImg1.webp";
import Reveal from "../../components/ui/Reveal";

const HIGHLIGHTS = [
  "High quality material",
  "Highest standard of work",
  "Trusted & friendly team",
  "Guaranteed service",
];

function AboutusStrip() {
  return (
    <section className="section container">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5 lg:gap-16">
        {/* Images */}
        <Reveal variant="left" className="md:col-span-2">
          <div className="flex justify-center gap-4">
            <div className="img-frame h-56 w-36 shadow-lift sm:h-72 sm:w-44">
              <img src={image1} alt="HK Holdings craftsmanship" loading="lazy" />
            </div>
            <div className="img-frame mt-10 h-56 w-36 shadow-lift sm:h-72 sm:w-44">
              <img
                src={image2}
                alt="A completed HK Holdings installation"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="md:col-span-3">
          <Reveal variant="fade" as="span" className="eyebrow">
            About us
          </Reveal>

          <Reveal variant="up" delay={80} className="mt-4">
            <h2 className="text-lg font-medium uppercase tracking-wide text-ink-700 md:text-xl">
              Project with expert, metal and glass
            </h2>
            <p className="mt-1 font-display text-fluid-h2 font-bold uppercase text-ink-900">
              Metal collaboration
            </p>
          </Reveal>

          <Reveal
            variant="up"
            delay={160}
            className="mt-5 max-w-xl text-fluid-body text-ink-500"
          >
            As one of the leading firms in Sri Lanka, we deliver our maximum
            production in a high quality manner using the latest technology.
          </Reveal>

          <Reveal variant="up" delay={240} className="mt-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-600">
                    <HiCheck className="text-sm" />
                  </span>
                  <span className="text-sm text-ink-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Badge — now sits in flow instead of escaping the section */}
          <Reveal
            variant="right"
            delay={320}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gold-500 px-6 py-3 text-white shadow-gold"
          >
            <RiSettingsFill className="animate-[spin_6s_linear_infinite] text-xl" />
            <p className="font-display font-semibold capitalize">
              Innovation at every step
            </p>
          </Reveal>

          <Reveal variant="up" delay={400} className="mt-8">
            <Link to="/about" className="btn-primary btn-sheen">
              Discover more
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutusStrip;
