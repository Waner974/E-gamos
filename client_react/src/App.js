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
import VoitureItem from "./Components/Voitures/voitureItem";
import VoitureList from "./Components/Voitures/voitureList";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux';
import logger from 'redux-logger';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

class Main extends Component {


    /*state = {voitures:[]}
    componentDidMount(){
        fetch('/voitures')
            .then(res => res.json())
            .then(voitures => this.setState({voitures}));
    }*/


    render() {
    return (
        <HashRouter>
        <div>
          <Header/>
            <Container>
                <Provider store={store}>
                <VoitureList/>
            </Provider>
            </Container>
          <Route path="/cars" component={Cars}/>
          <Footer/>
        </div>
        </HashRouter>

    );
    }
}
 
export default Main;