"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {addToCart} from '../../actions/cartActions'
import VoitureItem from "./voitureItem";
import Cart from '../Panier/cart'
import './ProductList.css';


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
            <VoitureItem handleOnAdd={this.dispachAddToCart.bind(this)} />
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    {this.renderProducts()}
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
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