import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="relative w-[90%] mx-auto flex flex-col lg:flex-row">
        <div className="absolute left-0 top-0 z-20">
          <img
            src={Logo}
            alt="Logo"
            className="
          w-[90px]
          sm:w-[110px]
          md:w-[110px]
          lg:w-[160px]
          xl:w-[180px]
          h-auto
          object-contain
        "
          />
        </div>
        <div
          className="
        flex-1
        flex
        flex-col
        ml-[95px]
        md:ml-[130px]
        lg:ml-[160px]
        xl:ml-[180px]
      "
        >
          <TopBar />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
