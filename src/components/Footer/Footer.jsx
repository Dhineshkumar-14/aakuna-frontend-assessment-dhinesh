import React from "react";
import { ChevronRight } from "lucide-react";

const quickLinks = [
  "Home",
  "New Vehicles",
  "Used Vehicles",
  "Service",
  "Parts",
  "Financial Services",
  "Contact Us",
  "Sitemap",
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-5 py-3 border-b border-gray-300">
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-2
            text-xs
          "
        >
          <span className="font-semibold text-gray-800">Quick Links</span>

          {quickLinks.map((link, index) => (
            <React.Fragment key={link}>
              <ChevronRight size={14} />

              <button
                type="button"
                className="
                  hover:text-[#5B2D90]
                  transition-all
                  cursor-pointer
                "
              >
                {link}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          py-4
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-2
          text-xs
          md:text-sm
        "
      >
        <p className="text-center md:text-left">
          © Copyright 2014 Markham Infiniti. All Rights Reserved.
        </p>

        <div className="text-center md:text-right">
          powered by{" "}
          <span
            className="
              text-blue-600
              font-semibold
              cursor-pointer
            "
          >
            e-DEALER.CA
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
