import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// Defualt pages
import Home from "./Home";
import Links from "./links";
import About from "./about";
import Projects from "./project";

/* Projects */
/* Points to index.js within folder by default */
import Birthday from "./Birthday/";
import Tours from "./Tours/";
import Matchday from "./Matchday";

// Navbar
import Navbar from "./Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                {/* exact prevents matching every path starting with "/" */}
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/birthday">
                    <Birthday />
                </Route>
                <Route path="/matchday">
                    <Matchday />
                </Route>
                <Route path="/tours">
                    <Tours />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/links">
                    <Links />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
