import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../styles/Navbar.css";
import {Link} from 'react-router-dom';

const navbar = () => {
    return (
        <>
            <Navbar expand="lg" sticky='top' className="justify-content-between">
                <Link className='links' to='/'><Nav.Item className='navtitle'>Victor Lim</Nav.Item></Link>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className='links' to='/about'><Nav.Item href="#home" className="navlinks">About</Nav.Item></Link>
                            <Link className='links' to='#'><Nav.Item href="#link" className="navlinks">Projects</Nav.Item></Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                
            </Navbar>
            
        </>
    )
}

export default navbar; 