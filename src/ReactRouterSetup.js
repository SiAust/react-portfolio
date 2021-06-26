import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// project pages
import Home from "./Home";
/* Points to index.js within folder by default */
import Birthday from "./Birthday/";
import Tours from "./Tours/";
import Reviews from "./Reviews/";
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
        <Route path="/birthday">
          <Birthday />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/tours">
          <Tours />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
