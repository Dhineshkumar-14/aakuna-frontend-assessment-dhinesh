import React from "react";

import HeadlineArrow from "../../assets/images/headng_line_arw.png";

import WelcomeBG from "../../assets/images/welocme_bg.png";
import viloetbg from "../../assets/images/viloet_bg.png";
import graybg from "../../assets/images/gray_bg.png";

import familyOwnedBG from "../../assets/images/family_owned.png";
import professional from "../../assets/images/professional.png";

import readmore from "../../assets/images/read-more.png";

const aboutCards = [
  {
    id: 1,
    title: "FAMILY OWNED",
    description:
      "In our continual dedication to exceed our customers’ expectations.",
    icon: familyOwnedBG,
  },
  {
    id: 2,
    title: "DEDICATED TO YOU",
    description:
      "We have grown from that first sale to now selling hundreds of Infiniti’s per year in the greater Toronto area.",
    active: true,
  },
  {
    id: 3,
    title: "FRIENDLY AND PROFESSIONAL",
    description:
      "Our Infiniti service business is one of the largest in Canada.",
    icon: professional,
  },
];

const AboutSection = () => {
  return (
    <section
      className="
        w-full
        py-10
        md:py-16
        lg:py-20

        bg-center
        bg-no-repeat
        bg-cover

        overflow-hidden
      "
      style={{
        backgroundImage: `url(${WelcomeBG})`,
      }}
    >
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
          WELCOME TO MARKHAM INFINITI
        </h2>

        <img src={HeadlineArrow} alt="Headline Arrow" />

        <p
          className="
            mt-6
            text-sm
            md:text-base
            text-gray-600
            leading-7
            max-w-6xl
          "
        >
          Markham Infiniti is a family owned business in Toronto that has been
          servicing the GTA market since Infiniti was introduced. Agincourt
          Infiniti was one of the original fifteen Infiniti dealers appointed in
          Canada in 1990, and in October 2007 we relocated to Unionville,
          Ontario under our new name “Markham Infiniti”.
        </p>
      </div>

      <div
        className="
          w-[95%]
          max-w-[1300px]
          mx-auto

          mt-14

          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3

          place-items-center

          gap-y-10
          md:gap-y-14
          xl:gap-y-10

          gap-x-8
        "
      >
        {aboutCards.map((card) => (
          <div
            key={card.id}
            className="
              relative
              group
              flex
              flex-col
              items-center
              cursor-pointer
            "
          >
            <div
              className={`
                relative

                flex
                flex-col
                items-center
                justify-center

                text-center

                transition-all
                duration-300

                w-[220px]
                h-[220px]

                sm:w-[250px]
                sm:h-[250px]

                md:w-[280px]
                md:h-[280px]

                bg-center
                bg-no-repeat
                bg-contain

                px-6
                md:px-8

                ${card.active ? "text-white" : "text-gray-700 hover:text-white"}
              `}
              style={{
                backgroundImage: `url(${card.active ? viloetbg : graybg})`,
              }}
              onMouseEnter={(e) => {
                if (!card.active) {
                  e.currentTarget.style.backgroundImage = `url(${viloetbg})`;
                }
              }}
              onMouseLeave={(e) => {
                if (!card.active) {
                  e.currentTarget.style.backgroundImage = `url(${graybg})`;
                }
              }}
            >
              {card.icon && (
                <img
                  src={card.icon}
                  alt={card.title}
                  className="
                    w-8
                    h-8
                    md:w-10

                    mb-4

                    object-contain
                  "
                />
              )}

              <h3
                className="
                  text-xs
                  sm:text-sm
                  md:text-sm

                  font-bold
                  uppercase

                  leading-5

                  mb-3
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  

                  text-[11px]
                  md:text-sm

                  leading-5

                  max-w-[180px]
                "
              >
                {card.description.length > 50
                  ? `${card.description.slice(0, 75)}...`
                  : card.description}
              </p>

              <div
                className={`
                  flex
                  items-center
                  gap-2

                  mt-4

                  transition-all
                  duration-300

                  ${
                    card.active
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }
                `}
              >
                <span
                  className="
                    text-xs
                    md:text-xs
                    font-medium
                  "
                >
                  Read More
                </span>

                <img src={readmore} alt="read more" className="w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
