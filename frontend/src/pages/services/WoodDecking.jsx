import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function WoodDecking() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Wood Decking"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Wood Decking" },
        ]}
      />

      <FeatureSplit
        tone="gold"
        title={"Wood Decking – Natural Elegance & Lasting Durability"}
        description={
          "Enhance your outdoor and indoor spaces with premium-quality wood decking that combines natural beauty, durability, and functionality. Our expertly crafted decking solutions provide a warm, stylish, and inviting ambiance, perfect for patios, balconies, pool decks, and more. Using high-quality, weather-resistant wood, we ensure long-lasting performance with minimal maintenance. Whether you prefer a classic, rustic, or modern aesthetic, our wood decking solutions are designed to withstand the elements while adding timeless charm to your property."
        }
        image={railingImg1}
      />

      <Footer />
      <BottomFooter />
    </>
  );
}

export default WoodDecking;
