import React from 'react';
import "../Navbar/Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const navbar = () => {
    return (
        <>
            <Navbar expand="lg" sticky='top' className="justify-content-between">
                <Nav.Item className='navtitle'>Victor Lim</Nav.Item>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item href="#home" className="navlinks">About</Nav.Item>
                            <Nav.Item href="#link" className="navlinks">Projects</Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                
            </Navbar>
            
        </>
    )
}

export default navbar; 