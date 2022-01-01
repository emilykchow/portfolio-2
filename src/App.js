import React from "react";
import Navb from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Websites from "./components/Websites";
import Games from "./components/Games";
import Footer from "./components/Footer";


import './App.css';

function App() {
  return (
    <div className="App">
      <Navb />
      <Home />
      <Websites />
      <Games />
      <About />
      <Footer />
    </div>
  );
}

export default App;
