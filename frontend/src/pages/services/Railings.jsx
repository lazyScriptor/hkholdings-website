import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function Railings() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Railings - Strength, Safety, and Style"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Railings" },
        ]}
      />


      <FeatureSplit
        tone="gold"
        title={"Glass Railings – Sleek, Modern, and Safe"}
        description={
          "Enhance your space with elegant glass railings that offer a seamless blend of style and security. Perfect for balconies, staircases, and terraces, our glass railings provide unobstructed views while maintaining durability and strength. Designed with high-quality tempered glass and sturdy metal framing, they ensure safety without compromising aesthetics. Whether for residential or commercial spaces, our glass railings add a touch of sophistication while maximizing openness and natural light."
        }
        image={railingImg1}
      />
      <FeatureSplit
        reverse
        tone="ink"
        title={"Wood & Steel Railings – Strength Meets Timeless Elegance"}
        description={
          "Our wood and steel railings combine the durability of steel with the natural warmth of wood, creating a perfect balance of strength and style. Ideal for staircases, balconies, and outdoor spaces, these railings offer long-lasting performance with a classic, refined look. The steel framework ensures stability and resilience, while the wooden elements add a touch of elegance and warmth. Whether modern or traditional, our wood and steel railings enhance any space with both beauty and security."
        }
        image={railingImg2}
      />

      <div className="h-8 bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}

export default Railings;
