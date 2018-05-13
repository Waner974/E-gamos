"use strict";
import React from 'react';
import '../../App.css';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class VoitureItem extends React.Component {
    state = {voitures:[]}
    componentDidMount(){
        fetch('/voitures')
            .then(res => res.json())
            .then(voitures => this.setState({voitures}));
    }

    render() {
        return (
            <ul className="product-list">
                {this.state.voitures.map(voiture =>

                    <li className="product-list__item">
                        <Card id="cardV" key={voiture.id}>
                            <CardImg height="135px" src={voiture.imagePath} alt="" />
                            <CardBody>
                                <CardTitle >{voiture.nom}</CardTitle>
                                <CardSubtitle>Description</CardSubtitle>
                                <CardText>{voiture.description}</CardText>
                                <Button onClick={() => this.props.handleOnAdd(voiture)}  product={voiture} >Ajouter au Panier</Button>
                            </CardBody>
                        </Card>
                    </li>

                )}
            </ul>
        );
    }
}

export default VoitureItem;