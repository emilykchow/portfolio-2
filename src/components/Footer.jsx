import React from "react";
import '../App.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer-wrapper">
      Living, learning, and leveling up one day at a time.
      <div className="footer-wrapper"> 
            <p>Copyright ⓒ {year} Emily Chow</p>
        </div>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/chowemilyk/" target="_blank">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a href="https://github.com/emilykchow" target="_blank">
          <i className="fa fa-github-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
