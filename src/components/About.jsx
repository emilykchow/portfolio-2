import React from "react";
import '../App.css';
import { Card } from 'react-bootstrap';

function About({aos}) {
  return (
    <div className="About-wrapper bg-style container" id="section2" >
        <div className="row">
        <h1 className="about-title font-type col-sm"
            >The Odyssey of Emily Chow</h1>
        <p data-aos="fade-down-right col-sm"
          data-aos-delay="50"
          data-aos-duration="1000">
            Who: A full-stack developer experience in building web applications. A life long learner.</p>
        <p data-aos="fade-down-left col-sm"
            data-aos-delay="50"
            data-aos-duration="1000">Passions: I am actively learning coding, cooking, knitting and other new diverse challenges.</p>
        <p data-aos="fade-down-right col-sm"
          data-aos-delay="50"
          data-aos-duration="1000">Education: Wilfrid Laurier University / General Assembly</p>
        </div>
    </div>
  );
}

export default About;
