import React from 'react'
import { Container, Row} from 'react-bootstrap'
import StageTitle from '../StageTitle/StageTitle'
import Create from '../Create/Create'
import Task from '../Task/Task'

const stage = props =>{
    // console.log(props)
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