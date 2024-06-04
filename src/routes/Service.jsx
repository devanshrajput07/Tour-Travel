import React from "react";
import HeroSection from "../components/Hero";
import ServiceImg from "../assets/night.jpg";

function Service() {
  return (
    <>
      <HeroSection
        cName="HeroSection"
        cName2="HeroSection_content"
        Imgsrc={ServiceImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}

export default Service;
