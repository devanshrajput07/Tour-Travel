import React from "react";
import "../components/HomeImgSection.css";

const HomeImgSection = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.Imgsrc} alt="homeImg" />
      <div className="HomeImgSection_content">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.btnLink} className="{props.btnClass}">
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default HomeImgSection;
