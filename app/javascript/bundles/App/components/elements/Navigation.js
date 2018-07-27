import React, { Component } from 'react';
import '../../App.css'
import { Navbar, NavItem } from 'react-materialize';
import Button from '../../../../../../node_modules/@material-ui/core/Button/Button.js';
import { runInDebugContext } from 'vm';

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
        <Navbar style={{backgroundColor: 'rgb(32,141,178)', fontFamily: 'Verdana', fontSize: '2em'}}>
          <NavItem href='/welcome'>Home</NavItem>
          <NavItem href='/learn'>Learn</NavItem>
          {checkAdmin(props)}
          <NavItem href='/social'>Social</NavItem>
          <NavItem href='#'>The Lab</NavItem>
          <NavItem href='/sounds'>Sound Packs</NavItem>
          <NavItem href='/compete'>Compete</NavItem>
          <NavItem href='/sell'>Sell</NavItem>
          <NavItem href='#'>The BML Story</NavItem>
        </Navbar>
      </div>
    )
  }

export default Navigation;
