import React from "react";
import Navbar from "../components/Header/Navbar";
import TopBar from "../components/Header/TopBar";
import Header from "../components/Header/Header";
import HeroBanner from "../components/Hero/HeroBanner";
import CTASection from "../components/CTA/CTASection";
import ShowroomSection from "../components/Showroom/ShowroomSection";
import AboutSection from "../components/About/AboutSection";
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents";
import PromotionalVideo from "../components/PromotionalVideo/PromotionalVideo";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <CTASection />
      <ShowroomSection />
      <AboutSection />
      <div
        className="
    w-[95%]
    max-w-[1400px]
    mx-auto

    grid
    grid-cols-1
    lg:grid-cols-2

    gap-10
    lg:gap-14

    py-10
    md:py-14
  "
      >
        <NewsAndEvents />
        <PromotionalVideo />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
