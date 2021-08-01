import React from 'react';
import { connect } from 'react-redux'
import Logout from './Logout';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavigationBar = ({ currentUser }) => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavLink exact className="navbar-brand" to ="/">BIG-U</NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            {currentUser ? <NavLink className="dropdown-item" exact to="/user-entries">Entries</NavLink> : null}
            {currentUser ? <NavLink className="dropdown-item" exact to="/library">Library</NavLink> : null}
            <NavLink className="dropdown-item" exact to="/contact">Contact Us</NavLink>
          </NavDropdown>
        </Nav>
        <Nav>
          {currentUser ? null : <NavLink exact className="nav-link" to="/signup">Sign Up</NavLink>}
          {currentUser ? <Logout/> : <NavLink exact className="nav-link" to="/login">Login</NavLink>}
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