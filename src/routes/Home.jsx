import React from "react";
import HomeImgSection from "../components/HomeImgSection";

function Home() {
  return (
    <>
      <HomeImgSection
        cName="HomeImgSection"
        Imgsrc="https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a0?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="ADVENTURE AWAITS"
        text="What are you waiting for?"
        btnClass="show"
        btnLink="/services"
        btnText="Get Started"
      />
    </>
  );
}

export default Home;
