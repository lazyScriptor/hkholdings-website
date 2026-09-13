import React from "react";
import image1 from "../../assets/vector1.png";
import image2 from "../../assets/vector2.png";
import image3 from "../../assets/vector3.png";
import image4 from "../../assets/vector4.png";
import image5 from "../../assets/vector5.png";
import image6 from "../../assets/vector6.png";
import whyChooseUsImage from "../../assets/whyImage1.png";
import Reveal from "../../components/ui/Reveal";

const REASONS = [
  { id: "fast", title: "Fast service", image: image1 },
  { id: "reliable", title: "Reliability", image: image2 },
  { id: "quality", title: "Quality & better completion", image: image3 },
  { id: "after-service", title: "After service", image: image4 },
  { id: "materials", title: "High quality materials", image: image5 },
  { id: "experts", title: "Guidance of skilled experts", image: image6 },
];

function WhyChooseUs() {
  return (
    <section className="section container">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5 lg:gap-16">
        {/* Copy + reasons */}
        <div className="order-2 md:order-1 md:col-span-3">
          <Reveal variant="fade" as="span" className="eyebrow">
            Why choose us?
          </Reveal>

          <Reveal variant="up" delay={80} className="mt-4">
            <h2 className="text-lg font-medium uppercase tracking-wide text-ink-700 md:text-xl">
              Why you should choose
            </h2>
            <p className="mt-1 font-display text-fluid-h2 font-bold uppercase text-ink-900">
              Our company
            </p>
          </Reveal>

          <Reveal
            variant="up"
            delay={160}
            className="mt-5 max-w-xl text-fluid-body text-ink-500"
          >
            We are ready to create your residence, apartment, office or any other
            space exactly as you wish. Our objective is to reach the pinnacle of
            our development by ensuring customer satisfaction through quality
            products — always at a flexible service and reasonable price.
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {REASONS.map((item, index) => (
              <Reveal
                key={item.id}
                variant="up"
                delay={index * 90}
                className="group flex items-center gap-4 rounded-xl bg-ink-50 p-4 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-gold-500 hover:shadow-gold lg:p-5"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-white/70 p-2 transition-colors duration-500 group-hover:bg-white/20">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="font-display text-sm font-semibold text-ink-800 transition-colors duration-500 group-hover:text-white lg:text-base">
                  {item.title}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <Reveal
          variant="right"
          className="order-1 flex items-center justify-center md:order-2 md:col-span-2"
        >
          <div className="img-frame shadow-lift">
            <img
              src={whyChooseUsImage}
              alt="HK Holdings team at work"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyChooseUs;
