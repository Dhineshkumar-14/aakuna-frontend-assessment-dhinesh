import LocationIcon from "../../assets/images/location.png";
import CallIcon from "../../assets/images/call.png";
import TollFreeIcon from "../../assets/images/toll-free.png";
import HeaderStrip from "../../assets/images/Header_strip.png";
import Arrow from "../../assets/images/arw.png";
import FB from "../../assets/images/fb.png";
import TW from "../../assets/images/tw.png";
import YT from "../../assets/images/yt.png";

const contactInfo = [
  {
    id: 1,
    text: "4340 Hwy 7 E, Markham, ON L3R 1L9",
    icon: LocationIcon,
    alt: "Location",
  },
  {
    id: 2,
    text: "(905) 752-0881",
    icon: CallIcon,
    alt: "Phone",
  },
  {
    id: 3,
    text: "Sales : (866) 798-1346",
    icon: TollFreeIcon,
    alt: "Toll Free",
  },
];

const socialIcons = [
  {
    id: 1,
    icon: FB,
    alt: "Facebook",
  },
  {
    id: 2,
    icon: TW,
    alt: "Twitter",
  },
  {
    id: 3,
    icon: YT,
    alt: "YouTube",
  },
];

const TopBar = () => {
  return (
    <div className="hidden lg:block w-full">
      <div
        className="
          w-full
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${HeaderStrip})`,
        }}
      >
        <div
          className="
            min-h-[45px]
            flex
            items-center
            justify-evenly
            px-1
            gap-4
          "
        >
          <div className="flex items-center  gap-3 justify-center">
            {contactInfo.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-4 h-4 object-contain shrink-0"
                />

                <p className="text-xs text-gray-700 whitespace-nowrap">
                  {item.text}
                </p>

                <span className="text-gray-400">|</span>
              </div>
            ))}
            <button
              type="button"
              className="
                flex
                items-center
                border
                border-gray-400
                rounded-sm
                hover:bg-gray-100
                transition-all
                duration-300
              "
            >
              <span className="px-2 py-1 text-xs text-gray-700 whitespace-nowrap">
                Dealership Hours
              </span>

              <span className="border-l border-gray-400 w-4 h-6 flex items-center justify-center cursor-pointer">
                <img
                  src={Arrow}
                  alt="Arrow"
                  className="w-2 h-2 object-contain"
                />
              </span>
            </button>
          </div>
          <nav className="flex items-center" aria-label="Topbar Navigation">
            <ul className="flex items-center gap-2">
              {socialIcons.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="
                      w-6
                      h-6
                      flex
                      cursor-pointer
                      items-center
                      justify-center
                      hover:opacity-70
                      transition-all
                    "
                    aria-label={item.alt}
                  >
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="object-contain"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
