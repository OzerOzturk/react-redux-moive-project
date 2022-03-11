import React from "react";
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import "../index.css";
import logo from "../movie-logo.png";



const NavBar = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="primary" expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="/">
          <img
              src={logo}
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt="movie-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto">
              <Nav.Link  href="/">Home</Nav.Link>
              <Nav.Link  href="/Actors">Actors</Nav.Link>
              <Nav.Link  href="/Movies">Movies</Nav.Link>
              <NavDropdown title="Genre" id="basic-nav-dropdown">
                <NavDropdown.Item href="Genre/Action">Action</NavDropdown.Item>
                <NavDropdown.Item href="Genre/Comedy">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="Genre/Horror">Horror</NavDropdown.Item>
                <NavDropdown.Item href="Genre/Romance">Romance</NavDropdown.Item>
                <NavDropdown.Item href="Genre/Drama">Drama</NavDropdown.Item> 
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
  )
  
};

export default NavBar;
