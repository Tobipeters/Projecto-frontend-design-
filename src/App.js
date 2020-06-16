import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Nav/Nav'
import avatar from './Images/avatar.jpg'
import { Container, Col, Row, Image } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Container className="main-container">
          <Row>
            <Col xs={6} md={6}>
              <Row>
                <Col xs={6} md={1} className="avatar" >
                  <Image src={avatar} alt="avatar" width="35" height="35" roundedCircle />
                </Col>
                <Col xs={6} md={11} className="avatar-name-padding">
                  New Member
             </Col>
              </Row>
            </Col>
            <Col xs={6} md={6}>
              <Row className="ml-auto">
                <Col xs={6} md={1} className="avatar" >
                  <Image src={avatar} alt="avatar" width="35" height="35" roundedCircle />
                </Col>
                <Col xs={6} md={11} className="avatar-name-padding">
                  Create a new task
             </Col>
              </Row>
            </Col>


          </Row>
        </Container>
      </div>
    )
  };
}

export default App;
