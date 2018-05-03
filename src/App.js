import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home"
import Footer from "./Components/Footer";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <Header/>
         
          <Footer/>
        </div>
        </HashRouter>
     
    );
  }
}
 
export default Main;