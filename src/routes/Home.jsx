import React from "react";
import HeroSection from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <HeroSection
        cName="HeroSection"
        cName2="HeroSection_content"
        Imgsrc="https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a0?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="ADVENTURE AWAITS"
        text="What are you waiting for?"
        btnClass="show"
        btnLink="/services"
        btnText="Get Started"
      />
      <Destination />
      <Trip />
    </>
  );
}

export default Home;
