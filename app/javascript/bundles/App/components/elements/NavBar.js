import React, { Component } from 'react';
import '../../App.css'
import { Navbar, NavItem } from 'react-materialize';

class NavBar extends Component {
  render() {
    return (
      <div className="navigation">
        <navbar left>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/learn'>Learn</NavItem>
          <NavItem href='/seeadmin'>Learn Admin</NavItem>
          <NavItem href='#'>Sounds</NavItem>
          <NavItem href='#'>Compete</NavItem>
          <NavItem href='#'>Social</NavItem>
          <NavItem href='#'>Sell</NavItem>
          <NavItem href='#'>About</NavItem>
        </navbar>
      </div>
    )
  }
}

export default NavBar;
