import React from "react";

import MapBackgroundImage from "../../assets/images/map-bg.webp";

import FacebookIcon from "../../assets/images/fb.png";
import TwitterIcon from "../../assets/images/tw.png";
import YoutubeIcon from "../../assets/images/yt.png";

import { Clock3, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="
        relative
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${MapBackgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-14">
        <div
          className="
            flex
            flex-wrap
            justify-between
            gap-8

            text-white

            mb-10
          "
        >
          <div className="min-w-[180px] flex-1">
            <h3 className="text-lg md:text-xl font-light mb-2">Address</h3>

            <p className="text-sm md:text-base leading-6 text-gray-200">
              4340 Hwy 7 E, Markham, ON L3R 1L9
            </p>
          </div>

          <div className="min-w-[180px] flex-1">
            <h3 className="text-lg md:text-xl font-light mb-2">Phone</h3>

            <p className="text-sm md:text-base text-gray-200">(905) 752-0881</p>
          </div>

          <div className="min-w-[180px] flex-1">
            <h3 className="text-lg md:text-xl font-light mb-2">Email</h3>

            <p className="text-sm md:text-base break-all text-gray-200">
              william@markhaminfiniti.com
            </p>
          </div>

          <div className="min-w-[180px] flex-1">
            <h3 className="text-lg md:text-xl font-light mb-2">Follow us on</h3>

            <div className="flex items-center gap-3">
              <img
                src={FacebookIcon}
                alt="facebook"
                className="
                  w-7
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

              <img
                src={TwitterIcon}
                alt="twitter"
                className="
                  w-7
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

              <img
                src={YoutubeIcon}
                alt="youtube"
                className="
                  w-7
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />
            </div>
          </div>
        </div>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center

            gap-5
          "
        >
          <button
            className="
              w-full
              sm:w-[200px]

              h-[50px]

              bg-white

              rounded-sm

              flex
              items-center
              justify-center
              gap-3

              shadow-lg

              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Clock3 size={22} className="text-[#3a3a3a] shrink-0" />

            <span
              className="
                text-md
                md:text-md

                text-[#3a3a3a]
                font-medium
              "
            >
              Dealership Hours
            </span>
          </button>

          <button
            className="
              relative

              w-full
             sm:w-[200px]

              h-[50px]

              bg-[#5B2D90]

              rounded-sm

              flex
              items-center
              justify-center
              gap-3

              shadow-lg

              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                absolute
                -top-2
                left-1/2
                -translate-x-1/2

                w-4
                h-4

                bg-[#5B2D90]
                rotate-45
              "
            />

            <Phone size={22} className="text-white shrink-0" />

            <span
              className="
                text-md
                md:text-md

                text-white
                font-medium
              "
            >
              Contact Us
            </span>
          </button>

          <button
            className="
              w-full
             sm:w-[200px]

              h-[50px]

              bg-white

              rounded-sm

              flex
              items-center
              justify-center
              gap-3

              shadow-lg

              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <MapPin size={22} className="text-[#3a3a3a] shrink-0" />

            <span
              className="
                text-md
                md:text-md

                text-[#3a3a3a]
                font-medium
              "
            >
              Location
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
