import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/RealNavBar.css' 

class RealNavBar extends Component {
    render() {
      return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="navbar-color">
          <Navbar.Brand href="#home">
            <img src={require('./img/tewh.png')} alt="logo" />
              | Texas Engineering World Health
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/mr">Member Resources</Nav.Link>
            <Nav.Link href="/supporters">Supporters</Nav.Link>
          </Nav>
        <Nav>
        <Nav.Link href="/contact">Contact</Nav.Link>
        {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
        </Nav.Link> */}
        </Nav>
    </Navbar.Collapse>
    </Navbar>
      );
    }
  }
  
  export default RealNavBar;