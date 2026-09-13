import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 pt-24">
      <div className="text-center">
        <p className="font-display text-[clamp(4rem,18vw,10rem)] font-extrabold leading-none text-gold-500/25">
          404
        </p>
        <h1 className="mt-2 font-display text-fluid-h2 font-bold uppercase text-ink-900">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-fluid-body text-ink-500">
          The page you’re looking for doesn’t exist or has moved. Let’s get you
          back to solid ground.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary btn-sheen">
            Back to home
          </Link>
          <Link to="/services/all" className="btn-outline">
            View our services
          </Link>
        </div>
      </div>
    </section>
  );
}
