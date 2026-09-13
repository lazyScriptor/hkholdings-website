import React from "react";
import { MdOutlineWorkspacePremium, MdPeople } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import backgroundImage from "../../assets/qtybackground.png";
import CountUp from "../../components/ui/CountUp";
import Reveal from "../../components/ui/Reveal";

/**
 * NOTE: confirm these figures with HK Holdings before launch.
 * The previous values claimed "2,245,264 Members", which is not a credible
 * number for the business and undermined the rest of the page.
 */
const STATS = [
  {
    id: "years",
    icon: MdOutlineWorkspacePremium,
    value: 16,
    suffix: "+",
    label: "Years of experience",
  },
  {
    id: "projects",
    icon: AiFillProject,
    value: 350,
    suffix: "+",
    label: "Projects completed",
  },
  {
    id: "clients",
    icon: BiSolidLike,
    value: 280,
    suffix: "+",
    label: "Happy clients",
  },
  {
    id: "team",
    icon: MdPeople,
    value: 45,
    suffix: "+",
    label: "Skilled professionals",
  },
];

function QuantityBar() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink-950/80" aria-hidden="true" />

      <div className="container relative">
        <Reveal variant="up" className="text-center">
          <h2 className="font-display text-fluid-h2 font-bold uppercase text-white text-balance">
            Helping local business reinvent
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-fluid-body text-white/70">
            Sixteen years of glass and iron work across Sri Lanka — measured in
            finished projects and returning clients.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.id}
              variant="up"
              delay={index * 120}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-gold-500/50 hover:bg-gold-500/10 lg:p-8"
            >
              <stat.icon className="mx-auto text-4xl text-gold-400 transition-transform duration-500 group-hover:scale-110 lg:text-5xl" />
              <p className="mt-4 font-display text-3xl font-extrabold text-white lg:text-4xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/60 lg:text-sm">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuantityBar;
