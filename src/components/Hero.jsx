import React from "react";
import "../components/Hero.css";

const HeroSection = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.Imgsrc} alt="homeImg" />
      <div className={props.cName2}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.btnLink} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
