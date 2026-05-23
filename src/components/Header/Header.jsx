import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Logo from "../../assets/images/logo.webp";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="relative w-[90%] mx-auto flex flex-col lg:flex-row">
        <div className="absolute left-0 top-0 z-20">
          <img
            src={Logo}
            alt="Markham Infiniti Logo"
            width={180}
            height={180}
            className="w-24 md:w-28 lg:w-40 xl:w-44 h-auto object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col ml-24 md:ml-32 lg:ml-40 xl:ml-44">
          <TopBar />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
