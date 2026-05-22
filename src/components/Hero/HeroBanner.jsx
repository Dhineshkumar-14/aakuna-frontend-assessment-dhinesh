import React from "react";
import HeroImage from "../../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <section className="w-full">
      <img
        src={HeroImage}
        alt="Hero Banner"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default HeroBanner;