import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import logo from "../assets/logo.webp";
import {
  MAIN_LINKS,
  SERVICE_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../data/navigation";

/**
 * Mobile navigation drawer.
 *
 * Slides in from the left over a dimmed backdrop, locks body scroll while
 * open, and closes on route change or Escape.
 */
function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  /* Close whenever we navigate */
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* Lock background scrolling while the drawer is open */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
      isActive
        ? "bg-gold-500/15 text-gold-300"
        : "text-white/85 hover:bg-white/5 hover:text-gold-300"
    }`;

  return (
    <div className="md:hidden">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors duration-200 hover:bg-white/10"
      >
        <HiMenuAlt3 className="text-2xl" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 left-0 z-[70] flex w-[82vw] max-w-sm flex-col bg-ink-950 shadow-lift
                    transition-transform duration-400 ease-out-expo
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="HK Holdings" className="h-10 w-auto" />
            <span className="font-display text-sm font-bold uppercase tracking-wide text-white">
              HK Holdings
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-lg text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <HiX className="text-2xl" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {MAIN_LINKS.filter((l) => l.id !== "services").map((link) => (
              <li key={link.id}>
                <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Collapsible services group */}
            <li>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-gold-300"
              >
                Services
                <MdOutlineArrowDropDown
                  className={`text-xl transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-400 ease-out-expo ${
                  servicesOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <ul className="overflow-hidden pl-3">
                  <li>
                    <Link
                      to="/services/all"
                      className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-gold-300 transition-colors duration-200 hover:bg-white/5"
                    >
                      All Services
                    </Link>
                  </li>
                  {SERVICE_LINKS.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.to}
                        className="block rounded-lg px-4 py-2.5 text-sm text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-gold-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className="border-t border-white/10 p-5">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-600"
          >
            <LuPhoneCall />
            {PHONE_DISPLAY}
          </a>
        </div>
      </aside>
    </div>
  );
}

export default MobileNavigation;
