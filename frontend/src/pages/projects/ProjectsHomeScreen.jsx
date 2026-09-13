import React from "react";
import { Link } from "react-router-dom";
import productsImage from "../../assets/ourproducts.png";
import Reveal from "../../components/ui/Reveal";

function ProjectsHomeScreen() {
  return (
    <section className="section container">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5 lg:gap-16">
        {/* Image */}
        <Reveal
          variant="left"
          className="flex justify-center md:col-span-2"
        >
          <img
            src={productsImage}
            alt="A selection of completed HK Holdings projects"
            loading="lazy"
            className="w-full max-w-sm object-contain"
          />
        </Reveal>

        {/* Copy */}
        <div className="md:col-span-3">
          <Reveal variant="fade" as="span" className="eyebrow">
            Our products
          </Reveal>

          <Reveal variant="up" delay={80} className="mt-4">
            <h2 className="text-lg font-medium uppercase tracking-wide text-ink-700 md:text-xl">
              Recently completed
            </h2>
            <p className="mt-1 font-display text-fluid-h2 font-bold uppercase text-ink-900">
              Our latest projects
            </p>
          </Reveal>

          {/* Replaced the placeholder "loram ipsum" copy that was live on the page */}
          <Reveal
            variant="up"
            delay={160}
            className="mt-5 max-w-xl text-fluid-body text-ink-500"
          >
            From tempered glass railings and custom staircases to steel gates,
            canopies and full warehouse builds — every project leaves our
            workshop finished to the same standard. Browse our recent work to
            see the detail we put into each installation.
          </Reveal>

          <Reveal variant="up" delay={240} className="mt-8">
            <Link to="/services/all" className="btn-primary btn-sheen">
              Discover more
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHomeScreen;
