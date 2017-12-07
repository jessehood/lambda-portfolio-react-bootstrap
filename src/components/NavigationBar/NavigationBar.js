import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import './NavigationBar.css';
class NavigationBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar className="Navbar" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Jesse Hood</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

          </Nav>
          <Nav pullRight>
            <NavItem className="NavItem" eventKey={1} href="#">
              About Me
            </NavItem>
            <NavItem className="NavItem" eventKey={2} href="#">
              Projects
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
