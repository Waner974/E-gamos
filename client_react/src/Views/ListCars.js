import React from 'react';
import { Alert } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import { ListGroup, ListGroupItem } from 'reactstrap';



class ListCars extends React.Component {
     
 
  render() {
    return (
      <Container>
        <Row>
          <Col sm="3">    <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup></Col>
          <Col sm="9">
        <Col>.col-6
        </Col>
          <Col>.col-6
        </Col>
          <Col>.col-6
        </Col>
          </Col>
        </Row>
      </Container>
    );
  }
    
}
   
 
export default ListCars;