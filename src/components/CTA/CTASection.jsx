import BgDottedLine from "../../assets/images/bg-dotted-line.png";

import CTA01Icon from "../../assets/images/cta-01.png";
import CTA02Icon from "../../assets/images/cta-02.png";
import CTA03Icon from "../../assets/images/cta-03.png";
import CTA04Icon from "../../assets/images/cta-04.png";

import CTAArrowIcon from "../../assets/images/cta-arrow.png";
import CTAArrowVioletIcon from "../../assets/images/cta-violet-arrow.png";

import ShadowImage from "../../assets/images/shadow.png";
const ctaItems = [
  {
    id: 1,
    icon: CTA01Icon,
    title: "Shop New Vehicles",
    arrow: CTAArrowIcon,
  },
  {
    id: 2,
    icon: CTA02Icon,
    title: "Shop Used Vehicles",
    arrow: CTAArrowIcon,
  },
  {
    id: 3,
    icon: CTA03Icon,
    title: "Service & Parts",
    arrow: CTAArrowVioletIcon,
    active: true,
  },
  {
    id: 4,
    icon: CTA04Icon,
    title: "Specials",
    arrow: CTAArrowIcon,
  },
];

const CTASection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <img
        src={BgDottedLine}
        alt="Dotted Line"
        className="
    hidden md:block
    absolute
    top-1/2
    left-1/2
    w-3/4
    -translate-x-1/2
    -translate-y-1/2
    pointer-events-none
  "
      />

      <div className="relative z-10 flex  flex-wrap justify-around">
        {ctaItems.map((item) => (
          <div
            key={item.id}
            className="
          relative
          flex
          flex-col
          items-center
          group
        "
          >
            <div className="h-8 flex items-end justify-center">
              <img
                src={CTAArrowVioletIcon}
                alt="Top Arrow"
                className={`
              w-10
              transition-all
              duration-300
              ${
                item.active
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }
            `}
              />
            </div>

            <div
              className={`
            relative
            flex
            flex-col
            items-center
            justify-center
            rounded-full
            border-2
            text-center
            cursor-pointer
            transition-all
            duration-300

            w-32 h-32
            sm:w-36 sm:h-36
            md:w-40 md:h-40

             ${
               item.active
                 ? "bg-[#5B2D90] border-[#6E3FA3] text-white"
                 : "bg-white border-gray-300 text-gray-800 hover:bg-[#5B2D90] hover:border-[#6E3FA3] hover:text-white"
             }
          `}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="
              w-10
              sm:w-11
              md:w-12
              mb-3
            "
              />

              <span className="text-xs sm:text-sm font-medium px-3">
                {item.title}
              </span>

              <img
                src={CTAArrowIcon}
                alt="Bottom Arrow"
                className={`
              absolute
              -bottom-6
              w-10
              transition-all
              duration-300
              ${item.active ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
            `}
              />
            </div>

            <div className="h-8 absolute -bottom-15 flex items-start justify-center">
              <img src={ShadowImage} alt="Shadow" className="w-[90%]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTASection;
