import React, { Component } from "react";
import NotificationSystem from 'react-notification-system';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home"
import Cars from "./Views/ListCars"
import Footer from "./Components/Footer";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Main extends Component {


    state = {voitures:[]}
    componentDidMount(){
        fetch('/voitures')
            .then(res => res.json())
            .then(voitures => this.setState({voitures}));
    }

    render() {
    return (
        <HashRouter>
        <div>
          <Header/>
            <Container>
                <Row>
                {this.state.voitures.map(voiture =>

                    <Col mb="4">
                        <div>
                            <Card key={voiture._id}>
                                <CardImg top width="100%" height="400px" src={voiture.imagePath} alt={voiture.nom} />
                                <CardBody>
                                    <CardTitle >{voiture.nom}</CardTitle>
                                    <CardSubtitle>Description</CardSubtitle>
                                    <CardText>{voiture.description}</CardText>
                                    <Button>Ajouter au Panier</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                )}

                </Row>
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