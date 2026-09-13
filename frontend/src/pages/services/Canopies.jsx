import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function Canopies() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Glass & Polycarbonate Canopies"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Canopies" },
        ]}
      />

      <FeatureSplit
        tone="gold"
        title={"Canopies - Stylish & Functional Protection"}
        description={
          "Enhance your outdoor space with our durable and stylish canopies, designed to provide shade, protection, and aesthetic appeal. Whether for residential, commercial, or industrial use, our canopies are built with high-quality materials to withstand harsh weather conditions while complementing your property's design."
        }
        image={railingImg1}
      />

      <Footer />
      <BottomFooter />
    </>
  );
}

export default Canopies;
