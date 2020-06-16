import React from 'react'
import { Container, Row} from 'react-bootstrap'
import StageTitle from '../StageTitle/StageTitle'
import Create from '../Create/Create'
import Task from '../Task/Task'

const stage = props =>{
    console.log(props)
    const todoList= props.todo;
    const inProgressList = props.inProgress;
    const completedList = props.completed
    return(
        <Container>
            <Row>
                <StageTitle title={props.title}/>
                <Task />
                <Create />
            </Row>
        </Container>
    )
}

export default stage