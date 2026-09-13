import React from "react";
import PageHero from "../../components/ui/PageHero";
import FeatureSplit from "../../components/ui/FeatureSplit";

import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import railingImg1 from "../../assets/realImages/carousel1.jpg";
import railingImg2 from "../../assets/realImages/carousel3.jpg";
function WarehouseConstruction() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Warehouse Construction"
        crumbs={[
          { label: "Services", to: "/services/all" },
          { label: "Warehouse Construction" },
        ]}
      />

      <FeatureSplit
        tone="gold"
        title={"Warehouse Construction – Built for Efficiency and Durability"}
        description={
          "We specialize in high-quality warehouse construction designed to meet your storage and operational needs. Our warehouses are built with strong, durable materials, ensuring long-lasting performance and structural integrity. Whether for manufacturing, logistics, or storage, we focus on maximizing space utilization, ventilation, and accessibility while maintaining cost efficiency. With a combination of modern engineering, precision planning, and industry expertise, we deliver customized warehouse solutions that enhance productivity and streamline your operations"
        }
        image={railingImg1}
      />


      <Footer />
      <BottomFooter />
    </>
  );
}

export default WarehouseConstruction;
