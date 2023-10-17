import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

const whiteText = { color: 'white' }; // Define a style for white text

function Header() {
    return (
        <header className="ht-header">
            <Container>
                <Navbar expand="lg" className="navbar-custom">
                    <Navbar.Brand href="index.html">
                        <img src="images/logo1.png" alt="Logo" width="200" height="58" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-child-menu menu-left">
                            <Nav.Link href="home.html" style={whiteText}>Home</Nav.Link>
                            <NavDropdown title="Movies" id="basic-nav-dropdown" style={whiteText}>
                                <NavDropdown.Item href="movielist.html">Latest</NavDropdown.Item>
                                <NavDropdown.Item href="moviesingle.html">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="seriessingle.html">Top Rated</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" style={whiteText}>Casts</Nav.Link>
                        </Nav>
                        <Nav className="flex-child-menu menu-right">
                            <Nav.Link href="#">Log In</Nav.Link>
                            <Button variant="primary" className="signupLink" href="#">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="top-search" style={{justifyContent: 'center', border: 'none'}}>
                    <Form style={{width:'50%'}}>
                        <FormControl type="text" placeholder="Search for a movie, TV Show, or celebrity that you are looking for" />
                    </Form>
                </div>
            </Container>
        </header>
    );
}

export default Header;
