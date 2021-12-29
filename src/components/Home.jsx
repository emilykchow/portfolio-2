import React from "react";
import Typical from "react-typical";
import "../App.css";
import "../Pictures/profilepic1.jpg";

function Home() {
  return (
    <div className="Home-wrapper">
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
          Contact Me
        </button>
        
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/chowemilyk/" target="_blank">
          <i className="fa fa-linkedin-square fa-lg"></i>
        </a>
        <a href="https://github.com/emilykchow" target="_blank">
          <i className="fa fa-github-square fa-lg"></i>
        </a>
      </div>
      </div>
      
      <div className="profile-pic">
        
      </div>
      

    </div>
  );
}

export default Home;
