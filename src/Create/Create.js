import React from 'react'
import { Container } from 'react-bootstrap'
import './Create.css'
import { FaPlus } from "react-icons/fa";


const create = props => {
    // console.log(props)
    return (
        <Container className="create-cont">
            <div className="create-row-cont">
                <div className="create-cont-div">
                    <div className="create-plus">
                        <FaPlus className="plus-icon"/>
                    </div>
                    <span className="plus-text">Create new task</span>
                </div>
            </div>
        </Container>
    )
}

export default create