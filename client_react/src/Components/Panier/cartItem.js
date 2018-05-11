"use strict";
import React from 'react';
import {Col, Row, Panel, Button, Label, Badge} from 'react-bootstrap';

class CartItem extends React.Component {

    render() {
        return (
            <Panel className='cartItem'>
                <Row>
                    <Col xs={12} sm={6}>
                        <h5><img src={this.props.cartItem.imagePath} height="42" width="42" />    {this.props.cartItem.nom} <Badge pullRight>Prix: {this.props.cartItem.prix} EUR </Badge></h5>
                    </Col>
                    <Col xs={6} sm={4}>
                        <p>quantité :
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            &nbsp;
                            <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
                        </p>
                    </Col>
                    <Col xs={6} sm={2}>
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                bsSize='small' bsStyle='danger'>X</Button>
                    </Col>
                    <hr/>
                </Row>
            </Panel>
        );
    }
}

export default CartItem;