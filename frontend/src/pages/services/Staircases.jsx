import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function Staircases() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Staircase Solutions"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Staircases" },
        ]}
      />

      <FeatureSplit
        tone="gold"
        title={"Staircase Solutions - Elevate Your Space with Style & Strength"}
        description={
          "Our staircase solutions combine functionality, durability, and aesthetic appeal to enhance any space. Whether you need a modern glass staircase, a sleek steel structure, or a classic wooden design, we offer custom-built solutions that ensure safety, stability, and elegance. Designed for residential, commercial, and industrial spaces, our staircases provide a seamless blend of strength and sophistication, tailored to match your architectural vision."
        }
        image={railingImg1}
      />

      <Footer />
      <BottomFooter />
    </>
  );
}

export default Staircases;
