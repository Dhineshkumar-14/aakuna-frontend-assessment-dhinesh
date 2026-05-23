import React from "react";
import HeroImage from "../../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full">
        <img
          src={HeroImage}
          alt="Hero Banner"
          className="
            w-full
            h-[180px]
            sm:h-[250px]
            md:h-[350px]
            lg:h-[450px]
            xl:h-[550px]
            object-cover
            object-center
            block
          "
        />
      </div>
    </section>
  );
};

export default HeroBanner;
