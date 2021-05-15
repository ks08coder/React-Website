import React from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Service from "./Service";
import Navbar from "./Navbar";
import Paths from "./Paths";
import Footer from "./Footer";
import "./index.css";
import { Switch, Route } from "react-router-dom";

const App = ()=> {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/Paths" component={Paths}/>
      <Route component={Error}/>
    </Switch>
    <Footer/>
    </> 
  );
}

export default App;
