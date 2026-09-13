import React from "react";
import { Link } from "react-router-dom";

/**
 * The previous version hard-coded "2024" and rendered four <button>s that did
 * nothing. The year is now derived, and only real destinations are linked.
 */
function BottomFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gold-600 text-white">
      <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
        <p className="text-center sm:text-left">
          © {year} HK Holdings. All rights reserved.
        </p>

        <nav aria-label="Legal" className="flex items-center gap-5">
          <Link
            to="/about"
            className="transition-colors duration-200 hover:text-ink-900"
          >
            About
          </Link>
          <Link
            to="/services/all"
            className="transition-colors duration-200 hover:text-ink-900"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="transition-colors duration-200 hover:text-ink-900"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default BottomFooter;
