"use strict";
import React from 'react';
import {Col, Row, Panel, Button, Label, Badge} from 'react-bootstrap';

class CartItem extends React.Component {

    render() {
        return (
            <Panel className='cartItem'>
                <Row>
                    <Col xs={12} sm={6}>
                        <h5><img src={this.props.cartItem.imagePath} height="42" width="60" />    {this.props.cartItem.nom}</h5> <Badge pullRight>Prix: {this.props.cartItem.prix} EUR </Badge>
                    </Col>
                    <Col xs={6} sm={4}>
                        <p>
                            <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>

                        </p>
                    </Col>
                    <Col xs={6} sm={2}>
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                bsSize='small' bsStyle='danger'>X</Button>
                    </Col>
                </Row>
                <hr/>
            </Panel>
        );
    }
}

export default CartItem;