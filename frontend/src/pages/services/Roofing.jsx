import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function Roofing() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Steel & Glass Roofing"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Roofing" },
        ]}
      />

      <FeatureSplit
        tone="gold"
        title={"Roofing – Durable & Weather-Resistant Solutions"}
        description={
          "Protect your home or business with our high-performance roofing solutions. We offer durable, energy-efficient, and weather-resistant roofing options that ensure long-term safety and style. Whether you need metal, tile, or modern roofing materials, our expert craftsmanship guarantees superior protection and visual appeal."
        }
        image={railingImg1}
      />

      <Footer />
      <BottomFooter />
    </>
  );
}

export default Roofing;
