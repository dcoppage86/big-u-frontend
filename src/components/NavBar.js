import React from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Logout from './Logout';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const NavigationBar = ({ currentUser }) => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">BIG-U</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            {currentUser ? <NavDropdown.Item href="/user-entries">Entries</NavDropdown.Item> : null}
            <NavDropdown.Item href="/Library">Library</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {currentUser ? <Logout/> : <Login/>} 
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

        
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps)(NavigationBar);