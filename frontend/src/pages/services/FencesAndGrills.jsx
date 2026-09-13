import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function FencesAndGrills() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Fences and Grills"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Fences & Grills" },
        ]}
      />

      <FeatureSplit
        tone="gold"
        title={"Fences & Grills – Secure & Stylish Solutions"}
        description={
          "Enhance the security and aesthetics of your property with our durable and stylish fences and grills. Designed to provide privacy, protection, and decorative appeal, our solutions are crafted from high-quality materials such as steel, wrought iron, wood, and aluminum. Whether for residential, commercial, or industrial spaces, we offer custom designs that blend strength, functionality, and elegance to perfectly suit your needs."
        }
        image={railingImg1}
      />

      <Footer />
      <BottomFooter />
    </>
  );
}

export default FencesAndGrills;
