"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits} from '../../actions/cartActions';
import {Col, Row, Panel, Badge} from 'react-bootstrap';
import CartItem from "./cartItem";
import './Cart.css';

class Cart extends React.Component {
    renderCart() {
        return (
            <Panel className='cartList' header='Cart' bsStyle='primary'>
                {this.cartList()}

            </Panel>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({id})
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({id, units})
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
              return (
                  <CartItem key={cartItem.id}
                            cartItem={cartItem}
                            onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                            onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                            handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />

              );
            })
        );
    }

    cartTotal() {
        return (
            <div className="cart__total">Total: {this.totalAmount(this.props.cart)} EUR</div>
        );
    }
    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum += item.prix * item.units;
            return acum;
        }, 0);
    }

    render() {
        if (this.props.cart.length !== 0) {
            return (
                    <div className="cart">
                        <h4>Panier</h4>
                        <hr/>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                {this.renderCart()}
                            </div>

                        </div>
                        {this.cartTotal()}
                    </div>

            );
        }

        return (
            <aside className='cart'>Panier vide</aside>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);