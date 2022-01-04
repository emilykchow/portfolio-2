import React from "react";
import { Switch , Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import PortfolioImg from "./PortfolioImg";
import Contact from "./Contact";

const Main = () => (
    // <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/websites" component={PortfolioImg} />
    //     <Route path="/contact" component={Contact} />
    // </Routes>

    <Routes>
        <Route exact path="/">
            {Home}
        </Route>
        <Route path="/about">
            {About}
        </Route>
        <Route path="/websites">{PortfolioImg}</Route>
        <Route path="/contact">{Contact}</Route>
    </Routes>
)
export default Main;