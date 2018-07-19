import React, { Component } from 'react';
import '../../App.css'
import { Navbar, NavItem } from 'react-materialize';

class NavBar extends Component {
  render() {
    return (
      <div class="navigation">
        <Navbar left>
          <NavItem onClick={() => console.log('test click')}>Learn</NavItem>
          <NavItem href='#'>Sounds</NavItem>
          <NavItem href='#'>Compete</NavItem>
          <NavItem href='#'>Social</NavItem>
          <NavItem href='#'>Sell</NavItem>
          <NavItem href='#'>About</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
