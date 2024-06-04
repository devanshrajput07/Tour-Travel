import React from "react";
import HeroSection from "../components/Hero";
import AboutImg from "../assets/night.jpg";

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
    </>
  );
}

export default About;
