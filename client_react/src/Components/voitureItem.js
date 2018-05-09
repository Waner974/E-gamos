"use strict";
import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';




class VoitureItem extends React.Component {
    state = {voitures:[]}
    componentDidMount(){
        fetch('/voitures')
            .then(res => res.json())
            .then(voitures => this.setState({voitures}));
    }
    props = {voitures : [
            {_id:'5af04ca28cf3a746a40b9df5',imagePath:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Audi_A6_C5_front_20070518.jpg',nom:'Audi A6',description:'rapide',prix:10000000,__v:0}
        ]};
    props = this.state;

    render() {
        return (
            <Row>
                {this.state.voitures.map(voiture =>


                        <div>
                            <Card key={voiture._id}>
                                <CardImg top width="50%" height="400px" src={voiture.imagePath} alt="" />
                                <CardBody>
                                    <CardTitle >{voiture.nom}</CardTitle>
                                    <CardSubtitle>Description</CardSubtitle>
                                    <CardText>{voiture.description}</CardText>
                                    <Button onClick={() => this.props.handleOnAdd(this.state.voitures)}  product={voiture}>Ajouter au Panier</Button>
                                </CardBody>
                            </Card>
                        </div>

                )}
            </Row>
        );
    }
}

export default VoitureItem;