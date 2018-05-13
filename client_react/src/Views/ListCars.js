import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cart from '../Components/Panier/cart';
import {App} from '../App';
class ListCars extends React.Component {
 
  render() {
    return (
      <Container>
          <Cart/>
      </Container>
    );
  }
    
}
   
 
export default ListCars;