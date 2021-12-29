import React from "react";
import '../App.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer-wrapper font-type">
      <h5>Living, learning, and leveling up one day at a time.</h5>
      <p>Copyright ⓒ {year} Emily Chow</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/chowemilyk/" target="_blank">
            <i className="fa fa-linkedin-square fa-lg"></i>
          </a>
          <a href="https://github.com/emilykchow" target="_blank">
            <i className="fa fa-github-square fa-lg"></i>
          </a>
        </div>
    </div>
  );
}

export default Footer;
