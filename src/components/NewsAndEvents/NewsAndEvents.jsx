import React from "react";

import HeadlineArrowIcon from "../../assets/images/headline-arrow.png";

import VideoRightArrowIcon from "../../assets/images/video-right-arrow.png";
import VideoLeftArrowIcon from "../../assets/images/video-left-arrow.png";

import EventImage from "../../assets/images/event.png";

import ReadMoreIcon from "../../assets/images/read-more.png";

const NewsAndEvents = () => {
  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-4">
        <div>
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
            News And Events
          </h2>

          <img src={HeadlineArrowIcon} alt="Headline Arrow" className="" />
        </div>

        <div className="flex items-center gap-3 pt-1">
          <img
            src={VideoLeftArrowIcon}
            alt="left arrow"
            className="w-4 cursor-pointer hover:opacity-70 transition-all"
          />

          <img
            src={VideoRightArrowIcon}
            alt="right arrow"
            className="w-4 cursor-pointer hover:opacity-70 transition-all"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3
          className="
            text-base
            md:text-lg
            text-gray-600
            mb-4
          "
        >
          <span className="text-gray-300 font-bold">|</span> Infiniti reveals
          Q30 Concept
        </h3>

        <div className="overflow-hidden rounded-sm h-[220px] md:h-[260px]">
          <img
            src={EventImage}
            alt="event"
            className="
      w-full
      h-full
      object-cover
      transition-all
      duration-300
      hover:scale-105
    "
          />
        </div>

        <p
          className="
            mt-4

            text-sm
            md:text-base

            text-gray-500
            leading-7
          "
        >
          Infiniti today revealed the next step in its strategy to expand into
          new premium segments with the debut of the Q30 Concept at the
          Frankfurt Motor Show. The sleek, seductive Q30 Concept...
        </p>

        <div
          className="
            flex
            items-center
            gap-2

            mt-3

            cursor-pointer
            group
          "
        >
          <span
            className="
              text-sm
              md:text-base

              text-purple-900
              font-medium
            "
          >
            Read More
          </span>

          <img
            src={ReadMoreIcon}
            alt="read more"
            className="
              w-4

              transition-all
              duration-300

              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
