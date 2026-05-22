import React from "react";
import Navbar from "../components/Header/Navbar";
import TopBar from "../components/Header/TopBar";
import Header from "../components/Header/Header";
import HeroBanner from "../components/Hero/HeroBanner";
import CTASection from "../components/CTA/CTASection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <CTASection />
    </div>
  );
};

export default Home;
