import React from "react";
import HeroSection from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <HeroSection
        cName="HeroSection"
        cName2="HeroSection_content"
        Imgsrc={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
