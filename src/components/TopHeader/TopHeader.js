import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Slideshow from '../Slideshow/Slideshow';
import {Link} from 'react-router-dom'


const TopHeader = () => {
    return (
        <div style={{backgroundColor:'#000'}}>
            <Navbar  expand="lg" style={{backgroundColor:'#000'}}>
                <Container>
                    <Navbar.Brand className='text-white' href="#home">MIAMI SPRINTER VANS</Navbar.Brand>
                    <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                       
                        <Link className='text-white nav-link mr-5' to="/home">HOME</Link>
                            <Nav.Link className='text-white nav-link mr-5' href="#fleet">OUR FLEET</Nav.Link>
                            <Nav.Link className='text-white nav-link mr-5' href="#contact">CONTACT US</Nav.Link>
                            <Nav.Link className='text-white nav-link mr-5' href="#">GALLERY</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <h2 style={{color:'white',marginTop:'25%'}}>WELCOME TO<br/> MIAMI SPRINTER VANS</h2>
                    <br/><a className="btn btn-outline-success" href="#contact">Book Now</a>
                </div>
                <div className="col-md-7">
                    <Slideshow/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TopHeader;