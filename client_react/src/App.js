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
import VoitureItem from"./Components/voitureItem";
import VoitureList from "./Components/voitureList";
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
                {/*<Row>
                {this.state.voitures.map(voiture =>

                    <Col mb="4">
                        <div>
                            <Card key={voiture._id}>
                                <CardImg top width="100%" height="400px" src={voiture.imagePath} alt={voiture.nom} />
                                <CardBody>
                                    <CardTitle >{voiture.nom}</CardTitle>
                                    <CardSubtitle>Description</CardSubtitle>
                                    <CardText>{voiture.description}</CardText>
                                    <Button onClick={() => this.props.handleOnAdd(this.props.product)}>Ajouter au Panier</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                )}

                </Row>*/}<Provider store={store}>
                <VoitureList/>
            </Provider>
            </Container>
          {/*<Route exact={true} strict={true} path="/" component={Home}/>*/}
          <Route path="/cars" component={Cars}/>
          <Footer/>
        </div>
        </HashRouter>

    );
    }
}
 
export default Main;