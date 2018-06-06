import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
  </Switch>
);
