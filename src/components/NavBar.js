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
          <Nav.Link href="#features">About</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Entries</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Library</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            {currentUser ? <Logout/> : <Login/>}
          </Nav.Link>
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