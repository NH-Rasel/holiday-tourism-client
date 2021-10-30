import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '120px' }} src="https://i.ibb.co/L5qvNL0/holiday-tourism-1.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#destinations">Destinations</Nav.Link>
                            <NavDropdown title="Packages" id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/home#europe">Europe</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/home#asia">Asia</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/home#america">America</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={HashLink} to="/home#transport">Transport</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#aboutUs">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;