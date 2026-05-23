import { useState } from "react";
import ArrowIcon from "../../assets/images/sub-menu-arw.png";

const navLinks = [
  {
    id: 1,
    label: "Home",
    isActive: true,
  },
  {
    id: 2,
    label: "New Vehicles",
    isActive: false,
  },
  {
    id: 3,
    label: "Used Vehicles",
    isActive: false,
  },
  {
    id: 4,
    label: "Service",
    isActive: false,
  },
  {
    id: 5,
    label: "Parts",
    isActive: false,
  },
  {
    id: 6,
    label: "Financial Services",
    isActive: false,
  },
  {
    id: 7,
    label: "Contact Us",
    isActive: false,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white relative" aria-label="Main Navigation">
      <div className="flex items-center justify-end px-4 py-3 lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            text-3xl
            text-gray-700
            cursor-pointer
          "
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className="w-full">
        <ul
          className={`
    ${isOpen ? "flex" : "hidden"}
    lg:flex
    flex-col
    md:flex-row
    md:items-center
    md:justify-around

    absolute
    top-full
    left-0
    w-full

    md:static

    bg-white
    md:bg-transparent

    shadow-lg
    md:shadow-none

    z-50
  `}
        >
          {navLinks.map((item, index) => (
            <li
              key={item.id}
              className="
                relative
                flex
                flex-col
                items-start
                lg:items-center
                group
                w-full
                lg:w-auto py-3
                  lg:py-4
              "
            >
              <button
                type="button"
                className={`
                  w-full
                  lg:w-auto
                  px-5
                  xl:px-8
                 
                  text-sm
                  xl:text-[15px]
                  whitespace-nowrap
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-between
                  gap-3
                  cursor-pointer
                  hover:text-purple-700
                  hover:bg-gray-50
                  lg:hover:bg-transparent
                  ${
                    item.isActive
                      ? "text-purple-700 font-semibold"
                      : "text-gray-600"
                  }
                  ${
                    index !== navLinks.length - 1
                      ? "lg:border-r-2 lg:border-dotted lg:border-gray-300 "
                      : ""
                  }
                `}
              >
                {item.label}

                <span className="lg:hidden text-lg">›</span>
              </button>

              <img
                src={ArrowIcon}
                alt="Arrow Indicator"
                className={`
                  hidden lg:block
                  absolute
                  -bottom-[10px]
                  transition-all
                  duration-300
                  ${item.isActive ? "opacity-0" : "opacity-100 "}
                `}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
