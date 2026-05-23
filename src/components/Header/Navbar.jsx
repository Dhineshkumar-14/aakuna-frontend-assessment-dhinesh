import Arrow from "../../assets/images/sub_menu_arw.png";

const navLinks = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "New Vehicles",
  },
  {
    id: 3,
    label: "Used Vehicles",
  },
  {
    id: 4,
    label: "Service",
  },
  {
    id: 5,
    label: "Parts",
  },
  {
    id: 6,
    label: "Financial Services",
  },
  {
    id: 7,
    label: "Contact Us",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full" aria-label="Main Navigation">
      <div className="w-[95%] xl:w-[90%] mx-auto">
        <ul className="flex items-center justify-between">
          {navLinks.map((item, index) => (
            <li
              key={item.id}
              className="relative flex  py-1.5 flex-col items-center group"
            >
              <button
                type="button"
                className={`px-4 text-sm text-gray-700 whitespace-nowrap transition-all duration-300 hover:text-black ${
                  index !== navLinks.length - 1
                    ? "border-r border-dotted border-gray-400"
                    : ""
                }`}
              >
                {item.label}
              </button>
              <img
                src={Arrow}
                alt="Arrow Indicator"
               
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
