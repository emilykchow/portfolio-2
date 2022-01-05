import React from "react";
import Navb from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PortfolioImg from "./components/PortfolioImg";
import Websites from "./components/Websites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Main from "./components/main";


import './App.css';

function App() {
  return (
    <div className="App">
      <Navb />
      <main />
      <Home />
      <element><About id="section2"/></element>
      
      <PortfolioImg />
      <Websites />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
