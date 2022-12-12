import React, { Component }  from 'react';
import {Navbar,Nav ,NavDropdown,Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function navbar() {
    
  const navigate = useNavigate();
    const signoutfunc = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/signin");
      }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} onClick={signoutfunc}>
              Signout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default navbar;