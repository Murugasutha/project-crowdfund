import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css';

function NavbarComponent(){
    return(
            <Navbar bg="white" expand="lg" className="py-4">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold navbar-brand-custom">
                        {/* <img src="https://placehold.co/600x400/lightgreen/white" alt="Logo" width="50" height="50" className="d-inline-block align-top "/>{' '} */}
                        CrowdFunding
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto gap-3 fs-5">
                            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                            <Nav.Link as={Link} to="/campaigns" className="nav-link-custom">Campaigns</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
                            <div className="d-flex gap-3 fs-5 align-items-center">  
                                <Button as={Link} to="/signup" variant="outline-success">Sign Up</Button>
                                <Button as={Link} to="/login" variant="success" className="custom-login-btn">Login</Button>
                            </div>
                            </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
    )
}

export default NavbarComponent;