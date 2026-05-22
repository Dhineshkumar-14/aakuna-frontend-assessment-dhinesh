import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <header className="w-[95%] mx-auto flex">
      <img src={Logo} className="h-25 w-25" alt="Logo" />
      <div className="flex flex-col">
        <TopBar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
