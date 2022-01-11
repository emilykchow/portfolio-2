import React from "react";
import Typical from "react-typical";
import "../App.css";
import "../Pictures/profilepic1.jpg";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Home() {
  return (
    <div className="Home-wrapper section1">
      <div className="home-left">

      <div className="home-text font-type">
        <h1>

        Hello, I'm <span className="emily-chow"><strong>Emily Chow.</strong></span>
        <br></br>
        I'm a
        <Typical 
        loop={Infinity}
        steps={[
          "Passionate Dev",
          1000,
          "Full-stack Developer",
          1000,
          "MERN Stack Developer",
          1000,
        ]}
        
        />
        </h1>
        <h4> Knack of building web applications with front and back end operations.
        {/* A reliable and detailed-oriented individual looking to work as software engineer. Offering expertise in Javascript, HTML, CSS and core web design. Graduate from General Assembly. */}</h4>
        <button className="btn primary-btn">
          <Link
              activeClass="active"
              className="nav-item-text"
              to="section4"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >Contact Me</Link>
        </button>  
      </div>
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chowemilyk/" target="_blank">
          <i className="fa fa-linkedin-square fa-2x"></i>
        </a>
        <a href="https://github.com/emilykchow" target="_blank">
          <i className="fa fa-github-square fa-2x"></i>
          {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
        </a>
      </div>
      </div>
      
      <div className="profile-pic">
        
      </div>
      

    </div>
  );
}

export default Home;
