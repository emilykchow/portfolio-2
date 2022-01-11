import React from "react";
import Navb from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PortfolioImg from "./components/PortfolioImg";
import Websites from "./components/Websites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();

  AOS.init({
    
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    debounceDelay: 50,
    throttleDelay: 99,
    
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

  });

  return (
    <div className="App">
      <Navb />
      <Home />
      <About/>
      <PortfolioImg />
      <Websites />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
