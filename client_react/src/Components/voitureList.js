"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions'
import {Grid} from 'react-bootstrap';
import VoitureItem from "./voitureItem";
import Cart from './cart'
import { Container, Row, Col } from 'reactstrap';


class VoitureList extends React.Component {
    state = {voitures:[]}
    componentDidMount(){
        fetch('/voitures')
            .then(res => res.json())
            .then(voitures => this.setState({voitures}));
        this.props = this.state;
    }

    dispachAddToCart(product) {

        this.props.addToCart(product);
    }
    renderProducts() {
        return (
            /*this.state.voitures.map((p) => {
                return (*/
            <VoitureItem handleOnAdd={this.dispachAddToCart.bind(this)} />
                /*);
            })*/
        );
    }

    render() {
        return (
            <Container>
                <Row><Cart /></Row>
                <Row>{this.renderProducts()}</Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        voitures: state.voitures
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(VoitureList);