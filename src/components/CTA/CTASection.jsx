import React from "react";

import BgDottedLine from "../../assets/images/bg_dotted_Line.png";
import CTA01 from "../../assets/images/cta_01.png";
import CTA02 from "../../assets/images/cta_02.png";
import CTA03 from "../../assets/images/cta_03.png";
import CTA04 from "../../assets/images/cta_04.png";

import CTAArrow from "../../assets/images/cta_arw.png";
import CTAArrowViolet from "../../assets/images/cta_violet.png";
import Shadow from "../../assets/images/shadow.png";

const ctaItems = [
  {
    id: 1,
    icon: CTA01,
    title: "Shop New Vehicles",
    arrow: CTAArrow,
  },
  {
    id: 2,
    icon: CTA02,
    title: "Shop Used Vehicles",
    arrow: CTAArrow,
  },
  {
    id: 3,
    icon: CTA03,
    title: "Service & Parts",
    arrow: CTAArrowViolet,
    active: true,
  },
  {
    id: 4,
    icon: CTA04,
    title: "Specials",
    arrow: CTAArrow,
  },
];

const CTASection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <img
        src={BgDottedLine}
        alt="Dotted Line"
        className="absolute top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 flex  flex-wrap justify-around">
        {ctaItems.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col items-center justify-center 
            rounded-full border-2 w-40 h-40  text-center cursor-pointer
            ${
              item.active
                ? "border-purple-700 bg-purple-950 text-white"
                : "border-gray-300 bg-white"
            }`}
          >
            {item.active && (
              <img
                src={item.arrow}
                alt="Arrow"
                className="absolute -top-6 w-10"
              />
            )}

            <img src={item.icon} alt={item.title} className="w-12 mb-3" />

            <span className="text-sm font-medium px-2">{item.title}</span>
            {!item.active && (
              <img
                src={item.arrow}
                alt="Arrow"
                className="absolute -bottom-6 w-10"
              />
            )}
            <img src={Shadow} alt="Shadow" className="absolute -bottom-15 " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTASection;
