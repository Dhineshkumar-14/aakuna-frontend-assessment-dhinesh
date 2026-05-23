import React from "react";

import HeadlineArrow from "../../assets/images/headng_line_arw.png";

const PromotionalVideo = () => {
  return (
    <section className="w-full">
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
          Promotional Video
        </h2>

        <img src={HeadlineArrow} alt="Headline Arrow" className="" />
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
          <span className="text-gray-300 font-bold">|</span> Infiniti Canada fan
          surprised with Trip of a Lifetime
        </h3>
        <div
          className="
            relative
            w-full
            overflow-hidden
            aspect-video
            shadow-md
          "
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9uufzGtoi-w"
            title="Infiniti Promotional Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PromotionalVideo;
