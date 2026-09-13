import React from "react";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiWhatsappLogoLight, PiTiktokLogo } from "react-icons/pi";
import logo from "../assets/logo.webp";
import OpenDirectionsButton from "./OpenDirectionsButton";
import { MAIN_LINKS, SERVICE_LINKS } from "../data/navigation";

const SOCIALS = [
  {
    id: "facebook",
    label: "Facebook",
    icon: FiFacebook,
    href: "https://www.facebook.com/HKHoldingsPvtLtd/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: TbBrandLinkedin,
    href: "https://www.linkedin.com/company/hk-holdings2009/about/",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: PiWhatsappLogoLight,
    href: "https://wa.me/+94705123804",
  },
  {
    id: "tiktok",
    label: "TikTok",
    icon: PiTiktokLogo,
    href: "https://www.tiktok.com/@hkholding?_t=ZS-8uQDMb4esNz&_r=1",
  },
];

function Footer() {
  return (
    <footer className="relative bg-ink-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link to="/" aria-label="HK Holdings — home">
              <img
                src={logo}
                alt="HK Holdings"
                className="w-32 rounded-xl bg-white/90 p-3 shadow-lift transition-transform duration-500 ease-out-expo hover:scale-105"
              />
            </Link>
            <p className="text-center text-sm leading-relaxed text-white/60 sm:text-left">
              Professional &amp; reliable glass and iron works since 2009 —
              serving homeowners, builders and businesses across Sri Lanka.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="text-center sm:text-left">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
              Links
            </h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {MAIN_LINKS.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-gold-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="text-center sm:text-left">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
              Services
            </h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {SERVICE_LINKS.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-gold-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
              Contact
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              <div className="group flex items-center justify-center gap-2 sm:justify-start">
                <BiSolidPhoneCall className="shrink-0 text-white/40 transition-colors duration-200 group-hover:text-gold-400" />
                <p className="text-sm text-white/60">
                  <a
                    href="tel:+94716195913"
                    className="transition-colors duration-200 hover:text-gold-400"
                  >
                    071 6195913
                  </a>
                  {" / "}
                  <a
                    href="tel:+94113425370"
                    className="transition-colors duration-200 hover:text-gold-400"
                  >
                    011 3425370
                  </a>
                </p>
              </div>

              {/*
                Previously this row displayed "www.hkholdings.lk" but linked to a
                personal gmail address. It now points at the site itself.
              */}
              <div className="group flex items-center justify-center gap-2 sm:justify-start">
                <CiGlobe className="shrink-0 text-white/40 transition-colors duration-200 group-hover:text-gold-400" />
                <Link
                  to="/"
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-gold-400"
                >
                  www.hkholdings.lk
                </Link>
              </div>

              <OpenDirectionsButton />
            </div>

            {/* Social */}
            <div className="mt-7">
              <h3 className="text-sm font-semibold text-white/80">Follow us</h3>
              <div className="mt-3 flex justify-center gap-3 sm:justify-start">
                {SOCIALS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/70 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:bg-gold-500 hover:text-white"
                  >
                    <item.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
