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
      <div className="flex justify-around">
        <NewsAndEvents />
        <PromotionalVideo />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
