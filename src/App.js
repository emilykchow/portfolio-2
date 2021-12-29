import React from "react";
import Navb from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Websites from "./components/Websites";
import Games from "./components/Games";
import Footer from "./components/Footer";

import webData from "./components/webData";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navb />
      <Home />
      <About />
      <Websites 
      
        // key={webData.id}
        // image={webData.image}
        // content={webData.content}
        // technologyUsed={webData.technologyUsed} 



        />
      <Games />
      <Footer />
    </div>
  );
}

export default App;
