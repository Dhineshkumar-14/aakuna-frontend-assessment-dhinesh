import React from "react";
import Navbar from "../components/Header/Navbar";
import TopBar from "../components/Header/TopBar";
import Header from "../components/Header/Header";
import HeroBanner from "../components/Hero/HeroBanner";
import CTASection from "../components/CTA/CTASection";
import ShowroomSection from "../components/Showroom/ShowroomSection";
import AboutSection from "../components/About/AboutSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <CTASection />
      <ShowroomSection />
      <AboutSection />
    </div>
  );
};

export default Home;
