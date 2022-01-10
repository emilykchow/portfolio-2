import React from "react";
import '../App.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer-wrapper font-type">
      <div className="footer-text">
        <h5>Living, learning, and leveling up one day at a time.</h5>
        <p>Technologies used to build this portfolio website: React, CSS, HTML, Bootstrap</p>
        <p>Copyright ⓒ {year} Emily Chow</p>
      </div>

        <div className="footer-icons social-icons">
          <a href="https://www.linkedin.com/in/chowemilyk/" target="_blank">
            <i className="fa fa-linkedin-square fa-2x"></i>
          </a>
          <a href="https://github.com/emilykchow" target="_blank">
            <i className="fa fa-github-square fa-2x"></i>
          </a>
        </div>
    </div>
  );
}

export default Footer;
