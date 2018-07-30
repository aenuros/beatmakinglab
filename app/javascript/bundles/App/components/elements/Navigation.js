import React, { Component } from 'react';
import '../../App.css'
import Navbar from '../../../../../../node_modules/react-materialize/lib/Navbar.js';
// import NavItem from '../../../../../../node_modules/react-materialize/lib/NavItem.js';
import Button from '../../../../../../node_modules/@material-ui/core/Button/Button.js';
import NavItem from './NavItem'




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
      <NavItem href='/myposts' route={props.path }>My Lab</NavItem>
    )
  }
}

const Navigation = (props) => {
    return (
      <div className="navigation">
        <Navbar fixed left style={{backgroundColor: 'rgb(32,141,178)', fontFamily: 'Verdana', fontSize: '2em'}}>
          <NavItem href='/home' route={props.path}>Home</NavItem>
          <NavItem href='/learn' route={props.path} >Learn</NavItem>
          {checkAdmin1(props)}
          <NavItem href='/social'  route={props.path}>Social</NavItem>
          <NavItem href='/sounds' route={props.path}>Sound Packs</NavItem>
          <NavItem href='/compete' route={props.path}>Compete</NavItem>
          <NavItem href='/sell' route={props.path} >Sell</NavItem>
          <NavItem href="http://www.beatmakinglab.com/" target="_blank"  route={props.path}>The BML Story</NavItem>
          <NavItem href='/postlist' route={props.path }>The Lab</NavItem>
          {checkLogin(props)}
          {checkAdmin2(props)}
        </Navbar>
      </div>
    )
  }

export default Navigation;
