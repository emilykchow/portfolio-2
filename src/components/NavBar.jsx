import React from "react";
import '../App.css';
import Home from "./Home";
import About from "./About";
import PortfolioImg from "./PortfolioImg";
import Contact from "./Contact";

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { NavLink, Link } from "react-router-dom";

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




function Navb() {
  // window.addEventListener("hashchange", function() { scrollBy(0, -50) });
  return (    
    <div className="Navbar-wrapper">
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
        <Link
              activeClass="active"
              className="nav-item-text"
              to="section1"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
            >Home</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about">
          <Link
              activeClass="active"
              className="nav-item-text"
              to="section2"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >About</Link>
            </Nav.Link>
          <Nav.Link href="#features">
          <Link
              activeClass="active"
              className="nav-item-text"
              to="section3"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >My Work</Link></Nav.Link>
          <Nav.Link href="#pricing">
          <Link
              activeClass="active"
              className="nav-item-text"
              to="section4"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              
            >Contact</Link>
          </Nav.Link>
        </Nav>
        </Container>
      </Navbar>


     </div>
   );
 }

export default Navb;