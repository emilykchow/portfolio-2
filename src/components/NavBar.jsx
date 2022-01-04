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
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';



function Navb() {
  return (
    
<div className="Navbar-wrapper">


<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">My Work</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

{/* 
<ul className="nav navbar-nav">
      <li>
        <Home/>
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
        >
          Home
        </Link>
      </li>
      <li>
        <About/>
        <Link
          activeClass="active"
          className="test2"
          to="/About"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
        >
          About
        </Link>
      </li>
      <li>
        <PortfolioImg/>
        <Link
          activeClass="active"
          className="test3"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
        >
          Websites
        </Link>
      </li>
      <li>
        <Contact/>
        <Link
          activeClass="active"
          className="test1"
          to="test4"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
        >
          Contact
        </Link>
      </li>

    </ul>
 */}




     </div>
   );
 }

export default Navb;








//     
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container>
//   {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
//   <Link to="/">Home</Link>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto">

//     {/* <Nav.Link href="#features">About</Nav.Link> */}
//       <Nav.Link to="/about">About</Nav.Link>

//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">Websites</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Contact
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//   </Container>
// </Navbar>