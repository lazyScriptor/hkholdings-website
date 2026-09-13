import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function Gates() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Gates Wicket, Wood, Steel & Amano"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Gates" },
        ]}
      />

      <FeatureSplit
        tone="gold"
        title={"Gates – Secure & Elegant Entrances"}
        description={
          "Our custom-designed gates provide the perfect combination of security, durability, and style. From ornate wrought iron to sleek modern designs, we offer a wide range of gate solutions to suit your property’s needs. Built with high-quality materials, our gates ensure safety, convenience, and lasting performance."
        }
        image={railingImg1}
      />

      <Footer />
      <BottomFooter />
    </>
  );
}

export default Gates;
