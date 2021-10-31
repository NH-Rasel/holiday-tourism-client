import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '120px' }} src="https://i.ibb.co/L5qvNL0/holiday-tourism-1.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-info fw-bold">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#destinations" className="text-info fw-bold">Destinations</Nav.Link>
                        <NavDropdown title="Packages" id="collapsible-nav-dropdown" className="text-info fw-bold">
                            <NavDropdown.Item as={HashLink} to="/home#europe" className="text-info fw-bold">Europe</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#asia" className="text-info fw-bold">Asia</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#america" className="text-info fw-bold">America</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={HashLink} to="/home#transport" className="text-info fw-bold">Transport</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blogs" className="text-info fw-bold">Blogs</Nav.Link>
                        <NavDropdown title="Admin Panel" id="collapsible-nav-dropdown" className="text-info fw-bold">

                            <Nav.Link as={Link} to="/myBooking" className="text-info fw-bold ps-2">My Booking</Nav.Link>
                            <Nav.Link as={Link} to="/addPackage" className="text-info fw-bold ps-2">Add Package</Nav.Link>
                            <Nav.Link as={Link} to="/manageBooking" className="text-info fw-bold ps-2">Manage Booking</Nav.Link>
                            <Nav.Link as={Link} to="/addBlog" className="text-info fw-bold ps-2">Add Blog</Nav.Link>
                        </NavDropdown>
                        <Navbar.Text>
                            <Link to="/login">{user?.displayName}</Link>
                        </Navbar.Text>
                        {
                            user?.email ?
                                <i onClick={logOut} className="fas fa-sign-out-alt text-info fw-bold d-flex align-items-center ps-2" style={{ cursor: 'pointer' }}></i> :
                                <Nav.Link as={Link} to="/login" className="text-info fw-bold d-flex align-items-center">Login<Nav.Link as={Link} to="/adminLogin"><i className="far fa-user-circle fw-bold ps-2">Admin</i></Nav.Link></Nav.Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;