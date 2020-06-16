import React from 'react'
import './Nav.css'
import avatar from '../Images/avatar.jpg'
import { Navbar, Nav, Image, Row, Badge } from 'react-bootstrap';
import { FaRegBell } from "react-icons/fa";


const nav = () => {
    return (
        <Navbar className="app-nav" variant="dark" expand="lg" >
            <Navbar.Brand >Projecto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link href="#home">Dashboard</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">
                        <FaRegBell className="notification" />
                        <Badge className="not-badge">2</Badge>
                    </Nav.Link>
                    <Nav.Link href="#link" >
                        <Row className="avatar">
                            <Image src={avatar} alt="avatar" width="30" height="30" roundedCircle />
                            <span className="avatar-name">Oluwatobi Peter</span>
                        </Row>
                        {/* <img
                            
                            src=""
                           
                            className="d-inline-block align-top"
                        />{' '} */}

                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default nav