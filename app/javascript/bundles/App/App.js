import React, { Component } from 'react';
import axios from 'axios';
import Tutorials from './components/Tutorials';
import Form from './components/Form';

import Navigation from './components/elements/Navigation';
import Header from './components/elements/Header';
import UserInfo from './components/elements/UserInfo';

import Sell from './components/Sell';
import Compete from './components/Compete';
import './App.css'
import {Card, CardTitle} from 'react-materialize'

const token = document
.querySelector('meta[name="csrf-token"]')
.getAttribute('content');

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN':     token
}



class App extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
=======
      <span className="App">
>>>>>>> 7c27e2ab8239b5e73ebe2b1d885f234c039dd369
        <Navigation adminvalue={this.props.adminvalue} userlogin={this.props.userlogin}/>
        <UserInfo user={this.props.user}/>
      </span>
    );
  }
}

export default App;
