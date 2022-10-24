import React from "react";
import "./about.css";
import { ReactComponent as AboutImg } from "../img/about.svg";

function About() {
  return (
    <div className="section-about about">
      <div className="section-center about-center">
        <article className="about-img">
          <AboutImg />
        </article>
      </div>
    </div>
  );
}

export default About;
