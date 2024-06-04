import React from "react";
import HeroSection from "../components/Hero";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <HeroSection
        cName="HeroSection"
        cName2="HeroSection_content"
        Imgsrc={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Contact;
