import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaEllipsisH } from "react-icons/fa";
import './StageTitle.css'

const stageTitle = props =>{
    // console.log(props)
    return(
        <Container>
            <Row>
                <h6 className="title">{props.title}</h6>
                <FaEllipsisH  className="icon-right ml-auto"/>
            </Row>
        </Container>
    )
}

export default stageTitle