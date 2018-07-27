import React, { Component } from 'react';
import '../../App.css'
import Navbar from '../../../../../../node_modules/react-materialize/lib/Navbar.js';
import NavItem from '../../../../../../node_modules/react-materialize/lib/NavItem.js';
import Button from '../../../../../../node_modules/@material-ui/core/Button/Button.js';

const checkAdmin1 = (props) => {
  if (props.adminvalue === true) {
    return(
      <NavItem href='/seeadmin'>Tutorials Admin</NavItem>
    )
  }
}

const checkAdmin2 = (props) => {
  if (props.adminvalue === true) {
    return(
      <NavItem href='/posts_admin'>Lab Admin</NavItem>
    )
  }
}

const checkLogin = (props) => {
  if (props.userlogin === true) {
    return(
      <NavItem href='/myposts'>My Lab</NavItem>
    )
  }
}

const Navigation = (props) => {
    return (
      <div className="navigation">
   <Navbar left style={{backgroundColor: 'rgb(32,141,178)', fontFamily: 'Verdana', fontSize: '2em'}}>
     <NavItem href='/welcome'>Home</NavItem>



     <NavItem href='/postlist'>The Lab</NavItem>
     {checkLogin(props)}
     {checkAdmin2(props)}
     <NavItem href='/learn'>Tutorials</NavItem>
     {checkAdmin1(props)}
     <NavItem href='/sounds'>Sound Packs</NavItem>
     <NavItem href='/compete'>Compete</NavItem>
     <NavItem href='/sell'>Sell</NavItem>
     <NavItem href='#'>The BML Story</NavItem>
     <NavItem href='/social'>Social</NavItem>



   </Navbar>
</div>
    )
  }

export default Navigation;
