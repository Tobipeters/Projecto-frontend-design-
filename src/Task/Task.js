import React from 'react'
import { Container, Badge, Image, Form } from 'react-bootstrap'
import './Task.css'
import { GiAlarmClock } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import avatar from '../Images/avatar.jpg'

const task = props => {
    // console.log(props)
    return (
        <Container className="task-cont">
            <div className="task-row-cont">
                <Badge className="custom-badge">ON TRACK</Badge>
                <Form.Check
                    className="switch-icon"
                    disabled
                    type="switch"
                    label=""
                    id="disabled-custom-switch"
                />
                <div>
                    <h4>Wireframe Homepage</h4>
                    <span>2 hours completed</span>
                    <br />
                    <span>9.2 hours billed</span>
                    <br />

                </div>
                <div className="ava-icon-cont">
                    <Image src={avatar} alt="avatar" width="30" height="30" roundedCircle />
                    <div className="card-icon">
                        <FaPencilAlt className="icon-pen"/>
                        <GiAlarmClock className="icon-clock"  />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default task