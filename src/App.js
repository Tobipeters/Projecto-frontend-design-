import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Nav/Nav'
import avatar from './Images/avatar.jpg'
import { Container, Col, Row, Image } from 'react-bootstrap';
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import Stage from './Stage/Stage'


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
              <Row className="avatar">
                <Image src={avatar} alt="avatar" width="30" height="30" roundedCircle />
                <span>+  New Member </span>
              </Row>
            </Col>
            <Col xs={6} md={6} className="col-create-plus">
              <div className="">
                <div className="create-plus">
                  <FaPlus className="plus-icon" />
                </div>
                <span className="plus-text">Create new task</span>
              </div>
            </Col>
          </Row>
          <Row className="row-pad">
            <Col className="col-pad">
              <h5>Homepage design <FaPencilAlt /> </h5>
            </Col>
          </Row>
          <Row className="">
            <Col xs={12} md={4} className="col-pad" >
              <Stage title="To do" />
            </Col>
            <Col xs={12} md={4} className="col-pad">
              <Stage title="In progress" />
            </Col>
            <Col xs={12} md={4} className="col-pad">
              <Stage title="Completed" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default App;
