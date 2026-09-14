import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import logo from "../assets/logo.webp";
import MobileNavigation from "./MobileNavigation";
import {
  MAIN_LINKS,
  SERVICE_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../data/navigation";

/**
 * Site header.
 *
 * Transparent while the hero is in view, then condenses to a solid, blurred
 * bar once the user scrolls. Navigation uses react-router <Link>, so moving
 * between pages no longer triggers a full page reload.
 */
function NavBarCustomer({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  /* Condense the bar after a small scroll offset */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the dropdown whenever the route changes */
  useEffect(() => setServicesOpen(false), [pathname]);

  /* Close on Escape and on outside click (keyboard + pointer users) */
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e) => e.key === "Escape" && setServicesOpen(false);
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [servicesOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  /* Small delay stops the menu flickering shut when crossing the gap */
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const isServicesRoute = pathname.startsWith("/services");

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium transition-colors duration-300
     after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-gold-500
     after:transition-all after:duration-300 after:content-['']
     ${
       isActive
         ? "text-gold-400 after:w-full"
         : "text-white/85 hover:text-gold-300 after:w-0 hover:after:w-full"
     }`;

  return (
    <div className="relative">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300
          ${
            scrolled
              ? "bg-ink-950 shadow-lift backdrop-blur-md"
              : "bg-gradient-to-b from-ink-950/85 via-ink-950/40 to-transparent"
          }`}
      >
        <nav
          aria-label="Main"
          className={`container flex items-center justify-between gap-6 transition-all duration-500
            ${scrolled ? "h-16" : "h-20"}`}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="HK Holdings — home"
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src={logo}
              alt="HK Holdings"
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-9" : "h-11"
              }`}
            />
            <span className="hidden font-display text-base font-bold uppercase leading-none tracking-wide text-white lg:block">
              HK Holdings
              <span className="block text-[10px] font-medium tracking-[0.2em] text-gold-400">
                Professional &amp; Reliable
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {MAIN_LINKS.filter((l) => l.id !== "services").map((link) => (
              <li key={link.id}>
                <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Services dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 py-1 text-sm font-medium transition-colors duration-300
                  ${
                    isServicesRoute
                      ? "text-gold-400"
                      : "text-white/85 hover:text-gold-300"
                  }`}
              >
                Services
                <MdOutlineArrowDropDown
                  className={`text-lg transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 transition-all duration-300 ease-out-expo
                  ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
              >
                <ul className="overflow-hidden rounded-xl border border-ink-100 bg-white p-2 shadow-lift">
                  <li>
                    <Link
                      to="/services/all"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink-900 transition-colors duration-200 hover:bg-gold-50 hover:text-gold-600"
                    >
                      All Services
                    </Link>
                  </li>
                  <li className="my-1 h-px bg-ink-100" />
                  {SERVICE_LINKS.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.to}
                        className="block rounded-lg px-3 py-2 text-sm text-ink-500 transition-colors duration-200 hover:bg-gold-50 hover:text-gold-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Phone CTA */}
          <a
            href={PHONE_HREF}
            className="group hidden items-center gap-2 rounded-full border border-gold-500/60 px-5 py-2
                       text-sm font-semibold text-white transition-all duration-300 ease-out-expo
                       hover:border-gold-500 hover:bg-gold-500 hover:shadow-gold md:flex"
          >
            <LuPhoneCall className="text-gold-400 transition-colors duration-300 group-hover:text-white" />
            <span>{PHONE_DISPLAY}</span>
          </a>

          {/* Mobile drawer trigger (rendered once, here) */}
          <MobileNavigation />
        </nav>
      </header>

      {children}
    </div>
  );
}

export default NavBarCustomer;
