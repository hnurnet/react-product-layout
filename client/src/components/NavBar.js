import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillSunFill } from "react-icons/bs";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg='light' expand="lg">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}><BsFillSunFill/> HNur</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
          <Nav.Link to="/cart" as={Link}>My Bag 0</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar