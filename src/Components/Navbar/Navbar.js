import React , { Component , Fragment } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navigation = () => {
    
        return(
        <Fragment>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='Logo' href="#header" >logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <div>
                            <a href="#">Home</a>
                            <a href="#Skills">Skills</a>
                            <a href="#Profile">Profile</a>
                            <a href="#About">About</a>
                            <a href="#Work">Work</a>
                            <a href="#Footer">Contact</a> 
                            
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='num'>01068473529</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Fragment>
        )
    }



export default Navigation ;