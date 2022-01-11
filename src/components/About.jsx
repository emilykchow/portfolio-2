import React from "react";
import '../App.css';
import { Card } from 'react-bootstrap';

function About({aos}) {
  return (
    <div className="About-wrapper bg-style" id="section2" >
      <h1 className="about-title font-type"
          >The Odyssey of Emily Chow</h1>
      <p data-aos="fade-down-right"
        data-aos-delay="50"
        data-aos-duration="1000">
          Who: A full-stack developer experience in building web applications. A life long learner.</p>
      <p data-aos="fade-down-left"
          data-aos-delay="50"
          data-aos-duration="1000">Passions: I am actively learning coding, cooking, knitting and other new diverse challenges.</p>
      <p data-aos="fade-down-right"
        data-aos-delay="50"
        data-aos-duration="1000">Education: Wilfrid Laurier University / General Assembly</p>
      </div>
  );
}

export default About;
