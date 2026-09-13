import React from "react";
import { Link } from "react-router-dom";
/* The old `commonheroimage.png` was only 864x506 and carried a corrupted
   dithered band across its lower half, which showed as a hard seam behind the
   banner text. hero3 is a full-resolution workshop photograph. */
import defaultHeroImage from "../../assets/hero3.webp";

/**
 * Shared banner for every inner page.
 *
 * Replaces the block that was copy-pasted across ~11 pages, where the heading
 * inherited the default dark heading colour and became almost invisible
 * against the dark hero image, and the image used `w-screen h-[100vh]`
 * (wider than the viewport once a scrollbar is present → horizontal overflow).
 */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image = defaultHeroImage,
  crumbs = [],
}) {
  return (
    <section className="relative isolate flex min-h-[46vh] items-center justify-center overflow-hidden pt-24 pb-16 md:min-h-[54vh] md:pt-28">
      {/* Background */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full animate-ken-burns object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/90 via-ink-950/75 to-ink-950/90"
        aria-hidden="true"
      />

      <div className="container text-center">
        {eyebrow && (
          <span className="eyebrow mb-4 !text-gold-300 animate-fade-down">
            {eyebrow}
          </span>
        )}

        <h1 className="font-display text-fluid-h1 font-extrabold uppercase leading-tight text-white text-balance animate-fade-up">
          {title}
        </h1>

        {subtitle && (
          <p
            className="mx-auto mt-5 max-w-2xl text-fluid-body text-white/75 text-pretty animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mt-7 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <ol className="flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-wider text-white/60">
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-gold-300"
              >
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-gold-500">
                  /
                </span>
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="transition-colors duration-200 hover:text-gold-300"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-300">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2 bg-gold-500" />
    </section>
  );
}
