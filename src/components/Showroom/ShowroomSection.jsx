import React from "react";

import HeadlineArrowIcon from "../../assets/images/headline-arrow.png";
import PlusIcon from "../../assets/images/plus.png";

import Car01Image from "../../assets/images/car-01.png";
import Car02Image from "../../assets/images/car-02.png";
import Car03Image from "../../assets/images/car-03.png";
import Car04Image from "../../assets/images/car-04.png";

import ShowroomLeftArrowIcon from "../../assets/images/showroom-arrow-left.png";
import ShowroomRightArrowIcon from "../../assets/images/showroom-arrow-right.png";

const showroomItems = [
  {
    id: 1,
    image: Car01Image,
    carModel: "2014 Q50",
    price: "37,500",
  },
  {
    id: 2,
    image: Car02Image,
    carModel: "2014 QX70",
    price: "53,350",
  },
  {
    id: 3,
    image: Car03Image,
    carModel: "2014 QX50",
    price: "37,900",
  },
  {
    id: 4,
    image: Car04Image,
    carModel: "2014 QX60",
    price: "43,000",
  },
];

const ShowroomSection = () => {
  return (
    <section className="relative w-full py-10 md:py-14 bg-[#f7f7f7] overflow-hidden">
      <div className="w-[95%] max-w-[1400px] mx-auto mb-8">
        <h2
          className="
            inline-block
            text-xl
            md:text-2xl
            font-bold
            text-purple-900
            uppercase
            tracking-wide
            border-b-2
            border-gray-300
            pb-1
          "
        >
          Model Showroom
        </h2>

        <img src={HeadlineArrowIcon} alt="Headline Arrow" className="" />
      </div>

      <div className="relative">
        <button
          className="
            hidden lg:flex
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            items-center
            justify-center
          "
        >
          <img
            src={ShowroomLeftArrowIcon}
            alt="Previous"
            className="w-3 cursor-pointer"
          />
        </button>

        <div
          className="
            flex
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            scrollbar-hide

            border-y
            border-gray-300
          "
        >
          {showroomItems.map((showroomItem) => (
            <div
              key={showroomItem.id}
              className="
                snap-start
                shrink-0

                w-full
                sm:w-1/2
                lg:w-1/4

                relative
                bg-[#f7f7f7]
                border-r
                border-gray-300

                flex
                flex-col
                items-center
                justify-center
                text-center

                py-6
                px-4

                hover:bg-white
                transition-all
                duration-300
                group
              "
            >
              <h3
                className="
                  text-lg
                  md:text-xl
                  font-bold
                  text-gray-600
                  uppercase
                  mb-5
                "
              >
                {showroomItem.carModel}
              </h3>

              <img
                src={showroomItem.image}
                alt={showroomItem.carModel}
                className="
                  w-[180px]
                  md:w-[220px]
                  object-contain
                  mb-6

                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              />

              <p className="text-sm text-gray-600">
                Starting at ${showroomItem.price}
              </p>

              <button
                className="
                  absolute
                  bottom-0
                  right-0

                  w-6
                  h-6

                  flex
                  items-center
                  justify-center
                "
              >
                <img src={PlusIcon} alt="Plus" className="w-6 cursor-pointer" />
              </button>
            </div>
          ))}
        </div>

        <button
          className="
            hidden lg:flex
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            items-center
            justify-center
          "
        >
          <img
            src={ShowroomRightArrowIcon}
            alt="Next"
            className="w-3 cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
};

export default ShowroomSection;
