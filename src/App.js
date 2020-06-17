import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Nav/Nav'
import avatar from './Images/avatar.jpg'
import { Container, Col, Row, Image } from 'react-bootstrap';
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import StageTitle from './StageTitle/StageTitle'
import Create from './Create/Create'
import Task from './Task/Task'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: [],
      inProgress: [
        {
          id: 1,
          status: 'ON TRACK',
          taskName: 'Wireframe Homepage',
          hoursCompleted: 2,
          hoursBilled: 9.2,
        },
        {
          id: 2,
          status: 'OVER BUDGET',
          taskName: 'Wireframe Homepage',
          hoursCompleted: 11,
          hoursBilled: 9.2,
        }
      ],
      completed: [
        {
          id: 1,
          status: 'ON TRACK-COMPLETE',
          taskName: 'Wireframe Homepage',
          hoursCompleted: 9.2,
          hoursBilled: 9.2,
        }
      ]
    }

    this.loopingFunc = this.loopingFunc.bind(this)
  }

  /**
   * Below is a generalised function for looping through
   * the array,but for one reason or the other, it is not working.
   * I will look into it though
   */
////////////////////////////////////////////////////////////
  loopingFunc = arrayName => {
    arrayName.map((task, index) => {
      return <Task
        key={task.id}
        status={task.status}
        title={task.taskName}
        hoursBilled={task.hoursBilled}
        hoursCompleted={task.hoursCompleted}
      />
    })
  }
  /////////////////////////////////////////////////////////

  render() {

    const todoList = () => {
      if (this.state.todo.length < 0) {
        return null
      } else {
        //Array mapping function if array isn't empty
      }
    }

    // this.loopingFunc(this.state.inProgress);
    // this.loopingFunc(this.state.completed);
    const inProgressList =
      this.state.inProgress.map((task, index) => {
        return <Task
          key={task.id}
          status={task.status}
          title={task.taskName}
          hoursBilled={task.hoursBilled}
          hoursCompleted={task.hoursCompleted}
        />
      })

    const completedList = this.state.completed.map((task, index) => {
      return <Task
        key={task.id}
        status={task.status}
        title={task.taskName}
        hoursBilled={task.hoursBilled}
        hoursCompleted={task.hoursCompleted}
      />
    })

    return (
      <div className="App">
        <Nav />
        <Container className="main-container">
          <Row>
            <Col xs={12} md={6}>
              <Row className="avatar">
                <Image src={avatar} alt="avatar" width="30" height="30" roundedCircle />
                <span>+  New Member </span>
              </Row>
            </Col>
            <Col xs={12} md={6} className="col-create-plus">
              <div className="create-plusss">
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
          <Row>
            <Col xs={12} md={4} className="col-pad" >
              <StageTitle title="To do" />
              {todoList}
              <Create />
            </Col>
            <Col xs={12} md={4} className="col-pad">
              <StageTitle title="In progress" />
              {inProgressList}
              <Create />
            </Col>
            <Col xs={12} md={4} className="col-pad">
              <StageTitle title="Completed" />
              {completedList}
              <Create />
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default App;
