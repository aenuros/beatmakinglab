import React, { Component } from 'react';
import '../../App.css'
import Navbar from '../../../../../../node_modules/react-materialize/lib/Navbar.js';
import NavItem from '../../../../../../node_modules/react-materialize/lib/NavItem.js';
import Button from '../../../../../../node_modules/@material-ui/core/Button/Button.js';

const checkAdmin1 = (props) => {
  if (props.adminvalue === true) {
    return(
      <NavItem href='/seeadmin'>Learn Admin</NavItem>
    )
  }
}

const checkAdmin2 = (props) => {
  if (props.adminvalue === true) {
    return(
      <NavItem href='/posts_admin'>Waves Admin</NavItem>
    )
  }
}

const checkLogin = (props) => {
  if (props.userlogin === true) {
    return(
      <NavItem href='/myposts'>My Posts</NavItem>
    )
  }
}

const Navigation = (props) => {
    return (
      <div className="navigation">
        <Navbar fixed left style={{backgroundColor: 'rgb(32,141,178)', fontFamily: 'Verdana', fontSize: '2em'}}>
          <NavItem href='/welcome'>Home</NavItem>
          <NavItem href='/learn'>Learn</NavItem>
          {checkAdmin1(props)}
          <NavItem href='/social'>Social</NavItem>
          <NavItem href='#'>The Lab</NavItem>
          <NavItem href='/sounds'>Sound Packs</NavItem>
          <NavItem href='/compete'>Compete</NavItem>
          <NavItem href='/sell'>Sell</NavItem>
          <NavItem href='#'>The BML Story</NavItem>
          <NavItem href='/postlist'>All Posts</NavItem>
          {checkLogin(props)}
          {checkAdmin2(props)}
        </Navbar>
      </div>
    )
  }

export default Navigation;
