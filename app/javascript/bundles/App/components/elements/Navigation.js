import React, { Component } from 'react';
import '../../App.css'
import Navbar from '../../../../../../node_modules/react-materialize/lib/Navbar.js';
import NavItem from '../../../../../../node_modules/react-materialize/lib/NavItem.js';
import Button from '../../../../../../node_modules/@material-ui/core/Button/Button.js';

const checkAdmin = (props) => {
  if (props.adminvalue === true) {
    return(
      <NavItem href='/seeadmin'>Learn Admin</NavItem>
    )
  }
}

const Navigation = (props) => {
    return (
      <div className="navigation">
        <Navbar left>
          <NavItem href='/welcome'>Home</NavItem>
          <NavItem href='/learn'>Learn</NavItem>
          {checkAdmin(props)}
          <NavItem href='/sounds'>Sounds</NavItem>
          <NavItem href='/compete'>Compete</NavItem>
          <NavItem href='/social'>Social</NavItem>
          <NavItem href='/sell'>Sell</NavItem>
          <NavItem href='#'>About</NavItem>
        </Navbar>
      </div>
    )
  }

export default Navigation;
