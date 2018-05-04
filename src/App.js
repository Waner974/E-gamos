import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home"
import Cars from "./Views/ListCars"
import Footer from "./Components/Footer";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <Header/>
          <Route exact={true} strict={true} path="/" component={Home}/>
          <Route path="/cars" component={Cars}/>
          <Footer/>
        </div>
        </HashRouter>
     
    );
  }
}
 
export default Main;