import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, FormControl, Container, NavItem } from 'react-bootstrap';

const menuItem = {
  margin: '10px',
  padding: '22px 10px 16px',
  fontSize: '17px',
  textDecoration: 'none',
  color:'#75a9d6'
};

const linkStyle = {
	textDecoration: 'none'
};

export default function Header() {
  return (
    <header className="ht-header">
      <Container>
        <Navbar bg="light" expand="lg" className="navbar-custom" style={{ margin: '0' }}>
          <Navbar.Brand href="index.html">
		  <Link to="/" style={linkStyle}>
              <img className="logo" src="images/logo1.png" alt="Logo" width="200" height="58" />
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse id="bs-example-navbar-collapse-1">
            <Nav className="flex-child-menu menu-left" style={{ display: 'flex', marginLeft: '12px' }}>
              <Link to="/home" style={linkStyle}>
                <NavItem style={menuItem}>Popular</NavItem>
              </Link>
              <Link to="/top-rated" style={linkStyle}>
                <NavItem style={menuItem}>Top Rated</NavItem>
              </Link>
              <Link to="/upcoming" style={linkStyle}>
                <NavItem style={menuItem}>Upcoming</NavItem>
              </Link>
            </Nav>
            <Nav className="flex-child-menu navbar-right">
              <Link to="/login" style={{ padding: '10px 8px', margin: '8px', textDecoration: 'none' }} >
                  LOG IN
              </Link>
              <Link to="/signup" style={linkStyle}>
                <Button variant="primary" className="signupLink" style={{ padding: '10px 18px', margin: '21px 8px', borderRadius:'20px' }}>
                  SIGN UP
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="top-search" style={{border:'none'}}>
          <FormControl as="select">
            <option value="united">TV show</option>
            <option value="saab">Others</option>
          </FormControl>
          <FormControl
            type="text"
            placeholder="Search for a movie, TV Show, or celebrity that you are looking for"
          />
        </div>
      </Container>
    </header>
  );
}


